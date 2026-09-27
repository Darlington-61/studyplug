import React from 'react';
import { useApp } from '../../context/AppContext';

export type ExamCategory = 'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE' | 'IELTS' | 'All';

interface ExamPillsProps {
  exams?: ExamCategory[];
  activeExam: ExamCategory;
  onSelectExam: (exam: ExamCategory) => void;
  className?: string;
}

export const ExamPills: React.FC<ExamPillsProps> = ({
  exams = ['JAMB', 'WAEC', 'NECO', 'NABTEB', 'BECE'],
  activeExam,
  onSelectExam,
  className = ''
}) => {
  const { openPaperSelector, selectedExamPapers } = useApp();

  const handleExamClick = (exam: ExamCategory) => {
    onSelectExam(exam);
    if (exam === 'WAEC' || exam === 'NECO' || exam === 'NABTEB') {
      openPaperSelector(exam);
    }
  };

  const isMultiPaperExam = activeExam === 'WAEC' || activeExam === 'NECO' || activeExam === 'NABTEB';

  return (
    <div className={`flex items-center space-x-2 overflow-x-auto no-scrollbar py-1 ${className}`}>
      {exams.map((exam) => {
        const isActive = activeExam === exam;
        return (
          <button
            key={exam}
            type="button"
            onClick={() => handleExamClick(exam)}
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

      {/* Pop-Out Trigger Badge when WAEC / NECO / NABTEB is selected */}
      {isMultiPaperExam && (
        <button
          type="button"
          onClick={() => openPaperSelector(activeExam)}
          className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 transition cursor-pointer flex items-center space-x-1 shrink-0 animate-fadeIn"
          title={`Configure ${activeExam} Standard Papers (OBJ, Theory, Practical)`}
        >
          <span>📑</span>
          <span>{selectedExamPapers && selectedExamPapers.length > 0 ? selectedExamPapers.join(' • ') : 'OBJ • Theory • Practical'}</span>
          <span className="text-[10px] bg-amber-200/80 px-1 py-0.2 rounded font-extrabold">⚙️</span>
        </button>
      )}
    </div>
  );
};
