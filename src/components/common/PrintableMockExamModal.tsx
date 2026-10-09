import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';

interface PrintableMockExamModalProps {
  onClose: () => void;
}

const EXAMS = ['JAMB', 'WAEC', 'NECO', 'NABTEB', 'BECE'] as const;
const SUBJECTS = [
  'Mathematics',
  'English Language',
  'Physics',
  'Chemistry',
  'Biology',
  'Economics',
  'Government',
  'Literature in English',
  'Commerce',
  'CRK',
];

export const PrintableMockExamModal: React.FC<PrintableMockExamModalProps> = ({ onClose }) => {
  const { allQuestions } = useApp();

  const [exam, setExam] = useState<'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE'>('JAMB');
  const [subject, setSubject] = useState<string>('Mathematics');
  const [questionCount, setQuestionCount] = useState<number>(40);
  const [includeAnswers, setIncludeAnswers] = useState<boolean>(true);
  const [includeExplanations, setIncludeExplanations] = useState<boolean>(false);

  // Filter questions matching exam and subject
  const availableQuestions = useMemo(() => {
    const list = allQuestions.filter(q => {
      const matchExam = (q.exam || '').toUpperCase() === exam.toUpperCase();
      const matchSubj = (q.subject || '').toLowerCase().includes(subject.toLowerCase()) ||
        subject.toLowerCase().includes((q.subject || '').toLowerCase());
      return matchExam && matchSubj;
    });
    return (list.length > 0 ? list : allQuestions.filter(q =>
      (q.subject || '').toLowerCase().includes(subject.toLowerCase()) ||
      subject.toLowerCase().includes((q.subject || '').toLowerCase())
    )).slice(0, questionCount);
  }, [allQuestions, exam, subject, questionCount]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F0F4F2] font-sans">
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          #printable-exam-sheet, #printable-exam-sheet * {
            visibility: visible !important;
          }
          #printable-exam-sheet {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            background: white !important;
            color: black !important;
            padding: 20px !important;
            box-shadow: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Control Header (Hidden on Print) */}
      <div className="no-print bg-[#001028] text-white px-4 pt-5 pb-4 shrink-0 shadow-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer"
            >
              ←
            </button>
            <div>
              <h2 className="font-extrabold text-[16px] leading-none">Printable Mock Exam PDF</h2>
              <p className="text-[11px] text-emerald-300 mt-0.5">Generate paper exams for offline study</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-[12px] bg-[#FFD600] text-[#001028] font-black text-[13px] hover:bg-amber-300 transition shadow-sm active:scale-95 cursor-pointer"
          >
            <span>🖨️</span>
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
          <div>
            <label className="text-[10px] text-emerald-200 block font-semibold mb-1">EXAM BODY</label>
            <select
              value={exam}
              onChange={e => setExam(e.target.value as any)}
              className="w-full bg-[#003B31] border border-white/20 rounded-[8px] px-2.5 py-1.5 text-white font-bold outline-none"
            >
              {EXAMS.map(ex => <option key={ex} value={ex}>{ex}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] text-emerald-200 block font-semibold mb-1">SUBJECT</label>
            <select
              value={subject}
              onChange={e => setSubject(e.target.value)}
              className="w-full bg-[#003B31] border border-white/20 rounded-[8px] px-2.5 py-1.5 text-white font-bold outline-none"
            >
              {SUBJECTS.map(sub => <option key={sub} value={sub}>{sub}</option>)}
            </select>
          </div>

          <div>
            <label className="text-[10px] text-emerald-200 block font-semibold mb-1">QUESTIONS</label>
            <select
              value={questionCount}
              onChange={e => setQuestionCount(Number(e.target.value))}
              className="w-full bg-[#003B31] border border-white/20 rounded-[8px] px-2.5 py-1.5 text-white font-bold outline-none"
            >
              <option value={10}>10 Questions</option>
              <option value={20}>20 Questions</option>
              <option value={40}>40 Questions</option>
              <option value={50}>50 Questions</option>
            </select>
          </div>

          <div className="flex items-end space-x-3 pb-1">
            <label className="flex items-center space-x-1.5 text-[11px] text-emerald-100 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeAnswers}
                onChange={e => setIncludeAnswers(e.target.checked)}
                className="rounded accent-[#FFD600]"
              />
              <span>Answer Key</span>
            </label>
            <label className="flex items-center space-x-1.5 text-[11px] text-emerald-100 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={includeExplanations}
                onChange={e => setIncludeExplanations(e.target.checked)}
                className="rounded accent-[#FFD600]"
              />
              <span>Explanations</span>
            </label>
          </div>
        </div>
      </div>

      {/* Paper Sheet Preview */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 flex justify-center">
        <div
          id="printable-exam-sheet"
          className="w-full max-w-[800px] bg-white text-stone-900 p-6 sm:p-10 rounded-[12px] shadow-lg border border-stone-200 text-left"
        >
          {/* Official Exam Paper Header */}
          <div className="text-center border-b-2 border-stone-900 pb-4 mb-6">
            <h1 className="font-serif font-black text-[18px] sm:text-[22px] tracking-wide uppercase text-stone-900">
              STUDYPLUG NATIONAL MOCK EXAMINATION
            </h1>
            <p className="text-[12px] sm:text-[14px] font-bold text-stone-700 tracking-wider uppercase mt-1">
              IN COLLABORATION WITH {exam} SYLLABUS DIRECTIVE
            </p>
            <div className="flex justify-between items-center text-[12px] font-bold mt-4 pt-3 border-t border-stone-300">
              <span>SUBJECT: <strong className="text-stone-950 uppercase">{subject}</strong></span>
              <span>EXAM: <strong>{exam} STANDARD</strong></span>
              <span>TIME ALLOWED: <strong>{Math.round(questionCount * 1.2)} MINUTES</strong></span>
            </div>
            <div className="mt-2 text-[10px] text-stone-500 italic">
              INSTRUCTIONS: Answer all questions. Choose the correct option (A, B, C, or D) for each question.
            </div>
          </div>

          {/* Student Info Lines */}
          <div className="grid grid-cols-2 gap-4 pb-5 mb-5 border-b border-dashed border-stone-300 text-xs">
            <div>
              <span className="font-semibold text-stone-600">Candidate Name: </span>
              <span className="border-b border-stone-400 inline-block w-48">&nbsp;</span>
            </div>
            <div>
              <span className="font-semibold text-stone-600">Registration / Seat No: </span>
              <span className="border-b border-stone-400 inline-block w-36">&nbsp;</span>
            </div>
          </div>

          {/* Questions List */}
          {availableQuestions.length === 0 ? (
            <div className="py-12 text-center text-stone-500">
              No questions found for this exam and subject.
            </div>
          ) : (
            <div className="space-y-6">
              {availableQuestions.map((q, idx) => {
                const optionsObj = q.options as Record<string, string> | undefined;
                return (
                  <div key={q.id || idx} className="text-[13px] leading-relaxed break-inside-avoid">
                    <div className="flex items-start space-x-2 font-medium">
                      <span className="font-bold text-stone-900 shrink-0">{idx + 1}.</span>
                      <div
                        className="text-stone-900"
                        dangerouslySetInnerHTML={{ __html: q.question || q.questionText || '' }}
                      />
                    </div>

                    {/* Options Grid */}
                    {optionsObj && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mt-2 ml-5 text-stone-800 text-[12.5px]">
                        {Object.entries(optionsObj).map(([key, val]) => (
                          <div key={key} className="flex items-start space-x-1.5">
                            <span className="font-bold text-stone-700">({key.toUpperCase()})</span>
                            <span dangerouslySetInnerHTML={{ __html: String(val) }} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Answer Key (If toggled) */}
          {includeAnswers && availableQuestions.length > 0 && (
            <div className="mt-12 pt-6 border-t-2 border-stone-900 break-before-page">
              <h2 className="font-bold text-[14px] uppercase text-stone-900 mb-3 text-center tracking-wide">
                OFFICIAL ANSWER KEY & SCORING GUIDE
              </h2>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 text-center text-xs font-mono">
                {availableQuestions.map((q, idx) => (
                  <div key={idx} className="border border-stone-300 rounded p-1">
                    <div className="text-stone-500 text-[10px]">{idx + 1}</div>
                    <div className="font-bold text-stone-900">
                      {String(q.answer || q.correctOption || 'A').toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>

              {includeExplanations && (
                <div className="mt-6 space-y-3">
                  <h3 className="font-bold text-[12px] uppercase text-stone-700">Detailed Explanations</h3>
                  {availableQuestions.map((q, idx) => (
                    q.explanation ? (
                      <div key={idx} className="text-[11.5px] text-stone-700 leading-snug">
                        <strong>Q{idx + 1}:</strong>{' '}
                        <span dangerouslySetInnerHTML={{ __html: q.explanation }} />
                      </div>
                    ) : null
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Footer watermark */}
          <div className="mt-10 pt-4 border-t border-stone-200 text-center text-[10px] text-stone-400">
            Generated via StudyPlug CBT Exam Engine • https://studyplug.com.ng • All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};
