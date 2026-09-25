import React, { useState } from 'react';
import katex from 'katex';

interface RichNoteRendererProps {
  content: string;
  chalkboard?: boolean;
}

function renderLatexToHtml(latex: string, isDisplay: boolean): string {
  try {
    return katex.renderToString(latex.trim(), {
      displayMode: isDisplay,
      throwOnError: false,
    });
  } catch {
    return `<span class="katex-fallback font-mono text-slate-800">${latex}</span>`;
  }
}

export function formatClassroomHtml(rawHtml: string): string {
  if (!rawHtml) return '';
  let html = rawHtml;

  // 1. Remove inline text-align:center styles from headings and paragraphs
  html = html.replace(/(<(?:h[1-6]|p|div))[^>]*?style=["'][^"']*?text-align\s*:\s*center;?[^"']*?["']/gi, '$1');

  // 2. Render KaTeX for <span class="mathjax-latex">...</span>
  html = html.replace(/<span\s+class=["']mathjax-latex["']>([\s\S]*?)<\/span>/gi, (_match, texContent: string) => {
    let cleanTex = texContent.trim();
    let isDisplay = false;
    if (cleanTex.startsWith('\\[') && cleanTex.endsWith('\\]')) {
      cleanTex = cleanTex.slice(2, -2).trim();
      isDisplay = true;
    } else if (cleanTex.startsWith('\\(') && cleanTex.endsWith('\\)')) {
      cleanTex = cleanTex.slice(2, -2).trim();
    } else if (cleanTex.includes('\\frac') && cleanTex.length > 25) {
      isDisplay = true;
    }
    const rendered = renderLatexToHtml(cleanTex, isDisplay);
    return isDisplay
      ? `<div class="katex-display-block my-3 text-slate-900">${rendered}</div>`
      : `<span class="katex-inline px-0.5 text-slate-900 font-semibold">${rendered}</span>`;
  });

  // 3. Render display math: \[ ... \] and $$ ... $$
  html = html.replace(/\\\[([\s\S]*?)\\\]/g, (_match, tex: string) => {
    return `<div class="katex-display-block my-3 text-slate-900">${renderLatexToHtml(tex, true)}</div>`;
  });
  html = html.replace(/\$\$([\s\S]*?)\$\$/g, (_match, tex: string) => {
    return `<div class="katex-display-block my-3 text-slate-900">${renderLatexToHtml(tex, true)}</div>`;
  });

  // 4. Render inline math: \( ... \)
  html = html.replace(/\\\(([\s\S]*?)\\\)/g, (_match, tex: string) => {
    return `<span class="katex-inline px-0.5 text-slate-900 font-semibold">${renderLatexToHtml(tex, false)}</span>`;
  });

  // 5. Clean empty paragraphs
  html = html.replace(/<p>\s*(?:&nbsp;|<br\s*\/?>)*\s*<\/p>/gi, '');

  // 6. Wrap tables in clean, standard textbook container (no AI decorations)
  html = html.replace(/<table\b([^>]*)>([\s\S]*?)<\/table>/gi, (_match, attrs, content) => {
    return `<div class="overflow-x-auto my-6 rounded-xl border border-slate-200 bg-white shadow-xs">
      <table ${attrs} class="min-w-full w-full text-left text-sm border-collapse">${content}</table>
    </div>`;
  });

  return html;
}

export const RichNoteRenderer: React.FC<RichNoteRendererProps> = ({ content, chalkboard = false }) => {
  if (!content) return null;

  // Check if content is HTML (e.g. FlashLearners extracted notes)
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(content) && (
    content.includes('<p>') || content.includes('<p ') ||
    content.includes('<table>') || content.includes('<table ') ||
    content.includes('<ul>') || content.includes('<ol>') ||
    content.includes('<h3>') || content.includes('<h2>') || content.includes('<h1>') ||
    content.includes('<div>') || content.includes('<div ')
  );

  if (isHtml) {
    const formattedHtml = formatClassroomHtml(content);
    return (
      <div
        className="classroom-html-content select-text leading-relaxed text-slate-900 text-sm sm:text-base space-y-4"
        dangerouslySetInnerHTML={{ __html: formattedHtml }}
      />
    );
  }

  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (key: string) => {
    setRevealedAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  
  let currentTableLines: string[] = [];
  let inTable = false;
  let currentCodeLines: string[] = [];
  let inCodeBlock = false;
  let inSvgBlock = false;
  let currentSvgLines: string[] = [];

  const flushTable = (idx: number) => {
    if (currentTableLines.length === 0) return;
    const headerLine = currentTableLines[0];
    const dataLines = currentTableLines.slice(2); // skip separator line

    const headers = headerLine.split('|').map(h => h.trim()).filter(Boolean);
    const rows = dataLines.map(row => row.split('|').map(c => c.trim()).filter(Boolean));

    elements.push(
      <div
        key={`table-${idx}`}
        className="my-5 rounded-xl border border-[#DDE7E3] bg-white shadow-xs overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#E8F5E9] border-b border-[#DDE7E3] text-[#102A2A]">
                {headers.map((h, hIdx) => (
                  <th
                    key={hIdx}
                    className="px-4 py-2.5 font-extrabold text-xs uppercase tracking-wider whitespace-nowrap text-[#102A2A]"
                  >
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#DDE7E3]">
              {rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#F7F9F7]'}
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-4 py-2.5 leading-relaxed text-sm ${
                        cIdx === 0
                          ? 'font-bold text-[#102A2A]'
                          : 'font-normal text-[#102A2A]'
                      }`}
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
    currentTableLines = [];
    inTable = false;
  };

  const flushCodeBlock = (idx: number) => {
    if (currentCodeLines.length === 0) return;
    const codeText = currentCodeLines.join('\n');

    elements.push(
      <div key={`code-${idx}`} className="my-4 rounded-xl border border-slate-200 bg-slate-50 p-4 overflow-x-auto shadow-xs">
        <pre className="font-mono text-xs sm:text-sm text-slate-900 leading-relaxed font-semibold whitespace-pre-wrap">
          {codeText}
        </pre>
      </div>
    );
    currentCodeLines = [];
    inCodeBlock = false;
  };

  const flushSvgBlock = (idx: number) => {
    if (currentSvgLines.length === 0) return;
    const svgCode = currentSvgLines.join('\n');
    elements.push(
      <div
        key={`svg-raw-${idx}`}
        className="my-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs overflow-hidden flex justify-center"
      >
        <div
          className="w-full flex justify-center overflow-x-auto max-h-[420px]"
          dangerouslySetInnerHTML={{ __html: svgCode }}
        />
      </div>
    );
    currentSvgLines = [];
    inSvgBlock = false;
  };

  // Mathematical Symbol & LaTeX Cleanup
  const formatChalkMath = (raw: string): string => {
    if (!raw) return '';
    return raw
      .replace(/\(\$([^$]+)\$\)/g, '($1)')
      .replace(/\$([a-zA-Z0-9_{}\s+\-*/=()\\%]+)\$/g, '$1')
      .replace(/\\(?:text|mathrm|mathbf|boldsymbol|textbf)\{([^}]*)\}/g, '$1')
      .replace(/\\text\b/g, '')
      .replace(/\\%/g, '%')
      .replace(/\\quad|\\qquad|\\;|\\,|\\!/g, ' ')
      .replace(/\\left\b|\\right\b/g, '')
      .replace(/\\&/g, '&')
      .replace(/\\#/g, '#')
      // Greek symbols
      .replace(/\\eta\b/g, 'η')
      .replace(/\\theta\b/g, 'θ')
      .replace(/\\pi\b/g, 'π')
      .replace(/\\mu\b/g, 'μ')
      .replace(/\\lambda\b/g, 'λ')
      .replace(/\\alpha\b/g, 'α')
      .replace(/\\beta\b/g, 'β')
      .replace(/\\gamma\b/g, 'γ')
      .replace(/\\Delta\b/g, 'Δ')
      .replace(/\\Omega\b/g, 'Ω')
      .replace(/\\omega\b/g, 'ω')
      .replace(/\\phi\b/g, 'φ')
      .replace(/\\rho\b/g, 'ρ')
      .replace(/\\sigma\b/g, 'σ')
      .replace(/\\tau\b/g, 'τ')
      .replace(/\\epsilon\b/g, 'ε')
      // Operators
      .replace(/\\times\b/g, '×')
      .replace(/\\cdot\b/g, '·')
      .replace(/\\div\b/g, '÷')
      .replace(/\\pm\b/g, '±')
      .replace(/\\approx\b/g, '≈')
      .replace(/\\neq\b/g, '≠')
      .replace(/\\leq\b/g, '≤')
      .replace(/\\geq\b/g, '≥')
      .replace(/\\infty\b/g, '∞')
      .replace(/\\propto\b/g, '∝')
      .replace(/\\therefore\b/g, '∴')
      .replace(/\\because\b/g, '∵')
      .replace(/\\rightarrow\b|\\to\b/g, '→')
      .replace(/\\leftarrow\b/g, '←')
      .replace(/\\implies\b|\\Rightarrow\b/g, '⇒')
      .replace(/\\Leftarrow\b/g, '⇐')
      .replace(/\\leftrightarrow\b|\\iff\b/g, '↔')
      .replace(/\\degree\b|\^\\circ\b/g, '°')
      .replace(/\\operatorname\{([^}]*)\}/g, '$1')
      .replace(/\\sqrt\{([^}]*)\}/g, '√($1)')
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)')
      .replace(/\^2\b/g, '²')
      .replace(/\^3\b/g, '³')
      .replace(/\^4\b/g, '⁴')
      .replace(/\^n\b/g, 'ⁿ')
      .replace(/\^0\b/g, '⁰')
      .replace(/\^1\b/g, '¹')
      .replace(/\^-1\b/g, '⁻¹')
      .replace(/\^-2\b/g, '⁻²')
      .replace(/_1\b/g, '₁')
      .replace(/_2\b/g, '₂')
      .replace(/_3\b/g, '₃')
      .replace(/_0\b/g, '₀')
      .replace(/_E\b/g, 'ₑ')
      .replace(/_L\b/g, 'ₗ')
      .replace(/_k\b/g, 'ₖ')
      .replace(/_s\b/g, 'ₛ')
      .replace(/_x\b/g, 'ₓ')
      .replace(/_y\b/g, 'ᵧ')
      .replace(/_A\b/g, 'ₐ')
      .replace(/_B\b/g, 'ᵦ')
      .replace(/_\{([^}]*)\}/g, '_$1');
  };

  const renderChalkMathContent = (math: string, keyPrefix = 'm'): React.ReactNode => {
    if (!math) return null;
    const fracRegex = /\\frac\{([^{}]+)\}\{([^{}]+)\}/g;
    if (!fracRegex.test(math)) {
      return <span>{formatChalkMath(math)}</span>;
    }
    fracRegex.lastIndex = 0;
    const parts: React.ReactNode[] = [];
    let lastIdx = 0;
    let match: RegExpExecArray | null;
    let counter = 0;

    while ((match = fracRegex.exec(math)) !== null) {
      if (match.index > lastIdx) {
        parts.push(
          <span key={`${keyPrefix}-t-${counter++}`}>
            {formatChalkMath(math.slice(lastIdx, match.index))}
          </span>
        );
      }
      const num = formatChalkMath(match[1].trim());
      const den = formatChalkMath(match[2].trim());
      parts.push(
        <span
          key={`${keyPrefix}-frac-${counter++}`}
          className="inline-flex flex-col items-center justify-center align-middle mx-1 text-center font-bold font-mono text-slate-900"
          style={{ verticalAlign: '-0.45em', lineHeight: 1.1 }}
        >
          <span className="border-b-2 border-slate-900 pb-0.5 px-1 text-center text-xs sm:text-sm">
            {num}
          </span>
          <span className="pt-0.5 px-1 text-center text-xs sm:text-sm">
            {den}
          </span>
        </span>
      );
      lastIdx = match.index + match[0].length;
    }

    if (lastIdx < math.length) {
      parts.push(
        <span key={`${keyPrefix}-t-end`}>
          {formatChalkMath(math.slice(lastIdx))}
        </span>
      );
    }

    return <>{parts}</>;
  };

  const cleanLatexAndSymbols = (str: string): string => {
    if (!str) return str;
    return formatChalkMath(str).replace(/###\s*/g, '');
  };

  const renderInline = (rawText: string): React.ReactNode => {
    if (!rawText) return rawText;
    const text = cleanLatexAndSymbols(rawText);
    const parts: React.ReactNode[] = [];
    const regex = /(\$\$.*?\$\$|\*\*[^*\n]+?\*\*|__[^_\n]+?__|\*[^*\n]+?\*|_[^_\n]+?_|`[^`\n]+?`|\$[^$\n]+?\$)/g;
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        parts.push(text.slice(lastIdx, match.index));
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-extrabold text-slate-950">
            {renderInline(token.slice(2, -2))}
          </strong>
        );
      } else if (token.startsWith('__') && token.endsWith('__')) {
        parts.push(
          <strong key={match.index} className="font-extrabold text-slate-950">
            {renderInline(token.slice(2, -2))}
          </strong>
        );
      } else if ((token.startsWith('*') && token.endsWith('*')) || (token.startsWith('_') && token.endsWith('_'))) {
        parts.push(
          <em key={match.index} className="italic text-slate-800">
            {renderInline(token.slice(1, -1))}
          </em>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code key={match.index} className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-xs text-slate-900 font-bold">
            {token.slice(1, -1)}
          </code>
        );
      } else if (token.startsWith('$$') && token.endsWith('$$')) {
        const inner = token.slice(2, -2);
        parts.push(
          <span key={match.index} className="font-mono font-bold text-slate-900 inline-flex items-center align-baseline">
            {renderChalkMathContent(inner, `display-${match.index}`)}
          </span>
        );
      } else if (token.startsWith('$') && token.endsWith('$')) {
        const inner = token.slice(1, -1);
        parts.push(
          <span key={match.index} className="font-mono font-bold text-slate-900 inline-flex items-center align-baseline">
            {renderChalkMathContent(inner, `inline-${match.index}`)}
          </span>
        );
      }
      lastIdx = match.index + token.length;
    }
    if (lastIdx < text.length) {
      parts.push(text.slice(lastIdx));
    }
    return parts.length > 0 ? parts : text;
  };

  lines.forEach((line, i) => {
    const rawTrimmed = line.trim();

    // Check raw SVG tag
    if (rawTrimmed.startsWith('<svg') || rawTrimmed.includes('<svg xmlns=')) {
      if (inTable) flushTable(i);
      if (inCodeBlock) flushCodeBlock(i);
      inSvgBlock = true;
      currentSvgLines.push(line);
      if (rawTrimmed.includes('</svg>')) {
        flushSvgBlock(i);
      }
      return;
    }

    if (inSvgBlock) {
      currentSvgLines.push(line);
      if (rawTrimmed.includes('</svg>')) {
        flushSvgBlock(i);
      }
      return;
    }

    // Check code blocks
    if (rawTrimmed.startsWith('```')) {
      if (inTable) flushTable(i);
      if (inCodeBlock) {
        flushCodeBlock(i);
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      currentCodeLines.push(line);
      return;
    }

    // Check markdown table lines (starts and ends with |)
    if (rawTrimmed.startsWith('|') && rawTrimmed.endsWith('|')) {
      inTable = true;
      currentTableLines.push(line);
      return;
    } else if (inTable) {
      flushTable(i);
    }

    // Strip artificial pipe '| ' prefixes from lines that are not table rows
    const trimmed = rawTrimmed.startsWith('| ') && !rawTrimmed.endsWith('|')
      ? rawTrimmed.replace(/^\|\s*/, '').trim()
      : rawTrimmed;

    if (trimmed.length === 0) return;

    // Handle Display Math ($$ ... $$)
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length >= 4) {
      const mathContent = trimmed.slice(2, -2).trim();
      elements.push(
        <div
          key={`math-block-${i}`}
          className="my-3 py-2 px-4 rounded-xl bg-slate-50 border border-slate-200 overflow-x-auto text-center select-text"
        >
          <div className="font-mono font-bold text-sm sm:text-base tracking-wide inline-flex items-center justify-center flex-wrap gap-1 text-slate-900">
            {renderChalkMathContent(mathContent, `display-${i}`)}
          </div>
        </div>
      );
      return;
    }

    // Handle numbered section headings (e.g. "1.1 Definition", "1.2 Types...", "3. Simplifying...", "4. Practice Questions")
    if (/^(\d+\.\d+|\d+\.)\s+[A-Z]/.test(trimmed) && trimmed.length < 80) {
      elements.push(
        <div key={`sec-badge-${i}`} className="my-4">
          <span className="inline-block px-3 py-1 bg-[#FFD21F] text-[#102A2A] font-black text-sm sm:text-base rounded-md sm:rounded-lg shadow-xs">
            {renderInline(trimmed)}
          </span>
        </div>
      );
      return;
    }

    // Handle H1: Clean major heading
    if (trimmed.startsWith('# ')) {
      const title = trimmed.replace(/^#\s*/, '').trim();
      elements.push(
        <h1 key={`h1-${i}`} className="text-xl sm:text-2xl font-black text-[#102A2A] mt-6 mb-3 pb-2 border-b border-[#DDE7E3] leading-snug">
          {renderInline(title)}
        </h1>
      );
      return;
    }

    // Handle H2: StudyPlug Official Yellow Pill Section Badge
    if (trimmed.startsWith('## ')) {
      const heading = trimmed.replace(/^##\s*/, '').trim();
      elements.push(
        <div key={`h2-${i}`} className="my-4">
          <span className="inline-block px-3.5 py-1.5 bg-[#FFD21F] text-[#102A2A] font-black text-sm sm:text-base rounded-md sm:rounded-lg shadow-xs">
            {renderInline(heading)}
          </span>
        </div>
      );
      return;
    }

    // Handle H3: Clean sub-heading
    if (trimmed.startsWith('### ')) {
      const heading = trimmed.replace(/^###\s*/, '').trim();
      elements.push(
        <h3 key={`h3-${i}`} className="text-base sm:text-lg font-bold text-[#102A2A] mt-4 mb-1.5 leading-snug">
          {renderInline(heading)}
        </h3>
      );
      return;
    }

    // Handle Remember / Tip Callout Boxes (Screen 7 & 8 style)
    if (/^(Remember|Tip|Note|Examiner Trap|Key Rule):\s*/i.test(trimmed)) {
      const match = trimmed.match(/^(Remember|Tip|Note|Examiner Trap|Key Rule):\s*(.*)/i);
      const label = match ? match[1] : 'Tip';
      const body = match ? match[2] : trimmed;
      elements.push(
        <div key={`tip-box-${i}`} className="my-3.5 p-3.5 rounded-xl bg-[#E8F5E9] border border-[#DDE7E3] text-[#102A2A] text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
          <span className="text-base select-none shrink-0">💡</span>
          <div>
            <div className="font-extrabold text-[#102A2A] mb-0.5">{label}:</div>
            <div className="text-[#102A2A] font-medium">{renderInline(body)}</div>
          </div>
        </div>
      );
      return;
    }

    // Handle Question labels: e.g. "Question 1 (JAMB 1978)" or "QUESTION 1:"
    if (/^QUESTION\s+\d+[:\s]/i.test(trimmed) || /^\*\*Question\s+\d+/i.test(trimmed)) {
      elements.push(
        <div key={`q-hdr-${i}`} className="mt-5 mb-1 text-sm sm:text-base font-extrabold text-[#004D40]">
          {renderInline(trimmed)}
        </div>
      );
      return;
    }

    // Handle "Correct Answer: " lines
    if (/^Correct Answer:\s*/i.test(trimmed)) {
      elements.push(
        <div key={`correct-ans-${i}`} className="my-1.5 text-xs sm:text-sm font-bold text-[#004D40] flex items-center gap-1.5 bg-[#E8F5E9] px-3 py-1.5 rounded-lg border border-[#DDE7E3]">
          <span>✓ {renderInline(trimmed)}</span>
        </div>
      );
      return;
    }

    // Handle "Explanation: " lines
    if (/^Explanation:\s*/i.test(trimmed)) {
      const explText = trimmed.replace(/^Explanation:\s*/i, '').trim();
      elements.push(
        <div key={`expl-${i}`} className="my-2 p-3 bg-[#F7F9F7] border-l-4 border-[#004D40] rounded-r-lg text-xs sm:text-sm text-[#102A2A] leading-relaxed">
          <strong className="text-[#004D40] font-bold">Explanation: </strong>
          <span>{renderInline(explText)}</span>
        </div>
      );
      return;
    }

    // Handle Horizontal Dividers
    if (trimmed === '---') {
      elements.push(<hr key={`hr-${i}`} className="my-5 border-[#DDE7E3]" />);
      return;
    }

    // Handle Callouts (> ...) with clean Light Green styling
    if (trimmed.startsWith('> ')) {
      const quote = trimmed.replace(/^>\s*/, '').trim();
      elements.push(
        <blockquote key={`quote-${i}`} className="my-3 p-3.5 rounded-xl border-l-4 border-[#004D40] bg-[#E8F5E9] text-xs sm:text-sm text-[#102A2A] leading-relaxed italic">
          {renderInline(quote)}
        </blockquote>
      );
      return;
    }

    // Handle Answer Lines / Reveal Solution toggles
    if (trimmed.startsWith('**Answer:') || trimmed.startsWith('**Solution:')) {
      const ansKey = `ans-${i}`;
      const isShowing = Boolean(revealedAnswers[ansKey]);

      elements.push(
        <div key={ansKey} className="my-2.5 p-3 rounded-xl border border-emerald-200 bg-emerald-50/70 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2">
          <div className="font-extrabold flex items-center space-x-2 text-emerald-950">
            <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center text-[11px] font-bold">
              ✓
            </span>
            <span>{renderInline(trimmed)}</span>
          </div>
          <button
            type="button"
            onClick={() => toggleAnswer(ansKey)}
            className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition cursor-pointer self-start sm:self-auto"
          >
            {isShowing ? 'Hide Working' : 'View Full Working'}
          </button>
        </div>
      );
      return;
    }

    // Step circular badges (e.g. "(1) Identify like terms" or "Step 1: ...")
    if (/^\(?\bstep\s*\d+\b\)?:?/i.test(trimmed) || /^\(\d+\)\s/.test(trimmed)) {
      const match = trimmed.match(/^\(?\b(?:step\s*)?(\d+)\b\)?:?\s*(.*)$/i);
      if (match) {
        const num = match[1];
        const content = match[2];
        elements.push(
          <div key={`step-${i}`} className="flex items-center space-x-2.5 my-2 text-sm sm:text-base leading-relaxed text-[#102A2A] pl-1">
            <span className="w-5 h-5 rounded-full bg-[#004D40] text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-xs">
              {num}
            </span>
            <span className="flex-1 font-medium">{renderInline(content)}</span>
          </div>
        );
        return;
      }
    }

    // Numbered list: e.g. "1. ..." or "2. ..." (Clean natural text)
    if (/^\d+\.\s/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s*(.*)$/);
      if (match) {
        const num = match[1];
        const itemContent = match[2];
        elements.push(
          <div key={`num-${i}`} className="flex items-start space-x-2.5 my-1.5 text-sm sm:text-base leading-relaxed text-[#102A2A] pl-1">
            <span className="font-bold text-[#607070] shrink-0 select-none min-w-[1.25rem]">{num}.</span>
            <span className="flex-1 font-normal">{renderInline(itemContent)}</span>
          </div>
        );
        return;
      }
    }

    // Bullet points
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
      const bulletContent = trimmed.replace(/^[-*•]\s*/, '');
      elements.push(
        <div key={`bullet-${i}`} className="flex items-start space-x-2.5 my-1.5 text-sm sm:text-base leading-relaxed text-[#102A2A] pl-2">
          <span className="text-[#004D40] font-black select-none shrink-0 mt-0.5">•</span>
          <span className="flex-1 font-normal">{renderInline(bulletContent)}</span>
        </div>
      );
      return;
    }

    // Regular line / Paragraph
    elements.push(
      <p key={`p-${i}`} className="my-2 text-sm sm:text-base leading-relaxed text-[#102A2A] select-text">
        {renderInline(trimmed)}
      </p>
    );
  });

  if (inTable) flushTable(lines.length);
  if (inCodeBlock) flushCodeBlock(lines.length);
  if (inSvgBlock) flushSvgBlock(lines.length);

  return <div className="space-y-1 select-text">{elements}</div>;
};
