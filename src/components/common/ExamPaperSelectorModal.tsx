import React from 'react';
import { useApp } from '../../context/AppContext';
import { WaecLogo, NecoLogo, NabtebLogo } from './ExamLogos';

export type ExamPaperType = 'OBJ' | 'Theory' | 'Practical';

export const ExamPaperSelectorModal: React.FC = () => {
  const {
    isPaperSelectorOpen,
    closePaperSelector,
    paperSelectorExam,
    selectedExamPapers,
    setSelectedExamPapers
  } = useApp();

  if (!isPaperSelectorOpen) return null;

  const currentExam = paperSelectorExam || 'WAEC';

  const togglePaper = (paper: ExamPaperType) => {
    setSelectedExamPapers((prev) => {
      if (prev.includes(paper)) {
        // Prevent deselecting all papers - keep at least one
        if (prev.length === 1) return prev;
        return prev.filter((p) => p !== paper);
      } else {
        return [...prev, paper];
      }
    });
  };

  const handleSelectAll = () => {
    setSelectedExamPapers(['OBJ', 'Theory', 'Practical']);
  };

  const handleSelectOnly = (paper: ExamPaperType) => {
    setSelectedExamPapers([paper]);
  };

  const getLogo = () => {
    const ex = currentExam.toUpperCase();
    if (ex.includes('WAEC')) return <WaecLogo className="w-10 h-10 object-contain" />;
    if (ex.includes('NECO')) return <NecoLogo className="w-10 h-10 object-contain" />;
    if (ex.includes('NABTEB')) return <NabtebLogo className="w-10 h-10 object-contain" />;
    return <WaecLogo className="w-10 h-10 object-contain" />;
  };

  const isObjSelected = selectedExamPapers.includes('OBJ');
  const isTheorySelected = selectedExamPapers.includes('Theory');
  const isPracticalSelected = selectedExamPapers.includes('Practical');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-[24px] border border-[#E4EAE8] shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar with Official Board Branding */}
        <div className="bg-[#004D40] text-white p-4 sm:p-5 flex items-start justify-between gap-3">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 p-1.5 border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
              {getLogo()}
            </div>
            <div className="text-left">
              <div className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-[#FFD600]/20 border border-[#FFD600]/40 text-[#FFD600] text-[10px] font-black uppercase tracking-wider">
                <span>OFFICIAL STANDARD STRUCTURE</span>
              </div>
              <h2 className="text-[16px] sm:text-[18px] font-black text-white leading-tight mt-0.5">
                {currentExam} Examination Papers
              </h2>
              <p className="text-[11.5px] text-emerald-100/90 leading-snug">
                Select 1, 2, or all 3 papers to configure your standard exam session
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closePaperSelector}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition cursor-pointer shrink-0"
            aria-label="Close Paper Selector"
          >
            ✕
          </button>
        </div>

        {/* Body Canvas: Multi-Select Cards */}
        <div className="p-4 sm:p-5 space-y-3.5 overflow-y-auto">
          {/* Quick Preset Buttons */}
          <div className="flex items-center justify-between gap-1.5 flex-wrap">
            <span className="text-[11px] font-bold text-[#66736F] uppercase tracking-wider">
              Quick Presets:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={handleSelectAll}
                className="px-2.5 py-1 rounded-[8px] bg-[#E8F5E9] text-[#004D40] hover:bg-[#C8E6C9] font-bold text-[11px] transition cursor-pointer border border-[#004D40]/20"
              >
                All 3 Papers (Standard Exam)
              </button>
              <button
                type="button"
                onClick={() => handleSelectOnly('OBJ')}
                className="px-2 py-1 rounded-[8px] bg-slate-100 hover:bg-slate-200 text-[#10201D] font-semibold text-[11px] transition cursor-pointer"
              >
                OBJ Only
              </button>
              <button
                type="button"
                onClick={() => handleSelectOnly('Theory')}
                className="px-2 py-1 rounded-[8px] bg-slate-100 hover:bg-slate-200 text-[#10201D] font-semibold text-[11px] transition cursor-pointer"
              >
                Theory Only
              </button>
              <button
                type="button"
                onClick={() => handleSelectOnly('Practical')}
                className="px-2 py-1 rounded-[8px] bg-slate-100 hover:bg-slate-200 text-[#10201D] font-semibold text-[11px] transition cursor-pointer"
              >
                Practical Only
              </button>
            </div>
          </div>

          {/* Paper 1: Objective (OBJ) Card */}
          <div
            onClick={() => togglePaper('OBJ')}
            className={`p-3.5 sm:p-4 rounded-[16px] border-2 transition-all duration-150 cursor-pointer flex items-start space-x-3.5 text-left active:scale-[0.99] ${
              isObjSelected
                ? 'bg-emerald-50/70 border-[#004D40] shadow-sm'
                : 'bg-white border-[#E4EAE8] hover:border-slate-300 opacity-70'
            }`}
          >
            <div className="mt-0.5">
              <div
                className={`w-6 h-6 rounded-lg border flex items-center justify-center font-bold text-xs transition ${
                  isObjSelected
                    ? 'bg-[#004D40] border-[#004D40] text-white shadow-xs'
                    : 'bg-white border-slate-300 text-transparent'
                }`}
              >
                ✓
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-base">🎯</span>
                  <h3 className="font-black text-[14px] sm:text-[15px] text-[#10201D]">
                    Paper 1: Objective (OBJ / CBT)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#004D40]/10 text-[#004D40]">
                  50 Questions
                </span>
              </div>
              <p className="text-[12px] text-[#556965] leading-relaxed">
                Standard multiple-choice past questions (Options A–D/E). Timed simulation with instant scoring, answer keys &amp; detailed solutions.
              </p>
            </div>
          </div>

          {/* Paper 2: Theory Card */}
          <div
            onClick={() => togglePaper('Theory')}
            className={`p-3.5 sm:p-4 rounded-[16px] border-2 transition-all duration-150 cursor-pointer flex items-start space-x-3.5 text-left active:scale-[0.99] ${
              isTheorySelected
                ? 'bg-emerald-50/70 border-[#004D40] shadow-sm'
                : 'bg-white border-[#E4EAE8] hover:border-slate-300 opacity-70'
            }`}
          >
            <div className="mt-0.5">
              <div
                className={`w-6 h-6 rounded-lg border flex items-center justify-center font-bold text-xs transition ${
                  isTheorySelected
                    ? 'bg-[#004D40] border-[#004D40] text-white shadow-xs'
                    : 'bg-white border-slate-300 text-transparent'
                }`}
              >
                ✓
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-base">✍️</span>
                  <h3 className="font-black text-[14px] sm:text-[15px] text-[#10201D]">
                    Paper 2: Theory &amp; Essay
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-800">
                  Section A &amp; B
                </span>
              </div>
              <p className="text-[12px] text-[#556965] leading-relaxed">
                Official structured questions with step-by-step method marks (M1, A1, B1), model essays, and AI Photo Snap Marker to grade handwritten work.
              </p>
            </div>
          </div>

          {/* Paper 3: Practical Card */}
          <div
            onClick={() => togglePaper('Practical')}
            className={`p-3.5 sm:p-4 rounded-[16px] border-2 transition-all duration-150 cursor-pointer flex items-start space-x-3.5 text-left active:scale-[0.99] ${
              isPracticalSelected
                ? 'bg-emerald-50/70 border-[#004D40] shadow-sm'
                : 'bg-white border-[#E4EAE8] hover:border-slate-300 opacity-70'
            }`}
          >
            <div className="mt-0.5">
              <div
                className={`w-6 h-6 rounded-lg border flex items-center justify-center font-bold text-xs transition ${
                  isPracticalSelected
                    ? 'bg-[#004D40] border-[#004D40] text-white shadow-xs'
                    : 'bg-white border-slate-300 text-transparent'
                }`}
              >
                ✓
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-base">🔬</span>
                  <h3 className="font-black text-[14px] sm:text-[15px] text-[#10201D]">
                    Paper 3: Practical (Alternative to Practical)
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/15 text-blue-800">
                  Lab &amp; Apparatus
                </span>
              </div>
              <p className="text-[12px] text-[#556965] leading-relaxed">
                Laboratory apparatus diagrams, titration tables, pendulum/optics slope calculations, specimen identification, and experimental precautions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Confirmation Action */}
        <div className="p-4 bg-[#F7F9F8] border-t border-[#E4EAE8] space-y-2">
          <button
            type="button"
            onClick={closePaperSelector}
            className="w-full py-3.5 rounded-[14px] bg-[#004D40] hover:bg-[#003B32] text-white font-black text-[14.5px] shadow-floating active:scale-[0.98] transition cursor-pointer flex items-center justify-center space-x-2"
          >
            <span>Confirm &amp; Open {currentExam} Standard Exam</span>
            <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs">
              {selectedExamPapers.length} {selectedExamPapers.length === 1 ? 'Paper' : 'Papers'} Selected
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
