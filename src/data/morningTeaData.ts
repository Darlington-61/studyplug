export interface MorningTeaItem {
  id: number;
  phrase: string;
  meaning: string;
  example: string;
  examTip?: string;
  tags?: string[];
  pastQuestionRef?: string;
  commonTrap?: string;
}

export interface MorningTeaEdition {
  id: string;
  title: string;
  subtitle: string;
  subject: string;
  badge: string;
  icon: string;
  seriesName?: string;
  dayNumber?: number;
  totalDays?: number;
  shareQuote?: string;
  nextDayPreview?: {
    dayNumber: number;
    title: string;
    description: string;
  };
  weekBucket?: {
    dayOfWeek: string;
    topic: string;
    focus: string;
    isToday?: boolean;
  }[];
  items: MorningTeaItem[];
}

export const WEEK_AHEAD_CURRICULUM = [
  { day: 'Monday', subject: 'Use of English', topic: 'Concord & Inverted Subjects', badge: 'High-Yield Trap' },
  { day: 'Tuesday', subject: 'Mathematics', topic: 'Circle Geometry & Alternate Segments', badge: 'WAEC Guaranteed' },
  { day: 'Wednesday', subject: 'Physics', topic: 'Projectile Motion & Complementary Angles', badge: 'JAMB Formula Gold' },
  { day: 'Thursday', subject: 'Chemistry', topic: 'Chemical Equilibrium & Le Chatelier Shifts', badge: 'Examiners Favorite' },
  { day: 'Friday', subject: 'Biology', topic: 'Genetics, ABO Blood Groups & Sickle Cell', badge: '100% UTME Must-Know' },
  { day: 'Saturday', subject: 'Economics', topic: 'Price Elasticity Calculations & Total Revenue', badge: 'Graph & Math Drill' },
  { day: 'Sunday', subject: 'Government & Lit', topic: '1922-1999 Constitutions & Poetic Devices', badge: 'Rapid Recap Sunday' },
];

