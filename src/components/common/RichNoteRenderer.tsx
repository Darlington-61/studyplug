import React, { useState } from 'react';

interface RichNoteRendererProps {
  content: string;
  chalkboard?: boolean;
}

export const RichNoteRenderer: React.FC<RichNoteRendererProps> = ({ content, chalkboard = true }) => {
  if (!content) return null;

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
  let codeLang = '';
  let inSvgBlock = false;
  let currentSvgLines: string[] = [];

  const flushTable = (idx: number) => {
    if (currentTableLines.length === 0) return;
    const headerLine = currentTableLines[0];
    const dataLines = currentTableLines.slice(2); // skip separator line

    const headers = headerLine.split('|').map(h => h.trim()).filter(Boolean);
    const rows = dataLines.map(row => row.split('|').map(c => c.trim()).filter(Boolean));

    elements.push(
      <div key={`table-${idx}`} className={`my-5 rounded-2xl border shadow-md overflow-hidden ${chalkboard ? 'border-white/20 bg-black/40' : 'border-slate-200 bg-white'}`}>
        <div className="sm:hidden text-[10px] text-[#FFCC00] bg-black/60 px-3 py-1.5 flex items-center justify-between border-b border-white/10 font-bold">
          <span>👉 Swipe table sideways to see all columns</span>
          <span className="text-white/60">⇄</span>
        </div>
        <div className="overflow-x-auto touch-pan-x">
          <table className="min-w-[540px] w-full text-left text-xs border-collapse">
            <thead>
              <tr className={chalkboard ? 'bg-[#061C14] text-[#FFCC00]' : 'bg-[#0E382B] text-white'}>
                {headers.map((h, hIdx) => (
                  <th key={hIdx} className="p-3 font-black border-b border-white/20 uppercase tracking-wider text-[11px] whitespace-nowrap">
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={chalkboard 
                    ? (rIdx % 2 === 0 ? 'bg-black/20 hover:bg-white/5' : 'bg-black/40 hover:bg-white/10')
                    : (rIdx % 2 === 0 ? 'bg-white hover:bg-slate-50' : 'bg-slate-50/70 hover:bg-slate-100/70')
                  }
                >
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className={`p-3 border-b font-medium leading-relaxed ${chalkboard ? 'border-white/10 text-white' : 'border-slate-100 text-slate-800'}`}>
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

    // If SVG, render as interactive diagram
    if (codeLang === 'svg' || codeText.includes('<svg')) {
      elements.push(
        <div key={`svg-${idx}`} className="my-6 p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
          <div className="text-[11px] font-black uppercase text-slate-500 mb-3 tracking-wider flex items-center gap-1.5">
            <span>📊</span>
            <span>Interactive Scientific Diagram / Apparatus</span>
          </div>
          <div
            className="w-full flex justify-center overflow-x-auto max-h-96"
            dangerouslySetInnerHTML={{ __html: codeText }}
          />
        </div>
      );
    } else {
      elements.push(
        <div key={`code-${idx}`} className="my-5 rounded-2xl p-1 bg-[#C4823F] shadow-lg">
          <div className="rounded-xl p-5 bg-[#0C2E20] text-[#FFCC00] font-mono text-xs leading-relaxed overflow-x-auto space-y-2">
            <div className="flex items-center space-x-2 border-b border-white/20 pb-2 mb-2 text-white">
              <span className="text-base">📐</span>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#FFCC00]">
                Classroom Formula Vault & Mathematical Proof
              </span>
            </div>
            <div className="space-y-1.5 font-mono font-bold text-xs sm:text-sm text-[#FFCC00]">
              {currentCodeLines.map((l, li) => (
                <div key={li} className="flex items-center flex-wrap gap-1">
                  {renderChalkMathContent(l, `code-l-${li}`)}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    currentCodeLines = [];
    inCodeBlock = false;
    codeLang = '';
  };

  const flushSvgBlock = (idx: number) => {
    if (currentSvgLines.length === 0) return;
    const svgCode = currentSvgLines.join('\n');
    elements.push(
      <div key={`svg-raw-${idx}`} className="my-6 p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col items-center justify-center">
        <div className="text-[11px] font-black uppercase text-slate-500 mb-3 tracking-wider flex items-center gap-1.5">
          <span>🔬</span>
          <span>Scientific Diagram & Visual Simulation</span>
        </div>
        <div
          className="w-full flex justify-center overflow-x-auto max-h-96"
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
      // Strip dollar signs inside parentheses: ($E$) -> (E), ($L$) -> (L), ($d_E$) -> (d_E)
      .replace(/\(\$([^$]+)\$\)/g, '($1)')
      // Strip standalone variable dollar signs: $E$ -> E, $L$ -> L, $MA$ -> MA, $VR$ -> VR
      .replace(/\$([a-zA-Z0-9_{}\s+\-*/=()\\%]+)\$/g, '$1')
      // Clean LaTeX text environments
      .replace(/\\(?:text|mathrm|mathbf|boldsymbol|textbf)\{([^}]*)\}/g, '$1')
      .replace(/\\text\b/g, '')
      // Spacing & backslash escape cleanup
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
      // Plain text fraction fallback: \frac{a}{b} -> (a / b)
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1 / $2)')
      // Superscripts
      .replace(/\^2\b/g, '²')
      .replace(/\^3\b/g, '³')
      .replace(/\^4\b/g, '⁴')
      .replace(/\^n\b/g, 'ⁿ')
      .replace(/\^0\b/g, '⁰')
      .replace(/\^1\b/g, '¹')
      .replace(/\^-1\b/g, '⁻¹')
      .replace(/\^-2\b/g, '⁻²')
      // Subscripts
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

  // Render mathematical expressions with stacked blackboard fractions
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
          className="inline-flex flex-col items-center justify-center align-middle mx-1 text-center font-bold font-mono"
          style={{ verticalAlign: '-0.45em', lineHeight: 1.1 }}
        >
          <span className="border-b-2 border-current pb-0.5 px-1.5 text-center text-xs sm:text-sm">
            {num}
          </span>
          <span className="pt-0.5 px-1.5 text-center text-xs sm:text-sm">
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
      if (token.startsWith('$$') && token.endsWith('$$') && token.length >= 4) {
        const inner = token.slice(2, -2);
        parts.push(
          <span
            key={match.index}
            className={chalkboard
              ? "font-mono font-bold text-[#FFCC00] bg-black/40 px-2 py-0.5 rounded-lg border border-[#FFCC00]/40 inline-flex items-center mx-1 my-0.5"
              : "font-mono font-bold text-[#0E382B] bg-emerald-100/90 px-1.5 py-0.5 rounded border border-emerald-300/80 inline-flex items-center mx-1 my-0.5"
            }
          >
            {renderChalkMathContent(inner, `disp-${match.index}`)}
          </span>
        );
      } else if ((token.startsWith('**') && token.endsWith('**')) || (token.startsWith('__') && token.endsWith('__'))) {
        parts.push(
          <strong
            key={match.index}
            className={chalkboard ? "font-extrabold text-[#FFEA79]" : "font-extrabold text-slate-950"}
            style={{ fontWeight: 800, color: chalkboard ? '#FFEA79' : '#090d16', display: 'inline' }}
          >
            {renderInline(token.slice(2, -2))}
          </strong>
        );
      } else if ((token.startsWith('*') && token.endsWith('*')) || (token.startsWith('_') && token.endsWith('_'))) {
        parts.push(
          <em
            key={match.index}
            className={chalkboard ? "italic text-emerald-200 font-serif font-medium" : "italic text-slate-900 font-serif font-medium"}
            style={{ fontStyle: 'italic', display: 'inline' }}
          >
            {renderInline(token.slice(1, -1))}
          </em>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code 
            key={match.index} 
            className={chalkboard 
              ? "px-1.5 py-0.5 rounded-md bg-black/40 font-mono text-[11px] text-[#A7F3D0] border border-white/20" 
              : "px-1.5 py-0.5 rounded-md bg-slate-100 font-mono text-[11px] text-emerald-800 border border-slate-200"
            }
          >
            {token.slice(1, -1)}
          </code>
        );
      } else if (token.startsWith('$') && token.endsWith('$')) {
        const inner = token.slice(1, -1);
        parts.push(
          <span 
            key={match.index} 
            className={chalkboard 
              ? "font-mono font-bold text-[#FFEA79] inline-flex items-center align-baseline" 
              : "font-mono font-bold text-[#0E382B] inline-flex items-center align-baseline"
            }
          >
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
    const trimmed = line.trim();

    // Check raw SVG tag
    if (trimmed.startsWith('<svg') || trimmed.includes('<svg xmlns=')) {
      if (inTable) flushTable(i);
      if (inCodeBlock) flushCodeBlock(i);
      inSvgBlock = true;
      currentSvgLines.push(line);
      if (trimmed.includes('</svg>')) {
        flushSvgBlock(i);
      }
      return;
    }

    if (inSvgBlock) {
      currentSvgLines.push(line);
      if (trimmed.includes('</svg>')) {
        flushSvgBlock(i);
      }
      return;
    }

    // Check code blocks
    if (trimmed.startsWith('```')) {
      if (inTable) flushTable(i);
      if (inCodeBlock) {
        flushCodeBlock(i);
      } else {
        inCodeBlock = true;
        codeLang = trimmed.replace(/^```/, '').trim();
      }
      return;
    }

    if (inCodeBlock) {
      currentCodeLines.push(line);
      return;
    }

    // Check markdown table lines
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      inTable = true;
      currentTableLines.push(line);
      return;
    } else if (inTable) {
      flushTable(i);
    }

    // Handle Display Math ($$ ... $$)
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length >= 4) {
      const mathContent = trimmed.slice(2, -2).trim();
      elements.push(
        <div
          key={`math-block-${i}`}
          className={chalkboard
            ? "my-4 py-3 px-5 rounded-2xl bg-black/40 border border-[#FFCC00]/50 shadow-inner overflow-x-auto text-center select-text"
            : "my-4 py-3 px-5 rounded-2xl bg-emerald-50/80 border border-emerald-300 shadow-xs overflow-x-auto text-center select-text"
          }
        >
          <div className={`font-mono font-bold text-sm sm:text-base tracking-wide inline-flex items-center justify-center flex-wrap gap-1 ${
            chalkboard ? 'text-[#FFCC00]' : 'text-[#0E382B]'
          }`}>
            {renderChalkMathContent(mathContent, `display-${i}`)}
          </div>
        </div>
      );
      return;
    }

    // Handle H1 Top Title (Clean presentation without duplicate banners)
    if (trimmed.startsWith('# ')) {
      const title = trimmed.replace(/^#\s*/, '').trim();
      elements.push(
        <div key={`h1-${i}`} className={`pb-3 mb-4 border-b ${chalkboard ? 'border-white/20' : 'border-slate-200'}`}>
          <h1 className={`text-xl sm:text-2xl font-black tracking-tight leading-tight ${chalkboard ? 'text-[#FFCC00]' : 'text-slate-900'}`}>
            {renderInline(title)}
          </h1>
        </div>
      );
      return;
    }

    // Handle H2 Section Headings (Clean chalk headings)
    if (trimmed.startsWith('## ')) {
      const heading = trimmed.replace(/^##\s*/, '').trim();
      elements.push(
        <div key={`h2-${i}`} className={`pt-4 pb-2 mb-3 border-b ${chalkboard ? 'border-white/20' : 'border-slate-200'}`}>
          <h2 className={`text-lg sm:text-xl font-black tracking-tight ${chalkboard ? 'text-[#FFCC00]' : 'text-[#0E382B]'}`}>
            {renderInline(heading)}
          </h2>
        </div>
      );
      return;
    }

    // Handle H3 Subheadings (Clear, crisp chalk pointers)
    if (trimmed.startsWith('### ')) {
      const heading = trimmed.replace(/^###\s*/, '').trim();
      elements.push(
        <h3 key={`h3-${i}`} className={`mt-4 mb-2 font-black text-sm sm:text-base flex items-center space-x-2 ${chalkboard ? 'text-[#FFEA79]' : 'text-slate-900'}`}>
          <span className={chalkboard ? 'text-[#FFCC00]' : 'text-[#0E382B]'}>▶</span>
          <span>{renderInline(heading)}</span>
        </h3>
      );
      return;
    }

    // Handle Horizontal Dividers
    if (trimmed === '---') {
      elements.push(<hr key={`hr-${i}`} className={`my-4 ${chalkboard ? 'border-white/15' : 'border-slate-200'}`} />);
      return;
    }

    // Handle Callouts (> ...) with specific visual categories
    if (trimmed.startsWith('> ')) {
      const quote = trimmed.replace(/^>\s*/, '').trim();

      // 1. Examiner Trap Alert
      if (quote.includes('⚠️') || quote.includes('🚨') || quote.toLowerCase().includes('examiner trap') || quote.toLowerCase().includes("don't fall for this")) {
        const cleanQuote = quote.replace(/^⚠️\s*/, '').replace(/^\*\*EXAMINER TRAP:\*\*\s*/i, '');
        elements.push(
          <div key={`quote-${i}`} className={`my-4 p-4 rounded-2xl border-2 shadow-sm text-xs sm:text-sm font-medium ${
            chalkboard 
              ? 'bg-rose-950/70 border-rose-400 text-rose-100' 
              : 'bg-rose-50/90 border-rose-300 text-rose-950'
          }`}>
            <div className={`flex items-center space-x-2 font-black uppercase tracking-wider text-xs mb-1 ${chalkboard ? 'text-rose-300' : 'text-rose-800'}`}>
              <span>⚠️</span>
              <span>WAEC & JAMB Chief Examiner Trap Alert</span>
            </div>
            <div className="leading-relaxed pl-4 border-l-2 border-rose-400">
              {renderInline(cleanQuote)}
            </div>
          </div>
        );
        return;
      }

      // 2. Mnemonic & Memory Hack
      if (quote.includes('💡') || quote.includes('🧠') || quote.toLowerCase().includes('mnemonic') || quote.toLowerCase().includes('memory trick')) {
        const cleanQuote = quote.replace(/^💡\s*/, '').replace(/^\*\*MNEMONIC:\*\*\s*/i, '');
        elements.push(
          <div key={`quote-${i}`} className={`my-4 p-4 rounded-2xl border-2 shadow-sm text-xs sm:text-sm font-medium ${
            chalkboard 
              ? 'bg-amber-950/70 border-amber-400 text-amber-100' 
              : 'bg-amber-50/90 border-amber-300 text-amber-950'
          }`}>
            <div className={`flex items-center space-x-2 font-black uppercase tracking-wider text-xs mb-1 ${chalkboard ? 'text-[#FFCC00]' : 'text-amber-800'}`}>
              <span>💡</span>
              <span>Memory Hack & Exam Mnemonic</span>
            </div>
            <div className="leading-relaxed pl-4 border-l-2 border-amber-400">
              {renderInline(cleanQuote)}
            </div>
          </div>
        );
        return;
      }

      // 3. Real-World Nigerian Analogy
      if (quote.includes('🇳🇬') || quote.includes('🌟') || quote.toLowerCase().includes('real-world analogy') || quote.toLowerCase().includes('everyday analogy')) {
        const cleanQuote = quote.replace(/^🇳🇬\s*/, '').replace(/^\*\*REAL-WORLD ANALOGY:\*\*\s*/i, '');
        elements.push(
          <div key={`quote-${i}`} className={`my-4 p-4 rounded-2xl border-2 shadow-sm text-xs sm:text-sm font-medium ${
            chalkboard 
              ? 'bg-emerald-950/70 border-emerald-400 text-emerald-100' 
              : 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
          }`}>
            <div className={`flex items-center space-x-2 font-black uppercase tracking-wider text-xs mb-1 ${chalkboard ? 'text-emerald-300' : 'text-emerald-800'}`}>
              <span>🇳🇬</span>
              <span>Real-World Everyday Analogy</span>
            </div>
            <div className="leading-relaxed pl-4 border-l-2 border-emerald-400">
              {renderInline(cleanQuote)}
            </div>
          </div>
        );
        return;
      }

      // 4. Official Syllabus Objectives
      if (quote.includes('🎯') || quote.includes('📋') || quote.toLowerCase().includes('syllabus objectives') || quote.toLowerCase().includes('what you must know')) {
        const cleanQuote = quote.replace(/^🎯\s*/, '');
        elements.push(
          <div key={`quote-${i}`} className={`my-4 p-4 rounded-2xl border-2 shadow-sm text-xs sm:text-sm font-medium ${
            chalkboard 
              ? 'bg-cyan-950/70 border-cyan-400 text-cyan-100' 
              : 'bg-indigo-50/90 border-indigo-300 text-indigo-950'
          }`}>
            <div className={`flex items-center space-x-2 font-black uppercase tracking-wider text-xs mb-1 ${chalkboard ? 'text-cyan-300' : 'text-indigo-800'}`}>
              <span>🎯</span>
              <span>Official Syllabus Objectives Checklist</span>
            </div>
            <div className={`leading-relaxed pl-4 border-l-2 ${chalkboard ? 'border-cyan-400' : 'border-indigo-400'}`}>
              {renderInline(cleanQuote)}
            </div>
          </div>
        );
        return;
      }

      // Standard Blockquote
      elements.push(
        <div key={`quote-${i}`} className={`my-3 p-3.5 rounded-2xl border-l-4 text-xs sm:text-sm font-medium italic ${
          chalkboard 
            ? 'bg-black/40 border-[#FFCC00] text-slate-100' 
            : 'bg-slate-100 border-[#0E382B] text-slate-700'
        }`}>
          {renderInline(quote)}
        </div>
      );
      return;
    }

    // Handle Practice Questions (e.g. **Question 1:** ...)
    if (trimmed.startsWith('**Question') || trimmed.startsWith('**JAMB Example') || trimmed.startsWith('**Past Question')) {
      const qKey = `q-${i}`;
      elements.push(
        <div key={qKey} className="pt-4 pb-1">
          <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-black mb-1 border shadow-xs ${
            chalkboard 
              ? 'bg-[#FFCC00]/20 text-[#FFCC00] border-[#FFCC00]/50' 
              : 'bg-emerald-100 text-emerald-950 border-emerald-200'
          }`}>
            <span>📝</span>
            <span>{renderInline(trimmed)}</span>
          </div>
        </div>
      );
      return;
    }

    // Handle Answer Lines / Reveal Solution toggles
    if (trimmed.startsWith('**Answer:') || trimmed.startsWith('**Solution:')) {
      const ansKey = `ans-${i}`;
      const isShowing = Boolean(revealedAnswers[ansKey]);

      elements.push(
        <div key={ansKey} className={`my-3 p-3.5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2 ${
          chalkboard 
            ? 'bg-emerald-950/60 border-emerald-400 text-emerald-100' 
            : 'bg-emerald-50 border-emerald-300 text-emerald-950'
        }`}>
          <div className="font-extrabold flex items-center space-x-2">
            <span className="w-5 h-5 rounded-full bg-[#FFCC00] text-[#0A241B] flex items-center justify-center text-[11px] font-bold">
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

    // Handle Numbered Rule Header
    const ruleMatch = trimmed.match(/^(\d+)[\.\s]+([A-Z][^:]*):?$/) || trimmed.match(/^Rule\s*(\d+)[:\s]+(.*)$/i);
    if (ruleMatch) {
      const num = ruleMatch[1];
      const title = ruleMatch[2].replace(/:$/, '').trim();
      elements.push(
        <div key={`rule-hdr-${i}`} className={`mt-6 mb-3 p-3.5 rounded-2xl border flex items-center space-x-3 shadow-md ${
          chalkboard 
            ? 'bg-black/40 border-[#FFCC00]/40' 
            : 'bg-[#0E382B]/5 border-[#0E382B]/20'
        }`}>
          <span className="w-8 h-8 rounded-xl bg-[#FFCC00] text-[#0A241B] font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
            {num}
          </span>
          <h4 className={`text-sm sm:text-base font-black tracking-tight ${chalkboard ? 'text-[#FFCC00]' : 'text-[#0E382B]'}`}>
            {renderInline(title)}
          </h4>
        </div>
      );
      return;
    }

    // Handle Exception / Note / Trap Callouts
    if (/^(?:•|\*|-)?\s*(?:Exception|Caution|Watch Out|Exam Trap)\b/i.test(trimmed)) {
      const cleanLine = trimmed.replace(/^(?:•|\*|-)\s*/, '');
      elements.push(
        <div key={`exc-${i}`} className={`my-3 p-4 rounded-2xl border-2 shadow-md space-y-1 ${
          chalkboard 
            ? 'bg-amber-950/70 border-amber-400 text-amber-100' 
            : 'bg-amber-50/90 border-amber-300 text-slate-800'
        }`}>
          <div className={`flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider ${chalkboard ? 'text-[#FFCC00]' : 'text-amber-800'}`}>
            <span>⚠️</span>
            <span>Important Exception & Examiner Trap</span>
          </div>
          <div className="text-xs sm:text-sm leading-relaxed font-medium">
            {renderInline(cleanLine)}
          </div>
        </div>
      );
      return;
    }

    // Handle Standalone Example Sentences
    if (trimmed.startsWith('*') && trimmed.includes('*') && !trimmed.startsWith('**') && !trimmed.startsWith('* ')) {
      elements.push(
        <div key={`ex-${i}`} className={`my-2 p-3 rounded-xl border-l-4 font-serif text-xs sm:text-sm shadow-2xs flex items-start space-x-2 ${
          chalkboard 
            ? 'bg-black/40 border-[#FFCC00] text-white' 
            : 'bg-slate-50 border-emerald-500 text-slate-900'
        }`}>
          <span className="text-yellow-400 font-bold text-xs shrink-0 mt-0.5">🔹</span>
          <div className="flex-1 leading-relaxed">
            {renderInline(trimmed)}
          </div>
        </div>
      );
      return;
    }

    // Bullet points
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
      const bulletContent = trimmed.replace(/^[-*•]\s*/, '');
      elements.push(
        <div key={`bullet-${i}`} className={`flex items-start space-x-2.5 my-1.5 text-sm sm:text-base leading-relaxed font-sans pl-2 ${chalkboard ? 'text-white' : 'text-slate-800'}`}>
          <span className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${chalkboard ? 'bg-[#FFCC00] shadow-xs' : 'bg-[#0E382B]'}`} />
          <span className="flex-1">{renderInline(bulletContent)}</span>
        </div>
      );
      return;
    }

    // Numbered list
    if (/^\d+\.\s/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s*(.*)$/);
      if (match) {
        const num = match[1];
        const itemContent = match[2];
        elements.push(
          <div key={`num-${i}`} className={`flex items-start space-x-2.5 my-2 text-sm sm:text-base leading-relaxed font-sans pl-2 ${chalkboard ? 'text-white' : 'text-slate-800'}`}>
            <span className={`w-5 h-5 rounded-full font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5 ${
              chalkboard ? 'bg-[#FFCC00] text-[#0A241B]' : 'bg-[#0E382B]/10 text-[#0E382B]'
            }`}>
              {num}
            </span>
            <span className="flex-1 font-medium">{renderInline(itemContent)}</span>
          </div>
        );
        return;
      }
    }

    // Regular line / Paragraph
    if (trimmed.length > 0) {
      elements.push(
        <p key={`p-${i}`} className={`my-2 text-sm sm:text-base leading-relaxed font-sans select-text ${chalkboard ? 'text-white' : 'text-slate-800'}`}>
          {renderInline(line)}
        </p>
      );
    }
  });

  if (inTable) flushTable(lines.length);
  if (inCodeBlock) flushCodeBlock(lines.length);
  if (inSvgBlock) flushSvgBlock(lines.length);

  return <div className="space-y-4 select-text">{elements}</div>;
};
