import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { Question, MATHEMATICS_QUESTIONS } from '../data/questions';
import { PHYSICS_QUESTIONS } from '../data/physicsQuestions';
import { fetchQuestions } from '../services/apiService';
import {
  ALL_QUESTIONS,
  ALL_OFFICIAL_YEARS,
  getBaseQuestionsForSubject,
  getFilteredQuestions,
  getQuestionsForMultiSubject,
  normalizeSubjectName
} from '../data/allQuestionsHub';
import { premiumLicence } from '../utils/security';


export interface SubjectScoreBreakdown {
  subject: string;
  score: number;
  total: number;
  accuracy: number;
}

export interface TestResult {
  id: string;
  subject: string;
  date: string;
  score: number;
  total: number;
  accuracy: number;
  timeSpentSeconds: number;
  userAnswers: Record<number, string>;
  flaggedQuestions: number[];
  subjectBreakdowns?: SubjectScoreBreakdown[];
  compositeScore?: number;
}

export type ActiveViewType =
  | 'dashboard'
  | 'splash'
  | 'onboarding'
  | 'signup'
  | 'login'
  | 'courses'
  | 'subjects'
  | 'topics'
  | 'past-questions'
  | 'test'
  | 'ai-helper'
  | 'notes'
  | 'resources'
  | 'challenges'
  | 'battle-arena'
  | 'results'
  | 'performance'
  | 'leaderboard'
  | 'repeated-questions'
  | 'profile'
  | 'bookmarks'
  | 'practice'
  | 'mock'
  | 'motivation'
  | 'ai-videos';

interface AppContextType {
  // Navigation
  activeView: ActiveViewType;
  setActiveView: (view: ActiveViewType, options?: { replace?: boolean }) => void;
  goBack: () => void;
  navigationHistory: ActiveViewType[];

  // Global Metrics (Persisted)
  testsTaken: number;
  overallAccuracy: number;
  studyStreak: number;
  bookmarks: number[];
  testHistory: TestResult[];

  // Target Examination ('JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE')
  selectedExam: 'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE';
  setSelectedExam: (exam: 'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE') => void;

  // Subject & Year Selection
  selectedSubject: string;
  setSelectedSubject: (sub: string) => void;
  selectedSubjects: string[];
  setSelectedSubjects: (subs: string[]) => void;
  activeExamSubject: string;
  setActiveExamSubject: (sub: string) => void;
  switchActiveExamSubject: (sub: string) => void;
  multiSubjectQuestions: Record<string, Question[]>;

  selectedYear: number | 'all';
  setSelectedYear: (year: number | 'all') => void;
  startTestForSubject: (subject: string, year?: number | 'all', topic?: string) => void;
  startMultiSubjectTest: (subjects: string[], year?: number | 'all', topic?: string) => void;
  availableYears: number[];

  // Active CBT Test Session
  currentQuestion: number;
  setCurrentQuestion: (q: number) => void;
  userAnswers: Record<number, string>;
  selectAnswer: (qNum: number, optKey: string) => void;
  clearAnswer: (qNum: number) => void;
  flaggedQuestions: number[];
  toggleFlagQuestion: (qNum: number) => void;
  toggleBookmarkQuestion: (qId: number) => void;
  isQuestionBookmarked: (qId: number) => boolean;
  timeRemaining: number;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number>>;

  // Actions
  submitTest: () => void;
  retakeTest: () => void;
  lastTestResult: TestResult | null;
  questions: Question[];
  allQuestions: Question[];
  isSyncingWithCpanel: boolean;
  cpanelDataSource: 'cpanel' | 'cached' | 'local';
  reloadQuestions: () => Promise<void>;
  totalQuestionsInDb: number;

  // PlugAI Tutor State
  isAiTutorOpen: boolean;
  openAiTutor: (context?: { question?: Question; userSelectedOption?: string; exam?: string; subject?: string; topic?: string; subtopic?: string; noteTitle?: string }) => void;
  closeAiTutor: () => void;
  aiTutorContext: { question?: Question; userSelectedOption?: string; exam?: string; subject?: string; topic?: string; subtopic?: string; noteTitle?: string } | null;

  // Menu Drawer, Leaderboard & Calculator
  isMenuDrawerOpen: boolean;
  openMenuDrawer: () => void;
  closeMenuDrawer: () => void;
  isLeaderboardOpen: boolean;
  openLeaderboard: () => void;
  closeLeaderboard: () => void;
  isCalculatorOpen: boolean;
  openCalculator: () => void;
  closeCalculator: () => void;

