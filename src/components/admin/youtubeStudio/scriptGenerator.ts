import { Question } from '../../../data/questions';
import { LessonNote } from '../../../data/masterLessonNotes';
import {
  ScriptSection,
  VideoType,
  TeachingTone,
  TopConcept,
  UnifiedStudioQuestion,
  StudioPaperType,
  ExamCategory,
  TopicPartBreakdown
} from './types';
import { analyzeSubjectAndTopic, analyzeSubtopicRequirements } from './subjectPedagogy';

/**
 * Phonetic pronunciation dictionary converting math, science, language,
 * and exam notation into natural spoken words for Voicebox voice cloning.
 */
export function phoneticSanitize(text: string): string {
  if (!text) return '';

  let sanitized = text;

  // Common exam boards
  sanitized = sanitized.replace(/\bJAMB\b/g, 'Jamb');
  sanitized = sanitized.replace(/\bUTME\b/g, 'U-T-M-E');
  sanitized = sanitized.replace(/\bWAEC\b/g, 'Waec');
  sanitized = sanitized.replace(/\bNECO\b/g, 'Neco');
  sanitized = sanitized.replace(/\bNABTEB\b/g, 'Nab-teb');
  sanitized = sanitized.replace(/\bBECE\b/g, 'Bece');
  sanitized = sanitized.replace(/\bSSCE\b/g, 'S-S-C-E');
  sanitized = sanitized.replace(/\bCBT\b/g, 'C-B-T');
  sanitized = sanitized.replace(/\bOBJ\b/g, 'Objective');

  // Marking scheme rubrics
  sanitized = sanitized.replace(/\[M1\]/g, 'Method mark M 1');
  sanitized = sanitized.replace(/\[A1\]/g, 'Accuracy mark A 1');
  sanitized = sanitized.replace(/\[A2\]/g, 'Accuracy mark A 2');
  sanitized = sanitized.replace(/\[B1\]/g, 'Independent mark B 1');
  sanitized = sanitized.replace(/\[B2\]/g, 'Independent mark B 2');

  // Math, Physics & Science Units
  sanitized = sanitized.replace(/m\/s²/g, 'meters per second squared');
  sanitized = sanitized.replace(/m\/s/g, 'meters per second');
  sanitized = sanitized.replace(/ms⁻¹/g, 'meters per second');
  sanitized = sanitized.replace(/ms⁻²/g, 'meters per second squared');
  sanitized = sanitized.replace(/kg\/m³/g, 'kilograms per cubic meter');
  sanitized = sanitized.replace(/cm³/g, 'cubic centimeters');
  sanitized = sanitized.replace(/cm²/g, 'square centimeters');
  sanitized = sanitized.replace(/m³/g, 'cubic meters');
  sanitized = sanitized.replace(/m²/g, 'square meters');
  sanitized = sanitized.replace(/N\/m²/g, 'Newtons per square meter');
  sanitized = sanitized.replace(/\bN\b(?=\s*\d|\s*[=])/g, 'Newtons');
  sanitized = sanitized.replace(/mol\/dm³/g, 'moles per cubic decimeter');
  sanitized = sanitized.replace(/g\/dm³/g, 'grams per cubic decimeter');

  // Chemical formulas & states
  sanitized = sanitized.replace(/\(s\)/g, 'solid');
  sanitized = sanitized.replace(/\(l\)/g, 'liquid');
  sanitized = sanitized.replace(/\(g\)/g, 'gas');
  sanitized = sanitized.replace(/\(aq\)/g, 'aqueous');
  sanitized = sanitized.replace(/H₂SO₄|H2SO4/g, 'H 2 S O 4');
  sanitized = sanitized.replace(/HCl/g, 'H-C-L');
  sanitized = sanitized.replace(/NaOH/g, 'sodium hydroxide');
  sanitized = sanitized.replace(/Na₂CO₃|Na2CO3/g, 'sodium trioxocarbonate 4');
  sanitized = sanitized.replace(/CaCO₃|CaCO3/g, 'calcium trioxocarbonate 4');
  sanitized = sanitized.replace(/CO₂|CO2/g, 'carbon dioxide');
  sanitized = sanitized.replace(/H₂O|H2O/g, 'water');
  sanitized = sanitized.replace(/NaCl/g, 'sodium chloride');

  // Math & Logic Symbols
  sanitized = sanitized.replace(/½/g, 'half ');
  sanitized = sanitized.replace(/¼/g, 'one quarter ');
  sanitized = sanitized.replace(/¾/g, 'three quarters ');
  sanitized = sanitized.replace(/π/g, 'pi');
  sanitized = sanitized.replace(/θ/g, 'theta');
  sanitized = sanitized.replace(/Δ/g, 'delta ');
  sanitized = sanitized.replace(/√(\w+)/g, 'square root of $1');
  sanitized = sanitized.replace(/√/g, 'square root of ');
  sanitized = sanitized.replace(/²/g, ' squared');
  sanitized = sanitized.replace(/³/g, ' cubed');
  sanitized = sanitized.replace(/°C/g, ' degrees Celsius');
  sanitized = sanitized.replace(/°/g, ' degrees');
  sanitized = sanitized.replace(/×/g, ' multiplied by ');
  sanitized = sanitized.replace(/÷/g, ' divided by ');
  sanitized = sanitized.replace(/±/g, ' plus or minus ');
  sanitized = sanitized.replace(/≠/g, ' is not equal to ');
  sanitized = sanitized.replace(/≤/g, ' is less than or equal to ');
  sanitized = sanitized.replace(/≥/g, ' is greater than or equal to ');
  sanitized = sanitized.replace(/⇒/g, ' which implies that ');
  sanitized = sanitized.replace(/→/g, ' gives ');

  return sanitized;
}

