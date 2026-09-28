import React from 'react';
import { useApp } from '../../context/AppContext';

export type BottomNavTab = 'home' | 'notes' | 'practice' | 'mock' | 'motivation' | 'more';

interface BottomNavigationProps {
  activeTab?: BottomNavTab;
  onTabChange?: (tab: BottomNavTab) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const { activeView, setActiveView, openAiTutor } = useApp();

  // Resolve current active tab
  const current: BottomNavTab = activeTab || (() => {
    if (activeView === 'dashboard') return 'home';
    if (activeView === 'notes') return 'notes';
    if (activeView === 'practice') return 'practice';
    if (activeView === 'mock') return 'mock';
    if (activeView === 'motivation') return 'motivation';
    return 'home';
  })();

  const handleSelect = (tab: BottomNavTab) => {
    if (onTabChange) {
      onTabChange(tab);
      return;
    }
    if (tab === 'home') setActiveView('dashboard');
    else if (tab === 'notes') setActiveView('notes');
    else if (tab === 'practice') setActiveView('practice');
    else if (tab === 'mock') setActiveView('mock');
    else if (tab === 'motivation') setActiveView('motivation');
    else if (tab === 'more') setActiveView('motivation');
  };

  return (
    <nav
      aria-label="Bottom Navigation"
      className="sticky bottom-0 left-0 right-0 z-40 w-full bg-white border-t border-[#E4EAE8] px-3 py-1.5 shadow-[0_-2px_10px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-md mx-auto flex items-center justify-around">
        {/* Home */}
        <button
          type="button"
          onClick={() => handleSelect('home')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-150 cursor-pointer ${
            current === 'home' ? 'text-[#004D40]' : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" fill={current === 'home' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {current === 'home' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            )}
          </div>
          <span className={`text-[10px] mt-1 ${current === 'home' ? 'font-bold text-[#004D40]' : 'font-medium'}`}>
            Home
          </span>
        </button>

        {/* Notes */}
        <button
          type="button"
          onClick={() => handleSelect('notes')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-150 cursor-pointer ${
            current === 'notes' ? 'text-[#004D40]' : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            {current === 'notes' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            )}
          </div>
          <span className={`text-[10px] mt-1 ${current === 'notes' ? 'font-bold text-[#004D40]' : 'font-medium'}`}>
            Notes
          </span>
        </button>

        {/* Past Qs */}
        <button
          type="button"
          onClick={() => handleSelect('practice')}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-150 cursor-pointer ${
            current === 'practice' ? 'text-[#004D40]' : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            {current === 'practice' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            )}
          </div>
          <span className={`text-[10px] mt-1 ${current === 'practice' ? 'font-bold text-[#004D40]' : 'font-medium'}`}>
            Past Qs
          </span>
        </button>

        {/* Classes */}
        <button
          type="button"
          onClick={() => handleSelect('mock')}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-150 cursor-pointer ${
            current === 'mock' ? 'text-[#004D40]' : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill={current === 'mock' ? 'currentColor' : 'none'} />
            </svg>
            {current === 'mock' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            )}
          </div>
          <span className={`text-[10px] mt-1 ${current === 'mock' ? 'font-bold text-[#004D40]' : 'font-medium'}`}>
            Classes
          </span>
        </button>

        {/* Profile */}
        <button
          type="button"
          onClick={() => handleSelect('motivation')}
          className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-150 cursor-pointer ${
            current === 'motivation' ? 'text-[#004D40]' : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {current === 'motivation' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            )}
          </div>
          <span className={`text-[10px] mt-1 ${current === 'motivation' ? 'font-bold text-[#004D40]' : 'font-medium'}`}>
            Profile
          </span>
        </button>
      </div>
    </nav>
  );
};
