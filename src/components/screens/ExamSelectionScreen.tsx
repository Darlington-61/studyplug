import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const ExamSelectionScreen: React.FC = () => {
  const { setActiveView, goBack, setSelectedExam } = useApp();
  const [selected, setSelected] = useState<'JAMB' | 'WAEC' | 'NECO' | 'NABTEB'>('JAMB');

  const exams = [
    {
      id: 'JAMB',
      title: 'JAMB UTME',
      subtitle: 'Use 400+ score calculator & CBT drill',
      icon: '🎓',
      badge: '2026 Ready'
    },
    {
      id: 'WAEC',
      title: 'WAEC SSCE',
      subtitle: 'Past questions, objectives & theory practice',
      icon: '📜',
      badge: 'May/June'
    },
    {
      id: 'NECO',
      title: 'NECO SSCE',
      subtitle: 'Past questions & step-by-step solutions',
      icon: '🏛️',
      badge: 'Senior Sec'
    },
    {
      id: 'NABTEB',
      title: 'NABTEB Technical',
      subtitle: 'Technical & trade past examination papers',
      icon: '⚙️',
      badge: 'National'
    },
  ];

  const handleChoose = (examId: any) => {
    setSelected(examId);
    setSelectedExam(examId);
    setActiveView('courses');
  };

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
          <BrandLogo size="sm" />
          <div className="w-10" />
        </div>

        {/* Title */}
        <div className="px-4 pb-2 text-left">
          <h2 className="text-lg font-black text-white">Select Exam</h2>
        </div>

        {/* Exam Pills (Screen 19 in Reference) */}
        <div className="px-4 pb-3 flex space-x-2 overflow-x-auto no-scrollbar">
          {(['JAMB', 'WAEC', 'NECO', 'NABTEB'] as const).map(exam => (
            <button
              key={exam}
              type="button"
              onClick={() => setSelected(exam)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                selected === exam
                  ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                  : 'bg-[#001830] text-[#607080] hover:text-white border border-[#001020]'
              }`}
            >
              {exam}
            </button>
          ))}
        </div>
      </header>

      {/* Main Exam Cards (Screen 19 in Reference) */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-3 text-left">
        {exams.map((ex) => (
          <div
            key={ex.id}
            onClick={() => handleChoose(ex.id)}
            className="bg-white rounded-[24px] p-5 border border-[#E8E8E8] shadow-sm hover:border-[#F8C800] hover:shadow-md active:scale-[0.99] transition cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#001028] text-[#F8C800] flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition shadow-xs">
                {ex.icon}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-sm sm:text-base text-[#001028]">
                    {ex.title}
                  </h3>
                  <span className="text-[10px] font-bold text-[#001028] bg-[#F8C800] px-2 py-0.2 rounded-full">
                    {ex.badge}
                  </span>
                </div>
                <p className="text-[11px] text-[#607080]">
                  {ex.subtitle}
                </p>
              </div>
            </div>

            <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-base shrink-0">
              →
            </span>
          </div>
        ))}
      </main>

      <BottomNavigation activeTab="courses" />
    </div>
  );
};

export default ExamSelectionScreen;
