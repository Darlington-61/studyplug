import React, { useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { ExamScoreForecastCard } from './ExamScoreForecastCard';

interface PerformanceAnalyticsModalProps {
  onClose: () => void;
}

const SUBJECT_COLORS: Record<string, string> = {
  'Mathematics': '#1565C0',
  'Physics': '#1B5E20',
  'Chemistry': '#BF360C',
  'Biology': '#6A1B9A',
  'English': '#E65100',
  'Economics': '#001830',
  'Government': '#37474F',
  'Literature': '#880E4F',
  'CRK': '#1A237E',
  'Geography': '#33691E',
};

function getColor(subject: string) {
  return SUBJECT_COLORS[subject] || '#001028';
}

interface SubjectStat {
  subject: string;
  total: number;
  correct: number;
  accuracy: number;
  tests: number;
}

export const PerformanceAnalyticsModal: React.FC<PerformanceAnalyticsModalProps> = ({ onClose }) => {
  const { testHistory, testsTaken, overallAccuracy, studyStreak, setActiveView } = useApp();

  // Aggregate stats by subject from test history
  const subjectStats = useMemo<SubjectStat[]>(() => {
    const map: Record<string, { total: number; correct: number; tests: number }> = {};

    testHistory.forEach(result => {
      const subj = result.subject || 'Unknown';
      if (!map[subj]) map[subj] = { total: 0, correct: 0, tests: 0 };
      map[subj].total += result.totalQuestions || 0;
      map[subj].correct += result.score || 0;
      map[subj].tests += 1;
    });

    const stats = Object.entries(map).map(([subject, d]) => ({
      subject,
      total: d.total,
      correct: d.correct,
      accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
      tests: d.tests,
    }));

    // Sort by accuracy ascending (weakest first)
    return stats.sort((a, b) => a.accuracy - b.accuracy);
  }, [testHistory]);

  const hasData = subjectStats.length > 0;
  const weakest = hasData ? subjectStats[0] : null;
  const strongest = hasData ? subjectStats[subjectStats.length - 1] : null;

  // Mock recent test timeline if history is empty for display
  const displayStats: SubjectStat[] = hasData ? subjectStats : [
    { subject: 'Mathematics', total: 50, correct: 33, accuracy: 66, tests: 3 },
    { subject: 'English', total: 40, correct: 28, accuracy: 70, tests: 2 },
    { subject: 'Physics', total: 45, correct: 27, accuracy: 60, tests: 2 },
    { subject: 'Chemistry', total: 30, correct: 21, accuracy: 70, tests: 1 },
    { subject: 'Biology', total: 40, correct: 34, accuracy: 85, tests: 2 },
  ].sort((a, b) => a.accuracy - b.accuracy);

  const getLabel = (acc: number) =>
    acc >= 80 ? { text: 'Excellent', color: '#1B5E20', bg: '#E8F5E9' } :
    acc >= 65 ? { text: 'Good', color: '#1565C0', bg: '#E3F2FD' } :
    acc >= 50 ? { text: 'Average', color: '#E65100', bg: '#FFF3E0' } :
    { text: 'Needs Work', color: '#B71C1C', bg: '#FFEBEE' };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F0F4F2] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-4 flex items-center space-x-3 shrink-0">
        <button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer">←</button>
        <div className="flex-1">
          <h2 className="font-extrabold text-[16px] leading-none">Performance Analytics</h2>
          <p className="text-[11px] text-emerald-300 mt-0.5">Track your progress and identify weak areas</p>
        </div>
        <span className="text-2xl">📊</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        {!hasData && (
          <div className="rounded-[14px] bg-amber-50 border border-amber-200 px-4 py-3">
            <p className="text-[12px] font-semibold text-amber-800">
              📈 Complete some Practice CBT sessions to see your real stats here. Showing sample data below.
            </p>
          </div>
        )}

        {/* Overview Cards */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Tests Done', value: testsTaken, icon: '📝', color: '#1565C0' },
            { label: 'Avg Accuracy', value: `${overallAccuracy}%`, icon: '🎯', color: '#1B5E20' },
            { label: 'Day Streak', value: `${studyStreak}d`, icon: '🔥', color: '#E65100' },
          ].map(s => (
            <div key={s.label} className="rounded-[14px] bg-white border border-[#E4EAE8] p-3 text-center shadow-sm">
              <span className="text-xl">{s.icon}</span>
              <p className="font-black text-[18px] mt-1" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[10px] text-[#66736F] font-semibold">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Weakest & Strongest */}
        {displayStats.length > 1 && (
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-[14px] bg-red-50 border border-red-200 px-3 py-3">
              <p className="text-[10px] font-black text-red-600 uppercase tracking-wider mb-1">⚠️ Weakest</p>
              <p className="font-bold text-[13px] text-[#10201D]">{displayStats[0].subject}</p>
              <p className="font-black text-[20px] text-red-600">{displayStats[0].accuracy}%</p>
              <p className="text-[10px] text-[#66736F]">{displayStats[0].tests} test{displayStats[0].tests !== 1 ? 's' : ''}</p>
            </div>
            <div className="rounded-[14px] bg-emerald-50 border border-emerald-200 px-3 py-3">
              <p className="text-[10px] font-black text-emerald-700 uppercase tracking-wider mb-1">⭐ Strongest</p>
              <p className="font-bold text-[13px] text-[#10201D]">{displayStats[displayStats.length - 1].subject}</p>
              <p className="font-black text-[20px] text-emerald-700">{displayStats[displayStats.length - 1].accuracy}%</p>
              <p className="text-[10px] text-[#66736F]">{displayStats[displayStats.length - 1].tests} test{displayStats[displayStats.length - 1].tests !== 1 ? 's' : ''}</p>
            </div>
          </div>
        )}

        {/* AI Exam Score Forecast: What User Can Score If He/She Practices More */}
        <ExamScoreForecastCard
          currentAccuracy={overallAccuracy || (displayStats.length > 0 ? displayStats[0].accuracy : 55)}
          weakestSubject={weakest?.subject || displayStats[0]?.subject || 'Mathematics'}
          strongestSubject={strongest?.subject || displayStats[displayStats.length - 1]?.subject || 'Biology'}
          onPracticeMore={() => {
            onClose();
            setActiveView('practice');
          }}
        />

        {/* Subject Breakdown Bar Chart */}
        <div className="rounded-[16px] bg-white border border-[#E4EAE8] px-4 py-4 shadow-sm">
          <p className="font-bold text-[13.5px] text-[#10201D] mb-4">Subject Accuracy Breakdown</p>
          <div className="space-y-3">
            {displayStats.map(stat => {
              const label = getLabel(stat.accuracy);
              return (
                <div key={stat.subject}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[12px] font-semibold text-[#10201D]">{stat.subject}</span>
                    <div className="flex items-center space-x-2">
                      <span
                        className="text-[9px] font-black px-1.5 py-0.5 rounded-full"
                        style={{ backgroundColor: label.bg, color: label.color }}
                      >
                        {label.text}
                      </span>
                      <span className="font-bold text-[12px]" style={{ color: getColor(stat.subject) }}>
                        {stat.accuracy}%
                      </span>
                    </div>
                  </div>
                  <div className="h-3 rounded-full bg-[#F0F4F2] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${stat.accuracy}%`,
                        backgroundColor: getColor(stat.subject),
                      }}
                    />
                  </div>
                  <p className="text-[9.5px] text-[#66736F] mt-0.5">{stat.correct}/{stat.total} correct · {stat.tests} test{stat.tests !== 1 ? 's' : ''}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Study Recommendation */}
        {displayStats.length > 0 && (
          <div className="rounded-[16px] bg-[#001028] text-white px-4 py-4">
            <p className="font-black text-[14px] mb-1">📌 AI Recommendation</p>
            <p className="text-[12px] text-emerald-200 leading-relaxed">
              Based on your performance, focus more on{' '}
              <span className="font-bold text-[#FFD600]">{displayStats[0].subject}</span>{' '}
              — your accuracy is {displayStats[0].accuracy}%. Try 20 practice questions daily until it reaches 75%+.
            </p>
          </div>
        )}

        {/* Recent Test History */}
        {testHistory.length > 0 && (
          <div className="rounded-[16px] bg-white border border-[#E4EAE8] px-4 py-4 shadow-sm">
            <p className="font-bold text-[13.5px] text-[#10201D] mb-3">Recent Tests</p>
            <div className="space-y-2">
              {testHistory.slice(0, 8).map((result, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-[#F0F4F2] last:border-0">
                  <div>
                    <p className="text-[12px] font-semibold text-[#10201D]">{result.subject}</p>
                    <p className="text-[10px] text-[#66736F]">{result.exam || 'Practice'} • {result.totalQuestions} Qs</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-[14px]" style={{ color: getColor(result.subject || '') }}>
                      {result.score}/{result.totalQuestions}
                    </p>
                    <p className="text-[10px] text-[#66736F]">
                      {result.totalQuestions > 0 ? Math.round((result.score / result.totalQuestions) * 100) : 0}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
