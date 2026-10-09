import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { ComprehensionPassageViewer } from './common/ComprehensionPassageViewer';
import { STUDENT_MASCOT_IMAGE } from '../assets/studentMascot';
import { ShareStudyCardModal } from './common/ShareStudyCardModal';

export const MathematicsTestScreen: React.FC = () => {
  const {
    currentQuestion,
    setCurrentQuestion,
    userAnswers,
    selectAnswer,
    clearAnswer,
    flaggedQuestions,
    toggleFlagQuestion,
    toggleBookmarkQuestion,
    isQuestionBookmarked,
    timeRemaining,
    setTimeRemaining,
    submitTest,
    setActiveView,
    goBack,
    questions,
    selectedSubject,
    selectedSubjects,
    activeExamSubject,
    switchActiveExamSubject,
    openAiTutor,
    openCalculator
  } = useApp();

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          submitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimeRemaining, submitTest]);

  // Scroll to top when question changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentQuestion]);

  // Keyboard navigation support authentic to official JAMB CBT terminals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key)) {
        selectAnswer(currentQuestion, key);
      } else if (key === 'P' || e.key === 'ArrowLeft') {
        setCurrentQuestion(Math.max(1, currentQuestion - 1));
      } else if (key === 'N' || e.key === 'ArrowRight') {
        setCurrentQuestion(Math.min(questions.length, currentQuestion + 1));
      } else if (key === 'R') {
        clearAnswer(currentQuestion);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, questions.length, selectAnswer, clearAnswer, setCurrentQuestion]);

  const formatTimer = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentQuestion - 1] || questions[0];
  const selectedOption = userAnswers[currentQuestion];
  const isBookmarked = currentQ ? isQuestionBookmarked(currentQ.id) : false;
  const isFlagged = flaggedQuestions.includes(currentQuestion);

  const displaySubject = activeExamSubject || selectedSubject || 'Mathematics';

  // Count answered questions in current subject
  const answeredInCurrentSubject = Object.keys(userAnswers).filter((k) => {
    const num = parseInt(k, 10);
    return num >= 1 && num <= questions.length && userAnswers[num];
  }).length;

  // Question number pill styling matching official JAMB CBT
  const getQuestionPaletteStyle = (num: number) => {
    const isCurrent = num === currentQuestion;
    const isAns = !!userAnswers[num];
    const isFlg = flaggedQuestions.includes(num);

    if (isCurrent) {
      return 'bg-[#0288D1] text-white font-extrabold ring-2 ring-[#0288D1]/40 shadow-sm';
    }
    if (isFlg) {
      return 'bg-[#EF4444] text-white font-bold';
    }
    if (isAns) {
      return 'bg-[#16A34A] text-white font-bold';
    }
    return 'bg-white text-gray-700 font-semibold border border-gray-300 hover:bg-gray-100';
  };

  const candidateSubjects = selectedSubjects && selectedSubjects.length > 0 
    ? selectedSubjects 
    : ['Use of English', 'Mathematics', 'Physics', 'Chemistry'];

  return (
    <div data-exam-content className="flex-1 flex flex-col bg-[#F3F5F4] min-h-screen text-[#1F2937] font-sans select-none">
      {/* ─── 1. OFFICIAL JAMB CBT TOP BANNER ─── */}
      <header className="w-full bg-[#001028] text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          {/* Left: Exit Button & Subject Navigation Tabs */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto no-scrollbar py-0.5">
            <button
              type="button"
              onClick={() => setIsExitModalOpen(true)}
              className="px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-[#F8C800] hover:text-white font-bold text-xs flex items-center space-x-1 transition cursor-pointer shrink-0 border border-white/10 shadow-xs"
              title="Exit Examination"
            >
              <span>←</span>
              <span>Exit</span>
            </button>
            {candidateSubjects.map((sub) => {
              const isActive = displaySubject.toLowerCase() === sub.toLowerCase();
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => switchActiveExamSubject(sub)}
                  className={`px-3 sm:px-4 py-1.5 rounded-md text-[11px] sm:text-xs font-bold uppercase tracking-wider transition cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#00332A] text-white border-b-2 border-emerald-400 shadow-inner'
                      : 'bg-white/10 hover:bg-white/20 text-emerald-100 hover:text-white'
                  }`}
                >
                  {sub}
                </button>
              );
            })}
          </div>

          {/* Right: Timer & Bookmark & Submit */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Bookmark Button in CBT Header */}
            {currentQ && (
              <button
                type="button"
                onClick={() => toggleBookmarkQuestion(currentQ.id)}
                className={`px-2.5 sm:px-3 py-1 rounded-md text-xs font-bold transition cursor-pointer flex items-center space-x-1 shadow-sm ${
                  isBookmarked
                    ? 'bg-amber-400 text-slate-950 font-black'
                    : 'bg-[#00332A] hover:bg-[#002820] text-emerald-200 border border-emerald-500/40'
                }`}
                title={isBookmarked ? 'Bookmarked (Click to remove)' : 'Bookmark Question'}
              >
                <span>{isBookmarked ? '★' : '🔖'}</span>
                <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Bookmark'}</span>
              </button>
            )}

            {/* Timer Badge */}
            <div className="flex items-center space-x-1.5 bg-[#00332A] px-2.5 sm:px-3 py-1 rounded-md border border-emerald-500/40 text-emerald-300 font-mono text-xs sm:text-sm font-bold shadow-inner">
              <span className="text-emerald-400">⏱</span>
              <span>{formatTimer(timeRemaining)}</span>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={() => setIsSubmitModalOpen(true)}
              className="px-3 sm:px-4 py-1.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-[#002820] font-black text-xs uppercase tracking-wider transition cursor-pointer shadow-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </header>

      {/* ─── 2. MAIN CBT VIEW (DESKTOP 2-COLUMN & MOBILE CLEAN) ─── */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* ─── LEFT COLUMN: QUESTION CANVAS (75% on Desktop) ─── */}
        <section className="lg:col-span-3 flex flex-col space-y-3">
          <div className="bg-white rounded-lg border border-gray-200 shadow-xs p-4 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              {/* Question Header: Subject Name + Question Number */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <div>
                  <h2 className="text-base sm:text-lg font-black text-[#001830] uppercase tracking-wide">
                    {displaySubject}
                  </h2>
                  <div className="flex items-center space-x-1.5 mt-0.5">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-[#001028] text-[#F8C800] border border-[#F8C800]/40 shadow-xs flex items-center space-x-1">
                      <span>Question {currentQuestion}</span>
                      <span className="text-[10px] text-slate-300 font-normal">of {questions.length}</span>
                    </span>
                  </div>
                </div>

                {/* Subtopic / Badges */}
                <div className="flex items-center space-x-2">
                  {currentQ?.repeatBadge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-extrabold bg-emerald-50 text-[#001830] border border-emerald-300 hidden sm:inline-block">
                      {currentQ.repeatBadge}
                    </span>
                  )}
                  {currentQ?.topic && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-gray-100 text-gray-600">
                      {currentQ.topic}
                    </span>
                  )}
                  {/* Bookmark Button in Question Card Header */}
                  <button
                    type="button"
                    onClick={() => toggleBookmarkQuestion(currentQ.id)}
                    className={`px-2.5 py-1 rounded-full text-xs font-bold border transition flex items-center space-x-1 cursor-pointer touch-press shadow-2xs ${
                      isBookmarked
                        ? 'bg-amber-100 text-amber-900 border-amber-400 font-extrabold ring-1 ring-amber-400/50'
                        : 'bg-white hover:bg-amber-50 text-gray-700 hover:text-amber-800 border-gray-300 hover:border-amber-400'
                    }`}
                    title={isBookmarked ? 'Bookmarked (Click to remove)' : 'Bookmark Question'}
                  >
                    <span className="text-amber-500 text-xs">{isBookmarked ? '★' : '🔖'}</span>
                    <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>

                  {/* Share Question Card Button */}
                  <button
                    type="button"
                    onClick={() => setIsShareModalOpen(true)}
                    className="px-2.5 py-1 rounded-full text-xs font-bold border border-gray-300 hover:border-emerald-400 bg-white hover:bg-emerald-50 text-gray-700 hover:text-[#001830] transition flex items-center space-x-1 cursor-pointer touch-press shadow-2xs"
                    title="Share Question as Study Card"
                  >
                    <span>📤</span>
                    <span>Share</span>
                  </button>
                </div>
              </div>

              {/* ─── EXTRACTED DIAGRAM RENDERING (Direct imageUrl, embedded img tag, or SVG) ─── */}
              {(() => {
                const diagramSrc = currentQ?.imageUrl || 
                  (currentQ?.text ? (currentQ.text.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1] || currentQ.text.match(/!\[[^\]]*\]\(([^)]+)\)/i)?.[2]) : null);

                if (diagramSrc) {
                  return (
                    <div className="my-4 p-3.5 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col items-center justify-center">
                      <img
                        src={diagramSrc}
                        alt={`Diagram for ${displaySubject} Question ${currentQuestion}`}
                        className="max-h-64 sm:max-h-80 max-w-full object-contain rounded-lg"
                        loading="eager"
                      />
                      <span className="text-[11px] text-gray-500 mt-2 font-medium">
                        Diagram for Question {currentQuestion}
                      </span>
                    </div>
                  );
                }
                if (currentQ?.imageSvg) {
                  return (
                    <div
                      className="my-4 p-3 bg-[#FAFAFA] rounded-md border border-gray-200 flex justify-center overflow-x-auto"
                      dangerouslySetInnerHTML={{ __html: currentQ.imageSvg }}
                    />
                  );
                }
                return null;
              })()}

              {/* Question Text & Comprehension Passage (with Diagram & Math support) */}
              <div className="pt-2">
                <ComprehensionPassageViewer
                  text={currentQ?.text ? currentQ.text.replace(/<img[^>]*>/gi, '').replace(/!\[[^\]]*\]\([^)]+\)/gi, '').trim() : ''}
                  passage={currentQ?.passage}
                  explanation={currentQ?.explanation}
                  subject={displaySubject}
                  defaultExpanded={false}
                />
              </div>

              {/* ─── AUTHENTIC JAMB RADIO OPTIONS (A, B, C, D) ─── */}
              <div className="space-y-2.5 pt-4">
                {(Array.isArray(currentQ?.options)
                  ? currentQ.options
                  : Object.entries(currentQ?.options || {}).map(([key, text]) => ({
                      key,
                      text: String(text)
                    }))
                ).map((opt) => {
                  const isSelected = selectedOption === opt.key;
                  return (
                    <div
                      key={opt.key}
                      onClick={() => selectAnswer(currentQuestion, opt.key)}
                      className={`w-full p-3 sm:p-3.5 rounded-md border transition cursor-pointer flex items-center space-x-3.5 ${
                        isSelected
                          ? 'border-[#001830] bg-[#F8F8F8]/50 shadow-xs'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/50'
                      }`}
                    >
                      {/* Option Key: (A), (B), (C), (D) */}
                      <span className="text-xs sm:text-sm font-bold text-gray-700 shrink-0">
                        ({opt.key})
                      </span>

                      {/* Official Round Radio Circle */}
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'border-[#001830] bg-white'
                            : 'border-gray-400 bg-white'
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-[#001830]" />
                        )}
                      </div>

                      {/* Option Text */}
                      <span className="text-[14px] sm:text-[15px] font-medium text-gray-800 leading-snug flex-1">
                        {opt.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ─── BOTTOM CONTROLS & 40-QUESTION NUMBER GRID ─── */}
            <div className="pt-6 border-t border-gray-200 mt-6 space-y-4">
              <div className="flex items-center justify-between gap-2">
                {/* PREVIOUS BUTTON */}
                <button
                  type="button"
                  onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
                  disabled={currentQuestion <= 1}
                  className={`px-4 sm:px-6 py-2 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition cursor-pointer shadow-xs ${
                    currentQuestion <= 1
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-[#001830] hover:bg-[#001028] text-white'
                  }`}
                >
                  Previous
                </button>

                {/* CLEAR OPTION BUTTON */}
                <button
                  type="button"
                  onClick={() => clearAnswer(currentQuestion)}
                  className="px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 text-gray-600 font-semibold text-xs transition cursor-pointer"
                >
                  Clear Selection
                </button>

                {/* BOOKMARK BUTTON IN BOTTOM BAR */}
                {currentQ && (
                  <button
                    type="button"
                    onClick={() => toggleBookmarkQuestion(currentQ.id)}
                    className={`px-3 py-2 rounded-md border text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 shadow-2xs ${
                      isBookmarked
                        ? 'bg-amber-100 text-amber-900 border-amber-400 font-extrabold ring-1 ring-amber-400/50'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-amber-50 hover:border-amber-400 hover:text-amber-800'
                    }`}
                    title={isBookmarked ? 'Bookmarked (Click to remove)' : 'Bookmark Question'}
                  >
                    <span className="text-amber-500">{isBookmarked ? '★' : '🔖'}</span>
                    <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                  </button>
                )}

                {/* SHARE BUTTON IN BOTTOM BAR */}
                <button
                  type="button"
                  onClick={() => setIsShareModalOpen(true)}
                  className="px-3 py-2 rounded-md border border-gray-300 hover:border-emerald-400 bg-white hover:bg-emerald-50 text-gray-700 hover:text-[#001830] text-xs font-bold transition cursor-pointer flex items-center space-x-1"
                  title="Share Question Card"
                >
                  <span>📤</span>
                  <span>Share</span>
                </button>

                {/* MOBILE PALETTE TRIGGER BUTTON: Highly Visible */}
                <button
                  type="button"
                  onClick={() => setIsMobilePaletteOpen(true)}
                  className="lg:hidden px-3 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#001830] font-extrabold text-xs border border-emerald-300 shadow-2xs transition cursor-pointer flex items-center space-x-1"
                  title="Click to view all questions palette"
                >
                  <span>📋</span>
                  <span>Palette ({currentQuestion}/{questions.length})</span>
                  <span className="text-[10px] bg-emerald-200/90 px-1 py-0.2 rounded font-bold">View ▾</span>
                </button>

                <div className="flex items-center space-x-2">
                  {/* EXPLICIT SUBMIT BUTTON — ALWAYS WRITTEN */}
                  <button
                    type="button"
                    onClick={() => setIsSubmitModalOpen(true)}
                    className="px-4 sm:px-5 py-2 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider transition cursor-pointer shadow-sm flex items-center space-x-1"
                    title="Submit CBT Exam"
                  >
                    <span>✓</span>
                    <span>Submit</span>
                  </button>

                  {/* NEXT BUTTON */}
                  {currentQuestion < questions.length && (
                    <button
                      type="button"
                      onClick={() => setCurrentQuestion(Math.min(questions.length, currentQuestion + 1))}
                      className="px-4 sm:px-6 py-2 rounded-md bg-[#001830] hover:bg-[#001028] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition cursor-pointer shadow-xs"
                    >
                      Next &rarr;
                    </button>
                  )}
                </div>
              </div>

              {/* ─── PERMANENT 40-QUESTION NUMBER GRID (OFFICIAL JAMB CBT STYLE) ─── */}
              <div className="hidden lg:block pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-2">
                  <span>Questions in {displaySubject}:</span>
                  <div className="flex items-center space-x-3 text-[11px]">
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-[#16A34A] inline-block" />
                      <span>Answered</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-[#0288D1] inline-block" />
                      <span>Current</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-[#EF4444] inline-block" />
                      <span>Flagged</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-white border border-gray-300 inline-block" />
                      <span>Unanswered</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {Array.from({ length: questions.length }, (_, i) => i + 1).map((num) => {
                    const qId = questions[num - 1]?.id;
                    const isBkm = qId ? isQuestionBookmarked(qId) : false;
                    return (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCurrentQuestion(num)}
                        className={`w-7 h-7 rounded text-[11px] font-bold flex items-center justify-center transition cursor-pointer relative ${getQuestionPaletteStyle(
                          num
                        )}`}
                      >
                        <span>{num}</span>
                        {isBkm && (
                          <span className="absolute top-0 right-0.5 text-[8px] text-amber-400 font-bold leading-none">
                            ★
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── RIGHT COLUMN: CANDIDATE DETAILS SIDEBAR (Desktop 25%) ─── */}
        <aside className="hidden lg:flex flex-col space-y-4">
          <div className="bg-white rounded-lg border border-gray-200 shadow-xs p-4 space-y-4 text-center">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider text-left border-b border-gray-100 pb-2">
              Candidate Details
            </h3>

            {/* QR Code & Passport Photo */}
            <div className="flex items-center justify-center space-x-3 pt-1">
              {/* Clean SVG QR Code */}
              <div className="w-16 h-16 bg-white p-1 rounded border border-gray-200 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-14 h-14 text-gray-800" fill="currentColor">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm8-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14-2h2v2h-2v-2zm-4 0h2v4h-2v-4zm2 4h2v2h-2v-2zm2 0h2v4h-4v-2h2v-2zm-4 2h2v2h-2v-2z" />
                </svg>
              </div>

              {/* Student Passport Photo */}
              <div className="w-16 h-16 rounded-md overflow-hidden border border-gray-300 shadow-xs">
                <img
                  src={STUDENT_MASCOT_IMAGE}
                  alt="Candidate Passport"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Candidate Identity */}
            <div className="space-y-0.5 text-center">
              <h4 className="text-xs font-black text-gray-900 uppercase tracking-tight">
                EHIBOR PRECIOUS OFURE
              </h4>
              <p className="text-[11px] font-mono text-gray-500 font-medium">
                2026/UTME/948210 • Seat C-14
              </p>
            </div>

            {/* Live Attempted Counter (Exact Replica of CBT Screen) */}
            <div className="bg-[#F8FAF9] p-3 rounded-md border border-gray-200 text-center space-y-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                Attempted
              </span>
              <div className="text-xl font-black text-[#001830]">
                {answeredInCurrentSubject} OF {questions.length}
              </div>
              <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wide">
                {displaySubject}
              </div>
              <div className="text-[10.5px] text-gray-400 pt-1 border-t border-gray-200 font-medium">
                Total Exam: {Object.keys(userAnswers).length} Attempted
              </div>
            </div>

            {/* Quick Action Tools */}
            <div className="space-y-2 pt-2 border-t border-gray-100 text-left">
              <button
                type="button"
                onClick={() => toggleFlagQuestion(currentQuestion)}
                className={`w-full py-2 px-3 rounded-md text-xs font-bold transition flex items-center justify-between cursor-pointer ${
                  isFlagged
                    ? 'bg-rose-50 text-rose-700 border border-rose-200'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                <span>🚩 {isFlagged ? 'Question Flagged' : 'Flag Question'}</span>
                <span className="text-[10px] text-gray-400">Review later</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  openAiTutor({
                    question: currentQ,
                    userSelectedOption: selectedOption,
                    subject: displaySubject,
                    topic: currentQ?.topic
                  })
                }
                className="w-full py-2 px-3 rounded-md text-xs font-bold bg-[#F8F8F8] text-[#001028] hover:bg-[#E8E8E8] transition flex items-center justify-between cursor-pointer border border-[#E8E8E8]"
              >
                <span>⚡ Ask AI Tutor</span>
                <span className="text-[10px] text-[#001028]/70">Explain concept</span>
              </button>
            </div>

            {/* Final Submit Exam Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(true)}
                className="w-full py-2.5 rounded-md bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-extrabold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm"
              >
                End Examination
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* ─── MOBILE PALETTE MODAL / DRAWER ─── */}
      {isMobilePaletteOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-3 animate-page-enter">
          <div className="bg-white rounded-t-xl sm:rounded-xl max-w-md w-full p-4 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
              <div>
                <h3 className="font-black text-sm text-[#001830] uppercase tracking-wide">
                  {displaySubject} Questions
                </h3>
                <p className="text-[11px] text-gray-500">
                  Tap any number to jump directly
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMobilePaletteOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-lg font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-8 gap-1.5 max-h-60 overflow-y-auto p-1">
              {Array.from({ length: questions.length }, (_, i) => i + 1).map((num) => {
                const qId = questions[num - 1]?.id;
                const isBkm = qId ? isQuestionBookmarked(qId) : false;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => {
                      setCurrentQuestion(num);
                      setIsMobilePaletteOpen(false);
                    }}
                    className={`h-8 rounded text-xs font-bold flex items-center justify-center transition cursor-pointer relative ${getQuestionPaletteStyle(
                      num
                    )}`}
                  >
                    <span>{num}</span>
                    {isBkm && (
                      <span className="absolute top-0 right-0.5 text-[8px] text-amber-400 font-bold leading-none">
                        ★
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setIsMobilePaletteOpen(false)}
              className="w-full py-2 rounded-md bg-gray-100 text-gray-700 font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ─── CONFIRMATION MODAL BEFORE SUBMISSION ─── */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-page-enter">
          <div className="bg-white rounded-xl max-w-sm w-full p-5 space-y-4 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mx-auto">
              ✓
            </div>
            <div>
              <h3 className="text-base font-extrabold text-gray-900">
                Submit Examination?
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                You have answered <strong className="text-[#001830]">{Object.keys(userAnswers).length}</strong> questions across your selected subjects.
              </p>
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(false)}
                className="flex-1 py-2.5 rounded-md border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold text-xs cursor-pointer"
              >
                Continue Exam
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitModalOpen(false);
                  submitTest();
                }}
                className="flex-1 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs cursor-pointer shadow-sm"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── EXIT CONFIRMATION MODAL ─── */}
      {isExitModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-[24px] bg-white border border-[#E8E8E8] shadow-2xl p-6 text-center space-y-4 animate-in fade-in zoom-in-95">
            <div className="w-12 h-12 rounded-2xl bg-[#001028] text-[#F8C800] flex items-center justify-center text-xl mx-auto shadow-sm">
              🚪
            </div>
            <div>
              <h3 className="text-base font-black text-[#001028]">Exit Examination?</h3>
              <p className="text-xs text-[#607080] mt-1 leading-relaxed">
                Are you sure you want to leave this test session? You can submit your current answers to view your score, or return to the dashboard.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsExitModalOpen(false);
                  submitTest();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#001028] hover:bg-[#001830] text-[#F8C800] font-bold text-xs transition cursor-pointer shadow-sm"
              >
                Submit &amp; View Results
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsExitModalOpen(false);
                  goBack();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs border border-red-200 transition cursor-pointer"
              >
                Exit without Submitting
              </button>
              <button
                type="button"
                onClick={() => setIsExitModalOpen(false)}
                className="w-full py-2 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition cursor-pointer"
              >
                Continue Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── MODAL: Share Question as Study Card ─── */}
      <ShareStudyCardModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        mode="question"
        questionData={currentQ ? {
          id: currentQ.id,
          subject: displaySubject,
          examType: (currentQ as any).examType || 'JAMB/WAEC',
          year: currentQ.year,
          topic: currentQ.topic,
          subtopic: (currentQ as any).subtopic,
          text: currentQ.text,
          options: currentQ.options,
          correctAnswer: currentQ.correctAnswer,
          explanation: currentQ.explanation,
          imageUrl: currentQ.imageUrl
        } : null}
      />
    </div>
  );
};
