import React from 'react';

export type DiagramType =
  | 'kinematics'
  | 'projectile'
  | 'shm'
  | 'waves'
  | 'circuit'
  | 'geometry'
  | 'pythagoras'
  | 'venn'
  | 'quadratic'
  | 'circle'
  | 'bearing'
  | 'atom'
  | 'redox'
  | 'acids'
  | 'bonding'
  | 'cell'
  | 'heart'
  | 'photosynthesis'
  | 'respiration'
  | 'genetics'
  | 'digestive'
  | 'economics'
  | 'ppc'
  | 'elasticity'
  | 'government'
  | 'english'
  | 'optics'
  | 'general';

interface EducationalDiagramProps {
  type?: DiagramType;
  topicTitle?: string;
  className?: string;
}

export const EducationalDiagram: React.FC<EducationalDiagramProps> = ({
  type = 'general',
  topicTitle = '',
  className = ''
}) => {
  // Infer type if general
  let resolvedType: DiagramType = type;
  if (resolvedType === 'general') {
    const t = topicTitle.toLowerCase();
    if (t.includes('venn') || t.includes('set theory') || t.includes('sets')) {
      resolvedType = 'venn';
    } else if (t.includes('pythag') || t.includes('trig') || t.includes('sine') || t.includes('cosine') || t.includes('tangent') || t.includes('soh cah')) {
      resolvedType = 'pythagoras';
    } else if (t.includes('quadra') || t.includes('parabola') || t.includes('polynomial')) {
      resolvedType = 'quadratic';
    } else if (t.includes('circle theorem') || t.includes('cyclic') || t.includes('chord') || t.includes('tangent to circle') || t.includes('subtend')) {
      resolvedType = 'circle';
    } else if (t.includes('bearing') || t.includes('compass') || t.includes('elevation') || t.includes('depression')) {
      resolvedType = 'bearing';
    } else if (t.includes('projectile') || t.includes('trajectory') || t.includes('flight time')) {
      resolvedType = 'projectile';
    } else if (t.includes('shm') || t.includes('harmonic') || t.includes('pendulum') || t.includes('oscillat')) {
      resolvedType = 'shm';
    } else if (t.includes('optic') || t.includes('lens') || t.includes('refraction') || t.includes('reflection') || t.includes('mirror') || t.includes('focal')) {
      resolvedType = 'optics';
    } else if (t.includes('wave') || t.includes('sound') || t.includes('light') || t.includes('wavelength') || t.includes('frequency') || t.includes('diffraction')) {
      resolvedType = 'waves';
    } else if (t.includes('electr') || t.includes('circuit') || t.includes('current') || t.includes('ohm') || t.includes('resistor') || t.includes('voltage') || t.includes('capacitor')) {
      resolvedType = 'circuit';
    } else if (t.includes('motion') || t.includes('force') || t.includes('velocity') || t.includes('acceleration') || t.includes('gravity') || t.includes('momentum') || t.includes('newton') || t.includes('friction')) {
      resolvedType = 'kinematics';
    } else if (t.includes('redox') || t.includes('galvanic') || t.includes('daniell') || t.includes('electrolysis') || t.includes('anode') || t.includes('cathode') || t.includes('electrode')) {
      resolvedType = 'redox';
    } else if (t.includes('acid') || t.includes('base') || t.includes('ph') || t.includes('alkali') || t.includes('titrat') || t.includes('indicator') || t.includes('neutraliz')) {
      resolvedType = 'acids';
    } else if (t.includes('covalent') || t.includes('ionic bond') || t.includes('electrovalent') || t.includes('metallic bond') || t.includes('chemical bond')) {
      resolvedType = 'bonding';
    } else if (t.includes('atom') || t.includes('electron') || t.includes('proton') || t.includes('neutron') || t.includes('periodic') || t.includes('isotope')) {
      resolvedType = 'atom';
    } else if (t.includes('heart') || t.includes('circulat') || t.includes('blood') || t.includes('artery') || t.includes('vein') || t.includes('aorta')) {
      resolvedType = 'heart';
    } else if (t.includes('photosynth') || t.includes('chloroplast') || t.includes('chlorophyll') || t.includes('light reaction') || t.includes('dark reaction')) {
      resolvedType = 'photosynthesis';
    } else if (t.includes('respir') || t.includes('glycolysis') || t.includes('krebs') || t.includes('aerobic') || t.includes('anaerobic')) {
      resolvedType = 'respiration';
    } else if (t.includes('genet') || t.includes('punnett') || t.includes('mendel') || t.includes('allele') || t.includes('dna') || t.includes('chromosom') || t.includes('heredity')) {
      resolvedType = 'genetics';
    } else if (t.includes('digest') || t.includes('alimentary') || t.includes('enzyme') || t.includes('pepsin') || t.includes('amylase') || t.includes('stomach') || t.includes('intestine')) {
      resolvedType = 'digestive';
    } else if (t.includes('cell') || t.includes('plant cell') || t.includes('animal cell') || t.includes('mitochondria') || t.includes('osmosis') || t.includes('diffusion')) {
      resolvedType = 'cell';
    } else if (t.includes('elastic') || t.includes('ped') || t.includes('pes') || t.includes('inelastic')) {
      resolvedType = 'elasticity';
    } else if (t.includes('ppc') || t.includes('ppf') || t.includes('production possib') || t.includes('opportunity cost')) {
      resolvedType = 'ppc';
    } else if (t.includes('demand') || t.includes('supply') || t.includes('market') || t.includes('equilibrium') || t.includes('price')) {
      resolvedType = 'economics';
    } else if (t.includes('gov') || t.includes('constitution') || t.includes('arm') || t.includes('politic') || t.includes('democ') || t.includes('citizen') || t.includes('judicia') || t.includes('legislat') || t.includes('executive')) {
      resolvedType = 'government';
    } else if (t.includes('eng') || t.includes('grammar') || t.includes('verb') || t.includes('noun') || t.includes('tense') || t.includes('sentence') || t.includes('concord') || t.includes('speech')) {
      resolvedType = 'english';
    } else if (t.includes('algebra') || t.includes('geo') || t.includes('graph') || t.includes('calculus') || t.includes('equation') || t.includes('math') || t.includes('number') || t.includes('matrix')) {
      resolvedType = 'geometry';
    } else {
      resolvedType = 'geometry';
    }
  }

  return (
    <div className={`w-full rounded-[16px] overflow-hidden border border-[#E4EAE8] bg-[#F1F5F4] p-4 shadow-subtle ${className}`}>
      {/* 1. KINEMATICS */}
      {resolvedType === 'kinematics' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
              <path d="M 0 85 Q 60 55 140 85 T 280 85 L 280 120 L 0 120 Z" fill="#D1FAE5" opacity="0.6" />
              <rect x="0" y="85" width="280" height="35" fill="#475569" />
              <line x1="0" y1="102" x2="280" y2="102" stroke="#F1F5F4" strokeWidth="2.5" strokeDasharray="14 10" />
              <g transform="translate(60, 28)">
                <line x1="0" y1="0" x2="90" y2="0" stroke="#001028" strokeWidth="2" strokeDasharray="3 3" />
                <polygon points="90,-3 98,0 90,3" fill="#001028" />
                <text x="45" y="-6" fill="#001028" fontSize="10" fontWeight="bold" textAnchor="middle">Velocity (v) →</text>
              </g>
              <g transform="translate(70, 48)">
                <path d="M 10 26 L 25 10 Q 35 4 55 4 L 95 4 Q 105 4 115 14 L 125 26 L 135 26 Q 138 26 138 29 L 138 34 Q 138 36 135 36 L 5 36 Q 2 36 2 34 L 2 29 Q 2 26 5 26 Z" fill="url(#carGrad)" />
                <path d="M 30 11 L 55 11 L 55 24 L 18 24 Z" fill="#BAE6FD" />
                <path d="M 60 11 L 95 11 L 110 24 L 60 24 Z" fill="#BAE6FD" />
                <circle cx="28" cy="36" r="9" fill="#1E293B" />
                <circle cx="28" cy="36" r="4.5" fill="#94A3B8" />
                <circle cx="106" cy="36" r="9" fill="#1E293B" />
                <circle cx="106" cy="36" r="4.5" fill="#94A3B8" />
                <polygon points="135,28 140,29 135,31" fill="#FEF08A" />
              </g>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1.5 shadow-xs text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Equations of Linear Motion</span>
            <div className="space-y-1 text-[13px] sm:text-[14px] font-semibold text-[#10201D] font-mono">
              <div className="p-1 rounded bg-[#F7F9F8]">v = u + at</div>
              <div className="p-1 rounded bg-[#F7F9F8]">s = ut + ½at²</div>
              <div className="p-1 rounded bg-[#F7F9F8]">v² = u² + 2as</div>
            </div>
            <p className="text-[10.5px] text-[#66736F] leading-tight pt-0.5">
              <span className="font-semibold text-[#10201D]">u</span>: initial velocity, <span className="font-semibold text-[#10201D]">v</span>: final velocity, <span className="font-semibold text-[#10201D]">a</span>: acceleration, <span className="font-semibold text-[#10201D]">s</span>: distance.
            </p>
          </div>
        </div>
      )}

      {/* 2. PROJECTILE MOTION */}
      {resolvedType === 'projectile' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 240 120" className="w-full h-auto max-w-[230px]">
              <line x1="20" y1="105" x2="220" y2="105" stroke="#475569" strokeWidth="2" />
              <line x1="20" y1="105" x2="20" y2="15" stroke="#94A3B8" strokeWidth="1.5" />
              <path d="M 20 105 Q 120 15 220 105" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="4 3" />
              <circle cx="20" cy="105" r="4" fill="#E11D48" />
              <circle cx="120" cy="60" r="4" fill="#0284C7" />
              <circle cx="220" cy="105" r="4" fill="#16A34A" />
              {/* Velocity vector */}
              <line x1="20" y1="105" x2="60" y2="65" stroke="#E11D48" strokeWidth="2" />
              <polygon points="60,65 52,69 57,75" fill="#E11D48" />
              <text x="50" y="60" fill="#E11D48" fontSize="9" fontWeight="bold">u</text>
              <text x="40" y="100" fill="#001028" fontSize="8" fontWeight="bold">θ</text>
              {/* Peak Height */}
              <line x1="120" y1="60" x2="120" y2="105" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="125" y="85" fill="#0284C7" fontSize="8" fontWeight="bold">H_max</text>
              {/* Range */}
              <line x1="20" y1="113" x2="220" y2="113" stroke="#16A34A" strokeWidth="1.5" />
              <text x="120" y="119" fill="#16A34A" fontSize="8" fontWeight="bold" textAnchor="middle">Range (R)</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Projectile Trajectory</span>
            <div className="space-y-1 font-mono text-[12.5px] font-bold text-[#10201D]">
              <div className="p-1 rounded bg-[#F7F9F8]">T = 2u sin θ / g</div>
              <div className="p-1 rounded bg-[#F7F9F8]">H = u² sin²θ / (2g)</div>
              <div className="p-1 rounded bg-[#F7F9F8]">R = u² sin(2θ) / g</div>
            </div>
            <p className="text-[10px] text-[#66736F]">Max range occurs at launch angle θ = 45° where sin(2θ) = 1.</p>
          </div>
        </div>
      )}

      {/* 3. VENN DIAGRAM */}
      {resolvedType === 'venn' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 220 120" className="w-full h-auto max-w-[210px]">
              <rect x="10" y="10" width="200" height="100" rx="8" fill="#F8FAFC" stroke="#001028" strokeWidth="1.5" />
              <text x="24" y="26" fill="#001028" fontSize="10" fontWeight="bold">ξ (Universal)</text>
              {/* Set A */}
              <circle cx="85" cy="62" r="38" fill="#93C5FD" fillOpacity="0.45" stroke="#2563EB" strokeWidth="2" />
              {/* Set B */}
              <circle cx="135" cy="62" r="38" fill="#FCA5A5" fillOpacity="0.45" stroke="#DC2626" strokeWidth="2" />
              <text x="65" y="65" fill="#1E40AF" fontSize="11" fontWeight="bold">A</text>
              <text x="150" y="65" fill="#991B1B" fontSize="11" fontWeight="bold">B</text>
              <text x="110" y="65" fill="#001028" fontSize="9" fontWeight="bold" textAnchor="middle">A ∩ B</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Set Theory &amp; Venn Diagrams</span>
            <div className="p-1.5 rounded bg-[#F7F9F8] font-mono text-[12.5px] font-bold text-[#10201D]">
              n(A ∪ B) = n(A) + n(B) - n(A ∩ B)
            </div>
            <p className="text-[10px] text-[#66736F]">
              <span className="font-semibold text-[#10201D]">A ∩ B</span>: Intersection (both), <span className="font-semibold text-[#10201D]">A ∪ B</span>: Union (either or both), <span className="font-semibold text-[#10201D]">A'</span>: Complement (outside A).
            </p>
          </div>
        </div>
      )}

      {/* 4. PYTHAGORAS & TRIGONOMETRY */}
      {resolvedType === 'pythagoras' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-auto max-w-[190px]">
              <polygon points="30,100 160,100 160,25" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
              {/* Right angle symbol */}
              <rect x="145" y="85" width="15" height="15" fill="none" stroke="#2563EB" strokeWidth="1.5" />
              {/* Angle theta */}
              <path d="M 55 100 A 25 25 0 0 0 50 88" fill="none" stroke="#DC2626" strokeWidth="1.5" />
              <text x="58" y="93" fill="#DC2626" fontSize="9" fontWeight="bold">θ</text>
              <text x="95" y="112" fill="#001028" fontSize="9" fontWeight="bold" textAnchor="middle">Adjacent (a)</text>
              <text x="175" y="65" fill="#001028" fontSize="9" fontWeight="bold">Opp (b)</text>
              <text x="85" y="52" fill="#2563EB" fontSize="9" fontWeight="bold">Hypotenuse (c)</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Pythagoras &amp; SOH CAH TOA</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[12.5px] font-bold text-[#10201D]">
              c² = a² + b² (Hypotenuse)
            </div>
            <div className="space-y-0.5 text-[11px] font-mono text-[#001028]">
              <div>sin θ = Opp / Hyp</div>
              <div>cos θ = Adj / Hyp | tan θ = Opp / Adj</div>
            </div>
            <p className="text-[10px] text-[#66736F]">Special Angles: sin 30° = ½, cos 60° = ½, tan 45° = 1.</p>
          </div>
        </div>
      )}

      {/* 5. QUADRATIC PARABOLA */}
      {resolvedType === 'quadratic' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-auto max-w-[190px]">
              <line x1="20" y1="85" x2="180" y2="85" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="100" y1="110" x2="100" y2="10" stroke="#94A3B8" strokeWidth="1.5" />
              {/* Parabola */}
              <path d="M 40 15 Q 100 125 160 15" fill="none" stroke="#2563EB" strokeWidth="2.5" />
              {/* Roots */}
              <circle cx="58" cy="85" r="3.5" fill="#DC2626" />
              <circle cx="142" cy="85" r="3.5" fill="#DC2626" />
              <text x="52" y="78" fill="#DC2626" fontSize="8" fontWeight="bold">x₁</text>
              <text x="144" y="78" fill="#DC2626" fontSize="8" fontWeight="bold">x₂</text>
              {/* Vertex */}
              <circle cx="100" cy="98" r="3" fill="#16A34A" />
              <text x="100" y="112" fill="#16A34A" fontSize="7.5" fontWeight="bold" textAnchor="middle">Vertex (-b/2a)</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Quadratic Formula &amp; Roots</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[12px] font-bold text-[#10201D]">
              x = [-b ± √(b² - 4ac)] / 2a
            </div>
            <div className="text-[10.5px] text-[#66736F] leading-tight space-y-0.5">
              <div>Discriminant Δ = b² - 4ac:</div>
              <div>• Δ &gt; 0: Two real distinct roots</div>
              <div>• Δ = 0: Two equal roots (tangent)</div>
              <div>• Δ &lt; 0: Complex / no real roots</div>
            </div>
          </div>
        </div>
      )}

      {/* 6. REDOX & GALVANIC CELL */}
      {resolvedType === 'redox' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 220 120" className="w-full h-auto max-w-[210px]">
              {/* Beakers */}
              <rect x="25" y="45" width="60" height="60" rx="4" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
              <rect x="135" y="45" width="60" height="60" rx="4" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
              {/* Electrodes */}
              <rect x="45" y="30" width="12" height="65" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
              <text x="51" y="24" fill="#001028" fontSize="7" fontWeight="bold" textAnchor="middle">Zn Anode (-)</text>
              <rect x="163" y="30" width="12" height="65" fill="#F97316" stroke="#C2410C" strokeWidth="1" />
              <text x="169" y="24" fill="#001028" fontSize="7" fontWeight="bold" textAnchor="middle">Cu Cathode (+)</text>
              {/* Salt bridge */}
              <path d="M 68 55 C 68 25, 152 25, 152 55" fill="none" stroke="#CA8A04" strokeWidth="5" strokeLinecap="round" />
              <text x="110" y="32" fill="#CA8A04" fontSize="7" fontWeight="bold" textAnchor="middle">Salt Bridge</text>
              {/* External wire with voltmeter */}
              <path d="M 51 30 L 51 10 L 169 10 L 169 30" fill="none" stroke="#2563EB" strokeWidth="1.5" />
              <circle cx="110" cy="10" r="8" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
              <text x="110" y="13" fill="#2563EB" fontSize="8" fontWeight="bold" textAnchor="middle">V</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Galvanic / Electrochemical Cell</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[11.5px] font-bold text-[#10201D]">
              E°cell = E°cathode - E°anode = +1.10 V
            </div>
            <div className="text-[10px] text-[#66736F] leading-tight space-y-0.5">
              <div>• <span className="font-semibold text-[#10201D]">Anode (Oxidation):</span> Zn → Zn²⁺ + 2e⁻ (Loss of electrons)</div>
              <div>• <span className="font-semibold text-[#10201D]">Cathode (Reduction):</span> Cu²⁺ + 2e⁻ → Cu (Gain of electrons)</div>
              <div>• Electrons flow externally from <span className="font-semibold text-[#10201D]">Anode to Cathode</span>.</div>
            </div>
          </div>
        </div>
      )}

      {/* 7. ACIDS, BASES & pH SCALE */}
      {resolvedType === 'acids' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 220 120" className="w-full h-auto max-w-[210px]">
              <defs>
                <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="25%" stopColor="#F97316" />
                  <stop offset="50%" stopColor="#22C55E" />
                  <stop offset="75%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#7E22CE" />
                </linearGradient>
              </defs>
              <rect x="15" y="45" width="190" height="25" rx="6" fill="url(#phGrad)" />
              <line x1="110" y1="40" x2="110" y2="75" stroke="#001028" strokeWidth="2" />
              <text x="110" y="32" fill="#16A34A" fontSize="9" fontWeight="bold" textAnchor="middle">pH 7 (Neutral)</text>
              <text x="25" y="85" fill="#DC2626" fontSize="9" fontWeight="bold">0 (Strong Acid)</text>
              <text x="195" y="85" fill="#7E22CE" fontSize="9" fontWeight="bold" textAnchor="end">14 (Strong Base)</text>
              <text x="45" y="105" fill="#66736F" fontSize="8">[H⁺] &gt; [OH⁻]</text>
              <text x="175" y="105" fill="#66736F" fontSize="8" textAnchor="end">[OH⁻] &gt; [H⁺]</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Acids, Bases &amp; pH Scale</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[12.5px] font-bold text-[#10201D]">
              pH = -log₁₀[H⁺] | pH + pOH = 14
            </div>
            <div className="text-[10px] text-[#66736F] leading-tight space-y-0.5">
              <div>• Litmus: Acid turns blue to red; Base turns red to blue.</div>
              <div>• Methyl Orange: Red in acid, yellow in base.</div>
              <div>• Phenolphthalein: Colorless in acid, pink in base.</div>
            </div>
          </div>
        </div>
      )}

      {/* 8. PHOTOSYNTHESIS */}
      {resolvedType === 'photosynthesis' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-auto max-w-[190px]">
              {/* Leaf shape */}
              <path d="M 30 60 Q 100 15 170 60 Q 100 105 30 60 Z" fill="#BBF7D0" stroke="#16A34A" strokeWidth="2" />
              <line x1="30" y1="60" x2="170" y2="60" stroke="#15803D" strokeWidth="1.5" />
              {/* Sun rays */}
              <circle cx="35" cy="20" r="12" fill="#FDE047" stroke="#EAB308" strokeWidth="1.5" />
              <text x="35" y="23" fill="#854D0E" fontSize="6" fontWeight="bold" textAnchor="middle">Sunlight</text>
              {/* Inputs */}
              <text x="50" y="85" fill="#0284C7" fontSize="8" fontWeight="bold">H₂O + CO₂</text>
              {/* Outputs */}
              <text x="145" y="85" fill="#16A34A" fontSize="8" fontWeight="bold">Glucose + O₂</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Photosynthesis in Chloroplast</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[11px] font-bold text-[#10201D]">
              6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂
            </div>
            <div className="text-[10px] text-[#66736F] leading-tight space-y-0.5">
              <div>• <span className="font-semibold text-[#10201D]">Light Reaction:</span> In thylakoids (water split, O₂ released).</div>
              <div>• <span className="font-semibold text-[#10201D]">Dark Reaction (Calvin):</span> In stroma (CO₂ fixed into glucose).</div>
            </div>
          </div>
        </div>
      )}

      {/* 9. HUMAN HEART & CIRCULATION */}
      {resolvedType === 'heart' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-full h-auto max-w-[190px]">
              {/* Heart box diagram (4 chambers) */}
              <rect x="35" y="25" width="60" height="40" rx="4" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
              <text x="65" y="48" fill="#1E40AF" fontSize="8" fontWeight="bold" textAnchor="middle">Right Atrium</text>
              <rect x="105" y="25" width="60" height="40" rx="4" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
              <text x="135" y="48" fill="#991B1B" fontSize="8" fontWeight="bold" textAnchor="middle">Left Atrium</text>
              <rect x="35" y="70" width="60" height="42" rx="4" fill="#BFDBFE" stroke="#2563EB" strokeWidth="1.5" />
              <text x="65" y="93" fill="#1E40AF" fontSize="8" fontWeight="bold" textAnchor="middle">Right Ventricle</text>
              <rect x="105" y="70" width="60" height="42" rx="4" fill="#FECACA" stroke="#DC2626" strokeWidth="1.5" />
              <text x="135" y="93" fill="#991B1B" fontSize="8" fontWeight="bold" textAnchor="middle">Left Ventricle</text>
              <text x="65" y="16" fill="#2563EB" fontSize="7" fontWeight="bold" textAnchor="middle">Deoxygenated (Blue)</text>
              <text x="135" y="16" fill="#DC2626" fontSize="7" fontWeight="bold" textAnchor="middle">Oxygenated (Red)</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Human Double Circulation</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[11.5px] font-bold text-[#10201D]">
              Pulmonary + Systemic Circulation
            </div>
            <div className="text-[10px] text-[#66736F] leading-tight space-y-0.5">
              <div>• <span className="font-semibold text-[#10201D]">Left Ventricle</span> has thickest muscular wall (pumps to whole body via Aorta).</div>
              <div>• Valves (Tricuspid &amp; Bicuspid) prevent backflow of blood.</div>
            </div>
          </div>
        </div>
      )}

      {/* 10. GENETICS PUNNETT SQUARE */}
      {resolvedType === 'genetics' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 180 120" className="w-full h-auto max-w-[170px]">
              <rect x="50" y="30" width="100" height="70" fill="#FFFFFF" stroke="#001028" strokeWidth="1.5" />
              <line x1="100" y1="30" x2="100" y2="100" stroke="#001028" strokeWidth="1.5" />
              <line x1="50" y1="65" x2="150" y2="65" stroke="#001028" strokeWidth="1.5" />
              {/* Gametes */}
              <text x="75" y="24" fill="#2563EB" fontSize="10" fontWeight="bold" textAnchor="middle">B</text>
              <text x="125" y="24" fill="#2563EB" fontSize="10" fontWeight="bold" textAnchor="middle">b</text>
              <text x="38" y="52" fill="#DC2626" fontSize="10" fontWeight="bold" textAnchor="middle">B</text>
              <text x="38" y="87" fill="#DC2626" fontSize="10" fontWeight="bold" textAnchor="middle">b</text>
              {/* Offspring */}
              <text x="75" y="52" fill="#001028" fontSize="10" fontWeight="bold" textAnchor="middle">BB</text>
              <text x="125" y="52" fill="#001028" fontSize="10" fontWeight="bold" textAnchor="middle">Bb</text>
              <text x="75" y="87" fill="#001028" fontSize="10" fontWeight="bold" textAnchor="middle">Bb</text>
              <text x="125" y="87" fill="#001028" fontSize="10" fontWeight="bold" textAnchor="middle">bb</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Mendelian Monohybrid Cross</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[11.5px] font-bold text-[#10201D]">
              Phenotype Ratio = 3 : 1
            </div>
            <div className="text-[10px] text-[#66736F] leading-tight space-y-0.5">
              <div>• Genotype Ratio: 1 BB : 2 Bb : 1 bb (1 : 2 : 1).</div>
              <div>• Dominant allele (B) masks recessive allele (b).</div>
            </div>
          </div>
        </div>
      )}

      {/* 11. PPC / OPPORTUNITY COST */}
      {resolvedType === 'ppc' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 180 120" className="w-full h-auto max-w-[170px]">
              <line x1="30" y1="100" x2="160" y2="100" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="30" y1="100" x2="30" y2="15" stroke="#94A3B8" strokeWidth="1.5" />
              {/* PPC curve */}
              <path d="M 30 25 Q 95 35 150 100" fill="none" stroke="#2563EB" strokeWidth="2.5" />
              <circle cx="85" cy="55" r="3.5" fill="#16A34A" />
              <text x="92" y="52" fill="#16A34A" fontSize="7.5" fontWeight="bold">A (Efficient)</text>
              <circle cx="60" cy="75" r="3.5" fill="#CA8A04" />
              <text x="68" y="78" fill="#CA8A04" fontSize="7.5" fontWeight="bold">B (Inefficient)</text>
              <circle cx="125" cy="35" r="3.5" fill="#DC2626" />
              <text x="132" y="34" fill="#DC2626" fontSize="7.5" fontWeight="bold">C (Unattainable)</text>
              <text x="25" y="14" fill="#66736F" fontSize="7.5">Capital</text>
              <text x="160" y="108" fill="#66736F" fontSize="7.5">Consumer</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Production Possibility Curve</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[11.5px] font-bold text-[#10201D]">
              Opportunity Cost = ΔCapital / ΔConsumer
            </div>
            <div className="text-[10px] text-[#66736F] leading-tight space-y-0.5">
              <div>• On curve: Maximum productive efficiency.</div>
              <div>• Inside curve: Idle/underemployed resources.</div>
              <div>• Outside curve: Unattainable with current tech.</div>
            </div>
          </div>
        </div>
      )}

      {/* 12. ELASTICITY */}
      {resolvedType === 'elasticity' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 180 120" className="w-full h-auto max-w-[170px]">
              <line x1="25" y1="100" x2="160" y2="100" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="25" y1="100" x2="25" y2="15" stroke="#94A3B8" strokeWidth="1.5" />
              {/* Elastic (gentle) */}
              <line x1="35" y1="35" x2="145" y2="85" stroke="#2563EB" strokeWidth="2" />
              <text x="148" y="88" fill="#2563EB" fontSize="8" fontWeight="bold">Elastic (|Ed| &gt; 1)</text>
              {/* Inelastic (steep) */}
              <line x1="60" y1="20" x2="95" y2="95" stroke="#DC2626" strokeWidth="2" />
              <text x="100" y="35" fill="#DC2626" fontSize="8" fontWeight="bold">Inelastic (|Ed| &lt; 1)</text>
              <text x="20" y="14" fill="#66736F" fontSize="8">Price</text>
              <text x="155" y="108" fill="#66736F" fontSize="8">Qty</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Price Elasticity of Demand</span>
            <div className="p-1 rounded bg-[#F7F9F8] font-mono text-[11.5px] font-bold text-[#10201D]">
              Ed = (%Δ Quantity) / (%Δ Price)
            </div>
            <div className="text-[10px] text-[#66736F] leading-tight space-y-0.5">
              <div>• |Ed| &gt; 1: Elastic (luxuries with many substitutes)</div>
              <div>• |Ed| &lt; 1: Inelastic (necessities like salt, petrol)</div>
              <div>• |Ed| = 1: Unitary elastic</div>
            </div>
          </div>
        </div>
      )}

      {/* 13. WAVES */}
      {resolvedType === 'waves' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 240 100" className="w-full h-auto max-w-[220px]">
              <line x1="10" y1="50" x2="230" y2="50" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 10 50 Q 40 10 70 50 T 130 50 T 190 50 T 230 50" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
              <line x1="70" y1="12" x2="190" y2="12" stroke="#001028" strokeWidth="1.5" />
              <text x="130" y="8" fill="#001028" fontSize="9" fontWeight="bold" textAnchor="middle">Wavelength (λ)</text>
              <line x1="40" y1="50" x2="40" y2="12" stroke="#E11D48" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="44" y="35" fill="#E11D48" fontSize="8" fontWeight="bold">Amplitude (A)</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Wave Speed Relation</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">v = f × λ</div>
            <p className="text-[10.5px] text-[#66736F]">v = velocity (m/s), f = frequency (Hz), λ = wavelength (m).</p>
          </div>
        </div>
      )}

      {/* 14. CIRCUIT */}
      {resolvedType === 'circuit' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 220 100" className="w-full h-auto max-w-[200px]">
              <rect x="20" y="20" width="180" height="60" fill="none" stroke="#001028" strokeWidth="2.5" rx="4" />
              <line x1="100" y1="12" x2="100" y2="28" stroke="#E11D48" strokeWidth="2.5" />
              <line x1="110" y1="16" x2="110" y2="24" stroke="#1E293B" strokeWidth="2.5" />
              <text x="105" y="8" fill="#E11D48" fontSize="9" fontWeight="bold" textAnchor="middle">V (Battery)</text>
              <rect x="90" y="74" width="40" height="12" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
              <text x="110" y="96" fill="#10201D" fontSize="9" fontWeight="bold" textAnchor="middle">R (Resistor)</text>
              <polygon points="170,18 178,20 170,22" fill="#2563EB" />
              <text x="165" y="14" fill="#2563EB" fontSize="8" fontWeight="bold">I →</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Ohm's Law &amp; Circuit Rules</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">V = I × R | P = IV = I²R</div>
            <p className="text-[10.5px] text-[#66736F]">Series: R = R₁ + R₂. Parallel: 1/R = 1/R₁ + 1/R₂.</p>
          </div>
        </div>
      )}

      {/* 15. GEOMETRY / STRAIGHT LINE */}
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
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Straight Line Equation</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">y = mx + c</div>
            <p className="text-[10.5px] text-[#66736F]">m = gradient = (y₂ - y₁) / (x₂ - x₁), c = y-intercept.</p>
          </div>
        </div>
      )}

      {/* 16. ATOM */}
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
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Atomic Structure</span>
            <div className="text-[13px] font-semibold text-[#10201D] bg-[#F7F9F8] p-1 rounded">Mass = Protons + Neutrons</div>
            <p className="text-[10.5px] text-[#66736F]">Electrons revolve around nucleus in discrete energy shells (2, 8, 8).</p>
          </div>
        </div>
      )}

      {/* 17. CELL */}
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
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Cell Biology</span>
            <div className="text-[13px] font-semibold text-[#10201D] bg-[#F7F9F8] p-1 rounded">Basic Unit of Life</div>
            <p className="text-[10.5px] text-[#66736F]">Plant cells have cellulose cell wall &amp; chloroplasts; animal cells do not.</p>
          </div>
        </div>
      )}

      {/* 18. ECONOMICS (DEMAND & SUPPLY) */}
      {resolvedType === 'economics' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 160 100" className="w-full h-auto max-w-[160px]">
              <line x1="20" y1="80" x2="140" y2="80" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="30" y1="90" x2="30" y2="10" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="35" y1="20" x2="125" y2="75" stroke="#E11D48" strokeWidth="2.5" />
              <text x="128" y="78" fill="#E11D48" fontSize="8" fontWeight="bold">D</text>
              <line x1="35" y1="75" x2="125" y2="20" stroke="#16A34A" strokeWidth="2.5" />
              <text x="128" y="22" fill="#16A34A" fontSize="8" fontWeight="bold">S</text>
              <circle cx="80" cy="47.5" r="3.5" fill="#001028" />
              <text x="84" y="45" fill="#001028" fontSize="8" fontWeight="bold">E (Equilibrium)</text>
              <text x="145" y="84" fill="#66736F" fontSize="8">Qty</text>
              <text x="22" y="12" fill="#66736F" fontSize="8">Price</text>
            </svg>
          </div>
          <div className="w-full sm:w-1/2 bg-white rounded-[12px] p-3 border border-[#E4EAE8] space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Market Equilibrium</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">Quantity Demanded = Quantity Supplied</div>
            <p className="text-[10.5px] text-[#66736F]">Equilibrium price is established at the intersection of supply and demand.</p>
          </div>
        </div>
      )}

      {/* 19. GOVERNMENT */}
      {resolvedType === 'government' && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <svg viewBox="0 0 160 100" className="w-full h-auto max-w-[160px]">
              <rect x="20" y="25" width="32" height="60" rx="6" fill="#E8F5E9" stroke="#001028" strokeWidth="1.5" />
              <text x="36" y="55" fill="#001028" fontSize="7" fontWeight="bold" textAnchor="middle">Legislature</text>
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
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Separation of Powers</span>
            <div className="text-[13px] font-semibold text-[#10201D] bg-[#F7F9F8] p-1 rounded">Checks &amp; Balances</div>
            <p className="text-[10.5px] text-[#66736F]">Prevents tyranny by dividing constitutional powers across 3 distinct organs.</p>
          </div>
        </div>
      )}

      {/* 20. ENGLISH (SYNTAX & CONCORD) */}
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
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#001028] block">Grammar Syntax &amp; Concord</span>
            <div className="text-[14px] font-mono font-bold text-[#10201D] bg-[#F7F9F8] p-1.5 rounded">S + V + O</div>
            <p className="text-[10.5px] text-[#66736F]">Singular subjects take singular verbs; plural subjects take plural verbs.</p>
          </div>
        </div>
      )}
    </div>
  );
};
