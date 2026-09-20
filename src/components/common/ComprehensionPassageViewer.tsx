import React, { useState } from 'react';

export interface ParsedQuestionContent {
  hasPassage: boolean;
  instruction?: string;
  passageText?: string;
  questionText: string;
}

/**
 * Robust parser that extracts reading comprehension passages,
 * instructions, and clean question prompts from raw question texts.
 */
export function parseQuestionContent(rawText: string, explicitPassage?: string): ParsedQuestionContent {
  const text = (rawText || '').trim();

  // 1. Explicit passage property provided on Question
  if (explicitPassage && explicitPassage.trim().length > 0) {
    return {
      hasPassage: true,
      passageText: explicitPassage.trim(),
      questionText: text
    };
  }

  // 2. Structured [PASSAGE] ... [QUESTION] format
  if (text.includes('[PASSAGE]')) {
    const parts = text.split('[PASSAGE]');
    const afterPassage = parts[1] || '';

    if (afterPassage.includes('[QUESTION]')) {
      const subParts = afterPassage.split('[QUESTION]');
      let passage = (subParts[0] || '').trim();
      let prompt = (subParts[1] || '').trim();
      let instruction: string | undefined;

      // Check if passage begins with a standard reading instruction line
      const instructionRegex = /^(?:read each passage and answer the questions? that follows?|read the following passage and answer the questions? below|read the passage below to answer the questions? that follow)\s*:?\s*\n*/i;
      const match = passage.match(instructionRegex);
      if (match) {
        instruction = match[0].trim();
        passage = passage.replace(instructionRegex, '').trim();
      }

      return {
        hasPassage: true,
        instruction,
        passageText: passage,
        questionText: prompt || 'Answer the question based on the passage above:'
      };
    } else {
      // Has [PASSAGE] but no [QUESTION] tag
      return {
        hasPassage: true,
        passageText: afterPassage.trim(),
        questionText: 'Read the passage above and select the correct option:'
      };
    }
  }

  // 3. Narrative passage pattern: "Read the passage below... " or long multi-paragraph with trailing question
  if (text.toLowerCase().startsWith('read the passage') || text.toLowerCase().startsWith('read the following passage')) {
    const paragraphs = text.split(/\n\s*\n/);
    if (paragraphs.length >= 2) {
      const lastParagraph = paragraphs[paragraphs.length - 1].trim();
      // If the last paragraph ends in a question mark or is relatively short (<200 chars), treat it as the question stem
      if (lastParagraph.endsWith('?') || lastParagraph.length < 250) {
        const passage = paragraphs.slice(0, paragraphs.length - 1).join('\n\n').trim();
        return {
          hasPassage: true,
          passageText: passage,
          questionText: lastParagraph
        };
      }
    }
  }

  // 4. Default: Standard question text without passage
  return {
    hasPassage: false,
    questionText: text
  };
}

interface ComprehensionPassageViewerProps {
  text: string;
  passage?: string;
  fontScale?: number;
  subject?: string;
  defaultExpanded?: boolean;
}

export const ComprehensionPassageViewer: React.FC<ComprehensionPassageViewerProps> = ({
  text,
  passage,
  fontScale = 1.0,
  subject = 'Use of English',
  defaultExpanded = true
}) => {
  const [isPassageExpanded, setIsPassageExpanded] = useState<boolean>(defaultExpanded);
  const parsed = parseQuestionContent(text, passage);

  // If NO passage exists: Render clean question text with whitespace formatting
  if (!parsed.hasPassage || !parsed.passageText) {
    return (
      <div className="space-y-3">
        <p
          style={{ fontSize: `${1.15 * fontScale}rem`, lineHeight: 1.6 }}
          className="font-bold text-white tracking-normal select-text whitespace-pre-line leading-relaxed"
        >
          {parsed.questionText}
        </p>
      </div>
    );
  }

  // Split passage into readable paragraphs
  const paragraphs = parsed.passageText
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  return (
    <div className="space-y-4 animate-fade-up">
      {/* ─── Reading Comprehension Card (TestDriller / JAMB CBT Style) ──────── */}
      <div className="rounded-2xl bg-[#05140D] border-2 border-[#C4823F] shadow-xl overflow-hidden transition-all duration-200">
        {/* Card Header Strip */}
        <div className="bg-[#092B1E] px-4 py-2.5 border-b border-[#C4823F]/50 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5">
            <span className="text-lg">📖</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm font-black text-[#FFCC00] uppercase tracking-wider">
                Reading Comprehension Passage
              </span>
              <span className="text-[10px] font-bold text-emerald-300 bg-[#061710] border border-emerald-500/40 px-2 py-0.5 rounded-full hidden sm:inline">
                {paragraphs.length} {paragraphs.length === 1 ? 'Paragraph' : 'Paragraphs'}
              </span>
            </div>
          </div>

          {/* Controls: Collapse / Expand Button */}
          <button
            type="button"
            onClick={() => setIsPassageExpanded(prev => !prev)}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-[#061710] border border-[#C4823F]/70 text-xs font-bold text-white hover:text-[#FFCC00] hover:border-[#FFCC00] transition cursor-pointer select-none shadow-xs"
            title={isPassageExpanded ? 'Minimize passage view' : 'Maximize passage view'}
          >
            <span>{isPassageExpanded ? '▲' : '▼'}</span>
            <span>{isPassageExpanded ? 'Hide Passage' : 'View Passage'}</span>
          </button>
        </div>

        {/* Optional Instruction Banner */}
        {parsed.instruction && (
          <div className="px-4 py-1.5 bg-[#0C3424] text-[11px] font-semibold text-emerald-200 border-b border-[#C4823F]/30 italic">
            ℹ️ {parsed.instruction}
          </div>
        )}

        {/* Scrollable Passage Body */}
        {isPassageExpanded && (
          <div className="p-4 sm:p-5 max-h-72 sm:max-h-80 overflow-y-auto space-y-3.5 pr-3 select-text border-b border-[#C4823F]/20 custom-scrollbar">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{ fontSize: `${0.95 * fontScale}rem`, lineHeight: 1.7 }}
                className="text-emerald-50/95 font-normal tracking-wide text-justify"
              >
                {p}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* ─── Question Stem Box (Prominently Highlighted Above Options) ──────── */}
      <div className="p-4 rounded-2xl bg-[#071F15] border-2 border-[#FFCC00] shadow-md flex items-start space-x-3 select-text">
        <div className="w-7 h-7 rounded-xl bg-[#FFCC00] text-[#061710] flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-sm">
          ❓
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#FFCC00] block mb-1">
            Question Prompt:
          </span>
          <p
            style={{ fontSize: `${1.1 * fontScale}rem`, lineHeight: 1.55 }}
            className="font-extrabold text-white select-text whitespace-pre-line leading-relaxed"
          >
            {parsed.questionText}
          </p>
        </div>
      </div>
    </div>
  );
};
