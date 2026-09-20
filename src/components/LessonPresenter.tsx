import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { LessonNote } from '../data/masterLessonNotes';
import { parseLessonContent, groupIntoSections, LessonBlock, LessonSection } from '../utils/lessonParser';
import { RichNoteRenderer } from './common/RichNoteRenderer';
import { ExamTargetModal } from './common/ExamTargetModal';
import { AnimatedProjectileVisual } from './visuals/AnimatedProjectileVisual';
import { MOTION_MASTER_SECTIONS, MOTION_MASTER_AUDIT } from '../data/motionMasterLesson';
import { ChalkboardContainer, BoardExplanation } from './common/BoardExplanation';

// ─── API config ─────────────────────────────────────────────────────────────
const API_BASE = 'https://eznonews.com.ng/studyplug-api';

// ─── Types ────────────────────────────────────────────────────────────────────
interface QuestionStat {
  total: number;
  byExam: Record<string, number>;
  byDifficulty: Record<string, number>;
  subtopicBreakdown?: Record<string, number>;
  topicGroup?: string;
  groupChallengeCount?: number;
  tierCounts?: { direct: number; related: number; challenge: number };
}

interface APIQuestion {
  id: number;
  subject: string;
  year: number;
  topic: string;
  subtopic?: string;
  topicGroup?: string;
  matchType?: string;
  secondaryConcepts?: string[];
  difficulty: string;
  text: string;
  imageSvg?: string;
  options: { key: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export interface StructuredSection {
  id: number;
  subject: string;
  topic: string;
  subtopic?: string;
  section_order: number;
  section_type: 'intro' | 'concept' | 'rule' | 'example' | 'worked_example' | 'formula' | 'exam_trap' | 'past_question' | 'solution' | 'summary';
  section_title: string;
  content: string;
  examples?: string[];
  formulas?: string[];
  exam_tips?: string[];
  question_ids?: number[];
  questions?: APIQuestion[];
  solutions?: string;
}

export interface CoverageAudit {
  status: 'COMPLETE' | 'INCOMPLETE';
  required_subtopics: number;
  covered_subtopics: number;
  coverage_percentage: number;
  is_published: boolean;
  covered: {
    code: string;
    name: string;
    explanation: boolean;
    example: boolean;
    past_question: boolean;
    solution: boolean;
    section_order: number;
  }[];
  missing: {
    code: string;
    name: string;
    reasons: string[];
  }[];
}

// ─── Progress persistence ────────────────────────────────────────────────────
const PROG_KEY = 'sp_lesson_progress';
function loadProgress(): Record<string, { blockIdx: number; pct: number; lastSection: string }> {
  try { return JSON.parse(localStorage.getItem(PROG_KEY) || '{}'); } catch { return {}; }
}
function saveProgress(noteId: number, blockIdx: number, pct: number, lastSection: string) {
  const all = loadProgress();
  all[String(noteId)] = { blockIdx, pct, lastSection };
  localStorage.setItem(PROG_KEY, JSON.stringify(all));
}

// ─── Difficulty badge ─────────────────────────────────────────────────────────
const DiffBadge: React.FC<{ d: string }> = ({ d }) => {
  const map: Record<string, string> = { Easy: 'bg-emerald-100 text-emerald-800', Medium: 'bg-amber-100 text-amber-800', Hard: 'bg-rose-100 text-rose-800' };
  return <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${map[d] || 'bg-slate-100 text-slate-600'}`}>{d}</span>;
};

// ─── Quick-check MCQ component ────────────────────────────────────────────────
const QuickCheckCard: React.FC<{ block: LessonBlock }> = ({ block }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const correct = block.answer ?? '';
  const isRight = selected === correct;

  return (
    <div className="space-y-4 select-text">
      <div className="flex items-center gap-2 pb-1">
        <span className="text-lg">⚡</span>
        <span className="text-xs font-black text-[#FFCC00] uppercase tracking-wider">Quick Check</span>
        {block.difficulty && <DiffBadge d={block.difficulty} />}
      </div>
      <p className="text-sm sm:text-base font-medium text-white leading-relaxed">{block.question}</p>
      <div className="space-y-2">
        {(block.options || []).map(opt => {
          let cls = 'border-white/20 bg-black/35 text-slate-100 hover:border-[#FFCC00] hover:bg-black/50';
          if (selected && revealed) {
            if (opt.key === correct) cls = 'border-emerald-400 bg-emerald-950/70 text-emerald-200 font-bold';
            else if (opt.key === selected && opt.key !== correct) cls = 'border-rose-400 bg-rose-950/70 text-rose-300 line-through opacity-70';
          } else if (selected === opt.key) {
            cls = 'border-[#FFCC00] bg-black/60 text-[#FFCC00] font-bold';
          }
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => { if (!revealed) setSelected(opt.key); }}
              disabled={revealed}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl border transition text-left cursor-pointer ${cls}`}
            >
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 border border-current shrink-0 text-xs font-black">{opt.key}</span>
              <span className="text-sm leading-snug">{opt.text}</span>
            </button>
          );
        })}
      </div>
      {selected && !revealed && (
        <button type="button" onClick={() => setRevealed(true)}
          className="w-full py-2.5 rounded-xl bg-[#FFCC00] text-[#0E382B] text-sm font-black hover:bg-[#FFEA79] transition cursor-pointer shadow-md">
          Check Answer
        </button>
      )}
      {revealed && (
        <div className={`rounded-2xl p-4 border ${isRight ? 'bg-emerald-950/70 border-emerald-400/60 text-emerald-100' : 'bg-rose-950/70 border-rose-400/60 text-rose-100'}`}>
          <p className="font-black text-sm">
            {isRight ? '✅ Correct!' : `❌ Incorrect — Correct answer: ${correct}`}
          </p>
          {block.explanation && <p className="text-xs text-slate-200 mt-2 leading-relaxed font-serif">{block.explanation}</p>}
        </div>
      )}
    </div>
  );
};

// ─── Live Past Question card ───────────────────────────────────────────────────
const PastQuestionCard: React.FC<{ q: APIQuestion; number: number }> = ({ q, number }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const correct = q.correctAnswer;

  const subjLower = (q.subject || '').toLowerCase();
  const isWaec = subjLower.includes('waec');
  const isNeco = subjLower.includes('neco');
  const examYear = q.year ? ` ${q.year}` : '';

  const boardStyle = isWaec
    ? {
        border: 'border-blue-400/50 bg-black/40',
        badge: 'bg-blue-600 text-white',
        label: `📘 WAEC PAST QUESTION${examYear}`,
        tag: 'WASSCE Standard'
      }
    : isNeco
    ? {
        border: 'border-amber-400/50 bg-black/40',
        badge: 'bg-amber-600 text-white',
        label: `📗 NECO PAST QUESTION${examYear}`,
        tag: 'SSCE Standard'
      }
    : {
        border: 'border-[#FFCC00]/50 bg-black/40',
        badge: 'bg-[#FFCC00] text-[#0E382B]',
        label: `🎯 JAMB PAST QUESTION${examYear}`,
        tag: 'UTME CBT Standard'
      };

  return (
    <div className={`rounded-2xl border-2 ${boardStyle.border} p-5 space-y-4 shadow-md transition select-text`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${boardStyle.badge}`}>
            {boardStyle.label}
          </span>
          <span className="text-[10px] font-bold text-slate-300 truncate max-w-[200px]">
            • {q.topic || q.subject}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-200 text-[10px] font-bold">
            {boardStyle.tag}
          </span>
          <DiffBadge d={q.difficulty} />
        </div>
      </div>
      <p className="text-sm font-semibold text-white leading-relaxed">{q.text}</p>
      {q.imageSvg && (
        <div className="my-3 p-3 bg-white/5 rounded-xl border border-white/10 flex justify-center overflow-x-auto" dangerouslySetInnerHTML={{ __html: q.imageSvg }} />
      )}
      <div className="space-y-2">
        {q.options.map(opt => {
          let cls = 'border-white/20 bg-black/30 text-slate-100 hover:border-[#FFCC00] hover:bg-black/50';
          if (revealed) {
            if (opt.key === correct) cls = 'border-emerald-400 bg-emerald-950/70 text-emerald-200 font-bold';
            else if (opt.key === selected) cls = 'border-rose-400 bg-rose-950/70 text-rose-300 opacity-70 line-through';
          } else if (selected === opt.key) {
            cls = 'border-[#FFCC00] bg-black/60 text-[#FFCC00] font-bold';
          }
          return (
            <button key={opt.key} type="button" onClick={() => { if (!revealed) setSelected(opt.key); }} disabled={revealed}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition text-left cursor-pointer text-xs ${cls}`}>
              <span className="w-6 h-6 flex items-center justify-center rounded-full border border-current shrink-0 font-black">{opt.key}</span>
              <span className="leading-relaxed">{opt.text}</span>
            </button>
          );
        })}
      </div>
      {selected && !revealed && (
        <button type="button" onClick={() => setRevealed(true)}
          className="w-full py-2.5 rounded-xl bg-[#FFCC00] text-[#0E382B] text-xs font-black cursor-pointer hover:bg-[#FFEA79] transition shadow-md">
          Check Answer
        </button>
      )}
      {revealed && (
        <div className={`rounded-xl p-3.5 text-xs ${selected === correct ? 'bg-emerald-950/70 text-emerald-100 border border-emerald-400/60' : 'bg-rose-950/70 text-rose-100 border border-rose-400/60'}`}>
          <p className="font-black mb-1">{selected === correct ? '✅ Correct!' : `❌ Incorrect — Correct Answer: ${correct}`}</p>
          {q.explanation && <p className="leading-relaxed text-slate-200 mt-1 font-serif">{q.explanation}</p>}
        </div>
      )}
    </div>
  );
};

