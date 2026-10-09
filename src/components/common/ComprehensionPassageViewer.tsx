import React, { useState } from 'react';
import { sanitizeHtml } from '../../utils/security';

export interface ParsedQuestionContent {
  hasPassage: boolean;
  isCloze?: boolean;
  targetGap?: string | null;
  targetSentence?: string | null;
  gapRange?: string | null;
  instruction?: string;
  passageText?: string;
  questionText: string;
}

/**
 * Extracts and formats the specific sentence or clause containing the target gap.
 */
export function extractTargetSentence(passageText: string, targetGap: string): string | null {
  if (!passageText || !targetGap) return null;

  const gapPattern = new RegExp(
    `(?:[-–—]{1,4}\\s*${targetGap}\\s*[-–—]{0,4}|[.…_]{2,}\\s*${targetGap}\\s*[.…_]{2,}|[.…_]\\s*${targetGap}\\s*[.…_]|…\\s*${targetGap}\\s*…|[\\(\\[]\\s*${targetGap}\\s*[\\)\\]]|\\b(?:gap|no\\.?)\\s*${targetGap}\\b)`,
    'i'
  );

  // Split into sentences / clauses while keeping clean boundaries
  const rawSentences = passageText
    .split(/(?<=[.?!;])\s+(?=[a-zA-Z0-9"“])|\n+/)
    .map((s) => s.trim())
    .filter(Boolean);

  for (const sentence of rawSentences) {
    if (gapPattern.test(sentence)) {
      return formatSentenceWithBlank(sentence, targetGap);
    }
  }

  // Fallback: search by regex substring in full text
  const match = passageText.match(gapPattern);
  if (match && match.index !== undefined) {
    const start = Math.max(0, passageText.lastIndexOf('.', match.index) + 1);
    let end = passageText.indexOf('.', match.index + match[0].length);
    if (end === -1) end = passageText.length;
    const clause = passageText.substring(start, end).trim();
    if (clause) {
      return formatSentenceWithBlank(clause, targetGap);
    }
  }

  return null;
}

function formatSentenceWithBlank(sentence: string, targetGap: string): string {
  const gapPattern = new RegExp(
    `(?:[-–—]{1,4}\\s*${targetGap}\\s*[-–—]{0,4}|[.…_]{2,}\\s*${targetGap}\\s*[.…_]{2,}|[.…_]\\s*${targetGap}\\s*[.…_]|…\\s*${targetGap}\\s*…|[\\(\\[]\\s*${targetGap}\\s*[\\)\\]]|\\b(?:gap|no\\.?)\\s*${targetGap}\\b)`,
    'i'
  );

  let formatted = sentence.trim();
  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  // Replace target gap with a clean, prominent gold blank
  formatted = formatted.replace(
    gapPattern,
    `<span class="inline-flex items-center justify-center font-black bg-[#F8C800] text-[#001028] px-3 py-1 rounded-xl border-2 border-[#001028] shadow-sm mx-1.5 text-sm sm:text-base tracking-wider font-mono">____ [ Gap ${targetGap} ] ____</span>`
  );

  // Format any other gap numbers that might appear in the same sentence as subtle badges
  formatted = formatted.replace(
    /(?:[-–—]{1,4}\s*(\d+)\s*[-–—]{0,4}|[.…_]{2,}\s*(\d+)\s*[.…_]{2,}|…\s*(\d+)\s*…)/g,
    ' [ Gap $1 ] '
  );

  return formatted;
}

/**
 * Intelligent parser that extracts reading comprehension passages,
 * cloze passages with numbered gaps, instructions, and clean question prompts from raw question texts.
 */
export function parseQuestionContent(
  rawText: string,
  explicitPassage?: string,
  subject?: string,
  explanation?: string
): ParsedQuestionContent {
  // Clean duplicate word typos like "Choose choose" -> "Choose"
  let text = (rawText || '').trim();
  text = text.replace(/\bchoose\s+choose\b/gi, 'Choose');

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

  // 3. Cloze Passage / Numbered Gaps Pattern:
  // e.g. "Choose the word that is the most suitable to fill the numbered gaps in the passage..."
  const clozeInstructionRegex = /^(?:Choose\s+(?:the\s+)?word\s+that\s+is\s+(?:the\s+)?most\s+suitable\s+to\s+fill\s+(?:the\s+)?numbered\s+gaps(?:\s+in\s+the\s+passage)?[:.]?|The\s+passage\s+below\s+has\s+gaps\s+numbered\s+\d+[-–]\d+[:.]?(?:\s*Immediately\s+following\s+each\s+gap,\s*four\s+options\s+are\s+provided\.\s*Choose\s+the\s+most\s+appropriate\s+option\s+for\s+the\s+gap\.)?|In\s+the\s+(?:following\s+)?passage[,\s]+(?:the\s+)?numbered\s+gaps\s+indicate\s+omitted\s+words[:.]?|Choose\s+the\s+most\s+appropriate\s+option\s+for\s+(?:each\s+)?gap[:.]?|Fill\s+in\s+the\s+(?:numbered\s+)?gaps\b[:.]?)\s*/i;
  const clozeInstructionMatch = text.match(clozeInstructionRegex);
  const hasGapMarkers = /(?:\.{3,}\s*\d+\s*\.{3,}|_{2,}\s*\d+\s*_{2,}|…\s*\d+\s*…|[-–—]{2,}\s*\d+\s*[-–—]{2,})/.test(text);

  if (clozeInstructionMatch || (hasGapMarkers && text.length > 180)) {
    const instruction = clozeInstructionMatch
      ? clozeInstructionMatch[0].trim()
      : 'Choose the word that is most suitable to fill the numbered gaps in the passage:';
    const body = clozeInstructionMatch ? text.substring(clozeInstructionMatch[0].length).trim() : text;

    // Detect trailing target gap marker (e.g. "---5---", "-75", "<hr/>-80-", "…5…", "...75...", "(75)", "Gap 75", etc.)
    const trailingGapRegex = /(?:<hr\s*\/?>|<br\s*\/?>)?\s*(?:[-–—]+\s*(\d+)\s*[-–—]*|[.…_]{2,}\s*(\d+)\s*[.…_]{2,}|[.…_]\s*(\d+)\s*[.…_]|[…\.]\s*(\d+)\s*[…\.]|[\(\[]\s*(\d+)\s*[\)\]]|\bGap\s*(\d+)|\bQ(?:\.|uestion)?\s*(\d+))\s*$/i;
    const trailingGapMatch = body.match(trailingGapRegex);

    let targetGap: string | null = null;
    let cleanPassage = body;

    if (trailingGapMatch) {
      targetGap =
        trailingGapMatch[1] ||
        trailingGapMatch[2] ||
        trailingGapMatch[3] ||
        trailingGapMatch[4] ||
        trailingGapMatch[5] ||
        trailingGapMatch[6] ||
        trailingGapMatch[7] ||
        null;
      cleanPassage = body.substring(0, trailingGapMatch.index).trim();
    } else if (explanation) {
      // Fallback: check explanation for gap number
      const expGapMatch = explanation.match(/(?:gap|no\.?|[.…_]{2,}|[-–—]{1,3})\s*(\d+)/i);
      if (expGapMatch) {
        targetGap = expGapMatch[1];
      }
    }

    // Determine range of gaps in the passage (e.g. "71–80" or "1–10")
    let gapRange: string | null = null;
    const allGaps = [...cleanPassage.matchAll(/(?:[-–—]+\s*(\d+)\s*[-–—]*|[.…_]{2,}\s*(\d+)\s*[.…_]{2,}|…\s*(\d+)\s*…)/g)];
    if (allGaps.length > 1) {
      const nums = allGaps
        .map((m) => parseInt(m[1] || m[2] || m[3], 10))
        .filter((n) => !isNaN(n));
      if (nums.length > 1) {
        gapRange = `${Math.min(...nums)}–${Math.max(...nums)}`;
      }
    }

    // Extract the specific sentence with the blank for targetGap
    const targetSentence = targetGap ? extractTargetSentence(cleanPassage, targetGap) : null;

    return {
      hasPassage: true,
      isCloze: true,
      targetGap,
      targetSentence,
      gapRange,
      instruction,
      passageText: cleanPassage,
      questionText: targetGap
        ? `Choose the word that is most suitable to fill Gap [ ${targetGap} ] in the passage:`
        : 'Choose the most suitable word to fill the indicated gap:'
    };
  }

  // 4. Embedded reading comprehension passage pattern: "Read the following passage carefully and answer..."
  const isEnglishOrLit = !subject || /english|literature/i.test(subject);
  const strippedText = text.replace(/<img[^>]*>/gi, '').trim();
  const passagePrefixRegex = /^(?:Read the following passage carefully and answer (?:these|the|this)?\s*questions?[:.]?|Read each passage and answer the questions? that follows?[:.]?|Read the passage below to answer the questions? that follow[:.]?)\s*/i;
  const prefixMatch = text.match(passagePrefixRegex);

  if (prefixMatch || (isEnglishOrLit && strippedText.length > 280)) {
    const questionSplitPatterns = [
      /\bQuestions\s+A\.\s+/i,
      /\bQuestions\s*:\s*/i,
      /\bQuestion\s*:\s*/i,
      /\bA\.\s+In\s+(?:three|four|five|six|two)\s+sentences/i,
      /\bIn\s+(?:three|four|five|six|two)\s+sentences,\s+one\s+for\s+each/i,
      /\bA\s+In\s+(?:three|four|five|six|two)\s+sentences/i,
      /\bAccording to the passage,?\s+/i,
      /\bThe author(?:'s)?\s+(?:implies|states|suggests|attitude|tone)\b/i,
      /\bFrom the passage,?\s+/i,
      /\bWhat is the main (?:idea|purpose|theme)\b/i
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

  // 5. Default: Standard question text without passage
  return {
    hasPassage: false,
    questionText: text
  };
}

interface ComprehensionPassageViewerProps {
  text: string;
  passage?: string;
  explanation?: string;
  fontScale?: number;
  subject?: string;
  defaultExpanded?: boolean;
}

// Helper to format gaps in cloze passages and spotlight target gap
function formatClozePassageHtml(rawText: string, targetGap?: string | null): string {
  let formatted = rawText;

  // 1. Highlight the target gap in a vibrant gold spotlight badge
  if (targetGap) {
    const targetRegex = new RegExp(
      `(?:\\.{2,}\\s*${targetGap}\\s*\\.{2,}|_{2,}\\s*${targetGap}\\s*_{2,}|…\\s*${targetGap}\\s*…|\\b(?:gap|number|no\\.?)\\s*${targetGap}\\b)`,
      'gi'
    );
    formatted = formatted.replace(
      targetRegex,
      `<mark class="inline-flex items-center justify-center font-black bg-[#F8C800] text-[#001028] px-2.5 py-0.5 rounded-md border-2 border-[#001028] shadow-sm mx-1 text-xs">👉 Gap [ ${targetGap} ] 👈</mark>`
    );
  }

  // 2. Format all other numbered gaps as neat clean badges
  formatted = formatted.replace(/(?:\.{2,}\s*(\d+)\s*\.{2,}|_{2,}\s*(\d+)\s*_{2,}|…\s*(\d+)\s*…)/g, (_m, g1, g2, g3) => {
    const num = g1 || g2 || g3;
    if (num === targetGap) return _m;
    return `<span class="inline-flex items-center justify-center font-bold bg-slate-200/90 text-slate-800 px-1.5 py-0.5 rounded-md border border-slate-300 font-mono text-[11px] mx-1">[ ${num} ]</span>`;
  });

  return formatted;
}

// Helper to render question text with full support for embedded HTML/images, markdown images, tables, and math
export function renderFormattedQuestionText(rawText: string, fontScale: number = 1.0, isBold: boolean = false) {
  if (!rawText) return null;
  let text = (rawText || '').trim();

  // Convert markdown images ![alt](url) to HTML <img> with clean container
  const hasMarkdownImages = /!\[([^\]]*)\]\(([^)]+)\)/.test(text);
  if (hasMarkdownImages) {
    text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_m, alt, src) => {
      const trimmedAlt = (alt || '').trim();
      return `<figure class="my-3 flex flex-col items-center justify-center p-2.5 bg-white rounded-xl border border-[#E4EAE8] shadow-xs max-w-md mx-auto">
        <img src="${src.trim()}" alt="${trimmedAlt}" class="max-h-64 max-w-full object-contain rounded-lg" loading="lazy" />
        ${trimmedAlt ? `<figcaption class="mt-1 text-xs text-gray-500 font-medium text-center">${trimmedAlt}</figcaption>` : ''}
      </figure>`;
    });
  }

  const hasHtml = /<\/?(?:img|figure|figcaption|table|tr|td|th|p|div|span|b|i|sup|sub|br|strong|em|mark)[^>]*>/i.test(text);

  if (hasHtml) {
    return (
      <div
        style={{ fontSize: `${1.02 * fontScale}rem`, lineHeight: 1.65 }}
        className={`${isBold ? 'font-bold' : 'font-semibold'} text-[#10201D] select-text leading-relaxed overflow-x-auto [&_img]:max-w-full [&_img]:h-auto [&_img]:my-2.5 [&_img]:rounded-xl [&_img]:shadow-xs [&_img]:mx-auto [&_img]:block [&_img]:border [&_img]:border-[#E4EAE8] [&_img]:bg-white [&_img]:p-1.5`}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(text) }}
      />
    );
  }

  return (
    <p
      style={{ fontSize: `${1.02 * fontScale}rem`, lineHeight: 1.65 }}
      className={`${isBold ? 'font-bold' : 'font-semibold'} text-[#10201D] tracking-normal select-text whitespace-pre-line leading-relaxed`}
    >
      {text}
    </p>
  );
}

