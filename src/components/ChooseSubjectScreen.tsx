import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { StudyPlugHeader, ExamPills, ExamCategory, SubjectCard, SubjectConfig, BottomNavigation } from './design-system';

interface ChooseSubjectScreenProps {
  onBack?: () => void;
  onSelectMathematics?: () => void;
}

export const ChooseSubjectScreen: React.FC<ChooseSubjectScreenProps> = ({
  onBack
}) => {
  const { setActiveView, setSelectedSubject, openDareToDare } = useApp();
  const [activeExam, setActiveExam] = useState<ExamCategory>('JAMB');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showPopOutInvite, setShowPopOutInvite] = useState<boolean>(false);

  // Pop-out invitation for students after 2 seconds of browsing subjects
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopOutInvite(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  const subjectsData: SubjectConfig[] = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      topicsCount: 12,
      questionsCount: 245,
      color: '#16A34A',
      iconType: 'math'
    },
    {
      id: 'english',
      name: 'English Language',
      topicsCount: 10,
      questionsCount: 198,
      color: '#E91E63',
      iconType: 'english'
    },
    {
      id: 'physics',
      name: 'Physics',
      topicsCount: 14,
      questionsCount: 312,
      color: '#2563EB',
      iconType: 'physics'
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      topicsCount: 12,
      questionsCount: 276,
      color: '#7E22CE',
      iconType: 'chemistry'
    },
    {
      id: 'biology',
      name: 'Biology',
      topicsCount: 11,
      questionsCount: 238,
      color: '#F59E0B',
      iconType: 'biology'
    },
    {
      id: 'government',
      name: 'Government',
      topicsCount: 10,
      questionsCount: 190,
      color: '#008C95',
      iconType: 'government'
    },
    {
      id: 'history',
      name: 'History',
      topicsCount: 9,
      questionsCount: 178,
      color: '#673AB7',
      iconType: 'history'
    },
    {
      id: 'economics',
      name: 'Economics',
      topicsCount: 11,
      questionsCount: 205,
      color: '#F4C20D',
      iconType: 'economics'
    }
  ];

  const filteredSubjects = subjectsData.filter(sub =>
    sub.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectSubject = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setActiveView('notes');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F7F9F8] min-h-screen text-[#10201D] select-none font-sans relative">
      {/* ─── Screen 2 Header: Back Arrow, Select Subject ─── */}
      <StudyPlugHeader
        showBack={true}
        onBack={onBack || (() => setActiveView('dashboard'))}
        title="Select Subject"
        subtitle={`${activeExam} • Choose your subject to start`}
      />

      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-20 space-y-3.5 sm:max-w-xl lg:max-w-4xl">
        {/* Exam Pills (JAMB, WAEC, NECO, BECE) */}
        <ExamPills
          exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
          activeExam={activeExam}
          onSelectExam={setActiveExam}
        />

        {/* ─── 🔥 DARE TO DARE BANNER IN SUBJECT SCREEN ─── */}
        <div
          onClick={() => openDareToDare({ subject: 'Mathematics', exam: activeExam })}
          className="w-full rounded-[18px] bg-gradient-to-r from-[#061F17] via-[#0B3528] to-[#124B3B] p-4 text-white border border-emerald-500/30 shadow-floating cursor-pointer relative overflow-hidden group hover:border-amber-400/50 transition-all duration-200 active:scale-[0.99]"
        >
          {/* Subtle background glow */}
          <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between relative z-10 gap-3">
            <div className="space-y-1 text-left flex-1">
              <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                <span className="animate-pulse">🔥</span>
                <span>DARE TO DARE</span>
                <span className="bg-white text-red-700 px-1 py-0.1 rounded text-[9px] font-black">GAME</span>
              </div>
              <h3 className="text-[14.5px] sm:text-[15.5px] font-black text-white group-hover:text-[#FFD600] transition">
                Take The 60-Second Challenge!
              </h3>
              <p className="text-[11.5px] text-emerald-200 leading-snug">
                Rapid questions • Beat the clock • Dare your friends to beat your score!
              </p>
            </div>
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-6 transition">
              <span className="text-xl">⚡</span>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A9692] text-sm">🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subjects..."
            className="w-full pl-9 pr-4 py-2.5 rounded-[12px] bg-white border border-[#E4EAE8] text-[13px] text-[#10201D] placeholder-[#8A9692] focus:outline-none focus:border-[#004D40] shadow-subtle"
          />
        </div>

        {/* Subjects List */}
        <div className="space-y-2.5">
          {filteredSubjects.map(sub => (
            <SubjectCard
              key={sub.id}
              subject={sub}
              onClick={() => handleSelectSubject(sub.name)}
              onDare={() => openDareToDare({ subject: sub.name, exam: activeExam })}
            />
          ))}
        </div>
      </main>

      {/* ─── POP-OUT CHALLENGE DRAWER / CARD ─── */}
      {showPopOutInvite && (
        <div className="fixed bottom-20 left-4 right-4 z-40 max-w-md mx-auto animate-fadeIn">
          <div className="rounded-[20px] bg-[#071914] text-white p-4 border-2 border-amber-400/90 shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowPopOutInvite(false)}
              className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold transition"
            >
              ✕
            </button>

            <div className="flex items-start space-x-3 text-left">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center shrink-0 shadow-md animate-bounce">
                <span className="text-xl">🔥</span>
              </div>
              <div className="flex-1 pr-4 space-y-1">
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10.5px] font-black text-amber-400 uppercase tracking-wider">
                    ⚡ CHALLENGE POP-OUT!
                  </span>
                </div>
                <h4 className="text-[14px] font-black text-white leading-tight">
                  I Dare You to a Rapid Challenge!
                </h4>
                <p className="text-[11.5px] text-emerald-200">
                  Can you answer 5 questions in 60 seconds without failing?
                </p>
                <div className="pt-2 flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPopOutInvite(false);
                      openDareToDare({ subject: 'Mathematics', exam: activeExam });
                    }}
                    className="px-3 py-1.5 rounded-[10px] bg-gradient-to-r from-amber-500 to-red-500 text-white font-bold text-[12px] shadow-sm hover:brightness-110 active:scale-95 transition cursor-pointer"
                  >
                    Accept Dare 🚀
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPopOutInvite(false)}
                    className="px-2.5 py-1.5 rounded-[10px] bg-white/10 text-emerald-200 text-[11px] font-semibold hover:bg-white/20 transition cursor-pointer"
                  >
                    Maybe Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button for Dare to Dare */}
      <div className="fixed bottom-20 right-4 z-30">
        <button
          type="button"
          onClick={() => openDareToDare({ subject: 'Mathematics', exam: activeExam })}
          className="px-3.5 py-2.5 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-black text-[12px] shadow-floating hover:brightness-110 active:scale-95 transition flex items-center space-x-1.5 uppercase tracking-wider cursor-pointer border border-amber-300/40"
          title="Dare to Dare Challenge Game"
        >
          <span className="animate-pulse">🔥</span>
          <span>DARE ME!</span>
        </button>
      </div>

      <BottomNavigation activeTab="notes" />
    </div>
  );
};
