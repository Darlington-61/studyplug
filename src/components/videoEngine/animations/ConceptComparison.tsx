import React from 'react';

interface ConceptSide {
  title: string;
  badge: string;
  definition: string;
  keyPoints: string[];
  formula: string;
  example: string;
  colorScheme: 'cyan' | 'amber' | 'emerald' | 'rose';
}

interface ConceptComparisonProps {
  left: ConceptSide;
  right: ConceptSide;
}

export const ConceptComparison: React.FC<ConceptComparisonProps> = ({ left, right }) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#07162e] to-[#010915]">
      {/* Header */}
      <div className="flex items-center justify-between text-xs z-10 border-b border-white/10 pb-1.5">
        <span className="px-2 py-0.5 rounded-full bg-[#F8C800]/20 text-[#F8C800] font-bold border border-[#F8C800]/40 text-[10px] uppercase">
          ⚖️ Critical Concept Comparison
        </span>
        <span className="text-slate-400 text-[10px]">Nigerian Examination High-Yield Distinctions</span>
      </div>

      {/* Two Column Grid */}
      <div className="flex-1 my-2 grid grid-cols-2 gap-3 text-left">
        {/* Left Concept */}
        <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="text-sm font-black text-cyan-300">{left.title}</h4>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 text-[9px] font-black uppercase">
                {left.badge}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">{left.definition}</p>
            <ul className="space-y-1 text-[10px] text-slate-400">
              {left.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-start space-x-1">
                  <span className="text-cyan-400">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 pt-2 border-t border-cyan-500/20 flex items-center justify-between">
            <span className="text-[9px] text-slate-400 uppercase font-mono">Formula:</span>
            <span className="text-xs font-mono font-bold text-cyan-300 bg-black/40 px-2 py-0.5 rounded">
              {left.formula}
            </span>
          </div>
        </div>

        {/* Right Concept */}
        <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <h4 className="text-sm font-black text-amber-300">{right.title}</h4>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-[#F8C800] text-[9px] font-black uppercase">
                {right.badge}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">{right.definition}</p>
            <ul className="space-y-1 text-[10px] text-slate-400">
              {right.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-start space-x-1">
                  <span className="text-[#F8C800]">•</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2 pt-2 border-t border-amber-500/20 flex items-center justify-between">
            <span className="text-[9px] text-slate-400 uppercase font-mono">Formula:</span>
            <span className="text-xs font-mono font-bold text-[#F8C800] bg-black/40 px-2 py-0.5 rounded">
              {right.formula}
            </span>
          </div>
        </div>
      </div>

      {/* Trap Note */}
      <div className="z-10 bg-black/70 backdrop-blur-md rounded-xl p-2 border border-white/10 text-center text-[10px] text-slate-300">
        <strong className="text-red-400 uppercase">Examiner Trap: </strong>
        JAMB often gives distance and speed in circular tracks where displacement is ZERO!
      </div>
    </div>
  );
};

export default ConceptComparison;
