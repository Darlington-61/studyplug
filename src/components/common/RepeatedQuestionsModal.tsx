import React, { useState, useMemo } from 'react';
import { ALL_QUESTIONS } from '../../data/allQuestionsHub';
import { JambLogo, WaecLogo, NecoLogo, NabtebLogo, BeceLogo } from './ExamLogos';
import { getSubjectThumbnail } from '../../assets/subjectThumbnails';
import { useApp } from '../../context/AppContext';

type ExamKey = 'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE';

interface Props {
  onClose: () => void;
}

const EXAMS: { key: ExamKey; label: string; Logo: React.FC<any>; color: string }[] = [
  { key: 'JAMB',   label: 'JAMB UTME',     Logo: JambLogo,   color: '#001028' },
  { key: 'WAEC',   label: 'WAEC / WASSCE', Logo: WaecLogo,   color: '#1565C0' },
  { key: 'NECO',   label: 'NECO SSCE',     Logo: NecoLogo,   color: '#001830' },
  { key: 'NABTEB', label: 'NABTEB',        Logo: NabtebLogo, color: '#D97706' },
  { key: 'BECE',   label: 'BECE / JSCE',   Logo: BeceLogo,   color: '#0284C7' },
];

const MAJOR_SUBJECTS: { id: string; name: string; icon: string }[] = [
  { id: 'math',      name: 'Mathematics',           icon: '📐' },
  { id: 'english',   name: 'English Language',      icon: '📖' },
  { id: 'physics',   name: 'Physics',               icon: '⚡' },
  { id: 'chemistry', name: 'Chemistry',             icon: '🧪' },
  { id: 'biology',   name: 'Biology',               icon: '🧬' },
  { id: 'economics', name: 'Economics',             icon: '📊' },
  { id: 'government',name: 'Government',            icon: '🏛️' },
  { id: 'literature',name: 'Literature in English', icon: '🎭' },
  { id: 'agric',     name: 'Agricultural Science',  icon: '🌱' },
  { id: 'commerce',  name: 'Commerce & Accounting', icon: '💼' }
];

function normaliseExam(raw?: string): ExamKey {
  if (!raw) return 'JAMB';
  const u = String(raw).toUpperCase();
  if (u.includes('WAEC') || u.includes('WASSCE')) return 'WAEC';
  if (u.includes('NECO')) return 'NECO';
  if (u.includes('NABTEB')) return 'NABTEB';
  if (u.includes('BECE') || u.includes('JSCE')) return 'BECE';
  return 'JAMB';
}

function matchSubject(subjectInQ?: string, targetId?: string): boolean {
  if (!subjectInQ || !targetId) return false;
  const s = String(subjectInQ).toLowerCase();

  switch (targetId) {
    case 'math':
      return s.includes('math');
    case 'english':
      return s.includes('english') || s.includes('lexis') || s.includes('oral');
    case 'physics':
      return s.includes('physic');
    case 'chemistry':
      return s.includes('chem');
    case 'biology':
      return s.includes('bio');
    case 'economics':
      return s.includes('econ');
    case 'government':
      return s.includes('gov') || s.includes('civic') || s.includes('politic');
    case 'literature':
      return s.includes('lit');
    case 'agric':
      return s.includes('agric');
    case 'commerce':
      return s.includes('comm') || s.includes('acc') || s.includes('finan') || s.includes('market');
    default:
      return s.includes(targetId);
  }
}

// Global in-memory cache to ensure opening modal is instant (0ms)
const REPEATED_CACHE: Record<string, any[]> = {};

function getRepeatedQuestionsForSubjectAndExam(subjectId: string, examKey: ExamKey): any[] {
  const cacheKey = `${subjectId}_${examKey}`;
  if (REPEATED_CACHE[cacheKey]) {
    return REPEATED_CACHE[cacheKey];
  }

  // Fast single pass over questions
  const matching: any[] = [];
  const fallbacks: any[] = [];

  for (let i = 0; i < ALL_QUESTIONS.length; i++) {
    const q = ALL_QUESTIONS[i];
    if (!matchSubject(q.subject, subjectId)) continue;

    const exam = normaliseExam(q.exam);
    if (examKey === 'JAMB') {
      if (exam !== 'JAMB' && q.exam) continue;
    } else {
      if (exam !== examKey) continue;
    }

    const isRep = Boolean(q.isRepeated || (q.repeatCount && q.repeatCount > 1) || (q.repeatYears && q.repeatYears.length > 1));
    if (isRep) {
      matching.push(q);
      if (matching.length >= 60) break; // Fast cap for ultra snappy performance
    } else if (fallbacks.length < 30) {
      fallbacks.push(q);
    }
  }

  const results = matching.length > 0 ? matching : fallbacks;
  REPEATED_CACHE[cacheKey] = results;
  return results;
}

