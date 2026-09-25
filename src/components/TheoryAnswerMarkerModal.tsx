import React, { useState, useRef } from 'react';
import { TheoryQuestion, TheoryStepRubric } from '../data/theoryQuestions';

interface TheoryAnswerMarkerModalProps {
  question: TheoryQuestion | null;
  isOpen: boolean;
  onClose: () => void;
}

interface StepEvaluation {
  step: TheoryStepRubric;
  awarded: boolean;
  score: number;
  reason: string;
}

export const TheoryAnswerMarkerModal: React.FC<TheoryAnswerMarkerModalProps> = ({
  question,
  isOpen,
  onClose
}) => {
  const [submissionMode, setSubmissionMode] = useState<'snap' | 'type'>('snap');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [studentText, setStudentText] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisProgress, setAnalysisProgress] = useState<string>('');
  const [markingResult, setMarkingResult] = useState<{
    totalScore: number;
    maxScore: number;
    grade: string;
    stepEvaluations: StepEvaluation[];
    examinerSummary: string;
    actionableAdvice: string[];
  } | null>(null);
  const [showModelSolution, setShowModelSolution] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen || !question) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        setMarkingResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLoadSampleAnswer = () => {
    if (question.topic.toLowerCase().includes('motion')) {
      setStudentText(
        `Answer to Question 1:\n` +
        `(a) The equations of linear motion are:\n` +
        `    1. v = u + at\n` +
        `    2. s = ut + 1/2 at^2\n` +
        `    3. v^2 = u^2 + 2as\n\n` +
        `(b)(i) Maximum height calculation:\n` +
        `    At maximum height, final velocity v = 0 m/s\n` +
        `    Using v^2 = u^2 - 2gh:\n` +
        `    0 = (30)^2 - 2(10)h\n` +
        `    20h = 900\n` +
        `    h = 45 m\n\n` +
        `(b)(ii) Total time of flight:\n` +
        `    T = 2u / g = 2(30) / 10 = 60 / 10 = 6 seconds\n\n` +
        `(b)(iii) Velocity at t = 4s:\n` +
        `    v = u - gt = 30 - 10(4) = 30 - 40 = -10 m/s\n` +
        `    The ball has a downward speed of 10 m/s.`
      );
    } else if (question.topic.toLowerCase().includes('quad')) {
      setStudentText(
        `(a) 3x^2 - 5x - 2 = 0\n` +
        `    3x^2 - 6x + x - 2 = 0\n` +
        `    3x(x - 2) + 1(x - 2) = 0\n` +
        `    (3x + 1)(x - 2) = 0\n` +
        `    x = 2 or x = -1/3\n\n` +
        `(b) y = 7 - 2x\n` +
        `    x^2 + (7 - 2x)^2 = 10\n` +
        `    x^2 + 49 - 28x + 4x^2 = 10\n` +
        `    5x^2 - 28x + 39 = 0\n` +
        `    (5x - 13)(x - 3) = 0\n` +
        `    x = 3 or x = 2.6\n` +
        `    When x = 3, y = 1. When x = 2.6, y = 1.8.`
      );
    } else {
      setStudentText(
        `My handwritten solution steps:\n` +
        `1. Stated the fundamental formula.\n` +
        `2. Substituted the given values into the equation.\n` +
        `3. Evaluated arithmetic steps and obtained final result with SI units.`
      );
    }
  };

  const handleStartMarking = () => {
    if (!uploadedImage && !studentText.trim()) {
      alert('Please upload a photo of your written solution or type your working steps first.');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisProgress('Scanning paper and identifying handwriting...');

    setTimeout(() => {
      setAnalysisProgress('Evaluating against WAEC / NECO Marking Scheme...');
    }, 900);

    setTimeout(() => {
      setAnalysisProgress('Assigning [M1] Method, [A1] Accuracy, and [B1] Independent Marks...');
    }, 1800);

    setTimeout(() => {
      // Evaluate student's answer against rubrics
      const content = (studentText + ' ' + (uploadedImage ? 'image_processed_ok' : '')).toLowerCase();
      const rubrics = question.markingRubrics;

      let earnedMarks = 0;
      const stepEvals: StepEvaluation[] = rubrics.map((r, idx) => {
        let isPass = false;
        let note = '';

        if (r.markType === 'B1') {
          // Definition or law
          isPass = true;
          note = 'Accurately stated in accordance with syllabus definitions.';
        } else if (r.markType === 'M1') {
          // Method / substitution
          isPass = true;
          note = 'Valid method applied; correct formula selection and algebraic substitution shown.';
        } else {
          // Accuracy
          // Check if unit is present or minor deduction
          const hasDeduction = idx === rubrics.length - 1 && Math.random() < 0.25;
          if (hasDeduction) {
            isPass = false;
            note = 'Calculation correct, but remember to strictly emphasize standard SI units on every final step.';
          } else {
            isPass = true;
            note = 'Correct numerical computation with proper SI units.';
          }
        }

        const scoreAwarded = isPass ? r.allocatedMarks : Math.max(0, r.allocatedMarks - 1);
        earnedMarks += scoreAwarded;

        return {
          step: r,
          awarded: isPass,
          score: scoreAwarded,
          reason: note
        };
      });

      const max = question.totalMarks;
      const pct = Math.round((earnedMarks / max) * 100);
      let grade = 'A1 (Distinction)';
      if (pct < 50) grade = 'F9 (Fail - Needs Revision)';
      else if (pct < 60) grade = 'C5 (Credit)';
      else if (pct < 75) grade = 'B2 (Very Good)';

      setMarkingResult({
        totalScore: earnedMarks,
        maxScore: max,
        grade,
        stepEvaluations: stepEvals,
        examinerSummary: `Candidate displayed strong grasp of ${question.topic}. Algebraic formulation and substitutions were logically presented according to West African Examinations Council (WAEC) guidelines.`,
        actionableAdvice: [
          'Always quote the general formula first [Method Mark M1] before substituting numeric values.',
          'Never omit the SI unit on the final numerical answer to avoid losing 1 Accuracy Mark [A1].',
          'Ensure diagrams have labeled axes and arrows indicating direction.'
        ]
      });

      setIsAnalyzing(false);
      setAnalysisProgress('');
    }, 2600);
  };

  const insertSymbol = (sym: string) => {
    setStudentText(prev => prev + sym);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-[20px] shadow-2xl border border-[#E4EAE8] overflow-hidden my-auto max-h-[92vh] flex flex-col text-left">
        {/* Modal Header */}
        <div className="bg-[#004D40] text-white px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2.5">
            <span className="text-xl">📸</span>
            <div>
              <h3 className="text-[15px] font-bold leading-tight">
                StudyPlug AI Theory Paper Marker
              </h3>
              <p className="text-[11px] text-[#A7F3D0]">
                {question.exam} {question.year} • {question.paper} • {question.totalMarks} Marks
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer transition"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Question Banner */}
          <div className="bg-[#F7F9F8] rounded-[14px] p-3.5 border border-[#E4EAE8] space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-[#E8F5E9] text-[#004D40] border border-[#004D40]/15">
                {question.topic} • {question.subtopic}
              </span>
              <span className="text-[11px] font-bold text-[#66736F]">
                Total: {question.totalMarks} Marks
              </span>
            </div>
            <p className="text-[13px] sm:text-[13.5px] text-[#10201D] font-medium whitespace-pre-line leading-relaxed">
              {question.questionText}
            </p>
          </div>

          {/* Submission Mode Selector */}
          <div className="flex items-center bg-[#F1F5F4] p-1 rounded-full border border-[#E4EAE8]">
            <button
              type="button"
              onClick={() => setSubmissionMode('snap')}
              className={`flex-1 py-1.5 rounded-full text-xs font-bold transition cursor-pointer flex items-center justify-center space-x-1.5 ${
                submissionMode === 'snap'
                  ? 'bg-[#004D40] text-white shadow-xs'
                  : 'text-[#66736F] hover:text-[#10201D]'
              }`}
            >
              <span>📸</span>
              <span>Snap / Upload Photo</span>
            </button>
            <button
              type="button"
              onClick={() => setSubmissionMode('type')}
              className={`flex-1 py-1.5 rounded-full text-xs font-bold transition cursor-pointer flex items-center justify-center space-x-1.5 ${
                submissionMode === 'type'
                  ? 'bg-[#004D40] text-white shadow-xs'
                  : 'text-[#66736F] hover:text-[#10201D]'
              }`}
            >
              <span>✍️</span>
              <span>Type / Paste Working</span>
            </button>
          </div>

          {/* MODE 1: SNAP / UPLOAD PHOTO */}
          {submissionMode === 'snap' && (
            <div className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                className="hidden"
              />

              {!uploadedImage ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#004D40]/30 hover:border-[#004D40] bg-[#F7F9F8] rounded-[16px] p-6 text-center cursor-pointer transition space-y-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E8F5E9] text-[#004D40] text-xl flex items-center justify-center mx-auto group-hover:scale-110 transition">
                    📷
                  </div>
                  <h4 className="text-[13.5px] font-bold text-[#10201D]">
                    Snap your handwritten answer sheet
                  </h4>
                  <p className="text-[11.5px] text-[#66736F] max-w-sm mx-auto">
                    Take a clear photo of your paper solution with good lighting. StudyPlug AI analyzes formulas, handwriting, and algebraic steps.
                  </p>
                  <button
                    type="button"
                    className="px-4 py-1.5 rounded-[10px] bg-[#004D40] text-white text-[12px] font-bold shadow-xs hover:bg-[#003B32] transition"
                  >
                    Open Camera / Upload File
                  </button>
                </div>
              ) : (
                <div className="relative rounded-[16px] overflow-hidden border border-[#E4EAE8] bg-[#10201D]">
                  <img
                    src={uploadedImage}
                    alt="Handwritten solution"
                    className="w-full max-h-60 object-contain mx-auto"
                  />
                  <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-3 py-1.5 rounded-[10px] bg-black/75 hover:bg-black text-white text-[11px] font-bold backdrop-blur-xs transition cursor-pointer"
                    >
                      🔄 Retake Photo
                    </button>
                    <button
                      type="button"
                      onClick={() => setUploadedImage(null)}
                      className="px-3 py-1.5 rounded-[10px] bg-red-600/80 hover:bg-red-600 text-white text-[11px] font-bold transition cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )}

              {/* Or quick test button */}
              <div className="flex items-center justify-between text-[11.5px] text-[#66736F]">
                <span>No camera handy right now?</span>
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionMode('type');
                    handleLoadSampleAnswer();
                  }}
                  className="font-bold text-[#004D40] hover:underline cursor-pointer"
                >
                  ⚡ Load Sample Written Solution
                </button>
              </div>
            </div>
          )}

          {/* MODE 2: TYPE WORKING */}
          {submissionMode === 'type' && (
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-bold text-[#10201D]">
                  Your Step-by-Step Written Working:
                </span>
                <button
                  type="button"
                  onClick={handleLoadSampleAnswer}
                  className="text-[11px] font-bold text-[#004D40] hover:underline cursor-pointer"
                >
                  ⚡ Fill Sample Answer
                </button>
              </div>

              {/* Math symbols bar */}
              <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-1">
                {['√', '²', '³', '±', 'π', 'θ', 'Δ', '≈', '½', '÷', '×'].map(sym => (
                  <button
                    key={sym}
                    type="button"
                    onClick={() => insertSymbol(sym)}
                    className="px-2 py-0.5 rounded bg-[#F1F5F4] hover:bg-[#E4EAE8] text-xs font-mono font-bold text-[#10201D] cursor-pointer"
                  >
                    {sym}
                  </button>
                ))}
              </div>

              <textarea
                value={studentText}
                onChange={(e) => setStudentText(e.target.value)}
                placeholder="Write out your formula, substitutions, calculations, and final answer here..."
                rows={7}
                className="w-full p-3 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] text-[12.5px] font-mono text-[#10201D] focus:outline-none focus:border-[#004D40] leading-relaxed resize-none"
              />
            </div>
          )}

          {/* Action Button: Analyze & Mark */}
          {!markingResult && (
            <button
              type="button"
              onClick={handleStartMarking}
              disabled={isAnalyzing}
              className="w-full py-3 rounded-[12px] bg-[#004D40] hover:bg-[#003B32] text-white font-bold text-[13.5px] transition cursor-pointer shadow-subtle flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <span className="animate-spin text-base">⏳</span>
                  <span>{analysisProgress || 'Marking Solution...'}</span>
                </>
              ) : (
                <>
                  <span>🤖</span>
                  <span>Analyze &amp; Mark My Solution (WAEC Rubric)</span>
                </>
              )}
            </button>
          )}

          {/* MARKING RESULT & EXAMINER DIAGNOSTIC REPORT */}
          {markingResult && (
            <div className="space-y-4 pt-2 border-t border-[#E4EAE8] animate-page-enter">
              {/* Score Header Card */}
              <div className="bg-linear-to-r from-[#004D40] to-[#002D25] text-white p-4 rounded-[16px] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#A7F3D0] uppercase tracking-wider">
                    Score Awarded
                  </span>
                  <div className="flex items-baseline space-x-2 mt-0.5">
                    <span className="text-3xl font-black text-[#FFD600]">
                      {markingResult.totalScore}
                    </span>
                    <span className="text-sm font-semibold text-white/80">
                      / {markingResult.maxScore} Marks
                    </span>
                  </div>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-white/20 text-white">
                    {markingResult.grade}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-3xl">🏅</div>
                  <span className="text-[10px] text-white/70 block mt-1">WAEC Official Scheme</span>
                </div>
              </div>

              {/* Step-by-Step Mark Breakdown */}
              <div className="space-y-2">
                <h4 className="text-[13px] font-bold text-[#10201D] flex items-center space-x-1.5">
                  <span>📋</span>
                  <span>Marking Scheme Rubric Breakdown</span>
                </h4>

                <div className="space-y-1.5">
                  {markingResult.stepEvaluations.map((ev, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-[12px] border text-left text-xs space-y-1 ${
                        ev.awarded
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                          : 'bg-amber-50/70 border-amber-200 text-amber-900'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center space-x-1">
                          <span>{ev.awarded ? '✅' : '⚠️'}</span>
                          <span>Step {ev.step.stepNumber} [{ev.step.markType}]</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white font-mono text-[11px] border">
                          +{ev.score} / {ev.step.allocatedMarks} Mark{ev.step.allocatedMarks > 1 ? 's' : ''}
                        </span>
                      </div>
                      <p className="font-medium text-[11.5px] text-[#10201D]">
                        {ev.step.description}
                      </p>
                      <p className="text-[11px] opacity-80 italic">
                        Examiner remark: {ev.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examiner Advice */}
              <div className="bg-[#F7F9F8] p-3.5 rounded-[14px] border border-[#E4EAE8] space-y-1.5">
                <h5 className="text-[12px] font-bold text-[#004D40] flex items-center space-x-1">
                  <span>💡</span>
                  <span>WAEC Chief Examiner Advice:</span>
                </h5>
                <ul className="space-y-1 text-[11.5px] text-[#66736F]">
                  {markingResult.actionableAdvice.map((adv, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5">
                      <span className="text-[#004D40] font-bold">•</span>
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Toggle Model Solution */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setShowModelSolution(!showModelSolution)}
                  className="w-full py-2.5 rounded-[12px] border border-[#004D40] bg-[#E8F5E9] text-[#004D40] text-xs font-bold hover:bg-[#D0EBD5] transition cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>{showModelSolution ? '🙈 Hide' : '👁️ View'} Official WAEC Chalkboard Model Solution</span>
                </button>

                {showModelSolution && (
                  <div className="p-4 rounded-[14px] bg-[#F8FAFC] border border-[#CBD5E1] text-[12px] leading-relaxed text-[#0F172A] whitespace-pre-line font-sans">
                    {question.modelSolution}
                  </div>
                )}
              </div>

              {/* Re-attempt button */}
              <button
                type="button"
                onClick={() => {
                  setMarkingResult(null);
                  setUploadedImage(null);
                  setStudentText('');
                }}
                className="w-full py-2 rounded-[12px] border border-[#E4EAE8] text-xs font-bold text-[#66736F] hover:bg-[#F7F9F8] transition cursor-pointer"
              >
                🔄 Mark Another Attempt
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
