import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const AiHelperScreen: React.FC = () => {
  const { setActiveView, goBack } = useApp();
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    {
      sender: 'ai',
      text: "Hello Darlington! I am your StudyPlug AI Tutor. Ask me any difficult question, formula derivation, or exam concept in JAMB, WAEC, or NECO!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    'Explain this topic in simple terms',
    'Give me a 3-minute summary',
    'Create 5 practice questions for me',
    'Simplify this formula for me (ELI5)',
    'Build a 7-day study timetable'
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    setMessages(prev => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = `Here is your detailed StudyPlug answer on: "${query}"\n\n1. Key Concept: Focus on examiner traps often tested in JAMB UTME.\n2. Step-by-Step Rule: Always isolate terms and check your units.\n3. High-Yield Tip: Consistent revision of past questions ensures mastery!`;
      if (query.includes('timetable')) {
        reply = `📅 7-Day StudyPlug Revision Timetable:\n• Mon: Mathematics (Algebra & Number System)\n• Tue: Use of English (Lexis & Comprehension)\n• Wed: Physics (Mechanics & Work)\n• Thu: Chemistry (Stoichiometry & Bonding)\n• Fri: Biology (Cell & Genetics)\n• Sat: Timed 50-Question Mock CBT Test\n• Sun: Review Bookmarks & Weak Topics!`;
      } else if (query.includes('5 practice questions')) {
        reply = `🧪 5 High-Yield Practice Questions:\n1. Solve for x: 2^(2x) - 10(2^x) + 16 = 0\n2. Differentiate y = (3x^2 + 1)^4 with respect to x.\n3. What is the pH of a 0.005M H2SO4 solution?\n4. A wave has frequency 50Hz and wavelength 6.8m. Calculate speed.\n5. State two functions of the Golgi apparatus.`;
      }
      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8] text-[#001028] flex flex-col font-sans select-none">
      {/* Dark Navy Header (#001028) */}
      <header className="sticky top-0 z-40 w-full bg-[#001028] text-white border-b border-[#001830] shadow-sm">
        <div className="h-14 px-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goBack()}
            className="flex items-center space-x-1.5 text-xs font-semibold text-white hover:text-[#F8C800] transition cursor-pointer"
          >
            <span className="text-base font-bold">←</span>
            <span>Back</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-xl">🤖</span>
            <span className="font-bold text-sm text-white">StudyPlug AI</span>
          </div>
          <div className="w-10" />
        </div>
      </header>

      {/* Main Chat & Assistant Surface */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-32 space-y-4">
        {/* Friendly 3D Robot Avatar Card with Speech Bubble (Screen 11 in Reference) */}
        <div className="bg-white rounded-[24px] p-4 sm:p-5 border border-[#E8E8E8] shadow-sm flex items-center space-x-4 text-left">
          {/* Friendly Robot Avatar */}
          <div className="w-14 h-14 rounded-2xl bg-[#001028] border-2 border-[#F8C800] flex items-center justify-center text-3xl shrink-0 shadow-md">
            🤖
          </div>

          {/* Speech Bubble */}
          <div className="flex-1 bg-[#F8F8F8] p-3 rounded-2xl border border-[#E8E8E8] relative">
            <div className="text-xs font-bold text-[#001028]">
              Ask me anything about your studies.
            </div>
            <div className="text-[11px] text-[#607080] mt-0.5">
              I'm here to help you ace your exams!
            </div>
          </div>
        </div>

        {/* Quick Action Prompt Cards (as shown in reference image) */}
        <div className="space-y-2 text-left">
          <span className="text-xs font-bold text-[#607080] uppercase tracking-wider px-1">
            Suggested Prompts
          </span>

          <div className="space-y-2">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="w-full bg-white rounded-[18px] p-3.5 border border-[#E8E8E8] hover:border-[#F8C800] hover:shadow-xs active:scale-[0.99] transition cursor-pointer flex items-center justify-between group text-left"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="text-base">💡</span>
                  <span className="text-xs font-bold text-[#001028] group-hover:text-[#001830]">
                    {prompt}
                  </span>
                </div>
                <span className="text-[#607080] group-hover:text-[#001028] font-bold text-sm shrink-0">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Chat History */}
        {messages.length > 1 && (
          <div className="space-y-3 pt-2 text-left">
            {messages.slice(1).map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-[20px] p-3.5 text-xs leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#001028] text-white rounded-br-none'
                      : 'bg-white border border-[#E8E8E8] text-[#001028] rounded-bl-none shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-[#E8E8E8] rounded-[20px] px-4 py-2.5 text-xs text-[#607080] animate-pulse">
                  StudyPlug AI is thinking... ✍️
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating Prompt Input Bar */}
      <div className="fixed bottom-16 left-0 right-0 max-w-md mx-auto px-4 pb-2 z-40 bg-[#F8F8F8]/90 backdrop-blur-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center space-x-2 bg-white rounded-full border border-[#E8E8E8] p-1.5 shadow-md focus-within:border-[#F8C800]"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question or formula..."
            className="flex-1 pl-4 pr-2 py-2 text-xs bg-transparent text-[#001028] placeholder-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-9 h-9 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] flex items-center justify-center font-bold text-sm shadow-sm transition cursor-pointer shrink-0"
          >
            ↑
          </button>
        </form>
      </div>

      <BottomNavigation activeTab="home" />
    </div>
  );
};

export default AiHelperScreen;
