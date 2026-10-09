import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Question } from '../data/questions';
import { RichNoteRenderer } from './common/RichNoteRenderer';
import { ScientificDiagramViewer } from './common/ScientificDiagramViewer';
import { ConfettiCelebration } from './common/ConfettiCelebration';
import { StudentPersonalNotebook } from './common/StudentPersonalNotebook';
import { getBaseQuestionsForSubject, getFilteredQuestions } from '../data/allQuestionsHub';
import { MASTER_LESSON_NOTES, LessonNote } from '../data/masterLessonNotes';
import {
  TheoryQuestion,
  getFilteredTheoryQuestions,
  getTheoryQuestionsForSubject,
  getFilteredPracticalQuestions,
  getPracticalQuestionsForSubject
} from '../data/theoryQuestions';
import { TheoryAnswerMarkerModal } from './TheoryAnswerMarkerModal';
import { InlineInteractiveQuestionCard } from './common/InlineInteractiveQuestionCard';
import { renderFormattedQuestionText } from './common/ComprehensionPassageViewer';
import { NoteFlashcardScreen } from './common/NoteFlashcardScreen';
import { ShareStudyCardModal } from './common/ShareStudyCardModal';
import { TopicNoteReader } from './notes/TopicNoteReader';
import { OfficialJambSyllabusViewer } from './notes/OfficialJambSyllabusViewer';
import { getTopicsForSubject } from '../data/topicResourcesData';
import { BrandLogo } from './common/BrandLogo';
import { MenuDrawer } from './common/MenuDrawer';
import { NotesHeroArtwork } from './notes/NotesHeroArtwork';
import {
  StudyPlugHeader,
  BottomNavigation,
  TopicCard,
  TopicTabs,
  NoteViewTab,
  ResourceCard,
  QuestionCard,
  EducationalDiagram,
  ExamPills,
  ExamCategory
} from './design-system';

export const SENIOR_SUBJECTS = [
  'Mathematics',
  'English Language',
  'Physics',
  'Chemistry',
  'Biology',
  'Economics',
  'Government',
  'Literature in English',
  'Commerce',
  'Financial Accounting',
  'Agricultural Science',
  'Civic Education',
  'Christian Religious Studies',
  'Islamic Studies',
  'History',
  'Geography',
  'Computer Studies'
];

export const BECE_JUNIOR_SUBJECTS = [
  'Mathematics',
  'English Language',
  'Basic Science',
  'Basic Technology',
  'Social Studies',
  'Civic Education',
  'Agricultural Science',
  'Business Studies',
  'Christian Religious Studies',
  'Computer Studies'
];

export const SUBJECT_METADATA: Record<string, { icon: string; category: string }> = {
  'Chemistry': { icon: '🧪', category: 'Sciences' },
  'Physics': { icon: '⚡', category: 'Sciences' },
  'Biology': { icon: '🧬', category: 'Sciences' },
  'Mathematics': { icon: '📐', category: 'General' },
  'English Language': { icon: '📚', category: 'General' },
  'Economics': { icon: '📊', category: 'Commercial' },
  'Government': { icon: '🏛️', category: 'Arts & Humanities' },
  'Literature in English': { icon: '📖', category: 'Arts & Humanities' },
  'Commerce': { icon: '🏢', category: 'Commercial' },
  'Financial Accounting': { icon: '🪙', category: 'Commercial' },
  'Agricultural Science': { icon: '🌱', category: 'Sciences' },
  'Civic Education': { icon: '🇳🇬', category: 'General' },
  'Christian Religious Studies': { icon: '✝️', category: 'Arts & Humanities' },
  'Islamic Studies': { icon: '🌙', category: 'Arts & Humanities' },
  'History': { icon: '📜', category: 'Arts & Humanities' },
  'Geography': { icon: '🌍', category: 'Sciences' },
  'Computer Studies': { icon: '💻', category: 'Sciences' },
  'Basic Science': { icon: '🔬', category: 'Junior Secondary' },
  'Basic Technology': { icon: '⚙️', category: 'Junior Secondary' },
  'Social Studies': { icon: '🗺️', category: 'Junior Secondary' },
  'Business Studies': { icon: '💼', category: 'Junior Secondary' },
  'French': { icon: '🗼', category: 'Languages' },
  'General Knowledge': { icon: '🏛️', category: 'General' },
};

export const FEATURED_SUBJECT_META: Record<string, { chapters: number; subtopics: number; iconType: string }> = {
  'Mathematics': { chapters: 12, subtopics: 45, iconType: 'math' },
  'Physics': { chapters: 10, subtopics: 38, iconType: 'physics' },
  'Chemistry': { chapters: 10, subtopics: 36, iconType: 'chemistry' },
  'English Language': { chapters: 8, subtopics: 28, iconType: 'english' },
  'Biology': { chapters: 9, subtopics: 32, iconType: 'biology' },
  'General Knowledge': { chapters: 6, subtopics: 20, iconType: 'gk' },
  'Economics': { chapters: 11, subtopics: 42, iconType: 'economics' },
  'Government': { chapters: 9, subtopics: 35, iconType: 'government' },
  'Literature in English': { chapters: 8, subtopics: 30, iconType: 'literature' },
  'Commerce': { chapters: 9, subtopics: 34, iconType: 'commerce' },
  'Financial Accounting': { chapters: 10, subtopics: 38, iconType: 'accounting' },
  'Agricultural Science': { chapters: 8, subtopics: 32, iconType: 'agriculture' },
  'Civic Education': { chapters: 7, subtopics: 26, iconType: 'civic' },
  'Christian Religious Studies': { chapters: 7, subtopics: 25, iconType: 'crs' },
  'Islamic Studies': { chapters: 7, subtopics: 25, iconType: 'islamic' },
  'History': { chapters: 6, subtopics: 24, iconType: 'history' },
  'Geography': { chapters: 9, subtopics: 34, iconType: 'geography' },
  'Computer Studies': { chapters: 8, subtopics: 30, iconType: 'computer' },
  'Basic Science': { chapters: 8, subtopics: 28, iconType: 'science' },
  'Basic Technology': { chapters: 8, subtopics: 28, iconType: 'tech' },
  'Social Studies': { chapters: 7, subtopics: 25, iconType: 'social' },
  'Business Studies': { chapters: 7, subtopics: 25, iconType: 'business' }
};

