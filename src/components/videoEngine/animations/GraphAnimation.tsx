import React, { useState, useEffect } from 'react';

export const GraphAnimation: React.FC<{ isPlaying?: boolean }> = ({ isPlaying = true }) => {
  const [aValue, setAValue] = useState<number>(1);
  const [cValue, setCValue] = useState<number>(-4);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCValue(prev => (prev >= 2 ? -6 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#07172f] to-[#010915]">
      {/* Header */}
      <div className="flex items-center justify-between text-xs z-10">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 text-[10px] uppercase">
            📈 Dynamic Quadratic Curve Plotting
          </span>
          <span className="text-slate-300 font-mono text-[11px]">y = x² - 4 (Parabola)</span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] font-mono">
          <span className="text-emerald-400 bg-black/40 px-2 py-0.5 rounded border border-emerald-400/30">
            Roots: x = -2, +2
          </span>
          <span className="text-amber-400 bg-black/40 px-2 py-0.5 rounded border border-amber-400/30">
            Vertex: (0, {cValue})
          </span>
        </div>
      </div>

      {/* SVG Coordinate Grid */}
      <div className="relative w-full flex-1 my-1 flex items-center justify-center">
        <svg viewBox="0 0 540 170" className="w-full h-full max-h-[180px]">
          {/* Subtle Grid */}
          <defs>
            <pattern id="graph-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="540" height="170" fill="url(#graph-grid)" />

          {/* Axes */}
          <line x1="40" y1="100" x2="500" y2="100" stroke="#64748b" strokeWidth="1.5" />
          <line x1="270" y1="15" x2="270" y2="160" stroke="#64748b" strokeWidth="1.5" />
          {/* Axis Labels */}
          <text x="508" y="104" fill="#94a3b8" fontSize="11" fontFamily="monospace">x</text>
          <text x="274" y="24" fill="#94a3b8" fontSize="11" fontFamily="monospace">y</text>

          {/* Parabola Curve: y = a*(x-270)^2 / 80 + (100 - cValue*10) */}
          <path
            d={`M 170 30 Q 270 ${100 - cValue * 12} 370 30`}
            fill="none"
            stroke="#F8C800"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Roots Points */}
          <circle cx="210" cy="100" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
          <text x="210" y="116" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">x₁ = -2</text>
          <circle cx="330" cy="100" r="5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
          <text x="330" y="116" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold">x₂ = +2</text>

          {/* Vertex Point */}
          <circle cx="270" cy={100 - cValue * 12} r="5" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
          <text x="304" y={100 - cValue * 12 + 4} fill="#f43f5e" fontSize="9" fontWeight="bold">
            Min (0, {cValue})
          </text>
        </svg>
      </div>

      {/* Explanatory Footer */}
      <div className="z-10 bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-xs">
        <div className="text-left">
          <span className="text-[10px] text-yellow-400 uppercase font-black tracking-wider block">
            Discriminant &amp; Intercepts
          </span>
          <span className="text-slate-300 text-[11px]">
            When the curve intersects the x-axis, <strong>y = 0</strong>. The solutions to ax² + bx + c = 0 are the x-intercepts!
          </span>
        </div>
        <div className="bg-[#001028] px-3 py-1 rounded-lg border border-[#F8C800]/40 text-[#F8C800] font-mono text-[11px] font-bold">
          Δ &gt; 0 (2 Real Roots)
        </div>
      </div>
    </div>
  );
};

export default GraphAnimation;
