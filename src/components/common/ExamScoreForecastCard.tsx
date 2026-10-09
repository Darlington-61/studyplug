import React, { useState } from 'react';

interface ExamScoreForecastProps {
  currentAccuracy?: number;
  currentCompositeScore?: number;
  weakestSubject?: string;
  strongestSubject?: string;
  onPracticeMore?: () => void;
}

export const ExamScoreForecastCard: React.FC<ExamScoreForecastProps> = ({
  currentAccuracy = 55,
  currentCompositeScore,
  weakestSubject = 'Mathematics',
  strongestSubject = 'Biology',
  onPracticeMore
}) => {
  // Practice effort level: 1 = Light (10 Qs/day), 2 = Dedicated (25 Qs/day), 3 = Mastery (50 Qs/day)
  const [practiceLevel, setPracticeLevel] = useState<1 | 2 | 3>(2);

  // Baseline JAMB score out of 400
  const baselineScore = currentCompositeScore || Math.max(160, Math.min(380, Math.round((currentAccuracy / 100) * 400)));

  // Score boost based on practice level
  const boostMap = {
    1: {
      points: 38,
      dailyMinutes: 15,
      dailyQuestions: 10,
      waecGrade: 'Credit (B3 / C4)',
      admissionChance: '65% Admission Probability',
      tier: 'Consistent Learner',
      badge: '📈 Steady Climb'
    },
    2: {
      points: 75,
      dailyMinutes: 30,
      dailyQuestions: 25,
      waecGrade: 'Distinction (B2 / A1)',
      admissionChance: '88% Admission Probability',
      tier: 'High Achiever',
      badge: '🔥 Fast-Track Top 5%'
    },
    3: {
      points: 118,
      dailyMinutes: 45,
      dailyQuestions: 50,
      waecGrade: 'Straight A1 Distinctions',
      admissionChance: '98% Top Course Clearance (Medicine, Law, Engr)',
      tier: 'Elite Scholar (300+ Club)',
      badge: '👑 National Top 1%'
    }
  };

  const currentBoost = boostMap[practiceLevel];
  const projectedScore = Math.min(390, baselineScore + currentBoost.points);
  const baselinePercentage = Math.round((baselineScore / 400) * 100);
  const projectedPercentage = Math.round((projectedScore / 400) * 100);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#061D15] via-[#092B20] to-[#041610] border-2 border-[#C4823F] p-5 sm:p-6 text-white shadow-2xl relative overflow-hidden text-left">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C4823F]/40 pb-3 relative z-10">
        <div>
          <div className="flex items-center space-x-2">
            <span className="bg-[#FFCC00] text-[#00332A] text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
              🔮 AI EXAM SCORE FORECAST
            </span>
            <span className="text-emerald-300 text-xs font-bold">
              Predictive Performance Engine
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1 leading-tight">
            What You Can Score If You Practice More
          </h3>
          <p className="text-xs text-emerald-100/80 mt-0.5">
            Real-time projection based on your current accuracy and daily study commitment
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-[#C4823F]/50 text-right">
          <span className="text-[10px] text-amber-300 block font-bold uppercase">Estimated Gain</span>
          <span className="text-base font-black text-[#FFCC00]">+{currentBoost.points} Points</span>
        </div>
      </div>

      {/* Practice Commitment Selector */}
      <div className="mt-4 space-y-2 relative z-10">
        <label className="text-xs font-bold text-emerald-200 block uppercase tracking-wider">
          Select Your Daily Practice Target:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            { level: 1, label: '15 Mins / Day', sub: '10 Qs Daily', desc: '+38 pts boost' },
            { level: 2, label: '30 Mins / Day', sub: '25 Qs + Repeated Qs', desc: '+75 pts boost (Recommended)' },
            { level: 3, label: '45 Mins / Day', sub: '50 Qs Mastery', desc: '+118 pts boost (300+ Club)' }
          ].map(opt => {
            const isSelected = practiceLevel === opt.level;
            return (
              <button
                key={opt.level}
                type="button"
                onClick={() => setPracticeLevel(opt.level as 1 | 2 | 3)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#FFCC00] text-[#00332A] border-[#FFCC00] shadow-lg ring-2 ring-white/40 scale-102 font-black'
                    : 'bg-[#061811] text-white border-[#C4823F]/40 hover:border-[#FFCC00]/70'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-extrabold ${isSelected ? 'text-[#00332A]' : 'text-white'}`}>
                    {opt.label}
                  </span>
                  {isSelected && <span className="text-xs">✓</span>}
                </div>
                <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-[#00332A]/80 font-bold' : 'text-emerald-200/80'}`}>
                  {opt.sub}
                </div>
                <div className={`text-[10px] mt-1 font-bold ${isSelected ? 'text-emerald-950' : 'text-[#FFCC00]'}`}>
                  {opt.desc}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Side-by-Side Comparison: Current vs Projected */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 relative z-10">
        {/* Current Baseline */}
        <div className="p-4 rounded-2xl bg-[#04140E] border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs text-white/60 font-bold uppercase">
            <span>Current Baseline</span>
            <span>{baselinePercentage}% Accuracy</span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl sm:text-4xl font-black text-white/80">{baselineScore}</span>
            <span className="text-sm font-semibold text-white/50">/ 400 (JAMB)</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full bg-white/40 rounded-full transition-all duration-500" style={{ width: `${baselinePercentage}%` }} />
          </div>
          <p className="text-[11px] text-white/60">
            Based on completed practice sessions.
          </p>
        </div>

        {/* Projected Score With More Practice */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#0B3827] to-[#062419] border-2 border-[#FFCC00] shadow-lg space-y-2 relative">
          <div className="flex items-center justify-between text-xs text-amber-300 font-extrabold uppercase">
            <span>Projected With Practice</span>
            <span className="bg-[#FFCC00] text-[#00332A] px-2 py-0.2 rounded-md font-black text-[10px]">
              {currentBoost.badge}
            </span>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl sm:text-4xl font-black text-[#FFCC00]">{projectedScore}</span>
            <span className="text-sm font-semibold text-amber-200/70">/ 400 (JAMB)</span>
            <span className="text-xs font-black text-emerald-400 ml-auto bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-lg">
              +{currentBoost.points} pts
            </span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-black/40 overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-yellow-400 to-[#FFCC00] rounded-full transition-all duration-700 shadow-sm"
              style={{ width: `${projectedPercentage}%` }}
            />
          </div>
          <div className="text-[11px] text-emerald-100 font-medium flex items-center justify-between">
            <span>WAEC Grade: <strong className="text-white">{currentBoost.waecGrade}</strong></span>
            <span className="text-amber-300 font-bold">{projectedPercentage}% Accuracy</span>
          </div>
        </div>
      </div>

      {/* Point Breakdown: Where your gain comes from */}
      <div className="mt-4 p-3.5 rounded-2xl bg-[#041610] border border-[#C4823F]/30 space-y-2 relative z-10">
        <span className="text-xs font-bold text-amber-300 uppercase tracking-wide block">
          🎯 Where Your Extra +{currentBoost.points} Points Come From:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-emerald-100/90">
          <div className="p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="text-amber-400 font-bold block mb-0.5">🔁 Repeated Questions</span>
            <span>Mastering high-frequency past questions adds <strong>~30-40 points</strong>.</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="text-amber-400 font-bold block mb-0.5">⚠️ Weak Topic Focus</span>
            <span>Eliminating errors in <strong>{weakestSubject}</strong> adds <strong>~25-35 points</strong>.</span>
          </div>
          <div className="p-2 rounded-xl bg-white/5 border border-white/5">
            <span className="text-amber-400 font-bold block mb-0.5">⚡ CBT Speed &amp; Timing</span>
            <span>Daily timed practice prevents leaving unanswered questions (<strong>+15-20 pts</strong>).</span>
          </div>
        </div>
      </div>

      {/* Target University Clearance */}
      <div className="mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-200 relative z-10">
        <div className="flex items-center space-x-2">
          <span className="text-lg">🏛️</span>
          <span>
            <strong>Admission Outlook:</strong> {currentBoost.admissionChance}
          </span>
        </div>
        {onPracticeMore && (
          <button
            type="button"
            onClick={onPracticeMore}
            className="px-4 py-1.5 rounded-xl bg-[#FFCC00] hover:bg-[#FFE066] text-[#00332A] font-black transition cursor-pointer shadow-sm text-xs shrink-0"
          >
            Start Practice Now →
          </button>
        )}
      </div>
    </div>
  );
};
