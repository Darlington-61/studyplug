import React from 'react';

interface QuestionOptionProps {
  optionKey: string;
  optionText: string;
  isSelected: boolean;
  isCorrect?: boolean | null; // null if not in review mode
  isReviewMode?: boolean;
  onSelect: (key: string) => void;
}

/**
 * Format option text to strip redundant prefixes (e.g. "A. ", "A - ")
 * and format HTML tags (<ol>, <li>, etc.) cleanly with styled HTML elements.
 */
function cleanOptionText(text: string, optionKey: string): { hasHtml: boolean; content: string } {
  if (!text) return { hasHtml: false, content: '' };
  
  let cleaned = text.trim();

  // Strip redundant leading "A. ", "B. ", "A - ", "A: " matching current optionKey
  const prefixRegex = new RegExp(`^${optionKey}[.\\-:]\\s*`, 'i');
  cleaned = cleaned.replace(prefixRegex, '').trim();

  // Check if string contains HTML tags
  const hasHtml = /<\/?[a-z][\s\S]*>/i.test(cleaned);

  if (hasHtml) {
    // Style <ol> and <ul> tags with clean Tailwind list styles
    cleaned = cleaned
      .replace(/<ol>/gi, '<ol class="list-decimal pl-5 space-y-1.5 my-1.5 text-left">')
      .replace(/<ul>/gi, '<ul class="list-disc pl-5 space-y-1.5 my-1.5 text-left">')
      .replace(/<li>/gi, '<li class="leading-relaxed">');
  }

  // Format plain text bullets like " - Point 1 - Point 2" into line-separated items
  if (!hasHtml) {
    // If text contains " - " or " • ", split into neat lines
    if (cleaned.includes(' - ') || cleaned.includes(' • ')) {
      cleaned = cleaned.replace(/\s+[-•]\s+/g, '\n• ');
    }
  }

  return { hasHtml, content: cleaned };
}

export const QuestionOption: React.FC<QuestionOptionProps> = ({
  optionKey,
  optionText,
  isSelected,
  isCorrect = null,
  isReviewMode = false,
  onSelect
}) => {
  // Determine styles
  let borderColor = 'border-[#E4EAE8]';
  let bgColor = 'bg-white';
  let textColor = 'text-[#10201D]';
  let circleBg = 'bg-white border-[#D0DBD8] text-[#66736F]';

  if (isReviewMode && isCorrect === true) {
    borderColor = 'border-[#16A34A]';
    bgColor = 'bg-[#F0FDF4]';
    textColor = 'text-[#004D40]';
    circleBg = 'bg-[#16A34A] border-[#16A34A] text-white';
  } else if (isReviewMode && isSelected && isCorrect === false) {
    borderColor = 'border-[#E53935]';
    bgColor = 'bg-[#FEF2F2]';
    textColor = 'text-[#991B1B]';
    circleBg = 'bg-[#E53935] border-[#E53935] text-white';
  } else if (isSelected) {
    borderColor = 'border-[#16A34A]';
    bgColor = 'bg-[#F0FDF4]';
    textColor = 'text-[#004D40]';
    circleBg = 'bg-[#16A34A] border-[#16A34A] text-white';
  }

  const { hasHtml, content } = cleanOptionText(optionText, optionKey);

  return (
    <button
      type="button"
      onClick={() => onSelect(optionKey)}
      className={`w-full p-3.5 sm:p-4 rounded-[14px] border ${borderColor} ${bgColor} shadow-subtle hover:border-[#B5C9C3] transition-all duration-150 flex items-start space-x-3.5 text-left cursor-pointer active:scale-[0.99]`}
    >
      {/* Circle Icon pinned neatly at the top-left */}
      <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 self-start mt-0.5 font-bold text-[12px] transition ${circleBg}`}>
        {isSelected || (isReviewMode && isCorrect === true) ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          optionKey
        )}
      </div>

      {/* Option Text */}
      {hasHtml ? (
        <div
          className={`text-[14px] sm:text-[14.5px] font-medium leading-relaxed ${textColor} flex-1 overflow-x-auto`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <span className={`text-[14px] sm:text-[14.5px] font-medium leading-relaxed ${textColor} flex-1 whitespace-pre-line select-text`}>
          {content}
        </span>
      )}
    </button>
  );
};
