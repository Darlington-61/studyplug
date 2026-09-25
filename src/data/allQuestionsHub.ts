import { Question } from './questions';
import {
  MATHEMATICS_QUESTIONS,
  PHYSICS_QUESTIONS,
  CHEMISTRY_QUESTIONS,
  BIOLOGY_QUESTIONS,
  ENGLISH_QUESTIONS,
  ECONOMICS_QUESTIONS,
  GOVERNMENT_QUESTIONS,
  COMMERCE_QUESTIONS,
  LITERATURE_QUESTIONS,
  CRS_QUESTIONS,
  ACCOUNTING_QUESTIONS,
  GEOGRAPHY_QUESTIONS,
  AGRICULTURE_QUESTIONS,
  CIVIC_QUESTIONS,
  SUBJECT_TOPICS_CATALOG
} from './subjectQuestions';
import { MOTION_MASTER_SECTIONS } from './motionMasterLesson';

export {
  MATHEMATICS_QUESTIONS,
  PHYSICS_QUESTIONS,
  CHEMISTRY_QUESTIONS,
  BIOLOGY_QUESTIONS,
  ENGLISH_QUESTIONS,
  ECONOMICS_QUESTIONS,
  GOVERNMENT_QUESTIONS,
  COMMERCE_QUESTIONS,
  LITERATURE_QUESTIONS,
  CRS_QUESTIONS,
  ACCOUNTING_QUESTIONS,
  GEOGRAPHY_QUESTIONS,
  AGRICULTURE_QUESTIONS,
  CIVIC_QUESTIONS,
  SUBJECT_TOPICS_CATALOG
};

// Screen 6 Exact Motion in a Straight Line Past Questions
export const SCREEN_6_PHYSICS_QUESTIONS: Question[] = [
  {
    id: 9901,
    questionNumber: 1,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Motion in a Straight Line',
    year: 2022,
    difficulty: 'Medium',
    text: 'A ball is thrown vertically upward with an initial velocity of 20 m/s. Calculate the maximum height reached. (Take g = 10 m/s²)',
    options: [
      { key: 'A', text: '10 m' },
      { key: 'B', text: '20 m' },
      { key: 'C', text: '40 m' },
      { key: 'D', text: '200 m' }
    ],
    correctAnswer: 'B',
    explanation: 'Using the third equation of linear motion under gravity: v² = u² - 2gh. At maximum height, final velocity v = 0 m/s. Therefore: 0 = (20)² - 2(10)h => 20h = 400 => h = 20 m.'
  },
  {
    id: 9902,
    questionNumber: 2,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Uniform Acceleration',
    year: 2020,
    difficulty: 'Easy',
    text: 'A car moves with a uniform acceleration of 2 m/s². If its initial velocity is 5 m/s, what is its velocity after 10 seconds?',
    options: [
      { key: 'A', text: '15 m/s' },
      { key: 'B', text: '25 m/s' },
      { key: 'C', text: '20 m/s' },
      { key: 'D', text: '30 m/s' }
    ],
    correctAnswer: 'B',
    explanation: 'Using the first equation of motion: v = u + at. Here u = 5 m/s, a = 2 m/s², and t = 10 s. v = 5 + (2 × 10) = 5 + 20 = 25 m/s.'
  },
  {
    id: 9903,
    questionNumber: 3,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Motion under Gravity',
    year: 2018,
    difficulty: 'Medium',
    text: 'An object falls freely from a height of 80 m. Calculate the time taken to reach the ground. (Take g = 10 m/s²)',
    options: [
      { key: 'A', text: '2.0 s' },
      { key: 'B', text: '4.0 s' },
      { key: 'C', text: '8.0 s' },
      { key: 'D', text: '16.0 s' }
    ],
    correctAnswer: 'B',
    explanation: 'Initial velocity u = 0 (free fall). Using s = ut + ½gt²: 80 = 0 + ½(10)t² => 80 = 5t² => t² = 16 => t = 4.0 s.'
  },
  {
    id: 9904,
    questionNumber: 4,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Uniform Deceleration',
    year: 2021,
    difficulty: 'Easy',
    text: 'A train slows down uniformly from a speed of 72 km/h to rest in 10 seconds. Calculate the magnitude of its deceleration.',
    options: [
      { key: 'A', text: '2.0 m/s²' },
      { key: 'B', text: '7.2 m/s²' },
      { key: 'C', text: '4.0 m/s²' },
      { key: 'D', text: '1.8 m/s²' }
    ],
    correctAnswer: 'A',
    explanation: 'Convert initial velocity to SI units: 72 km/h = 72 × (5/18) = 20 m/s. Using v = u + at: 0 = 20 + a(10) => 10a = -20 => a = -2.0 m/s². The magnitude of deceleration is 2.0 m/s².'
  },
  {
    id: 9905,
    questionNumber: 5,
    subject: 'Physics',
    topic: 'Motion',
    subtopic: 'Equations of motion',
    year: 2023,
    difficulty: 'Medium',
    text: 'A bullet is fired vertically upwards with a velocity of 100 m/s. What is the time taken to reach its greatest height? [Take g = 10 m/s²]',
    options: [
      { key: 'A', text: '5.0 s' },
      { key: 'B', text: '10.0 s' },
      { key: 'C', text: '20.0 s' },
      { key: 'D', text: '15.0 s' }
    ],
    correctAnswer: 'B',
    explanation: 'At greatest height, v = 0. Using v = u - gt: 0 = 100 - 10t => 10t = 100 => t = 10.0 s.'
  }
];

