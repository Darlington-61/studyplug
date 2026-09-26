import { Question } from './questions';

/**
 * Official NABTEB (National Business and Technical Examinations Board)
 * National Business Certificate (NBC) & National Technical Certificate (NTC)
 * Authentic Past Questions with Full Detailed Solutions
 */
export const NABTEB_QUESTIONS: Question[] = [
  // ─── NABTEB MATHEMATICS (General Mathematics - NBC / NTC) ───
  {
    id: 70001,
    questionNumber: 1,
    subject: 'Mathematics',
    topic: 'Number Bases',
    subtopic: 'Binary Operations & Base Conversion',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'Convert the number 101101₂ to base 10 (denary scale).',
    options: [
      { key: 'A', text: '41' },
      { key: 'B', text: '45' },
      { key: 'C', text: '47' },
      { key: 'D', text: '53' }
    ],
    optionsMap: { A: '41', B: '45', C: '47', D: '53' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'To convert from base 2 to base 10, expand using powers of 2:\n101101₂ = (1 × 2⁵) + (0 × 2⁴) + (1 × 2³) + (1 × 2²) + (0 × 2¹) + (1 × 2⁰)\n= 32 + 0 + 8 + 4 + 0 + 1 = 45.\nTherefore, 101101₂ = 45₁₀.',
    repeatBadge: 'NABTEB NTC/NBC 2023 Certified'
  },
  {
    id: 70002,
    questionNumber: 2,
    subject: 'Mathematics',
    topic: 'Commercial Mathematics',
    subtopic: 'Simple and Compound Interest',
    year: 2022,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'A technical workshop owner borrowed ₦80,000 at a simple interest rate of 7.5% per annum. Calculate the total amount payable at the end of 3 years.',
    options: [
      { key: 'A', text: '₦18,000' },
      { key: 'B', text: '₦96,000' },
      { key: 'C', text: '₦98,000' },
      { key: 'D', text: '₦102,000' }
    ],
    optionsMap: { A: '₦18,000', B: '₦96,000', C: '₦98,000', D: '₦102,000' },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'Simple Interest (I) = (P × R × T) / 100\nHere, P = ₦80,000, R = 7.5%, T = 3 years.\nI = (80000 × 7.5 × 3) / 100 = 800 × 22.5 = ₦18,000.\nTotal Amount (A) = Principal + Interest = ₦80,000 + ₦18,000 = ₦98,000.',
    repeatBadge: 'NABTEB NBC/NTC 2022 Certified'
  },
  {
    id: 70003,
    questionNumber: 3,
    subject: 'Mathematics',
    topic: 'Algebra',
    subtopic: 'Quadratic Equations',
    year: 2024,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'Find the quadratic equation whose roots are 2/3 and -1/2.',
    options: [
      { key: 'A', text: '6x² - x - 2 = 0' },
      { key: 'B', text: '6x² + x - 2 = 0' },
      { key: 'C', text: '6x² - x + 2 = 0' },
      { key: 'D', text: '6x² + 5x - 2 = 0' }
    ],
    optionsMap: { A: '6x² - x - 2 = 0', B: '6x² + x - 2 = 0', C: '6x² - x + 2 = 0', D: '6x² + 5x - 2 = 0' },
    correctAnswer: 'A',
    correct_option: 'A',
    explanation: 'A quadratic equation with roots α and β is given by: x² - (α + β)x + αβ = 0.\nHere, α = 2/3 and β = -1/2.\nSum of roots (α + β) = 2/3 - 1/2 = (4 - 3)/6 = 1/6.\nProduct of roots (αβ) = (2/3) × (-1/2) = -1/3 = -2/6.\nEquation: x² - (1/6)x - 1/3 = 0.\nMultiply through by 6:\n6x² - x - 2 = 0.',
    repeatBadge: 'NABTEB NTC/NBC 2024 Certified'
  },
  {
    id: 70004,
    questionNumber: 4,
    subject: 'Mathematics',
    topic: 'Indices & Logarithms',
    subtopic: 'Laws of Logarithms',
    year: 2021,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'Evaluate log₁₀ 25 + log₁₀ 4 - log₁₀ 10.',
    options: [
      { key: 'A', text: '0' },
      { key: 'B', text: '1' },
      { key: 'C', text: '2' },
      { key: 'D', text: '10' }
    ],
    optionsMap: { A: '0', B: '1', C: '2', D: '10' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Using the laws of logarithms:\nlog₁₀ A + log₁₀ B - log₁₀ C = log₁₀ [(A × B) / C]\n= log₁₀ [(25 × 4) / 10] = log₁₀ (100 / 10) = log₁₀ 10 = 1.',
    repeatBadge: 'NABTEB NTC/NBC 2021 Certified'
  },
  {
    id: 70005,
    questionNumber: 5,
    subject: 'Mathematics',
    topic: 'Mensuration',
    subtopic: 'Volume and Surface Area of Cylinders',
    year: 2023,
    difficulty: 'Hard',
    exam: 'NABTEB',
    text: 'A closed cylindrical water tank has a base radius of 7 m and a height of 10 m. Calculate its total surface area. [Take π = 22/7]',
    options: [
      { key: 'A', text: '440 m²' },
      { key: 'B', text: '594 m²' },
      { key: 'C', text: '748 m²' },
      { key: 'D', text: '812 m²' }
    ],
    optionsMap: { A: '440 m²', B: '594 m²', C: '748 m²', D: '812 m²' },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'Total Surface Area of a closed cylinder = 2πr(r + h)\n= 2 × (22/7) × 7 × (7 + 10)\n= 2 × 22 × 17 = 44 × 17 = 748 m².',
    repeatBadge: 'NABTEB Technical 2023'
  },
  {
    id: 70006,
    questionNumber: 6,
    subject: 'Mathematics',
    topic: 'Trigonometry',
    subtopic: 'Angles of Elevation and Depression',
    year: 2020,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'From the top of a vertical mast 24 m high, the angle of depression of a boat on sea level is 30°. Find the distance of the boat from the foot of the mast.',
    options: [
      { key: 'A', text: '12 m' },
      { key: 'B', text: '24√3 m' },
      { key: 'C', text: '48 m' },
      { key: 'D', text: '24/√3 m' }
    ],
    optionsMap: { A: '12 m', B: '24√3 m', C: '48 m', D: '24/√3 m' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Angle of depression = Angle of elevation from boat to mast top = 30°.\ntan 30° = Opposite / Adjacent = 24 / d\nSince tan 30° = 1/√3:\n1/√3 = 24 / d => d = 24√3 m (approx. 41.57 m).',
    repeatBadge: 'NABTEB NBC/NTC 2020'
  },
  {
    id: 70007,
    questionNumber: 7,
    subject: 'Mathematics',
    topic: 'Statistics',
    subtopic: 'Mean, Median and Mode',
    year: 2022,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'The scores of 8 technical students in an electrical test are: 14, 18, 12, 16, 18, 20, 15, and 17. Find the median score.',
    options: [
      { key: 'A', text: '16.0' },
      { key: 'B', text: '16.5' },
      { key: 'C', text: '17.0' },
      { key: 'D', text: '18.0' }
    ],
    optionsMap: { A: '16.0', B: '16.5', C: '17.0', D: '18.0' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Arrange scores in ascending order:\n12, 14, 15, 16, 17, 18, 18, 20.\nSince n = 8 (even), the median is the average of the 4th and 5th items:\nMedian = (16 + 17) / 2 = 33 / 2 = 16.5.',
    repeatBadge: 'NABTEB NTC 2022'
  },

  // ─── NABTEB ENGLISH LANGUAGE (Use of English - NBC / NTC) ───
  {
    id: 70008,
    questionNumber: 1,
    subject: 'Use of English',
    topic: 'Lexis and Structure',
    subtopic: 'Prepositions and Phrasal Verbs',
    year: 2024,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'The factory supervisor insisted that all apprentices must strictly adhere _______ safety regulations.',
    options: [
      { key: 'A', text: 'with' },
      { key: 'B', text: 'to' },
      { key: 'C', text: 'on' },
      { key: 'D', text: 'in' }
    ],
    optionsMap: { A: 'with', B: 'to', C: 'on', D: 'in' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'The verb "adhere" is customarily followed by the preposition "to" (adhere to rules, regulations, principles).',
    repeatBadge: 'NABTEB NBC/NTC 2024 Certified'
  },
  {
    id: 70009,
    questionNumber: 2,
    subject: 'Use of English',
    topic: 'Antonyms',
    subtopic: 'Opposite in Meaning',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'Choose the word that is MOST NEARLY OPPOSITE in meaning to the underlined word:\nThe technician gave a METICULOUS explanation of the engine assembly.',
    options: [
      { key: 'A', text: 'painstaking' },
      { key: 'B', text: 'careless' },
      { key: 'C', text: 'thorough' },
      { key: 'D', text: 'accurate' }
    ],
    optionsMap: { A: 'painstaking', B: 'careless', C: 'thorough', D: 'accurate' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: '"Meticulous" means showing great attention to detail, very careful and precise. The opposite is "careless" or sloppy.',
    repeatBadge: 'NABTEB NBC/NTC 2023'
  },
  {
    id: 70010,
    questionNumber: 3,
    subject: 'Use of English',
    topic: 'Synonyms',
    subtopic: 'Nearest in Meaning',
    year: 2022,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'Choose the word NEAREST IN MEANING to the underlined word:\nThe board resolved to TERMINATE the contractor’s agreement due to non-performance.',
    options: [
      { key: 'A', text: 'suspend' },
      { key: 'B', text: 'end' },
      { key: 'C', text: 'renew' },
      { key: 'D', text: 'investigate' }
    ],
    optionsMap: { A: 'suspend', B: 'end', C: 'renew', D: 'investigate' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: '"Terminate" means to bring to an end or conclude. Hence "end" is the correct synonym.',
    repeatBadge: 'NABTEB NBC/NTC 2022'
  },
  {
    id: 70011,
    questionNumber: 4,
    subject: 'Use of English',
    topic: 'Lexis and Structure',
    subtopic: 'Question Tags',
    year: 2021,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'Neither the workshop foreman nor his assistants arrived on time, _______?',
    options: [
      { key: 'A', text: 'did they' },
      { key: 'B', text: 'didn\'t they' },
      { key: 'C', text: 'were they' },
      { key: 'D', text: 'haven\'t they' }
    ],
    optionsMap: { A: 'did they', B: 'didn\'t they', C: 'were they', D: 'haven\'t they' },
    correctAnswer: 'A',
    correct_option: 'A',
    explanation: 'The sentence has a negative polarity due to "Neither...nor", so the tag question must be positive. Since the main verb is simple past "arrived", the auxiliary verb is "did", paired with the plural pronoun "they" (matching the nearer plural subject "assistants"). Tag: "did they?".',
    repeatBadge: 'NABTEB NBC/NTC 2021'
  },
  {
    id: 70012,
    questionNumber: 5,
    subject: 'Use of English',
    topic: 'Lexis and Structure',
    subtopic: 'Subject-Verb Concord',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'A series of technical lectures _______ scheduled for the final year vocational trainees.',
    options: [
      { key: 'A', text: 'is' },
      { key: 'B', text: 'are' },
      { key: 'C', text: 'have been' },
      { key: 'D', text: 'were' }
    ],
    optionsMap: { A: 'is', B: 'are', C: 'have been', D: 'were' },
    correctAnswer: 'A',
    correct_option: 'A',
    explanation: 'The noun phrase "A series" functions as a singular collective subject, which governs a singular verb "is".',
    repeatBadge: 'NABTEB NBC/NTC 2023'
  },

  // ─── NABTEB ECONOMICS (NBC / NTC Economics) ───
  {
    id: 70013,
    questionNumber: 1,
    subject: 'Economics',
    topic: 'Basic Economic Concepts',
    subtopic: 'Scarcity, Choice and Opportunity Cost',
    year: 2024,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'Opportunity cost is best defined as the:',
    options: [
      { key: 'A', text: 'Monetary cost of producing an economic good' },
      { key: 'B', text: 'Alternative foregone when a choice is made' },
      { key: 'C', text: 'Cost of purchasing shares in a technical firm' },
      { key: 'D', text: 'Depreciation cost of workshop machinery' }
    ],
    optionsMap: {
      A: 'Monetary cost of producing an economic good',
      B: 'Alternative foregone when a choice is made',
      C: 'Cost of purchasing shares in a technical firm',
      D: 'Depreciation cost of workshop machinery'
    },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Opportunity cost (real cost) is the next best alternative sacrificed or foregone in order to satisfy a given want.',
    repeatBadge: 'NABTEB NBC 2024 Certified'
  },
  {
    id: 70014,
    questionNumber: 2,
    subject: 'Economics',
    topic: 'Theory of Demand and Supply',
    subtopic: 'Elasticity of Demand',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'When a percentage change in quantity demanded is less than the proportionate percentage change in price, demand is described as:',
    options: [
      { key: 'A', text: 'Unitary elastic' },
      { key: 'B', text: 'Perfectively elastic' },
      { key: 'C', text: 'Inelastic' },
      { key: 'D', text: 'Elastic' }
    ],
    optionsMap: { A: 'Unitary elastic', B: 'Perfectively elastic', C: 'Inelastic', D: 'Elastic' },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'When elasticity of demand (Ed) is less than 1 (percentage change in Qd < percentage change in Price), demand is price-inelastic.',
    repeatBadge: 'NABTEB NBC 2023'
  },
  {
    id: 70015,
    questionNumber: 3,
    subject: 'Economics',
    topic: 'Business Organizations',
    subtopic: 'Limited Liability Companies',
    year: 2022,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'A major advantage of a Public Limited Company over a Partnership is that:',
    options: [
      { key: 'A', text: 'It is easy to establish without legal formalities' },
      { key: 'B', text: 'Shareholders enjoy limited liability' },
      { key: 'C', text: 'Its accounts are kept strictly confidential from the public' },
      { key: 'D', text: 'Decision making is extremely fast and centralized' }
    ],
    optionsMap: {
      A: 'It is easy to establish without legal formalities',
      B: 'Shareholders enjoy limited liability',
      C: 'Its accounts are kept strictly confidential from the public',
      D: 'Decision making is extremely fast and centralized'
    },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'In a limited liability company, shareholders can only lose the value of their shares if the business collapses; their personal private properties are protected by law.',
    repeatBadge: 'NABTEB NBC 2022'
  },
  {
    id: 70016,
    questionNumber: 4,
    subject: 'Economics',
    topic: 'Money and Banking',
    subtopic: 'Functions of the Central Bank',
    year: 2021,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'Which of the following functions is EXCLUSIVELY performed by the Central Bank of Nigeria (CBN)?',
    options: [
      { key: 'A', text: 'Accepting demand deposits from the general public' },
      { key: 'B', text: 'Issuance of legal tender currency' },
      { key: 'C', text: 'Granting personal overdrafts to civil servants' },
      { key: 'D', text: 'Discounting commercial bills of exchange for traders' }
    ],
    optionsMap: {
      A: 'Accepting demand deposits from the general public',
      B: 'Issuance of legal tender currency',
      C: 'Granting personal overdrafts to civil servants',
      D: 'Discounting commercial bills of exchange for traders'
    },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'The Central Bank holds the exclusive constitutional monopoly of currency issue (notes and coins) in Nigeria.',
    repeatBadge: 'NABTEB NBC 2021'
  },

  // ─── NABTEB FINANCIAL ACCOUNTING & BOOKKEEPING (NBC) ───
  {
    id: 70017,
    questionNumber: 1,
    subject: 'Accounting',
    topic: 'Double Entry System',
    subtopic: 'Rules of Debit and Credit',
    year: 2024,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'Under the double entry system of bookkeeping, an increase in an asset account is recorded as a _______, while an increase in a liability account is recorded as a _______.',
    options: [
      { key: 'A', text: 'Debit; Credit' },
      { key: 'B', text: 'Credit; Debit' },
      { key: 'C', text: 'Debit; Debit' },
      { key: 'D', text: 'Credit; Credit' }
    ],
    optionsMap: { A: 'Debit; Credit', B: 'Credit; Debit', C: 'Debit; Debit', D: 'Credit; Credit' },
    correctAnswer: 'A',
    correct_option: 'A',
    explanation: 'By fundamental accounting principles: Assets have debit balances (increases are debited); Liabilities have credit balances (increases are credited).',
    repeatBadge: 'NABTEB NBC 2024 Certified'
  },
  {
    id: 70018,
    questionNumber: 2,
    subject: 'Accounting',
    topic: 'Books of Prime Entry',
    subtopic: 'Petty Cash Book and Imprest System',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'Under the imprest system of petty cash, the petty cashier is reimbursed with:',
    options: [
      { key: 'A', text: 'The original float amount regardless of spending' },
      { key: 'B', text: 'The exact amount of vouchers spent during the period' },
      { key: 'C', text: 'Half of the opening float' },
      { key: 'D', text: 'The total cash sales from the retail shop' }
    ],
    optionsMap: {
      A: 'The original float amount regardless of spending',
      B: 'The exact amount of vouchers spent during the period',
      C: 'Half of the opening float',
      D: 'The total cash sales from the retail shop'
    },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'The imprest system operates by reimbursing the petty cashier the exact sum expended against valid vouchers, restoring the cash in hand back to the agreed imprest float.',
    repeatBadge: 'NABTEB NBC 2023'
  },
  {
    id: 70019,
    questionNumber: 3,
    subject: 'Accounting',
    topic: 'Trial Balance & Correction of Errors',
    subtopic: 'Errors not affecting Trial Balance Agreement',
    year: 2022,
    difficulty: 'Hard',
    exam: 'NABTEB',
    text: 'A purchase of a motor van for ₦1,200,000 was debited to the Motor Expenses Account. This error is an example of an error of:',
    options: [
      { key: 'A', text: 'Commission' },
      { key: 'B', text: 'Omission' },
      { key: 'C', text: 'Principle' },
      { key: 'D', text: 'Original entry' }
    ],
    optionsMap: { A: 'Commission', B: 'Omission', C: 'Principle', D: 'Original entry' },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'An error of principle occurs when an item is posted to the wrong class of account—here, a capital expenditure (fixed asset: Motor Van) was treated as a revenue expenditure (expense: Motor Expenses).',
    repeatBadge: 'NABTEB NBC 2022'
  },
  {
    id: 70020,
    questionNumber: 4,
    subject: 'Accounting',
    topic: 'Bank Reconciliation',
    subtopic: 'Uncredited Cheques and Unpresented Cheques',
    year: 2021,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'Cheques issued by a business firm to creditors but not yet presented at the bank for payment are known as:',
    options: [
      { key: 'A', text: 'Dishonoured cheques' },
      { key: 'B', text: 'Unpresented cheques' },
      { key: 'C', text: 'Uncredited lodgments' },
      { key: 'D', text: 'Stale cheques' }
    ],
    optionsMap: {
      A: 'Dishonoured cheques',
      B: 'Unpresented cheques',
      C: 'Uncredited lodgments',
      D: 'Stale cheques'
    },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Unpresented cheques are cheques drawn and given to payees that have not yet been presented to the bank for debiting against the firm\'s bank account.',
    repeatBadge: 'NABTEB NBC 2021'
  },

  // ─── NABTEB PHYSICS (NTC Technical Physics) ───
  {
    id: 70021,
    questionNumber: 1,
    subject: 'Physics',
    topic: 'Measurement and Units',
    subtopic: 'Vernier Calipers and Micrometer Gauge',
    year: 2024,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'Which instrument is most suitable for accurately measuring the internal diameter of a small metal pipe in an engineering workshop?',
    options: [
      { key: 'A', text: 'Micrometer screw gauge' },
      { key: 'B', text: 'Vernier calipers' },
      { key: 'C', text: 'Metre rule' },
      { key: 'D', text: 'Engineer\'s steel tape' }
    ],
    optionsMap: {
      A: 'Micrometer screw gauge',
      B: 'Vernier calipers',
      C: 'Metre rule',
      D: 'Engineer\'s steel tape'
    },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Vernier calipers are equipped with internal jaws specifically designed to measure internal diameters of tubes and cylinders with precision up to 0.01 cm (0.1 mm).',
    repeatBadge: 'NABTEB NTC 2024 Certified'
  },
  {
    id: 70022,
    questionNumber: 2,
    subject: 'Physics',
    topic: 'Simple Machines',
    subtopic: 'Mechanical Advantage and Efficiency',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'A block and tackle pulley system has 5 pulleys. An effort of 200 N is required to raise a load of 800 N. Calculate the efficiency of the machine.',
    options: [
      { key: 'A', text: '40%' },
      { key: 'B', text: '60%' },
      { key: 'C', text: '80%' },
      { key: 'D', text: '100%' }
    ],
    optionsMap: { A: '40%', B: '60%', C: '80%', D: '100%' },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'Mechanical Advantage (MA) = Load / Effort = 800 N / 200 N = 4.\nVelocity Ratio (VR) of a 5-pulley system = number of pulleys = 5.\nEfficiency (η) = (MA / VR) × 100% = (4 / 5) × 100% = 80%.',
    repeatBadge: 'NABTEB NTC 2023'
  },
  {
    id: 70023,
    questionNumber: 3,
    subject: 'Physics',
    topic: 'Current Electricity',
    subtopic: 'Ohm\'s Law and Circuit Analysis',
    year: 2022,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'Three resistors of 4 Ω, 6 Ω, and 12 Ω are connected in parallel. Calculate the equivalent resistance of the combination.',
    options: [
      { key: 'A', text: '2 Ω' },
      { key: 'B', text: '4 Ω' },
      { key: 'C', text: '8 Ω' },
      { key: 'D', text: '22 Ω' }
    ],
    optionsMap: { A: '2 Ω', B: '4 Ω', C: '8 Ω', D: '22 Ω' },
    correctAnswer: 'A',
    correct_option: 'A',
    explanation: 'For parallel resistors:\n1/R = 1/R₁ + 1/R₂ + 1/R₃ = 1/4 + 1/6 + 1/12\nLCM of 4, 6, 12 is 12:\n1/R = (3 + 2 + 1) / 12 = 6/12 = 1/2.\nTherefore, R = 2 Ω.',
    repeatBadge: 'NABTEB NTC 2022'
  },
  {
    id: 70024,
    questionNumber: 4,
    subject: 'Physics',
    topic: 'Heat Energy',
    subtopic: 'Specific Heat Capacity',
    year: 2021,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'Calculate the quantity of heat required to raise the temperature of a 2 kg copper block from 25°C to 75°C. [Specific heat capacity of copper = 400 J/(kg·K)]',
    options: [
      { key: 'A', text: '20,000 J' },
      { key: 'B', text: '40,000 J' },
      { key: 'C', text: '50,000 J' },
      { key: 'D', text: '80,000 J' }
    ],
    optionsMap: { A: '20,000 J', B: '40,000 J', C: '50,000 J', D: '80,000 J' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Heat Q = m × c × Δθ\nWhere m = 2 kg, c = 400 J/(kg·K), Δθ = 75 - 25 = 50°C (or 50 K).\nQ = 2 × 400 × 50 = 40,000 J = 40 kJ.',
    repeatBadge: 'NABTEB NTC 2021'
  },

  // ─── NABTEB CHEMISTRY (NTC Technical Chemistry) ───
  {
    id: 70025,
    questionNumber: 1,
    subject: 'Chemistry',
    topic: 'Atomic Structure & Periodic Table',
    subtopic: 'Electronic Configuration',
    year: 2024,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'An element X has an atomic number of 17. To which group and period in the Periodic Table does element X belong?',
    options: [
      { key: 'A', text: 'Group 7, Period 3' },
      { key: 'B', text: 'Group 3, Period 7' },
      { key: 'C', text: 'Group 5, Period 3' },
      { key: 'D', text: 'Group 7, Period 4' }
    ],
    optionsMap: { A: 'Group 7, Period 3', B: 'Group 3, Period 7', C: 'Group 5, Period 3', D: 'Group 7, Period 4' },
    correctAnswer: 'A',
    correct_option: 'A',
    explanation: 'Atomic number 17 (Chlorine): electronic configuration = 2, 8, 7.\nNumber of shells = 3 (Period 3).\nNumber of valence electrons = 7 (Group 7 / Halogens).',
    repeatBadge: 'NABTEB NTC 2024'
  },
  {
    id: 70026,
    questionNumber: 2,
    subject: 'Chemistry',
    topic: 'Acids, Bases and Salts',
    subtopic: 'Neutralization and pH Scale',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'What is the pH of a 0.001 mol/dm³ solution of hydrochloric acid (HCl)?',
    options: [
      { key: 'A', text: '1' },
      { key: 'B', text: '2' },
      { key: 'C', text: '3' },
      { key: 'D', text: '11' }
    ],
    optionsMap: { A: '1', B: '2', C: '3', D: '11' },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'HCl is a strong monobasic acid, fully ionized:\n[H⁺] = 0.001 M = 10⁻³ mol/dm³.\npH = -log₁₀[H⁺] = -log₁₀(10⁻³) = 3.',
    repeatBadge: 'NABTEB NTC 2023'
  },
  {
    id: 70027,
    questionNumber: 3,
    subject: 'Chemistry',
    topic: 'Metals and Extraction',
    subtopic: 'Rusting and Corrosion of Iron',
    year: 2022,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'The coating of iron sheets with molten zinc to protect them from rusting in technical construction is known as:',
    options: [
      { key: 'A', text: 'Electroplating' },
      { key: 'B', text: 'Galvanization' },
      { key: 'C', text: 'Vulcanization' },
      { key: 'D', text: 'Anodizing' }
    ],
    optionsMap: { A: 'Electroplating', B: 'Galvanization', C: 'Vulcanization', D: 'Anodizing' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Galvanization is the metallurgical process of applying a sacrificial protective zinc coating to iron or steel to prevent rusting.',
    repeatBadge: 'NABTEB NTC 2022'
  },

  // ─── NABTEB BIOLOGY (General Biology) ───
  {
    id: 70028,
    questionNumber: 1,
    subject: 'Biology',
    topic: 'Cell Organization',
    subtopic: 'Cell Organelles and Functions',
    year: 2024,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'Which cell organelle is responsible for aerobic cellular respiration and ATP synthesis?',
    options: [
      { key: 'A', text: 'Ribosome' },
      { key: 'B', text: 'Mitochondrion' },
      { key: 'C', text: 'Golgi body' },
      { key: 'D', text: 'Endoplasmic reticulum' }
    ],
    optionsMap: { A: 'Ribosome', B: 'Mitochondrion', C: 'Golgi body', D: 'Endoplasmic reticulum' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Mitochondria are the "powerhouses" of the cell, generating energy in the form of Adenosine Triphosphate (ATP) through cellular respiration.',
    repeatBadge: 'NABTEB NBC/NTC 2024'
  },
  {
    id: 70029,
    questionNumber: 2,
    subject: 'Biology',
    topic: 'Plant Nutrition',
    subtopic: 'Photosynthesis',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'During the light-dependent stage of photosynthesis, water molecules are split into hydrogen ions and oxygen gas. This process is called:',
    options: [
      { key: 'A', text: 'Hydrolysis' },
      { key: 'B', text: 'Photolysis' },
      { key: 'C', text: 'Plasmolysis' },
      { key: 'D', text: 'Glycolysis' }
    ],
    optionsMap: { A: 'Hydrolysis', B: 'Photolysis', C: 'Plasmolysis', D: 'Glycolysis' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Photolysis of water (Hill reaction) is the photochemical cleavage of water molecules driven by light absorbed by chlorophyll in the thylakoid membranes.',
    repeatBadge: 'NABTEB NBC/NTC 2023'
  },
  {
    id: 70030,
    questionNumber: 3,
    subject: 'Biology',
    topic: 'Genetics & Heredity',
    subtopic: 'Mendelian Monohybrid Crosses',
    year: 2022,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'When two heterozygous tall pea plants (Tt) are crossed, what is the expected phenotypic ratio of tall to dwarf offspring?',
    options: [
      { key: 'A', text: '1 : 1' },
      { key: 'B', text: '2 : 1' },
      { key: 'C', text: '3 : 1' },
      { key: 'D', text: '1 : 2 : 1' }
    ],
    optionsMap: { A: '1 : 1', B: '2 : 1', C: '3 : 1', D: '1 : 2 : 1' },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'Tt × Tt yields genotype: 1 TT : 2 Tt : 1 tt.\nSince T (tall) is dominant over t (dwarf), TT and Tt are phenotypically tall (3 tall), while tt is dwarf (1 dwarf). Phenotypic ratio = 3 : 1.',
    repeatBadge: 'NABTEB NBC/NTC 2022'
  },

  // ─── NABTEB COMMERCE (NBC) ───
  {
    id: 70031,
    questionNumber: 1,
    subject: 'Commerce',
    topic: 'Trade and Documents',
    subtopic: 'Commercial Documents in Home Trade',
    year: 2024,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'A document sent by a supplier to a customer to correct an undercharge in an earlier invoice is a:',
    options: [
      { key: 'A', text: 'Credit note' },
      { key: 'B', text: 'Debit note' },
      { key: 'C', text: 'Proforma invoice' },
      { key: 'D', text: 'Advice note' }
    ],
    optionsMap: { A: 'Credit note', B: 'Debit note', C: 'Proforma invoice', D: 'Advice note' },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'A debit note is issued to inform the buyer that their account has been debited due to an undercharge or omission on the original invoice. A credit note is issued for overcharges.',
    repeatBadge: 'NABTEB NBC 2024'
  },
  {
    id: 70032,
    questionNumber: 2,
    subject: 'Commerce',
    topic: 'Insurance',
    subtopic: 'Principles of Insurance',
    year: 2023,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'The principle of insurance which states that an insured person should be restored to the financial position they occupied prior to the loss without making a profit is:',
    options: [
      { key: 'A', text: 'Insurable interest' },
      { key: 'B', text: 'Subrogation' },
      { key: 'C', text: 'Indemnity' },
      { key: 'D', text: 'Utmost good faith' }
    ],
    optionsMap: { A: 'Insurable interest', B: 'Subrogation', C: 'Indemnity', D: 'Utmost good faith' },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'The principle of indemnity ensures exact financial compensation for the actual loss suffered, preventing the policyholder from profiting from an insurance claim.',
    repeatBadge: 'NABTEB NBC 2023'
  },

  // ─── NABTEB GOVERNMENT / CIVIC EDUCATION (NBC / NTC) ───
  {
    id: 70033,
    questionNumber: 1,
    subject: 'Government',
    topic: 'Constitutional Development',
    subtopic: 'Rule of Law & Separation of Powers',
    year: 2024,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'The doctrine of Separation of Powers was prominently popularized by the French political philosopher:',
    options: [
      { key: 'A', text: 'Jean-Jacques Rousseau' },
      { key: 'B', text: 'Baron de Montesquieu' },
      { key: 'C', text: 'John Locke' },
      { key: 'D', text: 'Thomas Hobbes' }
    ],
    optionsMap: {
      A: 'Jean-Jacques Rousseau',
      B: 'Baron de Montesquieu',
      C: 'John Locke',
      D: 'Thomas Hobbes'
    },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Baron de Montesquieu articulated the theory of separation of governmental powers into legislative, executive, and judicial branches in his 1748 treatise "The Spirit of the Laws".',
    repeatBadge: 'NABTEB NBC/NTC 2024'
  },
  {
    id: 70034,
    questionNumber: 2,
    subject: 'Civic Education',
    topic: 'Citizenship',
    subtopic: 'Rights, Duties and Obligations',
    year: 2023,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'Which of the following is a fundamental civic obligation of every responsible Nigerian citizen?',
    options: [
      { key: 'A', text: 'Contesting in national elections' },
      { key: 'B', text: 'Prompt payment of lawful taxes' },
      { key: 'C', text: 'Founding a political party' },
      { key: 'D', text: 'Joining a labor trade union' }
    ],
    optionsMap: {
      A: 'Contesting in national elections',
      B: 'Prompt payment of lawful taxes',
      C: 'Founding a political party',
      D: 'Joining a labor trade union'
    },
    correctAnswer: 'B',
    correct_option: 'B',
    explanation: 'Prompt payment of taxes is a mandatory civic and constitutional duty of all citizens, providing revenue for public infrastructure and social amenities.',
    repeatBadge: 'NABTEB NBC/NTC 2023'
  },

  // ─── NABTEB TECHNICAL DRAWING / BASIC TECHNOLOGY (NTC Technical) ───
  {
    id: 70035,
    questionNumber: 1,
    subject: 'Physics',
    topic: 'Technical Drawing',
    subtopic: 'Orthographic and Isometric Projections',
    year: 2024,
    difficulty: 'Medium',
    exam: 'NABTEB',
    text: 'In isometric drawing, the two receding axes are inclined to the horizontal baseline at an angle of:',
    options: [
      { key: 'A', text: '30°' },
      { key: 'B', text: '45°' },
      { key: 'C', text: '60°' },
      { key: 'D', text: '90°' }
    ],
    optionsMap: { A: '30°', B: '45°', C: '60°', D: '90°' },
    correctAnswer: 'A',
    correct_option: 'A',
    explanation: 'In isometric projection, the object is aligned with three isometric axes: one vertical axis at 90° and two receding axes drawn at 30° to the horizontal baseline.',
    repeatBadge: 'NABTEB NTC Technical 2024'
  },
  {
    id: 70036,
    questionNumber: 2,
    subject: 'Physics',
    topic: 'Technical Drawing',
    subtopic: 'Drawing Line Conventions',
    year: 2023,
    difficulty: 'Easy',
    exam: 'NABTEB',
    text: 'In technical engineering drawing, hidden details and outlines not directly visible are represented using:',
    options: [
      { key: 'A', text: 'Continuous thick lines' },
      { key: 'B', text: 'Continuous thin lines' },
      { key: 'C', text: 'Dashed thin lines' },
      { key: 'D', text: 'Chain thin lines' }
    ],
    optionsMap: {
      A: 'Continuous thick lines',
      B: 'Continuous thin lines',
      C: 'Dashed thin lines',
      D: 'Chain thin lines'
    },
    correctAnswer: 'C',
    correct_option: 'C',
    explanation: 'Standard BS 8888 line conventions dictate that short dashed thin lines are used to indicate hidden edges and surfaces in technical drawings.',
    repeatBadge: 'NABTEB NTC Technical 2023'
  }
];
