import React, { useMemo } from 'react';
import { useApp } from '../../context/AppContext';

interface WeaknessTrackerModalProps {
  onClose: () => void;
}

const SUBJECT_COLORS: Record<string, string> = {
  'Mathematics': '#1565C0',
  'Physics': '#1B5E20',
  'Chemistry': '#BF360C',
  'Biology': '#6A1B9A',
  'English Language': '#E65100',
  'English': '#E65100',
  'Economics': '#001830',
  'Government': '#37474F',
  'Literature': '#880E4F',
  'Geography': '#33691E',
};

function getColor(subject: string) {
  for (const [key, color] of Object.entries(SUBJECT_COLORS)) {
    if (subject.toLowerCase().includes(key.toLowerCase())) return color;
  }
  return '#001028';
}

type Status = 'weak' | 'average' | 'strong';

function getStatus(acc: number): Status {
  if (acc < 50) return 'weak';
  if (acc < 75) return 'average';
  return 'strong';
}

const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string; emoji: string }> = {
  weak: { label: 'Needs Work', color: '#B71C1C', bg: '#FFEBEE', emoji: '⚠️' },
  average: { label: 'Average', color: '#E65100', bg: '#FFF3E0', emoji: '📈' },
  strong: { label: 'Strong', color: '#1B5E20', bg: '#E8F5E9', emoji: '✅' },
};

// Common topics per subject for analysis
const TOPIC_MAP: Record<string, string[]> = {
  Mathematics: ['Algebra', 'Geometry', 'Trigonometry', 'Statistics', 'Calculus', 'Number Theory', 'Sequences'],
  Physics: ['Mechanics', 'Electricity', 'Waves', 'Heat', 'Optics', 'Nuclear Physics', 'Electromagnetism'],
  Chemistry: ['Acids & Bases', 'Periodic Table', 'Bonding', 'Electrochemistry', 'Organic Chemistry', 'Thermochemistry'],
  Biology: ['Cell Biology', 'Genetics', 'Ecology', 'Photosynthesis', 'Evolution', 'Nutrition', 'Reproduction'],
  English: ['Comprehension', 'Lexis & Structure', 'Essay Writing', 'Oral English', 'Literary Devices'],
};

