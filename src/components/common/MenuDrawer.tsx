import React from 'react';
import { useApp } from '../../context/AppContext';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeaderboard: () => void;
  onOpenCalculator: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenLeaderboard,
  onOpenCalculator
}) => {
  const { setActiveView, studyStreak, testsTaken, overallAccuracy, openAiTutor, isDarkMode, toggleDarkMode } = useApp();

  if (!isOpen) return null;

  const navigateTo = (view: any) => {
    setActiveView(view);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex animate-fade-in font-sans">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer Body (slides from left) */}
      <div className={`relative w-80 max-w-[85vw] ${isDarkMode ? 'bg-[#0A1613] text-[#E6F1EE] border-[#163029]' : 'bg-white text-[#10201D] border-[#E4EAE8]'} h-full shadow-2xl flex flex-col justify-between z-10 animate-slide-right border-r`}>
        {/* Top Header Card: Primary Dark Green #004D40 */}
        <div className="bg-[#004D40] text-white p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#003B32] border border-[#FFD600]/40 flex items-center justify-center">
                <span className="text-lg">🎓</span>
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-white leading-tight">StudyPlug Ai</h3>
                <span className="text-[10px] text-emerald-200">Nigerian CBT &amp; Syllabus Prep</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm transition cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Student Profile Card */}
          <div className="p-3.5 rounded-[14px] bg-[#003B32] border border-white/15 flex items-center space-x-3 text-left">
            <div className="w-11 h-11 rounded-full bg-[#FFD600] text-[#004D40] font-black text-base flex items-center justify-center shrink-0 shadow-xs">
              D
            </div>
            <div className="truncate">
              <h4 className="font-bold text-[14px] text-white truncate">Darlington</h4>
              <p className="text-[11px] text-[#FFD600] font-semibold">Student Gold Plan</p>
              <div className="flex items-center space-x-2 text-[10.5px] text-emerald-100/80 mt-0.5">
                <span>🔥 {studyStreak || 7}d streak</span>
                <span>•</span>
                <span>{overallAccuracy || 76}% avg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation Items */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1 text-left">
          {/* Dark Mode Switch Item */}
          <div className="pb-2">
            <button
              type="button"
              onClick={toggleDarkMode}
              className={`w-full flex items-center justify-between p-2.5 rounded-[12px] border transition cursor-pointer ${
                isDarkMode
                  ? 'bg-[#132A23] border-emerald-500/30 text-emerald-100'
                  : 'bg-emerald-50 border-emerald-200 text-[#004D40]'
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <span className="text-lg">{isDarkMode ? '🌙' : '☀️'}</span>
                <div className="text-left leading-tight">
                  <div className="font-bold text-[13px]">{isDarkMode ? 'Dark Mode (Night)' : 'Light Mode (Day)'}</div>
                  <div className="text-[10.5px] opacity-75">{isDarkMode ? 'Obsidian Chalkboard Theme' : 'Clean Daylight Theme'}</div>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                isDarkMode ? 'bg-emerald-400 text-[#071914]' : 'bg-[#004D40] text-[#FFD600]'
              }`}>
                {isDarkMode ? 'ACTIVE' : 'SWITCH'}
              </span>
            </button>
          </div>
          {/* 1. Leaderboard (Requested by User!) */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenLeaderboard();
            }}
            className="w-full flex items-center space-x-3 p-3 rounded-[12px] bg-amber-50/80 hover:bg-amber-100 border border-amber-200/80 text-[#10201D] font-bold text-[13.5px] transition cursor-pointer group"
          >
            <span className="text-xl">🏆</span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span>Leaderboard</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFD600] text-[#004D40]">
                  TOP 10
                </span>
              </div>
              <p className="text-[11px] text-[#66736F] font-normal">National CBT ranks &amp; scores</p>
            </div>
          </button>

          {/* 2. Home Dashboard */}
          <button
            type="button"
            onClick={() => navigateTo('dashboard')}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#F7F9F8] text-[#10201D] font-medium text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">🏠</span>
            <span>Home Dashboard</span>
          </button>

          {/* 3. Study Notes */}
          <button
            type="button"
            onClick={() => navigateTo('notes')}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#F7F9F8] text-[#10201D] font-medium text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">📚</span>
            <span>Classroom Study Notes</span>
          </button>

          {/* 4. Subject Directory */}
          <button
            type="button"
            onClick={() => navigateTo('subjects')}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#F7F9F8] text-[#10201D] font-medium text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">📖</span>
            <span>Choose Subject</span>
          </button>

          {/* 5. Practice Mode */}
          <button
            type="button"
            onClick={() => navigateTo('practice')}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#F7F9F8] text-[#10201D] font-medium text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">🎯</span>
            <span>Practice CBT Drill</span>
          </button>

          {/* 6. Mock Exam */}
          <button
            type="button"
            onClick={() => navigateTo('mock')}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#F7F9F8] text-[#10201D] font-medium text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">📝</span>
            <span>Timed Mock Exams</span>
          </button>

          {/* 7. Motivation & Streaks */}
          <button
            type="button"
            onClick={() => navigateTo('motivation')}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#F7F9F8] text-[#10201D] font-medium text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">💡</span>
            <span>Motivation &amp; Habits</span>
          </button>

          {/* 8. Bookmarks */}
          <button
            type="button"
            onClick={() => navigateTo('bookmarks')}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#F7F9F8] text-[#10201D] font-medium text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">🔖</span>
            <span>Saved Questions</span>
          </button>

          {/* 9. Scientific Calculator (Requested by User!) */}
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenCalculator();
            }}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#F7F9F8] text-[#10201D] font-medium text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">🧮</span>
            <span>CBT Scientific Calculator</span>
          </button>

          {/* 10. StudyPlug AI Tutor */}
          <button
            type="button"
            onClick={() => {
              onClose();
              openAiTutor();
            }}
            className="w-full flex items-center space-x-3 p-2.5 rounded-[12px] hover:bg-[#E8F5E9] text-[#004D40] font-bold text-[13.5px] transition cursor-pointer"
          >
            <span className="text-lg">🤖</span>
            <span>Ask StudyPlug AI</span>
          </button>
        </div>

        {/* Bottom Drawer Footer */}
        <div className={`p-4 ${isDarkMode ? 'bg-[#071310] border-[#163029] text-[#8A9692]' : 'bg-[#F7F9F8] border-[#E4EAE8] text-[#66736F]'} border-t space-y-2 text-left`}>
          <div className="flex items-center justify-between text-[11px]">
            <span>Offline Ready</span>
            <span className={`px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-emerald-100 text-[#004D40]'} font-bold`}>
              ✓ 100% Offline
            </span>
          </div>
          <div className="text-[10px] opacity-75">
            StudyPlug v2.0 • JAMB, WAEC, NECO &amp; BECE
          </div>
        </div>
      </div>
    </div>
  );
};
