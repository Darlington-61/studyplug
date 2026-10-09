import React, { useState, useEffect } from 'react';

export interface PastQuestionData {
  exam: string;
  year: string;
  subject: string;
  topic: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD' | 'JAMB TRAP';
  verifiedStatus: 'VERIFIED PAST QUESTION' | 'STUDYPLUG PRACTICE QUESTION' | 'AI-GENERATED PRACTICE QUESTION';
  questionNumber?: number;
  questionText: string;
  options: { label: string; text: string; isCorrect: boolean }[];
  given: string[];
  required: string;
  formula: string;
  whyFormula: string;
  substitution: string[];
  calculationSteps: string[];
  unitCheck: string;
  examinerTrap: string;
  finalAnswer: string;
}

interface QuestionCardProps {
  question: PastQuestionData;
  onSolved?: () => void;
  showSolutionImmediately?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  onSolved,
  showSolutionImmediately = false
}) => {
  const [countdown, setCountdown] = useState<number>(10);
  const [isCountingDown, setIsCountingDown] = useState<boolean>(!showSolutionImmediately);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [revealSolution, setRevealSolution] = useState<boolean>(showSolutionImmediately);

  useEffect(() => {
    if (!isCountingDown || revealSolution) return;
    if (countdown <= 0) {
      setIsCountingDown(false);
      setRevealSolution(true);
      return;
    }
    const timer = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isCountingDown, countdown, revealSolution]);

  const handleSkipCountdown = () => {
    setIsCountingDown(false);
    setRevealSolution(true);
    if (onSolved) onSolved();
  };

  const getDifficultyBadge = () => {
    switch (question.difficulty) {
      case 'JAMB TRAP':
        return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'HARD':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/50';
      case 'MEDIUM':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between p-3 select-none text-white relative overflow-hidden bg-gradient-to-b from-[#001028] to-[#04162e]">
      {/* Top Exam Header */}
      <div className="flex flex-wrap items-center justify-between gap-1 text-xs border-b border-white/10 pb-2">
        <div className="flex items-center space-x-2">
          <span className="bg-[#F8C800] text-[#001028] font-black px-2 py-0.5 rounded text-[10px] tracking-wider">
            {question.exam} {question.year}
          </span>
          <span className="text-slate-300 font-bold text-[11px]">{question.subject}</span>
          <span className="text-slate-400 text-[10px]">• {question.topic}</span>
        </div>

        <div className="flex items-center space-x-1.5">
          {/* Authenticity Badge */}
          <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <span>✓</span> {question.verifiedStatus}
          </span>
          {/* Difficulty Badge */}
          <span className={`px-2 py-0.5 rounded-full text-[9px] font-black border ${getDifficultyBadge()}`}>
            {question.difficulty}
          </span>
        </div>
      </div>

      {/* Main Center Area: Question vs Countdown */}
      <div className="flex-1 my-2 overflow-y-auto pr-1 space-y-2.5 text-left">
        {/* Question Text */}
        <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-sm">
          <h3 className="text-sm font-bold text-white leading-relaxed">
            {question.questionText}
          </h3>
        </div>

        {/* Countdown Overlay or Options */}
        {isCountingDown && (
          <div className="p-4 bg-gradient-to-r from-amber-500/20 via-yellow-500/10 to-amber-500/20 rounded-xl border border-[#F8C800]/40 text-center space-y-2 animate-pulse">
            <div className="text-[11px] font-black uppercase text-[#F8C800] tracking-widest flex items-center justify-center space-x-2">
              <span>⏸</span>
              <span>PAUSE AND TRY THIS YOURSELF</span>
            </div>
            <div className="text-3xl font-black text-white font-mono">
              00:{countdown.toString().padStart(2, '0')}
            </div>
            <div className="flex items-center justify-center space-x-3 pt-1">
              <button
                type="button"
                onClick={handleSkipCountdown}
                className="px-4 py-1.5 rounded-lg bg-[#F8C800] text-[#001028] font-black text-xs hover:bg-yellow-300 transition cursor-pointer"
              >
                I'm Ready, Show Solution →
              </button>
            </div>
          </div>
        )}

        {/* Multiple Choice Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {question.options.map(opt => {
            const isChosen = selectedOption === opt.label;
            const isCorrect = opt.isCorrect;

            let btnStyle = 'bg-white/5 hover:bg-white/10 border-white/10 text-white';
            if (revealSolution) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold';
              } else if (isChosen && !isCorrect) {
                btnStyle = 'bg-red-500/20 border-red-400 text-red-300 line-through';
              }
            } else if (isChosen) {
              btnStyle = 'bg-[#F8C800]/20 border-[#F8C800] text-[#F8C800] font-bold';
            }

            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => setSelectedOption(opt.label)}
                className={`p-2.5 rounded-xl border text-xs text-left transition flex items-center justify-between cursor-pointer ${btnStyle}`}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-black/40 flex items-center justify-center font-mono font-bold text-[10px] shrink-0">
                    {opt.label}
                  </span>
                  <span>{opt.text}</span>
                </div>
                {revealSolution && isCorrect && (
                  <span className="text-[10px] font-black text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                    Correct ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Revealed Step-by-Step Solution */}
        {revealSolution && (
          <div className="mt-3 p-3 bg-[#031124] rounded-xl border border-emerald-500/30 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-emerald-400 tracking-wider">
                💡 Systematic 9-Step Solution
              </span>
              <span className="text-[11px] font-black text-[#F8C800]">
                Ans: {question.finalAnswer}
              </span>
            </div>

            {/* Step 1 & 2: Given vs Required */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 p-2 rounded-lg">
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">1. Given:</span>
                <span className="text-cyan-300">{question.given.join(', ')}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">2. Required:</span>
                <span className="text-pink-300">{question.required}</span>
              </div>
            </div>

            {/* Step 3 & 4: Formula & Why */}
            <div className="bg-black/40 p-2 rounded-lg text-[11px]">
              <div className="flex items-center justify-between font-mono">
                <span className="text-slate-400 text-[9px] uppercase">3. Formula:</span>
                <span className="text-[#F8C800] font-black">{question.formula}</span>
              </div>
              <p className="text-[10px] text-slate-300 mt-0.5 italic">{question.whyFormula}</p>
            </div>

            {/* Step 5 & 6: Calculation */}
            <div className="space-y-1 font-mono text-[11px] bg-black/40 p-2 rounded-lg">
              <span className="text-slate-400 block text-[9px] uppercase">5 &amp; 6. Calculation Steps:</span>
              {question.calculationSteps.map((step, idx) => (
                <div key={idx} className="text-slate-200">
                  {step}
                </div>
              ))}
            </div>

            {/* Examiner Trap Warning */}
            {question.examinerTrap && (
              <div className="p-2 rounded-lg bg-red-950/40 border border-red-500/40 flex items-start space-x-2 text-[10px]">
                <span className="text-red-400 text-sm">⚠️</span>
                <div className="text-slate-300">
                  <strong className="text-red-300 uppercase">Examiner Trap: </strong>
                  {question.examinerTrap}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
        <span className="text-slate-400 text-[10px]">StudyPlug Official Verified Past Question Engine</span>
        {!revealSolution && (
          <button
            type="button"
            onClick={() => {
              setIsCountingDown(false);
              setRevealSolution(true);
            }}
            className="px-3 py-1 bg-[#F8C800] text-[#001028] rounded font-black text-xs cursor-pointer hover:bg-yellow-300"
          >
            Show Solution Now
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
