import React, { useState, useEffect, useRef } from 'react';
import { BrandLogo } from '../common/BrandLogo';
import { useApp, ActiveViewType } from '../../context/AppContext';
import { STUDENT_MASCOT_IMAGE } from '../../assets/studentMascot';
import {
  NAVIGATION_CATEGORIES,
  NavCategory,
  NavSubItem,
  isViewInCategory
} from '../../data/navigationConfig';

interface DesktopNavProps {
  currentTab: ActiveViewType;
  onSelectTab: (tab: ActiveViewType) => void;
  deviceMode?: 'desktop' | 'mobile-triple' | 'mobile-single';
  onSwitchDeviceMode?: (mode: 'desktop' | 'mobile-triple' | 'mobile-single') => void;
  onOpenCPanelSettings?: () => void;
  onOpenAdminPortal?: () => void;
  onOpenAdvertStudio?: () => void;
  onOpenYouTubeStudio?: () => void;
  onOpenPrintableMock?: () => void;
  onOpenTopicAdmin?: () => void;
  onOpenMenu?: () => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  currentTab,
  onSelectTab,
  onOpenCPanelSettings,
  onOpenAdminPortal,
  onOpenAdvertStudio,
  onOpenYouTubeStudio,
  onOpenPrintableMock,
  onOpenTopicAdmin,
  onOpenMenu
}) => {
  const {
    openMorningTea,
    openDareToDare,
    openAiTutor,
    openCalculator,
    openCountdown,
    openGlobalSearch
  } = useApp();

  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdownId(null);
        setIsAdminOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdownId(null);
        setIsAdminOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCategoryClick = (category: NavCategory) => {
    setIsAdminOpen(false);
    if (!category.hasDropdown) {
      setActiveDropdownId(null);
      onSelectTab(category.defaultView);
      return;
    }

    // Toggle dropdown
    if (activeDropdownId === category.id) {
      setActiveDropdownId(null);
    } else {
      setActiveDropdownId(category.id);
    }
  };

  const handleSubItemClick = (item: NavSubItem) => {
    setActiveDropdownId(null);

    // Handle custom item actions
    if (item.action === 'dare-to-dare') {
      openDareToDare({ subject: 'Mathematics' });
    } else if (item.action === 'open-calculator') {
      openCalculator();
    } else if (item.action === 'open-ai') {
      openAiTutor();
    } else if (item.action === 'morning-tea') {
      openMorningTea();
    } else if (item.action === 'countdown') {
      openCountdown();
    }

    onSelectTab(item.targetView);
  };

  return (
    <header
      ref={navContainerRef}
      className="w-full bg-[#001028] border-b border-[#001830] text-white sticky top-0 z-50 shadow-md font-sans select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-3">
        {/* Brand Logo & Menu Drawer Toggle */}
        <div className="flex items-center space-x-2.5 shrink-0">
          {onOpenMenu && (
            <button
              type="button"
              onClick={onOpenMenu}
              className="p-2 rounded-xl text-slate-300 hover:text-[#FFD233] hover:bg-white/10 transition cursor-pointer"
              title="Open Navigation Menu"
              aria-label="Open Navigation Menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          )}
          <div
            onClick={() => {
              setActiveDropdownId(null);
              onSelectTab('dashboard');
            }}
            className="cursor-pointer select-none group flex items-center"
          >
            <BrandLogo size="md" />
          </div>
        </div>

        {/* Categorized Desktop Navigation with Dropdowns */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-xs font-semibold text-slate-300 relative">
          {NAVIGATION_CATEGORIES.map((cat) => {
            const isCategoryActive = isViewInCategory(cat, currentTab);
            const isOpen = activeDropdownId === cat.id;

            return (
              <div key={cat.id} className="relative">
                <button
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  aria-expanded={isOpen}
                  className={`px-3 py-2 rounded-xl transition cursor-pointer flex items-center space-x-1.5 select-none ${
                    isCategoryActive
                      ? 'text-[#F8C800] bg-white/5 font-bold shadow-xs'
                      : 'hover:text-white hover:bg-white/5'
                  } ${isOpen ? 'ring-1 ring-[#F8C800]/40 bg-white/5 text-[#F8C800]' : ''}`}
                >
                  <span>{cat.label}</span>
                  {cat.hasDropdown && (
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#F8C800]' : 'text-slate-400'
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div
                    className="absolute left-0 mt-2 w-72 sm:w-80 bg-[#001830] rounded-2xl shadow-2xl border border-[#001020] p-2 z-50 animate-in fade-in slide-in-from-top-1 backdrop-blur-md"
                    role="menu"
                  >
                    <div className="px-3 py-1.5 flex items-center justify-between border-b border-white/5 mb-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#F8C800]">
                        {cat.label} Menu
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {cat.items.length} options
                      </span>
                    </div>

                    <div className="space-y-1 max-h-[420px] overflow-y-auto">
                      {cat.items.map((sub) => {
                        const isSubActive = currentTab === sub.targetView;
                        return (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => handleSubItemClick(sub)}
                            className={`w-full text-left p-2.5 rounded-xl transition cursor-pointer flex items-start space-x-2.5 group ${
                              isSubActive
                                ? 'bg-white/10 text-white border-l-3 border-[#F8C800]'
                                : 'hover:bg-white/5 text-slate-300 hover:text-white'
                            }`}
                          >
                            <span className="text-base shrink-0 mt-0.5 p-1 rounded-lg bg-[#001028] border border-white/5 group-hover:scale-110 transition-transform">
                              {sub.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-1.5">
                                <span className={`text-xs font-bold truncate ${isSubActive ? 'text-[#F8C800]' : 'text-white'}`}>
                                  {sub.label}
                                </span>
                                {sub.badge && (
                                  <span className="text-[9px] font-black px-1.5 py-0.2 rounded-full bg-[#F8C800] text-[#001028]">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <p className="text-[10.5px] text-[#607080] truncate mt-0.5 group-hover:text-slate-300">
                                  {sub.description}
                                </p>
                              )}
                            </div>
                            <span className="text-xs text-slate-500 group-hover:text-[#F8C800] transition-colors mt-1">
                              →
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Global Search & Right Header Controls */}
        <div className="flex items-center space-x-2.5 xl:space-x-3.5">
          {/* Top Global Search Button with shortcut */}
          <button
            type="button"
            onClick={openGlobalSearch}
            className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-[#001830] hover:bg-[#001020] border border-white/10 hover:border-[#F8C800]/50 text-xs text-slate-300 hover:text-white transition cursor-pointer group shadow-inner"
            title="Search questions, topics, subjects, exams (Ctrl+K or /)"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="w-3.5 h-3.5 text-[#F8C800] group-hover:scale-110 transition-transform"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="hidden xl:inline text-slate-400 group-hover:text-slate-200">
              Search questions, topics, exams...
            </span>
            <span className="hidden sm:inline text-[10px] font-mono bg-[#001028] px-1.5 py-0.5 rounded border border-white/10 text-slate-400">
              Ctrl K
            </span>
          </button>

          {/* Admin Management Tools Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setActiveDropdownId(null);
                setIsAdminOpen(!isAdminOpen);
              }}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl border border-white/10 bg-[#001830] hover:bg-[#001020] text-slate-300 text-xs font-semibold transition cursor-pointer"
              title="Admin & Database Management"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-[#F8C800]">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="hidden sm:inline">Admin</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-slate-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {isAdminOpen && (
              <div
                className="absolute right-0 mt-2 w-56 bg-[#001830] rounded-2xl shadow-2xl border border-[#001020] py-2 z-50 animate-in fade-in slide-in-from-top-1"
                onClick={() => setIsAdminOpen(false)}
              >
                <div className="px-3.5 py-1 text-[10px] font-black text-[#F8C800] uppercase tracking-wider">
                  Admin & Database
                </div>
                <button
                  type="button"
                  onClick={onOpenTopicAdmin}
                  className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-[#F8C800] flex items-center space-x-2.5 transition cursor-pointer"
                >
                  <span className="text-base">📚</span>
                  <span>Manage Topics & Notes</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenCPanelSettings}
                  className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-[#F8C800] flex items-center space-x-2.5 transition cursor-pointer"
                >
                  <span className="text-base">🗄️</span>
                  <span>cPanel Cloud Sync</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenAdminPortal}
                  className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-[#F8C800] flex items-center space-x-2.5 transition cursor-pointer"
                >
                  <span className="text-base">📤</span>
                  <span>Upload Past Questions</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenPrintableMock}
                  className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-[#F8C800] flex items-center space-x-2.5 transition cursor-pointer"
                >
                  <span className="text-base">🖨️</span>
                  <span>Printable Mock Exam</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenAdvertStudio}
                  className="w-full px-3.5 py-2 text-left text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-[#F8C800] flex items-center space-x-2.5 transition cursor-pointer"
                >
                  <span className="text-base">🎬</span>
                  <span>Advert Studio HD</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenYouTubeStudio}
                  className="w-full px-3.5 py-2 text-left text-xs font-bold text-[#F8C800] hover:bg-white/10 flex items-center space-x-2.5 transition cursor-pointer border-t border-white/5"
                >
                  <span className="text-base">🎥</span>
                  <span>YouTube Video Studio</span>
                </button>
              </div>
            )}
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={() => onSelectTab('login')}
            className="px-3.5 py-2 rounded-full text-xs font-bold text-slate-200 hover:text-white bg-[#001830] border border-white/10 hover:border-white/20 transition cursor-pointer"
          >
            Login
          </button>

          {/* Sign Up Button (Bright StudyPlug Yellow) */}
          <button
            type="button"
            onClick={() => onSelectTab('signup')}
            className="px-4.5 py-2 rounded-full text-xs font-black bg-[#F8C800] text-[#001028] hover:bg-[#FFD21F] shadow-sm hover:shadow-md transition cursor-pointer"
          >
            Sign Up
          </button>

          {/* Student Profile Avatar */}
          <div
            onClick={() => onSelectTab('profile')}
            className="hidden sm:flex items-center space-x-2 pl-2 border-l border-white/10 cursor-pointer group"
            title="Darlington - Profile"
          >
            <div className="relative">
              <img
                src={STUDENT_MASCOT_IMAGE}
                alt="Student Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#F8C800] shadow-sm group-hover:scale-105 transition"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#F8C800] rounded-full ring-2 ring-[#001028]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopNav;
