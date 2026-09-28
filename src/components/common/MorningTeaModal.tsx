import React, { useState, useEffect, useRef } from 'react';
import { MORNING_TEA_EDITIONS, MorningTeaEdition } from '../../data/morningTeaData';
import { useApp } from '../../context/AppContext';

interface MorningTeaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MorningTeaModal: React.FC<MorningTeaModalProps> = ({ isOpen, onClose }) => {
  const { setActiveView, setSelectedSubject } = useApp();

  const [selectedEditionId, setSelectedEditionId] = useState<string>('phrasal-verbs');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const activeEdition: MorningTeaEdition =
    MORNING_TEA_EDITIONS.find((ed) => ed.id === selectedEditionId) || MORNING_TEA_EDITIONS[0];

  // Filter items by search query
  const filteredItems = activeEdition.items.filter((item) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      item.phrase.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q) ||
      item.example.toLowerCase().includes(q) ||
      (item.examTip && item.examTip.toLowerCase().includes(q))
    );
  });

  // Stop speech when closing modal or switching edition
  const stopSpeech = () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {
      console.warn('Speech cancellation error:', e);
    }
    setIsSpeaking(false);
  };

  useEffect(() => {
    stopSpeech();
    return () => stopSpeech();
  }, [isOpen, selectedEditionId]);

  const toggleSpeech = () => {
    try {
      if (typeof window === 'undefined' || !('speechSynthesis' in window) || !window.speechSynthesis) {
        alert('Text-to-speech audio reader is not supported on this device.');
        return;
      }

      if (isSpeaking) {
        stopSpeech();
        return;
      }

      // Build spoken text from filtered items
      const spokenText = filteredItems
        .slice(0, 15) // Speak up to 15 items in one session
        .map((item) => `Number ${item.id}: ${item.phrase}. Meaning: ${item.meaning}. Example: ${item.example}`)
        .join('. ');

      const fullSpoken = `Morning Tea Briefing. ${activeEdition.title}. ${spokenText}`;

      stopSpeech();
      const utterance = new SpeechSynthesisUtterance(fullSpoken);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      setIsSpeaking(false);
    }
  };

  const handleCopyItem = (item: { id: number; phrase: string; meaning: string; example: string }) => {
    try {
      const textToCopy = `${item.phrase} — ${item.meaning}\nExample: ${item.example}\n(Shared via StudyPlug Morning Tea ☕)`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy);
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } catch (e) {
      console.warn('Clipboard copy error:', e);
    }
  };

  const handleGotMorningTea = () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('studyplug_morning_tea_seen_date', today);
    } catch (e) {
      // ignore
    }
    stopSpeech();
    onClose();
  };

  const handleStartPractice = () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('studyplug_morning_tea_seen_date', today);
    } catch (e) {
      // ignore
    }
    stopSpeech();
    onClose();
    if (activeEdition.subject) {
      setSelectedSubject(activeEdition.subject);
    }
    setActiveView('practice');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-page-enter">
      <div className={`w-full max-w-2xl rounded-[24px] border ${'bg-white border-[#E4EAE8] text-[#10201D]'} shadow-2xl flex flex-col max-h-[92vh] overflow-hidden`}>
        {/* ─── Top Header: Warm Morning Tea Banner ─── */}
        <div className="bg-gradient-to-r from-[#003B32] via-[#004D40] to-[#0A261D] text-white p-4 sm:p-5 flex flex-col space-y-3 shrink-0 relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-[#FFD600]/10 blur-xl pointer-events-none" />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-bounce">☕</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black tracking-wider uppercase bg-[#FFD600] text-[#002820] shadow-xs">
                Morning Tea Pop-Out
              </span>
              <span className="text-[11px] font-bold text-emerald-200 hidden sm:inline">
                • Daily High-Yield UTME Drop
              </span>
            </div>

            <div className="flex items-center space-x-1.5">
              {/* Text to Speech Button */}
              <button
                type="button"
                onClick={toggleSpeech}
                className={`p-1.5 px-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-1 cursor-pointer touch-press ${
                  isSpeaking
                    ? 'bg-yellow-400 text-[#004D40] font-black animate-badge-pulse shadow'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
                title={isSpeaking ? 'Stop Audio' : 'Listen Aloud'}
              >
                <span>{isSpeaking ? '⏹' : '🔊'}</span>
                <span className="text-[11px] hidden sm:inline">{isSpeaking ? 'Stop' : 'Listen'}</span>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleGotMorningTea}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm transition cursor-pointer touch-press"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center space-x-1.5">
              <span>{activeEdition.icon}</span>
              <span>{activeEdition.title}</span>
            </h2>
            <p className="text-[12px] text-emerald-100/90 font-medium mt-1 leading-snug">
              {activeEdition.subtitle}
            </p>
          </div>

          {/* Edition Switcher Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pt-1 no-scrollbar">
            {MORNING_TEA_EDITIONS.map((ed) => (
              <button
                key={ed.id}
                type="button"
                onClick={() => {
                  setSelectedEditionId(ed.id);
                  setSearchQuery('');
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer shrink-0 touch-press flex items-center space-x-1 ${
                  selectedEditionId === ed.id
                    ? 'bg-[#FFD600] text-[#002820] shadow-xs font-extrabold'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <span>{ed.icon}</span>
                <span>{ed.subject}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Search & Count Bar ─── */}
        <div className={`p-3 px-4 sm:px-5 border-b flex items-center justify-between gap-3 ${'bg-[#F7F9F8] border-[#E4EAE8]'} shrink-0`}>
          <div className="relative flex-1">
            <span className="absolute left-3 top-2.5 text-xs text-gray-400">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeEdition.items.length} ${activeEdition.subject} items...`}
              className={`w-full pl-8 pr-3 py-1.5 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#004D40] transition ${
                'bg-white border-slate-200 text-[#10201D] placeholder-slate-400'
              }`}
            />
          </div>
          <span className={`text-[11px] font-bold shrink-0 ${'text-[#66736F]'}`}>
            Showing {filteredItems.length} of {activeEdition.items.length}
          </span>
        </div>

        {/* ─── Knowledge Items Scrollable List ─── */}
        <div className={`flex-1 p-4 sm:p-5 overflow-y-auto space-y-3.5 ${'bg-[#F7F9F8]'}`}>
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-[#0A1A16] rounded-2xl border border-slate-200 dark:border-emerald-800/60 space-y-2">
              <span className="text-3xl">☕</span>
              <p className="text-xs font-bold text-slate-700 dark:text-emerald-200">
                No items match "{searchQuery}"
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#004D40] dark:text-[#FFD600] font-bold underline cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-[18px] border transition shadow-xs space-y-2 text-left ${
                  'bg-white border-[#E4EAE8] hover:border-emerald-200 hover:shadow-subtle'
                }`}
              >
                {/* Header row: Number + Phrase + Copy button */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-900/40 pb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-lg bg-[#004D40] text-[#FFD600] font-black text-xs flex items-center justify-center shrink-0">
                      {item.id}
                    </span>
                    <h3 className="text-[15px] sm:text-[16px] font-black text-[#004D40] dark:text-[#FFD600] tracking-tight">
                      {item.phrase}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyItem(item)}
                    className={`px-2 py-1 rounded-lg text-[10.5px] font-bold border transition cursor-pointer touch-press ${
                      copiedId === item.id
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'border-slate-200 text-slate-500 hover:bg-slate-100'
                    }`}
                    title="Copy to clipboard"
                  >
                    {copiedId === item.id ? '✓ Copied' : '📋 Copy'}
                  </button>
                </div>

                {/* Meaning */}
                <div className="text-[13px] sm:text-[13.5px] font-bold text-[#10201D] dark:text-emerald-100">
                  <span className="text-[#66736F] dark:text-emerald-300/70 font-semibold mr-1.5">Meaning:</span>
                  <span>{item.meaning}</span>
                </div>

                {/* Example sentence */}
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#071F17] border border-slate-200/80 dark:border-emerald-900/50 text-[12px] sm:text-[12.5px] text-slate-700 dark:text-emerald-100/90 leading-relaxed font-normal">
                  <span className="font-bold text-[#004D40] dark:text-[#FFD600] mr-1">💡 UTME Example:</span>
                  <span>"{item.example}"</span>
                </div>

                {/* Exam Tip */}
                {item.examTip && (
                  <div className="text-[11.5px] font-semibold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-2 rounded-lg border border-amber-200/80 dark:border-amber-900/50 flex items-start space-x-1.5">
                    <span className="shrink-0">⚠️</span>
                    <span>{item.examTip}</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* ─── Bottom Actions Bar ─── */}
        <div className={`p-3.5 sm:p-4 px-4 sm:px-5 border-t flex flex-wrap items-center justify-between gap-2.5 ${'bg-white border-[#E4EAE8]'} shrink-0`}>
          <div className="flex items-center space-x-1 text-xs text-slate-500 dark:text-emerald-300/70 font-semibold">
            <span>✨</span>
            <span>StudyPlug Morning Tea • Daily Routine</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={handleGotMorningTea}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-slate-700 dark:text-slate-200 text-xs font-bold transition cursor-pointer touch-press"
            >
              ☕ Got It!
            </button>
            <button
              type="button"
              onClick={handleStartPractice}
              className="px-4 py-2 rounded-xl bg-[#004D40] hover:bg-[#003B32] text-white text-xs font-black shadow-md transition cursor-pointer touch-press flex items-center space-x-1"
            >
              <span>🎯</span>
              <span>Drill {activeEdition.subject} Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorningTeaModal;
