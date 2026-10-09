/**
 * Official JAMB Syllabus Directory & Document Metadata
 * Sourced directly from JAMB IBASS (ibass.jamb.gov.ng/syllabus-preview)
 */

export interface JambSyllabusItem {
  id: string;
  subject: string;
  icon: string;
  facultyCategory: 'Sciences' | 'Arts & Humanities' | 'Social & Commercial' | 'General';
  examDurationMinutes: number;
  totalQuestions: number;
  officialAims: string[];
  pdfDownloadUrl: string;
  sections: {
    sectionTitle: string;
    topics: {
      topicName: string;
      objectives: string[];
      contents: string[];
    }[];
  }[];
  prescribedTextbooks: {
    title: string;
    author: string;
    publisher?: string;
    edition?: string;
  }[];
}

export const JAMB_SYLLABUS_DIRECTORY: JambSyllabusItem[] = [
  // 1. USE OF ENGLISH
  {
    id: 'english-language',
    subject: 'English Language',
    icon: '📖',
    facultyCategory: 'General',
    examDurationMinutes: 120,
    totalQuestions: 60,
    pdfDownloadUrl: 'https://ibass.jamb.gov.ng/assets/syllabuses/use-of-english.pdf',
    officialAims: [
      'Communicate effectively in both written and spoken English',
      'Use the English language for learning at the tertiary level',
      'Acquire a broad vocabulary and understand lexis and structure nuances',
      'Demonstrate sound competence in comprehension and summary interpretation',
      'Master oral forms including vowel sounds, consonants, rhymes, stress patterns and intonation'
    ],
    sections: [
      {
        sectionTitle: 'Section A: Comprehension and Summary',
        topics: [
          {
            topicName: 'Comprehension Passages & Summary Writing',
            objectives: [
              'Identify central ideas and topic sentences',
              'Infer unstated assumptions and deductive conclusions',
              'Determine the meaning of unfamiliar words and figures of speech in context',
              'Condense key arguments concisely without distorting original facts'
            ],
            contents: [
              'Passage on contemporary socio-scientific issues',
              'Passage on humanities and everyday human experiences',
              'Prescribed Life Changer / Novel Reading Text'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section B: Lexis and Structure',
        topics: [
          {
            topicName: 'Synonyms, Antonyms, Idioms & Sentence Completion',
            objectives: [
              'Identify words nearest in meaning and opposite in meaning',
              'Interpret idiomatic expressions, phrasal verbs, and collocations',
              'Select correct grammatical forms: concord, tenses, prepositions, conditionals and clauses'
            ],
            contents: [
              'Synonyms & Antonyms in varying syntactic contexts',
              'Subject-Verb Concord and Pronoun Agreement',
              'Tenses, Aspects, Modals, and Conditionals',
              'Phrasal verbs and Idiomatic usage'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Section C: Oral Forms',
        topics: [
          {
            topicName: 'Vowels, Consonants, Rhymes and Stress',
            objectives: [
              'Distinguish between monophthongs, diphthongs, and triphthongs',
              'Identify consonant clusters, silent letters, and voicing contrasts',
              'Determine primary syllable stress, emphatic stress, and rhyme pairs'
            ],
            contents: [
              'Vowel sounds (/i:/ vs /ɪ/, /æ/ vs /ʌ/, /ɔ:/ vs /ɒ/)',
              'Consonants (/θ/, /ð/, /ʃ/, /ʒ/, /tʃ/, /dʒ/)',
              'Word stress rules (noun/verb shift) and sentence emphatic stress'
            ]
          }
        ]
      }
    ],
    prescribedTextbooks: [
      { title: 'The Life Changer', author: 'Khadija Abubakar Jalli', publisher: 'JAMB Prescribed Reading Text' },
      { title: 'Intensive English for Senior Secondary Schools', author: 'Oluikpe, B. O. A. et al.', publisher: 'African First Publishers' },
      { title: 'Oral English for Schools and Colleges', author: 'Sam Onuigbo', publisher: 'Africana First' },
      { title: 'The Invisible Teacher (JAMB English)', author: 'Dele Ashade', publisher: 'Ashmark Global' }
    ]
  },

  // 2. MATHEMATICS
  {
    id: 'mathematics',
    subject: 'Mathematics',
    icon: '📐',
    facultyCategory: 'General',
    examDurationMinutes: 120,
    totalQuestions: 40,
    pdfDownloadUrl: 'https://ibass.jamb.gov.ng/assets/syllabuses/mathematics.pdf',
    officialAims: [
      'Acquire mathematical literacy to function effectively in society',
      'Develop mathematical thinking and problem-solving skills',
      'Apply mathematical concepts in science, technology, commerce, and daily life',
      'Master rapid calculations, formula derivations, algebraic models, and geometric proofs'
    ],
    sections: [
      {
        sectionTitle: 'Section I: Number and Numeration',
        topics: [
          {
            topicName: 'Number Bases, Fractions, Indices and Logarithms',
            objectives: [
              'Perform operations in bases other than 10',
              'Simplify algebraic surds and rationalize denominators',
              'Apply laws of indices and logarithms in solving exponential equations'
            ],
            contents: ['Number bases (2 to 10)', 'Fractions, Decimals, Percentages', 'Surds and Conjugates', 'Logarithms with characteristic & mantissa']
          },
          {
            topicName: 'Sets, Sequences and Financial Mathematics',
            objectives: ['Calculate Venn diagram intersections', 'Compute AP and GP nth terms and sum to infinity', 'Solve simple and compound interest problems'],
            contents: ['Set operations and Venn diagrams', 'Arithmetic & Geometric Progressions', 'Depreciation, Annuities, Shares and Taxes']
          }
        ]
      },
      {
        sectionTitle: 'Section II: Algebra',
        topics: [
          {
            topicName: 'Polynomials, Inequalities, Matrices & Determinants',
            objectives: [
              'Factorize cubic and quadratic polynomials',
              'Solve simultaneous linear and quadratic equations',
              'Perform 2x2 and 3x3 matrix multiplication and invert matrices'
            ],
            contents: ['Quadratic equations & roots relationship', 'Linear & quadratic inequalities', 'Matrices, Determinants & Cramers Rule']
          }
        ]
      },
      {
        sectionTitle: 'Section III: Geometry and Trigonometry',
        topics: [
          {
            topicName: 'Coordinate Geometry, Circles and Trigonometric Ratios',
            objectives: [
              'Calculate midpoint, gradient, and perpendicular lines',
              'Apply Circle Theorems to find unknown angles',
              'Use sine, cosine rules and bearings for heights and distances'
            ],
            contents: ['Straight lines and perpendicular distance', 'Circle Theorems', 'Trigonometric identities and bearings']
          }
        ]
      },
      {
        sectionTitle: 'Section IV: Calculus',
        topics: [
          {
            topicName: 'Differentiation and Integration',
            objectives: [
              'Differentiate algebraic, trigonometric and composite functions using chain, product, quotient rules',
              'Find maxima, minima, and rate of change',
              'Compute definite and indefinite integrals and find area under curves'
            ],
            contents: ['Limits and derivatives from first principles', 'Rules of differentiation', 'Definite and indefinite integrals']
          }
        ]
      },
      {
        sectionTitle: 'Section V: Statistics and Probability',
        topics: [
          {
            topicName: 'Measures of Central Tendency & Dispersion, Probability',
            objectives: ['Calculate mean, median, mode of grouped data', 'Find variance and standard deviation', 'Evaluate permutations, combinations and mutually exclusive probabilities'],
            contents: ['Mean, Median, Mode, Quartiles', 'Variance and Standard Deviation', 'Permutations & Combinations', 'Probability trees and conditional probability']
          }
        ]
      }
    ],
    prescribedTextbooks: [
      { title: 'New General Mathematics for SS 1-3', author: 'Channon, J. B. et al.', publisher: 'Longman' },
      { title: 'Further Mathematics Project 1-3', author: 'Tuttuh-Adegun, M. R. et al.', publisher: 'NPS Educational' },
      { title: 'Pure Mathematics', author: 'Backhouse, J. K.', publisher: 'Longman' }
    ]
  },

  // 3. PHYSICS
  {
    id: 'physics',
    subject: 'Physics',
    icon: '⚡',
    facultyCategory: 'Sciences',
    examDurationMinutes: 120,
    totalQuestions: 40,
    pdfDownloadUrl: 'https://ibass.jamb.gov.ng/assets/syllabuses/physics.pdf',
    officialAims: [
      'Sustain interest in physics and appreciate its application in modern technology',
      'Understand fundamental physical principles governing the universe',
      'Develop deductive reasoning and quantitative skills in solving scientific problems',
      'Master experimental concepts, SI units, and energy transformations'
    ],
    sections: [
      {
        sectionTitle: 'Section I: Mechanics',
        topics: [
          {
            topicName: 'Scalars, Vectors, Motion & Projectiles',
            objectives: [
              'Resolve vectors into rectangular components',
              'Apply equations of uniformly accelerated linear motion',
              'Calculate maximum height, time of flight, and range of projectiles'
            ],
            contents: ['Vector resolution', 'Equations of motion: v=u+at, s=ut+½at², v²=u²+2as', 'Projectile motion at an angle']
          },
          {
            topicName: 'Newton Laws, Momentum, Work, Energy & Machines',
            objectives: ['State and apply Newton three laws', 'Apply law of conservation of linear momentum', 'Calculate mechanical advantage, velocity ratio and efficiency of machines'],
            contents: ['F=ma, impulse and momentum', 'Conservation of momentum in collisions', 'Work, kinetic and potential energy', 'Levers, pulleys, inclined planes, screw jacks']
          }
        ]
      },
      {
        sectionTitle: 'Section II: Thermal Physics',
        topics: [
          {
            topicName: 'Temperature, Heat Transfer & Gas Laws',
            objectives: [
              'Convert between Celsius, Kelvin, and Fahrenheit scales',
              'Calculate linear, superficial, and cubical expansivity',
              'Determine specific heat capacity and latent heat of vaporization',
              'Apply Boyle law, Charles law, and ideal gas equation PV=nRT'
            ],
            contents: ['Thermometry and anomalous expansion of water', 'Expansivity and bimetallic strips', 'Calorimetry and latent heat', 'Gas laws and kinetic theory of gases']
          }
        ]
      },
      {
        sectionTitle: 'Section III: Waves and Optics',
        topics: [
          {
            topicName: 'Wave Motion, Sound, Reflection & Refraction of Light',
            objectives: [
              'Distinguish transverse and longitudinal waves',
              'Calculate wave velocity v=fλ and resonance tube wavelengths',
              'Apply Snell law and lens formula 1/f = 1/u + 1/v to optical systems'
            ],
            contents: ['Wave properties: reflection, refraction, diffraction, polarization', 'Sound waves, pitch, loudness, quality and Doppler effect', 'Mirrors, lenses, prisms, telescopes and microscopes']
          }
        ]
      },
      {
        sectionTitle: 'Section IV: Electricity and Magnetism',
        topics: [
          {
            topicName: 'Electrostatics, Current Electricity & Electromagnetism',
            objectives: [
              'Apply Coulomb law and calculate electric field intensity',
              'Use Ohm law and Kirchhoff rules for series and parallel circuits',
              'Calculate magnetic force F=BIL and transformer equation Vp/Vs = Np/Ns'
            ],
            contents: ['Capacitors in series and parallel', 'Resistors, EMF, internal resistance', 'Electromagnetic induction, Faraday and Lenz laws', 'AC circuits: reactance and impedance']
          }
        ]
      },
      {
        sectionTitle: 'Section V: Modern Physics',
        topics: [
          {
            topicName: 'Atomic Structure, Radioactivity & Quantum Theory',
            objectives: [
              'Explain photoelectric effect and Einstein equation E=hf',
              'Calculate radioactive half-life and decay constants',
              'Understand nuclear fission, fusion, and wave-particle duality'
            ],
            contents: ['Thomson, Rutherford, and Bohr models', 'Photoelectric emission and work function', 'Alpha, beta, gamma rays and half-life', 'Nuclear energy and X-rays']
          }
        ]
      }
    ],
    prescribedTextbooks: [
      { title: 'Senior Secondary School Physics', author: 'Okeke, P. N. and Anyakoha, M. W.', publisher: 'Africana First' },
      { title: 'New School Physics for Senior Secondary Schools', author: 'Anyakoha, M. W.', publisher: 'Africana First' },
      { title: 'Principles of Physics', author: 'Nelkon, M.', publisher: 'Hart-Davis Educational' }
    ]
  },

  // 4. CHEMISTRY
  {
    id: 'chemistry',
    subject: 'Chemistry',
    icon: '🧪',
    facultyCategory: 'Sciences',
    examDurationMinutes: 120,
    totalQuestions: 40,
    pdfDownloadUrl: 'https://ibass.jamb.gov.ng/assets/syllabuses/chemistry.pdf',
    officialAims: [
      'Appreciate the role of chemistry in manufacturing, agriculture, medicine and environmental conservation',
      'Understand the particulate nature of matter and periodic trends',
      'Apply stoichiometric calculations in chemical reactions',
      'Master qualitative and quantitative laboratory techniques'
    ],
    sections: [
      {
        sectionTitle: 'Section I: Atomic Structure and Bonding',
        topics: [
          {
            topicName: 'Subatomic Particles, Electronic Configuration & Periodic Table',
            objectives: ['Deduce electronic configurations of atoms and ions', 'Identify periodic trends: ionization energy, electronegativity, atomic radius', 'Distinguish ionic, covalent, coordinate and metallic bonding'],
            contents: ['Protons, neutrons, electrons and isotopes', 's, p, d, f orbitals and Aufbau principle', 'Periodic table groups and periods', 'Intermolecular forces and hydrogen bonding']
          }
        ]
      },
      {
        sectionTitle: 'Section II: Stoichiometry and Physical Chemistry',
        topics: [
          {
            topicName: 'Mole Concept, Reaction Rates, Equilibrium & Thermochemistry',
            objectives: [
              'Calculate molar masses, empirical and molecular formulas',
              'Apply Le Chatelier principle to shifting equilibrium systems',
              'Determine exothermic and endothermic enthalpy changes'
            ],
            contents: ['Molar volume of gases at STP', 'Factors affecting rate of reaction', 'Equilibrium constant Kc and Kp', 'Enthalpy, Hess law, and entropy']
          }
        ]
      },
      {
        sectionTitle: 'Section III: Acids, Bases, Salts and Electrochemistry',
        topics: [
          {
            topicName: 'pH Calculations, Buffer Solutions, Electrolysis & Voltaic Cells',
            objectives: [
              'Calculate pH and pOH of strong and weak acids/bases',
              'Apply Faraday first and second laws of electrolysis',
              'Calculate standard electrode potentials and cell EMF'
            ],
            contents: ['Arrhenius, Bronsted-Lowry, Lewis acid-base definitions', 'Volumetric analysis and indicators', 'Faraday laws Q=It and m=ZIt', 'Corrosion and cathodic protection']
          }
        ]
      },
      {
        sectionTitle: 'Section IV: Organic Chemistry',
        topics: [
          {
            topicName: 'Hydrocarbons, Alkanols, Polymers & Biomolecules',
            objectives: [
              'Name organic compounds using IUPAC nomenclature',
              'Identify geometric and structural isomerism',
              'Describe laboratory preparation and reactions of alkanes, alkenes, alkynes, benzene and alkanols'
            ],
            contents: ['Petroleum refining and cracking', 'Functional groups: alcohols, ethers, aldehydes, ketones, carboxylic acids, esters', 'Saponification and detergents', 'Carbohydrates, amino acids, and synthetic polymers']
          }
        ]
      }
    ],
    prescribedTextbooks: [
      { title: 'New School Chemistry for Senior Secondary Schools', author: 'Ababio, O. Y.', publisher: 'Africana First' },
      { title: 'Comprehensive Certificate Chemistry', author: 'Holderness, A. and Lambert, J.', publisher: 'Heinemann' },
      { title: 'Senior Secondary Chemistry Book 1-3', author: 'Bajah, S. T. et al.', publisher: 'Longman' }
    ]
  },

  // 5. BIOLOGY
  {
    id: 'biology',
    subject: 'Biology',
    icon: '🧬',
    facultyCategory: 'Sciences',
    examDurationMinutes: 120,
    totalQuestions: 40,
    pdfDownloadUrl: 'https://ibass.jamb.gov.ng/assets/syllabuses/biology.pdf',
    officialAims: [
      'Demonstrate understanding of biological diversity and cellular organization',
      'Explain physiological processes in plants and animals',
      'Apply principles of genetics, heredity, evolution, and ecology',
      'Appreciate environmental sustainability and biological conservation'
    ],
    sections: [
      {
        sectionTitle: 'Section I: Living Organisms & Cell Biology',
        topics: [
          {
            topicName: 'Characteristics of Life, Classification & Cell Structure',
            objectives: ['Classify organisms into 5 kingdoms', 'Identify cell organelles and their functions', 'Describe mitosis and meiosis cell division'],
            contents: ['Kingdoms: Monera, Protista, Fungi, Plantae, Animalia', 'Cell membrane, nucleus, mitochondria, chloroplast', 'Diffusion, osmosis, and plasmolysis']
          }
        ]
      },
      {
        sectionTitle: 'Section II: Physiology of Animals and Plants',
        topics: [
          {
            topicName: 'Nutrition, Transport, Respiration & Excretion',
            objectives: [
              'Explain light and dark reactions of photosynthesis',
              'Describe the mammalian circulatory and lymphatic systems',
              'Distinguish aerobic and anaerobic respiration',
              'Explain structure and function of the mammalian kidney and nephron'
            ],
            contents: ['Autotrophic and heterotrophic nutrition', 'Transpiration and translocation in vascular plants', 'Mammalian heart, blood vessels and blood groups', 'Gaseous exchange in insects, fish, and mammals']
          }
        ]
      },
      {
        sectionTitle: 'Section III: Genetics, Heredity and Evolution',
        topics: [
          {
            topicName: 'Mendelian Genetics, DNA, Sex-Linkage & Darwinian Evolution',
            objectives: [
              'Solve monohybrid and dihybrid genetic crosses',
              'Explain inheritance of sickle cell anemia, ABO blood groups, and hemophilia',
              'State evidence of organic evolution: fossils, comparative anatomy, vestigial organs'
            ],
            contents: ['Mendel laws of inheritance', 'DNA structure and replication', 'Sex-linked traits: color blindness and hemophilia', 'Lamarckian vs Darwinian evolutionary mechanisms']
          }
        ]
      },
      {
        sectionTitle: 'Section IV: Ecology and Environmental Biology',
        topics: [
          {
            topicName: 'Ecosystems, Energy Flow, Nutrient Cycles & Pollution',
            objectives: [
              'Identify biotic and abiotic factors influencing biomes',
              'Trace energy flow through food chains, food webs, and trophic levels',
              'Describe the nitrogen, carbon, and water cycles',
              'Explain consequences of deforestation, oil spills, and greenhouse gases'
            ],
            contents: ['Savanna, rainforest, desert and aquatic biomes', 'Ecological pyramids of numbers, biomass, energy', 'Symbiosis, parasitism, mutualism, commensalism', 'Pollution and wildlife conservation in Nigeria']
          }
        ]
      }
    ],
    prescribedTextbooks: [
      { title: 'Modern Biology for Senior Secondary Schools', author: 'Ramalingam, S. T.', publisher: 'Africana First' },
      { title: 'College Biology', author: 'Idodo-Umeh, G.', publisher: 'Idodo Umeh Publishers' },
      { title: 'Essential Biology for Senior Secondary Schools', author: 'Michael, M. C.', publisher: 'Tonad Publishers' }
    ]
  },

  // 6. ECONOMICS
  {
    id: 'economics',
    subject: 'Economics',
    icon: '📊',
    facultyCategory: 'Social & Commercial',
    examDurationMinutes: 120,
    totalQuestions: 40,
    pdfDownloadUrl: 'https://ibass.jamb.gov.ng/assets/syllabuses/economics.pdf',
    officialAims: [
      'Understand fundamental economic concepts and principles of allocation of scarce resources',
      'Analyze microeconomic markets, pricing, and consumer utility',
      'Explain macroeconomic variables: national income, inflation, fiscal & monetary policies',
      'Examine international trade, economic development, and African integration'
    ],
    sections: [
      {
        sectionTitle: 'Section I: Microeconomics',
        topics: [
          {
            topicName: 'Scarcity, Demand & Supply, Elasticity & Market Structures',
            objectives: [
              'Explain scale of preference and opportunity cost',
              'Calculate price elasticity of demand and supply',
              'Compare perfect competition, monopoly, oligopoly, and monopolistic competition'
            ],
            contents: ['Basic economic concepts', 'Laws of demand and supply and equilibrium price', 'Price elasticity: point and arc formulas', 'Short-run and long-run cost curves and revenue']
          }
        ]
      },
      {
        sectionTitle: 'Section II: Macroeconomics',
        topics: [
          {
            topicName: 'National Income, Money and Banking, Public Finance',
            objectives: [
              'Calculate GDP, GNP, NNI using output, income, and expenditure methods',
              'Explain functions of central bank and monetary policy tools',
              'Evaluate progressive, regressive taxation and government budgets'
            ],
            contents: ['Circular flow of national income', 'Quantity theory of money MV=PT', 'Treasury bills, cash reserve ratio, open market operations', 'Fiscal policy and national debt']
          }
        ]
      }
    ],
    prescribedTextbooks: [
      { title: 'Comprehensive Economics for Senior Secondary Schools', author: 'Anyanwuocha, R. A. I.', publisher: 'Africana First' },
      { title: 'Economics for West Africa', author: 'Aderinto, A. et al.', publisher: 'Longman' }
    ]
  },

  // 7. GOVERNMENT
  {
    id: 'government',
    subject: 'Government',
    icon: '🏛️',
    facultyCategory: 'Arts & Humanities',
    examDurationMinutes: 120,
    totalQuestions: 40,
    pdfDownloadUrl: 'https://ibass.jamb.gov.ng/assets/syllabuses/government.pdf',
    officialAims: [
      'Understand the principles and concepts of political governance',
      'Appreciate the structures and functions of arms of government',
      'Examine the constitutional and political development of Nigeria',
      'Evaluate Nigeria foreign policy and international organizations'
    ],
    sections: [
      {
        sectionTitle: 'Section I: Political Concepts and Systems',
        topics: [
          {
            topicName: 'State, Sovereignty, Rule of Law & Political Ideologies',
            objectives: ['Distinguish nation, state and society', 'Explain separation of powers and checks and balances', 'Compare democracy, capitalism, socialism, communism and fascism'],
            contents: ['Organs of government: Legislature, Executive, Judiciary', 'Unitary, Federal, and Confederal systems', 'Citizenship, fundamental human rights, and public opinion']
          }
        ]
      },
      {
        sectionTitle: 'Section II: Nigerian Constitutional Evolution',
        topics: [
          {
            topicName: 'Colonial Administration & Post-Independence Constitutions',
            objectives: ['Analyze Clifford (1922), Richards (1946), Macpherson (1951), Lyttelton (1954) constitutions', 'Trace 1960, 1963, 1979, 1999 Republican constitutions', 'Examine military rule and civil war in Nigeria'],
            contents: ['Indirect rule in Northern, Western and Eastern Nigeria', 'Nationalist movements: NCNC, AG, NPC', 'Federalism and revenue allocation commissions', 'ECOWAS, AU, UNO, and Commonwealth of Nations']
          }
        ]
      }
    ],
    prescribedTextbooks: [
      { title: 'Government for Senior Secondary Schools', author: 'Oyediran, O. et al.', publisher: 'Longman' },
      { title: 'Essential Government', author: 'Dibie, C. C.', publisher: 'Tonad' }
    ]
  },

  // 8. LITERATURE IN ENGLISH
  {
    id: 'literature-in-english',
    subject: 'Literature in English',
    icon: '📚',
    facultyCategory: 'Arts & Humanities',
    examDurationMinutes: 120,
    totalQuestions: 40,
    pdfDownloadUrl: 'https://ibass.jamb.gov.ng/assets/syllabuses/literature-in-english.pdf',
    officialAims: [
      'Appreciate creative writing across drama, prose, and poetry',
      'Analyze literary techniques, figurative language, and structural devices',
      'Interpret socio-cultural and political themes in prescribed African and non-African texts',
      'Critically evaluate characters, setting, and plot developments'
    ],
    sections: [
      {
        sectionTitle: 'Section I: General Literary Principles',
        topics: [
          {
            topicName: 'Literary Appreciation and Literary Terms',
            objectives: ['Identify metaphors, similes, personification, irony, oxymoron, hyperbole', 'Analyze dramatic devices: aside, soliloquy, dramatic irony, catharsis', 'Interpret poetic forms: sonnet, ode, elegy, ballad, free verse'],
            contents: ['Elements of Prose: plot, theme, characterization, setting, narrative point of view', 'Elements of Drama: tragedy, comedy, tragic flaw, staging', 'Elements of Poetry: rhythm, rhyme scheme, meter, imagery, symbolism']
          }
        ]
      },
      {
        sectionTitle: 'Section II: Prescribed Texts (2026/2027 Syllabus Cycle)',
        topics: [
          {
            topicName: 'Prescribed Drama, Prose & Poetry',
            objectives: ['Analyze themes, characters and style in prescribed African and Non-African texts', 'Answer contextual and character-specific questions accurately'],
            contents: [
              'African Prose: Unexpected Joy at Dawn (Alex Agyei-Agyiri) / Second Class Citizen (Buchi Emecheta)',
              'Non-African Prose: Wuthering Heights (Emily Bronte) / Invisible Man (Ralph Ellison)',
              'African Drama: The Lion and the Jewel (Wole Soyinka) / Let Me Die Alone (John K. Kargbo)',
              'Non-African Drama: A Midsummer Night Dream (William Shakespeare) / Look Back in Anger (John Osborne)',
              'African & Non-African Poems (Selected prescribed anthologies)'
            ]
          }
        ]
      }
    ],
    prescribedTextbooks: [
      { title: 'The Lion and the Jewel', author: 'Wole Soyinka', publisher: 'Oxford University Press' },
      { title: 'Unexpected Joy at Dawn', author: 'Alex Agyei-Agyiri', publisher: 'Sub-Saharan Publishers' },
      { title: 'Second Class Citizen', author: 'Buchi Emecheta', publisher: 'Allison and Busby' },
      { title: 'A Midsummer Night Dream', author: 'William Shakespeare', publisher: 'Cambridge University Press' }
    ]
  }
];

export function getJambSyllabusBySubject(subjectName: string): JambSyllabusItem | undefined {
  const norm = subjectName.trim().toLowerCase();
  return JAMB_SYLLABUS_DIRECTORY.find((s) =>
    s.subject.toLowerCase() === norm ||
    s.id.toLowerCase() === norm ||
    norm.includes(s.subject.toLowerCase()) ||
    s.subject.toLowerCase().includes(norm)
  );
}