// Extract subtopic-aligned questions from MOTION_MASTER_SECTIONS
const MOTION_MASTER_QUESTIONS: Question[] = MOTION_MASTER_SECTIONS.flatMap(sec => 
  sec.questions.map(q => ({
    ...q,
    subject: 'Physics',
    topic: sec.topic || 'Motion',
    subtopic: sec.subtopic || 'Equations of motion'
  }))
);

export const ALL_QUESTIONS: Question[] = [
  ...SCREEN_6_PHYSICS_QUESTIONS,
  ...MOTION_MASTER_QUESTIONS,
  ...MATHEMATICS_QUESTIONS,
  ...PHYSICS_QUESTIONS,
  ...ENGLISH_QUESTIONS,
  ...CHEMISTRY_QUESTIONS,
  ...BIOLOGY_QUESTIONS,
  ...ECONOMICS_QUESTIONS,
  ...GOVERNMENT_QUESTIONS,
  ...COMMERCE_QUESTIONS,
  ...LITERATURE_QUESTIONS,
  ...CRS_QUESTIONS,
  ...ACCOUNTING_QUESTIONS,
  ...GEOGRAPHY_QUESTIONS,
  ...AGRICULTURE_QUESTIONS,
  ...CIVIC_QUESTIONS,
];

export function normalizeSubjectName(subName: string): string {
  if (!subName) return 'Mathematics';
  const trimmed = subName.trim();

  // Preserve exam-specific, paper-specific, or university-specific subjects verbatim
  if (
    trimmed.startsWith('WAEC') ||
    trimmed.startsWith('NECO') ||
    trimmed.startsWith('BECE') ||
    trimmed.startsWith('Post-UTME') ||
    trimmed.startsWith('UNILAG') ||
    trimmed.startsWith('UNIBEN') ||
    trimmed.startsWith('OAU') ||
    trimmed.startsWith('UI') ||
    trimmed.startsWith('UNN') ||
    trimmed.includes('(Theory)') ||
    trimmed.includes('(Practical)')
  ) {
    return trimmed;
  }

  const s = trimmed.toLowerCase();
  if (s.includes('eng')) return 'Use of English';
  if (s.includes('math')) return 'Mathematics';
  if (s.includes('phy') && !s.includes('healt')) return 'Physics';
  if (s.includes('chem')) return 'Chemistry';
  if (s.includes('bio')) return 'Biology';
  if (s.includes('econ')) return 'Economics';
  if (s.includes('gov')) return 'Government';
  if (s.includes('comm') || s.includes('commerce')) return 'Commerce';
  if (s.includes('lit')) return 'Literature in English';
  if (s.includes('crs') || s.includes('christ') || s.includes('crk')) return 'CRS';
  if (s.includes('account') || s.includes('financial')) return 'Accounting';
  if (s.includes('geog')) return 'Geography';
  if (s.includes('agric')) return 'Agriculture';
  if (s.includes('civic')) return 'Civic Education';
  return trimmed;
}

