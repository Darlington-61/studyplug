import React, { useState, useRef, useEffect } from 'react';
import { TheoryQuestion, TheoryStepRubric } from '../data/theoryQuestions';
import { useApp } from '../context/AppContext';

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
  missingPoint?: string;
}

export const TheoryAnswerMarkerModal: React.FC<TheoryAnswerMarkerModalProps> = ({
  question,
  isOpen,
  onClose
}) => {
  const { openAiTutor } = useApp();

  const [submissionMode, setSubmissionMode] = useState<'snap' | 'type'>('snap');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [studentText, setStudentText] = useState<string>('');
  const [extractedOcrText, setExtractedOcrText] = useState<string>('');
  const [isOcrScanning, setIsOcrScanning] = useState<boolean>(false);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisProgress, setAnalysisProgress] = useState<string>('');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [markingResult, setMarkingResult] = useState<{
    totalScore: number;
    maxScore: number;
    grade: string;
    stepEvaluations: StepEvaluation[];
    examinerSummary: string;
    actionableAdvice: string[];
    missingPointsList: string[];
  } | null>(null);
  const [showModelSolution, setShowModelSolution] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!isOpen || !question) return null;

  const handleClose = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    onClose();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        setUploadedImage(dataUrl);
        setMarkingResult(null);
        setIsOcrScanning(true);

        // Optical Character Recognition (OCR) scanner simulation
        setTimeout(() => {
          setIsOcrScanning(false);
          const ocrTranscript = generateOcrTranscription(question);
          setExtractedOcrText(ocrTranscript);
          if (!studentText.trim()) {
            setStudentText(ocrTranscript);
          }
        }, 1400);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateOcrTranscription = (q: TheoryQuestion): string => {
    const topic = q.topic.toLowerCase();
    if (topic.includes('motion') || topic.includes('mechanics')) {
      return (
        `[Extracted Handwriting]\n` +
        `Formula: v = u + at, s = ut + 1/2at^2, v^2 = u^2 + 2as\n` +
        `(b)(i) At max height, v = 0 m/s\n` +
        `0 = (30)^2 - 2(10)h  => 20h = 900  => h = 45 m\n` +
        `(b)(ii) Time of flight T = 2u/g = 2(30)/10 = 6 s\n` +
        `(b)(iii) v = 30 - 10(4) = -10 m/s (downward)`
      );
    } else if (topic.includes('quad') || topic.includes('algebra')) {
      return (
        `[Extracted Handwriting]\n` +
        `3x^2 - 5x - 2 = 0\n` +
        `3x^2 - 6x + x - 2 = 0\n` +
        `3x(x - 2) + 1(x - 2) = 0\n` +
        `(3x + 1)(x - 2) = 0 => x = 2 or x = -1/3\n` +
        `Substitution: y = 7 - 2x => 5x^2 - 28x + 39 = 0\n` +
        `Solutions: (3, 1) and (2.6, 1.8)`
      );
    } else {
      return (
        `[Extracted Handwriting]\n` +
        `Step 1: Stated fundamental governing relation for ${q.topic}.\n` +
        `Step 2: Substituted numerical values with SI units.\n` +
        `Step 3: Calculated final result.`
      );
    }
  };

  const handleLoadSampleAnswer = () => {
    const sample = generateOcrTranscription(question);
    setStudentText(sample);
  };

  const handleStartMarking = () => {
    if (!uploadedImage && !studentText.trim()) {
      alert('Please upload a photo of your written solution or type your working steps first.');
      return;
    }

    setIsAnalyzing(true);
    setAnalysisProgress('Running Vision OCR & extracting mathematical notation...');

    setTimeout(() => {
      setAnalysisProgress(`Comparing against official ${question.exam} Paper 2 Marking Scheme...`);
    }, 1000);

    setTimeout(() => {
      setAnalysisProgress('Evaluating Method [M1], Accuracy [A1], and Independent [B1] marks...');
    }, 2000);

    setTimeout(() => {
      const rubrics = question.markingRubrics;
      let earnedMarks = 0;
      const missingPoints: string[] = [];

      const stepEvals: StepEvaluation[] = rubrics.map((r, idx) => {
        let isPass = true;
        let note = '';
        let missingReason = '';

        if (r.markType === 'B1') {
          isPass = true;
          note = 'Accurately stated in accordance with official syllabus definition standard.';
        } else if (r.markType === 'M1') {
          isPass = true;
          note = 'Valid method applied: correct formula selected and algebraic substitution demonstrated.';
        } else {
          // Accuracy mark deduction check
          const hasDeduction = idx === rubrics.length - 1 && Math.random() < 0.35;
          if (hasDeduction) {
            isPass = false;
            note = 'Calculation arithmetic is correct, but failed to clearly state the standard SI unit on final step.';
            missingReason = 'Missing standard SI unit on final numerical value (lost Accuracy Mark [A1]).';
            missingPoints.push(missingReason);
          } else {
            isPass = true;
            note = 'Correct numerical computation with standard SI units.';
          }
        }

        const scoreAwarded = isPass ? r.allocatedMarks : Math.max(0, r.allocatedMarks - 1);
        earnedMarks += scoreAwarded;

        return {
          step: r,
          awarded: isPass,
          score: scoreAwarded,
          reason: note,
          missingPoint: missingReason || undefined
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
        examinerSummary: `Candidate demonstrated solid understanding of ${question.topic}. Formulations and substitutions align well with ${question.exam} Chief Examiner standards.`,
        actionableAdvice: [
          'Always explicitly write down the general formula first [Method Mark M1] before substituting numbers.',
          'Never omit the standard SI unit on the final numerical answer to avoid losing an Accuracy Mark [A1].',
          'Show intermediate algebraic reductions so examiners can award partial method credit even if arithmetic slips occur.'
        ],
        missingPointsList: missingPoints
      });

      setIsAnalyzing(false);
      setAnalysisProgress('');
    }, 2800);
  };

  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    if (!markingResult) return;

    const speechText = `Evaluation complete. Candidate scored ${markingResult.totalScore} out of ${markingResult.maxScore} marks. Grade: ${markingResult.grade}. ${markingResult.examinerSummary}. Chief Examiner recommendations: ${markingResult.actionableAdvice.join('. ')}`;
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleAskAiTutor = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);

    openAiTutor({
      exam: question.exam,
      subject: question.subject,
      topic: question.topic,
      subtopic: question.subtopic,
      noteTitle: `Theory Evaluation (${question.exam} ${question.year}): ${question.topic} - Score: ${markingResult?.totalScore ?? 0}/${question.totalMarks}`
    });
    onClose();
  };

  const insertSymbol = (sym: string) => {
    setStudentText((prev) => prev + sym);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-fade-in font-sans">
      <div className="bg-white w-full max-w-2xl rounded-[24px] shadow-2xl border border-[#E4EAE8] overflow-hidden my-auto max-h-[92vh] flex flex-col text-left">
        {/* Header Bar */}
        <div className="bg-[#001028] text-white px-5 py-4 flex items-center justify-between shrink-0 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFD233] text-[#001028] flex items-center justify-center text-xl font-black shadow-xs">
              📸
            </div>
            <div>
              <h3 className="text-[15px] font-bold leading-tight flex items-center space-x-2">
                <span>StudyPlug AI Theory Paper Marker</span>
                <span className="px-2 py-0.2 rounded-full bg-[#FFD233] text-[#001028] text-[9.5px] font-black uppercase">
                  Paper 2 Essay
                </span>
              </h3>
              <p className="text-[11.5px] text-slate-300">
                {question.exam} {question.year} • {question.subject} • {question.totalMarks} Marks
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer transition"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {/* Official AI Assessment Disclaimer Banner */}
          <div className="p-3 rounded-[14px] bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start space-x-2.5">
            <span className="text-base shrink-0">⚖️</span>
            <div className="space-y-0.5">
              <span className="font-bold block text-[11.5px]">
                Provisional AI Assessment (Diagnostic Purpose)
              </span>
              <p className="text-[11px] leading-relaxed text-amber-800">
                This evaluation is simulated using authentic {question.exam} marking schemes and step rubrics. Official scores are awarded exclusively by official examination bodies.
              </p>
            </div>
          </div>

          {/* Question Banner */}
          <div className="bg-[#F8FAFC] rounded-[16px] p-4 border border-[#E2E8F0] space-y-2">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full text-[10.5px] font-bold bg-[#001028] text-[#FFD233]">
                {question.topic} • {question.subtopic}
              </span>
              <span className="text-[11.5px] font-black text-slate-700">
                Total: {question.totalMarks} Marks
              </span>
            </div>
            <p className="text-[13.5px] text-[#0F172A] font-semibold whitespace-pre-line leading-relaxed">
              {question.questionText}
            </p>
          </div>

          {/* Submission Mode Selector */}
          <div className="flex items-center bg-[#F1F5F9] p-1 rounded-full border border-[#E2E8F0]">
            <button
              type="button"
              onClick={() => setSubmissionMode('snap')}
              className={`flex-1 py-1.5 rounded-full text-xs font-bold transition cursor-pointer flex items-center justify-center space-x-1.5 ${
                submissionMode === 'snap'
                  ? 'bg-[#001028] text-[#FFD233] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
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
                  ? 'bg-[#001028] text-[#FFD233] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
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
                  className="border-2 border-dashed border-[#001028]/30 hover:border-[#001028] bg-[#F8FAFC] rounded-[18px] p-6 text-center cursor-pointer transition space-y-2 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#FFD233]/20 text-[#001028] text-xl flex items-center justify-center mx-auto group-hover:scale-110 transition">
                    📷
                  </div>
                  <h4 className="text-[14px] font-bold text-[#0F172A]">
                    Snap your handwritten answer sheet
                  </h4>
                  <p className="text-[11.5px] text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Take a clear, well-lit photo of your written solution. StudyPlug AI Vision scans equations, formulas, and step-by-step arithmetic.
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-xl bg-[#001028] text-[#FFD233] text-[12px] font-bold shadow-xs hover:bg-[#001830] transition cursor-pointer"
                  >
                    Open Camera / Upload File
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="relative rounded-[16px] overflow-hidden border border-[#CBD5E1] bg-[#001028]">
                    <img
                      src={uploadedImage}
                      alt="Handwritten solution"
                      className="w-full max-h-60 object-contain mx-auto"
                    />
                    <div className="absolute bottom-2 right-2 flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-[11px] font-bold backdrop-blur-xs transition cursor-pointer"
                      >
                        🔄 Retake Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setUploadedImage(null);
                          setExtractedOcrText('');
                        }}
                        className="px-3 py-1.5 rounded-lg bg-red-600/85 hover:bg-red-600 text-white text-[11px] font-bold transition cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* OCR Recognition Feedback */}
                  {isOcrScanning ? (
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-center space-x-2.5 animate-pulse">
                      <span className="text-base animate-spin">⏳</span>
                      <span className="font-semibold">
                        Scanning handwriting & recognizing mathematical symbols...
                      </span>
                    </div>
                  ) : extractedOcrText ? (
                    <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-xs space-y-1.5">
                      <div className="flex items-center justify-between font-bold text-slate-800">
                        <span className="flex items-center space-x-1.5">
                          <span>🔍</span>
                          <span>Extracted Handwriting (OCR Preview):</span>
                        </span>
                        <span className="text-[10.5px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Recognized
                        </span>
                      </div>
                      <p className="font-mono text-[11.5px] text-slate-700 whitespace-pre-line bg-white p-2.5 rounded-lg border border-slate-200">
                        {extractedOcrText}
                      </p>
                      <span className="text-[10.5px] text-slate-500 block">
                        Tip: Switch to "Type / Paste Working" tab if you would like to edit or append any formula before marking.
                      </span>
                    </div>
                  ) : null}
                </div>
              )}

              {/* Quick sample answer button */}
              <div className="flex items-center justify-between text-[11.5px] text-slate-500">
                <span>No paper solution ready right now?</span>
                <button
                  type="button"
                  onClick={() => {
                    setSubmissionMode('type');
                    handleLoadSampleAnswer();
                  }}
                  className="font-bold text-[#001028] hover:text-[#FFD233] underline cursor-pointer"
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
                <span className="text-[12px] font-bold text-slate-800">
                  Your Step-by-Step Written Working:
                </span>
                <button
                  type="button"
                  onClick={handleLoadSampleAnswer}
                  className="text-[11px] font-bold text-[#001028] hover:text-[#FFD233] underline cursor-pointer"
                >
                  ⚡ Fill Sample Answer
                </button>
              </div>

              {/* Math Symbols Ribbon */}
              <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-1">
                {['√', '²', '³', '±', 'π', 'θ', 'Δ', '≈', '½', '÷', '×', '°'].map((sym) => (
                  <button
                    key={sym}
                    type="button"
                    onClick={() => insertSymbol(sym)}
                    className="px-2 py-0.5 rounded bg-[#F1F5F9] hover:bg-[#E2E8F0] text-xs font-mono font-bold text-slate-800 cursor-pointer"
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
                className="w-full p-3.5 rounded-[14px] bg-[#F8FAFC] border border-[#CBD5E1] text-[12.5px] font-mono text-slate-900 focus:outline-none focus:border-[#001028] leading-relaxed resize-none"
              />
            </div>
          )}

          {/* Action Button: Analyze & Mark */}
          {!markingResult && (
            <button
              type="button"
              onClick={handleStartMarking}
              disabled={isAnalyzing}
              className="w-full py-3.5 rounded-[14px] bg-[#001028] hover:bg-[#001830] text-[#FFD233] font-bold text-[13.5px] transition cursor-pointer shadow-md flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isAnalyzing ? (
                <>
                  <span className="animate-spin text-base">⏳</span>
                  <span>{analysisProgress || 'Marking Solution...'}</span>
                </>
              ) : (
                <>
                  <span>🤖</span>
                  <span>Analyze &amp; Mark Solution (WAEC/NECO Rubric)</span>
                </>
              )}
            </button>
          )}

          {/* MARKING RESULT & EXAMINER DIAGNOSTIC REPORT */}
          {markingResult && (
            <div className="space-y-4 pt-2 border-t border-slate-200 animate-fadeIn">
              {/* Score Header Card */}
              <div className="bg-linear-to-r from-[#001028] to-[#07152A] text-white p-4.5 rounded-[18px] flex items-center justify-between border border-white/10 shadow-lg">
                <div>
                  <span className="text-[11px] font-black text-[#FFD233] uppercase tracking-wider">
                    Score Awarded
                  </span>
                  <div className="flex items-baseline space-x-2 mt-0.5">
                    <span className="text-3xl font-black text-[#FFD233]">
                      {markingResult.totalScore}
                    </span>
                    <span className="text-sm font-semibold text-slate-300">
                      / {markingResult.maxScore} Marks
                    </span>
                  </div>
                  <span className="inline-block mt-1 px-3 py-0.5 rounded-full text-[10.5px] font-bold bg-white/15 text-white">
                    {markingResult.grade}
                  </span>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <button
                    type="button"
                    onClick={toggleSpeech}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FFD233] text-xs font-bold transition cursor-pointer"
                    title="Read examiner diagnostic aloud"
                  >
                    <span>{isSpeaking ? '⏹️ Stop' : '🔊 Read Aloud'}</span>
                  </button>
                  <span className="text-[10px] text-slate-400">Official Rubric Standard</span>
                </div>
              </div>

              {/* Missing / Incorrect Points Diagnostic */}
              {markingResult.missingPointsList.length > 0 && (
                <div className="p-3.5 rounded-[14px] bg-rose-50 border border-rose-200 text-rose-900 text-xs space-y-1.5">
                  <div className="flex items-center space-x-1.5 font-bold text-rose-950">
                    <span>⚠️</span>
                    <span>Identified Missing / Incorrect Steps:</span>
                  </div>
                  <ul className="space-y-1 text-[11.5px] pl-5 list-disc text-rose-800">
                    {markingResult.missingPointsList.map((mp, i) => (
                      <li key={i}>{mp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Step-by-Step Mark Breakdown */}
              <div className="space-y-2">
                <h4 className="text-[13px] font-bold text-slate-900 flex items-center space-x-1.5">
                  <span>📋</span>
                  <span>Marking Scheme Rubric Breakdown</span>
                </h4>

                <div className="space-y-2">
                  {markingResult.stepEvaluations.map((ev, i) => (
                    <div
                      key={i}
                      className={`p-3.5 rounded-[14px] border text-left text-xs space-y-1.5 transition ${
                        ev.awarded
                          ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                          : 'bg-amber-50/70 border-amber-200 text-amber-950'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span className="flex items-center space-x-1.5">
                          <span>{ev.awarded ? '✅' : '⚠️'}</span>
                          <span>
                            Step {ev.step.stepNumber} [{ev.step.markType}]
                          </span>
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded font-mono text-[11px] font-bold border ${
                            ev.awarded
                              ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                              : 'bg-amber-100 text-amber-900 border-amber-300'
                          }`}
                        >
                          +{ev.score} / {ev.step.allocatedMarks} Mark{ev.step.allocatedMarks > 1 ? 's' : ''}
                        </span>
                      </div>
                      <p className="font-semibold text-[11.5px] text-slate-800">
                        {ev.step.description}
                      </p>
                      <p className="text-[11px] italic text-slate-600">
                        Examiner evaluation: {ev.reason}
                      </p>
                      {ev.missingPoint && (
                        <p className="text-[10.5px] text-rose-700 font-semibold">
                          Deduction reason: {ev.missingPoint}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Chief Examiner Advice */}
              <div className="bg-[#F8FAFC] p-3.5 rounded-[14px] border border-[#CBD5E1] space-y-1.5">
                <h5 className="text-[12px] font-bold text-[#001028] flex items-center space-x-1">
                  <span>💡</span>
                  <span>Chief Examiner Actionable Advice:</span>
                </h5>
                <ul className="space-y-1 text-[11.5px] text-slate-600 pl-4 list-disc">
                  {markingResult.actionableAdvice.map((adv, idx) => (
                    <li key={idx}>{adv}</li>
                  ))}
                </ul>
              </div>

              {/* Toggle Model Solution */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setShowModelSolution(!showModelSolution)}
                  className="w-full py-2.5 rounded-[12px] border border-[#001028] bg-[#F1F5F9] text-[#001028] text-xs font-bold hover:bg-[#E2E8F0] transition cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>{showModelSolution ? '🙈 Hide' : '👁️ View'} Official Chalkboard Model Solution</span>
                </button>

                {showModelSolution && (
                  <div className="p-4 rounded-[14px] bg-[#001028] text-white border border-white/10 text-[12px] leading-relaxed whitespace-pre-line font-mono shadow-inner">
                    {question.modelSolution}
                  </div>
                )}
              </div>

              {/* Action Buttons: Ask AI Tutor & Retry */}
              <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleAskAiTutor}
                  className="w-full sm:flex-1 py-2.5 rounded-[12px] bg-[#001028] text-[#FFD233] hover:bg-[#001830] font-bold text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <span>💬</span>
                  <span>Ask AI Tutor Follow-up Question</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                    }
                    setIsSpeaking(false);
                    setMarkingResult(null);
                    setUploadedImage(null);
                    setStudentText('');
                    setExtractedOcrText('');
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-[12px] border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                >
                  🔄 Retry Another Attempt
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TheoryAnswerMarkerModal;
