import React from 'react';

interface DigitalBoardSolutionProps {
  correctOptionKey?: string;
  correctOptionText?: string;
  explanationText?: string;
  topic?: string;
}

export const DigitalBoardSolution: React.FC<DigitalBoardSolutionProps> = ({
  correctOptionKey = 'B',
  correctOptionText = '',
  explanationText = '',
  topic = 'Physics'
}) => {
  return (
    <div className="w-full rounded-[16px] overflow-hidden border border-[#144234] shadow-subtle bg-[#0A261D] text-white">
      {/* Top blackboard header */}
      <div className="bg-[#051A13] px-4 py-2.5 border-b border-[#144234] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD600]" />
          <span className="text-[12px] font-bold text-[#FFD600] tracking-wide uppercase font-mono">
            Digital Solution Board
          </span>
        </div>
        <span className="text-[10px] font-semibold text-emerald-200/80 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
          {topic}
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-3.5 text-left font-sans">
        {/* Correct Answer Header */}
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 rounded-lg bg-[#16A34A] text-white text-[12px] font-bold">
            Correct Answer: {correctOptionKey}
          </span>
          {correctOptionText && (
            <span className="text-[13px] font-medium text-emerald-100">
              {correctOptionText}
            </span>
          )}
        </div>

        {/* Step by Step Calculation / Explanation */}
        <div className="p-3.5 rounded-[12px] bg-[#071F17] border border-[#164E40] text-[13px] sm:text-[13.5px] leading-relaxed text-emerald-50/95 font-normal whitespace-pre-line">
          {explanationText || 'Detailed step-by-step solution verified against official syllabus marking schemes.'}
        </div>

        <div className="flex items-center justify-between text-[11px] text-emerald-300/70 pt-1 border-t border-[#144234]">
          <span>💡 StudyPlug Step-by-Step Examiner Logic</span>
          <span>Verified Accurate</span>
        </div>
      </div>
    </div>
  );
};
