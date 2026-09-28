import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  VideoType,
  VideoAspectRatio,
  VideoProjectStatus,
  TeachingTone,
  ScriptSection,
  VideoScene,
  YouTubeSeoData,
  CostEstimate,
  ContentValidationResult,
  VoiceboxConfig,
  VoiceboxProfile,
  TopConcept,
  TitleOption,
  VideoPlanSummary,
  YouTubeProject
} from './types';
import { Question } from '../../../data/questions';
import { LessonNote } from '../../../data/masterLessonNotes';
import { COMPREHENSIVE_NOTES } from '../../../data/comprehensiveNotes';
import {
  ALL_QUESTIONS,
  SUBJECT_TOPICS_CATALOG,
  getFilteredQuestions,
  normalizeSubjectName
} from '../../../data/allQuestionsHub';
import { extractTopConcepts } from './conceptExtractor';
import { generateTeachingScript, phoneticSanitize } from './scriptGenerator';
import { validateVideoContent } from './contentValidator';
import { buildVideoScenes, generateYouTubeSeo, calculateCostEstimate, calculateVideoPlan } from './sceneBuilder';
import { drawThumbnailToCanvas, exportThumbnailPng } from './thumbnailGenerator';
import { StudyPlugVideoRenderer } from './videoRenderer';
import { VOICEBOX_PROFILES, getRecommendedVoiceProfile } from './voiceboxService';
import {
  analyzeSubjectAndTopic,
  analyzeSubtopicRequirements,
  estimateTopicDurationAndScale,
  generateTopicPartBreakdown
} from './subjectPedagogy';
import {
  ALL_JAMB_SUBJECTS,
  getAvailableSubjectsForExam,
  getSyllabusSections,
  getSyllabusTopicsForSection,
  getSubtopicsForTopic,
  getMatchingLessonNote,
  normalizeStudioSubject
} from './syllabusManager';

import {
  UnifiedStudioQuestion,
  StudioPaperType,
  ExamCategory,
  QuestionSelectionMode,
  YearFilterMode,
  getAvailablePapersForExamSubject,
  getAvailableTopicsForSelection,
  getAvailableYearsForQuestions,
  getRecommendedQuestionCount,
  queryStudioQuestions
} from './questionSelector';

interface YouTubeStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ALL_EXAMS: ExamCategory[] = [
  'JAMB',
  'WAEC',
  'NECO',
  'NABTEB',
  'BECE',
  'Post-UTME'
];

const ALL_SUBJECT_LIST: string[] = ALL_JAMB_SUBJECTS;

/**
 * Safely renders a question's text field.
 * Some questions store their content as a raw <img src="..."> HTML string (e.g. diagram-based Qs).
 * Instead of blindly using dangerouslySetInnerHTML we parse the src and render a real <img>.
 * Falls back to a plain text span for all other question texts.
 */
function renderQuestionText(
  text: string,
  imageUrl?: string | null,
  imageSvg?: string | null,
  className?: string
): React.ReactNode {
  const trimmed = (text || '').trim();

  // 1. imageSvg takes highest priority (inline SVG markup)
  if (imageSvg) {
    return (
      <span className={className}>
        <span dangerouslySetInnerHTML={{ __html: imageSvg }} />
      </span>
    );
  }

  // 2. imageUrl from a separate field
  if (imageUrl) {
    return (
      <span className={className}>
        <img src={imageUrl} alt="Question diagram" className="max-w-full rounded mb-1 inline-block" />
        {trimmed && !trimmed.startsWith('<img') && <span className="block mt-1">{trimmed}</span>}
      </span>
    );
  }

  // 3. text IS an <img …> tag — extract src and render properly
  if (trimmed.startsWith('<img') || trimmed.startsWith('<IMG')) {
    const srcMatch = trimmed.match(/src\s*=\s*["']([^"']+)["']/i);
    if (srcMatch?.[1]) {
      return (
        <span className={className}>
          <img src={srcMatch[1]} alt="Question diagram" className="max-w-full rounded mb-1 inline-block" />
        </span>
      );
    }
  }

  // 4. Plain text
  return <span className={className}>{trimmed}</span>;
}


