/**
 * StudyPlug Comprehensive Notes Index
 * ====================================
 * Combines all subject-specific researched note files.
 * Each subject file is added here as research agents complete their work.
 *
 * Source tracking: ./_sources.json  (dev reference only — NOT bundled)
 * Pipeline: Online Research → subject.ts → index.ts → masterLessonNotes.ts
 */

import { LessonNote } from '../masterLessonNotes';

// ─── Subject files are imported below as they are created ───────────────────

import { PHYSICS_NOTES }     from './physics';
import { MATHEMATICS_NOTES } from './mathematics';
import { CHEMISTRY_NOTES }   from './chemistry';
import { BIOLOGY_NOTES }     from './biology';
import { ENGLISH_NOTES }     from './english';

// ─── Assembled Export ────────────────────────────────────────────────────────
export const COMPREHENSIVE_NOTES: LessonNote[] = [
  ...PHYSICS_NOTES,
  ...MATHEMATICS_NOTES,
  ...CHEMISTRY_NOTES,
  ...BIOLOGY_NOTES,
  ...ENGLISH_NOTES,
];


