import React, { useEffect, useState } from 'react';

interface ConfettiCelebrationProps {
  active: boolean;
  onComplete?: () => void;
  title?: string;
  subtitle?: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  opacity: number;
}

const COLORS = ['#FFCC00', '#00BCD4', '#34D399', '#F43F5E', '#A855F7', '#FFEA79'];

export const ConfettiCelebration: React.FC<ConfettiCelebrationProps> = ({
  active,
  onComplete,
  title = "Topic Mastered!",
  subtitle = "+50 StudyPlug XP Awarded to Your Streak"
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      setShowModal(false);
      return;
    }

    setShowModal(true);

    // Generate 60 colorful confetti pieces
    const newParticles: Particle[] = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 50,
      size: 6 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 4,
      vy: 3 + Math.random() * 6,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 15,
      opacity: 1
    }));

    setParticles(newParticles);

    // Auto-dismiss modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(false);
      if (onComplete) onComplete();
    }, 3200);

    return () => clearTimeout(timer);
  }, [active, onComplete]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            rotation: p.rotation + p.vRot,
            opacity: p.y > window.innerHeight * 0.7 ? Math.max(0, p.opacity - 0.05) : 1
          }))
          .filter(p => p.y < window.innerHeight && p.opacity > 0)
      );
    }, 20);

    return () => clearInterval(interval);
  }, [particles]);

  if (!showModal && particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      {/* Falling confetti pieces */}
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size * 1.4}px`,
            backgroundColor: p.color,
            borderRadius: '2px',
            transform: `rotate(${p.rotation}deg)`,
            opacity: p.opacity,
            transition: 'opacity 0.2s'
          }}
        />
      ))}

      {/* Celebratory Achievement Banner */}
      {showModal && (
        <div className="pointer-events-auto bg-[#071F15]/95 border-2 border-[#FFCC00] rounded-2xl p-6 shadow-2xl backdrop-blur-xl text-center max-w-sm mx-4 transform animate-bounce duration-300">
          <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-[#FFCC00]/20 border border-[#FFCC00] flex items-center justify-center text-3xl">
            🏆
          </div>
          <span className="text-[11px] font-black uppercase tracking-widest text-[#00BCD4] block mb-1">
            StudyPlug Academic Achievement
          </span>
          <h3 className="text-white font-black text-xl mb-1">{title}</h3>
          <p className="text-[#FFEA79] font-bold text-sm mb-3">{subtitle}</p>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black">
            <span>✓</span>
            <span>Recorded in Your Revision Vault</span>
          </div>
        </div>
      )}
    </div>
  );
};
