import React, { useState } from 'react';
import katex from 'katex';
import { sanitizeHtml } from '../../utils/security';


export interface RichNoteRendererProps {
  content: string;
  chalkboard?: boolean;
  topicTitle?: string;
  subject?: string;
}

export function renderLatexToHtml(latex: string, isDisplay = false): string {
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

  // 7. Convert markdown images ![alt](url) to HTML <img> with clean container
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, src) => {
    const trimmedAlt = (alt || '').trim();
    return `<figure class="my-5 flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-lg mx-auto">
      <img src="${src.trim()}" alt="${trimmedAlt}" class="max-h-80 w-auto max-w-full object-contain rounded-xl" loading="lazy" />
      ${trimmedAlt ? `<figcaption class="mt-2 text-xs font-semibold text-slate-500 text-center">${trimmedAlt}</figcaption>` : ''}
    </figure>`;
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
        className="classroom-html-content select-text leading-relaxed text-slate-900 text-sm sm:text-base space-y-4 [&_img]:max-w-full [&_img]:h-auto [&_img]:mx-auto [&_img]:block [&_img]:rounded-xl [&_img]:shadow-xs"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(formattedHtml) }}
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
        className="my-5 rounded-xl border border-[#E8E8E8] bg-white shadow-xs overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-[#001028] border-b border-[#001830] text-white">
                {headers.map((h, hIdx) => (
                  <th
                    key={hIdx}
                    className="px-4 py-2.5 font-extrabold text-xs uppercase tracking-wider whitespace-nowrap text-[#F8C800]"
                  >
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8E8E8]">
              {rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F8]'}
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-4 py-2.5 leading-relaxed text-sm ${
                        cIdx === 0
                          ? 'font-bold text-[#001028]'
                          : 'font-normal text-[#1F2937]'
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

  // Plain text symbol cleaner (only applied to non-LaTeX text chunks)
  const cleanPlainTextSymbols = (str: string): string => {
    if (!str) return '';
    return str
      .replace(/###\s*/g, '')
      .replace(/\\times\b/g, '×')
      .replace(/\\cdot\b/g, '·')
      .replace(/\\div\b/g, '÷')
      .replace(/\\pm\b/g, '±')
      .replace(/\\approx\b/g, '≈')
      .replace(/\\neq\b/g, '≠')
      .replace(/\\leq\b/g, '≤')
      .replace(/\\geq\b/g, '≥')
      .replace(/\\infty\b/g, '∞')
      .replace(/\\rightarrow\b|\\to\b/g, '→')
      .replace(/\\degree\b/g, '°');
  };

  const renderInlineTextOnly = (rawText: string): React.ReactNode => {
    if (!rawText) return rawText;
    const parts: React.ReactNode[] = [];
    // Token regex matches display math ($$...$$ or \[...\]), inline math ($...$ or \(...\)), bold (**...** or __...__), italic (*...* or _..._), code (`...`)
    const regex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|\$[^\$\n]+?\$|\\\([\s\S]*?\\\)|\*\*[^*\n]+?\*\*|__[^_\n]+?__|(?<!\*)\*[^*\n]+?\*(?!\*)|(?<!_)_[^_\n]+?_(?!_)|`[^`\n]+?`)/g;
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(rawText)) !== null) {
      if (match.index > lastIdx) {
        const plain = cleanPlainTextSymbols(rawText.slice(lastIdx, match.index));
        if (plain) parts.push(plain);
      }
      const token = match[0];
      if (token.startsWith('$$') && token.endsWith('$$')) {
        const inner = token.slice(2, -2).trim();
        parts.push(
          <span
            key={`math-disp-${match.index}`}
            className="inline-block my-1 align-middle text-[#001028] overflow-x-auto select-text"
            dangerouslySetInnerHTML={{ __html: renderLatexToHtml(inner, true) }}
          />
        );
      } else if (token.startsWith('\\[') && token.endsWith('\\]')) {
        const inner = token.slice(2, -2).trim();
        parts.push(
          <span
            key={`math-disp-${match.index}`}
            className="inline-block my-1 align-middle text-[#001028] overflow-x-auto select-text"
            dangerouslySetInnerHTML={{ __html: renderLatexToHtml(inner, true) }}
          />
        );
      } else if (token.startsWith('$') && token.endsWith('$')) {
        const inner = token.slice(1, -1).trim();
        parts.push(
          <span
            key={`math-inl-${match.index}`}
            className="katex-inline px-0.5 text-[#001028] align-baseline select-text font-medium"
            dangerouslySetInnerHTML={{ __html: renderLatexToHtml(inner, false) }}
          />
        );
      } else if (token.startsWith('\\(') && token.endsWith('\\)')) {
        const inner = token.slice(2, -2).trim();
        parts.push(
          <span
            key={`math-inl-${match.index}`}
            className="katex-inline px-0.5 text-[#001028] align-baseline select-text font-medium"
            dangerouslySetInnerHTML={{ __html: renderLatexToHtml(inner, false) }}
          />
        );
      } else if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="font-extrabold text-[#001028]">
            {renderInlineTextOnly(token.slice(2, -2))}
          </strong>
        );
      } else if (token.startsWith('__') && token.endsWith('__')) {
        parts.push(
          <strong key={match.index} className="font-extrabold text-[#001028]">
            {renderInlineTextOnly(token.slice(2, -2))}
          </strong>
        );
      } else if ((token.startsWith('*') && token.endsWith('*')) || (token.startsWith('_') && token.endsWith('_'))) {
        parts.push(
          <em key={match.index} className="italic text-[#1F2937]">
            {renderInlineTextOnly(token.slice(1, -1))}
          </em>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code key={match.index} className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-xs text-[#001028] font-bold">
            {token.slice(1, -1)}
          </code>
        );
      }
      lastIdx = match.index + token.length;
    }
    if (lastIdx < rawText.length) {
      const remaining = cleanPlainTextSymbols(rawText.slice(lastIdx));
      if (remaining) parts.push(remaining);
    }
    return parts.length > 0 ? parts : rawText;
  };

  const renderInline = (rawText: string): React.ReactNode => {
    if (!rawText) return rawText;

    // Check if rawText contains markdown images or HTML images
    const imgRegex = /(!\[([^\]]*)\]\(([^)]+)\)|<img\b[^>]*\/?>)/g;
    if (imgRegex.test(rawText)) {
      imgRegex.lastIndex = 0;
      const parts: React.ReactNode[] = [];
      let lastIdx = 0;
      let match: RegExpExecArray | null;
      let counter = 0;

      while ((match = imgRegex.exec(rawText)) !== null) {
        if (match.index > lastIdx) {
          parts.push(renderInlineTextOnly(rawText.slice(lastIdx, match.index)));
        }
        const token = match[0];
        if (token.startsWith('![')) {
          const alt = match[2] || '';
          const src = match[3] || '';
          parts.push(
            <figure
              key={`inline-img-${counter++}`}
              className="my-3 flex flex-col items-center justify-center p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs max-w-md mx-auto"
            >
              <img
                src={src.trim()}
                alt={alt}
                className="max-h-72 max-w-full object-contain rounded-lg"
                loading="lazy"
              />
              {alt && (
                <figcaption className="mt-1 text-xs text-slate-500 font-medium text-center">
                  {alt}
                </figcaption>
              )}
            </figure>
          );
        } else {
          // HTML img
          parts.push(
            <span
              key={`inline-html-img-${counter++}`}
              className="inline-block my-2 max-w-full overflow-hidden [&_img]:max-h-72 [&_img]:max-w-full [&_img]:object-contain [&_img]:rounded-lg"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(token) }}
            />
          );
        }
        lastIdx = match.index + token.length;
      }
      if (lastIdx < rawText.length) {
        parts.push(renderInlineTextOnly(rawText.slice(lastIdx)));
      }
      return parts;
    }

    return renderInlineTextOnly(rawText);
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

    // Handle Standalone Markdown Image (![alt](url))
    const mdImgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (mdImgMatch) {
      const altText = mdImgMatch[1].trim();
      const srcUrl = mdImgMatch[2].trim();
      elements.push(
        <figure
          key={`diagram-fig-${i}`}
          className="my-5 flex flex-col items-center justify-center p-3.5 bg-white rounded-2xl border border-[#E8E8E8] shadow-xs max-w-lg mx-auto overflow-hidden"
        >
          <img
            src={srcUrl}
            alt={altText || 'Study Diagram'}
            className="max-h-80 w-auto max-w-full object-contain rounded-xl"
            loading="lazy"
          />
          {altText && (
            <figcaption className="mt-2 text-xs font-semibold text-slate-500 text-center">
              {altText}
            </figcaption>
          )}
        </figure>
      );
      return;
    }

    // Handle Standalone HTML Image (<img ...>)
    if (/^<img\b[^>]*\/?>$/i.test(trimmed) || (trimmed.startsWith('<img') && trimmed.endsWith('>'))) {
      elements.push(
        <div
          key={`diagram-html-img-${i}`}
          className="my-5 flex justify-center p-3 bg-white rounded-2xl border border-[#E8E8E8] shadow-xs max-w-lg mx-auto overflow-hidden [&_img]:max-h-80 [&_img]:w-auto [&_img]:max-w-full [&_img]:object-contain [&_img]:rounded-xl"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(trimmed) }}
        />
      );
      return;
    }

    // Handle Display Math ($$ ... $$)
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length >= 4) {
      const mathContent = trimmed.slice(2, -2).trim();
      elements.push(
        <div
          key={`math-block-${i}`}
          className="my-3.5 py-3 px-4 rounded-2xl bg-[#F8F9FA] border border-[#E8E8E8] overflow-x-auto text-center select-text shadow-xs"
        >
          <div
            className="text-sm sm:text-base tracking-wide text-[#001028] overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: renderLatexToHtml(mathContent, true) }}
          />
        </div>
      );
      return;
    }

    // Handle Display Math (\[ ... \])
    if (trimmed.startsWith('\\[') && trimmed.endsWith('\\]') && trimmed.length >= 4) {
      const mathContent = trimmed.slice(2, -2).trim();
      elements.push(
        <div
          key={`math-block-bracket-${i}`}
          className="my-3.5 py-3 px-4 rounded-2xl bg-[#F8F9FA] border border-[#E8E8E8] overflow-x-auto text-center select-text shadow-xs"
        >
          <div
            className="text-sm sm:text-base tracking-wide text-[#001028] overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: renderLatexToHtml(mathContent, true) }}
          />
        </div>
      );
      return;
    }

    // Handle numbered section headings (e.g. "1.1 Definition", "1.2 Types...", "3. Simplifying...", "4. Practice Questions")
    if (/^(\d+\.\d+|\d+\.)\s+[A-Z]/.test(trimmed) && trimmed.length < 80) {
      elements.push(
        <div key={`sec-badge-${i}`} className="my-4">
          <span className="inline-block px-3 py-1 bg-[#F8C800] text-[#001028] font-black text-sm sm:text-base rounded-md sm:rounded-lg shadow-xs">
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
        <h1 key={`h1-${i}`} className="text-xl sm:text-2xl font-black text-[#001028] mt-6 mb-3 pb-2 border-b border-[#E8E8E8] leading-snug">
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
        <div key={`tip-box-${i}`} className="my-3.5 p-3.5 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] border-l-4 border-l-[#F8C800] text-[#001028] text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 shadow-xs">
          <span className="text-base select-none shrink-0">💡</span>
          <div>
            <div className="font-extrabold text-[#001028] mb-0.5">{label}:</div>
            <div className="text-[#374151] font-medium">{renderInline(body)}</div>
          </div>
        </div>
      );
      return;
    }

    // Handle Question labels: e.g. "Question 1 (JAMB 1978)" or "QUESTION 1:"
    if (/^QUESTION\s+\d+[:\s]/i.test(trimmed) || /^\*\*Question\s+\d+/i.test(trimmed)) {
      elements.push(
        <div key={`q-hdr-${i}`} className="mt-5 mb-1 text-sm sm:text-base font-extrabold text-[#001028]">
          {renderInline(trimmed)}
        </div>
      );
      return;
    }

    // Handle "Correct Answer: " lines
    if (/^Correct Answer:\s*/i.test(trimmed)) {
      elements.push(
        <div key={`correct-ans-${i}`} className="my-1.5 text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 bg-[#001028] px-3.5 py-2 rounded-xl border border-[#001830] shadow-xs">
          <span className="text-[#F8C800] font-black">✓</span>
          <span>{renderInline(trimmed)}</span>
        </div>
      );
      return;
    }

    // Handle "Explanation: " lines
    if (/^Explanation:\s*/i.test(trimmed)) {
      const explText = trimmed.replace(/^Explanation:\s*/i, '').trim();
      elements.push(
        <div key={`expl-${i}`} className="my-2.5 p-3.5 bg-[#F8F8F8] border border-[#E8E8E8] border-l-4 border-l-[#001028] rounded-r-xl text-xs sm:text-sm text-[#001028] leading-relaxed shadow-xs">
          <strong className="text-[#001028] font-black">Explanation: </strong>
          <span className="text-[#374151]">{renderInline(explText)}</span>
        </div>
      );
      return;
    }

    // Handle Horizontal Dividers
    if (trimmed === '---') {
      elements.push(<hr key={`hr-${i}`} className="my-5 border-[#E8E8E8]" />);
      return;
    }

    // Handle Callouts (> ...) with clean StudyPlug Gold & Light Grey styling
    if (trimmed.startsWith('> ')) {
      const quote = trimmed.replace(/^>\s*/, '').trim();
      elements.push(
        <blockquote key={`quote-${i}`} className="my-3 p-3.5 rounded-xl border border-[#E8E8E8] border-l-4 border-l-[#F8C800] bg-[#F8F8F8] text-xs sm:text-sm text-[#001028] leading-relaxed italic shadow-xs">
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
        <div key={ansKey} className="my-2.5 p-3 rounded-xl border border-[#E8E8E8] bg-[#F8F8F8] flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 shadow-xs">
          <div className="font-extrabold flex items-center space-x-2 text-[#001028]">
            <span className="w-5 h-5 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center text-[11px] font-black">
              ✓
            </span>
            <span>{renderInline(trimmed)}</span>
          </div>
          <button
            type="button"
            onClick={() => toggleAnswer(ansKey)}
            className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-[#001028] text-[#F8C800] hover:bg-[#001830] transition cursor-pointer self-start sm:self-auto shadow-xs"
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
          <div key={`step-${i}`} className="flex items-center space-x-2.5 my-2.5 text-sm sm:text-base leading-relaxed text-[#1F2937] pl-1">
            <span className="w-5 h-5 rounded-full bg-[#001028] text-white text-[11px] font-bold flex items-center justify-center shrink-0 shadow-xs">
              {num}
            </span>
            <div className="flex-1 font-medium overflow-x-auto">{renderInline(content)}</div>
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
          <div key={`num-${i}`} className="flex items-start space-x-2.5 my-2 text-sm sm:text-base leading-relaxed text-[#1F2937] pl-1">
            <span className="font-extrabold text-[#001028] shrink-0 select-none min-w-[1.25rem] mt-0.5">{num}.</span>
            <div className="flex-1 font-normal overflow-x-auto">{renderInline(itemContent)}</div>
          </div>
        );
        return;
      }
    }

    // Bullet points
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
      const bulletContent = trimmed.replace(/^[-*•]\s*/, '');
      elements.push(
        <div key={`bullet-${i}`} className="flex items-start space-x-2.5 my-2 text-sm sm:text-base leading-relaxed text-[#1F2937] pl-2">
          <span className="text-[#F8C800] font-black select-none shrink-0 mt-1">•</span>
          <div className="flex-1 font-normal overflow-x-auto">{renderInline(bulletContent)}</div>
        </div>
      );
      return;
    }

    // Regular line / Paragraph
    elements.push(
      <p key={`p-${i}`} className="my-2.5 text-sm sm:text-base leading-relaxed text-[#1F2937] select-text">
        {renderInline(trimmed)}
      </p>
    );
  });

  if (inTable) flushTable(lines.length);
  if (inCodeBlock) flushCodeBlock(lines.length);
  if (inSvgBlock) flushSvgBlock(lines.length);

  return <div className="space-y-1 select-text">{elements}</div>;
};