/**
 * Generates subject-aware opening challenge hooks tailored to the subject's modality
 */
function getSubjectAwareHook(
  exam: string,
  subject: string,
  topic: string,
  modality: string,
  jambDayNumber?: number,
  firstQuestion?: UnifiedStudioQuestion | Question
): string {
  const dayPrefix = jambDayNumber ? `Welcome to Day ${jambDayNumber} of our official 100 Days to JAMB series!` : `Welcome scholars to StudyPlug!`;

  if (firstQuestion) {
    if (modality === 'text_extract_based') {
      return `${dayPrefix} If ${exam} gives you this question on ${topic}, can you spot the subtle grammatical trap or identify the exact literary device in under thirty seconds? Over seventy percent of candidates choose the wrong option! Today, we are going to master this topic completely.`;
    }
    if (modality === 'calculation_based') {
      return `${dayPrefix} If ${exam} presents this calculation on ${topic}, can you extract the parameters and compute the correct answer in under forty seconds? Over eighty percent of candidates forfeit marks due to arithmetic traps! Today, you master the exact shortcuts.`;
    }
    if (modality === 'process_based') {
      return `${dayPrefix} Can you trace this pathway in ${topic} without confusing the intermediate stages? Examiners love testing this subtle distinction! Let us master it together today.`;
    }
    return `${dayPrefix} If ${exam} tests you on ${topic} with this authentic past question, can you eliminate the distractors and choose the right option in thirty seconds? Let us find out!`;
  }

  return `${dayPrefix} Can you solve standard ${exam} questions on ${topic} without falling into the common traps that cost candidates ten or more marks every year? In this comprehensive lesson, you will master the concepts, understand the demonstrations, and practice verified past questions. Welcome to StudyPlug.`;
}

/**
 * Generates a subject-appropriate worked demonstration
 */
