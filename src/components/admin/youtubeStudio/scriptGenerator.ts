import { Question } from '../../../data/questions';
import { LessonNote } from '../../../data/masterLessonNotes';
import {
  ScriptSection,
  VideoType,
  TeachingTone,
  TopConcept,
  UnifiedStudioQuestion,
  StudioPaperType,
  ExamCategory
} from './types';

/**
 * Phonetic pronunciation dictionary converting math, science, and exam notation
 * into natural spoken words for Voicebox voice cloning.
 */
export function phoneticSanitize(text: string): string {
  if (!text) return '';

  let sanitized = text;

  // Common exam terms
  sanitized = sanitized.replace(/\bJAMB\b/g, 'Jamb');
  sanitized = sanitized.replace(/\bUTME\b/g, 'U-T-M-E');
  sanitized = sanitized.replace(/\bWAEC\b/g, 'Waec');
  sanitized = sanitized.replace(/\bNECO\b/g, 'Neco');
  sanitized = sanitized.replace(/\bNABTEB\b/g, 'Nab-teb');
  sanitized = sanitized.replace(/\bBECE\b/g, 'Bece');
  sanitized = sanitized.replace(/\bSSCE\b/g, 'S-S-C-E');
  sanitized = sanitized.replace(/\bCBT\b/g, 'C-B-T');
  sanitized = sanitized.replace(/\bOBJ\b/g, 'Objective');

  // Marking Scheme Rubrics
  sanitized = sanitized.replace(/\[M1\]/g, 'Method mark M 1');
  sanitized = sanitized.replace(/\[A1\]/g, 'Accuracy mark A 1');
  sanitized = sanitized.replace(/\[A2\]/g, 'Accuracy mark A 2');
  sanitized = sanitized.replace(/\[B1\]/g, 'Independent mark B 1');
  sanitized = sanitized.replace(/\[B2\]/g, 'Independent mark B 2');
  sanitized = sanitized.replace(/\[B3\]/g, 'Independent mark B 3');

  // Physics & Math Units
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

  // Chemical formulas
  sanitized = sanitized.replace(/H₂SO₄|H2SO4/g, 'H 2 S O 4');
  sanitized = sanitized.replace(/HCl/g, 'H-C-L');
  sanitized = sanitized.replace(/NaOH/g, 'sodium hydroxide');
  sanitized = sanitized.replace(/Na₂CO₃|Na2CO3/g, 'sodium trioxocarbonate 4');
  sanitized = sanitized.replace(/CaCO₃|CaCO3/g, 'calcium trioxocarbonate 4');
  sanitized = sanitized.replace(/CO₂|CO2/g, 'carbon dioxide');
  sanitized = sanitized.replace(/H₂O|H2O/g, 'water');
  sanitized = sanitized.replace(/NaCl/g, 'sodium chloride');

  // Math & Physics equations
  sanitized = sanitized.replace(/v²\s*=\s*u²\s*\+\s*2as/g, 'v squared equals u squared plus 2 a s');
  sanitized = sanitized.replace(/v\s*=\s*u\s*\+\s*at/g, 'Velocity equals initial velocity plus acceleration multiplied by time');
  sanitized = sanitized.replace(/s\s*=\s*ut\s*\+\s*½at²/g, 'Distance equals initial velocity times time plus half acceleration times time squared');
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
 * Generates natural Nigerian teacher opening hooks
 */
function getHookChallenge(
  exam: string,
  subject: string,
  topic: string,
  paperTypes: StudioPaperType[] = ['OBJ'],
  firstQuestion?: UnifiedStudioQuestion | Question
): string {
  const isMulti = paperTypes.length > 1;
  const hasTheory = paperTypes.includes('Theory');
  const hasPractical = paperTypes.includes('Practical');

  if (isMulti) {
    const papersStr = paperTypes.join(' and ');
    return `Welcome scholars! If ${exam} presents a ${subject} question on ${topic} across ${papersStr} papers, do you know how to score maximum marks in each format? Today in this 12-minute masterclass, we will solve authentic Objective, Theory, and Practical questions so you walk into the exam hall completely prepared. Welcome to StudyPlug.`;
  }

  if (hasPractical) {
    return `Welcome science scholars! In ${exam} ${subject} Practical, over 60 percent of candidates lose crucial marks because of careless tabulation and inaccurate graph slopes. Today, we are going to master this ${topic} practical investigation step-by-step. Welcome to StudyPlug.`;
  }

  if (hasTheory) {
    return `Can you answer a full 10-mark ${exam} ${subject} theory question on ${topic} without losing accuracy marks for missing SI units or omitted calculation steps? Today, you will learn the exact marking scheme rubrics examiners use. Welcome to StudyPlug.`;
  }

  if (firstQuestion) {
    return `If ${exam} gives you this question on ${topic}, can you solve it in under thirty seconds? Over eighty percent of candidates choose the wrong option because of a subtle trap! Today, you are going to master this topic once and for all. Welcome to StudyPlug.`;
  }

  return `Can you solve a standard ${exam} question on ${topic} without making the number one mistake that costs students ten marks every year? Let us find out! Welcome to your StudyPlug masterclass.`;
}

/**
 * Builds the complete educational script tailored for ~12-minute YouTube videos
 * Supports single-paper and multi-paper videos (OBJ, Theory, Practical)
 */
export function generateTeachingScript(options: {
  exam: ExamCategory;
  selectedExams?: ExamCategory[];
  subject: string;
  paperTypes?: StudioPaperType[];
  topic: string;
  subtopic: string;
  lessonNote: LessonNote | null;
  questions: (UnifiedStudioQuestion | Question)[];
  videoType: VideoType;
  tone: TeachingTone;
  topConcepts?: TopConcept[];
}): ScriptSection[] {
  const {
    exam,
    selectedExams = [exam],
    subject,
    paperTypes = ['OBJ'],
    topic,
    subtopic,
    lessonNote,
    questions,
    videoType,
    tone,
    topConcepts
  } = options;

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
  const isMultiExam = selectedExams.length > 1;

  const noteSummary = lessonNote?.summary_60s || `Fundamental principles of ${subtopic || topic} under the official ${exam} curriculum.`;
  const conceptsToTeach = (topConcepts && topConcepts.filter(c => c.isSelected).length > 0)
    ? topConcepts.filter(c => c.isSelected)
    : [
        { id: 'c1', title: `Core Definition of ${subtopic || topic}`, explanation: noteSummary, ruleOrFormula: 'Governing Formula', example: 'Standard application in examinations', isSelected: true },
        { id: 'c2', title: 'Equations & Mathematical Laws', explanation: 'Step-by-step application of primary formulas.', ruleOrFormula: 'Primary Formula', example: 'Extract data, substitute, calculate', isSelected: true },
        { id: 'c3', title: 'Examiner Pitfalls & Traps', explanation: 'Common errors made during unit conversion and sign conventions.', ruleOrFormula: 'Always verify SI units', example: 'Avoiding common distractor options', isSelected: true }
      ];

  // ═══════════════════════════════════════════════════════════════════════════
  // 12-MINUTE MASTERCLASS STRUCTURE (DEFAULT FOR YOUTUBE RETENTION)
  // Target: 10 - 14 minutes (~12 minutes, ~1,600 words, 30-38 scenes)
  // ═══════════════════════════════════════════════════════════════════════════
  if (videoType === '12_minute_masterclass' || videoType === 'complete_lesson') {

    // ─── 00:00–00:30 — HOOK ───
    const hookNarration = getHookChallenge(exam, subject, topic, paperTypes, questions[0]);
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'hook',
      title: '00:00 Opening Challenge Hook',
      spokenNarration: hookNarration,
      narrationText: phoneticSanitize(hookNarration),
      onScreenText: `CAN YOU SOLVE THIS IN 30 SECONDS?\n${exam} ${subject.toUpperCase()}\n${topic.toUpperCase()}${isMultiPaper ? '\n[OBJ + THEORY + PRACTICAL]' : ''}`,
      visualCue: `High-contrast opening challenge card with ${exam} examination badge and 30-second timer prompt.`,
      durationSeconds: 28,
      questionData: questions[0]
    });

    // ─── 00:30–01:00 — WHAT YOU WILL LEARN ───
    const learnNarration = isMultiPaper
      ? `In this complete twelve-minute masterclass on ${topic}, you will master how ${exam} tests this concept across all examination formats: Objective speed drills, Theory step-by-step marking rubrics, and Practical experimental methods. Grab your pen and calculator, and let us begin.`
      : `In this complete twelve-minute masterclass on ${topic}, you will master three critical things: Number one, the core concepts and laws tested in ${exam}. Number two, the exact equations and worked calculation examples. And number three, we will solve real ${exam} past questions together so you know exactly what to write on exam day. Grab your notebook, and let us begin.`;

    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'objectives',
      title: '00:30 What You Will Master Today',
      spokenNarration: learnNarration,
      narrationText: phoneticSanitize(learnNarration),
      onScreenText: isMultiPaper
        ? `WHAT YOU WILL MASTER TODAY:\n✓ Core Principles & Governing Equations\n✓ Section 1: Objective CBT Questions\n✓ Section 2: Theory & Essay Marking Scheme\n✓ Section 3: Practical Setup & Graph Workings`
        : `WHAT YOU WILL MASTER TODAY:\n✓ Core Laws & Principles of ${subtopic || topic}\n✓ Governing Formulas & Step-by-Step Calculations\n✓ Common Traps That Cost Students 10+ Marks\n✓ Authentic ${exam} Past Questions Solved`,
      visualCue: `Four animated checkmark cards sliding in with StudyPlug gold highlights.`,
      durationSeconds: 32
    });

    // ─── 01:00–04:00 — TOP CONCEPTS (3 to 5 Concepts) ───
    conceptsToTeach.slice(0, 4).forEach((concept, cIdx) => {
      const cTime = cIdx === 0 ? '01:00' : cIdx === 1 ? '01:45' : cIdx === 2 ? '02:30' : '03:15';
      const cNarration = `Concept Number ${cIdx + 1}: ${concept.title}. Here is what you must understand: ${concept.explanation}. The governing formula or rule is: ${concept.ruleOrFormula || 'Standard syllabus definition'}. ${concept.example ? 'For example: ' + concept.example + '.' : ''} In the exam, remember this key tip: ${concept.commonMistakes?.[0] || 'Pay strict attention to standard units and examiner traps'}.`;

      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'top_concept',
        title: `${cTime} Concept ${cIdx + 1}: ${concept.title}`,
        spokenNarration: cNarration,
        narrationText: phoneticSanitize(cNarration),
        onScreenText: `CONCEPT ${cIdx + 1}: ${concept.title.toUpperCase()}\n\n• Principle: ${concept.explanation}\n• Formula/Rule: ${concept.ruleOrFormula || 'Standard Law'}\n• Common Trap: ${concept.commonMistakes?.[0] || 'Unit conversions'}`,
        visualCue: `Split chalkboard scene: Left side theory principle, right side formula box with gold border.`,
        durationSeconds: 45
      });
    });

    // ─── 04:00–05:30 — WORKED EXAMPLE ───
    const workedNarration1 = `Now, let us walk through a standard calculation problem step-by-step. Step one: Always extract the given parameters from the question and verify their SI units. Step two: State the governing equation before substituting any numbers. Step three: Substitute carefully and compute your final numerical value with the appropriate units.`;
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'worked_example',
      title: '04:00 Worked Example: Step-by-Step Breakdown',
      spokenNarration: workedNarration1,
      narrationText: phoneticSanitize(workedNarration1),
      onScreenText: `WORKED EXAMPLE 1:\nStep 1: Extract Given Data\nStep 2: State Standard Governing Equation\nStep 3: Substitute & Compute Final SI Unit`,
      visualCue: `Chalkboard equation layout with step 1, 2, 3 badge progression.`,
      durationSeconds: 45,
      calculationSteps: [
        'Step 1 (Given): Initial velocity u = 0, acceleration a = 2.5 m/s², time t = 8.0 s',
        'Step 2 (Equation): v = u + at',
        'Step 3 (Substitution): v = 0 + (2.5 × 8.0)',
        'Step 4 (Final Answer): v = 20.0 m/s'
      ]
    });

    // ═══════════════════════════════════════════════════════════════════════════
    // PAST QUESTIONS SECTIONS (OBJECTIVE, THEORY, PRACTICAL)
    // ═══════════════════════════════════════════════════════════════════════════

    // 1. OBJECTIVE SECTION (If present)
    if (objQuestions.length > 0) {
      if (isMultiPaper) {
        const secIntro = `We begin with Section One: ${exam} Objective Questions. Speed and precision are everything in this paper. Take five to ten seconds on each question to choose your option before we reveal the examiner solution.`;
        sections.push({
          id: `sec-${secNum}`,
          sectionNumber: secNum++,
          type: 'section_header',
          title: `05:30 Section 1: ${exam} Objective Questions`,
          spokenNarration: secIntro,
          narrationText: phoneticSanitize(secIntro),
          onScreenText: `SECTION 1: OBJECTIVE / CBT QUESTIONS\n• Rapid Formula Elimination\n• Avoiding Subtle Distractor Traps\n• Standard ${exam} Syllabus Items`,
          visualCue: `Full-width animated emerald banner announcing Section 1: Objective Questions.`,
          durationSeconds: 15,
          paperType: 'OBJ',
          sectionHeaderTitle: `SECTION 1: ${exam.toUpperCase()} OBJECTIVE`,
          sectionHeaderSubtitle: 'Speed Drills & CBT Distractor Avoidance'
        });
      }

      objQuestions.slice(0, isMultiPaper ? 3 : 5).forEach((q, qIdx) => {
        const uq = q as UnifiedStudioQuestion;
        const srcLabel = uq.sourceLabel || `${uq.exam || exam} • ${subject.toUpperCase()} • OBJECTIVE • ${uq.year || '2023'}`;
        const timerSec = (q.difficulty === 'Hard' || q.text.includes('Calculate') || q.text.includes('Determine')) ? 10 : 5;
        const qOptions = Array.isArray(q.options) ? q.options : [];
        const optA = qOptions[0]?.text || '';
        const optB = qOptions[1]?.text || '';
        const optC = qOptions[2]?.text || '';
        const optD = qOptions[3]?.text || '';

        const qNarration = `Question ${qIdx + 1}. From ${srcLabel}. The question states: "${q.text}". Option A: ${optA}. Option B: ${optB}. Option C: ${optC}. Option D: ${optD}. Take ${timerSec} seconds right now and decide your answer!`;

        sections.push({
          id: `sec-${secNum}`,
          sectionNumber: secNum++,
          type: 'past_question',
          title: `Objective Q${qIdx + 1} • ${srcLabel}`,
          spokenNarration: qNarration,
          narrationText: phoneticSanitize(qNarration),
          onScreenText: `PAST QUESTION ${qIdx + 1} [${srcLabel}]\n\n${q.text}\n\nA. ${optA}\nB. ${optB}\nC. ${optC}\nD. ${optD}`,
          visualCue: `CBT examination terminal with active ${timerSec}-second countdown ring and A, B, C, D pills.`,
          durationSeconds: 35,
          questionData: q,
          paperType: 'OBJ',
          sourceLabel: srcLabel,
          timerDurationSeconds: timerSec
        });

        const solNarration = `The correct answer is Option ${q.correctAnswer}! Here is the complete solution: ${q.explanation || 'By applying the fundamental formula, we arrive directly at Option ' + q.correctAnswer + '.'} Notice why the distractors are incorrect: examiners often provide values calculated with wrong signs or missed factors to trap hurried students.`;

        sections.push({
          id: `sec-${secNum}`,
          sectionNumber: secNum++,
          type: 'solution_breakdown',
          title: `Answer & Solution • Objective Q${qIdx + 1}`,
          spokenNarration: solNarration,
          narrationText: phoneticSanitize(solNarration),
          onScreenText: `CORRECT: OPTION ${q.correctAnswer} ✓\n\nEXAMINER SOLUTION & DERIVATION:\n${q.explanation || 'Direct syllabus derivation.'}`,
          visualCue: `Option ${q.correctAnswer} glows bright emerald green with animated checkmark and detailed working box.`,
          durationSeconds: 38,
          questionData: q,
          paperType: 'OBJ',
          sourceLabel: srcLabel
        });
      });
    }

    // 2. THEORY SECTION (If present)
    if (theoryQuestions.length > 0) {
      if (isMultiPaper) {
        const secIntro = `Now we transition to Section Two: ${exam} Theory and Essay Questions. In this paper, examiners award marks for Method, Accuracy, and Independent statements. Never jump straight to the final answer without showing full derivations.`;
        sections.push({
          id: `sec-${secNum}`,
          sectionNumber: secNum++,
          type: 'section_header',
          title: `Section 2: ${exam} Theory & Essay Questions`,
          spokenNarration: secIntro,
          narrationText: phoneticSanitize(secIntro),
          onScreenText: `SECTION 2: THEORY & ESSAY QUESTIONS\n• Official Marking Scheme (M1, A1, B1 Rubrics)\n• Step-by-Step Mathematical Derivations\n• Strict SI Unit Compliance`,
          visualCue: `Full-width animated gold-accented banner announcing Section 2: Theory Questions.`,
          durationSeconds: 15,
          paperType: 'Theory',
          sectionHeaderTitle: `SECTION 2: ${exam.toUpperCase()} THEORY`,
          sectionHeaderSubtitle: 'Official Step-by-Step Marking Rubrics'
        });
      }

      theoryQuestions.slice(0, isMultiPaper ? 2 : 3).forEach((tq, tIdx) => {
        const srcLabel = tq.sourceLabel || `${tq.exam || exam} • ${subject.toUpperCase()} • THEORY • ${tq.year || '2023'}`;
        const partsText = tq.parts && tq.parts.length > 0
          ? tq.parts.map(p => `${p.label} ${p.text} [${p.marks} Marks]`).join('\n')
          : tq.text;

        const qNarration = `Theory Question ${tIdx + 1}. Authentic ${srcLabel}. The question reads: "${tq.title || tq.text.slice(0, 120)}". Notice how the question is broken down into parts: Part A requires the fundamental definition or formula, while Part B requires numerical substitution. Let us break down the exact solution to score all ten marks.`;

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

        // Solution breakdown with Rubric (M1, A1, B1)
        const solNarration = `Here is the official Chief Examiner marking breakdown for this question. Notice that stating the formula first locks in your Method mark M 1. Correct numerical evaluation earns Accuracy mark A 1. And remember the general WAEC and NECO rule: omitting the final SI unit forfeits one mark!`;

        const rubricsText = tq.markingRubrics && tq.markingRubrics.length > 0
          ? tq.markingRubrics.slice(0, 5).map(r => `[${r.markType}] Step ${r.stepNumber}: ${r.description} (${r.allocatedMarks}mk)`).join('\n')
          : tq.modelSolution || 'Complete step-by-step solution according to official syllabus.';

        sections.push({
          id: `sec-${secNum}`,
          sectionNumber: secNum++,
          type: 'theory_solution',
          title: `Theory Marking Scheme • Q${tIdx + 1}`,
          spokenNarration: solNarration,
          narrationText: phoneticSanitize(solNarration),
          onScreenText: `OFFICIAL MARKING SCHEME [${srcLabel}]:\n\n${rubricsText}\n\nExaminer Tip: ${tq.examinerTips?.[0] || 'Always state formulas before substituting to secure Method marks.'}`,
          visualCue: `Examiner rubric card with M1, A1, B1 mark badges and green highlight checkmarks.`,
          durationSeconds: 50,
          questionData: tq,
          paperType: 'Theory',
          sourceLabel: srcLabel
        });
      });
    }

    // 3. PRACTICAL SECTION (If present)
    if (practicalQuestions.length > 0) {
      const secIntro = `Now let us examine the Practical Component for ${exam} ${subject}. In Paper Three Practical, candidates are evaluated on apparatus setup, experimental procedure, consistent tabulation, and graph plotting. Let us walk through an authentic practical question.`;
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

      practicalQuestions.slice(0, 1).forEach((pq, pIdx) => {
        const srcLabel = pq.sourceLabel || `${pq.exam || exam} • ${subject.toUpperCase()} • PRACTICAL • ${pq.year || '2023'}`;

        // Practical Setup & Apparatus
        const setupNarration = `For this practical on ${pq.topic || topic}, candidates are provided with standard apparatus including: ${pq.apparatus?.join(', ') || 'retort stand, bob, stopwatch, and meter rule'}. You must set up the experiment as shown, displace the oscillating body by a small angle less than ten degrees, and record the time for twenty complete oscillations.`;
        sections.push({
          id: `sec-${secNum}`,
          sectionNumber: secNum++,
          type: 'practical_setup',
          title: `Practical Setup • ${srcLabel}`,
          spokenNarration: setupNarration,
          narrationText: phoneticSanitize(setupNarration),
          onScreenText: `PRACTICAL SETUP & APPARATUS [${srcLabel}]:\n\nApparatus Required:\n${pq.apparatus?.map(a => `• ${a}`).join('\n') || '• Retort Stand & Clamp\n• Measuring Instrument\n• Stopwatch\n• Specimen / Bob'}\n\nProcedure:\n1. Assemble apparatus firmly\n2. Displace by small angle θ < 10°\n3. Record time t for repeated trials`,
          visualCue: `Laboratory apparatus schematic diagram with clamp, ruler, and stopwatch indicators.`,
          durationSeconds: 45,
          questionData: pq,
          paperType: 'Practical',
          sourceLabel: srcLabel,
          practicalDetails: {
            apparatus: pq.apparatus,
            precautions: pq.precautions
          }
        });

        // Practical Readings & Graph Plotting
        const graphNarration = `Next is Tabulation and Graph Plotting. Record at least five sets of readings. In WAEC and NECO, columns must maintain consistent decimal places. When plotting your graph of period squared against length, choose a scale where points occupy more than half the grid, draw your line of best fit, and construct a large slope triangle to compute slope S. Finally, evaluate the target constant, such as acceleration due to gravity, g equals four pi squared divided by slope S.`;
        sections.push({
          id: `sec-${secNum}`,
          sectionNumber: secNum++,
          type: 'practical_graph',
          title: `Tabulation & Graph Plotting • ${srcLabel}`,
          spokenNarration: graphNarration,
          narrationText: phoneticSanitize(graphNarration),
          onScreenText: `READINGS TABLE & GRAPH DERIVATION:\n\n| L (cm) | t₁ (s) | t₂ (s) | Mean t | T (s) | T² (s²) |\n| 90.0   | 38.2   | 38.0   | 38.10  | 1.905 | 3.63    |\n| 70.0   | 33.6   | 33.4   | 33.50  | 1.675 | 2.81    |\n| 50.0   | 28.4   | 28.2   | 28.30  | 1.415 | 2.00    |\n\nSlope S = Δ(T²) / ΔL = 0.0408 s²/cm\ng = 4π² / S = 9.82 m/s² ✓`,
          visualCue: `Grid graph sheet layout with plotted points, line of best fit, large right-angled slope triangle, and formula evaluation box.`,
          durationSeconds: 50,
          questionData: pq,
          paperType: 'Practical',
          sourceLabel: srcLabel,
          practicalDetails: {
            observationTable: pq.observationTable,
            graphSlope: pq.graphDetails?.slopeValue || '0.0408 s²/cm'
          }
        });

        // Practical Precautions
        const precNarration = `Finally, experimental precautions award up to four critical marks in Paper Three. Two standard precautions for this experiment are: Number one, ensured the ceiling fan was switched off and windows closed to prevent air draughts from damping oscillation. And Number two, avoided parallax error when reading the stopwatch and meter rule by viewing scales perpendicular to the line of sight. Always write precautions in the past tense!`;
        sections.push({
          id: `sec-${secNum}`,
          sectionNumber: secNum++,
          type: 'practical_precautions',
          title: `Experimental Precautions • ${srcLabel}`,
          spokenNarration: precNarration,
          narrationText: phoneticSanitize(precNarration),
          onScreenText: `ESSENTIAL EXPERIMENTAL PRECAUTIONS:\n\n1. ✓ Ensured ceiling fans were switched off to eliminate air draughts\n2. ✓ Displaced bob through small angle (θ < 10°) for true S.H.M.\n3. ✓ Avoided parallax error by viewing instrument scale perpendicularly\n\nRule: Always state precautions in the PAST TENSE!`,
          visualCue: `High-scoring precaution checklist with green checkmarks and examiner tip warning badge.`,
          durationSeconds: 40,
          questionData: pq,
          paperType: 'Practical',
          sourceLabel: srcLabel
        });
      });
    }

    // ─── 10:00–11:15 — EXAM TIPS + COMMON TRAPS (CROSS-PAPER STRATEGY) ───
    const tipsNarration = isMultiPaper
      ? `Now, let us examine how the same concept of ${topic} appears differently across the three examination papers: In Objective, look for shortcut formulas to save time. In Theory, always write the governing equation and units to protect your Method marks. And in Practical, ensure consistent decimal places in your table and draw a large slope triangle on your graph sheet.`
      : `Now, let us examine the critical exam tips and common traps for ${topic}. When sitting for your examination, keep these three time-saving techniques in mind: Tip 1: Always check whether the question specifies constant velocity or uniform acceleration, because constant velocity means acceleration is zero. Tip 2: Convert kilometers per hour to meters per second by multiplying by five and dividing by eighteen. And Tip 3: In theory questions, never write your final answer without stating the proper SI unit.`;

    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'exam_tips',
      title: '10:00 Exam Tips & Scoring Strategy',
      spokenNarration: tipsNarration,
      narrationText: phoneticSanitize(tipsNarration),
      onScreenText: isMultiPaper
        ? `CROSS-PAPER EXAM STRATEGIES:\n• Objective: Eliminate distractors & use ratio shortcuts\n• Theory: State formulas first; show workings for M1/A1 marks\n• Practical: Consistent decimals, large slope triangle & precautions`
        : `TOP 3 EXAM STRATEGIES & SHORTCUTS:\n1. Constant Velocity = Zero Acceleration (a = 0)\n2. km/h to m/s Shortcut: Multiply by 5/18 (or divide by 3.6)\n3. Always State Full SI Units to Secure Final Method Marks`,
      visualCue: `High-scoring strategy card with gold lightbulb icon and 3 actionable exam tactics.`,
      durationSeconds: 45
    });

    // ─── 11:15–12:00 — QUICK RECAP + CTA ───
    const recapNarration = `In summary, we have thoroughly covered ${topic}, mastered the step-by-step derivations, and solved verified ${exam} examination questions. If this lesson helped you, make sure to like the video and subscribe to the StudyPlug YouTube channel. Head over to studyplug.com.ng to take a full timed CBT practice drill or explore our structured theory marking guides with instant AI feedback. Remember our motto: Learn it. Practice it. Master it. See you in the next masterclass!`;

    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'cta',
      title: '11:15 Rapid Recap & StudyPlug Call to Action',
      spokenNarration: recapNarration,
      narrationText: phoneticSanitize(recapNarration),
      onScreenText: `STUDYPLUG ACADEMY\n"Learn it. Practice it. Master it."\n\n✓ Practice 50+ More Questions at studyplug.com.ng\n✓ Subscribe for Daily JAMB, WAEC & NECO Lessons\n✓ Download StudyPlug App on Android & iOS`,
      visualCue: `StudyPlug branded closing slide with subscribe button, social links, and website call to action.`,
      durationSeconds: 40
    });

    return sections;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // OTHER PRESETS (Past Questions Masterclass, Quick Revision, Shorts)
  // ═══════════════════════════════════════════════════════════════════════════
  const introText = `Welcome scholars! This is the StudyPlug ${exam} Past Questions Masterclass for ${subject} on ${topic}. Let us solve verified past questions step-by-step!`;
  sections.push({
    id: `sec-${secNum}`,
    sectionNumber: secNum++,
    type: 'intro',
    title: 'Past Questions Opener',
    spokenNarration: introText,
    narrationText: phoneticSanitize(introText),
    onScreenText: `${exam} ${subject.toUpperCase()}\nPAST QUESTIONS MASTERCLASS\nTopic: ${topic.toUpperCase()}`,
    visualCue: `Past questions opener card.`,
    durationSeconds: 20
  });

  questions.slice(0, 6).forEach((q, idx) => {
    const uq = q as UnifiedStudioQuestion;
    const src = uq.sourceLabel || `${exam} • ${subject} • ${q.year || '2023'}`;
    const qText = `Question ${idx + 1} from ${src}: "${q.text}". Take five seconds to think!`;
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'past_question',
      title: `Question ${idx + 1} • ${src}`,
      spokenNarration: qText,
      narrationText: phoneticSanitize(qText),
      onScreenText: `QUESTION ${idx + 1} [${src}]\n\n${q.text}`,
      visualCue: `Interactive question card.`,
      durationSeconds: 30,
      questionData: q,
      timerDurationSeconds: 5
    });
  });

  return sections;
}
