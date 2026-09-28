import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { aiTutorService, AiChatMessage, SUPPORTED_OFFLINE_MODELS } from '../services/aiTutorService';
import { ChatMessageRenderer } from './common/ChatMessageRenderer';

const HIGH_YIELD_DIAGRAMS = [
  {
    id: 'caliper',
    title: 'Vernier Caliper Scale',
    subject: 'Physics',
    topic: 'Units & Measurement',
    caption: 'Main scale reading in cm + coinciding vernier mark (accuracy 0.01 cm)',
    svg: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="120" fill="#0C251F" rx="8"/><line x1="20" y1="40" x2="300" y2="40" stroke="#FFD600" stroke-width="3"/><text x="25" y="30" fill="#E6F1EE" font-size="12" font-family="monospace">0   1   2   3   4   5 cm</text><rect x="65" y="44" width="130" height="50" fill="#143A30" stroke="#34D399" rx="4"/><line x1="65" y1="44" x2="65" y2="80" stroke="#FFD600" stroke-width="2"/><text x="72" y="65" fill="#34D399" font-size="11" font-weight="bold">Vernier: 0.01cm</text><text x="72" y="82" fill="#E6F1EE" font-size="10">Coincidence: #4 = 0.04cm</text></svg>`
  },
  {
    id: 'manometer',
    title: 'U-Tube Liquid Manometer',
    subject: 'Physics',
    topic: 'Fluid Pressure',
    caption: 'Gas pressure vs Atmospheric pressure (P = P_atm + hρg)',
    svg: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="120" fill="#0C251F" rx="8"/><path d="M 60 20 L 60 90 A 30 30 0 0 0 120 90 L 120 20" fill="none" stroke="#38BDF8" stroke-width="12" stroke-linecap="round"/><circle cx="60" cy="20" r="14" fill="#0284C7"/><text x="48" y="24" fill="#FFFFFF" font-size="10" font-weight="bold">GAS</text><line x1="120" y1="40" x2="160" y2="40" stroke="#FFD600" stroke-dasharray="3,3"/><line x1="120" y1="70" x2="160" y2="70" stroke="#FFD600" stroke-dasharray="3,3"/><text x="165" y="58" fill="#FFD600" font-size="12" font-weight="bold">Δh = 14 cmHg</text></svg>`
  },
  {
    id: 'rectifier',
    title: 'Full-Wave Bridge Rectifier',
    subject: 'Physics',
    topic: 'Semiconductors',
    caption: '4-Diode bridge converting AC into DC output',
    svg: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="120" fill="#0C251F" rx="8"/><polygon points="160,20 220,60 160,100 100,60" fill="none" stroke="#FFD600" stroke-width="2"/><circle cx="160" cy="20" r="5" fill="#34D399"/><circle cx="220" cy="60" r="5" fill="#34D399"/><circle cx="160" cy="100" r="5" fill="#34D399"/><circle cx="100" cy="60" r="5" fill="#34D399"/><text x="25" y="65" fill="#38BDF8" font-size="11" font-weight="bold">AC IN ~</text><text x="235" y="65" fill="#34D399" font-size="11" font-weight="bold">DC OUT +</text></svg>`
  },
  {
    id: 'cell',
    title: 'Plant vs Animal Cell Organelles',
    subject: 'Biology',
    topic: 'Cell Biology',
    caption: 'Cell wall, chloroplast, vacuole, mitochondria & nucleus',
    svg: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="120" fill="#0C251F" rx="8"/><rect x="30" y="20" width="110" height="80" rx="16" fill="#14532D" stroke="#4ADE80" stroke-width="3"/><circle cx="85" cy="60" r="16" fill="#166534"/><text x="50" y="64" fill="#BBF7D0" font-size="10">Plant Cell</text><ellipse cx="230" cy="60" rx="65" ry="40" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/><text x="195" y="64" fill="#BAE6FD" font-size="10">Animal Cell</text></svg>`
  },
  {
    id: 'venn',
    title: '3-Set Venn Diagram Intersections',
    subject: 'Mathematics',
    topic: 'Sets & Logic',
    caption: 'Union, universal set and intersections: n(A ∪ B ∪ C)',
    svg: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="120" fill="#0C251F" rx="8"/><circle cx="130" cy="55" r="35" fill="none" stroke="#F43F5E" stroke-width="2"/><circle cx="180" cy="55" r="35" fill="none" stroke="#3B82F6" stroke-width="2"/><circle cx="155" cy="80" r="35" fill="none" stroke="#10B981" stroke-width="2"/><text x="110" y="45" fill="#FDA4AF" font-size="11" font-weight="bold">A</text><text x="195" y="45" fill="#93C5FD" font-size="11" font-weight="bold">B</text><text x="150" y="110" fill="#6EE7B7" font-size="11" font-weight="bold">C</text><text x="145" y="68" fill="#FACC15" font-size="9" font-weight="bold">A∩B∩C</text></svg>`
  },
  {
    id: 'circle',
    title: 'Circle Theorems: Angle at Centre',
    subject: 'Mathematics',
    topic: 'Geometry',
    caption: 'Angle subtended by an arc at centre is twice angle at circumference (2θ vs θ)',
    svg: `<svg viewBox="0 0 320 120" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="120" fill="#0C251F" rx="8"/><circle cx="160" cy="60" r="45" fill="none" stroke="#E2E8F0" stroke-width="2"/><circle cx="160" cy="60" r="3" fill="#F59E0B"/><line x1="125" y1="85" x2="160" y2="60" stroke="#F59E0B" stroke-width="2"/><line x1="195" y1="85" x2="160" y2="60" stroke="#F59E0B" stroke-width="2"/><line x1="125" y1="85" x2="160" y2="15" stroke="#38BDF8" stroke-width="1.5"/><line x1="195" y1="85" x2="160" y2="15" stroke="#38BDF8" stroke-width="1.5"/><text x="153" y="52" fill="#FBBF24" font-size="11" font-weight="bold">2θ</text><text x="156" y="28" fill="#38BDF8" font-size="11" font-weight="bold">θ</text></svg>`
  }
];

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

  // Image search / attachment state & Exit confirmation
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [attachedImageCaption, setAttachedImageCaption] = useState<string>('');
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showDiagramPicker, setShowDiagramPicker] = useState(false);
  const [diagramSearchTerm, setDiagramSearchTerm] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

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
${(Array.isArray(q.options) ? q.options : []).map((o: any) => `(${o.key}) ${o.text}`).join('\n')}
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
          text: `### Hi, Darlington! 👋
What would you like to learn today?

• Ask me to explain any difficult concept or formula
• Ask a past question for step-by-step working and solutions
• Get high-yield memory tricks and study techniques

Type your question below or tap any of the quick guides to start.`,
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
Options: ${(Array.isArray(q.options) ? q.options : []).map((o: any) => `(${o.key}) ${o.text}`).join(', ')}
Correct Answer: (${q.correctAnswer})
${aiTutorContext?.userSelectedOption ? `Student Choice: (${aiTutorContext.userSelectedOption})` : ''}`;

    aiTutorService.askFreePublicAi(userPromptText, qContext).then(enhanced => {
      if (enhanced && enhanced.trim().length > 30) {
        setMessages(prev => prev.map(m => m.id === asstId ? { ...m, text: enhanced } : m));
      }
    }).catch(() => {});
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('Please choose an image under 8MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setAttachedImage(reader.result as string);
        setAttachedImageCaption(file.name || 'Attached Page Photo');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = async () => {
    const text = inputText.trim();
    if ((!text && !attachedImage) || isGenerating) return;

    const currentImg = attachedImage;
    const currentCaption = attachedImageCaption;
    setAttachedImage(null);
    setAttachedImageCaption('');
    setInputText('');

    const userMsgId = `user-${Date.now()}`;
    const userMsg: AiChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: text || (currentCaption ? `Please explain this diagram: ${currentCaption}` : 'Please explain this question/page image step-by-step.'),
      imageUrl: currentImg || undefined,
      timestamp: Date.now()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsGenerating(true);

    const asstId = `asst-${Date.now()}`;
    const lowerText = text.toLowerCase().trim();
    const isExitWord = ['exit', 'quit', 'bye', 'goodbye', 'see you', 'done for now', 'close'].includes(lowerText);

    if (isExitWord) {
      setMessages(prev => [
        ...prev,
        {
          id: asstId,
          sender: 'assistant',
          text: `### 👋 Great Study Session Today!\n\n*"Small efforts create big results."*\n\nYou did a fantastic job reviewing questions and syllabus concepts today. Rest your brain, stay confident, and remember that consistent practice is what guarantees **300+ in JAMB** and **straight A's in WAEC/NECO**.\n\nYou can click **"✕ Exit Session"** below or return whenever you are ready to master your next topic!`,
          timestamp: Date.now()
        }
      ]);
      setIsGenerating(false);
      return;
    }

    setMessages(prev => [...prev, { id: asstId, sender: 'assistant', text: '__TYPING__', timestamp: Date.now() }]);

    try {
      if (activeEngineMode === 'neural' && isModelCached) {
        // Run local WebLLM
        const chatHistory = messages.map(m => ({
          role: m.sender as 'user' | 'assistant',
          content: m.text
        }));
        chatHistory.push({
          role: 'user',
          content: currentImg
            ? `${text || 'Analyze this question/diagram'}\n[Attached Image/Diagram: ${currentCaption || 'Exam Page'}]`
            : text
        });

        await aiTutorService.askOfflineNeural(chatHistory, (chunk) => {
          setMessages(prev => prev.map(m => m.id === asstId ? { ...m, text: chunk } : m));
        });
      } else {
        // Question & Image Context Aware AI
        const q = aiTutorContext?.question;
        const imgContext = currentImg ? `\n[ATTACHED EXAM DIAGRAM/PAGE]: ${currentCaption || 'Student provided a photo of the exam diagram/question'}` : '';
        const qContext = q
          ? `Subject: ${q.subject || aiTutorContext?.subject || 'General'}
Year: ${q.year || 'Official Exam'}
Topic: ${q.topic || aiTutorContext?.topic || 'General'}
Question: ${q.text}
Options:
${(Array.isArray(q.options) ? q.options : []).map((o: any) => `(${o.key}) ${o.text}`).join('\n')}
Correct Answer: (${q.correctAnswer})
${aiTutorContext?.userSelectedOption ? `Student Selected Choice: (${aiTutorContext.userSelectedOption})` : ''}
${q.explanation ? `Marking Scheme / Notes: ${q.explanation}` : ''}${imgContext}`
          : `Subject: ${aiTutorContext?.subject || 'Nigerian Curriculum Exam'} • Topic: ${aiTutorContext?.topic || 'General'}${imgContext}`;

        // 1. Query live AI with student prompt and full question context
        let aiReply = await aiTutorService.askFreePublicAi(text || 'Provide step by step solution and diagram breakdown', qContext);

        // 2. If offline or no response, use contextual instant offline reasoner
        if (!aiReply) {
          if (currentImg) {
            aiReply = `### 🔍 PlugAI Visual Diagram / Page Breakdown\n\n**Visual Reference:** ${currentCaption || 'Attached Exam Diagram'}\n\n1. **Core Syllabus Principles:**\n   This problem tests the key principles of **${aiTutorContext?.subject || 'the curriculum'}** (${aiTutorContext?.topic || 'Syllabus Topic'}).\n\n2. **Governing Formula / Mathematical Relationship:**\n   - Identify zero-reference lines, dimensions, or coordinates marked on the diagram.\n   - Apply fundamental conservation equations and standard definitions.\n\n3. **Examiner Strategy for Diagram Questions:**\n   - In WAEC & JAMB, always verify whether scales or axes require unit conversions (e.g., $cm$ to $m$, $ms$ to $s$).\n   - Cross-check options against physical impossibility (e.g., negative Kelvin temperatures or inverted current flows).\n\n*⚡ Generated instantly by StudyPlug AI Exam Engine.*`;
          } else if (q) {
            const queryLower = text.toLowerCase();
            let queryType: 'explain' | 'why_wrong' | 'formula' | 'mnemonic' | 'general' = 'explain';
            if (queryLower.includes('wrong') || queryLower.includes('mistake') || queryLower.includes('why not') || queryLower.includes('my answer')) {
              queryType = 'why_wrong';
            } else if (queryLower.includes('formula') || queryLower.includes('equation') || queryLower.includes('calculate') || queryLower.includes('step') || queryLower.includes('how')) {
              queryType = 'formula';
            } else if (queryLower.includes('remember') || queryLower.includes('trick') || queryLower.includes('mnemonic')) {
              queryType = 'mnemonic';
            }
            aiReply = aiTutorService.generateInstantExplanation(q, aiTutorContext?.userSelectedOption, queryType);
          } else {
            aiReply = `💡 **Study Tip:** Review the syllabus notes for **${aiTutorContext?.subject || 'this subject'}** in the Classroom Study Notes, or download the offline neural brain for complete offline conversational practice!`;
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

  const svgDataUri = (svgStr: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svgStr)}`;

  const filteredDiagrams = HIGH_YIELD_DIAGRAMS.filter(d =>
    diagramSearchTerm.trim() === '' ||
    d.title.toLowerCase().includes(diagramSearchTerm.toLowerCase()) ||
    d.subject.toLowerCase().includes(diagramSearchTerm.toLowerCase()) ||
    d.topic.toLowerCase().includes(diagramSearchTerm.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-md p-2 sm:p-4 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setShowExitConfirm(true);
        }
      }}
    >
      <div className={`relative w-full max-w-2xl bg-white text-[#10201D] border-slate-300 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col h-[92vh] max-h-[92vh] sm:h-[86vh] sm:max-h-[760px] overflow-hidden border my-auto transition-colors duration-200`}>

        {/* Exit Confirmation Dialog */}
        {showExitConfirm && (
          <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className={`w-full max-w-sm p-5 rounded-2xl shadow-2xl border text-center animate-card-scale-in ${
              'bg-white border-slate-200 text-slate-800'
            }`}>
              <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-2xl flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
                🎓
              </div>
              <h3 className="font-bold text-base tracking-tight">Exit AI Tutor Session?</h3>
              <p className={`text-xs mt-1.5 mb-4 leading-relaxed ${'text-slate-500'}`}>
                Your AI chat history and syllabus drills are safely saved. Continue practicing anytime!
              </p>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setShowExitConfirm(false)}
                  className={`flex-1 py-2.5 rounded-xl border font-bold text-xs transition cursor-pointer ${
                    'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Continue Studying
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowExitConfirm(false);
                    closeAiTutor();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition cursor-pointer shadow-xs"
                >
                  Exit Session
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search Image / Diagram Gallery Drawer */}
        {showDiagramPicker && (
          <div className="absolute inset-0 z-40 bg-black/70 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-2 sm:p-4">
            <div className={`w-full max-w-lg rounded-2xl sm:rounded-3xl border shadow-2xl p-4 flex flex-col max-h-[82vh] overflow-hidden ${
              'bg-white border-slate-200 text-slate-800'
            }`}>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">🖼️</span>
                  <div>
                    <h3 className="font-bold text-sm leading-tight">Search Diagrams &amp; Page Images</h3>
                    <p className={`text-[11px] ${'text-slate-500'}`}>
                      Select a syllabus diagram or snap/upload from your camera
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowDiagramPicker(false)}
                  className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center transition cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Upload Options Row */}
              <div className="py-3 flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    fileInputRef.current?.click();
                    setShowDiagramPicker(false);
                  }}
                  className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-xl bg-[#004D40] hover:bg-[#003B32] text-white font-bold text-xs shadow-xs transition cursor-pointer"
                >
                  <span>📷</span>
                  <span>Snap / Upload Question</span>
                </button>
              </div>

              {/* Search Bar for Diagrams */}
              <div className="pb-2 shrink-0">
                <input
                  type="text"
                  placeholder="Search diagrams (Caliper, Manometer, Cell, Rectifier, Venn...)"
                  value={diagramSearchTerm}
                  onChange={(e) => setDiagramSearchTerm(e.target.value)}
                  className={`w-full px-3 py-2 rounded-xl text-xs border focus:outline-none transition ${
                    'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-[#004D40]'
                  }`}
                />
              </div>

              {/* High-Yield Diagram List */}
              <div className="flex-1 overflow-y-auto space-y-2 py-1 pr-1">
                {filteredDiagrams.map((diag) => (
                  <div
                    key={diag.id}
                    onClick={() => {
                      setAttachedImage(svgDataUri(diag.svg));
                      setAttachedImageCaption(`${diag.title} (${diag.subject} • ${diag.topic})`);
                      setShowDiagramPicker(false);
                    }}
                    className={`p-2.5 rounded-xl border flex items-center space-x-3 cursor-pointer transition ${
                      'border-slate-200 bg-slate-50 hover:border-[#004D40] hover:bg-white shadow-xs'
                    }`}
                  >
                    <div
                      className="w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10"
                      dangerouslySetInnerHTML={{ __html: diag.svg }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs truncate">{diag.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-bold bg-emerald-500/20 text-emerald-400">
                          {diag.subject}
                        </span>
                      </div>
                      <p className={`text-[10.5px] mt-0.5 truncate ${'text-slate-500'}`}>
                        {diag.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Hidden Camera/File Upload Input */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageFileChange}
          className="hidden"
        />

        {/* Sticky Top Header (Matching Image 1 Design System) */}
        <div className="bg-[#004D40] text-white px-4 sm:px-5 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0 shadow-subtle">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#003B32] border border-[#FFD600]/40 flex items-center justify-center text-base shadow-xs">
              🎓
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-bold text-[15px] tracking-tight text-white">StudyPlug Tutor</h2>
                <span className="text-[10px] font-semibold text-emerald-200 bg-[#003B32] px-2 py-0.5 rounded-full border border-white/10">
                  JAMB • WAEC
                </span>
              </div>
              <p className="text-[11px] text-emerald-100/90 truncate max-w-[200px] sm:max-w-xs">
                {aiTutorContext?.subject ? `${aiTutorContext.subject} • ` : ''}Your Personal Exam Guide
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {/* Close / Exit Button */}
            <button
              type="button"
              onClick={() => setShowExitConfirm(true)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center transition cursor-pointer"
              aria-label="Close Tutor"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Model Manager Drawer / Card */}
        {showModelManager && (
          <div className={`${'bg-amber-50/90 border-amber-200 text-amber-900'} border-b px-4 py-3 shrink-0 text-xs`}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className={`font-bold text-sm ${'text-amber-950'}`}>
                  Download PlugAI Neural Brain for 100% Offline Chat
                </h4>
                <p className={`text-[11.5px] mt-0.5 ${'text-amber-800'}`}>
                  Downloads StudyPlug proprietary offline neural weights into your device memory. Zero mobile data needed after download!
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowModelManager(false)}
                className="font-bold p-1 cursor-pointer opacity-70 hover:opacity-100"
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
                      ? 'border-[#004D40] bg-white shadow-sm font-semibold'
                      : 'border-amber-200 bg-white/60 hover:bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className={`font-bold ${'text-slate-900'}`}>{m.name}</span>
                    <span className={`text-[10.5px] font-extrabold px-1.5 py-0.5 rounded ${
                      'bg-slate-100 text-slate-700'
                    }`}>
                      ~{m.sizeMb} MB
                    </span>
                  </div>
                  <p className={`text-[10px] mt-1 leading-tight ${'text-slate-500'}`}>{m.description}</p>
                </div>
              ))}
            </div>

            {/* Progress Bar & Download Button */}
            <div className="mt-3 flex items-center gap-3">
              {isDownloading ? (
                <div className="flex-1 space-y-1">
                  <div className={`flex justify-between text-[11px] font-bold ${'text-amber-950'}`}>
                    <span>{downloadStatusText || 'Downloading model weights...'}</span>
                    <span>{downloadProgress}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-black/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                </div>
              ) : isModelCached ? (
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    ✅ Model is cached and ready for offline use!
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveEngineMode('neural');
                      setShowModelManager(false);
                    }}
                    className="bg-[#004D40] text-white px-3 py-1.5 rounded-xl font-bold cursor-pointer hover:bg-[#003B32]"
                  >
                    Use Neural Brain
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={startDownloadModel}
                  className="w-full bg-[#004D40] hover:bg-[#003B32] text-white font-bold py-2 px-4 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>📥 Download PlugAI Brain (~{selectedModelId.includes('360M') ? '195' : '360'} MB)</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className={`flex-1 p-3 sm:p-4 overflow-y-auto space-y-3 ${'bg-[#F7F9F8]'}`}>
          {/* Screen 10 Initial Greeting & 2x2 Actions (Shown when conversation is beginning) */}
          {messages.length <= 1 && (
            <div className="space-y-3 pb-2 text-left">
              {/* Greeting Card */}
              <div className={`rounded-[14px] p-3.5 border shadow-subtle flex items-center space-x-3 ${
                'bg-white border-[#E4EAE8]'
              }`}>
                <div className="w-10 h-10 rounded-full bg-[#E8F5E9] border border-[#004D40]/15 flex items-center justify-center text-lg shrink-0">
                  🎓
                </div>
                <div>
                  <h3 className={`font-bold text-[14px] ${'text-[#10201D]'}`}>Hi Darlington! 👋</h3>
                  <p className={`text-[11.5px] text-[#66736F]`}>
                    {aiTutorContext?.topic
                      ? `Studying ${aiTutorContext.topic}? What would you like help with?`
                      : 'What would you like to understand today?'}
                  </p>
                </div>
              </div>

              {/* 2x2 Quick Action Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setInputText('Explain this topic in simple terms with an example.');
                    setTimeout(() => handleSendMessage(), 50);
                  }}
                  className={`p-3 rounded-[12px] border shadow-subtle text-left transition cursor-pointer flex items-center space-x-2.5 group active:scale-[0.98] ${
                    'bg-white border-[#E4EAE8] hover:border-[#D0DBD8]'
                  }`}
                >
                  <span className="text-base text-[#1976D2]">📖</span>
                  <span className={`text-[12px] font-semibold group-hover:text-emerald-700 ${'text-[#10201D]'}`}>
                    Explain a topic
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInputText('Solve this step by step and explain the formula.');
                    setTimeout(() => handleSendMessage(), 50);
                  }}
                  className={`p-3 rounded-[12px] border shadow-subtle text-left transition cursor-pointer flex items-center space-x-2.5 group active:scale-[0.98] ${
                    'bg-white border-[#E4EAE8] hover:border-[#D0DBD8]'
                  }`}
                >
                  <span className="text-base text-[#16A34A]">🧮</span>
                  <span className={`text-[12px] font-semibold group-hover:text-emerald-700 ${'text-[#10201D]'}`}>
                    Solve a question
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInputText('Give me a 7-day study plan to cover this syllabus.');
                    setTimeout(() => handleSendMessage(), 50);
                  }}
                  className={`p-3 rounded-[12px] border shadow-subtle text-left transition cursor-pointer flex items-center space-x-2.5 group active:scale-[0.98] ${
                    'bg-white border-[#E4EAE8] hover:border-[#D0DBD8]'
                  }`}
                >
                  <span className="text-base text-[#7E3FC7]">📅</span>
                  <span className={`text-[12px] font-semibold group-hover:text-emerald-700 ${'text-[#10201D]'}`}>
                    Give me a study plan
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setInputText('Give me a quick motivation boost and exam tip.');
                    setTimeout(() => handleSendMessage(), 50);
                  }}
                  className={`p-3 rounded-[12px] border shadow-subtle text-left transition cursor-pointer flex items-center space-x-2.5 group active:scale-[0.98] ${
                    'bg-white border-[#E4EAE8] hover:border-[#D0DBD8]'
                  }`}
                >
                  <span className="text-base text-[#F57C00]">⭐</span>
                  <span className={`text-[12px] font-semibold group-hover:text-emerald-700 ${'text-[#10201D]'}`}>
                    Motivate me
                  </span>
                </button>
              </div>

              {/* Motivational Banner (Matching Image 1 Design System) */}
              <div className="rounded-[14px] p-3.5 bg-gradient-to-r from-[#00382E] to-[#004D40] text-white border border-[#FFD600]/30 flex items-center justify-between shadow-xs">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#002820] border border-[#FFD600]/40 flex items-center justify-center text-lg shrink-0">
                    💡
                  </div>
                  <div>
                    <h4 className="font-bold text-[12.5px] text-white tracking-tight">
                      Small steps make big results.
                    </h4>
                    <p className="text-[10.5px] text-emerald-200/90 font-medium">
                      Ask any question, formula, or concept anytime
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[#FFD600] px-2 py-0.5 rounded-full bg-[#002820] border border-[#FFD600]/30">
                  Study Tip
                </span>
              </div>
            </div>
          )}

          {messages.map((m) => {
            const isUser = m.sender === 'user';
            return (
              <div
                key={m.id}
                className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[92%] sm:max-w-[85%] rounded-[14px] p-3 sm:p-3.5 text-[13px] leading-relaxed shadow-subtle ${
                    isUser
                      ? 'bg-[#004D40] text-white rounded-br-none'
                      : 'bg-white text-[#10201D] border border-[#E4EAE8] rounded-bl-none'
                  }`}
                >
                  {/* Attached Question / Diagram Image */}
                  {m.imageUrl && (
                    <div className="mb-2.5 rounded-xl overflow-hidden border border-emerald-400/40 bg-black/30 p-1">
                      <img
                        src={m.imageUrl}
                        alt="Attached Question Diagram"
                        className="w-full h-auto max-h-56 object-contain rounded-lg"
                      />
                    </div>
                  )}

                  {isUser ? (
                    <div className="whitespace-pre-wrap font-medium">{m.text}</div>
                  ) : m.text === '__TYPING__' || m.text === 'Thinking & analyzing...' ? (
                    <div className="flex items-center space-x-1.5 py-1.5 px-2">
                      <span className="w-2 h-2 rounded-full bg-[#004D40] animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-[#004D40] animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-[#004D40] animate-bounce" />
                    </div>
                  ) : (
                    <ChatMessageRenderer text={m.text} />
                  )}
                  <span className={`text-[9.5px] block mt-1.5 ${isUser ? 'text-white/70 text-right' : 'text-[#8A9692]'}`}>
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
          <div className={`px-3 sm:px-4 py-2 border-t flex items-center space-x-1.5 overflow-x-auto no-scrollbar shrink-0 ${
            'bg-white border-slate-100'
          }`}>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
              Quick:
            </span>
            <button
              type="button"
              onClick={() => handleQuickAction('explain')}
              className="text-[11px] font-bold bg-[#F1F5F9] dark:bg-slate-800 hover:bg-[#E2E8F0] text-slate-700 dark:text-slate-200 px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer"
            >
              📖 Explain Question
            </button>
            <button
              type="button"
              onClick={() => handleQuickAction('why_wrong')}
              className="text-[11px] font-bold bg-[#FEE2E2] dark:bg-red-950/40 hover:bg-[#FECACA] text-[#DC2626] dark:text-red-400 px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer"
            >
              ❌ Why is my choice wrong?
            </button>
            <button
              type="button"
              onClick={() => handleQuickAction('formula')}
              className="text-[11px] font-bold bg-[#DCFCE7] dark:bg-emerald-950/40 hover:bg-[#BBF7D0] text-[#16A34A] dark:text-emerald-400 px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer"
            >
              📐 Step-by-Step Formula
            </button>
            <button
              type="button"
              onClick={() => handleQuickAction('mnemonic')}
              className="text-[11px] font-bold bg-[#FEF3C7] dark:bg-amber-950/40 hover:bg-[#FDE68A] text-[#B45309] dark:text-amber-400 px-2.5 py-1 rounded-lg whitespace-nowrap transition cursor-pointer"
            >
              💡 Memory Trick
            </button>
          </div>
        )}

        {/* Attached Image Thumbnail Bar */}
        {attachedImage && (
          <div className={`px-3 py-1.5 flex items-center justify-between border-t text-xs ${
            'bg-emerald-50 border-emerald-200 text-emerald-900'
          }`}>
            <div className="flex items-center space-x-2 truncate">
              <img
                src={attachedImage}
                alt="Attached Preview"
                className="w-8 h-8 rounded-lg object-cover border border-emerald-500 shadow-xs"
              />
              <span className="font-semibold text-[11px] truncate">
                {attachedImageCaption || 'Diagram / Question Image Attached'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setAttachedImage(null);
                setAttachedImageCaption('');
              }}
              className="text-red-500 hover:text-red-600 font-bold px-2 py-0.5 rounded cursor-pointer text-xs"
            >
              ✕ Remove
            </button>
          </div>
        )}

        {/* Search Image Bar & Input Bar */}
        <div className={`p-2.5 sm:p-3 border-t flex items-center space-x-2 shrink-0 ${
          'bg-white border-slate-200'
        }`}>
          {/* Search Diagram or Snap Image Button */}
          <button
            type="button"
            onClick={() => setShowDiagramPicker(true)}
            className={`p-2 sm:p-2.5 rounded-xl border transition cursor-pointer flex items-center justify-center shrink-0 ${
              'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title="Search Diagrams or Snap Question Page"
            aria-label="Search Image or Page Diagram"
          >
            <span className="text-base leading-none">📷</span>
          </button>

          {/* Text Input */}
          <input
            type="text"
            placeholder={
              attachedImage
                ? "Ask a question about this attached diagram / page..."
                : activeEngineMode === 'neural'
                  ? "Ask PlugAI anything (runs 100% offline)..."
                  : "Ask about this question, formula, or diagram..."
            }
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            className={`flex-1 px-3 py-2.5 rounded-xl text-xs focus:outline-none transition ${
              'bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:border-[#004D40] focus:bg-white'
            }`}
          />

          {/* Send Button */}
          <button
            type="button"
            onClick={handleSendMessage}
            disabled={(!inputText.trim() && !attachedImage) || isGenerating}
            className="px-3.5 py-2.5 bg-[#004D40] hover:bg-[#003B32] disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-brand-glow transition flex items-center space-x-1 cursor-pointer shrink-0"
          >
            <span>Send</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>

          {/* Clean Exit Action (No truncation!) */}
          <button
            type="button"
            onClick={() => setShowExitConfirm(true)}
            className={`px-2.5 py-2.5 rounded-xl transition cursor-pointer shrink-0 border text-xs font-bold flex items-center gap-1 ${
              'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title="Exit Study Session"
          >
            <span>✕</span>
            <span className="hidden sm:inline">Exit</span>
          </button>
        </div>

      </div>
    </div>
  );
};
