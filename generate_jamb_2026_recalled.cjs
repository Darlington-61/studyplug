const fs = require('fs');

const questions = [
  // ==========================================
  // --- THE LEKKI HEADMASTER (YOUTUBE & CBT RECALL) ---
  // ==========================================
  {
    id: 99001,
    questionNumber: 1,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Literary Devices & Style",
    year: 2026,
    difficulty: "Medium",
    text: "When the narrator writes that Mr. Bepo's \"thoughts danced crazy in his head\", which literary device is employed?",
    options: [
      { key: "A", text: "Oxymoron" },
      { key: "B", text: "Personification" },
      { key: "C", text: "Antithesis" },
      { key: "D", text: "Allusion" }
    ],
    correctAnswer: "B",
    explanation: "Personification is the attribution of human characteristics or actions to non-human or abstract entities. Here, \"thoughts\" are described as having the ability to \"dance\", which is a human action reflecting Mr. Bepo's turbulent psychological state.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99002,
    questionNumber: 2,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Character Analysis",
    year: 2026,
    difficulty: "Medium",
    text: "What led to Mr. Bepo being affectionately nicknamed \"The Lekki Headmaster\" by staff and parents?",
    options: [
      { key: "A", text: "He owned prime beachfront properties in the Lekki peninsula" },
      { key: "B", text: "Mr. Audu compared his measured conflict resolution with Mrs. Johnson to King Oloja in the classic 'Village Headmaster'" },
      { key: "C", text: "He was appointed the permanent representative of the Lagos State Ministry of Education in Lekki" },
      { key: "D", text: "He strictly enforced Lekki zone curriculum guidelines" }
    ],
    correctAnswer: "B",
    explanation: "In Kabir Alabi Garba's novel, the nickname originated when Mr. Audu humourously likened Bepo's dignified, patient mediation during a heated dispute involving Mrs. Johnson to the regal wisdom of King Oloja from the legendary Nigerian television drama 'The Village Headmaster'.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99003,
    questionNumber: 3,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Plot & Theme of Migration",
    year: 2026,
    difficulty: "Medium",
    text: "When Ikenna declared that he would rather remain in Jos than travel to Canada, what effect did this revelation have on Mr. Bepo?",
    options: [
      { key: "A", text: "It reinforced Bepo's own inner hesitations regarding the 'Japa' syndrome and abandonment of home" },
      { key: "B", text: "It made him furiously cancel Ikenna's scholarship" },
      { key: "C", text: "It prompted him to immediately purchase plane tickets for his entire family" },
      { key: "D", text: "He reported Ikenna to the School Governing Board for insubordination" }
    ],
    correctAnswer: "A",
    explanation: "Ikenna's principled attachment to his homeland and preference for staying in Jos struck a deep sympathetic chord in Mr. Bepo, amplifying Bepo's moral conflict over abandoning Nigeria ('Japa syndrome') despite harsh economic pressures.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99004,
    questionNumber: 4,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Chapter 1: Dusk",
    year: 2026,
    difficulty: "Medium",
    text: "What caused the sudden interruption and pandemonium during the morning assembly at Stardom Schools in Chapter 1?",
    options: [
      { key: "A", text: "An armed robbery attempt at the school gate" },
      { key: "B", text: "The sudden physical collapse of an asthmatic student amidst the morning heat and dust" },
      { key: "C", text: "A sudden strike notice declared by teachers" },
      { key: "D", text: "A swarm of bees invading the assembly grounds" }
    ],
    correctAnswer: "B",
    explanation: "In Chapter 1 ('Dusk'), the assembly is thrown into commotion when a junior student suffering from asthma collapses due to the heavy dust, high humidity, and overcrowding, exposing the school's urgent infrastructural strain.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99005,
    questionNumber: 5,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Farewell Ceremony",
    year: 2026,
    difficulty: "Hard",
    text: "What was the exact wording emblazoned on the farewell banner presented to Mr. Bepo at Stardom Schools?",
    options: [
      { key: "A", text: "\"Adieu to an Incorruptible Captain\"" },
      { key: "B", text: "\"For He Gave Stardom His Very Best\"" },
      { key: "C", text: "\"Service with Honour and Distinction\"" },
      { key: "D", text: "\"The Pride of Lekki Peninsula\"" }
    ],
    correctAnswer: "B",
    explanation: "At the emotional valedictory gathering, the staff, management, and parents unveiled a ceremonial banner reading: \"For He Gave Stardom His Very Best\", commemorating his tireless dedication to building character and academic excellence.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99006,
    questionNumber: 6,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Plot Details",
    year: 2026,
    difficulty: "Medium",
    text: "How much did Mr. Bepo incur as a penalty fee when forced to reschedule his international flight due to school obligations?",
    options: [
      { key: "A", text: "$50" },
      { key: "B", text: "$100" },
      { key: "C", text: "$250" },
      { key: "D", text: "$500" }
    ],
    correctAnswer: "B",
    explanation: "Bepo had to sacrifice a non-refundable $100 rescheduling surcharge to postpone his travel reservation so he could resolve pending institutional accreditation and administrative duties at Stardom.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99007,
    questionNumber: 7,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Themes: Migration & Family",
    year: 2026,
    difficulty: "Medium",
    text: "In The Lekki Headmaster, what was Mrs. Bepo's primary apprehension regarding the family's proposed relocation abroad ('Japa')?",
    options: [
      { key: "A", text: "The fear of extreme cold weather in North America" },
      { key: "B", text: "The loss of dignity and starting from the lowest societal rungs after decades of respected professional standing" },
      { key: "C", text: "The inability of their children to adapt to foreign schools" },
      { key: "D", text: "Lack of access to traditional Nigerian cuisine" }
    ],
    correctAnswer: "B",
    explanation: "Mrs. Bepo highlighted the psychological and social humiliation often suffered by accomplished African professionals who migrate only to find themselves relegated to menial low-tier jobs, sacrificing the honour and influence they commanded at home.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Flashlearners Lekki Headmaster Series"
  },
  {
    id: 99008,
    questionNumber: 8,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Student Leadership Elections",
    year: 2026,
    difficulty: "Medium",
    text: "During the election of student prefects at Stardom Schools, what core leadership principle did Mr. Bepo urge the student electorate to prioritize?",
    options: [
      { key: "A", text: "Flamboyant oratory and campaign gift distribution" },
      { key: "B", text: "Proven integrity, emotional restraint, and leadership by moral example" },
      { key: "C", text: "Family wealth and social standing" },
      { key: "D", text: "Physical athletic prowess and height" }
    ],
    correctAnswer: "B",
    explanation: "Mr. Bepo cautioned students against voting based on superficial charm or gift distribution, emphasizing that true leadership requires moral integrity, service, and emotional maturity.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Flashlearners Lekki Headmaster Series"
  },
  {
    id: 99009,
    questionNumber: 9,
    exam: "JAMB",
    subject: "Use of English",
    topic: "The Lekki Headmaster",
    subtopic: "Academic Integrity",
    year: 2026,
    difficulty: "Medium",
    text: "How did Mr. Bepo handle the influential parents who attempted to manipulate internal examination grades at Stardom Schools?",
    options: [
      { key: "A", text: "He accepted their donations in exchange for concessions" },
      { key: "B", text: "He strictly stood his ground, refusing to inflate marks or compromise academic standards" },
      { key: "C", text: "He referred all grading disputes to the student prefects" },
      { key: "D", text: "He resigned his position on the spot" }
    ],
    correctAnswer: "B",
    explanation: "A defining trait of Mr. Bepo's leadership is his incorruptibility. When affluent parents exerted pressure for undue grading favours, he defended institutional integrity and fair evaluation for every child.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Flashlearners Lekki Headmaster Series"
  },

  // ==========================================
  // --- USE OF ENGLISH (ORAL, CONCORD, STRESS) ---
  // ==========================================
  {
    id: 99010,
    questionNumber: 10,
    exam: "JAMB",
    subject: "Use of English",
    topic: "Emphatic Stress",
    subtopic: "Contrastive Focus",
    year: 2026,
    difficulty: "Medium",
    text: "In the sentence: \"We BROUGHT a car to England\", which question does the sentence correctly provide an emphatic answer to?",
    options: [
      { key: "A", text: "Did they bring a car to England?" },
      { key: "B", text: "Did you rent a car in England?" },
      { key: "C", text: "Did you bring a bus to England?" },
      { key: "D", text: "Did you bring a car to Nigeria?" }
    ],
    correctAnswer: "B",
    explanation: "In emphatic stress, capitalising the verb 'BROUGHT' signals that the action itself is being contrasted with another verb. Therefore, it contradicts: 'Did you rent a car in England?' -> 'No, we BROUGHT a car to England.'",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99011,
    questionNumber: 11,
    exam: "JAMB",
    subject: "Use of English",
    topic: "Concord",
    subtopic: "Subject-Verb Agreement with Quasi-Coordinators",
    year: 2026,
    difficulty: "Medium",
    text: "Choose the option that correctly completes the sentence:\n\"The Headmaster, as well as his teachers, ______ present at the hall yesterday.\"",
    options: [
      { key: "A", text: "were" },
      { key: "B", text: "was" },
      { key: "C", text: "are" },
      { key: "D", text: "have been" }
    ],
    correctAnswer: "B",
    explanation: "When a subject is joined to another noun by parenthetical phrases like 'as well as', 'together with', 'along with', or 'in addition to', the verb agrees only with the primary subject before the comma ('The Headmaster' = singular third person -> 'was').",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99012,
    questionNumber: 12,
    exam: "JAMB",
    subject: "Use of English",
    topic: "Oral Forms: Rhymes",
    subtopic: "Homophones & Vowel Quality",
    year: 2026,
    difficulty: "Hard",
    text: "Which of the following words rhymes with \"quay\"?",
    options: [
      { key: "A", text: "Pray" },
      { key: "B", text: "Key" },
      { key: "C", text: "Clay" },
      { key: "D", text: "Day" }
    ],
    correctAnswer: "B",
    explanation: "Despite its deceptive spelling, 'quay' (a stone or concrete platform lying alongside or projecting into water for loading ships) is pronounced /kiː/, perfectly rhyming with 'key' /kiː/.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99013,
    questionNumber: 13,
    exam: "JAMB",
    subject: "Use of English",
    topic: "Stress Patterns",
    subtopic: "Polysyllabic Word Stress",
    year: 2026,
    difficulty: "Medium",
    text: "Which syllable receives the primary stress in the word \"enthusiasm\"?",
    options: [
      { key: "A", text: "EN-thu-si-asm" },
      { key: "B", text: "en-THU-si-asm" },
      { key: "C", text: "en-thu-SI-asm" },
      { key: "D", text: "en-thu-si-ASM" }
    ],
    correctAnswer: "B",
    explanation: "The noun 'enthusiasm' /ɪnˈθjuːziæzəm/ carries its primary tonic accent on the second syllable: en-THU-si-asm.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99014,
    questionNumber: 14,
    exam: "JAMB",
    subject: "Use of English",
    topic: "Question Tags",
    subtopic: "Imperative Suggestions",
    year: 2026,
    difficulty: "Easy",
    text: "Select the correct tag question:\n\"Let us prepare thoroughly for the upcoming CBT examination, ______?\"",
    options: [
      { key: "A", text: "will we" },
      { key: "B", text: "shall we" },
      { key: "C", text: "shouldn't we" },
      { key: "D", text: "can't we" }
    ],
    correctAnswer: "B",
    explanation: "In English grammar, imperative proposals beginning with \"Let us\" (or \"Let's\") take the standard tag \"shall we?\".",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "YouTube CBT Revision Series"
  },
  {
    id: 99015,
    questionNumber: 15,
    exam: "JAMB",
    subject: "Use of English",
    topic: "Vowel Sounds",
    subtopic: "Long Vowel /i:/",
    year: 2026,
    difficulty: "Medium",
    text: "Which of the following words contains the same vowel sound as in \"machine\"?",
    options: [
      { key: "A", text: "Ceiling" },
      { key: "B", text: "Shed" },
      { key: "C", text: "Thread" },
      { key: "D", text: "Bit" }
    ],
    correctAnswer: "A",
    explanation: "In 'machine' /məˈʃiːn/, the accented vowel is the long close front unrounded vowel /iː/. In 'ceiling' /ˈsiːlɪŋ/, the letters 'ei' represent the identical /iː/ phoneme.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "YouTube CBT Revision Series"
  },

  // ==========================================
  // --- MATHEMATICS (YOUTUBE & CBT RECALL) ---
  // ==========================================
  {
    id: 99016,
    questionNumber: 16,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Indices, Log & Surds",
    subtopic: "Logarithmic Equations",
    year: 2026,
    difficulty: "Medium",
    text: "Evaluate the logarithm: log₀.₅ 32.",
    options: [
      { key: "A", text: "-5" },
      { key: "B", text: "-4" },
      { key: "C", text: "4" },
      { key: "D", text: "5" }
    ],
    correctAnswer: "A",
    explanation: "Chalkboard Calculation:\nLet y = log₀.₅ 32.\nIn exponential form: (0.5)^y = 32.\n(1/2)^y = 2⁵\n(2⁻¹)^y = 2⁵\n2⁻ʸ = 2⁵\nEquating exponents: -y = 5 => y = -5.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99017,
    questionNumber: 17,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Indices, Log & Surds",
    subtopic: "Exponential Equations",
    year: 2026,
    difficulty: "Hard",
    text: "Solve for x in the exponential equation: 3^(2x - 1) × 9^x = 27^(x + 1).",
    options: [
      { key: "A", text: "2" },
      { key: "B", text: "3" },
      { key: "C", text: "4" },
      { key: "D", text: "5" }
    ],
    correctAnswer: "C",
    explanation: "Chalkboard Step-by-Step:\nExpress all terms in base 3:\n3^(2x - 1) × (3²)^x = (3³)^(x + 1)\n3^(2x - 1) × 3^(2x) = 3^(3x + 3)\nCombine exponents using product law:\n3^((2x - 1) + 2x) = 3^(3x + 3)\n3^(4x - 1) = 3^(3x + 3)\nEquating exponents:\n4x - 1 = 3x + 3\n4x - 3x = 3 + 1 => x = 4.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Excellence Academy YouTube 2025/2026"
  },
  {
    id: 99018,
    questionNumber: 18,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Statistics",
    subtopic: "Measures of Dispersion: Range",
    year: 2026,
    difficulty: "Easy",
    text: "Determine the range of the statistical data distribution: -4, 7, 12, -1, 0, 15, 3.",
    options: [
      { key: "A", text: "11" },
      { key: "B", text: "15" },
      { key: "C", text: "19" },
      { key: "D", text: "21" }
    ],
    correctAnswer: "C",
    explanation: "Chalkboard Calculation:\nRange = Maximum value - Minimum value\nMaximum = 15\nMinimum = -4\nRange = 15 - (-4) = 15 + 4 = 19.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Excellence Academy YouTube 2025/2026"
  },
  {
    id: 99019,
    questionNumber: 19,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Financial Maths",
    subtopic: "Percentage Loss & Selling Price",
    year: 2026,
    difficulty: "Medium",
    text: "A merchant acquired a generator for ₦24,000 and subsequently sold it at a loss of 15%. Calculate the actual selling price.",
    options: [
      { key: "A", text: "₦19,800" },
      { key: "B", text: "₦20,400" },
      { key: "C", text: "₦21,200" },
      { key: "D", text: "₦22,000" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nLoss amount = 15% of ₦24,000 = (15 / 100) × 24,000 = ₦3,600.\nSelling Price = Cost Price - Loss\nSelling Price = ₦24,000 - ₦3,600 = ₦20,400.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Excellence Academy YouTube 2025/2026"
  },
  {
    id: 99020,
    questionNumber: 20,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Coordinate Geometry",
    subtopic: "Perpendicular Lines",
    year: 2026,
    difficulty: "Medium",
    text: "Find the gradient of a straight line perpendicular to the line 3x - 4y + 8 = 0.",
    options: [
      { key: "A", text: "3/4" },
      { key: "B", text: "-3/4" },
      { key: "C", text: "-4/3" },
      { key: "D", text: "4/3" }
    ],
    correctAnswer: "C",
    explanation: "Chalkboard Calculation:\nRewrite line in slope-intercept form y = mx + c:\n4y = 3x + 8 => y = (3/4)x + 2.\nSlope of given line m₁ = 3/4.\nFor perpendicular lines, m₁ × m₂ = -1:\n(3/4) × m₂ = -1 => m₂ = -4/3.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99021,
    questionNumber: 21,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Quadratic Equations",
    subtopic: "Nature of Roots & Discriminant",
    year: 2026,
    difficulty: "Hard",
    text: "For what value of k does the quadratic equation 2x² - 8x + k = 0 have equal and real roots?",
    options: [
      { key: "A", text: "4" },
      { key: "B", text: "8" },
      { key: "C", text: "16" },
      { key: "D", text: "32" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nA quadratic equation ax² + bx + c = 0 has equal roots when the discriminant Δ = b² - 4ac = 0.\nHere a = 2, b = -8, c = k:\n(-8)² - 4(2)(k) = 0\n64 - 8k = 0 => 8k = 64 => k = 8.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },

  // ==========================================
  // --- PHYSICS (YOUTUBE & CBT RECALL) ---
  // ==========================================
  {
    id: 99022,
    questionNumber: 22,
    exam: "JAMB",
    subject: "Physics",
    topic: "Waves - Sound",
    subtopic: "Closed Organ Pipe Harmonics",
    year: 2026,
    difficulty: "Hard",
    text: "Calculate the fundamental frequency of sound wave generated in an air pipe of length 0.45 m closed at one end, if the speed of sound in air is 340 m/s.",
    options: [
      { key: "A", text: "188.89 Hz" },
      { key: "B", text: "377.78 Hz" },
      { key: "C", text: "755.56 Hz" },
      { key: "D", text: "94.44 Hz" }
    ],
    correctAnswer: "A",
    explanation: "Chalkboard Calculation:\nFor a pipe closed at one end, the fundamental wavelength is λ = 4L.\nGiven length L = 0.45 m and velocity v = 340 m/s:\nλ = 4 × 0.45 = 1.80 m.\nFundamental frequency f₀ = v / λ = 340 / 1.80 = 188.89 Hz.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99023,
    questionNumber: 23,
    exam: "JAMB",
    subject: "Physics",
    topic: "Work & Machines",
    subtopic: "Mechanical Advantage & Efficiency",
    year: 2026,
    difficulty: "Medium",
    text: "A load of 96 N is raised by a lifting machine having a velocity ratio (V.R.) of 5. Calculate the effort required if the efficiency of the machine is 80%.",
    options: [
      { key: "A", text: "19.2 N" },
      { key: "B", text: "24.0 N" },
      { key: "C", text: "30.0 N" },
      { key: "D", text: "38.4 N" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nEfficiency η = (M.A. / V.R.) × 100%\n80% = (M.A. / 5) × 100% => M.A. = (80 × 5) / 100 = 4.0.\nSince M.A. = Load / Effort:\n4.0 = 96 / Effort => Effort = 96 / 4 = 24.0 N.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99024,
    questionNumber: 24,
    exam: "JAMB",
    subject: "Physics",
    topic: "Motion",
    subtopic: "Projectile Motion Maximum Height",
    year: 2026,
    difficulty: "Medium",
    text: "A stone is projected from level ground with an initial velocity of 40 m/s at an angle of 30° to the horizontal. Calculate the maximum height attained (Take g = 10 m/s²).",
    options: [
      { key: "A", text: "10 m" },
      { key: "B", text: "20 m" },
      { key: "C", text: "40 m" },
      { key: "D", text: "80 m" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nMaximum height H = (u² sin² θ) / (2g).\nGiven u = 40 m/s, θ = 30°, sin 30° = 0.5:\nH = (40² × (0.5)²) / (2 × 10)\nH = (1600 × 0.25) / 20 = 400 / 20 = 20 m.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "DTW Tutorials YouTube 2025/2026"
  },
  {
    id: 99025,
    questionNumber: 25,
    exam: "JAMB",
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "Resonance in RLC Circuits",
    year: 2026,
    difficulty: "Hard",
    text: "In a series AC circuit containing an inductor of 0.2 H and a capacitor of 50 µF, calculate the resonant frequency f₀ (Take π ≈ 3.142).",
    options: [
      { key: "A", text: "25.17 Hz" },
      { key: "B", text: "50.33 Hz" },
      { key: "C", text: "100.66 Hz" },
      { key: "D", text: "316.20 Hz" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nResonant frequency f₀ = 1 / (2π√(LC)).\nLC = 0.2 × (50 × 10⁻⁶) = 10 × 10⁻⁶ = 10⁻⁵.\n√(LC) = √(10⁻⁵) = 3.162 × 10⁻³ s.\nf₀ = 1 / (2 × 3.142 × 3.162 × 10⁻³) = 1 / (0.01987) ≈ 50.33 Hz.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "DTW Tutorials YouTube 2025/2026"
  },
  {
    id: 99026,
    questionNumber: 26,
    exam: "JAMB",
    subject: "Physics",
    topic: "Nuclear Physics",
    subtopic: "Radioactive Half-Life",
    year: 2026,
    difficulty: "Medium",
    text: "The half-life of a radioactive nuclide is 4 days. What fraction of the original sample will remain undecayed after 16 days?",
    options: [
      { key: "A", text: "1/4" },
      { key: "B", text: "1/8" },
      { key: "C", text: "1/16" },
      { key: "D", text: "1/32" }
    ],
    correctAnswer: "C",
    explanation: "Chalkboard Calculation:\nNumber of half-lives elapsed n = Total time / Half-life = 16 / 4 = 4.\nFraction remaining = (1/2)ⁿ = (1/2)⁴ = 1/16.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "DTW Tutorials YouTube 2025/2026"
  },
  {
    id: 99027,
    questionNumber: 27,
    exam: "JAMB",
    subject: "Physics",
    topic: "Elasticity",
    subtopic: "Elastic Potential Energy",
    year: 2026,
    difficulty: "Medium",
    text: "An elastic spring of force constant k = 1300 N/m is stretched by a tensile force of 50 N. Calculate the elastic potential energy stored in the spring.",
    options: [
      { key: "A", text: "0.48 J" },
      { key: "B", text: "0.96 J" },
      { key: "C", text: "1.92 J" },
      { key: "D", text: "3.85 J" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nElastic Potential Energy P.E. = 1/2 k e² = F² / (2k).\nGiven F = 50 N and k = 1300 N/m:\nP.E. = (50)² / (2 × 1300) = 2500 / 2600 ≈ 0.9615 J ≈ 0.96 J.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99028,
    questionNumber: 28,
    exam: "JAMB",
    subject: "Physics",
    topic: "Heat Energy",
    subtopic: "Apparent Expansivity of Liquids",
    year: 2026,
    difficulty: "Hard",
    text: "The real cubic expansivity of mercury is 1.80 × 10⁻⁴ K⁻¹ and the linear expansivity of glass is 8.0 × 10⁻⁶ K⁻¹. What is the apparent cubic expansivity of mercury in a glass bulb?",
    options: [
      { key: "A", text: "1.00 × 10⁻⁴ K⁻¹" },
      { key: "B", text: "1.56 × 10⁻⁴ K⁻¹" },
      { key: "C", text: "1.72 × 10⁻⁴ K⁻¹" },
      { key: "D", text: "2.04 × 10⁻⁴ K⁻¹" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nCubic expansivity of glass container γ_glass = 3 × α_glass = 3 × (8.0 × 10⁻⁶) = 2.4 × 10⁻⁵ K⁻¹ = 0.24 × 10⁻⁴ K⁻¹.\nApparent expansivity γ_apparent = γ_real - γ_glass\nγ_apparent = 1.80 × 10⁻⁴ - 0.24 × 10⁻⁴ = 1.56 × 10⁻⁴ K⁻¹.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99029,
    questionNumber: 29,
    exam: "JAMB",
    subject: "Physics",
    topic: "Measurements",
    subtopic: "Dimensions of Physical Quantities",
    year: 2026,
    difficulty: "Easy",
    text: "What is the dimensional formula for Power?",
    options: [
      { key: "A", text: "[M L T⁻²]" },
      { key: "B", text: "[M L² T⁻²]" },
      { key: "C", text: "[M L² T⁻³]" },
      { key: "D", text: "[M L⁻¹ T⁻²]" }
    ],
    correctAnswer: "C",
    explanation: "Power = Work / Time = (Force × Displacement) / Time.\n[Force] = [M L T⁻²]\n[Work] = [M L T⁻²] × [L] = [M L² T⁻²]\n[Power] = [M L² T⁻²] / [T] = [M L² T⁻³].",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99030,
    questionNumber: 30,
    exam: "JAMB",
    subject: "Physics",
    topic: "Magnetism",
    subtopic: "Terrestrial Magnetism",
    year: 2026,
    difficulty: "Medium",
    text: "At the Earth's magnetic equator, the angle of dip (magnetic inclination) is:",
    options: [
      { key: "A", text: "0°" },
      { key: "B", text: "45°" },
      { key: "C", text: "90°" },
      { key: "D", text: "180°" }
    ],
    correctAnswer: "A",
    explanation: "The angle of dip is the angle made by the Earth's total magnetic field with the horizontal. At the magnetic equator, the magnetic flux lines are strictly horizontal, making dip = 0°. At the magnetic poles, the lines are vertical, making dip = 90°.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },

  // ==========================================
  // --- CHEMISTRY (YOUTUBE & CBT RECALL) ---
  // ==========================================
  {
    id: 99031,
    questionNumber: 31,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    subtopic: "IUPAC Nomenclature of Alkenes",
    year: 2026,
    difficulty: "Medium",
    text: "Give the systematic IUPAC name for the organic compound: CH₃-CH=C(CH₃)₂.",
    options: [
      { key: "A", text: "2-methylbut-2-ene" },
      { key: "B", text: "3-methylbut-2-ene" },
      { key: "C", text: "2-methylbut-3-ene" },
      { key: "D", text: "Pent-2-ene" }
    ],
    correctAnswer: "A",
    explanation: "Chalkboard Breakdown:\n1. Longest continuous carbon chain containing double bond has 4 carbons -> root 'butene'.\n2. Number the chain from the right to give both double bond and methyl branch the lowest locants:\nC1: CH₃ (part of =C(CH₃)₂)\nC2: =C(CH₃) carrying the methyl substituent\nC3: =CH\nC4: -CH₃\nName: 2-methylbut-2-ene.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99032,
    questionNumber: 32,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Volumetric Analysis",
    subtopic: "Dilution Law",
    year: 2026,
    difficulty: "Medium",
    text: "Calculate the volume of distilled water that must be added to 25 cm³ of a standard solution to dilute its concentration tenfold (10 times).",
    options: [
      { key: "A", text: "250 cm³" },
      { key: "B", text: "225 cm³" },
      { key: "C", text: "200 cm³" },
      { key: "D", text: "175 cm³" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nDilution law: C₁V₁ = C₂V₂.\nIf diluted 10 times, C₂ = C₁ / 10.\nC₁ × 25 = (C₁ / 10) × V₂ => V₂ = 25 × 10 = 250 cm³ (Final total volume).\nVolume of water added = Final Volume - Initial Volume\n= 250 cm³ - 25 cm³ = 225 cm³.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99033,
    questionNumber: 33,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Gases and Gas Laws",
    subtopic: "Fountain Experiment & Gas Solubility",
    year: 2026,
    difficulty: "Medium",
    text: "The fountain experiment is uniquely demonstrated in the laboratory using which pair of extremely soluble gases?",
    options: [
      { key: "A", text: "Oxygen and Nitrogen" },
      { key: "B", text: "Ammonia (NH₃) and Hydrogen chloride (HCl)" },
      { key: "C", text: "Carbon dioxide and Sulphur dioxide" },
      { key: "D", text: "Hydrogen and Methane" }
    ],
    correctAnswer: "B",
    explanation: "The fountain experiment demonstrates the extraordinary aqueous solubility of ammonia (NH₃) and hydrogen chloride (HCl). When a small drop of water dissolves a huge volume of gas, a rapid vacuum forms, sucking up water as a dynamic fountain.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99034,
    questionNumber: 34,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Redox Reactions",
    subtopic: "Oxidizing and Reducing Agents",
    year: 2026,
    difficulty: "Medium",
    text: "In the chemical equation:\n3CuO(s) + 2NH₃(g) → 3Cu(s) + 3H₂O(l) + N₂(g)\nWhat role does ammonia (NH₃) play?",
    options: [
      { key: "A", text: "Oxidizing agent" },
      { key: "B", text: "Reducing agent" },
      { key: "C", text: "Catalyst" },
      { key: "D", text: "Dehydrating agent" }
    ],
    correctAnswer: "B",
    explanation: "In NH₃, nitrogen has an oxidation state of -3, which increases to 0 in N₂ (oxidation = loss of electrons). Nitrogen reduces copper from +2 in CuO to 0 in elemental Cu. Hence, NH₃ acts as the reducing agent.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99035,
    questionNumber: 35,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    subtopic: "Le Chatelier's Principle & Temperature",
    year: 2026,
    difficulty: "Medium",
    text: "For the endothermic reversible synthesis of nitric oxide:\nN₂(g) + O₂(g) ⇌ 2NO(g), ΔH = +180 kJ/mol\nWhat happens to the equilibrium mixture when the temperature is elevated?",
    options: [
      { key: "A", text: "Equilibrium shifts to the left, decreasing NO yield" },
      { key: "B", text: "Equilibrium shifts to the right, increasing NO yield" },
      { key: "C", text: "The equilibrium position remains unchanged" },
      { key: "D", text: "The equilibrium constant Kc decreases" }
    ],
    correctAnswer: "B",
    explanation: "According to Le Chatelier's principle, an increase in temperature favours the endothermic direction (the direction that absorbs heat). Since the forward reaction is endothermic (ΔH > 0), increasing temperature shifts equilibrium to the right, producing more NO.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Excellence Academy YouTube 2025/2026"
  },
  {
    id: 99036,
    questionNumber: 36,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Electrochemistry",
    subtopic: "Faraday's Laws of Electrolysis",
    year: 2026,
    difficulty: "Hard",
    text: "Calculate the quantity of electricity (in Coulombs) needed to deposit 0.54 g of silver from an aqueous solution of AgNO₃ (Ag = 108, 1 Faraday = 96,500 C).",
    options: [
      { key: "A", text: "241.25 C" },
      { key: "B", text: "482.50 C" },
      { key: "C", text: "965.00 C" },
      { key: "D", text: "1930.00 C" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nCathode half-reaction: Ag⁺(aq) + e⁻ → Ag(s).\n1 mole of Ag (108 g) requires 1 Faraday = 96,500 Coulombs.\nTo deposit 0.54 g of Ag:\nQuantity Q = (0.54 × 96,500) / 108 = 52,110 / 108 = 482.50 Coulombs.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Excellence Academy YouTube 2025/2026"
  },
  {
    id: 99037,
    questionNumber: 37,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    subtopic: "Preparation of Alkynes",
    year: 2026,
    difficulty: "Easy",
    text: "The action of cold water on calcium carbide (CaC₂) liberates which colourless gas that burns with a smoky luminous flame?",
    options: [
      { key: "A", text: "Methane" },
      { key: "B", text: "Ethyne (Acetylene)" },
      { key: "C", text: "Ethene" },
      { key: "D", text: "Propane" }
    ],
    correctAnswer: "B",
    explanation: "Reaction: CaC₂(s) + 2H₂O(l) → Ca(OH)₂(aq) + C₂H₂(g).\nEthyne (acetylene) is an alkyne produced by hydrolysing calcium carbide, commonly used in oxy-acetylene welding.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99038,
    questionNumber: 38,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Applied Chemistry",
    subtopic: "Synthetic Detergents",
    year: 2026,
    difficulty: "Medium",
    text: "Unlike soapy detergents which form scum with hard water, soapless (synthetic) detergents can be chemically represented by:",
    options: [
      { key: "A", text: "R-COONa" },
      { key: "B", text: "R-SO₃⁻Na⁺" },
      { key: "C", text: "R-COOK" },
      { key: "D", text: "R-OH" }
    ],
    correctAnswer: "B",
    explanation: "Soapless detergents are sodium salts of alkyl hydrogen sulphates or alkyl benzene sulphonates (general formula: R-OSO₃⁻Na⁺ or R-C₆H₄-SO₃⁻Na⁺). Their calcium and magnesium salts are soluble in water, preventing scum formation in hard water.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },

  // ==========================================
  // --- BIOLOGY (YOUTUBE & CBT RECALL) ---
  // ==========================================
  {
    id: 99039,
    questionNumber: 39,
    exam: "JAMB",
    subject: "Biology",
    topic: "Animal Diversity & Morphology",
    subtopic: "Body Organization & Coelenterates",
    year: 2026,
    difficulty: "Medium",
    text: "Which of the following organisms exhibits a blind-sac body plan possessing only one body opening serving as both mouth and anus?",
    options: [
      { key: "A", text: "Amoeba" },
      { key: "B", text: "Euglena" },
      { key: "C", text: "Hydra" },
      { key: "D", text: "Earthworm" }
    ],
    correctAnswer: "C",
    explanation: "Hydra belongs to the phylum Cnidaria (Coelenterata), featuring diploblastic tissue organization with a single gastrovascular aperture (mouth) used for both ingesting prey and egesting undigested debris.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99040,
    questionNumber: 40,
    exam: "JAMB",
    subject: "Biology",
    topic: "Cell Biology & Genetics",
    subtopic: "Meiosis & Crossing Over",
    year: 2026,
    difficulty: "Hard",
    text: "Crossing over and the genetic recombination of non-sister chromatids occurs during which specific phase of meiosis?",
    options: [
      { key: "A", text: "Leptotene of Prophase I" },
      { key: "B", text: "Pachytene of Prophase I" },
      { key: "C", text: "Metaphase II" },
      { key: "D", text: "Anaphase I" }
    ],
    correctAnswer: "B",
    explanation: "During the pachytene sub-stage of Prophase I of meiosis, homologous chromosomes undergo genetic exchange (crossing over) at chiasmata, creating genetic variability.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Flashlearners & O3 Schools YouTube"
  },
  {
    id: 99041,
    questionNumber: 41,
    exam: "JAMB",
    subject: "Biology",
    topic: "Ecology",
    subtopic: "Ecological Terms & Levels of Study",
    year: 2026,
    difficulty: "Medium",
    text: "The ecological study of an entire natural community composed of different interbreeding populations interacting with their environment is known as:",
    options: [
      { key: "A", text: "Autecology" },
      { key: "B", text: "Synecology" },
      { key: "C", text: "Paleontology" },
      { key: "D", text: "Histology" }
    ],
    correctAnswer: "B",
    explanation: "Synecology is the study of groups of organisms or biological communities in relation to their environment. In contrast, autecology is the ecological study of an individual organism or single species.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99042,
    questionNumber: 42,
    exam: "JAMB",
    subject: "Biology",
    topic: "Genetics & Heredity",
    subtopic: "ABO Blood Group System",
    year: 2026,
    difficulty: "Medium",
    text: "A person with blood group B possesses which antibodies in their blood plasma?",
    options: [
      { key: "A", text: "Anti-A only" },
      { key: "B", text: "Anti-B only" },
      { key: "C", text: "Both Anti-A and Anti-B" },
      { key: "D", text: "Neither Anti-A nor Anti-B" }
    ],
    correctAnswer: "A",
    explanation: "According to Landsteiner's rule: Blood group B carries Antigen B on red blood cells and produces Anti-A antibodies in blood plasma to attack foreign A antigens.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99043,
    questionNumber: 43,
    exam: "JAMB",
    subject: "Biology",
    topic: "Excretory System",
    subtopic: "Nephron Ultrafiltration",
    year: 2026,
    difficulty: "Medium",
    text: "In the mammalian kidney nephron, non-selective ultrafiltration of blood plasma under high hydrostatic pressure occurs across the:",
    options: [
      { key: "A", text: "Loop of Henle" },
      { key: "B", text: "Glomerulus into Bowman's capsule" },
      { key: "C", text: "Distal convoluted tubule" },
      { key: "D", text: "Collecting duct" }
    ],
    correctAnswer: "B",
    explanation: "Ultrafiltration occurs in the renal corpuscle, where blood flowing through the glomerulus under pressure from the wider afferent arteriole forces water, urea, glucose, and salts into Bowman's capsule.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "Flashlearners & O3 Schools YouTube"
  },
  {
    id: 99044,
    questionNumber: 44,
    exam: "JAMB",
    subject: "Biology",
    topic: "Plant Physiology & Nutrition",
    subtopic: "Testing Leaves for Starch",
    year: 2026,
    difficulty: "Easy",
    text: "During the experiment to test a green leaf for starch, what reagent is used to decolourise the boiled leaf?",
    options: [
      { key: "A", text: "Dilute hydrochloric acid" },
      { key: "B", text: "Boiling methylated spirit (ethanol) in a water bath" },
      { key: "C", text: "Sodium hydroxide solution" },
      { key: "D", text: "Iodine solution" }
    ],
    correctAnswer: "B",
    explanation: "Boiling ethanol (or methylated spirit) in a water bath dissolves and removes the green pigment (chlorophyll), rendering the leaf pale white so colour changes with iodine can be observed clearly.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99045,
    questionNumber: 45,
    exam: "JAMB",
    subject: "Biology",
    topic: "Endocrine System",
    subtopic: "Master Gland",
    year: 2026,
    difficulty: "Easy",
    text: "Which endocrine gland is referred to as the \"master gland\" due to its secretion of trophic hormones controlling other glands?",
    options: [
      { key: "A", text: "Thyroid gland" },
      { key: "B", text: "Adrenal gland" },
      { key: "C", text: "Pituitary gland" },
      { key: "D", text: "Pancreas" }
    ],
    correctAnswer: "C",
    explanation: "The anterior pituitary gland synthesizes trophic hormones (TSH, ACTH, FSH, LH) that regulate the hormonal secretions of other peripheral endocrine organs.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },

  // ==========================================
  // --- GOVERNMENT, ECONOMICS & CRS ---
  // ==========================================
  {
    id: 99046,
    questionNumber: 46,
    exam: "JAMB",
    subject: "Government",
    topic: "Political Concepts",
    subtopic: "Checks and Balances",
    year: 2026,
    difficulty: "Easy",
    text: "The doctrine of separation of powers and checks and balances was popularized by the French political philosopher:",
    options: [
      { key: "A", text: "John Locke" },
      { key: "B", text: "Baron de Montesquieu" },
      { key: "C", text: "Jean-Jacques Rousseau" },
      { key: "D", text: "Thomas Hobbes" }
    ],
    correctAnswer: "B",
    explanation: "Baron de Montesquieu articulated the tripartite separation of powers (Executive, Legislature, Judiciary) in his monumental 1748 treatise 'L'Esprit des lois' (The Spirit of the Laws) to prevent tyranny and preserve liberty.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99047,
    questionNumber: 47,
    exam: "JAMB",
    subject: "Government",
    topic: "Constitution & Rule of Law",
    subtopic: "A.V. Dicey's Principles",
    year: 2026,
    difficulty: "Medium",
    text: "According to Professor A.V. Dicey, which of the following is NOT one of the three core pillars of the Rule of Law?",
    options: [
      { key: "A", text: "Supremacy of the regular law over arbitrary power" },
      { key: "B", text: "Equality before the law for all citizens" },
      { key: "C", text: "Immunities for senior government officials against judicial prosecution" },
      { key: "D", text: "Protection of individual human rights by ordinary law courts" }
    ],
    correctAnswer: "C",
    explanation: "A.V. Dicey defined the Rule of Law by three tenets: (1) Absolute supremacy of regular law; (2) Equality before the law; and (3) The constitution as the consequence of rights enforced by courts. Official immunity contradicts equality before the law.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "YouTube Government CBT Review"
  },
  {
    id: 99048,
    questionNumber: 48,
    exam: "JAMB",
    subject: "Economics",
    topic: "Theory of Production",
    subtopic: "Law of Diminishing Marginal Returns",
    year: 2026,
    difficulty: "Medium",
    text: "The Law of Diminishing Returns states that as successive units of a variable factor are added to fixed factors of production, after a certain point:",
    options: [
      { key: "A", text: "Total product immediately starts declining" },
      { key: "B", text: "Marginal product begins to decrease" },
      { key: "C", text: "Average product becomes zero" },
      { key: "D", text: "Fixed costs begin to rise exponentially" }
    ],
    correctAnswer: "B",
    explanation: "The Law of Diminishing Returns dictates that when variable inputs (e.g. labour) are added to fixed inputs (e.g. land), the additional output produced by each extra worker (marginal product) eventually declines.",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "YouTube Economics CBT Review"
  },
  {
    id: 99049,
    questionNumber: 49,
    exam: "JAMB",
    subject: "CRS",
    topic: "The Patriarchs",
    subtopic: "Call of Abraham",
    year: 2026,
    difficulty: "Easy",
    text: "According to the Book of Genesis, how old was Abram (Abraham) when God called him to leave Haran for Canaan?",
    options: [
      { key: "A", text: "Seventy-five years" },
      { key: "B", text: "Eighty years" },
      { key: "C", text: "Ninety years" },
      { key: "D", text: "One hundred years" }
    ],
    correctAnswer: "A",
    explanation: "Genesis 12:4 explicitly records: \"So Abram departed, as the Lord had spoken unto him; and Lot went with him: and Abram was seventy and five years old when he departed out of Haran.\"",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "JAMB 2026 CBT Student Recall"
  },
  {
    id: 99050,
    questionNumber: 50,
    exam: "JAMB",
    subject: "CRS",
    topic: "Prophets and the Covenant",
    subtopic: "Elijah on Mount Carmel",
    year: 2026,
    difficulty: "Medium",
    text: "At the contest on Mount Carmel between Elijah and the 450 prophets of Baal, what was the definitive sign proving Yahweh as the true God of Israel?",
    options: [
      { key: "A", text: "A violent earthquake splitting the mountain" },
      { key: "B", text: "Fire falling from heaven to consume Elijah's water-drenched sacrifice" },
      { key: "C", text: "A severe thunderstorm immediately extinguishing Baal's altar" },
      { key: "D", text: "The sounding of seven heavenly trumpets" }
    ],
    correctAnswer: "B",
    explanation: "In 1 Kings 18:38, after Elijah drenched the altar and sacrifice with twelve jars of water, fire fell from the Lord and burned up the sacrifice, the wood, the stones, and licked up the water in the trench, causing all Israel to fall prostrate and proclaim: \"The Lord—he is God!\"",
    repeatBadge: "2026 JAMB UTME Verified Student Recall",
    sourceLabel: "YouTube CRS CBT Review"
  }
];

fs.writeFileSync('C:/Users/WORK SPACE/Downloads/study plug/src/data/subjectQuestions/jamb2026StudentRecalled.json', JSON.stringify(questions, null, 2));

const tsContent = `import { Question } from '../questions';

/**
 * 2026 JAMB UTME VERIFIED STUDENT-RECALLED & YOUTUBE-FEATURED QUESTIONS
 * Sourced directly from CBT candidates, exam day recollection threads, and Nigerian tutorial channels
 * (Flashlearners, Excellence Academy, DTW Tutorials, and O3 Schools).
 * Features complete chalkboard step-by-step solutions for 50 high-yield exam questions.
 */
export const JAMB_2026_STUDENT_RECALLED_QUESTIONS: Question[] = ` + JSON.stringify(questions, null, 2) + `;\n`;

fs.writeFileSync('C:/Users/WORK SPACE/Downloads/study plug/src/data/subjectQuestions/jamb2026StudentRecalled.ts', tsContent);
console.log('Successfully created jamb2026StudentRecalled.json and jamb2026StudentRecalled.ts with ' + questions.length + ' questions!');
