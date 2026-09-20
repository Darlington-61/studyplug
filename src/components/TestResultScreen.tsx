import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getExamTipForQuestion } from '../utils/examTips';
import { BoardExplanation } from './common/BoardExplanation';

export const TestResultScreen: React.FC = () => {
  const { lastTestResult, retakeTest, setActiveView, questions, toggleBookmarkQuestion, isQuestionBookmarked } = useApp();
  const [filter, setFilter] = useState<'all' | 'correct' | 'incorrect' | 'flagged'>('all');
  const [expandedExplanation, setExpandedExplanation] = useState<Record<number, boolean>>({});

  if (!lastTestResult) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-xl font-bold text-slate-800">No test results found</h2>
        <button
          type="button"
          onClick={() => setActiveView('dashboard')}
          className="mt-4 px-6 py-2.5 rounded-xl bg-[#0E382B] text-white font-bold text-xs"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const { score, total, accuracy, timeSpentSeconds, userAnswers, flaggedQuestions } = lastTestResult;
  const incorrectCount = total - score;

  const filteredQuestions = questions.filter((q) => {
    const isCorrect = userAnswers[q.questionNumber] === q.correctAnswer;
    if (filter === 'correct') return isCorrect;
    if (filter === 'incorrect') return !isCorrect;
    if (filter === 'flagged') return flaggedQuestions.includes(q.questionNumber);
    return true;
  });

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}m ${remainingSecs}s`;
  };

  const toggleExplanation = (qNum: number) => {
    setExpandedExplanation((prev) => ({ ...prev, [qNum]: !prev[qNum] }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-in fade-in">
      {/* Top Results Card */}
      <div className="bg-board-slate rounded-3xl p-6 sm:p-8 border-wood-frame shadow-2xl text-center space-y-6 text-white">
        <div className="inline-flex items-center space-x-2 bg-[#061710] text-[#FFCC00] px-4 py-1.5 rounded-full text-xs font-black border border-[#C4823F]">
          <span>✓ Examination Completed</span>
          <span>•</span>
          <span>{lastTestResult.subject}</span>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight chalk-text-white">
            Performance Summary
          </h1>
          <p className="text-xs sm:text-sm text-white/60 mt-1">
            Completed on {lastTestResult.date}
          </p>
        </div>

        {/* Score Ring / Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-2">
          {/* Score */}
          <div className="p-4 rounded-2xl bg-board-card border-2 border-[#C4823F]/60 shadow-md">
            <span className="text-[11px] font-bold text-white/60 uppercase">
              {lastTestResult.compositeScore ? 'Aggregate / JAMB' : 'Score'}
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#FFCC00] mt-1">
              {lastTestResult.compositeScore ? (
                <>
                  {lastTestResult.compositeScore} <span className="text-sm font-semibold text-white/50">/ 400</span>
                </>
              ) : (
                <>
                  {score} <span className="text-sm font-semibold text-white/50">/ {total}</span>
                </>
              )}
            </div>
          </div>

          {/* Accuracy */}
          <div className="p-4 rounded-2xl bg-board-card border-2 border-[#C4823F]/60 shadow-md">
            <span className="text-[11px] font-bold text-white/60 uppercase">Accuracy</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#34D399] mt-1">
              {accuracy}%
            </div>
          </div>

          {/* Time Taken */}
          <div className="p-4 rounded-2xl bg-board-card border-2 border-[#C4823F]/60 shadow-md">
            <span className="text-[11px] font-bold text-white/60 uppercase">Time Spent</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {formatTime(timeSpentSeconds)}
            </div>
          </div>

          {/* Grade */}
          <div className="p-4 rounded-2xl bg-board-card border-2 border-[#C4823F]/60 shadow-md">
            <span className="text-[11px] font-bold text-white/60 uppercase">Grade</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mt-1">
              {accuracy >= 75 ? 'Distinction' : accuracy >= 50 ? 'Credit' : 'Pass'}
            </div>
          </div>
        </div>

        {/* Multi-Subject Breakdown Grid */}
        {lastTestResult.subjectBreakdowns && lastTestResult.subjectBreakdowns.length > 1 && (
          <div className="pt-4 border-t border-[#C4823F]/30 max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFCC00] block text-left">
              JAMB UTME Subject Performance Breakdown:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              {lastTestResult.subjectBreakdowns.map((brk) => (
                <div key={brk.subject} className="p-3 rounded-xl bg-[#061710] border border-[#C4823F]/60 text-left">
                  <div className="text-xs font-bold text-white truncate">{brk.subject}</div>
                  <div className="text-base font-black text-[#FFCC00] mt-0.5">
                    {brk.score} <span className="text-[11px] font-normal text-white/60">/ {brk.total}</span>
                  </div>
                  <div className="text-[11px] font-bold text-[#34D399]">{brk.accuracy}% Accuracy</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={retakeTest}
            className="px-6 py-3 rounded-2xl bg-[#FFCC00] hover:bg-[#E5B800] text-[#071F15] font-black text-xs shadow-lg transition flex items-center space-x-2 cursor-pointer"
          >
            <span>Retake Test</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setActiveView('dashboard')}
            className="px-6 py-3 rounded-2xl border-2 border-[#C4823F]/70 bg-[#082218] hover:bg-[#0E3526] text-white font-extrabold text-xs transition cursor-pointer shadow-md"
          >
            Return to Dashboard
          </button>
        </div>
      </div>

      {/* Answer Key & Explanation Review */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-white tracking-tight chalk-text-white">Question Review</h2>
            <p className="text-xs text-white/60">Step-by-step classroom board explanations for all 50 questions</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 bg-[#061710] p-1 rounded-2xl border-2 border-[#C4823F]/60 shadow-md">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                filter === 'all' ? 'bg-[#FFCC00] text-[#071F15] font-black shadow-xs' : 'text-white/70 hover:text-white'
              }`}
            >
              All ({total})
            </button>
            <button
              type="button"
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                filter === 'correct' ? 'bg-emerald-500 text-[#071F15] font-black shadow-xs' : 'text-white/70 hover:text-white'
              }`}
            >
              Correct ({score})
            </button>
            <button
              type="button"
              onClick={() => setFilter('incorrect')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                filter === 'incorrect' ? 'bg-rose-500 text-white font-black shadow-xs' : 'text-white/70 hover:text-white'
              }`}
            >
              Incorrect ({incorrectCount})
            </button>
            <button
              type="button"
              onClick={() => setFilter('flagged')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                filter === 'flagged' ? 'bg-amber-400 text-[#071F15] font-black shadow-xs' : 'text-white/70 hover:text-white'
              }`}
            >
              Flagged ({flaggedQuestions.length})
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const userAnswer = userAnswers[q.questionNumber];
            const isCorrect = userAnswer === q.correctAnswer;
            const isFlagged = flaggedQuestions.includes(q.questionNumber);
            const isBookmarked = isQuestionBookmarked(q.id);
            const isExpanded = expandedExplanation[q.questionNumber] ?? true;

            return (
              <div
                key={q.id}
                className={`bg-board-slate rounded-3xl p-6 border-2 transition-all shadow-2xl text-white ${
                  isCorrect
                    ? 'border-emerald-400/80 ring-1 ring-emerald-400/40'
                    : userAnswer
                    ? 'border-rose-400/80 ring-1 ring-rose-400/40'
                    : 'border-[#C4823F]/60'
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#C4823F]/30">
                  <div className="flex items-center space-x-3">
                    <span className="font-extrabold text-sm text-white">
                      Question {q.questionNumber}
                    </span>
                    <span className="text-[10.5px] font-bold text-[#34D399] bg-[#082218] px-2.5 py-0.5 rounded-full border border-[#34D399]/40">
                      {q.topic}
                    </span>
                    {isFlagged && (
                      <span className="text-[10px] font-bold text-amber-300 bg-[#061710] px-2 py-0.5 rounded-full border border-amber-500/40">
                        Flagged
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Status badge */}
                    {isCorrect ? (
                      <span className="inline-flex items-center space-x-1 text-xs font-black text-[#071F15] bg-emerald-400 px-2.5 py-1 rounded-xl shadow-xs">
                        <span>✓ Correct (+1)</span>
                      </span>
                    ) : userAnswer ? (
                      <span className="inline-flex items-center space-x-1 text-xs font-black text-white bg-rose-600 px-2.5 py-1 rounded-xl shadow-xs">
                        <span>✕ Incorrect (0)</span>
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-white/60 bg-[#061710] border border-[#C4823F]/40 px-2.5 py-1 rounded-xl">
                        Unanswered
                      </span>
                    )}

                    {/* Bookmark Toggle */}
                    <button
                      type="button"
                      onClick={() => toggleBookmarkQuestion(q.id)}
                      className={`p-1.5 rounded-xl border transition cursor-pointer ${
                        isBookmarked ? 'bg-[#FFCC00] text-[#071F15] border-[#FFCC00]' : 'border-[#C4823F]/40 text-white/50 hover:text-white'
                      }`}
                      aria-label="Bookmark"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill={isBookmarked ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-4 h-4"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Question Prompt - Enlarged */}
                <p className="text-lg sm:text-xl font-bold text-white chalk-text-white mt-3 leading-relaxed">
                  {q.text}
                </p>

                {/* Options Review - Enlarged */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {q.options.map((opt) => {
                    const isSelected = userAnswer === opt.key;
                    const isKeyCorrect = q.correctAnswer === opt.key;

                    let cardStyle = 'border-[#C4823F]/30 bg-[#0A261B]/80 text-white';
                    if (isKeyCorrect) {
                      cardStyle = 'border-emerald-400 bg-emerald-950/70 text-emerald-200 font-bold ring-1 ring-emerald-400';
                    } else if (isSelected && !isKeyCorrect) {
                      cardStyle = 'border-rose-500 bg-rose-950/70 text-rose-300 line-through';
                    }

                    return (
                      <div
                        key={opt.key}
                        className={`p-3.5 sm:p-4 rounded-2xl border-2 flex items-center justify-between text-sm sm:text-base transition ${cardStyle}`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="w-8 h-8 rounded-xl bg-[#061710] border border-[#C4823F]/50 flex items-center justify-center font-black text-xs text-[#FFCC00] shadow-xs">
                            {opt.key}
                          </span>
                          <span className="font-bold">{opt.text}</span>
                        </div>

                        {isKeyCorrect && (
                          <span className="text-xs font-black text-[#071F15] bg-emerald-400 px-2.5 py-1 rounded-lg shadow-xs">
                            Correct Key ✓
                          </span>
                        )}
                        {isSelected && !isKeyCorrect && (
                          <span className="text-xs font-black text-white bg-rose-600 px-2.5 py-1 rounded-lg shadow-xs">
                            Your Choice ✕
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Step-by-step Solution with Board and High-Yield Exam Tip */}
                {isExpanded && (
                  <div className="mt-5 space-y-4">
                    {/* Authentic Classroom Board */}
                    <BoardExplanation
                      explanation={q.explanation}
                      subject={q.subject || 'JAMB'}
                      topic={q.topic || 'Calculation'}
                    />

                    {/* 💡 High-Yield JAMB Exam Tip Box */}
                    <div className="p-4 rounded-xl bg-[#082218] border-2 border-[#FFCC00]/80 text-amber-200 text-sm flex items-start space-x-3 mt-4">
                      <span className="text-2xl leading-none select-none">💡</span>
                      <div>
                        <span className="font-black text-[#FFCC00] block text-xs uppercase tracking-wider">
                          JAMB High-Yield Exam Tip:
                        </span>
                        <p className="text-white font-medium mt-1 leading-relaxed">
                          {getExamTipForQuestion(q.subject || 'JAMB', q.topic || 'General', q.text, q.explanation)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
