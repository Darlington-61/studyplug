import React from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';

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
  const {
    setActiveView,
    goBack,
    openAiTutor,
    openMorningTea,
    openUpgradeModal,
    isPremium,
    openMenuDrawer,
    isDarkMode,
    toggleDarkMode,
    openGlobalSearch
  } = useApp();

  return (
    <header className="w-full bg-[#001028] text-white px-4 sm:px-6 pt-3 pb-4 border-b border-[#001830] transition-colors select-none">
      <div className="max-w-7xl mx-auto">
        {/* Top Action Row */}
        <div className="flex items-center justify-between pt-1 pb-2">
          {/* Left Button: Back or Hamburger */}
          {showBack ? (
            <button
              type="button"
              onClick={onBack || (() => goBack())}
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
              <BrandLogo size="xs" />
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-[16px] sm:text-[18px] font-bold text-white tracking-tight truncate max-w-[200px] sm:max-w-md">
                {title}
              </h1>
              {subtitle && (
                <p className="text-[10.5px] text-slate-400 font-normal truncate max-w-[200px] sm:max-w-md">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Right Action: custom, or Search + AI Bot + Avatar */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {rightAction ? (
              rightAction
            ) : (
              <>
                {/* Global Search Icon Button */}
                <button
                  type="button"
                  onClick={openGlobalSearch}
                  className="w-8 h-8 rounded-full bg-[#001830] hover:bg-[#001020] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#F8C800] transition cursor-pointer"
                  title="Global Search (Ctrl+K or /)"
                  aria-label="Global Search"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>

                {/* Upgrade Button */}
                <button
                  type="button"
                  onClick={() => openUpgradeModal()}
                  className={`h-8 px-2.5 rounded-full flex items-center space-x-1 transition cursor-pointer shadow-xs active:scale-95 text-xs font-black ${
                    isPremium
                      ? 'bg-[#F8C800] text-[#001028] border border-amber-300'
                      : 'bg-[#001830] hover:bg-[#001020] text-[#F8C800] border border-[#F8C800]/40'
                  }`}
                  title={isPremium ? 'Active Premium Scholar' : 'Upgrade to Premium'}
                >
                  <span>{isPremium ? '👑' : '⚡'}</span>
                  <span className="hidden sm:inline text-[11px] font-bold">{isPremium ? 'Premium' : 'Upgrade'}</span>
                </button>

                {/* Morning Tea */}
                <button
                  type="button"
                  onClick={() => openMorningTea()}
                  className="h-8 px-2.5 rounded-full bg-[#001830] hover:bg-[#001020] border border-[#F8C800]/40 flex items-center space-x-1 text-[#F8C800] transition cursor-pointer shadow-xs active:scale-95"
                  title="Daily Morning Tea • High-Yield UTME Drop"
                >
                  <span className="text-xs">☕</span>
                  <span className="hidden sm:inline text-[11px] font-black text-[#F8C800]">Morning Tea</span>
                </button>

                {/* Dark Mode */}
                <button
                  type="button"
                  onClick={toggleDarkMode}
                  className="w-8 h-8 rounded-full bg-[#001830] hover:bg-[#001020] border border-white/20 flex items-center justify-center text-sm transition cursor-pointer"
                  title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                  aria-label="Toggle Dark Mode"
                >
                  <span>{isDarkMode ? '☀️' : '🌙'}</span>
                </button>

                {/* StudyPlug AI */}
                <button
                  type="button"
                  onClick={() => openAiTutor()}
                  className="w-8 h-8 rounded-full bg-[#001830] border border-[#F8C800]/50 flex items-center justify-center text-[#F8C800] hover:scale-105 transition cursor-pointer"
                  title="Ask StudyPlug AI"
                >
                  <span className="text-xs">🤖</span>
                </button>

                {/* User Avatar */}
                <div className="w-8 h-8 rounded-full bg-[#001830] border border-[#F8C800]/60 flex items-center justify-center text-xs font-bold text-[#F8C800] shadow-xs">
                  D
                </div>
              </>
            )}
          </div>
        </div>

        {/* Optional Big Greeting / Header Banner */}
        {showBrand && title && (
          <div className="pt-1.5 pb-1">
            <h2 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[12px] sm:text-[13px] text-slate-300 font-normal mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default StudyPlugHeader;
