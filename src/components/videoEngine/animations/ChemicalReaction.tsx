import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  label: string;
  type: 'H+' | 'OH-' | 'Na+' | 'Cl-' | 'H2O' | 'NaCl';
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  radius: number;
}

export const ChemicalReaction: React.FC<{ isPlaying?: boolean }> = ({ isPlaying = true }) => {
  const [particles, setParticles] = useState<Particle[]>(() => [
    { id: 1, label: 'H⁺', type: 'H+', x: 80, y: 60, vx: 1.2, vy: 0.8, color: '#38bdf8', radius: 14 },
    { id: 2, label: 'OH⁻', type: 'OH-', x: 220, y: 70, vx: -1.0, vy: -0.6, color: '#f43f5e', radius: 18 },
    { id: 3, label: 'Na⁺', type: 'Na+', x: 340, y: 120, vx: 0.6, vy: 0.9, color: '#a855f7', radius: 16 },
    { id: 4, label: 'Cl⁻', type: 'Cl-', x: 440, y: 50, vx: -0.8, vy: 0.7, color: '#22c55e', radius: 20 },
    { id: 5, label: 'H⁺', type: 'H+', x: 120, y: 130, vx: 0.9, vy: -1.1, color: '#38bdf8', radius: 14 },
    { id: 6, label: 'OH⁻', type: 'OH-', x: 180, y: 140, vx: -1.1, vy: 0.5, color: '#f43f5e', radius: 18 }
  ]);
  const [reactionStage, setReactionStage] = useState<'reactants' | 'collision' | 'products'>('reactants');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => {
          let nx = p.x + p.vx;
          let ny = p.y + p.vy;
          let nvx = p.vx;
          let nvy = p.vy;

          if (nx < 30 || nx > 510) nvx = -nvx;
          if (ny < 30 || ny > 140) nvy = -nvy;

          return { ...p, x: nx, y: ny, vx: nvx, vy: nvy };
        })
      );
    }, 40);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#0a1a30] to-[#020b18]">
      {/* HUD Header */}
      <div className="flex items-center justify-between text-xs z-10">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40 text-[10px] uppercase">
            🧪 Acid-Base Neutralization Simulation
          </span>
          <span className="text-slate-300 font-mono text-[11px]">HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)</span>
        </div>
        <div className="flex items-center space-x-1 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">H⁺ Acid</span>
          <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">OH⁻ Base</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">H₂O Water</span>
        </div>
      </div>

      {/* Particle Collision Flask Canvas */}
      <div className="relative w-full flex-1 my-1 flex items-center justify-center">
        <svg viewBox="0 0 540 170" className="w-full h-full max-h-[180px]">
          {/* Reaction Vessel Outline */}
          <rect x="20" y="20" width="500" height="130" rx="16" fill="#001830" stroke="#334155" strokeWidth="2" opacity="0.6" />

          {/* Liquid meniscus line */}
          <path d="M 20 50 Q 270 65 520 50" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

          {/* Animated Particles */}
          {particles.map(p => (
            <g key={p.id} transform={`translate(${p.x}, ${p.y})`}>
              <circle cx="0" cy="0" r={p.radius} fill={p.color} fillOpacity="0.8" stroke="#ffffff" strokeWidth="1.5" />
              <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">
                {p.label}
              </text>
            </g>
          ))}

          {/* Central Synthesis Bond Reveal */}
          <g transform="translate(270, 85)">
            <circle cx="-25" cy="0" r="14" fill="#38bdf8" stroke="#ffffff" strokeWidth="1.5" />
            <text x="-25" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">H⁺</text>
            <circle cx="25" cy="0" r="17" fill="#f43f5e" stroke="#ffffff" strokeWidth="1.5" />
            <text x="25" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">OH⁻</text>
            {/* Bond attraction line */}
            <line x1="-11" y1="0" x2="8" y2="0" stroke="#F8C800" strokeWidth="3" strokeDasharray="2 2" className="animate-pulse" />
            {/* Energy flash */}
            <circle cx="0" cy="0" r="8" fill="#F8C800" opacity="0.7" />
          </g>
        </svg>
      </div>

      {/* Chemical Equation Bar */}
      <div className="z-10 bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-xs">
        <div className="text-left">
          <span className="text-[10px] text-emerald-400 uppercase font-black tracking-wider block">
            Net Ionic Equation (WAEC & JAMB)
          </span>
          <span className="text-slate-300 text-[11px]">
            Spectator ions Na⁺ and Cl⁻ remain dissolved; the true reaction is:
          </span>
        </div>
        <div className="bg-[#001028] px-3 py-1 rounded-lg border border-[#F8C800]/50 font-mono text-xs font-black text-[#F8C800]">
          H⁺ + OH⁻ → H₂O (Neutralization)
        </div>
      </div>
    </div>
  );
};

export default ChemicalReaction;
