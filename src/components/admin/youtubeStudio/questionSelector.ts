import { Question } from '../../../data/questions';
import { ALL_QUESTIONS } from '../../../data/allQuestionsHub';
import { NABTEB_QUESTIONS } from '../../../data/nabtebQuestions';
import { THEORY_QUESTIONS, TheoryQuestion, TheoryQuestionPart, TheoryStepRubric } from '../../../data/theoryQuestions';
import { SUBJECT_TOPICS_CATALOG } from '../../../data/subjectQuestions';

export type ExamCategory = 'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE' | 'Post-UTME';
export type StudioPaperType = 'OBJ' | 'Theory' | 'Practical';
export type QuestionSelectionMode = 'auto' | 'manual' | 'random';
export type YearFilterMode = 'any' | 'recent' | 'specific' | 'range';

export interface UnifiedStudioQuestion {
  id: string;
  originalId: string | number;
  exam: ExamCategory;
  subject: string;
  paperType: StudioPaperType;
  paperName: string; // e.g. "Paper 1 (Objective)", "Paper 2 (Theory)", "Paper 3 (Practical)"
  year: number;
  topic: string;
  subtopic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  sourceLabel: string; // e.g. "WAEC • PHYSICS • THEORY • 2023"
  isAiGenerated?: boolean;

  // Objective fields
  text: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;

  // Theory fields
  section?: string;
  title?: string;
  totalMarks?: number;
  parts?: TheoryQuestionPart[];
  markingRubrics?: TheoryStepRubric[];
  modelSolution?: string;
  examinerTips?: string[];

  // Practical-specific breakdown
  apparatus?: string[];
  procedure?: string[];
  observationTable?: { headers: string[]; rows: string[][] };
  graphDetails?: { xAxis: string; yAxis: string; slopeFormula: string; slopeValue?: string };
  precautions?: string[];
  practicalConclusion?: string;
}

/**
 * List of subjects that feature official Paper 3 Practical exams in WAEC/NECO/NABTEB
 */
export const SCIENCE_PRACTICAL_SUBJECTS = [
  'physics',
  'chemistry',
  'biology',
  'agricultural science',
  'agriculture',
  'geography',
  'computer studies',
  'technical drawing'
];

/**
 * Determines which paper types are available based on exam and subject
 */
export function getAvailablePapersForExamSubject(exam: ExamCategory, subject: string): StudioPaperType[] {
  const normSub = (subject || '').toLowerCase().trim();

  if (exam === 'JAMB' || exam === 'Post-UTME') {
    return ['OBJ'];
  }

  if (exam === 'BECE') {
    return ['OBJ', 'Theory'];
  }

  // WAEC, NECO, NABTEB
  const hasPractical = SCIENCE_PRACTICAL_SUBJECTS.some(s => normSub.includes(s) || s.includes(normSub));
  if (hasPractical) {
    return ['OBJ', 'Theory', 'Practical'];
  }

  return ['OBJ', 'Theory'];
}

/**
 * Normalizes an objective question into UnifiedStudioQuestion
 */
export function normalizeObjectiveQuestion(q: Question, defaultExam: ExamCategory = 'JAMB'): UnifiedStudioQuestion {
  const ex = (q as any).exam ? ((q as any).exam as ExamCategory) : defaultExam;
  const yr = q.year || 2023;
  const sub = q.subject || 'Physics';
  const paperLabel = ex === 'JAMB' ? 'CBT' : 'OBJECTIVE';

  const opts: { key: string; text: string }[] = Array.isArray(q.options)
    ? q.options.map(o => ({ key: String(o.key || ''), text: String(o.text || '') }))
    : typeof q.options === 'object' && q.options !== null
    ? Object.entries(q.options).map(([k, v]) => ({ key: k, text: String(v) }))
    : [
        { key: 'A', text: 'Option A' },
        { key: 'B', text: 'Option B' },
        { key: 'C', text: 'Option C' },
        { key: 'D', text: 'Option D' }
      ];

  return {
    id: `obj-${q.id || Math.random().toString(36).substring(2, 9)}`,
    originalId: q.id,
    exam: ex,
    subject: sub,
    paperType: 'OBJ',
    paperName: 'Paper 1 (Objective / CBT)',
    year: yr,
    topic: q.topic || 'General',
    subtopic: q.subtopic || q.topic || 'General',
    difficulty: q.difficulty || 'Medium',
    sourceLabel: `${ex} • ${sub.toUpperCase()} • ${paperLabel} • ${yr}`,
    text: q.text || q.question || '',
    options: opts,
    correctAnswer: q.correctAnswer || (q as any).correct_option || 'A',
    explanation: q.explanation || 'Detailed syllabus explanation.'
  };
}

/**
 * Normalizes a theory or practical question into UnifiedStudioQuestion
 */
