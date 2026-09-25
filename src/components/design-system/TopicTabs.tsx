import React from 'react';

export type NoteViewTab = 'note' | 'resources' | 'questions' | 'theory';

interface TopicTabsProps {
  activeTab: NoteViewTab;
  onTabChange: (tab: NoteViewTab) => void;
  questionsCount?: number;
  theoryCount?: number;
}

export const TopicTabs: React.FC<TopicTabsProps> = ({
  activeTab,
  onTabChange,
  questionsCount,
  theoryCount
}) => {
  return (
    <div className="w-full bg-[#F1F5F4] p-1 rounded-full flex items-center border border-[#E4EAE8]">
      <button
        type="button"
        onClick={() => onTabChange('note')}
        className={`flex-1 py-1.5 rounded-full text-[11.5px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer ${
          activeTab === 'note'
            ? 'bg-[#004D40] text-white shadow-xs'
            : 'text-[#66736F] hover:text-[#10201D]'
        }`}
      >
        Note
      </button>

      <button
        type="button"
        onClick={() => onTabChange('resources')}
        className={`flex-1 py-1.5 rounded-full text-[11.5px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer ${
          activeTab === 'resources'
            ? 'bg-[#004D40] text-white shadow-xs'
            : 'text-[#66736F] hover:text-[#10201D]'
        }`}
      >
        Resources
      </button>

      <button
        type="button"
        onClick={() => onTabChange('questions')}
        className={`flex-1 py-1.5 rounded-full text-[11.5px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center space-x-1 ${
          activeTab === 'questions'
            ? 'bg-[#004D40] text-white shadow-xs'
            : 'text-[#66736F] hover:text-[#10201D]'
        }`}
      >
        <span>Questions</span>
        {questionsCount !== undefined && questionsCount > 0 && (
          <span className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-bold ${
            activeTab === 'questions' ? 'bg-[#FFD600] text-[#004D40]' : 'bg-[#E4EAE8] text-[#66736F]'
          }`}>
            {questionsCount}
          </span>
        )}
      </button>

      <button
        type="button"
        onClick={() => onTabChange('theory')}
        className={`flex-1 py-1.5 rounded-full text-[11.5px] sm:text-[12px] font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center space-x-1 ${
          activeTab === 'theory'
            ? 'bg-[#004D40] text-white shadow-xs'
            : 'text-[#66736F] hover:text-[#10201D]'
        }`}
      >
        <span>Theory</span>
        {theoryCount !== undefined && theoryCount > 0 && (
          <span className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-bold ${
            activeTab === 'theory' ? 'bg-[#FFD600] text-[#004D40]' : 'bg-[#E8F5E9] text-[#004D40]'
          }`}>
            {theoryCount}
          </span>
        )}
      </button>
    </div>
  );
};
