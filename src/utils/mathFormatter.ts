import katex from 'katex';
import { sanitizeHtml } from './security';

/**
 * Format LaTeX math formulas, pseudo-HTML fractions (e.g. <sup>2</sup>/3),
 * superscripts, subscripts, and symbols into pristine KaTeX and HTML typography.
 */
export function formatMathAndHtml(input: string): string {
  if (!input) return '';
  let str = input.trim();

  // 1. Transform pseudo-fractions like <sup>1</sup>/27 or <sup>2</sup>/3 into KaTeX \frac{1}{27}
  str = str.replace(/<sup>(\d+)<\/sup>\s*\/\s*(\d+)/gi, (_, num, den) => {
    try {
      return katex.renderToString(`\\frac{${num}}{${den}}`, { displayMode: false, throwOnError: false });
    } catch {
      return `<sup>${num}</sup>/${den}`;
    }
  });

  // Also support <sup>a</sup>/b or <sup>n</sup>/m
  str = str.replace(/<sup>([a-zA-Z\d\+\-]+)<\/sup>\s*\/\s*([a-zA-Z\d\+\-]+)/gi, (_, num, den) => {
    try {
      return katex.renderToString(`\\frac{${num}}{${den}}`, { displayMode: false, throwOnError: false });
    } catch {
      return `<sup>${num}</sup>/${den}`;
    }
  });

  // 2. Render display math \[ ... \] or $$ ... $$
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

  // 3. Render inline math \( ... \)
  str = str.replace(/\\\(([\s\S]*?)\\\)/g, (_, expr) => {
    try {
      return katex.renderToString(expr.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return expr;
    }
  });

  // 4. Render inline math $ ... $ (excluding escaped \$)
  str = str.replace(/(?<!\\)\$([^\$\n]+?)(?<!\\)\$/g, (_, expr) => {
    try {
      return katex.renderToString(expr.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return expr;
    }
  });

  // 5. Detect raw LaTeX formulas that might not have \(...\) delimiters (e.g. \frac{1}{3}, \sqrt{x}, \times)
  // if text contains \frac{...}{...} outside katex spans
  if (!str.includes('class="katex"') && /\\(?:frac|sqrt|times|alpha|beta|theta|pi|int|sum|pm|approx|leq|geq|neq|partial)/.test(str)) {
    // Wrap isolated LaTeX patterns
    str = str.replace(/(\\(?:frac\{[^}]+\}\{[^}]+\}|sqrt\{[^}]+\}|[a-zA-Z0-9\+\-\=\s\(\)\*\/\\_]+))/g, (match) => {
      if (/\\(?:frac|sqrt|times)/.test(match)) {
        try {
          return katex.renderToString(match.trim(), { displayMode: false, throwOnError: false });
        } catch {
          return match;
        }
      }
      return match;
    });
  }

  // 6. Style raw <sup> and <sub> tags with clean typography if still present
  str = str.replace(/<sup>([\s\S]*?)<\/sup>/gi, '<sup class="text-[0.8em] font-bold text-[#F8C800] align-super leading-none px-0.5">$1</sup>');
  str = str.replace(/<sub>([\s\S]*?)<\/sub>/gi, '<sub class="text-[0.8em] font-bold text-emerald-300 align-sub leading-none px-0.5">$1</sub>');

  return sanitizeHtml(str);
}
