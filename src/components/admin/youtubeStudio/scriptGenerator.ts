import { Question } from '../../../data/questions';
import { LessonNote } from '../../../data/masterLessonNotes';
import { ScriptSection, VideoType, TeachingTone, TopConcept } from './types';

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
  sanitized = sanitized.replace(/\bBECE\b/g, 'Bece');
  sanitized = sanitized.replace(/\bSSCE\b/g, 'S-S-C-E');
  sanitized = sanitized.replace(/\bCBT\b/g, 'C-B-T');

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

  // Chemical formulas
  sanitized = sanitized.replace(/H₂SO₄|H2SO4/g, 'H 2 S O 4');
  sanitized = sanitized.replace(/HCl/g, 'H-C-L');
  sanitized = sanitized.replace(/NaOH/g, 'sodium hydroxide');
  sanitized = sanitized.replace(/CaCO₃|CaCO3/g, 'calcium trioxocarbonate 4');
  sanitized = sanitized.replace(/CO₂|CO2/g, 'carbon dioxide');
  sanitized = sanitized.replace(/H₂O|H2O/g, 'water');

  // Math & Physics equations
  sanitized = sanitized.replace(/v²\s*=\s*u²\s*\+\s*2as/g, 'v squared equals u squared plus 2 a s');
  sanitized = sanitized.replace(/v\s*=\s*u\s*\+\s*at/g, 'Velocity equals initial velocity plus acceleration multiplied by time');
  sanitized = sanitized.replace(/s\s*=\s*ut\s*\+\s*½at²/g, 'Distance equals initial velocity times time plus half acceleration times time squared');
  sanitized = sanitized.replace(/½/g, 'half ');
  sanitized = sanitized.replace(/¼/g, 'one quarter ');
  sanitized = sanitized.replace(/¾/g, 'three quarters ');
  sanitized = sanitized.replace(/π/g, 'pi');
  sanitized = sanitized.replace(/θ/g, 'theta');
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
function getHookChallenge(exam: string, subject: string, topic: string, firstQuestion?: Question): string {
  if (firstQuestion) {
    return `If ${exam} gives you this question on ${topic}, can you solve it in under thirty seconds? Over eighty percent of candidates choose the wrong option because of a subtle trap! Today, you are going to master this topic once and for all. Welcome to StudyPlug.`;
  }
  return `Can you solve a standard ${exam} question on ${topic} without making the number one mistake that costs students ten marks every year? Let us find out! Welcome to your StudyPlug masterclass.`;
}

/**
 * Builds the complete educational script tailored for ~12-minute YouTube videos
 */
