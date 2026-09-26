import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { PhoneFrame } from './components/PhoneFrame';
import { HomeScreen } from './components/HomeScreen';
import { ChooseSubjectScreen } from './components/ChooseSubjectScreen';
import { MathematicsTestScreen } from './components/MathematicsTestScreen';
import { TestResultScreen } from './components/TestResultScreen';
import { BookmarksScreen } from './components/BookmarksScreen';
import { PracticeMode } from './components/PracticeMode';
import { DesktopNav } from './components/desktop/DesktopNav';
import { DesktopDashboard } from './components/desktop/DesktopDashboard';
import { DesktopSubjects } from './components/desktop/DesktopSubjects';
import { DesktopTestView } from './components/desktop/DesktopTestView';
import { CPanelSettingsModal } from './components/CPanelSettingsModal';
import { AdminQuestionModal } from './components/admin/AdminQuestionModal';
import { AdvertVideoModal } from './components/AdvertVideoModal';
import { ClassroomNotesHub } from './components/ClassroomNotesHub';
import { NotesDashboard } from './components/NotesDashboard';
import { MockExamScreen } from './components/MockExamScreen';
import { MotivationScreen } from './components/MotivationScreen';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Capacitor } from '@capacitor/core';
import { PlugAiModal } from './components/PlugAiModal';
import { MenuDrawer } from './components/common/MenuDrawer';
import { LeaderboardModal } from './components/common/LeaderboardModal';
import { CbtCalculatorModal } from './components/common/CbtCalculatorModal';
import { MorningTeaModal } from './components/common/MorningTeaModal';
import { UpgradeModal } from './components/common/UpgradeModal';

