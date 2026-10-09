import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from './BrandLogo';
import { STUDENT_MASCOT_IMAGE } from '../../assets/studentMascot';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLeaderboard?: () => void;
  onOpenCalculator?: () => void;
  onOpenYouTubeStudio?: () => void;
  onOpenTopicAdmin?: () => void;
  onOpenCPanelSettings?: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenLeaderboard,
  onOpenCalculator,
  onOpenYouTubeStudio,
  onOpenTopicAdmin,
  onOpenCPanelSettings
}) => {
  const {
    activeView,
    setActiveView,
    openAiTutor,
    openUpgradeModal,
    openLeaderboard,
    openCalculator
  } = useApp();

  if (!isOpen) return null;

  const navigateTo = (view: string) => {
    setActiveView(view as any);
    onClose();
  };

  const handleOpenLeaderboard = () => {
    onClose();
    if (onOpenLeaderboard) {
      onOpenLeaderboard();
    } else if (openLeaderboard) {
      openLeaderboard();
    }
  };

  const handleOpenAi = () => {
    onClose();
    openAiTutor();
  };

  const handleOpenPremium = () => {
    onClose();
    if (openUpgradeModal) {
      openUpgradeModal();
    } else {
      setActiveView('profile');
    }
  };

  const handleLogout = () => {
    onClose();
    setActiveView('login');
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
          <path d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6" />
        </svg>
      ),
      action: () => navigateTo('dashboard'),
      isActive: activeView === 'dashboard' || activeView === 'home'
    },
    {
      id: 'courses',
      label: 'Courses',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <rect x="3" y="3" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 16v5" />
          <rect x="7" y="6" width="10" height="7" rx="1" />
          <line x1="9" y1="8.5" x2="15" y2="8.5" />
          <line x1="9" y1="10.5" x2="13" y2="10.5" />
        </svg>
      ),
      action: () => navigateTo('courses'),
      isActive: activeView === 'courses' || activeView === 'subjects' || activeView === 'topics'
    },
    {
      id: 'notes',
      label: 'Notes',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <rect x="4" y="3" width="16" height="18" rx="2.5" />
          <line x1="8" y1="8" x2="16" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="13" y2="16" />
        </svg>
      ),
      action: () => navigateTo('notes'),
      isActive: activeView === 'notes'
    },
    {
      id: 'challenges',
      label: 'Challenges',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      action: () => navigateTo('challenges'),
      isActive: activeView === 'challenges'
    },
    {
      id: 'battle-arena',
      label: 'Battle Arena',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
          <path d="M6 4h12v5a6 6 0 0 1-12 0V4z" />
        </svg>
      ),
      action: () => navigateTo('battle-arena'),
      isActive: activeView === 'battle-arena'
    },
    {
      id: 'ai-tutor',
      label: 'StudyPlug AI',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <rect x="4" y="8" width="16" height="12" rx="4" />
          <circle cx="9" cy="13" r="1.5" fill="currentColor" />
          <circle cx="15" cy="13" r="1.5" fill="currentColor" />
          <path d="M10 17h4" />
          <line x1="12" y1="4" x2="12" y2="8" />
          <circle cx="12" cy="3" r="1" fill="currentColor" />
          <line x1="2" y1="14" x2="4" y2="14" />
          <line x1="20" y1="14" x2="22" y2="14" />
        </svg>
      ),
      action: handleOpenAi,
      isActive: false
    },
    {
      id: 'past-questions',
      label: 'Past Questions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      action: () => navigateTo('past-questions'),
      isActive: activeView === 'past-questions'
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <rect x="2" y="4" width="20" height="16" rx="4" />
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
        </svg>
      ),
      action: () => navigateTo('resources'),
      isActive: activeView === 'resources'
    },
    {
      id: 'leaderboard',
      label: 'Leaderboard',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      ),
      action: handleOpenLeaderboard,
      isActive: activeView === 'leaderboard'
    },
    {
      id: 'performance',
      label: 'Performance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      action: () => navigateTo('performance'),
      isActive: activeView === 'performance'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[19px] h-[19px]">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      action: () => {
        if (onOpenCPanelSettings) onOpenCPanelSettings();
        else navigateTo('profile');
      },
      isActive: false
    }
  ];

  return (
    <>
      <style>{`
        @keyframes rightDrawerSlideIn {
          from { transform: translateX(100%); opacity: 0.7; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-right-drawer-in {
          animation: rightDrawerSlideIn 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .animate-backdrop-in {
          animation: backdropFadeIn 0.2s ease both;
        }
      `}</style>

      {/* Drawer Overlay Container */}
      <div className="fixed inset-0 z-50 flex justify-end font-sans">
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-[4px] animate-backdrop-in"
        />

        {/* Drawer Panel: Exact Figma Navy Styling (#07152A) */}
        <div className="relative w-[320px] max-w-[85vw] bg-[#07152A] text-white h-full shadow-[-12px_0_40px_rgba(0,10,24,0.7)] flex flex-col z-10 animate-right-drawer-in border-l border-white/10 select-none overflow-y-auto">
          {/* Top Row: StudyPlug Logo & Close Button */}
          <div className="px-5 pt-5 pb-3 flex items-center justify-between shrink-0">
            <BrandLogo size="xs" />
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition cursor-pointer active:scale-95"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <div className="px-4 py-2 space-y-3 flex-1 overflow-y-auto scrollbar-none">
            {/* User Profile Card */}
            <div
              onClick={() => navigateTo('profile')}
              className="p-3 rounded-2xl bg-[#0B1E38]/80 hover:bg-[#0B1E38] border border-white/10 flex items-center justify-between cursor-pointer transition group"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#FFD233] flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-[#FFD233]/40">
                  <img
                    src={STUDENT_MASCOT_IMAGE}
                    alt="Darlington"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-extrabold text-[14px] text-white truncate leading-tight group-hover:text-[#FFD233] transition">
                    Darlington
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    JAMB Aspirant
                  </p>
                </div>
              </div>
              <span className="text-slate-400 group-hover:text-[#FFD233] font-bold text-sm transition">
                &gt;
              </span>
            </div>

            {/* Premium Gold Card */}
            <div
              onClick={handleOpenPremium}
              className="p-3.5 rounded-2xl bg-gradient-to-r from-[#2A240A] via-[#332B0D] to-[#251E07] border border-[#FFD233]/40 flex items-center justify-between cursor-pointer transition group shadow-md hover:border-[#FFD233]"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-[#FFD233]/20 flex items-center justify-center shrink-0 text-base">
                  👑
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[13.5px] text-[#FFD233] truncate leading-tight">
                    Premium
                  </h4>
                  <p className="text-[11px] text-[#E0C068] truncate mt-0.5">
                    Unlock more features
                  </p>
                </div>
              </div>
              <span className="text-[#FFD233] font-bold text-sm group-hover:translate-x-0.5 transition">
                &gt;
              </span>
            </div>

            {/* Nav Menu Items List (Matching Figma Exact Specs) */}
            <div className="space-y-1 pt-1">
              {menuItems.map((item) => {
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={item.action}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl transition duration-150 cursor-pointer text-left group ${
                      item.isActive
                        ? 'bg-[#212814] text-[#FFD233] border border-[#FFD233]/30 font-bold'
                        : 'bg-transparent hover:bg-white/5 text-slate-200 hover:text-white font-medium'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5 min-w-0">
                      <span className={`shrink-0 ${item.isActive ? 'text-[#FFD233]' : 'text-slate-400 group-hover:text-white'}`}>
                        {item.icon}
                      </span>
                      <span className="text-[13px] tracking-tight truncate">
                        {item.label}
                      </span>
                    </div>
                    <span className={`text-xs transition ${item.isActive ? 'text-[#FFD233]' : 'text-slate-500 group-hover:text-white group-hover:translate-x-0.5'}`}>
                      &gt;
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Action: Log Out */}
          <div className="p-4 border-t border-white/10 shrink-0">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-300 hover:text-red-400 hover:bg-red-500/10 transition cursor-pointer font-medium text-[13px]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// ── Side Menu Rail (Closed State as specified in Figma) ──────────────────
export const SideMenuRail: React.FC<{
  onOpen: () => void;
  className?: string;
}> = ({ onOpen, className = '' }) => {
  const { activeView, setActiveView } = useApp();

  const railItems = [
    { id: 'dashboard', label: 'Home', icon: '🏠', active: activeView === 'dashboard' || activeView === 'home', action: () => setActiveView('dashboard') },
    { id: 'courses', label: 'Courses', icon: '🖥️', active: activeView === 'courses' || activeView === 'subjects', action: () => setActiveView('courses') },
    { id: 'notes', label: 'Notes', icon: '📄', active: activeView === 'notes', action: () => setActiveView('notes') },
    { id: 'challenges', label: 'Challenges', icon: '⚡', active: activeView === 'challenges', action: () => setActiveView('challenges') },
    { id: 'battle-arena', label: 'Battle Arena', icon: '🏆', active: activeView === 'battle-arena', action: () => setActiveView('battle-arena') },
    { id: 'past-questions', label: 'Past Questions', icon: '❓', active: activeView === 'past-questions', action: () => setActiveView('past-questions') },
    { id: 'resources', label: 'Resources', icon: '▶️', active: activeView === 'resources', action: () => setActiveView('resources') },
    { id: 'leaderboard', label: 'Leaderboard', icon: '📊', active: activeView === 'leaderboard', action: () => setActiveView('leaderboard') },
    { id: 'performance', label: 'Performance', icon: '📈', active: activeView === 'performance', action: () => setActiveView('performance') }
  ];

  return (
    <aside
      className={`w-[68px] bg-[#07152A] border-r border-white/10 flex flex-col items-center py-4 select-none shrink-0 ${className}`}
    >
      {/* Top Logo */}
      <button
        type="button"
        onClick={onOpen}
        className="w-10 h-10 rounded-xl bg-[#001830] border border-[#FFD233]/40 flex items-center justify-center text-[#FFD233] font-black text-sm mb-6 hover:scale-105 transition cursor-pointer shadow-sm"
        title="Open Navigation Menu"
      >
        <span className="text-base">⚡</span>
      </button>

      {/* Icon Rail Items */}
      <div className="flex-1 space-y-2.5 flex flex-col items-center">
        {railItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={item.action}
            title={item.label}
            className={`w-10 h-10 rounded-[14px] flex items-center justify-center text-sm transition cursor-pointer ${
              item.active
                ? 'bg-[#FFD233] text-[#001028] shadow-xs scale-105 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Bottom Exit */}
      <button
        type="button"
        onClick={() => setActiveView('login')}
        title="Log Out"
        className="w-10 h-10 rounded-xl bg-white/5 hover:bg-red-500/10 text-slate-400 hover:text-red-400 flex items-center justify-center transition cursor-pointer mt-4"
      >
        🚪
      </button>
    </aside>
  );
};

export default MenuDrawer;
