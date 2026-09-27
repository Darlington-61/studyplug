import { Question } from '../../../data/questions';
import { LessonNote } from '../../../data/masterLessonNotes';
import { UnifiedStudioQuestion, StudioPaperType, ExamCategory } from './questionSelector';

export type { UnifiedStudioQuestion, StudioPaperType, ExamCategory };

export type VideoType =
  | '12_minute_masterclass'
  | 'complete_lesson'
  | 'past_questions'
  | 'quick_revision'
  | 'exam_crash_course'
  | 'shorts';

export type VideoAspectRatio = '16:9' | '9:16';

export type VideoProjectStatus =
  | 'draft'
  | 'script_ready'
  | 'rendering'
  | 'ready_for_review'
  | 'published';

export type TeachingTone =
  | 'authoritative'       // Direct, structured, exam-standard
  | 'warm_encouraging'    // Supportive, step-by-step, confidence builder
  | 'fast_paced_drill';   // Rapid CBT time-saver, formula shortcuts

export interface TopConcept {
  id: string;
  title: string;
  explanation: string;
  ruleOrFormula?: string;
  example?: string;
  commonMistakes?: string[];
  isSelected: boolean;
}

export interface TitleOption {
  id: string;
  title: string;
  style: string;
  isRecommended?: boolean;
}

export interface VoiceboxProfile {
  id: string;
  name: string;
  gender: 'male' | 'female';
  sampleUrl?: string;
  description: string;
  accent: 'nigerian_academic' | 'west_african' | 'neutral_english';
  stability: number;
  clarity: number;
  pace: number;
}

export interface ScriptSection {
  id: string;
  sectionNumber: number;
  type:
    | 'hook'
    | 'objectives'
    | 'top_concept'
    | 'worked_example'
    | 'past_question'
    | 'solution_breakdown'
    | 'section_header'
    | 'theory_question'
    | 'theory_solution'
    | 'practical_setup'
    | 'practical_procedure'
    | 'practical_table'
    | 'practical_graph'
    | 'practical_precautions'
    | 'exam_tips'
    | 'quick_recap'
    | 'cta'
    | 'intro'
    | 'concept'
    | 'definitions'
    | 'diagram_analysis'
    | 'common_mistakes'
    | 'quick_revision'
    | 'challenge'
    | 'outro';
  title: string;
  spokenNarration: string;
  narrationText: string; // Phonetically optimized for Voicebox
  onScreenText: string;
  visualCue: string;
  durationSeconds: number;
  calculationSteps?: string[];
  questionData?: UnifiedStudioQuestion | Question;
  diagramId?: string;
  timerDurationSeconds?: number; // 5s or 10s
  paperType?: StudioPaperType;
  sourceLabel?: string;
  sectionHeaderTitle?: string;
  sectionHeaderSubtitle?: string;
  practicalDetails?: {
    apparatus?: string[];
    procedure?: string[];
    observationTable?: { headers: string[]; rows: string[][] };
    precautions?: string[];
    graphSlope?: string;
    targetFormula?: string;
  };
}

export interface VideoScene {
  sceneId: string;
  sceneType:
    | 'hook'
    | 'objectives'
    | 'concept'
    | 'definition'
    | 'formula'
    | 'example'
    | 'diagram'
    | 'question'
    | 'options'
    | 'countdown'
    | 'answer'
    | 'solution'
    | 'section_header'
    | 'theory_card'
    | 'theory_solution'
    | 'practical_setup'
    | 'practical_table'
    | 'practical_graph'
    | 'practical_precautions'
    | 'exam_tip'
    | 'recap'
    | 'cta'
    | 'title_card'
    | 'concept_slide'
    | 'calculation_step'
    | 'question_card'
    | 'answer_reveal'
    | 'summary_slide'
    | 'outro_card';
  duration: number;
  durationSeconds: number;
  visualType: 'split' | 'chalkboard' | 'equation_reveal' | 'cbt_terminal' | 'diagram_focus' | 'hero_card' | 'section_banner' | 'practical_sheet' | 'theory_paper';
  subjectTheme: 'physics' | 'mathematics' | 'chemistry' | 'biology' | 'english' | 'literature' | 'commercial' | 'general';
  title: string;
  subtitle?: string;
  onScreenText: string;
  narrationText: string;
  questionId?: number | string;
  lessonId?: string;
  animation?: 'fade' | 'slide_left' | 'step_reveal' | 'zoom' | 'pulse';
  image?: string;
  diagram?: string;
  diagramId?: string;
  diagramSvg?: string;
  transition?: 'cut' | 'crossfade' | 'slide';
  keyPoints: string[];
  equation?: string;
  calculationSteps?: string[];
  questionData?: UnifiedStudioQuestion | Question;
  timerSeconds?: number;
  progressPercent: number;
  audioBlobUrl?: string; // Voicebox cached audio
  paperType?: StudioPaperType;
  sourceLabel?: string;
  practicalDetails?: ScriptSection['practicalDetails'];
}

export interface YouTubeSeoData {
  title: string;
  titleOptions: TitleOption[];
  description: string;
  tags: string[];
  hashtags: string[];
  chapters: {
    timestamp: string;
    seconds: number;
    title: string;
  }[];
  pinnedComment: string;
}

export interface VideoPlanSummary {
  targetDurationMinutes: number; // e.g. 12
  estimatedDurationSeconds: number;
  formattedDuration: string; // e.g. "11 min 48 sec"
  totalScenes: number;
  totalQuestions: number;
  topConceptsCount: number;
  voiceoverWordCount: number;
  voiceProvider: string; // "Voicebox AI"
  voiceProfile: string;
}

export interface CostEstimate {
  durationMinutes: number;
  durationSeconds: number;
  totalWords: number;
  voiceNaira: number;
  visualNaira: number;
  renderingNaira: number;
  totalNaira: number;
}

export interface ContentValidationResult {
  isValid: boolean;
  score: number; // 0 - 100
  checks: {
    name: string;
    status: 'pass' | 'fail' | 'warn';
    description: string;
    detail?: string;
  }[];
  summary: string;
}

export interface VoiceboxConfig {
  provider: 'voicebox';
  profileId: string;
  profileName: string;
  stability: number; // 0 - 1
  clarity: number;   // 0 - 1
  pace: number;      // 0.8 - 1.3
  tone: TeachingTone;
  pauseLengthMs: number;
  enablePhoneticPolish: boolean;
}

export interface YouTubeProject {
  id: string;
  title: string;
  exam: ExamCategory;
  selectedExams?: ExamCategory[];
  subject: string;
  selectedPaperTypes?: StudioPaperType[];
  topic: string;
  subtopic: string;
  videoType: VideoType;
  aspectRatio: VideoAspectRatio;
  status: VideoProjectStatus;
  topConcepts: TopConcept[];
  selectedQuestions: (UnifiedStudioQuestion | Question)[];
  lessonNote: LessonNote | null;
  scriptSections: ScriptSection[];
  scenes: VideoScene[];
  seoData: YouTubeSeoData;
  voiceboxConfig: VoiceboxConfig;
  videoPlan: VideoPlanSummary;
  costEstimate: CostEstimate;
  thumbnailUrl?: string;
  createdAt: string;
  updatedAt: string;
}