function getWorkedDemonstration(
  subject: string,
  topic: string,
  subtopic: string,
  profile: ReturnType<typeof analyzeSubjectAndTopic>,
  lessonNote: LessonNote | null
): {
  title: string;
  spokenNarration: string;
  onScreenText: string;
  visualCue: string;
  calculationSteps?: string[];
} {
  const normSub = subject.toLowerCase();

  // 1. MATHEMATICS
  if (normSub.includes('math')) {
    return {
      title: `Worked Example: Step-by-Step Calculation`,
      spokenNarration: `Let us walk through a standard ${subject} calculation on ${subtopic || topic} step-by-step. Step one: Carefully extract the given data and identify what we are solving for. Step two: State the governing theorem or formula clearly before manipulating terms. Step three: Substitute our numerical values and simplify with strict adherence to algebraic order of operations. This guarantees your full marks.`,
      onScreenText: `WORKED EXAMPLE: ${topic.toUpperCase()}\n\nStep 1: Extract Given Data & Target Unknown\nStep 2: State Standard Governing Equation / Theorem\nStep 3: Substitute Values & Simplify Algebraically\nStep 4: Verify Final Numerical Result`,
      visualCue: `Animated blackboard with sequential step 1, 2, 3 algebraic reveal in emerald green.`,
      calculationSteps: [
        'Step 1 (Given): Identify key parameters and constraints from the question',
        'Step 2 (Formula): State the primary formula or theorem',
        'Step 3 (Substitution): Substitute values carefully',
        'Step 4 (Final Answer): Simplify to obtain the verified result'
      ]
    };
  }

  // 2. ENGLISH LANGUAGE
  if (normSub.includes('eng')) {
    return {
      title: `Worked Demonstration: Sentence Syntax & Error Identification`,
      spokenNarration: `Now, let us examine an authentic sentence breakdown. In JAMB English Lexis and Structure, examiners test your ability to identify sentence elements: the subject, the verb, and modifying clauses. Notice how a singular collective noun requires a singular verb, or how dangling modifiers distort sentence meaning. By dissecting the sentence structure before looking at the options, you immediately isolate the correct choice.`,
      onScreenText: `WORKED DEMONSTRATION: SYNTACTIC ANALYSIS\n\n• Target Sentence / Lexis Structure\n• Subject & Verb Identification\n• Concord & Structural Agreement Check\n• Eliminating Common Dangling Modifier Traps`,
      visualCue: `Syntax breakdown card with color-coded subject (cyan), verb (gold), and clause modifier (emerald).`
    };
  }

  // 3. LITERATURE IN ENGLISH
  if (normSub.includes('lit')) {
    return {
      title: `Worked Demonstration: Text Extract & Figurative Device Analysis`,
      spokenNarration: `Let us analyze this literary extract together. Step one: Read the lines carefully and identify the speaker and context. Step two: Look beyond the literal meaning to uncover the underlying figurative device—whether it is dramatic irony, hyperbole, or a metaphor. Step three: Connect the device to the central theme of the prescribed text. This is how high-scoring scholars answer literary analysis questions.`,
      onScreenText: `WORKED DEMONSTRATION: EXTRACT ANALYSIS\n\n• Text Extract / Poetic Stanza\n• Speaker, Tone & Context Identification\n• Primary Literary Device (Metaphor, Irony, etc.)\n• Thematic Significance in Official Prescribed Text`,
      visualCue: `Ornate literature parchment slide with highlighted poetic verses and thematic margin notes.`
    };
  }

  // 4. CHEMISTRY
  if (normSub.includes('chem')) {
    return {
      title: `Worked Demonstration: Chemical Reaction & Equation Balancing`,
      spokenNarration: `Let us examine this chemical reaction step-by-step. Step one: Write out the correct chemical formulas for all reactants and products. Step two: Balance the number of atoms of each element on both sides of the arrow without altering subscripts. Step three: Include proper physical state symbols—solid, liquid, gas, or aqueous. And step four: Use the stoichiometric coefficients to deduce the mole ratio required by the examiner.`,
      onScreenText: `WORKED DEMONSTRATION: REACTION MECHANISM\n\nStep 1: Write Reactant & Product Formulas\nStep 2: Balance Atoms Across Both Sides\nStep 3: Assign State Symbols (s, l, g, aq)\nStep 4: Establish Mole Ratio & Stoichiometry`,
      visualCue: `Chemical equation reveal slide with balancing atom tally and purple molecular bond highlights.`
    };
  }

  // 5. BIOLOGY
  if (normSub.includes('bio')) {
    return {
      title: `Worked Demonstration: Biological Process & Structural Function`,
      spokenNarration: `Let us trace this biological process step-by-step. Notice the sequence: each physiological stage prepares the specimen for the next phase. In the examination, candidates are frequently asked to identify labeled parts and state their specific adaptive features. When describing a biological structure, always link its physical adaptation directly to its physiological function.`,
      onScreenText: `WORKED DEMONSTRATION: PROCESS & STRUCTURE\n\n• Biological Sequence / Physiological Pathway\n• Labeled Structure & Location\n• Structural Adaptation for Function\n• Essential Examiner Terminology`,
      visualCue: `Biological schematic flowchart with step progression arrows and cellular adaptation badges.`
    };
  }

  // 6. ECONOMICS
  if (normSub.includes('econ')) {
    return {
      title: `Worked Demonstration: Economic Schedule & Curve Shift Analysis`,
      spokenNarration: `Let us examine how this economic relationship is represented on a schedule and graph. Remember the critical distinction that examiners always test: A change in price causes a movement along the existing curve, whereas changes in non-price factors cause a complete shift of the curve to the right or left. Always inspect whether the question describes price or non-price determinants before answering.`,
      onScreenText: `WORKED DEMONSTRATION: ECONOMIC RELATIONSHIP\n\n• Schedule Table of Numerical Values\n• Graphical Curve Representation\n• Movement Along Curve (Price Change)\n• Shift of Entire Curve (Non-Price Determinants)`,
      visualCue: `Teal economic grid chart showing demand-supply curves with dynamic directional shift arrows.`
    };
  }

  // 7. FINANCIAL ACCOUNTING & COMMERCE
  if (normSub.includes('acc') || normSub.includes('comm')) {
    return {
      title: `Worked Demonstration: Transaction Posting & Ledger Balancing`,
      spokenNarration: `Let us demonstrate the fundamental rule of double entry: debit the receiver, and credit the giver. Every financial transaction affects two accounts. When posting to the ledger, always record the date, details of the corresponding account, and the exact monetary amount. Finally, balance the account at the end of the period and carry down the balance to the opposite side.`,
      onScreenText: `WORKED DEMONSTRATION: T-ACCOUNT LEDGER\n\n• Double Entry Rule: Debit Receiver, Credit Giver\n• Transaction Analysis: Identify Both Accounts\n• Ledger Posting with Date & Contra-Account\n• Balancing the Account (Balance c/d & b/d)`,
      visualCue: `Classic dual-column T-account layout with debit and credit balance alignment in gold.`
    };
  }

  // 8. GOVERNMENT & CIVIC
  if (normSub.includes('gov') || normSub.includes('civic')) {
    return {
      title: `Worked Demonstration: Institutional Comparison & Constitutional Analysis`,
      spokenNarration: `Let us analyze this institutional framework. In government and civic education, examiners compare different systems—such as Presidential versus Parliamentary systems, or the functions of the three organs of government. Notice the principles of separation of powers and checks and balances. Always cite the relevant constitutional provision or historical commission when answering these questions.`,
      onScreenText: `WORKED DEMONSTRATION: COMPARATIVE ANALYSIS\n\n• Institutional Structure & Key Responsibilities\n• Separation of Powers & Checks and Balances\n• Historical Constitutional Milestones\n• Comparative Matrix (System A vs System B)`,
      visualCue: `Comparative institutional matrix with side-by-side checks and balances breakdown.`
    };
  }

  // DEFAULT / GENERAL
  return {
    title: `Worked Demonstration: Core Concept Breakdown`,
    spokenNarration: `Now, let us examine an authentic practical demonstration of ${topic}. Step one: Understand the foundational rule. Step two: Apply it to an examination-style scenario. And step three: Avoid the common distractor traps that examiners set to mislead candidates. Let us look closely at how this works.`,
    onScreenText: `WORKED DEMONSTRATION: ${topic.toUpperCase()}\n\n• Core Principle Application\n• Examination Scenario Breakdown\n• Distractor Elimination Rules\n• High-Yield Examiner Insights`,
    visualCue: `Structured demonstration card with step-by-step principles and highlight callouts.`
  };
}

