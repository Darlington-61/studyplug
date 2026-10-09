import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const ChallengesScreen: React.FC = () => {
  const { setActiveView, goBack, openDareToDare } = useApp();
  const [activeTab, setActiveTab] = useState<'challenges' | 'battle'>('challenges');

  const challengesList = [
    { id: 1, title: 'Answer 10 Questions', progress: '6/10', points: '+30 pts', percent: 60, icon: '📝' },
    { id: 2, title: 'Study for 30 Minutes', progress: '18/30', points: '+20 pts', percent: 60, icon: '⏱️' },
    { id: 3, title: 'Watch a Video Lesson', progress: '0/1', points: '+20 pts', percent: 0, icon: '🎥' },
    { id: 4, title: 'Use StudyPlug AI', progress: '0/1', points: '+10 pts', percent: 0, icon: '🤖' },
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
          <div className="font-bold text-sm text-white">Challenges &amp; Battle</div>
          <BrandLogo size="xs" />
        </div>

        {/* Tabs: Challenges | Battle Arena (matching reference image) */}
        <div className="px-4 pb-3 flex space-x-2">
          <button
            type="button"
            onClick={() => setActiveTab('challenges')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'challenges'
                ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                : 'bg-[#001830] text-[#607080] hover:text-white'
            }`}
          >
            Challenges
          </button>
          <button
            type="button"
            onClick={() => setActiveView('battle-arena')}
            className="flex-1 py-2 rounded-xl text-xs font-bold bg-[#001830] text-[#607080] hover:text-white transition cursor-pointer"
          >
            Battle Arena
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-4 text-left">
        {/* Daily Challenge Card with Trophy (Screen 12 in Reference) */}
        <div className="bg-[#001028] text-white rounded-[24px] p-5 border border-[#001830] shadow-sm relative overflow-hidden">
          <div className="flex items-center space-x-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#001830] border-2 border-[#F8C800] flex items-center justify-center text-3xl shrink-0 shadow-md">
              🏆
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center space-x-1.5">
                <span className="text-xs font-black text-white">Daily Challenge</span>
                <span className="text-[10px] font-bold text-[#F8C800] bg-[#001830] px-2 py-0.5 rounded-full">
                  +50 pts
                </span>
              </div>
              <p className="text-[11px] text-[#607080] leading-snug">
                Complete today's challenge and earn leaderboard points!
              </p>
              <button
                type="button"
                onClick={() => openDareToDare({ subject: 'Mathematics' })}
                className="mt-1 px-4 py-1.5 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-bold text-xs transition cursor-pointer"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>

        {/* Current Challenges List */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-bold text-sm text-[#001028]">Current Challenges</h3>
            <span className="text-xs text-[#607080] font-semibold">2 of 4 done</span>
          </div>

          <div className="space-y-2">
            {challengesList.map((ch) => (
              <div
                key={ch.id}
                className="bg-white rounded-[20px] p-4 border border-[#E8E8E8] shadow-sm space-y-2 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{ch.icon}</span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-[#001028]">
                        {ch.title}
                      </h4>
                      <span className="text-[10px] text-[#607080]">Progress: {ch.progress}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#F8C800] bg-[#001028] px-2.5 py-1 rounded-full">
                    {ch.points}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-[#F8F8F8] rounded-full overflow-hidden border border-[#E8E8E8]">
                  <div
                    className="h-full bg-[#F8C800] rounded-full transition-all duration-300"
                    style={{ width: `${ch.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNavigation activeTab="challenges" />
    </div>
  );
};

export default ChallengesScreen;
