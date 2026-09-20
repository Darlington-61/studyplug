import React from 'react';
import { useApp } from '../context/AppContext';
import {
  StudyPlugLogo,
  HeroGraphic,
  MockTestCardIcon,
  PracticeCardIcon,
  PreviousTestsCardIcon,
  BookmarksCardIcon,
  FlameIcon,
  CheckCircleFilled
} from './Icons';

export const HomeScreen: React.FC = () => {
  const { testsTaken, overallAccuracy, studyStreak, setActiveView } = useApp();

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#061710] min-h-full text-white">
      {/* Scrollable Content */}
      <div className="px-5 pt-2 pb-4 space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between pt-1">
          {/* Hamburger Menu Button */}
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center text-amber-300 hover:bg-[#0E3526] rounded-xl transition cursor-pointer"
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="w-5 h-5">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="16" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>

          {/* Center Brand Logo & Tagline */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm border border-[#C4823F]" style={{ backgroundColor: '#071F15' }}>
              <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                <path d="M16 4L3 11L16 18L29 11L16 4Z" fill="#FFFFFF" />
                <path d="M7 14.5V20.5C7 24.5 11 27.5 16 27.5C21 27.5 25 24.5 25 20.5V14.5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
                <polygon points="12,18 20,23 12,28" fill="#FFCC00" />
              </svg>
            </div>
            <div className="text-left leading-tight">
              <h1 className="font-black text-[16px] tracking-tight font-sans">
                <span className="text-white">Study</span><span className="text-[#FFCC00]">Plug</span>
              </h1>
              <p className="text-[9.5px] font-bold text-amber-400 -mt-0.5">Learn Today. <span className="text-emerald-300">Ace Tomorrow.</span></p>
            </div>
          </div>

          {/* Right Notification Bell */}
          <button
            type="button"
            className="relative w-9 h-9 flex items-center justify-center text-amber-300 hover:bg-[#0E3526] rounded-xl transition cursor-pointer"
            aria-label="Notifications"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {/* Notification Badge Dot */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#FFCC00] rounded-full ring-2 ring-[#082218]" />
          </button>
        </div>

        {/* Hero Banner Card */}
        <div
          className="relative overflow-hidden rounded-[22px] p-4 text-white shadow-card-elevated"
          style={{
            background: 'linear-gradient(135deg, #071F15 0%, #0E382B 55%, #15503E 100%)',
            border: '2px solid #C4823F'
          }}
        >
          <div className="flex items-center justify-between">
            {/* Text details */}
            <div className="z-10 max-w-[52%] pr-1">
              <div
                className="inline-block px-2 py-0.5 rounded-full text-[8.5px] font-bold mb-1.5 shadow-sm"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#FFCC00', border: '1px solid rgba(255,204,0,0.35)' }}
              >
                StudyPlug 2026 Hub
              </div>
              <h2 className="text-[15px] font-black leading-[1.2] tracking-tight text-white">
                Learn Today.<br /><span style={{ color: '#FFCC00' }}>Ace Tomorrow.</span>
              </h2>
              <p className="text-[10px] text-emerald-100/90 font-normal leading-snug mt-1.5">
                Authentic CBT questions with classroom board solutions.
              </p>
            </div>

            {/* Real Student Image + 3D Visual Graphic */}
            <div className="w-[48%] flex items-center justify-end relative">
              {/* Real Student Photo */}
              <div className="relative z-10 shrink-0">
                <div
                  className="w-[72px] h-[72px] rounded-2xl overflow-hidden shadow-lg"
                  style={{ border: '2px solid rgba(255, 255, 255, 0.4)', backgroundColor: '#071F15' }}
                >
                  <img
                    src="student.jpg"
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating mini flame badge */}
                <div className="absolute -bottom-1.5 -left-1.5 bg-white text-slate-900 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold shadow flex items-center space-x-0.5 border border-slate-100">
                  <FlameIcon className="w-2.5 h-2.5" />
                  <span>{studyStreak}d</span>
                </div>
              </div>

              {/* 3D Visual Graphic alongside */}
              <div className="-ml-5 scale-90 pointer-events-none z-0">
                <HeroGraphic className="w-24 h-20 drop-shadow-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Carousel Dots */}
        <div className="flex justify-center items-center space-x-1.5 -mt-1">
          <div className="w-4 h-1.5 bg-[#0E382B] rounded-full" />
          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
        </div>

        {/* 95% Classroom Study Notes Feature Card */}
        <div
          onClick={() => setActiveView('notes')}
          className="rounded-2xl p-3.5 bg-gradient-to-r from-amber-500 to-[#C4823F] text-slate-950 shadow-md cursor-pointer hover:shadow-lg transition flex items-center justify-between border border-amber-300"
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-950 text-[#FFCC00] flex items-center justify-center text-xl shrink-0 shadow">
              📚
            </div>
            <div>
              <div className="text-[9px] font-black uppercase tracking-wider text-slate-900 bg-amber-300/60 px-1.5 py-0.2 rounded inline-block">
                95% Score System
              </div>
              <h4 className="font-extrabold text-[13px] text-slate-950 leading-tight">
                Syllabus Lesson Notes
              </h4>
              <p className="text-[10px] text-slate-900 font-medium leading-snug">
                Formulas, diagrams & topic past questions
              </p>
            </div>
          </div>
          <span className="w-7 h-7 rounded-full bg-slate-950 text-[#FFCC00] flex items-center justify-center text-xs font-black shrink-0">
            ➔
          </span>
        </div>

        {/* Quick Start Section */}
        <div>
          <h3 className="font-extrabold text-[14.5px] text-white tracking-tight mb-2.5">Quick Start</h3>
          
          <div className="grid grid-cols-2 gap-2.5">
            {/* Mock Test */}
            <div
              onClick={() => setActiveView('subjects')}
              className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-2xl p-3.5 border-2 border-[#C4823F] shadow-lg hover:border-[#FFCC00] transition duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-xl bg-[#061710] border border-[#C4823F] text-[#FFCC00] flex items-center justify-center shadow">
                <MockTestCardIcon className="w-4 h-4" />
              </div>
              <div className="mt-2.5">
                <h4 className="font-bold text-[13px] text-white leading-tight">Mock Test</h4>
                <p className="text-[10px] text-emerald-200/70 font-normal leading-snug mt-0.5">
                  Take a full length test simulating real exam
                </p>
              </div>
            </div>

            {/* Practice */}
            <div
              onClick={() => setActiveView('practice')}
              className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-2xl p-3.5 border-2 border-[#C4823F] shadow-lg hover:border-[#FFCC00] transition duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-xl bg-[#061710] border border-[#C4823F] text-[#34D399] flex items-center justify-center">
                <PracticeCardIcon className="w-4 h-4" />
              </div>
              <div className="mt-2.5">
                <h4 className="font-bold text-[13px] text-white leading-tight">Practice</h4>
                <p className="text-[10px] text-emerald-200/70 font-normal leading-snug mt-0.5">
                  Practice by topic and improve
                </p>
              </div>
            </div>

            {/* Previous Tests */}
            <div
              onClick={() => setActiveView('results')}
              className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-2xl p-3.5 border-2 border-[#C4823F] shadow-lg hover:border-[#FFCC00] transition duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-xl bg-[#061710] border border-[#C4823F] text-[#FBBF24] flex items-center justify-center">
                <PreviousTestsCardIcon className="w-4 h-4" />
              </div>
              <div className="mt-2.5">
                <h4 className="font-bold text-[13px] text-white leading-tight">Previous Tests</h4>
                <p className="text-[10px] text-emerald-200/70 font-normal leading-snug mt-0.5">
                  View your performance and analytics
                </p>
              </div>
            </div>

            {/* Bookmarks */}
            <div
              onClick={() => setActiveView('bookmarks')}
              className="bg-gradient-to-br from-[#0E3526] to-[#082218] rounded-2xl p-3.5 border-2 border-[#C4823F] shadow-lg hover:border-[#FFCC00] transition duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-xl bg-[#061710] border border-[#C4823F] text-[#F87171] flex items-center justify-center">
                <BookmarksCardIcon className="w-4 h-4" />
              </div>
              <div className="mt-2.5">
                <h4 className="font-bold text-[13px] text-white leading-tight">Bookmarks</h4>
                <p className="text-[10px] text-emerald-200/70 font-normal leading-snug mt-0.5">
                  Review your bookmarked questions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Progress Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-extrabold text-[14.5px] text-white tracking-tight">Your Progress</h3>
            <button
              type="button"
              onClick={() => setActiveView('results')}
              className="text-[11.5px] font-bold text-[#FFCC00] hover:underline cursor-pointer"
            >
              View All
            </button>
          </div>

          {/* Progress Card */}
          <div className="bg-gradient-to-br from-[#0D3023] to-[#071D15] rounded-2xl p-4 border-2 border-[#C4823F] shadow-xl space-y-3.5 text-white">
            {/* Top Metrics Row */}
            <div className="flex items-start justify-between">
              {/* Overall Accuracy */}
              <div className="w-[50%] pr-2">
                <span className="text-[10.5px] font-medium text-emerald-200/70 block">Overall Accuracy</span>
                <span className="text-[17px] font-black text-white leading-tight block mt-0.5">{overallAccuracy}%</span>
                {/* Accuracy Bar */}
                <div className="w-full h-1.5 bg-[#061911] rounded-full overflow-hidden mt-1.5 border border-[#C4823F]/30">
                  <div className="h-full bg-[#FFCC00] rounded-full transition-all duration-300" style={{ width: `${overallAccuracy}%` }} />
                </div>
              </div>

              {/* Tests Taken */}
              <div className="w-[45%] flex items-center space-x-2.5 pl-2 border-l border-[#C4823F]/30">
                <div className="w-8 h-8 rounded-xl bg-[#061911] border border-[#C4823F]/40 flex items-center justify-center text-[#FFCC00]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M9 7h6" />
                    <path d="M9 11l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10.5px] font-medium text-emerald-200/70 block">Tests Taken</span>
                  <span className="text-[17px] font-black text-white leading-tight block -mt-0.5">{testsTaken}</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#C4823F]/30 w-full" />

            {/* Study Streak Sub-card */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="font-bold text-[12px] text-white block leading-tight">Study Streak</span>
                  <span className="text-[9.5px] text-emerald-200/70 font-medium">Keep it up!</span>
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end space-x-1">
                    <FlameIcon className="w-3.5 h-3.5" />
                    <span className="font-extrabold text-[12px] text-amber-300">{studyStreak} Days</span>
                  </div>
                </div>
              </div>

              {/* 7 Circles Row */}
              <div className="flex items-center justify-between pt-0.5">
                {[1, 2, 3, 4, 5, 6].map((day) => (
                  <div key={day} className="flex items-center justify-center">
                    <CheckCircleFilled className="w-5 h-5" />
                  </div>
                ))}
                {/* 7th Day (Sunday) */}
                <div className="w-5 h-5 rounded-full border border-amber-300 bg-amber-950/60 flex items-center justify-center">
                  <span className="text-[9.5px] font-bold text-amber-300">S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-[#092218] border-t-2 border-[#C4823F] px-3 py-2 flex items-center justify-around shadow-lg">
        {/* Home */}
        <button
          type="button"
          onClick={() => setActiveView('dashboard')}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-5 h-5 flex items-center justify-center text-[#FFCC00]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <span className="text-[9.5px] font-bold text-[#FFCC00] mt-0.5">Home</span>
        </button>

        {/* Courses / Subjects */}
        <button
          type="button"
          onClick={() => setActiveView('subjects')}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-5 h-5 flex items-center justify-center text-emerald-200/70 group-hover:text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="12" y2="14" />
            </svg>
          </div>
          <span className="text-[9.5px] font-medium text-emerald-200/70 group-hover:text-white mt-0.5">Courses</span>
        </button>

        {/* Notes (Gold Accent) */}
        <button
          type="button"
          onClick={() => setActiveView('notes')}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-5 h-5 flex items-center justify-center text-amber-400">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <span className="text-[9.5px] font-bold text-amber-400 mt-0.5">Notes</span>
        </button>

        {/* Challenges / Practice */}
        <button
          type="button"
          onClick={() => setActiveView('practice')}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-5 h-5 flex items-center justify-center text-emerald-200/70 group-hover:text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
              <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
          </div>
          <span className="text-[9.5px] font-medium text-emerald-200/70 group-hover:text-white mt-0.5">Challenges</span>
        </button>

        {/* Profile */}
        <button
          type="button"
          onClick={() => setActiveView('bookmarks')}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="w-5 h-5 rounded-full overflow-hidden border border-[#C4823F] group-hover:border-[#FFCC00] transition shadow-xs">
            <img src="student.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="text-[9.5px] font-medium text-emerald-200/70 group-hover:text-white mt-0.5">Profile</span>
        </button>
      </div>
    </div>
  );
};