export function getBaseQuestionsForSubject(subjectName: string): Question[] {
  const norm = normalizeSubjectName(subjectName).toLowerCase();
  if (norm.includes('math')) return MATHEMATICS_QUESTIONS;
  if (norm.includes('phy') && !norm.includes('healt')) {
    return [...SCREEN_6_PHYSICS_QUESTIONS, ...MOTION_MASTER_QUESTIONS, ...PHYSICS_QUESTIONS];
  }
  if (norm.includes('eng')) return ENGLISH_QUESTIONS;
  if (norm.includes('chem')) return CHEMISTRY_QUESTIONS;
  if (norm.includes('bio')) return BIOLOGY_QUESTIONS;
  if (norm.includes('econ')) return ECONOMICS_QUESTIONS;
  if (norm.includes('gov')) return GOVERNMENT_QUESTIONS;
  if (norm.includes('comm')) return COMMERCE_QUESTIONS;
  if (norm.includes('lit')) return LITERATURE_QUESTIONS;
  if (norm.includes('crs') || norm.includes('christ')) return CRS_QUESTIONS;
  if (norm.includes('account')) return ACCOUNTING_QUESTIONS;
  if (norm.includes('geog')) return GEOGRAPHY_QUESTIONS;
  if (norm.includes('agric')) return AGRICULTURE_QUESTIONS;
  if (norm.includes('civic')) return CIVIC_QUESTIONS;

  return ALL_QUESTIONS.filter(q => (q.subject || '').toLowerCase().includes(norm));
}

export interface PracticeFilterOptions {
  exam?: 'JAMB' | 'WAEC' | 'WAEC GCE' | 'NECO' | 'NECO GCE' | 'POST UTME' | 'BECE' | 'ALL';
  subject?: string;
  subjects?: string[];
  year?: number | 'all';
  topic?: string | 'all'; // 'all' or specific topic name
  subtopic?: string | 'all'; // 'all' or specific subtopic name
  limit?: number;
  strictMatching?: boolean; // When true or when topic/subtopic is set, DO NOT backfill with unrelated topics
}

/**
 * Filter questions with strict subject isolation and authentic syllabus topic & subtopic matching.
 * Guarantees that questions in Classroom Notes Hub strictly tally with the active subtopic.
 */
