import React from 'react';

interface ProgressCardProps {
  percentage?: number;
  streakDays?: number;
  subjectsCount?: number;
  onClick?: () => void;
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  percentage = 72,
  streakDays = 12,
  subjectsCount = 8,
  onClick
}) => {
  // SVG circular progress calculation
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      onClick={onClick}
      className="w-full bg-[#0B2A22] rounded-[16px] p-4 text-white border border-[#164E40] shadow-subtle flex items-center justify-between transition hover:border-[#1F6E5A] cursor-pointer"
    >
      {/* Left: Progress circle & percentage */}
      <div className="flex items-center space-x-3.5">
        <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
          <svg className="w-16 h-16 -rotate-90 transform" viewBox="0 0 70 70">
            {/* Background track */}
            <circle
              cx="35"
              cy="35"
              r={radius}
              stroke="#133E33"
              strokeWidth="5"
              fill="transparent"
            />
            {/* Progress arc */}
            <circle
              cx="35"
              cy="35"
              r={radius}
              stroke="#10B981"
              strokeWidth="5.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[14px] font-bold text-white tracking-tight">{percentage}%</span>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-medium text-emerald-200/90">Your Progress</div>
          <div className="text-[13px] font-bold text-white mt-0.5">Keep going!</div>
        </div>
      </div>

      {/* Right: Quick Stats */}
      <div className="flex flex-col space-y-2 text-right pl-3 border-l border-white/10">
        <div className="flex items-center justify-end space-x-1.5">
          <span className="text-sm">🔥</span>
          <span className="text-[12px] font-bold text-white">{streakDays} Day Streak</span>
        </div>
        <div className="flex items-center justify-end space-x-1.5">
          <span className="text-sm">📚</span>
          <span className="text-[12px] font-bold text-white">{subjectsCount} Subjects</span>
        </div>
      </div>
    </div>
  );
};
