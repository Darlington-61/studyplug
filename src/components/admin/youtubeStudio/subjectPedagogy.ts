import { LessonNote } from '../../../data/masterLessonNotes';
import {
  SubjectModality,
  SubjectPedagogyProfile,
  SubtopicTeachingRequirement,
  TopicPartBreakdown,
  TopicScale,
  TeachingTone
} from './types';

/**
 * Subject Pedagogical Analysis Engine
 * Intelligently determines the pedagogical modality, teaching priorities,
 * presentation style, and demonstration methods across ALL supported JAMB subjects.
 */
export function analyzeSubjectAndTopic(
  subject: string,
  topic: string,
  subtopics: string[] = [],
  lessonNote: LessonNote | null = null
): SubjectPedagogyProfile {
  const normSub = (subject || '').toLowerCase().trim();
  const normTop = (topic || '').toLowerCase().trim();
  const noteContent = (lessonNote?.content || '').toLowerCase();
  const noteFormulas = (lessonNote?.key_formulas || '').toLowerCase();

  // 1. MATHEMATICS
  if (normSub.includes('math')) {
    return {
      subject: 'Mathematics',
      primaryModality: 'calculation_based',
      secondaryModality: 'conceptual',
      pedagogicalPriorities: [
        'Step-by-step arithmetic and algebraic calculations',
        'Worked examples with progressive difficulty (Easy -> Exam Standard)',
        'Formula derivation and geometric reasoning where necessary',
        'Visual graphs, coordinate planes, and geometric figures',
        'Common calculation traps and sign-change mistakes',
        'JAMB past questions solved with speed-drill shortcuts'
      ],
      presentationStyle: 'Step-by-step blackboard calculation & algebraic proofs',
      recommendedVoiceTone: 'authoritative',
      workedExampleType: 'Step-by-step calculation & algebraic derivation',
      examinerTrapFocus: 'Sign change errors, order of operations, and arithmetic shortcuts',
      badgeColor: '#10b981', // Emerald
      iconName: 'Calculator'
    };
  }

  // 2. PHYSICS
  if (normSub.includes('phys')) {
    return {
      subject: 'Physics',
      primaryModality: 'conceptual',
      secondaryModality: 'calculation_based',
      pedagogicalPriorities: [
        'Core physical concepts, laws, and principles',
        'Governing formulae and physical equations',
        'Visual diagrams, circuit schematics, and motion graphs',
        'Numerical calculations with explicit parameter extraction',
        'Real-world physical applications and intuitive analogies',
        'JAMB CBT speed drills and unit conversion elimination'
      ],
      presentationStyle: 'Concept visualization + formula box + step calculation',
      recommendedVoiceTone: 'authoritative',
      workedExampleType: 'Parameter extraction, formula substitution & SI unit verification',
      examinerTrapFocus: 'Missing SI unit conversions (e.g. km/h to m/s, cm to m) and vector directions',
      badgeColor: '#0ea5e9', // Sky Blue
      iconName: 'Atom'
    };
  }

  // 3. CHEMISTRY
  if (normSub.includes('chem')) {
    const isOrganic = normTop.includes('organic') || normTop.includes('hydrocarbon') || normTop.includes('alkane');
    const isCalc = normTop.includes('stoich') || normTop.includes('gas law') || normTop.includes('mole') || normTop.includes('concentration');

    return {
      subject: 'Chemistry',
      primaryModality: isCalc ? 'calculation_based' : 'process_based',
      secondaryModality: 'conceptual',
      pedagogicalPriorities: [
        'Fundamental chemical principles and atomic theory',
        'Balanced chemical equations with state symbols (s, l, g, aq)',
        isOrganic ? 'Molecular/structural representations and IUPAC nomenclature' : 'Reaction mechanisms and electron transfer',
        'Stoichiometric calculations and mole ratios',
        'Laboratory processes, observation tables, and industrial applications',
        'Authentic JAMB questions and examiner distractor traps'
      ],
      presentationStyle: 'Reaction equations + molecular diagrams + stoichiometry steps',
      recommendedVoiceTone: 'authoritative',
      workedExampleType: 'Chemical reaction equation balancing & stoichiometric calculation',
      examinerTrapFocus: 'Unbalanced chemical equations, incorrect state symbols, and mole ratio traps',
      badgeColor: '#8b5cf6', // Violet
      iconName: 'FlaskConical'
    };
  }

  // 4. BIOLOGY
  if (normSub.includes('bio')) {
    return {
      subject: 'Biology',
      primaryModality: 'process_based',
      secondaryModality: 'diagram_based',
      pedagogicalPriorities: [
        'Biological structures, tissues, and cellular functions',
        'Sequential physiological processes and biological cycles',
        'Anatomical diagrams and structural adaptations',
        'Taxonomic classifications and evolutionary trends',
        'Comparative analyses (e.g., Mitosis vs Meiosis, Arteries vs Veins)',
        'Real-life ecological and human health applications',
        'JAMB biological terminology and specimen identification questions'
      ],
      presentationStyle: 'Biological diagrams + process cycle flowcharts + function comparisons',
      recommendedVoiceTone: 'warm_encouraging',
      workedExampleType: 'Biological cycle tracing & structural function analysis',
      examinerTrapFocus: 'Confusing anatomical structures, organelle roles, and taxonomic groupings',
      badgeColor: '#059669', // Emerald Dark
      iconName: 'Dna'
    };
  }

  // 5. ENGLISH LANGUAGE
  if (normSub.includes('eng')) {
    const isOral = normTop.includes('oral') || normTop.includes('stress') || normTop.includes('vowel') || normTop.includes('consonant');
    const isComprehension = normTop.includes('comprehension') || normTop.includes('summary') || normTop.includes('passage');

    return {
      subject: 'English Language',
      primaryModality: 'text_extract_based',
      secondaryModality: isOral ? 'definition_based' : 'interpretation_based',
      pedagogicalPriorities: [
        'Grammatical rules and structural concord principles',
        'Sentence examples highlighting correct vs incorrect usage',
        'Vocabulary in context (synonyms, antonyms, idioms)',
        isOral ? 'Oral English: stress patterns, vowel sounds, and phonetic symbols' : 'Sentence error identification and syntactic clause parsing',
        isComprehension ? 'Comprehension passage deduction and theme extraction' : 'Register and formal vs informal diction',
        'Authentic JAMB Lexis & Structure past questions explained'
      ],
      presentationStyle: 'Text extract cards + grammar contrast pills + phonetic guides',
      recommendedVoiceTone: 'warm_encouraging',
      workedExampleType: 'Sentence syntax dissection & grammatical error identification',
      examinerTrapFocus: 'Subject-verb concord traps, dangling modifiers, and subtle near-synonym distractors',
      badgeColor: '#f59e0b', // Amber
      iconName: 'BookOpen'
    };
  }

  // 6. LITERATURE IN ENGLISH
  if (normSub.includes('lit')) {
    return {
      subject: 'Literature in English',
      primaryModality: 'text_extract_based',
      secondaryModality: 'interpretation_based',
      pedagogicalPriorities: [
        'Text and poetic extract analysis',
        'Literary devices and figures of speech (Metaphor, Irony, Synecdoche, etc.)',
        'Thematic exploration and character motivation',
        'Plot structure, dramatic monologue, and historical context',
        'Comparative literary analysis across African and non-African prescribed texts',
        'JAMB past questions deciphering examiner figurative questions'
      ],
      presentationStyle: 'Poetic verse analysis + thematic breakdown + character trait map',
      recommendedVoiceTone: 'warm_encouraging',
      workedExampleType: 'Poetic extract breakdown & figurative device interpretation',
      examinerTrapFocus: 'Literal interpretation vs underlying figurative meaning; character misattribution',
      badgeColor: '#e11d48', // Rose Red
      iconName: 'Quote'
    };
  }

  // 7. ECONOMICS
  if (normSub.includes('econ')) {
    const isCalc = normTop.includes('elasticity') || normTop.includes('national income') || normTop.includes('cost') || normTop.includes('utility');

    return {
      subject: 'Economics',
      primaryModality: 'conceptual',
      secondaryModality: isCalc ? 'calculation_based' : 'diagram_based',
      pedagogicalPriorities: [
        'Formal economic definitions and foundational doctrines',
        'Inter-concept relationships (e.g. Price vs Quantity Demanded)',
        'Economic diagrams, curves, and schedule tables',
        'Real-world Nigerian economic applications (inflation, exchange rates)',
        isCalc ? 'Formulas and step-by-step elasticity/utility calculations' : 'Macroeconomic policy analysis',
        'JAMB past questions testing schedule interpretation and graphical shifts'
      ],
      presentationStyle: 'Economic curves / graphs + schedule tables + formula derivations',
      recommendedVoiceTone: 'authoritative',
      workedExampleType: 'Elasticity calculation & demand/supply graphical shift analysis',
      examinerTrapFocus: 'Movement along a curve vs shift of the entire curve; price vs non-price factors',
      badgeColor: '#14b8a6', // Teal
      iconName: 'TrendingUp'
    };
  }

  // 8. GOVERNMENT & CIVIC EDUCATION
  if (normSub.includes('gov') || normSub.includes('civic')) {
    return {
      subject: normSub.includes('civic') ? 'Civic Education' : 'Government',
      primaryModality: 'theory_based',
      secondaryModality: 'comparison_based',
      pedagogicalPriorities: [
        'Political concepts, systems of government, and ideologies',
        'Institutions of government (Executive, Legislature, Judiciary) and checks & balances',
        'Historical constitutional developments in Nigeria (1922 to 1999)',
        'Comparative governance (Presidential vs Parliamentary, Federal vs Unitary)',
        'Electoral processes, political parties, and citizenship rights',
        'Authentic JAMB past questions testing constitutional dates and provisions'
      ],
      presentationStyle: 'Institutional structure diagrams + comparative tables + constitutional timelines',
      recommendedVoiceTone: 'authoritative',
      workedExampleType: 'Constitutional provision analysis & comparative governance matrix',
      examinerTrapFocus: 'Confusing constitutional dates, commission recommendations, and legislative terms',
      badgeColor: '#6366f1', // Indigo
      iconName: 'Landmark'
    };
  }

  // 9. COMMERCE & FINANCIAL ACCOUNTING
  if (normSub.includes('comm') || normSub.includes('acc')) {
    const isAcc = normSub.includes('acc');

    return {
      subject: isAcc ? 'Financial Accounting' : 'Commerce',
      primaryModality: isAcc ? 'process_based' : 'conceptual',
      secondaryModality: 'calculation_based',
      pedagogicalPriorities: [
        'Commercial and accounting principles (Double Entry, Accrual, Matching)',
        'Worked calculations (Depreciation, Ledger Balancing, Partnership Accounts)',
        'Table layouts: T-accounts, Journal entries, Balance sheets',
        'Trade channels, warehousing, banking, and insurance mechanisms',
        'Step-by-step transaction posting and ledger balancing',
        'JAMB accounting and commerce past questions'
      ],
      presentationStyle: 'T-account ledger layout + financial tables + step-by-step balancing',
      recommendedVoiceTone: 'authoritative',
      workedExampleType: isAcc ? 'Ledger posting & Trial Balance extraction' : 'Commercial document & trade cycle analysis',
      examinerTrapFocus: 'Debit vs Credit reversals, carriage inward vs outward, and error correction types',
      badgeColor: '#d97706', // Amber-600
      iconName: 'DollarSign'
    };
  }

  // 10. GEOGRAPHY
  if (normSub.includes('geo')) {
    return {
      subject: 'Geography',
      primaryModality: 'diagram_based',
      secondaryModality: 'process_based',
      pedagogicalPriorities: [
        'Physical geography concepts (Earth rotation, landforms, weather)',
        'Map interpretation, contours, gradients, and scale calculations',
        'Geomorphological processes (erosion, weathering, vulcanicity)',
        'Environmental case studies and Nigerian regional geography',
        'Climatic charts, rainfall graphs, and data interpretation',
        'JAMB map-reading and physical geography questions'
      ],
      presentationStyle: 'Topographic contour sheets + climatic graphs + geomorphic cycle cards',
      recommendedVoiceTone: 'warm_encouraging',
      workedExampleType: 'Contour map gradient calculation & climatic graph interpretation',
      examinerTrapFocus: 'Scale conversion arithmetic and misidentifying contour landform features',
      badgeColor: '#84cc16', // Lime
      iconName: 'Globe'
    };
  }

  // 11. AGRICULTURAL SCIENCE
  if (normSub.includes('agric')) {
    return {
      subject: 'Agricultural Science',
      primaryModality: 'process_based',
      secondaryModality: 'application_based',
      pedagogicalPriorities: [
        'Soil science, soil composition, and nutrient cycles',
        'Crop husbandry, agronomy, and botanical classifications',
        'Animal breeding, anatomy, nutrition, and disease management',
        'Agricultural engineering, simple farm tools, and farm mechanisation',
        'Farm management, agricultural economics, and extension services',
        'JAMB past questions testing specimen identification and pest life cycles'
      ],
      presentationStyle: 'Crop/animal process cards + soil composition tables + husbandry steps',
      recommendedVoiceTone: 'warm_encouraging',
      workedExampleType: 'Plant nutrient deficit diagnosis & farm record calculation',
      examinerTrapFocus: 'Scientific botanical names, pest life cycle stages, and fertilizer ratios',
      badgeColor: '#65a30d', // Olive
      iconName: 'Sprout'
    };
  }

  // 12. RELIGIOUS STUDIES (CRS / IRS / IRK)
  if (normSub.includes('crs') || normSub.includes('irs') || normSub.includes('irk') || normSub.includes('relig')) {
    return {
      subject: normSub.includes('irs') || normSub.includes('irk') ? 'Islamic Religious Studies' : 'Christian Religious Studies',
      primaryModality: 'text_extract_based',
      secondaryModality: 'memorisation_heavy',
      pedagogicalPriorities: [
        'Scriptural texts, themes, and narrative contexts',
        'Key prophets, figures, and historical periods',
        'Moral lessons, ethical principles, and divine laws',
        'Doctrinal meanings and social applications',
        'Passage interpretation and contextual questions',
        'JAMB scriptural verse and thematic past questions'
      ],
      presentationStyle: 'Scriptural text cards + historical context cards + moral lesson banners',
      recommendedVoiceTone: 'warm_encouraging',
      workedExampleType: 'Scriptural passage context extraction & moral lesson analysis',
      examinerTrapFocus: 'Attributing scriptural statements to the wrong speaker or historical context',
      badgeColor: '#4f46e5', // Indigo-600
      iconName: 'Book'
    };
  }

  // 13. COMPUTER STUDIES / COMPUTER SCIENCE
  if (normSub.includes('comp')) {
    return {
      subject: 'Computer Studies',
      primaryModality: 'process_based',
      secondaryModality: 'conceptual',
      pedagogicalPriorities: [
        'Computer hardware architectures, memory, and peripheral devices',
        'Data representation: Binary, Octal, Hexadecimal conversions',
        'Algorithms, flowcharts, and pseudo-code logic',
        'Networking topologies, Internet protocols, and cybersecurity',
        'Software types: System, Application, and Operating Systems',
        'JAMB past questions testing number base conversions and system specs'
      ],
      presentationStyle: 'Algorithm logic boxes + architecture schematics + binary conversion tables',
      recommendedVoiceTone: 'authoritative',
      workedExampleType: 'Number base conversion & algorithm flowchart tracing',
      examinerTrapFocus: 'Bits vs Bytes conversions, 2\'s complement arithmetic, and logic gate truth tables',
      badgeColor: '#0284c7', // Sky-600
      iconName: 'Cpu'
    };
  }

  // DEFAULT / ADAPTIVE FALLBACK FOR ANY OTHER SUBJECT
  const hasCalculations = noteFormulas.length > 20 || noteContent.includes('calculate') || noteContent.includes('formula') || noteContent.includes('equation');
  const hasProcesses = noteContent.includes('process') || noteContent.includes('stages') || noteContent.includes('steps') || noteContent.includes('cycle');
  const hasTextExtract = noteContent.includes('passage') || noteContent.includes('author') || noteContent.includes('quote') || noteContent.includes('verse');

  return {
    subject,
    primaryModality: hasCalculations ? 'calculation_based' : hasProcesses ? 'process_based' : hasTextExtract ? 'text_extract_based' : 'conceptual',
    secondaryModality: 'definition_based',
    pedagogicalPriorities: [
      `Core syllabus concepts and foundational principles of ${topic}`,
      `Verified terminology, statutory definitions, and key rules`,
      hasCalculations ? 'Step-by-step mathematical calculations and formulas' : 'Comprehensive process breakdowns and real-world examples',
      'Common candidate traps and examiner tricks',
      'Authentic JAMB past questions solved with speed-drill shortcuts'
    ],
    presentationStyle: 'Syllabus principles + step-by-step demonstration + exam questions',
    recommendedVoiceTone: 'authoritative',
    workedExampleType: hasCalculations ? 'Step-by-step calculation & derivation' : 'Comprehensive concept demonstration & analysis',
    examinerTrapFocus: 'Terminology confusion, inaccurate keywords, and distractor traps',
    badgeColor: '#475569', // Slate
    iconName: 'GraduationCap'
  };
}

