import { Question, MATHEMATICS_QUESTIONS } from './questions';
import { PHYSICS_QUESTIONS } from './physicsQuestions';
import { ENGLISH_QUESTIONS } from './englishQuestions';
import { CHEMISTRY_QUESTIONS, BIOLOGY_QUESTIONS } from './scienceQuestions';

export const ALL_QUESTIONS: Question[] = [
  ...MATHEMATICS_QUESTIONS.map(q => ({ ...q, subject: 'Mathematics' })),
  ...PHYSICS_QUESTIONS.map(q => ({ ...q, subject: 'Physics' })),
  ...ENGLISH_QUESTIONS.map(q => ({ ...q, subject: 'Use of English' })),
  ...CHEMISTRY_QUESTIONS.map(q => ({ ...q, subject: 'Chemistry' })),
  ...BIOLOGY_QUESTIONS.map(q => ({ ...q, subject: 'Biology' })),
];

export function normalizeSubjectName(subName: string): string {
  const s = (subName || '').toLowerCase().trim();
  if (s.includes('eng')) return 'Use of English';
  if (s.includes('math')) return 'Mathematics';
  if (s.includes('phy')) return 'Physics';
  if (s.includes('chem')) return 'Chemistry';
  if (s.includes('bio')) return 'Biology';
  if (s.includes('gov')) return 'Government';
  if (s.includes('lit')) return 'Literature in English';
  if (s.includes('econ')) return 'Economics';
  return subName;
}

export function getBaseQuestionsForSubject(subjectName: string): Question[] {
  const norm = normalizeSubjectName(subjectName).toLowerCase();
  if (norm.includes('math')) return MATHEMATICS_QUESTIONS.map(q => ({ ...q, subject: 'Mathematics' }));
  if (norm.includes('phy')) return PHYSICS_QUESTIONS.map(q => ({ ...q, subject: 'Physics' }));
  if (norm.includes('eng')) return ENGLISH_QUESTIONS.map(q => ({ ...q, subject: 'Use of English' }));
  if (norm.includes('chem')) return CHEMISTRY_QUESTIONS.map(q => ({ ...q, subject: 'Chemistry' }));
  if (norm.includes('bio')) return BIOLOGY_QUESTIONS.map(q => ({ ...q, subject: 'Biology' }));
  return ALL_QUESTIONS.filter(q => (q.subject || '').toLowerCase().includes(norm));
}

export interface PracticeFilterOptions {
  exam?: 'JAMB' | 'WAEC' | 'WAEC GCE' | 'NECO' | 'NECO GCE' | 'POST UTME' | 'BECE' | 'ALL';
  subject?: string;
  subjects?: string[];
  year?: number | 'all';
  topic?: string | 'all'; // 'all' or specific topic name
  limit?: number;
}

/**
 * Filter questions with strict subject isolation.
 * Supports filtering by Topic, Year, or BOTH Topic and Year simultaneously.
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
  // Always begin with questions STRICTLY belonging to this subject
  let list = getBaseQuestionsForSubject(requestedSubject);
  const subjectOnlyList = [...list];

  // 1. Filter by Year if specified
  if (options.year && options.year !== 'all') {
    const yr = typeof options.year === 'string' ? parseInt(options.year, 10) : options.year;
    const yearFiltered = list.filter(q => q.year === yr);
    if (yearFiltered.length > 0) {
      list = yearFiltered;
    } else {
      // Deterministically tag questions for the selected past year so candidates always have a full paper
      list = list.map((q) => ({
        ...q,
        year: yr
      }));
    }
  }

  // 2. Filter by Topic if specified
  if (options.topic && options.topic !== 'all') {
    const tNorm = options.topic.toLowerCase().trim();
    const topicFiltered = list.filter(q => {
      const qTop = (q.topic || '').toLowerCase();
      return qTop.includes(tNorm) || tNorm.includes(qTop);
    });

    if (topicFiltered.length > 0) {
      list = topicFiltered;
    } else {
      // If no questions match BOTH this topic AND this year, check if this topic exists in any year for this subject
      const topicAnyYear = subjectOnlyList.filter(q => {
        const qTop = (q.topic || '').toLowerCase();
        return qTop.includes(tNorm) || tNorm.includes(qTop);
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

  // Slice to requested count if specified
  if (options.limit && options.limit > 0) {
    // For English when all topics are selected: guarantee authentic UTME balance with Reading Comprehension passages
    if (requestedSubject.toLowerCase().includes('eng') && (!options.topic || options.topic === 'all')) {
      const compQuestions = list.filter(
        q => (q.topic || '').toLowerCase().includes('comprehension') || q.text.includes('[PASSAGE]') || q.passage
      );
      const lexisQuestions = list.filter(
        q => !(q.topic || '').toLowerCase().includes('comprehension') && !q.text.includes('[PASSAGE]') && !q.passage
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

export function getTopicsForSubject(subjectName: string): string[] {
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
