import React, { useState, useEffect } from 'react';
import {
  MORNING_TEA_EDITIONS,
  MorningTeaEdition,
  MorningTeaItem,
  WEEK_AHEAD_CURRICULUM
} from '../../data/morningTeaData';
import { useApp } from '../../context/AppContext';
import { MorningTeaVideoPlayer } from './MorningTeaVideoPlayer';
import { ShareMorningTeaNoteModal } from './ShareMorningTeaNoteModal';

/* ─── CSS Keyframe Animations for Morning Tea Flashcards ─── */
const MORNING_TEA_STYLES = `
@keyframes teaCardSlideNext {
  0%   { opacity: 0; transform: translateX(35px) scale(0.97); }
  100% { opacity: 1; transform: translateX(0) scale(1); }
}
@keyframes teaCardSlidePrev {
  0%   { opacity: 0; transform: translateX(-35px) scale(0.97); }
  100% { opacity: 1; transform: translateX(0) scale(1); }
}
.tea-card-slide-next {
  animation: teaCardSlideNext 0.28s cubic-bezier(0.2, 0.9, 0.3, 1) both;
}
.tea-card-slide-prev {
  animation: teaCardSlidePrev 0.28s cubic-bezier(0.2, 0.9, 0.3, 1) both;
}
@keyframes pulseNext {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.03); }
}
.animate-pulse-btn {
  animation: pulseNext 2.5s infinite ease-in-out;
}
@keyframes shimmerGlow {
  0%, 100% { border-color: rgba(255, 214, 0, 0.4); }
  50% { border-color: rgba(255, 214, 0, 0.9); }
}
.shimmer-border {
  animation: shimmerGlow 2s infinite ease-in-out;
}
`;

