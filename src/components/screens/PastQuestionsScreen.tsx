import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';

export const PastQuestionsScreen: React.FC = () => {
  const { setActiveView, goBack, setSelectedExam, setSelectedSubject, startTestForSubject } = useApp();
  const [activeExam, setActiveExam] = useState<'JAMB' | 'WAEC' | 'NECO'>('JAMB');
  const [selectedYear, setSelectedYear] = useState<number | 'All'>(2025);
  const [selectedType, setSelectedType] = useState<'All' | 'UTME' | 'SSCE'>('All');

  const papers = [
    { id: 1, subject: 'Mathematics', topic: 'Number System', year: 2025, questions: 20, exam: 'JAMB' },
    { id: 2, subject: 'Use of English', topic: 'Comprehension & Lexis', year: 2025, questions: 60, exam: 'JAMB' },
    { id: 3, subject: 'Physics', topic: 'Mechanics & Waves', year: 2025, questions: 40, exam: 'JAMB' },
    { id: 4, subject: 'Chemistry', topic: 'Organic Chemistry & Stoichiometry', year: 2025, questions: 40, exam: 'JAMB' },
    { id: 5, subject: 'Biology', topic: 'Cell Biology & Genetics', year: 2025, questions: 50, exam: 'JAMB' },
    { id: 6, subject: 'Economics', topic: 'Price Theory & Elasticity', year: 2025, questions: 40, exam: 'JAMB' },
    { id: 7, subject: 'Government', topic: 'Constitutional Development', year: 2025, questions: 40, exam: 'JAMB' },
  ];

  const handleStartExam = (paper: typeof papers[0]) => {
    setSelectedExam(paper.exam as any);
    setSelectedSubject(paper.subject);
    startTestForSubject(paper.subject, paper.year, paper.topic);
    setActiveView('test');
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

        {/* Exam Pills (JAMB | WAEC | NECO) */}
        <div className="px-4 pb-2.5 flex items-center space-x-2">
          {(['JAMB', 'WAEC', 'NECO'] as const).map(exam => (
            <button
              key={exam}
              type="button"
              onClick={() => {
                setActiveExam(exam);
                setSelectedExam(exam as any);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                activeExam === exam
                  ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                  : 'bg-[#001830] text-[#607080] hover:text-white border border-[#001020]'
              }`}
            >
              {exam}
            </button>
          ))}
        </div>

        {/* Year Filter & Exam Type Filters Row */}
        <div className="px-4 pb-3 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-1.5">
            <span className="text-[#607080] font-medium">Year:</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value === 'All' ? 'All' : parseInt(e.target.value, 10))}
              className="bg-[#001830] text-white border border-[#001020] rounded-xl px-2.5 py-1 text-xs font-bold focus:outline-none focus:border-[#F8C800]"
            >
              <option value={2025}>2025</option>
              <option value={2024}>2024</option>
              <option value={2023}>2023</option>
              <option value={2022}>2022</option>
              <option value="All">All Years</option>
            </select>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="text-[#607080] font-medium">Type:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="bg-[#001830] text-white border border-[#001020] rounded-xl px-2.5 py-1 text-xs font-bold focus:outline-none focus:border-[#F8C800]"
            >
              <option value="All">All Types</option>
              <option value="UTME">UTME CBT</option>
              <option value="SSCE">SSCE Standard</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Papers List */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-2.5">
        {/* Dedicated Repeated Questions & Topics Banner */}
        <div
          onClick={() => setActiveView('repeated-questions')}
          className="bg-[#001028] text-white rounded-[20px] p-3.5 border border-[#001830] shadow-sm hover:border-[#F8C800] transition cursor-pointer flex items-center justify-between text-left group"
        >
          <div className="flex items-center space-x-3 min-w-0">
            <div className="w-9 h-9 rounded-full bg-[#001830] text-[#F8C800] flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition">
              🔁
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-white group-hover:text-[#F8C800] transition truncate">
                High-Frequency &amp; Repeated Questions
              </h4>
              <p className="text-[10.5px] text-[#607080] truncate">
                Grouped by syllabus topic with 1-tap CBT practice
              </p>
            </div>
          </div>
          <span className="text-[#F8C800] font-bold text-xs shrink-0 ml-2">
            View Topics →
          </span>
        </div>

        {papers.map((paper, idx) => (
          <div
            key={paper.id}
            className="bg-white rounded-[20px] p-4 border border-[#E8E8E8] shadow-sm hover:border-[#F8C800] transition flex items-center justify-between text-left group"
          >
            <div className="space-y-0.5">
              <div className="text-[10px] font-bold text-[#607080] uppercase tracking-wider">
                {idx + 1}. {paper.subject}
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-[#001028] group-hover:text-[#001830]">
                {paper.topic}
              </h4>
              <p className="text-[11px] text-[#607080]">
                {paper.exam} {paper.year} • {paper.questions} Questions
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleStartExam(paper)}
              className="px-4 py-2 rounded-full bg-[#F8C800] hover:bg-[#FFD21F] active:scale-95 text-[#001028] font-bold text-xs shadow-sm transition cursor-pointer shrink-0"
            >
              Start
            </button>
          </div>
        ))}
      </main>

      <BottomNavigation activeTab="courses" />
    </div>
  );
};

export default PastQuestionsScreen;
