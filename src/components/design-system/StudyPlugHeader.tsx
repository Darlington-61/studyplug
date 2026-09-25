import React from 'react';
import { useApp } from '../../context/AppContext';

interface StudyPlugHeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  showBrand?: boolean;
  rightAction?: React.ReactNode;
}

export const StudyPlugHeader: React.FC<StudyPlugHeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBack,
  showBrand = false,
  rightAction,
}) => {
  const { setActiveView, openAiTutor, openMenuDrawer, isDarkMode, toggleDarkMode } = useApp();

  return (
    <header className="w-full bg-[#004D40] text-white px-4 sm:px-6 pt-3 pb-5 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Top Action Row */}
        <div className="flex items-center justify-between pt-1 pb-3">
          {/* Left Button: Back or Hamburger */}
          {showBack ? (
            <button
              type="button"
              onClick={onBack || (() => setActiveView('dashboard'))}
              className="w-9 h-9 flex items-center justify-center text-white/95 hover:bg-white/10 rounded-xl transition cursor-pointer"
              aria-label="Go Back"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={openMenuDrawer}
              className="w-9 h-9 flex items-center justify-center text-white/95 hover:bg-white/10 rounded-xl transition cursor-pointer"
              aria-label="Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="w-5 h-5">
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="16" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </svg>
            </button>
          )}

          {/* Center Brand or Title */}
          {showBrand ? (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#003B32] border border-[#FFD600]/40 shadow-xs">
                {/* Graduation cap */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <div className="text-left leading-tight">
                <div className="flex items-center space-x-1">
                  <span className="font-extrabold text-[15px] tracking-tight text-white">StudyPlug</span>
                  <span className="text-[12px] font-bold text-[#FFD600]">Ai</span>
                </div>
                <p className="text-[8.5px] font-medium text-emerald-100/80 -mt-0.5">Learn • Practice • Excel</p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-[17px] sm:text-[19px] font-bold text-white tracking-tight truncate max-w-[240px] sm:max-w-md">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[11px] text-emerald-100/90 font-normal truncate max-w-[240px] sm:max-w-md">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Right Action: custom, or AI Bot pill + Avatar */}
          <div className="flex items-center space-x-2">
            {rightAction ? (
              rightAction
            ) : (
              <>
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="w-8 h-8 rounded-full bg-[#003B32] hover:bg-[#002B24] border border-white/20 flex items-center justify-center text-sm transition cursor-pointer"
                  title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  aria-label="Toggle Dark Mode"
                >
                  <span>{isDarkMode ? '☀️' : '🌙'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => openAiTutor()}
                  className="w-8 h-8 rounded-full bg-[#003B32] border border-[#FFD600]/50 flex items-center justify-center text-[#FFD600] hover:scale-105 transition cursor-pointer"
                  title="Ask StudyPlug AI"
                >
                  <span className="text-xs">🤖</span>
                </button>
                <div className="w-8 h-8 rounded-full bg-emerald-800/80 border border-white/30 flex items-center justify-center text-xs font-bold text-white shadow-xs">
                  D
                </div>
              </>
            )}
          </div>
        </div>

        {/* Optional Big Greeting / Header Banner */}
        {showBrand && title && (
          <div className="pt-1.5 pb-1">
            <h2 className="text-[21px] sm:text-[23px] font-bold text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[12px] sm:text-[13px] text-emerald-100/90 font-normal mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