/**
 * Analyzes subtopic teaching requirements to ensure zero shallow summaries
 * and zero forced irrelevant sections.
 */
export function analyzeSubtopicRequirements(
  subtopic: string,
  subject: string,
  topic: string,
  profile: SubjectPedagogyProfile
): SubtopicTeachingRequirement {
  const sNorm = (subtopic || '').toLowerCase();
  const subNorm = subject.toLowerCase();

  const isMathOrPhysics = profile.primaryModality === 'calculation_based' || subNorm.includes('math') || subNorm.includes('phys');
  const isLanguageOrArts = profile.primaryModality === 'text_extract_based' || subNorm.includes('eng') || subNorm.includes('lit') || subNorm.includes('crs');
  const isProcessSubject = profile.primaryModality === 'process_based' || subNorm.includes('bio') || subNorm.includes('chem') || subNorm.includes('agric');

  const needsCalc = (isMathOrPhysics || sNorm.includes('calculate') || sNorm.includes('numerical') || sNorm.includes('formula') || sNorm.includes('elasticity') || sNorm.includes('stoich')) && !isLanguageOrArts;
  const needsFormula = needsCalc || isMathOrPhysics || sNorm.includes('equation') || sNorm.includes('law');
  const needsDiagram = profile.primaryModality === 'diagram_based' || sNorm.includes('diagram') || sNorm.includes('graph') || sNorm.includes('structure') || sNorm.includes('circuit') || sNorm.includes('map');
  const needsProcess = isProcessSubject || sNorm.includes('cycle') || sNorm.includes('mechanism') || sNorm.includes('process') || sNorm.includes('stages');
  const needsComparison = sNorm.includes('difference') || sNorm.includes('compare') || sNorm.includes('types') || sNorm.includes('versus') || sNorm.includes('vs');

  return {
    subtopic,
    needsDefinition: true,
    needsExplanation: true,
    needsExample: true,
    needsDiagram,
    needsFormula,
    needsCalculation: needsCalc,
    needsProcess,
    needsComparison,
    needsApplication: true,
    needsCommonMistake: true,
    needsExamTip: true,
    needsPastQuestion: true,
    recommendedModality: profile.primaryModality
  };
}

