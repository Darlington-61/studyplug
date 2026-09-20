import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getTopicsForSubject, getYearsForSubject } from '../data/allQuestionsHub';
import {
  EnglishSubjectIcon,
  MathSubjectIcon,
  PhysicsSubjectIcon,
  ChemistrySubjectIcon,
  BiologySubjectIcon,
  GovernmentSubjectIcon,
  LiteratureSubjectIcon,
  EconomicsSubjectIcon
} from './Icons';

interface ChooseSubjectScreenProps {
  onBack?: () => void;
  onSelectMathematics?: () => void;
}

interface SubjectItem {
  id: string;
  name: string;
  questionsCount: number;
  icon: React.ReactNode;
  iconBg: string;
}

export const ChooseSubjectScreen: React.FC<ChooseSubjectScreenProps> = ({
  onBack,
  onSelectMathematics
}) => {
  const { startTestForSubject, startMultiSubjectTest, setActiveView, setSelectedSubject, availableYears } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [isMultiSelectMode, setIsMultiSelectMode] = useState<boolean>(false);
  const [selectedSubjectNames, setSelectedSubjectNames] = useState<string[]>([
    'Use of English',
    'Mathematics'
  ]);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [filterModalSubject, setFilterModalSubject] = useState<string | null>(null);

  const categories = ['All', 'JAMB', 'WAEC', 'WAEC GCE', 'NECO', 'NECO GCE', 'BECE', 'POST UTME'];

  interface SubjectItemExtended extends SubjectItem {
    examType: 'JAMB' | 'WAEC' | 'WAEC GCE' | 'NECO' | 'NECO GCE' | 'BECE' | 'POST UTME';
  }

  const subjects: SubjectItemExtended[] = [
    // --- JAMB UTME ---
    {
      id: 'jamb-english',
      name: 'Use of English',
      examType: 'JAMB',
      questionsCount: 3144,
      icon: <EnglishSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEE2E2]'
    },
    {
      id: 'jamb-math',
      name: 'Mathematics',
      examType: 'JAMB',
      questionsCount: 4676,
      icon: <MathSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'jamb-physics',
      name: 'Physics',
      examType: 'JAMB',
      questionsCount: 4007,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0F2FE]'
    },
    {
      id: 'jamb-chemistry',
      name: 'Chemistry',
      examType: 'JAMB',
      questionsCount: 4990,
      icon: <ChemistrySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFEDD5]'
    },
    {
      id: 'jamb-biology',
      name: 'Biology',
      examType: 'JAMB',
      questionsCount: 5128,
      icon: <BiologySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'jamb-government',
      name: 'Government',
      examType: 'JAMB',
      questionsCount: 4846,
      icon: <GovernmentSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFE4E6]'
    },
    {
      id: 'jamb-literature',
      name: 'Literature in English',
      examType: 'JAMB',
      questionsCount: 4778,
      icon: <LiteratureSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FCE7F3]'
    },
    {
      id: 'jamb-economics',
      name: 'Economics',
      examType: 'JAMB',
      questionsCount: 5062,
      icon: <EconomicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEF3C7]'
    },

    // --- BECE (JUNIOR WAEC) ---
    {
      id: 'bece-math',
      name: 'BECE Mathematics',
      examType: 'BECE',
      questionsCount: 1452,
      icon: <MathSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'bece-english',
      name: 'BECE English Language',
      examType: 'BECE',
      questionsCount: 1410,
      icon: <EnglishSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEE2E2]'
    },
    {
      id: 'bece-science',
      name: 'BECE Basic Science',
      examType: 'BECE',
      questionsCount: 1478,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0F2FE]'
    },
    {
      id: 'bece-social',
      name: 'BECE Social Studies',
      examType: 'BECE',
      questionsCount: 1480,
      icon: <GovernmentSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFE4E6]'
    },
    {
      id: 'bece-computer',
      name: 'BECE Computer Studies',
      examType: 'BECE',
      questionsCount: 640,
      icon: <ChemistrySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0E7FF]'
    },
    {
      id: 'bece-tech',
      name: 'BECE Basic Technology',
      examType: 'BECE',
      questionsCount: 347,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEF3C7]'
    },
    {
      id: 'bece-civic',
      name: 'BECE Civic & Moral Education',
      examType: 'BECE',
      questionsCount: 1080,
      icon: <GovernmentSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#F3E8FF]'
    },
    {
      id: 'bece-home-ec',
      name: 'BECE Home Economics',
      examType: 'BECE',
      questionsCount: 231,
      icon: <BiologySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FCE7F3]'
    },

    // --- POST UTME ---
    {
      id: 'putme-unilag',
      name: 'UNILAG Post-UTME',
      examType: 'POST UTME',
      questionsCount: 120,
      icon: <EnglishSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEE2E2]'
    },
    {
      id: 'putme-uniben',
      name: 'UNIBEN Post-UTME',
      examType: 'POST UTME',
      questionsCount: 120,
      icon: <MathSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'putme-oau',
      name: 'OAU Post-UTME',
      examType: 'POST UTME',
      questionsCount: 120,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0F2FE]'
    },
    {
      id: 'putme-ui',
      name: 'UI Post-UTME',
      examType: 'POST UTME',
      questionsCount: 120,
      icon: <ChemistrySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFEDD5]'
    },
    {
      id: 'putme-unn',
      name: 'UNN Post-UTME',
      examType: 'POST UTME',
      questionsCount: 120,
      icon: <BiologySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'putme-general',
      name: 'Post-UTME General Paper',
      examType: 'POST UTME',
      questionsCount: 150,
      icon: <GovernmentSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEF3C7]'
    },
    {
      id: 'putme-math',
      name: 'Post-UTME Mathematics',
      examType: 'POST UTME',
      questionsCount: 150,
      icon: <MathSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'putme-physics',
      name: 'Post-UTME Physics',
      examType: 'POST UTME',
      questionsCount: 150,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0F2FE]'
    },
    {
      id: 'putme-chem',
      name: 'Post-UTME Chemistry',
      examType: 'POST UTME',
      questionsCount: 150,
      icon: <ChemistrySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFEDD5]'
    },
    {
      id: 'putme-bio',
      name: 'Post-UTME Biology',
      examType: 'POST UTME',
      questionsCount: 150,
      icon: <BiologySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },

    // --- WAEC ---
    {
      id: 'waec-math',
      name: 'WAEC Mathematics',
      examType: 'WAEC',
      questionsCount: 1609,
      icon: <MathSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'waec-english',
      name: 'WAEC English Language',
      examType: 'WAEC',
      questionsCount: 2809,
      icon: <EnglishSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEE2E2]'
    },
    {
      id: 'waec-biology',
      name: 'WAEC Biology',
      examType: 'WAEC',
      questionsCount: 2406,
      icon: <BiologySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'waec-physics',
      name: 'WAEC Physics',
      examType: 'WAEC',
      questionsCount: 1401,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0F2FE]'
    },
    {
      id: 'waec-chemistry',
      name: 'WAEC Chemistry',
      examType: 'WAEC',
      questionsCount: 1925,
      icon: <ChemistrySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFEDD5]'
    },

    // --- NECO ---
    {
      id: 'neco-biology',
      name: 'NECO Biology',
      examType: 'NECO',
      questionsCount: 6318,
      icon: <BiologySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'neco-physics',
      name: 'NECO Physics',
      examType: 'NECO',
      questionsCount: 6118,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0F2FE]'
    },
    {
      id: 'neco-government',
      name: 'NECO Government',
      examType: 'NECO',
      questionsCount: 5611,
      icon: <GovernmentSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFE4E6]'
    },
    {
      id: 'neco-economics',
      name: 'NECO Economics',
      examType: 'NECO',
      questionsCount: 5249,
      icon: <EconomicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEF3C7]'
    },
    {
      id: 'neco-english',
      name: 'NECO English Language',
      examType: 'NECO',
      questionsCount: 5103,
      icon: <EnglishSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEE2E2]'
    },
    {
      id: 'neco-chemistry',
      name: 'NECO Chemistry',
      examType: 'NECO',
      questionsCount: 3696,
      icon: <ChemistrySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFEDD5]'
    },
    {
      id: 'neco-math',
      name: 'NECO Mathematics',
      examType: 'NECO',
      questionsCount: 3580,
      icon: <MathSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },

    // --- WAEC GCE (Nov/Dec Private Candidates) ---
    {
      id: 'waec-gce-math',
      name: 'WAEC GCE Mathematics',
      examType: 'WAEC GCE',
      questionsCount: 400,
      icon: <MathSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'waec-gce-english',
      name: 'WAEC GCE English Language',
      examType: 'WAEC GCE',
      questionsCount: 400,
      icon: <EnglishSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEE2E2]'
    },
    {
      id: 'waec-gce-physics',
      name: 'WAEC GCE Physics',
      examType: 'WAEC GCE',
      questionsCount: 400,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0F2FE]'
    },
    {
      id: 'waec-gce-chemistry',
      name: 'WAEC GCE Chemistry',
      examType: 'WAEC GCE',
      questionsCount: 400,
      icon: <ChemistrySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFEDD5]'
    },
    {
      id: 'waec-gce-biology',
      name: 'WAEC GCE Biology',
      examType: 'WAEC GCE',
      questionsCount: 400,
      icon: <BiologySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'waec-gce-economics',
      name: 'WAEC GCE Economics',
      examType: 'WAEC GCE',
      questionsCount: 400,
      icon: <EconomicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEF3C7]'
    },
    {
      id: 'waec-gce-government',
      name: 'WAEC GCE Government',
      examType: 'WAEC GCE',
      questionsCount: 400,
      icon: <GovernmentSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFE4E6]'
    },

    // --- NECO GCE (Nov/Dec SSCE External) ---
    {
      id: 'neco-gce-math',
      name: 'NECO GCE Mathematics',
      examType: 'NECO GCE',
      questionsCount: 400,
      icon: <MathSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'neco-gce-english',
      name: 'NECO GCE English Language',
      examType: 'NECO GCE',
      questionsCount: 400,
      icon: <EnglishSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEE2E2]'
    },
    {
      id: 'neco-gce-physics',
      name: 'NECO GCE Physics',
      examType: 'NECO GCE',
      questionsCount: 400,
      icon: <PhysicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#E0F2FE]'
    },
    {
      id: 'neco-gce-chemistry',
      name: 'NECO GCE Chemistry',
      examType: 'NECO GCE',
      questionsCount: 400,
      icon: <ChemistrySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFEDD5]'
    },
    {
      id: 'neco-gce-biology',
      name: 'NECO GCE Biology',
      examType: 'NECO GCE',
      questionsCount: 400,
      icon: <BiologySubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#DCFCE7]'
    },
    {
      id: 'neco-gce-economics',
      name: 'NECO GCE Economics',
      examType: 'NECO GCE',
      questionsCount: 400,
      icon: <EconomicsSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FEF3C7]'
    },
    {
      id: 'neco-gce-government',
      name: 'NECO GCE Government',
      examType: 'NECO GCE',
      questionsCount: 400,
      icon: <GovernmentSubjectIcon className="w-5 h-5" />,
      iconBg: 'bg-[#FFE4E6]'
    }
  ];

  const filteredSubjects = subjects.filter((s) => {
    const matchesCategory = activeCategory === 'All' || s.examType === activeCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col bg-[#061710] bg-board-deep min-h-full text-white">
      {/* Top Header */}
      <div className="px-5 pt-2 pb-3 bg-[#071F15] border-b-2 border-[#C4823F]/60">
        <div className="flex items-center justify-between relative">
          {/* Back Arrow */}
          <button
            type="button"
            onClick={onBack}
            className="w-9 h-9 -ml-2 flex items-center justify-center text-white/90 hover:text-[#FFCC00] rounded-xl transition cursor-pointer"
            aria-label="Go back"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Title */}
          <h1 className="font-bold text-[16px] text-white tracking-tight chalk-text-white">Choose Subject</h1>

          {/* Search Button */}
          <button
            type="button"
            onClick={() => setShowSearch(!showSearch)}
            className="w-9 h-9 -mr-2 flex items-center justify-center text-white/90 hover:text-[#FFCC00] rounded-xl transition cursor-pointer"
            aria-label="Search subjects"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        {/* Optional Search input slide down */}
        {showSearch && (
          <div className="mt-2.5">
            <input
              type="text"
              placeholder="Search subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 bg-[#061710] rounded-xl border-2 border-[#C4823F] text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFCC00] shadow-sm"
              autoFocus
            />
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pt-3 pb-1">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-bold px-3.5 py-1.5 rounded-lg whitespace-nowrap transition duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#FFCC00] text-[#071F15] shadow-lg font-black'
                    : 'bg-[#061710] text-white/80 border border-[#C4823F]/50 hover:bg-[#0A261B]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Mode Switcher: Single vs Multi-Subject Mock */}
        <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#C4823F]/30">
          <div className="flex items-center space-x-1.5 bg-[#061710] p-1 rounded-xl border border-[#C4823F]/40">
            <button
              type="button"
              onClick={() => setIsMultiSelectMode(false)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                !isMultiSelectMode
                  ? 'bg-[#FFCC00] text-[#061710] font-black shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              🎯 Single Subject
            </button>
            <button
              type="button"
              onClick={() => setIsMultiSelectMode(true)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer flex items-center space-x-1 ${
                isMultiSelectMode
                  ? 'bg-[#FFCC00] text-[#061710] font-black shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span>📚 Multi-Subject (JAMB)</span>
              <span className="text-[10px] bg-rose-950 text-rose-300 px-1 rounded font-mono">UTME</span>
            </button>
          </div>

          <span className="text-[11px] text-white/60 font-medium">
            {isMultiSelectMode ? `${selectedSubjectNames.length}/4 Selected` : 'Tap to Select'}
          </span>
        </div>

        {/* Multi-Subject Quick Presets Bar */}
        {isMultiSelectMode && (
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar mt-2 pt-1">
            <span className="text-[10px] font-black uppercase text-[#FFCC00] shrink-0">Presets:</span>
            <button
              type="button"
              onClick={() => setSelectedSubjectNames(['Use of English', 'Mathematics', 'Physics', 'Chemistry'])}
              className="px-2 py-1 rounded-md text-[10.5px] font-bold bg-[#061710] border border-[#C4823F]/60 text-white hover:bg-[#FFCC00] hover:text-[#061710] shrink-0 cursor-pointer"
            >
              🔬 JAMB Science
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubjectNames(['Use of English', 'Biology', 'Chemistry', 'Physics'])}
              className="px-2 py-1 rounded-md text-[10.5px] font-bold bg-[#061710] border border-[#C4823F]/60 text-white hover:bg-[#FFCC00] hover:text-[#061710] shrink-0 cursor-pointer"
            >
              🩺 JAMB Medical
            </button>
            <button
              type="button"
              onClick={() => setSelectedSubjectNames(['Use of English', 'Mathematics', 'Economics', 'Government'])}
              className="px-2 py-1 rounded-md text-[10.5px] font-bold bg-[#061710] border border-[#C4823F]/60 text-white hover:bg-[#FFCC00] hover:text-[#061710] shrink-0 cursor-pointer"
            >
              ⚖️ JAMB Arts/Comm
            </button>
          </div>
        )}
      </div>

      {/* Subject Cards List */}
      <div className="flex-1 px-5 py-4 space-y-2.5 overflow-y-auto no-scrollbar pb-32">
        {filteredSubjects.map((subject) => {
          const isSelected = selectedSubjectNames.includes(subject.name);

          return (
            <div
              key={subject.id}
              onClick={() => {
                if (isMultiSelectMode) {
                  // Toggle in multi-select mode
                  setSelectedSubjectNames((prev) => {
                    if (prev.includes(subject.name)) {
                      if (prev.length === 1) return prev;
                      return prev.filter((s) => s !== subject.name);
                    } else {
                      if (prev.length >= 4) {
                        alert('You can select up to 4 subjects for a JAMB UTME exam.');
                        return prev;
                      }
                      return [...prev, subject.name];
                    }
                  });
                } else {
                  // In single subject mode, open filter sheet
                  setFilterModalSubject(subject.name);
                }
              }}
              className={`rounded-2xl p-3 border-2 transition duration-150 flex items-center justify-between cursor-pointer group shadow-xl ${
                isMultiSelectMode && isSelected
                  ? 'bg-[#0E3526] border-[#FFCC00] ring-2 ring-[#FFCC00]/50 shadow-2xl'
                  : 'bg-board-slate border-[#C4823F]/60 hover:border-[#FFCC00]'
              }`}
            >
              {/* Left icon & text */}
              <div className="flex items-center space-x-3.5">
                <div className={`w-9 h-9 rounded-xl ${subject.iconBg} flex items-center justify-center shrink-0 shadow-sm text-[#071F15]`}>
                  {subject.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="font-bold text-[13.5px] text-white leading-tight group-hover:text-[#FFCC00] transition-colors">
                      {subject.name}
                    </h3>
                  </div>
                  <p className="text-[10.5px] text-white/60 font-medium leading-tight mt-0.5">
                    {subject.questionsCount} Authentic Questions
                  </p>
                </div>
              </div>

              {/* Right Action */}
              <div className="flex items-center space-x-2">
                {isMultiSelectMode ? (
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold border transition ${
                    isSelected
                      ? 'bg-[#FFCC00] text-[#061710] border-[#FFCC00] font-black'
                      : 'bg-[#061710] text-white/40 border-[#C4823F]/40'
                  }`}>
                    {isSelected ? '✓' : ''}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFilterModalSubject(subject.name);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-[#061710] border border-[#C4823F]/60 text-xs text-[#FFCC00] font-bold hover:bg-[#FFCC00] hover:text-[#061710] transition"
                  >
                    Options ▾
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Sticky Bottom Multi-Subject Launch Drawer ─────────────────────── */}
      {isMultiSelectMode && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#071F15] border-t-2 border-[#C4823F] shadow-2xl z-40 animate-fade-up">
          <div className="max-w-md mx-auto space-y-3">
            {/* Selected Subject Badges */}
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedSubjectNames.map((sName) => (
                  <span
                    key={sName}
                    className="px-2 py-0.5 rounded-full bg-[#0E3526] border border-[#FFCC00]/60 text-[11px] font-bold text-[#FFCC00] flex items-center space-x-1"
                  >
                    <span>{sName}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (selectedSubjectNames.length > 1) {
                          setSelectedSubjectNames((prev) => prev.filter((s) => s !== sName));
                        }
                      }}
                      className="hover:text-rose-400 font-black ml-1"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <span className="text-[11px] font-bold text-white/70">
                {selectedSubjectNames.length} Subj
              </span>
            </div>

            {/* Quick Year & Topic Filter Selector */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <label className="text-[10px] font-bold text-white/70 block mb-0.5">Filter Year:</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
                  className="w-full bg-[#061710] border border-[#C4823F]/60 rounded-xl px-2.5 py-1.5 text-xs text-[#FFCC00] font-bold outline-none cursor-pointer"
                >
                  <option value="all">📅 All Years Combined</option>
                  {availableYears.map((yr) => (
                    <option key={yr} value={yr}>JAMB {yr} Exam</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-white/70 block mb-0.5">Filter Topic:</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full bg-[#061710] border border-[#C4823F]/60 rounded-xl px-2.5 py-1.5 text-xs text-[#FFCC00] font-bold outline-none cursor-pointer"
                >
                  <option value="all">📖 All Topics</option>
                  {selectedSubjectNames[0] && getTopicsForSubject(selectedSubjectNames[0]).map((top) => (
                    <option key={top} value={top}>{top}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Start CBT Exam Button */}
            <button
              type="button"
              onClick={() => {
                startMultiSubjectTest(selectedSubjectNames, selectedYear, selectedTopic);
                if (onSelectMathematics) onSelectMathematics();
              }}
              className="w-full py-3 rounded-xl bg-[#FFCC00] text-[#061710] font-black text-xs hover:bg-yellow-300 transition shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>🚀</span>
              <span>Start CBT Exam ({selectedSubjectNames.length} Subjects)</span>
            </button>
          </div>
        </div>
      )}

      {/* ─── Single Subject Filter Modal / Bottom Sheet ────────────────────── */}
      {filterModalSubject && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-3xl bg-[#082218] border-2 border-[#C4823F] p-5 shadow-2xl space-y-4 animate-fade-up">
            <div className="flex items-center justify-between border-b border-[#C4823F]/30 pb-3">
              <div>
                <span className="text-[11px] font-black uppercase text-[#FFCC00]">Exam Setup</span>
                <h3 className="font-extrabold text-base text-white">{filterModalSubject}</h3>
              </div>
              <button
                type="button"
                onClick={() => setFilterModalSubject(null)}
                className="w-7 h-7 rounded-full bg-[#061710] border border-[#C4823F]/50 text-white/70 hover:text-white flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            {/* Topic Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white/80 block">Select Syllabus Topic:</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-[#061710] border border-[#C4823F]/60 rounded-xl px-3 py-2 text-xs text-[#FFCC00] font-bold outline-none cursor-pointer"
              >
                <option value="all">📖 All Topics (Comprehensive)</option>
                {getTopicsForSubject(filterModalSubject).map((top) => (
                  <option key={top} value={top}>{top}</option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white/80 block">Select Exam Year:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
                className="w-full bg-[#061710] border border-[#C4823F]/60 rounded-xl px-3 py-2 text-xs text-[#FFCC00] font-bold outline-none cursor-pointer"
              >
                <option value="all">📅 All Past Years Combined</option>
                {getYearsForSubject(filterModalSubject).map((yr) => (
                  <option key={yr} value={yr}>JAMB {yr} Exam</option>
                ))}
              </select>
            </div>

            {/* Dual Filter Notice */}
            {selectedTopic !== 'all' && selectedYear !== 'all' && (
              <div className="p-2.5 rounded-xl bg-[#061710] border border-[#FFCC00]/40 text-[11px] text-[#FFCC00]">
                🎯 <strong>Combined:</strong> Practicing {selectedTopic} from {selectedYear}.
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedSubject(filterModalSubject);
                  setActiveView('practice');
                  setFilterModalSubject(null);
                }}
                className="py-2.5 rounded-xl bg-[#061710] border border-[#C4823F] text-xs font-bold text-white hover:bg-[#0E3526] transition cursor-pointer"
              >
                📖 Practice Mode
              </button>

              <button
                type="button"
                onClick={() => {
                  startTestForSubject(filterModalSubject, selectedYear, selectedTopic);
                  setFilterModalSubject(null);
                  if (onSelectMathematics) onSelectMathematics();
                }}
                className="py-2.5 rounded-xl bg-[#FFCC00] text-[#061710] font-black text-xs hover:bg-yellow-300 transition cursor-pointer shadow-md"
              >
                ▶ Start CBT Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
