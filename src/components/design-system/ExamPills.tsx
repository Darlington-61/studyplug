import React from 'react';

export type ExamCategory = 'JAMB' | 'WAEC' | 'NECO' | 'BECE' | 'NABTEB' | 'IELTS' | 'All';

interface ExamPillsProps {
  exams?: ExamCategory[];
  activeExam: ExamCategory;
  onSelectExam: (exam: ExamCategory) => void;
  className?: string;
}

export const ExamPills: React.FC<ExamPillsProps> = ({
  exams = ['JAMB', 'WAEC', 'NECO', 'BECE'],
  activeExam,
  onSelectExam,
  className = ''
}) => {
  return (
    <div className={`flex items-center space-x-2 overflow-x-auto no-scrollbar py-1 ${className}`}>
      {exams.map((exam) => {
        const isActive = activeExam === exam;
        return (
          <button
            key={exam}
            type="button"
            onClick={() => onSelectExam(exam)}
            className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-150 cursor-pointer shrink-0 ${
              isActive
                ? 'bg-[#004D40] text-white shadow-xs'
                : 'bg-white text-[#66736F] hover:text-[#10201D] border border-[#E4EAE8]'
            }`}
          >
            {exam}
          </button>
        );
      })}
    </div>
  );
};
