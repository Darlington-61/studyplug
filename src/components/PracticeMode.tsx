import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Question } from '../data/questions';
import { getExamTipForQuestion } from '../utils/examTips';
import { BoardExplanation } from './common/BoardExplanation';
import {
  ALL_QUESTIONS,
  getFilteredQuestions,
  getTopicsForSubject,
  getYearsForSubject,
  normalizeSubjectName
} from '../data/allQuestionsHub';
import { EXAM_CATALOG, ExamType, getExamLogo } from './common/ExamLogos';
import { ComprehensionPassageViewer } from './common/ComprehensionPassageViewer';

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
    startMultiSubjectTest,
    selectedSubject: appSelectedSubject,
    selectedSubjects: appSelectedSubjects
  } = useApp();

  // ─── Practice Session Control ──────────────────────────────────────────────
  const [isSessionStarted, setIsSessionStarted] = useState<boolean>(false);

  // ─── Target Exam (Official Nigerian Exams with Logos) ──────────────────────
  const [selectedExam, setSelectedExam] = useState<ExamType>('JAMB');
  const [isExamDropdownOpen, setIsExamDropdownOpen] = useState<boolean>(false);

  // ─── Selected Subjects List (1 to 4 max) ──────────────────────────────────
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(() => {
    if (appSelectedSubjects && appSelectedSubjects.length > 0) return appSelectedSubjects;
    if (appSelectedSubject) return [appSelectedSubject];
    return ['Use of English', 'Mathematics'];
  });

  // ─── Per-Subject Configuration (Year, Question Count, Topics) ─────────────
  const [subjectConfigs, setSubjectConfigs] = useState<Record<string, SubjectCardConfig>>({
    'Use of English': { year: 'all', questionCount: 40, selectedTopics: ['all'] },
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
    return selectedSubjects[0] || 'Use of English';
  });

  // ─── Bottom Global Options ────────────────────────────────────────────────
  const [practiceMode, setPracticeMode] = useState<'study' | 'exam'>('study'); // study = instant solutions, exam = mock
  const [examDurationMins, setExamDurationMins] = useState<number | 'untimed'>('untimed');
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);
  const [shuffleOptions, setShuffleOptions] = useState<boolean>(false);

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

  // Available subjects metadata
  const availableSubjectCatalog = [
    { name: 'Use of English', icon: '📖', count: 3144 },
    { name: 'Mathematics', icon: '📐', count: 1850 },
    { name: 'Physics', icon: '⚛️', count: 1420 },
    { name: 'Chemistry', icon: '🧪', count: 1380 },
    { name: 'Biology', icon: '🍃', count: 1560 },
    { name: 'Economics', icon: '📈', count: 980 },
    { name: 'Government', icon: '🏛️', count: 850 },
    { name: 'Literature in English', icon: '📚', count: 620 }
  ];

  // Helper to ensure config exists for a subject
  const getConfigForSubject = (sub: string): SubjectCardConfig => {
    return subjectConfigs[sub] || { year: 'all', questionCount: 20, selectedTopics: ['all'] };
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
    setTempSelectedTopics(current && current.length > 0 ? [...current] : ['all']);
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
    const rawTopic =
      activeSubjectConfig.selectedTopics.includes('all') || activeSubjectConfig.selectedTopics.length === 0
        ? 'all'
        : activeSubjectConfig.selectedTopics[0];

    const qs = getFilteredQuestions({
      exam: selectedExam,
      subject: activeSubjectTab,
      year: activeSubjectConfig.year,
      topic: rawTopic,
      limit: activeSubjectConfig.questionCount
    });

    return qs;
  }, [selectedExam, activeSubjectTab, activeSubjectConfig]);

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

  // Close exam dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#exam-dropdown-container')) {
        setIsExamDropdownOpen(false);
      }
    };
    if (isExamDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExamDropdownOpen]);

  // Start Session
  const handleStartPractice = () => {
    setPracticeIndex(0);
    setUserSelections({});
    setRevealedSolutions({});
    setIsSessionComplete(false);

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

    if (examDurationMins !== 'untimed') {
      setTimeRemainingSeconds(examDurationMins * 60);
      setIsTimerRunning(true);
    } else {
      setTimeRemainingSeconds(0);
      setIsTimerRunning(false);
    }
  };

  const handleSelectOption = (key: string) => {
    if (!currentQ) return;
    setUserSelections((prev) => ({ ...prev, [currentQ.id]: key }));

    if (practiceMode === 'study') {
      setRevealedSolutions((prev) => ({ ...prev, [currentQ.id]: true }));
    }
  };

  // Safe question fallback
  const safeIndex = practiceIndex >= activeQuestionList.length ? 0 : practiceIndex;
  const currentQ = activeQuestionList[safeIndex] || activeQuestionList[0];
  const isBookmarked = currentQ ? isQuestionBookmarked(currentQ.id) : false;
  const currentAnswer = currentQ ? userSelections[currentQ.id] : undefined;
  const isCurrentRevealed = currentQ ? revealedSolutions[currentQ.id] : false;

  // Score Calculation
  const scoreStats = useMemo(() => {
    let correct = 0;
    let answered = 0;
    activeQuestionList.forEach((q) => {
      const ans = userSelections[q.id];
      if (ans !== undefined) {
        answered++;
        if (ans === q.correctAnswer) correct++;
      }
    });
    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { correct, answered, total: activeQuestionList.length, percentage };
  }, [activeQuestionList, userSelections]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // ══════════════════════════════════════════════════════════════════════════════
  // VIEW 1: CLEAN TESTDRILLER-STYLE SETUP BOARD (Fits on 1 Screen!)
  // ══════════════════════════════════════════════════════════════════════════════
  if (!isSessionStarted) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 text-white select-none animate-fade-up">
        {/* Main Board Container */}
        <div className="rounded-3xl bg-[#092218] border-2 border-[#C4823F] shadow-2xl flex flex-col relative z-20">
          {/* ─── Top Header Strip (Chalkboard Header with Exam Logos Dropdown) ─── */}
          <div className="bg-[#0E3526] px-4 sm:px-5 py-3 rounded-t-3xl border-b-2 border-[#C4823F] flex flex-wrap items-center justify-between gap-3 relative z-30">
            <div className="flex items-center space-x-3 flex-wrap gap-y-2">
              <span className="text-sm sm:text-base font-black text-[#FFCC00] tracking-wide">
                Practice Target:
              </span>

              {/* Custom Exam Dropdown with Official High-Res Logos */}
              <div id="exam-dropdown-container" className="relative">
                <button
                  type="button"
                  onClick={() => setIsExamDropdownOpen((prev) => !prev)}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#061710] border-2 border-[#C4823F] hover:border-[#FFCC00] transition shadow cursor-pointer group select-none"
                  title="Switch Examination"
                >
                  <div className="w-6 h-6 rounded-full bg-black/40 flex items-center justify-center p-0.5 shrink-0 border border-white/20">
                    {React.createElement(getExamLogo(selectedExam), { className: 'w-5 h-5' })}
                  </div>
                  <span className="text-xs sm:text-sm font-black text-[#FFCC00] group-hover:text-yellow-300">
                    {EXAM_CATALOG.find((e) => e.id === selectedExam)?.fullName || selectedExam}
                  </span>
                  <span className="text-[11px] text-white/60 ml-0.5 group-hover:text-white transition">
                    {isExamDropdownOpen ? '▲' : '▼'}
                  </span>
                </button>

                {/* Dropdown Popup Menu */}
                {isExamDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 rounded-2xl bg-[#092218] border-2 border-[#C4823F] shadow-2xl p-2 z-50 space-y-1 backdrop-blur-md animate-fade-in">
                    <div className="px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-white/50 border-b border-[#C4823F]/30 flex items-center justify-between">
                      <span>Choose Examination</span>
                      <span className="text-[#34D399] font-bold">7 Official Exams</span>
                    </div>

                    <div className="max-h-80 overflow-y-auto space-y-1 py-1 pr-0.5">
                      {EXAM_CATALOG.map((exam) => {
                        const isSelected = selectedExam === exam.id;
                        const ExamLogoComp = exam.Logo;
                        return (
                          <button
                            key={exam.id}
                            type="button"
                            onClick={() => {
                              setSelectedExam(exam.id);
                              setIsExamDropdownOpen(false);
                            }}
                            className={`w-full text-left p-2.5 rounded-xl flex items-center space-x-3 transition cursor-pointer ${
                              isSelected
                                ? 'bg-[#0E3526] border-2 border-[#34D399] shadow-md'
                                : 'bg-[#061710]/80 border border-[#C4823F]/30 hover:border-[#FFCC00]/70 hover:bg-[#071F15]'
                            }`}
                          >
                            <div className="w-8 h-8 rounded-full bg-black/50 p-0.5 flex items-center justify-center shrink-0 border border-white/20 shadow">
                              <ExamLogoComp className="w-7 h-7" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-xs font-black truncate ${
                                    isSelected ? 'text-[#34D399]' : 'text-white'
                                  }`}
                                >
                                  {exam.fullName}
                                </span>
                                {isSelected && (
                                  <span className="text-[10px] text-[#34D399] font-black shrink-0 ml-1">
                                    ✓ Active
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-white/60 truncate leading-tight">
                                {exam.shortDesc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveView('dashboard')}
              className="p-1.5 px-3 rounded-xl bg-[#061710] border border-[#C4823F]/60 text-white/80 hover:text-[#FFCC00] transition cursor-pointer flex items-center space-x-1.5 text-xs font-bold"
              title="Return to Dashboard"
            >
              <span>🏠</span>
              <span className="hidden sm:inline">Home</span>
            </button>
          </div>

          {/* ─── Action Controls Bar ([Select Subjects] | User | [▶ Start]) ─────── */}
          <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-b border-[#C4823F]/20 bg-[#071F15]">
            <div className="flex items-center space-x-3">
              {/* Select Subjects Button (Opens Modal) */}
              <button
                type="button"
                onClick={() => setIsSubjectPickerOpen(true)}
                className="px-4 py-2 rounded-xl bg-[#2563EB] text-white font-black text-xs hover:bg-blue-600 transition shadow cursor-pointer flex items-center space-x-1.5"
              >
                <span>➕</span>
                <span>Select Subjects</span>
                <span className="ml-1 px-1.5 py-0.5 rounded-md bg-white/20 text-[10px]">
                  {selectedSubjects.length}/4
                </span>
              </button>

              <div className="hidden sm:flex items-center space-x-2 text-xs text-white/70">
                <span>User:</span>
                <span className="px-3 py-1 rounded-lg bg-[#061710] border border-[#C4823F]/40 text-[#FFCC00] font-black">
                  STUDENT GOLD
                </span>
              </div>
            </div>

            {/* Start Practice Button */}
            <button
              type="button"
              onClick={handleStartPractice}
              className="px-7 py-2.5 rounded-xl bg-[#9333EA] hover:bg-purple-600 text-white font-black text-sm transition shadow-lg cursor-pointer flex items-center space-x-2 active:scale-95 border border-purple-400"
            >
              <span>▶</span>
              <span>Start</span>
            </button>
          </div>

          {/* ─── Subject Cards Grid (Compact, Exactly Like TestDriller!) ──────── */}
          <div className="p-5 sm:p-6 min-h-[220px] bg-[#061710]/40 flex-1">
            {selectedSubjects.length === 0 ? (
              <div className="p-8 text-center border-2 border-dashed border-[#C4823F]/40 rounded-2xl">
                <p className="text-sm text-white/60">No subjects selected yet.</p>
                <button
                  type="button"
                  onClick={() => setIsSubjectPickerOpen(true)}
                  className="mt-2 px-4 py-2 rounded-xl bg-[#FFCC00] text-[#061710] font-black text-xs cursor-pointer"
                >
                  Select Subjects Now
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {selectedSubjects.map((sub) => {
                  const cfg = getConfigForSubject(sub);
                  const years = getYearsForSubject(sub);
                  const icon = availableSubjectCatalog.find((s) => s.name === sub)?.icon || '📚';
                  const topicsLabel =
                    cfg.selectedTopics.includes('all') || cfg.selectedTopics.length === 0
                      ? 'ALL'
                      : cfg.selectedTopics.length === 1
                      ? cfg.selectedTopics[0]
                      : `${cfg.selectedTopics[0]} (+${cfg.selectedTopics.length - 1})`;

                  return (
                    <div
                      key={sub}
                      className="p-4 rounded-2xl bg-[#092218] border-2 border-[#C4823F] shadow-lg flex flex-col justify-between space-y-3"
                    >
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-[#C4823F]/20 pb-2">
                        <div className="flex items-center space-x-2 truncate">
                          <span className="text-xl">{icon}</span>
                          <span className="text-sm font-black text-white truncate">{sub}</span>
                        </div>
                        {selectedSubjects.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedSubjects((prev) => prev.filter((s) => s !== sub));
                            }}
                            className="text-white/40 hover:text-rose-400 text-xs font-bold cursor-pointer p-1"
                            title="Remove Subject"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      {/* Year Picker */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/70 font-bold flex items-center space-x-1">
                          <span>📅</span>
                          <span>Year</span>
                        </span>
                        <select
                          value={cfg.year}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateSubjectConfig(sub, {
                              year: val === 'all' ? 'all' : parseInt(val, 10)
                            });
                          }}
                          className="w-32 bg-[#061710] border border-[#C4823F]/60 text-[#FFCC00] font-bold text-xs rounded-lg px-2 py-1 outline-none cursor-pointer"
                        >
                          <option value="all">ALL</option>
                          {years.map((yr) => (
                            <option key={yr} value={yr}>
                              {yr}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* No. of Questions Picker */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/70 font-bold flex items-center space-x-1">
                          <span>#</span>
                          <span>No Question</span>
                        </span>
                        <select
                          value={cfg.questionCount}
                          onChange={(e) => {
                            updateSubjectConfig(sub, {
                              questionCount: parseInt(e.target.value, 10)
                            });
                          }}
                          className="w-32 bg-[#061710] border border-[#C4823F]/60 text-[#FFCC00] font-bold text-xs rounded-lg px-2 py-1 outline-none cursor-pointer"
                        >
                          <option value={10}>10</option>
                          <option value={20}>20</option>
                          <option value={30}>30</option>
                          <option value={40}>40</option>
                          <option value={50}>50</option>
                          <option value={60}>60</option>
                        </select>
                      </div>

                      {/* Topic Selector with Pencil Edit Icon */}
                      <div className="flex items-center justify-between text-xs pt-1 border-t border-[#C4823F]/20">
                        <span className="text-white/70 font-bold flex items-center space-x-1">
                          <span>📝</span>
                          <span>Topic</span>
                        </span>

                        <div className="flex items-center space-x-1.5 truncate max-w-[140px]">
                          <span className="text-xs font-black text-[#34D399] truncate">{topicsLabel}</span>
                          <button
                            type="button"
                            onClick={() => handleOpenTopicModal(sub)}
                            className="p-1 rounded-md bg-[#061710] border border-[#C4823F]/60 text-[#FFCC00] hover:bg-[#FFCC00] hover:text-[#061710] transition cursor-pointer"
                            title="Edit Topics"
                          >
                            ✏️
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ─── Bottom Options Frame (TestDriller Architecture) ────────────────── */}
          <div className="p-4 sm:p-5 bg-[#071F15] border-t-2 border-[#C4823F]/50">
            <div className="relative border border-[#C4823F]/40 rounded-2xl p-4 sm:p-5 pt-5">
              <span className="absolute -top-3 left-4 px-2.5 py-0.5 bg-[#071F15] text-[#FFCC00] text-xs font-black uppercase tracking-wider">
                Options
              </span>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs">
                {/* Mode Selector */}
                <div className="flex items-center space-x-2">
                  <label className="text-white/80 font-bold">Select Mode:</label>
                  <select
                    value={practiceMode}
                    onChange={(e) => setPracticeMode(e.target.value as any)}
                    className="bg-[#061710] border border-[#C4823F]/60 text-[#FFCC00] font-black text-xs rounded-xl px-3 py-1.5 outline-none cursor-pointer"
                  >
                    <option value="study">Practice (Instant Solutions)</option>
                    <option value="exam">Exam (Timed Mock)</option>
                  </select>
                </div>

                {/* Exam Duration */}
                <div className="flex items-center space-x-2">
                  <label className="text-white/80 font-bold">Exam Duration:</label>
                  <select
                    value={examDurationMins}
                    onChange={(e) => {
                      const v = e.target.value;
                      setExamDurationMins(v === 'untimed' ? 'untimed' : parseInt(v, 10));
                    }}
                    className="bg-[#061710] border border-[#C4823F]/60 text-[#34D399] font-mono font-black text-xs rounded-xl px-3 py-1.5 outline-none cursor-pointer"
                  >
                    <option value="untimed">Untimed</option>
                    <option value={15}>00:15:00</option>
                    <option value={30}>00:30:00</option>
                    <option value={45}>00:45:00</option>
                    <option value={60}>01:00:00</option>
                    <option value={120}>02:00:00</option>
                  </select>
                </div>

                {/* Shuffle Checkboxes */}
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-1.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={shuffleQuestions}
                      onChange={(e) => setShuffleQuestions(e.target.checked)}
                      className="accent-[#FFCC00] w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="font-bold text-white/80">Shuffle Question</span>
                  </label>

                  <label className="flex items-center space-x-1.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={shuffleOptions}
                      onChange={(e) => setShuffleOptions(e.target.checked)}
                      className="accent-[#FFCC00] w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="font-bold text-white/80">Shuffle Option</span>
                  </label>
                </div>

                {/* Instruction Button */}
                <button
                  type="button"
                  onClick={() => setIsInstructionOpen(true)}
                  className="px-4 py-1.5 rounded-xl bg-[#061710] border border-white/30 text-white/80 hover:text-white font-bold text-xs cursor-pointer shadow-sm"
                >
                  Instruction
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MODAL 1: Select Subjects Modal (TestDriller Style) ─────────────── */}
        {isSubjectPickerOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
            <div className="w-full max-w-lg rounded-3xl bg-[#092218] border-2 border-[#C4823F] p-6 space-y-5 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#C4823F]/30 pb-3">
                <h3 className="text-base font-black text-[#FFCC00]">
                  Select Subjects (Choose 1 to 4)
                </h3>
                <button
                  type="button"
                  onClick={() => setIsSubjectPickerOpen(false)}
                  className="text-white/60 hover:text-white text-base font-black cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* 1-Tap Presets */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-white/60 uppercase">1-Tap UTME Presets:</span>
                <div className="flex flex-wrap gap-2">
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
                      className="px-3 py-1 rounded-xl bg-[#061710] border border-[#C4823F]/50 text-xs font-bold text-white/90 hover:border-[#FFCC00] cursor-pointer"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject Checkboxes Grid */}
              <div className="grid grid-cols-2 gap-2.5 max-h-60 overflow-y-auto pr-1">
                {availableSubjectCatalog.map((sub) => {
                  const isChecked = selectedSubjects.includes(sub.name);
                  return (
                    <label
                      key={sub.name}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition select-none ${
                        isChecked
                          ? 'bg-[#0E3526] border-[#34D399]'
                          : 'bg-[#061710] border-[#C4823F]/30 hover:border-[#FFCC00]/40'
                      }`}
                    >
                      <div className="flex items-center space-x-2 truncate">
                        <span>{sub.icon}</span>
                        <span className="text-xs font-bold text-white truncate">{sub.name}</span>
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
                        className="accent-[#34D399] w-4 h-4 cursor-pointer"
                      />
                    </label>
                  );
                })}
              </div>

              <div className="flex justify-end pt-2 border-t border-[#C4823F]/20">
                <button
                  type="button"
                  onClick={() => setIsSubjectPickerOpen(false)}
                  className="px-6 py-2 rounded-xl bg-[#34D399] text-[#061710] font-black text-xs hover:bg-emerald-300 transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── MODAL 2: Topic Checklist Modal (Exact TestDriller Screenshot 3!) ─ */}
        {topicModalSubject && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
            <div className="w-full max-w-xl rounded-3xl bg-[#092218] border-2 border-[#C4823F] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
              {/* Modal Title */}
              <div className="bg-[#0E3526] px-5 py-3 border-b border-[#C4823F] flex items-center justify-between">
                <h3 className="text-sm font-black text-[#FFCC00]">
                  Select {topicModalSubject} Topics
                </h3>
                <button
                  type="button"
                  onClick={() => setTopicModalSubject(null)}
                  className="text-white/60 hover:text-white text-base font-black cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Master "Select All" Checkbox */}
              <div className="p-4 bg-[#071F15] border-b border-[#C4823F]/20">
                <label className="flex items-center space-x-2 text-xs font-black text-white cursor-pointer select-none">
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
                    className="accent-[#FFCC00] w-4 h-4 cursor-pointer"
                  />
                  <span>Select All Topics</span>
                </label>
              </div>

              {/* Scrollable Topics Checklist */}
              <div className="p-5 overflow-y-auto space-y-2 flex-1 divide-y divide-[#C4823F]/10">
                {getTopicsForSubject(topicModalSubject).map((top) => {
                  const isChecked =
                    tempSelectedTopics.includes('all') || tempSelectedTopics.includes(top);
                  return (
                    <label
                      key={top}
                      className="pt-2 flex items-center space-x-3 text-xs font-bold text-white/90 hover:text-[#FFCC00] cursor-pointer select-none"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          if (tempSelectedTopics.includes('all')) {
                            // De-selecting from "all": uncheck all and check only this one inverted
                            const allT = getTopicsForSubject(topicModalSubject);
                            setTempSelectedTopics(allT.filter((t) => t !== top));
                          } else {
                            if (e.target.checked) {
                              setTempSelectedTopics((prev) => [...prev, top]);
                            } else {
                              setTempSelectedTopics((prev) => prev.filter((t) => t !== top));
                            }
                          }
                        }}
                        className="accent-[#34D399] w-4 h-4 cursor-pointer"
                      />
                      <span>{top}</span>
                    </label>
                  );
                })}
              </div>

              {/* Modal Actions: [Cancel] [Okay] */}
              <div className="p-4 bg-[#0E3526] border-t border-[#C4823F] flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setTopicModalSubject(null)}
                  className="px-5 py-2 rounded-xl bg-[#061710] border border-white/30 text-white/80 font-bold text-xs hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveTopicModal}
                  className="px-6 py-2 rounded-xl bg-[#2563EB] text-white font-black text-xs hover:bg-blue-600 transition shadow cursor-pointer"
                >
                  Okay
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── MODAL 3: Instructions Modal ────────────────────────────────────── */}
        {isInstructionOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-fade-in">
            <div className="w-full max-w-md rounded-3xl bg-[#092218] border-2 border-[#C4823F] p-6 space-y-4 shadow-2xl">
              <h3 className="text-base font-black text-[#FFCC00]">Practice Instructions</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                • <strong>Practice Mode:</strong> Provides instant solution reveals with step-by-step blackboard mathematical working and Examiner Strategy tips after every question.
                <br /><br />
                • <strong>Exam Mode:</strong> Simulates official CBT exam conditions with a strict countdown timer. Your score report is generated at the end.
                <br /><br />
                • Use the topic editor (✏️) on any subject card to filter questions by specific syllabus topics.
              </p>
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setIsInstructionOpen(false)}
                  className="px-5 py-2 rounded-xl bg-[#FFCC00] text-[#061710] font-black text-xs cursor-pointer"
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
  // VIEW 2: ACTIVE QUESTION CHALKBOARD DRILL (When user clicked Start)
  // ══════════════════════════════════════════════════════════════════════════════
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-5 text-white animate-fade-up">
      {/* ─── Top Control Header ─────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-3xl bg-[#092218] border-2 border-[#C4823F] shadow-xl">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={() => setIsSessionStarted(false)}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-2xl bg-[#061710] border-2 border-[#C4823F] text-[#FFCC00] font-black text-xs hover:bg-[#FFCC00] hover:text-[#061710] transition cursor-pointer shadow-md"
          >
            <span>←</span>
            <span>Change Subject / Setup</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveView('dashboard')}
            className="inline-flex items-center space-x-1 px-3 py-2 rounded-2xl bg-[#061710]/70 border border-[#C4823F]/50 text-white/70 font-bold text-xs hover:text-white transition cursor-pointer"
          >
            <span>🏠</span>
            <span>Dashboard</span>
          </button>
        </div>

        {/* Timer or Instant Mode */}
        <div className="flex items-center space-x-3">
          {examDurationMins !== 'untimed' ? (
            <div
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-mono font-black text-xs ${
                timeRemainingSeconds < 120
                  ? 'bg-rose-950/80 text-rose-300 border border-rose-500 animate-pulse'
                  : 'bg-[#0E3526] text-[#34D399] border border-[#34D399]/40'
              }`}
            >
              <span>⏱️</span>
              <span>{formatTimer(timeRemainingSeconds)}</span>
            </div>
          ) : (
            <span className="text-[11px] font-black text-[#34D399] bg-[#0E3526] px-3 py-1.5 rounded-xl border border-[#34D399]/40 flex items-center space-x-1">
              <span>⚡</span>
              <span>Instant Study Mode</span>
            </span>
          )}

          <div className="text-xs font-bold text-white/80 bg-[#061710] px-3 py-1.5 rounded-xl border border-[#C4823F]/40">
            Score: <span className="text-[#FFCC00] font-black">{scoreStats.correct}</span> / {scoreStats.answered}
          </div>
        </div>
      </div>

      {/* ─── Multi-Subject Switcher Tabs ────────────────────────────────────── */}
      {selectedSubjects.length > 1 && (
        <div className="p-3 rounded-2xl bg-[#092218] border-2 border-[#C4823F] shadow-lg flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-black uppercase text-[#FFCC00] tracking-wider shrink-0 mr-1">
              Active Subject:
            </span>
            {selectedSubjects.map((sub) => {
              const isActive = activeSubjectTab === sub;
              const subIcon = availableSubjectCatalog.find((s) => s.name === sub)?.icon || '📚';
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => {
                    setActiveSubjectTab(sub);
                    resetSession();
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center space-x-1.5 shrink-0 ${
                    isActive
                      ? 'bg-[#FFCC00] text-[#061710] shadow-md border border-[#FFCC00]'
                      : 'bg-[#061710] text-white/80 border border-[#C4823F]/50 hover:bg-[#0E3526]'
                  }`}
                >
                  <span>{subIcon}</span>
                  <span>{sub}</span>
                </button>
              );
            })}
          </div>

          <span className="text-[11px] font-bold text-white/60 shrink-0">
            {selectedSubjects.length}-Subject Combination
          </span>
        </div>
      )}

      {/* ─── Question Chalkboard Card ───────────────────────────────────────── */}
      {!currentQ ? (
        <div className="p-12 text-center rounded-3xl bg-[#092218] border-2 border-[#C4823F] space-y-4">
          <span className="text-4xl">📚</span>
          <h3 className="text-lg font-bold">No questions found matching this filter.</h3>
          <p className="text-xs text-white/60">Try selecting "ALL" topics or "ALL" years.</p>
          <button
            type="button"
            onClick={() => setIsSessionStarted(false)}
            className="px-5 py-2 rounded-xl bg-[#FFCC00] text-[#061710] font-black text-xs cursor-pointer"
          >
            Modify Setup
          </button>
        </div>
      ) : isSessionComplete ? (
        /* ─── Scorecard ─────────────────────────────────────────────────────── */
        <div className="p-8 rounded-3xl bg-[#092218] border-2 border-[#C4823F] shadow-2xl text-center space-y-6 animate-fade-scale">
          <div className="text-5xl">🎉</div>
          <h2 className="text-2xl font-black text-[#FFCC00]">Practice Session Completed!</h2>
          <div className="inline-block p-6 rounded-3xl bg-[#061710] border-2 border-[#C4823F] shadow-inner">
            <div className="text-4xl font-black text-[#34D399]">{scoreStats.percentage}%</div>
            <div className="text-xs text-white/70 mt-1">
              {scoreStats.correct} of {scoreStats.total} Questions Correct
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              type="button"
              onClick={resetSession}
              className="px-6 py-3 rounded-xl bg-[#FFCC00] text-[#061710] font-black text-xs hover:bg-yellow-300 transition shadow-lg cursor-pointer"
            >
              🔄 Practice Again
            </button>
            <button
              type="button"
              onClick={() => setIsSessionStarted(false)}
              className="px-6 py-3 rounded-xl bg-[#061710] border border-[#C4823F] text-white font-bold text-xs hover:bg-[#0E3526] transition cursor-pointer"
            >
              ⚙️ Change Setup / Subjects
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl p-6 sm:p-8 border-4 border-[#C4823F] outline outline-2 outline-[#75441A] shadow-2xl space-y-6 bg-radial from-[#134633] via-[#0C2E20] to-[#092318]">
          {/* Question Counter & Controls */}
          <div className="flex items-center justify-between pb-4 border-b border-[#C4823F]/30">
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-[#061710] border border-[#C4823F] text-[#FFCC00] flex items-center justify-center text-xs font-black shadow-sm">
                {practiceIndex + 1}
              </span>
              <span className="font-extrabold text-sm sm:text-base text-white">
                Question {practiceIndex + 1} of {activeQuestionList.length}
              </span>
              {currentQ.year && (
                <span className="text-[11px] font-bold text-[#FFCC00] bg-[#061710] px-2.5 py-0.5 rounded-full border border-[#C4823F]/50 inline-flex items-center space-x-1.5 shadow-sm">
                  {React.createElement(getExamLogo(selectedExam), { className: 'w-3.5 h-3.5 inline-block shrink-0' })}
                  <span>{selectedExam} {currentQ.year}</span>
                </span>
              )}
              {currentQ.topic && (
                <span className="text-[11px] font-bold text-[#34D399] bg-[#061710] px-2.5 py-0.5 rounded-full border border-[#34D399]/40">
                  {currentQ.topic}
                </span>
              )}
            </div>

            {/* Bookmark & AI Tutor buttons */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => toggleBookmarkQuestion(currentQ.id)}
                className={`p-2 rounded-xl border transition cursor-pointer ${
                  isBookmarked
                    ? 'bg-[#FFCC00] text-[#061710] border-[#FFCC00]'
                    : 'border-[#C4823F]/50 text-white/70 hover:text-white bg-[#061710]'
                }`}
                title="Bookmark Question"
              >
                {isBookmarked ? '★' : '☆'}
              </button>
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
                className="px-3 py-2 rounded-xl bg-[#061710] border border-[#FFCC00]/50 text-[#FFCC00] text-xs font-bold hover:bg-[#FFCC00] hover:text-[#061710] transition flex items-center space-x-1 cursor-pointer"
                title="Ask AI Tutor"
              >
                <span>🤖</span>
                <span className="hidden sm:inline">Ask Tutor</span>
              </button>
            </div>
          </div>

          {/* Question & Reading Comprehension Passage */}
          <div className="space-y-4">
            <ComprehensionPassageViewer
              text={currentQ.text}
              passage={currentQ.passage}
              subject={activeSubjectTab}
              defaultExpanded={true}
            />

            {currentQ.imageSvg && (
              <div
                className="my-4 p-4 rounded-2xl bg-white/5 border border-white/10 flex justify-center overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: currentQ.imageSvg }}
              />
            )}
          </div>

          {/* 4 Options */}
          <div className="space-y-3 pt-2">
            {currentQ.options.map((opt) => {
              const isSelected = currentAnswer === opt.key;
              const isCorrect = opt.key === currentQ.correctAnswer;
              let btnStyle = 'border-[#C4823F]/40 bg-[#061710]/80 text-white hover:border-[#FFCC00] hover:bg-[#0A241A]';

              if (currentAnswer) {
                if (practiceMode === 'study') {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-400 bg-emerald-950/80 text-emerald-100 font-black ring-2 ring-emerald-400';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'border-rose-500 bg-rose-950/80 text-rose-200 line-through opacity-80';
                  }
                } else {
                  if (isSelected) {
                    btnStyle = 'border-[#FFCC00] bg-[#FFCC00]/20 text-[#FFCC00] font-black ring-2 ring-[#FFCC00]';
                  }
                }
              }

              return (
                <div
                  key={opt.key}
                  onClick={() => handleSelectOption(opt.key)}
                  className={`p-4 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all duration-150 group ${btnStyle}`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-9 h-9 rounded-xl bg-[#061710] border border-[#C4823F] flex items-center justify-center font-black text-xs text-[#FFCC00] shadow-xs group-hover:scale-105 transition">
                      {opt.key}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white">{opt.text}</span>
                  </div>

                  {currentAnswer && practiceMode === 'study' && (
                    <div>
                      {isCorrect && (
                        <span className="text-[10px] font-black text-[#061710] bg-emerald-400 px-2.5 py-1 rounded-lg">
                          Correct ✓
                        </span>
                      )}
                      {isSelected && !isCorrect && (
                        <span className="text-[10px] font-black text-white bg-rose-600 px-2.5 py-1 rounded-lg">
                          Incorrect ✕
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Instant Solution (Study Mode) */}
          {practiceMode === 'study' && isCurrentRevealed && (
            <div className="space-y-4 pt-4 border-t border-[#C4823F]/30 animate-fade-up">
              <BoardExplanation
                explanation={currentQ.explanation}
                subject={activeSubjectTab}
                topic={currentQ.topic || 'Classroom Solution'}
              />

              <div className="p-4 rounded-2xl bg-[#061710] border-2 border-[#FFCC00] flex items-start space-x-3 text-xs sm:text-sm">
                <div className="w-7 h-7 rounded-full bg-black/40 flex items-center justify-center p-0.5 shrink-0 border border-white/20">
                  {React.createElement(getExamLogo(selectedExam), { className: 'w-6 h-6' })}
                </div>
                <div className="space-y-1">
                  <span className="font-black text-[#FFCC00] uppercase tracking-wider block">
                    {selectedExam} Examiner Strategy &amp; High-Yield Tip:
                  </span>
                  <p className="text-white/80 leading-relaxed font-normal">
                    {getExamTipForQuestion(activeSubjectTab, currentQ.topic || 'General', currentQ.text, currentQ.explanation)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-[#C4823F]/30 flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={practiceIndex === 0}
              onClick={() => setPracticeIndex((prev) => Math.max(0, prev - 1))}
              className="px-4 sm:px-5 py-2.5 rounded-xl border border-[#C4823F]/60 bg-[#061710] text-xs font-bold text-white hover:bg-[#0C2E20] transition disabled:opacity-30 cursor-pointer"
            >
              ← Previous
            </button>

            <div className="hidden sm:flex items-center space-x-1 overflow-x-auto max-w-xs py-1">
              {activeQuestionList.slice(0, 15).map((q, idx) => {
                const isAnswered = userSelections[q.id] !== undefined;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setPracticeIndex(idx)}
                    className={`w-6 h-6 rounded-lg text-[10px] font-black transition cursor-pointer ${
                      practiceIndex === idx
                        ? 'bg-[#FFCC00] text-[#061710]'
                        : isAnswered
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#061710] text-white/50 border border-white/10'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {practiceIndex >= activeQuestionList.length - 1 ? (
              <button
                type="button"
                onClick={() => setIsSessionComplete(true)}
                className="px-6 py-2.5 rounded-xl bg-[#34D399] text-[#061710] font-black text-xs hover:bg-emerald-300 transition shadow-lg cursor-pointer"
              >
                Submit Session ✓
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setPracticeIndex((prev) => Math.min(activeQuestionList.length - 1, prev + 1))}
                className="px-6 py-2.5 rounded-xl bg-[#FFCC00] text-[#061710] font-black text-xs hover:bg-yellow-300 transition shadow-lg cursor-pointer"
              >
                Next Question →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PracticeMode;
