import React from 'react';

interface EducationalDiagramProps {
  type?: 'kinematics' | 'waves' | 'circuit' | 'geometry' | 'atom' | 'cell' | 'economics' | 'government' | 'english' | 'general';
  topicTitle?: string;
  className?: string;
}

export const EducationalDiagram: React.FC<EducationalDiagramProps> = ({
  type = 'general',
  topicTitle = '',
  className = ''
}) => {
  // Infer type if general
  let resolvedType = type;
  if (resolvedType === 'general') {
    const t = topicTitle.toLowerCase();
    if (t.includes('wave') || t.includes('sound') || t.includes('light') || t.includes('optic') || t.includes('reflection') || t.includes('refraction') || t.includes('fibre') || t.includes('lens')) {
      resolvedType = 'waves';
    } else if (t.includes('electr') || t.includes('circuit') || t.includes('current') || t.includes('magnet') || t.includes('ohm') || t.includes('resistor') || t.includes('power')) {
      resolvedType = 'circuit';
    } else if (t.includes('motion') || t.includes('force') || t.includes('velocity') || t.includes('acceleration') || t.includes('gravity') || t.includes('momentum') || t.includes('friction') || t.includes('newton')) {
      resolvedType = 'kinematics';
    } else if (t.includes('algebra') || t.includes('geo') || t.includes('graph') || t.includes('trig') || t.includes('calculus') || t.includes('equation') || t.includes('math') || t.includes('number') || t.includes('matrix')) {
      resolvedType = 'geometry';
    } else if (t.includes('chem') || t.includes('atom') || t.includes('element') || t.includes('reaction') || t.includes('acid') || t.includes('base') || t.includes('bond') || t.includes('organic')) {
      resolvedType = 'atom';
    } else if (t.includes('cell') || t.includes('bio') || t.includes('plant') || t.includes('organ') || t.includes('genetics') || t.includes('reproduction') || t.includes('respir') || t.includes('ecol')) {
      resolvedType = 'cell';
    } else if (t.includes('econ') || t.includes('demand') || t.includes('supply') || t.includes('market') || t.includes('price') || t.includes('inflation') || t.includes('money') || t.includes('trade')) {
      resolvedType = 'economics';
    } else if (t.includes('gov') || t.includes('constitution') || t.includes('arm') || t.includes('politic') || t.includes('democ') || t.includes('citizen') || t.includes('judicia') || t.includes('legislat')) {
      resolvedType = 'government';
    } else if (t.includes('eng') || t.includes('grammar') || t.includes('verb') || t.includes('noun') || t.includes('tense') || t.includes('sentence') || t.includes('concord') || t.includes('speech')) {
      resolvedType = 'english';
    } else {
      resolvedType = 'geometry';
    }
  }

  return (
    <div className={`w-full rounded-[16px] overflow-hidden border border-[#E4EAE8] bg-[#F1F5F4] p-4 shadow-subtle ${className}`}>
      {resolvedType === 'kinematics' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Animated Car Graphic on Road */}
          <div className="w-full sm:w-1/2 flex flex-col items-center">
            <svg viewBox="0 0 280 120" className="w-full h-auto max-w-[240px]">
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E0F2FE" />
                  <stop offset="100%" stopColor="#F1F5F4" />
                </linearGradient>
                <linearGradient id="carGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563EB" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>

              {/* Background hills */}
              <path d="M 0 85 Q 60 55 140 85 T 280 85 L 280 120 L 0 120 Z" fill="#D1FAE5" opacity="0.6" />
              <path d="M 40 85 Q 120 65 200 85 T 280 85 L 280 120 L 0 120 Z" fill="#A7F3D0" opacity="0.4" />

              {/* Road */}
              <rect x="0" y="85" width="280" height="35" fill="#475569" />
              <line x1="0" y1="102" x2="280" y2="102" stroke="#F1F5F4" strokeWidth="2.5" strokeDasharray="14 10" />

              {/* Motion vector arrow */}
              <g transform="translate(60, 28)">
                <line x1="0" y1="0" x2="90" y2="0" stroke="#004D40" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="90,-3 98,0 90,3" fill="#004D40" />
                <text x="45" y="-6" fill="#004D40" fontSize="10" fontWeight="bold" textAnchor="middle">Velocity (v) →</text>
              </g>

              {/* Modern Blue Car */}
              <g transform="translate(70, 48)">
                {/* Car Body */}
                <path d="M 10 26 L 25 10 Q 35 4 55 4 L 95 4 Q 105 4 115 14 L 125 26 L 135 26 Q 138 26 138 29 L 138 34 Q 138 36 135 36 L 5 36 Q 2 36 2 34 L 2 29 Q 2 26 5 26 Z" fill="url(#carGrad)" />
                {/* Windows */}
                <path d="M 30 11 L 55 11 L 55 24 L 18 24 Z" fill="#BAE6FD" />
                <path d="M 60 11 L 95 11 L 110 24 L 60 24 Z" fill="#BAE6FD" />
                {/* Wheels */}
                <circle cx="28" cy="36" r="9" fill="#1E293B" />
                <circle cx="28" cy="36" r="4.5" fill="#94A3B8" />
                <circle cx="106" cy="36" r="9" fill="#1E293B" />
                <circle cx="106" cy="36" r="4.5" fill="#94A3B8" />
                {/* Headlight */}
                <polygon points="135,28 140,29 135,31" fill="#FEF08A" />
              </g>
            </svg>
          </div>

          {/* Key Equations Box */}
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1.5 shadow-xs text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">
              Equations of Motion
            </span>
            <div className="space-y-1 text-[13px] sm:text-[14px] font-semibold text-[#10201D] font-mono">
              <div className="p-1 rounded bg-[#F7F9F8]">v = u + at</div>
              <div className="p-1 rounded bg-[#F7F9F8]">s = ut + ½at²</div>
              <div className="p-1 rounded bg-[#F7F9F8]">v² = u² + 2as</div>
            </div>
            <p className="text-[10.5px] text-[#66736F] leading-tight pt-0.5">
              Where <span className="font-semibold text-[#10201D]">u</span> = initial velocity, <span className="font-semibold text-[#10201D]">v</span> = final velocity, <span className="font-semibold text-[#10201D]">a</span> = acceleration, <span className="font-semibold text-[#10201D]">s</span> = displacement.
            </p>
          </div>
        </div>
      )}

      {resolvedType === 'waves' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 240 100" className="w-full h-auto max-w-[220px]">
              <line x1="10" y1="50" x2="230" y2="50" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 10 50 Q 40 10 70 50 T 130 50 T 190 50 T 230 50" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
              <line x1="70" y1="12" x2="190" y2="12" stroke="#004D40" strokeWidth="1.5" />
              <text x="130" y="8" fill="#004D40" fontSize="9" fontWeight="bold" textAnchor="middle">Wavelength (λ)</text>
              <line x1="40" y1="50" x2="40" y2="12" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="44" y="35" fill="#E11D48" fontSize="8" fontWeight="bold">Amplitude (A)</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">Wave Speed Relation</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">v = f × λ</div>
            <p className="text-[10.5px] text-[#66736F]">v = velocity (m/s), f = frequency (Hz), λ = wavelength (m).</p>
          </div>
        </div>
      )}

      {resolvedType === 'circuit' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 220 100" className="w-full h-auto max-w-[200px]">
              <rect x="20" y="20" width="180" height="60" fill="none" stroke="#004D40" strokeWidth="2.5" rx="4" />
              {/* Battery */}
              <line x1="100" y1="12" x2="100" y2="28" stroke="#E11D48" strokeWidth="2.5" />
              <line x1="110" y1="16" x2="110" y2="24" stroke="#1E293B" strokeWidth="2.5" />
              <text x="105" y="8" fill="#E11D48" fontSize="9" fontWeight="bold" textAnchor="middle">V (Battery)</text>
              {/* Resistor */}
              <rect x="90" y="74" width="40" height="12" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
              <text x="110" y="96" fill="#10201D" fontSize="9" fontWeight="bold" textAnchor="middle">R (Resistor)</text>
              {/* Current arrow */}
              <polygon points="170,18 178,20 170,22" fill="#2563EB" />
              <text x="165" y="14" fill="#2563EB" fontSize="8" fontWeight="bold">I →</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">Ohm's Law</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">V = I × R</div>
            <p className="text-[10.5px] text-[#66736F]">Voltage (V) = Current (I) × Resistance (R).</p>
          </div>
        </div>
      )}

      {resolvedType === 'geometry' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 160 100" className="w-full h-auto max-w-[160px]">
              <line x1="20" y1="80" x2="140" y2="80" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="30" y1="90" x2="30" y2="10" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="30" y1="70" x2="130" y2="20" stroke="#16A34A" strokeWidth="2.5" />
              <circle cx="30" cy="70" r="3" fill="#16A34A" />
              <circle cx="130" cy="20" r="3" fill="#16A34A" />
              <text x="135" y="24" fill="#16A34A" fontSize="8" fontWeight="bold">(x₂, y₂)</text>
              <text x="32" y="66" fill="#16A34A" fontSize="8" fontWeight="bold">(x₁, y₁)</text>
              <text x="145" y="84" fill="#66736F" fontSize="8">x</text>
              <text x="25" y="12" fill="#66736F" fontSize="8">y</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">Straight Line Equation</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">y = mx + c</div>
            <p className="text-[10.5px] text-[#66736F]">m = gradient = (y₂ - y₁) / (x₂ - x₁), c = y-intercept.</p>
          </div>
        </div>
      )}

      {resolvedType === 'atom' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 140 100" className="w-full h-auto max-w-[140px]">
              <ellipse cx="70" cy="50" rx="55" ry="20" fill="none" stroke="#7E22CE" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(-30 70 50)" />
              <ellipse cx="70" cy="50" rx="55" ry="20" fill="none" stroke="#7E22CE" strokeWidth="1.5" strokeDasharray="3 2" transform="rotate(30 70 50)" />
              <circle cx="70" cy="50" r="10" fill="#7E22CE" />
              <text x="70" y="53" fill="#FFFFFF" fontSize="7" fontWeight="bold" textAnchor="middle">Nucleus</text>
              <circle cx="22" cy="40" r="3" fill="#FFD600" />
              <circle cx="118" cy="60" r="3" fill="#FFD600" />
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">Atomic Structure</span>
            <div className="text-[13px] font-semibold text-[#10201D] bg-[#F7F9F8] p-1 rounded">Mass = Protons + Neutrons</div>
            <p className="text-[10.5px] text-[#66736F]">Electrons revolve around nucleus in discrete energy levels.</p>
          </div>
        </div>
      )}

      {resolvedType === 'cell' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 160 100" className="w-full h-auto max-w-[150px]">
              <path d="M 20 50 C 20 20, 140 20, 140 50 C 140 80, 20 80, 20 50 Z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
              <circle cx="80" cy="50" r="14" fill="#F59E0B" opacity="0.8" />
              <circle cx="80" cy="50" r="5" fill="#78350F" />
              <text x="80" y="73" fill="#10201D" fontSize="7" fontWeight="bold" textAnchor="middle">Nucleus</text>
              <ellipse cx="45" cy="45" rx="8" ry="4" fill="#EF4444" />
              <text x="45" y="40" fill="#7F1D1D" fontSize="6" textAnchor="middle">Mito</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">Cell Biology</span>
            <div className="text-[13px] font-semibold text-[#10201D] bg-[#F7F9F8] p-1 rounded">Basic Unit of Life</div>
            <p className="text-[10.5px] text-[#66736F]">Nucleus directs cell activities; mitochondria generate ATP.</p>
          </div>
        </div>
      )}

      {resolvedType === 'economics' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 160 100" className="w-full h-auto max-w-[160px]">
              <line x1="20" y1="80" x2="140" y2="80" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="30" y1="90" x2="30" y2="10" stroke="#94A3B8" strokeWidth="1.5" />
              {/* Demand curve (downward sloping) */}
              <line x1="35" y1="20" x2="125" y2="75" stroke="#E11D48" strokeWidth="2.5" />
              <text x="128" y="78" fill="#E11D48" fontSize="8" fontWeight="bold">D</text>
              {/* Supply curve (upward sloping) */}
              <line x1="35" y1="75" x2="125" y2="20" stroke="#16A34A" strokeWidth="2.5" />
              <text x="128" y="22" fill="#16A34A" fontSize="8" fontWeight="bold">S</text>
              {/* Equilibrium dot */}
              <circle cx="80" cy="47.5" r="3.5" fill="#004D40" />
              <text x="84" y="45" fill="#004D40" fontSize="8" fontWeight="bold">E (Equilibrium)</text>
              <text x="145" y="84" fill="#66736F" fontSize="8">Qty</text>
              <text x="22" y="12" fill="#66736F" fontSize="8">Price</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">Market Equilibrium</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">Quantity Demanded = Quantity Supplied</div>
            <p className="text-[10.5px] text-[#66736F]">Equilibrium price is established at the intersection of supply and demand.</p>
          </div>
        </div>
      )}

      {resolvedType === 'government' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 160 100" className="w-full h-auto max-w-[160px]">
              {/* 3 Pillars */}
              <rect x="20" y="25" width="32" height="60" rx="6" fill="#E8F5E9" stroke="#004D40" strokeWidth="1.5" />
              <text x="36" y="55" fill="#004D40" fontSize="7" fontWeight="bold" textAnchor="middle">Legislature</text>
              <text x="36" y="65" fill="#66736F" fontSize="6" textAnchor="middle">Makes Law</text>

              <rect x="64" y="20" width="32" height="65" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
              <text x="80" y="52" fill="#D97706" fontSize="7" fontWeight="bold" textAnchor="middle">Executive</text>
              <text x="80" y="62" fill="#66736F" fontSize="6" textAnchor="middle">Enforces</text>

              <rect x="108" y="25" width="32" height="60" rx="6" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" />
              <text x="124" y="55" fill="#2563EB" fontSize="7" fontWeight="bold" textAnchor="middle">Judiciary</text>
              <text x="124" y="65" fill="#66736F" fontSize="6" textAnchor="middle">Interprets</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">Separation of Powers</span>
            <div className="text-[13px] font-semibold text-[#10201D] bg-[#F7F9F8] p-1 rounded">Checks &amp; Balances</div>
            <p className="text-[10.5px] text-[#66736F]">Prevents tyranny by dividing constitutional powers across 3 distinct organs.</p>
          </div>
        </div>
      )}

      {resolvedType === 'english' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 160 100" className="w-full h-auto max-w-[160px]">
              <rect x="15" y="35" width="40" height="30" rx="6" fill="#FCE7F3" stroke="#DB2777" strokeWidth="1.5" />
              <text x="35" y="50" fill="#DB2777" fontSize="8" fontWeight="bold" textAnchor="middle">Subject</text>
              <text x="35" y="58" fill="#66736F" fontSize="6" textAnchor="middle">(The Doer)</text>

              <line x1="55" y1="50" x2="65" y2="50" stroke="#94A3B8" strokeWidth="1.5" />

              <rect x="65" y="35" width="38" height="30" rx="6" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
              <text x="84" y="50" fill="#7C3AED" fontSize="8" fontWeight="bold" textAnchor="middle">Verb</text>
              <text x="84" y="58" fill="#66736F" fontSize="6" textAnchor="middle">(Action)</text>

              <line x1="103" y1="50" x2="113" y2="50" stroke="#94A3B8" strokeWidth="1.5" />

              <rect x="113" y="35" width="40" height="30" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
              <text x="133" y="50" fill="#16A34A" fontSize="8" fontWeight="bold" textAnchor="middle">Object</text>
              <text x="133" y="58" fill="#66736F" fontSize="6" textAnchor="middle">(Receiver)</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#004D40] block">Grammar Syntax &amp; Concord</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">S + V + O</div>
            <p className="text-[10.5px] text-[#66736F]">Singular subjects take singular verbs; plural subjects take plural verbs.</p>
          </div>
        </div>
      )}
    </div>
  );
};
