import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { SyllabusTopic, SubtopicItem, TopicResource } from '../../data/topicResourcesData';
import { Question } from '../../data/questions';
import { RichNoteRenderer, renderLatexToHtml } from '../common/RichNoteRenderer';
import { ScientificDiagramViewer } from '../common/ScientificDiagramViewer';
import { EducationalDiagram } from '../design-system/EducationalDiagram';
import { notesProgressService } from '../../services/notesProgressService';

interface TopicNoteReaderProps {
  topic: SyllabusTopic;
  initialSubtopicId?: string;
  onBack: () => void;
  onOpenPracticeMode?: (topic: SyllabusTopic, questionCount: number) => void;
}

const getFormulasTitle = (subject: string) => {
  const s = (subject || '').toLowerCase();
  if (s.includes('chem')) return { icon: '⚗️', title: 'Key Chemical Reactions & Formulas' };
  if (s.includes('math') || s.includes('phys')) return { icon: '📐', title: 'Key Formulas & Equations' };
  if (s.includes('bio') || s.includes('agric')) return { icon: '🔬', title: 'Key Principles & Terminology' };
  if (s.includes('econ') || s.includes('account') || s.includes('commerce')) return { icon: '📊', title: 'Core Formulas & Principles' };
  return { icon: '📐', title: 'Key Formulas & Equations' };
};

