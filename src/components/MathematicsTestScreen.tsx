import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ComprehensionPassageViewer } from './common/ComprehensionPassageViewer';

export const MathematicsTestScreen: React.FC = () => {
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
    openAiTutor
  } = useApp();

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

  // Helper to determine question palette cell styling
  const getQuestionPaletteStyle = (num: number) => {
    if (num === currentQuestion) {
      return 'bg-[#FFCC00] text-[#071F15] font-black ring-2 ring-[#FFCC00] shadow-md';
    }
    if (flaggedQuestions.includes(num)) {
      return 'bg-rose-900/90 text-rose-200 font-bold border border-rose-400';
    }
    if (userAnswers[num]) {
      return 'bg-emerald-800 text-emerald-100 font-bold border border-emerald-400';
    }
    return 'bg-[#061710] text-white/70 font-medium border border-[#C4823F]/40 hover:bg-[#0A261B]';
  };

  const displaySubject = activeExamSubject || selectedSubject;

  return (
    <div className="flex-1 flex flex-col bg-[#061710] bg-board-deep min-h-full text-white">
      {/* Top Header Banner */}
      <div className="bg-[#071F15] px-5 pt-2 pb-3.5 text-white border-b-2 border-[#C4823F]">
        <div className="flex items-center justify-between">
          {/* Back Arrow */}
          <button
            type="button"
            onClick={() => setActiveView('subjects')}
            className="w-8 h-8 -ml-1.5 flex items-center justify-center text-white/90 hover:text-[#FFCC00] transition cursor-pointer"
            aria-label="Back"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Header Title */}
          <h1 className="font-bold text-[16.5px] tracking-tight chalk-text-white">{displaySubject}</h1>

          {/* Exit / Submit Test Button */}
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Are you sure you want to finish and submit your examination?')) {
                submitTest();
              }
            }}
            className="text-[11.5px] font-black text-[#071F15] bg-[#FFCC00] hover:bg-[#E5B800] px-3 py-1 rounded-md transition cursor-pointer shadow-md"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Multi-Subject Tabs Bar (When taking a multi-subject exam) */}
      {selectedSubjects && selectedSubjects.length > 1 && (
        <div className="bg-[#061710] border-b-2 border-[#C4823F]/60 px-3 py-2 flex items-center space-x-1.5 overflow-x-auto no-scrollbar shadow-inner">
          <span className="text-[10px] font-black uppercase tracking-wider text-[#FFCC00] shrink-0 mr-1">
            Subject:
          </span>
          {selectedSubjects.map((sub) => {
            const isActive = displaySubject === sub;
            return (
              <button
                key={sub}
                type="button"
                onClick={() => switchActiveExamSubject(sub)}
                className={`px-3 py-1 rounded-xl text-xs font-black transition cursor-pointer flex items-center space-x-1 shrink-0 ${
                  isActive
                    ? 'bg-[#FFCC00] text-[#071F15] border border-yellow-300 shadow-sm font-black'
                    : 'bg-[#092218] text-white/70 border border-[#C4823F]/40 hover:text-white'
                }`}
              >
                <span>{sub}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Timer & Question Progress Bar */}
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-[#C4823F]/30 bg-[#092218] shadow-sm">
        {/* Timer */}
        <div className="flex items-center space-x-1.5 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#FFCC00]">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="font-bold text-[13px] tracking-tight text-[#FFCC00]">{formatTimer(timeRemaining)}</span>
        </div>

        {/* Candidate Info Capsule with Real Student Photo */}
        <div className="flex items-center space-x-1.5 bg-[#061710] px-2.5 py-1 rounded-full border border-[#C4823F]/60">
          <img src="student.jpg" alt="Sarah" className="w-4 h-4 rounded-full object-cover ring-1 ring-[#FFCC00]" />
          <span className="text-[10.5px] font-bold text-white">Sarah O.</span>
        </div>

        {/* Counter */}
        <div className="text-[13px] font-bold text-white tracking-tight">
          <span className="text-[#FFCC00]">{currentQuestion}</span>
          <span className="text-white/50 font-medium"> / {questions.length}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 px-5 pt-3 pb-3 space-y-3.5 overflow-y-auto no-scrollbar">
        {/* Tabs: Questions, Flag / Review */}
        <div className="flex items-center space-x-1 p-0.5 bg-[#061710] rounded-xl border border-[#C4823F]/50">
          <button
            type="button"
            className="flex-1 py-1.5 rounded-lg text-[11.5px] font-black bg-[#FFCC00] text-[#071F15] shadow-sm"
          >
            Questions
          </button>
          <button
            type="button"
            onClick={() => toggleFlagQuestion(currentQuestion)}
            className={`flex-1 py-1.5 rounded-lg text-[11.5px] font-bold transition cursor-pointer ${
              isFlagged ? 'bg-rose-900/90 text-rose-200 font-extrabold border border-rose-400' : 'text-white/70 hover:text-white'
            }`}
          >
            {isFlagged ? '🚩 Flagged' : 'Flag Question'}
          </button>
          <button
            type="button"
            onClick={() => setActiveView('bookmarks')}
            className="flex-1 py-1.5 rounded-lg text-[11.5px] font-semibold text-white/70 hover:text-white transition cursor-pointer"
          >
            Bookmarks
          </button>
          <button
            type="button"
            onClick={() => openAiTutor({
              question: currentQ,
              userSelectedOption: selectedOption,
              subject: selectedSubject,
              topic: currentQ?.topic
            })}
            className="flex-1 py-1.5 rounded-lg text-[11.5px] font-black text-[#071F15] bg-[#34D399] hover:bg-[#10B981] transition cursor-pointer flex items-center justify-center space-x-1"
          >
            <span>⚡ Ask AI</span>
          </button>
        </div>

        {/* Question Area */}
        <div className="bg-board-slate rounded-2xl p-4 border-2 border-[#C4823F]/70 shadow-xl space-y-3">
          {/* Question Title & Bookmark */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-[13.5px] text-white">Question {currentQuestion}</span>
              {currentQ.year && (
                <span className="text-[10px] font-bold text-[#FFCC00] bg-[#0E3526] px-2 py-0.5 rounded-md border border-[#C4823F]">
                  JAMB {currentQ.year}
                </span>
              )}
              <span className="text-[10px] font-bold text-[#34D399] bg-[#082218] px-2 py-0.5 rounded-md border border-[#34D399]/40">
                {currentQ.topic}
              </span>
            </div>
            <button
              type="button"
              onClick={() => toggleBookmarkQuestion(currentQ.id)}
              className="text-white/60 hover:text-[#FFCC00] transition cursor-pointer p-1"
              aria-label="Bookmark Question"
            >
              <svg
                viewBox="0 0 24 24"
                fill={isBookmarked ? '#FFCC00' : 'none'}
                stroke={isBookmarked ? '#FFCC00' : 'currentColor'}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>

          {/* Question Text & Reading Comprehension Passage */}
          <div className="space-y-2">
            <ComprehensionPassageViewer
              text={currentQ.text}
              passage={currentQ.passage}
              subject={selectedSubject}
              defaultExpanded={true}
            />

            {/* Diagram / Graph Image Support */}
            {currentQ.imageUrl && (
              <div className="my-2 flex justify-center bg-[#061710] border border-[#C4823F]/40 rounded-xl p-3">
                <img src={currentQ.imageUrl} alt="Question Diagram" className="max-h-48 object-contain rounded-lg shadow-xs" />
              </div>
            )}
            {currentQ.imageSvg && (
              <div
                className="my-2 flex justify-center bg-[#061710] border border-[#C4823F]/40 rounded-xl p-3 overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: currentQ.imageSvg }}
              />
            )}
          </div>

          {/* Options A, B, C, D */}
          <div className="space-y-2 pt-1">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOption === opt.key;
              return (
                <div
                  key={opt.key}
                  onClick={() => selectAnswer(currentQuestion, opt.key)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border-2 flex items-center justify-between cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'border-[#FFCC00] bg-[#0E382B] ring-1 ring-[#FFCC00]'
                      : 'border-[#C4823F]/40 bg-[#0A261B]/80 hover:border-[#FFCC00]/70 hover:bg-[#0C3022]'
                  }`}
                >
                  {/* Left: Letter & Value */}
                  <div className="flex items-center space-x-3.5 text-[13px]">
                    <span className={`font-black ${isSelected ? 'text-[#FFCC00]' : 'text-white/70'}`}>
                      {opt.key}
                    </span>
                    <span className="font-semibold text-white">{opt.text}</span>
                  </div>

                  {/* Right: Checkmark for selected */}
                  {isSelected && (
                    <div className="w-4 h-4 rounded-full bg-[#FFCC00] flex items-center justify-center text-[#071F15] shadow-xs">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Previous & Next Action Buttons */}
          <div className="flex items-center space-x-2 pt-1">
            <button
              type="button"
              onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
              className="flex-1 py-2.5 rounded-xl border-2 border-[#C4823F]/70 bg-[#082218] text-white font-bold text-[12.5px] hover:bg-[#0E3526] transition shadow-md cursor-pointer"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => clearAnswer(currentQuestion)}
              className="px-3 py-2.5 rounded-xl border border-[#C4823F]/50 bg-[#061710] text-white/70 font-medium text-[11px] hover:text-white transition cursor-pointer"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setCurrentQuestion(Math.min(questions.length, currentQuestion + 1))}
              className="flex-1 py-2.5 rounded-xl bg-[#FFCC00] text-[#071F15] font-black text-[12.5px] hover:bg-[#E5B800] transition shadow-lg cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>

        {/* Question Palette Grid (1 to 50) */}
        <div className="pt-2">
          <div className="grid grid-cols-10 gap-1.5 justify-items-center">
            {Array.from({ length: questions.length }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setCurrentQuestion(num)}
                className={`w-[26px] h-[26px] rounded-md text-[10px] flex items-center justify-center transition-all cursor-pointer ${getQuestionPaletteStyle(
                  num
                )}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* Legend Indicators */}
        <div className="flex items-center justify-around pt-2 pb-1 text-[10.5px] font-medium text-white/70">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>Answered</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
            <span>Review</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span>Unanswered</span>
          </div>
        </div>
      </div>
    </div>
  );
};
