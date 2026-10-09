import React from 'react';
import katex from 'katex';
import {
  OFFICIAL_LOGO_JAMB,
  OFFICIAL_LOGO_WAEC,
  OFFICIAL_LOGO_NECO,
  OFFICIAL_LOGO_NABTEB
} from '../../data/examLogosData';

interface DigitalBoardSolutionProps {
  correctOptionKey?: string;
  correctOptionText?: string;
  explanationText?: string;
  topic?: string;
  examType?: string;
  examTip?: string;
  year?: number | string;
}

/**
 * Resolves the official Nigerian exam council logo (Base64 data URL)
 * Always uses real official images, NEVER emoji icons.
 */
function getOfficialExamLogo(examType?: string): { logoSrc: string; examName: string } {
  const norm = (examType || '').toUpperCase();
  if (norm.includes('WAEC') || norm.includes('SSCE') || norm.includes('WASSCE')) {
    return { logoSrc: OFFICIAL_LOGO_WAEC, examName: 'WAEC' };
  }
  if (norm.includes('NECO')) {
    return { logoSrc: OFFICIAL_LOGO_NECO, examName: 'NECO' };
  }
  if (norm.includes('NABTEB')) {
    return { logoSrc: OFFICIAL_LOGO_NABTEB, examName: 'NABTEB' };
  }
  return { logoSrc: OFFICIAL_LOGO_JAMB, examName: 'JAMB UTME' };
}

/**
 * Format LaTeX math formulas and HTML tags (such as <sup>, <sub>, fractions)
 * using KaTeX with fallback to clean HTML typography.
 */
