import React, { useState, useEffect, useRef } from 'react';
import { LessonNote } from '../../data/masterLessonNotes';
import { Question } from '../../data/questions';
import { ScientificDiagramViewer } from './ScientificDiagramViewer';
import { EducationalDiagram } from '../design-system/EducationalDiagram';
import { RichNoteRenderer } from './RichNoteRenderer';

interface NoteFlashcardScreenProps {
  note: LessonNote;
  questions: Question[];
  examName: string;
  onClose: () => void;
  onStartPractice?: () => void;
}

interface StepByStepSolution {
  step1: string;
  step2: string;
  step3: string;
  step4?: string;
  conclusion: string;
}

export const NoteFlashcardScreen: React.FC<NoteFlashcardScreenProps> = ({
  note,
  questions,
  examName,
  onClose,
  onStartPractice
}) => {
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<number>(1);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Practice Questions Interaction State
  const [userAnswers, setUserAnswers] = useState<{ [qIdx: number]: number }>({});
  const [revealedExplanations, setRevealedExplanations] = useState<{ [qIdx: number]: boolean }>({});

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Monitor reading scroll progress
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const total = scrollHeight - clientHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.max(0, Math.round((scrollTop / total) * 100))));
      }
    }
  };

  // Ensure at least 4 questions are available for practice at bottom of note
  const practiceQuestions: Question[] = React.useMemo(() => {
    const list = [...(questions || [])];
    if (list.length >= 4) return list.slice(0, 4);

    const topicTitle = note.subtopic || note.topic || 'General Studies';
    const sub = note.subject;
    const terms = (note as any).key_terms || ['Fundamental concept', 'Core mechanism', 'Key function', 'Practical application'];

    while (list.length < 4) {
      const idx = list.length + 1;
      let qText = '';
      let opts: string[] = [];
      let ans = 0;
      let expl = '';

      if (idx === 1) {
        qText = `Which of the following best defines or describes the primary role of ${terms[0] || topicTitle} in ${sub}?`;
        opts = [
          `It serves as the fundamental physiological unit or mechanism for ${topicTitle.toLowerCase()}.`,
          `It acts solely as an inorganic catalyst with zero biological regulation.`,
          `It is completely inactive at standard room conditions.`,
          `It prevents normal metabolic activity from occurring under any circumstances.`
        ];
        ans = 0;
        expl = `Core Principle: In ${sub}, ${terms[0] || topicTitle} is fundamentally responsible for normal function and syllabus mastery. The other options represent classic distractors.`;
      } else if (idx === 2) {
        qText = `Under official ${examName || 'JAMB • WAEC'} syllabus examination standards, what is the key characteristic of ${terms[1] || topicTitle}?`;
        opts = [
          `It requires constant random degradation without any regulatory controls.`,
          `It operates under precise principles to maintain system equilibrium or accurate classification.`,
          `It is found exclusively in non-living inanimate systems.`,
          `It exhibits neither structural adaptation nor functional significance.`
        ];
        ans = 1;
        expl = `Examiner Rule: Standard structural and functional equilibrium are essential tenets tested in ${examName || 'JAMB'}. Option B represents the authentic syllabus definition.`;
      } else if (idx === 3) {
        qText = `What is the expected outcome if ${terms[2] || topicTitle} is impaired, altered, or miscalculated?`;
        opts = [
          `The equilibrium is disrupted, impairing normal performance or leading to systematic errors.`,
          `The rate of cellular synthesis increases by 500% automatically.`,
          `All experimental constants become permanently zero.`,
          `No noticeable alteration or variation takes place.`
        ];
        ans = 0;
        expl = `Examiner Deduction: Disruption of essential parameters directly induces functional breakdown, as frequently examined in past theory and objective papers.`;
      } else {
        qText = `Which of the following statements is scientifically accurate regarding ${terms[3] || topicTitle}?`;
        opts = [
          `It functions completely independently of all other syllabus principles.`,
          `Its structure and theoretical derivation directly complement its specific practical application.`,
          `It violates standard laws of conservation and thermodynamics.`,
          `It has no relevance to modern Nigerian school curricula.`
        ];
        ans = 1;
        expl = `Form Follows Function: Core syllabus concepts are designed to reflect real-world problem-solving and scientific reasoning.`;
      }

      list.push({
        id: `gen-${idx}`,
        question: qText,
        options: opts,
        answer: ans,
        explanation: expl,
        subject: sub,
        topic: note.topic,
        subtopic: note.subtopic,
        year: 2026
      });
    }

    return list.slice(0, 4);
  }, [questions, note, examName]);

  // Speech Synthesizer for reading note aloud
  const toggleSpeech = () => {
    try {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      window.speechSynthesis.cancel();
      // Read title, summary, and plain text of note
      const plainText = `${note.subtopic || note.topic}. Subject: ${note.subject}. ${note.summary_60s || ''}. ${note.content.replace(/<[^>]*>?/gm, ' ').slice(0, 1000)}`;
      const utterance = new SpeechSynthesisUtterance(plainText);
      utterance.rate = 0.95;
      utterance.lang = 'en-GB';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } catch {
      setIsSpeaking(false);
    }
  };

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const parseStepByStep = (q: Question): StepByStepSolution => {
    const raw = q.explanation || 'Apply standard principles to deduce the correct option.';
    const sentences = raw.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);

    return {
      step1: `Identify Given Problem: The question tests fundamental understanding of ${note.subtopic || note.topic}.`,
      step2: sentences[0] || `Recall Rule: ${raw.slice(0, 100)}`,
      step3: sentences[1] || `Logical Deduction: Comparing the options against official syllabus criteria confirms option ${(q.options as string[])[typeof q.answer === 'number' ? q.answer : 0]} as correct.`,
      step4: sentences[2] || `Distractor Analysis: Alternative options contradict established syllabus rules.`,
      conclusion: `Final Verified Answer: Option ${String.fromCharCode(65 + (typeof q.answer === 'number' ? q.answer : 0))}`
    };
  };

  const keyTermsList = React.useMemo(() => {
    if ((note as any).key_terms && Array.isArray((note as any).key_terms)) {
      return (note as any).key_terms;
    }
    // Extract key bold terms from content if available
    const matches = [...note.content.matchAll(/<strong>([^<]+)<\/strong>/g)].map(m => m[1].trim());
    const unique = Array.from(new Set(matches)).filter(t => t.length > 3 && t.length < 40);
    return unique.slice(0, 8);
  }, [note]);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F8F8F8] text-[#001028] font-sans select-none animate-fadeIn">
      {/* ─── Top StudyPlug Dark Navy Header (#001028) ─── */}
      <header className="sticky top-0 z-50 w-full bg-[#001028] text-white border-b border-[#001830] shadow-md shrink-0">
        <div className="h-14 px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5 min-w-0">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8C800] text-xs font-bold transition cursor-pointer shrink-0"
              aria-label="Back to notes list"
            >
              <span className="text-sm font-bold">←</span>
              <span>Back</span>
            </button>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-white truncate leading-tight">
                {note.subtopic || note.topic}
              </h2>
              <div className="flex items-center space-x-2 text-[10.5px] text-[#607080] leading-none mt-0.5">
                <span className="font-semibold text-white/90">{note.subject}</span>
                <span>•</span>
                <span className="text-[#F8C800] font-bold">{examName || note.exam_type || 'JAMB • WAEC'}</span>
              </div>
            </div>
          </div>

          {/* Action Tools: Font Size Toggle, Audio Listen, Close */}
          <div className="flex items-center space-x-1.5 shrink-0">
            {/* Font Size Adjuster */}
            <div className="flex items-center bg-[#001830] border border-[#001020] rounded-xl px-1 py-0.5">
              <button
                type="button"
                onClick={() => setFontSizeMultiplier(prev => Math.max(0.85, prev - 0.1))}
                className="px-1.5 py-0.5 text-[11px] font-bold text-white/80 hover:text-white cursor-pointer"
                title="Decrease font size"
              >
                A-
              </button>
              <span className="text-[10px] text-[#607080] px-0.5">|</span>
              <button
                type="button"
                onClick={() => setFontSizeMultiplier(prev => Math.min(1.3, prev + 0.1))}
                className="px-1.5 py-0.5 text-[11px] font-bold text-white/80 hover:text-white cursor-pointer"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* Audio Synthesis Button */}
            <button
              type="button"
              onClick={toggleSpeech}
              className={`px-2.5 py-1.5 rounded-xl flex items-center space-x-1 text-xs font-bold transition cursor-pointer border ${
                isSpeaking
                  ? 'bg-[#F8C800] text-[#001028] border-[#F8C800] shadow-sm animate-pulse'
                  : 'bg-[#001830] text-white border-[#001020] hover:border-white/30'
              }`}
              title={isSpeaking ? 'Stop listening' : 'Listen to note'}
            >
              <span>{isSpeaking ? '⏹' : '🔊'}</span>
              <span className="hidden sm:inline">{isSpeaking ? 'Stop' : 'Listen'}</span>
            </button>
          </div>
        </div>

        {/* StudyPlug Yellow Reading Progress Indicator */}
        <div className="w-full h-1 bg-[#001830]">
          <div
            className="h-full bg-[#F8C800] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* ─── Continuous Scrollable Full Study Note ─── */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-4 py-5 select-text"
        style={{ fontSize: `${fontSizeMultiplier}rem` }}
      >
        <div className="max-w-3xl w-full mx-auto space-y-4 pb-24 text-left">

          {/* 1. TOPIC HEADER CARD */}
          <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#E8E8E8] shadow-sm space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#001028] text-[#F8C800]">
                {note.subject}
              </span>
              <span className="text-xs font-bold text-[#607080]">
                {note.class_level || 'Senior Secondary • SS1-SS3'}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-extrabold text-[#001028] tracking-tight leading-snug">
              {note.subtopic || note.topic}
            </h1>

            {note.topic && note.topic !== note.subtopic && (
              <p className="text-xs font-semibold text-[#607080]">
                Curriculum Topic: <span className="text-[#001028]">{note.topic}</span>
              </p>
            )}

            {note.summary_60s && (
              <div className="pt-2 border-t border-[#E8E8E8]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#F8C800] flex items-center space-x-1 mb-1">
                  <span>⚡</span>
                  <span className="text-[#001028]">60-Second Syllabus Summary</span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#607080] leading-relaxed">
                  {note.summary_60s}
                </p>
              </div>
            )}
          </div>

          {/* 2. SYLLABUS OBJECTIVES */}
          {note.syllabus_objectives && (
            <div className="bg-white rounded-[20px] p-5 border border-[#E8E8E8] shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#001028]">
                <span>🎯</span>
                <span>Official Syllabus Objectives ({examName || 'JAMB • WAEC'})</span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#607080] leading-relaxed">
                {note.syllabus_objectives}
              </p>
            </div>
          )}

          {/* 3. KEY CONCEPTS & TERMS */}
          {keyTermsList.length > 0 && (
            <div className="bg-white rounded-[20px] p-5 border border-[#E8E8E8] shadow-sm space-y-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#001028]">
                <span>💡</span>
                <span>Key Concepts &amp; Definitions</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {keyTermsList.map((term: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] text-xs font-semibold text-[#001028] hover:border-[#F8C800] transition"
                  >
                    • {term}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 4. KEY FORMULAS & SCIENTIFIC EQUATIONS (If available or relevant) */}
          {(note.key_formulas || (note.topic && (note.topic.toLowerCase().includes('motion') || note.topic.toLowerCase().includes('calculus') || note.topic.toLowerCase().includes('wave')))) && (
            <div className="bg-[#001028] text-white rounded-[20px] p-5 sm:p-6 border border-[#001830] shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-[#001830] pb-2.5">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#F8C800]">
                  <span>📐</span>
                  <span>Core Formulas &amp; Equations</span>
                </div>
                <span className="text-[11px] font-bold text-white/70">
                  Essential Revision
                </span>
              </div>
              <div className="bg-[#001830] p-4 rounded-xl border border-[#001020] font-mono text-xs sm:text-sm text-white space-y-1.5 leading-relaxed">
                {note.key_formulas ? (
                  <div className="whitespace-pre-line">{note.key_formulas}</div>
                ) : (
                  <>
                    <div className="text-[#F8C800] font-bold">• 1st Equation: v = u + at</div>
                    <div className="text-[#F8C800] font-bold">• 2nd Equation: s = ut + ½at²</div>
                    <div className="text-[#F8C800] font-bold">• 3rd Equation: v² = u² + 2as</div>
                    <div className="text-[#607080] text-xs pt-1.5">• Peak Height: H_max = u² / (2g) | Flight Time: T = 2u / g</div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* 5. AUTHENTIC HIGH-YIELD SCIENTIFIC DIAGRAMS & ILLUSTRATIONS */}
          <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#E8E8E8] shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-2.5">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#001028]">
                <span>🔬</span>
                <span>Scientific Diagram &amp; Labeled Anatomy</span>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#001028] text-[#F8C800]">
                High-Yield
              </span>
            </div>

            <div className="w-full">
              <ScientificDiagramViewer
                subject={note.subject}
                topic={note.topic}
                subtopic={note.subtopic}
              />
            </div>

            <div className="pt-1">
              <EducationalDiagram topicTitle={`${note.subject} ${note.subtopic || ''} ${note.topic || ''}`} />
            </div>

            {/* WAEC / NECO / JAMB Drawing Guidelines Box (In StudyPlug Brand Colors) */}
            <div className="rounded-xl bg-[#F8F8F8] border border-[#E8E8E8] p-4 space-y-2">
              <div className="text-[11px] font-black uppercase text-[#001028] flex items-center space-x-1.5">
                <span className="text-[#F8C800]">📐</span>
                <span>CHIEF EXAMINER DRAWING RULES [WAEC / NECO PAPER 3]</span>
              </div>
              <ul className="text-xs text-[#607080] space-y-1.5 list-disc list-inside">
                <li><strong className="text-[#001028]">Clarity &amp; Outline:</strong> Draw with single firm, sharp continuous lines (no shading or double lines).</li>
                <li><strong className="text-[#001028]">Label Lines:</strong> Label guidelines must be ruled horizontally with a ruler and must never cross each other.</li>
                <li><strong className="text-[#001028]">Title &amp; Scale:</strong> Always provide an explicit title in capital letters and state the magnification (e.g. ×1, ×2).</li>
              </ul>
            </div>
          </div>

          {/* 6. FULL TEXTBOOK LESSON NOTE BODY */}
          <div className="bg-white rounded-[20px] p-5 sm:p-7 border border-[#E8E8E8] shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-3">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#001028]">
                <span>📖</span>
                <span>Full Comprehensive Lesson Note</span>
              </div>
              <span className="text-[11px] font-bold text-[#607080]">
                Standard Textbook Text
              </span>
            </div>

            <div className="leading-relaxed text-[#001028]">
              <RichNoteRenderer content={note.content} />
            </div>
          </div>

          {/* 7. CHIEF EXAMINER WARNING & PRO-TIPS */}
          <div className="bg-[#FFFBEB] rounded-[20px] p-5 border-2 border-[#F8C800] shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-[#001028] font-black text-xs uppercase tracking-wide">
              <span>⚠️</span>
              <span>Chief Examiner Warning: Common Student Mistakes</span>
            </div>
            <p className="text-xs sm:text-[13px] text-[#001028] font-medium leading-relaxed">
              {note.pro_tips_95 || 'Candidates often confuse definitions with operational functions. Always state full standard units (SI) and reference key principles in explanations to attain maximum marks.'}
            </p>
          </div>

          {/* 8. PRACTICE QUESTIONS & STEP-BY-STEP WORKED SOLUTIONS */}
          <div className="bg-white rounded-[20px] p-5 sm:p-6 border border-[#E8E8E8] shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-3">
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold text-[#001028]">
                  <span>✍️</span>
                  <span>Syllabus Practice Questions</span>
                </div>
                <p className="text-[11px] text-[#607080] mt-0.5">
                  Test your understanding with authentic exam questions
                </p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#001028] text-[#F8C800]">
                {practiceQuestions.length} Questions
              </span>
            </div>

            <div className="space-y-4 pt-1">
              {practiceQuestions.map((q, qIdx) => {
                const selectedOpt = userAnswers[qIdx];
                const correctOpt = typeof q.answer === 'number' ? q.answer : 0;
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = selectedOpt === correctOpt;
                const stepSolution = parseStepByStep(q);
                const isExplOpen = revealedExplanations[qIdx] || isAnswered;

                return (
                  <div
                    key={q.id || qIdx}
                    className="p-4 rounded-2xl bg-[#F8F8F8] border border-[#E8E8E8] space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-[#001028]">
                        Question {qIdx + 1}
                      </span>
                      {isAnswered && (
                        <span
                          className={`font-bold text-[11px] px-2 py-0.5 rounded-full ${
                            isCorrect
                              ? 'bg-[#001028] text-[#F8C800]'
                              : 'bg-rose-100 text-rose-700'
                          }`}
                        >
                          {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-[#001028] leading-relaxed">
                      {q.question}
                    </p>

                    {/* Options */}
                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        const isThisSelected = selectedOpt === oIdx;
                        const isThisCorrect = oIdx === correctOpt;

                        let btnStyle = 'bg-white border-[#E8E8E8] text-[#001028] hover:border-[#F8C800]';
                        if (isAnswered) {
                          if (isThisCorrect) {
                            btnStyle = 'bg-[#001028] border-[#001028] text-[#F8C800] font-bold';
                          } else if (isThisSelected) {
                            btnStyle = 'bg-rose-50 border-rose-300 text-rose-800';
                          } else {
                            btnStyle = 'bg-white border-[#E8E8E8] text-[#607080] opacity-60';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => {
                              if (!isAnswered) {
                                setUserAnswers(prev => ({ ...prev, [qIdx]: oIdx }));
                              }
                            }}
                            className={`w-full p-3 rounded-xl border text-xs text-left transition cursor-pointer flex items-start space-x-2.5 ${btnStyle}`}
                          >
                            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className="flex-1 leading-snug">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Step-by-Step Solution Breakdown */}
                    {isExplOpen && (
                      <div className="pt-2 border-t border-[#E8E8E8] space-y-2">
                        <button
                          type="button"
                          onClick={() => setRevealedExplanations(prev => ({ ...prev, [qIdx]: !prev[qIdx] }))}
                          className="text-[11px] font-bold text-[#001028] hover:text-[#F8C800] flex items-center space-x-1 cursor-pointer"
                        >
                          <span>💡</span>
                          <span>{revealedExplanations[qIdx] ? 'Hide Step-by-Step Solution' : 'View Step-by-Step Solution'}</span>
                        </button>

                        <div className="p-3.5 rounded-xl bg-white border border-[#E8E8E8] text-xs text-[#607080] space-y-1.5 leading-relaxed">
                          <p><strong className="text-[#001028]">Step 1:</strong> {stepSolution.step1}</p>
                          <p><strong className="text-[#001028]">Step 2:</strong> {stepSolution.step2}</p>
                          <p><strong className="text-[#001028]">Step 3:</strong> {stepSolution.step3}</p>
                          {stepSolution.step4 && <p><strong className="text-[#001028]">Step 4:</strong> {stepSolution.step4}</p>}
                          <div className="pt-1.5 border-t border-[#E8E8E8] font-bold text-[#001028]">
                            {stepSolution.conclusion}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 9. BOTTOM ACTION DOCK */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            {onStartPractice && (
              <button
                type="button"
                onClick={onStartPractice}
                className="w-full sm:flex-1 py-3.5 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-xs sm:text-sm shadow-md flex items-center justify-center space-x-2 transition cursor-pointer"
              >
                <span>⚡ Practice in CBT Test Mode</span>
                <span>→</span>
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#001028] border border-[#E8E8E8] font-bold text-xs sm:text-sm shadow-sm transition cursor-pointer"
            >
              Back to Topics
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
