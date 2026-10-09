import React, { useMemo } from 'react';
import { useApp } from '../../context/AppContext';

interface StreakRewardModalProps {
  onClose: () => void;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  daysRequired: number;
  color: string;
  bg: string;
}

const BADGES: Badge[] = [
  { id: 'starter', name: 'Starter', description: 'Studied for 1 day straight', emoji: '🌱', daysRequired: 1, color: '#1B5E20', bg: '#E8F5E9' },
  { id: 'dedicated', name: 'Dedicated', description: 'Studied for 3 days straight', emoji: '📚', daysRequired: 3, color: '#1565C0', bg: '#E3F2FD' },
  { id: 'consistent', name: 'Consistent', description: 'Studied for 7 days straight', emoji: '🔥', daysRequired: 7, color: '#E65100', bg: '#FFF3E0' },
  { id: 'champion', name: 'Champion', description: 'Studied for 14 days straight', emoji: '🏆', daysRequired: 14, color: '#F57F17', bg: '#FFFDE7' },
  { id: 'legend', name: 'Legend', description: 'Studied for 21 days straight', emoji: '⭐', daysRequired: 21, color: '#6A1B9A', bg: '#F3E5F5' },
  { id: 'unstoppable', name: 'Unstoppable', description: 'Studied for 30 days straight', emoji: '💎', daysRequired: 30, color: '#001028', bg: '#F8F8F8' },
  { id: 'master', name: 'Master', description: 'Studied for 60 days straight', emoji: '👑', daysRequired: 60, color: '#B71C1C', bg: '#FFEBEE' },
  { id: 'god_mode', name: 'God Mode', description: 'Studied for 100 days straight', emoji: '🌟', daysRequired: 100, color: '#1A237E', bg: '#E8EAF6' },
];

const MILESTONES = [
  { tests: 5, label: 'First 5 Tests', emoji: '🎯', color: '#1565C0' },
  { tests: 10, label: '10 Tests Done', emoji: '📝', color: '#1B5E20' },
  { tests: 25, label: 'Quarter Century', emoji: '🏅', color: '#E65100' },
  { tests: 50, label: 'Half Hundred', emoji: '🥇', color: '#6A1B9A' },
  { tests: 100, label: 'Century Club', emoji: '💯', color: '#001028' },
];

