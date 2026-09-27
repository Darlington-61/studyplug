import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Question } from '../data/questions';
import { getExamTipForQuestion } from '../utils/examTips';
import { ComprehensionPassageViewer } from './common/ComprehensionPassageViewer';
import {
  ALL_QUESTIONS,
  getBaseQuestionsForSubject,
  getFilteredQuestions,
  getTopicsForSubject,
  getYearsForSubject,
  normalizeSubjectName
} from '../data/allQuestionsHub';
import { ExamType } from './common/ExamLogos';
import {
  QuestionOption,
  DigitalBoardSolution,
  BottomNavigation,
  ExamPills,
  ExamCategory
} from './design-system';

interface SubjectCardConfig {
  year: number | 'all';
  questionCount: number;
  selectedTopics: string[]; // empty or ['all'] means all topics
}

export const PracticeMode: React.FC = () => {
  const {
    setActiveView,
    toggleBookmarkQuestion,
    isQuestionBookmarked,
    openAiTutor,
    openCalculator,
    selectedSubject: appSelectedSubject,
    selectedSubjects: appSelectedSubjects,
    selectedExam: appSelectedExam,
    setSelectedExam: setAppSelectedExam
  } = useApp();

  // ─── Practice Session Control ──────────────────────────────────────────────
  const [isSessionStarted, setIsSessionStarted] = useState<boolean>(false);

  // ─── Speech Synthesis & Question Palette State ─────────────────────────────
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isQuestionPaletteOpen, setIsQuestionPaletteOpen] = useState<boolean>(false);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // ─── Target Exam (synced with AppContext) ──────────────────────────────────
  const selectedExam: ExamCategory = (appSelectedExam as ExamCategory) || 'JAMB';
  const handleSelectExam = (exam: ExamCategory) => {
    if (setAppSelectedExam) {
      setAppSelectedExam(exam as any);
    }
  };

  // ─── Selected Subjects List (1 to 4 max) ──────────────────────────────────
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(() => {
    if (appSelectedSubjects && appSelectedSubjects.length > 0) return appSelectedSubjects;
    if (appSelectedSubject && appSelectedSubject.trim() !== '') return [appSelectedSubject];
    return ['Physics'];
  });

  // ─── Per-Subject Configuration (Year, Question Count, Topics) ─────────────
  const [subjectConfigs, setSubjectConfigs] = useState<Record<string, SubjectCardConfig>>({
    'Use of English': { year: 'all', questionCount: 20, selectedTopics: ['all'] },
    'Mathematics': { year: 'all', questionCount: 20, selectedTopics: ['all'] },
    'Physics': { year: 'all', questionCount: 20, selectedTopics: ['all'] },
    'Chemistry': { year: 'all', questionCount: 20, selectedTopics: ['all'] },
    'Biology': { year: 'all', questionCount: 20, selectedTopics: ['all'] },
    'Economics': { year: 'all', questionCount: 20, selectedTopics: ['all'] },
    'Government': { year: 'all', questionCount: 20, selectedTopics: ['all'] },
    'Literature in English': { year: 'all', questionCount: 20, selectedTopics: ['all'] }
  });

  // Active subject being drilled when session is running
  const [activeSubjectTab, setActiveSubjectTab] = useState<string>(() => {
    return selectedSubjects[0] || 'Physics';
  });

  // Sync local selectedSubjects & activeSubjectTab whenever context subject changes
  useEffect(() => {
    if (appSelectedSubject && appSelectedSubject.trim() !== '') {
      setSelectedSubjects([appSelectedSubject]);
      setActiveSubjectTab(appSelectedSubject);
    }
  }, [appSelectedSubject]);

  // ─── Bottom Global Options ────────────────────────────────────────────────
  const [practiceMode, setPracticeMode] = useState<'study' | 'exam'>('study'); // study = instant solutions, exam = mock
  const [examDurationMins, setExamDurationMins] = useState<number | 'untimed'>('untimed');
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);

  // ─── Modals State ─────────────────────────────────────────────────────────
  const [isSubjectPickerOpen, setIsSubjectPickerOpen] = useState<boolean>(false);
  const [topicModalSubject, setTopicModalSubject] = useState<string | null>(null);
  const [tempSelectedTopics, setTempSelectedTopics] = useState<string[]>([]);
  const [isInstructionOpen, setIsInstructionOpen] = useState<boolean>(false);

  // ─── Active Session Runtime State ─────────────────────────────────────────
  const [practiceIndex, setPracticeIndex] = useState<number>(0);
  const [userSelections, setUserSelections] = useState<Record<number, string>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [isSessionComplete, setIsSessionComplete] = useState<boolean>(false);
  const [isReviewingCorrections, setIsReviewingCorrections] = useState<boolean>(false);
  const [correctionsFilter, setCorrectionsFilter] = useState<'all' | 'incorrect' | 'correct' | 'unanswered'>('all');

  // Available subjects catalog
  const availableSubjectCatalog = [
    { name: 'Physics', icon: '⚛️', count: 1420 },
    { name: 'Mathematics', icon: '📐', count: 1850 },
    { name: 'Use of English', icon: '📖', count: 3144 },
    { name: 'Chemistry', icon: '🧪', count: 1380 },
    { name: 'Biology', icon: '🍃', count: 1560 },
    { name: 'Economics', icon: '📈', count: 980 },
    { name: 'Government', icon: '🏛️', count: 850 },
    { name: 'Commerce', icon: '🏢', count: 820 },
    { name: 'Literature in English', icon: '📚', count: 620 },
    { name: 'CRS', icon: '✝️', count: 750 },
    { name: 'Accounting', icon: '📊', count: 610 },
    { name: 'Geography', icon: '🌍', count: 590 },
    { name: 'Agriculture', icon: '🌱', count: 520 },
    { name: 'Civic Education', icon: '🇳🇬', count: 480 }
  ];

  // Helper to ensure config exists for a subject with complete safety defaults
  const getConfigForSubject = (sub: string): SubjectCardConfig => {
    const found = subjectConfigs[sub];
    if (found && Array.isArray(found.selectedTopics)) {
      return found;
    }
    return { year: 'all', questionCount: 20, selectedTopics: ['all'] };
  };

  const updateSubjectConfig = (sub: string, updates: Partial<SubjectCardConfig>) => {
    setSubjectConfigs((prev) => ({
      ...prev,
      [sub]: { ...getConfigForSubject(sub), ...updates }
    }));
  };

  // Open Topic Modal for a specific subject
  const handleOpenTopicModal = (sub: string) => {
    const current = getConfigForSubject(sub).selectedTopics;
    setTopicModalSubject(sub);
    setTempSelectedTopics(Array.isArray(current) && current.length > 0 ? [...current] : ['all']);
  };

  const handleSaveTopicModal = () => {
    if (!topicModalSubject) return;
    const finalTopics = tempSelectedTopics.length === 0 ? ['all'] : tempSelectedTopics;
    updateSubjectConfig(topicModalSubject, { selectedTopics: finalTopics });
    setTopicModalSubject(null);
  };

  // Compute active question bank for the active subject tab
  const activeSubjectConfig = getConfigForSubject(activeSubjectTab);
  const activeQuestionList = useMemo(() => {
    try {
      const topicsList = Array.isArray(activeSubjectConfig?.selectedTopics)
        ? activeSubjectConfig.selectedTopics
        : ['all'];
      const rawTopic =
        topicsList.includes('all') || topicsList.length === 0 ? 'all' : topicsList[0] || 'all';

      let qs = getFilteredQuestions({
        exam: (selectedExam || 'JAMB') as ExamType,
        subject: activeSubjectTab || 'Physics',
        year: activeSubjectConfig?.year ?? 'all',
        topic: rawTopic,
        limit: activeSubjectConfig?.questionCount ?? 20
      });

      if (!qs || qs.length === 0) {
        qs = getBaseQuestionsForSubject(activeSubjectTab || 'Physics') || [];
      }

      if (shuffleQuestions && qs.length > 1) {
        return [...qs].sort(() => 0.5 - Math.random());
      }
      return qs && qs.length > 0 ? qs : ALL_QUESTIONS.slice(0, 20);
    } catch (err) {
      console.warn('activeQuestionList generation fallback:', err);
      return ALL_QUESTIONS.slice(0, 20);
    }
  }, [selectedExam, activeSubjectTab, activeSubjectConfig, shuffleQuestions]);

  // Safe question fallback
  const safeIndex = practiceIndex >= activeQuestionList.length ? 0 : practiceIndex;
  const currentQ: Question = activeQuestionList[safeIndex] || activeQuestionList[0] || ALL_QUESTIONS[0];
  const isBookmarked = currentQ?.id ? isQuestionBookmarked(currentQ.id) : false;
  const currentAnswer = currentQ?.id ? userSelections[currentQ.id] : undefined;
  const isCurrentRevealed = currentQ?.id ? revealedSolutions[currentQ.id] : false;

  // Handle Speech Synthesis with complete browser safety
  const stopSpeech = () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {
      console.warn('Speech cancellation error:', e);
    }
    setIsSpeaking(false);
  };

  const toggleSpeech = () => {
    try {
      if (!currentQ || typeof window === 'undefined' || !('speechSynthesis' in window) || !window.speechSynthesis) {
        alert('Text-to-speech audio reader is not supported on this browser/device.');
        return;
      }

      if (isSpeaking) {
        stopSpeech();
        return;
      }

      // Build spoken text: Question prompt + multiple-choice options
      const optionsArray = Array.isArray(currentQ.options)
        ? currentQ.options
        : Object.entries(currentQ.options || {}).map(([k, t]) => ({ key: k, text: String(t) }));

      const optionsText = optionsArray
        .map((opt) => `Option ${opt.key}: ${opt.text}`)
        .join('. ');

      const fullSpoken = `Question ${practiceIndex + 1}. ${currentQ.text || ''}. ${optionsText}`;

      stopSpeech();
      const utterance = new SpeechSynthesisUtterance(fullSpoken);
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } catch (e) {
      console.warn('Speech synthesis error:', e);
      setIsSpeaking(false);
    }
  };

  // Stop speech when changing question or leaving view
  useEffect(() => {
    stopSpeech();
    return () => stopSpeech();
  }, [practiceIndex, activeSubjectTab, isSessionStarted]);

  // Handle Timer Countdown
  useEffect(() => {
    if (examDurationMins === 'untimed' || !isTimerRunning || isSessionComplete || !isSessionStarted) return;

    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSessionComplete(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [examDurationMins, isTimerRunning, isSessionComplete, isSessionStarted]);

  // Start Session
  const handleStartPractice = () => {
    setPracticeIndex(0);
    setUserSelections({});
    setRevealedSolutions({});
    setIsSessionComplete(false);
    setIsReviewingCorrections(false);
    setCorrectionsFilter('all');
    stopSpeech();

    if (examDurationMins !== 'untimed') {
      setTimeRemainingSeconds(examDurationMins * 60);
      setIsTimerRunning(true);
    } else {
      setTimeRemainingSeconds(0);
      setIsTimerRunning(false);
    }

    setIsSessionStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetSession = () => {
    setPracticeIndex(0);
    setUserSelections({});
    setRevealedSolutions({});
    setIsSessionComplete(false);
    setIsReviewingCorrections(false);
    setCorrectionsFilter('all');
    stopSpeech();

    if (examDurationMins !== 'untimed') {
      setTimeRemainingSeconds(examDurationMins * 60);
      setIsTimerRunning(true);
    } else {
      setTimeRemainingSeconds(0);
      setIsTimerRunning(false);
    }
  };

  const handleSelectOption = (key: string) => {
    if (!currentQ?.id) return;
    setUserSelections((prev) => ({ ...prev, [currentQ.id]: key }));

    if (practiceMode === 'study') {
      setRevealedSolutions((prev) => ({ ...prev, [currentQ.id]: true }));
    }
  };

  // Score Calculation
  const scoreStats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let answered = 0;
    (activeQuestionList || []).forEach((q) => {
      if (q && q.id) {
        const ans = userSelections[q.id];
        if (ans !== undefined) {
          answered++;
          if (ans === q.correctAnswer) {
            correct++;
          } else {
            incorrect++;
          }
        }
      }
    });
    const total = activeQuestionList?.length || 0;
    const unanswered = Math.max(0, total - answered);
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, incorrect, unanswered, answered, total, percentage };
  }, [activeQuestionList, userSelections]);

  // Filtered Questions for Corrections Review
  const filteredCorrectionsList = useMemo(() => {
    return (activeQuestionList || []).filter((q) => {
      if (!q || !q.id) return false;
      const userAns = userSelections[q.id];
      const isCorrect = userAns === q.correctAnswer;
      const isAnswered = userAns !== undefined;

      if (correctionsFilter === 'correct') return isCorrect;
      if (correctionsFilter === 'incorrect') return isAnswered && !isCorrect;
      if (correctionsFilter === 'unanswered') return !isAnswered;
      return true; // 'all'
    });
  }, [activeQuestionList, userSelections, correctionsFilter]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ══════════════════════════════════════════════════════════════════════════════
  // VIEW 1: CLEAN STUDYPLUG DESIGN SYSTEM SETUP SCREEN (Matches 8 Screens)
  // ══════════════════════════════════════════════════════════════════════════════
  if (!isSessionStarted) {
    return (
      <div className="w-full bg-[#F7F9F8] min-h-screen text-[#10201D] font-sans pb-24 select-none animate-page-enter flex flex-col justify-between">
        <div className="w-full">
          {/* ─── Top Header Strip: Deep Green (#004D40) ─── */}
          <header className="w-full bg-[#004D40] text-white px-4 sm:px-6 pt-4 pb-5 shadow-sm">
            <div className="max-w-2xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setActiveView('dashboard')}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer touch-press"
                  title="Back to Dashboard"
                >
                  ←
                </button>
                <div>
                  <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Practice &amp; Drill
                  </h1>
                  <p className="text-[12px] text-emerald-100/90 font-medium">
                    Customize your CBT practice session
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsInstructionOpen(true)}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center space-x-1 touch-press cursor-pointer"
              >
                <span>ℹ️</span>
                <span className="hidden sm:inline">Guide</span>
              </button>
            </div>
          </header>

          {/* ─── Main Setup Body ─── */}
          <main className="max-w-2xl mx-auto px-4 pt-4 space-y-4 text-left">
            {/* 1. Exam Category Selector (Pills) */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-[#66736F] uppercase tracking-wider">
                  Target Examination
                </label>
                <span className="text-[11px] font-bold text-[#004D40] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {selectedExam} Syllabus Active
                </span>
              </div>
              <ExamPills
                activeExam={selectedExam}
                onSelectExam={handleSelectExam}
                exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
              />
            </div>

            {/* 2. Subjects Configuration Card */}
            <div className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#E4EAE8] shadow-subtle space-y-3.5 animate-card-in">
              <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-2.5">
                <div>
                  <h2 className="text-sm font-bold text-[#10201D]">Selected Subject(s)</h2>
                  <p className="text-[11px] text-[#66736F]">
                    Choose syllabus topics, past exam year, and question count
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubjectPickerOpen(true)}
                  className="px-3 py-1.5 rounded-[10px] bg-emerald-50 text-[#004D40] hover:bg-emerald-100 text-xs font-bold border border-emerald-200 transition cursor-pointer flex items-center space-x-1 touch-press"
                >
                  <span>+</span>
                  <span>Select Subjects</span>
                </button>
              </div>

              {/* List of Configured Subjects */}
              <div className="space-y-3">
                {selectedSubjects.map((sub) => {
                  const cfg = getConfigForSubject(sub);
                  const subMeta = availableSubjectCatalog.find((c) => c.name === sub) || {
                    name: sub,
                    icon: '📚'
                  };
                  const topicsList = Array.isArray(cfg?.selectedTopics) ? cfg.selectedTopics : ['all'];
                  const topicsLabel =
                    topicsList.includes('all') || topicsList.length === 0
                      ? 'All Topics'
                      : `${topicsList.length} topic${topicsList.length > 1 ? 's' : ''}`;

                  const yearsList = getYearsForSubject(sub) || [2024, 2023, 2022, 2021, 2020];

                  return (
                    <div
                      key={sub}
                      className="p-3.5 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] space-y-2.5 card-hover-pop"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <span className="text-lg">{subMeta.icon}</span>
                          <span className="text-sm font-bold text-[#10201D]">{sub}</span>
                        </div>
                        <span className="text-[11px] font-semibold text-[#004D40] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          {cfg.questionCount} Questions
                        </span>
                      </div>

                      {/* Quick Config Row: Year, Question Count, Topic */}
                      <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                        {/* Year Selector */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#66736F] uppercase mb-1">
                            Year
                          </label>
                          <select
                            value={cfg.year}
                            onChange={(e) => {
                              const val = e.target.value;
                              updateSubjectConfig(sub, {
                                year: val === 'all' ? 'all' : parseInt(val, 10)
                              });
                            }}
                            className="w-full bg-white border border-[#E4EAE8] text-[#10201D] font-bold rounded-[8px] px-2 py-1.5 outline-none cursor-pointer"
                          >
                            <option value="all">All Years</option>
                            {yearsList.map((yr) => (
                              <option key={yr} value={yr}>
                                {yr}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Question Count Selector (Guarantee 10, 20, 30, 40) */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#66736F] uppercase mb-1">
                            Count
                          </label>
                          <select
                            value={cfg.questionCount}
                            onChange={(e) => {
                              const cnt = parseInt(e.target.value, 10);
                              updateSubjectConfig(sub, { questionCount: cnt });
                            }}
                            className="w-full bg-white border border-[#E4EAE8] text-[#10201D] font-bold rounded-[8px] px-2 py-1.5 outline-none cursor-pointer"
                          >
                            <option value={10}>10 Questions</option>
                            <option value={20}>20 Questions</option>
                            <option value={30}>30 Questions</option>
                            <option value={40}>40 Questions</option>
                            <option value={50}>50 Questions</option>
                          </select>
                        </div>

                        {/* Topic Filter Button */}
                        <div>
                          <label className="block text-[10px] font-bold text-[#66736F] uppercase mb-1">
                            Topic
                          </label>
                          <button
                            type="button"
                            onClick={() => handleOpenTopicModal(sub)}
                            className="w-full bg-white border border-[#E4EAE8] hover:border-[#004D40] text-[#004D40] font-bold rounded-[8px] px-2 py-1.5 truncate text-left flex items-center justify-between touch-press"
                            title="Filter Topics"
                          >
                            <span className="truncate">{topicsLabel}</span>
                            <span className="text-[10px] text-[#66736F]">✏️</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Practice Mode & Timing Settings Card */}
            <div className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#E4EAE8] shadow-subtle space-y-3.5 animate-card-in">
              <h2 className="text-sm font-bold text-[#10201D]">Session Settings</h2>

              {/* Mode Selector Tabs */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPracticeMode('study')}
                  className={`p-3 rounded-[12px] border text-left transition cursor-pointer touch-press ${
                    practiceMode === 'study'
                      ? 'bg-emerald-50/80 border-[#004D40] text-[#004D40] shadow-xs'
                      : 'bg-white border-[#E4EAE8] text-[#66736F] hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-1.5">
                    <span className="text-base">💡</span>
                    <span className="text-xs font-bold">Study Mode</span>
                  </div>
                  <p className="text-[11px] text-[#66736F] mt-1">
                    Instant chalkboard solutions &amp; examiner strategy
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPracticeMode('exam')}
                  className={`p-3 rounded-[12px] border text-left transition cursor-pointer touch-press ${
                    practiceMode === 'exam'
                      ? 'bg-emerald-50/80 border-[#004D40] text-[#004D40] shadow-xs'
                      : 'bg-white border-[#E4EAE8] text-[#66736F] hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-1.5">
                    <span className="text-base">⏱️</span>
                    <span className="text-xs font-bold">Mock Exam</span>
                  </div>
                  <p className="text-[11px] text-[#66736F] mt-1">
                    Timed simulation with final score report
                  </p>
                </button>
              </div>

              {/* Exam Timer & Shuffling Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-[11px] font-bold text-[#66736F] uppercase mb-1">
                    Exam Timer
                  </label>
                  <select
                    value={examDurationMins}
                    onChange={(e) => {
                      const v = e.target.value;
                      setExamDurationMins(v === 'untimed' ? 'untimed' : parseInt(v, 10));
                    }}
                    className="w-full bg-[#F7F9F8] border border-[#E4EAE8] text-[#10201D] font-bold text-xs rounded-[10px] px-3 py-2 outline-none cursor-pointer"
                  >
                    <option value="untimed">Untimed Practice</option>
                    <option value={15}>15 Minutes</option>
                    <option value={30}>30 Minutes</option>
                    <option value={45}>45 Minutes</option>
                    <option value={60}>60 Minutes (1 Hour)</option>
                    <option value={120}>120 Minutes (2 Hours)</option>
                  </select>
                </div>

                <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                  <label className="flex items-center space-x-2 text-xs font-bold text-[#10201D] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={shuffleQuestions}
                      onChange={(e) => setShuffleQuestions(e.target.checked)}
                      className="accent-[#004D40] w-4 h-4 rounded cursor-pointer"
                    />
                    <span>Shuffle Questions</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 4. Prominent Start Practice Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleStartPractice}
                className="w-full py-3.5 px-6 rounded-[14px] bg-[#004D40] hover:bg-[#003B32] text-white font-bold text-sm shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center space-x-2 touch-press"
              >
                <span>▶</span>
                <span>Start Practice ({activeSubjectConfig.questionCount} Questions)</span>
              </button>
            </div>
          </main>
        </div>

        {/* ─── BOTTOM NAVIGATION STRIP ON VIEW 1 ─── */}
        <BottomNavigation activeTab="practice" />

        {/* ─── MODAL 1: Select Subjects Modal ─────────────────────────────────── */}
        {isSubjectPickerOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-page-enter">
            <div className="w-full max-w-lg rounded-[20px] bg-white border border-[#E4EAE8] p-5 sm:p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-3">
                <h3 className="text-sm sm:text-base font-bold text-[#10201D]">
                  Select Subjects (Choose 1 to 4)
                </h3>
                <button
                  type="button"
                  onClick={() => setIsSubjectPickerOpen(false)}
                  className="text-gray-400 hover:text-gray-700 text-lg font-bold cursor-pointer touch-press"
                >
                  ✕
                </button>
              </div>

              {/* 1-Tap Presets */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#66736F] uppercase">UTME Presets:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { name: '🔬 Science', subs: ['Use of English', 'Mathematics', 'Physics', 'Chemistry'] },
                    { name: '🩺 Medical', subs: ['Use of English', 'Biology', 'Physics', 'Chemistry'] },
                    { name: '⚖️ Art/Law', subs: ['Use of English', 'Literature in English', 'Government'] },
                    { name: '💼 Commercial', subs: ['Use of English', 'Mathematics', 'Economics'] }
                  ].map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => {
                        setSelectedSubjects(p.subs);
                        setActiveSubjectTab(p.subs[0]);
                      }}
                      className="px-2.5 py-1 rounded-[8px] bg-[#F7F9F8] border border-[#E4EAE8] text-[11px] font-bold text-[#10201D] hover:border-[#004D40] cursor-pointer touch-press"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject Checkboxes Grid */}
              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                {availableSubjectCatalog.map((sub) => {
                  const isChecked = selectedSubjects.includes(sub.name);
                  return (
                    <label
                      key={sub.name}
                      className={`p-2.5 rounded-[10px] border flex items-center justify-between cursor-pointer transition select-none ${
                        isChecked
                          ? 'bg-emerald-50/80 border-[#004D40] text-[#004D40]'
                          : 'bg-[#F7F9F8] border-[#E4EAE8] text-[#10201D] hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <span>{sub.icon}</span>
                        <span className="text-xs font-semibold truncate">{sub.name}</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {
                          setSelectedSubjects((prev) => {
                            if (prev.includes(sub.name)) {
                              if (prev.length === 1) return prev;
                              return prev.filter((s) => s !== sub.name);
                            } else {
                              if (prev.length >= 4) {
                                alert('Maximum 4 subjects allowed for UTME combinations.');
                                return prev;
                              }
                              return [...prev, sub.name];
                            }
                          });
                        }}
                        className="accent-[#004D40] w-4 h-4 cursor-pointer"
                      />
                    </label>
                  );
                })}
              </div>

              <div className="flex justify-end pt-2 border-t border-[#E4EAE8]">
                <button
                  type="button"
                  onClick={() => setIsSubjectPickerOpen(false)}
                  className="px-6 py-2 rounded-[10px] bg-[#004D40] text-white font-bold text-xs hover:bg-[#003B32] transition cursor-pointer touch-press"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── MODAL 2: Topic Checklist Modal ──────────────────────────────────── */}
        {topicModalSubject && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-page-enter">
            <div className="w-full max-w-lg rounded-[20px] bg-white border border-[#E4EAE8] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
              <div className="bg-[#004D40] px-5 py-3.5 text-white flex items-center justify-between">
                <h3 className="text-sm font-bold">
                  Select {topicModalSubject} Topics
                </h3>
                <button
                  type="button"
                  onClick={() => setTopicModalSubject(null)}
                  className="text-white/80 hover:text-white text-base font-bold cursor-pointer touch-press"
                >
                  ✕
                </button>
              </div>

              {/* Master "Select All" Checkbox */}
              <div className="p-3.5 bg-[#F7F9F8] border-b border-[#E4EAE8]">
                <label className="flex items-center space-x-2 text-xs font-bold text-[#10201D] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={tempSelectedTopics.includes('all')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTempSelectedTopics(['all']);
                      } else {
                        setTempSelectedTopics([]);
                      }
                    }}
                    className="accent-[#004D40] w-4 h-4 cursor-pointer"
                  />
                  <span>Select All Topics</span>
                </label>
              </div>

              {/* Scrollable Topics Checklist */}
              <div className="p-4 overflow-y-auto space-y-2 flex-1 divide-y divide-[#E4EAE8]">
                {(getTopicsForSubject(topicModalSubject) || []).map((top) => {
                  const isChecked =
                    tempSelectedTopics.includes('all') || tempSelectedTopics.includes(top);
                  return (
                    <label
                      key={top}
                      className="pt-2 flex items-center space-x-3 text-xs font-semibold text-[#10201D] hover:text-[#004D40] cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          if (tempSelectedTopics.includes('all')) {
                            const allT = getTopicsForSubject(topicModalSubject) || [];
                            setTempSelectedTopics(allT.filter((t) => t !== top));
                          } else {
                            if (e.target.checked) {
                              setTempSelectedTopics((prev) => [...prev, top]);
                            } else {
                              setTempSelectedTopics((prev) => prev.filter((t) => t !== top));
                            }
                          }
                        }}
                        className="accent-[#004D40] w-4 h-4 cursor-pointer"
                      />
                      <span>{top}</span>
                    </label>
                  );
                })}
              </div>

              <div className="p-3.5 bg-[#F7F9F8] border-t border-[#E4EAE8] flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setTopicModalSubject(null)}
                  className="px-4 py-2 rounded-[10px] border border-[#E4EAE8] bg-white text-[#66736F] font-bold text-xs cursor-pointer touch-press"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveTopicModal}
                  className="px-6 py-2 rounded-[10px] bg-[#004D40] text-white font-bold text-xs hover:bg-[#003B32] transition cursor-pointer touch-press"
                >
                  Save Topics
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── MODAL 3: Instructions Modal ────────────────────────────────────── */}
        {isInstructionOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-page-enter">
            <div className="w-full max-w-md rounded-[20px] bg-white border border-[#E4EAE8] p-5 sm:p-6 space-y-4 shadow-2xl">
              <h3 className="text-base font-bold text-[#10201D]">Practice Guide</h3>
              <p className="text-xs text-[#66736F] leading-relaxed">
                • <strong>Study Mode:</strong> Provides instant blackboard solutions, step-by-step mathematical working, and examiner strategy tips as soon as you select an option.
                <br /><br />
                • <strong>Mock Exam:</strong> Simulates official JAMB/WAEC CBT conditions with a countdown timer. Your score percentage is revealed upon submission.
                <br /><br />
                • <strong>Built-in Tools:</strong> During practice, you can tap <strong>🧮 Calculator</strong> for calculations, <strong>🔊 Speech</strong> to read questions aloud, and <strong>🔢 Question Palette</strong> to jump directly to any question.
              </p>
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setIsInstructionOpen(false)}
                  className="px-5 py-2 rounded-[10px] bg-[#004D40] text-white font-bold text-xs cursor-pointer touch-press"
                >
                  Got It
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ══════════════════════════════════════════════════════════════════════════════
  // VIEW 2: ACTIVE QUESTION SCREEN (Exact Screen 8 Matching Reference + Tools)
  // ══════════════════════════════════════════════════════════════════════════════
  return (
    <div className="w-full bg-[#F7F9F8] min-h-screen text-[#10201D] font-sans select-none pb-20 animate-page-enter">
      {/* ─── Screen 8 Header: Deep Green (#004D40) with CBT Tools ─── */}
      <header className="w-full bg-[#004D40] text-white px-3 sm:px-6 pt-3 pb-3.5 shadow-md sticky top-0 z-30">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {/* Back & Title */}
          <div className="flex items-center space-x-2.5">
            <button
              type="button"
              onClick={() => {
                stopSpeech();
                setIsSessionStarted(false);
              }}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer touch-press"
              title="Return to Setup"
            >
              ←
            </button>
            <div className="text-left">
              <h1 className="text-[14px] sm:text-[15px] font-bold text-white tracking-tight truncate max-w-[150px] sm:max-w-xs">
                {selectedExam} {currentQ?.year || '2024'} • {activeSubjectTab}
              </h1>
              <p className="text-[11px] text-emerald-100 font-medium">
                Question {practiceIndex + 1} of {activeQuestionList.length}
              </p>
            </div>
          </div>

          {/* Right CBT Tools Strip: Calculator, Speech, Palette, Timer */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* 🧮 CBT Calculator */}
            <button
              type="button"
              onClick={openCalculator}
              className="p-1.5 sm:px-2 sm:py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition flex items-center space-x-1 cursor-pointer touch-press"
              title="CBT Calculator"
            >
              <span className="text-sm sm:text-base">🧮</span>
              <span className="text-[11px] font-bold hidden sm:inline">Calc</span>
            </button>

            {/* 🔊 Text-To-Speech Button */}
            <button
              type="button"
              onClick={toggleSpeech}
              className={`p-1.5 sm:px-2 sm:py-1 rounded-lg transition flex items-center space-x-1 cursor-pointer touch-press ${
                isSpeaking
                  ? 'bg-yellow-400 text-[#004D40] font-black animate-badge-pulse shadow'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
              title={isSpeaking ? 'Stop Reading' : 'Read Question Aloud'}
            >
              <span className="text-sm sm:text-base">{isSpeaking ? '⏹' : '🔊'}</span>
              <span className="text-[11px] font-bold hidden sm:inline">
                {isSpeaking ? 'Stop' : 'Read'}
              </span>
            </button>

            {/* 🔢 Question Palette Trigger */}
            <button
              type="button"
              onClick={() => setIsQuestionPaletteOpen(true)}
              className="p-1.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition flex items-center space-x-1 cursor-pointer font-bold text-xs touch-press"
              title="Question Palette (Jump to question)"
            >
              <span>🔢</span>
              <span className="text-[11px]">
                {practiceIndex + 1}/{activeQuestionList.length}
              </span>
            </button>

            {/* Timer Badge */}
            {examDurationMins !== 'untimed' ? (
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#003B32] border border-emerald-400/30 text-emerald-300 flex items-center space-x-1">
                <span>⏱</span>
                <span>{formatTimer(timeRemainingSeconds)}</span>
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#003B32] border border-emerald-400/30 text-emerald-300 hidden sm:inline">
                Practice
              </span>
            )}

            {/* Quick Finish / Submit & Review Button */}
            {!isSessionComplete && (
              <button
                type="button"
                onClick={() => {
                  stopSpeech();
                  setIsSessionComplete(true);
                  setIsReviewingCorrections(false);
                }}
                className="px-2.5 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#002820] font-black text-[11px] sm:text-xs transition flex items-center space-x-1 cursor-pointer touch-press shadow-xs"
                title="Finish & Review Corrections"
              >
                <span>✓</span>
                <span className="hidden sm:inline">Finish</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ─── Multi-Subject Tabs (if more than 1 subject selected) ─── */}
      {selectedSubjects.length > 1 && (
        <div className="bg-white border-b border-[#E4EAE8] px-4 py-2 sticky top-[57px] z-20 shadow-xs">
          <div className="max-w-2xl mx-auto flex items-center space-x-2 overflow-x-auto no-scrollbar">
            {selectedSubjects.map((sub) => (
              <button
                key={sub}
                type="button"
                onClick={() => {
                  stopSpeech();
                  setActiveSubjectTab(sub);
                  setPracticeIndex(0);
                }}
                className={`px-3 py-1 rounded-full text-xs font-bold transition cursor-pointer shrink-0 touch-press ${
                  activeSubjectTab === sub
                    ? 'bg-[#004D40] text-white shadow-xs'
                    : 'bg-[#F7F9F8] text-[#66736F] hover:text-[#10201D] border border-[#E4EAE8]'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ─── Main Question Content (Screen 8) ─── */}
      <main className="max-w-md sm:max-w-2xl mx-auto px-4 pt-4 space-y-4 text-left">
        {!currentQ ? (
          <div className="p-8 text-center bg-white rounded-[16px] border border-[#E4EAE8] space-y-3 animate-card-in">
            <span className="text-3xl">📚</span>
            <h3 className="text-base font-bold text-[#10201D]">
              No questions found matching this filter.
            </h3>
            <button
              type="button"
              onClick={() => setIsSessionStarted(false)}
              className="px-4 py-2 rounded-[12px] bg-[#004D40] text-white text-xs font-bold cursor-pointer touch-press"
            >
              Modify Setup
            </button>
          </div>
        ) : isSessionComplete ? (
          !isReviewingCorrections ? (
            /* Completion Scorecard */
            <div className="p-6 sm:p-8 rounded-[20px] bg-white border border-[#E4EAE8] shadow-subtle text-center space-y-6 animate-card-in max-w-xl mx-auto">
              <div className="text-5xl">🎉</div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-[#10201D]">
                  Practice Session Completed!
                </h2>
                <p className="text-xs sm:text-sm text-[#66736F] mt-1">
                  {activeSubjectTab} • {scoreStats.total} Questions
                </p>
              </div>

              {/* Score circle / card */}
              <div className="p-5 rounded-[16px] bg-gradient-to-br from-emerald-50 via-[#F7F9F8] to-emerald-50/50 border border-emerald-100 flex flex-col items-center justify-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#004D40] tracking-tight">
                  {scoreStats.percentage}%
                </div>
                <div className="text-xs font-bold text-[#66736F] mt-1.5">
                  {scoreStats.correct} out of {scoreStats.total} Questions Correct
                </div>
              </div>

              {/* Breakdown grid */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-[12px] bg-emerald-50 border border-emerald-200">
                  <div className="text-lg sm:text-xl font-black text-emerald-700">{scoreStats.correct}</div>
                  <div className="text-[11px] font-bold text-emerald-800">Correct</div>
                </div>
                <div className="p-3 rounded-[12px] bg-rose-50 border border-rose-200">
                  <div className="text-lg sm:text-xl font-black text-rose-700">{scoreStats.incorrect}</div>
                  <div className="text-[11px] font-bold text-rose-800">Incorrect</div>
                </div>
                <div className="p-3 rounded-[12px] bg-slate-50 border border-slate-200">
                  <div className="text-lg sm:text-xl font-black text-slate-700">{scoreStats.unanswered}</div>
                  <div className="text-[11px] font-bold text-slate-600">Skipped</div>
                </div>
              </div>

              {/* Primary Action: Review Corrections */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsReviewingCorrections(true);
                    setCorrectionsFilter('all');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 px-6 rounded-[14px] bg-[#004D40] hover:bg-[#003B32] text-white text-sm font-extrabold shadow-md transition flex items-center justify-center space-x-2 cursor-pointer touch-press"
                >
                  <span>📝 Review Corrections & Step-by-Step Solutions</span>
                </button>

                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  <button
                    type="button"
                    onClick={resetSession}
                    className="flex-1 py-2.5 px-4 rounded-[12px] border border-[#E4EAE8] bg-white text-[#10201D] font-bold text-xs hover:bg-[#F7F9F8] transition cursor-pointer touch-press flex items-center justify-center space-x-1.5"
                  >
                    <span>🔄</span>
                    <span>Practice Again</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSessionStarted(false);
                      setIsReviewingCorrections(false);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-[12px] border border-[#E4EAE8] bg-white text-[#10201D] font-bold text-xs hover:bg-[#F7F9F8] transition cursor-pointer touch-press flex items-center justify-center space-x-1.5"
                  >
                    <span>⚙️</span>
                    <span>Change Setup</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Corrections & Solutions Review View */
            <div className="space-y-5 animate-card-in">
              {/* Header & Filter Bar */}
              <div className="p-4 sm:p-5 rounded-[16px] bg-white border border-[#E4EAE8] shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsReviewingCorrections(false)}
                      className="p-1.5 px-2.5 rounded-lg border border-[#E4EAE8] hover:bg-[#F7F9F8] text-[#10201D] text-xs font-bold transition cursor-pointer touch-press"
                    >
                      ← Back
                    </button>
                    <h2 className="text-base sm:text-lg font-black text-[#10201D]">
                      Corrections & Solutions
                    </h2>
                  </div>
                  <p className="text-[11.5px] text-[#66736F] mt-1">
                    Explanations & examiner walkthroughs for {activeSubjectTab}
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 bg-[#F1F5F4] p-1 rounded-xl border border-[#E4EAE8] overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setCorrectionsFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                      correctionsFilter === 'all'
                        ? 'bg-[#004D40] text-white shadow-xs'
                        : 'text-[#66736F] hover:text-[#10201D]'
                    }`}
                  >
                    All ({scoreStats.total})
                  </button>
                  <button
                    type="button"
                    onClick={() => setCorrectionsFilter('incorrect')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                      correctionsFilter === 'incorrect'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-rose-700 hover:bg-rose-50'
                    }`}
                  >
                    ❌ Missed ({scoreStats.incorrect})
                  </button>
                  <button
                    type="button"
                    onClick={() => setCorrectionsFilter('correct')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                      correctionsFilter === 'correct'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-emerald-700 hover:bg-emerald-50'
                    }`}
                  >
                    ✅ Correct ({scoreStats.correct})
                  </button>
                  {scoreStats.unanswered > 0 && (
                    <button
                      type="button"
                      onClick={() => setCorrectionsFilter('unanswered')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer shrink-0 ${
                        correctionsFilter === 'unanswered'
                          ? 'bg-slate-700 text-white shadow-xs'
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      ⚪ Skipped ({scoreStats.unanswered})
                    </button>
                  )}
                </div>
              </div>

              {/* Questions Review List */}
              {filteredCorrectionsList.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-[16px] border border-[#E4EAE8] space-y-2">
                  <span className="text-3xl">✨</span>
                  <p className="text-sm font-bold text-[#10201D]">
                    No questions match this filter ({correctionsFilter}).
                  </p>
                  <button
                    type="button"
                    onClick={() => setCorrectionsFilter('all')}
                    className="text-xs font-bold text-[#004D40] underline cursor-pointer"
                  >
                    Show all {scoreStats.total} questions
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredCorrectionsList.map((q, filteredIdx) => {
                    const originalIdx = (activeQuestionList || []).findIndex((orig) => orig.id === q.id);
                    const qNum = originalIdx >= 0 ? originalIdx + 1 : filteredIdx + 1;
                    const userAns = userSelections[q.id];
                    const isCorrect = userAns === q.correctAnswer;
                    const isAnswered = userAns !== undefined;
                    const isBookmarked = isQuestionBookmarked(q.id);

                    // Options normalizer
                    const optionsArray = Array.isArray(q.options)
                      ? q.options
                      : Object.entries(q.options || {}).map(([k, t]) => ({
                          key: k,
                          text: String(t)
                        }));

                    return (
                      <div
                        key={q.id || filteredIdx}
                        className={`p-5 sm:p-6 rounded-[18px] bg-white border-2 shadow-subtle space-y-4 transition ${
                          isCorrect
                            ? 'border-emerald-300/80 bg-emerald-50/20'
                            : isAnswered
                            ? 'border-rose-300/80 bg-rose-50/20'
                            : 'border-[#E4EAE8]'
                        }`}
                      >
                        {/* Question Top Header */}
                        <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-3 flex-wrap gap-2">
                          <div className="flex items-center space-x-2">
                            <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-[#F1F5F4] text-[#10201D] border border-[#E4EAE8]">
                              Question {qNum} of {scoreStats.total}
                            </span>

                            {/* Result status */}
                            {isCorrect ? (
                              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                                <span>✓ Correct</span>
                              </span>
                            ) : isAnswered ? (
                              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-black bg-rose-100 text-rose-800 border border-rose-300">
                                <span>✕ Missed</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-300">
                                <span>⚪ Skipped</span>
                              </span>
                            )}
                          </div>

                          {/* Badges & Bookmark */}
                          <div className="flex items-center space-x-1.5">
                            {q.topic && (
                              <span className="text-[10.5px] font-semibold text-[#66736F] bg-[#F1F5F4] px-2 py-0.5 rounded-full truncate max-w-[120px]">
                                {q.topic}
                              </span>
                            )}
                            {q.subtopic && (
                              <span className="text-[10.5px] font-bold text-[#004D40] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full truncate max-w-[140px]">
                                🎯 {q.subtopic}
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => toggleBookmarkQuestion(q.id)}
                              className={`p-1.5 rounded-lg border text-xs transition cursor-pointer touch-press ${
                                isBookmarked
                                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                                  : 'border-[#E4EAE8] text-gray-400 hover:text-gray-700'
                              }`}
                              title={isBookmarked ? 'Marked' : 'Bookmark for revision'}
                            >
                              {isBookmarked ? '★' : '☆'}
                            </button>
                          </div>
                        </div>

                        {/* Question Text & Comprehension Passage */}
                        <ComprehensionPassageViewer
                          text={q.text}
                          passage={q.passage}
                          subject={activeSubjectTab}
                          defaultExpanded={false}
                        />

                        {/* Diagram SVG if present */}
                        {q.imageSvg && (
                          <div
                            className="my-3 p-3 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] flex justify-center overflow-x-auto"
                            dangerouslySetInnerHTML={{ __html: q.imageSvg }}
                          />
                        )}

                        {/* Options Review Grid */}
                        <div className="space-y-2">
                          {optionsArray.map((opt) => {
                            const isOptionCorrect = opt.key === q.correctAnswer;
                            const isOptionUserChoice = userAns === opt.key;

                            let optionStyles = 'border-[#E4EAE8] bg-[#F7F9F8] text-[#10201D]';
                            let badge = null;

                            if (isOptionCorrect && isOptionUserChoice) {
                              optionStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                              badge = (
                                <span className="text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                                  ✓ Your Choice (Correct)
                                </span>
                              );
                            } else if (isOptionCorrect) {
                              optionStyles = 'border-emerald-500 bg-emerald-50/90 text-emerald-950 font-semibold ring-1 ring-emerald-500';
                              badge = (
                                <span className="text-[11px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300">
                                  ✓ Correct Answer
                                </span>
                              );
                            } else if (isOptionUserChoice) {
                              optionStyles = 'border-rose-400 bg-rose-50 text-rose-950 font-medium line-through';
                              badge = (
                                <span className="text-[11px] font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md border border-rose-300">
                                  ✕ Your Choice
                                </span>
                              );
                            }

                            return (
                              <div
                                key={opt.key}
                                className={`p-3 sm:p-3.5 rounded-[12px] border flex items-center justify-between text-[13px] sm:text-[14px] transition ${optionStyles}`}
                              >
                                <div className="flex items-center space-x-2.5">
                                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                                    isOptionCorrect
                                      ? 'bg-emerald-600 text-white'
                                      : isOptionUserChoice
                                      ? 'bg-rose-600 text-white'
                                      : 'bg-white border border-[#E4EAE8] text-[#10201D]'
                                  }`}>
                                    {opt.key}
                                  </span>
                                  <span>{opt.text}</span>
                                </div>
                                {badge}
                              </div>
                            );
                          })}
                        </div>

                        {/* Quick Comparison Strip */}
                        <div className="p-2.5 rounded-[10px] bg-[#F1F5F4] border border-[#E4EAE8] flex items-center justify-between text-xs font-bold text-[#10201D]">
                          <span className="flex items-center space-x-1.5">
                            <span className="text-[#66736F]">Your Selection:</span>
                            <span className={isCorrect ? 'text-emerald-700' : userAns ? 'text-rose-700' : 'text-slate-600'}>
                              {userAns ? `Option ${userAns}` : 'None (Skipped)'}
                            </span>
                          </span>
                          <span className="flex items-center space-x-1.5">
                            <span className="text-[#66736F]">Official Key:</span>
                            <span className="text-emerald-700 font-extrabold">Option {q.correctAnswer}</span>
                          </span>
                        </div>

                        {/* Examiner Strategy Tip */}
                        <div className="p-3 rounded-[12px] bg-amber-50/90 border border-amber-200/90 flex items-start space-x-2.5 text-left">
                          <span className="text-base text-amber-600">💡</span>
                          <p className="text-[12px] text-amber-900 leading-snug">
                            {getExamTipForQuestion(q) ||
                              (q.topic
                                ? `Think about: core syllabus rules and principles of ${q.topic}.`
                                : 'Think about: standard syllabus equations and SI units.')}
                          </p>
                        </div>

                        {/* Step-by-Step Chalkboard Digital Solution */}
                        <DigitalBoardSolution
                          correctOptionKey={q.correctAnswer}
                          correctOptionText={
                            optionsArray.find((o) => o.key === q.correctAnswer)?.text || ''
                          }
                          explanationText={q.explanation}
                          topic={q.topic || activeSubjectTab}
                        />

                        {/* Action: Ask AI Tutor about this question */}
                        <div className="flex justify-end pt-1">
                          <button
                            type="button"
                            onClick={() =>
                              openAiTutor({
                                question: q,
                                userSelectedOption: userAns,
                                subject: activeSubjectTab,
                                topic: q.topic
                              })
                            }
                            className="px-3.5 py-2 rounded-[12px] bg-white border border-[#004D40]/30 hover:bg-emerald-50 text-[12px] font-bold text-[#004D40] transition cursor-pointer flex items-center space-x-1.5 touch-press shadow-xs"
                          >
                            <span>🤖</span>
                            <span>Ask AI Tutor to Explain Further</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Bottom Actions Bar */}
              <div className="p-4 rounded-[16px] bg-white border border-[#E4EAE8] shadow-subtle flex flex-wrap items-center justify-between gap-3 sticky bottom-3 z-20">
                <button
                  type="button"
                  onClick={() => {
                    setIsReviewingCorrections(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 rounded-[12px] border border-[#E4EAE8] bg-white text-[#10201D] font-bold text-xs hover:bg-[#F7F9F8] transition cursor-pointer touch-press"
                >
                  ← Back to Scorecard
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={resetSession}
                    className="px-4 py-2.5 rounded-[12px] bg-[#004D40] text-white font-bold text-xs hover:bg-[#003B32] transition cursor-pointer touch-press"
                  >
                    🔄 Retake Session
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSessionStarted(false);
                      setIsReviewingCorrections(false);
                    }}
                    className="px-4 py-2.5 rounded-[12px] border border-[#E4EAE8] bg-white text-[#10201D] font-bold text-xs hover:bg-[#F7F9F8] transition cursor-pointer touch-press"
                  >
                    ⚙️ Change Setup
                  </button>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="space-y-3.5">
            {/* White Question Card (Screen 8) */}
            <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-[#E4EAE8] shadow-subtle space-y-4 animate-card-in">
              {/* Question Meta Strip */}
              <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-2.5">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-[#004D40] border border-emerald-200">
                  Question {practiceIndex + 1} of {activeQuestionList.length}
                </span>

                <div className="flex items-center gap-1.5 flex-wrap justify-end max-w-[65%]">
                  {currentQ.topic && (
                    <span className="text-[10.5px] font-semibold text-[#66736F] bg-[#F1F5F4] px-2 py-0.5 rounded-full truncate max-w-[130px]">
                      {currentQ.topic}
                    </span>
                  )}
                  {currentQ.subtopic && (
                    <span className="text-[10.5px] font-bold text-[#004D40] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full truncate max-w-[150px]">
                      🎯 {currentQ.subtopic}
                    </span>
                  )}
                </div>
              </div>

              {/* Question Text & Comprehension Passage */}
              <ComprehensionPassageViewer
                text={currentQ.text}
                passage={currentQ.passage}
                subject={activeSubjectTab}
                defaultExpanded={true}
              />

              {/* Diagram / Image if any */}
              {currentQ.imageSvg && (
                <div
                  className="my-3 p-3 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] flex justify-center overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: currentQ.imageSvg }}
                />
              )}
            </div>

            {/* Answer Options (A, B, C, D) using QuestionOption component */}
            <div className="space-y-2.5">
              {(Array.isArray(currentQ.options)
                ? currentQ.options
                : Object.entries(currentQ.options || {}).map(([k, t]) => ({
                    key: k,
                    text: String(t)
                  }))
              ).map((opt) => {
                const isSelected = currentAnswer === opt.key;
                const isCorrect = opt.key === currentQ.correctAnswer;
                return (
                  <QuestionOption
                    key={opt.key}
                    optionKey={opt.key}
                    optionText={opt.text}
                    isSelected={isSelected}
                    isCorrect={practiceMode === 'study' && isCurrentRevealed ? isCorrect : null}
                    isReviewMode={practiceMode === 'study' && isCurrentRevealed}
                    onSelect={() => handleSelectOption(opt.key)}
                  />
                );
              })}
            </div>

            {/* Light Amber Strategy / Hint Box (Screen 8 exact match!) */}
            <div className="p-3.5 rounded-[12px] bg-amber-50/80 border border-amber-200/80 flex items-start space-x-2.5 text-left animate-page-enter">
              <span className="text-base text-amber-600">💡</span>
              <p className="text-[12px] text-amber-900 leading-snug">
                {getExamTipForQuestion(currentQ) ||
                  (currentQ.topic
                    ? `Think about: core principles and standard formulas of ${currentQ.topic}.`
                    : 'Think about: standard syllabus equations and SI units.')}
              </p>
            </div>

            {/* Digital Board Solution (Instant Mathematical Working in Study Mode) */}
            {practiceMode === 'study' && isCurrentRevealed && (
              <DigitalBoardSolution
                correctOptionKey={currentQ.correctAnswer}
                correctOptionText={
                  (Array.isArray(currentQ.options)
                    ? currentQ.options.find((o) => o.key === currentQ.correctAnswer)?.text
                    : (currentQ.options as any)?.[currentQ.correctAnswer]) || ''
                }
                explanationText={currentQ.explanation}
                topic={currentQ.topic || activeSubjectTab}
              />
            )}

            {/* Bottom Actions Bar (Mark, Ask AI, Prev, Next) */}
            <div className="flex items-center justify-between pt-3">
              <button
                type="button"
                onClick={() => toggleBookmarkQuestion(currentQ.id)}
                className={`px-3.5 py-2.5 rounded-[12px] border text-[13px] font-semibold transition cursor-pointer flex items-center space-x-1.5 touch-press ${
                  isBookmarked
                    ? 'bg-amber-50 text-amber-800 border-amber-300'
                    : 'bg-white text-[#66736F] border-[#E4EAE8] hover:text-[#10201D]'
                }`}
              >
                <span>{isBookmarked ? '★' : '🔖'}</span>
                <span>{isBookmarked ? 'Marked' : 'Mark'}</span>
              </button>

              <div className="flex items-center space-x-2">
                {practiceIndex > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      stopSpeech();
                      setPracticeIndex((prev) => Math.max(0, prev - 1));
                    }}
                    className="px-3.5 py-2.5 rounded-[12px] border border-[#E4EAE8] bg-white text-[#10201D] text-[13px] font-bold hover:bg-[#F7F9F8] transition cursor-pointer touch-press"
                  >
                    &larr; Prev
                  </button>
                )}

                <button
                  type="button"
                  onClick={() =>
                    openAiTutor({
                      question: currentQ,
                      userSelectedOption: currentAnswer,
                      subject: activeSubjectTab,
                      topic: currentQ.topic
                    })
                  }
                  className="px-3 py-2.5 rounded-[12px] bg-white border border-[#E4EAE8] text-[12px] font-bold text-[#004D40] hover:bg-[#F7F9F8] transition cursor-pointer flex items-center space-x-1 touch-press"
                >
                  <span>🤖</span>
                  <span className="hidden sm:inline">Ask AI</span>
                </button>

                {practiceIndex >= activeQuestionList.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => {
                      stopSpeech();
                      setIsSessionComplete(true);
                    }}
                    className="px-5 py-2.5 rounded-[12px] bg-[#16A34A] hover:bg-emerald-700 text-white text-[13px] font-bold shadow-sm transition cursor-pointer touch-press"
                  >
                    Submit ✓
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      stopSpeech();
                      setPracticeIndex((prev) =>
                        Math.min(activeQuestionList.length - 1, prev + 1)
                      );
                    }}
                    className="px-6 py-2.5 rounded-[12px] bg-[#16A34A] hover:bg-emerald-700 text-white text-[13px] font-bold shadow-sm transition cursor-pointer touch-press"
                  >
                    Next &rarr;
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ─── MODAL: Question Palette (Jump Grid 1..N) ────────────────────────── */}
      {isQuestionPaletteOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-page-enter">
          <div className="w-full max-w-md rounded-[20px] bg-white border border-[#E4EAE8] p-5 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#10201D]">
                  Question Palette ({activeSubjectTab})
                </h3>
                <p className="text-[11px] text-[#66736F]">
                  Tap any number to jump directly to that question
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsQuestionPaletteOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-lg font-bold cursor-pointer touch-press"
              >
                ✕
              </button>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between text-[11px] text-[#66736F] px-1">
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-[#16A34A] inline-block" />
                <span>Answered</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span>Marked</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-3 h-3 rounded-full bg-[#E4EAE8] inline-block" />
                <span>Unvisited</span>
              </span>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto p-1">
              {(activeQuestionList || []).map((q, idx) => {
                const isAnswered = q && q.id ? userSelections[q.id] !== undefined : false;
                const isMarked = q && q.id ? isQuestionBookmarked(q.id) : false;
                const isCurrent = idx === practiceIndex;

                let btnStyle = 'bg-[#F7F9F8] text-[#10201D] border-[#E4EAE8]';
                if (isAnswered) {
                  btnStyle = 'bg-[#16A34A] text-white border-[#16A34A]';
                } else if (isMarked) {
                  btnStyle = 'bg-amber-100 text-amber-900 border-amber-400';
                }

                if (isCurrent) {
                  btnStyle += ' ring-2 ring-[#004D40] ring-offset-1 font-black';
                }

                return (
                  <button
                    key={q?.id || idx}
                    type="button"
                    onClick={() => {
                      stopSpeech();
                      setPracticeIndex(idx);
                      setIsQuestionPaletteOpen(false);
                    }}
                    className={`h-10 rounded-[10px] border text-xs font-bold transition flex items-center justify-center cursor-pointer touch-press ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2.5 border-t border-[#E4EAE8]">
              <button
                type="button"
                onClick={() => {
                  stopSpeech();
                  setIsQuestionPaletteOpen(false);
                  setIsSessionComplete(true);
                  setIsReviewingCorrections(true);
                }}
                className="px-3.5 py-2 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer touch-press flex items-center space-x-1"
              >
                <span>✓</span>
                <span>Submit & View Corrections</span>
              </button>
              <button
                type="button"
                onClick={() => setIsQuestionPaletteOpen(false)}
                className="px-4 py-2 rounded-[10px] bg-[#F1F5F4] hover:bg-[#E4EAE8] text-[#10201D] font-bold text-xs cursor-pointer touch-press"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeMode;