export const YouTubeStudioModal: React.FC<YouTubeStudioModalProps> = ({ isOpen, onClose }) => {
  // Stepper Tabs
  type StudioTab =
    | 'select_content'
    | 'top_concepts'
    | 'script_editor'
    | 'verification'
    | 'scene_timeline'
    | 'voicebox'
    | 'player_export'
    | 'seo_thumbnail'
    | 'library';

  const [activeTab, setActiveTab] = useState<StudioTab>('select_content');

  // STEP 1: Content Selection
  const [is100DaysMode, setIs100DaysMode] = useState<boolean>(true);
  const [jambDayNumber, setJambDayNumber] = useState<number>(1);
  const [selectedExam, setSelectedExam] = useState<ExamCategory>('JAMB');
  const [compareExams, setCompareExams] = useState<boolean>(false);
  const [selectedComparisonExams, setSelectedComparisonExams] = useState<ExamCategory[]>(['JAMB']);
  const [selectedSubject, setSelectedSubject] = useState<string>('Mathematics');
  const [selectedSyllabusSection, setSelectedSyllabusSection] = useState<string>('');
  const [selectedPaperTypes, setSelectedPaperTypes] = useState<StudioPaperType[]>(['OBJ']);
  const [selectedTopic, setSelectedTopic] = useState<string>('Number bases');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>('Conversion between bases');
  const [videoType, setVideoType] = useState<VideoType>('100_days_jamb');
  const [customDurationMinutes, setCustomDurationMinutes] = useState<number | null>(null);
  const [selectedPartNumber, setSelectedPartNumber] = useState<number | null>(null);
  const [aspectRatio, setAspectRatio] = useState<VideoAspectRatio>('16:9');
  const [teachingTone, setTeachingTone] = useState<TeachingTone>('authoritative');
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [questionTimerSeconds, setQuestionTimerSeconds] = useState<number>(5);
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [yearMode, setYearMode] = useState<YearFilterMode>('any');
  const [specificYear, setSpecificYear] = useState<number>(2023);
  const [yearRange, setYearRange] = useState<[number, number]>([2018, 2025]);
  const [selectionMode, setSelectionMode] = useState<QuestionSelectionMode>('auto');
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<string[]>([]);
  const [isReviewQuestionsOpen, setIsReviewQuestionsOpen] = useState<boolean>(false);

  // STEP 2: Top Concepts State
  const [topConcepts, setTopConcepts] = useState<TopConcept[]>([]);
  const [newConceptTitle, setNewConceptTitle] = useState<string>('');

  // STEP 3: Script State
  const [scriptSections, setScriptSections] = useState<ScriptSection[]>([]);
  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);

  // STEP 4: Validation
  const [validationResult, setValidationResult] = useState<ContentValidationResult | null>(null);

  // STEP 5: Scenes & Timeline
  const [videoScenes, setVideoScenes] = useState<VideoScene[]>([]);
  const [selectedSceneIndex, setSelectedSceneIndex] = useState<number>(0);

  // STEP 6: Voicebox Configuration
  const [voiceboxConfig, setVoiceboxConfig] = useState<VoiceboxConfig>({
    provider: 'voicebox',
    profileId: VOICEBOX_PROFILES[0].id,
    profileName: VOICEBOX_PROFILES[0].name,
    stability: 0.85,
    clarity: 0.92,
    pace: 1.0,
    tone: 'authoritative',
    pauseLengthMs: 300,
    enablePhoneticPolish: true
  });
  const [isTestingVoicebox, setIsTestingVoicebox] = useState<boolean>(false);

  // STEP 7: Player & Video Export
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const thumbnailCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const rendererRef = useRef<StudyPlugVideoRenderer | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentPlaySec, setCurrentPlaySec] = useState<number>(0);
  const [totalPlaySec, setTotalPlaySec] = useState<number>(0);
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [previewMode, setPreviewMode] = useState<'fast_preview' | 'full_hd'>('fast_preview');

  // Export State
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);
  const [exportStatusText, setExportStatusText] = useState<string>('');
  const [exportedVideoUrl, setExportedVideoUrl] = useState<string | null>(null);

  // STEP 8: SEO & Thumbnail
  const [seoData, setSeoData] = useState<YouTubeSeoData | null>(null);
  const [selectedTitleId, setSelectedTitleId] = useState<string>('opt-1');
  const [thumbnailHook, setThumbnailHook] = useState<string>('5 PAST QUESTIONS YOU MUST KNOW');
  const [thumbnailTheme, setThumbnailTheme] = useState<'deep_emerald' | 'obsidian_gold' | 'royal_blue'>('deep_emerald');
  const [copiedChapterFeedback, setCopiedChapterFeedback] = useState<boolean>(false);
  const [copiedCommentFeedback, setCopiedCommentFeedback] = useState<boolean>(false);

  // STEP 9: Cost & Video Plan
  const [costEstimate, setCostEstimate] = useState<CostEstimate | null>(null);
  const [videoPlan, setVideoPlan] = useState<VideoPlanSummary | null>(null);
  const [showCostConfirmModal, setShowCostConfirmModal] = useState<boolean>(false);

  // STEP 10: Saved Projects
  const [savedProjects, setSavedProjects] = useState<YouTubeProject[]>(() => {
    try {
      const stored = localStorage.getItem('studyplug_youtube_projects');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [currentProjectId, setCurrentProjectId] = useState<string>(() => `proj-${Date.now()}`);

  // ─── DYNAMIC DATABASE RETRIEVAL ──────────────────────────────────────────

  // Keep 100 Days Mode synced
  useEffect(() => {
    if (is100DaysMode) {
      setSelectedExam('JAMB');
      setVideoType('100_days_jamb');
      setSelectedPaperTypes(['OBJ']);
    }
  }, [is100DaysMode]);

  // Available Papers based on Exam & Subject (Subject-First Logic)
  const availablePapers = useMemo(() => {
    return getAvailablePapersForExamSubject(selectedExam, selectedSubject);
  }, [selectedExam, selectedSubject]);

  // Ensure selectedPaperTypes stays valid when Exam or Subject changes
  useEffect(() => {
    setSelectedPaperTypes(prev => {
      const valid = prev.filter(p => availablePapers.includes(p));
      if (valid.length > 0) return valid;
      return [availablePapers[0] || 'OBJ'];
    });
  }, [availablePapers]);

  // Available Syllabus Sections for Exam + Subject
  const availableSyllabusSections = useMemo(() => {
    return getSyllabusSections(selectedExam, selectedSubject);
  }, [selectedExam, selectedSubject]);

  useEffect(() => {
    if (availableSyllabusSections.length > 0 && (!selectedSyllabusSection || !availableSyllabusSections.includes(selectedSyllabusSection))) {
      setSelectedSyllabusSection(availableSyllabusSections[0]);
    }
  }, [availableSyllabusSections]);

  // Available Topics from Syllabus Section & Database
  const availableTopics = useMemo(() => {
    if (selectedSyllabusSection) {
      const secTopics = getSyllabusTopicsForSection(selectedExam, selectedSubject, selectedSyllabusSection);
      if (secTopics.length > 0) return secTopics;
    }
    return getAvailableTopicsForSelection(selectedExam, selectedSubject);
  }, [selectedExam, selectedSubject, selectedSyllabusSection]);

  useEffect(() => {
    if (availableTopics.length > 0 && !availableTopics.includes(selectedTopic)) {
      setSelectedTopic(availableTopics[0]);
    }
  }, [selectedSubject, availableTopics]);

  // Available Subtopics for selected topic
  const availableSubtopics = useMemo(() => {
    return getSubtopicsForTopic(selectedExam, selectedSubject, selectedTopic);
  }, [selectedExam, selectedSubject, selectedTopic]);

  useEffect(() => {
    if (availableSubtopics.length > 0) {
      setSelectedSubtopic(availableSubtopics[0]);
    } else {
      setSelectedSubtopic(selectedTopic);
    }
  }, [selectedTopic, availableSubtopics]);

  // Active Lesson Note from StudyPlug database
  const activeLessonNote = useMemo(() => {
    return getMatchingLessonNote(selectedSubject, selectedTopic, selectedSubtopic);
  }, [selectedSubject, selectedTopic, selectedSubtopic]);

  // Subject Pedagogy Profile
  const subjectPedagogy = useMemo(() => {
    return analyzeSubjectAndTopic(selectedSubject, selectedTopic, availableSubtopics, activeLessonNote);
  }, [selectedSubject, selectedTopic, availableSubtopics, activeLessonNote]);

  // Topic Scale & Duration Estimation
  const topicScaleInfo = useMemo(() => {
    return estimateTopicDurationAndScale(
      selectedTopic,
      availableSubtopics,
      activeLessonNote,
      questionCount,
      subjectPedagogy
    );
  }, [selectedTopic, availableSubtopics, activeLessonNote, questionCount, subjectPedagogy]);

  // Effective Target Duration
  const effectiveTargetDurationMinutes = useMemo(() => {
    if (customDurationMinutes !== null) return customDurationMinutes;
    return topicScaleInfo.estimatedMinutes;
  }, [customDurationMinutes, topicScaleInfo.estimatedMinutes]);

  // Recommend voice profile on subject change
  useEffect(() => {
    const recVoice = getRecommendedVoiceProfile(selectedSubject);
    if (recVoice) {
      setVoiceboxConfig(prev => ({
        ...prev,
        profileId: recVoice.id,
        profileName: recVoice.name
      }));
    }
  }, [selectedSubject]);

  // Extract Top Concepts
  useEffect(() => {
    const extracted = extractTopConcepts(
      selectedSubject,
      selectedTopic,
      selectedSubtopic,
      activeLessonNote,
      availableSubtopics
    );
    setTopConcepts(extracted);
  }, [selectedSubject, selectedTopic, selectedSubtopic, activeLessonNote, availableSubtopics]);

  // Matching Database Questions using Query Engine
  const matchedDatabaseQuestions = useMemo(() => {
    const activeExams = compareExams && selectedComparisonExams.length > 0 ? selectedComparisonExams : [selectedExam];
    return queryStudioQuestions({
      exams: activeExams,
      subject: selectedSubject,
      paperTypes: selectedPaperTypes,
      topic: selectedTopic,
      yearMode,
      specificYear,
      yearRange,
      difficulty: difficultyFilter === 'All' ? undefined : difficultyFilter
    });
  }, [selectedExam, compareExams, selectedComparisonExams, selectedSubject, selectedPaperTypes, selectedTopic, yearMode, specificYear, yearRange, difficultyFilter]);

  // Recommended question count based on paper types
  const recommendedInfo = useMemo(() => {
    return getRecommendedQuestionCount(selectedPaperTypes);
  }, [selectedPaperTypes]);

  // Real available years present in matching questions
  const availableYears = useMemo(() => {
    return getAvailableYearsForQuestions(matchedDatabaseQuestions);
  }, [matchedDatabaseQuestions]);

  // Auto / Random / Manual selection
  useEffect(() => {
    if (matchedDatabaseQuestions.length > 0) {
      if (selectionMode === 'auto') {
        setSelectedQuestionIds(matchedDatabaseQuestions.slice(0, questionCount).map(q => q.id));
      } else if (selectionMode === 'random') {
        const shuffled = [...matchedDatabaseQuestions].sort(() => 0.5 - Math.random());
        setSelectedQuestionIds(shuffled.slice(0, questionCount).map(q => q.id));
      }
    } else {
      setSelectedQuestionIds([]);
    }
  }, [matchedDatabaseQuestions, questionCount, selectionMode]);

  const currentlyChosenQuestions = useMemo(() => {
    return matchedDatabaseQuestions.filter(q => selectedQuestionIds.includes(q.id));
  }, [matchedDatabaseQuestions, selectedQuestionIds]);

  // ─── WORKFLOW PIPELINE ──────────────────────────────────────────────────

  const handleGenerateFull12MinMasterclass = () => {
    // 1. Generate Teaching Script
    const activeExams = compareExams && selectedComparisonExams.length > 0 ? selectedComparisonExams : [selectedExam];
    const activePart = selectedPartNumber && topicScaleInfo.partsBreakdown
      ? topicScaleInfo.partsBreakdown.find(p => p.partNumber === selectedPartNumber)
      : undefined;

    const generated = generateTeachingScript({
      exam: selectedExam,
      selectedExams: activeExams,
      subject: selectedSubject,
      paperTypes: selectedPaperTypes,
      topic: selectedTopic,
      subtopic: selectedSubtopic || selectedTopic,
      subtopics: availableSubtopics,
      lessonNote: activeLessonNote,
      questions: currentlyChosenQuestions,
      videoType: is100DaysMode ? '100_days_jamb' : videoType,
      tone: teachingTone,
      topConcepts,
      targetDurationMinutes: effectiveTargetDurationMinutes,
      jambDayNumber: is100DaysMode ? jambDayNumber : undefined,
      selectedPart: activePart
    });
    setScriptSections(generated);

    // 2. Validate
    const validation = validateVideoContent({
      exam: selectedExam,
      subject: selectedSubject,
      topic: selectedTopic,
      subtopic: selectedSubtopic || selectedTopic,
      lessonNote: activeLessonNote,
      questions: currentlyChosenQuestions,
      scriptSections: generated
    });
    setValidationResult(validation);

    // 3. Build Scenes
    const builtScenes = buildVideoScenes(generated, selectedSubject, aspectRatio);
    setVideoScenes(builtScenes);

    // 4. Calculate Video Plan & Cost
    const plan = calculateVideoPlan(
      builtScenes,
      generated,
      currentlyChosenQuestions.length,
      topConcepts.filter(c => c.isSelected).length,
      voiceboxConfig.profileName,
      topicScaleInfo.scale,
      topicScaleInfo.partsBreakdown?.length,
      selectedPartNumber || undefined,
      subjectPedagogy.primaryModality
    );
    setVideoPlan(plan);

    const cost = calculateCostEstimate(builtScenes, generated);
    setCostEstimate(cost);

    // 5. Generate SEO & 3 Titles
    const seo = generateYouTubeSeo({
      exam: selectedExam,
      subject: selectedSubject,
      topic: selectedTopic,
      subtopic: selectedSubtopic || selectedTopic,
      scenes: builtScenes,
      videoType: is100DaysMode ? '100_days_jamb' : videoType,
      questionCount: currentlyChosenQuestions.length,
      paperTypes: selectedPaperTypes,
      jambDayNumber: is100DaysMode ? jambDayNumber : undefined,
      partTitle: activePart ? activePart.title : undefined,
      targetDurationMinutes: effectiveTargetDurationMinutes
    });
    setSeoData(seo);

    setActiveTab('top_concepts');
  };

  // Re-build scenes and video plan whenever script changes
  useEffect(() => {
    if (scriptSections.length > 0) {
      const built = buildVideoScenes(scriptSections, selectedSubject, aspectRatio);
      setVideoScenes(built);
      setVideoPlan(calculateVideoPlan(
        built,
        scriptSections,
        currentlyChosenQuestions.length,
        topConcepts.filter(c => c.isSelected).length,
        voiceboxConfig.profileName
      ));
      setCostEstimate(calculateCostEstimate(built, scriptSections));
    }
  }, [scriptSections, selectedSubject, aspectRatio]);

  // Initialize Canvas Renderer
  useEffect(() => {
    if (canvasRef.current && videoScenes.length > 0) {
      if (!rendererRef.current) {
        rendererRef.current = new StudyPlugVideoRenderer(canvasRef.current, aspectRatio);
      }
      rendererRef.current.setScenes(videoScenes, aspectRatio);
      rendererRef.current.setCallbacks(
        (curSec, totSec, sIdx) => {
          setCurrentPlaySec(curSec);
          setTotalPlaySec(totSec);
          setActiveSceneIndex(sIdx);
        },
        () => setIsPlaying(false)
      );
    }
  }, [videoScenes, aspectRatio, activeTab]);

  // Update Thumbnail
  useEffect(() => {
    if (thumbnailCanvasRef.current) {
      drawThumbnailToCanvas(thumbnailCanvasRef.current, {
        exam: selectedExam,
        subject: selectedSubject,
        topic: selectedTopic,
        hookText: thumbnailHook,
        aspectRatio,
        theme: thumbnailTheme
      });
    }
  }, [selectedExam, selectedSubject, selectedTopic, thumbnailHook, aspectRatio, thumbnailTheme, activeTab]);

  // ─── PLAYBACK & EXPORT ──────────────────────────────────────────────────

  const handleTogglePlay = () => {
    if (!rendererRef.current) return;
    if (isPlaying) {
      rendererRef.current.pause();
      setIsPlaying(false);
    } else {
      rendererRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleExportVideo = async () => {
    if (!rendererRef.current) return;
    setIsExporting(true);
    setExportProgress(0);
    setExportStatusText('Initializing 1080p Voicebox video encoder...');

    try {
      const blob = await rendererRef.current.exportVideo((percent, status) => {
        setExportProgress(percent);
        setExportStatusText(status);
      });

      const url = URL.createObjectURL(blob);
      setExportedVideoUrl(url);

      const filename = `StudyPlug_12Min_${selectedExam}_${selectedSubject}_${selectedTopic.replace(/\s+/g, '_')}.webm`;
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      handleSaveProject('ready_for_review');
    } catch (e: any) {
      alert(`Export failed: ${e.message}`);
    } finally {
      setIsExporting(false);
    }
  };

  const handleSaveProject = (status: VideoProjectStatus = 'draft') => {
    const project: YouTubeProject = {
      id: currentProjectId,
      title: is100DaysMode ? `100 Days to JAMB (Day ${jambDayNumber}): ${selectedSubject} — ${selectedTopic}` : `${selectedExam} ${selectedSubject}: ${selectedTopic}`,
      exam: selectedExam,
      subject: selectedSubject,
      topic: selectedTopic,
      subtopic: selectedSubtopic,
      videoType: is100DaysMode ? '100_days_jamb' : videoType,
      aspectRatio,
      status,
      topConcepts,
      selectedQuestions: currentlyChosenQuestions,
      lessonNote: activeLessonNote,
      scriptSections,
      scenes: videoScenes,
      seoData: seoData || generateYouTubeSeo({
        exam: selectedExam,
        subject: selectedSubject,
        topic: selectedTopic,
        subtopic: selectedSubtopic,
        scenes: videoScenes,
        videoType: is100DaysMode ? '100_days_jamb' : videoType,
        questionCount: currentlyChosenQuestions.length,
        jambDayNumber: is100DaysMode ? jambDayNumber : undefined,
        targetDurationMinutes: effectiveTargetDurationMinutes
      }),
      voiceboxConfig,
      videoPlan: videoPlan || calculateVideoPlan(
        videoScenes,
        scriptSections,
        currentlyChosenQuestions.length,
        topConcepts.length,
        voiceboxConfig.profileName,
        topicScaleInfo.scale,
        topicScaleInfo.partsBreakdown?.length,
        selectedPartNumber || undefined,
        subjectPedagogy.primaryModality
      ),
      costEstimate: costEstimate || calculateCostEstimate(videoScenes, scriptSections),
      jambDayNumber: is100DaysMode ? jambDayNumber : undefined,
      selectedPartNumber: selectedPartNumber || undefined,
      topicPartsBreakdown: topicScaleInfo.partsBreakdown,
      topicScale: topicScaleInfo.scale,
      subjectPedagogy,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setSavedProjects(prev => {
      const filtered = prev.filter(p => p.id !== currentProjectId);
      const updated = [project, ...filtered];
      try {
        localStorage.setItem('studyplug_youtube_projects', JSON.stringify(updated));
      } catch (e) {
        console.warn(e);
      }
      return updated;
    });

    alert(`Project "${project.title}" saved successfully as ${status.toUpperCase()}!`);
  };

  const handleLoadProject = (proj: YouTubeProject) => {
    setCurrentProjectId(proj.id);
    setSelectedExam(proj.exam);
    setSelectedSubject(proj.subject);
    setSelectedTopic(proj.topic);
    setSelectedSubtopic(proj.subtopic || proj.topic);
    setVideoType(proj.videoType);
    setAspectRatio(proj.aspectRatio);
    setTopConcepts(proj.topConcepts || []);
    setScriptSections(proj.scriptSections || []);
    setVideoScenes(proj.scenes || []);
    setSeoData(proj.seoData);
    setVoiceboxConfig(proj.voiceboxConfig || voiceboxConfig);
    setVideoPlan(proj.videoPlan);
    setCostEstimate(proj.costEstimate);
    setSelectedQuestionIds(proj.selectedQuestions.map(q => q.id));
    setActiveTab('player_export');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-2 sm:p-4 select-none font-sans overflow-hidden">
      <div className="relative w-full max-w-7xl h-[94vh] bg-[#0A1A14] text-[#E6F4F0] rounded-[24px] border-2 border-[#00796B]/50 shadow-2xl flex flex-col overflow-hidden">

        {/* ─── Top Executive Bar ─── */}
        <header className="h-16 px-6 bg-[#004D40] border-b border-[#00796B]/60 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#002E26] border border-[#FFD600]/40 flex items-center justify-center text-xl shadow-xs">
              🎙️
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-extrabold text-[16px] text-white tracking-tight">
                  StudyPlug 12-Minute YouTube Studio
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#FFD600] text-[#004D40] uppercase tracking-wider">
                  Voicebox Cloned
                </span>
              </div>
              <p className="text-[11px] text-emerald-200">
                Notes → Top Concepts → Authentic Past Questions → 12-Min Video → SEO &amp; Thumbnail
              </p>
            </div>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="hidden lg:flex items-center space-x-1 bg-[#00382E] p-1 rounded-xl border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('select_content')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                activeTab === 'select_content' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              1. Content
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('top_concepts')}
              disabled={topConcepts.length === 0}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer disabled:opacity-40 ${
                activeTab === 'top_concepts' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              2. Concepts ({topConcepts.filter(c => c.isSelected).length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('script_editor')}
              disabled={scriptSections.length === 0}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer disabled:opacity-40 ${
                activeTab === 'script_editor' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              3. AI Script
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('verification')}
              disabled={!validationResult}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer disabled:opacity-40 ${
                activeTab === 'verification' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              4. Verification
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('voicebox')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                activeTab === 'voicebox' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              5. Voicebox Voice
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('scene_timeline')}
              disabled={videoScenes.length === 0}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer disabled:opacity-40 ${
                activeTab === 'scene_timeline' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              6. Timeline ({videoScenes.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('player_export')}
              disabled={videoScenes.length === 0}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer disabled:opacity-40 ${
                activeTab === 'player_export' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              7. Player &amp; Render
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('seo_thumbnail')}
              disabled={!seoData}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer disabled:opacity-40 ${
                activeTab === 'seo_thumbnail' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              8. Titles &amp; SEO
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('library')}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                activeTab === 'library' ? 'bg-[#FFD600] text-[#004D40]' : 'text-emerald-100 hover:bg-white/10'
              }`}
            >
              Library ({savedProjects.length})
            </button>
          </div>

          {/* Right Header Badges */}
          <div className="flex items-center space-x-2.5">
            {videoPlan && (
              <div className="hidden md:flex items-center space-x-2 px-3 py-1 rounded-xl bg-[#002E26] border border-[#FFD600]/30 text-xs">
                <span className="text-[#FFD600] font-black">⏱️ {videoPlan.formattedDuration}</span>
                <span className="text-slate-400">•</span>
                <span className="text-emerald-300 font-bold">{videoPlan.totalScenes} Scenes</span>
                <span className="text-slate-400">•</span>
                <span className="text-amber-300 font-bold">{videoPlan.totalQuestions} Past Qs</span>
              </div>
            )}
            <button
              type="button"
              onClick={() => handleSaveProject('draft')}
              className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition cursor-pointer"
            >
              💾 Save Draft
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        </header>

        {/* ─── Studio Workspace Body ─── */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* ══════════════════════════════════════════════════════════════════
              TAB 1: SELECT CONTENT
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'select_content' && (
            <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn text-left">
              <div className="bg-[#0D241C] p-6 rounded-[20px] border border-[#00796B]/40 space-y-5">
                {/* ─── Mode Switcher Bar ─── */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#00382E] to-[#002A22] border border-[#00796B]/80 shadow-md">
                  <div className="flex items-center space-x-2.5">
                    <button
                      type="button"
                      onClick={() => setIs100DaysMode(true)}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center space-x-2 ${
                        is100DaysMode
                          ? 'bg-[#FFD600] text-[#004D40] shadow-md shadow-[#FFD600]/20'
                          : 'bg-black/30 text-emerald-200 hover:bg-black/50'
                      }`}
                    >
                      <span>🎓 100 Days to JAMB (Topic-by-Topic Syllabus)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIs100DaysMode(false)}
                      className={`px-4 py-2 rounded-xl text-xs font-black transition cursor-pointer flex items-center space-x-2 ${
                        !is100DaysMode
                          ? 'bg-[#FFD600] text-[#004D40] shadow-md shadow-[#FFD600]/20'
                          : 'bg-black/30 text-emerald-200 hover:bg-black/50'
                      }`}
                    >
                      <span>🎯 Custom / Multi-Exam Masterclass</span>
                    </button>
                  </div>

                  {is100DaysMode ? (
                    <div className="flex items-center space-x-2 bg-black/40 px-3 py-1.5 rounded-xl border border-[#FFD600]/30 text-xs">
                      <span className="text-amber-300 font-bold">Series Progress:</span>
                      <span className="font-black text-white">Day</span>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={jambDayNumber}
                        onChange={(e) => setJambDayNumber(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                        className="w-14 bg-[#071912] border border-[#FFD600] rounded-lg px-2 py-0.5 text-center font-black text-[#FFD600]"
                      />
                      <span className="text-slate-400">/ 100</span>
                    </div>
                  ) : (
                    <span className="text-xs text-emerald-300 font-bold">
                      Target: ~{effectiveTargetDurationMinutes}:00
                    </span>
                  )}
                </div>

                {/* ─── Subject Pedagogy & Teaching Engine Banner ─── */}
                <div className="p-4 rounded-2xl bg-[#071912] border border-[#00796B]/60 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: subjectPedagogy.badgeColor }} />
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-white" style={{ backgroundColor: subjectPedagogy.badgeColor }}>
                        {subjectPedagogy.subject} • {subjectPedagogy.primaryModality.toUpperCase().replace('_', ' ')}
                      </span>
                      <span className="text-xs text-emerald-200 font-bold hidden sm:inline">
                        {subjectPedagogy.presentationStyle}
                      </span>
                    </div>
                    <span className="text-[11px] text-amber-300 font-bold">
                      🎯 Trap Focus: {subjectPedagogy.examinerTrapFocus}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 text-[11px] text-emerald-100">
                    {subjectPedagogy.pedagogicalPriorities.slice(0, 3).map((p, i) => (
                      <div key={i} className="flex items-start space-x-1.5 bg-black/30 p-2 rounded-lg border border-white/5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 1: Exam Selection (If Custom Mode) */}
                {!is100DaysMode && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                        1. Examination Board
                      </label>
                      <label className="flex items-center space-x-2 text-xs text-amber-300 font-bold cursor-pointer">
                        <input
                          type="checkbox"
                          checked={compareExams}
                          onChange={(e) => {
                            const val = e.target.checked;
                            setCompareExams(val);
                            if (val && !selectedComparisonExams.includes(selectedExam)) {
                              setSelectedComparisonExams([selectedExam]);
                            }
                          }}
                          className="rounded text-[#004D40] accent-[#FFD600]"
                        />
                        <span>Cross-Exam Comparison Video</span>
                      </label>
                    </div>

                    {!compareExams ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                        {ALL_EXAMS.map((exam) => {
                          const isSelected = selectedExam === exam;
                          return (
                            <button
                              key={exam}
                              type="button"
                              onClick={() => setSelectedExam(exam)}
                              className={`p-3 rounded-xl border text-xs font-black transition cursor-pointer text-center ${
                                isSelected
                                  ? 'bg-[#FFD600] text-[#004D40] border-[#FFD600] shadow-md shadow-[#FFD600]/20 scale-102'
                                  : 'bg-[#071912] border-white/10 text-white hover:border-[#00796B]'
                              }`}
                            >
                              {exam}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="p-3 rounded-xl bg-black/40 border border-[#FFD600]/40 space-y-2">
                        <span className="text-[11px] font-bold text-amber-200 block">
                          Select Exams to Compare:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {ALL_EXAMS.map((exam) => {
                            const isChecked = selectedComparisonExams.includes(exam);
                            return (
                              <button
                                key={exam}
                                type="button"
                                onClick={() => {
                                  setSelectedComparisonExams(prev =>
                                    isChecked
                                      ? (prev.length > 1 ? prev.filter(e => e !== exam) : prev)
                                      : [...prev, exam]
                                  );
                                }}
                                className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition cursor-pointer ${
                                  isChecked
                                    ? 'bg-[#FFD600] text-[#004D40] border-[#FFD600]'
                                    : 'bg-[#071912] text-slate-300 border-white/10'
                                }`}
                              >
                                {isChecked ? '✓ ' : '+ '}{exam}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Row 2: Subject & Dynamic Paper Types */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Subject Dropdown */}
                  <div className="lg:col-span-5 space-y-1.5">
                    <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                      {is100DaysMode ? '1. Select JAMB Subject' : '2. Subject'}
                    </label>
                    <select
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value)}
                      className="w-full bg-[#071912] border border-[#00796B] rounded-xl px-3 py-2.5 text-sm text-white font-bold"
                    >
                      {ALL_SUBJECT_LIST.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>

                  {/* Paper Types */}
                  <div className="lg:col-span-7 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                        {is100DaysMode ? 'Examination Format' : `3. Paper Types (${selectedExam})`}
                      </label>
                      {availablePapers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setSelectedPaperTypes(availablePapers)}
                          className="text-[11px] text-[#FFD600] hover:underline font-bold"
                        >
                          Select All ({availablePapers.length}) Papers
                        </button>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {availablePapers.map((paper) => {
                        const isSelected = selectedPaperTypes.includes(paper);
                        const paperLabel = paper === 'OBJ'
                          ? (selectedExam === 'JAMB' ? 'CBT / Objective' : 'Objective / OBJ')
                          : paper === 'Theory'
                          ? 'Theory / Essay'
                          : 'Practical (Paper 3)';

                        return (
                          <button
                            key={paper}
                            type="button"
                            onClick={() => {
                              if (selectedExam === 'JAMB') return;
                              setSelectedPaperTypes(prev => {
                                if (isSelected) {
                                  if (prev.length === 1) return prev;
                                  return prev.filter(p => p !== paper);
                                } else {
                                  return [...prev, paper];
                                }
                              });
                            }}
                            className={`px-3 py-2 rounded-xl border text-xs font-black transition cursor-pointer flex items-center space-x-1.5 ${
                              isSelected
                                ? 'bg-[#00796B] text-white border-[#34D399] shadow-sm'
                                : 'bg-[#071912] border-white/10 text-slate-300 hover:border-emerald-500'
                            }`}
                          >
                            <span>{isSelected ? '✓' : '+'}</span>
                            <span>{paperLabel}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Row 3: Syllabus-First Cascading Selectors (Section -> Topic -> Subtopics) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Syllabus Section Selector */}
                  <div className="md:col-span-4 space-y-1.5">
                    <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                      Syllabus Section
                    </label>
                    <select
                      value={selectedSyllabusSection}
                      onChange={(e) => setSelectedSyllabusSection(e.target.value)}
                      className="w-full bg-[#071912] border border-[#00796B] rounded-xl px-3 py-2.5 text-xs text-white font-bold"
                    >
                      {availableSyllabusSections.map(sec => (
                        <option key={sec} value={sec}>{sec}</option>
                      ))}
                    </select>
                  </div>

                  {/* Topic Selector */}
                  <div className="md:col-span-4 space-y-1.5">
                    <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                      Official Syllabus Topic
                    </label>
                    <select
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full bg-[#071912] border border-[#00796B] rounded-xl px-3 py-2.5 text-sm text-white font-bold"
                    >
                      {availableTopics.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Subtopic Focus */}
                  <div className="md:col-span-4 space-y-1.5">
                    <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                      Subtopic Focus
                    </label>
                    <select
                      value={selectedSubtopic}
                      onChange={(e) => setSelectedSubtopic(e.target.value)}
                      className="w-full bg-[#071912] border border-[#00796B] rounded-xl px-3 py-2.5 text-xs text-white font-bold"
                    >
                      {availableSubtopics.map(sub => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subtopics Complete Topic Coverage Checklist */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-[#00796B]/50 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-200">
                      Complete Topic Coverage ({availableSubtopics.length} Syllabus Subtopics):
                    </span>
                    <span className="text-[11px] text-amber-300 font-bold">
                      Zero shallow summaries • Full pedagogical depth
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {availableSubtopics.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#00382E] text-emerald-100 text-xs border border-white/10 flex items-center space-x-1"
                      >
                        <span className="text-amber-400">✓</span>
                        <span>{sub}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* ─── Dynamic Video Length & Scale Card ─── */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#00382E] to-[#00261F] border border-[#FFD600]/40 space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#004D40] border border-[#FFD600]/60 flex items-center justify-center text-lg">
                        ⏱️
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-black text-white">
                            Estimated Teaching Time: {topicScaleInfo.estimatedMinutes} Minutes
                          </h4>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                            topicScaleInfo.scale === 'small'
                              ? 'bg-blue-900/80 text-blue-200'
                              : topicScaleInfo.scale === 'medium'
                              ? 'bg-emerald-900/80 text-emerald-200'
                              : topicScaleInfo.scale === 'deep'
                              ? 'bg-purple-900/80 text-purple-200'
                              : 'bg-amber-900/80 text-amber-200'
                          }`}>
                            {topicScaleInfo.scale.replace('_', ' ')} Topic
                          </span>
                        </div>
                        <p className="text-xs text-emerald-200/90 pt-0.5">
                          {topicScaleInfo.rationale}
                        </p>
                      </div>
                    </div>

                    {/* Quick Duration Buttons */}
                    <div className="flex items-center space-x-1.5 bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
                      <button
                        type="button"
                        onClick={() => setCustomDurationMinutes(null)}
                        className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                          customDurationMinutes === null ? 'bg-[#FFD600] text-[#004D40]' : 'text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        Auto: {topicScaleInfo.estimatedMinutes}m
                      </button>
                      {[10, 15, 20, 25, 30].map(mins => (
                        <button
                          key={mins}
                          type="button"
                          onClick={() => setCustomDurationMinutes(mins)}
                          className={`px-2 py-1 rounded-lg font-bold transition cursor-pointer ${
                            customDurationMinutes === mins ? 'bg-[#FFD600] text-[#004D40]' : 'text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          {mins}m
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Multi-Part Breakdown (If deep or very_large) */}
                  {topicScaleInfo.partsBreakdown && topicScaleInfo.partsBreakdown.length > 1 && (
                    <div className="pt-2 border-t border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-amber-300">
                          Suggested Multi-Part Series ({topicScaleInfo.partsBreakdown.length} Parts Available):
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedPartNumber(null)}
                          className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                            selectedPartNumber === null ? 'bg-[#FFD600] text-[#004D40]' : 'bg-black/40 text-slate-300'
                          }`}
                        >
                          Single All-in-One Video ({effectiveTargetDurationMinutes}m)
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                        {topicScaleInfo.partsBreakdown.map((part) => {
                          const isPartSelected = selectedPartNumber === part.partNumber;
                          return (
                            <div
                              key={part.partNumber}
                              onClick={() => setSelectedPartNumber(part.partNumber)}
                              className={`p-2.5 rounded-xl border text-left cursor-pointer transition ${
                                isPartSelected
                                  ? 'bg-[#004D40] border-[#FFD600] shadow-sm'
                                  : 'bg-black/30 border-white/10 hover:border-emerald-500'
                              }`}
                            >
                              <div className="flex items-center justify-between text-[11px] font-bold pb-1">
                                <span className="text-[#FFD600]">{part.title.split('—')[0].trim()}</span>
                                <span className="text-slate-400">{part.estimatedDurationMinutes}m</span>
                              </div>
                              <p className="text-xs font-bold text-white line-clamp-1">{part.title.split('—')[1]?.trim() || part.title}</p>
                              <p className="text-[10.5px] text-emerald-300/80 line-clamp-1">{part.focus}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Exam Year Filter Bar — Chip Picker */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                      📅 Filter by Year
                    </label>
                    {yearMode === 'specific' && (
                      <span className="text-[10px] text-amber-300 font-bold">
                        Showing {specificYear} only
                      </span>
                    )}
                    {yearMode === 'any' && (
                      <span className="text-[10px] text-emerald-400 font-bold">
                        All years selected
                      </span>
                    )}
                    {yearMode === 'range' && (
                      <span className="text-[10px] text-emerald-400 font-bold">
                        {yearRange[0]}–{yearRange[1]}
                      </span>
                    )}
                  </div>

                  {/* Year chips — tap to filter instantly */}
                  <div className="flex flex-wrap gap-2 items-center">
                    {/* All Years chip */}
                    <button
                      type="button"
                      onClick={() => setYearMode('any')}
                      className={`px-3 py-1.5 rounded-full text-xs font-black transition border ${
                        yearMode === 'any'
                          ? 'bg-[#FFD600] text-[#004D40] border-[#FFD600] shadow-sm'
                          : 'bg-black/30 text-slate-300 border-white/20 hover:border-emerald-400 hover:text-white'
                      }`}
                    >
                      All Years
                    </button>

                    {/* Individual year chips from real data */}
                    {availableYears.map(yr => (
                      <button
                        key={yr}
                        type="button"
                        onClick={() => {
                          setYearMode('specific');
                          setSpecificYear(yr);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-black transition border ${
                          yearMode === 'specific' && specificYear === yr
                            ? 'bg-emerald-500 text-white border-emerald-400 shadow-sm'
                            : 'bg-black/30 text-slate-300 border-white/20 hover:border-emerald-400 hover:text-white'
                        }`}
                      >
                        {yr}
                      </button>
                    ))}

                    {/* Custom range toggle */}
                    <button
                      type="button"
                      onClick={() => setYearMode('range')}
                      className={`px-3 py-1.5 rounded-full text-xs font-black transition border ${
                        yearMode === 'range'
                          ? 'bg-purple-600 text-white border-purple-400 shadow-sm'
                          : 'bg-black/30 text-slate-300 border-white/20 hover:border-purple-400 hover:text-white'
                      }`}
                    >
                      Range…
                    </button>
                  </div>

                  {/* Range inputs shown inline when range is active */}
                  {yearMode === 'range' && (
                    <div className="flex items-center space-x-2 pt-1">
                      <span className="text-xs text-slate-400">From</span>
                      <input
                        type="number"
                        value={yearRange[0]}
                        onChange={(e) => setYearRange([parseInt(e.target.value) || 2018, yearRange[1]])}
                        className="w-20 bg-[#071912] border border-white/20 rounded-xl px-2 py-1 text-xs text-white"
                      />
                      <span className="text-xs text-slate-400">to</span>
                      <input
                        type="number"
                        value={yearRange[1]}
                        onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value) || 2025])}
                        className="w-20 bg-[#071912] border border-white/20 rounded-xl px-2 py-1 text-xs text-white"
                      />
                    </div>
                  )}
                </div>

                {/* Row 4: Question Selection Mode, Difficulty & Count */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Selection Mode */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                        Question Selection Mode
                      </label>
                      <div className="flex items-center space-x-3 text-xs text-white font-medium pt-1">
                        <label className="flex items-center space-x-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="selMode"
                            checked={selectionMode === 'auto'}
                            onChange={() => setSelectionMode('auto')}
                            className="text-[#004D40] accent-[#FFD600]"
                          />
                          <span className={selectionMode === 'auto' ? 'text-[#FFD600] font-bold' : ''}>Auto Select</span>
                        </label>

                        <label className="flex items-center space-x-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="selMode"
                            checked={selectionMode === 'manual'}
                            onChange={() => setSelectionMode('manual')}
                            className="text-[#004D40] accent-[#FFD600]"
                          />
                          <span className={selectionMode === 'manual' ? 'text-[#FFD600] font-bold' : ''}>Manual Select</span>
                        </label>

                        <label className="flex items-center space-x-1.5 cursor-pointer">
                          <input
                            type="radio"
                            name="selMode"
                            checked={selectionMode === 'random'}
                            onChange={() => setSelectionMode('random')}
                            className="text-[#004D40] accent-[#FFD600]"
                          />
                          <span className={selectionMode === 'random' ? 'text-[#FFD600] font-bold' : ''}>Random</span>
                        </label>
                      </div>
                    </div>

                    {/* Difficulty */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                        Difficulty
                      </label>
                      <select
                        value={difficultyFilter}
                        onChange={(e) => setDifficultyFilter(e.target.value as any)}
                        className="w-full bg-[#071912] border border-[#00796B] rounded-xl px-3 py-2 text-xs text-white font-bold"
                      >
                        <option value="All">Mixed / Standard</option>
                        <option value="Easy">Easy Level</option>
                        <option value="Medium">Medium Level</option>
                        <option value="Hard">Hard / Advanced Level</option>
                      </select>
                    </div>

                    {/* Question Count */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider">
                          Number of Questions: {questionCount}
                        </label>
                        <span className="text-[10px] text-amber-300 font-bold">
                          Max: 10
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value={questionCount}
                        onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                        className="w-full accent-[#FFD600]"
                      />
                    </div>
                  </div>

                  {/* Recommendation Badge */}
                  <div className="p-2.5 rounded-lg bg-[#004D40]/50 border border-[#00796B]/50 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className="text-amber-300 text-sm">💡</span>
                      <span className="text-emerald-100">{recommendedInfo.reason}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setQuestionCount(recommendedInfo.count)}
                      className="px-2 py-1 rounded bg-[#FFD600] text-[#004D40] font-bold text-[10.5px] shrink-0 hover:bg-amber-300"
                    >
                      Use Recommended ({recommendedInfo.count})
                    </button>
                  </div>
                </div>

                {/* Row 5: Matching Past Questions Summary Bar */}
                <div className="p-4 rounded-xl border transition space-y-3 bg-[#071912] border-[#00796B]/60">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                      <h4 className="text-sm font-black text-white">
                        {matchedDatabaseQuestions.length} MATCHING PAST QUESTIONS FOUND
                      </h4>
                      <span className="text-xs text-emerald-300 font-bold">
                        ({currentlyChosenQuestions.length} Selected for Video)
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => setIsReviewQuestionsOpen(true)}
                        className="px-3 py-1.5 rounded-lg bg-[#004D40] hover:bg-[#00796B] text-[#FFD600] font-bold text-xs border border-[#FFD600]/30 transition"
                      >
                        🔍 Review &amp; Pick from All {matchedDatabaseQuestions.length}
                      </button>
                    </div>
                  </div>

                  {/* Empty State when 0 questions match */}
                  {matchedDatabaseQuestions.length === 0 ? (
                    <div className="p-5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-left space-y-3">
                      <div className="flex items-center space-x-2 text-amber-300 font-bold text-sm">
                        <span>⚠️</span>
                        <span>No matching past questions found for this topic and paper combination.</span>
                      </div>
                      <p className="text-xs text-amber-100/90 leading-relaxed">
                        StudyPlug strictly pulls authentic questions from the database and will <strong>never fabricate or hallucinate</strong> past examination questions.
                      </p>
                      <div className="flex items-center gap-2 flex-wrap pt-1">
                        <button
                          type="button"
                          onClick={() => setYearMode('any')}
                          className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-200 border border-amber-500/40 text-xs font-bold hover:bg-amber-500/30"
                        >
                          Broaden to Any Year
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedPaperTypes(['OBJ', 'Theory'])}
                          className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-200 border border-amber-500/40 text-xs font-bold hover:bg-amber-500/30"
                        >
                          Include Objective &amp; Theory
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedExam('WAEC')}
                          className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-200 border border-amber-500/40 text-xs font-bold hover:bg-amber-500/30"
                        >
                          Switch to WAEC
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Selected Questions Preview — shows only chosen questions */
                    <div className="space-y-2">
                      {currentlyChosenQuestions.length === 0 ? (
                        <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-400 text-center">
                          No questions selected yet. Use "Review &amp; Pick" to choose manually, or switch to Auto Select above.
                        </div>
                      ) : (
                        <div className="max-h-64 overflow-y-auto space-y-2 pr-1">
                          {currentlyChosenQuestions.map((q) => {
                            const isChecked = selectedQuestionIds.includes(q.id);
                            return (
                              <div
                                key={q.id}
                                onClick={() => {
                                  setSelectedQuestionIds(prev =>
                                    isChecked ? prev.filter(id => id !== q.id) : [...prev, q.id]
                                  );
                                }}
                                className="p-3 rounded-xl border text-left transition cursor-pointer flex items-start space-x-3 bg-[#004D40]/80 border-[#FFD600]"
                              >
                                <input
                                  type="checkbox"
                                  checked={true}
                                  readOnly
                                  className="mt-1 rounded text-[#004D40] accent-[#FFD600]"
                                />
                                <div className="flex-1 text-xs space-y-1">
                                  <div className="flex items-center justify-between pb-1 flex-wrap gap-1">
                                    <span className="px-2 py-0.5 rounded font-black text-[10px] tracking-wider uppercase bg-[#FFD600] text-[#004D40]">
                                      {q.sourceLabel}
                                    </span>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                      q.paperType === 'Practical'
                                        ? 'bg-purple-900/80 text-purple-200 border border-purple-500/40'
                                        : q.paperType === 'Theory'
                                        ? 'bg-blue-900/80 text-blue-200 border border-blue-500/40'
                                        : 'bg-emerald-900/80 text-emerald-200 border border-emerald-500/40'
                                    }`}>
                                      {q.paperName}
                                    </span>
                                  </div>

                                  <p className="text-white line-clamp-2 font-medium">
                                    {renderQuestionText(q.text, q.imageUrl, q.imageSvg)}
                                  </p>

                                  {q.paperType === 'OBJ' && (
                                    <div className="text-[11px] text-emerald-300 font-bold">
                                      Correct Answer: Option {q.correctAnswer}
                                    </div>
                                  )}
                                  {q.paperType === 'Theory' && (
                                    <div className="text-[11px] text-blue-300 font-bold">
                                      Theory Breakdown: {q.parts?.length || 1} Parts • {q.totalMarks || 10} Total Marks
                                    </div>
                                  )}
                                  {q.paperType === 'Practical' && (
                                    <div className="text-[11px] text-purple-300 font-bold">
                                      Practical Experiment: Apparatus, Observations, Graph &amp; Precautions
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Primary Action Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
                  <div className="text-xs text-emerald-200">
                    Active Video Setup: <strong>{is100DaysMode ? `100 Days to JAMB (Day ${jambDayNumber}) • ${selectedSubject}` : `${selectedExam} ${selectedSubject}`}</strong> • Topic: <strong>{selectedTopic}</strong> • <strong>{effectiveTargetDurationMinutes} Min ({topicScaleInfo.scale.replace('_', ' ')})</strong>
                  </div>
                  <button
                    type="button"
                    disabled={currentlyChosenQuestions.length === 0}
                    onClick={handleGenerateFull12MinMasterclass}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FFD600] to-amber-400 text-[#004D40] font-black text-sm shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer flex items-center space-x-2 disabled:opacity-40 disabled:hover:scale-100"
                  >
                    <span>
                      ⚡ {is100DaysMode ? `GENERATE DAY ${jambDayNumber} VIDEO (${effectiveTargetDurationMinutes} MIN)` : `CREATE ${effectiveTargetDurationMinutes}-MINUTE VIDEO (${selectedPaperTypes.join(' + ')})`}
                    </span>
                    <span>→</span>
                  </button>
                </div>

                {/* Detailed Question Review Modal Drawer */}
                {isReviewQuestionsOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
                    <div className="relative w-full max-w-3xl bg-[#0D241C] border border-[#00796B] rounded-[24px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                      <div className="bg-[#004D40] p-4 text-white flex items-center justify-between">
                        <div>
                          <h3 className="text-base font-bold text-white flex items-center space-x-2">
                            <span>🔍 Review &amp; Select Questions</span>
                            <span className="px-2 py-0.5 rounded bg-[#FFD600] text-[#004D40] text-xs font-black">
                              {currentlyChosenQuestions.length} of {matchedDatabaseQuestions.length} Chosen
                            </span>
                          </h3>
                          <p className="text-xs text-emerald-200">
                            {selectedExam} • {selectedSubject} • {selectedTopic}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsReviewQuestionsOpen(false)}
                          className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-sm font-bold"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="p-4 overflow-y-auto space-y-3 flex-1 text-left">
                        {matchedDatabaseQuestions.map((q) => {
                          const isChecked = selectedQuestionIds.includes(q.id);
                          return (
                            <div
                              key={q.id}
                              onClick={() => {
                                setSelectedQuestionIds(prev =>
                                  isChecked ? prev.filter(id => id !== q.id) : [...prev, q.id]
                                );
                              }}
                              className={`p-4 rounded-xl border transition cursor-pointer space-y-2 ${
                                isChecked
                                  ? 'bg-[#004D40]/90 border-[#FFD600]'
                                  : 'bg-[#071912] border-white/10 hover:border-emerald-500'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="px-2.5 py-0.5 rounded text-xs font-black uppercase bg-[#FFD600] text-[#004D40]">
                                  {q.sourceLabel}
                                </span>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  readOnly
                                  className="rounded text-[#004D40] accent-[#FFD600] scale-125"
                                />
                              </div>

                              <p className="text-sm font-bold text-white leading-relaxed">
                                {renderQuestionText(q.text, q.imageUrl, q.imageSvg)}
                              </p>

                              {q.paperType === 'OBJ' && q.options && (
                                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                                  {q.options.map(opt => (
                                    <div
                                      key={opt.key}
                                      className={`p-2 rounded border ${
                                        opt.key === q.correctAnswer
                                          ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300 font-bold'
                                          : 'bg-black/30 border-white/5 text-slate-300'
                                      }`}
                                    >
                                      <strong>{opt.key}:</strong> {opt.text}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {q.paperType === 'Theory' && q.parts && (
                                <div className="space-y-1.5 pt-1 text-xs">
                                  {q.parts.map(part => (
                                    <div key={part.label} className="p-2 rounded bg-black/40 border border-white/5 text-slate-200">
                                      <strong className="text-amber-300">{part.label}</strong> {part.text} <span className="text-emerald-400 font-bold">[{part.marks} Marks]</span>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {q.paperType === 'Practical' && (
                                <div className="p-2 rounded bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 space-y-1">
                                  <div><strong>Apparatus:</strong> {q.apparatus?.join(', ')}</div>
                                  <div><strong>Precautions:</strong> {q.precautions?.slice(0, 2).join('; ')}</div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <div className="p-4 bg-[#071912] border-t border-white/10 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setIsReviewQuestionsOpen(false)}
                          className="px-5 py-2 rounded-xl bg-[#FFD600] text-[#004D40] font-black text-xs hover:bg-amber-300"
                        >
                          Confirm Selection ({currentlyChosenQuestions.length} Questions)
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              TAB 2: TOP CONCEPTS EXTRACTION & EDITOR
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'top_concepts' && (
            <div className="max-w-5xl mx-auto space-y-5 animate-fadeIn text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <span>2. Suggested Top Concepts</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#004D40] text-[#FFD600]">
                      {topConcepts.filter(c => c.isSelected).length} Selected
                    </span>
                  </h3>
                  <p className="text-xs text-emerald-200">
                    Intelligently extracted from StudyPlug note. Add, remove, or edit concepts before script compilation.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('script_editor')}
                  className="px-5 py-2 rounded-xl bg-[#FFD600] text-[#004D40] font-black text-xs hover:bg-amber-300 transition cursor-pointer"
                >
                  Confirm Concepts &amp; Edit Script →
                </button>
              </div>

              {/* Concept Cards */}
              <div className="space-y-4">
                {topConcepts.map((concept, idx) => (
                  <div
                    key={concept.id}
                    className={`p-4 rounded-[16px] border-2 transition text-left space-y-3 ${
                      concept.isSelected
                        ? 'bg-[#0D241C] border-[#00796B]'
                        : 'bg-[#071912] border-white/10 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={concept.isSelected}
                          onChange={(e) => {
                            const val = e.target.checked;
                            setTopConcepts(prev =>
                              prev.map(c => (c.id === concept.id ? { ...c, isSelected: val } : c))
                            );
                          }}
                          className="w-4 h-4 rounded text-[#004D40]"
                        />
                        <h4 className="font-extrabold text-sm text-white">
                          Concept {idx + 1}: {concept.title}
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setTopConcepts(prev => prev.filter(c => c.id !== concept.id));
                        }}
                        className="text-xs text-red-400 hover:text-red-300 cursor-pointer"
                      >
                        Remove ✕
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-emerald-300 block">Explanation:</label>
                        <textarea
                          rows={2}
                          value={concept.explanation}
                          onChange={(e) => {
                            const val = e.target.value;
                            setTopConcepts(prev =>
                              prev.map(c => (c.id === concept.id ? { ...c, explanation: val } : c))
                            );
                          }}
                          className="w-full bg-[#071912] border border-white/15 rounded-lg p-2 text-white text-xs"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-[#FFD600] block">Rule or Formula:</label>
                        <input
                          type="text"
                          value={concept.ruleOrFormula || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            setTopConcepts(prev =>
                              prev.map(c => (c.id === concept.id ? { ...c, ruleOrFormula: val } : c))
                            );
                          }}
                          className="w-full bg-[#071912] border border-white/15 rounded-lg p-2 text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Concept Box */}
                <div className="p-3.5 rounded-xl bg-[#071912] border border-dashed border-white/20 flex items-center space-x-3">
                  <input
                    type="text"
                    value={newConceptTitle}
                    onChange={(e) => setNewConceptTitle(e.target.value)}
                    placeholder="Add custom concept title (e.g. Relative Velocity)..."
                    className="flex-1 bg-transparent border-none text-xs text-white focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!newConceptTitle.trim()) return;
                      setTopConcepts(prev => [
                        ...prev,
                        {
                          id: `concept-custom-${Date.now()}`,
                          title: newConceptTitle.trim(),
                          explanation: `Detailed explanation of ${newConceptTitle.trim()}.`,
                          ruleOrFormula: 'Core Law & Calculation',
                          isSelected: true
                        }
                      ]);
                      setNewConceptTitle('');
                    }}
                    className="px-3 py-1.5 rounded-lg bg-[#004D40] text-[#FFD600] text-xs font-bold hover:bg-[#003B32]"
                  >
                    + Add Concept
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              TAB 3: AI SCRIPT EDITOR
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'script_editor' && (
            <div className="max-w-5xl mx-auto space-y-5 animate-fadeIn text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <span>3. 12-Minute Nigerian Teacher Script</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#004D40] text-[#FFD600]">
                      {scriptSections.length} Sections
                    </span>
                  </h3>
                  <p className="text-xs text-emerald-200">
                    Sounds like an authentic secondary tutor. Dedicated phonetic field prepared for Voicebox cloning.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('verification')}
                  className="px-5 py-2 rounded-xl bg-[#FFD600] text-[#004D40] font-black text-xs hover:bg-amber-300"
                >
                  Verify Content Safety →
                </button>
              </div>

              {/* Sections list */}
              <div className="space-y-4">
                {scriptSections.map((sec, idx) => (
                  <div
                    key={sec.id}
                    className="bg-[#0D241C] p-4 rounded-[16px] border border-[#00796B]/40 space-y-2.5"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center space-x-2">
                        <span className="w-6 h-6 rounded-full bg-[#004D40] text-[#FFD600] font-bold text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-sm text-white">{sec.title}</h4>
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] font-bold uppercase">
                          {sec.type}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-amber-300">~{sec.durationSeconds}s</span>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-emerald-200 block">
                        Teacher Spoken Narration:
                      </label>
                      <textarea
                        rows={3}
                        value={sec.spokenNarration}
                        onChange={(e) => {
                          const val = e.target.value;
                          setScriptSections(prev =>
                            prev.map(s => (s.id === sec.id ? { ...s, spokenNarration: val, narrationText: phoneticSanitize(val) } : s))
                          );
                        }}
                        className="w-full bg-[#071912] border border-white/15 rounded-xl p-3 text-xs text-white leading-relaxed focus:outline-none focus:border-[#FFD600]"
                      />
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#071912] border border-white/10 text-xs">
                      <span className="text-[10px] font-bold text-amber-400 block uppercase">
                        Voicebox Phonetic Reading (Spoken Pronunciation):
                      </span>
                      <p className="text-[11px] text-slate-300 font-mono mt-0.5">{sec.narrationText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              TAB 4: CONTENT SAFETY VERIFICATION
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'verification' && validationResult && (
            <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn text-left">
              <div className="bg-[#0D241C] p-6 rounded-[20px] border border-[#00796B]/50 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">4. Content Safety &amp; Integrity Audit</h3>
                    <p className="text-xs text-emerald-200">
                      Confirms syllabus alignment, genuine question IDs, answer keys, and lack of AI clichés.
                    </p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-emerald-500 text-stone-900 font-black text-sm">
                    {validationResult.summary}
                  </div>
                </div>

                <div className="space-y-3">
                  {validationResult.checks.map((chk, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-emerald-500/30 bg-[#071912] flex items-start space-x-3 text-xs"
                    >
                      <span className="text-base mt-0.5">✅</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-white">{chk.name}</h4>
                          <span className="text-[10px] font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded">
                            {chk.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-slate-300 mt-0.5">{chk.description}</p>
                        {chk.detail && <p className="text-[11px] text-emerald-300 font-mono mt-0.5">{chk.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setActiveTab('script_editor')}
                    className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-bold"
                  >
                    ← Back to Script
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('voicebox')}
                    className="px-6 py-2.5 rounded-xl bg-[#FFD600] text-[#004D40] font-black text-xs hover:bg-amber-300"
                  >
                    Configure Voicebox Voice Clone →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              TAB 5: VOICEBOX CLONE INTEGRATION
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'voicebox' && (
            <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn text-left">
              <div className="bg-[#0D241C] p-6 rounded-[20px] border border-[#00796B]/50 space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                      <span>5. Voicebox Voice Clone Provider</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#FFD600] text-[#004D40]">
                        Primary Provider
                      </span>
                    </h3>
                    <p className="text-xs text-emerald-200">
                      Scene-by-scene audio narration synthesis with natural Nigerian teacher pacing and pauses.
                    </p>
                  </div>
                  <span className="text-xs text-emerald-300 font-mono">
                    API Secured (Server-Side)
                  </span>
                </div>

                {/* Voicebox Clones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {VOICEBOX_PROFILES.map((prof) => {
                    const isSelected = voiceboxConfig.profileId === prof.id;
                    return (
                      <div
                        key={prof.id}
                        onClick={() => {
                          setVoiceboxConfig(prev => ({
                            ...prev,
                            profileId: prof.id,
                            profileName: prof.name,
                            stability: prof.stability,
                            clarity: prof.clarity,
                            pace: prof.pace
                          }));
                        }}
                        className={`p-4 rounded-xl border-2 transition cursor-pointer text-left space-y-2 ${
                          isSelected
                            ? 'bg-[#004D40] border-[#FFD600] shadow-md'
                            : 'bg-[#071912] border-white/10 hover:border-emerald-500'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-sm text-white">{prof.name}</span>
                          <span className="px-2 py-0.5 rounded bg-black/40 text-[#FFD600] text-[10px] font-bold uppercase">
                            {prof.accent.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <p className="text-xs text-emerald-100/80 leading-relaxed">{prof.description}</p>
                        <div className="flex items-center space-x-4 text-[11px] text-slate-400 pt-1 border-t border-white/10">
                          <span>Stability: {prof.stability * 100}%</span>
                          <span>Clarity: {prof.clarity * 100}%</span>
                          <span>Speed: {prof.pace}x</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Voicebox Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-emerald-200">
                      Speaking Speed: {voiceboxConfig.pace}x
                    </label>
                    <input
                      type="range"
                      min="0.8"
                      max="1.3"
                      step="0.05"
                      value={voiceboxConfig.pace}
                      onChange={(e) => setVoiceboxConfig(prev => ({ ...prev, pace: parseFloat(e.target.value) }))}
                      className="w-full accent-[#FFD600]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-emerald-200">
                      Voice Stability: {Math.round(voiceboxConfig.stability * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="1.0"
                      step="0.05"
                      value={voiceboxConfig.stability}
                      onChange={(e) => setVoiceboxConfig(prev => ({ ...prev, stability: parseFloat(e.target.value) }))}
                      className="w-full accent-[#FFD600]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-emerald-200">
                      Question Pause Length: {voiceboxConfig.pauseLengthMs}ms
                    </label>
                    <input
                      type="range"
                      min="200"
                      max="800"
                      step="50"
                      value={voiceboxConfig.pauseLengthMs}
                      onChange={(e) => setVoiceboxConfig(prev => ({ ...prev, pauseLengthMs: parseInt(e.target.value) }))}
                      className="w-full accent-[#FFD600]"
                    />
                  </div>
                </div>

                {/* Voice Test Sample */}
                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof window !== 'undefined' && window.speechSynthesis) {
                        window.speechSynthesis.cancel();
                        const sampleText = phoneticSanitize(
                          `Good day scholars! Welcome to StudyPlug. Today we are tackling ${selectedTopic} in ${selectedExam} ${selectedSubject}. Take a few seconds and choose your answer.`
                        );
                        const utt = new SpeechSynthesisUtterance(sampleText);
                        utt.rate = voiceboxConfig.pace;
                        window.speechSynthesis.speak(utt);
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition cursor-pointer flex items-center space-x-1.5"
                  >
                    <span>🔊</span>
                    <span>Test Voicebox Voice Clone</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('scene_timeline')}
                    className="px-6 py-2.5 rounded-xl bg-[#FFD600] text-[#004D40] font-black text-xs hover:bg-amber-300"
                  >
                    Inspect Scene Timeline →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              TAB 6: SCENE TIMELINE
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'scene_timeline' && (
            <div className="max-w-6xl mx-auto space-y-5 animate-fadeIn text-left">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <span>6. Educational Scene Timeline</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#004D40] text-[#FFD600]">
                      {videoScenes.length} Scenes
                    </span>
                  </h3>
                  <p className="text-xs text-emerald-200">
                    Subject Theme: <strong>{videoScenes[0]?.subjectTheme.toUpperCase()}</strong> • Structured educational layout.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('player_export')}
                  className="px-5 py-2.5 rounded-xl bg-[#FFD600] text-[#004D40] font-black text-xs hover:bg-amber-300"
                >
                  Proceed to Video Player &amp; Render →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videoScenes.map((scene, idx) => (
                  <div
                    key={scene.sceneId}
                    className="p-4 rounded-[16px] bg-[#0D241C] border border-[#00796B]/40 space-y-2 text-left"
                  >
                    <div className="flex items-center justify-between text-xs pb-1.5 border-b border-white/10">
                      <span className="font-bold text-[#FFD600]">SCENE {idx + 1}</span>
                      <span className="px-2 py-0.5 rounded bg-black/40 text-emerald-300 font-mono text-[10px]">
                        {scene.durationSeconds}s
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-white leading-tight">{scene.title}</h4>
                    <p className="text-[11px] text-slate-300 line-clamp-2">{scene.narrationText}</p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5">
                      <span>Type: {scene.sceneType}</span>
                      <span>Progress: {scene.progressPercent}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              TAB 7: PLAYER & VIDEO EXPORTER
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'player_export' && (
            <div className="max-w-5xl mx-auto space-y-5 animate-fadeIn text-left">
              <div className="bg-[#0D241C] p-5 sm:p-6 rounded-[20px] border border-[#00796B]/50 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center space-x-2">
                      <span>7. Interactive Player &amp; Video Export</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#004D40] text-[#FFD600]">
                        1920 × 1080 Full HD
                      </span>
                    </h3>
                    <p className="text-xs text-emerald-200">
                      Preview before final render. Test thinking timer, progressive calculations, and transitions.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setShowCostConfirmModal(true)}
                      disabled={isExporting}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-black text-xs shadow-md hover:scale-105 active:scale-95 transition cursor-pointer disabled:opacity-40 flex items-center space-x-1.5"
                    >
                      <span>🎬</span>
                      <span>Render &amp; Download Final Video</span>
                    </button>
                  </div>
                </div>

                {/* Canvas Display */}
                <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border-2 border-white/10 flex items-center justify-center shadow-2xl">
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain"
                  />
                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={handleTogglePlay}
                      className="absolute w-16 h-16 rounded-full bg-[#FFD600] text-[#004D40] flex items-center justify-center text-2xl font-black shadow-2xl hover:scale-110 active:scale-90 transition cursor-pointer"
                    >
                      ▶
                    </button>
                  )}
                </div>

                {/* Scrubber Controls */}
                <div className="p-3.5 rounded-xl bg-[#071912] border border-white/10 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="w-10 h-10 rounded-xl bg-[#004D40] text-white flex items-center justify-center text-base font-bold hover:bg-[#003B32] transition cursor-pointer shrink-0"
                  >
                    {isPlaying ? '⏸' : '▶'}
                  </button>

                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-emerald-300">
                      <span>{Math.floor(currentPlaySec / 60)}:{(Math.floor(currentPlaySec % 60)).toString().padStart(2, '0')}</span>
                      <span>Scene {activeSceneIndex + 1} of {videoScenes.length}</span>
                      <span>{Math.floor(totalPlaySec / 60)}:{(Math.floor(totalPlaySec % 60)).toString().padStart(2, '0')}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-black/50 overflow-hidden">
                      <div
                        className="h-full bg-[#FFD600] transition-all"
                        style={{ width: `${totalPlaySec > 0 ? (currentPlaySec / totalPlaySec) * 100 : 0}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Export Progress */}
                {isExporting && (
                  <div className="p-4 rounded-xl bg-amber-950/80 border border-amber-500 space-y-2 animate-fadeIn">
                    <div className="flex justify-between text-xs font-bold text-amber-200">
                      <span>{exportStatusText}</span>
                      <span>{exportProgress}%</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-black/50 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-[#FFD600] transition-all duration-200"
                        style={{ width: `${exportProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              TAB 8: 3 TITLES, SEO & PINNED COMMENT
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'seo_thumbnail' && seoData && (
            <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn text-left">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Left: Thumbnail Studio */}
                <div className="bg-[#0D241C] p-5 rounded-[20px] border border-[#00796B]/50 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h4 className="font-bold text-sm text-white">YouTube Thumbnail Studio</h4>
                    <button
                      type="button"
                      onClick={() => {
                        if (thumbnailCanvasRef.current) {
                          exportThumbnailPng(
                            thumbnailCanvasRef.current,
                            `StudyPlug_${selectedExam}_${selectedSubject}_${selectedTopic}.png`
                          );
                        }
                      }}
                      className="px-3 py-1.5 rounded-xl bg-[#004D40] text-[#FFD600] font-black text-xs hover:bg-[#003B32] transition cursor-pointer flex items-center space-x-1"
                    >
                      <span>📥</span>
                      <span>Download PNG</span>
                    </button>
                  </div>

                  <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/20">
                    <canvas
                      ref={thumbnailCanvasRef}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <label className="font-bold text-emerald-200 block mb-1">Hook Text on Thumbnail:</label>
                      <input
                        type="text"
                        value={thumbnailHook}
                        onChange={(e) => setThumbnailHook(e.target.value)}
                        className="w-full bg-[#071912] border border-white/15 rounded-lg px-3 py-2 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: 3 Title Options & Pinned Comment */}
                <div className="bg-[#0D241C] p-5 rounded-[20px] border border-[#00796B]/50 space-y-4">
                  <div className="border-b border-white/10 pb-3">
                    <h4 className="font-bold text-sm text-white">3 Title Options &amp; Pinned Comment</h4>
                  </div>

                  {/* 3 Title Options */}
                  <div className="space-y-2">
                    <label className="font-bold text-[#FFD600] text-xs block">Choose Title Variation:</label>
                    {seoData.titleOptions.map((opt) => (
                      <div
                        key={opt.id}
                        onClick={() => {
                          setSelectedTitleId(opt.id);
                          setSeoData(prev => prev ? ({ ...prev, title: opt.title }) : null);
                        }}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition ${
                          selectedTitleId === opt.id
                            ? 'bg-[#004D40] border-[#FFD600]'
                            : 'bg-[#071912] border-white/10 hover:border-emerald-500'
                        }`}
                      >
                        <div className="flex items-center justify-between pb-1">
                          <span className="font-bold text-white">{opt.style}</span>
                          {opt.isRecommended && (
                            <span className="px-2 py-0.5 rounded bg-amber-400 text-stone-900 text-[9px] font-black uppercase">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="text-emerald-100">{opt.title}</p>
                      </div>
                    ))}
                  </div>

                  {/* Pinned Comment Box */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <label className="font-bold text-[#FFD600] text-xs">Suggested Pinned Comment:</label>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(seoData.pinnedComment);
                          setCopiedCommentFeedback(true);
                          setTimeout(() => setCopiedCommentFeedback(false), 2000);
                        }}
                        className="text-[11px] text-amber-300 font-bold hover:underline"
                      >
                        {copiedCommentFeedback ? '✓ Copied' : '📋 Copy Comment'}
                      </button>
                    </div>
                    <textarea
                      rows={3}
                      readOnly
                      value={seoData.pinnedComment}
                      className="w-full bg-[#071912] border border-white/10 rounded-xl p-2.5 text-xs text-slate-300 font-sans"
                    />
                  </div>

                  {/* Copy Description with Chapters */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(seoData.description);
                        setCopiedChapterFeedback(true);
                        setTimeout(() => setCopiedChapterFeedback(false), 2000);
                      }}
                      className="w-full py-2.5 rounded-xl bg-[#004D40] hover:bg-[#003B32] text-white font-bold text-xs transition cursor-pointer"
                    >
                      {copiedChapterFeedback ? '✓ Description Copied!' : '📋 Copy YouTube Description with Chapters'}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════════
              TAB 9: SAVED PROJECTS
          ══════════════════════════════════════════════════════════════════ */}
          {activeTab === 'library' && (
            <div className="max-w-5xl mx-auto space-y-5 animate-fadeIn text-left">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <span>StudyPlug YouTube Projects Library</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#004D40] text-[#FFD600]">
                      {savedProjects.length} Projects
                    </span>
                  </h3>
                  <p className="text-xs text-emerald-200">
                    Re-open saved drafts, duplicate projects, or export ready videos.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentProjectId(`proj-${Date.now()}`);
                    setActiveTab('select_content');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#FFD600] text-[#004D40] font-black text-xs hover:bg-amber-300 transition cursor-pointer"
                >
                  + New 12-Min Project
                </button>
              </div>

              {savedProjects.length === 0 ? (
                <div className="p-12 text-center bg-[#0D241C] rounded-[20px] border border-white/10 space-y-3">
                  <div className="text-4xl">📁</div>
                  <h4 className="font-bold text-white text-sm">No Saved Projects Yet</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Select a topic and generate a 12-minute lesson masterclass to save your first project.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded-[16px] border border-white/10 bg-[#0D241C]">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#00382E] text-emerald-200 border-b border-white/10 uppercase text-[10px] tracking-wider">
                      <tr>
                        <th className="p-3.5">Title</th>
                        <th className="p-3.5">Subject</th>
                        <th className="p-3.5">Duration</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {savedProjects.map(proj => (
                        <tr key={proj.id} className="hover:bg-white/5 transition">
                          <td className="p-3.5 font-bold text-white">{proj.title}</td>
                          <td className="p-3.5 text-emerald-300">{proj.subject}</td>
                          <td className="p-3.5 text-amber-300 font-mono">{proj.videoPlan?.formattedDuration || '12 min'}</td>
                          <td className="p-3.5">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#004D40] text-[#FFD600] border border-[#FFD600]/30 uppercase">
                              {proj.status}
                            </span>
                          </td>
                          <td className="p-3.5 flex items-center space-x-2">
                            <button
                              type="button"
                              onClick={() => handleLoadProject(proj)}
                              className="px-2.5 py-1 rounded bg-[#004D40] text-white hover:bg-[#003B32] font-bold text-[11px]"
                            >
                              Open &amp; Edit
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (confirm('Delete project?')) {
                                  setSavedProjects(prev => prev.filter(p => p.id !== proj.id));
                                }
                              }}
                              className="px-2 py-1 rounded bg-red-950 text-red-300 hover:bg-red-900 font-bold text-[11px]"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

        </div>

        {/* ─── Cost Control Confirmation Modal ─── */}
        {showCostConfirmModal && costEstimate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-fadeIn">
            <div className="bg-[#0D241C] p-6 rounded-[24px] border-2 border-amber-400 max-w-md w-full space-y-4 text-left shadow-2xl">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">💰</span>
                <h3 className="font-extrabold text-base text-white">Cost Control &amp; Render Confirmation</h3>
              </div>
              <p className="text-xs text-slate-300">
                StudyPlug calculates estimated Voicebox voice synthesis and 1080p video rendering costs before execution:
              </p>

              <div className="p-3.5 rounded-xl bg-[#071912] border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Estimated Duration:</span>
                  <span className="font-bold text-white">{videoPlan?.formattedDuration || '12 min'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Voicebox Narration ({costEstimate.totalWords} words):</span>
                  <span className="font-bold text-emerald-300">₦{costEstimate.voiceNaira.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Educational Visual Rendering ({videoScenes.length} scenes):</span>
                  <span className="font-bold text-emerald-300">₦{costEstimate.visualNaira.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Compilation &amp; Audio Sync:</span>
                  <span className="font-bold text-emerald-300">₦{costEstimate.renderingNaira.toLocaleString()}</span>
                </div>
                <div className="border-t border-white/10 pt-2 flex justify-between text-sm font-black">
                  <span className="text-amber-300">Total Estimated Cost:</span>
                  <span className="text-[#FFD600]">₦{costEstimate.totalNaira.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center justify-end space-x-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCostConfirmModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCostConfirmModal(false);
                    handleExportVideo();
                  }}
                  className="px-5 py-2 rounded-xl bg-amber-400 text-stone-900 font-extrabold text-xs hover:bg-amber-300 shadow-md"
                >
                  Confirm &amp; Render 1080p Video
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
