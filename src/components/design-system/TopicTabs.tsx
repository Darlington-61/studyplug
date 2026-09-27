import React from 'react';

export type NoteViewTab = 'note' | 'resources' | 'questions' | 'theory' | 'practical';

interface TopicTabsProps {
  activeTab: NoteViewTab;
  onTabChange: (tab: NoteViewTab) => void;
  questionsCount?: number;
  theoryCount?: number;
  practicalCount?: number;
  isStandardExam?: boolean; // WAEC, NECO, NABTEB
  selectedPapers?: ('OBJ' | 'Theory' | 'Practical')[];
}

export const TopicTabs: React.FC<TopicTabsProps> = ({
  activeTab,
  onTabChange,
  questionsCount,
  theoryCount,
  practicalCount = 0,
  isStandardExam = false,
  selectedPapers = ['OBJ', 'Theory', 'Practical']
}) => {
  const showObj = !isStandardExam || selectedPapers.includes('OBJ');
  const showTheory = !isStandardExam || selectedPapers.includes('Theory');
  const showPractical = isStandardExam && selectedPapers.includes('Practical');

  return (
    <div className="w-full bg-[#F1F5F4] p-1 rounded-full flex items-center border border-[#E4EAE8] overflow-x-auto no-scrollbar">
      {/* 1. Note Content */}
      <button
        type="button"
        onClick={() => onTabChange('note')}
        className={`flex-1 min-w-[60px] py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer ${
          activeTab === 'note'
            ? 'bg-[#004D40] text-white shadow-xs'
            : 'text-[#66736F] hover:text-[#10201D]'
        }`}
      >
        Note
      </button>

      {/* 2. Resources */}
      <button
        type="button"
        onClick={() => onTabChange('resources')}
        className={`flex-1 min-w-[65px] py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer ${
          activeTab === 'resources'
            ? 'bg-[#004D40] text-white shadow-xs'
            : 'text-[#66736F] hover:text-[#10201D]'
        }`}
      >
        Resources
      </button>

      {/* 3. Objective (OBJ / Paper 1) */}
      {showObj && (
        <button
          type="button"
          onClick={() => onTabChange('questions')}
          className={`flex-1 min-w-[75px] py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center space-x-1 ${
            activeTab === 'questions'
              ? 'bg-[#004D40] text-white shadow-xs'
              : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <span>{isStandardExam ? 'Paper 1 (OBJ)' : 'Questions'}</span>
          {questionsCount !== undefined && questionsCount > 0 && (
            <span
              className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'questions'
                  ? 'bg-[#FFD600] text-[#004D40]'
                  : 'bg-[#E4EAE8] text-[#66736F]'
              }`}
            >
              {questionsCount}
            </span>
          )}
        </button>
      )}

      {/* 4. Theory (Paper 2) */}
      {showTheory && (
        <button
          type="button"
          onClick={() => onTabChange('theory')}
          className={`flex-1 min-w-[75px] py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center space-x-1 ${
            activeTab === 'theory'
              ? 'bg-[#004D40] text-white shadow-xs'
              : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <span>{isStandardExam ? 'Paper 2 (Theory)' : 'Theory'}</span>
          {theoryCount !== undefined && theoryCount > 0 && (
            <span
              className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'theory'
                  ? 'bg-[#FFD600] text-[#004D40]'
                  : 'bg-[#E8F5E9] text-[#004D40]'
              }`}
            >
              {theoryCount}
            </span>
          )}
        </button>
      )}

      {/* 5. Practical (Paper 3) for WAEC, NECO, NABTEB */}
      {showPractical && (
        <button
          type="button"
          onClick={() => onTabChange('practical')}
          className={`flex-1 min-w-[80px] py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center space-x-1 ${
            activeTab === 'practical'
              ? 'bg-[#004D40] text-white shadow-xs'
              : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <span>Paper 3 (Practical)</span>
          {practicalCount > 0 && (
            <span
              className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-bold ${
                activeTab === 'practical'
                  ? 'bg-[#FFD600] text-[#004D40]'
                  : 'bg-[#E0F2FE] text-[#0284C7]'
              }`}
            >
              {practicalCount}
            </span>
          )}
        </button>
      )}
    </div>
  );
};
