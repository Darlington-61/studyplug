import React, { useState } from 'react';

interface ShortClip {
  title: string;
  duration: string;
  format: '9:16 Vertical Reel' | 'YouTube Shorts';
  hook: string;
  captionExcerpt: string;
  category: 'Quick Tip' | 'Exam Trap' | 'Challenge' | 'Formula Hack';
}

interface ShortFormClipperModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
  subject: string;
  exam: string;
}

export const ShortFormClipperModal: React.FC<ShortFormClipperModalProps> = ({
  isOpen,
  onClose,
  topicTitle,
  subject,
  exam
}) => {
  if (!isOpen) return null;

  const clips: ShortClip[] = [
    {
      title: `30-Second Exam Trick: ${topicTitle}`,
      duration: '30s',
      format: '9:16 Vertical Reel',
      category: 'Exam Trap',
      hook: `Stop making this deadly mistake in ${exam} ${subject}!`,
      captionExcerpt: `Most students lose 5 marks here. When you see ${topicTitle}, don't just calculate blindly. Look at the units first!`
    },
    {
      title: `45-Second Concept Breakdown`,
      duration: '45s',
      format: 'YouTube Shorts',
      category: 'Formula Hack',
      hook: `How to remember this formula without cramming!`,
      captionExcerpt: `Here is the Nigerian student mnemonic for ${topicTitle}. You will never forget this formula in your life.`
    },
    {
      title: `Can You Solve This in 60s? (${exam} Challenge)`,
      duration: '60s',
      format: '9:16 Vertical Reel',
      category: 'Challenge',
      hook: `Pause this video right now! Can you solve this in 30 seconds?`,
      captionExcerpt: `Real ${exam} question tested 4 times. Drop your answer (A, B, C, or D) in the comments before checking the solution!`
    }
  ];

  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyScript = (index: number, text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 select-none">
      <div className="w-full max-w-lg bg-[#001028] border border-[#F8C800]/40 rounded-3xl p-5 text-white space-y-4 shadow-2xl text-left">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-8 h-8 rounded-xl bg-[#F8C800] text-[#001028] flex items-center justify-center font-black text-sm">
              ⚡
            </span>
            <div>
              <h3 className="font-black text-sm text-white">Short-Form Repurposing Engine</h3>
              <p className="text-[11px] text-slate-400">Export 9:16 Shorts, Reels &amp; TikTok clips</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center text-sm font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Clip Selectors */}
        <div className="grid grid-cols-3 gap-2">
          {clips.map((c, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveClipIndex(i)}
              className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                activeClipIndex === i
                  ? 'bg-[#F8C800] text-[#001028] border-[#F8C800] font-black'
                  : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
              }`}
            >
              <div className="text-[10px] font-bold uppercase">{c.category}</div>
              <div className="text-xs font-mono font-black mt-0.5">{c.duration}</div>
            </button>
          ))}
        </div>

        {/* Active Clip Card Preview */}
        <div className="bg-[#04162e] rounded-2xl border border-white/10 p-4 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#F8C800] font-black font-mono">
              {clips[activeClipIndex].format} • {clips[activeClipIndex].duration}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-black">
              1080 × 1920 HD
            </span>
          </div>

          <div>
            <h4 className="text-sm font-black text-white">{clips[activeClipIndex].title}</h4>
            <div className="mt-1.5 p-2 rounded-lg bg-black/40 border border-white/5 text-xs text-amber-300 italic">
              Hook: "{clips[activeClipIndex].hook}"
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Narrator Script Excerpt:</span>
            <p className="text-xs text-slate-200 leading-relaxed bg-black/30 p-2.5 rounded-xl border border-white/5 font-mono">
              {clips[activeClipIndex].captionExcerpt}
            </p>
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={() =>
                handleCopyScript(
                  activeClipIndex,
                  `${clips[activeClipIndex].hook}\n\n${clips[activeClipIndex].captionExcerpt}\n\nPractice more on StudyPlug: https://studyplug.com.ng`
                )
              }
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition cursor-pointer flex items-center space-x-1"
            >
              <span>{copiedIndex === activeClipIndex ? '✓ Copied!' : '📋 Copy Script'}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                alert(`Exporting ${clips[activeClipIndex].duration} 9:16 Vertical Video with burnt-in animated captions...`);
              }}
              className="px-4 py-1.5 rounded-lg bg-[#F8C800] text-[#001028] text-xs font-black hover:bg-yellow-300 transition cursor-pointer flex items-center space-x-1"
            >
              <span>⬇ Export 9:16 MP4</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-[10px] text-slate-400">
          StudyPlug AI Animated Educational Multi-Platform Rendering Pipeline
        </div>
      </div>
    </div>
  );
};

export default ShortFormClipperModal;
