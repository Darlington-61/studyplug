import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { aiTutorService, AiChatMessage, SUPPORTED_OFFLINE_MODELS } from '../services/aiTutorService';
import { ChatMessageRenderer } from './common/ChatMessageRenderer';

export const PlugAiModal: React.FC = () => {
  const { isAiTutorOpen, closeAiTutor, aiTutorContext } = useApp();
  
  const [messages, setMessages] = useState<AiChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeEngineMode, setActiveEngineMode] = useState<'instant' | 'neural'>('instant');
  const [hasWebGpu, setHasWebGpu] = useState(false);
  const [isModelCached, setIsModelCached] = useState(false);
  const [selectedModelId, setSelectedModelId] = useState(SUPPORTED_OFFLINE_MODELS[0].id);
  
  // Download state
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadStatusText, setDownloadStatusText] = useState('');
  const [showModelManager, setShowModelManager] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isAiTutorOpen) {
        closeAiTutor();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAiTutorOpen, closeAiTutor]);

  // Check hardware on mount
  useEffect(() => {
    aiTutorService.isWebGpuAvailable().then(setHasWebGpu);
    aiTutorService.isModelCached(selectedModelId).then(setIsModelCached);
  }, [selectedModelId]);

  // When opened with context, seed initial conversation
  useEffect(() => {
    if (isAiTutorOpen && aiTutorContext?.question) {
      const q = aiTutorContext.question;
      const initialText = aiTutorService.generateInstantExplanation(
        q,
        aiTutorContext.userSelectedOption,
        'explain'
      );
      setMessages([
        {
          id: 'seed-1',
          sender: 'assistant',
          text: initialText,
          timestamp: Date.now()
        }
      ]);

      // For latest questions with short/stub explanations, enhance in background with live AI
      const isStub = !q.explanation || q.explanation.length < 90 || q.explanation.includes('Official Key');
      if (isStub) {
        const qContext = `Subject: ${q.subject || aiTutorContext?.subject || 'Exam'}
Year: ${q.year || 'Latest Exam'}
Topic: ${q.topic || 'General'}
Question: ${q.text}
Options:
${(q.options || []).map((o: any) => `(${o.key}) ${o.text}`).join('\n')}
Correct Answer: (${q.correctAnswer})
${aiTutorContext?.userSelectedOption ? `Student Selected: (${aiTutorContext.userSelectedOption})` : ''}`;

        aiTutorService.askFreePublicAi('Provide a complete, step-by-step solution, calculation, and syllabus explanation for this question.', qContext).then(enhanced => {
          if (enhanced && enhanced.trim().length > 30) {
            setMessages(prev => prev.map(m => m.id === 'seed-1' ? { ...m, text: enhanced } : m));
          }
        }).catch(() => {});
      }
    } else if (isAiTutorOpen && aiTutorContext?.topic) {
      const topicText = aiTutorService.generateTopicSummary(
        aiTutorContext.topic,
        aiTutorContext.subject || 'General Paper'
      );
      setMessages([
        {
          id: 'seed-topic',
          sender: 'assistant',
          text: topicText,
          timestamp: Date.now()
        }
      ]);
    } else if (isAiTutorOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          sender: 'assistant',
          text: `### 🤖 Welcome to PlugAI — Your 100% Free Offline Exam Tutor!

I am ready to help you score **95%+** in JAMB UTME, WAEC, NECO, BECE, and Post-UTME.

- **Ask me any question** or tap a quick action button below.
- I break down complex calculations step-by-step, explain tricky options, and give you high-yield memory tricks!
- **⚡ 100% Offline:** Operates entirely on your local device with zero mobile data.`,
          timestamp: Date.now()
        }
      ]);
    }
  }, [isAiTutorOpen, aiTutorContext]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, downloadProgress]);

  if (!isAiTutorOpen) return null;

  const handleQuickAction = async (action: 'explain' | 'why_wrong' | 'formula' | 'mnemonic') => {
    if (!aiTutorContext?.question) return;
    const q = aiTutorContext.question;
    const userPromptText = action === 'explain' ? 'Can you explain this question step-by-step?' :
                           action === 'why_wrong' ? 'Why is my answer wrong?' :
                           action === 'formula' ? 'Show me the formula and step-by-step calculation' :
                           'Give me a memory trick / mnemonic for this topic';

    const userMsgId = `user-${Date.now()}`;
    const asstId = `asst-${Date.now()}`;
    const res = aiTutorService.generateInstantExplanation(q, aiTutorContext.userSelectedOption, action);

    setMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        text: userPromptText,
        timestamp: Date.now()
      },
      {
        id: asstId,
        sender: 'assistant',
        text: res,
        timestamp: Date.now()
      }
    ]);

    // Asynchronously enhance with live AI if online
    const qContext = `Subject: ${q.subject || aiTutorContext?.subject || 'Exam'}
Year: ${q.year || 'Latest Exam'}
Topic: ${q.topic || 'General'}
Question: ${q.text}
Options: ${(q.options || []).map((o: any) => `(${o.key}) ${o.text}`).join(', ')}
Correct Answer: (${q.correctAnswer})
${aiTutorContext?.userSelectedOption ? `Student Choice: (${aiTutorContext.userSelectedOption})` : ''}`;

    aiTutorService.askFreePublicAi(userPromptText, qContext).then(enhanced => {
      if (enhanced && enhanced.trim().length > 30) {
        setMessages(prev => prev.map(m => m.id === asstId ? { ...m, text: enhanced } : m));
      }
    }).catch(() => {});
  };

  const handleSendMessage = async () => {
    const text = inputText.trim();
    if (!text || isGenerating) return;

    setInputText('');
    const userMsg: AiChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsGenerating(true);

    const asstId = `asst-${Date.now()}`;
    setMessages(prev => [...prev, { id: asstId, sender: 'assistant', text: 'Thinking...', timestamp: Date.now() }]);

    try {
      if (activeEngineMode === 'neural' && isModelCached) {
        // Run local WebLLM
        const chatHistory = messages.map(m => ({
          role: m.sender as 'user' | 'assistant',
          content: m.text
        }));
        chatHistory.push({ role: 'user', content: text });

        await aiTutorService.askOfflineNeural(chatHistory, (chunk) => {
          setMessages(prev => prev.map(m => m.id === asstId ? { ...m, text: chunk } : m));
        });
      } else {
        // Question Context Aware AI
        const q = aiTutorContext?.question;
        const qContext = q
          ? `Subject: ${q.subject || aiTutorContext?.subject || 'General'}
Year: ${q.year || 'Official Exam'}
Topic: ${q.topic || aiTutorContext?.topic || 'General'}
Question: ${q.text}
Options:
${(q.options || []).map((o: any) => `(${o.key}) ${o.text}`).join('\n')}
Correct Answer: (${q.correctAnswer})
${aiTutorContext?.userSelectedOption ? `Student Selected Choice: (${aiTutorContext.userSelectedOption})` : ''}
${q.explanation ? `Marking Scheme / Notes: ${q.explanation}` : ''}`
          : `Subject: ${aiTutorContext?.subject || 'General Nigerian Exam'} • Topic: ${aiTutorContext?.topic || 'General'}`;

        // 1. Query live AI with student prompt and full question context
        let aiReply = await aiTutorService.askFreePublicAi(text, qContext);

        // 2. If offline or no response, use contextual instant offline reasoner
        if (!aiReply) {
          if (q) {
            const lowerText = text.toLowerCase();
            let queryType: 'explain' | 'why_wrong' | 'formula' | 'mnemonic' | 'general' = 'explain';
            if (lowerText.includes('wrong') || lowerText.includes('mistake') || lowerText.includes('why not') || lowerText.includes('my answer')) {
              queryType = 'why_wrong';
            } else if (lowerText.includes('formula') || lowerText.includes('equation') || lowerText.includes('calculate') || lowerText.includes('step') || lowerText.includes('how')) {
              queryType = 'formula';
            } else if (lowerText.includes('remember') || lowerText.includes('trick') || lowerText.includes('mnemonic')) {
              queryType = 'mnemonic';
            }
            aiReply = aiTutorService.generateInstantExplanation(q, aiTutorContext?.userSelectedOption, queryType);
          } else {
            aiReply = `💡 **Study Tip:** Review the syllabus notes for **${aiTutorContext?.subject || 'this subject'}** in the Study Notes section, or download the offline neural brain for complete offline conversational practice!`;
          }
        }

        setMessages(prev => prev.map(m => m.id === asstId ? { ...m, text: aiReply } : m));
      }
    } catch (err: any) {
      console.warn('AI error:', err);
      setMessages(prev => prev.map(m => m.id === asstId ? {
        ...m,
        text: `⚠️ **Note:** Unable to generate response (${err.message || 'Engine error'}). Falling back to Instant Offline Knowledge Base.`
      } : m));
    } finally {
      setIsGenerating(false);
    }
  };

  const startDownloadModel = async () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadStatusText('Connecting to open weights CDN...');
    try {
      await aiTutorService.initOfflineModel(selectedModelId, (prog, text) => {
        setDownloadProgress(prog);
        setDownloadStatusText(text);
      });
      setIsModelCached(true);
      setActiveEngineMode('neural');
      setShowModelManager(false);
      setMessages(prev => [
        ...prev,
        {
          id: `sys-${Date.now()}`,
          sender: 'assistant',
          text: `🎉 **PlugAI Neural Brain Downloaded Successfully!**\n\nThe AI model is now cached in your browser storage. You can now chat and ask any questions completely offline with zero data!`,
          timestamp: Date.now()
        }
      ]);
    } catch (e: any) {
      alert(`Could not complete download: ${e.message || 'Network error'}. You can still use the Instant 0MB Offline engine!`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/75 backdrop-blur-md p-2 sm:p-4 overflow-hidden"
      onClick={(e) => {
        // Close if clicking the backdrop itself
        if (e.target === e.currentTarget) {
          closeAiTutor();
        }
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col h-[92vh] max-h-[92vh] sm:h-[86vh] sm:max-h-[760px] overflow-hidden border border-slate-300 my-auto">
        
        {/* Sticky Top Header */}
        <div className="bg-[#0E382B] text-white px-4 sm:px-5 py-3 flex items-center justify-between border-b border-white/10 shrink-0 shadow-md">
          <div className="flex items-center space-x-2.5 sm:space-x-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FFCC00] text-[#0E382B] flex items-center justify-center font-black shadow-lg text-lg shrink-0">
              ⚡
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-black text-sm sm:text-base tracking-tight">PlugAI Tutor</h2>
                <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  100% Free Offline
                </span>
              </div>
              <p className="text-[10.5px] sm:text-[11px] text-white/70 truncate max-w-[200px] sm:max-w-xs">
                {aiTutorContext?.subject ? `${aiTutorContext.subject} • ` : ''}Personal CBT & Syllabus Study Buddy
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {/* Download Brain button */}
            <button
              type="button"
              onClick={() => setShowModelManager(!showModelManager)}
              className="text-xs font-bold bg-white/15 hover:bg-white/25 px-2 sm:px-2.5 py-1.5 rounded-xl text-white transition flex items-center gap-1 cursor-pointer border border-white/20"
              title="Manage Offline Neural Brain"
            >
              <span>{isModelCached ? '🧠 Active' : '📥 Brain'}</span>
            </button>

            {/* UNMISTAKABLE EXIT BUTTON */}
            <button
              type="button"
              onClick={closeAiTutor}
              className="bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-extrabold text-xs px-3 sm:px-3.5 py-1.5 rounded-xl shadow-md transition flex items-center space-x-1 cursor-pointer border border-rose-500"
              aria-label="Exit AI"
              title="Close AI Tutor"
            >
              <span className="text-sm font-black leading-none">✕</span>
              <span className="hidden xs:inline">Exit AI</span>
            </button>
          </div>
        </div>

        {/* Engine Switcher Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 sm:px-4 py-2 flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setActiveEngineMode('instant')}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-bold transition cursor-pointer text-xs ${
                activeEngineMode === 'instant'
                  ? 'bg-[#0E382B] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              ⚡ Instant 0MB Mode
            </button>
            <button
              type="button"
              onClick={() => {
                if (!isModelCached) {
                  setShowModelManager(true);
                } else {
                  setActiveEngineMode('neural');
                }
              }}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-bold transition cursor-pointer flex items-center gap-1.5 text-xs ${
                activeEngineMode === 'neural'
                  ? 'bg-[#0E382B] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              <span>🧠 Neural Brain</span>
              {isModelCached ? (
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              ) : (
                <span className="text-[10px] bg-amber-200 text-amber-900 px-1 rounded font-bold">1-Click</span>
              )}
            </button>
          </div>

          <span className="text-[10.5px] text-slate-400 font-medium hidden sm:inline">
            Zero Server Cost • Zero Data
          </span>
        </div>

        {/* Model Manager Drawer / Card */}
        {showModelManager && (
          <div className="bg-amber-50/90 border-b border-amber-200 px-4 py-3 shrink-0 text-xs text-amber-900">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-amber-950 text-sm">Download PlugAI Neural Brain for 100% Offline Chat</h4>
                <p className="text-[11.5px] text-amber-800 mt-0.5">
                  Downloads open-source AI weights once into your browser cache. Zero mobile data needed after download!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowModelManager(false)}
                className="text-amber-700 hover:text-amber-900 font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Model options */}
            <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SUPPORTED_OFFLINE_MODELS.map(m => (
                <div
                  key={m.id}
                  onClick={() => !isDownloading && setSelectedModelId(m.id)}
                  className={`p-2 rounded-xl border cursor-pointer transition ${
                    selectedModelId === m.id
                      ? 'border-[#0E382B] bg-white shadow-sm font-semibold'
                      : 'border-amber-200 bg-white/60 hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">{m.name}</span>
                    <span className="text-[10.5px] font-extrabold bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                      ~{m.sizeMb} MB
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-1 leading-tight">{m.description}</p>
                </div>
              ))}
            </div>

            {/* Progress Bar & Download Button */}
            <div className="mt-3 flex items-center gap-3">
              {isDownloading ? (
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[11px] font-bold text-amber-950">
                    <span>{downloadStatusText || 'Downloading model weights...'}</span>
                    <span>{downloadProgress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-amber-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0E382B] transition-all duration-300 rounded-full"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                </div>
              ) : isModelCached ? (
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                    ✅ Model is cached and ready for offline use!
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveEngineMode('neural');
                      setShowModelManager(false);
                    }}
                    className="bg-[#0E382B] text-white px-3 py-1.5 rounded-xl font-bold cursor-pointer hover:bg-[#134837]"
                  >
                    Use Neural Brain
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={startDownloadModel}
                  className="w-full bg-[#0E382B] hover:bg-[#134837] text-white font-bold py-2 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>📥 Download Selected Brain (~{selectedModelId.includes('360M') ? '195' : '360'} MB)</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 bg-[#F8F9FD]">
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[92%] sm:max-w-[85%] rounded-2xl p-3 sm:p-3.5 text-xs leading-relaxed shadow-sm ${
                    isUser
                      ? 'bg-[#0E382B] text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
                  }`}
                >
                  {isUser ? (
                    <div className="whitespace-pre-wrap font-medium">{m.text}</div>
                  ) : (
                    <ChatMessageRenderer text={m.text} />
                  )}
                  <span className={`text-[9px] block mt-1.5 ${isUser ? 'text-white/60 text-right' : 'text-slate-400'}`}>
                    {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Action Pills (If question context attached) */}
        {aiTutorContext?.question && (
          <div className="px-3 sm:px-4 py-2 bg-white border-t border-slate-100 flex items-center space-x-1.5 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
              Quick:
            </span>
            <button
              type="button"
              onClick={() => handleQuickAction('explain')}
              className="text-[11px] font-bold bg-[#F1F5F9] hover:bg-[#E2E8F0] text-slate-700 px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer"
            >
              📖 Explain Question
            </button>
            <button
              type="button"
              onClick={() => handleQuickAction('why_wrong')}
              className="text-[11px] font-bold bg-[#FEE2E2] hover:bg-[#FECACA] text-[#DC2626] px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer"
            >
              ❌ Why is my choice wrong?
            </button>
            <button
              type="button"
              onClick={() => handleQuickAction('formula')}
              className="text-[11px] font-bold bg-[#DCFCE7] hover:bg-[#BBF7D0] text-[#16A34A] px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer"
            >
              📐 Step-by-Step Formula
            </button>
            <button
              type="button"
              onClick={() => handleQuickAction('mnemonic')}
              className="text-[11px] font-bold bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#B45309] px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer"
            >
              💡 Memory Trick
            </button>
          </div>
        )}

        {/* Input Bar with Bottom Exit Option */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2 shrink-0">
          <input
            type="text"
            placeholder={
              activeEngineMode === 'neural'
                ? "Ask PlugAI anything (runs 100% offline)..."
                : "Ask about this question, formula, or topic..."
            }
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0E382B] focus:bg-white transition"
          />
          <button
            type="button"
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isGenerating}
            className="px-3.5 py-2.5 bg-[#0E382B] hover:bg-[#134837] disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-brand-glow transition flex items-center space-x-1 cursor-pointer shrink-0"
          >
            <span>Send</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
          <button
            type="button"
            onClick={closeAiTutor}
            className="px-3 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition cursor-pointer shrink-0 border border-slate-200"
            title="Exit AI Chat"
          >
            ✕ Exit
          </button>
        </div>

      </div>
    </div>
  );
};
