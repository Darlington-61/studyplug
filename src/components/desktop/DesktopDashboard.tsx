import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  HeroGraphic,
  MockTestCardIcon,
  PracticeCardIcon,
  PreviousTestsCardIcon,
  BookmarksCardIcon,
  FlameIcon,
  CheckCircleFilled,
  MathSubjectIcon,
  EnglishSubjectIcon,
  PhysicsSubjectIcon,
  ChemistrySubjectIcon
} from '../Icons';

export const DesktopDashboard: React.FC = () => {
  const { testsTaken, overallAccuracy, studyStreak, bookmarks, setActiveView } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-9">
      {/* Showstopper Hero Card with Official StudyPlug Brand Styling */}
      <div
        className="relative overflow-hidden rounded-[32px] p-8 md:p-10 text-white shadow-2xl animate-fade-scale"
        style={{
          background: 'linear-gradient(135deg, #071F15 0%, #0E382B 55%, #15503E 100%)',
          border: '4px solid #C4823F'
        }}
      >
        {/* Subtle background ambient circles */}
        <div className="absolute -right-16 -top-16 w-96 h-96 bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/3 -bottom-20 w-80 h-80 bg-black/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text & CTAs */}
          <div className="max-w-xl space-y-5 text-left animate-fade-left delay-100">
            <div
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                color: '#FFCC00',
                border: '1px solid rgba(255, 204, 0, 0.35)'
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#FFCC00' }} />
              <span>Study Plug 2026 Examination Hub</span>
              <span>•</span>
              <span style={{ color: '#FFFFFF' }}>Learn Today. Ace Tomorrow.</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] animate-chalk-write delay-200" style={{ color: '#FFFFFF' }}>
              Learn Today.<br />
              <span className="chalk-shimmer">Ace Tomorrow.</span>
            </h1>

            <p className="text-sm md:text-base font-normal leading-relaxed chalk-body animate-fade-up delay-300">
              Practice authentic JAMB, WAEC, NECO &amp; BECE past questions with step-by-step
              classroom board solutions, high-yield exam tips, and real CBT simulation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => setActiveView('test')}
                className="px-6 py-3.5 rounded-2xl font-black text-sm transition duration-150 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2.5 cursor-pointer"
                style={{ backgroundColor: '#FFCC00', color: '#0A241B' }}
              >
                <span>Take Mock Test</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => setActiveView('practice')}
                className="px-5 py-3.5 rounded-2xl font-bold text-sm backdrop-blur-md transition duration-150 cursor-pointer"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                Instant Practice Mode
              </button>
            </div>
          </div>

          {/* Right Visual: Real Student Image + 3D Trophy/Books + Floating Glass Badges */}
          <div className="relative shrink-0 flex items-center justify-center">
            {/* Student Image in rounded frame */}
            <div className="relative group">
              <div
                className="w-64 h-64 md:w-72 md:h-72 rounded-[32px] overflow-hidden shadow-2xl"
                style={{ border: '4px solid rgba(255, 255, 255, 0.4)', backgroundColor: '#071F15' }}
              >
                <img
                  src="student.jpg"
                  alt="Cheerful Student with Study Plug"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* 3D Trophy & Target Graphic Overlay */}
              <div className="absolute -bottom-6 -left-12 pointer-events-none">
                <HeroGraphic className="w-36 h-32 md:w-44 md:h-36 drop-shadow-2xl scale-110" />
              </div>

              {/* Floating Glass Badge 1: Streak */}
              <div className="absolute -top-3 -right-3 bg-white/90 backdrop-blur-md text-slate-900 px-3.5 py-2 rounded-2xl border border-white/40 shadow-xl flex items-center space-x-2 animate-bounce-slow">
                <FlameIcon className="w-4 h-4" />
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-400 leading-none">STREAK</div>
                  <div className="text-xs font-extrabold text-slate-900">{studyStreak} Days</div>
                </div>
              </div>

              {/* Floating Glass Badge 2: Accuracy */}
              <div className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white/95 backdrop-blur-md text-slate-900 px-3.5 py-2 rounded-2xl border border-white/40 shadow-xl flex items-center space-x-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xs">
                  ✓
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-400 leading-none">ACCURACY</div>
                  <div className="text-xs font-extrabold text-slate-900">{overallAccuracy}% Avg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showstopper 95% Classroom Notes Banner */}
      <div
        onClick={() => setActiveView('notes')}
        className="relative overflow-hidden rounded-[28px] p-6 sm:p-7 bg-gradient-to-r from-amber-500 via-amber-600 to-[#C4823F] text-slate-950 shadow-xl cursor-pointer hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 group border-2 border-amber-300 animate-fade-right delay-300"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 relative z-10">
          <div className="flex items-center space-x-5 text-left">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 text-[#FFCC00] flex items-center justify-center text-3xl shrink-0 shadow-lg group-hover:scale-105 transition-transform">
              📚
            </div>
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-0.5 rounded-full bg-slate-950/20 text-slate-950 text-[11px] font-black uppercase tracking-wider mb-1">
                <span>⭐ WAEC • NECO • JAMB 2026</span>
                <span>•</span>
                <span>95% High-Score System</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
                Classroom Study Notes & Formula Chalkboards
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 font-medium mt-1 max-w-2xl leading-relaxed">
                Simple, high-yield topic presentations with classroom chalkboard derivations, examiner trap alerts, and direct past-question practice.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              className="px-6 py-3 rounded-2xl bg-slate-950 text-[#FFCC00] font-black text-xs sm:text-sm shadow-xl hover:bg-slate-900 transition flex items-center space-x-2 cursor-pointer group-hover:scale-105"
            >
              <span>Explore Notes Hub</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Start 4-Column Grid */}
      <div className="animate-fade-up delay-200">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold chalk-heading tracking-tight">Quick Start</h2>
            <p className="text-xs chalk-muted mt-0.5">Jump right into your daily practice routine</p>
          </div>
          <button
            type="button"
            onClick={() => setActiveView('test')}
            className="text-xs font-bold text-[#FFCC00] hover:underline cursor-pointer animate-chalk-glow"
          >
            Launch CBT Exam Simulator →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Mock Test */}
          <div
            onClick={() => setActiveView('test')}
            className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl hover:border-[#FFCC00] hover:shadow-2xl transition-all duration-200 cursor-pointer group flex flex-col justify-between board-card-hover animate-fade-up delay-100 animate-border-pulse"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] text-[#FFCC00] flex items-center justify-center shadow group-hover:scale-105 transition-transform">
                  <MockTestCardIcon className="w-6 h-6" />
                </div>
                <span className="text-[10.5px] font-extrabold text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-full border border-[#C4823F]/50">
                  Full Length
                </span>
              </div>

              <h3 className="font-extrabold text-base text-white mt-4 group-hover:text-[#FFCC00] transition-colors leading-tight">
                Mock Test
              </h3>
              <p className="text-xs text-emerald-200/70 font-normal mt-1 leading-relaxed">
                Take a full length test simulating real exam conditions.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#C4823F]/30 flex items-center justify-between text-xs font-bold text-[#FFCC00]">
              <span>50 Questions • Timed</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 2: Practice */}
          <div
            onClick={() => setActiveView('practice')}
            className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl hover:border-[#FFCC00] hover:shadow-2xl transition-all duration-200 cursor-pointer group flex flex-col justify-between board-card-hover animate-fade-up delay-200"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] text-[#34D399] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PracticeCardIcon className="w-6 h-6" />
                </div>
                <span className="text-[10.5px] font-extrabold text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/40">
                  Instant Solutions
                </span>
              </div>

              <h3 className="font-extrabold text-base text-white mt-4 group-hover:text-[#34D399] transition-colors leading-tight">
                Practice
              </h3>
              <p className="text-xs chalk-body font-normal mt-1 leading-relaxed">
                Practice by topic and reveal step-by-step classroom board explanations.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#C4823F]/30 flex items-center justify-between text-xs font-bold text-[#34D399]">
              <span>Choose by Topic</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 3: Previous Tests */}
          <div
            onClick={() => setActiveView('results')}
            className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl hover:border-[#FFCC00] hover:shadow-2xl transition-all duration-200 cursor-pointer group flex flex-col justify-between board-card-hover animate-fade-up delay-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] text-[#FBBF24] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PreviousTestsCardIcon className="w-6 h-6" />
                </div>
                <span className="text-[10.5px] font-extrabold text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-full border border-[#C4823F]/50">
                  {testsTaken} Taken
                </span>
              </div>

              <h3 className="font-extrabold text-base text-white mt-4 group-hover:text-amber-300 transition-colors leading-tight">
                Previous Tests
              </h3>
              <p className="text-xs chalk-body font-normal mt-1 leading-relaxed">
                View your performance, accuracy trends, and test analytics.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#C4823F]/30 flex items-center justify-between text-xs font-bold text-amber-300">
              <span>View History &amp; Score</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 4: Bookmarks */}
          <div
            onClick={() => setActiveView('bookmarks')}
            className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl hover:border-[#FFCC00] hover:shadow-2xl transition-all duration-200 cursor-pointer group flex flex-col justify-between board-card-hover animate-fade-up delay-400"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] text-[#F87171] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <BookmarksCardIcon className="w-6 h-6" />
                </div>
                <span className="text-[10.5px] font-extrabold text-rose-300 bg-rose-950/60 px-2.5 py-1 rounded-full border border-rose-500/40">
                  {bookmarks.length} Saved
                </span>
              </div>

              <h3 className="font-extrabold text-base text-white mt-4 group-hover:text-rose-300 transition-colors leading-tight">
                Bookmarks
              </h3>
              <p className="text-xs text-emerald-200/70 font-normal mt-1 leading-relaxed">
                Review your bookmarked questions and challenging concepts.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-[#C4823F]/30 flex items-center justify-between text-xs font-bold text-rose-300">
              <span>Review {bookmarks.length} Questions</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>

      {/* Your Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-up delay-400">
        {/* Left 2 Cols: Accuracy, Tests Taken & Subject Breakdown */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#0D3023] to-[#071D15] rounded-3xl p-7 border-2 border-[#C4823F] shadow-xl space-y-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-extrabold chalk-heading tracking-tight">Your Progress</h2>
              <p className="text-xs chalk-muted mt-0.5">Real-time statistics updated after every exam</p>
            </div>
            <button
              type="button"
              onClick={() => setActiveView('results')}
              className="text-xs font-extrabold text-[#FFCC00] hover:underline cursor-pointer animate-chalk-glow"
            >
              View Detailed Breakdown →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {/* Overall Accuracy */}
            <div className="bg-[#061911] rounded-2xl p-4 border border-[#C4823F]/40 flex flex-col justify-between shadow-inner board-card-hover">
              <div>
                <span className="text-xs font-semibold chalk-muted">Overall Accuracy</span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-3xl chalk-stat animate-count-up delay-500">{overallAccuracy}%</span>
                  <span className="text-xs font-bold text-amber-300 bg-amber-950/60 border border-[#C4823F]/50 px-1.5 py-0.5 rounded">
                    Active Score
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full h-2 bg-[#082218] rounded-full overflow-hidden border border-[#C4823F]/30">
                  <div className="h-full bg-[#FFCC00] rounded-full transition-all duration-300 shadow-sm" style={{ width: `${overallAccuracy}%` }} />
                </div>
                <div className="flex justify-between text-[10px] font-semibold text-emerald-300/60 mt-1">
                  <span>Target: 80%</span>
                  <span>{overallAccuracy}% Achieved</span>
                </div>
              </div>
            </div>

            {/* Tests Taken */}
            <div className="bg-[#061911] rounded-2xl p-4 border border-[#C4823F]/40 flex flex-col justify-between shadow-inner">
              <div>
                <span className="text-xs font-semibold text-emerald-200/70">Tests Taken</span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-3xl font-extrabold text-white tracking-tight">{testsTaken}</span>
                  <span className="text-xs text-amber-300 font-medium">Completed</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-emerald-200/80 font-medium mt-3">
                <span className="w-2 h-2 rounded-full bg-[#FFCC00]" />
                <span>{testsTaken * 50} Total Questions Solved</span>
              </div>
            </div>

            {/* Average Speed */}
            <div className="bg-[#061911] rounded-2xl p-4 border border-[#C4823F]/40 flex flex-col justify-between shadow-inner">
              <div>
                <span className="text-xs font-semibold text-emerald-200/70">Average Speed</span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="text-3xl font-extrabold text-white tracking-tight">1m 12s</span>
                  <span className="text-xs text-emerald-300 font-bold bg-emerald-950/60 border border-emerald-500/40 px-1.5 py-0.5 rounded">
                    Optimal
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-xs text-emerald-200/80 font-medium mt-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Paced for 2h 30m Exam</span>
              </div>
            </div>
          </div>

          {/* Subject Performance Breakdown Bar */}
          <div className="pt-2 border-t border-[#C4823F]/30">
            <h3 className="text-xs font-bold text-emerald-100 mb-3">Subject Accuracy Breakdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: 'Mathematics', score: '88%', color: 'bg-emerald-400' },
                { name: 'Use of English', score: '82%', color: 'bg-[#FFCC00]' },
                { name: 'Physics', score: '74%', color: 'bg-sky-400' },
                { name: 'Chemistry', score: '79%', color: 'bg-amber-400' },
              ].map((subj) => (
                <div key={subj.name} className="p-2.5 rounded-xl bg-[#061911] border border-[#C4823F]/30">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-emerald-100">{subj.name}</span>
                    <span className="text-white font-bold">{subj.score}</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#082218] rounded-full overflow-hidden border border-[#C4823F]/20">
                    <div className={`h-full ${subj.color} rounded-full`} style={{ width: subj.score }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Study Streak Card */}
        <div className="bg-gradient-to-br from-[#0D3023] to-[#071D15] rounded-3xl p-7 border-2 border-[#C4823F] shadow-xl flex flex-col justify-between text-white">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold text-white leading-tight">Study Streak</h3>
                <span className="text-xs text-emerald-200/70 font-medium">Keep it up!</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-amber-950/60 border border-[#C4823F] px-3 py-1 rounded-full">
                <FlameIcon className="w-4 h-4" />
                <span className="font-extrabold text-xs text-amber-300">{studyStreak} Days</span>
              </div>
            </div>

            <p className="text-xs text-emerald-100/80 mt-4 leading-relaxed font-normal">
              You’ve hit your study targets {studyStreak} days in a row! Consistent daily practice increases exam score retention by 3.5x.
            </p>

            {/* 7 Days tracker row (Mon - Sun) */}
            <div className="mt-6 pt-4 border-t border-[#C4823F]/30">
              <div className="flex items-center justify-between">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="flex flex-col items-center space-y-1.5">
                    <span className="text-[10px] font-semibold text-emerald-200/60">{day}</span>
                    <CheckCircleFilled className="w-6 h-6" />
                  </div>
                ))}
                {/* 7th Day (Sunday) */}
                <div className="flex flex-col items-center space-y-1.5">
                  <span className="text-[10px] font-bold text-amber-300">Sun</span>
                  <div className="w-6 h-6 rounded-full border border-amber-300 bg-amber-950/60 flex items-center justify-center shadow-sm">
                    <span className="text-[10px] font-extrabold text-amber-300">S</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#C4823F]/30 flex items-center justify-between text-xs font-semibold">
            <span className="text-emerald-200/70">Weekly Target</span>
            <span className="text-[#FFCC00] font-bold">7 of 7 Days Completed (100%)</span>
          </div>
        </div>
      </div>

      {/* Featured Subjects Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">Featured Subjects</h2>
            <p className="text-xs text-emerald-200/70 mt-0.5">Top examination subjects with simulated test papers</p>
          </div>
          <button
            type="button"
            onClick={() => setActiveView('subjects')}
            className="text-xs font-extrabold text-[#FFCC00] hover:underline cursor-pointer"
          >
            View All Subjects →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Mathematics */}
          <div
            onClick={() => setActiveView('test')}
            className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl hover:border-[#FFCC00] hover:shadow-2xl transition duration-150 cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#34D399]">
                <MathSubjectIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white group-hover:text-[#FFCC00] transition-colors">
                  Mathematics
                </h3>
                <span className="text-xs text-emerald-200/70 font-medium">450 Questions</span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-[#C4823F] text-slate-950 font-black text-xs group-hover:bg-[#FFCC00] transition">
              CBT
            </span>
          </div>

          {/* Use of English */}
          <div
            onClick={() => setActiveView('subjects')}
            className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl hover:border-[#FFCC00] hover:shadow-2xl transition duration-150 cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-rose-400">
                <EnglishSubjectIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white group-hover:text-[#FFCC00] transition-colors">
                  Use of English
                </h3>
                <span className="text-xs text-emerald-200/70 font-medium">320 Questions</span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-[#061710] border border-[#C4823F]/50 text-amber-200 font-bold text-xs group-hover:bg-[#C4823F] group-hover:text-slate-950 transition">
              Open
            </span>
          </div>

          {/* Physics */}
          <div
            onClick={() => setActiveView('subjects')}
            className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl hover:border-[#FFCC00] hover:shadow-2xl transition duration-150 cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-sky-400">
                <PhysicsSubjectIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white group-hover:text-[#FFCC00] transition-colors">
                  Physics
                </h3>
                <span className="text-xs text-emerald-200/70 font-medium">350 Questions</span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-[#061710] border border-[#C4823F]/50 text-amber-200 font-bold text-xs group-hover:bg-[#C4823F] group-hover:text-slate-950 transition">
              Open
            </span>
          </div>

          {/* Chemistry */}
          <div
            onClick={() => setActiveView('subjects')}
            className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-3xl p-5 border-2 border-[#C4823F] shadow-xl hover:border-[#FFCC00] hover:shadow-2xl transition duration-150 cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#061710] border border-[#C4823F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-amber-400">
                <ChemistrySubjectIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white group-hover:text-[#FFCC00] transition-colors">
                  Chemistry
                </h3>
                <span className="text-xs text-emerald-200/70 font-medium">320 Questions</span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-xl bg-[#061710] border border-[#C4823F]/50 text-amber-200 font-bold text-xs group-hover:bg-[#C4823F] group-hover:text-slate-950 transition">
              Open
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
