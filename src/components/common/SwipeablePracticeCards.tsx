import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Question } from '../../data/questions';

interface LessonNoteMeta {
  subject: string;
  topic: string;
  subtopic?: string;
}

interface SwipeablePracticeCardsProps {
  questions: Question[];
  note: LessonNoteMeta;
  onBackToNotes: () => void;
  onMarkMastered?: () => void;
}

export const SwipeablePracticeCards: React.FC<SwipeablePracticeCardsProps> = ({
  questions,
  note,
  onBackToNotes,
  onMarkMastered
}) => {
  // Cap strictly to Top 10 high-yield questions
  const top10Questions = questions.slice(0, 10);
  const total = top10Questions.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | 'none'>('none');

  // Touch Swipe Gesture State
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);

  const currentQ = top10Questions[currentIndex];

  const handleSelectOption = (qId: number, key: string) => {
    if (userAnswers[qId]) return; // lock answer once selected
    setUserAnswers(prev => ({ ...prev, [qId]: key }));
  };

  const toggleSolution = (qId: number) => {
    setRevealedSolutions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const goToNext = useCallback(() => {
    if (currentIndex < total - 1) {
      setSlideDirection('left');
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
      if (onMarkMastered) onMarkMastered();
    }
  }, [currentIndex, total, onMarkMastered]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setSlideDirection('right');
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Touch Handlers for Mobile Swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartXRef.current;
    const diffY = currentY - touchStartYRef.current;

    // Only apply horizontal swipe if not scrolling vertically
    if (Math.abs(diffX) > Math.abs(diffY)) {
      setTouchDeltaX(diffX);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null) return;
    const threshold = 55; // swipe sensitivity threshold
    if (touchDeltaX < -threshold) {
      // Swiped Left -> Next
      goToNext();
    } else if (touchDeltaX > threshold) {
      // Swiped Right -> Prev
      goToPrev();
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    setTouchDeltaX(0);
  };

  // Keyboard navigation (Left / Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Score statistics
  const score = top10Questions.reduce((acc, q) => {
    const ans = userAnswers[q.id];
    const correctKey = q.correct_option || q.correctAnswer;
    return ans && ans === correctKey ? acc + 1 : acc;
  }, 0);

  const restartQuiz = () => {
    setUserAnswers({});
    setRevealedSolutions({});
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  if (total === 0) {
    return (
      <div className="p-8 text-center bg-[#071F15] rounded-3xl border border-[#C4823F]/30 space-y-4">
        <span className="text-4xl">📚</span>
        <h3 className="text-white font-bold text-base">No questions found for this topic yet.</h3>
        <button
          type="button"
          onClick={onBackToNotes}
          className="px-5 py-2.5 rounded-xl bg-[#00BCD4] text-white font-bold text-xs hover:bg-[#00acc1] transition cursor-pointer"
        >
          ← Back to Lesson Notes
        </button>
      </div>
    );
  }

  // Completion Slide (Results)
  if (isCompleted) {
    const percent = Math.round((score / total) * 100);
    const isMastered = percent >= 70;

    return (
      <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#092b1e] to-[#04150e] border-2 border-[#C4823F] shadow-2xl text-center space-y-6 animate-fadeIn">
        <div className="text-5xl">{isMastered ? '🏆' : '🎯'}</div>

        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-widest text-[#FFEA79]">
            Top 10 High-Yield Drill Completed
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {isMastered ? 'Topic Mastery Achieved!' : 'Good Practice Run!'}
          </h2>
          <p className="text-xs text-white/60">
            {note.subject} • {note.subtopic || note.topic}
          </p>
        </div>

        {/* Score Circle */}
        <div className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-full bg-[#061710] border-4 border-[#C4823F] shadow-inner my-2">
          <span className="text-3xl font-black text-[#FFCC00]">{score} / {total}</span>
          <span className="text-xs font-bold text-[#34D399] mt-0.5">{percent}% Score</span>
        </div>

        {isMastered && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-black">
            <span>🎉</span>
            <span>+50 XP Added to Your StudyPlug Rank</span>
          </div>
        )}

        <div className="text-xs text-white/70 max-w-md mx-auto leading-relaxed">
          {isMastered
            ? 'Excellent work! You have proven solid understanding of the most frequently repeated exam questions for this topic.'
            : 'You encountered classic recurring exam traps. Review the solutions below and re-drill to achieve full 100% confidence!'}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <button
            type="button"
            onClick={restartQuiz}
            className="px-6 py-3 rounded-xl bg-[#FFCC00] text-[#061710] font-black text-xs hover:bg-yellow-300 transition shadow-lg cursor-pointer flex items-center gap-1.5"
          >
            <span>🔄</span>
            <span>Re-drill Top 10 Questions</span>
          </button>

          <button
            type="button"
            onClick={onBackToNotes}
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition cursor-pointer flex items-center gap-1.5"
          >
            <span>📖</span>
            <span>Return to Lesson Note</span>
          </button>
        </div>
      </div>
    );
  }

  const userChoice = userAnswers[currentQ.id];
  const correctKey = currentQ.correct_option || currentQ.correctAnswer || 'A';
  const isAnswered = !!userChoice;
  const isUserCorrect = isAnswered && userChoice === correctKey;
  const isSolutionShown = !!revealedSolutions[currentQ.id];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      {/* ─── Top Bar: Back Button + Progress Segments ─── */}
      <div className="flex items-center justify-between gap-3 pb-1">
        <button
          type="button"
          onClick={onBackToNotes}
          className="text-[#00BCD4] text-xs font-bold hover:underline cursor-pointer flex items-center gap-1 shrink-0"
        >
          <span>←</span>
          <span>Back to Notes</span>
        </button>

        <div className="text-[11px] font-black text-white/60 shrink-0">
          Question <span className="text-[#FFCC00]">{currentIndex + 1}</span> of {total}
        </div>
      </div>

      {/* ─── 10-Segment Interactive Progress Indicator ─── */}
      <div className="grid grid-cols-10 gap-1.5 w-full">
        {top10Questions.map((q, idx) => {
          const ans = userAnswers[q.id];
          const qCorrectKey = q.correct_option || q.correctAnswer;
          const isCurr = idx === currentIndex;
          let pillBg = 'bg-white/10';
          if (ans) {
            pillBg = ans === qCorrectKey ? 'bg-emerald-500 shadow-xs shadow-emerald-500/50' : 'bg-rose-500 shadow-xs shadow-rose-500/50';
          }
          if (isCurr) {
            pillBg += ' ring-2 ring-[#00BCD4] ring-offset-1 ring-offset-[#061710] scale-105';
          }

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => {
                setCurrentIndex(idx);
              }}
              title={`Question ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${pillBg}`}
            />
          );
        })}
      </div>

      {/* ─── Main Swipeable Card (FlashLearners Style) ─── */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: touchDeltaX !== 0 ? `translateX(${touchDeltaX * 0.4}px)` : undefined,
          transition: touchDeltaX === 0 ? 'transform 0.2s ease-out' : 'none'
        }}
        className="relative rounded-3xl p-5 sm:p-7 border-2 border-[#C4823F]/50 bg-gradient-to-b from-[#0a271c] via-[#071F15] to-[#04150e] shadow-2xl backdrop-blur-md select-none"
      >
        {/* Card Header: Topic Badge + Repeated Question Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-1.5">
            {/* Repeated Question Badge */}
            {currentQ.isRepeated || currentQ.repeatBadge ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-black tracking-wide uppercase shadow-xs">
                <span>🔥</span>
                <span>{currentQ.repeatBadge || 'High-Yield Repeated Question'}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#00BCD4]/15 text-[#00BCD4] border border-[#00BCD4]/30 text-[10px] font-black uppercase">
                <span>🎯</span>
                <span>Top Syllabus Drill</span>
              </span>
            )}

            {currentQ.year && (
              <span className="px-2 py-0.5 rounded-md bg-black/40 text-white/60 text-[10px] font-bold border border-white/10">
                JAMB {currentQ.year}
              </span>
            )}
          </div>

          {/* Swipe Hint Pill */}
          <span className="text-[10px] font-bold text-white/30 hidden sm:inline-flex items-center gap-1">
            <span>👈</span>
            <span>Swipe Card</span>
            <span>👉</span>
          </span>
        </div>

        {/* Subtopic Breadcrumb */}
        <div className="text-[11px] font-bold text-[#34D399] uppercase tracking-wider mb-2">
          {currentQ.subtopic || currentQ.topic}
        </div>

        {/* Question Text */}
        <div className="mb-6">
          <p className="text-white text-sm sm:text-base font-bold leading-relaxed">
            {currentQ.text || (currentQ as any).question}
          </p>
        </div>

        {/* 4 Interactive Option Cards (A, B, C, D) */}
        <div className="space-y-2.5 mb-5">
          {(['A', 'B', 'C', 'D'] as const).map(optKey => {
            let optText = '';
            if (currentQ.optionsMap && currentQ.optionsMap[optKey]) {
              optText = currentQ.optionsMap[optKey];
            } else if (Array.isArray(currentQ.options)) {
              const match = currentQ.options.find(o => o.key === optKey);
              if (match) optText = match.text;
            } else if (typeof currentQ.options === 'object' && (currentQ.options as any)[optKey]) {
              optText = (currentQ.options as any)[optKey];
            }

            if (!optText) return null;

            const isChosen = userChoice === optKey;
            const isRight = isAnswered && correctKey === optKey;
            const isWrong = isAnswered && isChosen && !isRight;

            let cardStyle = 'bg-white/5 border-white/10 text-white/85 hover:bg-white/10 hover:border-white/20';

            if (isAnswered) {
              if (isRight) {
                cardStyle = 'bg-emerald-950/70 border-emerald-400 text-emerald-100 font-bold ring-2 ring-emerald-400/60 shadow-lg shadow-emerald-500/20';
              } else if (isWrong) {
                cardStyle = 'bg-rose-950/60 border-rose-500 text-rose-200 line-through opacity-85';
              } else {
                cardStyle = 'bg-white/3 border-white/5 text-white/40 opacity-50';
              }
            }

            return (
              <button
                key={optKey}
                type="button"
                onClick={() => handleSelectOption(currentQ.id, optKey)}
                disabled={isAnswered}
                className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${cardStyle}`}
              >
                <div className="flex items-center space-x-3 pr-2">
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                    isRight
                      ? 'bg-emerald-500 text-black'
                      : isWrong
                      ? 'bg-rose-500 text-white'
                      : 'bg-black/40 text-[#FFCC00] border border-white/10'
                  }`}>
                    {optKey}
                  </span>
                  <span className="leading-snug">{optText}</span>
                </div>

                {isAnswered && (
                  <span className="shrink-0 text-xs font-black">
                    {isRight && '✓ Correct'}
                    {isWrong && '✗'}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Instant Answer Feedback Banner */}
        {isAnswered && (
          <div className={`p-3 rounded-xl border text-xs leading-relaxed flex items-center justify-between gap-2 mb-4 ${
            isUserCorrect
              ? 'bg-emerald-950/70 border-emerald-500/50 text-emerald-200'
              : 'bg-rose-950/70 border-rose-500/50 text-rose-200'
          }`}>
            <span className="font-bold">
              {isUserCorrect ? '🎉 Correct! Spot on.' : `💡 Incorrect. Correct answer is Option (${correctKey}).`}
            </span>

            <button
              type="button"
              onClick={() => toggleSolution(currentQ.id)}
              className="text-[#FFCC00] font-black text-xs underline cursor-pointer shrink-0 ml-2"
            >
              {isSolutionShown ? 'Hide Solution' : 'View Solution'}
            </button>
          </div>
        )}

        {/* Step-by-Step Explanation Drawer */}
        {isSolutionShown && (
          <div className="mb-4 p-4 rounded-2xl bg-[#061710] border border-[#C4823F]/40 text-xs sm:text-sm leading-relaxed text-white/90 animate-fadeIn">
            <div className="text-[#FFEA79] font-black text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span>💡</span>
              <span>Chief Examiner's Step-by-Step Solution:</span>
            </div>
            <div className="text-white/80 mt-1 whitespace-pre-line">
              {currentQ.explanation || `The correct answer is Option (${correctKey}) based on official syllabus core principles.`}
            </div>
          </div>
        )}

        {/* ─── Bottom Navigation Buttons ─── */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
          <button
            type="button"
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center gap-1.5 ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed bg-white/5 text-white/40'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          <span className="text-[11px] font-bold text-white/40">
            {currentIndex + 1} / {total}
          </span>

          <button
            type="button"
            onClick={goToNext}
            className="px-5 py-2.5 rounded-xl bg-[#00BCD4] hover:bg-[#00acc1] text-white font-black text-xs transition shadow-md shadow-[#00BCD4]/30 cursor-pointer flex items-center gap-1.5"
          >
            <span>{currentIndex === total - 1 ? 'Finish Drill 🏆' : 'Next Card →'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
