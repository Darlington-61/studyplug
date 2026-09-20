import React, { useState, useEffect, useRef } from 'react';

export interface AnimatedProjectileVisualProps {
  initialSpeed?: number;
  initialAngle?: number;
}

export const AnimatedProjectileVisual: React.FC<AnimatedProjectileVisualProps> = ({
  initialSpeed = 28,
  initialAngle = 45
}) => {
  const [speed, setSpeed] = useState<number>(initialSpeed);
  const [angle, setAngle] = useState<number>(initialAngle);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [simTime, setSimTime] = useState<number>(0);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const g = 9.8;
  const rad = (angle * Math.PI) / 180;
  const ux = speed * Math.cos(rad);
  const uy = speed * Math.sin(rad);

  // Physics formulas
  const timeOfFlight = (2 * uy) / g;
  const maxHeight = (uy * uy) / (2 * g);
  const range = (speed * speed * Math.sin(2 * rad)) / g;

  // Animation Loop
  const animate = (time: number) => {
    if (lastTimeRef.current !== null) {
      const delta = (time - lastTimeRef.current) / 1000;
      setSimTime(prev => {
        const next = prev + delta;
        if (next >= timeOfFlight) {
          setIsPlaying(false);
          return timeOfFlight;
        }
        return next;
      });
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isPlaying && !reducedMotion) {
      lastTimeRef.current = performance.now();
      requestRef.current = requestAnimationFrame(animate);
    } else {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = null;
    }
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, reducedMotion, timeOfFlight]);

  // Handle Play/Pause/Reset
  const handlePlayPause = () => {
    if (simTime >= timeOfFlight) {
      setSimTime(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setSimTime(0);
  };

  // Current simulation physics values
  const currentT = reducedMotion ? timeOfFlight : simTime;
  const currentX = ux * currentT;
  const currentY = Math.max(0, uy * currentT - 0.5 * g * currentT * currentT);
  const currentVx = ux;
  const currentVy = uy - g * currentT;
  const currentV = Math.sqrt(currentVx * currentVx + currentVy * currentVy);

  // Canvas coordinate mapping
  // SVG viewport: width = 640, height = 300
  // Margins: left = 60, right = 40, top = 40, bottom = 250
  const maxSimX = Math.max(range * 1.15, 80);
  const maxSimY = Math.max(maxHeight * 1.35, 30);

  const toSvgX = (x: number) => 60 + (x / maxSimX) * 540;
  const toSvgY = (y: number) => 250 - (y / maxSimY) * 200;

  // Build points for the parabolic path
  const fullPathPoints: string[] = [];
  const animatedPathPoints: string[] = [];
  const steps = 60;

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * timeOfFlight;
    const x = ux * t;
    const y = Math.max(0, uy * t - 0.5 * g * t * t);
    const pt = `${toSvgX(x)},${toSvgY(y)}`;
    fullPathPoints.push(pt);
    if (t <= currentT || reducedMotion) {
      animatedPathPoints.push(pt);
    }
  }

  const fullPathD = fullPathPoints.length > 0 ? `M ${fullPathPoints.join(' L ')}` : '';
  const animatedPathD = animatedPathPoints.length > 0 ? `M ${animatedPathPoints.join(' L ')}` : '';

  const ballSvgX = toSvgX(currentX);
  const ballSvgY = toSvgY(currentY);

  // Vector scaling
  const vecScale = 1.2;
  const vxEndX = ballSvgX + currentVx * vecScale;
  const vxEndY = ballSvgY; // horizontal
  const vyEndX = ballSvgX;
  const vyEndY = ballSvgY - currentVy * vecScale; // -vy because SVG y is inverted

  return (
    <div className="rounded-3xl border-2 border-emerald-500/30 bg-slate-900 text-white overflow-hidden shadow-xl p-5 sm:p-7 space-y-5">
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
        <div className="flex items-center space-x-2.5">
          <span className="w-8 h-8 rounded-xl bg-[#FFCC00] text-[#0E382B] flex items-center justify-center text-sm font-black shadow-sm">
            ▶
          </span>
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#FFCC00]">
              Interactive Scientific Animation
            </span>
            <h3 className="text-base sm:text-lg font-black text-white">
              Projectile Motion & Vector Resolution
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setReducedMotion(!reducedMotion)}
            className={`px-3 py-1 rounded-xl text-[11px] font-bold border transition cursor-pointer ${
              reducedMotion
                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Toggle static diagram for easier reading"
          >
            {reducedMotion ? '✓ Static Diagram' : '⚡ Reduce Animation'}
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-2 overflow-x-auto flex justify-center">
        <svg viewBox="0 0 640 290" className="w-full max-w-2xl h-auto select-none" style={{ minWidth: '420px' }}>
          <defs>
            {/* Grid pattern */}
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.8" />
            </pattern>
            {/* Arrow markers */}
            <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="#10B981" />
            </marker>
            <marker id="arrow-blue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="#38BDF8" />
            </marker>
            <marker id="arrow-gold" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 z" fill="#FFCC00" />
            </marker>
          </defs>

          {/* Background Grid */}
          <rect x="0" y="0" width="640" height="290" fill="url(#grid)" />

          {/* Ground surface */}
          <line x1="30" y1="250" x2="610" y2="250" stroke="#475569" strokeWidth="2.5" />
          <text x="590" y="268" fill="#64748B" fontSize="10" fontFamily="monospace" textAnchor="end">X (Metres)</text>
          <text x="45" y="45" fill="#64748B" fontSize="10" fontFamily="monospace">Y (m)</text>

          {/* Theoretical Trajectory (Ghost Path) */}
          <path d={fullPathD} fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

          {/* Active Animated Trajectory */}
          <path d={animatedPathD} fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" />

          {/* Landmark: Maximum Height indicator */}
          <g>
            <line
              x1={toSvgX(range / 2)}
              y1={toSvgY(maxHeight)}
              x2={toSvgX(range / 2)}
              y2={250}
              stroke="#F59E0B"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle cx={toSvgX(range / 2)} cy={toSvgY(maxHeight)} r="3.5" fill="#F59E0B" />
            <text
              x={toSvgX(range / 2)}
              y={toSvgY(maxHeight) - 8}
              fill="#F59E0B"
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
            >
              H_max = {maxHeight.toFixed(1)} m
            </text>
          </g>

          {/* Landmark: Range indicator */}
          <g>
            <line x1={toSvgX(0)} y1="272" x2={toSvgX(range)} y2="272" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1={toSvgX(0)} y1="267" x2={toSvgX(0)} y2="277" stroke="#38BDF8" strokeWidth="1.5" />
            <line x1={toSvgX(range)} y1="267" x2={toSvgX(range)} y2="277" stroke="#38BDF8" strokeWidth="1.5" />
            <text
              x={toSvgX(range / 2)}
              y="285"
              fill="#38BDF8"
              fontSize="11"
              fontWeight="bold"
              textAnchor="middle"
            >
              Range R = {range.toFixed(1)} m
            </text>
          </g>

          {/* Vector Arrows on Moving Projectile */}
          {!reducedMotion && (
            <g>
              {/* Vx Horizontal Vector (Green) */}
              <line
                x1={ballSvgX}
                y1={ballSvgY}
                x2={vxEndX}
                y2={vxEndY}
                stroke="#10B981"
                strokeWidth="2.5"
                markerEnd="url(#arrow-green)"
              />
              <text x={vxEndX + 8} y={vxEndY + 4} fill="#10B981" fontSize="10" fontWeight="bold">
                v_x = {currentVx.toFixed(1)}
              </text>

              {/* Vy Vertical Vector (Blue) */}
              {Math.abs(currentVy) > 0.5 && (
                <line
                  x1={ballSvgX}
                  y1={ballSvgY}
                  x2={vyEndX}
                  y2={vyEndY}
                  stroke="#38BDF8"
                  strokeWidth="2.5"
                  markerEnd="url(#arrow-blue)"
                />
              )}
              <text x={vyEndX} y={vyEndY - (currentVy >= 0 ? 8 : -14)} fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">
                v_y = {currentVy.toFixed(1)}
              </text>
            </g>
          )}

          {/* Projectile Sphere */}
          <circle
            cx={ballSvgX}
            cy={ballSvgY}
            r="7"
            fill="#FFCC00"
            stroke="#FFFFFF"
            strokeWidth="2"
            className="shadow-md"
          />
        </svg>
      </div>

      {/* Interactive Controls & Parameter Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
        {/* Playback Controls */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={handlePlayPause}
            className="px-5 py-2.5 rounded-xl bg-[#FFCC00] hover:bg-amber-400 text-[#0E382B] font-black text-xs transition cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <span>{isPlaying ? '⏸ Pause' : '▶ Play Animation'}</span>
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition cursor-pointer"
          >
            ↺ Reset
          </button>
          <div className="text-xs text-slate-300 font-mono">
            t = {currentT.toFixed(2)}s / {timeOfFlight.toFixed(2)}s
          </div>
        </div>

        {/* Physics Parameter Sliders */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-bold">Launch Angle (θ): <strong className="text-[#FFCC00]">{angle}°</strong></span>
            <input
              type="range"
              min="15"
              max="75"
              value={angle}
              onChange={e => { setAngle(Number(e.target.value)); setSimTime(0); }}
              className="w-32 accent-emerald-500 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300 font-bold">Launch Velocity (u): <strong className="text-[#FFCC00]">{speed} m/s</strong></span>
            <input
              type="range"
              min="15"
              max="45"
              value={speed}
              onChange={e => { setSpeed(Number(e.target.value)); setSimTime(0); }}
              className="w-32 accent-emerald-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Synchronized Pedagogical Explanation */}
      <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div className="flex items-center space-x-2 text-[#FFCC00] font-black text-xs uppercase tracking-wider">
          <span>💡</span>
          <span>What is Happening in this Physics Visual?</span>
        </div>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-200">
          <li>
            <strong className="text-emerald-400">Horizontal Motion is Constant (a_x = 0)</strong>: Notice the green vector arrow (v_x = u cos θ). Because air resistance is ignored, no horizontal force acts, so v_x remains strictly identical from launch to landing!
          </li>
          <li>
            <strong className="text-sky-400">Vertical Motion is Free Fall (a_y = -g)</strong>: Watch the blue vector arrow (v_y). It shrinks to zero at the highest apex (H_max), then reverses direction and grows downward.
          </li>
          <li>
            <strong className="text-amber-400">At Maximum Height (H_max)</strong>: The vertical velocity is exactly 0 m/s, but the projectile is NOT stationary—it still moves horizontally at v_x = u cos θ!
          </li>
          <li>
            <strong className="text-white">Parabolic Trajectory</strong>: The simultaneous combination of constant horizontal speed and uniform vertical acceleration creates a smooth parabolic trajectory.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AnimatedProjectileVisual;