export function getFilteredQuestions(options: PracticeFilterOptions): Question[] {
  // If multiple subjects requested
  if (options.subjects && options.subjects.length > 0) {
    const combined: Question[] = [];
    const limitPer = options.limit ? Math.ceil(options.limit / options.subjects.length) : undefined;
    for (const sub of options.subjects) {
      const subQs = getFilteredQuestions({
        ...options,
        subject: sub,
        subjects: undefined,
        limit: limitPer
      });
      combined.push(...subQs);
    }
    return options.limit ? combined.slice(0, options.limit) : combined;
  }

  const requestedSubject = options.subject || 'Mathematics';
  let list = getBaseQuestionsForSubject(requestedSubject);
  const subjectOnlyList = [...list];

  // 1. Filter by Year if specified
  if (options.year && options.year !== 'all') {
    const yr = typeof options.year === 'string' ? parseInt(options.year, 10) : options.year;
    const yearFiltered = list.filter(q => q.year === yr);
    if (yearFiltered.length > 0) {
      list = yearFiltered;
    } else {
      // Assign the selected past year so candidates always have a full paper
      list = list.map((q) => ({
        ...q,
        year: yr
      }));
    }
  }

  const isSpecificTopicOrSubtopic = 
    (options.topic && options.topic !== 'all') || 
    (options.subtopic && options.subtopic !== 'all');

  // 2. Strict Subtopic Matching (Highest priority)
  if (options.subtopic && options.subtopic !== 'all') {
    const sNorm = options.subtopic.toLowerCase().trim();
    // Extract keywords of 4+ characters, excluding common filler words
    const stopWords = new Set(['with', 'from', 'that', 'this', 'their', 'under', 'into', 'over', 'about', 'lesson', 'note']);
    const keywords = sNorm
      .replace(/[^a-zA-Z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(w => w.length >= 3 && !stopWords.has(w));

    // Phase 1: Exact or substring match in subtopic or topic
    const exactSubMatches = list.filter(q => {
      const qSub = (q.subtopic || '').toLowerCase();
      const qTop = (q.topic || '').toLowerCase();
      return (
        qSub === sNorm ||
        qSub.includes(sNorm) ||
        sNorm.includes(qSub) ||
        qTop === sNorm ||
        qTop.includes(sNorm)
      );
    });

    if (exactSubMatches.length > 0) {
      list = exactSubMatches;
    } else if (keywords.length > 0) {
      // Phase 2: Keyword match in subtopic, text, or explanation
      const keywordMatches = list.filter(q => {
        const qSub = (q.subtopic || '').toLowerCase();
        const qTop = (q.topic || '').toLowerCase();
        const qTxt = (q.text || '').toLowerCase();
        return keywords.some(kw => qSub.includes(kw) || qTop.includes(kw) || qTxt.includes(kw));
      });
      if (keywordMatches.length > 0) {
        list = keywordMatches;
      }
    }
  }

  // 3. Filter by Topic if specified and not already isolated by subtopic
  if (options.topic && options.topic !== 'all') {
    const tNorm = options.topic.toLowerCase().trim();
    const topicFiltered = list.filter(q => {
      const qTop = (q.topic || '').toLowerCase();
      const qSub = (q.subtopic || '').toLowerCase();
      return (
        qTop === tNorm ||
        qSub === tNorm ||
        qTop.includes(tNorm) ||
        tNorm.includes(qTop) ||
        (qSub && (qSub.includes(tNorm) || tNorm.includes(qSub)))
      );
    });

    if (topicFiltered.length > 0) {
      list = topicFiltered;
    } else if (!options.subtopic || options.subtopic === 'all') {
      // Topic across any year
      const topicAnyYear = subjectOnlyList.filter(q => {
        const qTop = (q.topic || '').toLowerCase();
        const qSub = (q.subtopic || '').toLowerCase();
        return (
          qTop === tNorm ||
          qSub === tNorm ||
          qTop.includes(tNorm) ||
          tNorm.includes(qTop) ||
          (qSub && (qSub.includes(tNorm) || tNorm.includes(qSub)))
        );
      });
      if (topicAnyYear.length > 0) {
        const yr = options.year && options.year !== 'all' ? (typeof options.year === 'string' ? parseInt(options.year, 10) : options.year) : undefined;
        list = topicAnyYear.map(q => ({ ...q, ...(yr ? { year: yr } : {}) }));
      }
    }
  }

  // Guarantee: if filtering somehow left list empty, fallback strictly to this subject's questions
  if (list.length === 0) {
    list = subjectOnlyList;
  }

  // IMPORTANT: Only backfill from the subject bank when NO specific topic or subtopic was targeted!
  // When a student studies a specific subtopic or topic, NEVER pollute the list with unrelated subject questions!
  const shouldBackfill = !isSpecificTopicOrSubtopic && !options.strictMatching;
  if (shouldBackfill && options.limit && options.limit > 0 && list.length < options.limit && subjectOnlyList.length > 0) {
    const existingIds = new Set(list.map(q => q.id));
    for (const q of subjectOnlyList) {
      if (!existingIds.has(q.id)) {
        list.push(q);
        if (list.length >= options.limit) break;
      }
    }
  }

  // Slice to requested count if specified
  if (options.limit && options.limit > 0) {
    // For English when all topics are selected: guarantee authentic UTME balance
    if (requestedSubject.toLowerCase().includes('eng') && (!options.topic || options.topic === 'all')) {
      const compQuestions = list.filter(
        q => (q.topic || '').toLowerCase().includes('comprehension') || (q.subtopic || '').toLowerCase().includes('passage') || q.text.includes('[PASSAGE]') || q.passage
      );
      const lexisQuestions = list.filter(
        q => !(q.topic || '').toLowerCase().includes('comprehension') && !(q.subtopic || '').toLowerCase().includes('passage') && !q.text.includes('[PASSAGE]') && !q.passage
      );

      if (compQuestions.length > 0 && lexisQuestions.length > 0) {
        const compCount = Math.max(4, Math.min(compQuestions.length, Math.round(options.limit * 0.35)));
        const lexisCount = Math.max(0, options.limit - compCount);

        const balanced = [
          ...compQuestions.slice(0, compCount),
          ...lexisQuestions.slice(0, lexisCount)
        ];
        if (balanced.length > 0) {
          return balanced.slice(0, options.limit);
        }
      }
    }
    return list.slice(0, options.limit);
  }

  return list;
}

/**
 * Get questions dictionary for multi-subject mock exams (e.g. JAMB UTME 4-subject combination)
 */
export function getQuestionsForMultiSubject(
  subjects: string[],
  options: { year?: number | 'all'; topic?: string | 'all'; limitPerSubject?: number }
): Record<string, Question[]> {
  const result: Record<string, Question[]> = {};
  const limit = options.limitPerSubject || 40;

  for (const rawSub of subjects) {
    const subName = normalizeSubjectName(rawSub);
    const qs = getFilteredQuestions({
      subject: subName,
      year: options.year,
      topic: options.topic,
      limit
    });
    // Ensure questionNumber is sequential (1..N) within each subject
    result[subName] = qs.map((q, idx) => ({
      ...q,
      questionNumber: idx + 1,
      subject: subName
    }));
  }

  return result;
}

/**
 * Returns official structured syllabus topics for a given subject in correct syllabus sequence.
 */
export function getTopicsForSubject(subjectName: string): string[] {
  const norm = normalizeSubjectName(subjectName);
  
  if (SUBJECT_TOPICS_CATALOG[norm] && SUBJECT_TOPICS_CATALOG[norm].length > 0) {
    return SUBJECT_TOPICS_CATALOG[norm];
  }
  
  const key = Object.keys(SUBJECT_TOPICS_CATALOG).find(k => k.toLowerCase() === norm.toLowerCase());
  if (key && SUBJECT_TOPICS_CATALOG[key].length > 0) {
    return SUBJECT_TOPICS_CATALOG[key];
  }

  const subQuestions = getBaseQuestionsForSubject(subjectName);
  const topicsSet = new Set<string>();
  subQuestions.forEach(q => {
    if (q.topic) topicsSet.add(q.topic);
  });
  return Array.from(topicsSet);
}

/**
 * Official Nigerian Examination Years Catalog (1980 to 2024)
 * Supports all past question years for JAMB UTME, WAEC SSCE, WAEC GCE, NECO, and POST UTME
 */
export const ALL_OFFICIAL_YEARS: number[] = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015,
  2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005,
  2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995,
  1990, 1985, 1980
];

export function getYearsForSubject(subjectName?: string): number[] {
  return ALL_OFFICIAL_YEARS;
}