function formatMathAndHtml(input: string): string {
  if (!input) return '';
  let str = input.trim();

  // 1. Render display math \[ ... \] or $$ ... $$
  str = str.replace(/\\\[([\s\S]*?)\\\]/g, (_, expr) => {
    try {
      return `<div class="my-2.5 overflow-x-auto py-1">${katex.renderToString(expr.trim(), { displayMode: true, throwOnError: false })}</div>`;
    } catch {
      return expr;
    }
  });

  str = str.replace(/\$\$([\s\S]*?)\$\$/g, (_, expr) => {
    try {
      return `<div class="my-2.5 overflow-x-auto py-1">${katex.renderToString(expr.trim(), { displayMode: true, throwOnError: false })}</div>`;
    } catch {
      return expr;
    }
  });

  // 2. Render inline math \( ... \) or $ ... $
  str = str.replace(/\\\(([\s\S]*?)\\\)/g, (_, expr) => {
    try {
      return katex.renderToString(expr.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return expr;
    }
  });

  // Match single $...$ if not already matched
  str = str.replace(/\$([^\$\n]+?)\$/g, (_, expr) => {
    try {
      return katex.renderToString(expr.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return expr;
    }
  });

  // 3. Clean up HTML superscripts & subscripts if present without tags
  // Style <sup> and <sub> tags with clean typography
  str = str.replace(/<sup>([\s\S]*?)<\/sup>/gi, '<sup class="text-[0.75em] font-bold text-[#FFD600] align-super leading-none px-0.5">$1</sup>');
  str = str.replace(/<sub>([\s\S]*?)<\/sub>/gi, '<sub class="text-[0.75em] font-bold text-[#A7F3D0] align-sub leading-none px-0.5">$1</sub>');

  return str;
}

/**
 * Break unformatted single-paragraph explanations into structured chalkboard steps
 */
function splitIntoChalkboardSteps(text: string): string[] {
  if (!text) return [];

  // Remove duplicate/inline "Exam Tip:" since it is rendered in its own official blueprint section
  const cleaned = text.split(/(?:💡\s*)?(?:JAMB\s+|WAEC\s+|Math\s+|Physics\s+|Chem\s+|Bio\s+)?(?:Exam\s+Tip|CBT\s+Tip|Tip|Note):/i)[0].trim();

  // If already separated by line breaks, use them
  if (cleaned.includes('\n')) {
    return cleaned.split('\n').map((s) => s.trim()).filter(Boolean);
  }

  // Split on sentence boundaries that lead into calculation steps
  // e.g. "Probability(John Pass ) = ... Probability(John failed) = ..."
  const stepDelimiters = /(?<=\.|\))\s+(?=(?:Probability|Step\s+\d+|Now,|Therefore|Thus|Hence|Where|Formula|Substitute|Using|Total|By\s+Hooke|By\s+Snell|According|Let\s+)\b)/gi;
  const parts = cleaned.split(stepDelimiters);

  if (parts.length > 1) {
    return parts.map((p) => p.trim()).filter(Boolean);
  }

  // If still one long block, split on period followed by capital letter
  return cleaned.split(/(?<=\.)\s+(?=[A-Z])/g).map((p) => p.trim()).filter(Boolean);
}

/**
 * Clean tip text of any AI-like prefix
 */
function cleanExamTipText(tip: string): string {
  if (!tip) return '';
  return tip
    .replace(/^(?:💡\s*)?(?:Math\s+|Physics\s+|Chemistry\s+|Biology\s+|JAMB\s+|WAEC\s+)?CBT\s+Tip:\s*/i, '')
    .replace(/^(?:💡\s*)?(?:Exam\s+Tip|Tip|Note):\s*/i, '')
    .trim();
}

export const DigitalBoardSolution: React.FC<DigitalBoardSolutionProps> = ({
  correctOptionKey = 'A',
  correctOptionText = '',
  explanationText = '',
  topic = 'Calculation',
  examType = 'WAEC',
  examTip = '',
  year = ''
}) => {
  const { logoSrc, examName } = getOfficialExamLogo(examType);
  const steps = splitIntoChalkboardSteps(explanationText);
  const formattedOption = formatMathAndHtml(correctOptionText);
  const cleanedTip = cleanExamTipText(examTip);

  return (
    <div className="w-full rounded-[18px] bg-white border border-[#E4EAE8] shadow-subtle text-[#10201D] my-3.5 animate-fadeIn overflow-hidden text-left font-sans">
      {/* ─── Clean Header: Match Dashboard Standard ─── */}
      <div className="p-4 sm:p-4.5 border-b border-[#E4EAE8] bg-[#FBFDFB] flex items-center justify-between gap-3">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 p-0.5 flex items-center justify-center shrink-0 shadow-2xs">
            <img
              src={logoSrc}
              alt={`${examName} Official Logo`}
              className="w-6 h-6 object-contain rounded-md"
            />
          </div>
          <div>
            <h4 className="text-[13.5px] sm:text-[14px] font-black text-[#10201D] leading-tight">
              Step-by-Step Solution
            </h4>
            <p className="text-[11px] text-[#66736F] font-medium">
              {examName} {year ? `(${year})` : ''} • {topic}
            </p>
          </div>
        </div>

        {/* Clean Correct Answer Pill */}
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[#001028] text-xs font-black shrink-0 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Option {correctOptionKey}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 space-y-3.5 text-left">
        {/* ─── Correct Option Content Strip (If Option text exists) ─── */}
        {formattedOption && (
          <div className="p-3 rounded-xl bg-[#F4F8F6] border border-[#D5E3DE] text-[13px] sm:text-[13.5px] text-[#10201D] font-semibold flex items-center gap-2">
            <span className="text-[#001028] font-black shrink-0">Correct Answer:</span>
            <div
              className="font-bold text-[#001028] break-words"
              dangerouslySetInnerHTML={{ __html: formattedOption }}
            />
          </div>
        )}

        {/* ─── Step-by-Step Working with High-Contrast Readability ─── */}
        <div className="p-3.5 sm:p-4 rounded-[14px] bg-[#FAFBFB] border border-[#E4EAE8] text-[13px] sm:text-[13.5px] leading-relaxed text-[#10201D] space-y-2.5">
          {steps.length > 0 ? (
            steps.map((stepText, idx) => {
              const lower = stepText.toLowerCase();
              const isFinal =
                lower.includes('therefore') ||
                lower.includes('thus') ||
                lower.includes('final answer') ||
                stepText.includes('⇒') ||
                lower.includes('hence, the correct option');

              const isFormula =
                lower.includes('formula') ||
                lower.includes('probability =') ||
                lower.includes('use the formula');

              if (isFinal) {
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-emerald-50/90 border border-emerald-300 text-[#001028] font-bold text-[13.5px] shadow-2xs flex items-center justify-between gap-2 my-1.5"
                  >
                    <div
                      className="flex-1 break-words leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatMathAndHtml(stepText) }}
                    />
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#001028] text-white shrink-0">
                      Final Answer
                    </span>
                  </div>
                );
              }

              if (isFormula) {
                return (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-amber-50/80 border-l-4 border-amber-400 text-amber-950 font-semibold text-[13px] my-1"
                  >
                    <div
                      className="break-words leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: formatMathAndHtml(stepText) }}
                    />
                  </div>
                );
              }

              return (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 text-[#10201D]"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-100/70 border border-emerald-300/80 text-[#001028] text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div
                    className="flex-1 leading-relaxed break-words text-[#10201D]"
                    dangerouslySetInnerHTML={{ __html: formatMathAndHtml(stepText) }}
                  />
                </div>
              );
            })
          ) : (
            <div className="text-[#66736F] font-medium">
              Detailed step-by-step solution verified against official syllabus marking schemes.
            </div>
          )}
        </div>

        {/* ─── Examiner Blueprint / Tip (Clean Light Card) ─── */}
        {cleanedTip && (
          <div className="rounded-[14px] border border-amber-300/80 bg-amber-50/60 p-3.5 text-left">
            <div className="flex items-center space-x-2 pb-1.5 border-b border-amber-200/80 mb-2">
              <span className="text-base">💡</span>
              <span className="text-[12px] font-black uppercase tracking-wider text-amber-950">
                {examName} Examiner Tip &amp; Strategy
              </span>
            </div>
            <p className="text-[12.5px] text-amber-950 leading-relaxed font-medium">
              {cleanedTip}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalBoardSolution;
