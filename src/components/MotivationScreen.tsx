import React from 'react';
import { useApp } from '../context/AppContext';
import { StudyPlugHeader, BottomNavigation } from './design-system';

export const MotivationScreen: React.FC = () => {
  const { setActiveView, openAiTutor, studyStreak, testsTaken } = useApp();

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F7F9F8] min-h-screen text-[#10201D] select-none font-sans">
      {/* ─── Screen 9 Header ─── */}
      <StudyPlugHeader
        showBack={true}
        onBack={() => setActiveView('dashboard')}
        title="Motivation"
        subtitle="Stay focused, build discipline, and achieve your target score."
      />

      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-8 space-y-4 sm:max-w-xl lg:max-w-4xl">
        {/* Inspiring Hero Graphic Banner */}
        <div className="rounded-[16px] overflow-hidden bg-gradient-to-r from-[#004D40] via-[#005B4F] to-[#1E3A8A] text-white p-5 shadow-subtle relative border border-[#164E40]">
          <div className="relative z-10 max-w-xs space-y-1 text-left">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#FFD600] bg-black/30 px-2.5 py-0.5 rounded-full inline-block">
              Daily Encouragement
            </span>
            <h2 className="text-[20px] font-black tracking-tight text-white pt-1">
              You Can Do It!
            </h2>
            <p className="text-[12px] text-emerald-100/90 leading-relaxed">
              Discipline today builds the future you want. Every solved question is a step toward your admission.
            </p>
          </div>

          <div className="absolute right-4 bottom-2 text-5xl opacity-40 select-none">
            🎓
          </div>
        </div>

        {/* Today's Goal Card */}
        <div className="bg-white rounded-[16px] p-4 border border-[#E4EAE8] shadow-subtle space-y-2.5 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <span className="text-xl">🎯</span>
              <div>
                <h3 className="font-bold text-[14px] text-[#10201D]">Today's Goal</h3>
                <p className="text-[11px] text-[#66736F]">Daily target to maintain momentum</p>
              </div>
            </div>
            <span className="text-[12px] font-bold text-[#004D40]">
              12 / 20 questions
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-[#E4EAE8] h-2.5 rounded-full overflow-hidden">
            <div className="bg-[#16A34A] h-full rounded-full transition-all duration-500" style={{ width: '60%' }} />
          </div>
        </div>

        {/* StudyPlug AI Encouragement Card */}
        <div className="bg-white rounded-[16px] p-4 border border-[#E4EAE8] shadow-subtle space-y-3 text-left">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center text-sm">
              🤖
            </div>
            <div>
              <h4 className="font-bold text-[13.5px] text-[#004D40]">StudyPlug AI</h4>
              <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.2 rounded">Personal Coach</span>
            </div>
          </div>

          <p className="text-[12.5px] text-[#10201D] leading-relaxed italic bg-[#F7F9F8] p-3 rounded-[12px] border border-[#E4EAE8]">
            &ldquo;You've made great progress today! Keep pushing, Darlington. You're closer to your dreams than you think.&rdquo;
          </p>

          <button
            type="button"
            onClick={() => openAiTutor()}
            className="w-full py-2.5 rounded-[12px] bg-[#004D40] text-white text-[12.5px] font-bold shadow-xs hover:bg-[#003B32] transition cursor-pointer"
          >
            Talk to AI
          </button>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-3 gap-2.5 text-center">
          <div className="bg-white rounded-[14px] p-3 border border-[#E4EAE8] shadow-subtle">
            <div className="text-xl">🌱</div>
            <h5 className="font-bold text-[12px] text-[#10201D] mt-1">Better Habits</h5>
            <p className="text-[10px] text-[#66736F]">{studyStreak || 12} days streak</p>
          </div>

          <div className="bg-white rounded-[14px] p-3 border border-[#E4EAE8] shadow-subtle">
            <div className="text-xl">⭐</div>
            <h5 className="font-bold text-[12px] text-[#10201D] mt-1">Higher Scores</h5>
            <p className="text-[10px] text-[#66736F]">{testsTaken || 24} tests taken</p>
          </div>

          <div className="bg-white rounded-[14px] p-3 border border-[#E4EAE8] shadow-subtle">
            <div className="text-xl">🚀</div>
            <h5 className="font-bold text-[12px] text-[#10201D] mt-1">Bigger Dreams</h5>
            <p className="text-[10px] text-[#66736F]">University bound</p>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab="motivation" />
    </div>
  );
};
