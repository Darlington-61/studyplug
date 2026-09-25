import React from 'react';

interface TopicCardProps {
  index: number;
  title: string;
  subtopicsCount: number;
  questionsCount: number;
  color?: string;
  onClick: () => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  index,
  title,
  subtopicsCount,
  questionsCount,
  color = '#2563EB',
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className="w-full bg-white rounded-[14px] p-3.5 border border-[#E4EAE8] shadow-subtle hover:border-[#D0DBD8] hover:shadow-floating transition-all duration-150 flex items-center justify-between cursor-pointer group active:scale-[0.99]"
    >
      <div className="flex items-center space-x-3.5">
        {/* Numbered circle */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0 shadow-xs"
          style={{ backgroundColor: color }}
        >
          {index}
        </div>

        {/* Title and counts */}
        <div className="text-left">
          <h3 className="font-semibold text-[14px] text-[#10201D] leading-snug group-hover:text-[#004D40] transition">
            {title}
          </h3>
          <p className="text-[11px] text-[#66736F] font-normal mt-0.5">
            {subtopicsCount} subtopics • {questionsCount} questions
          </p>
        </div>
      </div>

      {/* Right chevron */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8A9692"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 group-hover:text-[#10201D] group-hover:translate-x-0.5 transition"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </div>
  );
};
