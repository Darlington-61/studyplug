import React from 'react';
import { useApp } from '../context/AppContext';
import { StudyPlugHeader, ProgressCard, BottomNavigation } from './design-system';
import { JambLogo, WaecLogo, NecoLogo, NabtebLogo, BeceLogo } from './common/ExamLogos';
import {
  CARD_IMAGE_STUDY_NOTES,
  CARD_IMAGE_PRACTICE,
  CARD_IMAGE_MOCK_EXAM,
  CARD_IMAGE_MOTIVATION
} from '../data/cardImages';

export const HomeScreen: React.FC = () => {
  const [isIosGuideOpen, setIsIosGuideOpen] = React.useState<boolean>(false);
  const {
    setActiveView,
    setSelectedSubject,
    openAiTutor,
    openMorningTea,
    studyStreak,
    overallAccuracy,
    selectedExam,
    setSelectedExam
  } = useApp();

  const handleQuickExam = (exam: string) => {
    setSelectedExam(exam as any);
    setActiveView('notes');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F7F9F8] min-h-screen text-[#10201D] select-none font-sans">
      {/* ─── Screen 1 Header: Deep Green (#004D40) with Brand Logo & Greeting ─── */}
      <StudyPlugHeader
        showBrand={true}
        title="Good morning, Darlington 👋"
        subtitle="Small steps today, big results tomorrow."
        rightAction={
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => openAiTutor()}
              className="w-8 h-8 rounded-full bg-[#003B32] border border-[#FFD600]/60 flex items-center justify-center text-[#FFD600] hover:scale-105 transition cursor-pointer"
              title="Ask StudyPlug AI"
            >
              <span className="text-sm">🤖</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-[#003B32] border border-white/30 flex items-center justify-center text-xs font-bold text-white shadow-xs">
              D
            </div>
          </div>
        }
      />

      {/* ─── Main Content Canvas in Off-White (#F7F9F8) ─── */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-6 space-y-4 sm:max-w-xl lg:max-w-4xl">
        {/* Your Progress Card */}
        <ProgressCard
          percentage={overallAccuracy || 72}
          streakDays={studyStreak || 12}
          subjectsCount={8}
          onClick={() => setActiveView('practice')}
        />

        {/* ☕ Morning Tea Daily Pop-Out Card */}
        <div
          onClick={() => openMorningTea()}
          className="rounded-[20px] bg-gradient-to-r from-[#003B32] via-[#004D40] to-[#0A261D] p-3.5 sm:p-4 text-white shadow-subtle border border-emerald-700/70 cursor-pointer hover:border-[#FFD600] transition active:scale-[0.99] flex items-center justify-between group relative overflow-hidden"
        >
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-[#FFD600] text-[#003B32] flex items-center justify-center text-xl font-black shrink-0 shadow-md group-hover:scale-105 transition">
              ☕
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#FFD600] text-[#002820] px-2 py-0.5 rounded-full">
                  Morning Pop-Out
                </span>
                <span className="text-[11px] font-bold text-emerald-200">
                  🔥 30 Phrasal Verbs
                </span>
              </div>
              <h3 className="text-sm font-black text-white tracking-tight mt-1 leading-snug">
                30 Common Phrasal Verbs Every UTME Student Should Know
              </h3>
              <p className="text-[11px] text-emerald-100/80 font-medium">
                Daily high-yield exam drop • Audio reader & practice drill
              </p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FFD600] group-hover:text-[#002820] text-white flex items-center justify-center text-sm font-bold shrink-0 transition ml-2">
            ›
          </div>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* 1. Study Notes */}
          <div
            onClick={() => setActiveView('notes')}
            className="bg-white rounded-2xl p-3.5 border border-[#E4EAE8] shadow-subtle hover:border-[#004D40]/30 hover:shadow-floating transition-all duration-200 cursor-pointer flex flex-col justify-between group active:scale-[0.98] overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-xl overflow-hidden shadow-sm border border-[#E4EAE8] bg-slate-50 shrink-0">
                <img
                  src={CARD_IMAGE_STUDY_NOTES}
                  alt="Study Notes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="w-7 h-7 rounded-full bg-[#F0F4F3] group-hover:bg-[#004D40] group-hover:text-white text-[#8A9692] flex items-center justify-center text-xs font-bold transition">›</span>
            </div>
            <div className="mt-2.5 text-left">
              <h3 className="font-bold text-[14px] text-[#10201D] leading-tight group-hover:text-[#004D40] transition">
                Study Notes
              </h3>
              <p className="text-[11px] text-[#66736F] font-normal mt-0.5 leading-snug">
                Learn &amp; understand
              </p>
            </div>
          </div>

          {/* 2. Practice */}
          <div
            onClick={() => setActiveView('practice')}
            className="bg-white rounded-2xl p-3.5 border border-[#E4EAE8] shadow-subtle hover:border-[#004D40]/30 hover:shadow-floating transition-all duration-200 cursor-pointer flex flex-col justify-between group active:scale-[0.98] overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-xl overflow-hidden shadow-sm border border-[#E4EAE8] bg-slate-50 shrink-0">
                <img
                  src={CARD_IMAGE_PRACTICE}
                  alt="Practice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="w-7 h-7 rounded-full bg-[#F0F4F3] group-hover:bg-[#004D40] group-hover:text-white text-[#8A9692] flex items-center justify-center text-xs font-bold transition">›</span>
            </div>
            <div className="mt-2.5 text-left">
              <h3 className="font-bold text-[14px] text-[#10201D] leading-tight group-hover:text-[#004D40] transition">
                Practice
              </h3>
              <p className="text-[11px] text-[#66736F] font-normal mt-0.5 leading-snug">
                Sharpen your skills
              </p>
            </div>
          </div>

          {/* 3. Mock Exams */}
          <div
            onClick={() => setActiveView('mock')}
            className="bg-white rounded-2xl p-3.5 border border-[#E4EAE8] shadow-subtle hover:border-[#004D40]/30 hover:shadow-floating transition-all duration-200 cursor-pointer flex flex-col justify-between group active:scale-[0.98] overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-xl overflow-hidden shadow-sm border border-[#E4EAE8] bg-slate-50 shrink-0">
                <img
                  src={CARD_IMAGE_MOCK_EXAM}
                  alt="Mock Exams"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="w-7 h-7 rounded-full bg-[#F0F4F3] group-hover:bg-[#004D40] group-hover:text-white text-[#8A9692] flex items-center justify-center text-xs font-bold transition">›</span>
            </div>
            <div className="mt-2.5 text-left">
              <h3 className="font-bold text-[14px] text-[#10201D] leading-tight group-hover:text-[#004D40] transition">
                Mock Exams
              </h3>
              <p className="text-[11px] text-[#66736F] font-normal mt-0.5 leading-snug">
                Simulate real exams
              </p>
            </div>
          </div>

          {/* 4. Motivation */}
          <div
            onClick={() => setActiveView('motivation')}
            className="bg-white rounded-2xl p-3.5 border border-[#E4EAE8] shadow-subtle hover:border-[#004D40]/30 hover:shadow-floating transition-all duration-200 cursor-pointer flex flex-col justify-between group active:scale-[0.98] overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-xl overflow-hidden shadow-sm border border-[#E4EAE8] bg-slate-50 shrink-0">
                <img
                  src={CARD_IMAGE_MOTIVATION}
                  alt="Motivation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="w-7 h-7 rounded-full bg-[#F0F4F3] group-hover:bg-[#004D40] group-hover:text-white text-[#8A9692] flex items-center justify-center text-xs font-bold transition">›</span>
            </div>
            <div className="mt-2.5 text-left">
              <h3 className="font-bold text-[14px] text-[#10201D] leading-tight group-hover:text-[#004D40] transition">
                Motivation
              </h3>
              <p className="text-[11px] text-[#66736F] font-normal mt-0.5 leading-snug">
                Stay focused
              </p>
            </div>
          </div>
        </div>

        {/* Quick Access Official Exam Badges */}
        <div className="bg-white rounded-[16px] p-4 border border-[#E4EAE8] shadow-subtle space-y-3">
          <div className="text-left font-bold text-[14px] text-[#10201D] flex items-center justify-between">
            <span>Quick Access</span>
            <span className="text-[11px] text-[#66736F] font-medium">Select an exam</span>
          </div>

          <div className="grid grid-cols-5 gap-2 text-center">
            {[
              { id: 'JAMB', name: 'JAMB', Logo: JambLogo, bg: 'bg-emerald-50/70 border-emerald-200/60' },
              { id: 'WAEC', name: 'WAEC', Logo: WaecLogo, bg: 'bg-blue-50/70 border-blue-200/60' },
              { id: 'NECO', name: 'NECO', Logo: NecoLogo, bg: 'bg-teal-50/70 border-teal-200/60' },
              { id: 'NABTEB', name: 'NABTEB', Logo: NabtebLogo, bg: 'bg-amber-50/70 border-amber-200/60' },
              { id: 'BECE', name: 'BECE', Logo: BeceLogo, bg: 'bg-cyan-50/70 border-cyan-200/60' }
            ].map(exam => {
              const LogoComp = exam.Logo;
              return (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => handleQuickExam(exam.id)}
                  className="flex flex-col items-center cursor-pointer group active:scale-95 transition"
                >
                  <div className={`w-12 h-12 sm:w-13 sm:h-13 p-1.5 rounded-2xl ${exam.bg} border flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:shadow-md transition-all duration-200`}>
                    <LogoComp className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-xs" />
                  </div>
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-[#10201D] mt-1.5 group-hover:text-[#004D40] tracking-tight truncate max-w-full">
                    {exam.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile App Download & iPhone Installation Banner */}
        <div className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#E4EAE8] shadow-subtle space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl">📲</span>
              <div className="text-left">
                <h3 className="font-bold text-[14px] text-[#10201D] leading-tight">
                  Get the StudyPlug Mobile App
                </h3>
                <p className="text-[11px] text-[#66736F]">
                  Practice offline anytime on Android and iPhone
                </p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
              Free
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
            {/* Android Direct APK Download */}
            <a
              href="https://studyplug.com.ng/StudyPlug.apk"
              download="StudyPlug.apk"
              className="p-3 rounded-[12px] bg-[#004D40] hover:bg-[#003B32] text-white flex items-center justify-between transition cursor-pointer touch-press shadow-xs group"
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-lg">🤖</span>
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">Download for Android</div>
                  <div className="text-[10px] text-emerald-200">Direct APK Download (14 MB)</div>
                </div>
              </div>
              <span className="text-xs font-black text-amber-300 group-hover:translate-x-0.5 transition">↓</span>
            </a>

            {/* iPhone / iOS Guide Toggle */}
            <button
              type="button"
              onClick={() => setIsIosGuideOpen(!isIosGuideOpen)}
              className="p-3 rounded-[12px] bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-between transition cursor-pointer touch-press shadow-xs group"
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-lg">🍏</span>
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">Install on iPhone / iPad</div>
                  <div className="text-[10px] text-slate-300">Fast 1-tap Home Screen App</div>
                </div>
              </div>
              <span className="text-xs font-black text-slate-300">{isIosGuideOpen ? '▲' : '▼'}</span>
            </button>
          </div>

          {/* Collapsible iPhone Installation Steps */}
          {isIosGuideOpen && (
            <div className="mt-2 p-3.5 rounded-[12px] bg-[#F7F9F8] border border-slate-200 text-left space-y-2 text-xs text-[#10201D] animate-card-in">
              <div className="font-bold text-slate-900 flex items-center space-x-1.5">
                <span>📱 How to install StudyPlug on iPhone / iPad:</span>
              </div>
              <ol className="space-y-1.5 text-[11.5px] text-slate-700 pl-4 list-decimal leading-relaxed">
                <li>
                  Open <strong>Safari</strong> on your iPhone and visit <strong>https://studyplug.com.ng</strong>.
                </li>
                <li>
                  Tap the <strong>Share button</strong> at the bottom of Safari (the square box with an arrow pointing up <span className="font-mono font-bold bg-slate-200 px-1 rounded">⎋</span>).
                </li>
                <li>
                  Scroll down the share options and tap <strong>"Add to Home Screen"</strong> (<span className="font-bold">➕</span>).
                </li>
                <li>
                  Tap <strong>"Add"</strong> in the top-right corner. StudyPlug will instantly appear on your iPhone screen with its official app icon, opening in full screen and working 100% offline!
                </li>
              </ol>
            </div>
          )}
        </div>

        {/* Motivation Card at Bottom */}
        <div
          onClick={() => setActiveView('motivation')}
          className="rounded-[16px] p-4 bg-[#003B32] text-white shadow-subtle border border-[#FFD600]/30 cursor-pointer flex items-center justify-between space-x-3 transition hover:border-[#FFD600]/60 active:scale-[0.99]"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#FFD600]/20 flex items-center justify-center text-lg shrink-0">
              💡
            </div>
            <div className="text-left">
              <h4 className="font-bold text-[13.5px] text-[#FFD600] leading-tight">
                Small steps make big results.
              </h4>
              <p className="text-[11px] text-emerald-100/90 font-normal mt-0.5">
                Practice 10 questions today to keep your streak active!
              </p>
            </div>
          </div>
          <span className="text-white/80 font-bold text-lg">›</span>
        </div>
      </main>

      {/* ─── Bottom Navigation Bar ─── */}
      <BottomNavigation activeTab="home" />
    </div>
  );
};
