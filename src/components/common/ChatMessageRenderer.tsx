import React from 'react';

interface ChatMessageRendererProps {
  text: string;
}

// Helper to format inline markdown like **bold**, *italic*, and `code`
const formatInlineText = (str: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  // Regex to match **bold**, *italic*, and `code`
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\$[^\$]+\$)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(str)) !== null) {
    if (match.index > lastIndex) {
      parts.push(str.substring(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(
        <strong key={match.index} className="font-extrabold text-slate-900">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(
        <em key={match.index} className="italic text-slate-700">
          {token.slice(1, -1)}
        </em>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(
        <code key={match.index} className="px-1.5 py-0.5 rounded bg-slate-100 text-emerald-800 font-mono text-[11px] font-bold border border-slate-200">
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('$') && token.endsWith('$')) {
      parts.push(
        <span key={match.index} className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 font-mono text-[11.5px] font-bold border border-amber-200 inline-block my-0.5">
          {token.slice(1, -1)}
        </span>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < str.length) {
    parts.push(str.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [str];
};

export const ChatMessageRenderer: React.FC<ChatMessageRendererProps> = ({ text }) => {
  if (!text) return null;

  // Split into lines
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];

  let inList = false;
  let listItems: string[] = [];

  const flushList = (keyIndex: number) => {
    if (listItems.length === 0) return;
    elements.push(
      <ul key={`list-${keyIndex}`} className="space-y-1.5 my-2 pl-1">
        {listItems.map((item, idx) => (
          <li key={idx} className="flex items-start space-x-2 text-xs text-slate-800 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E382B] mt-1.5 shrink-0" />
            <span className="flex-1">{formatInlineText(item)}</span>
          </li>
        ))}
      </ul>
    );
    listItems = [];
    inList = false;
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    // Check list item
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ')) {
      inList = true;
      listItems.push(trimmed.replace(/^[-•*]\s*/, ''));
      return;
    } else if (inList) {
      flushList(i);
    }

    // Horizontal Rule
    if (trimmed === '---' || trimmed === '----') {
      elements.push(<hr key={`hr-${i}`} className="my-2.5 border-slate-200" />);
      return;
    }

    // H3 Header (e.g. ### 🤖 PlugAI Detailed Solution...)
    if (trimmed.startsWith('### ')) {
      const heading = trimmed.replace(/^###\s*/, '').trim();
      elements.push(
        <div key={`h3-${i}`} className="my-2 p-2.5 rounded-xl bg-gradient-to-r from-[#0E382B] to-[#165844] text-white shadow-sm flex items-center justify-between">
          <h3 className="font-extrabold text-xs sm:text-[13px] tracking-tight flex items-center space-x-1.5">
            <span>{heading}</span>
          </h3>
          <span className="text-[10px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-md">
            Exam Solution
          </span>
        </div>
      );
      return;
    }

    // H4 Header (e.g. #### Question:, #### ✅ Correct Option:, #### 📖 Step-by-Step Explanation:)
    if (trimmed.startsWith('#### ')) {
      const heading = trimmed.replace(/^####\s*/, '').trim();

      // Check if it's the Correct Option badge
      if (heading.includes('Correct Option') || heading.includes('✅')) {
        elements.push(
          <div key={`opt-badge-${i}`} className="my-2 p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center space-x-2 text-xs">
            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
              ✓
            </span>
            <div className="font-black text-emerald-950">
              {formatInlineText(heading)}
            </div>
          </div>
        );
        return;
      }

      // Check if it's Step-by-Step Explanation
      if (heading.includes('Explanation') || heading.includes('📖') || heading.includes('Formula') || heading.includes('📐')) {
        elements.push(
          <div key={`h4-exp-${i}`} className="pt-2 pb-1 font-extrabold text-xs text-[#0E382B] flex items-center space-x-1.5 border-b border-slate-100">
            <span>{heading}</span>
          </div>
        );
        return;
      }

      // General H4
      elements.push(
        <div key={`h4-${i}`} className="pt-2 pb-1 font-bold text-xs text-slate-900">
          {formatInlineText(heading)}
        </div>
      );
      return;
    }

    // Blockquote (e.g. > The question text...)
    if (trimmed.startsWith('> ')) {
      const quote = trimmed.replace(/^>\s*/, '').trim();
      elements.push(
        <div key={`quote-${i}`} className="my-2 p-3 rounded-xl bg-slate-50 border-l-4 border-[#0E382B] text-xs text-slate-800 font-medium italic shadow-xs">
          <div className="text-[10px] uppercase font-bold text-slate-400 not-italic mb-1 tracking-wider">
            Original Examination Question:
          </div>
          <div className="leading-relaxed">
            {formatInlineText(quote)}
          </div>
        </div>
      );
      return;
    }

    // Footnote (e.g. *⚡ 100% Free Offline...)
    if (trimmed.startsWith('*⚡') || trimmed.includes('PlugAI Knowledge Base*')) {
      elements.push(
        <div key={`footer-${i}`} className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-medium">
          <span className="flex items-center gap-1 text-emerald-700 font-bold">
            <span>⚡</span>
            <span>100% Free Offline AI Response</span>
          </span>
          <span>Zero Data • Local Device</span>
        </div>
      );
      return;
    }

    // Regular line / paragraph
    if (trimmed.length > 0) {
      elements.push(
        <p key={`p-${i}`} className="text-xs text-slate-800 leading-relaxed font-sans my-1">
          {formatInlineText(line)}
        </p>
      );
    }
  });

  if (inList) flushList(lines.length);

  return <div className="space-y-1.5">{elements}</div>;
};
