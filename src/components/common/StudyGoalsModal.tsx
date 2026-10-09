import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';

interface StudyGoalsModalProps {
  onClose: () => void;
}

const STORAGE_KEY = 'sp_study_goals';

interface GoalState {
  dailyTarget: number;
  questionsToday: number;
  lastDate: string;
  weeklyTarget: number;
  currentWeekTests: number;
}

function getTodayStr() {
  return new Date().toISOString().split('T')[0];
}

function loadGoalState(): GoalState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as GoalState;
      // Reset daily counter if it's a new day
      if (parsed.lastDate !== getTodayStr()) {
        return { ...parsed, questionsToday: 0, lastDate: getTodayStr() };
      }
      return parsed;
    }
  } catch {}
  return {
    dailyTarget: 20,
    questionsToday: 0,
    lastDate: getTodayStr(),
    weeklyTarget: 5,
    currentWeekTests: 0,
  };
}

function saveGoalState(state: GoalState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

const PRESET_TARGETS = [10, 20, 30, 50, 100];

export const StudyGoalsModal: React.FC<StudyGoalsModalProps> = ({ onClose }) => {
  const { testsTaken, studyStreak, overallAccuracy } = useApp();
  const [goals, setGoals] = useState<GoalState>(loadGoalState);
  const [editingDaily, setEditingDaily] = useState(false);
  const [tempTarget, setTempTarget] = useState(String(goals.dailyTarget));

  const progress = Math.min(100, Math.round((goals.questionsToday / goals.dailyTarget) * 100));
  const circumference = 2 * Math.PI * 48;
  const dash = (progress / 100) * circumference;

  const updateGoals = (updates: Partial<GoalState>) => {
    const next = { ...goals, ...updates };
    setGoals(next);
    saveGoalState(next);
  };

  const handleSetTarget = () => {
    const val = parseInt(tempTarget, 10);
    if (!isNaN(val) && val > 0) {
      updateGoals({ dailyTarget: val });
    }
    setEditingDaily(false);
  };

  const simulateProgress = () => {
    const next = Math.min(goals.questionsToday + 5, goals.dailyTarget);
    updateGoals({ questionsToday: next });
  };

  const isGoalMet = goals.questionsToday >= goals.dailyTarget;

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F0F4F2] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-4 flex items-center space-x-3 shrink-0">
        <button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer">←</button>
        <div className="flex-1">
          <h2 className="font-extrabold text-[16px] leading-none">Study Goals</h2>
          <p className="text-[11px] text-emerald-300 mt-0.5">Daily targets · Weekly goals · Progress</p>
        </div>
        <span className="text-2xl">🎯</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        {/* Daily Progress Ring */}
        <div className="rounded-[20px] bg-white border border-[#E4EAE8] px-5 py-5 flex items-center space-x-5 shadow-sm">
          {/* SVG Ring */}
          <div className="shrink-0 relative">
            <svg width="112" height="112" viewBox="0 0 112 112">
              <circle cx="56" cy="56" r="48" fill="none" stroke="#F0F4F2" strokeWidth="10" />
              <circle
                cx="56" cy="56" r="48"
                fill="none"
                stroke={isGoalMet ? '#FFD600' : '#001028'}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference}`}
                strokeDashoffset={circumference / 4}
                style={{ transition: 'stroke-dasharray 0.6s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-black text-[22px] text-[#001028]">{progress}%</span>
              <span className="text-[9px] text-[#66736F] font-semibold">TODAY</span>
            </div>
          </div>

          <div className="flex-1">
            <p className="font-black text-[16px] text-[#10201D]">
              {isGoalMet ? '🎉 Goal Reached!' : `${goals.questionsToday} / ${goals.dailyTarget}`}
            </p>
            <p className="text-[12px] text-[#66736F] mt-0.5">
              {isGoalMet
                ? 'Amazing! You hit your daily target!'
                : `${goals.dailyTarget - goals.questionsToday} questions to go`}
            </p>
            <button
              type="button"
              onClick={() => setEditingDaily(true)}
              className="mt-2 text-[11px] font-bold text-[#001028] underline underline-offset-2"
            >
              Change target
            </button>
          </div>
        </div>

        {/* Change Target */}
        {editingDaily && (
          <div className="rounded-[16px] bg-white border border-[#E4EAE8] px-4 py-4 space-y-3 shadow-sm">
            <p className="font-bold text-[13px] text-[#10201D]">Set Daily Target</p>
            <div className="flex flex-wrap gap-2">
              {PRESET_TARGETS.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => { setTempTarget(String(t)); }}
                  className={`px-3 py-1.5 rounded-[10px] font-bold text-[12px] transition ${
                    tempTarget === String(t)
                      ? 'bg-[#001028] text-white'
                      : 'bg-[#F0F4F2] text-[#10201D]'
                  }`}
                >
                  {t} Qs
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
              <input
                type="number"
                value={tempTarget}
                onChange={e => setTempTarget(e.target.value)}
                className="flex-1 border border-[#E4EAE8] rounded-[10px] px-3 py-2 text-[13px] outline-none focus:border-[#001028]"
                placeholder="Custom..."
                min="1"
                max="500"
              />
              <button
                type="button"
                onClick={handleSetTarget}
                className="px-4 py-2 rounded-[10px] bg-[#001028] text-white font-bold text-[12px]"
              >
                Set
              </button>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Streak', value: `${studyStreak}d`, icon: '🔥', color: '#E65100' },
            { label: 'Tests', value: testsTaken, icon: '📝', color: '#1565C0' },
            { label: 'Accuracy', value: `${overallAccuracy}%`, icon: '🎯', color: '#1B5E20' },
          ].map(s => (
            <div key={s.label} className="rounded-[14px] bg-white border border-[#E4EAE8] p-3 text-center shadow-sm">
              <span className="text-xl">{s.icon}</span>
              <p className="font-black text-[18px] mt-1" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[10px] text-[#66736F] font-semibold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Weekly Plan */}
        <div className="rounded-[16px] bg-white border border-[#E4EAE8] px-4 py-4 shadow-sm">
          <p className="font-bold text-[13px] text-[#10201D] mb-3">Weekly Study Plan</p>
          <div className="space-y-2">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => {
              const todayIndex = new Date().getDay();
              const dayIndex = (i + 1) % 7; // Mon=1
              const isDone = dayIndex < todayIndex;
              const isToday = dayIndex === todayIndex || (todayIndex === 0 && i === 6);
              return (
                <div key={day} className="flex items-center justify-between">
                  <span className={`text-[12px] font-semibold ${isToday ? 'text-[#001028]' : 'text-[#66736F]'}`}>
                    {day}
                  </span>
                  <div className="flex-1 mx-3 h-2 rounded-full bg-[#F0F4F2] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: isDone ? '100%' : isToday ? `${progress}%` : '0%',
                        backgroundColor: isDone ? '#001028' : '#FFD600',
                      }}
                    />
                  </div>
                  <span className="text-[11px]">
                    {isDone ? '✅' : isToday ? '📍' : '○'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Demo: Simulate Progress */}
        <button
          type="button"
          onClick={simulateProgress}
          className="w-full py-3 rounded-[14px] bg-[#001028] text-white font-bold text-[13px] active:scale-[0.97] transition"
        >
          + Add 5 Questions to Progress (Demo)
        </button>

        {/* Motivational Quote */}
        <div className="rounded-[16px] bg-[#001028] text-white px-4 py-4 text-center">
          <p className="font-black text-[14px]">"Small daily improvements lead to stunning results."</p>
          <p className="text-[11px] text-emerald-300 mt-1">— Keep going, every question counts!</p>
        </div>
      </div>
    </div>
  );
};
