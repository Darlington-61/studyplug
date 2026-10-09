import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { BrandLogo } from '../common/BrandLogo';
import { BottomNavigation } from '../design-system';
import {
  SyllabusTopic,
  getTopicsForSubject
} from '../../data/topicResourcesData';
import { notesProgressService } from '../../services/notesProgressService';
import { TopicNoteReader } from '../notes/TopicNoteReader';

export const TopicDetailScreen: React.FC = () => {
  const { setActiveView, goBack, selectedSubject, selectedExam, openMorningTea } = useApp();

  const currentSubject = selectedSubject || 'Chemistry';
  const currentExam = selectedExam || 'JAMB';

  const [activeReadingTopic, setActiveReadingTopic] = useState<SyllabusTopic | null>(null);

  // Load topics
  const topics = useMemo(() => {
    return getTopicsForSubject(currentSubject, currentExam);
  }, [currentSubject, currentExam]);

  // If reading a topic, show TopicNoteReader
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

        <div className="px-4 pb-3.5 text-left">
          <div className="flex items-center space-x-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#F8C800]">
              {currentExam} Syllabus
            </span>
            <span className="text-[10px] text-slate-400">• Official Notes & Resources</span>
          </div>
          <h2 className="text-base sm:text-lg font-black text-white">
            {currentSubject} Topics & Learning Materials
          </h2>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-md w-full mx-auto px-4 pt-4 pb-28 space-y-3.5 text-left">
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-[#607080] uppercase tracking-wider">
            All Curriculum Topics
          </span>
          <span className="text-[11px] text-[#607080]">
            {topics.length} Topics Available
          </span>
        </div>

        <div className="space-y-3">
          {topics.map(t => {
            const subIds = t.subtopics.map(s => s.id);
            const progress = notesProgressService.getTopicProgress(subIds);
            const videosCount = t.globalResources.filter(r => r.type === 'video').length +
              t.subtopics.reduce((acc, s) => acc + s.resources.filter(r => r.type === 'video').length, 0);
            const pdfCount = t.globalResources.filter(r => r.type === 'pdf').length +
              t.subtopics.reduce((acc, s) => acc + s.resources.filter(r => r.type === 'pdf').length, 0);

            return (
              <div
                key={t.id}
                onClick={() => setActiveReadingTopic(t)}
                className="bg-white rounded-[24px] p-4.5 border border-[#E8E8E8] shadow-sm hover:border-[#F8C800] hover:shadow-md active:scale-[0.99] transition cursor-pointer space-y-2.5 group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[9.5px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#001028] text-[#F8C800] inline-block mb-1">
                      {t.category || 'Core'}
                    </span>
                    <h4 className="font-black text-sm text-[#001028] group-hover:text-[#001830] leading-snug">
                      {t.topicTitle}
                    </h4>
                  </div>
                  <span className="text-[#607080] group-hover:text-[#001028] group-hover:translate-x-1 transition font-bold text-base shrink-0">
                    →
                  </span>
                </div>

                <p className="text-xs text-[#607080] line-clamp-2">
                  {t.description}
                </p>

                {/* Resource Badges */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10.5px]">
                  <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                    📖 {t.subtopics.length} Notes
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
                    ⚡ Practice
                  </span>
                </div>

                {/* Progress bar */}
                <div className="space-y-1 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[10.5px]">
                    <span className="text-[#607080]">
                      {progress.completedCount} of {progress.totalCount} completed
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
          })}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default TopicDetailScreen;
