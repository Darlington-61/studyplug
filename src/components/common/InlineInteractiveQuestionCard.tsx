import React, { useState } from 'react';
import { Question } from '../../data/questions';
import { ComprehensionPassageViewer } from './ComprehensionPassageViewer';

interface InlineInteractiveQuestionCardProps {
  question: Question;
  index: number;
  exam: string;
  year?: number | string;
  subtopic?: string;
  difficulty?: string;
  userAnswer?: string;
  onSelectAnswer?: (optionKey: string) => void;
  onOpenAiTutor?: (question: Question, userOption?: string) => void;
}

/**
 * Format option text to strip redundant prefixes (e.g. "A. ", "A - ")
 * and format HTML tags (<ol>, <li>, etc.) cleanly.
 */
function cleanOptionText(text: string, optionKey: string): { hasHtml: boolean; content: string } {
  if (!text) return { hasHtml: false, content: '' };
  
  let cleaned = String(text).trim();

  // Strip redundant leading "A. ", "B. ", "A - ", "A: " matching current optionKey
  const prefixRegex = new RegExp(`^${optionKey}[.\\-:]\\s*`, 'i');
  cleaned = cleaned.replace(prefixRegex, '').trim();

  const hasHtml = /<\/?[a-z][\s\S]*>/i.test(cleaned);

  if (hasHtml) {
    cleaned = cleaned
      .replace(/<ol>/gi, '<ol class="list-decimal pl-5 space-y-1.5 my-1.5 text-left">')
      .replace(/<ul>/gi, '<ul class="list-disc pl-5 space-y-1.5 my-1.5 text-left">')
      .replace(/<li>/gi, '<li class="leading-relaxed">');
  } else if (cleaned.includes(' - ') || cleaned.includes(' • ')) {
    cleaned = cleaned.replace(/\s+[-•]\s+/g, '\n• ');
  }

  return { hasHtml, content: cleaned };
}

/**
 * Normalizes options from various Question schemas (array of objects, array of strings, object map)
 */
function normalizeOptions(q: any): { key: string; text: string }[] {
  if (!q) return [];
  if (Array.isArray(q.options)) {
    return q.options.map((opt: any, i: number) => {
      const defaultKey = String.fromCharCode(65 + i);
      if (typeof opt === 'string') {
        return { key: defaultKey, text: opt };
      }
      return {
        key: (opt.key || opt.option || defaultKey).toUpperCase(),
        text: opt.text || opt.value || opt.label || ''
      };
    });
  }
  if (q.options && typeof q.options === 'object') {
    return Object.entries(q.options).map(([k, v]) => ({
      key: k.toUpperCase(),
      text: String(v)
    }));
  }
  if (q.optionsMap && typeof q.optionsMap === 'object') {
    return Object.entries(q.optionsMap).map(([k, v]) => ({
      key: k.toUpperCase(),
      text: String(v)
    }));
  }
  return [];
}

/**
 * Extracts correct option letter in uppercase (e.g. 'A', 'B', 'C', 'D')
 */
function getCorrectAnswerKey(q: any): string {
  const ans = q.correctAnswer || q.correct_option || q.answer || q.correctOption || '';
  return String(ans).trim().toUpperCase();
}