  // Morning Tea Daily Pop-Out
  isMorningTeaOpen: boolean;
  openMorningTea: () => void;
  closeMorningTea: () => void;

  // Dare to Dare Challenge Game
  isDareToDareOpen: boolean;
  dareToDareContext: { subject?: string; topic?: string; exam?: string; mode?: 'blitz' | 'survival' | 'master' } | null;
  openDareToDare: (context?: { subject?: string; topic?: string; exam?: string; mode?: 'blitz' | 'survival' | 'master' }) => void;
  closeDareToDare: () => void;

  // WAEC / NECO / NABTEB Standard Exam Papers ('OBJ' | 'Theory' | 'Practical')
  selectedExamPapers: ('OBJ' | 'Theory' | 'Practical')[];
  setSelectedExamPapers: React.Dispatch<React.SetStateAction<('OBJ' | 'Theory' | 'Practical')[]>>;
  isPaperSelectorOpen: boolean;
  paperSelectorExam: string;
  openPaperSelector: (exam?: string) => void;
  closePaperSelector: () => void;

  // Upgrade & Premium State (Verified via Selar Webhook)
  isUpgradeModalOpen: boolean;
  openUpgradeModal: () => void;
  closeUpgradeModal: () => void;
  isPremium: boolean;

  // New High-Impact Tools & Challenges Modals
  isCountdownOpen: boolean;
  openCountdown: () => void;
  closeCountdown: () => void;

  isFormulaSheetOpen: boolean;
  openFormulaSheet: () => void;
  closeFormulaSheet: () => void;

  isVocabBuilderOpen: boolean;
  openVocabBuilder: () => void;
  closeVocabBuilder: () => void;

  isFlashcardsOpen: boolean;
  openFlashcards: () => void;
  closeFlashcards: () => void;

  isStudyGoalsOpen: boolean;
  openStudyGoals: () => void;
  closeStudyGoals: () => void;

  isAnalyticsOpen: boolean;
  openAnalytics: () => void;
  closeAnalytics: () => void;

  isPastQuestionsOpen: boolean;
  openPastQuestions: () => void;
  closePastQuestions: () => void;

  isWeaknessTrackerOpen: boolean;
  openWeaknessTracker: () => void;
  closeWeaknessTracker: () => void;

  isStreakRewardOpen: boolean;
  openStreakReward: () => void;
  closeStreakReward: () => void;

  isPrintableMockOpen: boolean;
  openPrintableMock: () => void;
  closePrintableMock: () => void;

  // Global Search Modal
  isGlobalSearchOpen: boolean;
  openGlobalSearch: () => void;
  closeGlobalSearch: () => void;

  // Dark Mode Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeView, setActiveViewState] = useState<ActiveViewType>('dashboard');
  const [navigationHistory, setNavigationHistory] = useState<ActiveViewType[]>([]);
  const navHistoryRef = useRef<ActiveViewType[]>([]);
  navHistoryRef.current = navigationHistory;
  const isHandlingInternalBack = useRef(false);

  const setActiveView = useCallback((nextView: ActiveViewType, options?: { replace?: boolean }) => {
    setActiveViewState((currentView) => {
      if (currentView === nextView) return currentView;

      if (!options?.replace) {
        setNavigationHistory((prev) => [...prev, currentView]);
        try {
          if (typeof window !== 'undefined') {
            window.history.pushState({ view: nextView }, '');
          }
        } catch {}
      } else {
        try {
          if (typeof window !== 'undefined') {
            window.history.replaceState({ view: nextView }, '');
          }
        } catch {}
      }

      return nextView;
    });
  }, []);

  // Load from localStorage or initialize with design defaults
  const [testsTaken, setTestsTaken] = useState<number>(() => {
    const saved = localStorage.getItem('sp_tests_taken');
    return saved ? parseInt(saved, 10) : 24;
  });

  const [overallAccuracy, setOverallAccuracy] = useState<number>(() => {
    const saved = localStorage.getItem('sp_accuracy');
    return saved ? parseInt(saved, 10) : 76;
  });