export const ComprehensionPassageViewer: React.FC<ComprehensionPassageViewerProps> = ({
  text,
  passage,
  explanation,
  fontScale = 1.0,
  subject = 'Use of English',
  defaultExpanded = false
}) => {
  const parsed = parseQuestionContent(text, passage, subject, explanation);
  // Default to collapsed for cloze passages so options are visible immediately without scrolling
  const [isPassageExpanded, setIsPassageExpanded] = useState<boolean>(
    parsed.isCloze ? false : defaultExpanded
  );

  // If NO passage exists: Render clean question text with full HTML/image support
  if (!parsed.hasPassage || !parsed.passageText) {
    return (
      <div className="space-y-2">
        {renderFormattedQuestionText(parsed.questionText, fontScale, false)}
      </div>
    );
  }

  // Split passage into readable paragraphs
  const rawParagraphs = parsed.passageText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);

  // If cloze passage, format gap badges in paragraphs
  const paragraphs = parsed.isCloze
    ? rawParagraphs.map((p) => formatClozePassageHtml(p, parsed.targetGap))
    : rawParagraphs;

  return (
    <div className="space-y-3 animate-fade-up">
      {/* ─── 1. Featured Cloze Target Sentence Box ─── */}
      {parsed.isCloze && (
        <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#001028]/15 shadow-xs space-y-3">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-lg text-xs font-black bg-[#001028] text-[#F8C800] border border-[#F8C800]/40 shadow-xs flex items-center space-x-1.5">
                <span>🎯</span>
                <span>Cloze Gap [ {parsed.targetGap || '...'} ]</span>
              </span>
              <span className="text-xs font-bold text-gray-700">
                Choose the word that fills this gap:
              </span>
            </div>
            {parsed.gapRange && (
              <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                Passage Covers Gaps {parsed.gapRange}
              </span>
            )}
          </div>

          {/* Prominent Target Sentence Box with highlighted blank */}
          {parsed.targetSentence ? (
            <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E2E8F0] text-base sm:text-lg font-medium text-[#001028] leading-relaxed select-text shadow-2xs">
              <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(parsed.targetSentence) }} />
            </div>
          ) : (
            <div className="text-sm font-bold text-[#001028]">
              {renderFormattedQuestionText(parsed.questionText, fontScale, true)}
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-gray-500 pt-0.5 flex-wrap gap-2">
            <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
              👇 Select your answer from the options below
            </span>
            <button
              type="button"
              onClick={() => setIsPassageExpanded((prev) => !prev)}
              className="font-bold text-[#001028] hover:text-[#001028]/80 hover:underline cursor-pointer flex items-center space-x-1 ml-auto"
            >
              <span>{isPassageExpanded ? '▲ Hide Full Story' : '📖 Read Full Story ▾'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ─── 2. Reading Passage Drawer / Full Context Card ─── */}
      <div className="rounded-2xl bg-[#FCFAF7] border border-[#E8DFD1] shadow-xs overflow-hidden transition-all duration-200">
        {/* Card Header Strip */}
        <div className="bg-[#F5EFE6] px-3.5 sm:px-4 py-2.5 border-b border-[#E8DFD1] flex items-center justify-between gap-2 select-none">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="w-6 h-6 rounded-lg bg-[#001028] text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
              {parsed.isCloze ? '📝' : '📖'}
            </span>
            <div className="flex items-center space-x-2 truncate">
              <span className="text-[12px] sm:text-[13px] font-black text-[#001028] uppercase tracking-wider truncate">
                {parsed.isCloze
                  ? `Full Cloze Passage${parsed.gapRange ? ` (Gaps ${parsed.gapRange})` : ''}`
                  : 'Reading Comprehension Passage'}
              </span>
              {parsed.targetGap && (
                <span className="text-[10px] font-black bg-[#001028] text-[#F8C800] px-2 py-0.5 rounded-full shrink-0 shadow-2xs">
                  Gap [ {parsed.targetGap} ]
                </span>
              )}
            </div>
          </div>

          {/* Controls: Collapse / Expand Button */}
          <button
            type="button"
            onClick={() => setIsPassageExpanded((prev) => !prev)}
            className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white border border-[#D5C7B0] hover:border-[#001028] text-xs font-bold text-[#001028] hover:bg-[#F0FDF4] transition-all duration-150 cursor-pointer select-none shadow-2xs shrink-0 active:scale-95"
            title={isPassageExpanded ? 'Minimize passage view' : 'Maximize passage view'}
          >
            <span>{isPassageExpanded ? '▲' : '📖'}</span>
            <span className="hidden xs:inline">{isPassageExpanded ? 'Hide Passage' : 'Read Full Passage'}</span>
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
            className="px-4 py-2.5 bg-[#FFFDFB] hover:bg-[#FAF4EC] text-[#001028] text-xs font-bold flex items-center justify-between cursor-pointer transition select-none group"
          >
            <span className="flex items-center space-x-1.5 truncate">
              <span>{parsed.isCloze ? '📝' : '📖'}</span>
              <span className="truncate">
                {parsed.isCloze
                  ? `Full passage context for Gaps ${parsed.gapRange || 'in text'}. Tap to read full story.`
                  : 'This question is based on the reading passage. Tap to read full text.'}
              </span>
            </span>
            <span className="text-[11px] font-bold text-[#001028] bg-[#E8F5E9] border border-[#C8E6C9] group-hover:bg-[#001028] group-hover:text-white px-2.5 py-0.5 rounded-full transition ml-2 shrink-0">
              Read Passage ▾
            </span>
          </div>
        )}

        {/* Scrollable Passage Body When Expanded */}
        {isPassageExpanded && (
          <div className="p-4 sm:p-5 max-h-64 sm:max-h-80 overflow-y-auto space-y-3 pr-3 select-text border-b border-[#E8DFD1]/60 custom-scrollbar bg-[#FCFAF7]">
            {paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{ fontSize: `${0.94 * fontScale}rem`, lineHeight: 1.75 }}
                className="text-[#1F2937] font-normal tracking-normal text-justify"
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(p) }}
              />
            ))}

            {/* Bottom Collapse Button */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => setIsPassageExpanded(false)}
                className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white border border-[#D5C7B0] text-[11px] font-bold text-[#66736F] hover:text-[#001028] hover:border-[#001028] transition cursor-pointer shadow-2xs"
              >
                <span>▲</span>
                <span>Done Reading? Hide Passage &amp; Answer Below</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ─── 3. Standard Non-Cloze Question Prompt Box ──────── */}
      {!parsed.isCloze && (
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#E4EAE8] shadow-subtle select-text">
          <div className="flex items-center space-x-2 mb-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#001028] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              Question Prompt
            </span>
            {parsed.targetGap && (
              <span className="text-[10px] font-black uppercase tracking-wider text-[#001028] bg-[#F8C800] px-2 py-0.5 rounded-full shadow-2xs">
                Gap {parsed.targetGap}
              </span>
            )}
          </div>
          {renderFormattedQuestionText(parsed.questionText, fontScale, true)}
        </div>
      )}
    </div>
  );
};

export default ComprehensionPassageViewer;
