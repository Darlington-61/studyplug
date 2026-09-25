import React from 'react';
import { StudyPlugLogo } from '../Icons';

interface DesktopNavProps {
  currentTab: 'dashboard' | 'subjects' | 'test' | 'practice' | 'bookmarks' | 'results' | 'notes';
  onSelectTab: (tab: 'dashboard' | 'subjects' | 'test' | 'practice' | 'bookmarks' | 'results' | 'notes') => void;
  deviceMode?: 'desktop' | 'mobile-triple' | 'mobile-single';
  onSwitchDeviceMode?: (mode: 'desktop' | 'mobile-triple' | 'mobile-single') => void;
  onOpenCPanelSettings?: () => void;
  onOpenAdminPortal?: () => void;
  onOpenAdvertStudio?: () => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  currentTab,
  onSelectTab,
  deviceMode,
  onSwitchDeviceMode,
  onOpenCPanelSettings,
  onOpenAdminPortal,
  onOpenAdvertStudio
}) => {
  const [isAdminOpen, setIsAdminOpen] = React.useState(false);

  return (
    <header className={`w-full ${currentTab === 'notes' ? 'bg-[#151241]/95 border-b-[2px] border-indigo-500/40 text-white' : 'bg-[#092218]/95 border-b-[3px] border-[#C4823F] text-white'} backdrop-blur-md sticky top-0 z-40 transition-all shadow-md`}>
      {/* Main App Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center space-x-8">
          <div
            onClick={() => onSelectTab('dashboard')}
            className="flex items-center space-x-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#061710] border-2 border-[#C4823F] flex items-center justify-center shadow-sm group-hover:scale-105 transition-all">
              <svg viewBox="0 0 40 32" className="w-6 h-6">
                <polygon points="20,2 38,10 20,18 2,10" fill="#FFFFFF" />
                <path d="M8 13.5 L8 22 C 8 26, 32 26, 32 22 L 32 13.5" fill="#FFFFFF" />
                <polygon points="17,8 26,13 17,18" fill="#FFCC00" />
              </svg>
            </div>
            <div>
              <span className="font-black text-[18px] tracking-tight block leading-tight font-sans">
                <span className="text-white">Study</span><span className="text-[#FFCC00]">Plug</span>
              </span>
              <span className="text-[10px] font-bold text-amber-400 block -mt-0.5 tracking-wide">
                Learn Today. Ace Tomorrow.
              </span>
            </div>
          </div>

          {/* Navigation Tabs - Clean 5-Tab Layout */}
          <nav className="hidden md:flex items-center space-x-1.5 bg-[#061911]/90 p-1.5 rounded-2xl border border-[#C4823F]/50 shadow-inner">
            <button
              type="button"
              onClick={() => onSelectTab('dashboard')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-150 cursor-pointer flex items-center space-x-1.5 ${
                currentTab === 'dashboard'
                  ? 'bg-[#C4823F] text-[#061710] shadow font-black'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🏠</span>
              <span>Dashboard</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectTab('notes')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-150 flex items-center space-x-1.5 cursor-pointer ${
                currentTab === 'notes'
                  ? 'bg-[#FFCC00] text-[#061710] shadow-md font-black ring-2 ring-[#C4823F]'
                  : 'text-[#FFCC00]/80 hover:text-[#FFCC00] hover:bg-[#FFCC00]/10'
              }`}
            >
              <span>📚</span>
              <span>Study Notes</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectTab('practice')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-150 flex items-center space-x-1.5 cursor-pointer ${
                currentTab === 'practice'
                  ? 'bg-[#C4823F] text-[#061710] shadow font-black'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🧪</span>
              <span>Practice Mode</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectTab('test')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-150 flex items-center space-x-1.5 cursor-pointer ${
                currentTab === 'test'
                  ? 'bg-[#C4823F] text-[#061710] shadow font-black'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>⏱️</span>
              <span>CBT Mock Exam</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectTab('bookmarks')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-150 flex items-center space-x-1.5 cursor-pointer ${
                currentTab === 'bookmarks'
                  ? 'bg-[#C4823F] text-[#061710] shadow font-black'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>★</span>
              <span>Bookmarks</span>
            </button>
          </nav>
        </div>

        {/* Right Tools: Search, Notification, Student Profile */}
        <div className="flex items-center space-x-4">
          {/* Quick Search */}
          <div className="relative hidden lg:block w-64">
            <input
              type="text"
              placeholder="Search topics, questions..."
              className="w-full pl-9 pr-8 py-2 bg-[#061710] border border-[#C4823F]/40 rounded-xl text-xs text-white placeholder-emerald-200/40 focus:outline-none focus:border-[#FFCC00] focus:bg-[#0A241A] transition"
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4 text-emerald-300/50 absolute left-3 top-2.5 pointer-events-none"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="text-[10px] font-semibold text-amber-300 bg-[#092218] border border-[#C4823F]/50 px-1.5 py-0.5 rounded absolute right-2 top-2">
              ⌘K
            </span>
          </div>

          {/* Admin Management Tools Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsAdminOpen(!isAdminOpen)}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-2xl border border-[#C4823F]/50 bg-[#061911] hover:bg-[#0A241A] text-amber-200 text-xs font-bold transition cursor-pointer shadow-sm"
              title="Admin & Database Management"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4 text-amber-400">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="hidden sm:inline">Admin Tools</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-amber-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {isAdminOpen && (
              <div
                className="absolute right-0 mt-2 w-56 bg-[#082218] rounded-2xl shadow-2xl border-2 border-[#C4823F] py-2 z-50 animate-in fade-in slide-in-from-top-2"
                onClick={() => setIsAdminOpen(false)}
              >
                <div className="px-3.5 py-1 text-[10px] font-black text-amber-300 uppercase tracking-wider">
                  Admin & Database
                </div>
                <button
                  type="button"
                  onClick={onOpenCPanelSettings}
                  className="w-full px-3.5 py-2 text-left text-xs font-semibold text-emerald-100 hover:bg-[#0E3526] hover:text-[#FFCC00] flex items-center space-x-2.5 transition cursor-pointer"
                >
                  <span className="text-base">🗄️</span>
                  <span>cPanel Cloud Sync</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenAdminPortal}
                  className="w-full px-3.5 py-2 text-left text-xs font-semibold text-emerald-100 hover:bg-[#0E3526] hover:text-[#FFCC00] flex items-center space-x-2.5 transition cursor-pointer"
                >
                  <span className="text-base">📤</span>
                  <span>Upload Past Questions</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenAdvertStudio}
                  className="w-full px-3.5 py-2 text-left text-xs font-semibold text-emerald-100 hover:bg-[#0E3526] hover:text-[#FFCC00] flex items-center space-x-2.5 transition cursor-pointer"
                >
                  <span className="text-base">🎬</span>
                  <span>Advert Studio HD</span>
                </button>
              </div>
            )}
          </div>

          {/* Bell */}
          <button
            type="button"
            className="relative w-10 h-10 rounded-2xl border border-[#C4823F]/50 bg-[#061911] flex items-center justify-center text-amber-300 hover:bg-[#0A241A] transition cursor-pointer"
            aria-label="Notifications"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#EF4444] rounded-full ring-2 ring-[#082218]" />
          </button>

          {/* Real Student Avatar Pill */}
          <div className="flex items-center space-x-3 pl-3 border-l border-[#C4823F]/40">
            <div className="relative">
              <img
                src="student.jpg"
                alt="Student Profile"
                className="w-10 h-10 rounded-2xl object-cover ring-2 ring-[#C4823F] shadow-sm"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full ring-2 ring-[#082218]" />
            </div>
            <div className="hidden sm:block text-left">
              <div className="font-extrabold text-xs text-white leading-tight">Sarah Okonjo</div>
              <div className="text-[10.5px] text-[#FFCC00] font-bold">UTME Top Scholar</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
