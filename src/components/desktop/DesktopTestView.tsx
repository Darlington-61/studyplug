import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { ComprehensionPassageViewer } from '../common/ComprehensionPassageViewer';

export const DesktopTestView: React.FC = () => {
  const {
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
    setActiveView,
    questions,
    selectedSubject,
    selectedSubjects,
    activeExamSubject,
    switchActiveExamSubject,
    selectedYear,
    setSelectedYear,
    availableYears,
    openAiTutor
  } = useApp();

  const [showCalculator, setShowCalculator] = useState<boolean>(false);
  const [calcInput, setCalcInput] = useState<string>('4*3 - 5');
  const [fontScale, setFontScale] = useState<number>(1.2); // Default enlarged for maximum readability
  const [showTheorySolution, setShowTheorySolution] = useState<boolean>(false);
  const [theoryDrafts, setTheoryDrafts] = useState<{ [qNum: number]: string }>({});

  useEffect(() => {
    setShowTheorySolution(false);
  }, [currentQuestion]);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          submitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [setTimeRemaining, submitTest]);

  const formatTimer = (totalSec: number) => {
    const hours = Math.floor(totalSec / 3600);
    const minutes = Math.floor((totalSec % 3600) / 60);
    const seconds = totalSec % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentQuestion - 1] || questions[0];
  const selectedOption = userAnswers[currentQuestion];
  const isBookmarked = isQuestionBookmarked(currentQ.id);
  const isFlagged = flaggedQuestions.includes(currentQuestion);

  const getPaletteStyle = (num: number) => {
    if (num === currentQuestion) {
      return 'bg-[#FFCC00] text-slate-950 font-black ring-2 ring-white shadow-lg scale-105';
    }
    if (flaggedQuestions.includes(num)) {
      return 'bg-[#EF4444] text-white font-extrabold border border-rose-400';
    }
    if (userAnswers[num]) {
      return 'bg-[#10B981] text-slate-950 font-black border border-emerald-300';
    }
    return 'bg-[#061911] text-emerald-200/80 border border-[#C4823F]/40 hover:border-[#FFCC00] hover:bg-[#0E3526]';
  };

  const displaySubject = activeExamSubject || selectedSubject;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#061710] flex flex-col text-white">
      {/* CBT Top Examination Banner */}
      <div className="bg-[#092218] text-white px-6 py-3.5 shadow-md border-b-[3px] border-[#C4823F]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Left: Subject title & Breadcrumb */}
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setActiveView('subjects')}
              className="w-9 h-9 rounded-xl bg-[#061710] border border-[#C4823F]/50 hover:bg-[#0E3526] flex items-center justify-center text-amber-300 transition cursor-pointer"
              aria-label="Back"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-black text-lg tracking-tight text-white">{displaySubject}</h1>
                <span className="text-[11px] font-bold bg-[#061710] border border-[#C4823F]/50 px-2 py-0.5 rounded-md text-amber-300">
                  {displaySubject.startsWith('BECE')
                    ? 'BECE Junior WAEC Exam Standard'
                    : displaySubject.includes('Post-UTME')
                    ? 'Post-UTME University Screening'
                    : displaySubject.startsWith('WAEC')
                    ? 'WAEC WASSCE Standard'
                    : displaySubject.startsWith('NECO')
                    ? 'NECO SSCE Standard'
                    : displaySubject === 'Physics'
                    ? 'JAMB UTME Physics'
                    : displaySubject === 'Use of English'
                    ? 'JAMB UTME English'
                    : 'JAMB UTME Standard'}
                </span>
                {selectedYear !== 'all' && (
                  <span className="text-[11px] font-black bg-[#FFCC00] text-slate-950 px-2 py-0.5 rounded-md shadow-sm">
                    {selectedYear} CBT Exam
                  </span>
                )}
                {selectedSubjects && selectedSubjects.length > 1 && (
                  <span className="text-[10px] font-mono font-black bg-rose-950 text-rose-300 px-2 py-0.5 rounded-md border border-rose-800">
                    {selectedSubjects.length}-Subject CBT
                  </span>
                )}
              </div>
              <p className="text-[11px] text-emerald-200/70 font-normal">
                Authentic Past Questions • Real CBT Simulation &amp; Blackboard Explanations
              </p>

              {/* Multi-Subject Tabs Bar */}
              {selectedSubjects && selectedSubjects.length > 1 && (
                <div className="flex items-center space-x-2 mt-2 pt-2 border-t border-[#C4823F]/30 overflow-x-auto no-scrollbar">
                  <span className="text-xs font-black uppercase text-[#FFCC00] shrink-0">Switch Subject:</span>
                  {selectedSubjects.map((sub) => {
                    const isActive = displaySubject === sub;
                    return (
                      <button
                        key={sub}
                        type="button"
                        onClick={() => switchActiveExamSubject(sub)}
                        className={`px-3 py-1 rounded-xl text-xs font-black transition cursor-pointer flex items-center space-x-1.5 shrink-0 ${
                          isActive
                            ? 'bg-[#FFCC00] text-slate-950 shadow-md border-2 border-yellow-300 scale-105'
                            : 'bg-[#061911] text-white/80 border border-[#C4823F]/40 hover:bg-[#0E3526]'
                        }`}
                      >
                        <span>{sub}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Center: Live Timer Banner */}
          <div className="flex items-center space-x-3 bg-[#061710] px-5 py-2 rounded-2xl border border-[#C4823F]/60 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFCC00] animate-ping" />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-amber-300">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <div>
              <span className="text-[10px] uppercase font-bold text-emerald-200/70 block -mb-0.5 tracking-wider">
                Time Remaining
              </span>
              <span className="text-xl font-mono font-black tracking-wider text-[#FFCC00]">
                {formatTimer(timeRemaining)}
              </span>
            </div>
          </div>

          {/* Right: Tools, Font Size & Exit */}
          <div className="flex items-center space-x-2.5">
            {/* Font Size Adjuster */}
            <div className="flex items-center space-x-1 bg-white/15 px-2 py-1.5 rounded-xl border border-white/20 text-white">
              <span className="text-[10px] font-bold text-white/70 mr-1 hidden sm:inline">Text Size:</span>
              <button
                type="button"
                onClick={() => setFontScale(prev => Math.max(0.9, +(prev - 0.1).toFixed(2)))}
                className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 text-xs font-black flex items-center justify-center cursor-pointer transition"
                title="Decrease question text size"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontScale(prev => Math.min(1.5, +(prev + 0.1).toFixed(2)))}
                className="w-6 h-6 rounded bg-white/20 hover:bg-white/30 text-xs font-black flex items-center justify-center cursor-pointer transition"
                title="Increase question text size"
              >
                A+
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowCalculator(!showCalculator)}
              className="px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-xs font-bold text-white transition flex items-center space-x-1.5 cursor-pointer border border-white/20"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="16" y1="14" x2="16" y2="18" />
                <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
              </svg>
              <span>{showCalculator ? 'Hide Calc' : 'Calculator'}</span>
            </button>

            {/* PlugAI Tutor Button */}
            <button
              type="button"
              onClick={() => {
                openAiTutor({
                  question: currentQ,
                  userSelectedOption: selectedOption,
                  subject: selectedSubject,
                  topic: currentQ?.topic
                });
              }}
              className="px-3 py-2 rounded-xl bg-[#FFCC00] hover:bg-[#FFE066] text-[#0E382B] text-xs font-black transition flex items-center space-x-1.5 cursor-pointer shadow-sm hover:scale-105"
              title="Ask PlugAI 100% Free Offline Tutor"
            >
              <span>⚡ Ask PlugAI</span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (window.confirm('Are you sure you want to finish and submit your CBT examination?')) {
                  submitTest();
                }
              }}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition cursor-pointer shadow-sm"
            >
              Finish & Submit
            </button>
          </div>
        </div>
      </div>

      {/* Main CBT Workspace Layout */}
      <div className="max-w-7xl mx-auto w-full px-6 py-6 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 8 Columns: Main Question Area */}
        <div className="lg:col-span-8 space-y-5">
          {/* Question Box Card - Classroom Chalkboard */}
          <div className="bg-board-slate rounded-[28px] p-6 md:p-8 border-[6px] border-[#C4823F] outline outline-2 outline-[#75441A] shadow-2xl space-y-6 text-white">
            {/* Top Bar inside question: Number, Tabs & Bookmark */}
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#C4823F]/40 gap-3">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-black text-[#FFCC00] tracking-tight">
                  Question {currentQuestion}
                </span>
                <span className="text-xs font-bold text-emerald-200/80 bg-[#061911] border border-[#C4823F]/40 px-3 py-1 rounded-full">
                  {currentQuestion} of {questions.length} Questions
                </span>
                {currentQ.year && (
                  <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-[#C4823F]/50">
                    JAMB {currentQ.year}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                  {currentQ.topic}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* Flag Button */}
                <button
                  type="button"
                  onClick={() => toggleFlagQuestion(currentQuestion)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                    isFlagged
                      ? 'bg-rose-900/80 border-rose-400 text-rose-200'
                      : 'border-[#C4823F]/40 bg-[#061911] text-emerald-200 hover:bg-[#0E3526]'
                  }`}
                >
                  {isFlagged ? '🚩 Flagged' : 'Flag for Review'}
                </button>

                {/* Bookmark Flag Button */}
                <button
                  type="button"
                  onClick={() => toggleBookmarkQuestion(currentQ.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl border transition cursor-pointer ${
                    isBookmarked
                      ? 'bg-[#FFCC00] border-white text-slate-950 font-black'
                      : 'border-[#C4823F]/40 bg-[#061911] text-emerald-200 hover:bg-[#0E3526]'
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={isBookmarked ? '#071F15' : 'none'}
                    stroke={isBookmarked ? '#071F15' : 'currentColor'}
                    strokeWidth="2"
                    className="w-4 h-4"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="text-xs font-bold">
                    {isBookmarked ? 'Saved' : 'Bookmark'}
                  </span>
                </button>

                {/* Ask PlugAI Button */}
                <button
                  type="button"
                  onClick={() => {
                    openAiTutor({
                      question: currentQ,
                      userSelectedOption: selectedOption,
                      subject: selectedSubject,
                      topic: currentQ?.topic
                    });
                  }}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-[#FFCC00] hover:bg-amber-300 text-slate-950 text-xs font-black transition cursor-pointer shadow-md hover:scale-105"
                  title="Ask PlugAI to explain this question or break down formula"
                >
                  <span>⚡ Ask AI</span>
                </button>
              </div>
            </div>

            {/* Question Text & Reading Comprehension Passage */}
            <div className="py-3 space-y-4">
              <ComprehensionPassageViewer
                text={currentQ.text}
                passage={currentQ.passage}
                fontScale={fontScale}
                subject={selectedSubject}
                defaultExpanded={true}
              />

              {/* Diagram / Graph Image Support */}
              {currentQ.imageUrl && (
                <div className="my-4 flex justify-center bg-[#061710] border-2 border-[#C4823F]/60 rounded-2xl p-4">
                  <img src={currentQ.imageUrl} alt="Question Diagram" className="max-h-72 object-contain rounded-lg shadow-sm" />
                </div>
              )}
              {currentQ.imageSvg && (
                <div
                  className="my-4 flex justify-center bg-[#061710] border-2 border-[#C4823F]/60 rounded-2xl p-4 overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: currentQ.imageSvg }}
                />
              )}
            </div>

            {/* Interactive Question Workspace: Theory / Practical vs Multiple Choice */}
            {(() => {
              const isTheory = currentQ.subject?.includes('(Theory)') || currentQ.topic?.includes('Theory') || (currentQ.options?.[0]?.text && currentQ.options[0].text.includes('[Theory'));
              const isPractical = currentQ.subject?.includes('(Practical)') || currentQ.topic?.includes('Practical') || (currentQ.options?.[0]?.text && currentQ.options[0].text.includes('[Practical'));

              if (isTheory || isPractical) {
                return (
                  <div className="space-y-5 pt-2">
                    {/* Header Tag */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#061911] border border-[#C4823F]/50 text-white">
                      <div className="flex items-center space-x-2.5">
                        <span className="text-xl">{isPractical ? '🔬' : '📋'}</span>
                        <div>
                          <div className="text-xs font-black text-amber-300">
                            {isPractical ? 'WAEC / NECO Paper 3 (Laboratory Practical)' : 'WAEC / NECO Paper 2 (Theory & Essay)'}
                          </div>
                          <div className="text-[11px] text-emerald-200/80 font-medium">
                            {isPractical ? 'Read specimen details & record observations' : 'Show all working, formulas, and steps for full marks'}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => selectAnswer(currentQuestion, 'A')}
                        className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                          selectedOption === 'A'
                            ? 'bg-[#C4823F] text-slate-950 font-black shadow-sm'
                            : 'bg-[#061710] border border-[#C4823F]/50 text-amber-300 hover:bg-[#0E3526]'
                        }`}
                      >
                        {selectedOption === 'A' ? '✔ Attempted' : 'Mark as Attempted'}
                      </button>
                    </div>

                    {/* Student Working Draft Area */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-emerald-100 flex items-center justify-between">
                        <span>✍️ Your Scratchpad / Working Steps:</span>
                        <span className="text-[10.5px] text-emerald-300/60 font-normal">Self-practice notes (saved per question)</span>
                      </label>
                      <textarea
                        rows={4}
                        placeholder={isPractical ? "Record your observations, readings, units, and precautions here..." : "Type your calculation steps, formulas, or answer outline here..."}
                        value={theoryDrafts[currentQuestion] || ''}
                        onChange={(e) => setTheoryDrafts({ ...theoryDrafts, [currentQuestion]: e.target.value })}
                        className="w-full p-4 rounded-2xl border-2 border-[#C4823F]/50 bg-[#061710] text-xs font-mono text-white placeholder-emerald-200/30 focus:outline-none focus:border-[#FFCC00] focus:ring-2 focus:ring-[#FFCC00]/20 transition"
                      />
                    </div>

                    {/* Toggle Solution Button */}
                    <button
                      type="button"
                      onClick={() => setShowTheorySolution(!showTheorySolution)}
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#0E382B] to-[#164E3D] hover:from-[#134837] hover:to-[#1B5D49] text-white font-extrabold text-xs flex items-center justify-center space-x-2 transition shadow-md cursor-pointer border border-[#C4823F]/60"
                    >
                      <span>{showTheorySolution ? '🔼 Hide Official Marking Scheme' : '✨ Reveal Official WAEC/NECO Marking Scheme & Chalkboard Solution'}</span>
                    </button>

                    {/* Classroom Blackboard Solution Display */}
                    {showTheorySolution && (
                      <div className="rounded-2xl p-1.5 bg-[#C4823F] shadow-xl animate-fadeIn">
                        <div className="rounded-xl p-5 bg-[#0C2E20] text-white space-y-4">
                          <div className="flex items-center justify-between border-b border-white/20 pb-2.5">
                            <span className="text-xs font-black text-[#FFCC00] flex items-center space-x-1.5">
                              <span>🎓</span>
                              <span>StudyPlug Classroom Board • Official Marking Scheme</span>
                            </span>
                            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                              Method [M1] & Accuracy [A1] Marks
                            </span>
                          </div>

                          <div className="text-xs text-slate-100 font-sans leading-relaxed whitespace-pre-line select-text">
                            {currentQ.explanation || 'Apply standard WAEC / NECO marking scheme steps.'}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div className="space-y-3.5 pt-2">
                  {currentQ.options.map((opt) => {
                    const isSelected = selectedOption === opt.key;
                    return (
                      <div
                        key={opt.key}
                        onClick={() => selectAnswer(currentQuestion, opt.key)}
                        className={`w-full p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all duration-150 group ${
                          isSelected
                            ? 'border-white bg-[#FFCC00] text-slate-950 font-black shadow-xl ring-2 ring-[#FFCC00]'
                            : 'border-[#C4823F]/50 bg-[#061911]/90 hover:border-[#FFCC00] hover:bg-[#0A2E20] text-emerald-100'
                        }`}
                      >
                        {/* Left: Option Letter Badge & Value */}
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-base transition ${
                              isSelected
                                ? 'bg-[#071F15] text-[#FFCC00] shadow'
                                : 'bg-[#0B2A1E] text-amber-300 border border-[#C4823F]/40 group-hover:border-[#FFCC00]'
                            }`}
                          >
                            {opt.key}
                          </div>
                          <span
                            style={{ fontSize: `${1.1 * fontScale}rem`, lineHeight: 1.4 }}
                            className={`font-bold ${isSelected ? 'text-slate-950' : 'text-white'}`}
                          >
                            {opt.text}
                          </span>
                        </div>

                        {/* Right: Selected Checkmark indicator */}
                        {isSelected ? (
                          <div className="w-7 h-7 rounded-full bg-[#071F15] flex items-center justify-center text-[#FFCC00] shadow-sm">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        ) : (
                          <span className="text-xs text-amber-300/40 font-mono opacity-0 group-hover:opacity-100 transition">
                            [{opt.key}]
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Navigation Actions Bar */}
            <div className="pt-6 border-t border-[#C4823F]/40 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
                  className="px-5 py-2.5 rounded-xl border border-[#C4823F]/40 bg-[#061911] text-amber-200 hover:bg-[#0E3526] font-bold text-xs transition flex items-center space-x-1.5 shadow-sm cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={() => clearAnswer(currentQuestion)}
                  className="px-4 py-2.5 rounded-xl border border-[#C4823F]/40 bg-[#061911] text-emerald-200/70 hover:text-white font-bold text-xs transition cursor-pointer"
                >
                  Clear Response
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setCurrentQuestion(Math.min(questions.length, currentQuestion + 1))}
                  className="px-8 py-2.5 rounded-xl bg-[#C4823F] hover:bg-[#FFCC00] text-slate-950 font-black text-xs shadow-md transition flex items-center space-x-2 cursor-pointer"
                >
                  <span>Next Question</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Columns: Candidate Info + Question Palette + Calculator */}
        <div className="lg:col-span-4 space-y-5">
          {/* Candidate Info Capsule */}
          <div className="bg-gradient-to-br from-[#0D3023] to-[#071D15] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl flex items-center space-x-4 text-white">
            <img
              src="student.jpg"
              alt="Sarah Okonjo"
              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-[#C4823F] shadow-sm"
            />
            <div>
              <span className="text-[10px] font-black uppercase text-amber-300 bg-amber-950/60 border border-[#C4823F]/50 px-2 py-0.5 rounded-md">
                Verified Candidate
              </span>
              <h3 className="text-sm font-extrabold text-white mt-1">Sarah Okonjo</h3>
              <p className="text-[11px] text-emerald-200/70 font-medium">Seat 042 • Center CBT-104</p>
            </div>
          </div>

          {/* Question Palette Card */}
          <div className="bg-gradient-to-br from-[#0D3023] to-[#071D15] rounded-3xl p-6 border-2 border-[#C4823F] shadow-xl space-y-4 text-white">
            <div className="flex items-center justify-between">
              <h2 className="font-black text-base text-white">Question Palette</h2>
              <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-[#C4823F]/50 px-2.5 py-0.5 rounded-full">
                {questions.length} Total
              </span>
            </div>

            <p className="text-xs text-emerald-200/70 leading-normal">
              Click any number to jump directly to that question:
            </p>

            {/* 1 to 50 Grid (10 columns x 5 rows) */}
            <div className="grid grid-cols-10 gap-1.5 pt-1">
              {Array.from({ length: questions.length }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setCurrentQuestion(num)}
                  className={`w-7 h-7 rounded-lg text-[11px] flex items-center justify-center transition cursor-pointer ${getPaletteStyle(
                    num
                  )}`}
                >
                  {num}
                </button>
              ))}
            </div>

            {/* Legend */}
            <div className="pt-4 border-t border-[#C4823F]/30 grid grid-cols-3 gap-2 text-xs font-semibold text-emerald-200/80">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                <span className="text-[11px]">Answered ({Object.keys(userAnswers).length})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
                <span className="text-[11px]">Review ({flaggedQuestions.length})</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-[#061911] border border-[#C4823F]/40" />
                <span className="text-[11px]">Unanswered ({questions.length - Object.keys(userAnswers).length})</span>
              </div>
            </div>

            {/* Submit Examination Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Are you ready to submit your exam and view your score?')) {
                    submitTest();
                  }
                }}
                className="w-full py-3.5 rounded-2xl bg-[#C4823F] hover:bg-[#FFCC00] text-slate-950 font-black text-xs shadow-lg transition flex items-center justify-center space-x-2 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Submit Examination</span>
              </button>
            </div>
          </div>

          {/* Interactive Calculator Widget (Toggleable) */}
          {showCalculator && (
            <div className="bg-[#092218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-2xl space-y-3 text-white">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-amber-300">On-Screen Calculator</span>
                <button
                  type="button"
                  onClick={() => setShowCalculator(false)}
                  className="text-emerald-200/60 hover:text-white text-xs font-bold cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="bg-[#061710] border border-[#C4823F]/40 p-3 rounded-xl font-mono text-right font-bold text-base text-[#FFCC00]">
                {calcInput} = 11
              </div>

              <div className="grid grid-cols-4 gap-1.5 text-xs font-bold">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => {
                      if (k === '=') return;
                      setCalcInput((prev) => prev + k);
                    }}
                    className="p-2.5 rounded-xl bg-[#061911] hover:bg-[#C4823F] hover:text-slate-950 border border-[#C4823F]/30 text-white transition cursor-pointer"
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
