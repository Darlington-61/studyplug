import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeroBookStack } from '../common/HeroBookStack';
import { RepeatedQuestionsModal } from '../common/RepeatedQuestionsModal';
import { PastQuestionsBrowserModal } from '../common/PastQuestionsBrowserModal';
import { StudyGoalsModal } from '../common/StudyGoalsModal';

export const DesktopDashboard: React.FC = () => {
  const {
    testsTaken,
    overallAccuracy,
    studyStreak,
    bookmarks,
    setActiveView,
    openAiTutor,
    openMorningTea,
    openDareToDare,
    setSelectedExam
  } = useApp();

  const [showRepeated, setShowRepeated] = useState(false);
  const [showPastQuestionsBrowser, setShowPastQuestionsBrowser] = useState(false);
  const [showGoals, setShowGoals] = useState(false);

  const handleExamClick = (exam: string) => {
    setSelectedExam(exam as any);
    setActiveView('notes');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-10 font-sans">
      {/* ─── 1. HERO SECTION: Exact Brand Mockup (Navy #0B1B2B + Yellow #FFD200) ─── */}
      <section className="relative overflow-hidden rounded-[36px] bg-[#0B1B2B] text-white shadow-2xl border border-slate-800">
        {/* Geometric Sharp Yellow Corner Accents (Matching Mockup) */}
        <div
          className="absolute -top-12 -right-12 w-64 h-64 bg-[#FFD200] opacity-90 transform rotate-45 pointer-events-none"
          style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#FFD200]/15 transform -rotate-12 pointer-events-none rounded-3xl"
        />

        <div className="relative z-10 px-8 py-12 md:px-14 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Column */}
          <div className="max-w-xl text-left space-y-5">
            {/* Kicker Pill */}
            <div className="inline-block">
              <span className="text-[11px] font-black tracking-widest text-[#FFD200] uppercase bg-[#071524] px-3.5 py-1.5 rounded-full border border-[#FFD200]/40">
                YOUR SUCCESS. OUR PRIORITY.
              </span>
            </div>

            {/* Main Brand Title & Tagline */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08]">
                <span>Study</span>
                <span className="text-[#FFD200]">Plug</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 tracking-tight">
                Learn Today. Ace Tomorrow.
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-lg">
              Get past questions, study materials, video lessons, AI tools and more — all in one place. Prepare smarter, not harder.
            </p>

            {/* Primary CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setActiveView('practice')}
                className="inline-flex items-center space-x-3 bg-[#FFD200] hover:bg-[#FFE04D] text-[#0B1B2B] font-black text-sm sm:text-base px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Get Started</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>

          {/* Right Visual Column: 3D Book Stack + Mortarboard + Chalk Rays */}
          <div className="w-full lg:w-[480px] shrink-0 flex items-center justify-center">
            <HeroBookStack variant="desktop" className="w-full max-w-[460px]" />
          </div>
        </div>
      </section>

      {/* ─── 2. SIX FEATURE CARDS ROW (Matching Mockup Layout) ─── */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* 1. Past Questions */}
          <div
            onClick={() => setShowPastQuestionsBrowser(true)}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#0B1B2B] text-[#FFD200] flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition">
                📝
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mt-3.5 leading-snug group-hover:text-amber-600 transition">
                Past Questions
              </h3>
              <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-snug">
                Scanned past questions by topic and exam type.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs font-black text-slate-800 group-hover:text-[#0B1B2B]">
              <span>Explore</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* 2. Video Lessons */}
          <div
            onClick={() => openMorningTea()}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#0B1B2B] text-[#FFD200] flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition">
                🎥
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mt-3.5 leading-snug group-hover:text-amber-600 transition">
                Video Lessons
              </h3>
              <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-snug">
                Learn with easy-to-follow video tutorials.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs font-black text-slate-800 group-hover:text-[#0B1B2B]">
              <span>Watch</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* 3. Study Notes */}
          <div
            onClick={() => setActiveView('notes')}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#0B1B2B] text-[#FFD200] flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition">
                📖
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mt-3.5 leading-snug group-hover:text-amber-600 transition">
                Study Notes
              </h3>
              <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-snug">
                Download and read concise notes.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs font-black text-slate-800 group-hover:text-[#0B1B2B]">
              <span>View</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* 4. AI Study Helper */}
          <div
            onClick={() => openAiTutor()}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#0B1B2B] text-[#FFD200] flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition">
                🤖
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mt-3.5 leading-snug group-hover:text-amber-600 transition">
                AI Study Helper
              </h3>
              <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-snug">
                Get personalized study support.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs font-black text-slate-800 group-hover:text-[#0B1B2B]">
              <span>Try Now</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* 5. Challenges & Battle */}
          <div
            onClick={() => openDareToDare({ subject: 'Mathematics' })}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#0B1B2B] text-[#FFD200] flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition">
                ⚔️
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mt-3.5 leading-snug group-hover:text-amber-600 transition">
                Challenges & Battle
              </h3>
              <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-snug">
                Earn points, compete and win.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs font-black text-slate-800 group-hover:text-[#0B1B2B]">
              <span>Join</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* 6. Smart Timetable */}
          <div
            onClick={() => setShowGoals(true)}
            className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#0B1B2B] text-[#FFD200] flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition">
                📅
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mt-3.5 leading-snug group-hover:text-amber-600 transition">
                Smart Timetable
              </h3>
              <p className="text-[11.5px] text-slate-500 font-normal mt-1 leading-snug">
                Plan your study time with AI.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-slate-100 flex items-center text-xs font-black text-slate-800 group-hover:text-[#0B1B2B]">
              <span>Create</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MULTIPLE EXAMS. ONE PLATFORM. BANNER (Matching Mockup) ─── */}
      <section className="relative overflow-hidden rounded-3xl bg-[#0B1B2B] p-6 sm:p-8 text-white border border-slate-800 shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-left space-y-2">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Multiple Exams. One Platform.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Prepare for all major Nigerian and International examinations under one unified account.
            </p>

            {/* Exam Badge Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {[
                { name: 'JAMB', color: 'bg-red-500/20 text-red-300 border-red-500/40' },
                { name: 'WAEC', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
                { name: 'NECO', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
                { name: 'NABTEB', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
                { name: 'IELTS', color: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
                { name: 'BECE', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
              ].map((exam) => (
                <button
                  key={exam.name}
                  type="button"
                  onClick={() => handleExamClick(exam.name)}
                  className={`px-4 py-1.5 rounded-full text-xs font-black border transition hover:scale-105 cursor-pointer ${exam.color}`}
                >
                  {exam.name}
                </button>
              ))}
            </div>
          </div>

          {/* Angled Yellow Sticker Tag */}
          <div className="shrink-0">
            <div className="bg-[#FFD200] text-[#0B1B2B] font-black text-sm sm:text-base px-6 py-3 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition duration-200">
              ⚡ Study Smart. Score Higher.
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. WHY STUDYPLUG? TRUST SECTION (Matching Mockup) ─── */}
      <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-left">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Why StudyPlug?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Engineered specifically to help secondary and UTME candidates master exam topics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-2xl">⚡</div>
            <h3 className="font-extrabold text-slate-900 text-sm">Easy to Use</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Simple, clean and intuitive interface designed for fast and distraction-free revision.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-2xl">🛡️</div>
            <h3 className="font-extrabold text-slate-900 text-sm">Reliable Content</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Verified syllabus, actual previous questions and accurate step-by-step model answers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-2xl">📱</div>
            <h3 className="font-extrabold text-slate-900 text-sm">Learn Anywhere</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full desktop, tablet and mobile responsiveness with instant progress sync.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="text-2xl">⭐</div>
            <h3 className="font-extrabold text-slate-900 text-sm">Built for Your Success</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Target 300+ in JAMB and straight A's in WAEC with predictive score analytics.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. USER PROGRESS & HIGH-YIELD REPEATED QUESTIONS SHORTCUT ─── */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Progress overview */}
        <div className="lg:col-span-2 bg-[#0B1B2B] text-white rounded-3xl p-7 border border-slate-800 shadow-xl space-y-5 text-left">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-black tracking-tight">Your Practice Progress</h3>
              <p className="text-xs text-slate-400">Keep up the daily momentum</p>
            </div>
            <button
              type="button"
              onClick={() => setActiveView('results')}
              className="text-xs font-bold text-[#FFD200] hover:underline cursor-pointer"
            >
              Detailed Analytics →
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#071524] p-4 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 block font-medium">Overall Accuracy</span>
              <span className="text-2xl font-black text-[#FFD200] mt-1 block">{overallAccuracy}%</span>
            </div>
            <div className="bg-[#071524] p-4 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 block font-medium">Mock Tests Taken</span>
              <span className="text-2xl font-black text-white mt-1 block">{testsTaken}</span>
            </div>
            <div className="bg-[#071524] p-4 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 block font-medium">Study Streak</span>
              <span className="text-2xl font-black text-emerald-400 mt-1 block">{studyStreak} Days 🔥</span>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Most Repeated Questions Callout */}
        <div
          onClick={() => setShowRepeated(true)}
          className="bg-gradient-to-br from-[#0B1B2B] to-[#132A42] text-white rounded-3xl p-7 border border-[#FFD200]/40 shadow-xl flex flex-col justify-between cursor-pointer hover:border-[#FFD200] transition group text-left"
        >
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#FFD200] text-[#0B1B2B] px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-2">
              <span>🔁 High Yield</span>
            </div>
            <h4 className="text-base font-black text-white group-hover:text-[#FFD200] transition">
              Most Repeated Exam Questions
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Browse questions by topic with step-by-step classroom board explanations.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-[#FFD200]">
            <span>Explore Repeated Questions</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </section>

      {/* Modals */}
      {showRepeated && <RepeatedQuestionsModal onClose={() => setShowRepeated(false)} />}
      {showPastQuestionsBrowser && <PastQuestionsBrowserModal onClose={() => setShowPastQuestionsBrowser(false)} />}
      {showGoals && <StudyGoalsModal onClose={() => setShowGoals(false)} />}
    </div>
  );
};

export default DesktopDashboard;