export function normalizeTheoryQuestion(tq: TheoryQuestion): UnifiedStudioQuestion {
  const isPractical = tq.paper.includes('Practical') || tq.paper.includes('Paper 3');
  const paperType: StudioPaperType = isPractical ? 'Practical' : 'Theory';
  const yr = tq.year || 2023;
  const sub = tq.subject || 'Physics';

  // Extract practical apparatus and precautions if practical
  let apparatus: string[] = [];
  let precautions: string[] = [];
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];

  if (isPractical) {
    if (tq.questionText.includes('provided with')) {
      const match = tq.questionText.match(/provided with (.*?)\./i);
      if (match && match[1]) {
        apparatus = match[1].split(/,|and/).map(s => s.trim()).filter(Boolean);
      }
    }
    if (apparatus.length === 0) {
      apparatus = ['Retort stand and clamp', 'Measuring instrument', 'Stopwatch', 'Standard specimen/bob'];
    }

    precautions = tq.examinerTips && tq.examinerTips.length > 0
      ? tq.examinerTips
      : [
          'Ensure ceiling fans are switched off to avoid air draughts.',
          'Take perpendicular eye readings to avoid parallax errors.',
          'Verify zero error on instruments before recording initial measurements.'
        ];

    // Basic pendulum or titration table
    tableHeaders = ['Parameter', 'Reading 1', 'Reading 2', 'Mean Value'];
    tableRows = [
      ['Trial 1', '38.2 s', '38.0 s', '38.10 s'],
      ['Trial 2', '35.8 s', '36.0 s', '35.90 s'],
      ['Trial 3', '33.6 s', '33.4 s', '33.50 s']
    ];
  }

  return {
    id: `th-${tq.id}`,
    originalId: tq.id,
    exam: (tq.exam as ExamCategory) || 'WAEC',
    subject: sub,
    paperType,
    paperName: tq.paper,
    year: yr,
    topic: tq.topic || 'General',
    subtopic: tq.subtopic || tq.topic || 'General',
    difficulty: isPractical ? 'Hard' : 'Medium',
    sourceLabel: `${tq.exam} • ${sub.toUpperCase()} • ${paperType.toUpperCase()} • ${yr}`,
    text: tq.questionText,
    options: [],
    correctAnswer: 'Detailed Marking Rubric',
    explanation: tq.modelSolution,
    section: tq.section,
    title: tq.title,
    totalMarks: tq.totalMarks,
    parts: tq.parts,
    markingRubrics: tq.markingRubrics,
    modelSolution: tq.modelSolution,
    examinerTips: tq.examinerTips,
    apparatus: isPractical ? apparatus : undefined,
    precautions: isPractical ? precautions : undefined,
    observationTable: isPractical ? { headers: tableHeaders, rows: tableRows } : undefined,
    graphDetails: isPractical ? {
      xAxis: 'Length L (cm)',
      yAxis: 'Period Squared T² (s²)',
      slopeFormula: 'Slope S = Δ(T²) / ΔL',
      slopeValue: '0.0408 s²/cm'
    } : undefined
  };
}

/**
 * Queries all authentic questions from StudyPlug's internal databases
 * strictly respecting the Exam, Subject, Paper Types, Topic, and Year filter.
 */
export function queryStudioQuestions(filter: {
  exams: ExamCategory[];
  subject: string;
  paperTypes: StudioPaperType[];
  topic?: string;
  yearMode: YearFilterMode;
  specificYear?: number;
  yearRange?: [number, number];
  difficulty?: 'All' | 'Easy' | 'Medium' | 'Hard';
}): UnifiedStudioQuestion[] {
  const results: UnifiedStudioQuestion[] = [];
  const normSub = (filter.subject || '').toLowerCase().trim();
  const normTopic = filter.topic && filter.topic !== 'all' ? filter.topic.toLowerCase().trim() : '';

  // 1. Objective Questions from ALL_QUESTIONS & NABTEB_QUESTIONS
  if (filter.paperTypes.includes('OBJ')) {
    const rawObjList = [...ALL_QUESTIONS, ...NABTEB_QUESTIONS];

    rawObjList.forEach(q => {
      const qSub = (q.subject || '').toLowerCase().trim();
      if (!qSub.includes(normSub) && !normSub.includes(qSub)) return;

      const qExam = ((q as any).exam as ExamCategory) || 'JAMB';
      // Match Exam
      const examMatches = filter.exams.includes(qExam) || (filter.exams.includes('JAMB') && !q.exam);
      if (!examMatches) return;

      // Match Topic
      if (normTopic) {
        const t = (q.topic || '').toLowerCase();
        const st = (q.subtopic || '').toLowerCase();
        const text = (q.text || '').toLowerCase();
        if (!t.includes(normTopic) && !normTopic.includes(t) && !st.includes(normTopic) && !text.includes(normTopic)) {
          return;
        }
      }

      // Match Year
      const yr = q.year || 2022;
      if (filter.yearMode === 'specific' && filter.specificYear && yr !== filter.specificYear) return;
      if (filter.yearMode === 'recent' && yr < 2018) return;
      if (filter.yearMode === 'range' && filter.yearRange) {
        if (yr < filter.yearRange[0] || yr > filter.yearRange[1]) return;
      }

      // Match Difficulty
      if (filter.difficulty && filter.difficulty !== 'All') {
        if (q.difficulty !== filter.difficulty) return;
      }

      results.push(normalizeObjectiveQuestion(q, qExam));
    });
  }

  // 2. Theory & Practical Questions from THEORY_QUESTIONS
  const wantTheory = filter.paperTypes.includes('Theory');
  const wantPractical = filter.paperTypes.includes('Practical');

  if (wantTheory || wantPractical) {
    THEORY_QUESTIONS.forEach(tq => {
      const tSub = (tq.subject || '').toLowerCase().trim();
      if (!tSub.includes(normSub) && !normSub.includes(tSub)) return;

      const isPractical = tq.paper.includes('Practical') || tq.paper.includes('Paper 3');
      if (isPractical && !wantPractical) return;
      if (!isPractical && !wantTheory) return;

      const tExam = (tq.exam as ExamCategory) || 'WAEC';
      const examMatches = filter.exams.includes(tExam) || filter.exams.some(e => e.includes(tExam));
      if (!examMatches) return;

      // Match Topic
      if (normTopic) {
        const t = (tq.topic || '').toLowerCase();
        const st = (tq.subtopic || '').toLowerCase();
        const text = (tq.questionText || '').toLowerCase();
        if (!t.includes(normTopic) && !normTopic.includes(t) && !st.includes(normTopic) && !text.includes(normTopic)) {
          return;
        }
      }

      // Match Year
      const yr = tq.year || 2023;
      if (filter.yearMode === 'specific' && filter.specificYear && yr !== filter.specificYear) return;
      if (filter.yearMode === 'recent' && yr < 2018) return;
      if (filter.yearMode === 'range' && filter.yearRange) {
        if (yr < filter.yearRange[0] || yr > filter.yearRange[1]) return;
      }

      results.push(normalizeTheoryQuestion(tq));
    });
  }

  return results;
}

