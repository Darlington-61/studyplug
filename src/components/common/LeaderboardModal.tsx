import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  exam: string;
  score: number;
  accuracy: number;
  testsCount: number;
  streak: number;
  state: string;
  isCurrentUser?: boolean;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ isOpen, onClose }) => {
  const { studyStreak, overallAccuracy, testsTaken } = useApp();
  const [filterPeriod, setFilterPeriod] = useState<'today' | 'week' | 'allTime'>('week');
  const [filterExam, setFilterExam] = useState<'ALL' | 'JAMB' | 'WAEC' | 'NECO' | 'NABTEB'>('ALL');

  if (!isOpen) return null;

  const topStudents: LeaderboardEntry[] = [
    {
      rank: 1,
      name: 'Chidera Okafor',
      avatar: '👨🏾‍🎓',
      exam: 'JAMB UTME',
      score: 348,
      accuracy: 96,
      testsCount: 42,
      streak: 18,
      state: 'Lagos'
    },
    {
      rank: 2,
      name: 'Amina Bello',
      avatar: '👩🏽‍🎓',
      exam: 'WAEC SSCE',
      score: 336,
      accuracy: 94,
      testsCount: 38,
      streak: 15,
      state: 'Abuja'
    },
    {
      rank: 3,
      name: 'Tunde Adeleke',
      avatar: '👨🏿‍🎓',
      exam: 'JAMB UTME',
      score: 328,
      accuracy: 91,
      testsCount: 35,
      streak: 14,
      state: 'Oyo'
    },
    {
      rank: 4,
      name: 'Blessing Eze',
      avatar: '👩🏾‍🎓',
      exam: 'NECO SSCE',
      score: 318,
      accuracy: 89,
      testsCount: 29,
      streak: 11,
      state: 'Enugu'
    },
    {
      rank: 5,
      name: 'Fatima Yusuf',
      avatar: '🧕🏽',
      exam: 'JAMB UTME',
      score: 312,
      accuracy: 88,
      testsCount: 27,
      streak: 9,
      state: 'Kaduna'
    },
    {
      rank: 6,
      name: 'Darlington (You)',
      avatar: '👨🏾‍💻',
      exam: 'JAMB UTME',
      score: 304,
      accuracy: overallAccuracy || 76,
      testsCount: testsTaken || 24,
      streak: studyStreak || 7,
      state: 'Rivers',
      isCurrentUser: true
    },
    {
      rank: 7,
      name: 'Emeka Nwosu',
      avatar: '🧑🏾‍🏫',
      exam: 'WAEC SSCE',
      score: 296,
      accuracy: 83,
      testsCount: 22,
      streak: 6,
      state: 'Anambra'
    },
    {
      rank: 8,
      name: 'Zainab Danjuma',
      avatar: '👩🏿‍🎓',
      exam: 'JAMB UTME',
      score: 288,
      accuracy: 81,
      testsCount: 20,
      streak: 5,
      state: 'Kano'
    }
  ];

  const filteredList = topStudents.filter((student) => {
    if (filterExam === 'ALL') return true;
    return student.exam.includes(filterExam);
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-fade-in font-sans">
      <div className="w-full max-w-lg bg-white rounded-[20px] shadow-floating overflow-hidden flex flex-col max-h-[92vh] border border-[#E4EAE8]">
        {/* Header: Primary Dark Green #004D40 */}
        <div className="bg-[#004D40] text-white px-5 py-4 flex items-center justify-between shadow-subtle shrink-0">
          <div className="flex items-center space-x-2.5">
            <span className="text-2xl">🏆</span>
            <div>
              <h2 className="text-[16px] font-bold tracking-tight text-white">StudyPlug Leaderboard</h2>
              <p className="text-[11px] text-emerald-100/90 font-medium">National CBT Rankings &amp; Top Scorers</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer text-sm font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#F7F9F8] px-4 py-3 border-b border-[#E4EAE8] space-y-2.5 shrink-0">
          {/* Period Tabs */}
          <div className="grid grid-cols-3 gap-1.5 p-1 rounded-[12px] bg-white border border-[#E4EAE8]">
            {[
              { id: 'today', label: 'Today' },
              { id: 'week', label: 'This Week' },
              { id: 'allTime', label: 'All Time' }
            ].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setFilterPeriod(p.id as any)}
                className={`py-1.5 rounded-[9px] text-[12px] font-bold transition cursor-pointer ${
                  filterPeriod === p.id
                    ? 'bg-[#004D40] text-white shadow-xs'
                    : 'text-[#66736F] hover:text-[#10201D]'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Exam Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {(['ALL', 'JAMB', 'WAEC', 'NECO', 'NABTEB'] as const).map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => setFilterExam(ex)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition cursor-pointer shrink-0 border ${
                  filterExam === ex
                    ? 'bg-[#FFD600] text-[#004D40] border-[#FFD600]'
                    : 'bg-white text-[#66736F] border-[#E4EAE8] hover:border-[#004D40]'
                }`}
              >
                {ex === 'ALL' ? 'All Exams' : ex}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Students List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2 divide-y divide-[#E4EAE8]/60">
          {filteredList.map((st) => (
            <div
              key={st.rank}
              className={`pt-2.5 first:pt-0 flex items-center justify-between p-3 rounded-[14px] transition ${
                st.isCurrentUser
                  ? 'bg-[#E8F5E9] border border-[#004D40]/30 shadow-xs'
                  : 'hover:bg-[#F7F9F8]'
              }`}
            >
              <div className="flex items-center space-x-3 truncate">
                {/* Rank Badge */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    st.rank === 1
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : st.rank === 2
                      ? 'bg-slate-200 text-slate-800 border border-slate-300'
                      : st.rank === 3
                      ? 'bg-orange-100 text-orange-800 border border-orange-300'
                      : 'bg-[#F7F9F8] text-[#66736F] border border-[#E4EAE8]'
                  }`}
                >
                  {st.rank === 1 ? '🥇' : st.rank === 2 ? '🥈' : st.rank === 3 ? '🥉' : `#${st.rank}`}
                </div>

                <span className="text-xl shrink-0">{st.avatar}</span>

                <div className="truncate text-left">
                  <div className="flex items-center space-x-1.5 truncate">
                    <span className="text-[13px] font-bold text-[#10201D] truncate">
                      {st.name}
                    </span>
                    {st.isCurrentUser && (
                      <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-[#004D40] text-white">
                        YOU
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-[#66736F] mt-0.5">
                    <span>{st.exam}</span>
                    <span>•</span>
                    <span>{st.state}</span>
                    <span>•</span>
                    <span className="text-amber-600 font-semibold">🔥 {st.streak}d</span>
                  </div>
                </div>
              </div>

              {/* Score / Accuracy */}
              <div className="text-right shrink-0 ml-3">
                <div className="text-[14px] font-extrabold text-[#004D40]">
                  {st.score} <span className="text-[10px] text-[#66736F] font-normal">pts</span>
                </div>
                <div className="text-[10.5px] font-semibold text-[#16A34A]">
                  {st.accuracy}% accuracy
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-[#F7F9F8] px-4 py-3 border-t border-[#E4EAE8] flex items-center justify-between text-xs text-[#66736F] shrink-0">
          <span>Complete daily tests to climb the leaderboard!</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-[10px] bg-[#004D40] text-white font-bold hover:bg-[#003B32] transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