export const MORNING_TEA_EDITIONS: MorningTeaEdition[] = [
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. USE OF ENGLISH — SUBJECT-VERB CONCORD (DAY 1 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'english-concord-day1',
    title: '☀️ Day 1: Subject-Verb Concord & Intervening Phrase Traps',
    subtitle: 'Deep Series (Day 1 of 3) • Topics Nigerian Exams Never Joke With',
    subject: 'Use of English',
    badge: 'DAY 1 OF 3 • MUST-KNOW',
    icon: '📖',
    seriesName: 'Concord Mastery 3-Day Sprint',
    dayNumber: 1,
    totalDays: 3,
    shareQuote: 'The subject rules the verb — intervening phrases are just optical illusions! Master Concord on StudyPlug.',
    nextDayPreview: {
      dayNumber: 2,
      title: 'Proximity Rule & Indefinite Pronouns Trap',
      description: 'Master "Neither... nor", "Either... or", "Each of", and "One of the boys who..."'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Today)', topic: 'Intervening Phrases & Parenthetical Traps', focus: '"As well as", "together with", "in addition to"', isToday: true },
      { dayOfWeek: 'Day 2 (Tomorrow)', topic: 'Proximity Rule & Relative Clauses', focus: '"Neither/Nor", "One of those who [plural verb]"', isToday: false },
      { dayOfWeek: 'Day 3 (Wednesday)', topic: 'JAMB/WAEC Real Past Question Showdown', focus: '5 Authentic past questions decoded step-by-step', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'The "As well as" Trap: Ignore Intervening Phrases',
        meaning: 'Phrases like "as well as", "together with", "along with", and "in addition to" do NOT make a singular subject plural. The verb agrees strictly with the first subject.',
        example: 'The teacher, as well as his students, WAS awarded a certificate (NOT were).',
        examTip: 'High-Frequency Trap: JAMB places plural nouns right before the blank to trick your ears. Cross out everything between commas mentally!',
        pastQuestionRef: 'JAMB 2019 Q12 • WAEC 2021 Q4',
        tags: ['Concord', 'Syntax', 'High-Yield']
      },
      {
        id: 2,
        phrase: '"Together with" Rule: Singular Subject Stays Singular',
        meaning: 'When a singular subject is joined to another noun by "together with", the verb remains singular.',
        example: 'The Governor, together with his commissioners, HAS arrived at the venue.',
        examTip: 'Examiners deliberate trick: "Governor (singular) + commissioners (plural) → verb must match Governor (HAS)!"',
        pastQuestionRef: 'WAEC 2023 Q18',
        tags: ['Concord', 'Subject-Verb']
      },
      {
        id: 3,
        phrase: '"More than one" takes a SINGULAR verb',
        meaning: 'Despite the plural meaning, the grammatical phrase "More than one + singular noun" strictly demands a singular verb.',
        example: 'More than one candidate HAS passed the CBT exam with 300+.',
        examTip: 'Notice: "More than one person IS", but "More persons than one ARE". JAMB tests this difference consistently!',
        pastQuestionRef: 'JAMB 2021 Q7',
        tags: ['Concord', 'Exceptions']
      },
      {
        id: 4,
        phrase: '"A number of" (Plural) vs "The number of" (Singular)',
        meaning: '"A number of" means many and takes a PLURAL verb. "The number of" refers to a specific single figure and takes a SINGULAR verb.',
        example: 'A number of students WERE absent. BUT: The number of absentees WAS ten.',
        examTip: 'Memory Trick: "A" = Abundant (Plural). "The" = The exact figure (Singular).',
        pastQuestionRef: 'JAMB 2022 Q14 • WAEC 2020 Q22',
        tags: ['Concord', 'Determiners']
      },
      {
        id: 5,
        phrase: 'Titles of Books, Films, and Nations take Singular Verbs',
        meaning: 'Even if a title or country ends in "s" or appears plural, it represents a single work or entity.',
        example: 'Gulliver\'s Travels IS an engaging satirical novel. The United States HAS announced its policy.',
        examTip: 'Always check if the noun phrase is the proper title of a literary text or sovereign nation.',
        pastQuestionRef: 'WAEC 2018 Q31',
        tags: ['Concord', 'Nouns']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. USE OF ENGLISH — SUBJECT-VERB CONCORD (DAY 2 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'english-concord-day2',
    title: '⚠️ Day 2: Proximity Rules & The "One of the boys who" Trap',
    subtitle: 'Deep Series (Day 2 of 3) • Topics Nigerian Exams Never Joke With',
    subject: 'Use of English',
    badge: 'DAY 2 OF 3 • EXAM TRAPS',
    icon: '⚡',
    seriesName: 'Concord Mastery 3-Day Sprint',
    dayNumber: 2,
    totalDays: 3,
    shareQuote: '"Neither... nor" looks at the closest neighbor! Nail the proximity trap with StudyPlug Morning Tea.',
    nextDayPreview: {
      dayNumber: 3,
      title: 'JAMB & WAEC Real Concord Past Questions Showdown',
      description: 'Practice 5 actual exam questions under timed drill conditions with instant breakdown.'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Yesterday)', topic: 'Intervening Phrases & Parenthetical Traps', focus: 'Completed ✓', isToday: false },
      { dayOfWeek: 'Day 2 (Today)', topic: 'Proximity Rule & Relative Clauses', focus: '"Neither/Nor", "One of those who [plural verb]"', isToday: true },
      { dayOfWeek: 'Day 3 (Tomorrow)', topic: 'JAMB/WAEC Real Past Question Showdown', focus: '5 Authentic past questions decoded step-by-step', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'Rule of Proximity: Neither... Nor / Either... Or',
        meaning: 'When subjects are connected by "or", "nor", "either... or", "neither... nor", the verb agrees with the subject CLOSEST to it.',
        example: 'Neither the principal nor the TEACHERS WERE present. BUT: Neither the teachers nor the PRINCIPAL WAS present.',
        examTip: 'Scan the noun immediately before the verb blank. That noun dictates whether the verb is singular or plural!',
        pastQuestionRef: 'JAMB 2020 Q11 • WAEC 2019 Q9',
        tags: ['Proximity', 'Concord']
      },
      {
        id: 2,
        phrase: 'The "One of those who..." Trap (Takes PLURAL verb!)',
        meaning: 'In "He is one of those students who...", the relative pronoun "who" refers to "students" (plural), NOT to "He". Therefore, the verb must be PLURAL.',
        example: 'Ngozi is one of the candidates who HAVE registered for UTME (NOT has).',
        examTip: 'The #1 JAMB English Distractor! ONLY if it says "the ONLY one of..." does it take a singular verb.',
        pastQuestionRef: 'JAMB 2017 Q5 • JAMB 2023 Q16',
        tags: ['Relative Clause', 'Top Trap']
      },
      {
        id: 3,
        phrase: '"Each", "Every", and "Everyone" are ALWAYS Singular',
        meaning: 'Indefinite pronouns like "each", "everyone", "everybody", "nobody", "either of", "neither of" take strictly singular verbs, regardless of plural nouns following "of".',
        example: 'Each of the forty students HAS a laptop (NOT have). Neither of the answers IS correct.',
        examTip: 'Do not be deceived by "of the students" or "of the answers". The real subject is "Each" or "Neither"!',
        pastQuestionRef: 'WAEC 2022 Q3',
        tags: ['Indefinite Pronouns', 'Concord']
      },
      {
        id: 4,
        phrase: 'Fractions & Percentages: Look at the Noun in the "Of" Phrase',
        meaning: 'With fractions and percentages, the verb number depends entirely on whether the noun after "of" is countable or uncountable.',
        example: 'Two-thirds of the WATER WAS spilled. BUT: Two-thirds of the BOOKS WERE sold.',
        examTip: 'Uncountable noun = singular verb. Plural countable noun = plural verb.',
        pastQuestionRef: 'JAMB 2018 Q23',
        tags: ['Fractions', 'Concord']
      },
      {
        id: 5,
        phrase: 'Inverted Subjects: "There is" vs "There are"',
        meaning: 'In sentences starting with "There" or "Here", the real subject comes AFTER the verb.',
        example: 'There ARE three errors on this answer sheet. BUT: There IS an error on this sheet.',
        examTip: 'Look right past "There" and find the real noun before deciding your verb!',
        pastQuestionRef: 'WAEC 2021 Q14',
        tags: ['Inversion', 'Concord']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. MATHEMATICS — CIRCLE GEOMETRY THEOREMS (DAY 1 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'math-circle-geometry-day1',
    title: '📐 Day 1: Circle Theorems Exams Never Joke With',
    subtitle: 'Deep Series (Day 1 of 3) • Topics Guaranteed Every Year in WAEC & JAMB',
    subject: 'Mathematics',
    badge: 'DAY 1 OF 3 • THEOREMS',
    icon: '📐',
    seriesName: 'Circle Geometry 3-Day Sprint',
    dayNumber: 1,
    totalDays: 3,
    shareQuote: 'Angle at centre is 2× angle at circumference. Master Circle Theorems with StudyPlug Morning Tea!',
    nextDayPreview: {
      dayNumber: 2,
      title: 'Cyclic Quadrilaterals & The Alternate Segment Theorem',
      description: 'Master opposite angles sum to 180° and tangent-chord angle relationships.'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Today)', topic: 'Angle at Centre & Angles in Same Segment', focus: 'Theorem 1 & 2 + Semi-circle 90° rule', isToday: true },
      { dayOfWeek: 'Day 2 (Tomorrow)', topic: 'Cyclic Quads & Alternate Segment Theorem', focus: 'Opposite angles = 180° & Tangent-Chord theorem', isToday: false },
      { dayOfWeek: 'Day 3 (Friday)', topic: 'Real WAEC Past Questions Showdown', focus: 'Solve 4 complex WAEC circle diagrams under 3 mins each', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'Theorem 1: Angle at Centre = 2 × Angle at Circumference',
        meaning: 'The angle subtended by an arc at the centre of a circle is double the angle subtended by it at any point on the remaining circumference.',
        example: 'If angle at the centre ∠AOB = 130°, the angle on the circumference ∠APB = 130° / 2 = 65°.',
        examTip: 'WAEC Classic: Watch out for reflex angles at the centre! If reflex ∠AOB = 260°, then the opposite circumference angle = 130°.',
        pastQuestionRef: 'WAEC 2023 Theory Q3 • JAMB 2022 Q8',
        tags: ['Circle Geometry', 'Theorems']
      },
      {
        id: 2,
        phrase: 'Theorem 2: Angle in a Semicircle is ALWAYS 90° (Right Angle)',
        meaning: 'Any angle inscribed in a semicircle subtended by a diameter is exactly 90 degrees.',
        example: 'If line AB passes through center O (diameter), then for any point C on the circle, ∠ACB = 90°.',
        examTip: 'Shortcut: Whenever a question says "AB is a diameter", immediately label the opposite angle on the circle as 90°!',
        pastQuestionRef: 'JAMB 2020 Q19 • WAEC 2021 Q6',
        tags: ['Circle Geometry', 'Diameter']
      },
      {
        id: 3,
        phrase: 'Theorem 3: Angles in the Same Segment are Equal',
        meaning: 'Angles subtended by the same arc in the same segment of a circle are equal (the "Butterfly" theorem).',
        example: 'If chord AB subtends angle ∠ADB = 42°, then angle ∠ACB subtended by the same chord is also 42°.',
        examTip: 'Look for two triangles sharing the same base chord touching the circumference.',
        pastQuestionRef: 'WAEC 2022 Q11',
        tags: ['Circle Geometry', 'Subtended Angles']
      },
      {
        id: 4,
        phrase: 'Radius-Tangent Theorem: Radius ⊥ Tangent at Point of Contact',
        meaning: 'The tangent to a circle is perpendicular to the radius at the point of tangency (angle = 90°).',
        example: 'If OT is a radius and PT is a tangent touching at T, then triangle OPT is a right-angled triangle (∠OTP = 90°).',
        examTip: 'Apply Pythagoras Theorem immediately: OP² = OT² + PT² to calculate length of tangent!',
        pastQuestionRef: 'JAMB 2019 Q34 • WAEC 2020 Q15',
        tags: ['Tangents', 'Pythagoras']
      },
      {
        id: 5,
        phrase: 'Two Tangents from an External Point are EQUAL in Length',
        meaning: 'If two tangents PA and PB are drawn to a circle from an external point P, then PA = PB.',
        example: 'Triangle PAB formed by the two tangents and chord AB is an ISOSCELES triangle (∠PAB = ∠PBA).',
        examTip: 'Calculate base angles of the isosceles triangle: (180° - ∠APB) / 2.',
        pastQuestionRef: 'WAEC 2018 Q7',
        tags: ['Tangents', 'Isosceles']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 4. MATHEMATICS — CIRCLE GEOMETRY (DAY 2 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'math-circle-geometry-day2',
    title: '⚠️ Day 2: Cyclic Quadrilaterals & Alternate Segment Theorem',
    subtitle: 'Deep Series (Day 2 of 3) • The #1 Exam Trap in WAEC General Maths',
    subject: 'Mathematics',
    badge: 'DAY 2 OF 3 • EXAM TRAPS',
    icon: '🎯',
    seriesName: 'Circle Geometry 3-Day Sprint',
    dayNumber: 2,
    totalDays: 3,
    shareQuote: 'Opposite angles of a cyclic quad sum to 180°! Conquer geometry diagrams with StudyPlug Morning Tea.',
    nextDayPreview: {
      dayNumber: 3,
      title: 'Full WAEC Circle Geometry Diagram Showdown',
      description: 'Decode 4 multi-step WAEC circle geometry diagrams with step-by-step angle calculations.'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Yesterday)', topic: 'Angle at Centre & Semicircle 90° Rule', focus: 'Completed ✓', isToday: false },
      { dayOfWeek: 'Day 2 (Today)', topic: 'Cyclic Quads & Alternate Segment Theorem', focus: 'Opposite angles = 180° & Tangent-Chord theorem', isToday: true },
      { dayOfWeek: 'Day 3 (Tomorrow)', topic: 'Full WAEC Diagram Showdown', focus: 'Solve 4 complex WAEC circle diagrams with step-by-step proofs', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'Opposite Angles of a Cyclic Quad sum to 180°',
        meaning: 'A cyclic quadrilateral has all 4 vertices on the circumference. Opposite angles are supplementary: ∠A + ∠C = 180° and ∠B + ∠D = 180°.',
        example: 'If ∠A = 75°, then opposite angle ∠C = 180° - 75° = 105°.',
        examTip: 'Trap: If any vertex is at the CENTRE rather than the circumference, it is NOT a cyclic quadrilateral! Do not use 180°!',
        pastQuestionRef: 'WAEC 2022 Q5 • JAMB 2021 Q14',
        tags: ['Cyclic Quad', 'Circle Theorems']
      },
      {
        id: 2,
        phrase: 'Exterior Angle of Cyclic Quad = Interior Opposite Angle',
        meaning: 'When one side of a cyclic quadrilateral is extended, the exterior angle formed is equal to the interior opposite angle.',
        example: 'If side BC is extended to E, then exterior angle ∠DCE equals interior opposite angle ∠DAB.',
        examTip: 'Speed shortcut: Do not calculate the linear pair first! Directly transfer the angle value to save 45 seconds.',
        pastQuestionRef: 'WAEC 2021 Q8',
        tags: ['Cyclic Quad', 'Shortcuts']
      },
      {
        id: 3,
        phrase: 'Alternate Segment Theorem (The Tangent-Chord Theorem)',
        meaning: 'The angle between a tangent and a chord through the point of contact equals the angle subtended by the chord in the alternate segment.',
        example: 'If tangent PT touches circle at A and chord AB forms angle ∠TAB = 55°, then any angle ∠ACB in the opposite segment is also 55°.',
        examTip: 'The most missed question in WAEC Paper 2! Find the chord touching the tangent, then jump directly to the triangle angle opposite it.',
        pastQuestionRef: 'WAEC 2023 Paper 2 Q6 • JAMB 2020 Q28',
        tags: ['Alternate Segment', 'Top Trap']
      },
      {
        id: 4,
        phrase: 'Intersecting Chords Theorem: AP × PB = CP × PD',
        meaning: 'When two chords AB and CD intersect at point P inside a circle, the products of their segments are equal.',
        example: 'If AP = 4cm, PB = 6cm, and CP = 3cm, then PD = (4 × 6) / 3 = 24 / 3 = 8cm.',
        examTip: 'Applies also when chords intersect EXTERNALLY: PA × PB = PC × PD.',
        pastQuestionRef: 'JAMB 2019 Q16',
        tags: ['Chords', 'Geometry Calculations']
      },
      {
        id: 5,
        phrase: 'Tangent-Secant Theorem: PT² = PA × PB',
        meaning: 'When a tangent PT and a secant PAB are drawn from external point P, the square of the tangent equals the product of external secant segment and entire secant.',
        example: 'If PA = 4cm and AB = 5cm (so PB = 9cm), then PT² = 4 × 9 = 36 → PT = 6cm.',
        examTip: 'Watch out: PB is the ENTIRE length from P to B (PA + AB), not just AB!',
        pastQuestionRef: 'JAMB 2023 Q30',
        tags: ['Tangents', 'Secants']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 5. PHYSICS — PROJECTILE MOTION & VECTORS (DAY 1 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'physics-projectile-day1',
    title: '⚡ Day 1: Projectile Motion Formulas & Speed Shortcuts',
    subtitle: 'Deep Series (Day 1 of 3) • Topics Nigerian Exams Never Joke With',
    subject: 'Physics',
    badge: 'DAY 1 OF 3 • MECHANICS',
    icon: '⚛️',
    seriesName: 'Projectile Motion 3-Day Sprint',
    dayNumber: 1,
    totalDays: 3,
    shareQuote: 'Horizontal velocity NEVER changes during flight! Master Projectile Motion on StudyPlug Morning Tea.',
    nextDayPreview: {
      dayNumber: 2,
      title: 'Complementary Angles & Zero Work Traps',
      description: 'Why 30° & 60° have the exact same range, and how to spot zero-work tricks in UTME.'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Today)', topic: 'Time of Flight, Max Height & Range Formulas', focus: 'Formulas, derivations & independence of horizontal velocity', isToday: true },
      { dayOfWeek: 'Day 2 (Tomorrow)', topic: 'Complementary Angles & Trajectory Traps', focus: 'Equal ranges at complementary angles (θ and 90°-θ)', isToday: false },
      { dayOfWeek: 'Day 3 (Saturday)', topic: 'JAMB/WAEC Real Projectile Calculations', focus: 'Solve 5 past calculation questions in under 60 seconds each', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'Horizontal Velocity Vx = u cos(θ) is CONSTANT throughout flight',
        meaning: 'Because gravity acts strictly vertically downwards (g = 9.8 or 10 m/s²), horizontal acceleration is ZERO. Vx never changes from launch to landing.',
        example: 'If launched at 20 m/s at 60°, horizontal velocity at maximum height is STILL 20 × cos(60°) = 10 m/s (NOT zero!).',
        examTip: 'JAMB Classic Trap: "What is velocity at maximum height?" Candidates wrongly pick 0 m/s! The vertical velocity Vy is 0, but Vx is STILL u cos(θ)!',
        pastQuestionRef: 'JAMB 2021 Q4 • WAEC 2022 Q12',
        tags: ['Projectile', 'Velocity Trap']
      },
      {
        id: 2,
        phrase: 'Time of Flight: T = (2u sin θ) / g',
        meaning: 'Total time spent in the air equals double the time taken to reach maximum height.',
        example: 'A ball launched at 30 m/s at 30° with g = 10 m/s²: T = (2 × 30 × sin 30°) / 10 = (60 × 0.5) / 10 = 3 seconds.',
        examTip: 'Time to reach maximum height is simply t = T / 2 = (u sin θ) / g.',
        pastQuestionRef: 'JAMB 2019 Q2 • WAEC 2020 Q8',
        tags: ['Time of Flight', 'Mechanics']
      },
      {
        id: 3,
        phrase: 'Maximum Height: H = (u² sin² θ) / (2g)',
        meaning: 'The highest vertical displacement reached when Vy = 0.',
        example: 'For a projectile with u = 40 m/s at 30°: H = (40² × 0.5²) / (2 × 10) = (1600 × 0.25) / 20 = 400 / 20 = 20 meters.',
        examTip: 'Notice the denominator has 2g! Many candidates mix up the 2g in H with the single g in Range R.',
        pastQuestionRef: 'WAEC 2023 Q15',
        tags: ['Max Height', 'Formulas']
      },
      {
        id: 4,
        phrase: 'Horizontal Range: R = (u² sin 2θ) / g',
        meaning: 'Horizontal distance covered from launch to the point it returns to the same level.',
        example: 'At θ = 45°, sin 2(45°) = sin 90° = 1. Therefore, Maximum Range R_max = u² / g.',
        examTip: 'Notice: In Range, it is sin(2θ), NOT sin²(θ)! To double an angle: if θ = 15°, then 2θ = 30° → sin 30° = 0.5.',
        pastQuestionRef: 'JAMB 2020 Q1 • WAEC 2018 Q3',
        tags: ['Range', 'Formulas']
      },
      {
        id: 5,
        phrase: 'Maximum Range occurs at 45° | Maximum Height at 90°',
        meaning: 'To achieve the farthest horizontal throw, launch angle must be 45°. To achieve maximum vertical climb, launch angle must be 90° (vertical throw).',
        example: 'An athlete shotputter aims close to 45° for maximum distance.',
        examTip: 'At 45°, Maximum Range is 4 times the maximum height reached! R_max = 4H.',
        pastQuestionRef: 'JAMB 2022 Q17',
        tags: ['Optimization', 'Mechanics']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 6. CHEMISTRY — CHEMICAL EQUILIBRIUM & LE CHATELIER (DAY 1 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'chem-equilibrium-day1',
    title: '🧪 Day 1: Chemical Equilibrium & Le Chatelier\'s Principle',
    subtitle: 'Deep Series (Day 1 of 3) • Topics Nigerian Exams Never Joke With',
    subject: 'Chemistry',
    badge: 'DAY 1 OF 3 • PHYSICAL CHEM',
    icon: '🧪',
    seriesName: 'Chemical Equilibrium 3-Day Sprint',
    dayNumber: 1,
    totalDays: 3,
    shareQuote: 'A catalyst speeds up both rates equally — zero effect on equilibrium! Master Le Chatelier on StudyPlug.',
    nextDayPreview: {
      dayNumber: 2,
      title: 'Pressure & Moles Trap in Gaseous Equilibria',
      description: 'Why pressure only shifts reactions with unequal moles of gas (Δn ≠ 0).'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Today)', topic: 'Concentration & Temperature Shifts', focus: 'Le Chatelier principle & Endothermic vs Exothermic rules', isToday: true },
      { dayOfWeek: 'Day 2 (Tomorrow)', topic: 'Pressure & The Catalyst Myth Trap', focus: 'Gas moles count & why catalysts do NOT shift equilibrium', isToday: false },
      { dayOfWeek: 'Day 3 (Sunday)', topic: 'Haber Process & Real Past Questions', focus: 'Industrial optimum conditions & 5 JAMB equilibrium questions', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'Le Chatelier\'s Principle: System Opposes Any External Change',
        meaning: 'If a chemical system at equilibrium is subjected to a change in concentration, temperature, or pressure, the system adjusts to counteract the effect of that change.',
        example: 'Add more reactant → equilibrium shifts RIGHT to consume it. Remove product → equilibrium shifts RIGHT to replace it.',
        examTip: 'Think of equilibrium as stubborn: whatever you do to it, it shifts in the opposite direction to undo your action!',
        pastQuestionRef: 'JAMB 2022 Q23 • WAEC 2021 Q19',
        tags: ['Equilibrium', 'Le Chatelier']
      },
      {
        id: 2,
        phrase: 'Temperature Effect: Follow the Sign of ΔH',
        meaning: 'Increasing temperature favors the ENDOTHERMIC reaction (+ΔH). Decreasing temperature favors the EXOTHERMIC reaction (-ΔH).',
        example: 'N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92 kJ/mol, exothermic). Increasing temperature shifts equilibrium LEFT (towards reactants), lowering ammonia yield.',
        examTip: 'Treat Heat like a chemical species! In exothermic reactions, Heat is a PRODUCT. Adding heat drives reaction to reactants.',
        pastQuestionRef: 'WAEC 2023 Q27 • JAMB 2020 Q15',
        tags: ['Thermodynamics', 'Equilibrium']
      },
      {
        id: 3,
        phrase: 'The Catalyst Myth: Catalysts DO NOT Shift Equilibrium!',
        meaning: 'A catalyst increases the rates of BOTH forward and backward reactions equally by lowering activation energy. It only allows the system to reach equilibrium faster.',
        example: 'Adding iron catalyst in Haber process increases production SPEED, but does NOT increase the percentage yield of ammonia.',
        examTip: 'The #1 JAMB Chemistry Trap: "Which factor increases yield of ammonia?" Candidates pick Catalyst! Wrong! Catalyst only increases RATE, never yield!',
        pastQuestionRef: 'JAMB 2019 Q31 • WAEC 2022 Q4',
        tags: ['Catalysts', 'Top Trap']
      },
      {
        id: 4,
        phrase: 'Equilibrium Constant (Kc) is ONLY Changed by TEMPERATURE',
        meaning: 'Concentration, pressure, volume, and catalysts do NOT change the value of Kc! ONLY a change in temperature can alter the numerical value of Kc.',
        example: 'Doubling the concentration of reactants changes position, but the ratio Kc remains constant at the same temperature.',
        examTip: 'Whenever an exam asks "What changes the value of the equilibrium constant?", the answer is ALWAYS Temperature!',
        pastQuestionRef: 'JAMB 2021 Q39',
        tags: ['Equilibrium Constant', 'Physical Chemistry']
      },
      {
        id: 5,
        phrase: 'Inert Gas at Constant Volume: NO EFFECT on Equilibrium',
        meaning: 'Adding an unreactive noble gas (e.g. Helium or Argon) at constant volume increases total pressure, but partial pressures of reactants remain unchanged.',
        example: 'Adding Argon to N₂O₄ ⇌ 2NO₂ in a rigid closed container has ZERO effect on equilibrium position.',
        examTip: 'Only if inert gas is added at CONSTANT PRESSURE (allowing volume to expand) does it shift towards the side with more moles.',
        pastQuestionRef: 'JAMB 2023 Q18',
        tags: ['Inert Gas', 'Gases']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 7. BIOLOGY — GENETICS & ABO BLOOD GROUPS (DAY 1 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'bio-genetics-day1',
    title: '🍃 Day 1: Genetics, Blood Groups & Sickle Cell Traps',
    subtitle: 'Deep Series (Day 1 of 3) • Topics Nigerian Exams Never Joke With',
    subject: 'Biology',
    badge: 'DAY 1 OF 3 • GENETICS',
    icon: '🍃',
    seriesName: 'Genetics & Inheritance 3-Day Sprint',
    dayNumber: 1,
    totalDays: 3,
    shareQuote: 'Type O blood is recessive; HbS is codominant! Conquer Genetics on StudyPlug Morning Tea.',
    nextDayPreview: {
      dayNumber: 2,
      title: 'Sex-Linked Inheritance: Hemophilia & Color Blindness',
      description: 'Why mothers pass sex-linked traits to sons, and how to spot carrier traps.'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Today)', topic: 'ABO Blood Groups, Rhesus Factor & Genotypes', focus: 'Alleles IA, IB, i + HbA and HbS carrier ratios', isToday: true },
      { dayOfWeek: 'Day 2 (Tomorrow)', topic: 'Sex-Linked Inheritance & Pedigrees', focus: 'Hemophilia, Color blindness on X-chromosome', isToday: false },
      { dayOfWeek: 'Day 3 (Saturday)', topic: 'Real WAEC/JAMB Genetics Questions Drill', focus: 'Calculate offspring percentage probabilities under 60s', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'ABO Blood Group: Three Alleles (IA, IB, i)',
        meaning: 'Alleles IA and IB are CODOMINANT to each other, but both are completely DOMINANT over allele i (Type O).',
        example: 'A person with blood group A can be homozygous (IAIA) or heterozygous (IAi). Blood group O is strictly homozygous recessive (ii).',
        examTip: 'Can a Group A parent and a Group B parent have a Group O child? YES! If both are heterozygous (IAi × IBi), 25% chance of Group O (ii).',
        pastQuestionRef: 'JAMB 2021 Q42 • WAEC 2020 Q29',
        tags: ['Genetics', 'Blood Groups']
      },
      {
        id: 2,
        phrase: 'Universal Donor vs Universal Recipient Trap',
        meaning: 'Blood Group O negative (O⁻) is the true Universal Donor (no A, B, or Rh antigens). Blood Group AB positive (AB⁺) is the Universal Recipient.',
        example: 'O⁻ red blood cells can be safely given to any patient without triggering agglutination.',
        examTip: 'Watch out: If Rhesus is not mentioned, O is donor and AB is recipient. If Rhesus is specified, O⁻ is the true donor!',
        pastQuestionRef: 'WAEC 2022 Q14 • JAMB 2019 Q11',
        tags: ['Blood Groups', 'Transfusion']
      },
      {
        id: 3,
        phrase: 'Sickle Cell Genotypes: AS × AS Marriage Probability',
        meaning: 'When two sickle-cell carriers (HbA HbS) marry, the Mendelian offspring ratio is: 25% Normal (AA), 50% Carrier (AS), 25% Sickler (SS).',
        example: 'For every pregnancy, there is a 1 in 4 (25%) risk of having a sickle cell child (SS).',
        examTip: 'JAMB Trap: Each pregnancy is an INDEPENDENT event! If their first 2 children are SS, the third child STILL has a 25% chance of being SS.',
        pastQuestionRef: 'JAMB 2022 Q35 • WAEC 2023 Q38',
        tags: ['Sickle Cell', 'Probability']
      },
      {
        id: 4,
        phrase: 'Monohybrid Cross Ratios: Phenotype 3:1 vs Genotype 1:2:1',
        meaning: 'Crossing two heterozygous individuals (Tt × Tt) produces a phenotypic ratio of 3 Tall : 1 Short, but a genotypic ratio of 1 TT : 2 Tt : 1 tt.',
        example: 'Examiners frequently ask for GENOTYPIC ratio. Many candidates mistakenly pick 3:1 instead of 1:2:1!',
        examTip: 'Always double-check whether the question asked for PHENOTYPIC (visible appearance) or GENOTYPIC (gene makeup) ratio!',
        pastQuestionRef: 'JAMB 2020 Q31',
        tags: ['Mendel', 'Ratios']
      },
      {
        id: 5,
        phrase: 'Erythroblastosis Fetalis (Hemolytic Disease of Newborn)',
        meaning: 'Occurs when an Rh-negative mother carries an Rh-positive fetus. In subsequent pregnancies, maternal antibodies cross placenta and attack fetal RBCs.',
        example: 'Prevented clinically by administering RhoGAM (anti-Rh antibodies) immediately after the first delivery.',
        examTip: 'Condition: Mother MUST be Rh⁻ and Father/Fetus MUST be Rh⁺. If mother is Rh⁺, this disease CANNOT occur.',
        pastQuestionRef: 'WAEC 2021 Q44',
        tags: ['Rhesus Factor', 'Reproduction']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 8. ECONOMICS — ELASTICITY OF DEMAND (DAY 1 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'econ-elasticity-day1',
    title: '📈 Day 1: Price Elasticity of Demand (PED) & Revenue Test',
    subtitle: 'Deep Series (Day 1 of 3) • Topics Nigerian Exams Never Joke With',
    subject: 'Economics',
    badge: 'DAY 1 OF 3 • MICROECONOMICS',
    icon: '📈',
    seriesName: 'Elasticity of Demand 3-Day Sprint',
    dayNumber: 1,
    totalDays: 3,
    shareQuote: 'If demand is inelastic, raise the price to increase revenue! Master Economics on StudyPlug Morning Tea.',
    nextDayPreview: {
      dayNumber: 2,
      title: 'Cross Elasticity & Income Elasticity of Demand',
      description: 'How to classify goods: Substitutes (+), Complements (-), Normal vs Inferior goods.'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Today)', topic: 'PED Formula & The 5 Degrees of Elasticity', focus: 'Percentage formula + Total Revenue test', isToday: true },
      { dayOfWeek: 'Day 2 (Tomorrow)', topic: 'Cross & Income Elasticity (XED & YED)', focus: 'Substitutes (+) vs Complements (-), Normal vs Inferior', isToday: false },
      { dayOfWeek: 'Day 3 (Sunday)', topic: 'Real WAEC/JAMB Calculation Drill', focus: 'Solve 5 elasticity numerical calculations in 90 seconds', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'Price Elasticity of Demand Formula: %ΔQd / %ΔP',
        meaning: 'Measures responsiveness of quantity demanded to a percentage change in price. PED = (% Change in Quantity Demanded) / (% Change in Price).',
        example: 'If price rises by 10% and quantity demanded falls by 20%, PED = 20% / 10% = 2.0 (Elastic).',
        examTip: 'Ignore the negative sign! By convention, economists use absolute values. A coefficient of 2.0 is elastic because 2.0 > 1.',
        pastQuestionRef: 'JAMB 2022 Q7 • WAEC 2021 Q16',
        tags: ['Elasticity', 'Formulas']
      },
      {
        id: 2,
        phrase: 'The 5 Degrees of Elasticity: 0, <1, 1, >1, ∞',
        meaning: '• Ed = 0: Perfectly Inelastic (Vertical curve)\n• Ed < 1: Inelastic (Necessities)\n• Ed = 1: Unitary Elastic (Rectangular hyperbola)\n• Ed > 1: Elastic (Luxuries/substitutes)\n• Ed = ∞: Perfectly Elastic (Horizontal curve).',
        example: 'Life-saving insulin has Ed close to 0 (perfectly inelastic).',
        examTip: 'JAMB Diagram Trap: Vertical demand curve = 0. Horizontal demand curve = Infinity.',
        pastQuestionRef: 'WAEC 2022 Q19 • JAMB 2019 Q28',
        tags: ['Elasticity', 'Curves']
      },
      {
        id: 3,
        phrase: 'Total Revenue Test for Inelastic Demand',
        meaning: 'When demand is INELASTIC (Ed < 1), Price and Total Revenue move in the SAME direction. Raising price INCREASES total revenue.',
        example: 'A government taxing tobacco or fuel knows revenue will rise because consumers cannot easily reduce consumption.',
        examTip: 'To maximize revenue: If elastic → LOWER price. If inelastic → RAISE price. If unitary → DO NOT CHANGE price.',
        pastQuestionRef: 'JAMB 2021 Q15',
        tags: ['Total Revenue', 'Revenue Test']
      },
      {
        id: 4,
        phrase: 'Cross Elasticity: Positive (+) for Substitutes, Negative (-) for Complements',
        meaning: 'Measures responsiveness of demand for good X to price changes of good Y. Exy > 0 means substitutes. Exy < 0 means complements.',
        example: 'Price of Milo rises → Demand for Bournvita rises (Positive = Substitutes). Price of petrol rises → Demand for cars falls (Negative = Complements).',
        examTip: 'The sign (+ or -) is the entire answer in JAMB! Positive = Substitutes, Negative = Complements, Zero = Unrelated.',
        pastQuestionRef: 'WAEC 2020 Q24 • JAMB 2023 Q12',
        tags: ['Cross Elasticity', 'Substitutes']
      },
      {
        id: 5,
        phrase: 'Income Elasticity: Normal Good (+) vs Inferior Good (-)',
        meaning: 'Measures demand response to income changes. If income rises and demand rises (Ey > 0), it is a Normal Good. If demand falls (Ey < 0), it is an Inferior Good.',
        example: 'As income rises, demand for low-grade secondhand clothes falls (Inferior Good).',
        examTip: 'Watch out for "Giffen Goods" and "Veblen Goods" (exceptions to the law of demand).',
        pastQuestionRef: 'JAMB 2020 Q8',
        tags: ['Income Elasticity', 'Goods']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 9. GOVERNMENT — CONSTITUTIONAL DEVELOPMENT IN NIGERIA (DAY 1 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'govt-constitution-day1',
    title: '🏛️ Day 1: Nigerian Constitutional Milestones (1922 to 1963)',
    subtitle: 'Deep Series (Day 1 of 3) • Topics Nigerian Exams Never Joke With',
    subject: 'Government',
    badge: 'DAY 1 OF 3 • CONSTITUTIONS',
    icon: '🏛️',
    seriesName: 'Constitutional History 3-Day Sprint',
    dayNumber: 1,
    totalDays: 3,
    shareQuote: 'Clifford introduced the elective principle; Lyttelton brought formal federalism! Master Government on StudyPlug.',
    nextDayPreview: {
      dayNumber: 2,
      title: '1979 Presidential Constitution vs 1999 4th Republic',
      description: 'Why Nigeria switched from Parliamentary to Presidential system in 1979.'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Today)', topic: 'Clifford (1922) to 1963 Republican Constitution', focus: 'Elective principle, regionalism & formal federalism', isToday: true },
      { dayOfWeek: 'Day 2 (Tomorrow)', topic: '1979 vs 1999 Presidential Constitutions', focus: 'Separation of powers, impeachment & checks/balances', isToday: false },
      { dayOfWeek: 'Day 3 (Sunday)', topic: 'Real WAEC/JAMB Government Past Questions Drill', focus: '5 Authentic past questions decoded under 60 seconds', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'Clifford Constitution of 1922: Introduced the ELECTIVE PRINCIPLE',
        meaning: 'First Nigerian constitution to introduce election of Africans into Legislative Council (4 elected seats: 3 for Lagos, 1 for Calabar). Led to founding of NNDP by Herbert Macaulay (1923).',
        example: 'Only males with an income of £100 per annum had the franchise to vote.',
        examTip: 'The #1 JAMB Question in Constitutional History: "Which constitution introduced the elective principle?" → Hugh Clifford (1922)!',
        pastQuestionRef: 'JAMB 2022 Q18 • WAEC 2021 Q3',
        tags: ['Clifford', 'Elective Principle']
      },
      {
        id: 2,
        phrase: 'Richards Constitution of 1946: Introduced REGIONALISM',
        meaning: 'Created the three regions (Northern, Western, Eastern Regions) and Regional Houses of Assembly to promote national unity while retaining diversity.',
        example: 'Severely criticized by nationalists because Sir Arthur Richards did not consult Nigerians before drafting it.',
        examTip: 'Key keyword: REGIONALISM. If you see Regionalism in Nigerian history, the answer is Arthur Richards (1946).',
        pastQuestionRef: 'WAEC 2022 Q7 • JAMB 2020 Q14',
        tags: ['Richards', 'Regionalism']
      },
      {
        id: 3,
        phrase: 'Macpherson Constitution of 1951: Nationwide Consultation',
        meaning: 'First constitution drafted after extensive consultation with Nigerians from village meetings to the Ibadan National Conference (1950). Created Council of Ministers.',
        example: 'Created a quasi-federal system where central legislature could overrule regional laws.',
        examTip: 'Remember: Macpherson is famous for "Widest consultation" and creating a "Quasi-federal" structure.',
        pastQuestionRef: 'JAMB 2019 Q22',
        tags: ['Macpherson', 'Consultation']
      },
      {
        id: 4,
        phrase: 'Lyttelton Constitution of 1954: Formally established FEDERALISM',
        meaning: 'Oliver Lyttelton Constitution formally introduced a true federal structure in Nigeria, dividing powers into Exclusive, Concurrent, and Residual legislative lists.',
        example: 'Made the regions autonomous, created premier positions, and established Lagos as a Federal Territory.',
        examTip: 'JAMB High-Yield: "Which constitution introduced formal Federalism in Nigeria?" → Oliver Lyttelton (1954)!',
        pastQuestionRef: 'JAMB 2021 Q9 • WAEC 2023 Q12',
        tags: ['Lyttelton', 'Federalism']
      },
      {
        id: 5,
        phrase: '1963 Republican Constitution: Cut Ties with British Crown',
        meaning: 'Replaced Queen Elizabeth II with Dr. Nnamdi Azikiwe as ceremonial President. The Supreme Court of Nigeria replaced the British Privy Council as final court of appeal.',
        example: 'Mid-Western region was created in 1963 under this constitution.',
        examTip: 'Distinction: 1960 Independence Constitution retained the British Queen as head of state. The 1963 REPUBLICAN constitution abolished this!',
        pastQuestionRef: 'WAEC 2020 Q18 • JAMB 2023 Q19',
        tags: ['Republican', 'Supreme Court']
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 10. LITERATURE IN ENGLISH — FIGURES OF SPEECH & DEVICES (DAY 1 OF 3)
  // ─────────────────────────────────────────────────────────────────────────────
  {
    id: 'lit-figures-of-speech-day1',
    title: '📚 Day 1: Poetic Devices & Figures of Speech Exams Never Joke With',
    subtitle: 'Deep Series (Day 1 of 3) • Topics Nigerian Exams Never Joke With',
    subject: 'Literature in English',
    badge: 'DAY 1 OF 3 • LITERARY DEVICES',
    icon: '📚',
    seriesName: 'Literary Devices 3-Day Sprint',
    dayNumber: 1,
    totalDays: 3,
    shareQuote: 'Oxymoron pairs opposites side-by-side; Paradox hides truth in contradiction! Master Literature on StudyPlug.',
    nextDayPreview: {
      dayNumber: 2,
      title: 'Dramatic Techniques: Soliloquy, Aside & Dramatic Irony',
      description: 'Master Shakespearean drama tools and theatrical devices for WAEC Paper 1 & 2.'
    },
    weekBucket: [
      { dayOfWeek: 'Day 1 (Today)', topic: 'Metaphor, Oxymoron, Paradox & Synecdoche', focus: 'Side-by-side contrasts and part-for-whole figures', isToday: true },
      { dayOfWeek: 'Day 2 (Tomorrow)', topic: 'Dramatic Irony, Soliloquy & Aside', focus: 'Theatrical devices in prescribed drama', isToday: false },
      { dayOfWeek: 'Day 3 (Sunday)', topic: 'Real WAEC/JAMB Literature Extract Questions', focus: '5 Unseen poetry extracts decoded step-by-step', isToday: false }
    ],
    items: [
      {
        id: 1,
        phrase: 'Oxymoron vs Paradox: The Contrast Difference',
        meaning: '• Oxymoron: Two contradictory words placed directly SIDE BY SIDE (e.g. "deafening silence", "cruel kindness").\n• Paradox: A whole statement that sounds contradictory but reveals a profound truth upon reflection.',
        example: 'Oxymoron: "Parting is such sweet sorrow". Paradox: "The child is father of the man".',
        examTip: 'Quick Test: If it is 2 adjacent words, it is an Oxymoron! If it is a full sentence or thought, it is a Paradox!',
        pastQuestionRef: 'JAMB 2022 Q4 • WAEC 2021 Q11',
        tags: ['Oxymoron', 'Paradox']
      },
      {
        id: 2,
        phrase: 'Synecdoche vs Metonymy: Part vs Association',
        meaning: '• Synecdoche: Using a PART of something to represent the whole (e.g. "All hands on deck" → hands = workers).\n• Metonymy: Using an ASSOCIATED object to represent the actual thing (e.g. "The Crown" → Crown = Monarch).',
        example: 'Synecdoche: "Fifty head of cattle" (head represents whole cow). Metonymy: "The pen is mightier than the sword" (pen = writing; sword = military force).',
        examTip: 'Memory Trick: Is it a physical piece of the object? If yes = Synecdoche. If it is an associated symbol = Metonymy.',
        pastQuestionRef: 'WAEC 2022 Q3 • JAMB 2020 Q18',
        tags: ['Synecdoche', 'Metonymy']
      },
      {
        id: 3,
        phrase: 'Apostrophe (Addressing the Inanimate or Absent)',
        meaning: 'A literary figure where the speaker directly addresses an absent person, dead person, or an abstract inanimate concept as if it were alive and present.',
        example: '"O Death, where is thy sting? O Grave, where is thy victory?"',
        examTip: 'Look for exclamations starting with "O...", "Oh...", or addressing abstractions like Time, Wind, Love, or Country.',
        pastQuestionRef: 'JAMB 2019 Q15 • WAEC 2023 Q6',
        tags: ['Apostrophe', 'Poetry']
      },
      {
        id: 4,
        phrase: 'Dramatic Irony: Audience Knows What Characters Do Not',
        meaning: 'Occurs when the audience or reader possesses crucial knowledge that one or more characters on stage do not know.',
        example: 'In Romeo and Juliet, the audience knows Juliet is merely asleep from a potion, but Romeo thinks she is dead.',
        examTip: 'Essential for Shakespearean drama questions in WAEC Literature Paper 2!',
        pastQuestionRef: 'WAEC 2020 Q2',
        tags: ['Drama', 'Irony']
      },
      {
        id: 5,
        phrase: 'Euphemism: Mild Expression for a Harsh Reality',
        meaning: 'The substitution of a mild, gentle, or indirect expression for one that is harsh, blunt, or offensive.',
        example: '"He passed away" instead of "He died". "Senior citizen" instead of "Old person".',
        examTip: 'Antonym: "Dysphemism" (using a harsh or derogatory term instead of a neutral one).',
        pastQuestionRef: 'JAMB 2021 Q3',
        tags: ['Euphemism', 'Figures of Speech']
      }
    ]
  }
];