export const WeaknessTrackerModal: React.FC<WeaknessTrackerModalProps> = ({ onClose }) => {
  const { testHistory, allQuestions } = useApp();

  // Build subject stats from history
  const subjectStats = useMemo(() => {
    const map: Record<string, { correct: number; total: number }> = {};

    testHistory.forEach(result => {
      const subj = result.subject || 'Unknown';
      if (!map[subj]) map[subj] = { correct: 0, total: 0 };
      map[subj].correct += result.score || 0;
      map[subj].total += result.totalQuestions || 0;
    });

    return Object.entries(map)
      .map(([subject, d]) => ({
        subject,
        accuracy: d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0,
        total: d.total,
        correct: d.correct,
        status: getStatus(d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0),
      }))
      .sort((a, b) => a.accuracy - b.accuracy);
  }, [testHistory]);

  const hasData = subjectStats.length > 0;

  // Demo data if no history
  const displayStats = hasData ? subjectStats : [
    { subject: 'Mathematics', accuracy: 55, total: 80, correct: 44, status: getStatus(55) },
    { subject: 'Physics', accuracy: 48, total: 60, correct: 29, status: getStatus(48) },
    { subject: 'Chemistry', accuracy: 72, total: 50, correct: 36, status: getStatus(72) },
    { subject: 'Biology', accuracy: 83, total: 60, correct: 50, status: getStatus(83) },
    { subject: 'English Language', accuracy: 67, total: 80, correct: 54, status: getStatus(67) },
  ].sort((a, b) => a.accuracy - b.accuracy) as any[];

  const weakSubjects = displayStats.filter(s => s.status === 'weak');
  const averageSubjects = displayStats.filter(s => s.status === 'average');
  const strongSubjects = displayStats.filter(s => s.status === 'strong');

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F0F4F2] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-4 flex items-center space-x-3 shrink-0">
        <button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer">←</button>
        <div className="flex-1">
          <h2 className="font-extrabold text-[16px] leading-none">Weakness Tracker</h2>
          <p className="text-[11px] text-emerald-300 mt-0.5">Know your weak topics · Study smarter</p>
        </div>
        <span className="text-2xl">🎯</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4">
        {!hasData && (
          <div className="rounded-[14px] bg-amber-50 border border-amber-200 px-4 py-3">
            <p className="text-[12px] font-semibold text-amber-800">
              🔍 No real data yet — complete Practice CBT tests to see your actual weak topics. Showing sample analysis below.
            </p>
          </div>
        )}

        {/* Status Summary Pills */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Weak', count: weakSubjects.length, color: '#B71C1C', bg: '#FFEBEE', emoji: '⚠️' },
            { label: 'Average', count: averageSubjects.length, color: '#E65100', bg: '#FFF3E0', emoji: '📈' },
            { label: 'Strong', count: strongSubjects.length, color: '#1B5E20', bg: '#E8F5E9', emoji: '✅' },
          ].map(s => (
            <div key={s.label} className="rounded-[14px] p-3 text-center" style={{ backgroundColor: s.bg }}>
              <span className="text-lg">{s.emoji}</span>
              <p className="font-black text-[20px] mt-0.5" style={{ color: s.color }}>{s.count}</p>
              <p className="text-[10px] font-semibold" style={{ color: s.color }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* ⚠️ Weak Subjects */}
        {weakSubjects.length > 0 && (
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[10px] font-black text-red-700 uppercase tracking-wider">⚠️ Weak — Focus Here First</span>
            </div>
            <div className="space-y-2">
              {weakSubjects.map(s => {
                const topics = TOPIC_MAP[s.subject] || [];
                const weakTopics = topics.slice(0, 3); // Mock: first 3 topics as weakest
                return (
                  <div key={s.subject} className="rounded-[16px] bg-white border border-red-200 px-4 py-3 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-bold text-[13px] text-[#10201D]">{s.subject}</p>
                        <p className="text-[10px] text-[#66736F]">{s.correct}/{s.total} correct</p>
                      </div>
                      <span className="font-black text-[22px] text-red-700">{s.accuracy}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-red-100 overflow-hidden mb-2">
                      <div className="h-full rounded-full bg-red-600" style={{ width: `${s.accuracy}%` }} />
                    </div>
                    {weakTopics.length > 0 && (
                      <div>
                        <p className="text-[9.5px] font-black text-[#66736F] uppercase tracking-wider mb-1">Topics to Study</p>
                        <div className="flex flex-wrap gap-1">
                          {weakTopics.map(t => (
                            <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-50 text-red-700 border border-red-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 📈 Average Subjects */}
        {averageSubjects.length > 0 && (
          <div>
            <p className="text-[10px] font-black text-orange-700 uppercase tracking-wider mb-2">📈 Average — Room to Improve</p>
            <div className="space-y-2">
              {averageSubjects.map(s => (
                <div key={s.subject} className="rounded-[16px] bg-white border border-orange-200 px-4 py-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-bold text-[13px] text-[#10201D]">{s.subject}</p>
                      <p className="text-[10px] text-[#66736F]">{s.correct}/{s.total} correct</p>
                    </div>
                    <span className="font-black text-[22px] text-orange-700">{s.accuracy}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-orange-100 overflow-hidden">
                    <div className="h-full rounded-full bg-orange-500" style={{ width: `${s.accuracy}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ✅ Strong Subjects */}
        {strongSubjects.length > 0 && (
          <div>
            <p className="text-[10px] font-black text-emerald-700 uppercase tracking-wider mb-2">✅ Strong — Keep it Up</p>
            <div className="space-y-2">
              {strongSubjects.map(s => (
                <div key={s.subject} className="rounded-[16px] bg-white border border-emerald-200 px-4 py-3 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-bold text-[13px] text-[#10201D]">{s.subject}</p>
                      <p className="text-[10px] text-[#66736F]">{s.correct}/{s.total} correct</p>
                    </div>
                    <span className="font-black text-[22px] text-emerald-700">{s.accuracy}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-emerald-100 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-600" style={{ width: `${s.accuracy}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Study Tip */}
        <div className="rounded-[16px] bg-[#001028] text-white px-4 py-4">
          <p className="font-black text-[14px] mb-1">💡 Study Tip</p>
          <p className="text-[12px] text-emerald-200 leading-relaxed">
            Spend 60% of your study time on weak subjects, 30% on average ones, and 10% maintaining strong ones. Daily consistency beats cramming!
          </p>
        </div>
      </div>
    </div>
  );
};