export const RepeatedQuestionsModal: React.FC<Props> = ({ onClose }) => {
  const { openAiTutor } = useApp();
  const [selectedExam, setSelectedExam] = useState<ExamKey>('JAMB');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('math');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<number, boolean>>({});
  const [visibleCount, setVisibleCount] = useState<number>(15);

  const selectedSubjectObj = MAJOR_SUBJECTS.find(s => s.id === selectedSubjectId) || MAJOR_SUBJECTS[0];

  const toggleSolution = (id: number) => {
    setExpandedSolutions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Instant fetch from pre-calculated cache
  const rawQuestions = useMemo(() => {
    return getRepeatedQuestionsForSubjectAndExam(selectedSubjectId, selectedExam);
  }, [selectedSubjectId, selectedExam]);

  const filteredQuestions = useMemo(() => {
    if (!searchQuery.trim()) return rawQuestions;
    const q = searchQuery.toLowerCase();
    return rawQuestions.filter(item => {
      const text = String(item.text || item.question || '').toLowerCase();
      const topic = String(item.topic || '').toLowerCase();
      return text.includes(q) || topic.includes(q);
    });
  }, [rawQuestions, searchQuery]);

  const displayedQuestions = useMemo(() => {
    return filteredQuestions.slice(0, visibleCount);
  }, [filteredQuestions, visibleCount]);

  return (
    <div
      className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm animate-fade-in p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#F7F9F8] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden border border-[#C4823F]/50"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Top Header ── */}
        <div className="bg-[#001028] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0 border-b border-[#C4823F]/40 shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFCC00] text-[#00332A] flex items-center justify-center font-black text-xl shadow-md shrink-0">
              🔁
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#FFCC00] text-[#00332A] px-2 py-0.5 rounded-full">
                  MOST REPEATED QUESTIONS
                </span>
                <span className="text-[11px] text-emerald-200 font-bold hidden sm:inline">
                  Step-by-step verified solutions
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-extrabold text-white mt-0.5 leading-tight">
                {selectedSubjectObj.name} • {selectedExam}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xl font-bold transition cursor-pointer"
            title="Close"
          >
            ×
          </button>
        </div>

        {/* ── Exam Body Tabs ── */}
        <div className="bg-[#042821] px-4 py-2 flex items-center space-x-2 overflow-x-auto shrink-0 border-b border-emerald-900/60 scrollbar-none">
          <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider shrink-0 mr-1">
            Exam:
          </span>
          {EXAMS.map(exam => {
            const isSelected = selectedExam === exam.key;
            return (
              <button
                key={exam.key}
                type="button"
                onClick={() => {
                  setSelectedExam(exam.key);
                  setVisibleCount(15);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-black transition flex items-center space-x-1.5 shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#FFCC00] text-[#00332A] shadow-md font-black'
                    : 'bg-white/10 text-emerald-100 hover:bg-white/20'
                }`}
              >
                <span>{exam.label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Active Subject Banner with Image Thumbnail ── */}
        <div className="bg-gradient-to-r from-emerald-950 via-[#001028] to-teal-950 px-4 py-2.5 flex items-center justify-between text-white shrink-0 border-b border-emerald-800/50">
          <div className="flex items-center space-x-3">
            <div className="w-14 h-11 rounded-xl overflow-hidden shadow-md border border-[#FFCC00]/50 shrink-0 bg-[#061710]">
              <img
                src={getSubjectThumbnail(selectedSubjectObj.name)}
                alt={selectedSubjectObj.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-black text-white">
                  {selectedSubjectObj.name}
                </span>
                <span className="bg-[#FFCC00] text-[#00332A] text-[9.5px] font-black px-1.5 py-0.2 rounded-md">
                  {selectedExam}
                </span>
              </div>
              <p className="text-[11px] text-emerald-200 font-medium">
                {filteredQuestions.length} High-Yield Repeated Questions &amp; Step-by-Step Solutions
              </p>
            </div>
          </div>
        </div>

        {/* ── Subject Horizontal Bar (Organized under Subject) ── */}
        <div className="bg-white px-4 py-2 border-b border-[#E4EAE8] shrink-0 shadow-xs">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-extrabold text-[#10201D] uppercase tracking-wide flex items-center space-x-1.5">
              <span>📚</span>
              <span>Select Subject to View Questions &amp; Answers:</span>
            </span>
            <span className="text-[11px] text-[#66736F] font-bold">
              {filteredQuestions.length} Questions
            </span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {MAJOR_SUBJECTS.map(subject => {
              const isSelected = selectedSubjectId === subject.id;
              return (
                <button
                  key={subject.id}
                  type="button"
                  onClick={() => {
                    setSelectedSubjectId(subject.id);
                    setVisibleCount(15);
                  }}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-[#001028] text-white border-[#001028] shadow-md ring-2 ring-[#FFCC00]/50 font-black'
                      : 'bg-[#F7F9F8] text-[#10201D] border-[#E4EAE8] hover:border-[#001028]'
                  }`}
                >
                  <span className="text-sm">{subject.icon}</span>
                  <span className="whitespace-nowrap">{subject.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Search Bar inside Subject ── */}
        <div className="px-4 py-2 bg-[#F0F4F2] flex items-center justify-between gap-3 shrink-0 border-b border-[#E4EAE8]">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={`Search in ${selectedSubjectObj.name}...`}
              className="w-full bg-white border border-[#D0DBD8] rounded-xl px-3 py-1.5 text-xs text-[#10201D] placeholder-[#8A9692] focus:outline-none focus:border-[#001028] shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1.5 text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
          <div className="hidden sm:flex items-center space-x-1 text-[11px] font-semibold text-[#001028] bg-emerald-100/60 px-2.5 py-1 rounded-lg shrink-0">
            <span>💡 Tap &quot;View Solution&quot; for full working</span>
          </div>
        </div>

        {/* ── Questions List with Full Solutions ── */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-4">
          {displayedQuestions.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#CBD5E1] p-6">
              <span className="text-3xl block mb-2">🔍</span>
              <h3 className="font-extrabold text-sm text-[#10201D]">No questions matched your search</h3>
              <p className="text-xs text-[#66736F] mt-1">Try another keyword or select another subject.</p>
            </div>
          ) : (
            displayedQuestions.map((q: any, idx: number) => {
              const qId = q.id || idx;
              const isSolutionOpen = Boolean(expandedSolutions[qId]);
              const qText = String(q.text || q.question || '');
              const topicName = String(q.topic || 'General');
              const repeatYears: number[] = Array.isArray(q.repeatYears) ? q.repeatYears : (q.year ? [Number(q.year)] : []);
              const repeatCount = q.repeatCount || repeatYears.length || 1;
              const isRep = Boolean(q.isRepeated || repeatCount > 1);

              // Safe options extraction
              let optionsList: { key: string; text: string }[] = [];
              if (Array.isArray(q.options)) {
                optionsList = q.options.map((opt: any, i: number) => {
                  if (!opt) return { key: String.fromCharCode(65 + i), text: '' };
                  if (typeof opt === 'string') {
                    return { key: String.fromCharCode(65 + i), text: opt };
                  }
                  return {
                    key: String(opt.key || String.fromCharCode(65 + i)),
                    text: String(opt.text || opt.value || '')
                  };
                });
              } else if (q.optionsMap && typeof q.optionsMap === 'object') {
                optionsList = Object.entries(q.optionsMap).map(([k, v]) => ({
                  key: String(k),
                  text: String(v)
                }));
              }

              const correctOpt = String(q.correctAnswer ?? q.correct_option ?? q.answer ?? '').toUpperCase().trim();

              return (
                <div
                  key={qId}
                  className="bg-white rounded-2xl border border-[#E4EAE8] shadow-subtle p-4 sm:p-5 hover:border-[#001028]/50 transition-all duration-150 text-left"
                >
                  {/* Top Badges & Subject Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#F0F4F2]">
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-[#001028] text-white text-[10px] font-black flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-[#001028]">
                        {selectedSubjectObj.name}
                      </span>
                      <span className="text-[#8A9692]">•</span>
                      <span className="text-[11px] font-medium text-[#66736F] bg-gray-100 px-2 py-0.5 rounded-md truncate max-w-[200px]">
                        {topicName}
                      </span>
                    </div>

                    {/* Repeat frequency badge */}
                    {isRep && (
                      <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-[10px] font-black">
                        <span>🔥</span>
                        <span>Repeated {repeatCount}x in {selectedExam}</span>
                        {repeatYears.length > 0 && (
                          <span className="text-amber-800/80 font-bold hidden sm:inline">
                            ({repeatYears.join(', ')})
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Question Text */}
                  <div className="mt-3">
                    <p className="text-[13.5px] sm:text-[14px] font-semibold text-[#10201D] leading-relaxed whitespace-pre-line">
                      {qText}
                    </p>
                  </div>

                  {/* Multiple Choice Options List */}
                  {optionsList.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-1">
                      {optionsList.map(opt => {
                        const isThisCorrect = isSolutionOpen && (opt.key === correctOpt || opt.text === correctOpt);
                        return (
                          <div
                            key={opt.key}
                            className={`p-2.5 rounded-xl border text-left text-xs transition flex items-start space-x-2 ${
                              isThisCorrect
                                ? 'bg-emerald-50 border-emerald-500 font-bold text-emerald-950 shadow-2xs'
                                : 'bg-[#F7F9F8] border-[#E4EAE8] text-[#334155]'
                            }`}
                          >
                            <span
                              className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 ${
                                isThisCorrect
                                  ? 'bg-[#001028] text-[#FFD600]'
                                  : 'bg-white border border-[#CBD5E1] text-[#64748B]'
                              }`}
                            >
                              {opt.key}
                            </span>
                            <span className="leading-snug pt-0.5">{opt.text}</span>
                            {isThisCorrect && (
                              <span className="ml-auto text-emerald-700 font-black text-xs shrink-0">
                                ✓ Correct
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Action Bar: Toggle Solution & Ask PlugAI */}
                  <div className="mt-3.5 pt-3 border-t border-[#F0F4F2] flex flex-wrap items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => toggleSolution(qId)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer shadow-xs ${
                        isSolutionOpen
                          ? 'bg-[#001028] text-white hover:bg-[#00382E]'
                          : 'bg-[#FFCC00] hover:bg-[#FFD633] text-[#00332A] font-black'
                      }`}
                    >
                      <span>{isSolutionOpen ? '🙈 Hide Solution' : '👁️ View Step-by-Step Solution'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => openAiTutor({ question: q, subject: selectedSubjectObj.name, topic: topicName })}
                      className="px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#001028] border border-emerald-300 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
                    >
                      <span>⚡ Ask PlugAI Breakdown</span>
                    </button>
                  </div>

                  {/* Expanded Step-by-Step Solution & Blackboard Working */}
                  {isSolutionOpen && (
                    <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#061C14] to-[#04140E] border-2 border-[#C4823F] p-4 text-white shadow-xl animate-fade-in text-left space-y-2.5">
                      <div className="flex items-center justify-between border-b border-[#C4823F]/40 pb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-base">📋</span>
                          <span className="text-xs font-black uppercase tracking-wider text-[#FFD600]">
                            Examiner Working &amp; Verified Solution
                          </span>
                        </div>
                        {correctOpt && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#FFD600] text-[#00332A] text-xs font-black">
                            Option {correctOpt}
                          </span>
                        )}
                      </div>

                      {/* Detailed Working / Explanation */}
                      <div className="text-xs sm:text-sm text-emerald-100 leading-relaxed space-y-2">
                        {q.explanation ? (
                          <p className="whitespace-pre-line font-mono sm:font-sans">
                            {String(q.explanation)}
                          </p>
                        ) : (
                          <p className="italic text-emerald-300/80">
                            The correct option is <strong>{correctOpt}</strong>. This question tests core syllabus concepts in {topicName}.
                          </p>
                        )}
                      </div>

                      {/* Examiner Strategy Tip */}
                      <div className="bg-[#002B22] rounded-xl p-2.5 border border-emerald-600/40 text-[11px] text-emerald-200 flex items-start space-x-2">
                        <span className="text-sm shrink-0">💡</span>
                        <p>
                          <strong>Exam Tip:</strong> Notice how this question recurs across past papers. When {selectedExam} repeats this question, the principle and formulas remain identical.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}

          {/* Load More Button */}
          {filteredQuestions.length > visibleCount && (
            <div className="text-center pt-2 pb-4">
              <button
                type="button"
                onClick={() => setVisibleCount(prev => prev + 15)}
                className="px-6 py-2.5 rounded-2xl bg-[#001028] hover:bg-[#00382E] text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Load More Questions ({filteredQuestions.length - visibleCount} remaining) ↓
              </button>
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div className="bg-[#F7F9F8] px-4 sm:px-6 py-3 border-t border-[#E4EAE8] flex items-center justify-between shrink-0">
          <p className="text-[11px] text-[#66736F] font-medium hidden sm:block">
            Repeated questions account for up to <strong>40%</strong> of official exams. Master them here!
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-[#001028] hover:bg-[#00382E] text-white text-xs font-bold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
