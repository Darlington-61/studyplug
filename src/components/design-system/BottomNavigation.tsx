import React, { useCallback } from 'react';
import { useApp } from '../../context/AppContext';

export type BottomNavTab =
  | 'home'
  | 'courses'
  | 'notes'
  | 'challenges'
  | 'profile'
  | string;

interface BottomNavigationProps {
  activeTab?: BottomNavTab;
  onTabChange?: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const { activeView, setActiveView } = useApp();

  // Resolve current active tab from prop or AppContext activeView
  const currentTabId = (() => {
    const raw = activeTab || activeView;
    if (raw === 'dashboard' || raw === 'home') return 'home';
    if (raw === 'courses' || raw === 'subjects' || raw === 'topics') return 'courses';
    if (raw === 'notes' || raw === 'resources') return 'notes';
    if (raw === 'challenges' || raw === 'battle-arena' || raw === 'practice' || raw === 'test' || raw === 'mock') return 'challenges';
    if (raw === 'profile' || raw === 'performance' || raw === 'results' || raw === 'leaderboard' || raw === 'bookmarks' || raw === 'motivation') return 'profile';
    return 'home';
  })();

  const handleTabClick = useCallback(
    (tabId: string) => {
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        try {
          navigator.vibrate(8);
        } catch {
          // ignore
        }
      }

      if (onTabChange) {
        onTabChange(tabId);
      }

      switch (tabId) {
        case 'home':
          setActiveView('dashboard');
          break;
        case 'courses':
          setActiveView('courses');
          break;
        case 'notes':
          setActiveView('notes');
          break;
        case 'challenges':
          setActiveView('challenges');
          break;
        case 'profile':
          setActiveView('profile');
          break;
        default:
          setActiveView('dashboard');
      }
    },
    [onTabChange, setActiveView]
  );

  const tabs: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
          <path d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6" />
        </svg>
      )
    },
    {
      id: 'courses',
      label: 'Courses',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
          <rect x="3" y="3" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 16v5" />
          <rect x="7" y="6" width="10" height="7" rx="1" />
          <line x1="9" y1="8.5" x2="15" y2="8.5" />
          <line x1="9" y1="10.5" x2="13" y2="10.5" />
        </svg>
      )
    },
    {
      id: 'notes',
      label: 'Notes',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
          <rect x="4" y="3" width="16" height="18" rx="2.5" />
          <line x1="8" y1="8" x2="16" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="13" y2="16" />
        </svg>
      )
    },
    {
      id: 'challenges',
      label: 'Challenges',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    }
  ];

  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-3 left-4 right-4 z-40 max-w-md mx-auto bg-white/95 backdrop-blur-md rounded-[26px] shadow-[0_8px_30px_rgba(0,16,40,0.10)] border border-slate-100 px-2 py-2 flex items-center justify-around font-sans select-none"
    >
      {tabs.map((tab) => {
        const isActive = currentTabId === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabClick(tab.id)}
            aria-label={tab.label}
            className="flex flex-col items-center justify-center py-0.5 px-1 min-w-[62px] cursor-pointer group transition-transform duration-150 active:scale-95"
          >
            {/* Pill Container with Exact Figma Geometry */}
            <div
              className={`w-[54px] h-[34px] rounded-[16px] flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? 'bg-[#FFD233] text-[#001028] shadow-xs'
                  : 'bg-transparent text-[#94A3B8] group-hover:text-[#001028]'
              }`}
            >
              {tab.icon}
            </div>

            {/* Typography Label */}
            <span
              className={`text-[11px] leading-tight mt-1 transition-colors duration-150 ${
                isActive
                  ? 'text-[#001028] font-bold'
                  : 'text-[#94A3B8] font-medium group-hover:text-[#001028]'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavigation;
