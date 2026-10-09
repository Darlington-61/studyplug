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
import { MenuDrawer, SideMenuRail } from './components/common/MenuDrawer';
import { LeaderboardModal } from './components/common/LeaderboardModal';
import { CbtCalculatorModal } from './components/common/CbtCalculatorModal';
import { MorningTeaModal } from './components/common/MorningTeaModal';
import { UpgradeModal } from './components/common/UpgradeModal';
import { DareToDareGameModal } from './components/common/DareToDareGameModal';
import { ExamPaperSelectorModal } from './components/common/ExamPaperSelectorModal';
import { YouTubeStudioModal } from './components/admin/youtubeStudio/YouTubeStudioModal';
import { ExamCountdownModal } from './components/common/ExamCountdownModal';
import { FormulaSheetModal } from './components/common/FormulaSheetModal';
import { VocabularyBuilderModal } from './components/common/VocabularyBuilderModal';
import { FlashcardsModal } from './components/common/FlashcardsModal';
import { StudyGoalsModal } from './components/common/StudyGoalsModal';
import { PerformanceAnalyticsModal } from './components/common/PerformanceAnalyticsModal';
import { PastQuestionsBrowserModal } from './components/common/PastQuestionsBrowserModal';
import { WeaknessTrackerModal } from './components/common/WeaknessTrackerModal';
import { PrintableMockExamModal } from './components/common/PrintableMockExamModal';
import { GlobalSearchModal } from './components/common/GlobalSearchModal';
import { TopicResourcesAdminModal } from './components/admin/TopicResourcesAdminModal';

// StudyPlug 20 Screens Matching Mockup
import { SplashScreen } from './components/screens/SplashScreen';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { SignUpScreen } from './components/screens/SignUpScreen';
import { LoginScreen } from './components/screens/LoginScreen';
import { CoursesScreen } from './components/screens/CoursesScreen';
import { TopicDetailScreen } from './components/screens/TopicDetailScreen';
import { PastQuestionsScreen } from './components/screens/PastQuestionsScreen';
import { AiHelperScreen } from './components/screens/AiHelperScreen';
import { StudyNotesScreen } from './components/screens/StudyNotesScreen';
import { ChallengesScreen } from './components/screens/ChallengesScreen';
import { BattleArenaScreen } from './components/screens/BattleArenaScreen';
import { QuizResultsScreen } from './components/screens/QuizResultsScreen';
import { PerformanceScreen } from './components/screens/PerformanceScreen';
import { LeaderboardScreen } from './components/screens/LeaderboardScreen';
import { RepeatedQuestionsScreen } from './components/screens/RepeatedQuestionsScreen';
import { ExamSelectionScreen } from './components/screens/ExamSelectionScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { AiVideoGeneratorScreen } from './components/screens/AiVideoGeneratorScreen';

