import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';
import {
  SyllabusTopic,
  getTopicsForSubject,
  getAllSyllabusTopics
} from '../../data/topicResourcesData';
import { notesProgressService } from '../../services/notesProgressService';
import { TopicNoteReader } from '../notes/TopicNoteReader';

export const StudyNotesScreen: React.FC = () => {
  const { setActiveView, goBack, selectedSubject, setSelectedSubject, selectedExam, setSelectedExam } = useApp();

  // Selected exam filter
  const [activeExamFilter, setActiveExamFilter] = useState<'All' | 'JAMB' | 'WAEC' | 'NECO' | 'BECE'>(() => {
    return selectedExam || 'JAMB';
  });

  // Selected subject: null = show subjects list; string = show topics list
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  // Selected topic to read (null = browse topics)
  const [activeReadingTopic, setActiveReadingTopic] = useState<SyllabusTopic | null>(null);

  const [search, setSearch] = useState('');

  const subjects = [
    { name: 'Chemistry', icon: '🧪', category: 'Sciences' },
    { name: 'Mathematics', icon: '📐', category: 'General' },
    { name: 'Physics', icon: '⚡', category: 'Sciences' },
    { name: 'Biology', icon: '🧬', category: 'Sciences' },
    { name: 'English Language', icon: '📚', category: 'General' },
    { name: 'Economics', icon: '📊', category: 'Commercial' },
    { name: 'Government', icon: '🏛️', category: 'Arts' },
    { name: 'Literature in English', icon: '📖', category: 'Arts' },
    { name: 'Commerce', icon: '🏢', category: 'Commercial' },
    { name: 'Financial Accounting', icon: '🪙', category: 'Commercial' },
    { name: 'Agricultural Science', icon: '🌱', category: 'Sciences' },
    { name: 'Civic Education', icon: '🇳🇬', category: 'General' },
    { name: 'Christian Religious Studies', icon: '✝️', category: 'Arts' },
    { name: 'Islamic Studies', icon: '🌙', category: 'Arts' },
    { name: 'Geography', icon: '🌍', category: 'Sciences' },
    { name: 'Computer Studies', icon: '💻', category: 'Sciences' },
  ];

  // Topics for selected subject
  const subjectTopics = useMemo(() => {
    if (!activeSubject) return [];
    return getTopicsForSubject(activeSubject, activeExamFilter);
  }, [activeSubject, activeExamFilter]);

  // Filtered topics by search
  const filteredTopics = useMemo(() => {
    if (!search) return subjectTopics;
    return subjectTopics.filter(t =>
      t.topicTitle.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [subjectTopics, search]);

  // If reading a topic note, render TopicNoteReader
  if (activeReadingTopic) {
    return (
      <TopicNoteReader
        topic={activeReadingTopic}
        onBack={() => setActiveReadingTopic(null)}
      />
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F8F8F8] text-[#001028] flex flex-col font-sans select-none">
      {/* ─── 1. TOP HEADER (Dark Navy #001028) ─── */}
      <header className="sticky top-0 z-40 w-full bg-[#001028] text-white border-b border-[#001830] shadow-sm">
        <div className="h-14 px-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              if (activeSubject) {
                setActiveSubject(null);
              } else {
                goBack();
              }
            }}
            className="flex items-center space-x-1.5 text-xs font-semibold text-white hover:text-[#F8C800] transition cursor-pointer"
          >
            <span className="text-base font-bold">←</span>
            <span>{activeSubject ? 'Subjects' : 'Back'}</span>
          </button>

          <BrandLogo size="sm" />

          <div className="w-10" />
        </div>

        {/* Exam Filter Pills: All | JAMB | WAEC | NECO | BECE */}
        <div className="px-4 pb-2 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
          {(['All', 'JAMB', 'WAEC', 'NECO', 'BECE'] as const).map(filter => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveExamFilter(filter)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer shrink-0 ${
                activeExamFilter === filter
                  ? 'bg-[#F8C800] text-[#001028] shadow-sm'
                  : 'bg-[#001830] text-[#607080] hover:text-white border border-[#001020]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="px-4 pb-3">
          <div className="relative">
            <span className="absolute left-3.5 top-2.5 text-slate-400 text-xs">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={activeSubject ? `Search ${activeSubject} topics...` : 'Search subjects & notes...'}
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-[#001830] border border-[#001020] text-xs text-white placeholder-[#607080] focus:outline-none focus:border-[#F8C800] transition"
            />
          </div>
        </div>
      </header>

      {/* ─── 2. MAIN CONTAINER: SUBJECTS LIST OR TOPICS HIERARCHY ─── */}
      <main className="flex-1 max-w-lg w-full mx-auto px-4 pt-4 pb-28 space-y-3">
        {!activeSubject ? (
          /* LEVEL 1: SUBJECT SELECTION */
          <>
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="text-xs font-bold text-[#607080] uppercase tracking-wider">
                Select a Subject
              </span>
              <span className="text-[11px] text-[#607080]">
                {subjects.length} Subjects
              </span>
            </div>

            <div className="space-y-2.5">
              {subjects
                .filter(s => s.name.toLowerCase().includes(search.toLowerCase()))
                .map(sub => {
                  const topics = getTopicsForSubject(sub.name, activeExamFilter);
                  return (
                    <div
                      key={sub.name}
                      onClick={() => {
                        setActiveSubject(sub.name);
                        setSelectedSubject(sub.name);
                      }}
                      className="bg-white rounded-[22px] p-4 border border-[#E8E8E8] shadow-sm hover:border-[#F8C800] hover:shadow-md active:scale-[0.99] transition cursor-pointer flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center space-x-3.5">
                        <div className="w-11 h-11 rounded-2xl bg-[#001028] text-[#F8C800] flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition">
                          {sub.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#001028] group-hover:text-[#001830]">
                            {sub.name}
                          </h4>
                          <p className="text-[11px] text-[#607080] mt-0.5">
                            {topics.length} Syllabus Topics • Notes & Videos
                          </p>
                        </div>
                      </div>

                      <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-base shrink-0">
                        →
                      </span>
                    </div>
                  );
                })}
            </div>
          </>
        ) : (
          /* LEVEL 2: TOPICS LIST UNDER SELECTED SUBJECT */
          <>
            <div className="flex items-center justify-between px-1 mb-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-[#607080] uppercase tracking-wider">
                  {activeSubject} Topics
                </span>
                <span className="text-[10px] font-mono bg-[#001028] text-[#F8C800] px-2 py-0.5 rounded-full">
                  {activeExamFilter}
                </span>
              </div>
              <span className="text-[11px] text-[#607080]">
                {filteredTopics.length} Topics Available
              </span>
            </div>

            <div className="space-y-3">
              {filteredTopics.length === 0 ? (
                <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center text-xs text-[#607080]">
                  No topics found matching your search.
                </div>
              ) : (
                filteredTopics.map((topicItem) => {
                  const subIds = topicItem.subtopics.map(s => s.id);
                  const progress = notesProgressService.getTopicProgress(subIds);
                  const videosCount = topicItem.globalResources.filter(r => r.type === 'video').length +
                    topicItem.subtopics.reduce((acc, s) => acc + s.resources.filter(r => r.type === 'video').length, 0);
                  const pdfCount = topicItem.globalResources.filter(r => r.type === 'pdf').length +
                    topicItem.subtopics.reduce((acc, s) => acc + s.resources.filter(r => r.type === 'pdf').length, 0);

                  return (
                    <div
                      key={topicItem.id}
                      onClick={() => setActiveReadingTopic(topicItem)}
                      className="bg-white rounded-[24px] p-4.5 border border-[#E8E8E8] shadow-sm hover:border-[#F8C800] hover:shadow-md active:scale-[0.99] transition cursor-pointer text-left space-y-3 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center space-x-1.5 mb-1">
                            <span className="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#001028] text-[#F8C800]">
                              {topicItem.category || 'Core'}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              {topicItem.subtopics.length} Subtopics
                            </span>
                          </div>
                          <h4 className="font-black text-sm text-[#001028] group-hover:text-[#001830] leading-snug">
                            {topicItem.topicTitle}
                          </h4>
                        </div>
                        <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-lg shrink-0">
                          →
                        </span>
                      </div>

                      <p className="text-xs text-[#607080] line-clamp-2">
                        {topicItem.description}
                      </p>

                      {/* Resource Badges */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100 text-[10.5px]">
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                          📖 {topicItem.subtopics.length} Notes
                        </span>
                        {videosCount > 0 && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                            🎥 {videosCount} Videos
                          </span>
                        )}
                        {pdfCount > 0 && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                            📄 {pdfCount} PDFs
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-medium">
                          ❓ Practice Ready
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="space-y-1 pt-1">
                        <div className="flex items-center justify-between text-[10.5px]">
                          <span className="text-[#607080]">
                            {progress.completedCount} of {progress.totalCount} subtopics completed
                          </span>
                          <span className="font-bold text-[#001028]">{progress.percentage}%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#F8C800] rounded-full transition-all duration-300"
                            style={{ width: `${progress.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
};

export default StudyNotesScreen;
