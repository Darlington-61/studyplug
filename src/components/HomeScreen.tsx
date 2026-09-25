import React from 'react';
import { useApp } from '../context/AppContext';
import { StudyPlugHeader, ProgressCard, BottomNavigation } from './design-system';

export const HomeScreen: React.FC = () => {
  const [isIosGuideOpen, setIsIosGuideOpen] = React.useState<boolean>(false);
  const {
    setActiveView,
    setSelectedSubject,
    openAiTutor,
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

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* 1. Study Notes (Blue #1976D2) */}
          <div
            onClick={() => setActiveView('notes')}
            className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle hover:border-[#D0DBD8] hover:shadow-floating transition-all duration-150 cursor-pointer flex flex-col justify-between group active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-[12px] bg-blue-50 border border-blue-100 text-[#1976D2] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <span className="text-[#8A9692] text-sm group-hover:text-[#10201D] group-hover:translate-x-0.5 transition">›</span>
            </div>
            <div className="mt-3 text-left">
              <h3 className="font-semibold text-[14px] text-[#10201D] leading-tight group-hover:text-[#004D40] transition">
                Study Notes
              </h3>
              <p className="text-[11px] text-[#66736F] font-normal mt-0.5">
                Learn &amp; understand
              </p>
            </div>
          </div>

          {/* 2. Practice (Green #16A34A) */}
          <div
            onClick={() => setActiveView('practice')}
            className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle hover:border-[#D0DBD8] hover:shadow-floating transition-all duration-150 cursor-pointer flex flex-col justify-between group active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-[12px] bg-emerald-50 border border-emerald-100 text-[#16A34A] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <span className="text-[#8A9692] text-sm group-hover:text-[#10201D] group-hover:translate-x-0.5 transition">›</span>
            </div>
            <div className="mt-3 text-left">
              <h3 className="font-semibold text-[14px] text-[#10201D] leading-tight group-hover:text-[#004D40] transition">
                Practice
              </h3>
              <p className="text-[11px] text-[#66736F] font-normal mt-0.5">
                Sharpen your skills
              </p>
            </div>
          </div>

          {/* 3. Mock Exams (Purple #7E3FC7) */}
          <div
            onClick={() => setActiveView('mock')}
            className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle hover:border-[#D0DBD8] hover:shadow-floating transition-all duration-150 cursor-pointer flex flex-col justify-between group active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-[12px] bg-purple-50 border border-purple-100 text-[#7E3FC7] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className="text-[#8A9692] text-sm group-hover:text-[#10201D] group-hover:translate-x-0.5 transition">›</span>
            </div>
            <div className="mt-3 text-left">
              <h3 className="font-semibold text-[14px] text-[#10201D] leading-tight group-hover:text-[#004D40] transition">
                Mock Exams
              </h3>
              <p className="text-[11px] text-[#66736F] font-normal mt-0.5">
                Simulate real exams
              </p>
            </div>
          </div>

          {/* 4. Motivation (Orange/Yellow #F57C00) */}
          <div
            onClick={() => setActiveView('motivation')}
            className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle hover:border-[#D0DBD8] hover:shadow-floating transition-all duration-150 cursor-pointer flex flex-col justify-between group active:scale-[0.99]"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-[12px] bg-amber-50 border border-amber-100 text-[#F57C00] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                </svg>
              </div>
              <span className="text-[#8A9692] text-sm group-hover:text-[#10201D] group-hover:translate-x-0.5 transition">›</span>
            </div>
            <div className="mt-3 text-left">
              <h3 className="font-semibold text-[14px] text-[#10201D] leading-tight group-hover:text-[#004D40] transition">
                Motivation
              </h3>
              <p className="text-[11px] text-[#66736F] font-normal mt-0.5">
                Stay focused
              </p>
            </div>
          </div>
        </div>

        {/* Quick Access Exam Circles */}
        <div className="bg-white rounded-[14px] p-4 border border-[#E4EAE8] shadow-subtle space-y-3">
          <div className="text-left font-bold text-[14px] text-[#10201D]">
            Quick Access
          </div>

          <div className="grid grid-cols-4 gap-3 text-center">
            {[
              { id: 'JAMB', name: 'JAMB', color: '#008C95', bg: 'bg-teal-50' },
              { id: 'WAEC', name: 'WAEC', color: '#16A34A', bg: 'bg-emerald-50' },
              { id: 'NECO', name: 'NECO', color: '#1976D2', bg: 'bg-blue-50' },
              { id: 'BECE', name: 'BECE', color: '#E53935', bg: 'bg-rose-50' }
            ].map(exam => (
              <button
                key={exam.id}
                type="button"
                onClick={() => handleQuickExam(exam.id)}
                className="flex flex-col items-center cursor-pointer group active:scale-95 transition"
              >
                <div className={`w-12 h-12 rounded-full ${exam.bg} border border-[#E4EAE8] flex items-center justify-center font-bold text-[13px] shadow-xs group-hover:scale-105 transition`} style={{ color: exam.color }}>
                  {exam.name}
                </div>
                <span className="text-[11px] font-semibold text-[#66736F] mt-1.5 group-hover:text-[#10201D]">
                  {exam.name}
                </span>
              </button>
            ))}
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
