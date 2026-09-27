import { SYLLABUS_DATABASE, SyllabusTopicItem } from '../../../data/syllabusStructure';
import { COMPREHENSIVE_NOTES } from '../../../data/comprehensiveNotes';
import { LessonNote } from '../../../data/masterLessonNotes';
import { SUBJECT_TOPICS_CATALOG } from '../../../data/subjectQuestions';
import { ExamCategory } from './types';

/**
 * Syllabus-First Workflow Manager
 * Handles official syllabus navigation:
 * Exam Syllabus -> Subject -> Syllabus Section -> Topic -> Subtopics -> Lesson Note
 */

/**
 * Standard list of JAMB subjects supported by StudyPlug
 */
export const ALL_JAMB_SUBJECTS: string[] = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'English Language',
  'Literature in English',
  'Economics',
  'Government',
  'Commerce',
  'Financial Accounting',
  'Geography',
  'Agricultural Science',
  'Christian Religious Studies',
  'Islamic Religious Studies',
  'Civic Education',
  'Computer Studies',
  'History'
];

/**
 * Returns available subjects for the specified examination body
 */
export function getAvailableSubjectsForExam(exam: ExamCategory): string[] {
  if (exam === 'JAMB') {
    return ALL_JAMB_SUBJECTS;
  }
  return [
    'Physics',
    'Mathematics',
    'Chemistry',
    'Biology',
    'English Language',
    'Economics',
    'Government',
    'Literature in English',
    'Commerce',
    'Financial Accounting',
    'Agricultural Science',
    'Geography',
    'Civic Education',
    'Computer Studies',
    'Christian Religious Studies',
    'Islamic Religious Studies'
  ];
}

/**
 * Normalizes subject names across various database schemas
 */
export function normalizeStudioSubject(subject: string): string {
  const s = (subject || '').trim().toLowerCase();
  if (s.includes('math')) return 'Mathematics';
  if (s.includes('phys')) return 'Physics';
  if (s.includes('chem')) return 'Chemistry';
  if (s.includes('bio')) return 'Biology';
  if (s.includes('lit')) return 'Literature in English';
  if (s.includes('eng')) return 'English Language';
  if (s.includes('econ')) return 'Economics';
  if (s.includes('gov')) return 'Government';
  if (s.includes('civic')) return 'Civic Education';
  if (s.includes('comm')) return 'Commerce';
  if (s.includes('acc')) return 'Financial Accounting';
  if (s.includes('agric')) return 'Agricultural Science';
  if (s.includes('geo')) return 'Geography';
  if (s.includes('crs') || s.includes('christian')) return 'Christian Religious Studies';
  if (s.includes('irs') || s.includes('irk') || s.includes('islam')) return 'Islamic Religious Studies';
  if (s.includes('comp')) return 'Computer Studies';
  if (s.includes('hist')) return 'History';
  return subject;
}

/**
 * Retrieves official syllabus sections for the selected exam and subject.
 * Example: ["SECTION I: NUMBER AND NUMERATION", "SECTION II: ALGEBRA", ...]
 */
export function getSyllabusSections(exam: ExamCategory, subject: string): string[] {
  const normSub = normalizeStudioSubject(subject);
  const examDb = SYLLABUS_DATABASE[exam] || SYLLABUS_DATABASE['JAMB'];

  if (examDb && examDb[normSub]) {
    const rawSections = examDb[normSub].map(item => item.section).filter(Boolean);
    const unique = Array.from(new Set(rawSections));
    if (unique.length > 0) return unique;
  }

  // Fallback: Check WAEC if JAMB key is not populated
  if (SYLLABUS_DATABASE['WAEC'] && SYLLABUS_DATABASE['WAEC'][normSub]) {
    const rawSections = SYLLABUS_DATABASE['WAEC'][normSub].map(item => item.section).filter(Boolean);
    const unique = Array.from(new Set(rawSections));
    if (unique.length > 0) return unique;
  }

  // Derive from comprehensive notes class levels or syllabus units
  const notes = COMPREHENSIVE_NOTES.filter(n => normalizeStudioSubject(n.subject) === normSub);
  if (notes.length > 0) {
    const classLevels = Array.from(new Set(notes.map(n => n.class_level || 'Syllabus Core Units')));
    return classLevels.length > 0 ? classLevels : ['General Syllabus Units'];
  }

  return ['General Syllabus Units'];
}

/**
 * Retrieves topics under a specific syllabus section
 */