export const StreakRewardModal: React.FC<StreakRewardModalProps> = ({ onClose }) => {
  const { studyStreak, testsTaken, overallAccuracy } = useApp();

  const unlockedBadges = BADGES.filter(b => studyStreak >= b.daysRequired);
  const nextBadge = BADGES.find(b => studyStreak < b.daysRequired);
  const daysToNext = nextBadge ? nextBadge.daysRequired - studyStreak : 0;

  const unlockedMilestones = MILESTONES.filter(m => testsTaken >= m.tests);
  const nextMilestone = MILESTONES.find(m => testsTaken < m.tests);

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F0F4F2] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-4 flex items-center space-x-3 shrink-0">
        <button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer">←</button>
        <div className="flex-1">
          <h2 className="font-extrabold text-[16px] leading-none">Streak & Rewards</h2>
          <p className="text-[11px] text-emerald-300 mt-0.5">Badges · Milestones · Achievements</p>
        </div>
        <span className="text-2xl">🏆</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        {/* Current Streak Hero */}
        <div className="rounded-[20px] bg-[#001028] text-white px-5 py-5 flex items-center space-x-4 shadow-lg">
          <div className="w-16 h-16 rounded-[18px] bg-[#FFD600] flex items-center justify-center">
            <span className="text-[28px]">🔥</span>
          </div>
          <div className="flex-1">
            <p className="text-[12px] text-emerald-300 font-semibold">Current Streak</p>
            <p className="font-black text-[36px] text-[#FFD600] leading-none">{studyStreak}</p>
            <p className="text-[12px] text-emerald-200">day{studyStreak !== 1 ? 's' : ''} in a row</p>
          </div>
          {nextBadge && (
            <div className="text-right">
              <p className="text-[10px] text-emerald-300">Next badge</p>
              <span className="text-[24px]">{nextBadge.emoji}</span>
              <p className="text-[10px] text-emerald-200">{daysToNext}d to go</p>
            </div>
          )}
        </div>

        {/* Progress to Next Badge */}
        {nextBadge && (
          <div className="rounded-[16px] bg-white border border-[#E4EAE8] px-4 py-3 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold text-[13px] text-[#10201D]">Next: {nextBadge.emoji} {nextBadge.name}</p>
              <span className="text-[11px] font-black" style={{ color: nextBadge.color }}>
                {studyStreak}/{nextBadge.daysRequired} days
              </span>
            </div>
            <div className="h-3 rounded-full bg-[#F0F4F2] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${Math.round((studyStreak / nextBadge.daysRequired) * 100)}%`,
                  backgroundColor: nextBadge.color,
                }}
              />
            </div>
            <p className="text-[10.5px] text-[#66736F] mt-1">{nextBadge.description}</p>
          </div>
        )}

        {/* Unlocked Badges */}
        <div>
          <p className="text-[10px] font-black text-[#66736F] uppercase tracking-wider mb-2">
            🏅 Unlocked Badges ({unlockedBadges.length}/{BADGES.length})
          </p>
          {unlockedBadges.length === 0 ? (
            <div className="rounded-[14px] bg-white border border-[#E4EAE8] px-4 py-5 text-center">
              <span className="text-3xl">🌱</span>
              <p className="text-[12px] font-bold text-[#10201D] mt-2">Start your streak today!</p>
              <p className="text-[11px] text-[#66736F] mt-0.5">Study for 1 day to unlock your first badge</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {unlockedBadges.map(badge => (
                <div
                  key={badge.id}
                  className="rounded-[16px] border px-3 py-3 flex items-center space-x-3"
                  style={{ backgroundColor: badge.bg, borderColor: badge.color + '40' }}
                >
                  <span className="text-[26px]">{badge.emoji}</span>
                  <div>
                    <p className="font-bold text-[12px] text-[#10201D]">{badge.name}</p>
                    <p className="text-[10px]" style={{ color: badge.color }}>{badge.daysRequired}+ days</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Locked Badges */}
        {BADGES.filter(b => studyStreak < b.daysRequired).length > 0 && (
          <div>
            <p className="text-[10px] font-black text-[#66736F] uppercase tracking-wider mb-2">🔒 Locked Badges</p>
            <div className="grid grid-cols-2 gap-2">
              {BADGES.filter(b => studyStreak < b.daysRequired).map(badge => (
                <div key={badge.id} className="rounded-[16px] bg-[#F0F4F2] border border-[#E4EAE8] px-3 py-3 flex items-center space-x-3 opacity-60">
                  <span className="text-[26px] grayscale">{badge.emoji}</span>
                  <div>
                    <p className="font-bold text-[12px] text-[#10201D]">{badge.name}</p>
                    <p className="text-[10px] text-[#66736F]">{badge.daysRequired} days</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Test Milestones */}
        <div>
          <p className="text-[10px] font-black text-[#66736F] uppercase tracking-wider mb-2">📝 Test Milestones</p>
          <div className="space-y-2">
            {MILESTONES.map(m => {
              const unlocked = testsTaken >= m.tests;
              return (
                <div
                  key={m.tests}
                  className={`rounded-[14px] border px-4 py-2.5 flex items-center justify-between ${
                    unlocked
                      ? 'bg-white border-[#E4EAE8]'
                      : 'bg-[#F0F4F2] border-[#E4EAE8] opacity-50'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className={`text-[18px] ${unlocked ? '' : 'grayscale'}`}>{m.emoji}</span>
                    <div>
                      <p className={`font-semibold text-[12px] ${unlocked ? 'text-[#10201D]' : 'text-[#66736F]'}`}>
                        {m.label}
                      </p>
                      <p className="text-[10px] text-[#66736F]">{m.tests} tests completed</p>
                    </div>
                  </div>
                  {unlocked ? (
                    <span className="text-[12px] font-bold text-emerald-700">✅ Done</span>
                  ) : (
                    <span className="text-[11px] font-semibold text-[#66736F]">
                      {m.tests - testsTaken} more
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="rounded-[16px] bg-[#FFD600] px-4 py-4 text-center">
          <p className="font-black text-[14px] text-[#001028]">Keep Going! 💪</p>
          <p className="text-[12px] text-[#001028]/70 mt-1">
            You've been consistent for {studyStreak} day{studyStreak !== 1 ? 's' : ''}.
            {nextBadge ? ` Just ${daysToNext} more to unlock ${nextBadge.name}!` : ' You\'ve unlocked all badges! 🎉'}
          </p>
        </div>
      </div>
    </div>
  );
};
