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

const ALL_SUBJECTS = [
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
  'Geography'
];

export const ClassroomNotesHub: React.FC = () => {
  const {
    startTestForSubject,
    selectedSubject: appSelectedSubject,
    setSelectedSubject,
    setActiveView,
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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoadingNotes, setIsLoadingNotes] = useState<boolean>(false);

  // Active view level in Notes flow: 'topics-list' (Screen 3) or 'note-detail' (Screens 4, 5, 6)
  const [viewLevel, setViewLevel] = useState<'topics-list' | 'note-detail'>('topics-list');

  // Sub-tabs on Screen 4: 'note' (Screen 4) | 'resources' (Screen 5) | 'questions' (Screen 6)
  const [activeNoteTab, setActiveNoteTab] = useState<NoteViewTab>('note');

  // Filter on Questions Tab (Screen 6)
  const [questionsDifficulty, setQuestionsDifficulty] = useState<string>('All');
  const [isRandomMode, setIsRandomMode] = useState<boolean>(false);

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

  // Audio Reader & Notebook Drawer
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isCelebrationActive, setIsCelebrationActive] = useState(false);

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
      limit: 20
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

      let matchesExam = true;
      if (activeExamTab === 'BECE') {
        matchesExam =
          n.exam_type.toUpperCase().includes('BECE') ||
          n.exam_type.toUpperCase().includes('JSCE') ||
          (n.class_level && (n.class_level.includes('JSS') || n.class_level.includes('Junior')));
        // If subject has no explicit BECE items, show curriculum topics adapted to BECE
        if (!notes.some(x => x.exam_type.toUpperCase().includes('BECE') || x.exam_type.toUpperCase().includes('JSCE'))) {
          matchesExam = true;
        }
      }

      return matchesSearch && matchesExam;
    });
  }, [notes, searchQuery, activeExamTab]);

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

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F7F9F8] min-h-screen text-[#10201D] select-none font-sans">
      {/* ══════════════════════════════════════════════════
          MOBILE HEADER (< 1024px)
      ══════════════════════════════════════════════════ */}
      <div className="lg:hidden">
        {viewLevel === 'topics-list' ? (
          // Screen 3 Header: Subject + Exam + Search
          <StudyPlugHeader
            showBack={true}
            onBack={() => setActiveView('subjects')}
            title={selectedSubjectFilter}
            subtitle={`${activeExamTab} • ${filteredNotes.length} topics`}
            rightAction={
              <button
                type="button"
                onClick={handleAskAiAboutTopic}
                className="w-8 h-8 rounded-full bg-[#003B32] border border-[#FFD600]/60 flex items-center justify-center text-[#FFD600] cursor-pointer"
                title="Ask AI"
              >
                🤖
              </button>
            }
          />
        ) : (
          // Screen 4/5/6 Header: Back to topics list + Topic Name
          <StudyPlugHeader
            showBack={true}
            onBack={() => setViewLevel('topics-list')}
            title={selectedNote?.subtopic || selectedNote?.topic || 'Classroom Note'}
            subtitle={`${selectedSubjectFilter} • ${selectedNote?.exam_type || 'JAMB UTME'}`}
            rightAction={
              <div className="flex items-center space-x-1.5">
                <button
                  type="button"
                  onClick={toggleAudio}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition cursor-pointer border ${
                    isPlayingAudio ? 'bg-[#FFD600] text-[#004D40] border-[#FFD600] animate-pulse' : 'bg-[#003B32] text-white border-white/20'
                  }`}
                  title="Listen to Note"
                >
                  {isPlayingAudio ? '🔊' : '🔈'}
                </button>
                <button
                  type="button"
                  onClick={handleAskAiAboutTopic}
                  className="w-8 h-8 rounded-full bg-[#003B32] border border-[#FFD600]/60 flex items-center justify-center text-[#FFD600] cursor-pointer"
                  title="Ask AI"
                >
                  🤖
                </button>
              </div>
            }
          />
        )}
      </div>

      {/* ══════════════════════════════════════════════════
          DESKTOP HEADER & HERO (>= 1024px)
      ══════════════════════════════════════════════════ */}
      <div className="hidden lg:block">
        <StudyPlugHeader
          showBrand={true}
          title="Classroom Notes &amp; Syllabus Laboratory"
          subtitle="Official Nigerian Secondary School Syllabi • WAEC • NECO • JAMB"
        />
      </div>

      {/* ══════════════════════════════════════════════════
          MAIN CONTENT AREA
      ══════════════════════════════════════════════════ */}
      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-3 pb-8 sm:max-w-xl lg:max-w-7xl lg:px-6 lg:py-6">
        {/* Desktop Subject Switcher Pills */}
        <div className="hidden lg:flex items-center space-x-2 overflow-x-auto no-scrollbar pb-3 mb-4 border-b border-[#E4EAE8]">
          {ALL_SUBJECTS.map((sub) => (
            <button
              key={sub}
              type="button"
              onClick={() => {
                setSelectedSubjectFilter(sub);
                setSelectedSubject(sub);
              }}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-150 cursor-pointer shrink-0 ${
                selectedSubjectFilter === sub
                  ? 'bg-[#004D40] text-[#FFD600] shadow-xs'
                  : 'bg-white text-[#66736F] hover:text-[#10201D] border border-[#E4EAE8]'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>

        {/* ─── DESKTOP DUAL-PANE VIEW (>= 1024px) ─── */}
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
                  className="w-full pl-8 pr-3 py-2 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] text-[12px] text-[#10201D] placeholder-[#8A9692] focus:outline-none focus:border-[#004D40]"
                />
              </div>

              {/* Exam Tabs */}
              <ExamPills
                exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
                activeExam={activeExamTab}
                onSelectExam={setActiveExamTab}
              />
            </div>

            {/* Topics Directory */}
            <div className="bg-white p-3 rounded-[14px] border border-[#E4EAE8] shadow-subtle max-h-[720px] overflow-y-auto space-y-2">
              <div className="px-2 py-1 text-[11px] font-bold text-[#66736F] uppercase tracking-wider flex items-center justify-between">
                <span>{selectedSubjectFilter} Syllabus</span>
                <span className="bg-[#E8F5E9] text-[#004D40] text-[10px] px-2 py-0.5 rounded-full font-bold">
                  {filteredNotes.length} Topics
                </span>
              </div>

              {filteredNotes.map((note, idx) => {
                const isSelected = selectedNote?.id === note.id || selectedNote?.topic === note.topic;
                return (
                  <div
                    key={note.id || note.topic}
                    onClick={() => setSelectedNote(note)}
                    className={`p-3 rounded-[12px] border cursor-pointer transition text-left space-y-1 ${
                      isSelected
                        ? 'bg-[#E8F5E9] border-[#004D40] shadow-xs'
                        : 'bg-white hover:bg-[#F7F9F8] border-[#E4EAE8]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-bold px-1.5 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[#004D40]">
                        {activeExamTab} {activeExamTab === 'BECE' ? 'JSCE' : 'SSCE/UTME'}
                      </span>
                      <span className="text-[#8A9692]">{idx + 1} of {filteredNotes.length}</span>
                    </div>
                    <h4 className={`text-[13px] font-semibold leading-tight ${isSelected ? 'text-[#004D40]' : 'text-[#10201D]'}`}>
                      {note.subtopic || note.topic}
                    </h4>
                    <p className="text-[11px] text-[#66736F] line-clamp-1 font-normal">
                      {note.summary_60s}
                    </p>
                  </div>
                );
              })}
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
                    <span className="font-extrabold text-[#004D40]">{selectedExamPapers.join(' • ')}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openPaperSelector(activeExamTab)}
                  className="px-2.5 py-1 rounded-[8px] bg-[#004D40] hover:bg-[#003B32] text-white text-[11px] font-bold transition cursor-pointer flex items-center space-x-1"
                >
                  <span>Select Papers (OBJ / Theory / Practical)</span>
                  <span className="text-[10px]">⚙️</span>
                </button>
              </div>
            )}

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
              <div className="bg-white p-6 rounded-[16px] border border-[#E4EAE8] shadow-subtle space-y-5 text-left animate-page-enter">
                {/* Section Badge */}
                <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#E8F5E9] text-[#004D40] border border-[#004D40]/20 animate-card-in">
                      {activeExamTab === 'BECE' ? 'BECE (Junior WAEC) Curriculum' : `${activeExamTab} Official Syllabus Standard`}
                    </span>
                    <span className="text-[14px] font-bold text-[#10201D]">
                      {selectedNote.subtopic || selectedNote.topic}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleAskAiAboutTopic}
                    className="px-3 py-1 rounded-[10px] bg-[#004D40] text-[#FFD600] text-[11px] font-bold hover:bg-[#003B32] transition cursor-pointer flex items-center space-x-1"
                  >
                    <span>🤖 Ask AI</span>
                  </button>
                </div>

                {/* Key Concepts bullet list */}
                {selectedNote.key_terms && selectedNote.key_terms.length > 0 && (
                  <div className="space-y-1.5">
                    <h4 className="text-[13px] font-bold text-[#10201D]">Key Concepts</h4>
                    <ul className="space-y-1 text-[13px] text-[#66736F]">
                      {selectedNote.key_terms.slice(0, 5).map((term, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#004D40]" />
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Formulas Card (Screen 4 Match) */}
                {(selectedNote.key_formulas || (selectedNote.topic && selectedNote.topic.toLowerCase().includes('motion'))) && (
                  <div className="bg-[#F8FAFC] rounded-[14px] p-3.5 border border-[#E2E8F0] space-y-2 text-left">
                    <div className="flex items-center space-x-2 text-[12px] font-bold text-[#004D40]">
                      <span>📐</span>
                      <span>Key Formulas &amp; Equations</span>
                    </div>
                    <div className="bg-white p-3 rounded-[10px] border border-[#CBD5E1] font-mono text-[12.5px] text-[#0F172A] space-y-1">
                      {selectedNote.key_formulas ? (
                        <div className="whitespace-pre-line leading-relaxed">{selectedNote.key_formulas}</div>
                      ) : (
                        <>
                          <div className="text-[#004D40] font-bold">• 1st Equation: v = u + at</div>
                          <div className="text-[#004D40] font-bold">• 2nd Equation: s = ut + ½at²</div>
                          <div className="text-[#004D40] font-bold">• 3rd Equation: v² = u² + 2as</div>
                          <div className="text-[#64748B] text-[11px] pt-1">• Peak Height: H_max = u² / (2g) | Flight Time: T = 2u / g</div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Educational Diagram */}
                <EducationalDiagram topicTitle={`${selectedNote.subject} ${selectedNote.subtopic || ''} ${selectedNote.topic || ''}`} />

                {/* Main Teaching Content */}
                <div className="pt-2 text-[13.5px] leading-relaxed text-[#10201D]">
                  <RichNoteRenderer content={selectedNote.content} />
                </div>

                {/* Examiner Tip Callout */}
                <div className="p-4 rounded-[12px] bg-[#E8F5E9] border border-[#004D40]/20 flex items-start space-x-3 text-left animate-page-enter">
                  <span className="text-lg">💡</span>
                  <div>
                    <h5 className="text-[12.5px] font-bold text-[#004D40]">Remember ({activeExamTab} Examiner Strategy)</h5>
                    <p className="text-[12px] text-[#10201D] mt-0.5 leading-relaxed">
                      {getExamTip(activeExamTab, selectedNote)}
                    </p>
                  </div>
                </div>

                {/* Bottom Navigation: Previous and Next */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E4EAE8]">
                  <button
                    type="button"
                    onClick={handlePrevNote}
                    disabled={currentIndex <= 0}
                    className="px-4 py-2 rounded-[12px] border border-[#E4EAE8] text-[13px] font-semibold text-[#10201D] hover:bg-[#F7F9F8] transition cursor-pointer disabled:opacity-40"
                  >
                    &lt; Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNextNote}
                    disabled={currentIndex >= filteredNotes.length - 1}
                    className="px-5 py-2 rounded-[12px] bg-[#004D40] text-white text-[13px] font-semibold hover:bg-[#003B32] transition cursor-pointer disabled:opacity-40"
                  >
                    Next Topic &rarr;
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
                  type="questions"
                  title="Past Questions (Topic Related)"
                  subtitle={`Practice ${alignedQuestions.length} real exam questions from 2010 - 2025`}
                  onClick={() => setActiveNoteTab('questions')}
                />
              </div>
            )}

            {/* TAB 3: Questions View */}
            {activeNoteTab === 'questions' && (
              <div className="space-y-4">
                {/* 🔥 Dare to Dare Challenge on Topic Banner */}
                <div
                  onClick={() => openDareToDare({ subject: selectedNote.subject, topic: selectedNote.topic, exam: activeExamTab })}
                  className="p-3.5 rounded-[16px] bg-gradient-to-r from-[#061F17] via-[#0B3528] to-[#124B3B] text-white border border-emerald-500/30 flex items-center justify-between cursor-pointer hover:border-amber-400/50 transition shadow-sm active:scale-[0.99]"
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
                    className="px-4 py-2 rounded-[12px] bg-[#004D40] text-white text-[12px] font-bold shadow-xs hover:bg-[#003B32] transition cursor-pointer touch-press"
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
                    className="px-4 py-2 rounded-[12px] bg-[#004D40] text-white text-[12px] font-bold shadow-xs hover:bg-[#003B32] transition cursor-pointer flex items-center space-x-1.5"
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
                        className="px-4 py-1.5 rounded-[10px] bg-[#004D40] text-white text-xs font-bold"
                      >
                        Load All {selectedNote.subject} Theory Questions
                      </button>
                    </div>
                  ) : (
                    alignedTheoryQuestions.map((tq, idx) => (
                      <div
                        key={tq.id || idx}
                        className="bg-white rounded-[16px] p-5 border border-[#E4EAE8] shadow-subtle space-y-3.5 text-left transition hover:border-[#004D40]/30"
                      >
                        <div className="flex items-center justify-between border-b border-[#E4EAE8] pb-2.5">
                          <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 rounded-full bg-[#004D40] text-white text-xs font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <span className="text-[13.5px] font-bold text-[#10201D]">
                              {tq.title}
                            </span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F5E9] text-[#004D40] border border-[#004D40]/15">
                            {tq.exam} {tq.year} • {tq.totalMarks} Marks
                          </span>
                        </div>

                        <p className="text-[13px] text-[#10201D] whitespace-pre-line leading-relaxed">
                          {tq.questionText}
                        </p>

                        <div className="bg-[#F7F9F8] rounded-[12px] p-3 border border-[#E4EAE8] space-y-1.5">
                          <span className="text-[11px] font-bold text-[#66736F] uppercase tracking-wider block">
                            Question Parts &amp; Mark Breakdown:
                          </span>
                          {tq.parts.map((p, pIdx) => (
                            <div key={pIdx} className="flex items-start justify-between text-xs gap-2">
                              <div className="space-x-1">
                                <span className="font-bold text-[#004D40]">{p.label}</span>
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
                            className="flex-1 py-2 px-3 rounded-[10px] bg-[#004D40] text-white text-xs font-bold hover:bg-[#003B32] transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-xs"
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
                            <div className="flex items-center justify-between text-xs font-bold text-[#004D40]">
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
                    className="px-4 py-2 rounded-[12px] bg-[#004D40] text-white text-[12px] font-bold shadow-xs hover:bg-[#003B32] transition cursor-pointer flex items-center space-x-1.5"
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
                        className="px-4 py-1.5 rounded-[10px] bg-[#004D40] text-white text-xs font-bold"
                      >
                        Load All {selectedNote.subject} Practical Questions
                      </button>
                    </div>
                  ) : (
                    alignedPracticalQuestions.map((pq, idx) => (
                      <div
                        key={pq.id || idx}
                        className="bg-white rounded-[16px] p-5 border border-[#E4EAE8] shadow-subtle space-y-3 text-left hover:border-[#004D40]/30 transition"
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
                          <span className="font-bold text-[12px] text-[#004D40] bg-[#E8F5E9] px-2.5 py-0.5 rounded-full border border-[#004D40]/20">
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
                                <span className="font-bold text-[#004D40]">{p.label}</span>
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
                            className="flex-1 py-2 px-3 rounded-[10px] bg-[#004D40] text-white text-xs font-bold hover:bg-[#003B32] transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-xs"
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
                            <div className="flex items-center justify-between text-xs font-bold text-[#004D40]">
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
          </div>
        </div>

        {/* ─── MOBILE VIEW (< 1024px) ─── */}
        <div className="lg:hidden space-y-4">
          {/* SCREEN 3: Topics List View */}
          {viewLevel === 'topics-list' && (
            <div className="space-y-3">
              {/* Search bar */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9692] text-sm">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search topics..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-[12px] bg-white border border-[#E4EAE8] text-[13px] text-[#10201D] placeholder-[#8A9692] focus:outline-none focus:border-[#004D40] shadow-subtle"
                />
              </div>

              {/* Exam pills */}
              <ExamPills
                exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
                activeExam={activeExamTab}
                onSelectExam={setActiveExamTab}
              />

              {/* Numbered Topic Cards */}
              <div className="space-y-2.5 pt-1">
                {filteredNotes.map((note, idx) => (
                  <TopicCard
                    key={note.id || note.topic}
                    index={idx + 1}
                    title={note.subtopic || note.topic}
                    subtopicsCount={3}
                    questionsCount={24 + (idx * 5)}
                    onClick={() => {
                      setSelectedNote(note);
                      setViewLevel('note-detail');
                      setActiveNoteTab('note');
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* SCREEN 4, 5, 6: Note Detail / Tabs View */}
          {viewLevel === 'note-detail' && (
            <div className="space-y-4 pb-12">
              {/* Standard Exam Papers Indicator (WAEC, NECO, NABTEB) */}
              {(activeExamTab === 'WAEC' || activeExamTab === 'NECO' || activeExamTab === 'NABTEB') && (
                <div className="bg-[#E8F5E9] border border-[#004D40]/20 rounded-[12px] p-2.5 flex items-center justify-between text-xs text-[#004D40]">
                  <div className="flex items-center space-x-1.5 truncate">
                    <span>📑</span>
                    <span className="font-bold truncate">{activeExamTab}: <span className="font-extrabold">{selectedExamPapers.join(' • ')}</span></span>
                  </div>
                  <button
                    type="button"
                    onClick={() => openPaperSelector(activeExamTab)}
                    className="px-2 py-0.5 rounded-[6px] bg-[#004D40] text-white text-[10px] font-bold shrink-0 ml-1 cursor-pointer"
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
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F5E9] text-[#004D40] border border-[#004D40]/20 animate-card-in">
                        {activeExamTab === 'BECE' ? 'BECE (Junior WAEC) Curriculum' : `${activeExamTab} Official Syllabus Standard`}
                      </span>
                      <span className="text-[13px] font-bold text-[#10201D]">
                        {selectedNote.subtopic || selectedNote.topic}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleAskAiAboutTopic}
                      className="text-[11px] font-bold text-[#004D40] flex items-center space-x-1 touch-press"
                    >
                      <span>🤖 Ask AI</span>
                    </button>
                  </div>

                  {/* Key Concepts bullet list */}
                  {selectedNote.key_terms && selectedNote.key_terms.length > 0 && (
                    <div className="bg-white rounded-[14px] p-3.5 border border-[#E4EAE8] shadow-subtle space-y-1.5 animate-card-in">
                      <h4 className="text-[12.5px] font-bold text-[#10201D]">Key Concepts</h4>
                      <ul className="space-y-1 text-[12.5px] text-[#66736F]">
                        {selectedNote.key_terms.slice(0, 5).map((term, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#004D40]" />
                            <span>{term}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Formulas Card (Screen 4 Match) */}
                  {(selectedNote.key_formulas || (selectedNote.topic && selectedNote.topic.toLowerCase().includes('motion'))) && (
                    <div className="bg-[#F8FAFC] rounded-[14px] p-3.5 border border-[#E2E8F0] space-y-2 text-left">
                      <div className="flex items-center space-x-2 text-[12px] font-bold text-[#004D40]">
                        <span>📐</span>
                        <span>Key Formulas &amp; Equations</span>
                      </div>
                      <div className="bg-white p-3 rounded-[10px] border border-[#CBD5E1] font-mono text-[12px] text-[#0F172A] space-y-1">
                        {selectedNote.key_formulas ? (
                          <div className="whitespace-pre-line leading-relaxed">{selectedNote.key_formulas}</div>
                        ) : (
                          <>
                            <div className="text-[#004D40] font-bold">• 1st Equation: v = u + at</div>
                            <div className="text-[#004D40] font-bold">• 2nd Equation: s = ut + ½at²</div>
                            <div className="text-[#004D40] font-bold">• 3rd Equation: v² = u² + 2as</div>
                            <div className="text-[#64748B] text-[11px] pt-1">• Peak Height: H_max = u² / (2g) | Flight Time: T = 2u / g</div>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Educational SVG Illustration Card */}
                  <EducationalDiagram topicTitle={`${selectedNote.subject} ${selectedNote.subtopic || ''} ${selectedNote.topic || ''}`} />

                  {/* Note Reader Body */}
                  <div className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle text-[13px] leading-relaxed text-[#10201D]">
                    <RichNoteRenderer content={selectedNote.content} />
                  </div>

                  {/* Remember Box */}
                  <div className="p-3.5 rounded-[12px] bg-[#E8F5E9] border border-[#004D40]/20 flex items-start space-x-2.5 animate-page-enter">
                    <span className="text-base">💡</span>
                    <div>
                      <h5 className="text-[12px] font-bold text-[#004D40]">Remember ({activeExamTab} Strategy)</h5>
                      <p className="text-[11.5px] text-[#10201D] mt-0.5 leading-snug">
                        {getExamTip(activeExamTab, selectedNote)}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Navigation Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={handlePrevNote}
                      disabled={currentIndex <= 0}
                      className="px-4 py-2 rounded-[12px] border border-[#E4EAE8] bg-white text-[12px] font-semibold text-[#10201D] shadow-subtle disabled:opacity-40 cursor-pointer"
                    >
                      &lt; Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNextNote}
                      disabled={currentIndex >= filteredNotes.length - 1}
                      className="px-4 py-2 rounded-[12px] bg-[#004D40] text-white text-[12px] font-semibold shadow-subtle disabled:opacity-40 cursor-pointer"
                    >
                      Next Topic &rarr;
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
                    className="p-3 rounded-[14px] bg-gradient-to-r from-[#061F17] via-[#0B3528] to-[#124B3B] text-white border border-emerald-500/30 flex items-center justify-between cursor-pointer hover:border-amber-400/50 transition shadow-xs active:scale-[0.99]"
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
                        className="rounded text-[#004D40] focus:ring-0"
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
                      className="w-full py-3 rounded-[12px] bg-[#004D40] text-white text-[13.5px] font-bold shadow-floating hover:bg-[#003B32] transition cursor-pointer flex items-center justify-center space-x-2"
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
                  <div className="bg-[#E8F5E9] rounded-[14px] p-3.5 border border-[#004D40]/20 flex items-center justify-between gap-2">
                    <div>
                      <h4 className="text-[12.5px] font-bold text-[#004D40]">
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
                      className="px-3 py-1.5 rounded-[10px] bg-[#004D40] text-white text-[11.5px] font-bold shadow-xs shrink-0"
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
                          className="px-3 py-1.5 rounded-[8px] bg-[#004D40] text-white text-[11px] font-bold"
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
                              <span className="w-5 h-5 rounded-full bg-[#004D40] text-white text-[11px] font-bold flex items-center justify-center">
                                {idx + 1}
                              </span>
                              <span className="text-[12.5px] font-bold text-[#10201D]">
                                {tq.title}
                              </span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F5E9] text-[#004D40] border border-[#004D40]/15">
                              {tq.exam} {tq.year} • {tq.totalMarks}M
                            </span>
                          </div>

                          <p className="text-[12.5px] text-[#10201D] whitespace-pre-line leading-relaxed">
                            {tq.questionText}
                          </p>

                          <div className="bg-[#F7F9F8] rounded-[10px] p-2.5 border border-[#E4EAE8] space-y-1">
                            <span className="text-[10px] font-bold text-[#66736F] uppercase tracking-wider block">
                              Question Parts:
                            </span>
                            {tq.parts.map((p, pIdx) => (
                              <div key={pIdx} className="flex items-start justify-between text-[11.5px] gap-2">
                                <div className="space-x-1">
                                  <span className="font-bold text-[#004D40]">{p.label}</span>
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
                              className="flex-1 py-2 rounded-[10px] bg-[#004D40] text-white text-[11.5px] font-bold flex items-center justify-center space-x-1 shadow-xs"
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
                              <span className="font-bold text-[#004D40] block">Official WAEC Scheme:</span>
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
                      className="px-2.5 py-1.5 rounded-[10px] bg-[#004D40] text-white text-[11px] font-bold shadow-xs hover:bg-[#003B32] transition cursor-pointer flex items-center space-x-1 shrink-0"
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
                          className="px-3 py-1 rounded-[8px] bg-[#004D40] text-white text-[11px] font-bold"
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
                            <span className="font-bold text-[11px] text-[#004D40] bg-[#E8F5E9] px-2 py-0.5 rounded-full">
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
                                  <span className="font-bold text-[#004D40]">{p.label}</span>
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
                              className="w-full py-2 rounded-[10px] bg-[#004D40] text-white text-[11px] font-bold shadow-xs hover:bg-[#003B32] transition cursor-pointer flex items-center justify-center space-x-1"
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

      {/* ─── Theory AI Paper Marker Modal ─── */}
      <TheoryAnswerMarkerModal
        question={activeTheoryQuestionForMarker}
        isOpen={isTheoryMarkerOpen}
        onClose={() => setIsTheoryMarkerOpen(false)}
      />

      {/* ─── Bottom Navigation Bar ─── */}
      <BottomNavigation activeTab="notes" />
    </div>
  );
};