// ─── Structured Slide Card ─────────────────────────────────────────────────────
const StructuredSlideCard: React.FC<{
  section: StructuredSection;
  totalSections: number;
  textScale: number;
  examTargets?: string[];
  examMode?: 'study' | 'jamb' | 'waec' | 'mixed';
  onOpenSubtopicPractice?: (subt: string) => void;
  note?: LessonNote;
}> = ({ section, totalSections, textScale, examTargets = ['JAMB'], examMode = 'study', onOpenSubtopicPractice, note }) => {
  const isProjectile = Boolean(
    section.subtopic?.toLowerCase().includes('projectile') ||
    section.section_title?.toLowerCase().includes('projectile')
  );
  const typeStyles: Record<string, { icon: string; label: string; badgeCls: string }> = {
    intro:          { icon: '📘', label: 'Introduction', badgeCls: 'bg-[#FFCC00] text-[#0E382B]' },
    concept:        { icon: '📖', label: 'Concept & Principle', badgeCls: 'bg-white/20 text-white' },
    rule:           { icon: '⚖️', label: 'Official Syllabus Rule', badgeCls: 'bg-[#FFCC00] text-[#0E382B]' },
    worked_example: { icon: '✏️', label: 'Worked Example', badgeCls: 'bg-amber-500 text-slate-950 font-black' },
    formula:        { icon: '📐', label: 'Formula & Equation', badgeCls: 'bg-[#C4823F] text-white' },
    exam_trap:      { icon: '⚠️', label: 'Chief Examiner Alert', badgeCls: 'bg-rose-600 text-white' },
    summary:        { icon: '🎯', label: 'Masterclass Summary', badgeCls: 'bg-[#FFCC00] text-[#0E382B]' },
    past_question:  { icon: '📝', label: 'Past Examination Practice', badgeCls: 'bg-blue-600 text-white' },
  };

  const style = typeStyles[section.section_type] || typeStyles.concept;

  return (
    <ChalkboardContainer
      subject={note?.subject || section.subject || 'Physics'}
      topic={note?.topic || section.topic || 'Classroom Lesson'}
      sectionTitle={section.section_title}
      subtopic={section.subtopic}
      sectionBadge={`Section ${section.section_order} of ${totalSections}`}
      textScale={textScale}
    >
      <div className="space-y-6">
        {/* Main Content Body */}
        <div className="text-white leading-relaxed font-normal">
          <RichNoteRenderer content={section.content} chalkboard={true} />
        </div>

        {/* 🚀 Interactive Educational Animated Visual */}
        {isProjectile && (
          <div className="pt-2">
            <AnimatedProjectileVisual />
          </div>
        )}

        {/* Classroom Formula Vault */}
        {section.formulas && section.formulas.length > 0 && (
          <div className="rounded-2xl p-4 bg-black/40 border-2 border-[#FFCC00]/50 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-[#FFCC00]">
              <span>📐</span>
              <span>Classroom Formula Vault & Equations</span>
            </div>
            <div className="space-y-1.5">
              {section.formulas.map((f, fi) => (
                <div key={fi} className="font-mono text-xs sm:text-sm font-bold bg-black/60 p-2.5 rounded-xl border border-white/20 select-text text-white">
                  {f}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Classroom Examples */}
        {section.examples && section.examples.length > 0 && (
          <div className="space-y-2.5">
            <div className="flex items-center space-x-2 text-xs font-black text-[#FFCC00] uppercase tracking-wider">
              <span>💡</span>
              <span>Syllabus Examples & Real Applications</span>
            </div>
            <div className="space-y-2">
              {section.examples.map((ex, ei) => (
                <div key={ei} className="p-3.5 rounded-2xl bg-black/35 border border-white/15 shadow-sm flex items-start space-x-3">
                  <span className="w-6 h-6 rounded-lg bg-[#FFCC00] text-[#0E382B] text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {ei + 1}
                  </span>
                  <div className="flex-1 text-xs sm:text-sm text-slate-100 leading-relaxed font-serif select-text">
                    <RichNoteRenderer content={ex} chalkboard={true} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Chief Examiner Trap Alert with Exam Target Adaptation */}
        {section.exam_tips && section.exam_tips.length > 0 && (
          <div className="space-y-2">
            {section.exam_tips.map((tip, ti) => {
              const isJambTip = tip.toLowerCase().includes('jamb');
              const isWaecTip = tip.toLowerCase().includes('waec');
              const alertCls = isWaecTip
                ? 'bg-blue-950/70 border-blue-400/60 text-blue-100 border-l-blue-400'
                : isJambTip
                ? 'bg-emerald-950/70 border-emerald-400/60 text-emerald-100 border-l-[#FFCC00]'
                : 'bg-amber-950/70 border-amber-400/60 text-amber-100 border-l-amber-400';

              const title = isWaecTip
                ? '📘 WAEC Chief Examiner Theory & Marking Scheme Alert'
                : isJambTip
                ? '🎯 JAMB UTME Speed Strategy & CBT Trap Alert'
                : '⚠️ National Examination Council & Examiner Alert';

              return (
                <div key={ti} className={`p-4 rounded-2xl border-2 shadow-xs space-y-1.5 ${alertCls}`}>
                  <div className="flex items-center space-x-2 text-xs font-black uppercase tracking-wider text-[#FFCC00]">
                    <span>{isWaecTip ? '📘' : isJambTip ? '🎯' : '⚠️'}</span>
                    <span>{title}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-medium leading-relaxed pl-3 border-l-2 border-current">
                    {tip}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Attached Authentic Past Questions with Exam Target Prioritization */}
        {section.questions && section.questions.length > 0 && (() => {
          let displayQuestions = section.questions;
          if (examMode === 'jamb') {
            displayQuestions = section.questions.filter(q => !q.subject.toLowerCase().includes('waec'));
          } else if (examMode === 'waec') {
            displayQuestions = section.questions.filter(q => q.subject.toLowerCase().includes('waec'));
          }

          if (displayQuestions.length === 0) {
            displayQuestions = section.questions;
          }

          return (
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="text-base">🎯</span>
                  <span className="text-xs font-black text-[#FFCC00] uppercase tracking-wider">
                    Target Exam Verification ({displayQuestions.length} Question{displayQuestions.length > 1 ? 's' : ''})
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-black text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2.5 py-0.5 rounded-full">
                    100% Authentic Past Exam
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                {displayQuestions.map((q, qi) => (
                  <PastQuestionCard key={q.id} q={q} number={qi + 1} />
                ))}
              </div>
            </div>
          );
        })()}

        {/* Subtopic Practice Trigger */}
        {onOpenSubtopicPractice && section.subtopic && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenSubtopicPractice(section.subtopic || '')}
              className="w-full py-2.5 px-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-[#FFCC00]/40 text-[#FFCC00] text-xs font-black transition flex items-center justify-between cursor-pointer group shadow-xs"
            >
              <span className="flex items-center space-x-2">
                <span className="text-sm">🎯</span>
                <span>More Questions on <strong>{section.subtopic}</strong></span>
              </span>
              <span className="text-[#FFCC00] font-black group-hover:translate-x-0.5 transition-transform">
                Practice Question Bank →
              </span>
            </button>
          </div>
        )}
      </div>
    </ChalkboardContainer>
  );
};

// ─── Block Slide renderer (Fallback for unmigrated markdown) ─────────────────
const BlockSlide: React.FC<{
  block: LessonBlock;
  textScale: number;
  onOpenSubtopicPractice?: (subt: string) => void;
  note?: LessonNote;
  totalSections?: number;
}> = ({ block, textScale, onOpenSubtopicPractice, note, totalSections }) => {
  const typeStyles: Record<string, { icon: string; label: string; badgeCls: string }> = {
    intro:         { icon: '📘', label: 'Introduction', badgeCls: 'bg-[#FFCC00] text-[#0E382B]' },
    teaching:      { icon: '📖', label: 'Lesson', badgeCls: 'bg-white/20 text-white' },
    definition:    { icon: '📌', label: 'Definition', badgeCls: 'bg-indigo-600 text-white' },
    formula:       { icon: '📐', label: 'Formula', badgeCls: 'bg-[#C4823F] text-white' },
    worked_example:{ icon: '✏️', label: 'Worked Example', badgeCls: 'bg-amber-500 text-slate-950 font-black' },
    exam_alert:    { icon: '⚠️', label: 'Exam Alert', badgeCls: 'bg-rose-600 text-white' },
    comparison:    { icon: '⚖️', label: 'Comparison', badgeCls: 'bg-blue-600 text-white' },
    quick_check:   { icon: '⚡', label: 'Quick Check', badgeCls: 'bg-amber-400 text-slate-950 font-black' },
    practice:      { icon: '📝', label: 'Practice', badgeCls: 'bg-emerald-600 text-white' },
    summary:       { icon: '🎯', label: 'Exam Focus', badgeCls: 'bg-[#FFCC00] text-[#0E382B]' },
  };
  const style = typeStyles[block.type] || typeStyles.teaching;

  return (
    <ChalkboardContainer
      subject={note?.subject || 'Physics'}
      topic={note?.topic || 'Classroom Lesson'}
      sectionTitle={block.sectionTitle}
      subtopic={block.title && block.title !== block.sectionTitle ? block.title : undefined}
      sectionBadge={totalSections ? `Section ${block.sectionIndex + 1} of ${totalSections}` : undefined}
      textScale={textScale}
    >
      <div className="space-y-6">

        {block.type === 'quick_check' ? (
          <QuickCheckCard block={block} />
        ) : (
          <div className="text-white leading-relaxed font-normal">
            <RichNoteRenderer content={block.content} chalkboard={true} />
          </div>
        )}

        {onOpenSubtopicPractice && (block.type === 'worked_example' || block.type === 'teaching' || block.type === 'formula') && (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenSubtopicPractice(block.sectionTitle)}
              className="w-full py-2.5 px-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-[#FFCC00]/40 text-[#FFCC00] text-xs font-black transition flex items-center justify-between cursor-pointer group shadow-xs"
            >
              <span className="flex items-center space-x-2">
                <span className="text-sm">🎯</span>
                <span>Try Real Past Questions on <strong>{block.sectionTitle}</strong></span>
              </span>
              <span className="text-[#FFCC00] font-black group-hover:translate-x-0.5 transition-transform">Solve Past Questions →</span>
            </button>
          </div>
        )}
      </div>
    </ChalkboardContainer>
  );
};

// ─── Lesson Overview ─────────────────────────────────────────────────────────
interface OverviewProps {
  note: LessonNote;
  sections: LessonSection[];
  structuredSections: StructuredSection[] | null;
  coverageAudit?: CoverageAudit | null;
  examTargets: string[];
  onOpenExamModal: () => void;
  questionStat: QuestionStat | null;
  loadingStats: boolean;
  savedProgress: { blockIdx: number; pct: number; lastSection: string } | null;
  onStart: (mode: 'study' | 'revision' | 'exam', startBlock?: number) => void;
  onOpenPractice: (subtopic?: string) => void;
  onBack: () => void;
  onPrint: () => void;
}

const LessonOverview: React.FC<OverviewProps> = ({
  note,
  sections,
  structuredSections,
  coverageAudit,
  examTargets,
  onOpenExamModal,
  questionStat,
  loadingStats,
  savedProgress,
  onStart,
  onOpenPractice,
  onBack,
  onPrint
}) => {
  const isStructured = Boolean(structuredSections && structuredSections.length > 0);
  const totalCount = isStructured ? structuredSections!.length : sections.length;
  const totalMins = isStructured
    ? structuredSections!.length * 4
    : sections.reduce((s, sec) => s + sec.estimatedMinutes, 0);

  const completedSubtopics = useMemo(() => {
    if (!savedProgress || typeof savedProgress.blockIdx !== 'number') return [];
    const done: number[] = [];
    for (let i = 0; i <= savedProgress.blockIdx && i < totalCount; i++) {
      done.push(i);
    }
    return done;
  }, [savedProgress, totalCount]);

  const JAMB  = questionStat ? Object.entries(questionStat.byExam).filter(([k]) => k.toLowerCase().includes('jamb')).reduce((s,[,v])=>s+v,0) : 0;
  const WAEC  = questionStat ? Object.entries(questionStat.byExam).filter(([k]) => k.toLowerCase().includes('waec')).reduce((s,[,v])=>s+v,0) : 0;
  const NECO  = questionStat ? Object.entries(questionStat.byExam).filter(([k]) => k.toLowerCase().includes('neco')).reduce((s,[,v])=>s+v,0) : 0;

  return (
    <div className="min-h-screen bg-[#F0F4F8] pb-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0E382B] to-emerald-800 text-white px-6 sm:px-10 pt-10 pb-14">
        <div className="flex items-center justify-between mb-6">
          <button type="button" onClick={onBack} className="flex items-center gap-1.5 text-emerald-300 text-xs font-bold hover:text-white transition cursor-pointer">
            ← Back to Syllabus
          </button>
          <button
            type="button"
            onClick={onPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition cursor-pointer"
          >
            <span>🖨️</span>
            <span>Print Study Handout</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{note.subject} • {note.exam_type}</span>
          {isStructured && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#FFCC00] text-[#0E382B] text-[10px] font-black uppercase tracking-wider shadow-2xs">
              ✨ Interactive PowerPoint Masterclass
            </span>
          )}
          {questionStat?.topicGroup && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-700/60 border border-emerald-500/40 text-[#FFCC00] text-[10px] font-black uppercase tracking-wider">
              {questionStat.topicGroup} Unit
            </span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-3">{note.topic}</h1>
        <p className="text-emerald-200 text-sm leading-relaxed max-w-2xl">{note.summary_60s}</p>
        <div className="flex flex-wrap items-center gap-4 mt-5 text-sm">
          <span className="flex items-center gap-1.5 text-emerald-300 font-medium"><span>📖</span> {totalCount} sections</span>
          <span className="flex items-center gap-1.5 text-emerald-300 font-medium"><span>⏱</span> ~{totalMins} min</span>
          {!loadingStats && questionStat && <span className="flex items-center gap-1.5 text-yellow-300 font-bold"><span>📝</span> {questionStat.total} verified past questions</span>}
          {loadingStats && <span className="text-emerald-400 text-xs animate-pulse">Loading verified question bank...</span>}
        </div>
      </div>

      {/* Stats row */}
      {!loadingStats && questionStat && questionStat.total > 0 && (
        <div className="mx-4 sm:mx-10 -mt-6 bg-white rounded-2xl shadow-sm border border-slate-100 grid grid-cols-3 divide-x divide-slate-100">
          {[['🎯 JAMB', JAMB], ['📘 WAEC', WAEC], ['📗 NECO', NECO]].map(([label, count]) => (
            <div key={label as string} className="p-4 text-center">
              <div className="text-xl font-black text-[#0E382B]">{count}</div>
              <div className="text-[10px] font-bold text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="px-4 sm:px-10 mt-6 space-y-5">
        {/* 🔥 Dual/Multi Exam Target Banner */}
        <div className="bg-gradient-to-r from-[#0E382B] via-emerald-900 to-blue-950 text-white rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center space-x-3.5">
            <span className="w-10 h-10 rounded-2xl bg-[#FFCC00] text-[#0E382B] flex items-center justify-center text-lg font-black shrink-0 shadow-sm">
              🎯
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-[#FFCC00] uppercase tracking-wider">
                  Target Exam Focus: {examTargets.join(' + ')}
                </span>
                <span className="px-2 py-0.2 rounded-full bg-white/20 text-white text-[10px] font-bold">
                  Personalized
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 mt-0.5 leading-relaxed">
                {examTargets.length > 1
                  ? `You're preparing for ${examTargets.join(' & ')}. StudyPlug is intelligently balancing past questions, worked examples, and speed tips from both exam boards.`
                  : `Personalized for ${examTargets[0]} candidates. Questions, difficulty, and tips strictly match ${examTargets[0]} format.`}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenExamModal}
            className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/25 text-white text-xs font-black transition cursor-pointer shrink-0 shadow-2xs"
          >
            Switch Exam Target ⚙️
          </button>
        </div>

        {/* 📈 Granular Subtopic Progress Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-base">📈</span>
              <span className="text-xs font-black text-slate-800 uppercase tracking-wider">
                Subtopic Mastery Completion
              </span>
            </div>
            <span className="text-xs font-black text-[#0E382B] bg-emerald-100 px-3 py-1 rounded-full">
              {completedSubtopics.length} / {totalCount} Subtopics Completed
            </span>
          </div>
          <div className="bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-[#0E382B] h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${totalCount > 0 ? (completedSubtopics.length / totalCount) * 100 : 0}%` }}
            />
          </div>
          <div className="text-[11px] text-slate-500 flex justify-between">
            <span>Every subtopic is tracked individually</span>
            <span className="font-bold text-slate-700">
              {totalCount > 0 ? Math.round((completedSubtopics.length / totalCount) * 100) : 0}% syllabus depth
            </span>
          </div>
        </div>

        {/* 📋 WHAT YOU WILL LEARN — Interactive Subtopic Checklist */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="text-xl">📋</span>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
                  What You Will Learn
                </h3>
                <p className="text-[11px] text-slate-500">
                  Click any subtopic to jump directly to its lesson section
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onStart('study', 0)}
              className="px-3.5 py-1.5 rounded-xl bg-[#0E382B] text-[#FFCC00] text-xs font-black hover:bg-emerald-950 transition cursor-pointer"
            >
              Start From Beginning ▶
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {(isStructured ? structuredSections! : sections).map((sec, idx) => {
              const title = isStructured
                ? (sec as StructuredSection).subtopic || (sec as StructuredSection).section_title
                : (sec as LessonSection).title;
              const isDone = completedSubtopics.includes(idx);
              const isCurrent = !isDone && (completedSubtopics.length === idx || idx === 0);

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onStart('study', idx)}
                  className={`p-3.5 rounded-2xl border text-left transition flex items-center justify-between cursor-pointer group shadow-2xs ${
                    isDone
                      ? 'border-emerald-200 bg-emerald-50/50 hover:bg-emerald-100/60 text-emerald-950'
                      : isCurrent
                      ? 'border-[#0E382B] bg-emerald-50/20 text-slate-900 ring-1 ring-[#0E382B]/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 hover:bg-slate-50/70'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <span className={`w-7 h-7 rounded-xl text-xs font-black flex items-center justify-center shrink-0 shadow-2xs ${
                      isDone ? 'bg-emerald-600 text-white' : isCurrent ? 'bg-[#0E382B] text-[#FFCC00]' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {isDone ? '✓' : isCurrent ? '→' : idx + 1}
                    </span>
                    <span className="text-xs font-bold truncate group-hover:text-[#0E382B] transition">
                      {title}
                    </span>
                  </div>
                  <span className="text-slate-300 group-hover:text-emerald-700 font-bold ml-2">›</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Continue banner */}
        {savedProgress && savedProgress.pct > 0 && savedProgress.pct < 100 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black text-amber-700 mb-1">Continue where you left off</div>
              <div className="text-sm text-slate-700 font-medium">{savedProgress.lastSection}</div>
              <div className="mt-1.5 bg-amber-200 rounded-full h-1.5 w-48">
                <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: `${savedProgress.pct}%` }} />
              </div>
              <div className="text-[10px] text-amber-600 mt-1">{savedProgress.pct}% complete</div>
            </div>
            <button type="button" onClick={() => onStart('study', savedProgress.blockIdx)}
              className="shrink-0 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-black rounded-xl transition cursor-pointer">
              Continue →
            </button>
          </div>
        )}

        {/* Subtopic Verified Past Questions Breakdown */}
        {questionStat?.subtopicBreakdown && Object.keys(questionStat.subtopicBreakdown).length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-base">🎯</span>
                <span className="text-xs font-black text-slate-800 uppercase tracking-wider">Concept-Matched Subtopic Questions</span>
              </div>
              <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">100% Concept Verified</span>
            </div>
            <p className="text-xs text-slate-500">Tap any subtopic to test questions specifically classified for that concept:</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {Object.entries(questionStat.subtopicBreakdown).map(([subt, count]) => (
                <button
                  key={subt}
                  type="button"
                  onClick={() => onOpenPractice(subt)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-xs font-bold text-slate-700 transition flex items-center space-x-2 cursor-pointer shadow-2xs group"
                >
                  <span className="group-hover:text-emerald-900">{subt}</span>
                  <span className="px-1.5 py-0.2 rounded-md bg-[#0E382B] text-[#FFCC00] text-[10px] font-black">{count}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 🏛️ Official 2026/2027 JAMB Master Syllabus Subtopic Trace & Coverage Audit */}
        {coverageAudit && coverageAudit.required_subtopics > 0 && (
          <div className="bg-white rounded-3xl border-2 border-emerald-600/30 p-6 space-y-4 shadow-xs overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <span className="w-10 h-10 rounded-2xl bg-[#0E382B] text-[#FFCC00] flex items-center justify-center text-lg font-black shadow-2xs">
                  🏛️
                </span>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-slate-800">
                    Official 2026/2027 JAMB Syllabus Subtopic Trace
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {note.subject} ➔ Topic: {note.topic}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 shadow-2xs ${
                  coverageAudit.status === 'COMPLETE'
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}>
                  <span>{coverageAudit.status === 'COMPLETE' ? '✅' : '⏳'}</span>
                  <span>
                    {coverageAudit.covered_subtopics}/{coverageAudit.required_subtopics} Mandatory Subtopics ({coverageAudit.coverage_percentage}% {coverageAudit.status})
                  </span>
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              StudyPlug enforces a strict subtopic hierarchy. Every mandatory syllabus item requires full pedagogical explanation, a worked numerical/conceptual example, an authentic past question, and a chalkboard solution:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
              {coverageAudit.covered.map((sub, idx) => (
                <button
                  key={sub.code}
                  type="button"
                  onClick={() => onStart('study', sub.section_order ? sub.section_order - 1 : idx)}
                  className="p-3.5 rounded-2xl border border-emerald-200/80 bg-emerald-50/40 hover:bg-emerald-100/70 hover:border-emerald-500 text-left transition flex items-start space-x-3 cursor-pointer group shadow-2xs"
                >
                  <span className="w-7 h-7 rounded-xl bg-[#0E382B] text-[#FFCC00] text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-black text-slate-900 group-hover:text-[#0E382B] truncate">
                        {sub.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400 shrink-0">
                        {sub.code}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-[10px] font-bold text-emerald-800">
                      <span className="bg-emerald-100 px-1.5 py-0.5 rounded">✓ Explanation</span>
                      <span className="bg-emerald-100 px-1.5 py-0.5 rounded">✓ Example</span>
                      <span className="bg-emerald-100 px-1.5 py-0.5 rounded">✓ Question</span>
                      <span className="bg-emerald-100 px-1.5 py-0.5 rounded">✓ Solution</span>
                    </div>
                  </div>
                </button>
              ))}
              {coverageAudit.missing.map((sub) => (
                <div
                  key={sub.code}
                  className="p-3.5 rounded-2xl border border-rose-200 bg-rose-50/40 text-left flex items-start space-x-3 opacity-80"
                >
                  <span className="w-7 h-7 rounded-xl bg-rose-200 text-rose-800 text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    !
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold text-rose-900 truncate">{sub.name}</span>
                      <span className="text-[10px] font-mono text-rose-400 shrink-0">{sub.code}</span>
                    </div>
                    <div className="text-[10px] text-rose-600 mt-1 font-medium">
                      Missing: {sub.reasons.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Study modes */}
        <div>
          <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-3">Choose how to study</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {([
              { mode: 'study' as const, icon: '📚', title: 'Study Mode', desc: 'Interactive slide presentation with step-by-step teaching.', color: 'bg-[#0E382B] text-white', disabled: false },
              { mode: 'revision' as const, icon: '⚡', title: 'Revision Mode', desc: 'Formulas, definitions, and examiner alerts only.', color: 'bg-white border border-slate-200 text-slate-800', disabled: false },
              { mode: 'exam' as const, icon: '📝', title: 'Exam Mode', desc: 'Real past questions only. Instant test & timer.', color: 'bg-white border border-slate-200 text-slate-800', disabled: !questionStat || questionStat.total === 0 },
            ]).map(m => (
              <button key={m.mode} type="button"
                onClick={() => !m.disabled && onStart(m.mode)}
                disabled={m.disabled}
                className={`rounded-2xl p-4 text-left transition cursor-pointer ${m.color} ${m.disabled ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-md'}`}>
                <div className="text-2xl mb-2">{m.icon}</div>
                <div className="font-black text-sm mb-1">{m.title}</div>
                <div className={`text-xs leading-snug ${m.color.includes('0E382B') ? 'text-emerald-300' : 'text-slate-500'}`}>{m.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Lesson outline */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-black text-slate-500 uppercase tracking-wider">Lesson Learning Journey</div>
            <button
              type="button"
              onClick={() => onStart('study', 0)}
              className="px-3.5 py-1.5 rounded-xl bg-[#0E382B] text-[#FFCC00] text-xs font-black hover:bg-emerald-900 transition cursor-pointer"
            >
              ▶ Start from Beginning
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden shadow-xs">
            {isStructured ? (
              structuredSections!.map((sec, idx) => (
                <button
                  key={sec.id || idx}
                  type="button"
                  onClick={() => onStart('study', idx)}
                  className="w-full flex items-center gap-4 px-5 py-4 hover:bg-emerald-50/50 transition text-left cursor-pointer group"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#0E382B] text-[#FFCC00] flex items-center justify-center text-xs font-black shrink-0 shadow-2xs">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-800 group-hover:text-[#0E382B] transition truncate">
                        {sec.section_title}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      {sec.subtopic && (
                        <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                          {sec.subtopic}
                        </span>
                      )}
                      {sec.formulas && sec.formulas.length > 0 && (
                        <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          📐 Formulas
                        </span>
                      )}
                      {sec.examples && sec.examples.length > 0 && (
                        <span className="text-[10px] font-black text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200">
                          💡 {sec.examples.length} Examples
                        </span>
                      )}
                      {sec.questions && sec.questions.length > 0 && (
                        <span className="text-[10px] font-black text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          📝 {sec.questions.length} Past Questions
                        </span>
                      )}
                      {sec.exam_tips && sec.exam_tips.length > 0 && (
                        <span className="text-[10px] font-black text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                          ⚠️ Trap Alert
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-slate-300 group-hover:text-emerald-600 transition shrink-0 font-bold">›</span>
                </button>
              ))
            ) : (
              sections.map((sec, idx) => (
                <button
                  key={sec.index}
                  type="button"
                  onClick={() => onStart('study', sec.blocks[0] ? sections.slice(0, idx).reduce((s, s2) => s + s2.blocks.length, 0) : 0)}
                  className="w-full flex items-center gap-4 px-5 py-4 hover:bg-emerald-50/50 transition text-left cursor-pointer group"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#0E382B] text-[#FFCC00] flex items-center justify-center text-xs font-black shrink-0">
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-slate-800 group-hover:text-[#0E382B] transition truncate">
                      {sec.title}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-slate-400">~{sec.estimatedMinutes} min</span>
                      {sec.hasFormulas  && <span className="text-[10px] font-bold text-amber-600">📐 Formulas</span>}
                      {sec.hasQuestions && <span className="text-[10px] font-bold text-emerald-600">📝 Questions</span>}
                      {sec.hasAlerts    && <span className="text-[10px] font-bold text-rose-600">⚠️ Alert</span>}
                    </div>
                  </div>
                  <span className="text-slate-300 group-hover:text-emerald-600 transition shrink-0">›</span>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Formulas recap */}
        {note.key_formulas && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <div className="text-xs font-black text-amber-700 uppercase tracking-wider mb-2">📐 Key Formulas</div>
            <p className="text-xs text-slate-700 leading-relaxed font-mono">{note.key_formulas}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Practice Questions Panel ─────────────────────────────────────────────────
const PracticePanel: React.FC<{
  note: LessonNote;
  stat: QuestionStat;
  initialSubtopic?: string;
  onClose: () => void;
}> = ({ note, stat, initialSubtopic = 'all', onClose }) => {
  const [questions, setQuestions] = useState<APIQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [examFilter, setExamFilter] = useState('all');
  const [selectedSubtopic, setSelectedSubtopic] = useState<string>(initialSubtopic);

  useEffect(() => {
    setLoading(true);
    let url = `${API_BASE}/get_topic_questions.php?subject=${encodeURIComponent(note.subject)}&lesson_topic=${encodeURIComponent(note.topic)}&exam=${examFilter}&limit=30&random=1`;
    if (selectedSubtopic && selectedSubtopic !== 'all' && selectedSubtopic !== 'group_challenge') {
      url += `&subtopic=${encodeURIComponent(selectedSubtopic)}`;
    }
    fetch(url)
      .then(r => r.json())
      .then(d => { setQuestions(d.questions || []); setLoading(false); })
      .catch(() => { setError('Could not load questions.'); setLoading(false); });
  }, [note.subject, note.topic, examFilter, selectedSubtopic]);

  const JAMB = Object.entries(stat.byExam).filter(([k]) => k.toLowerCase().includes('jamb')).reduce((s,[,v])=>s+v,0);
  const WAEC = Object.entries(stat.byExam).filter(([k]) => k.toLowerCase().includes('waec')).reduce((s,[,v])=>s+v,0);
  const NECO = Object.entries(stat.byExam).filter(([k]) => k.toLowerCase().includes('neco')).reduce((s,[,v])=>s+v,0);

  const subtopicList = stat.subtopicBreakdown ? Object.keys(stat.subtopicBreakdown) : [];

  return (
    <div className="min-h-screen bg-[#F0F4F8] pb-16">
      <div className="bg-gradient-to-br from-[#0E382B] to-emerald-800 text-white px-6 pt-8 pb-10">
        <button type="button" onClick={onClose} className="text-emerald-300 text-xs font-bold mb-4 hover:text-white transition cursor-pointer">← Back to Lesson</button>
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-black">Practice Questions</h2>
          {stat.topicGroup && (
            <span className="px-2 py-0.5 rounded-md bg-emerald-700 text-[#FFCC00] text-[10px] font-black uppercase">
              {stat.topicGroup}
            </span>
          )}
        </div>
        <p className="text-emerald-300 text-sm mt-1">{note.topic} • {note.subject}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-emerald-800/50 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">📝 {stat.total} verified total</span>
          {JAMB > 0 && <span className="bg-emerald-800/50 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">🎯 {JAMB} JAMB</span>}
          {WAEC > 0 && <span className="bg-emerald-800/50 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">📘 {WAEC} WAEC</span>}
          {NECO > 0 && <span className="bg-emerald-800/50 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full">📗 {NECO} NECO</span>}
        </div>
      </div>

      <div className="px-4 sm:px-8 -mt-4 space-y-4">
        {/* Subtopic Filter Bar */}
        {subtopicList.length > 0 && (
          <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-500">Filter by Specific Subtopic Concept:</span>
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setSelectedSubtopic('all')}
                className={`px-3 py-1 rounded-xl text-xs font-black transition cursor-pointer ${
                  selectedSubtopic === 'all' ? 'bg-[#0E382B] text-[#FFCC00]' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Subtopics ({stat.total})
              </button>
              {subtopicList.map(st => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setSelectedSubtopic(st)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition cursor-pointer flex items-center space-x-1.5 ${
                    selectedSubtopic === st ? 'bg-[#0E382B] text-[#FFCC00]' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{st}</span>
                  <span className="text-[10px] opacity-80">({stat.subtopicBreakdown?.[st] || 0})</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Exam filter tabs */}
        <div className="bg-white rounded-2xl border border-slate-200 p-1 flex gap-1 shadow-xs">
          {['all','JAMB','WAEC','NECO'].map(f => (
            <button key={f} type="button" onClick={() => setExamFilter(f)}
              className={`flex-1 py-2 rounded-xl text-xs font-black transition cursor-pointer ${examFilter===f ? 'bg-[#0E382B] text-[#FFCC00]' : 'text-slate-600 hover:bg-slate-50'}`}>
              {f === 'all' ? 'All Boards' : f}
            </button>
          ))}
        </div>

        {loading && <div className="text-center py-12 text-slate-400 text-sm animate-pulse">Loading verified concept questions…</div>}
        {error && <div className="text-center py-12 text-rose-500 text-sm">{error}</div>}
        {!loading && !error && questions.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">No questions found for this specific subtopic filter.</div>
        )}
        <div className="space-y-4">
          {questions.map((q, i) => <PastQuestionCard key={q.id} q={q} number={i + 1} />)}
        </div>
      </div>
    </div>
  );
};

// ─── Main LessonPresenter ─────────────────────────────────────────────────────
interface Props {
  note: LessonNote;
  onBack: () => void;
  textScale?: number;
}

export const LessonPresenter: React.FC<Props> = ({ note, onBack, textScale = 1 }) => {
  const [view, setView] = useState<'overview' | 'lesson' | 'practice'>('overview');
  const [mode, setMode] = useState<'study' | 'revision' | 'exam'>('study');
  const [slideIdx, setSlideIdx] = useState(0);
  const [questionStat, setQuestionStat] = useState<QuestionStat | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [showOutlineModal, setShowOutlineModal] = useState(false);
  const [scale, setScale] = useState(textScale);
  const [presentationMode, setPresentationMode] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Structured DB Lessons
  const [structuredSections, setStructuredSections] = useState<StructuredSection[] | null>(null);
  const [loadingStructured, setLoadingStructured] = useState(true);
  const [coverageAudit, setCoverageAudit] = useState<CoverageAudit | null>(null);

  // Exam Targets & Personalization
  const [examTargets, setExamTargets] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sp_exam_targets');
      return saved ? JSON.parse(saved) : ['JAMB', 'WAEC'];
    } catch {
      return ['JAMB', 'WAEC'];
    }
  });
  const [showExamModal, setShowExamModal] = useState<boolean>(false);
  const [inLessonExamMode, setInLessonExamMode] = useState<'study' | 'jamb' | 'waec' | 'mixed'>('study');

  // Fetch structured lesson and coverage audit from API (with offline fallback)
  useEffect(() => {
    setLoadingStructured(true);
    const isMotion = (note.topic || '').toLowerCase().includes('motion') || 
                     ((note.subject || '').toLowerCase().includes('phys') && (note.topic || '').toLowerCase().includes('kinematics'));

    const examParam = examTargets && examTargets.length > 0 ? `&exam_targets=${encodeURIComponent(examTargets.join(','))}` : '';
    fetch(`${API_BASE}/get_structured_lesson.php?subject=${encodeURIComponent(note.subject)}&topic=${encodeURIComponent(note.topic)}${examParam}`)
      .then(r => r.json())
      .then(d => {
        if (d.success && d.found && Array.isArray(d.sections) && d.sections.length > 0) {
          setStructuredSections(d.sections);
        } else if (isMotion) {
          setStructuredSections(MOTION_MASTER_SECTIONS);
        } else {
          setStructuredSections(null);
        }
      })
      .catch(() => {
        if (isMotion) {
          setStructuredSections(MOTION_MASTER_SECTIONS);
        } else {
          setStructuredSections(null);
        }
      })
      .finally(() => setLoadingStructured(false));

    // Fetch official syllabus coverage audit
    fetch(`${API_BASE}/validate_coverage.php?subject=${encodeURIComponent(note.subject)}&topic=${encodeURIComponent(note.topic)}`)
      .then(r => r.json())
      .then(d => {
        if (d && d.success) {
          setCoverageAudit(d);
        } else if (isMotion) {
          setCoverageAudit(MOTION_MASTER_AUDIT);
        }
      })
      .catch(() => {
        if (isMotion) {
          setCoverageAudit(MOTION_MASTER_AUDIT);
        }
      });
  }, [note.subject, note.topic, examTargets]);

  // Fallback markdown parsing
  const allBlocks = useMemo(() => parseLessonContent(note.content, note.topic), [note.content, note.topic]);
  const sections   = useMemo(() => groupIntoSections(allBlocks), [allBlocks]);

  // Filter markdown blocks by mode if no structured lesson
  const blocks = useMemo(() => {
    if (mode === 'revision') return allBlocks.filter(b => ['formula','definition','exam_alert','summary'].includes(b.type));
    if (mode === 'exam')     return allBlocks.filter(b => ['quick_check','practice'].includes(b.type));
    return allBlocks;
  }, [allBlocks, mode]);

  // Filter structured sections by mode
  const filteredStructured = useMemo(() => {
    if (!structuredSections) return null;
    if (mode === 'revision') {
      return structuredSections.filter(s =>
        s.section_type === 'rule' ||
        s.section_type === 'formula' ||
        s.section_type === 'exam_trap' ||
        s.section_type === 'summary' ||
        (s.formulas && s.formulas.length > 0) ||
        (s.exam_tips && s.exam_tips.length > 0)
      );
    }
    if (mode === 'exam') {
      return structuredSections.filter(s =>
        (s.questions && s.questions.length > 0) ||
        s.section_type === 'past_question' ||
        s.section_type === 'worked_example'
      );
    }
    return structuredSections;
  }, [structuredSections, mode]);

  const isUsingStructured = Boolean(filteredStructured && filteredStructured.length > 0);
  const totalSlides = isUsingStructured ? filteredStructured!.length : blocks.length;

  // Load saved progress
  const savedProgress = useMemo(() => loadProgress()[String(note.id)] || null, [note.id]);

  const [practiceSubtopic, setPracticeSubtopic] = useState<string>('all');

  // Load question stats
  useEffect(() => {
    setLoadingStats(true);
    fetch(`${API_BASE}/get_topic_questions.php?subject=${encodeURIComponent(note.subject)}&lesson_topic=${encodeURIComponent(note.topic)}&count_only=1`)
      .then(r => r.json())
      .then(d => {
        if (d.success) {
          setQuestionStat({
            total: d.total || 0,
            byExam: d.by_exam || {},
            byDifficulty: d.by_difficulty || {},
            subtopicBreakdown: d.subtopic_breakdown || {},
            topicGroup: d.topic_group || '',
            groupChallengeCount: d.group_challenge_count || 0,
            tierCounts: d.tier_counts || { direct: 0, related: 0, challenge: 0 }
          });
        }
      })
      .catch(() => {})
      .finally(() => setLoadingStats(false));
  }, [note.subject, note.topic]);

  // Save progress on slide change
  useEffect(() => {
    if (view !== 'lesson' || totalSlides === 0) return;
    const pct = Math.round(((slideIdx + 1) / totalSlides) * 100);
    const lastSection = isUsingStructured
      ? filteredStructured![slideIdx]?.section_title || note.topic
      : blocks[slideIdx]?.sectionTitle || note.topic;
    saveProgress(note.id, slideIdx, pct, lastSection);
  }, [slideIdx, totalSlides, isUsingStructured, filteredStructured, blocks, note.id, note.topic, view]);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    if (view !== 'lesson') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || (presentationMode && e.key === ' ')) {
        e.preventDefault();
        setSlideIdx(i => Math.min(i + 1, totalSlides - 1));
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setSlideIdx(i => Math.max(i - 1, 0));
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else if (e.key === 'Escape') {
        setPresentationMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, totalSlides, presentationMode]);

  const startLesson = useCallback((m: 'study' | 'revision' | 'exam', startSlide = 0) => {
    setMode(m);
    setSlideIdx(startSlide);
    setView('lesson');
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const pct = totalSlides > 0 ? Math.round(((slideIdx + 1) / totalSlides) * 100) : 0;
  const isLast = slideIdx >= totalSlides - 1;

  const goNext = () => { if (!isLast) { setSlideIdx(i => i + 1); topRef.current?.scrollIntoView({ behavior: 'smooth' }); } };
  const goPrev = () => { if (slideIdx > 0) { setSlideIdx(i => i - 1); topRef.current?.scrollIntoView({ behavior: 'smooth' }); } };

  const handlePrint = () => {
    window.print();
  };

  // ─── OVERVIEW ──────────────────────────────────────────────────────────────
  if (view === 'overview') {
    return (
      <LessonOverview
        note={note}
        sections={sections}
        structuredSections={structuredSections}
        coverageAudit={coverageAudit}
        examTargets={examTargets}
        onOpenExamModal={() => setShowExamModal(true)}
        questionStat={questionStat}
        loadingStats={loadingStats}
        savedProgress={savedProgress}
        onStart={startLesson}
        onOpenPractice={(subt) => {
          setPracticeSubtopic(subt || 'all');
          setView('practice');
        }}
        onBack={onBack}
        onPrint={handlePrint}
      />
    );
  }

  // ─── PRACTICE PANEL ───────────────────────────────────────────────────────
  if (view === 'practice' && questionStat) {
    return (
      <PracticePanel
        note={note}
        stat={questionStat}
        initialSubtopic={practiceSubtopic}
        onClose={() => setView('lesson')}
      />
    );
  }

  // Current slide content
  const currentStructured = isUsingStructured ? filteredStructured![slideIdx] : null;
  const currentBlock = !isUsingStructured ? blocks[slideIdx] : null;
  const currentTitle = isUsingStructured ? currentStructured?.section_title : currentBlock?.sectionTitle;

  // ─── LESSON PRESENTER ─────────────────────────────────────────────────────
  return (
    <div ref={topRef} className={`min-h-screen bg-[#07130E] text-white flex flex-col scroll-mt-28 ${presentationMode ? 'fixed inset-0 z-50 overflow-y-auto bg-[#040A07]' : ''}`}>
      {/* Mobile Dedicated Floating Back Button - Always Visible */}
      <div className="fixed top-3 left-3 z-50 sm:hidden">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center space-x-1 px-3.5 py-1.5 rounded-full bg-[#061710]/95 border-2 border-[#FFCC00] text-[#FFCC00] font-black text-xs shadow-2xl backdrop-blur-md transition cursor-pointer active:scale-95"
        >
          <span>←</span>
          <span>Back</span>
        </button>
      </div>

      {/* Top sticky presentation bar - Sticks cleanly to top-0 */}
      <div className="sticky top-0 z-40 border-b border-[#C4823F]/30 shadow-lg bg-[#071F15]/95 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          {/* Left: Outline & Back */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={onBack}
              className="text-xs font-black px-2.5 sm:px-3 py-1.5 rounded-xl border border-[#FFCC00]/50 text-[#FFCC00] hover:bg-[#FFCC00] hover:text-[#061710] transition cursor-pointer flex items-center gap-1 shadow-sm"
              title="Return to Notes Library"
            >
              <span>←</span>
              <span className="hidden xs:inline">All Notes</span>
            </button>
            <button
              type="button"
              onClick={() => setView('overview')}
              className="text-xs font-black px-2.5 sm:px-3 py-1.5 rounded-xl border border-emerald-500/40 text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 transition cursor-pointer flex items-center gap-1"
              title="View Lesson Outline & Objectives"
            >
              <span>📋</span>
              <span className="hidden sm:inline">Overview</span>
            </button>
            <button
              type="button"
              onClick={() => setShowOutlineModal(true)}
              className="text-xs font-black px-2.5 sm:px-3 py-1.5 rounded-xl border border-white/20 text-slate-200 hover:border-[#FFCC00] hover:text-[#FFCC00] hover:bg-black/30 transition cursor-pointer flex items-center gap-1"
              title="Jump to Section"
            >
              <span>≡</span>
              <span className="hidden sm:inline">Sections</span>
            </button>
          </div>

          {/* Center: Slide title & Progress bar */}
          <div className="flex-1 max-w-md min-w-0 px-2">
            <div className="flex items-center justify-between gap-1">
              <div className="text-[10px] font-bold truncate text-slate-200">
                {note.topic} — {currentTitle}
              </div>
              <button
                type="button"
                onClick={() => setShowExamModal(true)}
                className="px-2 py-0.5 rounded-lg border border-[#FFCC00]/40 bg-black/40 hover:bg-black/60 text-[#FFCC00] text-[10px] font-black shrink-0 transition flex items-center gap-1 cursor-pointer"
                title="Change Exam Target"
              >
                <span>🎯</span>
                <span className="hidden md:inline">{examTargets.join('+')}</span>
                <span>⚙️</span>
              </button>
            </div>
            <div className="bg-black/50 border border-white/10 rounded-full h-1.5 mt-1 overflow-hidden">
              <div
                className="bg-[#FFCC00] h-1.5 rounded-full transition-all duration-300 shadow-[0_0_8px_#FFCC00]"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Right: Controls (Scale, Presentation, Counter) */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 border border-white/20 rounded-xl px-1.5 py-0.5 bg-black/30">
              <button
                type="button"
                onClick={() => setScale(s => Math.max(0.85, s - 0.05))}
                className="text-[11px] font-black px-1 text-slate-300 hover:text-[#FFCC00] cursor-pointer"
                title="Decrease font size"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setScale(s => Math.min(1.25, s + 0.05))}
                className="text-[11px] font-black px-1 text-slate-300 hover:text-[#FFCC00] cursor-pointer"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            <button
              type="button"
              onClick={() => setPresentationMode(p => !p)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-black transition cursor-pointer flex items-center gap-1 ${
                presentationMode ? 'bg-[#FFCC00] text-[#0E382B]' : 'bg-black/40 border border-white/15 text-slate-200 hover:text-white'
              }`}
              title="Toggle Presentation Mode"
            >
              <span>📺</span>
              <span className="hidden md:inline">{presentationMode ? 'Exit' : 'Present'}</span>
            </button>

            <span className="text-[11px] font-black px-2 py-1 rounded-lg bg-black/40 border border-white/15 text-[#FFCC00]">
              {slideIdx + 1}/{totalSlides}
            </span>
          </div>
        </div>

        {/* In-Lesson Exam Mode Tabs */}
        <div className="border-t border-[#C4823F]/20 px-4 py-1.5 bg-[#081812]/95 backdrop-blur-md flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-black uppercase text-slate-400 mr-1 hidden sm:inline">Exam View:</span>
            {([
              { id: 'study' as const, label: '📚 Learn Mode', tip: 'Comprehensive teaching & visuals' },
              { id: 'jamb' as const, label: '🎯 JAMB Mode', tip: 'JAMB CBT questions & traps' },
              { id: 'waec' as const, label: '📘 WAEC Mode', tip: 'WAEC theoretical marking scheme' },
              { id: 'mixed' as const, label: '🔄 Mixed Mode', tip: 'Balanced multi-board questions' }
            ]).map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setInLessonExamMode(tab.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer shrink-0 ${
                  inLessonExamMode === tab.id
                    ? 'bg-[#FFCC00] text-[#0E382B] shadow-md'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
                title={tab.tip}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-[10px] font-bold text-slate-400 shrink-0">
            {inLessonExamMode === 'jamb' && 'Focusing on JAMB UTME'}
            {inLessonExamMode === 'waec' && 'Focusing on WAEC WASSCE'}
            {inLessonExamMode === 'mixed' && `Mixed: ${examTargets.join(' & ')}`}
            {inLessonExamMode === 'study' && 'Comprehensive Curriculum'}
          </div>
        </div>
      </div>

      {/* Revision / Exam Mode Banner */}
      {mode !== 'study' && (
        <div className={`text-center py-1.5 text-[10px] font-black uppercase tracking-wider ${mode === 'revision' ? 'bg-amber-950/80 border-y border-amber-500/40 text-[#FFCC00]' : 'bg-emerald-950/80 border-y border-emerald-500/40 text-emerald-300'}`}>
          {mode === 'revision' ? '⚡ Revision Mode — Key Rules, Formulas & Traps' : '📝 Exam Mode — Past Questions Practice'}
        </div>
      )}

      {/* Main Slide Presentation Viewport */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8">
        {totalSlides === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg mb-2">No slides found for this mode</p>
            <button type="button" onClick={() => setMode('study')} className="text-[#FFCC00] font-bold text-sm underline cursor-pointer">
              Switch to Study Mode
            </button>
          </div>
        ) : isUsingStructured && currentStructured ? (
          <StructuredSlideCard
            section={currentStructured}
            totalSections={totalSlides}
            textScale={scale}
            examTargets={examTargets}
            examMode={inLessonExamMode}
            onOpenSubtopicPractice={(subt) => {
              setPracticeSubtopic(subt);
              setView('practice');
            }}
            note={note}
          />
        ) : currentBlock ? (
          <BlockSlide
            block={currentBlock}
            totalSections={totalSlides}
            textScale={scale}
            onOpenSubtopicPractice={(subt) => {
              setPracticeSubtopic(subt);
              setView('practice');
            }}
            note={note}
          />
        ) : null}
      </main>

      {/* Sticky Bottom Navigation Controls */}
      <div className={`sticky bottom-0 border-t border-[#C4823F]/30 shadow-2xl z-30 transition-colors ${presentationMode ? 'bg-[#040A07]/95' : 'bg-[#0A1F17]/95 backdrop-blur-md'}`}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={slideIdx === 0}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl border border-white/20 text-sm font-black text-slate-200 hover:border-[#FFCC00] hover:text-[#FFCC00] hover:bg-black/30 transition cursor-pointer disabled:opacity-30"
          >
            ← Prev
          </button>

          {/* Quick jump slide dots / pills */}
          <div className="hidden sm:flex items-center gap-1 overflow-x-auto max-w-xs py-1">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setSlideIdx(i); topRef.current?.scrollIntoView({ behavior: 'smooth' }); }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  slideIdx === i ? 'w-6 bg-[#FFCC00]' : 'w-2 bg-white/25 hover:bg-white/40'
                }`}
                title={`Go to Section ${i + 1}`}
              />
            ))}
          </div>

          {questionStat && questionStat.total > 0 && (
            <button
              type="button"
              onClick={() => setView('practice')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-950/60 border border-amber-400/40 text-amber-300 text-xs font-black hover:bg-amber-900/60 transition cursor-pointer"
            >
              <span>📝</span>
              <span className="hidden sm:inline">{questionStat.total} Questions</span>
            </button>
          )}

          {isLast ? (
            <button
              type="button"
              onClick={() => setView('overview')}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-[#FFCC00] text-[#0E382B] text-sm font-black hover:bg-[#FFEA79] transition cursor-pointer shadow-lg"
            >
              🎉 Complete
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-[#FFCC00] text-[#0E382B] text-sm font-black hover:bg-[#FFEA79] transition cursor-pointer shadow-lg"
            >
              Next →
            </button>
          )}
        </div>
      </div>

      {/* Outline Jump Modal */}
      {showOutlineModal && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-[#0B241B] border-2 border-[#C4823F] rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl max-h-[85vh] flex flex-col text-white">
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <div className="font-black text-[#FFCC00] text-base">Lesson Outline & Jump</div>
              <button
                type="button"
                onClick={() => setShowOutlineModal(false)}
                className="w-7 h-7 rounded-full bg-white/10 text-slate-300 font-bold flex items-center justify-center cursor-pointer hover:bg-white/20 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 divide-y divide-white/5">
              {isUsingStructured ? (
                filteredStructured!.map((sec, idx) => (
                  <button
                    key={sec.id || idx}
                    type="button"
                    onClick={() => { setSlideIdx(idx); setShowOutlineModal(false); topRef.current?.scrollIntoView({ behavior: 'smooth' }); }}
                    className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition cursor-pointer ${
                      slideIdx === idx ? 'bg-[#FFCC00] text-[#0E382B]' : 'hover:bg-white/10 text-slate-200'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                      slideIdx === idx ? 'bg-[#0E382B] text-[#FFCC00]' : 'bg-black/40 text-slate-300 border border-white/10'
                    }`}>
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate">{sec.section_title}</div>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {sec.subtopic && (
                          <span className={`text-[10px] truncate font-medium ${slideIdx === idx ? 'text-[#0E382B]/80 font-bold' : 'text-slate-400'}`}>
                            {sec.subtopic}
                          </span>
                        )}
                        {sec.formulas && sec.formulas.length > 0 && <span className="text-[9px]" title="Formulas">📐</span>}
                        {sec.examples && sec.examples.length > 0 && <span className="text-[9px]" title="Examples">💡</span>}
                        {sec.questions && sec.questions.length > 0 && <span className="text-[9px]" title="Past Questions">🎯</span>}
                        {sec.exam_tips && sec.exam_tips.length > 0 && <span className="text-[9px]" title="Exam Alerts">⚠️</span>}
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                blocks.map((b, idx) => (
                  <button
                    key={b.id || idx}
                    type="button"
                    onClick={() => { setSlideIdx(idx); setShowOutlineModal(false); topRef.current?.scrollIntoView({ behavior: 'smooth' }); }}
                    className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition cursor-pointer ${
                      slideIdx === idx ? 'bg-[#FFCC00] text-[#0E382B]' : 'hover:bg-white/10 text-slate-200'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black shrink-0 ${
                      slideIdx === idx ? 'bg-[#0E382B] text-[#FFCC00]' : 'bg-black/40 text-slate-300 border border-white/10'
                    }`}>
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate">{b.title || b.sectionTitle}</div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* Completion celebration modal */}
      {isLast && pct === 100 && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center z-50 p-6">
          <div className="bg-[#0B241B] border-2 border-[#C4823F] rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl space-y-4 text-white">
            <div className="text-5xl">🎉</div>
            <h2 className="text-2xl font-black text-[#FFCC00]">Lesson Complete!</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              You have completed all {totalSlides} sections of <strong>{note.topic}</strong>.
            </p>
            <div className="space-y-2.5 pt-2">
              {questionStat && questionStat.total > 0 && (
                <button
                  type="button"
                  onClick={() => { setView('practice'); }}
                  className="w-full py-3 rounded-2xl bg-[#FFCC00] text-[#0E382B] font-black text-sm cursor-pointer hover:bg-[#FFEA79] transition shadow-md"
                >
                  Practice {questionStat.total} Past Questions
                </button>
              )}
              <button
                type="button"
                onClick={() => setView('overview')}
                className="w-full py-3 rounded-2xl border border-white/20 text-slate-200 font-bold text-sm cursor-pointer hover:bg-white/10 transition"
              >
                Back to Lesson Overview
              </button>
              <button
                type="button"
                onClick={onBack}
                className="w-full py-3 rounded-2xl border border-white/10 text-slate-400 text-sm cursor-pointer hover:bg-white/5 transition"
              >
                Back to Syllabus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exam Target Selection Modal */}
      <ExamTargetModal
        isOpen={showExamModal}
        currentTargets={examTargets}
        onSave={(newTargets) => {
          setExamTargets(newTargets);
          try {
            localStorage.setItem('sp_exam_targets', JSON.stringify(newTargets));
          } catch {}
        }}
        onClose={() => setShowExamModal(false)}
      />
    </div>
  );
};

export default LessonPresenter;
