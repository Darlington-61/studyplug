import React, { useState } from 'react';

interface FormulaSheetModalProps {
  onClose: () => void;
}

interface Formula {
  title: string;
  formula: string;
  meaning?: string;
}

interface FormulaSection {
  topic: string;
  formulas: Formula[];
}

const MATHS: FormulaSection[] = [
  {
    topic: 'Algebra',
    formulas: [
      { title: 'Quadratic Formula', formula: 'x = [-b ± √(b²-4ac)] / 2a', meaning: 'Roots of ax² + bx + c = 0' },
      { title: 'Sum of AP', formula: 'Sₙ = n/2 [2a + (n-1)d]', meaning: 'a = first term, d = common difference' },
      { title: 'nth term of AP', formula: 'Tₙ = a + (n-1)d' },
      { title: 'Sum of GP', formula: 'Sₙ = a(rⁿ - 1)/(r - 1), r≠1', meaning: 'r = common ratio' },
      { title: 'Sum to Infinity (GP)', formula: 'S∞ = a/(1-r), |r| < 1' },
      { title: 'Binomial Theorem', formula: '(a+b)ⁿ = Σ C(n,r) aⁿ⁻ʳ bʳ' },
    ]
  },
  {
    topic: 'Indices & Logarithms',
    formulas: [
      { title: 'Log Product Rule', formula: 'log(AB) = log A + log B' },
      { title: 'Log Quotient Rule', formula: 'log(A/B) = log A - log B' },
      { title: 'Log Power Rule', formula: 'log Aⁿ = n log A' },
      { title: 'Change of Base', formula: 'log_b(x) = log x / log b' },
    ]
  },
  {
    topic: 'Geometry & Mensuration',
    formulas: [
      { title: 'Area of Circle', formula: 'A = πr²' },
      { title: 'Circumference', formula: 'C = 2πr' },
      { title: 'Area of Triangle', formula: 'A = ½ × base × height' },
      { title: 'Area of Trapezium', formula: 'A = ½(a+b)h' },
      { title: 'Volume of Cylinder', formula: 'V = πr²h' },
      { title: 'Volume of Sphere', formula: 'V = 4/3 πr³' },
      { title: 'Surface Area of Sphere', formula: 'SA = 4πr²' },
      { title: 'Pythagoras Theorem', formula: 'a² + b² = c²' },
    ]
  },
  {
    topic: 'Trigonometry',
    formulas: [
      { title: 'SOH-CAH-TOA', formula: 'sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj' },
      { title: 'Sine Rule', formula: 'a/sin A = b/sin B = c/sin C' },
      { title: 'Cosine Rule', formula: 'a² = b² + c² - 2bc cos A' },
      { title: 'Area of Triangle', formula: 'A = ½ab sin C' },
    ]
  },
  {
    topic: 'Statistics & Probability',
    formulas: [
      { title: 'Mean', formula: 'x̄ = Σfx / Σf' },
      { title: 'Standard Deviation', formula: 'σ = √[Σf(x-x̄)²/Σf]' },
      { title: 'Probability', formula: 'P(A) = n(A)/n(S)' },
      { title: 'Permutation', formula: 'P(n,r) = n!/(n-r)!' },
      { title: 'Combination', formula: 'C(n,r) = n!/[r!(n-r)!]' },
    ]
  },
];

const PHYSICS: FormulaSection[] = [
  {
    topic: 'Mechanics',
    formulas: [
      { title: "Newton's 2nd Law", formula: 'F = ma', meaning: 'Force = mass × acceleration' },
      { title: 'Weight', formula: 'W = mg', meaning: 'g = 10 m/s² (or 9.8 m/s²)' },
      { title: 'Momentum', formula: 'p = mv' },
      { title: 'Impulse', formula: 'J = Ft = Δp' },
      { title: 'Work Done', formula: 'W = Fd cos θ' },
      { title: 'Kinetic Energy', formula: 'KE = ½mv²' },
      { title: 'Potential Energy', formula: 'PE = mgh' },
      { title: 'Power', formula: 'P = W/t = Fv' },
      { title: 'Equations of Motion', formula: 'v = u + at\ns = ut + ½at²\nv² = u² + 2as' },
    ]
  },
  {
    topic: 'Waves & Sound',
    formulas: [
      { title: 'Wave Speed', formula: 'v = fλ', meaning: 'f = frequency, λ = wavelength' },
      { title: 'Period', formula: 'T = 1/f' },
      { title: 'Speed of Sound (Air)', formula: 'v ≈ 330 m/s at 0°C' },
    ]
  },
  {
    topic: 'Electricity',
    formulas: [
      { title: "Ohm's Law", formula: 'V = IR' },
      { title: 'Power (Electrical)', formula: 'P = IV = I²R = V²/R' },
      { title: 'Resistors in Series', formula: 'R_T = R₁ + R₂ + R₃' },
      { title: 'Resistors in Parallel', formula: '1/R_T = 1/R₁ + 1/R₂ + 1/R₃' },
      { title: 'Charge', formula: 'Q = It', meaning: 'Charge = Current × Time' },
      { title: 'Energy', formula: 'E = VIt = Pt' },
    ]
  },
  {
    topic: 'Light & Optics',
    formulas: [
      { title: 'Mirror Formula', formula: '1/f = 1/v + 1/u' },
      { title: 'Magnification', formula: 'm = v/u = image height/object height' },
      { title: "Snell's Law", formula: 'n₁ sin θ₁ = n₂ sin θ₂' },
      { title: 'Speed of Light', formula: 'c = 3 × 10⁸ m/s' },
    ]
  },
  {
    topic: 'Heat & Thermodynamics',
    formulas: [
      { title: 'Heat Gained/Lost', formula: 'Q = mcΔT', meaning: 'c = specific heat capacity' },
      { title: 'Latent Heat', formula: 'Q = mL' },
      { title: 'Boyle\'s Law', formula: 'P₁V₁ = P₂V₂ (constant T)' },
      { title: 'Charles\' Law', formula: 'V₁/T₁ = V₂/T₂ (constant P)' },
      { title: 'General Gas Law', formula: 'P₁V₁/T₁ = P₂V₂/T₂' },
    ]
  },
];

