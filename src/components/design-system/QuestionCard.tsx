import React from 'react';

interface QuestionCardProps {
  index: number;
  questionText: string;
  exam: string;
  year?: number | string;
  subtopic?: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard' | string;
  onClick?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  index,
  questionText,
  exam,
  year,
  subtopic,
  difficulty = 'Medium',
  onClick
}) => {
  const getDifficultyColor = () => {
    const diff = (difficulty || '').toLowerCase();
    if (diff === 'easy') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (diff === 'hard') return 'bg-red-50 text-red-700 border-red-200';
    return 'bg-amber-50 text-amber-700 border-amber-200';
  };

  return (
    <div
      onClick={onClick}
      className="w-full bg-white rounded-[14px] p-3.5 sm:p-4 border border-[#E4EAE8] shadow-subtle hover:border-[#004D40]/30 hover:shadow-floating transition-all duration-150 space-y-2 text-left cursor-pointer group active:scale-[0.99]"
    >
      {/* Top Question Meta: Index + Text + Right Chevron (Screen 6 Match) */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-start space-x-2 flex-1">
          <span className="font-bold text-[13px] text-[#66736F] shrink-0 mt-0.5">{index}.</span>
          <p className="text-[13.5px] sm:text-[14px] text-[#10201D] font-normal leading-relaxed line-clamp-3 group-hover:text-[#004D40] transition">
            {questionText}
          </p>
        </div>
        <div className="w-6 h-6 rounded-full bg-[#F7F9F8] group-hover:bg-[#E8F5E9] flex items-center justify-center shrink-0 mt-0.5 transition">
          <span className="text-[#8A9692] group-hover:text-[#004D40] text-sm font-bold transition group-hover:translate-x-0.5">
            ›
          </span>
        </div>
      </div>

      {/* Bottom Badges: Exam + Year, Subtopic tag, and Difficulty */}
      <div className="flex items-center gap-1.5 flex-wrap pt-1">
        <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#E8F5E9] text-[#004D40] border border-[#004D40]/15">
          {exam} {year ? `${year}` : ''}
        </span>
        {subtopic && (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#F1F5F4] text-[#66736F] truncate max-w-[160px]">
            {subtopic}
          </span>
        )}
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getDifficultyColor()}`}>
          {difficulty}
        </span>
      </div>
    </div>
  );
};