const MainAppContent: React.FC = () => {
  const {
    activeView,
    setActiveView,
    reloadQuestions,
    isMenuDrawerOpen,
    closeMenuDrawer,
    isLeaderboardOpen,
    openLeaderboard,
    closeLeaderboard,
    isCalculatorOpen,
    openCalculator,
    closeCalculator,
    isMorningTeaOpen,
    closeMorningTea,
    isUpgradeModalOpen,
    closeUpgradeModal,
    isDarkMode
  } = useApp();
  const [isCPanelModalOpen, setIsCPanelModalOpen] = useState<boolean>(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [isAdvertModalOpen, setIsAdvertModalOpen] = useState<boolean>(false);

  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return Capacitor.isNativePlatform() || window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      if (!Capacitor.isNativePlatform()) {
        setIsMobileDevice(window.innerWidth < 1024);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Native Android APK / Mobile Screen Experience
  if (isMobileDevice) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-[#0A1613] text-[#E6F1EE]' : 'bg-[#F7F9F8] text-[#10201D]'} flex flex-col select-none font-sans transition-colors duration-200`}>
        <CPanelSettingsModal
          isOpen={isCPanelModalOpen}
          onClose={() => setIsCPanelModalOpen(false)}
          onSaved={() => reloadQuestions()}
        />
        <AdminQuestionModal
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
        />
        <AdvertVideoModal
          isOpen={isAdvertModalOpen}
          onClose={() => setIsAdvertModalOpen(false)}
        />
        <PlugAiModal />
        <MenuDrawer
          isOpen={isMenuDrawerOpen}
          onClose={closeMenuDrawer}
          onOpenLeaderboard={openLeaderboard}
          onOpenCalculator={openCalculator}
        />
        <LeaderboardModal
          isOpen={isLeaderboardOpen}
          onClose={closeLeaderboard}
        />
        <CbtCalculatorModal
          isOpen={isCalculatorOpen}
          onClose={closeCalculator}
        />
        <MorningTeaModal
          isOpen={isMorningTeaOpen}
          onClose={closeMorningTea}
        />
        <UpgradeModal
          isOpen={isUpgradeModalOpen}
          onClose={closeUpgradeModal}
        />

        {/* Global Quick Back Bar for results and bookmarks only */}
        {(activeView === 'results' || activeView === 'bookmarks') && (
          <header className="sticky top-0 z-50 w-full bg-[#004D40] text-white px-4 py-2.5 flex items-center justify-between shadow-subtle">
            <button
              type="button"
              onClick={() => setActiveView('dashboard')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-[12px] bg-white/10 hover:bg-white/20 text-[#FFD600] font-bold text-xs transition cursor-pointer"
              aria-label="Back to Dashboard"
            >
              <span>←</span>
              <span>Home</span>
            </button>
            <div className="flex items-center space-x-1 text-xs font-bold text-white">
              <span>StudyPlug</span>
              <span>•</span>
              <span className="capitalize text-emerald-200">
                {activeView}
              </span>
            </div>
            <div className="w-8" />
          </header>
        )}

        <main className="flex-1 w-full min-h-screen flex flex-col">
          {activeView === 'dashboard' && <HomeScreen />}
          {activeView === 'subjects' && (
            <ChooseSubjectScreen
              onBack={() => setActiveView('dashboard')}
              onSelectMathematics={() => setActiveView('test')}
            />
          )}
          {activeView === 'test' && <MathematicsTestScreen />}
          {activeView === 'results' && <TestResultScreen />}
          {activeView === 'bookmarks' && <BookmarksScreen />}
          {activeView === 'practice' && (
            <ErrorBoundary fallbackTitle="Practice & Drill">
              <PracticeMode />
            </ErrorBoundary>
          )}
          {activeView === 'mock' && <MockExamScreen />}
          {activeView === 'motivation' && <MotivationScreen />}
          {activeView === 'notes' && (
            <ErrorBoundary fallbackTitle="Classroom Notes Hub">
              <ClassroomNotesHub />
            </ErrorBoundary>
          )}
        </main>
      </div>
    );
  }

  // Desktop Screen Experience
  return (
    <div className={`min-h-screen ${activeView === 'notes' ? 'bg-[#F7F9F7] text-[#102A2A]' : 'bg-[#061710] bg-board-deep text-white'} flex flex-col select-none font-sans`}>
      {/* Top Application Bar */}
      <DesktopNav
        currentTab={activeView}
        onSelectTab={(tab) => setActiveView(tab)}
        onOpenCPanelSettings={() => setIsCPanelModalOpen(true)}
        onOpenAdminPortal={() => setIsAdminModalOpen(true)}
        onOpenAdvertStudio={() => setIsAdvertModalOpen(true)}
      />

      {/* cPanel Cloud Database Settings Modal */}
      <CPanelSettingsModal
        isOpen={isCPanelModalOpen}
        onClose={() => setIsCPanelModalOpen(false)}
        onSaved={() => reloadQuestions()}
      />

      {/* Admin Question Portal & Bulk Upload Modal */}
      <AdminQuestionModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

      {/* Commercial Advert Studio Modal */}
      <AdvertVideoModal
        isOpen={isAdvertModalOpen}
        onClose={() => setIsAdvertModalOpen(false)}
      />

      {/* PlugAI 100% Free Offline AI Tutor Modal */}
      <PlugAiModal />
      <MenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={closeMenuDrawer}
        onOpenLeaderboard={openLeaderboard}
        onOpenCalculator={openCalculator}
      />
      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={closeLeaderboard}
      />
      <CbtCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={closeCalculator}
      />
      <MorningTeaModal
        isOpen={isMorningTeaOpen}
        onClose={closeMorningTea}
      />
      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={closeUpgradeModal}
      />

      {/* Main Content Area */}
      <main className={`flex-1 w-full ${activeView === 'notes' ? 'pb-0' : 'pb-16'}`}>
        {activeView === 'dashboard' && <DesktopDashboard />}
        {activeView === 'subjects' && (
          <DesktopSubjects
            onBackToDashboard={() => setActiveView('dashboard')}
            onSelectMathematics={() => setActiveView('test')}
          />
        )}
        {activeView === 'test' && <DesktopTestView />}
        {activeView === 'results' && <TestResultScreen />}
        {activeView === 'bookmarks' && <BookmarksScreen />}
        {activeView === 'practice' && (
          <ErrorBoundary fallbackTitle="Practice & Drill">
            <PracticeMode />
          </ErrorBoundary>
        )}
        {activeView === 'notes' && (
          <ErrorBoundary fallbackTitle="Classroom Notes Hub">
            <ClassroomNotesHub />
          </ErrorBoundary>
        )}
      </main>

      {/* Footer — Clean light footer on notes, blackboard footer on other screens */}
      {activeView === 'notes' ? (
        <footer className="w-full py-4 text-center text-xs text-slate-500 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© 2026 Study Plug Examination Platform • Official Syllabus Classroom Study Notes</span>
            <div className="flex items-center space-x-2 text-[11px] text-blue-600 font-semibold">
              <span>JAMB</span>
              <span>•</span>
              <span>WAEC</span>
              <span>•</span>
              <span>NECO</span>
              <span>•</span>
              <span>BECE</span>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="w-full py-4 text-center text-xs text-white/60 bg-[#071F15] border-t-2 border-[#C4823F]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© 2026 Study Plug Examination Platform • Authentic CBT Practice & Classroom Study Notes</span>
            <div className="flex items-center space-x-2 text-[11px] text-[#FFCC00]/80">
              <span>WAEC</span>
              <span>•</span>
              <span>NECO</span>
              <span>•</span>
              <span>JAMB</span>
              <span>•</span>
              <span>BECE</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
};

export default App;