export const InlineInteractiveQuestionCard: React.FC<InlineInteractiveQuestionCardProps> = ({
  question,
  index,
  exam,
  year,
  subtopic,
  difficulty = 'Medium',
  userAnswer,
  onSelectAnswer,
  onOpenAiTutor
}) => {
  // Expand card by default or allow toggling
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [localAnswer, setLocalAnswer] = useState<string | null>(userAnswer || null);

  const activeAnswer = userAnswer || localAnswer;
  const options = normalizeOptions(question);
  const correctKey = getCorrectAnswerKey(question);
  const isAnswered = Boolean(activeAnswer);
  const isCorrect = isAnswered && activeAnswer?.toUpperCase() === correctKey;

  const handleSelectOption = (key: string) => {
    setLocalAnswer(key);
    if (onSelectAnswer) {
      onSelectAnswer(key);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLocalAnswer(null);
  };

  const getDifficultyColor = () => {
    const diff = (difficulty || '').toLowerCase();
    if (diff === 'easy') return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    if (diff === 'hard') return 'bg-red-50 text-red-700 border-red-200';
    return 'bg-amber-50 text-amber-700 border-amber-200';
  };

  const questionStem = question.text || (question as any).question_text || (question as any).question || '';

  return (
    <div
      className={`w-full bg-white rounded-[16px] border transition-all duration-200 shadow-subtle overflow-hidden ${
        isAnswered
          ? isCorrect
            ? 'border-emerald-300 ring-1 ring-emerald-200'
            : 'border-red-300 ring-1 ring-red-200'
          : 'border-[#E4EAE8] hover:border-[#004D40]/30'
      }`}
    >
      {/* Header bar: Index, stem snippet, badges, expand toggle */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-3.5 sm:p-4 cursor-pointer select-none bg-white hover:bg-[#F9FBFA] transition flex flex-col gap-2"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start space-x-2.5 flex-1 min-w-0">
            <span className="w-6 h-6 rounded-full bg-[#E8F5E9] text-[#004D40] font-black text-[12px] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              {index}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] sm:text-[14.5px] font-semibold text-[#10201D] leading-snug">
                {questionStem}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0">
            {isAnswered && (
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold flex items-center space-x-1 ${
                  isCorrect
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}
              >
                <span>{isCorrect ? '✅ Correct' : '❌ Incorrect'}</span>
              </span>
            )}
            <button
              type="button"
              className="w-7 h-7 rounded-full bg-[#F0F4F2] hover:bg-[#E2EBE8] text-[#556965] flex items-center justify-center text-xs font-bold transition"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? '▲' : '▼'}
            </button>
          </div>
        </div>

        {/* Badges: Exam, Year, Subtopic, Difficulty */}
        <div className="flex items-center gap-1.5 flex-wrap pt-0.5 text-[11px]">
          <span className="px-2.5 py-0.5 rounded-full font-bold bg-[#E8F5E9] text-[#004D40] border border-[#004D40]/20">
            {exam} {year ? `${year}` : question.year ? `${question.year}` : ''}
          </span>
          {(subtopic || question.subtopic) && (
            <span className="px-2 py-0.5 rounded-full font-semibold bg-[#F1F5F4] text-[#66736F] truncate max-w-[180px]">
              {subtopic || question.subtopic}
            </span>
          )}
          <span className={`px-2 py-0.5 rounded-full font-semibold border ${getDifficultyColor()}`}>
            {difficulty}
          </span>
          <span className="text-[11px] text-[#8A9692] ml-auto font-medium">
            {isAnswered ? 'Answered' : 'Tap to answer'}
          </span>
        </div>
      </div>

      {/* Expanded Interactive Body */}
      {isExpanded && (
        <div className="px-3.5 sm:px-4 pb-4 pt-1 border-t border-[#EEF2F0] bg-[#FAFBFB] space-y-3">
          {/* Comprehension Passage if present */}
          {question.passage && (
            <div className="my-2">
              <ComprehensionPassageViewer
                passage={question.passage}
                title="Reading Passage"
                defaultExpanded={false}
              />
            </div>
          )}

          {/* SVG or Image diagram if present */}
          {question.imageSvg && (
            <div
              className="p-3 bg-white rounded-[12px] border border-[#E4EAE8] flex justify-center my-2 max-w-md mx-auto"
              dangerouslySetInnerHTML={{ __html: question.imageSvg }}
            />
          )}

          {question.imageUrl && !question.imageSvg && (
            <div className="my-2 flex justify-center">
              <img
                src={question.imageUrl}
                alt="Question Diagram"
                className="max-h-56 rounded-[12px] border border-[#E4EAE8] object-contain shadow-xs"
              />
            </div>
          )}

          {/* Options List */}
          <div className="space-y-2 pt-1">
            {options.map((opt) => {
              const isSelected = activeAnswer?.toUpperCase() === opt.key;
              const isThisCorrect = isAnswered && opt.key === correctKey;
              const isThisWrong = isAnswered && isSelected && !isCorrect;

              let optionStyle = 'bg-white border-[#E4EAE8] text-[#10201D] hover:border-[#004D40]/40';
              let badgeStyle = 'bg-white border-[#D0DBD8] text-[#66736F]';

              if (isAnswered) {
                if (isThisCorrect) {
                  optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-1 ring-emerald-400 font-semibold';
                  badgeStyle = 'bg-emerald-600 border-emerald-600 text-white font-black';
                } else if (isThisWrong) {
                  optionStyle = 'bg-red-50 border-red-400 text-red-900';
                  badgeStyle = 'bg-red-600 border-red-600 text-white font-black';
                } else {
                  optionStyle = 'bg-white/60 border-[#E4EAE8] text-[#8A9692] opacity-75';
                }
              } else if (isSelected) {
                optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900';
                badgeStyle = 'bg-emerald-600 border-emerald-600 text-white';
              }

              const { hasHtml, content } = cleanOptionText(opt.text, opt.key);

              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => handleSelectOption(opt.key)}
                  className={`w-full p-3 rounded-[12px] border text-left flex items-start space-x-3 transition cursor-pointer active:scale-[0.99] ${optionStyle}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 self-start mt-0.5 text-[11px] font-bold transition shadow-xs ${badgeStyle}`}
                  >
                    {isAnswered && isThisCorrect ? '✓' : isAnswered && isThisWrong ? '✕' : opt.key}
                  </div>

                  <div className="flex-1 text-[13.5px] leading-relaxed">
                    {hasHtml ? (
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                    ) : (
                      <span>{content}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Instant Feedback & Detailed Explanation */}
          {isAnswered && (
            <div className="pt-2 space-y-2.5 animate-fadeIn">
              <div
                className={`p-3.5 rounded-[12px] border ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                    : 'bg-red-50 border-red-200 text-red-900'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-[13px] flex items-center space-x-1.5">
                    <span>{isCorrect ? '🎉 Correct Answer!' : '❌ Incorrect Selection'}</span>
                  </span>
                  <span className="text-[12px] font-bold text-[#004D40] bg-white px-2 py-0.5 rounded-full border border-[#004D40]/20">
                    Correct Key: {correctKey}
                  </span>
                </div>

                {/* Explanation text */}
                <div className="text-[12.5px] leading-relaxed text-[#2C3E3A] mt-1 space-y-1">
                  <p className="font-semibold text-[#004D40]">Detailed Solution / Working:</p>
                  <p>{question.explanation || 'Refer to the lesson notes above for comprehensive principles on this topic.'}</p>
                </div>

                {/* Action Buttons: Reset & Ask PlugAI */}
                <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-black/5 gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[11.5px] font-bold text-[#66736F] hover:text-[#10201D] px-2.5 py-1 rounded-[8px] bg-white border border-[#D0DBD8] transition cursor-pointer flex items-center space-x-1"
                  >
                    <span>🔄</span>
                    <span>Try Again</span>
                  </button>

                  {onOpenAiTutor && (
                    <button
                      type="button"
                      onClick={() => onOpenAiTutor(question, activeAnswer)}
                      className="text-[11.5px] font-bold text-white bg-[#004D40] hover:bg-[#003B32] px-3 py-1 rounded-[8px] transition cursor-pointer flex items-center space-x-1.5 shadow-xs ml-auto"
                    >
                      <span>🤖</span>
                      <span>Ask AI Tutor to Explain</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