/**
 * Estimates teaching time and topic scale dynamically.
 * Never sets a flat 12 minutes for all videos.
 * Scale:
 *   Small: 8–12 minutes
 *   Medium: 15–20 minutes
 *   Deep: 20–30 minutes
 *   Very Large: > 30 minutes (suggests Multi-Part breakdown)
 */
export function estimateTopicDurationAndScale(
  topic: string,
  subtopics: string[] = [],
  lessonNote: LessonNote | null = null,
  questionCount: number = 5,
  profile: SubjectPedagogyProfile
): {
  scale: TopicScale;
  estimatedMinutes: number;
  estimatedSeconds: number;
  rationale: string;
  partsBreakdown?: TopicPartBreakdown[];
} {
  const subCount = Math.max(1, subtopics.length);
  const noteLength = (lessonNote?.content || '').length;
  const hasCalculations = profile.primaryModality === 'calculation_based' || profile.secondaryModality === 'calculation_based';

  // Base teaching time per subtopic:
  // Conceptual / definition: ~3.5 min per subtopic
  // Calculation / process: ~5.0 min per subtopic
  const minutesPerSubtopic = hasCalculations ? 4.5 : 3.5;
  const subtopicTeachingMins = subCount * minutesPerSubtopic;

  // Question solving time: ~1.5 min per question (CBT countdown + distractor analysis)
  const questionMins = questionCount * 1.5;

  // Intro, syllabus overview, examiner pitfalls, and recap: ~3.5 mins
  const overheadMins = 3.5;

  let totalMinutes = Math.round(subtopicTeachingMins + questionMins + overheadMins);

  // Content length bonus
  if (noteLength > 4000) {
    totalMinutes += 3;
  }

  let scale: TopicScale = 'medium';
  let rationale = '';

  if (totalMinutes <= 12 || subCount <= 2) {
    scale = 'small';
    totalMinutes = Math.max(8, Math.min(12, totalMinutes));
    rationale = `Small topic (${subCount} subtopic${subCount > 1 ? 's' : ''}). Can be fully covered with concept definition, worked examples, and ${questionCount} past questions in 8–12 minutes.`;
  } else if (totalMinutes <= 20 || subCount <= 4) {
    scale = 'medium';
    totalMinutes = Math.max(14, Math.min(20, totalMinutes));
    rationale = `Medium topic (${subCount} subtopics). Requires 15–20 minutes to thoroughly unpack theoretical principles, worked examples, and examiner distractor traps without rushing.`;
  } else if (totalMinutes <= 30 || subCount <= 6) {
    scale = 'deep';
    totalMinutes = Math.max(21, Math.min(30, totalMinutes));
    rationale = `Deep topic (${subCount} subtopics). Contains extensive concepts, mathematical or process steps that require 20–30 minutes of deep-dive teaching to guarantee mastery.`;
  } else {
    scale = 'very_large';
    totalMinutes = Math.max(32, totalMinutes);
    rationale = `Very large topic (${subCount} subtopics). Exceeds single-video retention thresholds. Recommended to divide into a multi-part series according to learning progression.`;
  }

  // Generate parts breakdown for large or deep topics
  const partsBreakdown = generateTopicPartBreakdown(topic, subtopics, profile);

  return {
    scale,
    estimatedMinutes: totalMinutes,
    estimatedSeconds: totalMinutes * 60,
    rationale,
    partsBreakdown
  };
}

