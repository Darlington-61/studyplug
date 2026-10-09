import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { REPEATED_TOPICS_DATA } from '../screens/RepeatedQuestionsScreen';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Subject' | 'Topic' | 'Exam' | 'Repeated Question' | 'Note';
  badge?: string;
  icon: string;
  onSelect: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const {
    setActiveView,
    setSelectedSubject,
    setSelectedExam,
    setSelectedYear,
    openDareToDare,
    openCalculator
  } = useApp();

  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Subjects' | 'Topics' | 'Exams' | 'Questions'>('All');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Comprehensive Indexed Search Catalog
  const allSearchableItems: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    // 1. Subjects
    const subjects = [
      { name: 'Mathematics', icon: '📐', topics: 28, count: 2450 },
      { name: 'English Language', icon: '📖', topics: 32, count: 3120 },
      { name: 'Physics', icon: '⚡', topics: 24, count: 1890 },
      { name: 'Chemistry', icon: '🧪', topics: 22, count: 1740 },
      { name: 'Biology', icon: '🧬', topics: 26, count: 1980 },
      { name: 'Economics', icon: '📊', topics: 20, count: 1450 },
      { name: 'Government', icon: '🏛️', topics: 18, count: 1320 },
      { name: 'Literature in English', icon: '📚', topics: 16, count: 980 },
      { name: 'Commerce', icon: '🏢', topics: 15, count: 890 },
      { name: 'Financial Accounting', icon: '🪙', topics: 14, count: 760 },
      { name: 'Agricultural Science', icon: '🌱', topics: 18, count: 1120 },
      { name: 'Civic Education', icon: '🇳🇬', topics: 12, count: 840 },
      { name: 'Christian Religious Studies', icon: '✝️', topics: 14, count: 790 },
      { name: 'Islamic Studies', icon: '🌙', topics: 14, count: 710 },
      { name: 'Geography', icon: '🌍', topics: 16, count: 890 },
      { name: 'History', icon: '🏺', topics: 12, count: 650 },
      { name: 'Computer Studies', icon: '💻', topics: 15, count: 920 },
      { name: 'Basic Science', icon: '🔬', topics: 18, count: 1040 },
      { name: 'Basic Technology', icon: '⚙️', topics: 16, count: 960 },
      { name: 'Social Studies', icon: '👥', topics: 14, count: 880 }
    ];

    subjects.forEach(sub => {
      list.push({
        id: `subj-${sub.name}`,
        title: sub.name,
        subtitle: `${sub.topics} Topics • ${sub.count} CBT Questions Available`,
        category: 'Subject',
        icon: sub.icon,
        onSelect: () => {
          setSelectedSubject(sub.name);
          setActiveView('courses');
          onClose();
        }
      });
    });

    // 2. Exams & Years
    const exams = ['JAMB UTME', 'WAEC WASSCE', 'NECO SSCE', 'NABTEB', 'POST-UTME', 'BECE'];
    const years = ['2026', '2025', '2024', '2023', '2022', '2021', '2020'];

    exams.forEach(ex => {
      list.push({
        id: `exam-${ex}`,
        title: `${ex} Full Past Paper Archive`,
        subtitle: `All solved past questions and marking schemes for ${ex}`,
        category: 'Exam',
        icon: '🎓',
        badge: 'EXAM',
        onSelect: () => {
          const shortName = ex.split(' ')[0] as any;
          setSelectedExam(shortName);
          setActiveView('past-questions');
          onClose();
        }
      });

      // Specific high-value combinations like "2026 JAMB Physics", "2024 WAEC Mathematics"
      years.slice(0, 3).forEach(yr => {
        ['Physics', 'Mathematics', 'Chemistry', 'English Language', 'Biology'].forEach(s => {
          list.push({
            id: `paper-${ex}-${yr}-${s}`,
            title: `${yr} ${ex} ${s}`,
            subtitle: `Official CBT examination past paper and step-by-step worked solutions`,
            category: 'Exam',
            icon: '📝',
            badge: yr,
            onSelect: () => {
              const shortName = ex.split(' ')[0] as any;
              setSelectedExam(shortName);
              setSelectedSubject(s);
              setSelectedYear(parseInt(yr, 10));
              setActiveView('past-questions');
              onClose();
            }
          });
        });
      });
    });

    // 3. Repeated & Core Topics
    REPEATED_TOPICS_DATA.forEach(topic => {
      list.push({
        id: `topic-${topic.id}`,
        title: topic.topicTitle,
        subtitle: `${topic.subject} • Repeated ${topic.repeatedTimes}x in ${topic.examType} (${topic.yearsTested})`,
        category: 'Topic',
        icon: '🔁',
        badge: 'REPEATED',
        onSelect: () => {
          setSelectedSubject(topic.subject);
          setActiveView('repeated-questions');
          onClose();
        }
      });

      // Add individual repeated questions
      topic.questions.forEach(q => {
        list.push({
          id: `q-${q.id}`,
          title: q.question.slice(0, 85) + '...',
          subtitle: `${q.exam} (${q.years}) • ${topic.subject}: ${topic.topicTitle}`,
          category: 'Repeated Question',
          icon: '❓',
          badge: `${q.repeatedCount}x`,
          onSelect: () => {
            setSelectedSubject(topic.subject);
            setActiveView('repeated-questions');
            onClose();
          }
        });
      });
    });

    return list;
  }, [onClose, setActiveView, setSelectedExam, setSelectedSubject, setSelectedYear]);

  // Filtered Results
  const searchResults = useMemo(() => {
    if (!query.trim()) {
      // Show high-yield recommendations when empty
      return allSearchableItems
        .filter(item => item.category === 'Topic' || item.category === 'Subject')
        .slice(0, 8);
    }

    const q = query.toLowerCase().trim();
    return allSearchableItems.filter(item => {
      const matchFilter =
        activeFilter === 'All' ||
        (activeFilter === 'Subjects' && item.category === 'Subject') ||
        (activeFilter === 'Topics' && item.category === 'Topic') ||
        (activeFilter === 'Exams' && item.category === 'Exam') ||
        (activeFilter === 'Questions' && item.category === 'Repeated Question');

      const matchText =
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchFilter && matchText;
    }).slice(0, 15);
  }, [allSearchableItems, query, activeFilter]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[300] bg-[#001028]/80 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-2xl bg-white rounded-[26px] border border-[#E8E8E8] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-scaleUp text-left">
        
        {/* Top Search Input Box */}
        <div className="p-4 sm:p-5 bg-[#001028] text-white border-b border-[#001830] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#F8C800] uppercase tracking-wider flex items-center space-x-1.5">
              <span>🔍</span>
              <span>Global Search</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold transition cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="relative">
            <span className="absolute left-3.5 top-3 text-[#607080] text-sm">🔍</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, topics, subjects, exams or years..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#001830] border border-[#001020] text-sm text-white placeholder-[#607080] focus:outline-none focus:border-[#F8C800] transition"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar pt-1">
            {(['All', 'Subjects', 'Topics', 'Exams', 'Questions'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold transition shrink-0 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#F8C800] text-[#001028]'
                    : 'bg-[#001830] text-[#607080] hover:text-white border border-[#001020]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 divide-y divide-[#F0F0F0]">
          {searchResults.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <span className="text-3xl">🔎</span>
              <h4 className="font-bold text-sm text-[#001028]">No results found for "{query}"</h4>
              <p className="text-xs text-[#607080]">
                Try searching for a subject like "Physics", an exam like "JAMB", or a topic like "Logarithms".
              </p>
            </div>
          ) : (
            searchResults.map((item) => (
              <div
                key={item.id}
                onClick={item.onSelect}
                className="pt-2 pb-2 px-3 rounded-xl hover:bg-[#F8F8F8] transition cursor-pointer flex items-center justify-between group text-left"
              >
                <div className="flex items-center space-x-3 min-w-0 pr-3">
                  <div className="w-10 h-10 rounded-xl bg-[#001028] text-[#F8C800] flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition">
                    {item.icon}
                  </div>
                  <div className="min-w-0 space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-[#001028] group-hover:text-[#001830] truncate">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-black px-1.5 py-0.2 rounded bg-[#F8C800] text-[#001028] uppercase shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#607080] truncate leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <span className="text-[10px] font-bold text-[#607080] bg-[#F8F8F8] border border-[#E8E8E8] px-2 py-0.5 rounded-full uppercase hidden sm:inline">
                    {item.category}
                  </span>
                  <span className="text-sm font-bold text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition">
                    →
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Search Footer Tip */}
        <div className="p-3 bg-[#F8F8F8] border-t border-[#E8E8E8] flex items-center justify-between text-[11px] text-[#607080]">
          <span>💡 Press <strong className="text-[#001028]">ESC</strong> to close</span>
          <span>StudyPlug Search Index • 129,000+ Questions</span>
        </div>

      </div>
    </div>
  );
};
