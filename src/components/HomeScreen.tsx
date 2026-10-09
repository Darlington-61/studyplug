import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BrandLogo } from './common/BrandLogo';
import { HeroBookStack } from './common/HeroBookStack';
import { BottomNavigation } from './design-system';
import { MenuDrawer } from './common/MenuDrawer';
import { STUDENT_MASCOT_IMAGE } from '../assets/studentMascot';

export const HomeScreen: React.FC = () => {
  const {
    setActiveView,
    openAiTutor,
    openMorningTea,
    openDareToDare,
    setSelectedExam,
    openGlobalSearch
  } = useApp();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuickExam = (exam: string) => {
    setSelectedExam(exam as any);
    setActiveView('courses');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F8F8F8] min-h-screen text-[#001028] select-none font-sans relative">
      {/* ─── 1. TOP APP BAR: Dark Navy (#001028) with Brand Logo, Greeting & Menu ─── */}
      <header className="sticky top-0 z-40 w-full bg-[#001028] text-white border-b border-[#001830] shadow-sm">
        {/* Row 1: Logo & Hamburger */}
        <div className="h-14 px-4 sm:px-6 flex items-center justify-between">
          <BrandLogo size="sm" />
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="p-1.5 text-white hover:text-[#F8C800] active:scale-95 transition cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-6 h-6">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Row 2: Student Avatar Greeting */}
        <div className="px-4 sm:px-6 pb-3 pt-0.5 flex items-center space-x-3 text-left">
          <div
            onClick={() => setActiveView('profile')}
            className="relative cursor-pointer group shrink-0"
          >
            <img
              src={STUDENT_MASCOT_IMAGE}
              alt="Darlington"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-[#F8C800] shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-[#001028]" />
          </div>
          <div className="min-w-0">
            <div className="text-xs sm:text-[13px] font-bold text-white flex items-center space-x-1 truncate">
              <span>Good Morning, Darlington</span>
              <span>👋</span>
            </div>
            <div className="text-[11px] text-[#8090A0] font-medium leading-tight truncate">
              Keep going! Your goals are within reach.
            </div>
          </div>
        </div>

        {/* Row 3: Single Clean Unified Search Bar */}
        <div className="px-4 sm:px-6 pb-3.5">
          <button
            type="button"
            onClick={openGlobalSearch}
            className="w-full h-11 px-3.5 rounded-xl bg-[#001830] border border-[#002444] text-[#8090A0] hover:text-white hover:border-[#F8C800]/50 transition-all flex items-center space-x-2.5 cursor-pointer shadow-inner group text-left"
            aria-label="Search questions, topics, subjects, exams"
          >
            <span className="text-sm shrink-0 group-hover:scale-110 transition-transform">🔍</span>
            <span className="text-xs sm:text-[13px] font-normal truncate flex-1 text-[#8090A0] group-hover:text-white">
              Search questions, topics, subjects, exams...
            </span>
          </button>
        </div>
      </header>

      {/* ─── 2. MAIN SCROLL CONTAINER ─── */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-4">
        {/* Hero Card: Small Steps Big Results (Balanced & Matched to Image 1 Mobile) */}
        <section className="relative overflow-hidden rounded-[24px] bg-[#001028] text-white p-4.5 sm:p-5 shadow-sm border border-[#001830] text-left">
          {/* Proportioned Geometric Yellow Top-Right Accent */}
          <div className="absolute top-0 right-0 w-14 h-14 pointer-events-none overflow-hidden rounded-tr-[24px]">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <polygon points="35,0 100,0 100,65" fill="#F8C800" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4">
            <div className="space-y-1.5 flex-1 min-w-0 pr-1">
              <span className="inline-block text-[9.5px] font-extrabold tracking-wider text-[#F8C800] uppercase bg-[#001830] px-2.5 py-0.5 rounded-full border border-[#F8C800]/30 shadow-xs">
                DAILY GOAL
              </span>
              <h2 className="text-lg sm:text-xl font-black tracking-tight text-white leading-tight">
                Small Steps<br />Big Results
              </h2>
              <button
                type="button"
                onClick={() => setActiveView('practice')}
                className="mt-1.5 px-4 py-2 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-xs shadow-md transition cursor-pointer inline-flex items-center space-x-1"
              >
                <span>Study Now</span>
                <span className="text-sm font-black">→</span>
              </button>
            </div>

            {/* Sleek Graduation Cap with Dream Study Achieve entering that space */}
            <div className="w-[145px] sm:w-[155px] h-[135px] shrink-0 flex items-center justify-center relative">
              <HeroBookStack variant="cap-only" className="w-full h-full max-w-[150px]" />
            </div>
          </div>
        </section>

        {/* ─── 2.5 DEDICATED REPEATED QUESTIONS & TOPICS FEATURE CARD ─── */}
        <section
          onClick={() => setActiveView('repeated-questions')}
          className="bg-[#001028] text-white rounded-[24px] p-4 sm:p-5 border border-[#001830] shadow-sm hover:border-[#F8C800] hover:shadow-md transition-all cursor-pointer flex items-center justify-between text-left group relative overflow-hidden"
        >
          <div className="space-y-1.5 z-10 flex-1 pr-2">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#F8C800] text-[10px] font-black uppercase tracking-wider">
              <span>🔁 High-Yield Analysis</span>
              <span>•</span>
              <span>JAMB • WAEC • NECO</span>
            </div>
            <h3 className="font-extrabold text-sm sm:text-base text-white group-hover:text-[#F8C800] transition leading-snug">
              Repeated Questions &amp; Topics
            </h3>
            <p className="text-[11px] text-[#607080] leading-snug font-normal">
              Most frequently repeated questions grouped by topic with instant CBT practice
            </p>
          </div>
          <div className="w-11 h-11 rounded-full bg-[#001830] text-[#F8C800] flex items-center justify-center font-bold text-lg group-hover:bg-[#F8C800] group-hover:text-[#001028] group-hover:scale-105 transition-all shrink-0 shadow-sm border border-[#001020]">
            →
          </div>
        </section>

        {/* ─── 3. SIX CORE FEATURE CARDS (with -> Chevrons as in Reference) ─── */}
        <div className="grid grid-cols-2 gap-3">
          {/* 1. Past Questions */}
          <div
            onClick={() => setActiveView('past-questions')}
            className="bg-white rounded-[22px] p-4 border border-[#E8E8E8] shadow-sm hover:shadow-md active:scale-[0.98] transition cursor-pointer flex flex-col justify-between min-h-[145px] text-left group"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center shadow-xs group-hover:scale-105 transition shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F8C800" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-sm">
                →
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#001028] text-xs sm:text-sm mt-3 leading-snug">
                Past Questions
              </h3>
              <p className="text-[10.5px] text-[#607080] font-normal mt-0.5 leading-snug">
                By topic &amp; exam type
              </p>
            </div>
          </div>

          {/* 2. Video Lessons */}
          <div
            onClick={() => setActiveView('topics')}
            className="bg-white rounded-[22px] p-4 border border-[#E8E8E8] shadow-sm hover:shadow-md active:scale-[0.98] transition cursor-pointer flex flex-col justify-between min-h-[145px] text-left group"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center shadow-xs group-hover:scale-105 transition shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F8C800" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <polygon points="5 3 19 12 5 21 5 3" fill="#F8C800" fillOpacity="0.25" />
                </svg>
              </div>
              <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-sm">
                →
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#001028] text-xs sm:text-sm mt-3 leading-snug">
                Video Lessons
              </h3>
              <p className="text-[10.5px] text-[#607080] font-normal mt-0.5 leading-snug">
                Easy-to-follow tutorials
              </p>
            </div>
          </div>

          {/* 3. Study Notes */}
          <div
            onClick={() => setActiveView('notes')}
            className="bg-white rounded-[22px] p-4 border border-[#E8E8E8] shadow-sm hover:shadow-md active:scale-[0.98] transition cursor-pointer flex flex-col justify-between min-h-[145px] text-left group"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center shadow-xs group-hover:scale-105 transition shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F8C800" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-sm">
                →
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#001028] text-xs sm:text-sm mt-3 leading-snug">
                Study Notes
              </h3>
              <p className="text-[10.5px] text-[#607080] font-normal mt-0.5 leading-snug">
                Concise high-yield notes
              </p>
            </div>
          </div>

          {/* 4. AI Study Helper */}
          <div
            onClick={() => setActiveView('ai-helper')}
            className="bg-white rounded-[22px] p-4 border border-[#E8E8E8] shadow-sm hover:shadow-md active:scale-[0.98] transition cursor-pointer flex flex-col justify-between min-h-[145px] text-left group"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center shadow-xs group-hover:scale-105 transition shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F8C800" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <circle cx="9" cy="9" r="1.5" fill="#F8C800" />
                  <circle cx="15" cy="9" r="1.5" fill="#F8C800" />
                  <path d="M8 15h8" />
                </svg>
              </div>
              <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-sm">
                →
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#001028] text-xs sm:text-sm mt-3 leading-snug">
                AI Study Helper
              </h3>
              <p className="text-[10.5px] text-[#607080] font-normal mt-0.5 leading-snug">
                Personalized study support
              </p>
            </div>
          </div>

          {/* 5. Challenges & Battle */}
          <div
            onClick={() => setActiveView('challenges')}
            className="bg-white rounded-[22px] p-4 border border-[#E8E8E8] shadow-sm hover:shadow-md active:scale-[0.98] transition cursor-pointer flex flex-col justify-between min-h-[145px] text-left group"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center shadow-xs group-hover:scale-105 transition shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F8C800" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M6 2h12v7a6 6 0 0 1-12 0V2z" />
                </svg>
              </div>
              <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-sm">
                →
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#001028] text-xs sm:text-sm mt-3 leading-snug">
                Challenges &amp; Battle
              </h3>
              <p className="text-[10.5px] text-[#607080] font-normal mt-0.5 leading-snug">
                Earn points, compete &amp; win
              </p>
            </div>
          </div>

          {/* 6. Smart Timetable */}
          <div
            onClick={() => setActiveView('performance')}
            className="bg-white rounded-[22px] p-4 border border-[#E8E8E8] shadow-sm hover:shadow-md active:scale-[0.98] transition cursor-pointer flex flex-col justify-between min-h-[145px] text-left group"
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center shadow-xs group-hover:scale-105 transition shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F8C800" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-sm">
                →
              </span>
            </div>
            <div>
              <h3 className="font-bold text-[#001028] text-xs sm:text-sm mt-3 leading-snug">
                Smart Timetable
              </h3>
              <p className="text-[10.5px] text-[#607080] font-normal mt-0.5 leading-snug">
                Plan study time with AI
              </p>
            </div>
          </div>
        </div>

        {/* ─── 4. EXAM BANNER CARD: JAMB, WAEC, NECO & MORE ─── */}
        <div className="rounded-[24px] bg-[#001028] text-white p-4 sm:p-5 border border-[#001830] shadow-sm text-left flex items-center justify-between gap-3 relative overflow-hidden">
          <div className="space-y-1.5 flex-1 pr-1 z-10">
            <h4 className="font-bold text-sm text-white">
              JAMB, WAEC, NECO &amp; More
            </h4>
            <p className="text-[11px] text-[#8090A0] leading-snug">
              Prepare for your exams with the best resources.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['JAMB', 'WAEC', 'NECO', 'NABTEB', 'BECE'].map(exam => (
                <button
                  key={exam}
                  type="button"
                  onClick={() => handleQuickExam(exam)}
                  className="px-2.5 py-0.5 rounded-full bg-[#001830] border border-[#F8C800]/40 text-[#F8C800] font-bold text-[10px] hover:bg-[#F8C800] hover:text-[#001028] transition cursor-pointer"
                >
                  {exam}
                </button>
              ))}
            </div>
            <div className="pt-1.5">
              <button
                type="button"
                onClick={() => setActiveView('courses')}
                className="px-4 py-2 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-bold text-xs shadow-md active:scale-95 transition cursor-pointer inline-flex items-center space-x-1"
              >
                <span>Start Learning</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Book Stack Illustration on Lower Card (Matched to Image 1 Mobile) */}
          <div className="w-20 sm:w-24 shrink-0 flex items-center justify-end z-10">
            <HeroBookStack variant="books-only" className="w-full max-w-[100px]" />
          </div>
        </div>

        {/* ─── 5. REPEATED QUESTIONS CARD ─── */}
        <div
          onClick={() => setActiveView('repeated-questions')}
          className="rounded-[22px] p-4 bg-white border border-[#E8E8E8] shadow-sm cursor-pointer flex items-center justify-between space-x-3 transition hover:border-[#F8C800] active:scale-[0.99] group text-left"
        >
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-[#001028] text-[#F8C800] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition font-black">
              🔁
            </div>
            <div>
              <div className="flex items-center space-x-1.5 mb-0.5">
                <span className="bg-[#F8C800] text-[#001028] text-[9.5px] font-bold px-1.5 py-0.2 rounded-md uppercase tracking-wider">
                  HIGH YIELD
                </span>
                <span className="text-[10px] text-[#607080] font-medium">
                  JAMB • WAEC • NECO
                </span>
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-[#001028] leading-tight group-hover:text-[#F8C800] transition">
                Repeated Questions &amp; Full Solutions
              </h4>
              <p className="text-[10.5px] text-[#607080] font-normal mt-0.5 leading-snug">
                Browse questions repeated across exam years
              </p>
            </div>
          </div>
          <span className="text-[#001028] font-bold text-lg group-hover:text-[#F8C800] group-hover:translate-x-1 transition shrink-0">
            →
          </span>
        </div>
      </main>

      {/* Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenLeaderboard={() => setActiveView('leaderboard')}
        onOpenCalculator={() => setActiveView('performance')}
      />

      {/* ─── Fixed Bottom Navigation Bar ─── */}
      <BottomNavigation activeTab="home" />
    </div>
  );
};

export default HomeScreen;