const renderFormulaItem = (formula: string, idx: number) => {
  const colonIdx = formula.indexOf(':');
  let label = '';
  let mathPart = formula;
  if (colonIdx > 0 && colonIdx < 35 && !formula.slice(0, colonIdx).includes('\\')) {
    label = formula.slice(0, colonIdx).trim();
    mathPart = formula.slice(colonIdx + 1).trim();
  }

  const html = renderLatexToHtml(mathPart, false);

  return (
    <div
      key={idx}
      className="p-3.5 bg-white rounded-2xl border border-[#E8E8E8] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 overflow-x-auto"
    >
      {label && (
        <span className="text-xs font-black text-[#001028] shrink-0 tracking-wide">
          {label}
        </span>
      )}
      <div
        className="text-xs sm:text-sm font-semibold text-[#001028] overflow-x-auto py-0.5 select-text"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export const TopicNoteReader: React.FC<TopicNoteReaderProps> = ({
  topic,
  initialSubtopicId,
  onBack,
  onOpenPracticeMode
}) => {
  const { openAiTutor } = useApp();

  // Active subtopic state
  const [currentSubtopicId, setCurrentSubtopicId] = useState<string>(() => {
    if (initialSubtopicId) return initialSubtopicId;
    return topic.subtopics[0]?.id || '';
  });

  // Active view tab: 'note' | 'video' | 'resources' | 'questions' | 'practice'
  const [activeTab, setActiveTab] = useState<'note' | 'video' | 'resources' | 'questions' | 'practice'>('note');

  // Font size multiplier
  const [fontSizeScale, setFontSizeScale] = useState<number>(1);

  // Table of Contents Drawer State
  const [isTocOpen, setIsTocOpen] = useState<boolean>(false);

  // Active Video Modal State
  const [activeVideoToPlay, setActiveVideoToPlay] = useState<TopicResource | null>(null);

  // Active PDF Viewer Modal State
  const [activePdfToView, setActivePdfToView] = useState<TopicResource | null>(null);

  // In-Note Practice Quiz State
  const [practiceQuestionCount, setPracticeQuestionCount] = useState<number>(10);
  const [isPracticingNow, setIsPracticingNow] = useState<boolean>(false);
  const [practiceCurrentIndex, setPracticeCurrentIndex] = useState<number>(0);
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, number>>({});
  const [practiceFinished, setPracticeFinished] = useState<boolean>(false);
  const [practiceStartTime, setPracticeStartTime] = useState<number>(0);
  const [practiceDuration, setPracticeDuration] = useState<number>(0);

  // Interactive Single Question Answer State in [QUESTIONS] Tab
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, { selected: number; revealed: boolean }>>({});
  const [questionsFilter, setQuestionsFilter] = useState<'all' | 'repeated'>('all');

  // Local tracking states (reactive to notesProgressService)
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);

  // Current Subtopic
  const currentSubtopic: SubtopicItem = useMemo(() => {
    return topic.subtopics.find(s => s.id === currentSubtopicId) || topic.subtopics[0];
  }, [topic, currentSubtopicId]);

  const currentIndex = useMemo(() => {
    return topic.subtopics.findIndex(s => s.id === currentSubtopic?.id);
  }, [topic, currentSubtopic]);

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < topic.subtopics.length - 1;

  // Refresh reactive states when subtopic changes
  useEffect(() => {
    if (currentSubtopic) {
      setIsCompleted(notesProgressService.isSubtopicCompleted(currentSubtopic.id));
      setIsBookmarked(notesProgressService.isNoteBookmarked(currentSubtopic.id));
      setIsDownloaded(notesProgressService.isNoteDownloaded(currentSubtopic.id));
      notesProgressService.logNoteOpened(currentSubtopic.id, `${topic.topicTitle} - ${currentSubtopic.subtopicTitle}`);
      // Reset practice if switching
      setIsPracticingNow(false);
      setPracticeFinished(false);
      setPracticeAnswers({});
    }
  }, [currentSubtopic, topic.topicTitle]);

  // Overall Topic Progress
  const topicProgress = useMemo(() => {
    const ids = topic.subtopics.map(s => s.id);
    return notesProgressService.getTopicProgress(ids);
  }, [topic, isCompleted]);

  // Subtopic Navigation Handlers
  const handlePreviousSubtopic = () => {
    if (hasPrevious) {
      const prev = topic.subtopics[currentIndex - 1];
      setCurrentSubtopicId(prev.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextSubtopic = () => {
    if (hasNext) {
      const next = topic.subtopics[currentIndex + 1];
      setCurrentSubtopicId(next.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Completion toggle
  const handleToggleComplete = () => {
    if (!currentSubtopic) return;
    const nowCompleted = notesProgressService.toggleSubtopicCompletion(currentSubtopic.id);
    setIsCompleted(nowCompleted);
  };

  // Bookmark toggle
  const handleToggleBookmark = () => {
    if (!currentSubtopic) return;
    const nowBookmarked = notesProgressService.toggleNoteBookmark(currentSubtopic.id);
    setIsBookmarked(nowBookmarked);
  };

  // Download toggle
  const handleToggleDownload = () => {
    if (!currentSubtopic) return;
    const nowDownloaded = notesProgressService.toggleNoteDownloaded(currentSubtopic.id);
    setIsDownloaded(nowDownloaded);
  };

  // Aggregated topic questions
  const allTopicQuestions: Question[] = useMemo(() => {
    const list: Question[] = [];
    topic.subtopics.forEach(sub => {
      if (sub.questions) list.push(...sub.questions);
    });
    if (topic.repeatedQuestions) list.push(...topic.repeatedQuestions);

    // Deduplicate by question id
    const seen = new Set<number>();
    return list.filter(q => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
  }, [topic]);

  const topicRepeatedQuestions: Question[] = useMemo(() => {
    const list: Question[] = [];
    if (topic.repeatedQuestions) list.push(...topic.repeatedQuestions);
    topic.subtopics.forEach(sub => {
      if (sub.repeatedQuestions) list.push(...sub.repeatedQuestions);
    });
    const seen = new Set<number>();
    return list.filter(q => {
      if (seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
  }, [topic]);

  // Aggregated video resources
  const allVideos: TopicResource[] = useMemo(() => {
    const vids: TopicResource[] = [];
    topic.globalResources.filter(r => r.type === 'video').forEach(v => vids.push(v));
    topic.subtopics.forEach(s => {
      s.resources.filter(r => r.type === 'video').forEach(v => vids.push(v));
    });
    const seen = new Set<string>();
    return vids.filter(v => {
      if (seen.has(v.id)) return false;
      seen.add(v.id);
      return true;
    });
  }, [topic]);

  // Aggregated PDF & document resources
  const allPdfResources: TopicResource[] = useMemo(() => {
    const pdfs: TopicResource[] = [];
    topic.globalResources.filter(r => r.type === 'pdf').forEach(p => pdfs.push(p));
    topic.subtopics.forEach(s => {
      s.resources.filter(r => r.type === 'pdf').forEach(p => pdfs.push(p));
    });
    const seen = new Set<string>();
    return pdfs.filter(p => {
      if (seen.has(p.id)) return false;
      seen.add(p.id);
      return true;
    });
  }, [topic]);

  // Questions to display under [QUESTIONS] tab
  const displayedQuestions = useMemo(() => {
    if (questionsFilter === 'repeated') {
      return topicRepeatedQuestions.length > 0 ? topicRepeatedQuestions : allTopicQuestions.slice(0, 5);
    }
    return (currentSubtopic?.questions && currentSubtopic.questions.length > 0)
      ? currentSubtopic.questions
      : allTopicQuestions;
  }, [questionsFilter, currentSubtopic, allTopicQuestions, topicRepeatedQuestions]);

  // Start in-note practice
  const startTopicPractice = (count: number) => {
    setPracticeQuestionCount(count);
    setPracticeCurrentIndex(0);
    setPracticeAnswers({});
    setPracticeFinished(false);
    setPracticeStartTime(Date.now());
    setIsPracticingNow(true);
    setActiveTab('practice');
  };

  const submitPracticeQuiz = () => {
    const elapsed = Math.round((Date.now() - practiceStartTime) / 1000);
    setPracticeDuration(elapsed);
    setPracticeFinished(true);

    // Calculate score
    const targetQs = allTopicQuestions.slice(0, practiceQuestionCount);
    let correct = 0;
    targetQs.forEach((q, idx) => {
      if (practiceAnswers[idx] === q.answer) correct++;
    });
    notesProgressService.recordPracticeScore(topic.id, correct, targetQs.length);
  };

  // Context-aware AI prompt helper
  const handleAskAiAboutSubtopic = (promptPrefix?: string) => {
    openAiTutor();
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8] text-[#001028] flex flex-col font-sans select-none relative">
      {/* ─── 1. TOP HEADER & BREADCRUMBS (Dark Navy #001028) ─── */}
      <header className="sticky top-0 z-40 w-full bg-[#001028] text-white border-b border-[#001830] shadow-sm">
        {/* Top Control Bar */}
        <div className="h-14 px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-[#001830] hover:bg-[#001020] text-xs font-bold text-[#F8C800] border border-[#001020] transition cursor-pointer"
            >
              <span>←</span>
              <span>Back</span>
            </button>
            <div className="hidden sm:flex items-center space-x-1.5 text-xs text-slate-300">
              <span className="font-bold text-[#F8C800]">{topic.exam}</span>
              <span>•</span>
              <span>{topic.subject}</span>
              <span>•</span>
              <span className="truncate max-w-[140px] font-semibold">{topic.topicTitle}</span>
            </div>
          </div>

          {/* Action Tools: Font Scale, Bookmark, Offline Download, Table of Contents */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* Font scale buttons */}
            <div className="hidden xs:flex items-center space-x-0.5 bg-[#001830] rounded-xl px-1.5 py-1 border border-white/5">
              <button
                type="button"
                onClick={() => setFontSizeScale(prev => Math.max(0.85, prev - 0.1))}
                className="w-6 h-6 flex items-center justify-center text-[10px] font-bold text-slate-300 hover:text-white"
                title="Decrease font size"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontSizeScale(prev => Math.min(1.3, prev + 0.1))}
                className="w-6 h-6 flex items-center justify-center text-xs font-bold text-slate-300 hover:text-white"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              type="button"
              onClick={handleToggleBookmark}
              className={`w-8 h-8 rounded-xl flex items-center justify-center transition cursor-pointer ${
                isBookmarked
                  ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                  : 'bg-[#001830] text-slate-300 hover:text-[#F8C800] border border-white/5'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark this subtopic'}
            >
              ★
            </button>

            {/* Download for offline reading */}
            <button
              type="button"
              onClick={handleToggleDownload}
              className={`h-8 px-2.5 rounded-xl flex items-center space-x-1 text-xs font-bold transition cursor-pointer ${
                isDownloaded
                  ? 'bg-white text-[#001028] shadow-sm'
                  : 'bg-[#001830] text-slate-300 hover:text-white border border-white/5'
              }`}
              title={isDownloaded ? 'Saved for offline' : 'Download for offline'}
            >
              <span>{isDownloaded ? '✓' : '↓'}</span>
              <span className="hidden sm:inline text-[11px]">{isDownloaded ? 'Offline' : 'Save'}</span>
            </button>

            {/* Table of Contents Drawer Toggle */}
            <button
              type="button"
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="h-8 px-2.5 rounded-xl bg-[#001830] hover:bg-[#001020] border border-white/10 text-xs font-bold text-[#F8C800] flex items-center space-x-1 cursor-pointer"
              title="Table of Contents"
            >
              <span>☰</span>
              <span className="hidden sm:inline text-[11px]">Contents</span>
            </button>

            {/* Top Toolbar Ask AI Button */}
            <button
              type="button"
              onClick={() => handleAskAiAboutSubtopic()}
              className="h-8 px-2.5 rounded-xl bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] text-xs font-black flex items-center space-x-1 cursor-pointer shadow-xs transition shrink-0"
              title={`Ask StudyPlug AI about ${topic.topicTitle}`}
            >
              <span>🤖</span>
              <span className="text-[11px] font-bold">Ask AI</span>
            </button>
          </div>
        </div>

        {/* Topic Title & Progress Header */}
        <div className="px-4 sm:px-6 pt-1 pb-3 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#F8C800]">
                {topic.subject} • {topic.category || 'Core Syllabus'}
              </span>
              <h1 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
                {topic.topicTitle}
              </h1>
            </div>

            {/* Progress Badge */}
            <div className="flex items-center space-x-2 text-right">
              <div className="text-[11px] text-slate-300">
                <span className="font-bold text-[#F8C800]">{topicProgress.completedCount}</span> of {topicProgress.totalCount} subtopics ({topicProgress.percentage}%)
              </div>
            </div>
          </div>

          {/* Progress bar line */}
          <div className="w-full bg-[#001830] h-1.5 rounded-full overflow-hidden mt-2 border border-white/5">
            <div
              className="h-full bg-[#F8C800] transition-all duration-300 rounded-full"
              style={{ width: `${topicProgress.percentage}%` }}
            />
          </div>
        </div>

        {/* ─── 2. FIVE PRIMARY NAVIGATION TABS: [NOTE] [VIDEO] [RESOURCES] [QUESTIONS] [PRACTICE] ─── */}
        <div className="px-4 sm:px-6 flex space-x-1 overflow-x-auto no-scrollbar border-t border-white/5 pt-1 pb-2">
          {(
            [
              { id: 'note', label: 'Note', icon: '📖' },
              { id: 'video', label: `Video (${allVideos.length})`, icon: '🎥' },
              { id: 'resources', label: `Resources (${allPdfResources.length})`, icon: '📄' },
              { id: 'questions', label: `Questions (${allTopicQuestions.length})`, icon: '❓' },
              { id: 'practice', label: 'Practice', icon: '⚡' }
            ] as const
          ).map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[70px] py-1.5 px-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center justify-center space-x-1 select-none ${
                  isActive
                    ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                    : 'bg-[#001830] text-slate-300 hover:text-white border border-[#001020]'
                }`}
              >
                <span className="text-xs">{tab.icon}</span>
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* ─── 3. TABLE OF CONTENTS SLIDE-OUT DRAWER ─── */}
      {isTocOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsTocOpen(false)}
          />
          <div className="relative z-10 w-full max-w-xs bg-[#001028] text-white h-full shadow-2xl p-4 flex flex-col justify-between border-l border-[#001830] animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <h3 className="font-bold text-sm text-white">Table of Contents</h3>
                  <p className="text-[11px] text-[#F8C800]">{topic.topicTitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTocOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Subtopic Items */}
              <div className="mt-4 space-y-2 overflow-y-auto max-h-[75vh] pr-1">
                {topic.subtopics.map((sub, idx) => {
                  const isCurrent = sub.id === currentSubtopic?.id;
                  const isSubDone = notesProgressService.isSubtopicCompleted(sub.id);

                  return (
                    <button
                      key={sub.id}
                      type="button"
                      onClick={() => {
                        setCurrentSubtopicId(sub.id);
                        setIsTocOpen(false);
                        setActiveTab('note');
                      }}
                      className={`w-full text-left p-3 rounded-2xl transition cursor-pointer flex items-center space-x-2.5 border ${
                        isCurrent
                          ? 'bg-[#001830] border-[#F8C800] text-white shadow-sm'
                          : 'bg-[#001830]/50 border-white/5 text-slate-300 hover:bg-[#001830] hover:text-white'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        isSubDone ? 'bg-[#F8C800] text-[#001028]' : 'bg-white/10 text-white'
                      }`}>
                        {isSubDone ? '✓' : idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs font-bold truncate ${isCurrent ? 'text-[#F8C800]' : 'text-white'}`}>
                          {sub.subtopicTitle}
                        </p>
                        <p className="text-[10px] text-[#607080] truncate mt-0.5">
                          {sub.resources.length} resources • {sub.questions?.length || 0} questions
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 text-center">
              Tap any subtopic to jump directly
            </div>
          </div>
        </div>
      )}

      {/* ─── 4. MAIN CONTAINER BASED ON ACTIVE TAB ─── */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 pt-4 pb-20 sm:pb-24 space-y-6">

        {/* ─── TAB 1: [NOTE] READER ─── */}
        {activeTab === 'note' && currentSubtopic && (
          <div className="space-y-6 text-left" style={{ fontSize: `${fontSizeScale}rem` }}>
            {/* Unified Textbook Article Document */}
            <article className="bg-white rounded-3xl sm:rounded-[2rem] border border-slate-200 shadow-xs p-5 sm:p-8 md:p-10 space-y-7">
              {/* Header / Subtopic Meta */}
              <div className="border-b border-slate-100 pb-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-[#001028] text-xs font-black tracking-wide">
                    <span>📖</span>
                    <span>Subtopic {currentIndex + 1} of {topic.subtopics.length}</span>
                  </div>

                  {/* Mark Completed Button */}
                  <button
                    type="button"
                    onClick={handleToggleComplete}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 shrink-0 ${
                      isCompleted
                        ? 'bg-[#001028] text-[#F8C800]'
                        : 'bg-[#F8C800] text-[#001028] hover:bg-[#FFD21F] shadow-xs'
                    }`}
                  >
                    <span>{isCompleted ? '✓ Completed' : 'Mark Completed'}</span>
                  </button>
                </div>

                <h1 className="text-xl sm:text-2xl font-black text-[#001028] tracking-tight leading-snug">
                  {currentSubtopic.subtopicTitle}
                </h1>
              </div>

              {/* Core Syllabus Definitions (Glossary Callout) */}
              {currentSubtopic.definitions && currentSubtopic.definitions.length > 0 && (
                <section className="bg-[#F8F9FA] rounded-2xl p-4 sm:p-5 border-l-4 border-l-[#001028] border border-slate-200/80 space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-base">💡</span>
                    <h3 className="font-black text-xs uppercase tracking-wider text-[#001028]">
                      Core Syllabus Definitions
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentSubtopic.definitions.map(def => (
                      <div key={def.term} className="bg-white p-3.5 rounded-xl border border-slate-200/70 shadow-xs space-y-1">
                        <span className="text-xs font-black text-[#001028] block tracking-wide">{def.term}</span>
                        <p className="text-[12px] text-slate-600 leading-relaxed font-normal">{def.meaning}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Key Formulas / Reaction Matrix */}
              {currentSubtopic.formulas && currentSubtopic.formulas.length > 0 && (() => {
                const formulaHeader = getFormulasTitle(topic.subject);
                return (
                  <section className="bg-[#FAFBFD] rounded-2xl p-4 sm:p-5 border border-slate-200/80 space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-base">{formulaHeader.icon}</span>
                      <h3 className="font-black text-xs uppercase tracking-wider text-[#001028]">
                        {formulaHeader.title}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {currentSubtopic.formulas.map((f, i) => renderFormulaItem(f, i))}
                    </div>
                  </section>
                );
              })()}

              {/* Scientific & Educational Interactive Vector Diagrams */}
              <ScientificDiagramViewer
                subject={topic.subject}
                topic={topic.title}
                subtopic={currentSubtopic.subtopicTitle}
              />
              <EducationalDiagram
                topicTitle={`${topic.subject} ${currentSubtopic.subtopicTitle || ''} ${topic.title || ''}`}
              />

              {/* Primary Note Formatted Text Content */}
              <section className="note-body-content text-slate-800 leading-relaxed font-normal">
                <RichNoteRenderer
                  content={currentSubtopic.content}
                  topicTitle={currentSubtopic.subtopicTitle}
                  subject={topic.subject}
                />
              </section>

              {/* Diagram / Scientific Drawing (if present) */}
              {currentSubtopic.diagramUrl && (
                <figure className="rounded-2xl p-4 bg-[#F8F9FA] border border-slate-200 text-center space-y-2">
                  <img
                    src={currentSubtopic.diagramUrl}
                    alt={currentSubtopic.diagramCaption || 'Scientific Diagram'}
                    className="max-h-64 mx-auto rounded-xl object-contain border border-slate-200 bg-white"
                  />
                  {currentSubtopic.diagramCaption && (
                    <figcaption className="text-xs text-slate-500 font-medium italic">
                      {currentSubtopic.diagramCaption}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Step-by-Step Worked Exam Examples */}
              {currentSubtopic.examples && currentSubtopic.examples.length > 0 && (
                <section className="pt-2 space-y-4">
                  <div className="flex items-center space-x-2 border-b border-slate-100 pb-2">
                    <span className="text-lg">📝</span>
                    <h3 className="font-black text-sm uppercase tracking-wider text-[#001028]">
                      Worked Exam Examples
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {currentSubtopic.examples.map((ex, i) => (
                      <div key={i} className="bg-[#F8F9FA] p-4 sm:p-5 rounded-2xl border border-slate-200/90 space-y-3">
                        <span className="text-xs sm:text-sm font-black text-[#001028] block">
                          Example {i + 1}: {ex.title}
                        </span>
                        {ex.problem && (
                          <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
                            <span className="font-black text-[#001028] mr-1.5">Problem:</span>
                            {ex.problem}
                          </div>
                        )}
                        <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed space-y-1.5">
                          <span className="font-black text-emerald-800 text-xs uppercase tracking-wider block">
                            Step-by-Step Solution:
                          </span>
                          <div className="whitespace-pre-wrap font-sans text-slate-700">
                            {ex.solution}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Important Examiner Traps Alert (Soft Amber Callout, NOT pitch black) */}
              {currentSubtopic.examTips && currentSubtopic.examTips.length > 0 && (
                <section className="bg-amber-50/80 rounded-2xl p-4 sm:p-5 border-l-4 border-l-amber-500 border border-amber-200/80 space-y-2.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-base">⚠️</span>
                    <h3 className="font-black text-xs uppercase tracking-wider text-amber-950">
                      JAMB & WAEC Examiner Traps & Pro-Tips
                    </h3>
                  </div>
                  <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-amber-950">
                    {currentSubtopic.examTips.map((tip, idx) => (
                      <li key={idx} className="leading-relaxed font-medium">{tip}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Inline AI Helper Card at Bottom of Note */}
              <div className="bg-[#001028] text-white rounded-2xl p-4 sm:p-5 border border-[#001830] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center space-x-3 text-left">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <h4 className="text-xs font-black text-[#F8C800] uppercase tracking-wider">Need Clarity on this Subtopic?</h4>
                    <p className="text-xs text-slate-300">Ask StudyPlug AI to explain any formula, step, or concept in simpler terms.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleAskAiAboutSubtopic()}
                  className="px-4 py-2 rounded-xl bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] text-xs font-black transition cursor-pointer shrink-0 shadow-xs"
                >
                  Ask StudyPlug AI ⚡
                </button>
              </div>

              {/* Subtopic Navigation Arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handlePreviousSubtopic}
                  disabled={!hasPrevious}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                    hasPrevious
                      ? 'bg-slate-100 text-[#001028] hover:bg-slate-200 cursor-pointer shadow-xs'
                      : 'opacity-40 bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>←</span>
                  <span>Previous Subtopic</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextSubtopic}
                  disabled={!hasNext}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 ${
                    hasNext
                      ? 'bg-[#001028] text-[#F8C800] hover:bg-[#001830] cursor-pointer shadow-xs'
                      : 'opacity-40 bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>Next Subtopic</span>
                  <span>→</span>
                </button>
              </div>
            </article>

            {/* Questions from this Topic Callout */}
            <div className="bg-[#001830] text-white rounded-3xl p-5 sm:p-6 border border-[#001020] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#F8C800] text-[#001028]">
                    {allTopicQuestions.length} Questions Ready
                  </span>
                  <span className="text-xs text-slate-300">from this topic</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  Test Your Knowledge on {topic.topicTitle}
                </h3>
                <p className="text-xs text-slate-400">
                  Practice authentic UTME & WASSCE questions filtered specifically for this note.
                </p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab('questions')}
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition cursor-pointer"
                >
                  View Questions
                </button>
                <button
                  type="button"
                  onClick={() => startTopicPractice(10)}
                  className="px-5 py-2.5 rounded-xl bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] text-xs font-black shadow-md transition cursor-pointer flex items-center space-x-1"
                >
                  <span>Practice Now</span>
                  <span>⚡</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB 2: [VIDEO] LESSONS ─── */}
        {activeTab === 'video' && (
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between px-1">
              <div>
                <h3 className="font-bold text-base text-[#001028]">
                  Video Lessons on {topic.topicTitle}
                </h3>
                <p className="text-xs text-[#607080]">
                  Watch comprehensive video explanations and problem-solving sessions.
                </p>
              </div>
              <span className="text-xs font-bold bg-[#001028] text-[#F8C800] px-2.5 py-1 rounded-full">
                {allVideos.length} Videos
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {allVideos.map(vid => {
                const isWatched = notesProgressService.isVideoWatched(vid.id);
                return (
                  <div
                    key={vid.id}
                    className="bg-white rounded-3xl p-4 border border-[#E8E8E8] shadow-sm hover:border-[#F8C800] transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-start sm:items-center space-x-3.5">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-[#001028] shrink-0 border border-slate-200">
                        {vid.thumbnail ? (
                          <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#F8C800] text-2xl">▶</div>
                        )}
                        <span className="absolute bottom-1 right-1 text-[9px] font-mono bg-black/80 text-white px-1 rounded">
                          {vid.duration || '15 mins'}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <h4 className="font-bold text-sm text-[#001028]">
                            {vid.title}
                          </h4>
                          {isWatched && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#001028] text-[#F8C800]">
                              Watched ✓
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#607080] mt-1 line-clamp-2">
                          {vid.description}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        notesProgressService.markVideoWatched(vid.id);
                        setActiveVideoToPlay(vid);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-[#001028] hover:bg-[#001830] text-[#F8C800] text-xs font-bold shadow-sm transition cursor-pointer flex items-center justify-center space-x-1.5 shrink-0"
                    >
                      <span>▶</span>
                      <span>Watch Video</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── TAB 3: [RESOURCES] & PDF MATERIALS ─── */}
        {activeTab === 'resources' && (
          <div className="space-y-4 text-left">
            <div className="flex items-center justify-between px-1">
              <div>
                <h3 className="font-bold text-base text-[#001028]">
                  Learning Resources & Study Aids
                </h3>
                <p className="text-xs text-[#607080]">
                  Downloadable formula sheets, summary notes, and topic diagrams.
                </p>
              </div>
              <span className="text-xs font-bold bg-[#001028] text-[#F8C800] px-2.5 py-1 rounded-full">
                {allPdfResources.length} Documents
              </span>
            </div>

            <div className="space-y-3">
              {allPdfResources.map(doc => (
                <div
                  key={doc.id}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E8E8E8] shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#001028] text-[#F8C800] flex items-center justify-center text-xl shrink-0">
                      📄
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001028]">
                        {doc.title}
                      </h4>
                      <p className="text-xs text-[#607080] mt-0.5">
                        {doc.description}
                      </p>
                      {doc.fileSize && (
                        <span className="text-[10px] text-slate-400 font-mono mt-1 inline-block">
                          Size: {doc.fileSize} • PDF format
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setActivePdfToView(doc)}
                      className="flex-1 sm:flex-none px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-[#001028] text-xs font-bold transition cursor-pointer"
                    >
                      Preview
                    </button>
                    <a
                      href={doc.url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2 rounded-2xl bg-[#001028] hover:bg-[#001830] text-[#F8C800] text-xs font-bold transition cursor-pointer text-center"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── TAB 4: [QUESTIONS] FROM THIS TOPIC ─── */}
        {activeTab === 'questions' && (
          <div className="space-y-4 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
              <div>
                <h3 className="font-bold text-base text-[#001028]">
                  Past Questions from {topic.topicTitle}
                </h3>
                <p className="text-xs text-[#607080]">
                  Official questions that have appeared under this topic in past examinations.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex space-x-1.5">
                <button
                  type="button"
                  onClick={() => setQuestionsFilter('all')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    questionsFilter === 'all'
                      ? 'bg-[#001028] text-[#F8C800]'
                      : 'bg-white border border-slate-300 text-slate-600'
                  }`}
                >
                  All Questions ({allTopicQuestions.length})
                </button>
                <button
                  type="button"
                  onClick={() => setQuestionsFilter('repeated')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition cursor-pointer flex items-center space-x-1 ${
                    questionsFilter === 'repeated'
                      ? 'bg-[#F8C800] text-[#001028]'
                      : 'bg-white border border-slate-300 text-slate-600'
                  }`}
                >
                  <span>🔥 Repeated Qs</span>
                  <span>({topicRepeatedQuestions.length})</span>
                </button>
              </div>
            </div>

            {/* Questions List with Interactive Answer Selection */}
            <div className="space-y-4">
              {displayedQuestions.map((q, qIdx) => {
                const state = answeredQuestions[q.id];
                const isAnswered = state !== undefined;
                const isCorrect = isAnswered && state.selected === q.answer;

                return (
                  <div
                    key={q.id || qIdx}
                    className="bg-white rounded-3xl p-5 sm:p-6 border border-[#E8E8E8] shadow-sm space-y-4"
                  >
                    {/* Header: Exam & Year */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10.5px] font-black px-2.5 py-0.5 rounded-full bg-[#001028] text-[#F8C800]">
                          {q.exam || topic.exam} {q.year || 'Standard'}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">Question {qIdx + 1}</span>
                      </div>
                      {isAnswered && (
                        <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
                          {isCorrect ? 'Correct! ✓' : 'Incorrect ✕'}
                        </span>
                      )}
                    </div>

                    {/* Question Text */}
                    <p className="text-sm font-semibold text-[#001028] leading-relaxed">
                      {q.question}
                    </p>

                    {/* Options A, B, C, D */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {q.options.map((opt, optIdx) => {
                        let optStyle = 'bg-[#F8F8F8] border-[#E8E8E8] text-slate-800 hover:border-[#F8C800]';
                        if (isAnswered) {
                          if (optIdx === q.answer) {
                            optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                          } else if (optIdx === state.selected && !isCorrect) {
                            optStyle = 'bg-red-50 border-red-500 text-red-900';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => {
                              setAnsweredQuestions(prev => ({
                                ...prev,
                                [q.id]: { selected: optIdx, revealed: true }
                              }));
                            }}
                            className={`p-3 rounded-2xl border text-left text-xs font-medium transition cursor-pointer flex items-center space-x-2.5 ${optStyle}`}
                          >
                            <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center font-bold text-[11px] shrink-0">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box when answered */}
                    {isAnswered && q.explanation && (
                      <div className="p-3.5 rounded-2xl bg-[#001830] text-white text-xs border border-white/5 space-y-1">
                        <span className="font-bold text-[#F8C800] block">Detailed Explanation:</span>
                        <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── TAB 5: [PRACTICE] CBT MODE ─── */}
        {activeTab === 'practice' && (
          <div className="space-y-4 text-left">
            {!isPracticingNow && !practiceFinished && (
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8E8] shadow-sm space-y-5 text-center max-w-lg mx-auto">
                <div className="w-16 h-16 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center text-3xl mx-auto shadow-sm">
                  ⚡
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#001028]">
                    Practice {topic.topicTitle}
                  </h3>
                  <p className="text-xs text-[#607080] mt-1">
                    Select your preferred drill mode. Questions are generated exclusively from this topic.
                  </p>
                </div>

                {/* Option Selector */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[10, 20, 30].map(cnt => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setPracticeQuestionCount(cnt)}
                      className={`p-3 rounded-2xl border text-xs font-bold transition cursor-pointer ${
                        practiceQuestionCount === cnt
                          ? 'bg-[#001028] text-[#F8C800] border-[#001028]'
                          : 'bg-[#F8F8F8] border-slate-200 text-slate-700'
                      }`}
                    >
                      {cnt} Questions
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => startTopicPractice(practiceQuestionCount)}
                  className="w-full py-3.5 rounded-2xl bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-black text-sm shadow-md transition cursor-pointer flex items-center justify-center space-x-2"
                >
                  <span>Start Practice Session</span>
                  <span>→</span>
                </button>
              </div>
            )}

            {/* Active Practice CBT Session */}
            {isPracticingNow && !practiceFinished && (
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8E8] shadow-sm space-y-5">
                {/* Practice Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#607080] uppercase">
                      Practice Question {practiceCurrentIndex + 1} of {Math.min(practiceQuestionCount, allTopicQuestions.length)}
                    </span>
                    <h4 className="font-bold text-xs text-[#001028]">{topic.topicTitle}</h4>
                  </div>
                  <button
                    type="button"
                    onClick={submitPracticeQuiz}
                    className="px-3.5 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold cursor-pointer"
                  >
                    Finish Test
                  </button>
                </div>

                {/* Active Question */}
                {(() => {
                  const targetQs = allTopicQuestions.slice(0, practiceQuestionCount);
                  const q = targetQs[practiceCurrentIndex];
                  if (!q) return <div>No questions available for this topic yet.</div>;

                  return (
                    <div className="space-y-4">
                      <p className="text-sm font-bold text-[#001028] leading-relaxed">{q.question}</p>
                      <div className="space-y-2">
                        {q.options.map((opt, oIdx) => {
                          const isChosen = practiceAnswers[practiceCurrentIndex] === oIdx;
                          return (
                            <button
                              key={oIdx}
                              type="button"
                              onClick={() => {
                                setPracticeAnswers(prev => ({
                                  ...prev,
                                  [practiceCurrentIndex]: oIdx
                                }));
                              }}
                              className={`w-full p-3.5 rounded-2xl border text-left text-xs font-medium transition cursor-pointer flex items-center space-x-3 ${
                                isChosen
                                  ? 'bg-[#001028] text-white border-[#001028]'
                                  : 'bg-[#F8F8F8] border-slate-200 text-slate-800 hover:border-[#F8C800]'
                              }`}
                            >
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                                isChosen ? 'bg-[#F8C800] text-[#001028]' : 'bg-white border border-slate-300'
                              }`}>
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Navigation between practice questions */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => setPracticeCurrentIndex(prev => Math.max(0, prev - 1))}
                          disabled={practiceCurrentIndex === 0}
                          className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-[#001028] disabled:opacity-40 cursor-pointer"
                        >
                          ← Previous
                        </button>
                        {practiceCurrentIndex < targetQs.length - 1 ? (
                          <button
                            type="button"
                            onClick={() => setPracticeCurrentIndex(prev => prev + 1)}
                            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#001028] text-[#F8C800] hover:bg-[#001830] cursor-pointer"
                          >
                            Next →
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={submitPracticeQuiz}
                            className="px-5 py-2 rounded-xl text-xs font-black bg-[#F8C800] text-[#001028] hover:bg-[#FFD21F] cursor-pointer"
                          >
                            Submit Practice ✓
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Practice Result Screen with Seamless "Return to Note" Button */}
            {practiceFinished && (
              <div className="bg-white rounded-3xl p-6 border border-[#E8E8E8] shadow-sm space-y-5 text-center max-w-lg mx-auto">
                {(() => {
                  const targetQs = allTopicQuestions.slice(0, practiceQuestionCount);
                  let correct = 0;
                  targetQs.forEach((q, idx) => {
                    if (practiceAnswers[idx] === q.answer) correct++;
                  });
                  const accuracy = Math.round((correct / targetQs.length) * 100);

                  return (
                    <>
                      <div className="w-16 h-16 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center text-2xl font-black mx-auto">
                        {accuracy}%
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-[#001028]">
                          Topic Practice Report
                        </h3>
                        <p className="text-xs text-[#607080]">
                          {topic.topicTitle} • {targetQs.length} Questions
                        </p>
                      </div>

                      {/* Stat Metrics */}
                      <div className="grid grid-cols-3 gap-2 bg-[#F8F8F8] p-3 rounded-2xl border border-slate-200 text-xs">
                        <div>
                          <span className="text-[#607080] text-[10px] block">Correct</span>
                          <span className="font-bold text-emerald-600 text-sm">{correct}</span>
                        </div>
                        <div>
                          <span className="text-[#607080] text-[10px] block">Wrong</span>
                          <span className="font-bold text-red-600 text-sm">{targetQs.length - correct}</span>
                        </div>
                        <div>
                          <span className="text-[#607080] text-[10px] block">Time Used</span>
                          <span className="font-bold text-[#001028] text-sm">{practiceDuration}s</span>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setIsPracticingNow(false);
                            setPracticeFinished(false);
                            startTopicPractice(practiceQuestionCount);
                          }}
                          className="flex-1 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-[#001028] cursor-pointer"
                        >
                          Retry Practice
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setIsPracticingNow(false);
                            setPracticeFinished(false);
                            setActiveTab('note');
                          }}
                          className="flex-1 py-3 rounded-2xl bg-[#001028] hover:bg-[#001830] text-xs font-black text-[#F8C800] cursor-pointer"
                        >
                          Back to Note 📖
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        )}
      </main>



      {/* ─── 6. VIDEO MODAL PLAYER (Embedded inside StudyPlug) ─── */}
      {activeVideoToPlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setActiveVideoToPlay(null)}
          />
          <div className="relative z-10 w-full max-w-2xl bg-[#001028] rounded-3xl overflow-hidden shadow-2xl border border-[#001830] text-white">
            <div className="p-4 flex items-center justify-between border-b border-white/10">
              <h3 className="font-bold text-sm truncate pr-2 text-white">
                {activeVideoToPlay.title}
              </h3>
              <button
                type="button"
                onClick={() => setActiveVideoToPlay(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              {activeVideoToPlay.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideoToPlay.youtubeId}?autoplay=1`}
                  title={activeVideoToPlay.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
                  <span className="text-4xl">🎥</span>
                  <p className="text-xs">Video content ready for offline playback</p>
                </div>
              )}
            </div>
            <div className="p-4 text-xs text-slate-300">
              {activeVideoToPlay.description}
            </div>
          </div>
        </div>
      )}

      {/* ─── 7. PDF PREVIEW MODAL ─── */}
      {activePdfToView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={() => setActivePdfToView(null)}
          />
          <div className="relative z-10 w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 text-[#001028] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📄</span>
                <div>
                  <h3 className="font-bold text-sm text-[#001028]">{activePdfToView.title}</h3>
                  <span className="text-[10px] text-slate-500 font-mono">{activePdfToView.fileSize || 'PDF Document'}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActivePdfToView(null)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-600"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {activePdfToView.description}
            </p>

            <div className="bg-[#F8F8F8] p-4 rounded-2xl border border-slate-200 text-center space-y-2">
              <span className="text-xs font-bold text-[#001028] block">Document Contents Summary</span>
              <p className="text-[11px] text-[#607080]">
                Contains full syllabus summary, high-yield diagrams, and step-by-step model answers for {topic.topicTitle}.
              </p>
            </div>

            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => setActivePdfToView(null)}
                className="flex-1 py-2.5 rounded-2xl bg-slate-100 text-xs font-bold text-slate-700"
              >
                Close Preview
              </button>
              <a
                href={activePdfToView.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-2xl bg-[#001028] text-xs font-black text-[#F8C800] text-center"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicNoteReader;