/**
 * Builds the complete educational script tailored for dynamic durations
 * and subject-aware pedagogical structures.
 * Covers: Small (8-12 min), Medium (15-20 min), Deep (20-30 min), Multi-part.
 */
export function generateTeachingScript(options: {
  exam: ExamCategory;
  selectedExams?: ExamCategory[];
  subject: string;
  paperTypes?: StudioPaperType[];
  topic: string;
  subtopic: string;
  subtopics?: string[];
  lessonNote: LessonNote | null;
  questions: (UnifiedStudioQuestion | Question)[];
  videoType: VideoType;
  tone: TeachingTone;
  topConcepts?: TopConcept[];
  targetDurationMinutes?: number;
  jambDayNumber?: number;
  selectedPart?: TopicPartBreakdown;
}): ScriptSection[] {
  const {
    exam,
    selectedExams = [exam],
    subject,
    paperTypes = ['OBJ'],
    topic,
    subtopic,
    subtopics = [],
    lessonNote,
    questions,
    videoType,
    tone,
    topConcepts,
    targetDurationMinutes = 15,
    jambDayNumber,
    selectedPart
  } = options;

  const profile = analyzeSubjectAndTopic(subject, topic, subtopics, lessonNote);
  const sections: ScriptSection[] = [];
  let secNum = 1;

  // Separate questions by paper type
  const objQuestions: (UnifiedStudioQuestion | Question)[] = [];
  const theoryQuestions: UnifiedStudioQuestion[] = [];
  const practicalQuestions: UnifiedStudioQuestion[] = [];

  questions.forEach(q => {
    const pt = (q as UnifiedStudioQuestion).paperType;
    if (pt === 'Practical') {
      practicalQuestions.push(q as UnifiedStudioQuestion);
    } else if (pt === 'Theory') {
      theoryQuestions.push(q as UnifiedStudioQuestion);
    } else {
      objQuestions.push(q);
    }
  });

  const isMultiPaper = paperTypes.length > 1;
  const is100Days = videoType === '100_days_jamb';
  const effectiveDuration = targetDurationMinutes || (is100Days ? 18 : 12);

  // Concepts to teach
  const conceptsToTeach = (topConcepts && topConcepts.filter(c => c.isSelected).length > 0)
    ? topConcepts.filter(c => c.isSelected)
    : [
        {
          id: 'c1',
          title: `Foundations of ${subtopic || topic}`,
          explanation: lessonNote?.summary_60s || `Core syllabus principles governing ${subtopic || topic} in ${subject}.`,
          ruleOrFormula: profile.workedExampleType,
          example: `Standard ${exam} application`,
          commonMistakes: [profile.examinerTrapFocus],
          isSelected: true
        },
        {
          id: 'c2',
          title: `Governing Principles & Mechanisms`,
          explanation: `In-depth analysis of how ${topic} operates under official curriculum standards.`,
          ruleOrFormula: profile.primaryModality === 'calculation_based' ? 'Standard Governing Equation' : 'Core Mechanism',
          example: `Step-by-step examination demonstration`,
          commonMistakes: [profile.examinerTrapFocus],
          isSelected: true
        },
        {
          id: 'c3',
          title: `Examiner Distractor Traps & Shortcuts`,
          explanation: `Specific traps set by examiners and high-speed elimination techniques.`,
          ruleOrFormula: 'Speed Drill Elimination Rule',
          example: `Avoiding subtle distractor options`,
          commonMistakes: ['Rushing without verifying all options'],
          isSelected: true
        }
      ];

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 1: HOOK & OPENING CHALLENGE (00:00 - 00:35)
  // ═══════════════════════════════════════════════════════════════════════════
  const hookNarration = getSubjectAwareHook(
    exam,
    subject,
    selectedPart ? `${topic} (${selectedPart.title})` : topic,
    profile.primaryModality,
    jambDayNumber,
    questions[0]
  );

  const hookTitle = jambDayNumber
    ? `Day ${jambDayNumber}: 100 Days to JAMB Opening Challenge`
    : `00:00 Opening Challenge Hook`;

  const hookOnScreen = is100Days
    ? `100 DAYS TO JAMB • DAY ${jambDayNumber || 1}\n${subject.toUpperCase()} • ${topic.toUpperCase()}\n${selectedPart ? `[${selectedPart.title.toUpperCase()}]\n` : ''}CAN YOU SOLVE THIS IN 30 SECONDS?`
    : `CAN YOU SOLVE THIS IN 30 SECONDS?\n${exam} ${subject.toUpperCase()}\n${topic.toUpperCase()}`;

  sections.push({
    id: `sec-${secNum}`,
    sectionNumber: secNum++,
    type: 'hook',
    title: hookTitle,
    spokenNarration: hookNarration,
    narrationText: phoneticSanitize(hookNarration),
    onScreenText: hookOnScreen,
    visualCue: `High-impact opener card with ${subject} badge (${profile.badgeColor}), timer prompt, and StudyPlug logo.`,
    durationSeconds: 30,
    questionData: questions[0],
    modality: profile.primaryModality
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 2: WHAT YOU WILL MASTER TODAY (00:35 - 01:10)
  // ═══════════════════════════════════════════════════════════════════════════
  const objectivesList = subtopics.length > 0
    ? subtopics.slice(0, 4).map((s, i) => `✓ ${s}`).join('\n')
    : `✓ Core Principles & Definitions of ${topic}\n✓ ${profile.workedExampleType}\n✓ Common Examiner Traps (${profile.examinerTrapFocus})\n✓ Authentic ${exam} Past Questions Solved`;

  const learnNarration = is100Days
    ? `In Day ${jambDayNumber || 1} of 100 Days to JAMB, we cover ${topic} completely according to the official syllabus: Number one, we break down every core definition and principle. Number two, we demonstrate a worked example so you understand the mechanism. Number three, we reveal the top examiner traps. And number four, we solve verified past questions with a live CBT thinking timer. Grab your notebook, and let us begin.`
    : `In this complete masterclass on ${topic}, you will master: Number one, the core concepts and laws tested in ${exam}. Number two, a step-by-step worked demonstration. And number three, verified past questions solved together so you are 100% prepared on exam day. Let us dive in.`;

  sections.push({
    id: `sec-${secNum}`,
    sectionNumber: secNum++,
    type: 'objectives',
    title: `00:35 What You Will Master Today`,
    spokenNarration: learnNarration,
    narrationText: phoneticSanitize(learnNarration),
    onScreenText: `WHAT YOU WILL MASTER TODAY:\n${objectivesList}`,
    visualCue: `Animated syllabus checklist with gold checkmarks sliding in sequentially.`,
    durationSeconds: 35,
    modality: profile.primaryModality
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 3: CORE TOPIC CONCEPTS (Dynamic coverage of subtopics)
  // ═══════════════════════════════════════════════════════════════════════════
  // Adapt number of concepts based on target duration:
  // Short (8-12 min): 3 concepts
  // Medium (15-20 min): 4 concepts
  // Deep (20-30 min): 5-6 concepts
  const maxConcepts = effectiveDuration <= 12 ? 3 : effectiveDuration <= 20 ? 4 : 6;
  const activeConcepts = conceptsToTeach.slice(0, maxConcepts);

  activeConcepts.forEach((concept, cIdx) => {
    const cNarration = `Concept Number ${cIdx + 1}: ${concept.title}. Here is the core principle: ${concept.explanation}. In ${subject}, the governing rule or principle is: ${concept.ruleOrFormula || 'Standard syllabus definition'}. ${concept.example ? 'For example: ' + concept.example + '.' : ''} In the exam, remember this key tip: ${concept.commonMistakes?.[0] || profile.examinerTrapFocus}.`;

    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'top_concept',
      title: `Concept ${cIdx + 1}: ${concept.title}`,
      spokenNarration: cNarration,
      narrationText: phoneticSanitize(cNarration),
      onScreenText: `CONCEPT ${cIdx + 1}: ${concept.title.toUpperCase()}\n\n• Principle: ${concept.explanation}\n• Rule/Mechanism: ${concept.ruleOrFormula || 'Standard Syllabus Rule'}\n• Common Trap: ${concept.commonMistakes?.[0] || profile.examinerTrapFocus}`,
      visualCue: `Split chalkboard scene: Left side principle, right side rule/example box with ${profile.badgeColor} accent.`,
      durationSeconds: effectiveDuration > 20 ? 55 : 45,
      modality: profile.primaryModality
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 4: WORKED DEMONSTRATION (Subject-Specific Example)
  // ═══════════════════════════════════════════════════════════════════════════
  const demo = getWorkedDemonstration(subject, topic, subtopic, profile, lessonNote);

  sections.push({
    id: `sec-${secNum}`,
    sectionNumber: secNum++,
    type: 'worked_example',
    title: demo.title,
    spokenNarration: demo.spokenNarration,
    narrationText: phoneticSanitize(demo.spokenNarration),
    onScreenText: demo.onScreenText,
    visualCue: demo.visualCue,
    durationSeconds: effectiveDuration > 20 ? 60 : 50,
    calculationSteps: demo.calculationSteps,
    modality: profile.primaryModality
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 5: PAST QUESTIONS SECTION (Objective / CBT)
  // ═══════════════════════════════════════════════════════════════════════════
  if (objQuestions.length > 0) {
    if (isMultiPaper) {
      const secIntro = `We begin with Section One: ${exam} Objective Questions. Speed and precision are critical. Take five to ten seconds on each question to choose your option before we reveal the examiner solution.`;
      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'section_header',
        title: `Section 1: ${exam} Objective Questions`,
        spokenNarration: secIntro,
        narrationText: phoneticSanitize(secIntro),
        onScreenText: `SECTION 1: OBJECTIVE / CBT QUESTIONS\n• Rapid Distractor Elimination\n• Time-Saving Speed Shortcuts\n• Standard ${exam} Syllabus Items`,
        visualCue: `Full-width animated emerald banner announcing Section 1: Objective Questions.`,
        durationSeconds: 15,
        paperType: 'OBJ',
        sectionHeaderTitle: `SECTION 1: ${exam.toUpperCase()} OBJECTIVE`,
        sectionHeaderSubtitle: 'Speed Drills & CBT Distractor Avoidance'
      });
    }

    // Number of questions to include based on duration
    const qLimit = effectiveDuration <= 12 ? 3 : effectiveDuration <= 20 ? 5 : 7;

    objQuestions.slice(0, qLimit).forEach((q, qIdx) => {
      const uq = q as UnifiedStudioQuestion;
      const srcLabel = uq.sourceLabel || `${uq.exam || exam} • ${subject.toUpperCase()} • ${uq.year || '2023'}`;
      const timerSec = (q.difficulty === 'Hard' || q.text.includes('Calculate') || q.text.includes('Determine')) ? 10 : 5;
      const qOptions = Array.isArray(q.options) ? q.options : [];
      const optA = qOptions[0]?.text || '';
      const optB = qOptions[1]?.text || '';
      const optC = qOptions[2]?.text || '';
      const optD = qOptions[3]?.text || '';

      const qNarration = `Question ${qIdx + 1}. Authentic ${srcLabel}. The question reads: "${q.text}". Option A: ${optA}. Option B: ${optB}. Option C: ${optC}. Option D: ${optD}. Take ${timerSec} seconds right now to decide your answer!`;

      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'past_question',
        title: `Question ${qIdx + 1} • ${srcLabel}`,
        spokenNarration: qNarration,
        narrationText: phoneticSanitize(qNarration),
        onScreenText: `PAST QUESTION ${qIdx + 1} [${srcLabel}]\n\n${q.text}\n\nA. ${optA}\nB. ${optB}\nC. ${optC}\nD. ${optD}`,
        visualCue: `CBT examination terminal with active ${timerSec}-second countdown ring and A, B, C, D pills.`,
        durationSeconds: 35,
        questionData: q,
        paperType: 'OBJ',
        sourceLabel: srcLabel,
        timerDurationSeconds: timerSec,
        modality: profile.primaryModality
      });

      const solNarration = `The correct answer is Option ${q.correctAnswer}! Here is why: ${q.explanation || 'By applying our core syllabus principle, we arrive directly at Option ' + q.correctAnswer + '.'} Notice the examiner distractor trap: options calculated with incorrect assumptions or common sign errors are specifically placed to mislead hurried students.`;

      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'solution_breakdown',
        title: `Answer & Solution • Question ${qIdx + 1}`,
        spokenNarration: solNarration,
        narrationText: phoneticSanitize(solNarration),
        onScreenText: `CORRECT: OPTION ${q.correctAnswer} ✓\n\nEXAMINER SOLUTION & DERIVATION:\n${q.explanation || 'Direct syllabus derivation.'}`,
        visualCue: `Option ${q.correctAnswer} glows bright emerald green with animated checkmark and detailed working box.`,
        durationSeconds: 38,
        questionData: q,
        paperType: 'OBJ',
        sourceLabel: srcLabel,
        modality: profile.primaryModality
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 6: THEORY SECTION (If WAEC/NECO Theory selected)
  // ═══════════════════════════════════════════════════════════════════════════
  if (theoryQuestions.length > 0) {
    if (isMultiPaper) {
      const secIntro = `Now we transition to Section Two: ${exam} Theory and Essay Questions. In this paper, examiners award marks for Method, Accuracy, and Independent statements. Never jump straight to the final answer without showing full derivations.`;
      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'section_header',
        title: `Section 2: ${exam} Theory Questions`,
        spokenNarration: secIntro,
        narrationText: phoneticSanitize(secIntro),
        onScreenText: `SECTION 2: THEORY & ESSAY QUESTIONS\n• Official Marking Scheme (M1, A1, B1 Rubrics)\n• Step-by-Step Mathematical Derivations\n• Complete Structured Answers`,
        visualCue: `Full-width animated gold-accented banner announcing Section 2: Theory Questions.`,
        durationSeconds: 15,
        paperType: 'Theory',
        sectionHeaderTitle: `SECTION 2: ${exam.toUpperCase()} THEORY`,
        sectionHeaderSubtitle: 'Official Step-by-Step Marking Rubrics'
      });
    }

    theoryQuestions.slice(0, 2).forEach((tq, tIdx) => {
      const srcLabel = tq.sourceLabel || `${tq.exam || exam} • ${subject.toUpperCase()} • THEORY • ${tq.year || '2023'}`;
      const partsText = tq.parts && tq.parts.length > 0
        ? tq.parts.map(p => `${p.label} ${p.text} [${p.marks} Marks]`).join('\n')
        : tq.text;

      const qNarration = `Theory Question ${tIdx + 1}. Authentic ${srcLabel}. The question reads: "${tq.title || tq.text.slice(0, 120)}". Notice how the question is broken down into parts. Let us break down the exact solution to score all available marks.`;

      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'theory_question',
        title: `Theory Q${tIdx + 1} • ${srcLabel}`,
        spokenNarration: qNarration,
        narrationText: phoneticSanitize(qNarration),
        onScreenText: `THEORY QUESTION ${tIdx + 1} [${srcLabel}]\nTotal: ${tq.totalMarks || 10} Marks\n\n${tq.text}\n\n${partsText}`,
        visualCue: `Theory paper document view showing Question and broken-down parts with mark allocations.`,
        durationSeconds: 45,
        questionData: tq,
        paperType: 'Theory',
        sourceLabel: srcLabel
      });

      const rubricsText = tq.markingRubrics && tq.markingRubrics.length > 0
        ? tq.markingRubrics.slice(0, 5).map(r => `[${r.markType}] Step ${r.stepNumber}: ${r.description} (${r.allocatedMarks}mk)`).join('\n')
        : tq.modelSolution || 'Complete step-by-step solution according to official syllabus.';

      const solNarration = `Here is the official Chief Examiner marking breakdown for this question. Notice how each step awards marks for methodology and accurate statements. Review the complete model solution.`;

      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'theory_solution',
        title: `Theory Marking Scheme • Q${tIdx + 1}`,
        spokenNarration: solNarration,
        narrationText: phoneticSanitize(solNarration),
        onScreenText: `OFFICIAL MARKING SCHEME [${srcLabel}]:\n\n${rubricsText}\n\nExaminer Tip: ${tq.examinerTips?.[0] || 'Always show full step-by-step working to secure Method marks.'}`,
        visualCue: `Examiner rubric card with M1, A1, B1 mark badges and green highlight checkmarks.`,
        durationSeconds: 50,
        questionData: tq,
        paperType: 'Theory',
        sourceLabel: srcLabel
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 7: PRACTICAL SECTION (If Science Practical selected)
  // ═══════════════════════════════════════════════════════════════════════════
  if (practicalQuestions.length > 0) {
    const secIntro = `Now let us examine the Practical Component for ${exam} ${subject}. In Paper Three Practical, candidates are evaluated on apparatus setup, experimental procedure, consistent tabulation, and graph plotting.`;
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'section_header',
      title: `Section 3: ${exam} Practical Investigation`,
      spokenNarration: secIntro,
      narrationText: phoneticSanitize(secIntro),
      onScreenText: `SECTION 3: PRACTICAL INVESTIGATION\n• Apparatus & Experimental Setup\n• Table of Readings & Consistent Decimals\n• Graph Plotting, Slope Triangle & Precautions`,
      visualCue: `Full-width animated science lab banner announcing Section 3: Practical Component.`,
      durationSeconds: 15,
      paperType: 'Practical',
      sectionHeaderTitle: `SECTION 3: ${exam.toUpperCase()} PRACTICAL`,
      sectionHeaderSubtitle: 'Apparatus, Readings, Graph & Precautions'
    });

    practicalQuestions.slice(0, 1).forEach(pq => {
      const srcLabel = pq.sourceLabel || `${pq.exam || exam} • ${subject.toUpperCase()} • PRACTICAL • ${pq.year || '2023'}`;
      const setupNarration = `For this practical on ${pq.topic || topic}, candidates assemble the apparatus and record observations carefully. Notice the precision required in measurement.`;

      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'practical_setup',
        title: `Practical Setup • ${srcLabel}`,
        spokenNarration: setupNarration,
        narrationText: phoneticSanitize(setupNarration),
        onScreenText: `PRACTICAL SETUP & APPARATUS [${srcLabel}]:\n\nApparatus Required:\n${pq.apparatus?.map(a => `• ${a}`).join('\n') || '• Retort Stand & Clamp\n• Measuring Instrument\n• Specimen'}\n\nProcedure:\n1. Assemble apparatus firmly\n2. Record repeated trials\n3. Maintain consistent decimal places`,
        visualCue: `Laboratory apparatus schematic diagram with measurement indicators.`,
        durationSeconds: 45,
        questionData: pq,
        paperType: 'Practical',
        sourceLabel: srcLabel
      });
    });
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 8: EXAM TIPS & SCORING STRATEGY
  // ═══════════════════════════════════════════════════════════════════════════
  const tipsNarration = is100Days
    ? `Now for your high-yield JAMB exam strategy on ${topic}. Keep these three rules in mind: Rule number one, look out for ${profile.examinerTrapFocus}. Rule number two, use the process of elimination—striking out two obvious distractors immediately raises your odds to fifty percent. And rule number three, budget forty to fifty seconds per question so you leave ample time for review.`
    : `Now, let us examine the critical exam tips and common traps for ${topic}. When sitting for your examination, keep these three time-saving techniques in mind: Tip 1: Look out for ${profile.examinerTrapFocus}. Tip 2: Eliminate distractors systematically. Tip 3: Verify your answers using the core rules we covered today.`;

  sections.push({
    id: `sec-${secNum}`,
    sectionNumber: secNum++,
    type: 'exam_tips',
    title: `Exam Tips & Scoring Strategy`,
    spokenNarration: tipsNarration,
    narrationText: phoneticSanitize(tipsNarration),
    onScreenText: `HIGH-SCORING EXAM STRATEGIES:\n• Primary Examiner Trap: ${profile.examinerTrapFocus}\n• Distractor Elimination: Strike out 2 unlikely options immediately\n• Time Management: Target 40–50s per question in CBT hall`,
    visualCue: `High-scoring strategy card with lightbulb badge and 3 actionable exam tactics in gold.`,
    durationSeconds: 40,
    modality: profile.primaryModality
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 9: RECAP & CALL TO ACTION
  // ═══════════════════════════════════════════════════════════════════════════
  const recapNarration = is100Days
    ? `That concludes Day ${jambDayNumber || 1} of our 100 Days to JAMB series on ${topic}! You have mastered the syllabus concepts, understood the worked demonstrations, and practiced authentic past questions. If you found this video helpful, hit the like button and subscribe to the StudyPlug YouTube channel. Head over to studyplug.com.ng to take a full timed CBT practice drill on this topic right now with instant AI tutoring. Remember: Learn it. Practice it. Master it. See you in tomorrow's lesson!`
    : `In summary, we have thoroughly covered ${topic}, mastered the step-by-step demonstrations, and solved verified ${exam} examination questions. If this lesson helped you, make sure to like the video and subscribe to the StudyPlug YouTube channel. Head over to studyplug.com.ng to practice more verified questions. Remember our motto: Learn it. Practice it. Master it. See you in the next lesson!`;

  sections.push({
    id: `sec-${secNum}`,
    sectionNumber: secNum++,
    type: 'cta',
    title: `Rapid Recap & StudyPlug Call to Action`,
    spokenNarration: recapNarration,
    narrationText: phoneticSanitize(recapNarration),
    onScreenText: `STUDYPLUG ACADEMY\n"Learn it. Practice it. Master it."\n\n✓ Practice 50+ More Questions at studyplug.com.ng\n✓ 100 Days to JAMB: Daily Comprehensive Lessons\n✓ Download StudyPlug App on Android & iOS`,
    visualCue: `StudyPlug branded closing slide with subscribe button, social links, and website call to action.`,
    durationSeconds: 40,
    modality: profile.primaryModality
  });

  return sections;
}
