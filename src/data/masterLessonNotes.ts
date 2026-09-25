// Official JAMB & WAEC Masterclass Syllabus Lesson Notes Database
// Structured by Subject -> Topic -> Subtopics
// Comprehensive FlashLearners Lesson Notes across all 24 Nigerian subjects.

import { COMPREHENSIVE_NOTES } from './comprehensiveNotes/index';

export interface LessonNote {
  id: number;
  subject: string;
  exam_type: string;
  class_level: string;
  topic: string;
  subtopic: string;
  image_url?: string;
  summary_60s: string;
  key_formulas: string;
  content: string;
  pro_tips_95: string;
  syllabus_objectives: string;
  updated_at?: string;
}

/**
 * MASTER_LESSON_NOTES — The complete 1,550+ FlashLearners syllabus notes
 * across all 24 Nigerian senior secondary and basic education subjects.
 */
export const MASTER_LESSON_NOTES: LessonNote[] = COMPREHENSIVE_NOTES;
