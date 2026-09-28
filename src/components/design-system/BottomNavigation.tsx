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

        {/* Practice */}
        <button
          type="button"
          onClick={() => handleSelect('practice')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-150 cursor-pointer ${
            current === 'practice' ? 'text-[#004D40]' : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            {current === 'practice' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            )}
          </div>
          <span className={`text-[10px] mt-1 ${current === 'practice' ? 'font-bold text-[#004D40]' : 'font-medium'}`}>
            Practice
          </span>
        </button>

        {/* AI Button — center FAB */}
        <button
          type="button"
          onClick={() => openAiTutor()}
          aria-label="Ask AI"
          className="relative -top-5 flex flex-col items-center justify-center w-14 h-14 rounded-full bg-[#004D40] shadow-lg shadow-[#004D40]/40 active:scale-95 transition-transform duration-150 cursor-pointer border-4 border-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 2a7 7 0 0 1 7 7c0 3.5-2.5 5.9-3 7H8c-.5-1.1-3-3.5-3-7a7 7 0 0 1 7-7z" />
            <path d="M9 21h6" />
            <path d="M9.7 17a6.94 6.94 0 0 1-.7-3" />
          </svg>
          <span className="text-[9px] text-white font-bold mt-0.5 leading-none">AI</span>
        </button>

        {/* Mock */}
        <button
          type="button"
          onClick={() => handleSelect('mock')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-150 cursor-pointer ${
            current === 'mock' ? 'text-[#004D40]' : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.45 1-1 1H7" />
              <path d="M14 14.66V17c0 .55.45 1 1 1h2" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
            </svg>
            {current === 'mock' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            )}
          </div>
          <span className={`text-[10px] mt-1 ${current === 'mock' ? 'font-bold text-[#004D40]' : 'font-medium'}`}>
            Mock
          </span>
        </button>

        {/* Motivation / More */}
        <button
          type="button"
          onClick={() => handleSelect('motivation')}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all duration-150 cursor-pointer ${
            current === 'motivation' ? 'text-[#004D40]' : 'text-[#66736F] hover:text-[#10201D]'
          }`}
        >
          <div className="relative">
            <svg viewBox="0 0 24 24" fill={current === 'motivation' ? '#FFD600' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M9 18h6" />
              <path d="M10 22h4" />
              <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
            </svg>
            {current === 'motivation' && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD600]" />
            )}
          </div>
          <span className={`text-[10px] mt-1 ${current === 'motivation' ? 'font-bold text-[#004D40]' : 'font-medium'}`}>
            Motivation
          </span>
        </button>
      </div>
    </nav>
  );
};
