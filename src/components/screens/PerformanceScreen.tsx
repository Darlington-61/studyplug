import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const PerformanceScreen: React.FC = () => {
  const { setActiveView, goBack, testsTaken, overallAccuracy } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'subjects'>('overview');

  const weeklyData = [
    { day: 'Mon', count: 45, height: '60%' },
    { day: 'Tue', count: 60, height: '80%' },
    { day: 'Wed', count: 35, height: '45%' },
    { day: 'Thu', count: 70, height: '90%' },
    { day: 'Fri', count: 50, height: '65%' },
    { day: 'Sat', count: 85, height: '100%' },
    { day: 'Sun', count: 40, height: '55%' },
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
          <div className="font-bold text-sm text-white">My Performance</div>
          <BrandLogo size="xs" />
        </div>

        {/* Tabs: Overview | Subject Breakdown */}
        <div className="px-4 pb-3 flex space-x-2">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                : 'bg-[#001830] text-[#607080] hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('subjects')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeTab === 'subjects'
                ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                : 'bg-[#001830] text-[#607080] hover:text-white'
            }`}
          >
            Subject Breakdown
          </button>
        </div>
      </header>

      {/* Main Performance Content (Screen 15 in Reference) */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-4 text-left">
        {/* Overall Progress Circular Meter */}
        <div className="bg-white rounded-[24px] p-5 border border-[#E8E8E8] shadow-sm flex items-center space-x-5">
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#E8E8E8" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#F8C800"
                strokeWidth="8"
                strokeDasharray={251.3}
                strokeDashoffset={251.3 * (1 - (overallAccuracy || 68) / 100)}
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="absolute font-black text-xl text-[#001028]">
              {overallAccuracy || 68}%
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#607080] uppercase tracking-wider">
              OVERALL PROGRESS
            </span>
            <h3 className="font-black text-sm text-[#001028]">
              You're making great progress!
            </h3>
            <p className="text-[11px] text-[#607080] leading-snug">
              Keep practicing daily to hit your target 300+ in JAMB UTME.
            </p>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-white rounded-[20px] p-3.5 border border-[#E8E8E8] shadow-sm text-center">
            <span className="text-[10px] text-[#607080] font-bold block">Total Questions</span>
            <span className="text-base font-black text-[#001028] mt-1 block">1,240</span>
          </div>
          <div className="bg-white rounded-[20px] p-3.5 border border-[#E8E8E8] shadow-sm text-center">
            <span className="text-[10px] text-[#607080] font-bold block">Correct</span>
            <span className="text-base font-black text-[#001028] mt-1 block">842</span>
          </div>
          <div className="bg-white rounded-[20px] p-3.5 border border-[#E8E8E8] shadow-sm text-center">
            <span className="text-[10px] text-[#607080] font-bold block">Accuracy Rate</span>
            <span className="text-base font-black text-[#F8C800] mt-1 block">{overallAccuracy || 68}%</span>
          </div>
        </div>

        {/* Weekly Progress Bar Chart (as shown in reference image) */}
        <div className="bg-white rounded-[24px] p-5 border border-[#E8E8E8] shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-[#001028]">Weekly Progress</h3>
            <span className="text-xs text-[#607080] font-medium">385 questions</span>
          </div>

          <div className="h-36 flex items-end justify-between px-2 pt-4 pb-2 border-b border-[#E8E8E8]">
            {weeklyData.map((d) => (
              <div key={d.day} className="flex flex-col items-center space-y-2 h-full justify-end flex-1">
                <div
                  className="w-6 rounded-t-lg bg-[#001028] hover:bg-[#F8C800] transition-all duration-300"
                  style={{ height: d.height }}
                />
                <span className="text-[10px] font-bold text-[#607080]">{d.day}</span>
              </div>
            ))}
          </div>

          <div className="text-[11px] text-[#607080] text-center pt-1">
            🔥 Active Study Streak: <span className="font-bold text-[#001028]">7 Days in a Row</span>
          </div>
        </div>
      </main>

      <BottomNavigation activeTab="courses" />
    </div>
  );
};

export default PerformanceScreen;
