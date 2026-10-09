import React from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const QuizResultsScreen: React.FC = () => {
  const { setActiveView, goBack, lastTestResult } = useApp();

  const scorePercent = lastTestResult ? Math.round(lastTestResult.accuracy) : 85;
  const correct = lastTestResult ? lastTestResult.score : 15;
  const total = lastTestResult ? lastTestResult.total : 20;
  const incorrect = total - correct;

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
          <div className="font-bold text-sm text-white">Quiz Results</div>
          <BrandLogo size="xs" />
        </div>
      </header>

      {/* Main Results Container (Screen 14 in Reference) */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-6 pb-28 space-y-5 text-center">
        {/* Big Circular Score Meter */}
        <div className="bg-white rounded-[28px] p-6 border border-[#E8E8E8] shadow-sm flex flex-col items-center justify-center space-y-4">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="48"
                stroke="#E8E8E8"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="48"
                stroke="#F8C800"
                strokeWidth="10"
                strokeDasharray={301.6}
                strokeDashoffset={301.6 * (1 - scorePercent / 100)}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-[#001028] leading-none">
                {scorePercent}%
              </span>
              <span className="text-[10.5px] font-bold text-[#607080] mt-1">
                Correct Answers
              </span>
            </div>
          </div>

          {/* Breakdown Pills: Correct / Incorrect */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs pt-2">
            <div className="p-3 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] text-center">
              <span className="text-sm font-black text-[#001028] block">{correct} / {total}</span>
              <span className="text-[10px] text-[#607080] font-bold">Correct</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] text-center">
              <span className="text-sm font-black text-rose-600 block">{incorrect} / {total}</span>
              <span className="text-[10px] text-[#607080] font-bold">Incorrect</span>
            </div>
          </div>
        </div>

        {/* Paper Details Card */}
        <div className="bg-white rounded-[22px] p-4 border border-[#E8E8E8] shadow-sm text-left flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-2xl bg-[#001028] text-[#F8C800] flex items-center justify-center text-xl shrink-0 font-bold">
            📝
          </div>
          <div className="space-y-0.5 flex-1 min-w-0">
            <h4 className="font-bold text-sm text-[#001028] truncate">
              {lastTestResult?.subject || 'Practice Test'}
            </h4>
            <p className="text-[11px] text-[#607080]">
              {lastTestResult ? `${lastTestResult.date} • CBT Mode` : 'Repeated Questions Practice'}
            </p>
            <div className="text-[10.5px] text-[#001028] font-semibold pt-0.5">
              ⏱️ Time: {lastTestResult ? `${Math.floor((lastTestResult.timeSpentSeconds || 60) / 60)}m ${(lastTestResult.timeSpentSeconds || 60) % 60}s` : '10m 00s'} • Accuracy: {scorePercent}%
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            type="button"
            onClick={() => setActiveView('performance')}
            className="w-full py-3.5 rounded-full bg-[#001028] hover:bg-[#001830] active:scale-95 text-[#F8C800] font-bold text-sm shadow-md transition cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>📊</span>
            <span>View Performance Analysis</span>
            <span>→</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveView('repeated-questions')}
            className="w-full py-3.5 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-sm shadow-sm transition cursor-pointer"
          >
            Practice More Repeated Topics
          </button>
          <button
            type="button"
            onClick={() => setActiveView('dashboard')}
            className="w-full py-3 rounded-full bg-white hover:bg-slate-50 border border-[#E8E8E8] text-[#001028] font-semibold text-xs sm:text-sm transition cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </main>

      <BottomNavigation activeTab="home" />
    </div>
  );
};

export default QuizResultsScreen;
