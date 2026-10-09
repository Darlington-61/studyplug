import React from 'react';
import { useApp } from '../../context/AppContext';
import { STUDENT_MASCOT_IMAGE } from '../../assets/studentMascot';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const ProfileScreen: React.FC = () => {
  const { setActiveView, goBack, overallAccuracy, testsTaken, studyStreak, bookmarks } = useApp();

  const menuItems = [
    { title: 'My Study Goals & Schedule', icon: '🎯', action: () => setActiveView('performance') },
    { title: 'Saved Bookmarks', subtitle: `${bookmarks.length} questions saved`, icon: '🔖', action: () => setActiveView('bookmarks') },
    { title: 'Most Repeated Questions', subtitle: 'Browse high-yield past questions', icon: '🔁', action: () => setActiveView('repeated-questions') },
    { title: 'Downloaded Offline Notes', subtitle: 'Read anytime without internet', icon: '📥', action: () => setActiveView('notes') },
    { title: 'Leaderboard & Points', subtitle: 'View your national rank', icon: '🏆', action: () => setActiveView('leaderboard') },
    { title: 'Upgrade to StudyPlug Pro', subtitle: 'Unlock all 24 subjects & video classes', icon: '⭐', action: () => alert('StudyPlug Pro active!') },
    { title: 'Account Settings & Security', icon: '⚙️', action: () => {} },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8] text-[#001028] flex flex-col font-sans select-none">
      {/* Dark Navy Header (#001028) */}
      <header className="sticky top-0 z-40 w-full bg-[#001028] text-white border-b border-[#001830] shadow-sm">
        <div className="h-14 px-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => goBack()}
            className="flex items-center space-x-1.5 text-xs font-semibold text-white hover:text-[#F8C800] transition cursor-pointer"
          >
            <span className="text-base font-bold">←</span>
            <span>Back</span>
          </button>
          <div className="font-bold text-sm text-white">Student Profile</div>
          <BrandLogo size="xs" />
        </div>
      </header>

      {/* Main Profile Surface (Screen 20 in Reference) */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-4 text-left">
        {/* Profile Card */}
        <div className="bg-white rounded-[24px] p-5 border border-[#E8E8E8] shadow-sm flex items-center space-x-4">
          <div className="relative">
            <img
              src={STUDENT_MASCOT_IMAGE}
              alt="Darlington Okonjo"
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#F8C800] shadow-sm"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full ring-2 ring-white" />
          </div>

          <div className="space-y-1">
            <h3 className="font-black text-base text-[#001028]">Darlington Okonjo</h3>
            <p className="text-xs text-[#607080]">UTME Top Scholar • Target: JAMB 320+</p>
            <span className="inline-block text-[10px] font-bold text-[#001028] bg-[#F8C800] px-2.5 py-0.5 rounded-full">
              🔥 {studyStreak || 12}-Day Study Streak
            </span>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-white rounded-[20px] p-3 border border-[#E8E8E8] shadow-sm text-center">
            <span className="text-[10px] text-[#607080] font-bold block">Accuracy</span>
            <span className="text-base font-black text-[#001028] mt-0.5 block">{overallAccuracy || 76}%</span>
          </div>
          <div className="bg-white rounded-[20px] p-3 border border-[#E8E8E8] shadow-sm text-center">
            <span className="text-[10px] text-[#607080] font-bold block">Tests Done</span>
            <span className="text-base font-black text-[#001028] mt-0.5 block">{testsTaken || 24}</span>
          </div>
          <div className="bg-white rounded-[20px] p-3 border border-[#E8E8E8] shadow-sm text-center">
            <span className="text-[10px] text-[#607080] font-bold block">Bookmarks</span>
            <span className="text-base font-black text-[#F8C800] mt-0.5 block">{bookmarks.length || 3}</span>
          </div>
        </div>

        {/* Actions List with -> Chevrons */}
        <div className="bg-white rounded-[24px] p-2 border border-[#E8E8E8] shadow-sm divide-y divide-[#E8E8E8]">
          {menuItems.map((item) => (
            <div
              key={item.title}
              onClick={item.action}
              className="p-3.5 flex items-center justify-between hover:bg-slate-50 transition cursor-pointer group rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-xs text-[#001028] group-hover:text-[#001830]">
                    {item.title}
                  </h4>
                  {item.subtitle && (
                    <p className="text-[10.5px] text-[#607080]">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-sm">
                →
              </span>
            </div>
          ))}
        </div>

        {/* Log Out Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setActiveView('login')}
            className="w-full py-3.5 rounded-full bg-white hover:bg-rose-50 border border-rose-200 text-rose-600 font-bold text-xs transition cursor-pointer"
          >
            Log Out
          </button>
        </div>
      </main>

      <BottomNavigation activeTab="profile" />
    </div>
  );
};

export default ProfileScreen;