const CHEMISTRY: FormulaSection[] = [
  {
    topic: 'Moles & Stoichiometry',
    formulas: [
      { title: 'Number of Moles', formula: 'n = m/M', meaning: 'm = mass (g), M = molar mass (g/mol)' },
      { title: 'Moles from Volume (Gas)', formula: 'n = V/22.4 (at STP)' },
      { title: 'Concentration', formula: 'C = n/V', meaning: 'V in litres' },
      { title: 'Moles from Conc.', formula: 'n = C × V' },
      { title: "Avogadro's Number", formula: 'Nₐ = 6.02 × 10²³ mol⁻¹' },
    ]
  },
  {
    topic: 'Acids, Bases & Salts',
    formulas: [
      { title: 'pH Definition', formula: 'pH = -log[H⁺]' },
      { title: 'pOH Definition', formula: 'pOH = -log[OH⁻]' },
      { title: 'pH + pOH', formula: 'pH + pOH = 14 (at 25°C)' },
      { title: 'Kw', formula: 'Kw = [H⁺][OH⁻] = 10⁻¹⁴' },
    ]
  },
  {
    topic: 'Electrochemistry',
    formulas: [
      { title: "Faraday's 1st Law", formula: 'm = (Q × M) / (n × F)', meaning: 'F = 96,500 C/mol' },
      { title: 'Charge', formula: 'Q = It' },
    ]
  },
  {
    topic: 'Thermochemistry',
    formulas: [
      { title: 'Hess\'s Law', formula: 'ΔH_reaction = ΣΔH_products - ΣΔH_reactants' },
      { title: 'Bond Energy', formula: 'ΔH = Energy in - Energy out' },
      { title: 'Heat of Reaction', formula: 'q = mcΔT' },
    ]
  },
  {
    topic: 'Gases',
    formulas: [
      { title: 'Ideal Gas Law', formula: 'PV = nRT', meaning: 'R = 8.314 J/mol·K' },
      { title: "Graham's Law", formula: 'rate₁/rate₂ = √(M₂/M₁)', meaning: 'Diffusion relative to molar mass' },
    ]
  },
];

const SUBJECTS = [
  { id: 'maths', label: 'Mathematics', emoji: '📐', data: MATHS, color: '#1565C0' },
  { id: 'physics', label: 'Physics', emoji: '⚡', data: PHYSICS, color: '#1B5E20' },
  { id: 'chemistry', label: 'Chemistry', emoji: '🧪', data: CHEMISTRY, color: '#BF360C' },
];

export const FormulaSheetModal: React.FC<FormulaSheetModalProps> = ({ onClose }) => {
  const [activeSubject, setActiveSubject] = useState('maths');
  const [openSection, setOpenSection] = useState<string | null>(null);

  const subject = SUBJECTS.find(s => s.id === activeSubject)!;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F7F9F8] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-4 flex items-center space-x-3 shrink-0">
        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer"
        >
          ←
        </button>
        <div className="flex-1">
          <h2 className="font-extrabold text-[16px] leading-none">Formula Sheet</h2>
          <p className="text-[11px] text-emerald-300 mt-0.5">Quick reference — JAMB · WAEC · NECO</p>
        </div>
        <span className="text-2xl">📋</span>
      </div>

      {/* Subject Tabs */}
      <div className="bg-white border-b border-[#E4EAE8] px-4 py-2 flex space-x-2 shrink-0">
        {SUBJECTS.map(s => (
          <button
            key={s.id}
            type="button"
            onClick={() => { setActiveSubject(s.id); setOpenSection(null); }}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-[10px] text-[12px] font-bold transition ${
              activeSubject === s.id
                ? 'text-white shadow-sm'
                : 'bg-[#F0F4F2] text-[#66736F] hover:bg-[#E4EAE8]'
            }`}
            style={activeSubject === s.id ? { backgroundColor: s.color } : {}}
          >
            <span>{s.emoji}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {/* Formula List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {subject.data.map(section => {
          const isOpen = openSection === section.topic;
          return (
            <div key={section.topic} className="rounded-[16px] bg-white border border-[#E4EAE8] overflow-hidden shadow-sm">
              <button
                type="button"
                onClick={() => setOpenSection(isOpen ? null : section.topic)}
                className="w-full flex items-center justify-between px-4 py-3 text-left"
              >
                <span className="font-bold text-[13.5px] text-[#10201D]">{section.topic}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-semibold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: subject.color }}>
                    {section.formulas.length}
                  </span>
                  <span className="text-[#66736F] text-sm">{isOpen ? '▲' : '▼'}</span>
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-[#E4EAE8] divide-y divide-[#F0F4F2]">
                  {section.formulas.map(f => (
                    <div key={f.title} className="px-4 py-3">
                      <p className="text-[11.5px] font-semibold text-[#66736F] mb-0.5">{f.title}</p>
                      <p
                        className="font-mono text-[13px] font-bold px-2 py-1.5 rounded-[8px] whitespace-pre-line"
                        style={{ backgroundColor: subject.color + '15', color: subject.color }}
                      >
                        {f.formula}
                      </p>
                      {f.meaning && (
                        <p className="text-[10.5px] text-[#66736F] mt-1 italic">{f.meaning}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
