import React, { useState, useEffect } from 'react';

interface EquationStep {
  title: string;
  left: string;
  right: string;
  operation: string;
  explanation: string;
  balanceOffset?: number; // tilt degrees
}

interface EquationSolverProps {
  currentStepIndex?: number;
  onStepChange?: (index: number) => void;
  autoPlay?: boolean;
}

export const EquationSolver: React.FC<EquationSolverProps> = ({
  currentStepIndex: externalStep,
  onStepChange,
  autoPlay = true
}) => {
  const [internalStep, setInternalStep] = useState(0);

  const steps: EquationStep[] = [
    {
      title: 'Original Algebraic Equation',
      left: '2x + 5',
      right: '15',
      operation: 'Given equation in balance',
      explanation: 'Our goal is to isolate the variable x on the left-hand side.',
      balanceOffset: 0
    },
    {
      title: 'Step 1: Balance & Subtract 5',
      left: '2x + 5 - 5',
      right: '15 - 5',
      operation: 'Subtract 5 from BOTH sides',
      explanation: 'Whatever you do to one side of an equation, you must do to the other to keep it balanced.',
      balanceOffset: -2
    },
    {
      title: 'Step 2: Simplify Constants',
      left: '2x',
      right: '10',
      operation: '+5 and -5 cancel out to 0; 15 - 5 = 10',
      explanation: 'The variable term 2x is now isolated on the left.',
      balanceOffset: 0
    },
    {
      title: 'Step 3: Divide by Coefficient 2',
      left: '2x / 2',
      right: '10 / 2',
      operation: 'Divide BOTH sides by 2',
      explanation: 'Since 2 is multiplying x, the inverse operation is division by 2.',
      balanceOffset: 2
    },
    {
      title: 'Final Solution',
      left: 'x',
      right: '5',
      operation: 'x = 5 (Solution Confirmed)',
      explanation: 'Verification: 2(5) + 5 = 10 + 5 = 15. The equation holds true!',
      balanceOffset: 0
    }
  ];

  const currentStep = externalStep !== undefined ? externalStep : internalStep;
  const stepData = steps[currentStep] || steps[0];

  useEffect(() => {
    if (!autoPlay || externalStep !== undefined) return;
    const interval = setInterval(() => {
      setInternalStep(prev => (prev >= steps.length - 1 ? 0 : prev + 1));
    }, 3200);
    return () => clearInterval(interval);
  }, [autoPlay, externalStep, steps.length]);

  const handleSelectStep = (idx: number) => {
    setInternalStep(idx);
    if (onStepChange) onStepChange(idx);
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#081b36] to-[#010915]">
      {/* HUD Header */}
      <div className="flex items-center justify-between text-xs z-10">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-[#F8C800] font-bold border border-amber-500/40 text-[10px] uppercase">
            ⚖️ Step-by-Step Algebraic Equation Solver
          </span>
          <span className="text-slate-300 font-mono text-[11px]">2x + 5 = 15</span>
        </div>
        <div className="flex items-center space-x-1.5">
          {steps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSelectStep(i)}
              className={`w-5 h-5 rounded-full text-[10px] font-bold transition flex items-center justify-center cursor-pointer ${
                currentStep === i
                  ? 'bg-[#F8C800] text-[#001028] scale-110 shadow-sm'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Balance Scale SVG */}
      <div className="relative w-full flex-1 my-2 flex flex-col items-center justify-center">
        <svg viewBox="0 0 540 160" className="w-full h-full max-h-[170px]">
          {/* Central Fulcrum */}
          <polygon points="270 120, 255 155, 285 155" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="270" cy="120" r="4" fill="#F8C800" />

          {/* Balanced Beam (Tilts slightly during operation) */}
          <g transform={`rotate(${stepData.balanceOffset || 0}, 270, 120)`} className="transition-transform duration-500 ease-out">
            <line x1="90" y1="120" x2="450" y2="120" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />

            {/* Left Pan Strings & Pan */}
            <line x1="120" y1="120" x2="90" y2="145" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="120" y1="120" x2="150" y2="145" stroke="#94a3b8" strokeWidth="1.5" />
            <ellipse cx="120" cy="145" rx="36" ry="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />

            {/* Right Pan Strings & Pan */}
            <line x1="420" y1="120" x2="390" y2="145" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="420" y1="120" x2="450" y2="145" stroke="#94a3b8" strokeWidth="1.5" />
            <ellipse cx="420" cy="145" rx="36" ry="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          </g>

          {/* Large Floating Equation Card Above Fulcrum */}
          <g transform="translate(270, 45)">
            {/* Box */}
            <rect x="-170" y="-30" width="340" height="58" rx="14" fill="#001028" stroke="#F8C800" strokeWidth="2" />
            {/* Left side */}
            <text x="-65" y="6" textAnchor="middle" fill="#38bdf8" fontSize="22" fontWeight="900" fontFamily="monospace">
              {stepData.left}
            </text>
            {/* Equal sign */}
            <text x="0" y="7" textAnchor="middle" fill="#F8C800" fontSize="24" fontWeight="900">
              =
            </text>
            {/* Right side */}
            <text x="65" y="6" textAnchor="middle" fill="#4ade80" fontSize="22" fontWeight="900" fontFamily="monospace">
              {stepData.right}
            </text>
          </g>
        </svg>

        {/* Operation Callout Banner */}
        <div className="bg-[#001830] border border-[#F8C800]/40 px-4 py-1.5 rounded-full flex items-center space-x-2 shadow-md animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#F8C800]" />
          <span className="text-xs font-mono font-bold text-[#F8C800]">
            {stepData.operation}
          </span>
        </div>
      </div>

      {/* Explanatory Bottom Card */}
      <div className="z-10 bg-black/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-xs">
        <div className="text-left">
          <span className="text-[10px] text-cyan-400 uppercase font-black tracking-wider block">
            {stepData.title}
          </span>
          <span className="text-slate-300 text-[11px]">
            {stepData.explanation}
          </span>
        </div>
        <div className="flex items-center space-x-2 shrink-0">
          <button
            type="button"
            onClick={() => handleSelectStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-xs font-bold disabled:opacity-30 cursor-pointer"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => handleSelectStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="px-2.5 py-1 rounded bg-[#F8C800] text-[#001028] text-xs font-black disabled:opacity-30 cursor-pointer"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquationSolver;