/**
 * Logically divides a large topic into meaningful parts according to actual subtopics
 * and learning progression (not arbitrarily).
 */
export function generateTopicPartBreakdown(
  topic: string,
  subtopics: string[] = [],
  profile: SubjectPedagogyProfile
): TopicPartBreakdown[] {
  const parts: TopicPartBreakdown[] = [];
  const validSubtopics = subtopics.length > 0 ? subtopics : [`Fundamentals of ${topic}`, `Core Principles`, `Applications & Questions`];

  if (validSubtopics.length <= 3) {
    // 2-part structure
    const half = Math.ceil(validSubtopics.length / 2);
    parts.push({
      partNumber: 1,
      title: `Part 1 — Foundations & Core Principles`,
      subtitle: `Definitions, governing rules, and theoretical fundamentals of ${topic}`,
      focus: 'Foundations & Definitions',
      subtopics: validSubtopics.slice(0, half),
      estimatedDurationMinutes: 12
    });
    parts.push({
      partNumber: 2,
      title: `Part 2 — Advanced Applications & JAMB Past Questions`,
      subtitle: `Worked demonstrations, examiner traps, and authentic CBT speed drills`,
      focus: 'Applications & Exam Questions',
      subtopics: validSubtopics.slice(half),
      estimatedDurationMinutes: 14
    });
    return parts;
  }

  // 3-to-4 Part Structure based on pedagogical progression:
  // Part 1: Fundamentals & Definitions
  // Part 2: Mechanisms & Governing Rules
  // Part 3: Advanced Scenarios & Real-World Demonstrations
  // Part 4: Authentic JAMB Questions & High-Yield Revision
  const chunkSize = Math.max(1, Math.ceil(validSubtopics.length / 3));

  parts.push({
    partNumber: 1,
    title: `Part 1 — Fundamentals & Core Concepts`,
    subtitle: `Foundational laws, precise definitions, and baseline examples of ${topic}`,
    focus: 'Fundamentals & Terminology',
    subtopics: validSubtopics.slice(0, chunkSize),
    estimatedDurationMinutes: 14
  });

  parts.push({
    partNumber: 2,
    title: `Part 2 — In-Depth Analysis & ${profile.workedExampleType.split('&')[0]}`,
    subtitle: `Governing mechanisms, detailed principles, and progressive worked solutions`,
    focus: 'Core Mechanisms & Demonstrations',
    subtopics: validSubtopics.slice(chunkSize, chunkSize * 2),
    estimatedDurationMinutes: 16
  });

  parts.push({
    partNumber: 3,
    title: `Part 3 — Real-World Applications & Edge Cases`,
    subtitle: `Complex scenarios, environmental/industrial connections, and subtle distinctions`,
    focus: 'Applications & Edge Cases',
    subtopics: validSubtopics.slice(chunkSize * 2),
    estimatedDurationMinutes: 15
  });

  parts.push({
    partNumber: 4,
    title: `Part 4 — Authentic JAMB Past Questions & Speed Drills`,
    subtitle: `100% verified CBT questions, 5s countdowns, and examiner distractor traps`,
    focus: 'Past Questions & Speed Drills',
    subtopics: validSubtopics,
    estimatedDurationMinutes: 15
  });

  return parts;
}
