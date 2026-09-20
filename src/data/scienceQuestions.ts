import { Question } from './questions';

export const CHEMISTRY_QUESTIONS: Question[] = [
  {
    id: 3001,
    questionNumber: 1,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 2024,
    difficulty: "Medium",
    text: "Calculate the pH of a 0.005 mol/dm³ solution of tetraoxosulphate(VI) acid (H₂SO₄), assuming complete dissociation.",
    options: [
      { key: "A", text: "2.0" },
      { key: "B", text: "2.3" },
      { key: "C", text: "1.0" },
      { key: "D", text: "3.0" }
    ],
    correctAnswer: "A",
    explanation: "H₂SO₄ is a diprotic acid that dissociates completely: H₂SO₄ → 2H⁺ + SO₄²⁻.\n[H⁺] = 2 × 0.005 mol/dm³ = 0.01 mol/dm³ = 10⁻² mol/dm³.\npH = -log₁₀[H⁺] = -log₁₀(10⁻²) = 2.0."
  },
  {
    id: 3002,
    questionNumber: 2,
    subject: "Chemistry",
    topic: "Separation of Mixtures",
    year: 2023,
    difficulty: "Easy",
    text: "A mixture of ammonium chloride (NH₄Cl) and sodium chloride (NaCl) can best be separated in the laboratory by:",
    options: [
      { key: "A", text: "Fractional crystallization" },
      { key: "B", text: "Sublimation" },
      { key: "C", text: "Filtration" },
      { key: "D", text: "Paper chromatography" }
    ],
    correctAnswer: "B",
    explanation: "Ammonium chloride (NH₄Cl) readily sublimes upon gentle heating (transitions directly from solid to gas and deposits on cooler surfaces), while sodium chloride (NaCl) is non-volatile and remains in the crucible."
  },
  {
    id: 3003,
    questionNumber: 3,
    subject: "Chemistry",
    topic: "Atomic Structure & Periodic Table",
    year: 2023,
    difficulty: "Medium",
    text: "An element X has an atomic number of 17. Which of the following statements about element X is correct?",
    options: [
      { key: "A", text: "It forms a basic oxide" },
      { key: "B", text: "It readily loses an electron to achieve octet stability" },
      { key: "C", text: "It forms an electrovalent bond with sodium" },
      { key: "D", text: "It exists as a monoatomic gas at room temperature" }
    ],
    correctAnswer: "C",
    explanation: "Atomic number 17 is Chlorine (Cl, configuration: 2, 8, 7). Chlorine is a Group VII halogen that gains one electron from electropositive alkali metals like Sodium (Na) to form the electrovalent (ionic) salt NaCl."
  },
  {
    id: 3004,
    questionNumber: 4,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2022,
    difficulty: "Medium",
    text: "Which of the following compounds will decolorize acidified potassium tetraoxomanganate(VII) solution and bromine water?",
    options: [
      { key: "A", text: "Ethane (C₂H₆)" },
      { key: "B", text: "Ethene (C₂H₄)" },
      { key: "C", text: "Methane (CH₄)" },
      { key: "D", text: "Propane (C₃H₈)" }
    ],
    correctAnswer: "B",
    explanation: "Ethene (C₂H₄) contains an unsaturated carbon-carbon double bond (C=C). Unsaturated hydrocarbons readily undergo addition reactions, causing the immediate decolorization of reddish-brown bromine water and purple acidified KMnO₄."
  },
  {
    id: 3005,
    questionNumber: 5,
    subject: "Chemistry",
    topic: "Stoichiometry & Mole Concept",
    year: 2022,
    difficulty: "Hard",
    text: "What volume of oxygen gas (O₂) at s.t.p. is required for the complete combustion of 5.6 dm³ of ethene (C₂H₄)? [Molar volume of gas at s.t.p. = 22.4 dm³]",
    options: [
      { key: "A", text: "11.2 dm³" },
      { key: "B", text: "16.8 dm³" },
      { key: "C", text: "22.4 dm³" },
      { key: "D", text: "5.6 dm³" }
    ],
    correctAnswer: "B",
    explanation: "Balanced combustion equation:\nC₂H₄ + 3O₂ → 2CO₂ + 2H₂O\nFrom Gay-Lussac's Law of Combining Volumes, 1 volume of C₂H₄ requires 3 volumes of O₂.\nTherefore, Volume of O₂ = 3 × 5.6 dm³ = 16.8 dm³."
  },
  {
    id: 3006,
    questionNumber: 6,
    subject: "Chemistry",
    topic: "Chemical Energetics & Rates",
    year: 2021,
    difficulty: "Medium",
    text: "For an endothermic reaction at constant pressure, which of the following is always true?",
    options: [
      { key: "A", text: "ΔH is negative and heat is evolved to the surroundings" },
      { key: "B", text: "The total enthalpy of products is greater than the total enthalpy of reactants (ΔH > 0)" },
      { key: "C", text: "The activation energy is zero" },
      { key: "D", text: "The reaction is spontaneous at all temperatures" }
    ],
    correctAnswer: "B",
    explanation: "In an endothermic process, thermal energy is absorbed from the surroundings. The enthalpy of products (H_p) exceeds the enthalpy of reactants (H_r), making the enthalpy change strictly positive: ΔH = H_p - H_r > 0."
  }
];

