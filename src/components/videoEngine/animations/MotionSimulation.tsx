import React, { useEffect, useState } from 'react';

interface MotionSimulationProps {
  isPlaying?: boolean;
  progress?: number; // 0 to 1
  speed?: number;
  showFormula?: boolean;
}

export const MotionSimulation: React.FC<MotionSimulationProps> = ({
  isPlaying = true,
  progress: externalProgress,
  speed = 1,
  showFormula = true
}) => {
  const [internalProgress, setInternalProgress] = useState(0);

  useEffect(() => {
    if (externalProgress !== undefined) {
      setInternalProgress(externalProgress);
      return;
    }
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setInternalProgress(prev => (prev >= 1 ? 0 : prev + 0.008 * speed));
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying, externalProgress, speed]);

  const p = externalProgress !== undefined ? externalProgress : internalProgress;
  const carX = 60 + p * 420; // 60 to 480
  const timeSeconds = (p * 10).toFixed(1);
  const distanceMeters = (p * 200).toFixed(0);
  const velocity = (200 / 10).toFixed(0); // 20 m/s

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#071a36] to-[#020b18]">
      {/* HUD Header */}
      <div className="flex items-center justify-between text-xs z-10">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/40 text-[10px] uppercase tracking-wider flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Kinematics Sim
          </span>
          <span className="text-slate-300 font-mono text-[11px]">Enugu → Abuja Highway</span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] font-mono">
          <span className="text-[#F8C800] bg-black/40 px-2 py-0.5 rounded border border-[#F8C800]/30">
            ⏱ t = {timeSeconds}s
          </span>
          <span className="text-cyan-400 bg-black/40 px-2 py-0.5 rounded border border-cyan-400/30">
            📍 d = {distanceMeters}m
          </span>
          <span className="text-pink-400 bg-black/40 px-2 py-0.5 rounded border border-pink-400/30">
            ⚡ v = {velocity} m/s
          </span>
        </div>
      </div>

      {/* SVG Canvas Track */}
      <div className="relative w-full flex-1 my-2 flex items-center justify-center">
        <svg viewBox="0 0 540 180" className="w-full h-full max-h-[220px]">
          {/* Subtle grid */}
          <defs>
            <pattern id="sim-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            </pattern>
            <linearGradient id="road-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#F8C800" />
            </marker>
          </defs>
          <rect width="540" height="180" fill="url(#sim-grid)" />

          {/* Road Surface */}
          <rect x="40" y="110" width="460" height="36" rx="6" fill="url(#road-grad)" stroke="#475569" strokeWidth="1.5" />
          {/* Road center dashed line */}
          <line x1="50" y1="128" x2="490" y2="128" stroke="#F8C800" strokeWidth="2" strokeDasharray="14 10" opacity="0.6" />

          {/* Point A Marker */}
          <g transform="translate(60, 110)">
            <circle cx="0" cy="0" r="5" fill="#38bdf8" />
            <line x1="0" y1="0" x2="0" y2="-45" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="0" y="-52" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold" fontFamily="monospace">
              Point A (Origin)
            </text>
            <text x="0" y="48" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
              x = 0m
            </text>
          </g>

          {/* Point B Marker */}
          <g transform="translate(480, 110)">
            <circle cx="0" cy="0" r="5" fill="#ef4444" />
            <line x1="0" y1="0" x2="0" y2="-45" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="0" y="-52" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold" fontFamily="monospace">
              Point B (Destination)
            </text>
            <text x="0" y="48" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
              x = 200m
            </text>
          </g>

          {/* Displacement Vector Arrow from A to current position */}
          {carX > 65 && (
            <g>
              <line
                x1="60"
                y1="55"
                x2={carX}
                y2="55"
                stroke="#F8C800"
                strokeWidth="3"
                markerEnd="url(#arrowhead)"
              />
              <text x={(60 + carX) / 2} y="45" textAnchor="middle" fill="#F8C800" fontSize="11" fontWeight="bold" fontFamily="monospace">
                Displacement Δx = {distanceMeters}m →
              </text>
            </g>
          )}

          {/* Moving Vehicle / Student */}
          <g transform={`translate(${carX}, 112)`} className="transition-transform duration-75">
            {/* Vehicle Shadow */}
            <ellipse cx="0" cy="18" rx="22" ry="5" fill="black" opacity="0.4" />
            {/* Car Body */}
            <rect x="-22" y="-12" width="44" height="20" rx="6" fill="#F8C800" stroke="#001028" strokeWidth="1.5" />
            {/* Windshield */}
            <path d="M -10 -12 L -4 -20 L 12 -20 L 16 -12 Z" fill="#001028" />
            {/* Wheels */}
            <circle cx="-13" cy="8" r="5" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx="13" cy="8" r="5" fill="#0f172a" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Motion Lines */}
            <line x1="-28" y1="-5" x2="-36" y2="-5" stroke="#38bdf8" strokeWidth="2" strokeDasharray="2 3" />
            <line x1="-26" y1="2" x2="-38" y2="2" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Velocity Vector on Car */}
            <line x1="22" y1="-2" x2="42" y2="-2" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
            <text x="32" y="-10" textAnchor="middle" fill="#38bdf8" fontSize="9" fontWeight="bold" fontFamily="monospace">
              v
            </text>
          </g>
        </svg>
      </div>

      {/* Meaning & Formula Connection */}
      {showFormula && (
        <div className="z-10 bg-black/70 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] text-[#F8C800] uppercase font-black tracking-wider block">
              Core Definition
            </span>
            <span className="text-xs font-medium text-slate-200">
              Velocity is the rate of change of displacement with respect to time:
            </span>
          </div>
          <div className="bg-[#001028] px-3 py-1.5 rounded-lg border border-[#F8C800]/40 font-mono text-center">
            <div className="text-xs font-black text-[#F8C800]">v = Δx / Δt</div>
            <div className="text-[9px] text-slate-400">200m ÷ 10s = 20 m/s</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MotionSimulation;
