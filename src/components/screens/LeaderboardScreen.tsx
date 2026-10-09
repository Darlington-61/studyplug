import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const LeaderboardScreen: React.FC = () => {
  const { setActiveView, goBack } = useApp();
  const [activeTab, setActiveTab] = useState<'global' | 'friends' | 'school'>('global');

  const students = [
    { rank: 1, name: 'Samuel_001', points: 980, badge: '🥇', avatar: '👨🏾‍🎓' },
    { rank: 2, name: 'Chioma_22', points: 960, badge: '🥈', avatar: '👩🏾‍🎓' },
    { rank: 3, name: 'Bright_king', points: 940, badge: '🥉', avatar: '👨🏾‍🏫' },
    { rank: 4, name: 'AdaTest', points: 920, badge: '⭐', avatar: '👩🏾‍💻' },
    { rank: 5, name: 'Kelvin_J', points: 890, badge: '⭐', avatar: '🧑🏾‍🎓' },
    { rank: 6, name: 'Fleary1', points: 870, badge: '⭐', avatar: '👨🏾‍💼' },
    { rank: 7, name: 'QueenBoy', points: 860, badge: '⭐', avatar: '👩🏾‍🎓' },
    { rank: 8, name: 'TobiLovesMath', points: 840, badge: '⭐', avatar: '🧑🏾‍💻' },
    { rank: 9, name: 'Success01', points: 820, badge: '⭐', avatar: '👨🏾‍🎓' },
    { rank: 10, name: 'Faith_Invest', points: 800, badge: '⭐', avatar: '👩🏾‍🎓' },
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
          <div className="font-bold text-sm text-white">Leaderboard</div>
          <BrandLogo size="xs" />
        </div>

        {/* Tabs: Global | Friends | School */}
        <div className="px-4 pb-3 flex space-x-2">
          {(['global', 'friends', 'school'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-xl text-xs font-bold capitalize transition cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                  : 'bg-[#001830] text-[#607080] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* Main Leaderboard Surface (Screen 16 in Reference) */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-3.5 text-left">
        {/* Top 10 Students This Week Banner */}
        <div className="bg-[#F8C800] text-[#001028] rounded-[24px] p-4 sm:p-5 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-3.5">
            <span className="text-3xl">🏆</span>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#001028]/80">
                Weekly Rankings
              </div>
              <h3 className="font-black text-sm sm:text-base text-[#001028] leading-tight">
                Top 10 Students This Week
              </h3>
            </div>
          </div>
          <span className="text-xs font-black bg-[#001028] text-[#F8C800] px-3 py-1.5 rounded-full">
            Active
          </span>
        </div>

        {/* 10 Students List */}
        <div className="space-y-2">
          {students.map((st) => (
            <div
              key={st.rank}
              className={`bg-white rounded-[20px] p-3.5 border transition flex items-center justify-between ${
                st.rank <= 3 ? 'border-[#F8C800]/50 shadow-sm' : 'border-[#E8E8E8]'
              }`}
            >
              <div className="flex items-center space-x-3.5">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs ${
                    st.rank === 1
                      ? 'bg-[#F8C800] text-[#001028]'
                      : st.rank === 2
                      ? 'bg-slate-200 text-[#001028]'
                      : st.rank === 3
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-[#F8F8F8] text-[#607080]'
                  }`}
                >
                  {st.rank}
                </span>

                <span className="text-2xl">{st.avatar}</span>

                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#001028]">
                    {st.name}
                  </h4>
                  <span className="text-[10.5px] text-[#607080]">
                    {st.points} pts
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-base">{st.badge}</span>
                <span className="text-xs font-black text-[#001028]">{st.points} pts</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNavigation activeTab="challenges" />
    </div>
  );
};

export default LeaderboardScreen;