export const BIOLOGY_QUESTIONS: Question[] = [
  {
    id: 4001,
    questionNumber: 1,
    subject: "Biology",
    topic: "Cell Structure & Physiology",
    year: 2024,
    difficulty: "Easy",
    text: "Which of the following cellular organelles is responsible for the synthesis of adenosine triphosphate (ATP) during aerobic cellular respiration?",
    options: [
      { key: "A", text: "Ribosome" },
      { key: "B", text: "Mitochondrion" },
      { key: "C", text: "Golgi apparatus" },
      { key: "D", text: "Endoplasmic reticulum" }
    ],
    correctAnswer: "B",
    explanation: "The mitochondrion is known as the powerhouse of the eukaryotic cell. The Krebs cycle and electron transport chain take place on its cristae to synthesize ATP via oxidative phosphorylation."
  },
  {
    id: 4002,
    questionNumber: 2,
    subject: "Biology",
    topic: "Genetics & Heredity",
    year: 2023,
    difficulty: "Hard",
    text: "If a man with heterozygous blood group A (I^A I^O) marries a woman with blood group AB (I^A I^B), what is the probability that their first child will have blood group B?",
    options: [
      { key: "A", text: "0%" },
      { key: "B", text: "25%" },
      { key: "C", text: "50%" },
      { key: "D", text: "75%" }
    ],
    correctAnswer: "B",
    explanation: "Parental genotypes: I^A I^O × I^A I^B.\nPossible offspring genotypes:\n1. I^A I^A (Group A) — 25%\n2. I^A I^B (Group AB) — 25%\n3. I^A I^O (Group A) — 25%\n4. I^B I^O (Group B) — 25%.\nTherefore, the probability of blood group B is 1/4 = 25%."
  },
  {
    id: 4003,
    questionNumber: 3,
    subject: "Biology",
    topic: "Transport Systems & Osmoregulation",
    year: 2023,
    difficulty: "Medium",
    text: "In the mammalian nephron, ultrafiltration of blood under hydrostatic pressure occurs specifically between the:",
    options: [
      { key: "A", text: "Loop of Henle and collecting duct" },
      { key: "B", text: "Glomerulus and Bowman's capsule" },
      { key: "C", text: "Proximal convoluted tubule and renal vein" },
      { key: "D", text: "Afferent arteriole and efferent arteriole" }
    ],
    correctAnswer: "B",
    explanation: "Ultrafiltration occurs in the renal corpuscle where high blood pressure in the glomerulus forces water, glucose, amino acids, urea, and mineral salts through the podocyte filtration slits into the lumen of Bowman's capsule."
  },
  {
    id: 4004,
    questionNumber: 4,
    subject: "Biology",
    topic: "Ecology & Ecosystems",
    year: 2022,
    difficulty: "Easy",
    text: "In a terrestrial ecosystem, which trophic level possesses the highest total available energy?",
    options: [
      { key: "A", text: "Primary consumers (herbivores)" },
      { key: "B", text: "Secondary consumers (carnivores)" },
      { key: "C", text: "Primary producers (green plants)" },
      { key: "D", text: "Tertiary consumers (apex predators)" }
    ],
    correctAnswer: "C",
    explanation: "According to Lindeman's 10% rule of energy transfer, primary producers (autotrophic plants) trap solar energy directly. At each successive trophic level, approximately 90% of energy is lost as metabolic heat and respiration."
  },
  {
    id: 4005,
    questionNumber: 5,
    subject: "Biology",
    topic: "Plant & Animal Nutrition",
    year: 2022,
    difficulty: "Medium",
    text: "The light-dependent stage (photolysis) of photosynthesis takes place specifically within the:",
    options: [
      { key: "A", text: "Stroma of the chloroplast" },
      { key: "B", text: "Thylakoid membranes (grana)" },
      { key: "C", text: "Outer chloroplast membrane" },
      { key: "D", text: "Cytoplasm of mesophyll cells" }
    ],
    correctAnswer: "B",
    explanation: "Chlorophyll pigments and electron transport chains are embedded in the thylakoid membranes (stacked into grana) where light energy splits water molecules (photolysis) into H⁺, electrons, and O₂ gas. The dark reaction (Calvin cycle) occurs in the stroma."
  }
];
