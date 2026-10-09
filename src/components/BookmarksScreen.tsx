import React from 'react';
import { useApp } from '../context/AppContext';
import { formatMathAndHtml } from '../utils/mathFormatter';

export const BookmarksScreen: React.FC = () => {
  const { bookmarks, toggleBookmarkQuestion, allQuestions, setActiveView, goBack } = useApp();

  const bookmarkedQuestions = allQuestions.filter((q) => bookmarks.includes(q.id));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6 animate-in fade-in select-none">
      {/* Header Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#001830]">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400 mb-1">
            <button
              type="button"
              onClick={() => goBack()}
              className="hover:text-[#F8C800] transition cursor-pointer"
            >
              ← Back
            </button>
            <span>/</span>
            <span className="text-[#F8C800] font-bold">Saved Bookmarks</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Bookmarked Questions ({bookmarkedQuestions.length})
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Review questions, mathematical formulas, and examiner explanations you flagged for revision.
          </p>
        </div>

        <button
          type="button"
          onClick={() => goBack()}
          className="px-4 py-2 rounded-xl bg-[#001830] hover:bg-[#002448] text-[#F8C800] border border-[#F8C800]/40 font-bold text-xs transition cursor-pointer self-start sm:self-auto shadow-sm"
        >
          ← Return to Dashboard
        </button>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <div className="bg-[#001028] rounded-[24px] p-10 text-center border border-[#001830] shadow-xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#001830] text-[#F8C800] border border-[#F8C800]/40 mx-auto flex items-center justify-center text-2xl shadow-inner">
            🔖
          </div>
          <h2 className="text-lg font-bold text-white">No Bookmarks Saved Yet</h2>
          <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
            Click the bookmark ribbon icon on any question during test or practice to save it here for quick review.
          </p>
          <button
            type="button"
            onClick={() => setActiveView('practice')}
            className="px-6 py-2.5 rounded-xl bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-black text-xs shadow-md cursor-pointer transition active:scale-95"
          >
            Start CBT Practice
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {bookmarkedQuestions.map((q, idx) => (
            <div
              key={q.id || idx}
              className="bg-[#001028] rounded-[24px] p-5 sm:p-6 border border-[#001830] shadow-xl space-y-4 text-white text-left"
            >
              {/* Question Header Badges */}
              <div className="flex items-center justify-between pb-3 border-b border-[#001830]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-black text-sm text-white">
                    Question {q.questionNumber || idx + 1}
                  </span>
                  <span className="text-[10.5px] font-black text-[#001028] bg-[#F8C800] px-2.5 py-0.5 rounded-full shadow-xs">
                    {q.subject}
                  </span>
                  {q.year && (
                    <span className="text-[10px] font-bold text-[#F8C800] bg-[#001830] px-2 py-0.5 rounded-md border border-[#F8C800]/40">
                      JAMB {q.year}
                    </span>
                  )}
                  {q.topic && (
                    <span className="text-[10.5px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/40">
                      {q.topic}
                    </span>
                  )}
                  {q.difficulty && (
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded-full border border-amber-500/40">
                      {q.difficulty}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => toggleBookmarkQuestion(q.id)}
                  className="px-3 py-1 rounded-xl bg-rose-950/60 text-rose-300 hover:bg-rose-900 font-bold text-xs transition flex items-center space-x-1 cursor-pointer border border-rose-500/50"
                  title="Remove from bookmarks"
                >
                  <span>Remove Bookmark</span>
                  <span className="text-sm leading-none">✕</span>
                </button>
              </div>

              {/* Formatted Question Text (Supports KaTeX math and HTML superscripts/subscripts) */}
              <div
                className="text-sm sm:text-base font-medium text-white leading-relaxed select-text overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: formatMathAndHtml(q.text) }}
              />

              {/* Options Grid (A, B, C, D) with formatted math */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt) => {
                  const isCorrect = q.correctAnswer === opt.key;
                  return (
                    <div
                      key={opt.key}
                      className={`p-3 rounded-2xl border text-xs sm:text-[13px] flex items-center justify-between transition ${
                        isCorrect
                          ? 'border-[#16A34A] bg-[#0A331E] font-bold text-emerald-200 ring-1 ring-[#16A34A]'
                          : 'border-white/10 bg-[#001830]/80 text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 flex-1 min-w-0 pr-2">
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-black text-[11px] shrink-0 ${
                          isCorrect ? 'bg-[#16A34A] text-white' : 'bg-[#001020] text-[#F8C800] border border-white/10'
                        }`}>
                          {opt.key}
                        </span>
                        <div
                          className="flex-1 overflow-x-auto select-text leading-snug"
                          dangerouslySetInnerHTML={{ __html: formatMathAndHtml(opt.text) }}
                        />
                      </div>
                      {isCorrect && (
                        <span className="text-[10px] font-black text-white bg-[#16A34A] px-2 py-0.5 rounded-full shrink-0 shadow-xs">
                          Correct Key ✓
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Formatted Explanation (KaTeX math and step-by-step working) */}
              {q.explanation && (
                <div className="p-4 rounded-2xl bg-[#001428] border border-[#F8C800]/40 text-xs sm:text-[12.5px] text-slate-200 leading-relaxed shadow-inner">
                  <span className="font-black text-[#F8C800] text-[13px] block mb-1.5 flex items-center space-x-1.5">
                    <span>💡</span>
                    <span>Explanation:</span>
                  </span>
                  <div
                    className="select-text overflow-x-auto whitespace-pre-line leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatMathAndHtml(q.explanation) }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarksScreen;
