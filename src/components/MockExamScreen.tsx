import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { StudyPlugHeader, ExamPills, ExamCategory, BottomNavigation } from './design-system';

export const MockExamScreen: React.FC = () => {
  const { setActiveView, startTestForSubject, startMultiSubjectTest } = useApp();
  const [activeExam, setActiveExam] = useState<ExamCategory>('JAMB');

  const handleStartMock = (examName: string) => {
    if (examName.includes('JAMB')) {
      startMultiSubjectTest(['Use of English', 'Mathematics', 'Physics', 'Chemistry'], 2024);
    } else {
      startTestForSubject('Mathematics', 2024);
    }
    setActiveView('practice');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F7F9F8] min-h-screen text-[#10201D] select-none font-sans">
      {/* ─── Screen 7 Header: Deep Green (#004D40) with Back Button ─── */}
      <StudyPlugHeader
        showBack={true}
        onBack={() => setActiveView('dashboard')}
        title="Mock Exam"
        subtitle="Full exam simulation under real exam conditions."
      />

      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-8 space-y-4 sm:max-w-xl lg:max-w-4xl">
        {/* Exam Pills */}
        <ExamPills
          exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
          activeExam={activeExam}
          onSelectExam={setActiveExam}
        />

        {/* Full Mock Exam Card */}
        <div className="bg-white rounded-[16px] p-4 border border-[#E4EAE8] shadow-subtle space-y-3.5 text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-[12px] bg-blue-50 border border-blue-100 text-[#1976D2] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-[15px] text-[#10201D]">Full Mock Exam</h3>
              <p className="text-[11.5px] text-[#66736F]">Real exam experience. Time-based.</p>
            </div>
          </div>

          {/* List of Mock Exams */}
          <div className="space-y-2.5 pt-1">
            {[
              {
                id: 'jamb-2025',
                name: 'JAMB 2025 Mock',
                details: '180 questions • 3 hours',
                color: '#1976D2',
                badgeBg: 'bg-blue-50'
              },
              {
                id: 'waec-2024',
                name: 'WAEC 2024 Mock',
                details: '150 questions • 2 hours',
                color: '#16A34A',
                badgeBg: 'bg-emerald-50'
              },
              {
                id: 'neco-2024',
                name: 'NECO 2024 Mock',
                details: '150 questions • 2 hours',
                color: '#008C95',
                badgeBg: 'bg-teal-50'
              }
            ].map(mock => (
              <div
                key={mock.id}
                className="flex items-center justify-between p-3 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] hover:border-[#D0DBD8] transition"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-[8px] ${mock.badgeBg} flex items-center justify-center font-bold text-xs`} style={{ color: mock.color }}>
                    📄
                  </div>
                  <div>
                    <h4 className="font-semibold text-[13.5px] text-[#10201D] leading-tight">
                      {mock.name}
                    </h4>
                    <p className="text-[11px] text-[#66736F] font-normal mt-0.5">
                      {mock.details}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleStartMock(mock.name)}
                  className="px-3.5 py-1.5 rounded-[10px] bg-[#004D40] text-white text-[12px] font-bold shadow-xs hover:bg-[#003B32] transition cursor-pointer"
                >
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Practice Section */}
        <div className="bg-white rounded-[16px] p-4 border border-[#E4EAE8] shadow-subtle space-y-3 text-left">
          <h3 className="font-bold text-[14px] text-[#10201D]">Custom Practice</h3>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setActiveView('subjects')}
              className="p-3 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] text-left hover:border-[#D0DBD8] transition cursor-pointer group"
            >
              <div className="text-lg">📚</div>
              <h4 className="font-semibold text-[13px] text-[#10201D] mt-1 group-hover:text-[#004D40]">
                By Subject
              </h4>
              <p className="text-[10.5px] text-[#66736F]">Choose subject &amp; topic</p>
            </button>

            <button
              type="button"
              onClick={() => setActiveView('practice')}
              className="p-3 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] text-left hover:border-[#D0DBD8] transition cursor-pointer group"
            >
              <div className="text-lg">📅</div>
              <h4 className="font-semibold text-[13px] text-[#10201D] mt-1 group-hover:text-[#004D40]">
                By Year
              </h4>
              <p className="text-[10.5px] text-[#66736F]">Past questions by year</p>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setActiveView('practice')}
            className="w-full p-3 rounded-[12px] bg-[#F7F9F8] border border-[#E4EAE8] text-left hover:border-[#D0DBD8] transition cursor-pointer flex items-center justify-between group"
          >
            <div className="flex items-center space-x-2.5">
              <span className="text-base">🎯</span>
              <div>
                <h4 className="font-semibold text-[13px] text-[#10201D] group-hover:text-[#004D40]">
                  By Difficulty
                </h4>
                <p className="text-[10.5px] text-[#66736F]">Easy, Medium, Hard</p>
              </div>
            </div>
            <span className="text-xs text-[#8A9692] font-bold">›</span>
          </button>
        </div>
      </main>

      <BottomNavigation activeTab="mock" />
    </div>
  );
};
