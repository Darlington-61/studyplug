// physics_batch1.cjs - Questions 1 to 35 for JAMB 2024 Physics
module.exports = [
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 1,
    topic: 'Motion & Graphs',
    difficulty: 'Medium',
    text: 'The velocity-time graph represents the motion of a car moving along a straight horizontal highway. Determine the total distance travelled by the car in the 40-second interval.',
    image_svg: `<svg viewBox="0 0 450 240" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <defs>
        <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E2E8F0" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="450" height="240" fill="#F8FAFC" rx="12"/>
      <rect x="50" y="30" width="360" height="160" fill="url(#grid1)"/>
      <path d="M 50 190 L 140 70 L 320 70 L 410 190 Z" fill="#EEF2FF" stroke="#4F46E5" stroke-width="3"/>
      <!-- Axes -->
      <line x1="50" y1="190" x2="420" y2="190" stroke="#334155" stroke-width="2.5"/>
      <line x1="50" y1="190" x2="50" y2="20" stroke="#334155" stroke-width="2.5"/>
      <!-- Arrowheads -->
      <polygon points="420,186 428,190 420,194" fill="#334155"/>
      <polygon points="46,20 50,12 54,20" fill="#334155"/>
      <!-- Dashed guides -->
      <line x1="140" y1="70" x2="140" y2="190" stroke="#94A3B8" stroke-dasharray="4"/>
      <line x1="320" y1="70" x2="320" y2="190" stroke="#94A3B8" stroke-dasharray="4"/>
      <line x1="50" y1="70" x2="140" y2="70" stroke="#94A3B8" stroke-dasharray="4"/>
      <!-- Labels -->
      <text x="45" y="195" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="end">0</text>
      <text x="140" y="208" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="middle">10</text>
      <text x="320" y="208" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="middle">30</text>
      <text x="410" y="208" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="middle">40</text>
      <text x="230" y="230" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1E293B" text-anchor="middle">Time t (s)</text>
      <text x="42" y="74" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569" text-anchor="end">30</text>
      <text x="25" y="105" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1E293B" text-anchor="middle" transform="rotate(-90 25 105)">Velocity v (m/s)</text>
    </svg>`,
    option_a: '600 m',
    option_b: '900 m',
    option_c: '1,200 m',
    option_d: '750 m',
    correct_answer: 'B',
    explanation: 'Total distance travelled is equal to the area under the velocity-time graph (a trapezium):\nArea = 1/2 × (sum of parallel sides) × height\nParallel sides are: a = (30 - 10) = 20 s, and b = 40 s.\nHeight h = 30 m/s.\nDistance = 1/2 × (20 + 40) × 30 = 1/2 × 60 × 30 = 900 m.',
    tip: 'Area under a velocity-time graph always equals distance travelled; the slope (gradient) equals acceleration.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 2,
    topic: 'Projectiles',
    difficulty: 'Medium',
    text: 'A projectile is launched from ground level with an initial velocity of 50 m/s at an angle of 30° to the horizontal. Calculate the maximum height reached by the projectile. [Take g = 10 m/s²]',
    image_svg: null,
    option_a: '31.25 m',
    option_b: '62.50 m',
    option_c: '125.00 m',
    option_d: '15.60 m',
    correct_answer: 'A',
    explanation: 'Maximum height H = (u² sin² θ) / (2g).\nu = 50 m/s, θ = 30°, sin 30° = 0.5.\nH = (50² × (0.5)²) / (2 × 10) = (2500 × 0.25) / 20 = 625 / 20 = 31.25 m.',
    tip: 'For maximum height, use H = (u sin θ)² / (2g). For maximum horizontal range, the angle of projection is always 45°.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 3,
    topic: 'Friction & Inclined Plane',
    difficulty: 'Hard',
    text: 'A block of mass 4 kg rests in limiting equilibrium on a rough plane inclined at 30° to the horizontal. Calculate the coefficient of static friction between the block and the plane.',
    image_svg: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="400" height="220" fill="#F8FAFC" rx="10"/>
      <!-- Incline Triangle -->
      <polygon points="50,180 350,180 350,50" fill="#E2E8F0" stroke="#475569" stroke-width="2"/>
      <!-- Angle Arc -->
      <path d="M 100 180 A 50 50 0 0 0 93 158" fill="none" stroke="#DC2626" stroke-width="2"/>
      <text x="110" y="172" font-size="13" font-family="sans-serif" font-weight="bold" fill="#DC2626">30°</text>
      <!-- Block on Incline -->
      <g transform="translate(200,115) rotate(-23.4)">
        <rect x="-30" y="-30" width="60" height="30" fill="#6366F1" stroke="#312E81" stroke-width="2" rx="4"/>
        <text x="0" y="-10" font-size="11" font-family="sans-serif" font-weight="bold" fill="#FFFFFF" text-anchor="middle">4 kg</text>
        <!-- Reaction R -->
        <line x1="0" y1="-30" x2="0" y2="-70" stroke="#059669" stroke-width="2.5" marker-end="url(#arrow)"/>
        <text x="8" y="-60" font-size="11" font-family="sans-serif" font-weight="bold" fill="#059669">R</text>
        <!-- Friction force up plane -->
        <line x1="30" y1="-15" x2="80" y2="-15" stroke="#EA580C" stroke-width="2.5"/>
        <text x="85" y="-12" font-size="11" font-family="sans-serif" font-weight="bold" fill="#EA580C">F_r</text>
      </g>
      <!-- Gravity vector W = mg straight down -->
      <line x1="205" y1="110" x2="205" y2="185" stroke="#475569" stroke-width="2.5"/>
      <polygon points="201,180 205,189 209,180" fill="#475569"/>
      <text x="215" y="165" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569">W = mg</text>
    </svg>`,
    option_a: '0.500',
    option_b: '0.577',
    option_c: '0.866',
    option_d: '1.732',
    correct_answer: 'B',
    explanation: 'When a body is in limiting equilibrium on an inclined plane, the angle of inclination equals the angle of friction λ.\nCoefficient of static friction μ = tan θ = tan 30° = 1 / √3 ≈ 0.577.',
    tip: 'On an inclined plane at limiting equilibrium, μ = tan θ. Mass does not affect this coefficient!'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 4,
    topic: 'Simple Machines',
    difficulty: 'Medium',
    text: 'A block and tackle pulley system consisting of 5 pulleys is used to raise a load of 400 N through a vertical height of 2 m by applying an effort of 100 N. Calculate the efficiency of the machine.',
    image_svg: `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xs mx-auto">
      <rect width="320" height="280" fill="#F8FAFC" rx="10"/>
      <!-- Ceiling Support -->
      <line x1="60" y1="25" x2="260" y2="25" stroke="#334155" stroke-width="4"/>
      <!-- Top Fixed Block (3 Pulleys) -->
      <rect x="110" y="25" width="100" height="70" fill="#E2E8F0" stroke="#475569" stroke-width="2" rx="4"/>
      <circle cx="130" cy="60" r="18" fill="#CBD5E1" stroke="#334155" stroke-width="2"/>
      <circle cx="160" cy="60" r="22" fill="#CBD5E1" stroke="#334155" stroke-width="2"/>
      <circle cx="190" cy="60" r="18" fill="#CBD5E1" stroke="#334155" stroke-width="2"/>
      <text x="160" y="45" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Fixed Block</text>
      <!-- Bottom Movable Block (2 Pulleys) -->
      <rect x="120" y="140" width="80" height="60" fill="#E2E8F0" stroke="#475569" stroke-width="2" rx="4"/>
      <circle cx="140" cy="170" r="18" fill="#CBD5E1" stroke="#334155" stroke-width="2"/>
      <circle cx="180" cy="170" r="18" fill="#CBD5E1" stroke="#334155" stroke-width="2"/>
      <!-- Load -->
      <rect x="135" y="220" width="50" height="35" fill="#4F46E5" rx="4"/>
      <text x="160" y="242" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">400 N</text>
      <line x1="160" y1="200" x2="160" y2="220" stroke="#334155" stroke-width="2"/>
      <!-- Effort String -->
      <line x1="210" y1="60" x2="240" y2="160" stroke="#DC2626" stroke-width="2"/>
      <polygon points="236,155 240,165 244,155" fill="#DC2626"/>
      <text x="255" y="160" font-size="11" font-weight="bold" fill="#DC2626">Effort = 100N</text>
    </svg>`,
    option_a: '80%',
    option_b: '75%',
    option_c: '85%',
    option_d: '90%',
    correct_answer: 'A',
    explanation: 'Mechanical Advantage (M.A) = Load / Effort = 400 / 100 = 4.\nFor a block and tackle system, Velocity Ratio (V.R) = total number of pulleys = 5.\nEfficiency η = (M.A / V.R) × 100% = (4 / 5) × 100% = 80%.',
    tip: 'For any pulley system, V.R equals the number of pulleys (or strings supporting the load). Efficiency is always M.A / V.R × 100%.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 5,
    topic: 'Momentum & Collisions',
    difficulty: 'Medium',
    text: 'A body of mass 3 kg moving with velocity 8 m/s collides with a stationary body of mass 5 kg. If the two bodies stick together after the collision, calculate their common velocity.',
    image_svg: `<svg viewBox="0 0 380 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="140" fill="#F8FAFC" rx="10"/>
      <line x1="20" y1="105" x2="360" y2="105" stroke="#64748B" stroke-width="2"/>
      <!-- Sphere 1 -->
      <circle cx="80" cy="80" r="25" fill="#3B82F6"/>
      <text x="80" y="85" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">3 kg</text>
      <!-- Velocity arrow 1 -->
      <line x1="110" y1="80" x2="160" y2="80" stroke="#1D4ED8" stroke-width="3"/>
      <polygon points="155,75 165,80 155,85" fill="#1D4ED8"/>
      <text x="135" y="70" font-size="11" font-weight="bold" fill="#1D4ED8" text-anchor="middle">8 m/s</text>
      <!-- Sphere 2 -->
      <circle cx="260" cy="75" r="30" fill="#64748B"/>
      <text x="260" y="80" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">5 kg</text>
      <text x="260" y="125" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">At Rest (u₂ = 0)</text>
    </svg>`,
    option_a: '5.0 m/s',
    option_b: '3.0 m/s',
    option_c: '4.8 m/s',
    option_d: '2.5 m/s',
    correct_answer: 'B',
    explanation: 'By the law of conservation of linear momentum for an inelastic collision:\nm₁u₁ + m₂u₂ = (m₁ + m₂)v\n(3 × 8) + (5 × 0) = (3 + 5)v\n24 = 8v ⇒ v = 24 / 8 = 3.0 m/s.',
    tip: 'In a completely inelastic collision, bodies coalesce and kinetic energy is lost as heat/sound, but linear momentum is strictly conserved.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 6,
    topic: 'Work, Energy & Power',
    difficulty: 'Medium',
    text: 'An electric pump lifts 1,200 kg of water through a vertical height of 15 m in 30 seconds. Calculate the useful power output of the pump. [g = 10 m/s²]',
    image_svg: null,
    option_a: '6,000 W',
    option_b: '3,000 W',
    option_c: '18,000 W',
    option_d: '600 W',
    correct_answer: 'A',
    explanation: 'Work done = mgh = 1,200 × 10 × 15 = 180,000 J.\nPower = Work done / time = 180,000 / 30 = 6,000 W (or 6 kW).',
    tip: 'Power is rate of doing work (mgh / t). Remember 1 Horsepower (hp) ≈ 746 Watts.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 7,
    topic: 'Elasticity & Hooke\'s Law',
    difficulty: 'Medium',
    text: 'The graph shows the force-extension curve of an elastic metal wire. What physical quantity is represented by the area under the curve up to the elastic limit P?',
    image_svg: `<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="220" fill="#F8FAFC" rx="10"/>
      <!-- Shaded Area -->
      <polygon points="50,180 200,60 200,180" fill="#EEF2FF"/>
      <!-- Curve -->
      <line x1="50" y1="180" x2="200" y2="60" stroke="#4F46E5" stroke-width="3"/>
      <path d="M 200 60 Q 240 50 270 55 T 320 110" fill="none" stroke="#DC2626" stroke-width="2.5"/>
      <!-- Axes -->
      <line x1="50" y1="180" x2="350" y2="180" stroke="#334155" stroke-width="2"/>
      <line x1="50" y1="180" x2="50" y2="30" stroke="#334155" stroke-width="2"/>
      <!-- Point P -->
      <circle cx="200" cy="60" r="4" fill="#4F46E5"/>
      <text x="205" y="52" font-size="12" font-weight="bold" fill="#4F46E5">P (Elastic Limit)</text>
      <text x="200" y="200" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">Extension e (m)</text>
      <text x="25" y="105" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle" transform="rotate(-90 25 105)">Force F (N)</text>
    </svg>`,
    option_a: 'Young\'s Modulus',
    option_b: 'Work done in stretching the wire (Strain Energy)',
    option_c: 'Tensile Stress',
    option_d: 'Elastic Rigidity',
    correct_answer: 'B',
    explanation: 'The area under a force versus extension graph represents the work done in stretching the material, also called the elastic strain energy: W = 1/2 × F × e.',
    tip: 'Area under F-e graph = Strain Energy (1/2 Fe = 1/2 ke²). Slope = Spring constant k.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 8,
    topic: 'Circular Motion',
    difficulty: 'Hard',
    text: 'A stone of mass 0.5 kg attached to the end of a string 0.8 m long is whirled in a horizontal circle at a constant angular speed of 5 rad/s. Calculate the tension in the string.',
    image_svg: null,
    option_a: '10.0 N',
    option_b: '4.0 N',
    option_c: '8.0 N',
    option_d: '2.0 N',
    correct_answer: 'A',
    explanation: 'Centripetal force F = mω²r provides the tension in the string.\nm = 0.5 kg, ω = 5 rad/s, r = 0.8 m.\nT = 0.5 × (5)² × 0.8 = 0.5 × 25 × 0.8 = 10.0 N.',
    tip: 'Centripetal force formulas: F = mv²/r = mω²r. Always ensure ω is in radians/second.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 9,
    topic: 'Simple Harmonic Motion',
    difficulty: 'Medium',
    text: 'A simple pendulum has a period of 2.0 s at a place where g = 10 m/s². What will be the new period if the length of the pendulum is quadrupled (increased by a factor of 4)?',
    image_svg: `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xs mx-auto">
      <rect width="280" height="200" fill="#F8FAFC" rx="10"/>
      <line x1="80" y1="20" x2="200" y2="20" stroke="#334155" stroke-width="4"/>
      <!-- String & Bob -->
      <line x1="140" y1="20" x2="185" y2="135" stroke="#475569" stroke-width="2"/>
      <circle cx="185" cy="135" r="14" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2"/>
      <!-- Equilibrium dashed -->
      <line x1="140" y1="20" x2="140" y2="145" stroke="#94A3B8" stroke-dasharray="4"/>
      <path d="M 140 60 A 40 40 0 0 1 154 58" fill="none" stroke="#DC2626" stroke-width="1.5"/>
      <text x="156" y="55" font-size="11" font-weight="bold" fill="#DC2626">θ</text>
      <text x="150" y="85" font-size="12" font-weight="bold" fill="#475569">L</text>
      <!-- Oscillation path -->
      <path d="M 95 135 Q 140 148 185 135" fill="none" stroke="#6366F1" stroke-dasharray="3" stroke-width="1.5"/>
    </svg>`,
    option_a: '4.0 s',
    option_b: '1.0 s',
    option_c: '8.0 s',
    option_d: '0.5 s',
    correct_answer: 'A',
    explanation: 'Period T = 2π√(L/g), meaning T is directly proportional to √L.\nT₂ / T₁ = √(L₂ / L₁) = √4 = 2.\nT₂ = 2 × T₁ = 2 × 2.0 = 4.0 s.',
    tip: 'Period of a pendulum depends only on length and g: T ∝ √L. Mass of the bob and amplitude (for small angles) have zero effect.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 10,
    topic: 'Equilibrium of Moments',
    difficulty: 'Medium',
    text: 'A uniform meter rule of mass 100 g is balanced horizontally on a knife edge placed at the 40 cm mark by hanging a mass m at the 10 cm mark. Calculate the value of mass m.',
    image_svg: `<svg viewBox="0 0 450 160" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="450" height="160" fill="#F8FAFC" rx="10"/>
      <!-- Meter rule (0 to 100 cm) -->
      <rect x="40" y="60" width="370" height="16" fill="#FDE68A" stroke="#B45309" stroke-width="2" rx="2"/>
      <!-- Knife edge pivot at 40 cm mark -->
      <polygon points="177,76 188,98 166,98" fill="#475569"/>
      <line x1="150" y1="98" x2="204" y2="98" stroke="#334155" stroke-width="3"/>
      <text x="177" y="112" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Pivot (40 cm)</text>
      <!-- Center of gravity (50 cm mark) -->
      <line x1="214" y1="76" x2="214" y2="120" stroke="#DC2626" stroke-width="2"/>
      <polygon points="211,115 214,124 217,115" fill="#DC2626"/>
      <text x="214" y="138" font-size="11" font-weight="bold" fill="#DC2626" text-anchor="middle">100g (50 cm)</text>
      <!-- Hanging mass at 10 cm mark -->
      <line x1="77" y1="76" x2="77" y2="115" stroke="#2563EB" stroke-width="2"/>
      <rect x="67" y="115" width="20" height="18" fill="#2563EB" rx="3"/>
      <text x="77" y="128" font-size="10" font-weight="bold" fill="#FFFFFF" text-anchor="middle">m</text>
      <text x="77" y="52" font-size="10" font-weight="bold" fill="#2563EB" text-anchor="middle">10 cm</text>
    </svg>`,
    option_a: '33.3 g',
    option_b: '25.0 g',
    option_c: '50.0 g',
    option_d: '66.7 g',
    correct_answer: 'A',
    explanation: 'Since the meter rule is uniform, its weight acts at the 50 cm mark.\nPivot is at 40 cm mark.\nDistance of mass m from pivot = 40 - 10 = 30 cm.\nDistance of center of gravity (50 cm) from pivot = 50 - 40 = 10 cm.\nTaking moments about the knife edge:\nm × 30 = 100 × 10\nm = 1000 / 30 = 33.3 g.',
    tip: 'Always identify the center of gravity of a uniform body (the exact midpoint, e.g. 50 cm for a 100 cm rule).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 11,
    topic: 'Vectors & Lami\'s Theorem',
    difficulty: 'Hard',
    text: 'A body of weight W is suspended by two light inextensible strings making angles of 60° and 30° with a horizontal ceiling. If the tension in the first string is 60 N, calculate the weight W.',
    image_svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xs mx-auto">
      <rect width="360" height="200" fill="#F8FAFC" rx="10"/>
      <!-- Ceiling -->
      <line x1="40" y1="30" x2="320" y2="30" stroke="#334155" stroke-width="4"/>
      <!-- Strings -->
      <line x1="80" y1="30" x2="180" y2="130" stroke="#4F46E5" stroke-width="2.5"/>
      <line x1="280" y1="30" x2="180" y2="130" stroke="#059669" stroke-width="2.5"/>
      <text x="110" y="70" font-size="11" font-weight="bold" fill="#4F46E5">T₁ = 60N</text>
      <text x="235" y="70" font-size="11" font-weight="bold" fill="#059669">T₂</text>
      <!-- Angles with ceiling -->
      <path d="M 105 30 A 25 25 0 0 1 95 45" fill="none" stroke="#DC2626" stroke-width="2"/>
      <text x="112" y="45" font-size="10" font-weight="bold" fill="#DC2626">60°</text>
      <path d="M 255 30 A 25 25 0 0 0 263 42" fill="none" stroke="#DC2626" stroke-width="2"/>
      <text x="245" y="45" font-size="10" font-weight="bold" fill="#DC2626">30°</text>
      <!-- Weight W -->
      <line x1="180" y1="130" x2="180" y2="180" stroke="#334155" stroke-width="2.5"/>
      <circle cx="180" cy="130" r="4" fill="#334155"/>
      <polygon points="176,174 180,184 184,174" fill="#334155"/>
      <text x="195" y="165" font-size="12" font-weight="bold" fill="#334155">W</text>
    </svg>`,
    option_a: '120 N',
    option_b: '69.3 N',
    option_c: '103.9 N',
    option_d: '80 N',
    correct_answer: 'B',
    explanation: 'The angle between the two strings is 180° - (60° + 30°) = 90°.\nResolving forces vertically: T₁ sin 60° + T₂ sin 30° = W.\nResolving horizontally: T₁ cos 60° = T₂ cos 30° ⇒ T₂ = T₁ (cos 60° / cos 30°) = 60 × (0.5 / 0.866) = 34.64 N.\nTherefore, W = (60 × sin 60°) + (34.64 × sin 30°) = (60 × 0.866) + (34.64 × 0.5) = 51.96 + 17.32 = 69.28 N ≈ 69.3 N.',
    tip: 'When forces are in equilibrium, resolve vertically (ΣFy = 0) and horizontally (ΣFx = 0).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 12,
    topic: 'Gravitation',
    difficulty: 'Medium',
    text: 'Given that the radius of the Earth is 6.4 × 10⁶ m and acceleration due to gravity g = 9.8 m/s², calculate the escape velocity of a satellite launched from the surface of the Earth.',
    image_svg: null,
    option_a: '11.2 km/s',
    option_b: '7.9 km/s',
    option_c: '15.4 km/s',
    option_d: '9.8 km/s',
    correct_answer: 'A',
    explanation: 'Escape velocity v_e = √(2gR).\nv_e = √(2 × 9.8 × 6.4 × 10⁶) = √(1.2544 × 10⁸) = 11,200 m/s = 11.2 km/s.',
    tip: 'Escape velocity v_e = √(2gR) ≈ 11.2 km/s. Orbital velocity for low Earth orbit is v_0 = √(gR) ≈ 7.9 km/s.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 13,
    topic: 'Hydrostatics',
    difficulty: 'Medium',
    text: 'A piece of metal weighs 50 N in air and 40 N when completely submerged in water. Calculate the relative density of the metal. [Density of water = 1,000 kg/m³]',
    image_svg: null,
    option_a: '5.0',
    option_b: '1.25',
    option_c: '4.0',
    option_d: '0.8',
    correct_answer: 'A',
    explanation: 'Apparent loss in weight (upthrust) = Weight in air - Weight in water = 50 - 40 = 10 N.\nRelative density = (Weight in air) / (Upthrust in water) = 50 / 10 = 5.0.',
    tip: 'Relative Density of a solid = Weight in air / Apparent loss of weight in water. It has no units.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 14,
    topic: 'Fluid Dynamics',
    difficulty: 'Easy',
    text: 'According to Bernoulli\'s principle, along a streamline in a non-viscous, incompressible fluid flowing horizontally:',
    image_svg: null,
    option_a: 'Where velocity increases, pressure decreases',
    option_b: 'Where velocity increases, pressure increases',
    option_c: 'Pressure remains constant regardless of velocity',
    option_d: 'Velocity is inversely proportional to temperature',
    correct_answer: 'A',
    explanation: 'Bernoulli\'s principle states that for an ideal fluid along a streamline, P + 1/2 ρv² + ρgh = constant. For horizontal flow, regions of higher fluid velocity experience lower static pressure.',
    tip: 'Bernoulli explains aerofoil lift and atomizer spray: High fluid speed = Low pressure.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 15,
    topic: 'Measurement & Precision',
    difficulty: 'Easy',
    text: 'The diagram shows a vernier caliper reading when measuring the diameter of a metal cylinder. What is the correct measurement?',
    image_svg: `<svg viewBox="0 0 440 160" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="440" height="160" fill="#F8FAFC" rx="10"/>
      <!-- Main Scale -->
      <rect x="30" y="30" width="380" height="45" fill="#F1F5F9" stroke="#334155" stroke-width="2"/>
      <text x="80" y="45" font-size="11" font-weight="bold" fill="#334155">3</text>
      <text x="240" y="45" font-size="11" font-weight="bold" fill="#334155">4 cm</text>
      <!-- Main Scale Ticks -->
      <line x1="80" y1="50" x2="80" y2="75" stroke="#334155" stroke-width="2"/>
      <line x1="96" y1="60" x2="96" y2="75" stroke="#334155" stroke-width="1"/>
      <line x1="112" y1="60" x2="112" y2="75" stroke="#334155" stroke-width="1"/>
      <line x1="128" y1="60" x2="128" y2="75" stroke="#334155" stroke-width="1"/>
      <line x1="144" y1="60" x2="144" y2="75" stroke="#334155" stroke-width="1"/>
      <line x1="160" y1="55" x2="160" y2="75" stroke="#334155" stroke-width="1.5"/>
      <line x1="176" y1="60" x2="176" y2="75" stroke="#334155" stroke-width="1"/>
      <line x1="192" y1="60" x2="192" y2="75" stroke="#334155" stroke-width="1"/>
      <line x1="208" y1="60" x2="208" y2="75" stroke="#334155" stroke-width="1"/>
      <line x1="224" y1="60" x2="224" y2="75" stroke="#334155" stroke-width="1"/>
      <line x1="240" y1="50" x2="240" y2="75" stroke="#334155" stroke-width="2"/>
      <!-- Vernier Slider -->
      <rect x="134" y="75" width="160" height="40" fill="#E2E8F0" stroke="#4F46E5" stroke-width="2"/>
      <text x="138" y="90" font-size="10" font-weight="bold" fill="#4F46E5">0</text>
      <text x="278" y="90" font-size="10" font-weight="bold" fill="#4F46E5">10</text>
      <!-- Coinciding Vernier line at 6 (aligned with main scale) -->
      <line x1="224" y1="75" x2="224" y2="100" stroke="#DC2626" stroke-width="2"/>
      <text x="224" y="112" font-size="10" font-weight="bold" fill="#DC2626" text-anchor="middle">6 (coincides)</text>
    </svg>`,
    option_a: '3.46 cm',
    option_b: '3.36 cm',
    option_c: '3.40 cm',
    option_d: '3.56 cm',
    correct_answer: 'A',
    explanation: 'The main scale zero mark lies just past 3.4 cm (between 3.4 and 3.5 cm).\nThe vernier scale division that coincides exactly with a main scale division is the 6th mark (0.06 cm).\nTotal reading = 3.4 cm + 0.06 cm = 3.46 cm.',
    tip: 'Vernier reading = Main Scale + (Coinciding Mark × 0.01 cm).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 16,
    topic: 'Thermal Expansion',
    difficulty: 'Medium',
    text: 'A metal rod of length 2.0 m at 25°C expands by 1.6 mm when heated to 75°C. Calculate the linear expansivity of the metal.',
    image_svg: null,
    option_a: '1.6 × 10⁻⁵ K⁻¹',
    option_b: '3.2 × 10⁻⁵ K⁻¹',
    option_c: '8.0 × 10⁻⁶ K⁻¹',
    option_d: '4.8 × 10⁻⁵ K⁻¹',
    correct_answer: 'A',
    explanation: 'Linear expansivity α = ΔL / (L₀ × Δθ).\nΔL = 1.6 mm = 1.6 × 10⁻³ m.\nL₀ = 2.0 m.\nΔθ = 75 - 25 = 50 K.\nα = (1.6 × 10⁻³) / (2.0 × 50) = (1.6 × 10⁻³) / 100 = 1.6 × 10⁻⁵ K⁻¹.',
    tip: 'Area expansivity β = 2α; Volume expansivity γ = 3α. Remember to convert mm to meters.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 17,
    topic: 'Thermometry',
    difficulty: 'Easy',
    text: 'The upper and lower fixed points of an ungraduated mercury thermometer are 96 cm and 16 cm apart on its stem. If the mercury thread stands at 36 cm, what is the temperature in degrees Celsius?',
    image_svg: null,
    option_a: '25°C',
    option_b: '37.5°C',
    option_c: '20°C',
    option_d: '30°C',
    correct_answer: 'A',
    explanation: 'Temperature θ = [(l_θ - l₀) / (l₁₀₀ - l₀)] × 100°C.\nl₀ = 16 cm, l₁₀₀ = 96 cm, l_θ = 36 cm.\nθ = [(36 - 16) / (96 - 16)] × 100 = (20 / 80) × 100 = 25°C.',
    tip: 'Thermometer formula: θ = (X_θ - X₀)/(X₁₀₀ - X₀) × 100 where X is any thermometric property.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 18,
    topic: 'Gas Laws',
    difficulty: 'Medium',
    text: 'A fixed mass of gas occupies a volume of 400 cm³ at 27°C and pressure of 750 mmHg. What volume will it occupy at standard temperature and pressure (s.t.p., 0°C and 760 mmHg)?',
    image_svg: null,
    option_a: '359.2 cm³',
    option_b: '438.4 cm³',
    option_c: '382.5 cm³',
    option_d: '298.0 cm³',
    correct_answer: 'A',
    explanation: 'General gas equation: (P₁V₁) / T₁ = (P₂V₂) / T₂.\nT₁ = 27 + 273 = 300 K; T₂ = 0 + 273 = 273 K.\nP₁ = 750 mmHg, V₁ = 400 cm³; P₂ = 760 mmHg.\nV₂ = (P₁ × V₁ × T₂) / (P₂ × T₁) = (750 × 400 × 273) / (760 × 300) = 81,900,000 / 228,000 ≈ 359.2 cm³.',
    tip: 'Always convert temperature to absolute scale (Kelvin) before applying gas equations: T(K) = °C + 273.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 19,
    topic: 'Calorimetry',
    difficulty: 'Medium',
    text: 'A piece of iron of mass 0.2 kg at 100°C is dropped into 0.4 kg of water at 20°C in an insulated vessel of negligible heat capacity. Calculate the final equilibrium temperature. [c_iron = 460 J/(kg·K), c_water = 4200 J/(kg·K)]',
    image_svg: null,
    option_a: '24.2°C',
    option_b: '28.5°C',
    option_c: '32.0°C',
    option_d: '21.5°C',
    correct_answer: 'A',
    explanation: 'Heat lost by iron = Heat gained by water\nm₁c₁(100 - θ) = m₂c₂(θ - 20)\n0.2 × 460 × (100 - θ) = 0.4 × 4200 × (θ - 20)\n92(100 - θ) = 1680(θ - 20)\n9200 - 92θ = 1680θ - 33600\n1772θ = 42800 ⇒ θ = 24.15°C ≈ 24.2°C.',
    tip: 'In mixture calorimetry without state change, Heat Lost = Heat Gained. Water has a very high specific heat capacity.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 20,
    topic: 'Latent Heat',
    difficulty: 'Hard',
    text: 'Calculate the total heat required to convert 20 g of ice at 0°C to steam at 100°C. [Specific latent heat of fusion of ice = 3.36 × 10⁵ J/kg, Specific heat capacity of water = 4200 J/(kg·K), Specific latent heat of vaporization of water = 2.26 × 10⁶ J/kg]',
    image_svg: `<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="200" fill="#F8FAFC" rx="10"/>
      <!-- Axes -->
      <line x1="50" y1="170" x2="350" y2="170" stroke="#334155" stroke-width="2"/>
      <line x1="50" y1="170" x2="50" y2="20" stroke="#334155" stroke-width="2"/>
      <!-- Heating Curve -->
      <line x1="50" y1="150" x2="110" y2="150" stroke="#3B82F6" stroke-width="3"/>
      <line x1="110" y1="150" x2="220" y2="50" stroke="#10B981" stroke-width="3"/>
      <line x1="220" y1="50" x2="330" y2="50" stroke="#EF4444" stroke-width="3"/>
      <!-- Labels -->
      <text x="80" y="142" font-size="10" font-weight="bold" fill="#3B82F6" text-anchor="middle">Melting (mL_f)</text>
      <text x="165" y="90" font-size="10" font-weight="bold" fill="#10B981" text-anchor="middle">Liquid (mcΔθ)</text>
      <text x="275" y="42" font-size="10" font-weight="bold" fill="#EF4444" text-anchor="middle">Vaporization (mL_v)</text>
      <text x="42" y="154" font-size="11" font-weight="bold" fill="#475569" text-anchor="end">0°C</text>
      <text x="42" y="54" font-size="11" font-weight="bold" fill="#475569" text-anchor="end">100°C</text>
      <text x="200" y="190" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Heat Energy Added (J)</text>
    </svg>`,
    option_a: '60,320 J',
    option_b: '53,600 J',
    option_c: '45,200 J',
    option_d: '67,200 J',
    correct_answer: 'A',
    explanation: 'Total heat Q = Q₁ (melting ice) + Q₂ (heating water 0°C to 100°C) + Q₃ (boiling water):\nm = 20 g = 0.02 kg.\nQ₁ = m L_f = 0.02 × 336,000 = 6,720 J.\nQ₂ = m c Δθ = 0.02 × 4200 × 100 = 8,400 J.\nQ₃ = m L_v = 0.02 × 2,260,000 = 45,200 J.\nTotal Q = 6,720 + 8,400 + 45,200 = 60,320 J.',
    tip: 'Latent heat involves no temperature change: Q = mL. Specific heat involves temperature change: Q = mcΔθ.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 21,
    topic: 'Vapour Pressure & Humidity',
    difficulty: 'Easy',
    text: 'The temperature at which the saturated vapour pressure of a liquid equals the external atmospheric pressure is the liquid\'s:',
    image_svg: null,
    option_a: 'Boiling point',
    option_b: 'Dew point',
    option_c: 'Triple point',
    option_d: 'Critical temperature',
    correct_answer: 'A',
    explanation: 'A liquid boils when its saturated vapour pressure (S.V.P.) becomes equal to the surrounding atmospheric pressure. Hence, reducing external pressure lowers the boiling point.',
    tip: 'Boiling occurs throughout the liquid when S.V.P. = external pressure. Evaporation occurs only at the surface at any temperature.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 22,
    topic: 'Thermodynamics',
    difficulty: 'Medium',
    text: 'In an adiabatic expansion of an ideal gas, which of the following statements is true?',
    image_svg: null,
    option_a: 'No heat enters or leaves the system (Q = 0)',
    option_b: 'The temperature remains constant throughout',
    option_c: 'The internal energy of the gas increases',
    option_d: 'The pressure remains strictly constant',
    correct_answer: 'A',
    explanation: 'An adiabatic process is one in which no heat energy enters or leaves the system (ΔQ = 0). By the First Law (ΔU = ΔQ - ΔW), the work done by the gas during adiabatic expansion comes entirely from its internal energy, causing the gas to cool.',
    tip: 'Adiabatic: Q = 0. Isothermal: T = constant (ΔU = 0). Isobaric: P = constant. Isochoric: V = constant (W = 0).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 23,
    topic: 'Pressure in Fluids',
    difficulty: 'Medium',
    text: 'The diagram shows an open-ended U-tube manometer connected to a gas supply. If atmospheric pressure is 76 cmHg and the mercury levels differ by 14 cm, what is the pressure of the gas supply?',
    image_svg: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xs mx-auto">
      <rect width="320" height="220" fill="#F8FAFC" rx="10"/>
      <!-- U tube outlines -->
      <path d="M 90 40 L 90 160 A 40 40 0 0 0 170 160 L 170 40" fill="none" stroke="#334155" stroke-width="18" stroke-linecap="round"/>
      <path d="M 90 40 L 90 160 A 40 40 0 0 0 170 160 L 170 40" fill="none" stroke="#F8FAFC" stroke-width="12"/>
      <!-- Mercury liquid column -->
      <path d="M 90 120 L 90 160 A 40 40 0 0 0 170 160 L 170 65" fill="none" stroke="#64748B" stroke-width="12"/>
      <!-- Labels -->
      <line x1="90" y1="120" x2="220" y2="120" stroke="#DC2626" stroke-dasharray="3"/>
      <line x1="170" y1="65" x2="220" y2="65" stroke="#DC2626" stroke-dasharray="3"/>
      <line x1="210" y1="65" x2="210" y2="120" stroke="#DC2626" stroke-width="2"/>
      <text x="225" y="97" font-size="11" font-weight="bold" fill="#DC2626">h = 14 cm</text>
      <text x="70" y="30" font-size="11" font-weight="bold" fill="#2563EB">Gas Supply</text>
      <text x="175" y="30" font-size="11" font-weight="bold" fill="#475569">P_atm (Open)</text>
    </svg>`,
    option_a: '90 cmHg',
    option_b: '62 cmHg',
    option_c: '76 cmHg',
    option_d: '14 cmHg',
    correct_answer: 'A',
    explanation: 'Since the open limb has a higher mercury level than the closed limb, the gas pressure is greater than atmospheric pressure:\nP_gas = P_atm + h = 76 cmHg + 14 cmHg = 90 cmHg.',
    tip: 'If open limb is higher: P_gas = P_atm + h. If open limb is lower: P_gas = P_atm - h.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 24,
    topic: 'Thermal Radiation',
    difficulty: 'Easy',
    text: 'Which surface is both the best absorber and the best radiator of radiant heat energy?',
    image_svg: null,
    option_a: 'Dull, rough black surface',
    option_b: 'Polished silver surface',
    option_c: 'White glossy surface',
    option_d: 'Smooth grey surface',
    correct_answer: 'A',
    explanation: 'Good absorbers of radiation are also good emitters (Kirchhoff\'s law of radiation). Black, matte (dull) surfaces absorb nearly all incident radiation and emit infrared maximally, while polished shiny surfaces reflect radiation.',
    tip: 'Dull black = best absorber & best emitter. Shiny silver = best reflector & worst emitter.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 25,
    topic: 'Heat Transfer',
    difficulty: 'Easy',
    text: 'A thermos flask (vacuum flask) minimizes heat loss by conduction, convection, and radiation. The silvered inner walls specifically minimize heat loss by:',
    image_svg: null,
    option_a: 'Radiation',
    option_b: 'Convection',
    option_c: 'Conduction',
    option_d: 'Evaporation',
    correct_answer: 'A',
    explanation: 'Silvered walls act as thermal mirrors, reflecting radiant infrared heat waves back into the flask and thus preventing loss by radiation. The vacuum prevents conduction and convection, and the stopper prevents evaporation.',
    tip: 'Vacuum flask functions: Vacuum = stops conduction & convection; Silvered walls = stops radiation; Cork/plastic stopper = stops evaporation.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 26,
    topic: 'Waves Properties',
    difficulty: 'Medium',
    text: 'The progressive wave equation is given by y = 0.05 sin(200πt - 0.5πx), where x and y are in meters and t is in seconds. Determine the wave speed.',
    image_svg: null,
    option_a: '400 m/s',
    option_b: '200 m/s',
    option_c: '100 m/s',
    option_d: '800 m/s',
    correct_answer: 'A',
    explanation: 'Standard wave equation: y = A sin(ωt - kx).\nHere, angular frequency ω = 200π rad/s and wave number k = 0.5π m⁻¹.\nWave speed v = ω / k = (200π) / (0.5π) = 400 m/s.',
    tip: 'Quick formula: Wave speed v = (coefficient of t) / (coefficient of x) = 200π / 0.5π = 400 m/s.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 27,
    topic: 'Wave Characteristics',
    difficulty: 'Easy',
    text: 'In the transverse wave shown, what is the wavelength λ of the wave?',
    image_svg: `<svg viewBox="0 0 450 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="450" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Wave Axis -->
      <line x1="40" y1="90" x2="410" y2="90" stroke="#334155" stroke-width="2"/>
      <line x1="50" y1="160" x2="50" y2="20" stroke="#334155" stroke-width="2"/>
      <!-- Sine curve (2 full cycles) -->
      <path d="M 50 90 Q 95 20 140 90 T 230 90 T 320 90 T 410 90" fill="none" stroke="#4F46E5" stroke-width="3"/>
      <!-- Wavelength Dimension Line between crest 1 and crest 2 -->
      <line x1="95" y1="20" x2="95" y2="10" stroke="#DC2626" stroke-dasharray="2"/>
      <line x1="275" y1="20" x2="275" y2="10" stroke="#DC2626" stroke-dasharray="2"/>
      <line x1="95" y1="12" x2="275" y2="12" stroke="#DC2626" stroke-width="2"/>
      <text x="185" y="8" font-size="12" font-weight="bold" fill="#DC2626" text-anchor="middle">Distance = 0.6 m</text>
      <text x="230" y="110" font-size="11" font-weight="bold" fill="#475569">x (m)</text>
      <text x="35" y="30" font-size="11" font-weight="bold" fill="#475569">y (m)</text>
    </svg>`,
    option_a: '0.6 m',
    option_b: '0.3 m',
    option_c: '1.2 m',
    option_d: '0.15 m',
    correct_answer: 'A',
    explanation: 'By definition, the wavelength λ of a wave is the distance between two successive identical points in phase, such as from one crest to the next consecutive crest. As indicated on the diagram, that distance is 0.6 m.',
    tip: 'Wavelength is distance between consecutive crests, troughs, or consecutive points in phase.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 28,
    topic: 'Sound & Echoes',
    difficulty: 'Medium',
    text: 'A boy standing 85 m away from a high vertical cliff claps his hands and hears the echo 0.5 seconds later. What is the speed of sound in air?',
    image_svg: null,
    option_a: '340 m/s',
    option_b: '170 m/s',
    option_c: '330 m/s',
    option_d: '680 m/s',
    correct_answer: 'A',
    explanation: 'For an echo, sound travels to the cliff and reflects back, covering twice the distance:\nSpeed v = (2d) / t = (2 × 85) / 0.5 = 170 / 0.5 = 340 m/s.',
    tip: 'Always remember the factor of 2 in echo calculations: v = 2d / t.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 29,
    topic: 'Reflection & Mirrors',
    difficulty: 'Medium',
    text: 'An object of height 4 cm is placed 15 cm in front of a concave mirror of focal length 10 cm. What is the nature and height of the image formed?',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Principal Axis -->
      <line x1="30" y1="90" x2="350" y2="90" stroke="#334155" stroke-width="1.5"/>
      <!-- Concave mirror arc -->
      <path d="M 310 30 A 100 100 0 0 1 310 150" fill="none" stroke="#2563EB" stroke-width="4"/>
      <!-- Focus F & Center C -->
      <circle cx="210" cy="90" r="3" fill="#334155"/>
      <text x="210" y="105" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">F (10cm)</text>
      <circle cx="110" cy="90" r="3" fill="#334155"/>
      <text x="110" y="105" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">C (20cm)</text>
      <!-- Object between C and F -->
      <line x1="160" y1="90" x2="160" y2="45" stroke="#16A34A" stroke-width="3"/>
      <polygon points="156,47 160,40 164,47" fill="#16A34A"/>
      <text x="160" y="35" font-size="11" font-weight="bold" fill="#16A34A" text-anchor="middle">Object</text>
    </svg>`,
    option_a: 'Real, inverted, and 8 cm high',
    option_b: 'Virtual, erect, and 8 cm high',
    option_c: 'Real, inverted, and 2 cm high',
    option_d: 'Virtual, inverted, and 4 cm high',
    correct_answer: 'A',
    explanation: 'Using the mirror formula: 1/f = 1/u + 1/v.\nFor a concave mirror, f = +10 cm, u = +15 cm.\n1/10 = 1/15 + 1/v ⇒ 1/v = 1/10 - 1/15 = 1/30 ⇒ v = +30 cm (Real image).\nMagnification m = |v/u| = 30 / 15 = 2.\nImage height = m × object height = 2 × 4 cm = 8 cm. Real images are always inverted.',
    tip: 'Object between C and F forms a real, inverted, magnified image located beyond C.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 30,
    topic: 'Refraction & Snell\'s Law',
    difficulty: 'Medium',
    text: 'A ray of light traveling in air is incident on a rectangular glass block at an angle of incidence of 60°. If the refractive index of glass is 1.5, what is the angle of refraction? [sin 60° = 0.866]',
    image_svg: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-xs mx-auto">
      <rect width="360" height="200" fill="#F8FAFC" rx="10"/>
      <!-- Glass block -->
      <rect x="50" y="100" width="260" height="80" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
      <text x="65" y="125" font-size="11" font-weight="bold" fill="#1E40AF">Glass (n = 1.5)</text>
      <text x="65" y="85" font-size="11" font-weight="bold" fill="#475569">Air (n = 1.0)</text>
      <!-- Normal -->
      <line x1="180" y1="30" x2="180" y2="170" stroke="#64748B" stroke-dasharray="4"/>
      <!-- Incident ray -->
      <line x1="80" y1="42" x2="180" y2="100" stroke="#DC2626" stroke-width="2.5"/>
      <polygon points="135,68 143,76 133,76" fill="#DC2626"/>
      <!-- Refracted ray -->
      <line x1="180" y1="100" x2="230" y2="180" stroke="#DC2626" stroke-width="2.5"/>
      <!-- Angle Arc -->
      <path d="M 180 65 A 35 35 0 0 0 155 78" fill="none" stroke="#DC2626" stroke-width="1.5"/>
      <text x="162" y="60" font-size="10" font-weight="bold" fill="#DC2626">60°</text>
    </svg>`,
    option_a: '35.3°',
    option_b: '30.0°',
    option_c: '45.0°',
    option_d: '28.2°',
    correct_answer: 'A',
    explanation: 'By Snell\'s law: n = sin i / sin r\n1.5 = sin 60° / sin r\nsin r = 0.866 / 1.5 = 0.5773\nr = sin⁻¹(0.5773) ≈ 35.3°.',
    tip: 'When light travels from rarer to denser medium (air to glass), it bends towards the normal (r < i).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 31,
    topic: 'Total Internal Reflection',
    difficulty: 'Medium',
    text: 'What is the critical angle for a transparent medium whose refractive index is 1.414 (√2)?',
    image_svg: null,
    option_a: '45°',
    option_b: '30°',
    option_c: '60°',
    option_d: '90°',
    correct_answer: 'A',
    explanation: 'Critical angle c is given by: sin c = 1 / n.\nsin c = 1 / 1.414 = 1 / √2 = 0.7071.\nc = sin⁻¹(0.7071) = 45°.',
    tip: 'Total internal reflection occurs only when light moves from denser to rarer medium and angle of incidence i > c.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 32,
    topic: 'Lenses & Optical Instruments',
    difficulty: 'Medium',
    text: 'A converging lens produces an image four times the size of an object on a screen placed 100 cm from the lens. Calculate the focal length of the lens.',
    image_svg: `<svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="400" height="160" fill="#F8FAFC" rx="10"/>
      <!-- Principal Axis -->
      <line x1="30" y1="80" x2="370" y2="80" stroke="#334155" stroke-width="1.5"/>
      <!-- Convex lens double convex -->
      <path d="M 180 20 Q 195 80 180 140 Q 165 80 180 20" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
      <!-- Object -->
      <line x1="100" y1="80" x2="100" y2="50" stroke="#16A34A" stroke-width="2.5"/>
      <polygon points="97,52 100,45 103,52" fill="#16A34A"/>
      <text x="100" y="38" font-size="10" font-weight="bold" fill="#16A34A" text-anchor="middle">Object</text>
      <!-- Real Inverted Screen Image -->
      <line x1="320" y1="80" x2="320" y2="150" stroke="#DC2626" stroke-width="3"/>
      <polygon points="317,144 320,152 323,144" fill="#DC2626"/>
      <text x="320" y="100" font-size="10" font-weight="bold" fill="#DC2626" text-anchor="middle">v = 100 cm</text>
    </svg>`,
    option_a: '20 cm',
    option_b: '25 cm',
    option_c: '15 cm',
    option_d: '30 cm',
    correct_answer: 'A',
    explanation: 'Since the image is formed on a screen, it is real.\nMagnification m = v / u ⇒ 4 = 100 / u ⇒ u = 25 cm.\nUsing the lens formula: 1/f = 1/u + 1/v\n1/f = 1/25 + 1/100 = 4/100 + 1/100 = 5/100 = 1/20.\nTherefore, focal length f = 20 cm.',
    tip: 'Real images on a screen are always inverted; for lenses 1/f = 1/u + 1/v (both u and v are positive for real objects & real images).'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 33,
    topic: 'Optical Instruments',
    difficulty: 'Easy',
    text: 'In a compound microscope, the intermediate image formed by the objective lens is:',
    image_svg: null,
    option_a: 'Real, inverted, and magnified',
    option_b: 'Virtual, erect, and magnified',
    option_c: 'Real, erect, and diminished',
    option_d: 'Virtual, inverted, and magnified',
    correct_answer: 'A',
    explanation: 'In a compound microscope, the objective lens forms a real, inverted, and magnified intermediate image. This image then serves as an object for the eyepiece lens, which acts as a simple magnifying glass to produce a final virtual, inverted, magnified image.',
    tip: 'Objective forms Real, Inverted, Magnified image. Eyepiece acts as magnifier to produce Final Virtual, Inverted, Highly Magnified image.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 34,
    topic: 'Defects of Vision',
    difficulty: 'Easy',
    text: 'A person suffering from myopia (short-sightedness) cannot see distant objects clearly because parallel light rays are focused in front of the retina. This defect is corrected using a:',
    image_svg: `<svg viewBox="0 0 380 150" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="150" fill="#F8FAFC" rx="10"/>
      <!-- Eyeball -->
      <circle cx="280" cy="75" r="50" fill="#FFFFFF" stroke="#334155" stroke-width="2"/>
      <path d="M 230 50 A 50 50 0 0 1 230 100" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
      <!-- Concave diverging spectacle lens -->
      <path d="M 120 40 Q 130 75 120 110 L 135 110 Q 125 75 135 40 Z" fill="#EEF2FF" stroke="#4F46E5" stroke-width="2"/>
      <!-- Parallel rays diverged to focus exactly on retina -->
      <line x1="40" y1="55" x2="122" y2="55" stroke="#DC2626" stroke-width="1.5"/>
      <line x1="40" y1="95" x2="122" y2="95" stroke="#DC2626" stroke-width="1.5"/>
      <line x1="133" y1="52" x2="230" y2="50" stroke="#DC2626" stroke-width="1.5"/>
      <line x1="133" y1="98" x2="230" y2="100" stroke="#DC2626" stroke-width="1.5"/>
      <line x1="230" y1="50" x2="330" y2="75" stroke="#DC2626" stroke-width="1.5"/>
      <line x1="230" y1="100" x2="330" y2="75" stroke="#DC2626" stroke-width="1.5"/>
      <text x="330" y="65" font-size="9" font-weight="bold" fill="#059669">Retina</text>
      <text x="128" y="130" font-size="10" font-weight="bold" fill="#4F46E5" text-anchor="middle">Concave Lens</text>
    </svg>`,
    option_a: 'Diverging (concave) lens',
    option_b: 'Converging (convex) lens',
    option_c: 'Bifocal lens',
    option_d: 'Cylindrical lens',
    correct_answer: 'A',
    explanation: 'Myopia is caused by an eyeball that is too long or a lens that is too convergent, focusing rays in front of the retina. A diverging (concave) lens spreads the rays slightly before they enter the eye, allowing them to focus exactly onto the retina.',
    tip: 'Myopia (short-sight) = Concave (diverging) lens. Hypermetropia (long-sight) = Convex (converging) lens. Astigmatism = Cylindrical lens.'
  },
  {
    subject: 'Physics',
    exam_year: 2024,
    question_num: 35,
    topic: 'Dispersion of Light',
    difficulty: 'Easy',
    text: 'When a beam of white light passes through a glass triangular prism, which color of light is deviated through the GREATEST angle?',
    image_svg: `<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-sm mx-auto">
      <rect width="380" height="180" fill="#F8FAFC" rx="10"/>
      <!-- Glass Prism -->
      <polygon points="180,30 250,150 110,150" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
      <!-- Incident White Beam -->
      <line x1="40" y1="120" x2="135" y2="100" stroke="#64748B" stroke-width="3"/>
      <text x="80" y="98" font-size="10" font-weight="bold" fill="#64748B">White light</text>
      <!-- Emergent dispersed spectrum -->
      <line x1="210" y1="105" x2="330" y2="90" stroke="#EF4444" stroke-width="2"/>
      <text x="340" y="94" font-size="10" font-weight="bold" fill="#EF4444">Red (least deviated)</text>
      <line x1="215" y1="115" x2="330" y2="140" stroke="#8B5CF6" stroke-width="2"/>
      <text x="340" y="144" font-size="10" font-weight="bold" fill="#8B5CF6">Violet (most deviated)</text>
    </svg>`,
    option_a: 'Violet',
    option_b: 'Red',
    option_c: 'Yellow',
    option_d: 'Green',
    correct_answer: 'A',
    explanation: 'Violet light has the shortest wavelength and the highest refractive index in glass, causing it to travel slowest and deviate the most. Red light has the longest wavelength and deviates the least (ROYGBIV).',
    tip: 'Red = Longest wavelength, least deviated. Violet = Shortest wavelength, most deviated.'
  }
];