const MainAppContent: React.FC = () => {
  const {
    activeView,
    setActiveView,
    goBack,
    reloadQuestions,
    isMenuDrawerOpen,
    openMenuDrawer,
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
    isCountdownOpen,
    closeCountdown,
    isFormulaSheetOpen,
    closeFormulaSheet,
    isVocabBuilderOpen,
    closeVocabBuilder,
    isFlashcardsOpen,
    closeFlashcards,
    isStudyGoalsOpen,
    closeStudyGoals,
    isAnalyticsOpen,
    closeAnalytics,
    isPastQuestionsOpen,
    closePastQuestions,
    isWeaknessTrackerOpen,
    closeWeaknessTracker,
    isStreakRewardOpen,
    closeStreakReward,
    isPrintableMockOpen,
    openPrintableMock,
    closePrintableMock,
    isGlobalSearchOpen,
    closeGlobalSearch,
    isDarkMode
  } = useApp();
  const [isCPanelModalOpen, setIsCPanelModalOpen] = useState<boolean>(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [isAdvertModalOpen, setIsAdvertModalOpen] = useState<boolean>(false);
  const [isYouTubeStudioOpen, setIsYouTubeStudioOpen] = useState<boolean>(false);
  const [isTopicAdminModalOpen, setIsTopicAdminModalOpen] = useState<boolean>(false);

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
      <div className="min-h-screen bg-[#F8F8F8] text-[#001028] flex flex-col select-none font-sans">
        <CPanelSettingsModal
          isOpen={isCPanelModalOpen}
          onClose={() => setIsCPanelModalOpen(false)}
          onSaved={() => reloadQuestions()}
        />
        <AdminQuestionModal
          isOpen={isAdminModalOpen}
          onClose={() => setIsAdminModalOpen(false)}
          onOpenYouTubeStudio={() => setIsYouTubeStudioOpen(true)}
          onOpenPrintableMock={openPrintableMock}
        />
        <AdvertVideoModal
          isOpen={isAdvertModalOpen}
          onClose={() => setIsAdvertModalOpen(false)}
        />
        <YouTubeStudioModal
          isOpen={isYouTubeStudioOpen}
          onClose={() => setIsYouTubeStudioOpen(false)}
        />
        <PlugAiModal />
        <MenuDrawer
          isOpen={isMenuDrawerOpen}
          onClose={closeMenuDrawer}
          onOpenLeaderboard={openLeaderboard}
          onOpenCalculator={openCalculator}
          onOpenYouTubeStudio={() => setIsYouTubeStudioOpen(true)}
          onOpenTopicAdmin={() => setIsTopicAdminModalOpen(true)}
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
        <DareToDareGameModal />
        <ExamPaperSelectorModal />

        {isCountdownOpen && <ExamCountdownModal onClose={closeCountdown} />}
        {isFormulaSheetOpen && <FormulaSheetModal onClose={closeFormulaSheet} />}
        {isVocabBuilderOpen && <VocabularyBuilderModal onClose={closeVocabBuilder} />}
        {isFlashcardsOpen && <FlashcardsModal onClose={closeFlashcards} />}
        {isStudyGoalsOpen && <StudyGoalsModal onClose={closeStudyGoals} />}
        {isAnalyticsOpen && <PerformanceAnalyticsModal onClose={closeAnalytics} />}
        {isPastQuestionsOpen && <PastQuestionsBrowserModal onClose={closePastQuestions} />}
        {isWeaknessTrackerOpen && <WeaknessTrackerModal onClose={closeWeaknessTracker} />}
        {isStreakRewardOpen && <StreakRewardModal onClose={closeStreakReward} />}
        {isPrintableMockOpen && <PrintableMockExamModal onClose={closePrintableMock} />}
        <GlobalSearchModal isOpen={isGlobalSearchOpen} onClose={closeGlobalSearch} />
        <TopicResourcesAdminModal
          isOpen={isTopicAdminModalOpen}
          onClose={() => setIsTopicAdminModalOpen(false)}
        />

        {/* Global Quick Back Bar for results and bookmarks only */}
        {(activeView === 'bookmarks') && (
          <header className="sticky top-0 z-50 w-full bg-[#001028] text-white px-4 py-2.5 flex items-center justify-between border-b border-[#001830] shadow-sm">
            <button
              type="button"
              onClick={() => goBack()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-[12px] bg-white/10 hover:bg-white/20 text-[#F8C800] font-bold text-xs transition cursor-pointer"
              aria-label="Back"
            >
              <span>←</span>
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 text-xs font-bold text-white">
              <span>StudyPlug</span>
              <span>•</span>
              <span className="capitalize text-[#F8C800]">
                {activeView}
              </span>
            </div>
            <div className="w-8" />
          </header>
        )}

        <main className="flex-1 w-full min-h-screen flex flex-col">
          {activeView === 'splash' && <SplashScreen />}
          {activeView === 'onboarding' && <OnboardingScreen />}
          {activeView === 'signup' && <SignUpScreen />}
          {activeView === 'login' && <LoginScreen />}
          {activeView === 'dashboard' && <HomeScreen />}
          {(activeView === 'courses' || activeView === 'subjects') && <CoursesScreen />}
          {activeView === 'topics' && <TopicDetailScreen />}
          {activeView === 'past-questions' && <PastQuestionsScreen />}
          {activeView === 'test' && <MathematicsTestScreen />}
          {activeView === 'ai-helper' && <AiHelperScreen />}
          {(activeView === 'notes' || activeView === 'resources') && (
            <ErrorBoundary fallbackTitle="Classroom Notes Hub">
              <ClassroomNotesHub />
            </ErrorBoundary>
          )}
          {activeView === 'challenges' && <ChallengesScreen />}
          {activeView === 'battle-arena' && <BattleArenaScreen />}
          {activeView === 'results' && <QuizResultsScreen />}
          {activeView === 'performance' && <PerformanceScreen />}
          {activeView === 'leaderboard' && <LeaderboardScreen />}
          {activeView === 'repeated-questions' && <RepeatedQuestionsScreen />}
          {activeView === 'mock' && <ExamSelectionScreen />}
          {(activeView === 'profile' || activeView === 'motivation') && <ProfileScreen />}
          {activeView === 'bookmarks' && <BookmarksScreen />}
          {activeView === 'practice' && (
            <ErrorBoundary fallbackTitle="Practice & Drill">
              <PracticeMode />
            </ErrorBoundary>
          )}
          {activeView === 'ai-videos' && <AiVideoGeneratorScreen />}
        </main>
      </div>
    );
  }

  // Desktop Screen Experience
  return (
    <div className="min-h-screen bg-[#001028] text-white flex flex-col select-none font-sans">
      {/* Top Application Bar */}
      <DesktopNav
        currentTab={activeView}
        onSelectTab={(tab) => setActiveView(tab)}
        onOpenCPanelSettings={() => setIsCPanelModalOpen(true)}
        onOpenAdminPortal={() => setIsAdminModalOpen(true)}
        onOpenAdvertStudio={() => setIsAdvertModalOpen(true)}
        onOpenYouTubeStudio={() => setIsYouTubeStudioOpen(true)}
        onOpenPrintableMock={openPrintableMock}
        onOpenTopicAdmin={() => setIsTopicAdminModalOpen(true)}
        onOpenMenu={openMenuDrawer}
      />

      <TopicResourcesAdminModal
        isOpen={isTopicAdminModalOpen}
        onClose={() => setIsTopicAdminModalOpen(false)}
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
        onOpenYouTubeStudio={() => setIsYouTubeStudioOpen(true)}
        onOpenPrintableMock={openPrintableMock}
      />

      {/* Commercial Advert Studio Modal */}
      <AdvertVideoModal
        isOpen={isAdvertModalOpen}
        onClose={() => setIsAdvertModalOpen(false)}
      />

      {/* YouTube Video Generator Studio Pro Modal */}
      <YouTubeStudioModal
        isOpen={isYouTubeStudioOpen}
        onClose={() => setIsYouTubeStudioOpen(false)}
      />

      {/* PlugAI 100% Free Offline AI Tutor Modal */}
      <PlugAiModal />
      <MenuDrawer
        isOpen={isMenuDrawerOpen}
        onClose={closeMenuDrawer}
        onOpenLeaderboard={openLeaderboard}
        onOpenCalculator={openCalculator}
        onOpenYouTubeStudio={() => setIsYouTubeStudioOpen(true)}
        onOpenTopicAdmin={() => setIsTopicAdminModalOpen(true)}
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
      <DareToDareGameModal />
      <ExamPaperSelectorModal />

      {isCountdownOpen && <ExamCountdownModal onClose={closeCountdown} />}
      {isFormulaSheetOpen && <FormulaSheetModal onClose={closeFormulaSheet} />}
      {isVocabBuilderOpen && <VocabularyBuilderModal onClose={closeVocabBuilder} />}
      {isFlashcardsOpen && <FlashcardsModal onClose={closeFlashcards} />}
      {isStudyGoalsOpen && <StudyGoalsModal onClose={closeStudyGoals} />}
      {isAnalyticsOpen && <PerformanceAnalyticsModal onClose={closeAnalytics} />}
      {isPastQuestionsOpen && <PastQuestionsBrowserModal onClose={closePastQuestions} />}
      {isWeaknessTrackerOpen && <WeaknessTrackerModal onClose={closeWeaknessTracker} />}
      {isStreakRewardOpen && <StreakRewardModal onClose={closeStreakReward} />}
      {isPrintableMockOpen && <PrintableMockExamModal onClose={closePrintableMock} />}
      <GlobalSearchModal isOpen={isGlobalSearchOpen} onClose={closeGlobalSearch} />

      {/* Main Content Area with Desktop Side Menu Rail */}
      <div className="flex-1 flex w-full min-h-0">
        <SideMenuRail onOpen={openMenuDrawer} className="hidden lg:flex" />
        <main className={`flex-1 min-w-0 ${activeView === 'notes' ? 'pb-0' : 'pb-16'}`}>
          {activeView === 'dashboard' && <DesktopDashboard />}
          {(activeView === 'courses' || activeView === 'subjects') && <CoursesScreen />}
          {activeView === 'topics' && <TopicDetailScreen />}
          {activeView === 'past-questions' && <PastQuestionsScreen />}
          {activeView === 'repeated-questions' && <RepeatedQuestionsScreen />}
          {activeView === 'test' && <DesktopTestView />}
          {activeView === 'ai-helper' && <AiHelperScreen />}
          {activeView === 'performance' && <PerformanceScreen />}
          {activeView === 'leaderboard' && <LeaderboardScreen />}
          {activeView === 'challenges' && <ChallengesScreen />}
          {activeView === 'battle-arena' && <BattleArenaScreen />}
          {activeView === 'results' && <TestResultScreen />}
          {activeView === 'bookmarks' && <BookmarksScreen />}
          {activeView === 'login' && <LoginScreen />}
          {activeView === 'signup' && <SignUpScreen />}
          {activeView === 'onboarding' && <OnboardingScreen />}
          {activeView === 'splash' && <SplashScreen />}
          {(activeView === 'profile' || activeView === 'motivation') && <ProfileScreen />}
          {activeView === 'practice' && (
            <ErrorBoundary fallbackTitle="Practice & Drill">
              <PracticeMode />
            </ErrorBoundary>
          )}
          {activeView === 'mock' && (
            <div className="bg-[#001028] text-white min-h-screen">
              <ExamSelectionScreen />
            </div>
          )}
          {(activeView === 'notes' || activeView === 'resources') && (
            <ErrorBoundary fallbackTitle="Classroom Notes Hub">
              <ClassroomNotesHub />
            </ErrorBoundary>
          )}
          {activeView === 'ai-videos' && <AiVideoGeneratorScreen />}
        </main>
      </div>

      {/* Footer — Clean light footer on notes, dark navy footer on other screens */}
      {activeView === 'notes' ? (
        <footer className="w-full py-4 text-center text-xs text-slate-500 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© 2026 Study Plug Examination Platform • Official Syllabus Classroom Study Notes</span>
            <div className="flex items-center space-x-2 text-[11px] text-[#F8C800] font-semibold">
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
        <footer className="w-full py-4 text-center text-xs text-slate-400 bg-[#001028] border-t border-[#001830]">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© 2026 Study Plug Examination Platform • Authentic CBT Practice & Classroom Study Notes</span>
            <div className="flex items-center space-x-2 text-[11px] text-[#F8C800]">
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
    <ErrorBoundary fallbackTitle="StudyPlug Loading">
      <AppProvider>
        <MainAppContent />
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