export function getSyllabusTopicsForSection(
  exam: ExamCategory,
  subject: string,
  section: string
): string[] {
  const normSub = normalizeStudioSubject(subject);
  const examDb = SYLLABUS_DATABASE[exam] || SYLLABUS_DATABASE['JAMB'];

  if (examDb && examDb[normSub]) {
    const matching = examDb[normSub]
      .filter(item => !section || section === 'ALL' || item.section === section)
      .map(item => item.title);
    if (matching.length > 0) {
      return Array.from(new Set(matching));
    }
  }

  // Fallback: Check SUBJECT_TOPICS_CATALOG
  if (SUBJECT_TOPICS_CATALOG[normSub]) {
    return SUBJECT_TOPICS_CATALOG[normSub];
  }

  // Fallback: Extract from COMPREHENSIVE_NOTES
  const notes = COMPREHENSIVE_NOTES.filter(n => normalizeStudioSubject(n.subject) === normSub);
  if (notes.length > 0) {
    return Array.from(new Set(notes.map(n => n.topic)));
  }

  return ['Core Principles'];
}

/**
 * Retrieves all official subtopics for a given topic
 */
export function getSubtopicsForTopic(
  exam: ExamCategory,
  subject: string,
  topic: string
): string[] {
  const normSub = normalizeStudioSubject(subject);
  const normTop = (topic || '').toLowerCase().trim();

  // 1. Check COMPREHENSIVE_NOTES for actual subtopics
  const matchingNotes = COMPREHENSIVE_NOTES.filter(
    n =>
      normalizeStudioSubject(n.subject) === normSub &&
      (n.topic.toLowerCase().includes(normTop) || normTop.includes(n.topic.toLowerCase()))
  );

  const subtopics = matchingNotes.map(n => n.subtopic).filter(Boolean);
  if (subtopics.length > 0) {
    return Array.from(new Set(subtopics));
  }

  // 2. Parse syllabus objectives from matching note if available
  const singleNote = COMPREHENSIVE_NOTES.find(
    n => normalizeStudioSubject(n.subject) === normSub && n.topic.toLowerCase().includes(normTop)
  );

  if (singleNote && singleNote.syllabus_objectives) {
    const parsed = singleNote.syllabus_objectives
      .split(/[;\n•]/)
      .map(s => s.trim())
      .filter(s => s.length > 5 && s.length < 90);
    if (parsed.length > 0) {
      return Array.from(new Set(parsed));
    }
  }

  // 3. Fallback standard pedagogical progression subtopics
  return [
    `Principles and Definitions of ${topic}`,
    `Governing Rules and Mechanisms`,
    `Worked Demonstrations & Examples`,
    `Examiner Traps & Common Errors`,
    `JAMB Past Questions & Speed Shortcuts`
  ];
}

/**
 * Finds the authentic StudyPlug lesson note corresponding to subject, topic, and subtopic
 */
export function getMatchingLessonNote(
  subject: string,
  topic: string,
  subtopic?: string
): LessonNote | null {
  const normSub = normalizeStudioSubject(subject);
  const normTop = (topic || '').toLowerCase().trim();
  const normSubtop = (subtopic || '').toLowerCase().trim();

  // Exact subtopic match
  if (normSubtop) {
    const exactSub = COMPREHENSIVE_NOTES.find(
      n =>
        normalizeStudioSubject(n.subject) === normSub &&
        n.subtopic &&
        n.subtopic.toLowerCase() === normSubtop
    );
    if (exactSub) return exactSub;
  }

  // Topic match
  const topicMatch = COMPREHENSIVE_NOTES.find(
    n =>
      normalizeStudioSubject(n.subject) === normSub &&
      (n.topic.toLowerCase() === normTop ||
        n.topic.toLowerCase().includes(normTop) ||
        normTop.includes(n.topic.toLowerCase()))
  );
  if (topicMatch) return topicMatch;

  // Partial match in subtopic
  const partialMatch = COMPREHENSIVE_NOTES.find(
    n =>
      normalizeStudioSubject(n.subject) === normSub &&
      n.subtopic &&
      (n.subtopic.toLowerCase().includes(normTop) || normTop.includes(n.subtopic.toLowerCase()))
  );
  if (partialMatch) return partialMatch;

  // General subject fallback note
  const anySubjectNote = COMPREHENSIVE_NOTES.find(
    n => normalizeStudioSubject(n.subject) === normSub
  );

  return anySubjectNote || null;
}
