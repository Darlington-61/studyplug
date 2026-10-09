import React, { useEffect, useState } from 'react';

export const CellAnimation: React.FC<{ isPlaying?: boolean }> = ({ isPlaying = true }) => {
  const [beamPulse, setBeamPulse] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setBeamPulse(prev => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#061e20] to-[#010c0e]">
      {/* HUD Header */}
      <div className="flex items-center justify-between text-xs z-10">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 text-[10px] uppercase">
            🍃 Photosynthesis Biochemical Process
          </span>
          <span className="text-slate-300 font-mono text-[11px]">Chloroplast Light Reaction</span>
        </div>
        <div className="text-[10px] text-[#F8C800] bg-black/40 px-2 py-0.5 rounded border border-[#F8C800]/30 font-mono">
          6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂
        </div>
      </div>

      {/* SVG Leaf & Chloroplast Process */}
      <div className="relative w-full flex-1 my-1 flex items-center justify-center">
        <svg viewBox="0 0 540 170" className="w-full h-full max-h-[180px]">
          <defs>
            <linearGradient id="sun-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>
            <linearGradient id="leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
            <marker id="bio-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#4ade80" />
            </marker>
          </defs>

          {/* Sunlight Rays on Top Left */}
          <g transform="translate(60, 40)">
            <circle cx="0" cy="0" r="18" fill="url(#sun-grad)" className="animate-pulse" />
            <line x1="16" y1="16" x2="60" y2="55" stroke="#fef08a" strokeWidth="2.5" strokeDasharray="3 3" />
            <line x1="22" y1="5" x2="70" y2="35" stroke="#fef08a" strokeWidth="2" strokeDasharray="3 3" />
            <text x="0" y="32" textAnchor="middle" fill="#fef08a" fontSize="9" fontWeight="bold">
              Sunlight (Photons)
            </text>
          </g>

          {/* Reactants: CO2 + H2O */}
          <g transform="translate(60, 120)">
            <rect x="-40" y="-18" width="80" height="34" rx="8" fill="#001830" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="0" y="-2" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">CO₂ (Air)</text>
            <text x="0" y="10" textAnchor="middle" fill="#93c5fd" fontSize="9">+ H₂O (Roots)</text>
            <line x1="45" y1="0" x2="95" y2="-10" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#bio-arrow)" />
          </g>

          {/* Chloroplast in Mesophyll Leaf (Center) */}
          <g transform="translate(270, 85)">
            {/* Plant Cell Leaf Body */}
            <ellipse cx="0" cy="0" rx="95" ry="55" fill="url(#leaf-grad)" stroke="#22c55e" strokeWidth="2.5" />
            {/* Grana / Thylakoid Stacks */}
            <g transform="translate(-40, -10)">
              <rect x="-12" y="-14" width="24" height="6" rx="2" fill="#86efac" />
              <rect x="-12" y="-6" width="24" height="6" rx="2" fill="#86efac" />
              <rect x="-12" y="2" width="24" height="6" rx="2" fill="#86efac" />
              <rect x="-12" y="10" width="24" height="6" rx="2" fill="#86efac" />
              <text x="0" y="24" textAnchor="middle" fill="#ffffff" fontSize="7">Thylakoids</text>
            </g>
            <g transform="translate(30, -5)">
              <rect x="-12" y="-14" width="24" height="6" rx="2" fill="#86efac" />
              <rect x="-12" y="-6" width="24" height="6" rx="2" fill="#86efac" />
              <rect x="-12" y="2" width="24" height="6" rx="2" fill="#86efac" />
              <text x="0" y="18" textAnchor="middle" fill="#ffffff" fontSize="7">Stroma</text>
            </g>
            <text x="0" y="-36" textAnchor="middle" fill="#bbf7d0" fontSize="10" fontWeight="bold">
              Chloroplast Organelle
            </text>
          </g>

          {/* Arrow Output to Products */}
          <line x1="370" y1="85" x2="420" y2="85" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#bio-arrow)" />

          {/* Products: Glucose + Oxygen */}
          <g transform="translate(470, 85)">
            <rect x="-45" y="-30" width="90" height="60" rx="10" fill="#001830" stroke="#F8C800" strokeWidth="2" />
            <text x="0" y="-12" textAnchor="middle" fill="#F8C800" fontSize="11" fontWeight="bold">Glucose</text>
            <text x="0" y="0" textAnchor="middle" fill="#fde047" fontSize="9">(Energy/Starch)</text>
            <line x1="-35" y1="8" x2="35" y2="8" stroke="#334155" strokeWidth="1" />
            <text x="0" y="22" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">+ 6O₂ (Oxygen)</text>
          </g>
        </svg>
      </div>

      {/* Examiner Connection Note */}
      <div className="z-10 bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-xs">
        <div className="text-left">
          <span className="text-[10px] text-emerald-400 uppercase font-black tracking-wider block">
            JAMB & WAEC Key Question Angle
          </span>
          <span className="text-slate-300 text-[11px]">
            Where does oxygen come from? <strong>Photolysis of water (H₂O)</strong>, NOT carbon dioxide!
          </span>
        </div>
        <div className="bg-[#001028] px-3 py-1 rounded-lg border border-emerald-500/40 text-emerald-300 font-mono text-[11px] shrink-0 font-bold">
          Light-Dependent Stage
        </div>
      </div>
    </div>
  );
};

export default CellAnimation;
