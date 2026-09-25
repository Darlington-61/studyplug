import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { StudyPlugHeader, ExamPills, ExamCategory, SubjectCard, SubjectConfig, BottomNavigation } from './design-system';

interface ChooseSubjectScreenProps {
  onBack?: () => void;
  onSelectMathematics?: () => void;
}

export const ChooseSubjectScreen: React.FC<ChooseSubjectScreenProps> = ({
  onBack
}) => {
  const { setActiveView, setSelectedSubject } = useApp();
  const [activeExam, setActiveExam] = useState<ExamCategory>('JAMB');
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    <div className="flex-1 flex flex-col justify-between bg-[#F7F9F8] min-h-screen text-[#10201D] select-none font-sans">
      {/* ─── Screen 2 Header: Back Arrow, Select Subject ─── */}
      <StudyPlugHeader
        showBack={true}
        onBack={onBack || (() => setActiveView('dashboard'))}
        title="Select Subject"
        subtitle={`${activeExam} • Choose your subject to start`}
      />

      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-6 space-y-3.5 sm:max-w-xl lg:max-w-4xl">
        {/* Exam Pills (JAMB, WAEC, NECO, BECE) */}
        <ExamPills
          exams={['JAMB', 'WAEC', 'NECO', 'BECE']}
          activeExam={activeExam}
          onSelectExam={setActiveExam}
        />

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
            />
          ))}
        </div>
      </main>

      <BottomNavigation activeTab="notes" />
    </div>
  );
};