export const renderSubjectIcon = (sub: string) => {
  const meta = FEATURED_SUBJECT_META[sub];
  const type = meta?.iconType;

  if (type === 'math') {
    return (
      <span className="font-mono font-black text-sm text-[#F8C800] tracking-tighter">
        +−×÷
      </span>
    );
  }
  if (type === 'physics') {
    return (
      <svg className="w-6 h-6 text-[#F8C800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2.5" fill="#F8C800" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
      </svg>
    );
  }
  if (type === 'chemistry') {
    return (
      <svg className="w-6 h-6 text-[#F8C800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v5.5L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 7.5V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    );
  }
  if (type === 'english') {
    return (
      <svg className="w-6 h-6 text-[#F8C800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10M6 10h10M6 14h6" />
      </svg>
    );
  }
  if (type === 'biology') {
    return (
      <svg className="w-6 h-6 text-[#F8C800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" fill="#F8C800" />
        <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      </svg>
    );
  }
  if (type === 'gk') {
    return (
      <svg className="w-6 h-6 text-[#F8C800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 22 7" fill="#F8C800" stroke="none" />
        <rect x="4" y="9" width="2.5" height="10" />
        <rect x="9.5" y="9" width="2.5" height="10" />
        <rect x="15" y="9" width="2.5" height="10" />
        <rect x="20.5" y="9" width="2.5" height="10" />
        <rect x="2" y="20" width="20" height="2" />
      </svg>
    );
  }

  const fallback = SUBJECT_METADATA[sub]?.icon || '📚';
  return <span className="text-xl">{fallback}</span>;
};

export const ClassroomNotesHub: React.FC = () => {
  const {
    startTestForSubject,
    selectedSubject: appSelectedSubject,
    setSelectedSubject,
    setActiveView,
    goBack,
    openAiTutor,
    openDareToDare,
    selectedExam: appSelectedExam,
    setSelectedExam: setAppSelectedExam,
    selectedExamPapers,
    openPaperSelector
  } = useApp();

  // Selected subject & exam
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>(() => {
    return appSelectedSubject || 'Physics';
  });

  const activeExamTab: ExamCategory = (appSelectedExam as ExamCategory) || 'JAMB';
  const setActiveExamTab = (exam: ExamCategory) => {
    if (setAppSelectedExam) {
      setAppSelectedExam(exam as any);
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedExamFilter, setSelectedExamFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [subjectSearchQuery, setSubjectSearchQuery] = useState<string>('');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [isLoadingNotes, setIsLoadingNotes] = useState<boolean>(false);

  // FlashLearners 3-Level hierarchy: 'subjects' (Level 1) | 'topics-list' (Level 2 Modules & Level 3 Lessons) | 'note-detail' (Level 4 Reader)
  const [viewLevel, setViewLevel] = useState<'subjects' | 'topics-list' | 'note-detail'>('subjects');

  // Sub-tabs on Screen 4: 'note' (Screen 4) | 'resources' (Screen 5) | 'questions' (Screen 6)
  const [activeNoteTab, setActiveNoteTab] = useState<NoteViewTab>('note');

  // Filter on Questions Tab (Screen 6)
  const [questionsDifficulty, setQuestionsDifficulty] = useState<string>('All');
  const [isRandomMode, setIsRandomMode] = useState<boolean>(false);

  // Animated Flashcard Screen Mode (Cards with Biological Drawings & 4 Questions to solve)
  const [isFlashcardScreenOpen, setIsFlashcardScreenOpen] = useState<boolean>(false);

  // Notes state
  const [notes, setNotes] = useState<LessonNote[]>(() => {
    const physNotes = MASTER_LESSON_NOTES.filter(n => n.subject.toLowerCase() === 'physics');
    return physNotes.length > 0 ? physNotes : MASTER_LESSON_NOTES;
  });

  const [selectedNote, setSelectedNote] = useState<LessonNote>(() => {
    const physNotes = MASTER_LESSON_NOTES.filter(n => n.subject.toLowerCase() === 'physics');
    return physNotes[0] || MASTER_LESSON_NOTES[0];
  });

  // Aligned practice questions & theory questions
  const [alignedQuestions, setAlignedQuestions] = useState<Question[]>([]);
  const [alignedTheoryQuestions, setAlignedTheoryQuestions] = useState<TheoryQuestion[]>([]);
  const [alignedPracticalQuestions, setAlignedPracticalQuestions] = useState<TheoryQuestion[]>([]);
  const [activeTheoryQuestionForMarker, setActiveTheoryQuestionForMarker] = useState<TheoryQuestion | null>(null);
  const [isTheoryMarkerOpen, setIsTheoryMarkerOpen] = useState<boolean>(false);
  const [expandedTheorySchemeId, setExpandedTheorySchemeId] = useState<string | null>(null);
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<number, string>>({});
  const [selectedModuleName, setSelectedModuleName] = useState<string>('');
  const [completedNotes, setCompletedNotes] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('studyplug_completed_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleNoteCompleted = (noteKey: string) => {
    setCompletedNotes(prev => {
      const updated = { ...prev, [noteKey]: !prev[noteKey] };
      try {
        localStorage.setItem('studyplug_completed_notes', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Audio Reader & Notebook Drawer
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isCelebrationActive, setIsCelebrationActive] = useState(false);
  const [isSyllabusViewerOpen, setIsSyllabusViewerOpen] = useState(false);

  // Share Study Note Card States & Handlers
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [shareNoteSnippet, setShareNoteSnippet] = useState<string>('');
  const [floatingSelection, setFloatingSelection] = useState<string>('');

  const handleOpenShareNote = (customText?: string) => {
    const sel = customText || floatingSelection || (typeof window !== 'undefined' ? window.getSelection()?.toString().trim() : '') || '';
    if (sel) {
      setShareNoteSnippet(sel);
    } else if (selectedNote) {
      const summary = selectedNote.key_terms && selectedNote.key_terms.length > 0
        ? `Key Concepts:\n• ${selectedNote.key_terms.slice(0, 5).join('\n• ')}\n\n${selectedNote.content.replace(/<[^>]*>?/gm, ' ').slice(0, 300)}...`
        : selectedNote.content.replace(/<[^>]*>?/gm, ' ').slice(0, 350) + '...';
      setShareNoteSnippet(summary);
    }
    setIsShareModalOpen(true);
  };

  const handleTextSelectionCheck = () => {
    if (typeof window !== 'undefined') {
      const text = window.getSelection()?.toString().trim() || '';
      if (text.length > 15) {
        setFloatingSelection(text);
      } else {
        setFloatingSelection('');
      }
    }
  };

  const displayedSubjects = useMemo(() => {
    if (selectedExamFilter === 'BECE' || activeExamTab === 'BECE') {
      return BECE_JUNIOR_SUBJECTS;
    }
    const priorityList = [
      'Mathematics',
      'Physics',
      'Chemistry',
      'English Language',
      'Biology',
      'General Knowledge'
    ];
    return [
      ...priorityList,
      ...SENIOR_SUBJECTS.filter(s => !priorityList.includes(s))
    ];
  }, [selectedExamFilter, activeExamTab]);

  const filteredSubjects = useMemo(() => {
    if (!subjectSearchQuery.trim()) return displayedSubjects;
    return displayedSubjects.filter(sub => sub.toLowerCase().includes(subjectSearchQuery.toLowerCase()));
  }, [displayedSubjects, subjectSearchQuery]);

  // When switching between BECE (Junior) and Senior exams (JAMB, WAEC, NECO), ensure subject matches the curriculum level
  useEffect(() => {
    if (activeExamTab === 'BECE') {
      if (!BECE_JUNIOR_SUBJECTS.includes(selectedSubjectFilter)) {
        setSelectedSubjectFilter('Mathematics');
        setSelectedSubject('Mathematics');
      }
    } else {
      if (!SENIOR_SUBJECTS.includes(selectedSubjectFilter)) {
        setSelectedSubjectFilter('Mathematics');
        setSelectedSubject('Mathematics');
      }
    }
  }, [activeExamTab]);

  // Sync when context selectedSubject changes
  useEffect(() => {
    if (appSelectedSubject && appSelectedSubject !== selectedSubjectFilter) {
      setSelectedSubjectFilter(appSelectedSubject);
      setViewLevel('topics-list');
    }
  }, [appSelectedSubject]);

  // Fetch / filter notes when selectedSubjectFilter changes
  useEffect(() => {
    setIsLoadingNotes(true);
    const sNorm = selectedSubjectFilter.toLowerCase().trim();
    const local = MASTER_LESSON_NOTES.filter(n => {
      const nSub = n.subject.toLowerCase().trim();
      return nSub === sNorm || nSub.includes(sNorm) || sNorm.includes(nSub);
    });

    if (local.length > 0) {
      setNotes(local);
      setSelectedNote(local[0]);
      setIsLoadingNotes(false);
    } else {
      fetch(`https://eznonews.com.ng/studyplug-api/get_lesson_notes.php?subject=${encodeURIComponent(selectedSubjectFilter)}`)
        .then(res => res.json())
        .then(data => {
          if (data && data.success && Array.isArray(data.notes) && data.notes.length > 0) {
            setNotes(data.notes);
            setSelectedNote(data.notes[0]);
          } else {
            setNotes(MASTER_LESSON_NOTES);
            setSelectedNote(MASTER_LESSON_NOTES[0]);
          }
        })
        .catch(() => {
          setNotes(MASTER_LESSON_NOTES);
          setSelectedNote(MASTER_LESSON_NOTES[0]);
        })
        .finally(() => setIsLoadingNotes(false));
    }
  }, [selectedSubjectFilter]);

  // Align authentic questions from allQuestionsHub based on current subject, topic, subtopic, and selected exam
  useEffect(() => {
    if (!selectedNote) return;
    setUserSelectedOptions({});
    
    // 1. Fetch objective CBT questions strictly matching topic & subtopic
    const examQuestions = getFilteredQuestions({
      exam: activeExamTab as any,
      subject: selectedNote.subject,
      topic: selectedNote.topic,
      subtopic: selectedNote.subtopic,
      strictMatching: true,
      limit: 20,
      paperType: 'OBJ'
    });
    setAlignedQuestions(
      examQuestions && examQuestions.length > 0
        ? examQuestions
        : getBaseQuestionsForSubject(selectedNote.subject).slice(0, 10)
    );

    // 2. Fetch authentic theory questions strictly matching topic & subtopic
    const theoryQs = getFilteredTheoryQuestions({
      exam: activeExamTab,
      subject: selectedNote.subject,
      topic: selectedNote.topic,
      subtopic: selectedNote.subtopic
    });
    setAlignedTheoryQuestions(
      theoryQs && theoryQs.length > 0
        ? theoryQs
        : getTheoryQuestionsForSubject(selectedNote.subject).slice(0, 5)
    );

    // 3. Fetch authentic practical questions for WAEC/NECO/NABTEB Paper 3
    const practicalQs = getFilteredPracticalQuestions({
      exam: activeExamTab,
      subject: selectedNote.subject,
      topic: selectedNote.topic,
      subtopic: selectedNote.subtopic
    });
    setAlignedPracticalQuestions(
      practicalQs && practicalQs.length > 0
        ? practicalQs
        : getPracticalQuestionsForSubject(selectedNote.subject)
    );
  }, [selectedNote, activeExamTab]);

  // Filtered notes by search & exam
  const filteredNotes = useMemo(() => {
    return notes.filter(n => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        n.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (n.subtopic && n.subtopic.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (n.summary_60s && n.summary_60s.toLowerCase().includes(searchQuery.toLowerCase()));

      const isJuniorNote =
        (n.exam_type && (n.exam_type.toUpperCase().includes('BECE') || n.exam_type.toUpperCase().includes('JSCE'))) ||
        (n.class_level && (n.class_level.includes('JSS') || n.class_level.includes('Junior')));

      let matchesExam = true;
      if (activeExamTab === 'BECE') {
        // In BECE (Junior WAEC), ONLY show Junior Secondary notes
        matchesExam = isJuniorNote;
      } else {
        // In Senior examinations (JAMB, WAEC, NECO, NABTEB), STRICTLY EXCLUDE BECE/Junior notes!
        matchesExam = !isJuniorNote;
      }

      return matchesSearch && matchesExam;
    });
  }, [notes, searchQuery, activeExamTab]);

  // Keep selectedNote synchronized with active exam level
  useEffect(() => {
    if (filteredNotes.length > 0) {
      const isCurrentlySelectedValid = filteredNotes.some(
        n => n.id === selectedNote?.id || n.topic === selectedNote?.topic
      );
      if (!isCurrentlySelectedValid) {
        setSelectedNote(filteredNotes[0]);
      }
    }
  }, [filteredNotes, selectedNote]);

  const getExamTip = (exam: string, note?: LessonNote) => {
    if (exam === 'WAEC') {
      return 'In WAEC SSCE, examiners award stepwise marks for stating definitions accurately, showing all intermediate formula steps, and writing explicit units. Never skip steps in theory solutions.';
    }
    if (exam === 'NECO') {
      return 'In NECO examinations, pay close attention to exact textbook definitions, clearly label any sketch diagrams, and double-check final unit conversions.';
    }
    if (exam === 'BECE') {
      return 'In BECE (Junior WAEC), focus on fundamental concepts, key facts, and clear concise structured answers.';
    }
    return note?.examiner_traps || 'In JAMB UTME CBT, questions test rapid formula application and unit consistency. You have ~40 seconds per question, so eliminate wrong options quickly.';
  };

  // Group filtered notes into curriculum modules (parent topics) like FlashLearners
  interface ModuleGroup {
    moduleName: string;
    notes: LessonNote[];
    totalNotes: number;
  }

  const moduleGroups = useMemo<ModuleGroup[]>(() => {
    const map = new Map<string, LessonNote[]>();
    filteredNotes.forEach(note => {
      const mod = (note.topic || 'Core Curriculum').trim();
      if (!map.has(mod)) {
        map.set(mod, []);
      }
      map.get(mod)!.push(note);
    });

    return Array.from(map.entries()).map(([moduleName, notesList]) => ({
      moduleName,
      notes: notesList,
      totalNotes: notesList.length
    }));
  }, [filteredNotes]);

  // Keep active note's module open
  useEffect(() => {
    if (selectedNote?.topic) {
      setExpandedModules(prev => ({
        ...prev,
        [selectedNote.topic.trim()]: true
      }));
    }
  }, [selectedNote?.topic]);

  const toggleModule = (moduleName: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleName]: !prev[moduleName]
    }));
  };

  // Next / Previous navigation
  const currentIndex = useMemo(() => {
    return filteredNotes.findIndex(n => n.id === selectedNote?.id || n.topic === selectedNote?.topic);
  }, [filteredNotes, selectedNote]);

  const handleNextNote = () => {
    if (currentIndex >= 0 && currentIndex < filteredNotes.length - 1) {
      setSelectedNote(filteredNotes[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevNote = () => {
    if (currentIndex > 0) {
      setSelectedNote(filteredNotes[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Module-specific adjacent navigation
  const currentModuleNotes = useMemo(() => {
    if (!selectedNote) return filteredNotes;
    const currentMod = (selectedNote.topic || '').trim();
    const modNotes = filteredNotes.filter(n => (n.topic || '').trim() === currentMod);
    return modNotes.length > 0 ? modNotes : filteredNotes;
  }, [filteredNotes, selectedNote]);

  const currentModIndex = useMemo(() => {
    if (!selectedNote) return -1;
    return currentModuleNotes.findIndex(
      n => n.id === selectedNote.id || (n.topic === selectedNote.topic && n.subtopic === selectedNote.subtopic)
    );
  }, [currentModuleNotes, selectedNote]);

  const handleNextNoteInModule = () => {
    if (currentModIndex >= 0 && currentModIndex < currentModuleNotes.length - 1) {
      setSelectedNote(currentModuleNotes[currentModIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleNextNote();
    }
  };

  const handlePrevNoteInModule = () => {
    if (currentModIndex > 0) {
      setSelectedNote(currentModuleNotes[currentModIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handlePrevNote();
    }
  };

  // Launch CBT practice directly from topic questions (Screen 6 button)
  const handleStartTopicPractice = () => {
    if (selectedNote) {
      startTestForSubject(selectedNote.subject, 'all', selectedNote.topic);
      setActiveView('practice');
    }
  };

  // Context-aware AI invocation
  const handleAskAiAboutTopic = () => {
    if (!selectedNote) return;
    openAiTutor({
      exam: selectedNote.exam_type,
      subject: selectedNote.subject,
      topic: selectedNote.topic,
      subtopic: selectedNote.subtopic,
      noteTitle: selectedNote.subtopic || selectedNote.topic
    });
  };

  // Audio narration
  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) return;
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      const textToRead = `${selectedNote.topic}. ${selectedNote.summary_60s || ''}. ${selectedNote.content.slice(0, 400)}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const currentModuleGroup = useMemo<ModuleGroup | null>(() => {
    if (moduleGroups.length === 0) return null;
    if (selectedModuleName) {
      const match = moduleGroups.find(g => g.moduleName.toLowerCase() === selectedModuleName.toLowerCase());
      if (match) return match;
    }
    if (selectedNote?.topic) {
      const match = moduleGroups.find(g => g.moduleName.toLowerCase() === selectedNote.topic.toLowerCase());
      if (match) return match;
    }
    return moduleGroups[0];
  }, [moduleGroups, selectedModuleName, selectedNote]);

  const overviewModuleNotes = useMemo(() => {
    return currentModuleGroup?.notes || filteredNotes;
  }, [currentModuleGroup, filteredNotes]);

  const completedCount = useMemo(() => {
    return overviewModuleNotes.filter(n => completedNotes[n.id || `${n.topic}-${n.subtopic}`]).length;
  }, [overviewModuleNotes, completedNotes]);

  const totalSubtopics = overviewModuleNotes.length;
  const progressPercent = totalSubtopics > 0 ? Math.round((completedCount / totalSubtopics) * 100) : 0;

  const continueNote = useMemo(() => {
    return overviewModuleNotes.find(n => !completedNotes[n.id || `${n.topic}-${n.subtopic}`]) || overviewModuleNotes[0] || selectedNote;
  }, [overviewModuleNotes, completedNotes, selectedNote]);

  const currentModuleSubtopicsSummary = useMemo(() => {
    if (!currentModuleGroup || currentModuleGroup.notes.length === 0) return '';
    const names = currentModuleGroup.notes
      .slice(0, 4)
      .map(n => n.subtopic || n.topic);
    return names.join(', ') + (currentModuleGroup.notes.length > 4 ? ', and more.' : '.');
  }, [currentModuleGroup]);

  // ══════════════════════════════════════════════════
  // LEVEL 1: DEDICATED SUBJECTS & NOTES DIRECTORY (Matching Mockup)
  // ══════════════════════════════════════════════════
  if (viewLevel === 'subjects') {
    return (
      <div className="flex-1 flex flex-col justify-between bg-[#001028] min-h-screen text-[#10201D] select-none font-sans relative">
        <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="w-full">
          {/* TOP SECTION: Dark Navy (#001028) */}
          <div className="bg-[#001028] text-white pt-3 pb-6 px-4 sm:px-6 max-w-4xl mx-auto">
            {/* Top Bar: Brand Logo & Hamburger Menu */}
            <div className="flex items-center justify-between pb-3">
              <BrandLogo size="sm" />
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="p-1.5 text-white hover:text-[#F8C800] active:scale-95 transition cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

            {/* Hero Row: Title & Stacked Books Artwork */}
            <div className="flex items-center justify-between gap-2 pt-1 pb-4">
              <div className="space-y-1.5 max-w-[62%] sm:max-w-[70%]">
                <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center space-x-2 tracking-tight">
                  <span className="text-2xl">📖</span>
                  <span>Notes</span>
                </h1>
                <p className="text-[12px] sm:text-[13px] text-white/75 font-medium leading-relaxed">
                  Well structured notes to help you learn better and score higher.
                </p>
              </div>

              {/* Stacked 3D Books Artwork with mortarboard & slogan */}
              <div className="w-32 sm:w-40 shrink-0">
                <NotesHeroArtwork />
              </div>
            </div>

            {/* Dark Pill Search Bar */}
            <div className="relative pt-1 pb-3">
              <div className="relative flex items-center">
                <span className="absolute left-4 text-white/50 text-sm">🔍</span>
                <input
                  type="text"
                  value={subjectSearchQuery}
                  onChange={(e) => setSubjectSearchQuery(e.target.value)}
                  placeholder="Search notes, topics, or subjects..."
                  className="w-full pl-10 pr-12 py-2.5 rounded-full bg-[#071933] text-white placeholder-white/50 text-[13px] border border-white/10 focus:border-[#F8C800] focus:outline-none transition shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => {}}
                  className="absolute right-1.5 w-7 h-7 rounded-full bg-[#F8C800] text-[#001028] flex items-center justify-center font-bold text-xs hover:scale-105 active:scale-95 transition cursor-pointer"
                  aria-label="Search"
                >
                  <span>&gt;</span>
                </button>
              </div>
            </div>

            {/* Exam Filter Pills */}
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pt-1 pb-1">
              {['All', 'JAMB', 'WAEC', 'NECO', 'NABTEB', 'IELTS', 'BECE'].map((exam) => {
                const isSelected = selectedExamFilter === exam;
                return (
                  <button
                    key={exam}
                    type="button"
                    onClick={() => {
                      setSelectedExamFilter(exam);
                      if (exam === 'BECE') {
                        setActiveExamTab('BECE');
                      } else if (exam === 'WAEC') {
                        setActiveExamTab('WAEC');
                      } else if (exam === 'NECO') {
                        setActiveExamTab('NECO');
                      } else if (exam === 'JAMB') {
                        setActiveExamTab('JAMB');
                      }
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                        : 'bg-[#071933]/80 text-white/80 border border-white/10 hover:border-white/30'
                    }`}
                  >
                    {exam}
                  </button>
                );
              })}
            </div>
          </div>

          {/* BOTTOM SECTION: White Curved Body Container */}
          <div className="bg-[#F8F9FA] rounded-t-[32px] px-4 sm:px-6 pt-6 pb-28 shadow-xl min-h-[500px]">
            <div className="max-w-4xl mx-auto">
              {/* Section Header: "My Notes" and "120+ Notes →" */}
              <div className="flex items-center justify-between pb-3.5 px-1">
                <h2 className="text-lg font-black text-[#001028] tracking-tight">
                  My Notes
                </h2>
                <span className="text-xs font-bold text-[#001028] flex items-center space-x-1 cursor-pointer hover:text-[#F8C800] transition">
                  <span>120+ Notes</span>
                  <span className="text-[#F8C800]">→</span>
                </span>
              </div>

              {/* Subjects List */}
              <div className="space-y-2.5">
                {filteredSubjects.map((sub) => {
                  const subNotes = MASTER_LESSON_NOTES.filter(n => n.subject.toLowerCase() === sub.toLowerCase());
                  const meta = FEATURED_SUBJECT_META[sub];
                  const chaptersCount = meta?.chapters || Math.max(new Set(subNotes.map(n => n.topic)).size, 6);
                  const subtopicsCount = meta?.subtopics || (subNotes.length > 0 ? subNotes.length : 24);

                  return (
                    <div
                      key={sub}
                      onClick={() => {
                        setSelectedSubjectFilter(sub);
                        setSelectedSubject(sub);
                        setViewLevel('topics-list');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group bg-white rounded-[20px] p-3.5 border border-[#E9ECEF] hover:border-[#F8C800] hover:shadow-md transition duration-150 flex items-center justify-between cursor-pointer active:scale-[0.99]"
                    >
                      <div className="flex items-center space-x-3.5">
                        {/* Circular Dark Navy Badge with Yellow Icon */}
                        <div className="w-12 h-12 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                          {renderSubjectIcon(sub)}
                        </div>

                        {/* Subject Title & Subtopics */}
                        <div>
                          <h3 className="font-black text-[14.5px] text-[#001028] leading-snug group-hover:text-[#001830]">
                            {sub}
                          </h3>
                          <p className="text-[11.5px] font-medium text-[#6C757D] mt-0.5">
                            {chaptersCount} Chapters • {subtopicsCount} Subtopics
                          </p>
                        </div>
                      </div>

                      {/* Right Chevron */}
                      <span className="text-[#ADB5BD] group-hover:text-[#001028] text-lg font-bold pr-1 group-hover:translate-x-1 transition-transform">
                        &gt;
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* StudyPlug AI Help Banner */}
              <div className="mt-8 rounded-[24px] bg-[#001028] text-white p-5 relative overflow-hidden shadow-xl border border-white/5">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#F8C800]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="space-y-1.5 max-w-[70%]">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#F8C800]/20 text-[#F8C800] text-[10px] font-extrabold tracking-wide uppercase border border-[#F8C800]/30">
                      <span>✨</span>
                      <span>StudyPlug AI</span>
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                      Need help with your notes?
                    </h3>
                    <p className="text-[11.5px] text-white/70 leading-relaxed font-normal">
                      Get instant explanations, summaries and study tips from StudyPlug AI.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => openAiTutor()}
                        className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#F8C800] text-[#001028] font-black text-xs hover:bg-[#ffe169] active:scale-95 transition shadow-md cursor-pointer"
                      >
                        <span>Chat Now</span>
                        <span className="text-sm">→</span>
                      </button>
                    </div>
                  </div>

                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#001838] to-[#0E2C5E] border border-[#F8C800]/40 flex items-center justify-center text-4xl shadow-inner animate-pulse">
                      🤖
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab="notes" />
      </div>
    );
  }

  // ══════════════════════════════════════════════════
  // LEVEL 2: NOTE OVERVIEW / TOPICS & SUBTOPICS LIST
  // Matching media_1791321593160.png Screen 1
  // ══════════════════════════════════════════════════
  if (viewLevel === 'topics-list') {
    return (
      <div className="flex-1 flex flex-col justify-between bg-[#001028] min-h-screen text-[#10201D] select-none font-sans relative">
        <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <div className="w-full">
          {/* TOP SECTION: Dark Navy (#001028) */}
          <div className="bg-[#001028] text-white pt-3 pb-6 px-4 sm:px-6 max-w-4xl mx-auto">
            {/* Top Bar: Back button, Brand Logo, and Hamburger Menu */}
            <div className="flex items-center justify-between pb-3">
              <button
                type="button"
                onClick={() => {
                  setViewLevel('subjects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer active:scale-95"
                aria-label="Back to Subjects"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <BrandLogo size="sm" />

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="p-1.5 text-white hover:text-[#F8C800] active:scale-95 transition cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

            {/* Subject Row with Gold Exam Badge */}
            <div className="flex items-center justify-between pt-1 pb-1.5">
              <span className="text-sm font-bold text-white/80">
                {selectedSubjectFilter}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#F8C800] text-[#001028] text-[11px] font-black uppercase tracking-wider shadow-xs">
                {activeExamTab} • 2026
              </span>
            </div>

            {/* Module Title */}
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {currentModuleGroup?.moduleName || selectedSubjectFilter}
            </h1>

            {/* Module Subtitle */}
            <p className="text-[12px] sm:text-[13px] text-white/75 font-medium leading-relaxed mt-1 line-clamp-2">
              {currentModuleSubtopicsSummary || 'Comprehensive official curriculum notes, diagrams, and practice CBT questions.'}
            </p>

            {/* Progress Section */}
            <div className="pt-4 pb-2 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-white/85">
                <span>{completedCount} of {totalSubtopics} subtopics completed</span>
                <span className="font-black text-[#F8C800]">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#F8C800] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.max(progressPercent, 4)}%` }}
                />
              </div>
            </div>

            {/* Continue Learning CTA Button */}
            <div className="pt-2 pb-3">
              <button
                type="button"
                onClick={() => {
                  if (continueNote) {
                    setSelectedNote(continueNote);
                    setViewLevel('note-detail');
                    setActiveNoteTab('note');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="w-full py-3.5 px-6 rounded-full bg-[#F8C800] hover:bg-[#ffe169] text-[#001028] font-black text-sm transition active:scale-[0.98] shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Continue Learning</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>

            {/* Horizontal Module Switcher (if subject has multiple modules) */}
            {moduleGroups.length > 1 && (
              <div className="pt-1 pb-1 flex items-center space-x-2 overflow-x-auto no-scrollbar">
                {moduleGroups.map((grp, idx) => {
                  const isSelected = grp.moduleName === currentModuleGroup?.moduleName;
                  return (
                    <button
                      key={grp.moduleName}
                      type="button"
                      onClick={() => {
                        setSelectedModuleName(grp.moduleName);
                        if (grp.notes.length > 0) {
                          setSelectedNote(grp.notes[0]);
                        }
                      }}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-white text-[#001028] shadow-sm font-black'
                          : 'bg-[#071933]/80 text-white/70 border border-white/10 hover:border-white/30'
                      }`}
                    >
                      Module {idx + 1}: {grp.moduleName}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* BOTTOM SECTION: White Curved Body Container */}
          <div className="bg-[#F8F9FA] rounded-t-[32px] px-4 sm:px-6 pt-6 pb-28 shadow-xl min-h-[500px]">
            <div className="max-w-4xl mx-auto">
              {/* Section Header: "Subtopics (8)" */}
              <div className="flex items-center justify-between pb-3.5 px-1">
                <h2 className="text-lg font-black text-[#001028] tracking-tight">
                  Subtopics ({totalSubtopics})
                </h2>
                <span className="text-xs font-bold text-[#6C757D]">
                  {activeExamTab} Official Syllabus
                </span>
              </div>

              {/* Subtopics List */}
              <div className="space-y-2.5">
                {overviewModuleNotes.map((note, idx) => {
                  const noteKey = note.id || `${note.topic}-${note.subtopic}`;
                  const isCompleted = Boolean(completedNotes[noteKey]);
                  const isCurrent = note.id === continueNote?.id;
                  const estTime = Math.max(8, Math.min(20, Math.round((note.content.length || 500) / 100)));

                  return (
                    <div
                      key={noteKey}
                      onClick={() => {
                        setSelectedNote(note);
                        setViewLevel('note-detail');
                        setActiveNoteTab('note');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group bg-white rounded-[20px] p-3.5 border border-[#E9ECEF] hover:border-[#F8C800] hover:shadow-md transition duration-150 flex items-center justify-between cursor-pointer active:scale-[0.99]"
                    >
                      <div className="flex items-center space-x-3.5 min-w-0">
                        {/* Status Icon */}
                        {isCompleted ? (
                          <div className="w-10 h-10 rounded-full bg-[#F8C800] text-[#001028] flex items-center justify-center shrink-0 shadow-xs font-black text-sm">
                            ✓
                          </div>
                        ) : isCurrent ? (
                          <div className="w-10 h-10 rounded-full bg-[#001028] text-[#F8C800] border-2 border-[#F8C800] flex items-center justify-center shrink-0 shadow-xs text-xs font-black">
                            ▶
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-[#F1F3F5] text-[#495057] flex items-center justify-center shrink-0 font-bold text-xs">
                            {idx + 1}
                          </div>
                        )}

                        {/* Title & Metadata */}
                        <div className="min-w-0">
                          <h3 className="font-black text-[14px] text-[#001028] leading-snug group-hover:text-[#001830] truncate">
                            {note.subtopic || note.topic}
                          </h3>
                          <p className="text-[11.5px] font-medium text-[#6C757D] mt-0.5 truncate">
                            {estTime} mins • {note.key_terms?.length || 2} key concepts • Practice Ready
                          </p>
                        </div>
                      </div>

                      {/* Right Chevron */}
                      <span className="text-[#ADB5BD] group-hover:text-[#001028] text-lg font-bold pr-1 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                        &gt;
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* StudyPlug AI Help Banner */}
              <div className="mt-8 rounded-[24px] bg-[#001028] text-white p-5 relative overflow-hidden shadow-xl border border-white/5">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#F8C800]/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="space-y-1.5 max-w-[70%]">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-[#F8C800]/20 text-[#F8C800] text-[10px] font-extrabold tracking-wide uppercase border border-[#F8C800]/30">
                      <span>✨</span>
                      <span>StudyPlug AI</span>
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                      Need help with your notes?
                    </h3>
                    <p className="text-[11.5px] text-white/70 leading-relaxed font-normal">
                      Get instant explanations, summaries and study tips from StudyPlug AI.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => openAiTutor()}
                        className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-full bg-[#F8C800] text-[#001028] font-black text-xs hover:bg-[#ffe169] active:scale-95 transition shadow-md cursor-pointer"
                      >
                        <span>Chat Now</span>
                        <span className="text-sm">→</span>
                      </button>
                    </div>
                  </div>

                  <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#001838] to-[#0E2C5E] border border-[#F8C800]/40 flex items-center justify-center text-4xl shadow-inner animate-pulse">
                      🤖
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab="notes" />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#001028] min-h-screen text-[#10201D] select-none font-sans relative">
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* ══════════════════════════════════════════════════
          TOP SECTION: Dark Navy (#001028)
      ══════════════════════════════════════════════════ */}
      <div className="bg-[#001028] text-white pt-3 pb-5 px-4 sm:px-6 max-w-4xl mx-auto w-full">
        {/* Top Bar: Back button, Brand Logo, Audio, AI, Share, and Hamburger Menu */}
        <div className="flex items-center justify-between pb-3">
          <button
            type="button"
            onClick={() => {
              setViewLevel('topics-list');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer active:scale-95"
            aria-label="Back to Subtopics"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <BrandLogo size="sm" />

          <div className="flex items-center space-x-1.5">
            <button
              type="button"
              onClick={toggleAudio}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition cursor-pointer border ${
                isPlayingAudio ? 'bg-[#F8C800] text-[#001028] border-[#F8C800] animate-pulse' : 'bg-[#001830] text-white border-white/20 hover:border-white/40'
              }`}
              title="Listen to Note"
            >
              {isPlayingAudio ? '🔊' : '🔈'}
            </button>
            <button
              type="button"
              onClick={handleAskAiAboutTopic}
              className="w-8 h-8 rounded-full bg-[#001830] border border-[#F8C800]/60 flex items-center justify-center text-[#F8C800] cursor-pointer hover:bg-[#002850]"
              title="Ask AI Tutor"
            >
              🤖
            </button>
            <button
              type="button"
              onClick={() => handleOpenShareNote()}
              className="w-8 h-8 rounded-full bg-[#001830] border border-white/20 flex items-center justify-center text-white cursor-pointer hover:border-[#F8C800]"
              title="Share Note"
            >
              📤
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="p-1.5 text-white hover:text-[#F8C800] active:scale-95 transition cursor-pointer"
              aria-label="Open Navigation Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Breadcrumb row with Gold Exam Badge */}
        <div className="flex items-center justify-between pt-1 pb-1">
          <span className="text-xs font-bold text-white/70 truncate max-w-[70%]">
            {selectedSubjectFilter} › {selectedNote?.topic}
          </span>
          <span className="px-3 py-0.5 rounded-full bg-[#F8C800] text-[#001028] text-[10.5px] font-black uppercase tracking-wider shrink-0 shadow-xs">
            {activeExamTab} • 2026
          </span>
        </div>

        {/* Note Title */}
        <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight pt-1">
          {selectedNote?.subtopic || selectedNote?.topic}
        </h1>

        {/* 5-Tab Switcher inside dark navy header */}
        <div className="pt-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-1.5 p-1 bg-[#071933] rounded-full border border-white/10 w-max">
            {[
              { id: 'note', label: '📖 Note' },
              { id: 'resources', label: '📦 Resources' },
              { id: 'questions', label: `🎯 Practice (${alignedQuestions.length})` },
              { id: 'theory', label: `📝 Theory (${alignedTheoryQuestions.length})` },
              { id: 'practical', label: `🔬 Practical (${alignedPracticalQuestions.length})` },
            ].map(t => {
              const isActive = activeNoteTab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveNoteTab(t.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black transition cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: White Curved Body Container */}
      <div className="bg-[#F8F9FA] rounded-t-[32px] px-4 sm:px-6 pt-6 pb-28 shadow-xl min-h-[500px]">
        <main className="max-w-4xl mx-auto w-full space-y-4">
        {/* Desktop Subject Switcher Pills (only when in topics-list or note-detail) */}
        {viewLevel !== 'subjects' && (
          <div className="hidden lg:flex items-center justify-between pb-3 mb-4 border-b border-[#E4EAE8]">
            <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setViewLevel('subjects')}
                className="px-3.5 py-1.5 rounded-full text-[12px] font-bold bg-[#001028] text-[#F8C800] hover:bg-[#002448] transition cursor-pointer shrink-0 border border-[#F8C800]/30"
              >
                ← All Subjects
              </button>
              {displayedSubjects.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => {
                    setSelectedSubjectFilter(sub);
                    setSelectedSubject(sub);
                  }}
                  className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-150 cursor-pointer shrink-0 ${
                    selectedSubjectFilter === sub
                      ? 'bg-[#001028] text-[#F8C800] shadow-xs'
                      : 'bg-white text-[#66736F] hover:text-[#10201D] border border-[#E4EAE8]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
            <span className="text-[11px] font-extrabold px-3 py-1 rounded-full shrink-0 ml-3 bg-slate-50 text-[#001028] border border-slate-200">
              {activeExamTab === 'BECE' ? '🎒 BECE Junior Secondary (JSS 1–3)' : '🎓 Senior Secondary (SS 1–3)'}
            </span>
          </div>
        )}

        {/* ─── DESKTOP LEVEL 1: SUBJECTS DIRECTORY (>= 1024px) ─── */}
        {viewLevel === 'subjects' && (
          <div className="hidden lg:block space-y-4 pb-16 animate-page-enter">
            {/* Level indicator pill */}
            <div className="flex items-center justify-between px-1">
              <span className="text-[12px] font-extrabold text-[#001028]">
                {activeExamTab === 'BECE' ? '🎒 BECE Junior Secondary Curriculum (JSS 1–3)' : '🎓 Senior Secondary Curriculum (JAMB • WAEC • NECO)'}
              </span>
              <span className="text-[11.5px] font-bold text-stone-500">{filteredSubjects.length} Subjects Available</span>
            </div>

            {/* Subject Search bar */}
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9692] text-sm">🔍</span>
              <input
                type="text"
                value={subjectSearchQuery}
                onChange={(e) => setSubjectSearchQuery(e.target.value)}
                placeholder="Search syllabus subjects (e.g. Physics, Chemistry, Government, Economics)..."
                className="w-full pl-9 pr-4 py-3 rounded-[14px] bg-white border border-[#E4EAE8] text-[13px] text-[#10201D] placeholder-[#8A9692] focus:outline-none focus:border-[#001028] shadow-subtle"
              />
            </div>

            {/* Exam pills */}
            <ExamPills
              exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
              activeExam={activeExamTab}
              onSelectExam={setActiveExamTab}
            />

            {/* Subjects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 pt-1">
              {filteredSubjects.map((sub) => {
                const meta = SUBJECT_METADATA[sub] || { icon: '📚', category: 'General' };
                const subNotes = MASTER_LESSON_NOTES.filter(n => n.subject.toLowerCase() === sub.toLowerCase());
                const modCount = new Set(subNotes.map(n => n.topic)).size;
                const isSelected = selectedSubjectFilter.toLowerCase() === sub.toLowerCase();

                return (
                  <div
                    key={sub}
                    onClick={() => {
                      setSelectedSubjectFilter(sub);
                      setSelectedSubject(sub);
                      setViewLevel('topics-list');
                    }}
                    className={`rounded-[18px] p-4 border transition cursor-pointer flex items-center justify-between text-left group ${
                      isSelected
                        ? 'bg-[#001028] text-white border-[#001028] shadow-md'
                        : 'bg-white text-[#10201D] border-[#E4EAE8] shadow-subtle hover:border-[#F8C800]'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition ${
                        isSelected ? 'bg-white/10 text-[#F8C800]' : 'bg-[#001028] text-[#F8C800]'
                      }`}>
                        {meta.icon}
                      </div>
                      <div>
                        <span className={`text-[9.5px] font-bold uppercase tracking-wider ${
                          isSelected ? 'text-[#F8C800]' : 'text-[#607080]'
                        }`}>
                          {meta.category}
                        </span>
                        <h4 className={`font-black text-[13.5px] leading-snug ${
                          isSelected ? 'text-white' : 'text-[#001028]'
                        }`}>
                          {sub}
                        </h4>
                        <p className={`text-[10.5px] mt-0.5 ${
                          isSelected ? 'text-slate-300' : 'text-[#607080]'
                        }`}>
                          {modCount > 0 ? `${modCount} Modules • ` : ''}{subNotes.length || 0} Lessons
                        </p>
                      </div>
                    </div>

                    <span className={`font-bold text-base shrink-0 transition-transform group-hover:translate-x-1 ${
                      isSelected ? 'text-[#F8C800]' : 'text-[#8A9692]'
                    }`}>
                      →
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── DESKTOP DUAL-PANE VIEW (>= 1024px when viewLevel !== 'subjects') ─── */}
        {viewLevel !== 'subjects' && (
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Column (4 cols): Syllabus Directory */}
          <div className="lg:col-span-4 space-y-3">
            <div className="bg-white p-3.5 rounded-[14px] border border-[#E4EAE8] shadow-subtle space-y-2.5">
              {/* Search */}
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A9692] text-xs">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${selectedSubjectFilter}...`}
                  className="w-full pl-8 pr-3 py-2 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] text-[12px] text-[#10201D] placeholder-[#8A9692] focus:outline-none focus:border-[#001028]"
                />
              </div>

              {/* Exam Tabs */}
              <ExamPills
                exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
                activeExam={activeExamTab}
                onSelectExam={setActiveExamTab}
              />
            </div>

            {/* FlashLearners-Style Curriculum Modules Directory */}
            <div className="bg-white p-3 rounded-[14px] border border-[#E4EAE8] shadow-subtle max-h-[720px] overflow-y-auto space-y-2.5">
              <div className="px-2 py-1 text-[11px] font-bold text-[#66736F] uppercase tracking-wider flex items-center justify-between">
                <span>{selectedSubjectFilter} Curriculum</span>
                <span className="bg-[#F8F8F8] text-[#001028] text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {moduleGroups.length} Modules • {filteredNotes.length} Lessons
                </span>
              </div>

              {moduleGroups.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 px-4 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#10201D]">No Lessons Found for {selectedSubjectFilter}</p>
                    <p className="text-[11px] text-[#66736F] mt-1 leading-relaxed">
                      {activeExamTab === 'BECE'
                        ? 'For BECE (Junior WAEC), select Basic Science, Basic Technology, or Social Studies from the subject picker.'
                        : 'Try adjusting your search terms or exam filter.'}
                    </p>
                  </div>
                </div>
              ) : (
                moduleGroups.map((group, groupIdx) => {
                  const isExpanded =
                    searchQuery.trim().length > 0 ||
                    (expandedModules[group.moduleName] ?? (groupIdx === 0 || group.notes.some(n => n.id === selectedNote?.id)));

                  return (
                    <div
                      key={group.moduleName}
                      className="rounded-[12px] border border-[#E4EAE8] overflow-hidden bg-white shadow-2xs"
                    >
                      {/* Module Header */}
                      <div
                        onClick={() => toggleModule(group.moduleName)}
                        className="p-2.5 bg-slate-50/70 hover:bg-slate-100/70 flex items-center justify-between cursor-pointer select-none transition"
                      >
                        <div className="flex items-center space-x-2 min-w-0">
                          <span className="w-5 h-5 rounded bg-[#001028] text-[#F8C800] text-[10px] font-black flex items-center justify-center shrink-0">
                            {groupIdx + 1}
                          </span>
                          <span className="text-[11.5px] font-extrabold text-[#001028] truncate uppercase">
                            {group.moduleName}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1.5 shrink-0 ml-1.5">
                          <span className="text-[9.5px] font-bold text-[#66736F] px-1.5 py-0.5 rounded bg-white border border-slate-200">
                            {group.totalNotes} {group.totalNotes === 1 ? 'lesson' : 'lessons'}
                          </span>
                          <span className={`text-[10px] text-[#001028] font-bold transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </div>
                      </div>

                      {/* Subtopics / Lessons under Module */}
                      {isExpanded && (
                        <div className="divide-y divide-[#F0F2F1] bg-white">
                          {group.notes.map((note, noteIdx) => {
                            const isSelected =
                              selectedNote?.id === note.id ||
                              (selectedNote?.topic === note.topic && selectedNote?.subtopic === note.subtopic);
                            return (
                              <div
                                key={note.id || `${group.moduleName}-${noteIdx}`}
                                onClick={() => setSelectedNote(note)}
                                className={`p-2.5 cursor-pointer transition text-left space-y-0.5 ${
                                  isSelected
                                    ? 'bg-[#001028]/5 border-l-3 border-l-[#001028]'
                                    : 'hover:bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center justify-between text-[10px]">
                                  <span className={`font-bold ${isSelected ? 'text-[#001028]' : 'text-stone-500'}`}>
                                    Lesson {noteIdx + 1}
                                  </span>
                                  {isSelected && (
                                    <span className="px-1.5 py-0.5 rounded bg-[#001028] text-[#F8C800] text-[9px] font-bold">
                                      ACTIVE
                                    </span>
                                  )}
                                </div>
                                <h5 className={`text-[12px] font-bold leading-tight ${isSelected ? 'text-[#001028]' : 'text-[#10201D]'}`}>
                                  {note.subtopic || note.topic}
                                </h5>
                                {note.summary_60s && (
                                  <p className="text-[10.5px] text-[#66736F] line-clamp-1">
                                    {note.summary_60s}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column (8 cols): Note Content, Resources, & Topic Questions */}
          <div className="lg:col-span-8 space-y-4">
            {/* Standard Exam Papers Config Indicator (WAEC / NECO / NABTEB) */}
            {(activeExamTab === 'WAEC' || activeExamTab === 'NECO' || activeExamTab === 'NABTEB') && (
              <div className="flex items-center justify-between p-2.5 rounded-[14px] bg-amber-50/90 border border-amber-300 text-amber-950 text-xs shadow-xs animate-fadeIn">
                <div className="flex items-center space-x-2">
                  <span className="text-base">📑</span>
                  <div>
                    <span className="font-bold">{activeExamTab} Standard Papers Active: </span>
                    <span className="font-extrabold text-[#001028]">{selectedExamPapers.join(' • ')}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openPaperSelector(activeExamTab)}
                  className="px-2.5 py-1 rounded-[8px] bg-[#001028] hover:bg-[#001830] text-white text-[11px] font-bold transition cursor-pointer flex items-center space-x-1"
                >
                  <span>Select Papers (OBJ / Theory / Practical)</span>
                  <span className="text-[10px]">⚙️</span>
                </button>
              </div>
            )}

            {!selectedNote ? (
              <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 bg-white rounded-[16px] border border-[#E4EAE8]">
                <div className="w-16 h-16 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center">
                  <span className="text-3xl">📚</span>
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#10201D]">Select a Topic</p>
                  {activeExamTab === 'BECE' && (
                    <p className="text-[12px] text-[#66736F] mt-1">
                      For BECE notes, choose <strong>Basic Science</strong>, <strong>Basic Technology</strong>, or <strong>Social Studies</strong> from the subject picker.
                    </p>
                  )}
                </div>
              </div>
            ) : (
            <>

            {/* Top Multi-Tab Switcher */}
            <div className="max-w-xl">
              <TopicTabs
                activeTab={activeNoteTab}
                onTabChange={setActiveNoteTab}
                questionsCount={alignedQuestions.length}
                theoryCount={alignedTheoryQuestions.length}
                practicalCount={alignedPracticalQuestions.length}
                isStandardExam={activeExamTab === 'WAEC' || activeExamTab === 'NECO' || activeExamTab === 'NABTEB'}
                selectedPapers={selectedExamPapers}
              />
            </div>

            {/* TAB 1: Note View */}
            {activeNoteTab === 'note' && (
              <div
                onMouseUp={handleTextSelectionCheck}
                onTouchEnd={handleTextSelectionCheck}
                className="bg-white p-6 rounded-[16px] border border-[#E4EAE8] shadow-subtle space-y-5 text-left animate-page-enter"
              >
                {/* Section Badge & Actions */}
                <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-3 flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F8F8F8] text-[#001028] border border-[#001028]/20 animate-card-in">
                      {activeExamTab === 'BECE' ? 'BECE (Junior WAEC) Curriculum' : `${activeExamTab} Official Syllabus Standard`}
                    </span>
                    <span className="text-[14px] font-bold text-[#10201D]">
                      {selectedNote.subtopic || selectedNote.topic}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => handleOpenShareNote()}
                      className="px-3 py-1 rounded-[10px] bg-slate-50 hover:bg-slate-100 text-[#001028] border border-slate-300 text-[11px] font-bold transition cursor-pointer flex items-center space-x-1 shadow-2xs"
                      title="Share Note as Study Card (with WhatsApp/Image)"
                    >
                      <span>📤 Share Note</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleAskAiAboutTopic}
                      className="px-3 py-1 rounded-[10px] bg-[#001028] text-[#F8C800] text-[11px] font-bold hover:bg-[#001830] transition cursor-pointer flex items-center space-x-1"
                    >
                      <span>🤖 Ask AI</span>
                    </button>
                  </div>
                </div>

                {/* Key Concepts bullet list */}
                {selectedNote.key_terms && selectedNote.key_terms.length > 0 && (
                  <div className="space-y-1.5">
                    <h4 className="text-[13px] font-bold text-[#10201D]">Key Concepts</h4>
                    <ul className="space-y-1 text-[13px] text-[#66736F]">
                      {selectedNote.key_terms.slice(0, 5).map((term, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#001028]" />
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Formulas Card (Screen 4 Match) */}
                {(selectedNote.key_formulas || (selectedNote.topic && selectedNote.topic.toLowerCase().includes('motion'))) && (
                  <div className="bg-[#F8FAFC] rounded-[14px] p-3.5 border border-[#E2E8F0] space-y-2 text-left">
                    <div className="flex items-center space-x-2 text-[12px] font-bold text-[#001028]">
                      <span>📐</span>
                      <span>Key Formulas &amp; Equations</span>
                    </div>
                    <div className="bg-white p-3 rounded-[10px] border border-[#CBD5E1] font-mono text-[12.5px] text-[#0F172A] space-y-1">
                      {selectedNote.key_formulas ? (
                        <div className="whitespace-pre-line leading-relaxed">{selectedNote.key_formulas}</div>
                      ) : (
                        <>
                          <div className="text-[#001028] font-bold">• 1st Equation: v = u + at</div>
                          <div className="text-[#001028] font-bold">• 2nd Equation: s = ut + ½at²</div>
                          <div className="text-[#001028] font-bold">• 3rd Equation: v² = u² + 2as</div>
                          <div className="text-[#64748B] text-[11px] pt-1">• Peak Height: H_max = u² / (2g) | Flight Time: T = 2u / g</div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Authentic High-Yield Scientific & Biological Diagrams (SVG vector drawings with callouts) */}
                <ScientificDiagramViewer
                  subject={selectedNote.subject}
                  topic={selectedNote.topic}
                  subtopic={selectedNote.subtopic}
                />

                {/* Educational Diagram */}
                <EducationalDiagram topicTitle={`${selectedNote.subject} ${selectedNote.subtopic || ''} ${selectedNote.topic || ''}`} />

                {/* Main Teaching Content */}
                <div className="pt-2 text-[13.5px] leading-relaxed text-[#10201D]">
                  <RichNoteRenderer content={selectedNote.content} />
                </div>

                {/* Examiner Tip Callout */}
                <div className="p-4 rounded-[12px] bg-[#F8F8F8] border border-[#001028]/20 flex items-start space-x-3 text-left animate-page-enter">
                  <span className="text-lg">💡</span>
                  <div>
                    <h5 className="text-[12.5px] font-bold text-[#001028]">Remember ({activeExamTab} Examiner Strategy)</h5>
                    <p className="text-[12px] text-[#10201D] mt-0.5 leading-relaxed">
                      {getExamTip(activeExamTab, selectedNote)}
                    </p>
                  </div>
                </div>

                {/* Bottom Navigation: Previous, Next & Practice Drill */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E4EAE8]">
                  <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handlePrevNoteInModule}
                      disabled={currentIndex <= 0}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-[12px] border border-[#E4EAE8] text-[12.5px] font-bold text-[#10201D] hover:bg-[#F7F9F8] transition cursor-pointer disabled:opacity-40"
                    >
                      &lt; Previous Lesson
                    </button>
                    <button
                      type="button"
                      onClick={handleNextNoteInModule}
                      disabled={currentIndex >= filteredNotes.length - 1}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-[12px] bg-[#001028] text-white text-[12.5px] font-bold hover:bg-[#001830] transition cursor-pointer disabled:opacity-40"
                    >
                      Next Lesson &rarr;
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleStartTopicPractice}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-[12px] bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] text-[12.5px] font-extrabold shadow-xs transition cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <span>🎯 Practice CBT Drill for this Topic</span>
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: Resources View */}
            {activeNoteTab === 'resources' && (
              <div className="space-y-3">
                <ResourceCard
                  type="pdf"
                  title="Detailed Notes (PDF)"
                  subtitle={`Comprehensive ${selectedNote.topic} syllabus note • Download or read`}
                  onClick={() => alert('PDF note downloaded for offline reading!')}
                />
                <ResourceCard
                  type="video"
                  title="Video Lesson"
                  subtitle="Watch 7-minute visual breakdown of core concepts"
                  onClick={() => alert('Video lesson player opening...')}
                />
                <ResourceCard
                  type="textbook"
                  title="Textbook Reference"
                  subtitle="JAMB & WAEC recommended textbook excerpt"
                  onClick={() => alert('Opening recommended textbook excerpt...')}
                />
                <ResourceCard
                  type="diagram"
                  title="Diagram &amp; Illustration"
                  subtitle="Visual aids and labeled diagrams for better retention"
                  onClick={() => setActiveNoteTab('note')}
                />
                <ResourceCard
                  type="formula"
                  title="Formula Sheet"
                  subtitle="Quick formula revision guide and SI units"
                  onClick={() => setActiveNoteTab('note')}
                />
                <ResourceCard
                  type="pdf"
                  title="Official JAMB Syllabus (Outline & PDF)"
                  subtitle={`View authentic ${selectedSubjectFilter} syllabus scope, aims & download PDF`}
                  onClick={() => setIsSyllabusViewerOpen(!isSyllabusViewerOpen)}
                />

                {isSyllabusViewerOpen && (
                  <div className="pt-2">
                    <OfficialJambSyllabusViewer
                      currentSubject={selectedSubjectFilter}
                      onSelectSubject={(subj) => setSelectedSubjectFilter(subj)}
                    />
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: Questions View */}
            {activeNoteTab === 'questions' && (
              <div className="space-y-4">
                {/* 🔥 Dare to Dare Challenge on Topic Banner */}
                <div
                  onClick={() => openDareToDare({ subject: selectedNote.subject, topic: selectedNote.topic, exam: activeExamTab })}
                  className="p-3.5 rounded-[16px] bg-gradient-to-r from-[#061F17] via-[#0B3528] to-[#124B3B] text-white border border-slate-500/30 flex items-center justify-between cursor-pointer hover:border-amber-400/50 transition shadow-sm active:scale-[0.99]"
                >
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center font-black text-white text-lg shadow-xs shrink-0">
                      ⚡
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600 text-white font-extrabold uppercase tracking-wider">
                          DARE TO DARE
                        </span>
                        <span className="text-[11px] text-amber-300 font-bold">Rapid Topic Challenge</span>
                      </div>
                      <p className="text-[13.5px] font-bold text-white leading-snug">
                        Dare to take a 60s Speed Run on {selectedNote.subtopic || selectedNote.topic}?
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-[10px] bg-gradient-to-r from-amber-500 to-red-500 text-white font-extrabold text-[11.5px] uppercase tracking-wider shadow-xs hover:brightness-110 shrink-0"
                  >
                    Accept Dare 🚀
                  </button>
                </div>

                <div className="bg-white p-4 rounded-[14px] border border-[#E4EAE8] shadow-subtle flex items-center justify-between">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#10201D]">
                      {selectedNote.subtopic || selectedNote.topic} Questions
                    </h3>
                    <p className="text-[12px] text-[#66736F]">
                      {activeExamTab} Past Questions • Answer directly below or start CBT Practice
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleStartTopicPractice}
                    className="px-4 py-2 rounded-[12px] bg-[#001028] text-white text-[12px] font-bold shadow-xs hover:bg-[#001830] transition cursor-pointer touch-press"
                  >
                    ▶ Start CBT Practice
                  </button>
                </div>

                <div className="space-y-3">
                  {alignedQuestions.map((q, idx) => (
                    <InlineInteractiveQuestionCard
                      key={q.id || idx}
                      index={idx + 1}
                      question={q}
                      exam={activeExamTab}
                      year={q.year || '2022'}
                      subtopic={q.subtopic}
                      difficulty={idx % 2 === 0 ? 'Medium' : 'Easy'}
                      userAnswer={userSelectedOptions[q.id || idx]}
                      onSelectAnswer={(key) => setUserSelectedOptions(prev => ({ ...prev, [q.id || idx]: key }))}
                      onOpenAiTutor={(question, userOpt) => {
                        openAiTutor({
                          question,
                          userSelectedOption: userOpt,
                          exam: activeExamTab,
                          subject: selectedNote.subject,
                          topic: selectedNote.topic,
                          subtopic: selectedNote.subtopic,
                          noteTitle: selectedNote.topic
                        });
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: Theory View (Paper 2) */}
            {activeNoteTab === 'theory' && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-[14px] border border-[#E4EAE8] shadow-subtle flex items-center justify-between">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#10201D]">
                      {selectedNote.subtopic || selectedNote.topic} Theory (Paper 2)
                    </h3>
                    <p className="text-[12px] text-[#66736F]">
                      {activeExamTab} Official Theory • {alignedTheoryQuestions.length} Questions • AI Marking &amp; Feedback
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (alignedTheoryQuestions.length > 0) {
                        setActiveTheoryQuestionForMarker(alignedTheoryQuestions[0]);
                        setIsTheoryMarkerOpen(true);
                      } else {
                        alert('Select a theory question below to snap and mark your paper.');
                      }
                    }}
                    className="px-4 py-2 rounded-[12px] bg-[#001028] text-white text-[12px] font-bold shadow-xs hover:bg-[#001830] transition cursor-pointer flex items-center space-x-1.5"
                  >
                    <span>📸</span>
                    <span>Snap &amp; Mark Answer</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {alignedTheoryQuestions.length === 0 ? (
                    <div className="bg-white rounded-[16px] p-8 text-center border border-[#E4EAE8] space-y-3">
                      <div className="text-3xl">📝</div>
                      <h4 className="text-sm font-bold text-[#10201D]">No explicit Theory questions for this specific subtopic yet</h4>
                      <p className="text-xs text-[#66736F] max-w-sm mx-auto">
                        Explore all {selectedNote.subject} theory past questions with WAEC marking schemes.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          const allSubjectTheory = getTheoryQuestionsForSubject(selectedNote.subject);
                          if (allSubjectTheory.length > 0) {
                            setAlignedTheoryQuestions(allSubjectTheory);
                          }
                        }}
                        className="px-4 py-1.5 rounded-[10px] bg-[#001028] text-white text-xs font-bold"
                      >
                        Load All {selectedNote.subject} Theory Questions
                      </button>
                    </div>
                  ) : (
                    alignedTheoryQuestions.map((tq, idx) => (
                      <div
                        key={tq.id || idx}
                        className="bg-white rounded-[16px] p-5 border border-[#E4EAE8] shadow-subtle space-y-3.5 text-left transition hover:border-[#001028]/30"
                      >
                        <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-2.5">
                          <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 rounded-full bg-[#001028] text-white text-xs font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-[13.5px] font-bold text-[#10201D]">
                              {tq.title}
                            </span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F8F8F8] text-[#001028] border border-[#001028]/15">
                            {tq.exam} {tq.year} • {tq.totalMarks} Marks
                          </span>
                        </div>

                        <div className="text-[13px] text-[#10201D] leading-relaxed">
                          {renderFormattedQuestionText(tq.questionText, 0.95, false)}
                        </div>

                        <div className="bg-[#F7F9F8] rounded-[12px] p-3 border border-[#E4EAE8] space-y-1.5">
                          <span className="text-[11px] font-bold text-[#66736F] uppercase tracking-wider block">
                            Question Parts &amp; Mark Breakdown:
                          </span>
                          {tq.parts.map((p, pIdx) => (
                            <div key={pIdx} className="flex items-start justify-between text-xs gap-2">
                              <div className="space-x-1">
                                <span className="font-bold text-[#001028]">{p.label}</span>
                                <span className="text-[#10201D]">{p.text}</span>
                              </div>
                              <span className="font-bold text-[#66736F] shrink-0">[{p.marks} Marks]</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTheoryQuestionForMarker(tq);
                              setIsTheoryMarkerOpen(true);
                            }}
                            className="flex-1 py-2 px-3 rounded-[10px] bg-[#001028] text-white text-xs font-bold hover:bg-[#001830] transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-xs"
                          >
                            <span>📸</span>
                            <span>Snap &amp; Mark My Answer</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setExpandedTheorySchemeId(expandedTheorySchemeId === tq.id ? null : tq.id);
                            }}
                            className="py-2 px-3 rounded-[10px] border border-[#E4EAE8] bg-[#F7F9F8] hover:bg-[#E4EAE8] text-xs font-semibold text-[#10201D] transition cursor-pointer"
                          >
                            {expandedTheorySchemeId === tq.id ? 'Hide Marking Scheme' : '👁️ View Rubric [M1/A1/B1]'}
                          </button>
                        </div>

                        {expandedTheorySchemeId === tq.id && (
                          <div className="p-3.5 rounded-[12px] bg-[#F8FAFC] border border-[#CBD5E1] space-y-2 animate-card-in">
                            <div className="flex items-center justify-between text-xs font-bold text-[#001028]">
                              <span>📋 Official Stepwise Marking Scheme</span>
                              <span>Total: {tq.totalMarks} Marks</span>
                            </div>
                            <div className="space-y-1 text-xs">
                              {tq.markingRubrics.map((r, rIdx) => (
                                <div key={rIdx} className="flex items-start justify-between gap-2 border-b border-dashed border-[#CBD5E1] pb-1">
                                  <div className="space-x-1">
                                    <span className="font-bold text-amber-700">[{r.markType}]</span>
                                    <span className="text-[#334155]">{r.description}</span>
                                  </div>
                                  <span className="font-mono text-[11px] text-[#64748B] shrink-0">+{r.allocatedMarks}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* TAB 5: Practical View (Paper 3) for WAEC, NECO & NABTEB */}
            {activeNoteTab === 'practical' && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-[14px] border border-[#E4EAE8] shadow-subtle flex items-center justify-between">
                  <div>
                    <h3 className="text-[15px] font-bold text-[#10201D]">
                      {selectedNote.subtopic || selectedNote.topic} Paper 3 (Practical)
                    </h3>
                    <p className="text-[12px] text-[#66736F]">
                      {activeExamTab} Official Practical &amp; Alternative to Practical • {alignedPracticalQuestions.length} Questions
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (alignedPracticalQuestions.length > 0) {
                        setActiveTheoryQuestionForMarker(alignedPracticalQuestions[0]);
                        setIsTheoryMarkerOpen(true);
                      } else {
                        alert('Select a practical question below to snap and mark your paper.');
                      }
                    }}
                    className="px-4 py-2 rounded-[12px] bg-[#001028] text-white text-[12px] font-bold shadow-xs hover:bg-[#001830] transition cursor-pointer flex items-center space-x-1.5"
                  >
                    <span>📸</span>
                    <span>Snap &amp; Mark Practical</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {alignedPracticalQuestions.length === 0 ? (
                    <div className="bg-white rounded-[16px] p-8 text-center border border-[#E4EAE8] space-y-3">
                      <div className="text-3xl">🔬</div>
                      <h4 className="text-sm font-bold text-[#10201D]">No explicit Practical questions for this specific subtopic yet</h4>
                      <p className="text-xs text-[#66736F] max-w-sm mx-auto">
                        Explore all {selectedNote.subject} practical past questions with WAEC / NECO experimental rubrics.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          const allSubjectPrac = getPracticalQuestionsForSubject(selectedNote.subject);
                          if (allSubjectPrac.length > 0) {
                            setAlignedPracticalQuestions(allSubjectPrac);
                          }
                        }}
                        className="px-4 py-1.5 rounded-[10px] bg-[#001028] text-white text-xs font-bold"
                      >
                        Load All {selectedNote.subject} Practical Questions
                      </button>
                    </div>
                  ) : (
                    alignedPracticalQuestions.map((pq, idx) => (
                      <div
                        key={pq.id || idx}
                        className="bg-white rounded-[16px] p-5 border border-[#E4EAE8] shadow-subtle space-y-3 text-left hover:border-[#001028]/30 transition"
                      >
                        <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-2.5">
                          <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                              {pq.exam} {pq.year} • {pq.paper}
                            </span>
                            <span className="text-[12px] font-semibold text-[#66736F] truncate max-w-[200px]">
                              {pq.section}
                            </span>
                          </div>
                          <span className="font-bold text-[12px] text-[#001028] bg-[#F8F8F8] px-2.5 py-0.5 rounded-full border border-[#001028]/20">
                            {pq.totalMarks} Marks
                          </span>
                        </div>

                        <div className="space-y-1">
                          <h4 className="text-[14px] font-bold text-[#10201D] leading-snug">
                            {pq.title}
                          </h4>
                          <p className="text-[13px] text-[#2C3E3A] whitespace-pre-line leading-relaxed font-sans">
                            {pq.questionText}
                          </p>
                        </div>

                        <div className="p-3 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] space-y-2">
                          <span className="text-[11px] font-bold text-[#66736F] uppercase tracking-wider block">
                            Question Parts &amp; Mark Breakdown:
                          </span>
                          {pq.parts.map((p, pIdx) => (
                            <div key={pIdx} className="flex items-start justify-between text-xs gap-2">
                              <div className="space-x-1">
                                <span className="font-bold text-[#001028]">{p.label}</span>
                                <span className="text-[#10201D]">{p.text}</span>
                              </div>
                              <span className="font-bold text-[#66736F] shrink-0">[{p.marks} Marks]</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveTheoryQuestionForMarker(pq);
                              setIsTheoryMarkerOpen(true);
                            }}
                            className="flex-1 py-2 px-3 rounded-[10px] bg-[#001028] text-white text-xs font-bold hover:bg-[#001830] transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-xs"
                          >
                            <span>📸</span>
                            <span>Snap &amp; Mark My Practical Work</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setExpandedTheorySchemeId(expandedTheorySchemeId === pq.id ? null : pq.id);
                            }}
                            className="py-2 px-3 rounded-[10px] border border-[#E4EAE8] bg-[#F7F9F8] hover:bg-[#E4EAE8] text-xs font-semibold text-[#10201D] transition cursor-pointer"
                          >
                            {expandedTheorySchemeId === pq.id ? 'Hide Practical Solution' : '👁️ View Practical Solution & Rubric'}
                          </button>
                        </div>

                        {expandedTheorySchemeId === pq.id && (
                          <div className="p-3.5 rounded-[12px] bg-[#F8FAFC] border border-[#CBD5E1] space-y-2 animate-card-in">
                            <div className="flex items-center justify-between text-xs font-bold text-[#001028]">
                              <span>📋 Official Practical Solution &amp; Table</span>
                              <span>Total: {pq.totalMarks} Marks</span>
                            </div>
                            <div className="text-xs text-[#1E293B] whitespace-pre-line leading-relaxed">
                              {pq.modelSolution}
                            </div>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
            </>)}
          </div>
        </div>
        )}

        {/* ─── MOBILE VIEW (< 1024px) ─── */}
        <div className="lg:hidden space-y-4">
          {/* LEVEL 1: Subject Selection View */}
          {viewLevel === 'subjects' && (
            <div className="space-y-3.5 pb-16 animate-page-enter">
              {/* Level indicator pill */}
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-extrabold text-[#001028]">
                  {activeExamTab === 'BECE' ? '🎒 BECE Junior Secondary Curriculum (JSS 1–3)' : '🎓 Senior Secondary Curriculum (JAMB • WAEC • NECO)'}
                </span>
                <span className="text-[10.5px] font-bold text-stone-500">{filteredSubjects.length} Subjects</span>
              </div>

              {/* Subject Search bar */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9692] text-sm">🔍</span>
                <input
                  type="text"
                  value={subjectSearchQuery}
                  onChange={(e) => setSubjectSearchQuery(e.target.value)}
                  placeholder="Search syllabus subjects..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-[12px] bg-white border border-[#E4EAE8] text-[13px] text-[#10201D] placeholder-[#8A9692] focus:outline-none focus:border-[#001028] shadow-subtle"
                />
              </div>

              {/* Exam pills */}
              <ExamPills
                exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
                activeExam={activeExamTab}
                onSelectExam={setActiveExamTab}
              />

              {/* Subjects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {filteredSubjects.map((sub) => {
                  const meta = SUBJECT_METADATA[sub] || { icon: '📚', category: 'General' };
                  const subNotes = MASTER_LESSON_NOTES.filter(n => n.subject.toLowerCase() === sub.toLowerCase());
                  const modCount = new Set(subNotes.map(n => n.topic)).size;
                  const isSelected = selectedSubjectFilter.toLowerCase() === sub.toLowerCase();

                  return (
                    <div
                      key={sub}
                      onClick={() => {
                        setSelectedSubjectFilter(sub);
                        setSelectedSubject(sub);
                        setViewLevel('topics-list');
                      }}
                      className={`rounded-[18px] p-3.5 border transition cursor-pointer flex items-center justify-between text-left group ${
                        isSelected
                          ? 'bg-[#001028] text-white border-[#001028] shadow-md'
                          : 'bg-white text-[#10201D] border-[#E4EAE8] shadow-subtle hover:border-[#F8C800]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition ${
                          isSelected ? 'bg-white/10 text-[#F8C800]' : 'bg-[#001028] text-[#F8C800]'
                        }`}>
                          {meta.icon}
                        </div>
                        <div>
                          <span className={`text-[9.5px] font-bold uppercase tracking-wider ${
                            isSelected ? 'text-[#F8C800]' : 'text-[#607080]'
                          }`}>
                            {meta.category}
                          </span>
                          <h4 className={`font-black text-[13.5px] leading-snug ${
                            isSelected ? 'text-white' : 'text-[#001028]'
                          }`}>
                            {sub}
                          </h4>
                          <p className={`text-[10.5px] mt-0.5 ${
                            isSelected ? 'text-slate-300' : 'text-[#607080]'
                          }`}>
                            {modCount > 0 ? `${modCount} Modules • ` : ''}{subNotes.length || 0} Lessons
                          </p>
                        </div>
                      </div>

                      <span className={`font-bold text-base shrink-0 transition-transform group-hover:translate-x-1 ${
                        isSelected ? 'text-[#F8C800]' : 'text-[#8A9692]'
                      }`}>
                        →
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* LEVEL 2 & 3: Modules & Lessons View (FlashLearners Hierarchy) */}
          {viewLevel === 'topics-list' && (
            <div className="space-y-3 pb-16 animate-page-enter">
              {/* Level indicator pill */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center space-x-1.5">
                  <span className="text-base">{SUBJECT_METADATA[selectedSubjectFilter]?.icon || '📚'}</span>
                  <span className="text-[12px] font-extrabold text-[#001028]">{selectedSubjectFilter}</span>
                  <span className="text-[9.5px] font-bold bg-[#001028] text-[#F8C800] px-2 py-0.5 rounded-full">
                    {activeExamTab}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setViewLevel('subjects')}
                  className="text-[11px] font-bold text-[#001028] hover:text-[#001830] underline cursor-pointer"
                >
                  Change Subject ▾
                </button>
              </div>

              {/* Mobile Subject Switcher Horizontal Bar */}
              <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pb-1">
                {displayedSubjects.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => {
                      setSelectedSubjectFilter(sub);
                      setSelectedSubject(sub);
                    }}
                    className={`px-3 py-1 rounded-full text-[11px] font-bold transition shrink-0 cursor-pointer ${
                      selectedSubjectFilter === sub
                        ? 'bg-[#001028] text-[#F8C800] shadow-xs'
                        : 'bg-white text-stone-600 border border-stone-200'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9692] text-sm">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${selectedSubjectFilter} modules and lessons...`}
                  className="w-full pl-9 pr-4 py-2.5 rounded-[12px] bg-white border border-[#E4EAE8] text-[13px] text-[#10201D] placeholder-[#8A9692] focus:outline-none focus:border-[#001028] shadow-subtle"
                />
              </div>

              {/* Exam pills */}
              <ExamPills
                exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
                activeExam={activeExamTab}
                onSelectExam={setActiveExamTab}
              />

              {/* FlashLearners Module Accordions */}
              <div className="space-y-3 pt-1">
                {moduleGroups.length === 0 ? (
                  <div className="bg-white rounded-[16px] p-8 border border-slate-200 text-center space-y-2">
                    <span className="text-3xl">🔍</span>
                    <p className="text-[13px] font-bold text-[#001028]">No lessons found for {selectedSubjectFilter}</p>
                    <p className="text-[11px] text-[#607080]">
                      {activeExamTab === 'BECE'
                        ? 'For BECE (Junior WAEC), select Basic Science, Basic Technology, or Social Studies.'
                        : 'Try adjusting your search terms or exam filter.'}
                    </p>
                  </div>
                ) : (
                  moduleGroups.map((group, groupIdx) => {
                    const isExpanded =
                      searchQuery.trim().length > 0 ||
                      (expandedModules[group.moduleName] ?? (groupIdx === 0 || group.notes.some(n => n.id === selectedNote?.id)));

                    return (
                      <div
                        key={group.moduleName}
                        className="bg-white rounded-[18px] border border-[#E4EAE8] shadow-subtle overflow-hidden transition-all duration-200 text-left"
                      >
                        {/* Module Accordion Header */}
                        <div
                          onClick={() => toggleModule(group.moduleName)}
                          className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-50/70 select-none transition"
                        >
                          <div className="flex items-center space-x-2.5 min-w-0">
                            <span className="w-6 h-6 rounded-lg bg-[#001028] text-[#F8C800] text-[11px] font-black flex items-center justify-center shrink-0">
                              {groupIdx + 1}
                            </span>
                            <div className="min-w-0">
                              <h4 className="text-[13px] font-extrabold text-[#001028] truncate uppercase tracking-tight">
                                {group.moduleName}
                              </h4>
                              <p className="text-[10.5px] text-[#607080] truncate">
                                {group.totalNotes} {group.totalNotes === 1 ? 'Lesson' : 'Lessons'} • {activeExamTab} Syllabus
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 shrink-0 ml-2">
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F8F8F8] text-[#001028] border border-slate-200">
                              {group.totalNotes} {group.totalNotes === 1 ? 'lesson' : 'lessons'}
                            </span>
                            <span className={`text-xs text-[#001028] font-bold transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                              ▼
                            </span>
                          </div>
                        </div>

                        {/* Subtopics / Lessons under Module */}
                        {isExpanded && (
                          <div className="border-t border-[#F0F2F1] divide-y divide-[#F0F2F1] bg-slate-50/40">
                            {group.notes.map((note, noteIdx) => {
                              const isSelected =
                                selectedNote?.id === note.id ||
                                (selectedNote?.topic === note.topic && selectedNote?.subtopic === note.subtopic);

                              return (
                                <div
                                  key={note.id || `${group.moduleName}-${noteIdx}`}
                                  onClick={() => {
                                    setSelectedNote(note);
                                    setViewLevel('note-detail');
                                    setActiveNoteTab('note');
                                  }}
                                  className={`p-3 transition cursor-pointer flex items-center justify-between group ${
                                    isSelected ? 'bg-white border-l-4 border-l-[#001028]' : 'hover:bg-white active:bg-slate-100/80'
                                  }`}
                                >
                                  <div className="flex items-start space-x-2.5 min-w-0">
                                    <span className="w-5 h-5 rounded-full bg-white border border-slate-300 text-[10px] font-bold text-[#001028] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#001028]">
                                      {noteIdx + 1}
                                    </span>
                                    <div className="min-w-0">
                                      <h5 className="text-[12.5px] font-bold text-[#001028] group-hover:text-[#001830] leading-snug">
                                        {note.subtopic || note.topic}
                                      </h5>
                                      {note.summary_60s && (
                                        <p className="text-[11px] text-[#607080] line-clamp-1 mt-0.5 leading-tight">
                                          {note.summary_60s}
                                        </p>
                                      )}
                                      <div className="flex items-center space-x-2 mt-1 text-[10px]">
                                        <span className="font-semibold text-emerald-800">📖 Full Note</span>
                                        <span>•</span>
                                        <span className="text-amber-800 font-semibold">❓ Practice Ready</span>
                                      </div>
                                    </div>
                                  </div>

                                  <span className="text-[#8A9692] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-xs shrink-0 ml-2">
                                    Read →
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* SCREEN 4, 5, 6: Note Detail / Tabs View */}
          {viewLevel === 'note-detail' && (
            <div className="space-y-4 pb-12">
              {/* Standard Exam Papers Indicator (WAEC, NECO, NABTEB) */}
              {(activeExamTab === 'WAEC' || activeExamTab === 'NECO' || activeExamTab === 'NABTEB') && (
                <div className="bg-[#F8F8F8] border border-[#001028]/20 rounded-[12px] p-2.5 flex items-center justify-between text-xs text-[#001028]">
                  <div className="flex items-center space-x-1.5 truncate">
                    <span>📑</span>
                    <span className="font-bold truncate">{activeExamTab}: <span className="font-extrabold">{selectedExamPapers.join(' • ')}</span></span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openPaperSelector(activeExamTab)}
                    className="px-2 py-0.5 rounded-[6px] bg-[#001028] text-white text-[10px] font-bold shrink-0 ml-1 cursor-pointer"
                  >
                    Change ⚙️
                  </button>
                </div>
              )}

              {/* 5-Tab Switcher: Note | Resources | Questions (Paper 1) | Theory (Paper 2) | Practical (Paper 3) */}
              <TopicTabs
                activeTab={activeNoteTab}
                onTabChange={setActiveNoteTab}
                questionsCount={alignedQuestions.length}
                theoryCount={alignedTheoryQuestions.length}
                practicalCount={alignedPracticalQuestions.length}
                isStandardExam={activeExamTab === 'WAEC' || activeExamTab === 'NECO' || activeExamTab === 'NABTEB'}
                selectedPapers={selectedExamPapers}
              />

              {/* SCREEN 4: Note Tab */}
              {activeNoteTab === 'note' && (
                <div className="space-y-4 text-left">
                  {/* Section Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#F8F8F8] text-[#001028] border border-[#001028]/20 animate-card-in">
                        {activeExamTab === 'BECE' ? 'BECE (Junior WAEC) Curriculum' : `${activeExamTab} Official Syllabus Standard`}
                      </span>
                      <span className="text-[13px] font-bold text-[#10201D]">
                        {selectedNote.subtopic || selectedNote.topic}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => handleOpenShareNote()}
                        className="px-3 py-1 rounded-[10px] bg-slate-50 hover:bg-slate-100 text-[#001028] border border-slate-300 text-[11px] font-bold transition cursor-pointer flex items-center space-x-1 shadow-2xs"
                        title="Share Note as Study Card"
                      >
                        <span>📤 Share Note</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleAskAiAboutTopic}
                        className="text-[11px] font-bold text-[#001028] flex items-center space-x-1 touch-press"
                      >
                        <span>🤖 Ask AI</span>
                      </button>
                    </div>
                  </div>

                  {/* 📖 Full-Screen Textbook Reader Banner */}
                  <div className="p-4 rounded-[20px] bg-[#001028] text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#001830] animate-card-in">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#F8C800] text-[10.5px] font-bold uppercase tracking-wider">
                        <span>📖 Focused Reading</span>
                      </div>
                      <h4 className="text-[14px] font-bold tracking-tight leading-snug text-white">
                        Full-Screen Comprehensive Note Reader
                      </h4>
                      <p className="text-[11.5px] text-[#607080] leading-tight">
                        Continuous textbook view with KaTeX formulas, labeled anatomy diagrams, audio playback, and syllabus practice questions.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsFlashcardScreenOpen(true)}
                      className="px-4 py-2.5 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-bold text-[12px] shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap self-start sm:self-center cursor-pointer"
                    >
                      <span>Open Full Note</span>
                      <span className="font-bold">→</span>
                    </button>
                  </div>

                  {/* Key Concepts bullet list */}
                  {selectedNote.key_terms && selectedNote.key_terms.length > 0 && (
                    <div className="bg-white rounded-[14px] p-3.5 border border-[#E4EAE8] shadow-subtle space-y-1.5 animate-card-in">
                      <h4 className="text-[12.5px] font-bold text-[#10201D]">Key Concepts</h4>
                      <ul className="space-y-1 text-[12.5px] text-[#66736F]">
                        {selectedNote.key_terms.slice(0, 5).map((term, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#001028]" />
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Formulas Card (Screen 4 Match) */}
                  {(selectedNote.key_formulas || (selectedNote.topic && selectedNote.topic.toLowerCase().includes('motion'))) && (
                    <div className="bg-[#F8FAFC] rounded-[14px] p-3.5 border border-[#E2E8F0] space-y-2 text-left">
                      <div className="flex items-center space-x-2 text-[12px] font-bold text-[#001028]">
                        <span>📐</span>
                        <span>Key Formulas &amp; Equations</span>
                      </div>
                      <div className="bg-white p-3 rounded-[10px] border border-[#CBD5E1] font-mono text-[12px] text-[#0F172A] space-y-1">
                        {selectedNote.key_formulas ? (
                          <div className="whitespace-pre-line leading-relaxed">{selectedNote.key_formulas}</div>
                        ) : (
                          <>
                            <div className="text-[#001028] font-bold">• 1st Equation: v = u + at</div>
                            <div className="text-[#001028] font-bold">• 2nd Equation: s = ut + ½at²</div>
                            <div className="text-[#001028] font-bold">• 3rd Equation: v² = u² + 2as</div>
                            <div className="text-[#64748B] text-[11px] pt-1">• Peak Height: H_max = u² / (2g) | Flight Time: T = 2u / g</div>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Authentic High-Yield Scientific & Biological Diagrams (SVG vector drawings with callouts) */}
                  <ScientificDiagramViewer
                    subject={selectedNote.subject}
                    topic={selectedNote.topic}
                    subtopic={selectedNote.subtopic}
                  />

                  {/* Educational SVG Illustration Card */}
                  <EducationalDiagram topicTitle={`${selectedNote.subject} ${selectedNote.subtopic || ''} ${selectedNote.topic || ''}`} />

                  {/* Note Reader Body */}
                  <div className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle text-[13px] leading-relaxed text-[#10201D]">
                    <RichNoteRenderer content={selectedNote.content} />
                  </div>

                  {/* Remember Box */}
                  <div className="p-3.5 rounded-[12px] bg-[#F8F8F8] border border-[#001028]/20 flex items-start space-x-2.5 animate-page-enter">
                    <span className="text-base">💡</span>
                    <div>
                      <h5 className="text-[12px] font-bold text-[#001028]">Remember ({activeExamTab} Strategy)</h5>
                      <p className="text-[11.5px] text-[#10201D] mt-0.5 leading-snug">
                        {getExamTip(activeExamTab, selectedNote)}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Navigation Buttons: Previous, Next & CBT Drill */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-3 border-t border-[#E4EAE8]">
                    <div className="flex items-center space-x-2 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={handlePrevNoteInModule}
                        disabled={currentIndex <= 0}
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-[12px] border border-[#E4EAE8] bg-white text-[12px] font-bold text-[#10201D] shadow-subtle disabled:opacity-40 cursor-pointer"
                      >
                        &lt; Previous Lesson
                      </button>
                      <button
                        type="button"
                        onClick={handleNextNoteInModule}
                        disabled={currentIndex >= filteredNotes.length - 1}
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-[12px] bg-[#001028] text-white text-[12px] font-bold shadow-subtle disabled:opacity-40 cursor-pointer"
                      >
                        Next Lesson &rarr;
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={handleStartTopicPractice}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-[12px] bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] text-[12px] font-extrabold shadow-subtle transition cursor-pointer flex items-center justify-center space-x-1.5"
                    >
                      <span>🎯 Practice CBT Drill</span>
                    </button>
                  </div>
                </div>
              )}

              {/* SCREEN 5: Resources Tab */}
              {activeNoteTab === 'resources' && (
                <div className="space-y-2.5">
                  <ResourceCard
                    type="pdf"
                    title="Detailed Notes (PDF)"
                    subtitle="Download or read online"
                    onClick={() => alert('PDF downloaded for offline study!')}
                  />
                  <ResourceCard
                    type="video"
                    title="Video Lesson"
                    subtitle="Watch 7 min video tutorial"
                    onClick={() => alert('Starting video lesson...')}
                  />
                  <ResourceCard
                    type="textbook"
                    title="Textbook Reference"
                    subtitle="JAMB Recommended Textbook"
                    onClick={() => alert('Opening textbook reference...')}
                  />
                  <ResourceCard
                    type="diagram"
                    title="Diagram &amp; Illustration"
                    subtitle="Visual aids for better understanding"
                    onClick={() => setActiveNoteTab('note')}
                  />
                  <ResourceCard
                    type="formula"
                    title="Formula Sheet"
                    subtitle="Quick revision guide"
                    onClick={() => setActiveNoteTab('note')}
                  />
                  <ResourceCard
                    type="questions"
                    title="Past Questions (Topic Related)"
                    subtitle="From 2010 - 2025"
                    onClick={() => setActiveNoteTab('questions')}
                  />
                  <ResourceCard
                    type="pdf"
                    title="Official JAMB Syllabus (Outline & PDF)"
                    subtitle={`View authentic ${selectedSubjectFilter} syllabus scope, aims & download PDF`}
                    onClick={() => setIsSyllabusViewerOpen(!isSyllabusViewerOpen)}
                  />

                  {isSyllabusViewerOpen && (
                    <div className="pt-2">
                      <OfficialJambSyllabusViewer
                        currentSubject={selectedSubjectFilter}
                        onSelectSubject={(subj) => setSelectedSubjectFilter(subj)}
                      />
                    </div>
                  )}

                  {/* Inspiring student banner from Screen 5 */}
                  <div className="rounded-[14px] p-4 bg-[#E0F2FE] border border-blue-200 mt-4 flex items-center space-x-3 text-left">
                    <div className="text-2xl">👨‍💻</div>
                    <div>
                      <p className="text-[12.5px] font-bold text-[#0369A1] italic">
                        &ldquo;Knowledge is power, when you use it.&rdquo;
                      </p>
                      <p className="text-[10.5px] font-semibold text-[#0284C7] mt-0.5">
                        &mdash; StudyPlug AI
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* SCREEN 6: Topic Questions Tab */}
              {activeNoteTab === 'questions' && (
                <div className="space-y-3">
                  <div className="text-left">
                    <h3 className="text-[14px] font-bold text-[#10201D]">
                      {selectedNote.subtopic || selectedNote.topic} Questions
                    </h3>
                    <p className="text-[11.5px] text-[#66736F]">
                      {activeExamTab} Past Questions • {alignedQuestions.length} Questions
                    </p>
                  </div>

                  {/* 🔥 Mobile Dare to Dare Challenge on Topic Banner */}
                  <div
                    onClick={() => openDareToDare({ subject: selectedNote.subject, topic: selectedNote.topic, exam: activeExamTab })}
                    className="p-3 rounded-[14px] bg-gradient-to-r from-[#061F17] via-[#0B3528] to-[#124B3B] text-white border border-slate-500/30 flex items-center justify-between cursor-pointer hover:border-amber-400/50 transition shadow-xs active:scale-[0.99]"
                  >
                    <div className="flex items-center space-x-2.5 text-left">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center font-black text-white text-sm shadow-xs shrink-0">
                        ⚡
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-red-600 text-white font-black uppercase">
                            DARE
                          </span>
                          <span className="text-[10.5px] text-amber-300 font-bold">60s Challenge</span>
                        </div>
                        <p className="text-[12px] font-bold text-white leading-snug">
                          Dare to take a 60s Speed Run?
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="px-2.5 py-1 rounded-[8px] bg-gradient-to-r from-amber-500 to-red-500 text-white font-extrabold text-[10.5px] uppercase tracking-wider shadow-xs shrink-0"
                    >
                      Dare Me 🚀
                    </button>
                  </div>

                  {/* Filter Pills */}
                  <ExamPills
                    exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
                    activeExam={activeExamTab}
                    onSelectExam={setActiveExamTab}
                  />

                  {/* Difficulty & Random controls */}
                  <div className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-[#66736F] font-medium">Difficulty:</span>
                      <select
                        value={questionsDifficulty}
                        onChange={(e) => setQuestionsDifficulty(e.target.value)}
                        className="bg-white border border-[#E4EAE8] rounded-lg px-2 py-1 text-[11px] font-semibold text-[#10201D]"
                      >
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                      </select>
                    </div>

                    <label className="flex items-center space-x-1.5 cursor-pointer">
                      <span className="text-[#66736F] text-[11px] font-medium">Random</span>
                      <input
                        type="checkbox"
                        checked={isRandomMode}
                        onChange={(e) => setIsRandomMode(e.target.checked)}
                        className="rounded text-[#001028] focus:ring-0"
                      />
                    </label>
                  </div>

                  {/* Question cards list - Answer Straight in Note */}
                  <div className="space-y-3 pb-24">
                    {alignedQuestions.map((q, idx) => (
                      <InlineInteractiveQuestionCard
                        key={q.id || idx}
                        index={idx + 1}
                        question={q}
                        exam={activeExamTab}
                        year={q.year || '2022'}
                        subtopic={q.subtopic}
                        difficulty={idx % 2 === 0 ? 'Medium' : 'Easy'}
                        userAnswer={userSelectedOptions[q.id || idx]}
                        onSelectAnswer={(key) => setUserSelectedOptions(prev => ({ ...prev, [q.id || idx]: key }))}
                        onOpenAiTutor={(question, userOpt) => {
                          openAiTutor({
                            question,
                            userSelectedOption: userOpt,
                            exam: activeExamTab,
                            subject: selectedNote.subject,
                            topic: selectedNote.topic,
                            subtopic: selectedNote.subtopic,
                            noteTitle: selectedNote.topic
                          });
                        }}
                      />
                    ))}
                  </div>

                  {/* Sticky Bottom Button: Start Practice */}
                  <div className="fixed bottom-14 left-0 right-0 z-30 px-4 max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={handleStartTopicPractice}
                      className="w-full py-3 rounded-[12px] bg-[#001028] text-white text-[13.5px] font-bold shadow-floating hover:bg-[#001830] transition cursor-pointer flex items-center justify-center space-x-2"
                    >
                      <span>▶</span>
                      <span>Start Practice ({alignedQuestions.length} questions)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* SCREEN 7: Theory View (Paper 2) */}
              {activeNoteTab === 'theory' && (
                <div className="space-y-3 pb-16 text-left">
                  <div>
                    <h3 className="text-[14px] font-bold text-[#10201D]">
                      {selectedNote.subtopic || selectedNote.topic} Theory (Paper 2)
                    </h3>
                    <p className="text-[11.5px] text-[#66736F]">
                      {activeExamTab} Official Theory • {alignedTheoryQuestions.length} Questions • Snap &amp; AI Marker
                    </p>
                  </div>

                  {/* Action Banner: Snap & Mark */}
                  <div className="bg-[#F8F8F8] rounded-[14px] p-3.5 border border-[#001028]/20 flex items-center justify-between gap-2">
                    <div>
                      <h4 className="text-[12.5px] font-bold text-[#001028]">
                        📸 Snap &amp; Upload Written Answer
                      </h4>
                      <p className="text-[11px] text-[#10201D]">
                        StudyPlug AI marks your handwriting against WAEC [M1, A1, B1] rubrics.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (alignedTheoryQuestions.length > 0) {
                          setActiveTheoryQuestionForMarker(alignedTheoryQuestions[0]);
                          setIsTheoryMarkerOpen(true);
                        } else {
                          alert('Select a theory question below.');
                        }
                      }}
                      className="px-3 py-1.5 rounded-[10px] bg-[#001028] text-white text-[11.5px] font-bold shadow-xs shrink-0"
                    >
                      Snap Paper
                    </button>
                  </div>

                  {/* Theory Questions Cards */}
                  <div className="space-y-3 pt-1">
                    {alignedTheoryQuestions.length === 0 ? (
                      <div className="bg-white rounded-[14px] p-6 text-center border border-[#E4EAE8] space-y-2">
                        <div className="text-2xl">📝</div>
                        <h4 className="text-xs font-bold text-[#10201D]">No explicit Theory questions for this specific subtopic yet</h4>
                        <button
                          type="button"
                          onClick={() => {
                            const allSubjectTheory = getTheoryQuestionsForSubject(selectedNote.subject);
                            if (allSubjectTheory.length > 0) {
                              setAlignedTheoryQuestions(allSubjectTheory);
                            }
                          }}
                          className="px-3 py-1.5 rounded-[8px] bg-[#001028] text-white text-[11px] font-bold"
                        >
                          Load All {selectedNote.subject} Theory Questions
                        </button>
                      </div>
                    ) : (
                      alignedTheoryQuestions.map((tq, idx) => (
                        <div
                          key={tq.id || idx}
                          className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle space-y-3 text-left"
                        >
                          <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-2">
                            <div className="flex items-center space-x-1.5">
                              <span className="w-5 h-5 rounded-full bg-[#001028] text-white text-[11px] font-bold flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <span className="text-[12.5px] font-bold text-[#10201D]">
                                {tq.title}
                              </span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F8F8F8] text-[#001028] border border-[#001028]/15">
                              {tq.exam} {tq.year} • {tq.totalMarks}M
                            </span>
                          </div>

                          <div className="text-[12.5px] text-[#10201D] leading-relaxed">
                            {renderFormattedQuestionText(tq.questionText, 0.9, false)}
                          </div>

                          <div className="bg-[#F7F9F8] rounded-[10px] p-2.5 border border-[#E4EAE8] space-y-1">
                            <span className="text-[10px] font-bold text-[#66736F] uppercase tracking-wider block">
                              Question Parts:
                            </span>
                            {tq.parts.map((p, pIdx) => (
                              <div key={pIdx} className="flex items-start justify-between text-[11.5px] gap-2">
                                <div className="space-x-1">
                                  <span className="font-bold text-[#001028]">{p.label}</span>
                                  <span className="text-[#10201D]">{p.text}</span>
                                </div>
                                <span className="font-bold text-[#66736F] shrink-0">[{p.marks}M]</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center gap-1.5 pt-1">
                            <button
                              type="button"
                              onClick={() => {
                                setActiveTheoryQuestionForMarker(tq);
                                setIsTheoryMarkerOpen(true);
                              }}
                              className="flex-1 py-2 rounded-[10px] bg-[#001028] text-white text-[11.5px] font-bold flex items-center justify-center space-x-1 shadow-xs"
                            >
                              <span>📸</span>
                              <span>Snap &amp; Mark Solution</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                setExpandedTheorySchemeId(expandedTheorySchemeId === tq.id ? null : tq.id);
                              }}
                              className="py-2 px-2.5 rounded-[10px] border border-[#E4EAE8] bg-[#F7F9F8] text-[11px] font-semibold text-[#10201D]"
                            >
                              {expandedTheorySchemeId === tq.id ? 'Hide' : 'Rubric'}
                            </button>
                          </div>

                          {expandedTheorySchemeId === tq.id && (
                            <div className="p-3 rounded-[10px] bg-[#F8FAFC] border border-[#CBD5E1] space-y-1.5 animate-card-in text-xs">
                              <span className="font-bold text-[#001028] block">Official WAEC Scheme:</span>
                              {tq.markingRubrics.map((r, rIdx) => (
                                <div key={rIdx} className="flex items-start justify-between gap-2 border-b border-dashed border-[#CBD5E1] pb-1">
                                  <div className="space-x-1">
                                    <span className="font-bold text-amber-700">[{r.markType}]</span>
                                    <span className="text-[#334155]">{r.description}</span>
                                  </div>
                                  <span className="font-mono text-[10.5px] text-[#64748B] shrink-0">+{r.allocatedMarks}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* SCREEN 8: Practical Tab (Paper 3) */}
              {activeNoteTab === 'practical' && (
                <div className="space-y-3 pb-16 text-left animate-page-enter">
                  <div className="bg-white p-3.5 rounded-[12px] border border-[#E4EAE8] shadow-subtle flex items-center justify-between">
                    <div>
                      <h3 className="text-[13px] font-bold text-[#10201D]">
                        {selectedNote.subtopic || selectedNote.topic} Paper 3 (Practical)
                      </h3>
                      <p className="text-[11px] text-[#66736F]">
                        {activeExamTab} Official Practical Rubrics • {alignedPracticalQuestions.length} Questions
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        if (alignedPracticalQuestions.length > 0) {
                          setActiveTheoryQuestionForMarker(alignedPracticalQuestions[0]);
                          setIsTheoryMarkerOpen(true);
                        } else {
                          alert('Select a practical question below to snap and mark your paper.');
                        }
                      }}
                      className="px-2.5 py-1.5 rounded-[10px] bg-[#001028] text-white text-[11px] font-bold shadow-xs hover:bg-[#001830] transition cursor-pointer flex items-center space-x-1 shrink-0"
                    >
                      <span>📸</span>
                      <span>Snap &amp; Mark</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {alignedPracticalQuestions.length === 0 ? (
                      <div className="bg-white rounded-[14px] p-6 text-center border border-[#E4EAE8] space-y-2">
                        <div className="text-2xl">🔬</div>
                        <h4 className="text-xs font-bold text-[#10201D]">No explicit Practical questions for this subtopic</h4>
                        <p className="text-[11px] text-[#66736F]">
                          Explore all {selectedNote.subject} practical past questions.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            const allSubjectPrac = getPracticalQuestionsForSubject(selectedNote.subject);
                            if (allSubjectPrac.length > 0) {
                              setAlignedPracticalQuestions(allSubjectPrac);
                            }
                          }}
                          className="px-3 py-1 rounded-[8px] bg-[#001028] text-white text-[11px] font-bold"
                        >
                          Load All {selectedNote.subject} Practical Questions
                        </button>
                      </div>
                    ) : (
                      alignedPracticalQuestions.map((pq, idx) => (
                        <div
                          key={pq.id || idx}
                          className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle space-y-2.5 text-left"
                        >
                          <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-2">
                            <div className="flex items-center space-x-1.5">
                              <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-900 font-bold text-[10px] flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                                {pq.exam} {pq.year} • {pq.paper}
                              </span>
                            </div>
                            <span className="font-bold text-[11px] text-[#001028] bg-[#F8F8F8] px-2 py-0.5 rounded-full">
                              {pq.totalMarks} Marks
                            </span>
                          </div>

                          <div className="space-y-1">
                            <h4 className="text-[13px] font-bold text-[#10201D]">
                              {pq.title}
                            </h4>
                            <p className="text-[12px] text-[#2C3E3A] whitespace-pre-line leading-relaxed">
                              {pq.questionText}
                            </p>
                          </div>

                          <div className="p-2.5 rounded-[10px] bg-[#F7F9F8] border border-[#E4EAE8] space-y-1.5">
                            <span className="text-[10px] font-bold text-[#66736F] uppercase tracking-wider block">
                              Question Parts &amp; Mark Breakdown:
                            </span>
                            {pq.parts.map((p, pIdx) => (
                              <div key={pIdx} className="flex items-start justify-between text-[11px] gap-2">
                                <div className="space-x-1">
                                  <span className="font-bold text-[#001028]">{p.label}</span>
                                  <span className="text-[#10201D]">{p.text}</span>
                                </div>
                                <span className="font-bold text-[#66736F] shrink-0">[{p.marks} M]</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => {
                                setActiveTheoryQuestionForMarker(pq);
                                setIsTheoryMarkerOpen(true);
                              }}
                              className="w-full py-2 rounded-[10px] bg-[#001028] text-white text-[11px] font-bold shadow-xs hover:bg-[#001830] transition cursor-pointer flex items-center justify-center space-x-1"
                            >
                              <span>📸 Snap &amp; Mark Practical Paper</span>
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      </div>

      {/* ─── Theory AI Paper Marker Modal ─── */}
      <TheoryAnswerMarkerModal
        question={activeTheoryQuestionForMarker}
        isOpen={isTheoryMarkerOpen}
        onClose={() => setIsTheoryMarkerOpen(false)}
      />

      {/* ─── Topic-Based Multi-Tab Note & Resources Reader Modal ─── */}
      {isFlashcardScreenOpen && selectedNote && (() => {
        const subjectTopics = getTopicsForSubject(selectedNote.subject, activeExamTab);
        const selTopicLower = (selectedNote.topic || '').toLowerCase().trim();
        const selSubtopicLower = (selectedNote.subtopic || '').toLowerCase().trim();
        const matched = subjectTopics.find(t => {
          const tLower = t.topicTitle.toLowerCase().trim();
          return tLower === selTopicLower ||
            (selSubtopicLower && t.subtopics.some(s => s.subtopicTitle.toLowerCase().trim() === selSubtopicLower)) ||
            (selTopicLower.length > 4 && (tLower.includes(selTopicLower) || selTopicLower.includes(tLower)));
        }) || {
          id: `note-topic-${selectedNote.id}`,
          exam: (selectedNote.exam_type?.includes('WAEC') ? 'WAEC' : 'JAMB') as any,
          subject: selectedNote.subject,
          topicTitle: selectedNote.topic,
          category: selectedNote.class_level || 'Syllabus Core',
          description: selectedNote.summary_60s || 'Classroom notes and learning materials.',
          globalResources: [],
          subtopics: [{
            id: `sub-${selectedNote.id}`,
            subtopicTitle: selectedNote.subtopic || selectedNote.topic,
            order: 1,
            content: selectedNote.content,
            keyPoints: selectedNote.syllabus_objectives ? selectedNote.syllabus_objectives.split('\n') : [],
            formulas: selectedNote.key_formulas ? [selectedNote.key_formulas] : [],
            examTips: selectedNote.pro_tips_95 ? [selectedNote.pro_tips_95] : [],
            resources: [],
            questions: alignedQuestions,
            repeatedQuestions: alignedQuestions.slice(0, 3)
          }]
        };

        return (
          <div className="fixed inset-0 z-50 bg-[#F8F8F8] overflow-y-auto">
            <TopicNoteReader
              topic={matched}
              onBack={() => setIsFlashcardScreenOpen(false)}
            />
          </div>
        );
      })()}

      {/* ─── Floating Button: Share Highlighted Note Snippet ─── */}
      {floatingSelection && (
        <div className="fixed bottom-24 right-5 z-40 animate-bounce">
          <button
            type="button"
            onClick={() => handleOpenShareNote(floatingSelection)}
            className="px-4 py-2.5 rounded-full bg-[#001028] hover:bg-[#001028] text-[#F8C800] font-black text-xs shadow-2xl border-2 border-[#F8C800] flex items-center space-x-1.5 cursor-pointer touch-press"
            title="Share selected text as Study Card"
          >
            <span>📤</span>
            <span>Share Selected Text</span>
          </button>
        </div>
      )}

      {/* ─── MODAL: Share Note Snippet as Study Card ─── */}
      <ShareStudyCardModal
        isOpen={isShareModalOpen}
        onClose={() => {
          setIsShareModalOpen(false);
          setFloatingSelection('');
        }}
        mode="note"
        noteData={selectedNote ? {
          subject: selectedNote.subject,
          topic: selectedNote.topic,
          sectionTitle: selectedNote.subtopic || selectedNote.topic,
          snippetText: shareNoteSnippet || selectedNote.content,
          keyFormula: selectedNote.key_formulas
        } : null}
      />

      {/* ─── Bottom Navigation Bar ─── */}
      <BottomNavigation activeTab="notes" />
    </div>
  );
};
