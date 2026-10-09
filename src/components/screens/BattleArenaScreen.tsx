import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const BattleArenaScreen: React.FC = () => {
  const { setActiveView, goBack, openDareToDare } = useApp();
  const [activeTab, setActiveTab] = useState<'1v1' | 'kings'>('1v1');

  const battles = [
    { id: 1, players: 'Faith vs Chinedu', subject: 'Maths • 98 - 76', status: 'Won', isWin: true },
    { id: 2, players: 'You vs Tobi', subject: 'Physics • 85 - 90', status: 'Lost', isWin: false },
    { id: 3, players: 'Blessing vs Amaka', subject: 'Chemistry • 100 - 72', status: 'Won', isWin: true },
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
          <div className="font-bold text-sm text-white">Battle Arena</div>
          <BrandLogo size="xs" />
        </div>

        {/* Tabs: 1v1 Battle | Battle Kings */}
        <div className="px-4 pb-3 flex space-x-2">
          <button
            type="button"
            onClick={() => setActiveTab('1v1')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === '1v1'
                ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                : 'bg-[#001830] text-[#607080] hover:text-white'
            }`}
          >
            1v1 Battle
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('kings')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'kings'
                ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                : 'bg-[#001830] text-[#607080] hover:text-white'
            }`}
          >
            Battle Kings
          </button>
        </div>
      </header>

      {/* Main Content Surface */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-4 text-left">
        {/* Challenge a Friend Banner (Screen 13 in Reference) */}
        <div className="bg-[#001028] text-white rounded-[24px] p-5 border border-[#001830] shadow-sm relative overflow-hidden">
          <div className="flex items-center space-x-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#001830] border-2 border-[#F8C800] flex items-center justify-center text-3xl shrink-0 shadow-md">
              ⚔️
            </div>
            <div className="space-y-1.5 flex-1">
              <h3 className="font-black text-sm text-white">Challenge a Friend!</h3>
              <p className="text-[11px] text-[#607080] leading-snug">
                Test your knowledge in real-time, climb the leaderboard!
              </p>
              <button
                type="button"
                onClick={() => openDareToDare({ subject: 'Mathematics' })}
                className="mt-1 px-4 py-2 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-bold text-xs shadow-md transition cursor-pointer"
              >
                Start Battle →
              </button>
            </div>
          </div>
        </div>

        {/* Recent Battles List */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-sm text-[#001028]">Recent Battles</h3>
            <span className="text-xs text-[#607080] font-semibold">Live Feed</span>
          </div>

          <div className="space-y-2">
            {battles.map((b) => (
              <div
                key={b.id}
                className="bg-white rounded-[20px] p-4 border border-[#E8E8E8] shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center text-base shrink-0 font-bold">
                    ⚔️
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#001028]">
                      {b.players}
                    </h4>
                    <p className="text-[11px] text-[#607080]">
                      {b.subject}
                    </p>
                  </div>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    b.isWin
                      ? 'bg-[#F8C800] text-[#001028]'
                      : 'bg-[#E8E8E8] text-[#607080]'
                  }`}
                >
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNavigation activeTab="challenges" />
    </div>
  );
};

export default BattleArenaScreen;
