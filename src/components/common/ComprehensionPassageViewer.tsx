import React, { useState } from 'react';

export interface ParsedQuestionContent {
  hasPassage: boolean;
  instruction?: string;
  passageText?: string;
  questionText: string;
}

/**
 * Intelligent parser that extracts reading comprehension passages,
 * instructions, and clean question prompts from raw question texts.
 */
export function parseQuestionContent(rawText: string, explicitPassage?: string): ParsedQuestionContent {
  const text = (rawText || '').trim();

  // 1. Explicit passage property provided on Question
  if (explicitPassage && explicitPassage.trim().length > 0) {
    let cleanPrompt = text;
    // Strip redundant leading "Read the following passage..." if present in question prompt
    const instructionRegex = /^(?:read each passage and answer the questions? that follows?|read the following passage carefully and answer (?:these|the|this)?\s*questions?[:.]?|read the passage below to answer the questions? that follow[:.]?)\s*/i;
    cleanPrompt = cleanPrompt.replace(instructionRegex, '').trim();

    return {
      hasPassage: true,
      passageText: explicitPassage.trim(),
      questionText: cleanPrompt || 'Answer the question based on the passage above:'
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

      const instructionRegex = /^(?:read each passage and answer the questions? that follows?|read the following passage carefully and answer (?:these|the|this)?\s*questions?[:.]?|read the passage below to answer the questions? that follow[:.]?)\s*/i;
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
      return {
        hasPassage: true,
        passageText: afterPassage.trim(),
        questionText: 'Read the passage above and select the correct option:'
      };
    }
  }

  // 3. Embedded passage pattern: "Read the following passage carefully and answer..."
  // followed by questions like "Questions A. ...", "A. In three sentences...", etc.
  const passagePrefixRegex = /^(?:Read the following passage carefully and answer (?:these|the|this)?\s*questions?[:.]?|Read each passage and answer the questions? that follows?[:.]?|Read the passage below to answer the questions? that follow[:.]?)\s*/i;
  const prefixMatch = text.match(passagePrefixRegex);

  if (prefixMatch || text.length > 350) {
    const questionSplitPatterns = [
      /\bQuestions\s+A\.\s+/i,
      /\bQuestions\s*:\s*/i,
      /\bQuestion\s*:\s*/i,
      /\bA\.\s+In\s+(?:three|four|five|six|two)\s+sentences/i,
      /\bIn\s+(?:three|four|five|six|two)\s+sentences,\s+one\s+for\s+each/i,
      /\bA\s+In\s+(?:three|four|five|six|two)\s+sentences/i
    ];

    for (const pattern of questionSplitPatterns) {
      const splitMatch = text.match(pattern);
      if (splitMatch && splitMatch.index && splitMatch.index > 120) {
        let passage = text.substring(0, splitMatch.index).trim();
        let prompt = text.substring(splitMatch.index).trim();

        let instruction: string | undefined;
        if (prefixMatch) {
          instruction = prefixMatch[0].trim();
          passage = passage.replace(passagePrefixRegex, '').trim();
        }

        // Clean up prompt if it starts with "Questions A. " -> "A. "
        prompt = prompt.replace(/^Questions\s+/i, '').trim();

        return {
          hasPassage: true,
          instruction,
          passageText: passage,
          questionText: prompt
        };
      }
    }

    // Check if text has multiple paragraphs and the last paragraph is a short question
    const paragraphs = text.split(/\n\s*\n/);
    if (paragraphs.length >= 2) {
      const lastParagraph = paragraphs[paragraphs.length - 1].trim();
      if (lastParagraph.endsWith('?') || (lastParagraph.length < 250 && prefixMatch)) {
        let passage = paragraphs.slice(0, paragraphs.length - 1).join('\n\n').trim();
        let instruction: string | undefined;
        if (prefixMatch) {
          instruction = prefixMatch[0].trim();
          passage = passage.replace(passagePrefixRegex, '').trim();
        }
        return {
          hasPassage: true,
          instruction,
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
      <div className="space-y-2">
        <p
          style={{ fontSize: `${1.05 * fontScale}rem`, lineHeight: 1.6 }}
          className="text-[#10201D] font-semibold tracking-normal select-text whitespace-pre-line leading-relaxed"
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
    <div className="space-y-3.5 animate-fade-up">
      {/* ─── FlashLearners-Style Reading Comprehension Card ──────── */}
      <div className="rounded-2xl bg-[#FCFAF7] border border-[#E8DFD1] shadow-xs overflow-hidden transition-all duration-200">
        {/* Card Header Strip */}
        <div className="bg-[#F5EFE6] px-3.5 sm:px-4 py-2.5 border-b border-[#E8DFD1] flex items-center justify-between gap-2.5 select-none">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="w-6 h-6 rounded-lg bg-[#004D40] text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
              📖
            </span>
            <div className="flex items-center space-x-2 truncate">
              <span className="text-[12px] sm:text-[13px] font-black text-[#004D40] uppercase tracking-wider truncate">
                Reading Comprehension Passage
              </span>
              <span className="text-[10px] font-bold text-[#66736F] bg-white border border-[#E8DFD1] px-2 py-0.5 rounded-full hidden sm:inline shrink-0">
                {paragraphs.length} {paragraphs.length === 1 ? 'Paragraph' : 'Paragraphs'}
              </span>
            </div>
          </div>

          {/* Controls: Collapse / Expand Button */}
          <button
            type="button"
            onClick={() => setIsPassageExpanded(prev => !prev)}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white border border-[#D5C7B0] hover:border-[#004D40] text-xs font-bold text-[#004D40] hover:bg-[#F0FDF4] transition-all duration-150 cursor-pointer select-none shadow-2xs shrink-0 active:scale-95"
            title={isPassageExpanded ? 'Minimize passage view' : 'Maximize passage view'}
          >
            <span>{isPassageExpanded ? '▲' : '📖'}</span>
            <span className="hidden xs:inline">{isPassageExpanded ? 'Hide Passage' : 'Read Passage'}</span>
            <span className="xs:hidden">{isPassageExpanded ? 'Hide' : 'Passage'}</span>
          </button>
        </div>

        {/* Optional Instruction Banner */}
        {parsed.instruction && (
          <div className="px-3.5 sm:px-4 py-1.5 bg-[#FAF4EC] text-[11.5px] font-medium text-[#7C6648] border-b border-[#E8DFD1]/60 italic">
            ℹ️ {parsed.instruction}
          </div>
        )}

        {/* When Collapsed: Warm, Clickable Banner */}
        {!isPassageExpanded && (
          <div
            onClick={() => setIsPassageExpanded(true)}
            className="px-4 py-2.5 bg-[#FFFDFB] hover:bg-[#FAF4EC] text-[#004D40] text-xs font-bold flex items-center justify-between cursor-pointer transition select-none group"
          >
            <span className="flex items-center space-x-1.5 truncate">
              <span>📖</span>
              <span className="truncate">This question is based on the reading passage.</span>
            </span>
            <span className="text-[11px] font-bold text-[#004D40] bg-[#E8F5E9] border border-[#C8E6C9] group-hover:bg-[#004D40] group-hover:text-white px-2.5 py-0.5 rounded-full transition ml-2 shrink-0">
              Tap to Read Passage ▾
            </span>
          </div>
        )}

        {/* Scrollable Passage Body When Expanded */}
        {isPassageExpanded && (
          <div className="p-4 sm:p-5 max-h-72 sm:max-h-84 overflow-y-auto space-y-3 pr-3 select-text border-b border-[#E8DFD1]/60 custom-scrollbar bg-[#FCFAF7]">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{ fontSize: `${0.95 * fontScale}rem`, lineHeight: 1.75 }}
                className="text-[#1F2937] font-normal tracking-normal text-justify"
              >
                {p}
              </p>
            ))}

            {/* Bottom Collapse Button (Convenient for Candidates) */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setIsPassageExpanded(false)}
                className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white border border-[#D5C7B0] text-[11px] font-bold text-[#66736F] hover:text-[#004D40] hover:border-[#004D40] transition cursor-pointer shadow-2xs"
              >
                <span>▲</span>
                <span>Done Reading? Hide Passage &amp; Answer</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ─── Question Prompt Box ──────── */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E4EAE8] shadow-subtle select-text">
        <div className="flex items-center space-x-1.5 mb-1.5">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#004D40] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
            Question Prompt
          </span>
        </div>
        <p
          style={{ fontSize: `${1.05 * fontScale}rem`, lineHeight: 1.6 }}
          className="font-bold text-[#10201D] select-text whitespace-pre-line leading-relaxed"
        >
          {parsed.questionText}
        </p>
      </div>
    </div>
  );
};