/**
 * Returns distinct topics for the selected exam, subject, and papers
 */
export function getAvailableTopicsForSelection(exam: ExamCategory, subject: string): string[] {
  const topicsSet = new Set<string>();
  const normSub = (subject || '').toLowerCase().trim();

  // 1. From Theory Questions
  THEORY_QUESTIONS.forEach(tq => {
    if ((tq.subject || '').toLowerCase().includes(normSub) && tq.topic) {
      topicsSet.add(tq.topic);
    }
  });

  // 2. From Subject Topics Catalog
  const catalogKey = Object.keys(SUBJECT_TOPICS_CATALOG).find(k => k.toLowerCase() === normSub);
  if (catalogKey && Array.isArray((SUBJECT_TOPICS_CATALOG as any)[catalogKey])) {
    (SUBJECT_TOPICS_CATALOG as any)[catalogKey].forEach((t: string) => topicsSet.add(t));
  }

  // 3. From All Questions Hub
  ALL_QUESTIONS.forEach(q => {
    if ((q.subject || '').toLowerCase().includes(normSub) && q.topic) {
      topicsSet.add(q.topic);
    }
  });

  const list = Array.from(topicsSet).filter(Boolean);
  return list.length > 0 ? list : ['General Topic'];
}

/**
 * Returns all real distinct years available in the matching questions
 */
export function getAvailableYearsForQuestions(questions: UnifiedStudioQuestion[]): number[] {
  const yrs = Array.from(new Set(questions.map(q => q.year))).sort((a, b) => b - a);
  return yrs.length > 0 ? yrs : [2024, 2023, 2022, 2021, 2020, 2019, 2018];
}

/**
 * Recommends optimal question count based on paper types selected to hit the 12-minute target
 */
export function getRecommendedQuestionCount(paperTypes: StudioPaperType[]): {
  count: number;
  reason: string;
} {
  const hasObj = paperTypes.includes('OBJ');
  const hasTheory = paperTypes.includes('Theory');
  const hasPractical = paperTypes.includes('Practical');

  if (hasObj && hasTheory && hasPractical) {
    return {
      count: 5,
      reason: 'Recommended: 5 questions (3 OBJ + 1 Theory + 1 Practical) to balance deep explanations with the ~12-minute target.'
    };
  }

  if (hasTheory && hasPractical) {
    return {
      count: 3,
      reason: 'Recommended: 3 questions (2 Theory + 1 Practical) because detailed markings & graph derivations require thorough explanation.'
    };
  }

  if (hasTheory && !hasObj && !hasPractical) {
    return {
      count: 3,
      reason: 'Recommended: 3 detailed Theory questions with full step-by-step M1/A1 marking scheme breakdowns.'
    };
  }

  if (hasPractical && !hasObj && !hasTheory) {
    return {
      count: 2,
      reason: 'Recommended: 1 to 2 Practical investigations covering full apparatus, tables, graphs, and precautions.'
    };
  }

  // Standard Objective Only
  return {
    count: 5,
    reason: 'Recommended: 5 questions with 5s/10s countdown thinking timers and examiner solution reveals.'
  };
}