export function generateTeachingScript(options: {
  exam: 'JAMB' | 'WAEC' | 'NECO' | 'BECE' | 'Post-UTME';
  subject: string;
  topic: string;
  subtopic: string;
  lessonNote: LessonNote | null;
  questions: Question[];
  videoType: VideoType;
  tone: TeachingTone;
  topConcepts?: TopConcept[];
}): ScriptSection[] {
  const { exam, subject, topic, subtopic, lessonNote, questions, videoType, tone, topConcepts } = options;
  const sections: ScriptSection[] = [];
  let secNum = 1;

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
    const hookNarration = getHookChallenge(exam, subject, topic, questions[0]);
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'hook',
      title: '00:00 Opening Challenge Hook',
      spokenNarration: hookNarration,
      narrationText: phoneticSanitize(hookNarration),
      onScreenText: `CAN YOU SOLVE THIS IN 30 SECONDS?\n${exam} ${subject.toUpperCase()}\n${topic.toUpperCase()}`,
      visualCue: `High-contrast opening challenge card with ${exam} examination badge and 30-second timer prompt.`,
      durationSeconds: 28,
      questionData: questions[0]
    });

    // ─── 00:30–01:00 — WHAT YOU WILL LEARN ───
    const learnNarration = `In this complete twelve-minute masterclass on ${topic}, you will master three critical things: Number one, the core concepts and laws tested in ${exam}. Number two, the exact equations and worked calculation examples. And number three, we will solve real ${exam} past questions together so you know exactly what to write on exam day. Grab your notebook, and let us begin.`;
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'objectives',
      title: '00:30 What You Will Master Today',
      spokenNarration: learnNarration,
      narrationText: phoneticSanitize(learnNarration),
      onScreenText: `WHAT YOU WILL MASTER TODAY:\n✓ Core Laws & Principles of ${subtopic || topic}\n✓ Governing Formulas & Step-by-Step Calculations\n✓ Common Traps That Cost Students 10+ Marks\n✓ Authentic ${exam} Past Questions Solved`,
      visualCue: `Four animated checkmark cards sliding in with StudyPlug gold highlights.`,
      durationSeconds: 32
    });

    // ─── 01:00–04:00 — TOP CONCEPTS (3 to 5 Concepts) ───
    conceptsToTeach.forEach((concept, cIdx) => {
      // Concept Explanation Slide
      const conceptNarration = `Concept Number ${cIdx + 1}: ${concept.title}. ${concept.explanation} When examiners set questions on this, they expect you to clearly state the governing principle: ${concept.ruleOrFormula || 'the fundamental formula'}. Look at the board right now.`;
      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'top_concept',
        title: `01:00 Concept ${cIdx + 1}: ${concept.title}`,
        spokenNarration: conceptNarration,
        narrationText: phoneticSanitize(conceptNarration),
        onScreenText: `CONCEPT ${cIdx + 1}: ${concept.title.toUpperCase()}\n\n• ${concept.explanation.slice(0, 110)}...\n\nFORMULA / RULE:\n${concept.ruleOrFormula || 'Standard Syllabus Definition'}`,
        visualCue: `Split layout with concept definition on left and glowing formula card on right.`,
        durationSeconds: 45
      });

      // Concept Example & Common Pitfall Slide
      const pitfallNarration = `Here is a practical example of ${concept.title}: ${concept.example || 'When calculating this, always ensure units align.'} But here is the dangerous trap: ${concept.commonMistakes?.[0] || 'Candidates often forget standard SI units.'} If you remember this distinction, you will never fall for the examiner's tricks.`;
      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'top_concept',
        title: `Concept ${cIdx + 1} Example & Examiner Traps`,
        spokenNarration: pitfallNarration,
        narrationText: phoneticSanitize(pitfallNarration),
        onScreenText: `PRACTICAL APPLICATION & TRAPS:\n\nExample: ${concept.example || 'Direct calculation from given state'}\n\n⚠️ AVOID THIS MISTAKE:\n${concept.commonMistakes?.[0] || 'Unit mismatch or incorrect sign convention'}`,
        visualCue: `Example card with warning banner highlighting the common student mistake in amber.`,
        durationSeconds: 40
      });
    });

    // ─── 04:00–06:00 — WORKED EXAMPLES (Progressive Calculations) ───
    const workedNarration1 = `Now, let us work through a foundational calculation on the board step-by-step. In ${subject}, every numerical problem follows three golden rules: First, extract your given data. Second, state your governing equation clearly. And third, substitute and write your final answer with the correct unit. Look at the working on screen.`;
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'worked_example',
      title: '04:00 Worked Example: Step-by-Step Breakdown',
      spokenNarration: workedNarration1,
      narrationText: phoneticSanitize(workedNarration1),
      onScreenText: `WORKED EXAMPLE 1:\nStep 1: Extract Given Data\nStep 2: State Standard Governing Equation\nStep 3: Substitute & Compute Final SI Unit`,
      visualCue: `Chalkboard equation layout with step 1, 2, 3 badge progression.`,
      durationSeconds: 50,
      calculationSteps: [
        'Step 1 (Given): Initial velocity u = 0, acceleration a = 2.5 m/s², time t = 8.0 s',
        'Step 2 (Equation): v = u + at',
        'Step 3 (Substitution): v = 0 + (2.5 × 8.0)',
        'Step 4 (Final Answer): v = 20.0 m/s'
      ]
    });

    const workedNarration2 = `Let us examine Step 2. Notice that because the body started from rest, initial velocity u equals zero. Substituting two point five multiplied by eight gives twenty meters per second. Writing down each step guarantees you full method marks in WAEC and NECO theory papers, and saves you time during JAMB CBT drills.`;
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'worked_example',
      title: 'Worked Example: Mathematical Derivation',
      spokenNarration: workedNarration2,
      narrationText: phoneticSanitize(workedNarration2),
      onScreenText: `CALCULATION WORKING:\nv = u + at\nv = 0 + (2.5 m/s² × 8.0 s)\nv = 20.0 m/s ✓\n\nMethod Mark: [1 Mark] • Calculation: [1 Mark] • Unit: [1 Mark]`,
      visualCue: `Animated green checkmark on final answer with WAEC/NECO marking scheme breakdown.`,
      durationSeconds: 45
    });

    // ─── 06:00–10:00 — REAL PAST QUESTIONS (4 to 7 Questions) ───
    const questionsToUse = questions.slice(0, Math.min(questions.length, 5));
    questionsToUse.forEach((q, qIdx) => {
      // Question Card + Thinking Timer (5s default, 10s for hard calculation)
      const timerSec = (q.difficulty === 'Hard' || q.text.includes('Calculate') || q.text.includes('Determine')) ? 10 : 5;
      const qNarration = `Question Number ${qIdx + 1}. This is an authentic ${q.exam || exam} question from the year ${q.year || '2022'}. The question states: "${q.text}". Look at the four options: Option A: ${q.options[0]?.text || ''}. Option B: ${q.options[1]?.text || ''}. Option C: ${q.options[2]?.text || ''}. Option D: ${q.options[3]?.text || ''}. Take ${timerSec} seconds right now, calculate or think carefully, and choose your answer!`;

      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'past_question',
        title: `06:00 Past Question ${qIdx + 1} • ${q.exam || exam} ${q.year || 'Authentic'}`,
        spokenNarration: qNarration,
        narrationText: phoneticSanitize(qNarration),
        onScreenText: `PAST QUESTION ${qIdx + 1} [${q.exam || exam} ${q.year || 'AUTHENTIC'}]\n\n${q.text}\n\nA. ${q.options[0]?.text || ''}\nB. ${q.options[1]?.text || ''}\nC. ${q.options[2]?.text || ''}\nD. ${q.options[3]?.text || ''}`,
        visualCue: `CBT examination terminal with active ${timerSec}-second countdown ring and A, B, C, D pills.`,
        durationSeconds: 38,
        questionData: q,
        timerDurationSeconds: timerSec
      });

      // Solution & Detailed Reasoning
      const solNarration = `The correct answer is Option ${q.correctAnswer}! Here is the complete examiner solution: ${q.explanation || 'By applying the fundamental formula and substituting the given values, we arrive directly at Option ' + q.correctAnswer + '.'} Notice why the other options are wrong: examiners intentionally designed those options to trap students who made careless arithmetic mistakes. If you got this right, give yourself a thumbs up!`;

      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'solution_breakdown',
        title: `Answer & Solution • Question ${qIdx + 1}`,
        spokenNarration: solNarration,
        narrationText: phoneticSanitize(solNarration),
        onScreenText: `CORRECT: OPTION ${q.correctAnswer} ✓\n\nEXAMINER SOLUTION & DERIVATION:\n${q.explanation || 'Direct syllabus derivation.'}`,
        visualCue: `Option ${q.correctAnswer} glows bright emerald green with animated checkmark and detailed working box.`,
        durationSeconds: 42,
        questionData: q
      });
    });

    // ─── 10:00–11:15 — EXAM TIPS + COMMON TRAPS ───
    const tipsNarration = `Now, let us examine the critical exam tips and common traps for ${topic}. When sitting for your examination, keep these three time-saving techniques in mind: Tip 1: Always check whether the question specifies constant velocity or uniform acceleration, because constant velocity means acceleration is zero. Tip 2: Convert kilometers per hour to meters per second by multiplying by five and dividing by eighteen. And Tip 3: In theory questions, never write your final answer without stating the proper SI unit.`;

    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'exam_tips',
      title: '10:00 Exam Tips & High-Scoring Techniques',
      spokenNarration: tipsNarration,
      narrationText: phoneticSanitize(tipsNarration),
      onScreenText: `TOP 3 EXAM STRATEGIES & SHORTCUTS:\n1. Constant Velocity = Zero Acceleration (a = 0)\n2. km/h to m/s Shortcut: Multiply by 5/18 (or divide by 3.6)\n3. Always State Full SI Units to Secure Final Method Marks`,
      visualCue: `High-scoring strategy card with gold lightbulb icon and 3 actionable exam tactics.`,
      durationSeconds: 50
    });

    // ─── 11:15–12:00 — QUICK RECAP + CTA ───
    const recapNarration = `In summary, we have covered the core principles of ${topic}, mastered the step-by-step worked calculations, and solved verified ${exam} past questions. If this lesson helped you, make sure to like the video and subscribe to the StudyPlug YouTube channel. Head over to studyplug.com.ng to take a full timed CBT practice drill on this topic right now with instant AI grading. Remember our motto: Learn it. Practice it. Master it. See you in the next lesson!`;

    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'cta',
      title: '11:15 Rapid Recap & StudyPlug Call to Action',
      spokenNarration: recapNarration,
      narrationText: phoneticSanitize(recapNarration),
      onScreenText: `STUDYPLUG ACADEMY\n"Learn it. Practice it. Master it."\n\n✓ Practice 50+ More Questions at studyplug.com.ng\n✓ Subscribe for Daily JAMB, WAEC & NECO Lessons\n✓ Download StudyPlug App on Android & iOS`,
      visualCue: `StudyPlug branded closing slide with subscribe button, social links, and website call to action.`,
      durationSeconds: 42
    });

    return sections;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // OTHER PRESETS (Past Questions Masterclass, Quick Revision, Shorts)
  // ═══════════════════════════════════════════════════════════════════════════
  // Past Questions Masterclass
  if (videoType === 'past_questions') {
    const introText = `Welcome scholars! This is the StudyPlug ${exam} Past Questions Masterclass for ${subject} on ${topic}. Today we are solving authentic past questions step-by-step, showing you how examiners think and how to get maximum scores without wasting time. Let's tackle Question 1!`;
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'intro',
      title: 'Past Questions Masterclass Opener',
      spokenNarration: introText,
      narrationText: phoneticSanitize(introText),
      onScreenText: `${exam} ${subject.toUpperCase()}\nPAST QUESTIONS MASTERCLASS\nTopic: ${topic.toUpperCase()}`,
      visualCue: `Fast-paced past questions opener slide.`,
      durationSeconds: 20
    });

    questions.slice(0, 6).forEach((q, idx) => {
      const qText = `Question ${idx + 1} from ${exam} ${q.year || 'series'}: "${q.text}". Option A: ${q.options[0]?.text || ''}. Option B: ${q.options[1]?.text || ''}. Option C: ${q.options[2]?.text || ''}. Option D: ${q.options[3]?.text || ''}. Take five seconds to decide!`;
      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'past_question',
        title: `Question ${idx + 1} • ${q.year || 'Authentic'} ${exam}`,
        spokenNarration: qText,
        narrationText: phoneticSanitize(qText),
        onScreenText: `QUESTION ${idx + 1} [${exam} ${q.year || 'PAST QUESTION'}]\n\n${q.text}\n\nA. ${q.options[0]?.text || ''}\nB. ${q.options[1]?.text || ''}\nC. ${q.options[2]?.text || ''}\nD. ${q.options[3]?.text || ''}`,
        visualCue: `Interactive CBT question card with 5s timer.`,
        durationSeconds: 30,
        questionData: q,
        timerDurationSeconds: 5
      });

      const ansText = `The correct answer is Option ${q.correctAnswer}! ${q.explanation || 'Direct syllabus derivation.'}`;
      sections.push({
        id: `sec-${secNum}`,
        sectionNumber: secNum++,
        type: 'solution_breakdown',
        title: `Solution • Question ${idx + 1}`,
        spokenNarration: ansText,
        narrationText: phoneticSanitize(ansText),
        onScreenText: `CORRECT: OPTION ${q.correctAnswer} ✓\n\n${q.explanation || ''}`,
        visualCue: `Animated checkmark and working card.`,
        durationSeconds: 35,
        questionData: q
      });
    });

    const ctaText = `Great job solving these past questions! Practice thousands more on studyplug.com.ng. Subscribe and like for more daily masterclasses. Learn it. Practice it. Master it!`;
    sections.push({
      id: `sec-${secNum}`,
      sectionNumber: secNum++,
      type: 'cta',
      title: 'Masterclass Outro',
      spokenNarration: ctaText,
      narrationText: phoneticSanitize(ctaText),
      onScreenText: `STUDYPLUG\n"Learn it. Practice it. Master it."\n\nFull CBT Drills at studyplug.com.ng`,
      visualCue: `StudyPlug CTA slide.`,
      durationSeconds: 20
    });

    return sections;
  }

  // Quick Revision / Shorts Fallbacks
  const shortIntro = `Quick revision alert! In the next five minutes, we are revising ${topic} for your ${exam} exam.`;
  sections.push({
    id: `sec-${secNum}`,
    sectionNumber: secNum++,
    type: 'intro',
    title: 'Quick Revision Opener',
    spokenNarration: shortIntro,
    narrationText: phoneticSanitize(shortIntro),
    onScreenText: `5-MINUTE REVISION SPRINT\n${exam} ${subject}: ${topic}`,
    visualCue: `High-energy countdown title card.`,
    durationSeconds: 15
  });

  return sections;
}
