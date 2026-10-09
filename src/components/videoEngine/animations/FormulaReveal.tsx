import React from 'react';

interface FormulaSymbol {
  symbol: string;
  name: string;
  unit: string;
  color: string;
}

interface FormulaRevealProps {
  title: string;
  formula: string;
  description: string;
  symbols: FormulaSymbol[];
  tip?: string;
}

export const FormulaReveal: React.FC<FormulaRevealProps> = ({
  title,
  formula,
  description,
  symbols,
  tip
}) => {
  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#051329] to-[#010915]">
      {/* Header */}
      <div className="flex items-center justify-between text-xs z-10 border-b border-white/10 pb-1.5">
        <span className="px-2 py-0.5 rounded-full bg-[#F8C800]/20 text-[#F8C800] font-bold border border-[#F8C800]/40 text-[10px] uppercase">
          📐 Essential Formula Reveal
        </span>
        <span className="text-slate-300 font-mono text-[11px]">{title}</span>
      </div>

      {/* Main Cinematic Formula Box */}
      <div className="flex-1 my-2 flex flex-col items-center justify-center space-y-3">
        <div className="px-6 py-4 rounded-2xl bg-[#001028] border-2 border-[#F8C800] shadow-[0_0_25px_rgba(248,200,0,0.15)] text-center">
          <div className="text-2xl sm:text-3xl font-black font-mono text-[#F8C800] tracking-wider">
            {formula}
          </div>
          <p className="text-[11px] text-slate-300 mt-1 max-w-sm">{description}</p>
        </div>

        {/* Breakdown of Symbols Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-md">
          {symbols.map(s => (
            <div key={s.symbol} className="bg-white/5 border border-white/10 p-2 rounded-xl text-center">
              <div className="text-base font-black font-mono" style={{ color: s.color }}>
                {s.symbol}
              </div>
              <div className="text-[10px] font-bold text-slate-200 mt-0.5 truncate">{s.name}</div>
              <div className="text-[9px] text-slate-400 font-mono">[{s.unit}]</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tip footer */}
      {tip && (
        <div className="z-10 bg-black/70 backdrop-blur-md rounded-xl p-2 border border-white/10 text-center text-[10px] text-slate-300">
          <strong className="text-[#F8C800]">StudyPlug Memory Trick: </strong>
          {tip}
        </div>
      )}
    </div>
  );
};

export default FormulaReveal;
