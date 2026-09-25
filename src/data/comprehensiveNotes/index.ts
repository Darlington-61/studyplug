/**
 * StudyPlug Comprehensive Notes Index
 * ====================================
 * Combines all subject lesson notes extracted from FlashLearners + StudyPlug Handcrafted Master Notes.
 */

import { LessonNote } from '../masterLessonNotes';

// ─── Subject Files ───────────────────────────────────────────────────────────
import { ENGLISH_NOTES } from './english';
import { MATHEMATICS_NOTES } from './mathematics';
import { PHYSICS_NOTES } from './physics';
import { CHEMISTRY_NOTES } from './chemistry';
import { BIOLOGY_NOTES } from './biology';
import { ECONOMICS_NOTES } from './economics';
import { GOVERNMENT_NOTES } from './government';
import { LITERATURE_NOTES } from './literature';
import { COMMERCE_NOTES } from './commerce';
import { AGRICULTURE_NOTES } from './agriculture';
import { GEOGRAPHY_NOTES } from './geography';
import { HISTORY_NOTES } from './history';
import { ACCOUNTING_NOTES } from './accounting';
import { CRS_NOTES } from './crs';
import { IRK_NOTES } from './irk';
import { MARKETING_NOTES } from './marketing';
import { CIVIC_NOTES } from './civic';
import { BASIC_SCIENCE_NOTES } from './basicScience';
import { BASIC_TECH_NOTES } from './basicTech';
import { SOCIAL_STUDIES_NOTES } from './socialStudies';
import { COMPUTER_NOTES } from './computer';
import { FRENCH_NOTES } from './french';
import { BUSINESS_NOTES } from './business';
import { PHE_NOTES } from './phe';

// ─── Master Comprehensive Notes Export ─────────────────────────────────────────
export const COMPREHENSIVE_NOTES: LessonNote[] = [
  ...ENGLISH_NOTES,
  ...MATHEMATICS_NOTES,
  ...PHYSICS_NOTES,
  ...CHEMISTRY_NOTES,
  ...BIOLOGY_NOTES,
  ...ECONOMICS_NOTES,
  ...GOVERNMENT_NOTES,
  ...LITERATURE_NOTES,
  ...COMMERCE_NOTES,
  ...AGRICULTURE_NOTES,
  ...GEOGRAPHY_NOTES,
  ...HISTORY_NOTES,
  ...ACCOUNTING_NOTES,
  ...CRS_NOTES,
  ...IRK_NOTES,
  ...MARKETING_NOTES,
  ...CIVIC_NOTES,
  ...BASIC_SCIENCE_NOTES,
  ...BASIC_TECH_NOTES,
  ...SOCIAL_STUDIES_NOTES,
  ...COMPUTER_NOTES,
  ...FRENCH_NOTES,
  ...BUSINESS_NOTES,
  ...PHE_NOTES,
];
