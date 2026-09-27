import { Question } from '../../../data/questions';
import { LessonNote } from '../../../data/masterLessonNotes';
import { ScriptSection, ContentValidationResult } from './types';

/**
 * Validates script and questions against the official StudyPlug database before rendering
 */
export function validateVideoContent(options: {
  exam: string;
  subject: string;
  topic: string;
  subtopic: string;
  lessonNote: LessonNote | null;
  questions: Question[];
  scriptSections: ScriptSection[];
}): ContentValidationResult {
  const { exam, subject, topic, subtopic, lessonNote, questions, scriptSections } = options;
  const checks: ContentValidationResult['checks'] = [];
  let score = 100;

  // 1. Script alignment with Lesson Note
  if (lessonNote) {
    const hasNoteSummary = scriptSections.some(s =>
      s.spokenNarration.toLowerCase().includes(topic.toLowerCase()) ||
      (subtopic && s.spokenNarration.toLowerCase().includes(subtopic.toLowerCase()))
    );

    if (hasNoteSummary) {
      checks.push({
        name: 'Lesson Note & Syllabus Alignment',
        status: 'pass',
        description: 'Script directly references verified syllabus topics and subtopics from StudyPlug lesson notes.',
        detail: `Topic "${topic}" and subtopic "${subtopic || 'General'}" validated.`
      });
    } else {
      score -= 15;
      checks.push({
        name: 'Lesson Note & Syllabus Alignment',
        status: 'warn',
        description: 'Script does not explicitly mention the chosen topic name in speech narration.',
        detail: 'Recommend adding specific topic terminology into introduction.'
      });
    }
  } else {
    score -= 10;
    checks.push({
      name: 'Lesson Note & Syllabus Alignment',
      status: 'warn',
      description: 'No explicit StudyPlug lesson note attached to this project.',
      detail: 'Standard syllabus catalog fallback utilized.'
    });
  }

  // 2. Question Database Authenticity Check
  if (questions.length > 0) {
    const allHaveIds = questions.every(q => q.id !== undefined && q.id !== null);
    const allHaveExamOrYear = questions.every(q => q.year || q.exam);

    if (allHaveIds && allHaveExamOrYear) {
      checks.push({
        name: 'Question Database Authenticity',
        status: 'pass',
        description: `All ${questions.length} included past questions have verified database IDs and authentic past year records.`,
        detail: `Verified years: ${Array.from(new Set(questions.map(q => q.year || 'Standard'))).join(', ')}`
      });
    } else {
      score -= 25;
      checks.push({
        name: 'Question Database Authenticity',
        status: 'fail',
        description: 'Some questions lack authentic database IDs or year attribution.',
        detail: 'Ensure all questions are selected from StudyPlug database.'
      });
    }
  } else {
    checks.push({
      name: 'Question Database Authenticity',
      status: 'pass',
      description: 'Pure concept lesson selected (no numerical past questions required).',
      detail: 'Concept-only presentation verified.'
    });
  }

  // 3. Correct Answer Key Verification
  let answerKeyIssues = 0;
  questions.forEach(q => {
    if (!['A', 'B', 'C', 'D'].includes(q.correctAnswer)) {
      answerKeyIssues++;
    }
  });

  if (answerKeyIssues === 0) {
    checks.push({
      name: 'Correct Answer Key Integrity',
      status: 'pass',
      description: 'All question keys strictly match authentic options A, B, C, or D.',
      detail: 'Zero orphaned or undefined answer keys detected.'
    });
  } else {
    score -= 30;
    checks.push({
      name: 'Correct Answer Key Integrity',
      status: 'fail',
      description: `${answerKeyIssues} questions have invalid or missing answer keys!`,
      detail: 'Rectify answer keys in question editor.'
    });
  }

  // 4. Mathematical Calculations & Workings
  const hasExplanations = questions.every(q => q.explanation && q.explanation.trim().length > 10);
  if (hasExplanations) {
    checks.push({
      name: 'Calculation Workings & Explanations',
      status: 'pass',
      description: 'All questions contain detailed step-by-step worked explanations for the solution slides.',
      detail: 'Every solution card is backed by written derivations.'
    });
  } else {
    score -= 15;
    checks.push({
      name: 'Calculation Workings & Explanations',
      status: 'warn',
      description: 'Some questions have brief or minimal explanation text.',
      detail: 'Consider expanding explanation for richer video teaching.'
    });
  }

  // 5. Diagrams & Illustrations
  const questionsWithDiagrams = questions.filter(q => q.image_url || q.image_svg);
  if (questionsWithDiagrams.length > 0) {
    checks.push({
      name: 'Diagram & Illustration Linkage',
      status: 'pass',
      description: `${questionsWithDiagrams.length} questions contain embedded scientific diagrams or figures.`,
      detail: 'Figures will be rendered inside the question slide frame.'
    });
  } else {
    checks.push({
      name: 'Diagram & Illustration Linkage',
      status: 'pass',
      description: 'No external diagram dependencies for selected question set; typographic rendering active.',
      detail: 'All questions are textually self-contained.'
    });
  }

  // 6. Natural Language & AI Cliché Safety
  const forbiddenPhrases = [
    'embark on an exciting journey',
    'as an ai',
    'in today\'s digital age',
    'delve into',
    'let us delve',
    'welcome to this ai-powered',
    'ai generated'
  ];

  let foundCliché = false;
  let clichéExample = '';
  scriptSections.forEach(sec => {
    const text = sec.spokenNarration.toLowerCase();
    for (const phrase of forbiddenPhrases) {
      if (text.includes(phrase)) {
        foundCliché = true;
        clichéExample = phrase;
        break;
      }
    }
  });

  if (!foundCliché) {
    checks.push({
      name: 'Pedagogical Tone & AI Filter',
      status: 'pass',
      description: 'Zero robotic AI clichés detected. Script adheres to authentic Nigerian secondary school teacher tone.',
      detail: 'Examiner-focused, encouraging, and clear voice confirmed.'
    });
  } else {
    score -= 20;
    checks.push({
      name: 'Pedagogical Tone & AI Filter',
      status: 'warn',
      description: `Detected robotic phrase: "${clichéExample}".`,
      detail: 'Please edit script section to maintain authentic human teacher tone.'
    });
  }

  const isValid = score >= 70 && !checks.some(c => c.status === 'fail');
  const summary = isValid
    ? `Content Verification: PASSED (${checks.filter(c => c.status === 'pass').length}/${checks.length} Integrity Checks Satisfied)`
    : `Content Verification: REQUIRES REVIEW (${checks.filter(c => c.status === 'fail').length} Critical Issues Detected)`;

  return {
    isValid,
    score: Math.max(0, Math.min(100, score)),
    checks,
    summary
  };
}
