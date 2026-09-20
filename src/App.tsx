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
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { Capacitor } from '@capacitor/core';
import { PlugAiModal } from './components/PlugAiModal';

const MainAppContent: React.FC = () => {
  const { activeView, setActiveView, reloadQuestions } = useApp();
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
      <div className="min-h-screen bg-[#061710] bg-board-deep flex flex-col select-none text-white font-sans">
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

        {/* Global Mobile Quick Back Bar (Persistent on all sub-views) */}
        {activeView !== 'dashboard' && activeView !== 'test' && (
          <header className="sticky top-0 z-50 w-full bg-[#071F15]/95 backdrop-blur-md border-b-2 border-[#C4823F] px-4 py-2 flex items-center justify-between shadow-lg">
            <button
              type="button"
              onClick={() => setActiveView('dashboard')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#061710] border border-[#C4823F] text-[#FFCC00] font-black text-xs active:scale-95 transition shadow-sm cursor-pointer"
              aria-label="Back to Dashboard"
            >
              <span>←</span>
              <span>Home</span>
            </button>
            <div className="flex items-center space-x-1 text-xs font-black text-white">
              <span className="text-[#FFCC00]">Study</span>Plug
              <span className="text-[#C4823F]">•</span>
              <span className="capitalize text-emerald-300">
                {activeView === 'notes' ? 'Classroom Notes' : activeView === 'practice' ? 'CBT Practice' : activeView}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-[10px] text-amber-300 font-bold px-2 py-0.5 rounded-full bg-black/40 border border-amber-300/30">CBT 2026</span>
            </div>
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
          {activeView === 'practice' && <PracticeMode />}
          {activeView === 'notes' && (
            <ErrorBoundary fallbackTitle="Notes & Syllabus Dashboard">
              <NotesDashboard />
            </ErrorBoundary>
          )}
        </main>
      </div>
    );
  }

  // Desktop Screen Experience
  return (
    <div className="min-h-screen bg-[#061710] bg-board-deep flex flex-col select-none text-white font-sans">
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

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-16">
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
        {activeView === 'practice' && <PracticeMode />}
        {activeView === 'notes' && (
          <ErrorBoundary fallbackTitle="Notes & Syllabus Dashboard">
            <NotesDashboard />
          </ErrorBoundary>
        )}
      </main>

      {/* Persistent Clean Blackboard Footer */}
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