  const [studyStreak, setStudyStreak] = useState<number>(() => {
    const saved = localStorage.getItem('sp_streak');
    return saved ? parseInt(saved, 10) : 7;
  });

  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    const saved = localStorage.getItem('sp_bookmarks');
    return saved ? JSON.parse(saved) : [12, 5, 18];
  });

  const [testHistory, setTestHistory] = useState<TestResult[]>(() => {
    const saved = localStorage.getItem('sp_history');
    return saved ? JSON.parse(saved) : [];
  });

  // CBT Exam State: seeded to match reference image (1-6 answered, 7 review, 12 active with B selected)
  const [currentQuestion, setCurrentQuestion] = useState<number>(12);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({
    1: 'A',
    2: 'C',
    3: 'B',
    4: 'A',
    5: 'C',
    6: 'A',
    12: 'B'
  });
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([7]);
  const [timeRemaining, setTimeRemaining] = useState<number>(2 * 3600 + 29 * 60 + 45); // 02:29:45
  const [lastTestResult, setLastTestResult] = useState<TestResult | null>(null);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('sp_tests_taken', testsTaken.toString());
    localStorage.setItem('sp_accuracy', overallAccuracy.toString());
    localStorage.setItem('sp_streak', studyStreak.toString());
    localStorage.setItem('sp_bookmarks', JSON.stringify(bookmarks));
    localStorage.setItem('sp_history', JSON.stringify(testHistory));
  }, [testsTaken, overallAccuracy, studyStreak, bookmarks, testHistory]);

  const selectAnswer = (qNum: number, optKey: string) => {
    setUserAnswers((prev) => ({ ...prev, [qNum]: optKey }));
  };

  const clearAnswer = (qNum: number) => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[qNum];
      return next;
    });
  };

  const toggleFlagQuestion = (qNum: number) => {
    setFlaggedQuestions((prev) =>
      prev.includes(qNum) ? prev.filter((n) => n !== qNum) : [...prev, qNum]
    );
  };

  // Target Examination State ('JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE')
  const [selectedExam, setSelectedExamState] = useState<'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE'>(() => {
    const saved = localStorage.getItem('sp_selected_exam');
    return (saved as any) || 'JAMB';
  });

  // WAEC / NECO / NABTEB Standard Exam Papers ('OBJ' | 'Theory' | 'Practical')
  const [selectedExamPapers, setSelectedExamPapers] = useState<('OBJ' | 'Theory' | 'Practical')[]>(() => {
    try {
      const saved = localStorage.getItem('sp_selected_exam_papers');
      return saved ? JSON.parse(saved) : ['OBJ', 'Theory', 'Practical'];
    } catch {
      return ['OBJ', 'Theory', 'Practical'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sp_selected_exam_papers', JSON.stringify(selectedExamPapers));
    } catch {}
  }, [selectedExamPapers]);

  const [isPaperSelectorOpen, setIsPaperSelectorOpen] = useState<boolean>(false);
  const [paperSelectorExam, setPaperSelectorExam] = useState<string>('WAEC');

  const openPaperSelector = useCallback((exam?: string) => {
    if (exam) setPaperSelectorExam(exam);
    setIsPaperSelectorOpen(true);
  }, []);

  const closePaperSelector = useCallback(() => {
    setIsPaperSelectorOpen(false);
  }, []);

  const setSelectedExam = useCallback((exam: 'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE') => {
    setSelectedExamState(exam);
    localStorage.setItem('sp_selected_exam', exam);
  }, []);

  // Subject & Multi-Subject Exam State
  const [selectedSubject, setSelectedSubjectState] = useState<string>('Mathematics');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['Mathematics']);
  const [activeExamSubject, setActiveExamSubject] = useState<string>('Mathematics');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [totalQuestionsInDb, setTotalQuestionsInDb] = useState<number>(170);

  // Synchronous question dictionary per subject
  const [multiSubjectQuestions, setMultiSubjectQuestions] = useState<Record<string, Question[]>>(() => ({
    'Mathematics': getBaseQuestionsForSubject('Mathematics')
  }));

  // Per-subject exam state tracker (answers, flags, question index)
  const [subjectExamState, setSubjectExamState] = useState<Record<string, {
    answers: Record<number, string>;
    flagged: number[];
    currentQuestion: number;
  }>>({
    'Mathematics': { answers: {}, flagged: [], currentQuestion: 1 }
  });

  // PlugAI Tutor State
  const [isAiTutorOpen, setIsAiTutorOpen] = useState<boolean>(false);
  const [aiTutorContext, setAiTutorContext] = useState<{ question?: Question; userSelectedOption?: string; exam?: string; subject?: string; topic?: string; subtopic?: string; noteTitle?: string } | null>(null);

  const openAiTutor = (context?: { question?: Question; userSelectedOption?: string; exam?: string; subject?: string; topic?: string; subtopic?: string; noteTitle?: string }) => {
    setAiTutorContext(context || null);
    setIsAiTutorOpen(true);
  };

  const closeAiTutor = () => {
    setIsAiTutorOpen(false);
  };

  // Menu Drawer, Leaderboard & Calculator State
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState<boolean>(false);
  const openMenuDrawer = () => setIsMenuDrawerOpen(true);
  const closeMenuDrawer = () => setIsMenuDrawerOpen(false);

  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState<boolean>(false);
  const openLeaderboard = () => setIsLeaderboardOpen(true);
  const closeLeaderboard = () => setIsLeaderboardOpen(false);

  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const openCalculator = () => setIsCalculatorOpen(true);
  const closeCalculator = () => setIsCalculatorOpen(false);

  // Morning Tea Daily Pop-Out State
  const [isMorningTeaOpen, setIsMorningTeaOpen] = useState<boolean>(false);
  const openMorningTea = () => setIsMorningTeaOpen(true);
  const closeMorningTea = () => setIsMorningTeaOpen(false);

  // Dare to Dare Challenge Game State
  const [isDareToDareOpen, setIsDareToDareOpen] = useState<boolean>(false);
  const [dareToDareContext, setDareToDareContext] = useState<{ subject?: string; topic?: string; exam?: string; mode?: 'blitz' | 'survival' | 'master' } | null>(null);

  const openDareToDare = (context?: { subject?: string; topic?: string; exam?: string; mode?: 'blitz' | 'survival' | 'master' }) => {
    setDareToDareContext(context || null);
    setIsDareToDareOpen(true);
  };
  const closeDareToDare = () => {
    setIsDareToDareOpen(false);
  };

  // Morning tea is opened manually by the user, not auto-popped over notes
  useEffect(() => {
    // Auto-popup disabled so it never covers user's study notes uninvited
  }, []);

  // Upgrade & Premium State
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState<boolean>(false);
  const openUpgradeModal = () => setIsUpgradeModalOpen(true);
  const closeUpgradeModal = () => setIsUpgradeModalOpen(false);

  // New High-Impact Tools & Challenges Modals
  const [isCountdownOpen, setIsCountdownOpen] = useState<boolean>(false);
  const openCountdown = () => setIsCountdownOpen(true);
  const closeCountdown = () => setIsCountdownOpen(false);

  const [isFormulaSheetOpen, setIsFormulaSheetOpen] = useState<boolean>(false);
  const openFormulaSheet = () => setIsFormulaSheetOpen(true);
  const closeFormulaSheet = () => setIsFormulaSheetOpen(false);

  const [isVocabBuilderOpen, setIsVocabBuilderOpen] = useState<boolean>(false);
  const openVocabBuilder = () => setIsVocabBuilderOpen(true);
  const closeVocabBuilder = () => setIsVocabBuilderOpen(false);

  const [isFlashcardsOpen, setIsFlashcardsOpen] = useState<boolean>(false);
  const openFlashcards = () => setIsFlashcardsOpen(true);
  const closeFlashcards = () => setIsFlashcardsOpen(false);

  const [isStudyGoalsOpen, setIsStudyGoalsOpen] = useState<boolean>(false);
  const openStudyGoals = () => setIsStudyGoalsOpen(true);
  const closeStudyGoals = () => setIsStudyGoalsOpen(false);

  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState<boolean>(false);
  const openAnalytics = () => setIsAnalyticsOpen(true);
  const closeAnalytics = () => setIsAnalyticsOpen(false);

  const [isPastQuestionsOpen, setIsPastQuestionsOpen] = useState<boolean>(false);
  const openPastQuestions = () => setIsPastQuestionsOpen(true);
  const closePastQuestions = () => setIsPastQuestionsOpen(false);

  const [isWeaknessTrackerOpen, setIsWeaknessTrackerOpen] = useState<boolean>(false);
  const openWeaknessTracker = () => setIsWeaknessTrackerOpen(true);
  const closeWeaknessTracker = () => setIsWeaknessTrackerOpen(false);

  const [isStreakRewardOpen, setIsStreakRewardOpen] = useState<boolean>(false);
  const openStreakReward = () => setIsStreakRewardOpen(true);
  const closeStreakReward = () => setIsStreakRewardOpen(false);

  const [isPrintableMockOpen, setIsPrintableMockOpen] = useState<boolean>(false);
  const openPrintableMock = () => setIsPrintableMockOpen(true);
  const closePrintableMock = () => setIsPrintableMockOpen(false);

  // Global Search Modal State & Keyboard Shortcut
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState<boolean>(false);
  const openGlobalSearch = useCallback(() => setIsGlobalSearchOpen(true), []);
  const closeGlobalSearch = useCallback(() => setIsGlobalSearchOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsGlobalSearchOpen(prev => !prev);
        return;
      }
      // '/' key when not focused in input/textarea
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((document.activeElement?.tagName || ''))) {
        e.preventDefault();
        setIsGlobalSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const goBack = useCallback(() => {
    // 1. Close any open overlays or modals first
    if (isGlobalSearchOpen) { closeGlobalSearch(); return; }
    if (isMenuDrawerOpen) { closeMenuDrawer(); return; }
    if (isAiTutorOpen) { closeAiTutor(); return; }
    if (isCalculatorOpen) { closeCalculator(); return; }
    if (isLeaderboardOpen) { closeLeaderboard(); return; }
    if (isMorningTeaOpen) { closeMorningTea(); return; }
    if (isUpgradeModalOpen) { closeUpgradeModal(); return; }
    if (isDareToDareOpen) { closeDareToDare(); return; }
    if (isPaperSelectorOpen) { closePaperSelector(); return; }
    if (isCountdownOpen) { closeCountdown(); return; }
    if (isFormulaSheetOpen) { closeFormulaSheet(); return; }
    if (isVocabBuilderOpen) { closeVocabBuilder(); return; }
    if (isFlashcardsOpen) { closeFlashcards(); return; }
    if (isStudyGoalsOpen) { closeStudyGoals(); return; }
    if (isAnalyticsOpen) { closeAnalytics(); return; }
    if (isPastQuestionsOpen) { closePastQuestions(); return; }
    if (isWeaknessTrackerOpen) { closeWeaknessTracker(); return; }
    if (isStreakRewardOpen) { closeStreakReward(); return; }
    if (isPrintableMockOpen) { closePrintableMock(); return; }

    // 2. Pop navigation history
    const history = navHistoryRef.current;
    if (history.length > 0) {
      const prevView = history[history.length - 1];
      setNavigationHistory((prev) => prev.slice(0, -1));
      setActiveViewState(prevView);
      isHandlingInternalBack.current = true;
      try {
        if (typeof window !== 'undefined') {
          if (window.history.length > 1) {
            window.history.back();
          } else {
            window.history.replaceState({ view: prevView }, '');
          }
        }
      } catch {}
    } else {
      setActiveViewState('dashboard');
      try {
        if (typeof window !== 'undefined') {
          window.history.replaceState({ view: 'dashboard' }, '');
        }
      } catch {}
    }
  }, [
    isGlobalSearchOpen, closeGlobalSearch,
    isMenuDrawerOpen, closeMenuDrawer,
    isAiTutorOpen, closeAiTutor,
    isCalculatorOpen, closeCalculator,
    isLeaderboardOpen, closeLeaderboard,
    isMorningTeaOpen, closeMorningTea,
    isUpgradeModalOpen, closeUpgradeModal,
    isDareToDareOpen, closeDareToDare,
    isPaperSelectorOpen, closePaperSelector,
    isCountdownOpen, closeCountdown,
    isFormulaSheetOpen, closeFormulaSheet,
    isVocabBuilderOpen, closeVocabBuilder,
    isFlashcardsOpen, closeFlashcards,
    isStudyGoalsOpen, closeStudyGoals,
    isAnalyticsOpen, closeAnalytics,
    isPastQuestionsOpen, closePastQuestions,
    isWeaknessTrackerOpen, closeWeaknessTracker,
    isStreakRewardOpen, closeStreakReward,
    isPrintableMockOpen, closePrintableMock
  ]);

  // Handle browser popstate (back/forward button) and Android hardware back button
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      if (!window.history.state || !window.history.state.view) {
        window.history.replaceState({ view: 'dashboard' }, '');
      }
    } catch {}

    const handlePopState = (event: PopStateEvent) => {
      if (isHandlingInternalBack.current) {
        isHandlingInternalBack.current = false;
        return;
      }
      const targetView = (event.state?.view as ActiveViewType) || 'dashboard';
      setActiveViewState(targetView);
      setNavigationHistory((prev) => {
        if (prev.length > 0 && prev[prev.length - 1] === targetView) {
          return prev.slice(0, -1);
        }
        const idx = prev.lastIndexOf(targetView);
        if (idx !== -1) {
          return prev.slice(0, idx);
        }
        return prev.slice(0, -1);
      });
    };

    const handleHardwareBack = (e: Event) => {
      e.preventDefault();
      goBack();
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('backbutton', handleHardwareBack);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('backbutton', handleHardwareBack);
    };
  }, [goBack]);

  const [isPremium, setIsPremium] = useState<boolean>(() => {
    try {
      return premiumLicence.isValid();
    } catch {
      return false;
    }
  });


  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('studyplug_dark_mode');
      if (saved !== null) return saved === 'true';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('studyplug_dark_mode', String(isDarkMode));
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark-theme');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark-theme');
      }
    } catch (e) {
      console.warn('Theme storage error:', e);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  const availableYears = ALL_OFFICIAL_YEARS;

  const allQuestions = ALL_QUESTIONS;

  // Synchronously initialize loadedQuestions to guaranteed authentic questions
  const [loadedQuestions, setLoadedQuestions] = useState<Question[]>(() => {
    return getBaseQuestionsForSubject('Mathematics');
  });

  const setSelectedSubject = useCallback((subject: string) => {
    const norm = normalizeSubjectName(subject);
    setSelectedSubjectState(norm);
    setLoadedQuestions(getBaseQuestionsForSubject(norm));
  }, []);

  const [isSyncingWithCpanel, setIsSyncingWithCpanel] = useState<boolean>(false);
  const [cpanelDataSource, setCpanelDataSource] = useState<'cpanel' | 'cached' | 'local'>('local');

  const reloadQuestions = useCallback(async () => {
    setIsSyncingWithCpanel(true);
    try {
      const res = await fetchQuestions(selectedSubject, selectedYear);
      if (res.questions && res.questions.length > 0) {
        // Strictly verify that returned questions belong to selectedSubject and matching paper
        const normSelected = normalizeSubjectName(selectedSubject).toLowerCase();
        const isReqTheory = normSelected.includes('(theory)');
        const isReqPractical = normSelected.includes('(practical)');

        const validMatches = res.questions.filter(q => {
          const qNorm = (q.subject || '').toLowerCase();
          const qTopic = (q.topic || '').toLowerCase();

          if (!isReqTheory && (qNorm.includes('(theory)') || qTopic.includes('paper 2') || (q.options?.[0]?.text && q.options[0].text.includes('[theory')))) {
            return false;
          }
          if (!isReqPractical && (qNorm.includes('(practical)') || qTopic.includes('paper 3') || (q.options?.[0]?.text && q.options[0].text.includes('[practical')))) {
            return false;
          }
          if (isReqTheory && !qNorm.includes('(theory)') && !qTopic.includes('paper 2')) {
            return false;
          }
          if (isReqPractical && !qNorm.includes('(practical)') && !qTopic.includes('paper 3')) {
            return false;
          }

          return qNorm === normSelected || qNorm.includes(normSelected) || normSelected.includes(qNorm);
        });

        if (validMatches.length > 0) {
          setLoadedQuestions(validMatches);
          setCpanelDataSource(res.source);
        } else {
          setLoadedQuestions(getBaseQuestionsForSubject(selectedSubject));
        }
      } else {
        setLoadedQuestions(getBaseQuestionsForSubject(selectedSubject));
      }
    } catch (e) {
      console.warn('Error loading questions:', e);
      setLoadedQuestions(getBaseQuestionsForSubject(selectedSubject));
    } finally {
      setIsSyncingWithCpanel(false);
    }
  }, [selectedSubject, selectedYear]);

  useEffect(() => {
    reloadQuestions();
  }, [reloadQuestions]);

  const activeQuestions = loadedQuestions;

  const toggleBookmarkQuestion = (qId: number) => {
    setBookmarks((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const isQuestionBookmarked = (qId: number) => bookmarks.includes(qId);

  /**
   * Start CBT test for a single subject synchronously with zero question leakage
   */
  const startTestForSubject = (subject: string, year: number | 'all' = 'all', topic: string = 'all') => {
    const norm = normalizeSubjectName(subject);
    setSelectedSubject(norm);
    setSelectedSubjects([norm]);
    setActiveExamSubject(norm);
    setSelectedYear(year);
    setUserAnswers({});
    setFlaggedQuestions([]);
    setCurrentQuestion(1);
    setTimeRemaining(2 * 3600 + 30 * 60);

    // Synchronously populate questions immediately (exclude Theory from OBJ tests)
    const synchronousQs = getFilteredQuestions({
      subject: norm,
      year: year,
      topic: topic,
      limit: undefined, // Allow full questions bank to load
      paperType: 'OBJ'
    });
    const qsToUse = synchronousQs && synchronousQs.length > 0 ? synchronousQs : getBaseQuestionsForSubject(norm);
    setLoadedQuestions(qsToUse);
    setMultiSubjectQuestions({ [norm]: qsToUse });
    setSubjectExamState({ [norm]: { answers: {}, flagged: [], currentQuestion: 1 } });
    setActiveView('test');
  };

  /**
   * Start CBT test for multiple subjects (e.g. JAMB UTME 4-subject combination)
   */
  const startMultiSubjectTest = (
    subjects: string[],
    year: number | 'all' = 'all',
    topic: string = 'all'
  ) => {
    const normSubjects = subjects.map(s => normalizeSubjectName(s));
    if (normSubjects.length === 0) normSubjects.push('Mathematics');

    const firstSub = normSubjects[0];
    setSelectedSubject(firstSub);
    setSelectedSubjects(normSubjects);
    setActiveExamSubject(firstSub);
    setSelectedYear(year);
    setUserAnswers({});
    setFlaggedQuestions([]);
    setCurrentQuestion(1);
    // Standard JAMB 4-subject UTME duration: 2 hours (120 minutes)
    setTimeRemaining(2 * 3600);

    const questionsDict = getQuestionsForMultiSubject(normSubjects, {
      year,
      topic,
      limitPerSubject: normSubjects.length > 1 ? 40 : 50,
      paperType: 'OBJ'
    });

    setMultiSubjectQuestions(questionsDict);
    setLoadedQuestions(questionsDict[firstSub] || []);

    const initialStates: Record<string, { answers: Record<number, string>; flagged: number[]; currentQuestion: number }> = {};
    normSubjects.forEach(s => {
      initialStates[s] = { answers: {}, flagged: [], currentQuestion: 1 };
    });
    setSubjectExamState(initialStates);
    setActiveView('test');
  };

  /**
   * Seamlessly switch between active subjects during a multi-subject CBT exam
   */
  const switchActiveExamSubject = (targetSubject: string) => {
    const normTarget = normalizeSubjectName(targetSubject);
    if (normTarget === activeExamSubject) return;

    // 1. Save state of the currently active subject
    setSubjectExamState(prev => ({
      ...prev,
      [activeExamSubject]: {
        answers: { ...userAnswers },
        flagged: [...flaggedQuestions],
        currentQuestion
      }
    }));

    // 2. Load target subject's questions and state
    const targetState = subjectExamState[normTarget] || { answers: {}, flagged: [], currentQuestion: 1 };
    const targetQs = multiSubjectQuestions[normTarget] || getFilteredQuestions({ subject: normTarget, limit: 40 });

    setActiveExamSubject(normTarget);
    setSelectedSubject(normTarget);
    setLoadedQuestions(targetQs);
    setUserAnswers(targetState.answers || {});
    setFlaggedQuestions(targetState.flagged || []);
    setCurrentQuestion(targetState.currentQuestion || 1);
  };

  // Submit test engine: aggregate across all selected subjects, calculate composite score
  const submitTest = () => {
    const updatedExamState = {
      ...subjectExamState,
      [activeExamSubject]: {
        answers: { ...userAnswers },
        flagged: [...flaggedQuestions],
        currentQuestion
      }
    };

    let totalScore = 0;
    let totalQuestionsCount = 0;
    const breakdowns: SubjectScoreBreakdown[] = [];

    // Calculate score per subject
    selectedSubjects.forEach((subName) => {
      const subQs = multiSubjectQuestions[subName] || (subName === activeExamSubject ? activeQuestions : getFilteredQuestions({ subject: subName }));
      const subState = updatedExamState[subName] || { answers: {}, flagged: [], currentQuestion: 1 };
      let subCorrect = 0;

      subQs.forEach((q) => {
        if (subState.answers[q.questionNumber] === q.correctAnswer) {
          subCorrect++;
        }
      });

      const subAcc = subQs.length > 0 ? Math.round((subCorrect / subQs.length) * 100) : 0;
      breakdowns.push({
        subject: subName,
        score: subCorrect,
        total: subQs.length,
        accuracy: subAcc
      });

      totalScore += subCorrect;
      totalQuestionsCount += subQs.length;
    });

    const accuracy = totalQuestionsCount > 0 ? Math.round((totalScore / totalQuestionsCount) * 100) : 0;
    const timeSpent = (selectedSubjects.length > 1 ? 2 * 3600 : 2 * 3600 + 30 * 60) - timeRemaining;

    // JAMB Composite Score calculation (scaled to 400 for 4 subjects)
    let compositeScore = Math.round((totalScore / (totalQuestionsCount || 1)) * 400);
    if (selectedSubjects.length === 1) {
      compositeScore = Math.round((totalScore / (totalQuestionsCount || 1)) * 100);
    }

    const result: TestResult = {
      id: Date.now().toString(),
      subject: selectedSubjects.join(', '),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      score: totalScore,
      total: totalQuestionsCount,
      accuracy,
      timeSpentSeconds: Math.max(timeSpent, 60),
      userAnswers: { ...userAnswers },
      flaggedQuestions: [...flaggedQuestions],
      subjectBreakdowns: breakdowns,
      compositeScore
    };

    setLastTestResult(result);
    setTestsTaken((prev) => prev + 1);
    setOverallAccuracy((prev) => Math.round((prev + accuracy) / 2));
    setTestHistory((prev) => [result, ...prev]);
    setActiveView('results');
  };

  const retakeTest = () => {
    if (selectedSubjects.length > 1) {
      startMultiSubjectTest(selectedSubjects, selectedYear);
    } else {
      startTestForSubject(selectedSubject, selectedYear);
    }
  };

  return (
    <AppContext.Provider
      value={{
        activeView,
        setActiveView,
        goBack,
        navigationHistory,
        testsTaken,
        overallAccuracy,
        studyStreak,
        bookmarks,
        testHistory,
        selectedExam,
        setSelectedExam,
        selectedSubject,
        setSelectedSubject,
        selectedSubjects,
        setSelectedSubjects,
        activeExamSubject,
        setActiveExamSubject,
        switchActiveExamSubject,
        multiSubjectQuestions,
        selectedYear,
        setSelectedYear,
        startTestForSubject,
        startMultiSubjectTest,
        availableYears,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        selectAnswer,
        clearAnswer,
        flaggedQuestions,
        toggleFlagQuestion,
        toggleBookmarkQuestion,
        isQuestionBookmarked,
        timeRemaining,
        setTimeRemaining,
        submitTest,
        retakeTest,
        lastTestResult,
        questions: activeQuestions,
        allQuestions,
        isSyncingWithCpanel,
        cpanelDataSource,
        reloadQuestions,
        totalQuestionsInDb,
        isAiTutorOpen,
        openAiTutor,
        closeAiTutor,
        aiTutorContext,
        isMenuDrawerOpen,
        openMenuDrawer,
        closeMenuDrawer,
        isLeaderboardOpen,
        openLeaderboard,
        closeLeaderboard,
        isCalculatorOpen,
        openCalculator,
        closeCalculator,
        isMorningTeaOpen,
        openMorningTea,
        closeMorningTea,
        isDareToDareOpen,
        dareToDareContext,
        openDareToDare,
        closeDareToDare,
        selectedExamPapers,
        setSelectedExamPapers,
        isPaperSelectorOpen,
        paperSelectorExam,
        openPaperSelector,
        closePaperSelector,
        isUpgradeModalOpen,
        openUpgradeModal,
        closeUpgradeModal,
        isPremium,
        isCountdownOpen,
        openCountdown,
        closeCountdown,
        isFormulaSheetOpen,
        openFormulaSheet,
        closeFormulaSheet,
        isVocabBuilderOpen,
        openVocabBuilder,
        closeVocabBuilder,
        isFlashcardsOpen,
        openFlashcards,
        closeFlashcards,
        isStudyGoalsOpen,
        openStudyGoals,
        closeStudyGoals,
        isAnalyticsOpen,
        openAnalytics,
        closeAnalytics,
        isPastQuestionsOpen,
        openPastQuestions,
        closePastQuestions,
        isWeaknessTrackerOpen,
        openWeaknessTracker,
        closeWeaknessTracker,
        isStreakRewardOpen,
        openStreakReward,
        closeStreakReward,
        isPrintableMockOpen,
        openPrintableMock,
        closePrintableMock,
        isGlobalSearchOpen,
        openGlobalSearch,
        closeGlobalSearch,
        isDarkMode,
        toggleDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
