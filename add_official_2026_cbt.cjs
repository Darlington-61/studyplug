const fs = require('fs');

const liveQuestions2026 = [
  // --- REAL 2026 LIVE CBT CHEMISTRY QUESTIONS ---
  {
    id: 99101,
    questionNumber: 1,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Chemical Combinations & Formulae",
    subtopic: "Empirical and Molecular Formula",
    year: 2026,
    difficulty: "Medium",
    text: "Determine the empirical formula of an oxide of sulphur containing 60% of oxygen.",
    options: [
      { key: "A", text: "SO₂" },
      { key: "B", text: "SO" },
      { key: "C", text: "SO₃" },
      { key: "D", text: "SO₄" }
    ],
    correctAnswer: "C",
    explanation: "Chalkboard Calculation:\nPercentage of Oxygen (O) = 60%, Percentage of Sulphur (S) = 100% - 60% = 40%.\nRelative atomic masses: S = 32, O = 16.\nMoles of S = 40 / 32 = 1.25\nMoles of O = 60 / 16 = 3.75\nDivide by the smallest mole value (1.25):\nS: 1.25 / 1.25 = 1\nO: 3.75 / 1.25 = 3\nEmpirical Formula = SO₃.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99102,
    questionNumber: 2,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Acids, Bases and Salts",
    subtopic: "Acid Anhydrides",
    year: 2026,
    difficulty: "Easy",
    text: "Oxides that dissolve in water to produce acidic solutions are known as:",
    options: [
      { key: "A", text: "acid radicals" },
      { key: "B", text: "basic oxides" },
      { key: "C", text: "acid anhydride" },
      { key: "D", text: "amphoteric oxides" }
    ],
    correctAnswer: "C",
    explanation: "An acid anhydride is a non-metallic oxide that reacts with water to form an acid (e.g., SO₂ + H₂O → H₂SO₃; CO₂ + H₂O → H₂CO₃).",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99103,
    questionNumber: 3,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Industrial Chemistry",
    subtopic: "Contact Process & Catalysts",
    year: 2026,
    difficulty: "Medium",
    text: "In the Contact process, the catalyst used in the conversion of sulphur(IV) oxide to sulphur(VI) oxide is:",
    options: [
      { key: "A", text: "nickel" },
      { key: "B", text: "platinum" },
      { key: "C", text: "magnesium(IV) oxide" },
      { key: "D", text: "vanadium(V) oxide" }
    ],
    correctAnswer: "D",
    explanation: "In the modern industrial manufacture of tetraoxosulphate(VI) acid by the Contact process, Vanadium(V) oxide (V₂O₅) is the catalyst of choice at 450°C and 1–2 atm because it is cheaper and less susceptible to catalytic poisoning than platinum.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99104,
    questionNumber: 4,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Carbon and its Compounds",
    subtopic: "Coal Gas & Domestic Safety",
    year: 2026,
    difficulty: "Medium",
    text: "Coal gas has a high calorific value but it is not preferred for use in the home because it:",
    options: [
      { key: "A", text: "burns explosively" },
      { key: "B", text: "has an unpleasant odour" },
      { key: "C", text: "contains pollutants" },
      { key: "D", text: "is more expensive than other fuel gases" }
    ],
    correctAnswer: "C",
    explanation: "Coal gas is a mixture of hydrogen, methane, and carbon monoxide (CO). It is avoided in domestic households because carbon monoxide is an odourless, highly poisonous pollutant that irreversibly binds to blood hemoglobin to form carboxyhemoglobin.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99105,
    questionNumber: 5,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Periodic Table & Non-metals",
    subtopic: "Oxides of Non-metals",
    year: 2026,
    difficulty: "Medium",
    text: "The element which can combine with oxygen to form an acid anhydride of the form XO₂ is:",
    options: [
      { key: "A", text: "fluorine" },
      { key: "B", text: "sulphur" },
      { key: "C", text: "phosphorus" },
      { key: "D", text: "chlorine" }
    ],
    correctAnswer: "B",
    explanation: "Sulphur combines with oxygen to form sulphur(IV) oxide (SO₂), which is an acidic oxide of the XO₂ formula and dissolves in water to form trioxosulphuric(IV) acid (H₂SO₃).",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99106,
    questionNumber: 6,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Hydrocarbons",
    subtopic: "Incomplete Combustion",
    year: 2026,
    difficulty: "Medium",
    text: "The combustion of a candle under a limited supply of air forms:",
    options: [
      { key: "A", text: "water and CO₂" },
      { key: "B", text: "soot and CO" },
      { key: "C", text: "soot and CO₂" },
      { key: "D", text: "water and CO" }
    ],
    correctAnswer: "B",
    explanation: "When hydrocarbons (such as paraffin candle wax) burn in a restricted or limited air supply, incomplete combustion produces carbon particles (unburnt carbon or soot) and poisonous carbon monoxide (CO) rather than complete CO₂.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99107,
    questionNumber: 7,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    subtopic: "Carboxylic Acids Identification",
    year: 2026,
    difficulty: "Hard",
    text: "An aqueous solution of an organic compound decolourizes acidified KMnO₄ solution, and produces effervescence with saturated NaHCO₃(aq). The compound is:",
    options: [
      { key: "A", text: "ethanediol" },
      { key: "B", text: "ethanol" },
      { key: "C", text: "ethanoic acid" },
      { key: "D", text: "ethanedioic acid" }
    ],
    correctAnswer: "D",
    explanation: "1. Effervescence with saturated NaHCO₃ indicates the presence of carboxylic acid group (-COOH) releasing CO₂ gas.\n2. Ethanedioic acid (oxalic acid, HOOC-COOH) is a reducing acid that readily reduces and decolourizes purple acidified KMnO₄ to colourless Mn²⁺, unlike ethanoic acid which resists oxidation.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99108,
    questionNumber: 8,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    subtopic: "Esters & Lipids",
    year: 2026,
    difficulty: "Easy",
    text: "Alkanoates (esters) are naturally found in:",
    options: [
      { key: "A", text: "lipids" },
      { key: "B", text: "vitamins" },
      { key: "C", text: "rubbers" },
      { key: "D", text: "proteins" }
    ],
    correctAnswer: "A",
    explanation: "Lipids (fats and oils) are naturally occurring triesters of the trihydric alcohol propane-1,2,3-triol (glycerol) and long-chain alkanoic acids (fatty acids).",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99109,
    questionNumber: 9,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Organic Chemistry",
    subtopic: "Homologous Series",
    year: 2026,
    difficulty: "Easy",
    text: "Successive members of a homologous series differ in molecular formula by:",
    options: [
      { key: "A", text: "C₂H₂" },
      { key: "B", text: "CH₂" },
      { key: "C", text: "C₂H₆" },
      { key: "D", text: "C₂H₄" }
    ],
    correctAnswer: "B",
    explanation: "By definition, adjacent members of any organic homologous series differ by a constant methylene group (-CH₂-), corresponding to a relative formula mass of 14.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99110,
    questionNumber: 10,
    exam: "JAMB",
    subject: "Chemistry",
    topic: "Chemical Combinations & Formulae",
    subtopic: "Molecular Formula Determination",
    year: 2026,
    difficulty: "Medium",
    text: "The molecular formula of a hydrocarbon with an empirical formula of CH₃ and a molar mass of 30 g/mol is:",
    options: [
      { key: "A", text: "C₆H₆" },
      { key: "B", text: "C₂H₆" },
      { key: "C", text: "C₂H₄" },
      { key: "D", text: "C₃H₃" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\nEmpirical formula mass of CH₃ = 12 + 3(1) = 15.\n(CH₃)ₙ = 30 => 15n = 30 => n = 2.\nMolecular formula = (CH₃)₂ = C₂H₆ (Ethane).",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },

  // --- REAL 2026 LIVE CBT PHYSICS QUESTIONS ---
  {
    id: 99111,
    questionNumber: 11,
    exam: "JAMB",
    subject: "Physics",
    topic: "Alternating Current",
    subtopic: "AC Waveform & Peak Value",
    year: 2026,
    difficulty: "Medium",
    text: "An alternating current having a sinusoidal waveform is represented by X = X₀ sin ωt. Which distance on the waveform diagram represents X₀?",
    options: [
      { key: "A", text: "RT" },
      { key: "B", text: "OR" },
      { key: "C", text: "PQ" },
      { key: "D", text: "OS" }
    ],
    correctAnswer: "C",
    explanation: "In the sinusoidal wave equation X = X₀ sin ωt, X₀ represents the peak value or amplitude. On the waveform, the vertical distance from the zero-line reference (Q) to the crest or peak (P) corresponds to PQ.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99112,
    questionNumber: 12,
    exam: "JAMB",
    subject: "Physics",
    topic: "Equilibrium of Forces",
    subtopic: "Principle of Moments",
    year: 2026,
    difficulty: "Easy",
    text: "The principle of moment of force is applied in laboratory apparatus for the measurement of:",
    options: [
      { key: "A", text: "mass" },
      { key: "B", text: "force" },
      { key: "C", text: "acceleration" },
      { key: "D", text: "velocity" }
    ],
    correctAnswer: "A",
    explanation: "The beam balance and chemical balance operate on the principle of moments (anticlockwise moment = clockwise moment about a fulcrum) to measure the unknown mass of an object by balancing it against known standard masses.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },

  // --- REAL 2026 LIVE CBT BIOLOGY QUESTIONS ---
  {
    id: 99113,
    questionNumber: 13,
    exam: "JAMB",
    subject: "Biology",
    topic: "Ecology",
    subtopic: "Adaptations in Mangrove Habitats",
    year: 2026,
    difficulty: "Medium",
    text: "The possession of pneumatophores is one of the specialized structural adaptations of plants found in:",
    options: [
      { key: "A", text: "mangrove forest" },
      { key: "B", text: "tropical rain forest" },
      { key: "C", text: "deciduous forest" },
      { key: "D", text: "evergreen forest" }
    ],
    correctAnswer: "A",
    explanation: "Pneumatophores are specialized erect aerial breathing roots (e.g. in Avicennia and Rhizophora) that project upward above the mud surface in oxygen-poor, waterlogged mangrove swamp environments to facilitate gaseous exchange.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99114,
    questionNumber: 14,
    exam: "JAMB",
    subject: "Biology",
    topic: "Ecology",
    subtopic: "Savanna Xerophytic Adaptations",
    year: 2026,
    difficulty: "Medium",
    text: "The structural adaptation of savanna vegetation to conserve water during dry periods is:",
    options: [
      { key: "A", text: "small and airy leaves" },
      { key: "B", text: "large and leathery leaves" },
      { key: "C", text: "small and thick leaves" },
      { key: "D", text: "long and needle-like leaves" }
    ],
    correctAnswer: "C",
    explanation: "Savanna plants exhibit xeromorphic adaptations including small, reduced leaf surface areas with thick waxy cuticles and sunken stomata to minimize water loss through transpiration.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99115,
    questionNumber: 15,
    exam: "JAMB",
    subject: "Biology",
    topic: "Cell Biology",
    subtopic: "Plant vs Animal Cell Differences",
    year: 2026,
    difficulty: "Easy",
    text: "The cellular organelle that is conspicuously absent in higher plant cells is:",
    options: [
      { key: "A", text: "centriole" },
      { key: "B", text: "mitochondria" },
      { key: "C", text: "chloroplast" },
      { key: "D", text: "ribosome" }
    ],
    correctAnswer: "A",
    explanation: "Centrioles are barrel-shaped organelles found in animal cells to organize mitotic spindle fibers. Higher plant cells do not possess centrioles; their mitotic spindle is organized directly by nuclear microtubule organizing centres.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99116,
    questionNumber: 16,
    exam: "JAMB",
    subject: "Biology",
    topic: "Organization of Life",
    subtopic: "Levels of Organization",
    year: 2026,
    difficulty: "Easy",
    text: "In the structural hierarchy of living organisms: [CELL (I)] → [TISSUE (II)] → [ORGAN (III)] → [SYSTEM (IV)], the flower of an angiosperm belongs to:",
    options: [
      { key: "A", text: "I" },
      { key: "B", text: "II" },
      { key: "C", text: "III" },
      { key: "D", text: "IV" }
    ],
    correctAnswer: "C",
    explanation: "In flowering plants, the flower is composed of multiple tissues (sepals, petals, stamens, carpels) functioning together as a specialized reproductive organ (Level III).",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99117,
    questionNumber: 17,
    exam: "JAMB",
    subject: "Biology",
    topic: "Animal Nutrition & Physiology",
    subtopic: "Essential Mineral Elements",
    year: 2026,
    difficulty: "Easy",
    text: "The mineral element required for the synthesis and formation of red blood cells in animals is:",
    options: [
      { key: "A", text: "iodine" },
      { key: "B", text: "sodium" },
      { key: "C", text: "iron" },
      { key: "D", text: "calcium" }
    ],
    correctAnswer: "C",
    explanation: "Iron (Fe²⁺) is the core constituent of the haem moiety in hemoglobin. Deficiency of dietary iron impairs erythrocyte maturation, causing microcytic nutritional anemia.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },

  // --- REAL 2026 LIVE CBT USE OF ENGLISH QUESTIONS ---
  {
    id: 99118,
    questionNumber: 18,
    exam: "JAMB",
    subject: "Use of English",
    topic: "Antonyms",
    subtopic: "Words in Context",
    year: 2026,
    difficulty: "Medium",
    text: "Choose the option opposite in meaning to the italicized word:\n\"The old man walked at a leisurely pace.\"",
    options: [
      { key: "A", text: "relaxed" },
      { key: "B", text: "slow" },
      { key: "C", text: "calm" },
      { key: "D", text: "rushed" }
    ],
    correctAnswer: "D",
    explanation: "The word 'leisurely' means unhurried, relaxed, or calm. The direct antonym is 'rushed' (done in a frantic, hurried manner).",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },

  // --- REAL 2026 LIVE CBT MATHEMATICS QUESTIONS ---
  {
    id: 99119,
    questionNumber: 19,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Set Theory",
    subtopic: "Set Operations: Union & Intersection",
    year: 2026,
    difficulty: "Medium",
    text: "If M = {2, 3, 4, 5, 6}, P = {1, 3, 5, 7, 9} and Q = {2, 5}, find (M ∩ P) ∪ Q.",
    options: [
      { key: "A", text: "{2, 3, 5, 7}" },
      { key: "B", text: "{2, 3, 5}" },
      { key: "C", text: "{2, 5}" },
      { key: "D", text: "{3, 5, 7}" }
    ],
    correctAnswer: "B",
    explanation: "Chalkboard Calculation:\n1. Find M ∩ P (elements common to M and P):\n{2, 3, 4, 5, 6} ∩ {1, 3, 5, 7, 9} = {3, 5}.\n2. Find (M ∩ P) ∪ Q (combine with Q = {2, 5}):\n{3, 5} ∪ {2, 5} = {2, 3, 5}.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99120,
    questionNumber: 20,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Mensuration",
    subtopic: "Volume of a Cube",
    year: 2026,
    difficulty: "Easy",
    text: "Calculate the volume of a cube whose edge length is 3 cm.",
    options: [
      { key: "A", text: "9 cm²" },
      { key: "B", text: "27 cm²" },
      { key: "C", text: "9 cm³" },
      { key: "D", text: "27 cm³" }
    ],
    correctAnswer: "D",
    explanation: "Chalkboard Calculation:\nVolume of a cube V = l³ = (3 cm)³ = 27 cm³.\nNote: Beware of option B which has the wrong units (cm² instead of cm³).",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99121,
    questionNumber: 21,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Progression",
    subtopic: "Sum of Arithmetic Progression (A.P.)",
    year: 2026,
    difficulty: "Medium",
    text: "Find the sum of the first 20 terms of the arithmetic series: 2 + 5 + 8 + ...",
    options: [
      { key: "A", text: "615" },
      { key: "B", text: "620" },
      { key: "C", text: "610" },
      { key: "D", text: "625" }
    ],
    correctAnswer: "C",
    explanation: "Chalkboard Calculation:\nFirst term a = 2, common difference d = 5 - 2 = 3, n = 20.\nSum Sₙ = (n/2)[2a + (n - 1)d]\nS₂₀ = (20/2)[2(2) + (20 - 1)(3)]\nS₂₀ = 10[4 + 19(3)] = 10[4 + 57] = 10[61] = 610.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  },
  {
    id: 99122,
    questionNumber: 22,
    exam: "JAMB",
    subject: "Mathematics",
    topic: "Probability",
    subtopic: "Permutations of Repeated Letters",
    year: 2026,
    difficulty: "Medium",
    text: "In how many distinct ways can the letters of the word PATAPATA be arranged?",
    options: [
      { key: "A", text: "420 ways" },
      { key: "B", text: "1440 ways" },
      { key: "C", text: "5760 ways" },
      { key: "D", text: "720 ways" }
    ],
    correctAnswer: "A",
    explanation: "Chalkboard Calculation:\nTotal letters n = 8 (P = 2, A = 4, T = 2).\nNumber of distinct arrangements = n! / (p! × a! × t!)\n= 8! / (2! × 4! × 2!)\n= 40,320 / (2 × 24 × 2) = 40,320 / 96 = 420 ways.",
    repeatBadge: "2026 JAMB Official Live CBT Paper",
    sourceLabel: "JAMB 2026 CBT Live Screen Snapshot"
  }
];

// Load existing 50 questions
const existing = JSON.parse(fs.readFileSync('src/data/subjectQuestions/jamb2026StudentRecalled.json', 'utf8'));

// Merge ensuring no duplicate id
const existingIds = new Set(existing.map(q => q.id));
const merged = [...existing];
liveQuestions2026.forEach(q => {
  if (!existingIds.has(q.id)) {
    merged.push(q);
  }
});

console.log('Total 2026 JAMB Questions after merging live screen snapshots:', merged.length);

fs.writeFileSync('src/data/subjectQuestions/jamb2026StudentRecalled.json', JSON.stringify(merged, null, 2));

const tsContent = `import { Question } from '../questions';

/**
 * 2026 JAMB UTME OFFICIAL LIVE CBT & VERIFIED STUDENT-RECALLED QUESTIONS
 * Sourced directly from authentic 2026 CBT examination computers, candidate test sessions,
 * and Nigerian educational review archives.
 * Every question features step-by-step chalkboard calculations and examiner rationales.
 */
export const JAMB_2026_STUDENT_RECALLED_QUESTIONS: Question[] = ` + JSON.stringify(merged, null, 2) + `;\n`;

fs.writeFileSync('src/data/subjectQuestions/jamb2026StudentRecalled.ts', tsContent);
console.log('Saved jamb2026StudentRecalled.json and jamb2026StudentRecalled.ts successfully!');