interface MorningTeaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MorningTeaModal: React.FC<MorningTeaModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'notes' | 'cards' | 'curriculum'>('notes');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('All');
  const [selectedEditionId, setSelectedEditionId] = useState<string>('english-concord-day1');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  // Share Study Note Modal State
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);

  // Video Animation Player States
  const [videoPlayerItem, setVideoPlayerItem] = useState<MorningTeaItem | null>(null);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState<boolean>(false);

  // Filter editions by subject if filter is selected
  const availableEditions = MORNING_TEA_EDITIONS.filter((ed) => {
    if (selectedSubjectFilter === 'All') return true;
    return ed.subject.toLowerCase().includes(selectedSubjectFilter.toLowerCase());
  });

  const activeEdition: MorningTeaEdition =
    availableEditions.find((ed) => ed.id === selectedEditionId) ||
    availableEditions[0] ||
    MORNING_TEA_EDITIONS[0];

  const items = activeEdition.items;
  const currentItem: MorningTeaItem | undefined = items[currentIndex] || items[0];

  // Subject filter categories
  const subjectCategories = [
    'All',
    'Use of English',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Economics',
    'Government',
    'Literature in English'
  ];

  // Reset index & flip state when changing edition
  const handleSelectEdition = (editionId: string) => {
    stopSpeech();
    setSelectedEditionId(editionId);
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsCompleted(false);
  };

  const handleNext = () => {
    stopSpeech();
    setIsFlipped(false);
    if (currentIndex < items.length - 1) {
      setSlideDirection('next');
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    stopSpeech();
    setIsFlipped(false);
    if (currentIndex > 0) {
      setSlideDirection('prev');
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    stopSpeech();
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsCompleted(false);
  };

  // Keyboard navigation: Left = Prev, Right = Next, Space = Flip
  useEffect(() => {
    if (!isOpen || isShareModalOpen || isVideoPlayerOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isShareModalOpen, isVideoPlayerOpen, currentIndex, items.length, isCompleted]);

  // Speech Synthesizer for individual item
  const speakCurrentItem = (item: MorningTeaItem) => {
    try {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
        alert('Audio speech is not supported on this browser.');
        return;
      }
      if (isSpeaking) {
        stopSpeech();
        return;
      }
      stopSpeech();
      const textToSpeak = `${item.phrase}. Meaning: ${item.meaning}. Example: ${item.example}`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.9;
      utterance.lang = 'en-GB';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } catch {
      setIsSpeaking(false);
    }
  };

  const stopSpeech = () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch {}
    setIsSpeaking(false);
  };

  useEffect(() => {
    stopSpeech();
    return () => stopSpeech();
  }, [isOpen, selectedEditionId, currentIndex]);

  const handleCopyItem = (item: MorningTeaItem) => {
    try {
      const textToCopy = `☀️ STUDYPLUG MORNING TEA DROP ☕\nSubject: ${activeEdition.subject}\nConcept: ${item.phrase}\nMeaning: ${item.meaning}\nExample: "${item.example}"\n${item.examTip ? `Exam Tip: ${item.examTip}\n` : ''}⚡ Study 10,000+ past questions free: https://studyplug.com.ng`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy);
        setCopiedNotification(true);
        setTimeout(() => setCopiedNotification(false), 2000);
      }
    } catch {}
  };

  const handleOpenVideo = (item: MorningTeaItem) => {
    stopSpeech();
    setVideoPlayerItem(item);
    setIsVideoPlayerOpen(true);
  };

  const currentVideoIndex = videoPlayerItem
    ? items.findIndex((it) => it.id === videoPlayerItem.id)
    : -1;

  const handleNextVideo = () => {
    if (currentVideoIndex >= 0 && currentVideoIndex < items.length - 1) {
      setVideoPlayerItem(items[currentVideoIndex + 1]);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setVideoPlayerItem(items[currentVideoIndex - 1]);
    }
  };

  const handleGotMorningTea = () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('studyplug_morning_tea_seen_date', today);
    } catch {}
    stopSpeech();
    onClose();
  };

  const handleStartPractice = () => {
    try {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('studyplug_morning_tea_seen_date', today);
    } catch {}
    stopSpeech();
    onClose();
    if (activeEdition.subject) {
      setSelectedSubject(activeEdition.subject);
    }
    setActiveView('practice');
  };

  if (!isOpen) return null;

  /* ─── COMPLETION SCREEN ─── */
  if (isCompleted) {
    return (
      <div className="fixed inset-0 z-[200] flex flex-col bg-[#001028] font-sans">
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-5 animate-fadeIn">
          <span className="text-6xl animate-bounce">🎉</span>
          <h2 className="text-[24px] font-black text-white">Morning Tea Completed!</h2>
          <p className="text-[14px] text-emerald-200 max-w-sm">
            You mastered all <strong>{items.length} high-yield drops</strong> in {activeEdition.subject} ({activeEdition.title}).
          </p>

          {/* Tomorrow's Sneak Peek Banner */}
          {activeEdition.nextDayPreview && (
            <div className="w-full max-w-sm p-4 rounded-[18px] bg-[#FFD600]/15 border border-[#FFD600]/40 text-left space-y-1">
              <span className="text-[10px] font-black uppercase text-[#FFD600] tracking-wider">
                ✨ WHAT TO EXPECT TOMORROW (DAY {activeEdition.nextDayPreview.dayNumber})
              </span>
              <h4 className="text-[14px] font-extrabold text-white">
                {activeEdition.nextDayPreview.title}
              </h4>
              <p className="text-[11.5px] text-emerald-100">
                {activeEdition.nextDayPreview.description}
              </p>
            </div>
          )}

          <div className="w-full max-w-[300px] space-y-2.5 pt-1">
            <div className="rounded-[16px] bg-white/10 p-3.5 flex items-center justify-between">
              <span className="text-[13px] text-emerald-200">📚 Concepts Mastered</span>
              <span className="text-[20px] font-black text-white">{items.length}</span>
            </div>
            <div className="rounded-[16px] bg-[#FFD600] p-3.5 flex items-center justify-between text-[#001028]">
              <span className="text-[13px] font-bold">Subject</span>
              <span className="text-[14px] font-black">{activeEdition.subject}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-3">
            <button
              type="button"
              onClick={() => setIsShareModalOpen(true)}
              className="px-5 py-2.5 rounded-[12px] bg-gradient-to-r from-emerald-500 to-teal-400 text-[#002820] font-black text-[13px] hover:brightness-110 transition cursor-pointer shadow-md flex items-center space-x-1.5"
            >
              <span>🚀</span>
              <span>Share Note to TikTok / WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={handleStartPractice}
              className="px-5 py-2.5 rounded-[12px] bg-[#FFD600] text-[#001028] font-black text-[13px] hover:bg-amber-300 transition cursor-pointer shadow-md"
            >
              🎯 Drill in CBT Practice
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className="px-4 py-2.5 rounded-[12px] bg-white/10 text-white font-bold text-[13px] hover:bg-white/20 transition cursor-pointer"
            >
              🔁 Review Again
            </button>
          </div>
        </div>

        {/* Share Modal Trigger from Completion Screen */}
        {currentItem && (
          <ShareMorningTeaNoteModal
            isOpen={isShareModalOpen}
            onClose={() => setIsShareModalOpen(false)}
            edition={activeEdition}
            item={currentItem}
            itemIndex={currentIndex}
            totalItems={items.length}
            onOpenVideoPlayer={() => handleOpenVideo(currentItem)}
          />
        )}
      </div>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MORNING_TEA_STYLES }} />

      {/* ─── FULL-SCREEN FLASHCARD VIEWPORT ─── */}
      <div className="fixed inset-0 z-[200] flex flex-col bg-[#F0F4F2] font-sans select-none">

        {/* ─── Top Header Bar: Deep Forest Green (#001028) ─── */}
        <div className="bg-[#001028] text-white px-4 pt-4 pb-3 shrink-0 shadow-md space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={handleGotMorningTea}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer text-white font-bold"
                aria-label="Back"
              >
                ←
              </button>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="font-extrabold text-[16px] sm:text-[17px] leading-none text-white">
                    Morning Tea ☕
                  </h2>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFD600] text-[#001028] font-black uppercase tracking-wider">
                    DEEP TOPICS DROP
                  </span>
                </div>
                <p className="text-[11.5px] text-emerald-200 mt-0.5 font-medium">
                  {activeEdition.seriesName || activeEdition.subject} • High-Yield Concept Drill
                </p>
              </div>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center space-x-2">
              {/* Share Note Button */}
              {currentItem && (
                <button
                  type="button"
                  onClick={() => setIsShareModalOpen(true)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-black bg-[#FFD600] text-[#001830] hover:bg-amber-300 transition cursor-pointer flex items-center space-x-1 shadow-sm"
                  title="Share animated note to TikTok & WhatsApp"
                >
                  <span>🚀</span>
                  <span className="hidden sm:inline">Share Note</span>
                </button>
              )}

              {/* Audio Reader */}
              {currentItem && (
                <button
                  type="button"
                  onClick={() => speakCurrentItem(currentItem)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition cursor-pointer ${
                    isSpeaking
                      ? 'bg-emerald-400 text-white animate-pulse'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                  title={isSpeaking ? 'Stop speaking' : 'Listen with audio speech'}
                >
                  {isSpeaking ? '⏹' : '🔊'}
                </button>
              )}

              {/* Reel Video Player */}
              {currentItem && (
                <button
                  type="button"
                  onClick={() => handleOpenVideo(currentItem)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition cursor-pointer"
                  title="Watch animated video reel"
                >
                  🎬
                </button>
              )}

              <button
                type="button"
                onClick={handleGotMorningTea}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm transition cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Navigation Sub-Tabs: Full Study Notes vs Flashcards vs Week Ahead */}
          <div className="flex items-center space-x-2 pt-1 border-t border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab('notes')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1 ${
                activeTab === 'notes'
                  ? 'bg-white text-[#001028] shadow-xs'
                  : 'text-emerald-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>📖</span>
              <span>Full Study Notes ({items.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cards')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1 ${
                activeTab === 'cards'
                  ? 'bg-white text-[#001028] shadow-xs'
                  : 'text-emerald-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>🎴</span>
              <span>Flashcard Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('curriculum')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1 ${
                activeTab === 'curriculum'
                  ? 'bg-white text-[#001028] shadow-xs'
                  : 'text-emerald-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>📅</span>
              <span>Week Ahead Syllabus</span>
            </button>
          </div>

          {/* Subject Filter Pills */}
          <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none pt-1">
            {subjectCategories.map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => {
                  setSelectedSubjectFilter(sub);
                  // Auto-select first matching edition
                  const matching = MORNING_TEA_EDITIONS.find((ed) =>
                    sub === 'All' ? true : ed.subject.toLowerCase().includes(sub.toLowerCase())
                  );
                  if (matching) {
                    handleSelectEdition(matching.id);
                  }
                }}
                className={`shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-bold transition cursor-pointer ${
                  selectedSubjectFilter === sub
                    ? 'bg-[#FFD600] text-[#001028] shadow-xs font-black'
                    : 'bg-white/10 text-emerald-200 hover:bg-white/20'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* ─── TAB 0: FULL STUDY NOTES LIST VIEW (COMPLETE & READABLE) ─── */}
        {activeTab === 'notes' && (
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 max-w-2xl mx-auto w-full space-y-3.5">
            {/* Context Summary Bar */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#E4EAE8] shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div>
                <span className="text-[10px] font-black uppercase text-[#001028] bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  {activeEdition.subject} CLASSROOM NOTES
                </span>
                <h3 className="font-extrabold text-[15px] text-[#10201D] mt-1 leading-snug">
                  {activeEdition.title}
                </h3>
                <p className="text-[11.5px] text-[#66736F] leading-tight mt-0.5">
                  Complete classroom notes with definitions, rules, examples, and examiner speed tips.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('cards')}
                className="px-3.5 py-2 rounded-xl bg-[#001028] text-[#FFD600] font-black text-xs hover:bg-[#00382E] transition flex items-center justify-center space-x-1 shrink-0 cursor-pointer shadow-xs active:scale-95"
              >
                <span>🎴 Flashcard Drill</span>
              </button>
            </div>

            {/* List of Complete Note Entries */}
            <div className="space-y-3 pb-6">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[20px] p-4 sm:p-5 border border-[#E4EAE8] shadow-subtle hover:border-emerald-300 transition text-left space-y-3"
                >
                  {/* Top Row: Badge + Title + Copy/Audio */}
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2.5">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-7 h-7 rounded-xl bg-[#001028] text-[#FFD600] font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                        #{idx + 1}
                      </span>
                      <h4 className="font-black text-[15px] sm:text-[16px] text-[#001028] tracking-tight">
                        {item.phrase}
                      </h4>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <button
                        type="button"
                        onClick={() => speakCurrentItem(item)}
                        className="w-7 h-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#001028] flex items-center justify-center text-xs transition cursor-pointer"
                        title="Listen with audio"
                      >
                        🔊
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCopyItem(item)}
                        className="px-2.5 py-1 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-bold text-[11px] transition cursor-pointer"
                        title="Copy note text"
                      >
                        {copiedNotification ? '✓' : '📋'}
                      </button>
                    </div>
                  </div>

                  {/* Rule & Meaning */}
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#66736F] block mb-0.5">
                      RULE / DEFINITION
                    </span>
                    <p className="text-[13.5px] font-semibold text-[#10201D] leading-relaxed">
                      {item.meaning}
                    </p>
                  </div>

                  {/* Exam Example Box */}
                  <div className="p-3 rounded-xl bg-[#F7F9F8] border border-[#E4EAE8]">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#001028] block mb-0.5">
                      💡 EXAM EXAMPLE & APPLICATION
                    </span>
                    <p className="text-[12.5px] text-[#1E293B] italic leading-relaxed">
                      "{item.example}"
                    </p>
                  </div>

                  {/* Examiner Tip & Past Question Ref */}
                  {item.examTip && (
                    <div className="p-2.5 rounded-xl bg-[#FFD600]/15 border border-[#FFD600]/40 flex items-start space-x-2">
                      <span className="text-sm shrink-0">⚠️</span>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#001028] block">
                          EXAMINER TRAP & SPEED TIP
                        </span>
                        <p className="text-[11.5px] text-[#10201D] font-medium leading-snug">
                          {item.examTip}
                        </p>
                      </div>
                    </div>
                  )}

                  {item.pastQuestionRef && (
                    <div className="text-[10.5px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                      📌 Tested in: {item.pastQuestionRef}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── TAB 1: INTERACTIVE FLASHCARD VIEW ─── */}
        {activeTab === 'cards' && (
          <div className="flex-1 flex flex-col justify-between overflow-y-auto">
            {/* Slim Progress Bar */}
            <div className="h-1 bg-[#E4EAE8]">
              <div
                className="h-full bg-[#001028] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
              />
            </div>

            {/* Edition Dropdown / Series Selector Bar */}
            <div className="bg-white border-b border-[#E4EAE8] px-4 py-2 flex items-center justify-between text-xs overflow-x-auto gap-2">
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-[#001028]">Active Series:</span>
                <select
                  value={selectedEditionId}
                  onChange={(e) => handleSelectEdition(e.target.value)}
                  className="bg-[#F7F9F8] border border-[#E4EAE8] text-[#10201D] font-bold rounded-lg px-2.5 py-1 text-xs outline-none cursor-pointer max-w-[260px] truncate"
                >
                  {availableEditions.map((ed) => (
                    <option key={ed.id} value={ed.id}>
                      {ed.subject}: {ed.title}
                    </option>
                  ))}
                </select>
              </div>

              {activeEdition.dayNumber && (
                <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-black text-[10.5px]">
                  DAY {activeEdition.dayNumber} OF {activeEdition.totalDays || 3}
                </span>
              )}
            </div>

            {/* SPACIOUS CARD AREA */}
            <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-4">
              {currentItem && (
                <div className="w-full max-w-[440px] sm:max-w-[480px] flex flex-col items-center">

                  {/* Card Meta Bar */}
                  <div className="flex items-center justify-between w-full mb-2.5 px-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full text-white bg-[#001028]">
                        {activeEdition.subject}
                      </span>
                      <span className="text-[11px] text-[#66736F] font-bold">
                        Card #{currentIndex + 1} of {items.length}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setIsShareModalOpen(true)}
                        className="text-[11px] text-[#001028] hover:text-[#002820] font-bold transition cursor-pointer flex items-center space-x-1 bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-200"
                        title="Share note as high-res branded image"
                      >
                        <span>🚀</span>
                        <span>Share Note</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCopyItem(currentItem)}
                        className="text-[11px] text-stone-500 hover:text-stone-800 font-bold transition cursor-pointer"
                        title="Copy to clipboard"
                      >
                        {copiedNotification ? '✓ Copied' : '📋 Copy'}
                      </button>
                    </div>
                  </div>

                  {/* The Interactive Flippable Flashcard */}
                  <button
                    type="button"
                    onClick={() => setIsFlipped(!isFlipped)}
                    className={`w-full min-h-[300px] sm:min-h-[340px] rounded-[24px] shadow-xl flex flex-col justify-between text-center px-6 sm:px-8 py-6 sm:py-7 transition-all duration-300 cursor-pointer active:scale-[0.98] shimmer-border ${
                      slideDirection === 'next' ? 'tea-card-slide-next' : 'tea-card-slide-prev'
                    }`}
                    style={{
                      backgroundColor: isFlipped ? '#001830' : 'white',
                      color: isFlipped ? 'white' : '#10201D',
                      border: `2px solid ${isFlipped ? '#FFD600' : '#E4EAE8'}`
                    }}
                  >
                    {!isFlipped ? (
                      /* ─── FRONT: Concept / Question ─── */
                      <div className="flex-1 flex flex-col justify-between w-full text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-widest text-[#001028] bg-emerald-50 px-2.5 py-1 rounded-full">
                            HIGH-YIELD CONCEPT
                          </span>
                          <span className="text-[11px] text-[#66736F] font-semibold">
                            Tap to reveal rule 🔄
                          </span>
                        </div>

                        <div className="my-auto py-5 text-center">
                          <h3 className="text-[24px] sm:text-[30px] font-black text-[#001028] leading-snug tracking-tight">
                            {currentItem.phrase}
                          </h3>
                          <p className="text-[13px] text-[#66736F] mt-3 max-w-sm mx-auto">
                            Exams test this continuously! Do you know the exact rule? Tap card to reveal definition, example &amp; traps!
                          </p>
                        </div>

                        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-[#66736F]">
                          <span>Card {currentIndex + 1} of {items.length}</span>
                          <span className="text-[#001028] font-bold">Tap to flip →</span>
                        </div>
                      </div>
                    ) : (
                      /* ─── BACK: Definition, Example, Exam Tip & Trap ─── */
                      <div className="flex-1 flex flex-col justify-between text-left w-full space-y-3.5">
                        <div>
                          <div className="flex items-center justify-between pb-2 border-b border-white/10">
                            <span className="text-[11px] font-black uppercase tracking-widest text-[#FFD600]">
                              RULE &amp; DEFINITION
                            </span>
                            <span className="text-[11px] text-emerald-200">Tap to flip back 🔄</span>
                          </div>
                          <h4 className="text-[18px] sm:text-[20px] font-black text-[#FFD600] mt-1.5 mb-1 leading-snug">
                            {currentItem.phrase}
                          </h4>
                          <p className="text-[14px] sm:text-[15px] font-semibold text-white leading-relaxed">
                            {currentItem.meaning}
                          </p>
                        </div>

                        {/* Exam Example Box */}
                        <div className="p-3 rounded-xl bg-white/10 border border-white/15">
                          <span className="text-[10px] font-black text-emerald-300 uppercase tracking-wider block mb-0.5">
                            📝 EXAM EXAMPLE
                          </span>
                          <p className="text-[13px] text-emerald-50 italic leading-relaxed">
                            "{currentItem.example}"
                          </p>
                        </div>

                        {/* Exam Tip & Trap */}
                        {currentItem.examTip && (
                          <div className="p-2.5 rounded-xl bg-[#FFD600]/20 border border-[#FFD600]/40">
                            <span className="text-[10px] font-black text-[#FFD600] uppercase tracking-wider block">
                              ⚠️ EXAMINER TRAP &amp; SPEED TIP
                            </span>
                            <p className="text-[12px] text-amber-100 leading-snug mt-0.5">
                              {currentItem.examTip}
                            </p>
                          </div>
                        )}

                        {/* Past Question Ref */}
                        {currentItem.pastQuestionRef && (
                          <div className="text-[10.5px] text-emerald-300/90 font-medium">
                            📌 Tested in: {currentItem.pastQuestionRef}
                          </div>
                        )}
                      </div>
                    )}
                  </button>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between w-full mt-4 gap-2.5">
                    <button
                      type="button"
                      onClick={handlePrev}
                      disabled={currentIndex === 0}
                      className="flex-1 py-3 rounded-2xl bg-white border border-[#E4EAE8] text-[#10201D] font-bold text-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-stone-50 transition cursor-pointer shadow-xs active:scale-95"
                    >
                      ← Previous
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsFlipped(!isFlipped)}
                      className="px-4 py-3 rounded-2xl bg-[#E4EAE8] text-[#001028] font-extrabold text-xs hover:bg-stone-300 transition cursor-pointer active:scale-95"
                      title="Flip card front/back"
                    >
                      🔄 Flip
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 py-3 rounded-2xl bg-[#001028] text-white font-black text-xs hover:bg-[#00382E] transition cursor-pointer shadow-md active:scale-95 flex items-center justify-center space-x-1.5 animate-pulse-btn"
                    >
                      <span>{currentIndex === items.length - 1 ? 'Finish ☕' : 'Next Card'}</span>
                      <span>→</span>
                    </button>
                  </div>

                  {/* Tomorrow's Preview Footer Strip */}
                  {activeEdition.nextDayPreview && (
                    <div className="w-full mt-4 p-3 rounded-xl bg-white border border-emerald-200 text-left flex items-center justify-between gap-2 shadow-xs">
                      <div>
                        <div className="flex items-center space-x-1 text-[10px] font-black uppercase text-[#001028]">
                          <span>✨ Tomorrow:</span>
                          <span className="text-[#FF8F00]">Day {activeEdition.nextDayPreview.dayNumber}</span>
                        </div>
                        <p className="text-[11.5px] font-extrabold text-[#10201D] leading-tight">
                          {activeEdition.nextDayPreview.title}
                        </p>
                      </div>
                      <span className="text-xs text-[#001028] font-bold shrink-0">
                        Stay Tuned ☕
                      </span>
                    </div>
                  )}

                  <p className="mt-3 text-[11.5px] text-[#66736F] text-center">
                    Tap card to flip • Use ← / → keyboard arrows • Share to WhatsApp to keep streak!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── TAB 2: WEEK AHEAD CURRICULUM & CONTENT BUCKET ─── */}
        {activeTab === 'curriculum' && (
          <div className="flex-1 overflow-y-auto px-4 py-5 max-w-2xl mx-auto w-full space-y-4">
            {/* Hero Header */}
            <div className="rounded-[20px] bg-gradient-to-r from-[#001830] via-[#001028] to-[#0A261D] p-4 text-white shadow-md border border-emerald-500/30 space-y-1.5 text-left">
              <span className="px-2 py-0.5 rounded-full bg-[#FFD600] text-[#002820] text-[10px] font-black uppercase">
                CONTENT BUCKET
              </span>
              <h3 className="text-base sm:text-lg font-black text-white">
                Weekly Morning Tea Curriculum &amp; High-Yield Forecast
              </h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed">
                We take deep multi-day dives into topics Nigerian exams (JAMB, WAEC, NECO) never joke with. Check what is dropping this week:
              </p>
            </div>

            {/* Current Active Series Breakdown */}
            {activeEdition.weekBucket && (
              <div className="bg-white rounded-[18px] p-4 border border-[#E4EAE8] shadow-subtle space-y-3 text-left">
                <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-2">
                  <h4 className="font-bold text-[13px] text-[#10201D]">
                    {activeEdition.seriesName || activeEdition.title} (3-Day Series)
                  </h4>
                  <span className="text-[11px] font-bold text-[#001028] bg-emerald-50 px-2 py-0.5 rounded-full">
                    {activeEdition.subject}
                  </span>
                </div>

                <div className="space-y-2">
                  {activeEdition.weekBucket.map((bucket, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border transition ${
                        bucket.isToday
                          ? 'bg-emerald-50/80 border-[#001028] shadow-xs'
                          : 'bg-[#F7F9F8] border-[#E4EAE8]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[11px] font-black uppercase ${bucket.isToday ? 'text-[#001028]' : 'text-[#66736F]'}`}>
                          {bucket.dayOfWeek} {bucket.isToday ? '• ACTIVE TODAY ☕' : ''}
                        </span>
                        <span className="text-[10px] font-bold text-stone-500">
                          {bucket.isToday ? 'Live Drop' : 'Upcoming'}
                        </span>
                      </div>
                      <h5 className="font-extrabold text-[13.5px] text-[#10201D] mt-0.5">
                        {bucket.topic}
                      </h5>
                      <p className="text-[11.5px] text-[#66736F] mt-0.5">
                        {bucket.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Full 7-Day Weekly Curriculum Table */}
            <div className="bg-white rounded-[18px] p-4 border border-[#E4EAE8] shadow-subtle space-y-3 text-left">
              <h4 className="font-bold text-[13.5px] text-[#10201D] flex items-center justify-between">
                <span>7-Day Master Subject Timetable</span>
                <span className="text-[11px] text-[#66736F] font-normal">Monday — Sunday</span>
              </h4>

              <div className="space-y-2">
                {WEEK_AHEAD_CURRICULUM.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-[#F7F9F8] border border-[#E4EAE8] flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-white border border-[#E4EAE8] flex items-center justify-center font-black text-xs text-[#001028] shrink-0 shadow-2xs">
                        {item.day.slice(0, 3)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span className="font-bold text-[13px] text-[#10201D]">{item.subject}</span>
                          <span className="text-[9.5px] font-black uppercase bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[11.5px] text-[#66736F]">{item.topic}</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#001028] font-black">Daily 6 AM</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Share to Study Group Banner */}
            <div className="rounded-[18px] bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/10 border border-amber-400/50 p-4 text-left space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-xl">📢</span>
                <h4 className="font-black text-sm text-[#001830]">
                  Tell Your Friends on WhatsApp &amp; TikTok!
                </h4>
              </div>
              <p className="text-xs text-[#10201D] leading-relaxed">
                Download today's animated study note and post it on your WhatsApp Status or TikTok. Study together, hit 300+ in UTME, and ace WAEC in one sitting!
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('cards');
                  setIsShareModalOpen(true);
                }}
                className="px-4 py-2 rounded-xl bg-[#001028] text-white font-black text-xs shadow-md hover:bg-[#001830] transition cursor-pointer flex items-center space-x-1.5"
              >
                <span>🚀</span>
                <span>Share Today's Animated Note Now</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ─── SHARE ANIMATED STUDY NOTE MODAL (Branded for TikTok & WhatsApp) ─── */}
      {currentItem && (
        <ShareMorningTeaNoteModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          edition={activeEdition}
          item={currentItem}
          itemIndex={currentIndex}
          totalItems={items.length}
          onOpenVideoPlayer={() => handleOpenVideo(currentItem)}
        />
      )}

      {/* ─── VIDEO REEL PLAYER MODAL ─── */}
      {videoPlayerItem && (
        <MorningTeaVideoPlayer
          item={videoPlayerItem}
          subject={activeEdition.subject}
          editionTitle={activeEdition.title}
          isOpen={isVideoPlayerOpen}
          onClose={() => setIsVideoPlayerOpen(false)}
          onNext={handleNextVideo}
          onPrev={handlePrevVideo}
          hasNext={currentVideoIndex < items.length - 1}
          hasPrev={currentVideoIndex > 0}
        />
      )}
    </>
  );
};

export default MorningTeaModal;
