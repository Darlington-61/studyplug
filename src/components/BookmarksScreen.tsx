import React from 'react';
import { useApp } from '../context/AppContext';

export const BookmarksScreen: React.FC = () => {
  const { bookmarks, toggleBookmarkQuestion, allQuestions, setActiveView } = useApp();

  const bookmarkedQuestions = allQuestions.filter((q) => bookmarks.includes(q.id));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6 animate-in fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-white/50 mb-1">
            <button
              type="button"
              onClick={() => setActiveView('dashboard')}
              className="hover:text-[#FFCC00] transition cursor-pointer"
            >
              Dashboard
            </button>
            <span>/</span>
            <span className="text-[#FFCC00] font-bold">Saved Bookmarks</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight chalk-text-white">
            Bookmarked Questions ({bookmarkedQuestions.length})
          </h1>
          <p className="text-xs text-white/60 mt-1">
            Review difficult questions and formulas you flagged during study sessions.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActiveView('dashboard')}
          className="px-5 py-2.5 rounded-2xl border-2 border-[#C4823F]/70 bg-[#082218] hover:bg-[#0E3526] text-white font-bold text-xs transition cursor-pointer self-start sm:self-auto shadow-md"
        >
          ← Return to Dashboard
        </button>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <div className="bg-board-card rounded-3xl p-12 text-center border-wood-frame shadow-2xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#061710] text-[#FFCC00] border border-[#C4823F] mx-auto flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white chalk-text-white">No Bookmarks Saved Yet</h2>
          <p className="text-xs text-white/60 max-w-sm mx-auto">
            Click the bookmark ribbon icon on any question during test or practice to save it here for quick review.
          </p>
          <button
            type="button"
            onClick={() => setActiveView('test')}
            className="px-6 py-2.5 rounded-xl bg-[#FFCC00] hover:bg-[#E5B800] text-[#071F15] font-black text-xs shadow-lg cursor-pointer transition"
          >
            Start Mathematics Test
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {bookmarkedQuestions.map((q) => (
            <div
              key={q.id}
              className="bg-board-slate rounded-3xl p-6 border-wood-frame shadow-2xl space-y-4 text-white"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#C4823F]/30">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold text-sm text-white">
                    Question {q.questionNumber}
                  </span>
                  <span className="text-[10.5px] font-bold text-[#071F15] bg-[#FFCC00] px-2 py-0.5 rounded-full">
                    {q.subject}
                  </span>
                  {q.year && (
                    <span className="text-[10px] font-bold text-[#FFCC00] bg-[#0E3526] px-2 py-0.5 rounded-md border border-[#C4823F]">
                      JAMB {q.year}
                    </span>
                  )}
                  <span className="text-[10.5px] font-bold text-[#34D399] bg-[#082218] px-2 py-0.5 rounded-full border border-[#34D399]/40">
                    {q.topic}
                  </span>
                  <span className="text-[10px] font-bold text-amber-300 bg-[#061710] px-2 py-0.5 rounded-full border border-amber-500/40">
                    {q.difficulty}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => toggleBookmarkQuestion(q.id)}
                  className="px-3 py-1 rounded-xl bg-rose-950/60 text-rose-300 hover:bg-rose-900/80 font-bold text-xs transition flex items-center space-x-1 cursor-pointer border border-rose-500/50"
                >
                  <span>Remove Bookmark</span>
                  <span className="text-sm leading-none">✕</span>
                </button>
              </div>

              <p className="text-base font-semibold text-white chalk-text-white leading-relaxed">
                {q.text}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt) => {
                  const isCorrect = q.correctAnswer === opt.key;
                  return (
                    <div
                      key={opt.key}
                      className={`p-3 rounded-2xl border-2 text-xs flex items-center justify-between ${
                        isCorrect
                          ? 'border-emerald-400 bg-emerald-950/70 font-bold text-emerald-200 ring-1 ring-emerald-400'
                          : 'border-[#C4823F]/30 bg-[#0A261B]/80 text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-5 h-5 rounded-md bg-[#061710] text-[#FFCC00] border border-[#C4823F]/50 flex items-center justify-center font-black text-[10.5px]">
                          {opt.key}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                      {isCorrect && (
                        <span className="text-[10.5px] font-extrabold text-[#071F15] bg-emerald-400 px-2 py-0.5 rounded">
                          Correct Key ✓
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#061C14] border-2 border-[#FFCC00]/50 text-xs text-white/90 leading-relaxed">
                <span className="font-extrabold text-[#FFCC00] block mb-0.5">Explanation:</span>
                {q.explanation}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
