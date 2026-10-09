import React, { useEffect, useState } from 'react';

interface ProjectileAnimationProps {
  isPlaying?: boolean;
  progress?: number;
  speed?: number;
}

export const ProjectileAnimation: React.FC<ProjectileAnimationProps> = ({
  isPlaying = true,
  progress: externalProgress,
  speed = 1
}) => {
  const [internalProgress, setInternalProgress] = useState(0);

  useEffect(() => {
    if (externalProgress !== undefined) {
      setInternalProgress(externalProgress);
      return;
    }
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setInternalProgress(prev => (prev >= 1 ? 0 : prev + 0.007 * speed));
    }, 30);
    return () => clearInterval(interval);
  }, [isPlaying, externalProgress, speed]);

  const p = externalProgress !== undefined ? externalProgress : internalProgress;

  // Parabolic trajectory coordinates in SVG viewBox (540 x 200)
  // Start: (60, 160), Peak: (270, 45), End: (480, 160)
  const x = 60 + p * 420;
  // Parabola: y = 160 - 4 * 115 * p * (1 - p)
  const y = 160 - 460 * p * (1 - p);

  // Velocity components
  const vx = 30; // constant horizontal component
  const vy = (1 - 2 * p) * 35; // changes sign at peak

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#06162d] to-[#010914]">
      {/* Header telemetry */}
      <div className="flex items-center justify-between text-xs z-10">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/40 text-[10px] uppercase">
            🎯 Projectile Motion Simulation
          </span>
          <span className="text-slate-300 font-mono text-[11px]">Angle θ = 45° • u = 40 m/s</span>
        </div>
        <div className="flex items-center space-x-2 text-[10px] font-mono">
          <span className="text-emerald-400 bg-black/40 px-2 py-0.5 rounded border border-emerald-400/30">
            vx = 28.3 m/s (Const)
          </span>
          <span className="text-pink-400 bg-black/40 px-2 py-0.5 rounded border border-pink-400/30">
            vy = {(28.3 - 9.8 * p * 5.7).toFixed(1)} m/s
          </span>
          <span className="text-[#F8C800] bg-black/40 px-2 py-0.5 rounded border border-[#F8C800]/30">
            g = 9.8 m/s² ↓
          </span>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full flex-1 my-1 flex items-center justify-center">
        <svg viewBox="0 0 540 200" className="w-full h-full max-h-[220px]">
          <defs>
            <marker id="proj-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#F8C800" />
            </marker>
            <marker id="vx-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#34d399" />
            </marker>
            <marker id="vy-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#f43f5e" />
            </marker>
            <marker id="g-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#fbbf24" />
            </marker>
          </defs>

          {/* Ground */}
          <line x1="30" y1="160" x2="510" y2="160" stroke="#334155" strokeWidth="2" />
          <pattern id="ground-hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="#1e293b" strokeWidth="1.5" />
          </pattern>
          <rect x="30" y="161" width="480" height="25" fill="url(#ground-hatch)" />

          {/* Parabolic Trajectory Path */}
          <path
            d="M 60 160 Q 270 -70 480 160"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.4"
          />

          {/* Maximum Height Indicator */}
          <line x1="270" y1="45" x2="270" y2="160" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="270" cy="45" r="3" fill="#f59e0b" />
          <text x="270" y="35" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold" fontFamily="monospace">
            Hmax = u²sin²θ / 2g
          </text>

          {/* Range Line */}
          <line x1="60" y1="175" x2="480" y2="175" stroke="#94a3b8" strokeWidth="1" />
          <text x="270" y="188" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
            Horizontal Range R = u²sin(2θ) / g
          </text>

          {/* Launch Angle Arc */}
          <path d="M 90 160 A 30 30 0 0 0 81 138" fill="none" stroke="#F8C800" strokeWidth="1.5" />
          <text x="96" y="150" fill="#F8C800" fontSize="10" fontWeight="bold">θ = 45°</text>

          {/* Projectile Ball */}
          <g transform={`translate(${x}, ${y})`}>
            {/* Glow */}
            <circle cx="0" cy="0" r="10" fill="#38bdf8" opacity="0.3" className="animate-pulse" />
            <circle cx="0" cy="0" r="6" fill="#F8C800" stroke="#ffffff" strokeWidth="1.5" />

            {/* Horizontal Velocity Vector (constant to the right) */}
            <line x1="0" y1="0" x2={vx} y2="0" stroke="#34d399" strokeWidth="2" markerEnd="url(#vx-arrow)" />
            <text x={vx + 4} y="-4" fill="#34d399" fontSize="8" fontWeight="bold">vx</text>

            {/* Vertical Velocity Vector (points up then down) */}
            <line x1="0" y1="0" x2="0" y2={-vy} stroke="#f43f5e" strokeWidth="2" markerEnd="url(#vy-arrow)" />
            <text x="4" y={-vy - 2} fill="#f43f5e" fontSize="8" fontWeight="bold">vy</text>

            {/* Gravity Vector (always downward) */}
            <line x1="-12" y1="0" x2="-12" y2="22" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#g-arrow)" />
            <text x="-20" y="14" fill="#fbbf24" fontSize="8" fontWeight="bold">g</text>
          </g>
        </svg>
      </div>

      {/* Physics Insight */}
      <div className="z-10 bg-black/70 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-xs">
        <div className="text-left">
          <span className="text-[10px] text-emerald-400 uppercase font-black tracking-wider block">
            JAMB Exam Principle
          </span>
          <span className="text-slate-300 text-[11px]">
            At peak height, vertical velocity <strong className="text-pink-400">vy = 0</strong>, but horizontal velocity <strong className="text-emerald-400">vx remains unchanged</strong>.
          </span>
        </div>
        <div className="bg-[#001028] px-3 py-1 rounded-lg border border-[#F8C800]/40 font-mono text-[11px] text-[#F8C800] shrink-0">
          t_total = 2u sin θ / g
        </div>
      </div>
    </div>
  );
};

export default ProjectileAnimation;
