import React, { useState } from 'react';
import {
  JAMB_SYLLABUS_DIRECTORY,
  getJambSyllabusBySubject,
  JambSyllabusItem
} from '../../data/jambSyllabusData';

interface OfficialJambSyllabusViewerProps {
  currentSubject: string;
  onSelectSubject?: (subject: string) => void;
}

export const OfficialJambSyllabusViewer: React.FC<OfficialJambSyllabusViewerProps> = ({
  currentSubject,
  onSelectSubject
}) => {
  const [selectedSubjectName, setSelectedSubjectName] = useState<string>(currentSubject);
  const [expandedSectionIndex, setExpandedSectionIndex] = useState<number>(0);

  React.useEffect(() => {
    if (currentSubject) {
      setSelectedSubjectName(currentSubject);
    }
  }, [currentSubject]);

  const syllabus = getJambSyllabusBySubject(selectedSubjectName) || JAMB_SYLLABUS_DIRECTORY[0];

  const handleSubjectChange = (newSubject: string) => {
    setSelectedSubjectName(newSubject);
    setExpandedSectionIndex(0);
    if (onSelectSubject) {
      onSelectSubject(newSubject);
    }
  };

  return (
    <div className="w-full space-y-3 text-left">
      {/* ─── Compact Syllabus Header ─── */}
      <div className="bg-white rounded-xl p-4 border border-[#E8E8E8] shadow-xs space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0F0F0] pb-2.5">
          <div>
            <h3 className="text-sm font-bold text-[#001028] flex items-center space-x-1.5">
              <span>{syllabus.icon}</span>
              <span>{syllabus.subject} Syllabus Outline</span>
            </h3>
            <p className="text-[11px] text-[#607080] mt-0.5">
              {syllabus.totalQuestions} Questions • {syllabus.examDurationMinutes} Mins • {syllabus.facultyCategory}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={syllabus.subject}
              onChange={(e) => handleSubjectChange(e.target.value)}
              className="bg-[#F8F9FA] border border-[#CBD5E1] text-[#001028] text-xs font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#001028] cursor-pointer"
            >
              {JAMB_SYLLABUS_DIRECTORY.map((s) => (
                <option key={s.id} value={s.subject}>
                  {s.subject}
                </option>
              ))}
            </select>

            <a
              href={syllabus.pdfDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              download={`${syllabus.subject}_JAMB_Syllabus.pdf`}
              className="px-2.5 py-1.5 bg-[#001028] text-[#F8C800] font-bold text-[11px] rounded-lg transition hover:bg-[#001830] flex items-center space-x-1"
            >
              <span>📥</span>
              <span>PDF</span>
            </a>
          </div>
        </div>

        {/* General Aims */}
        <div className="space-y-1 text-xs">
          <span className="text-[10px] font-bold text-[#607080] uppercase tracking-wider block">
            Official Objectives:
          </span>
          <ul className="space-y-1 text-[#334155] text-[11px]">
            {syllabus.officialAims.slice(0, 3).map((aim, idx) => (
              <li key={idx} className="flex items-start space-x-1.5">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{aim}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── Detailed Syllabus Sections ─── */}
      <div className="bg-white rounded-xl p-4 border border-[#E8E8E8] shadow-xs space-y-2">
        <span className="text-[10px] font-bold text-[#607080] uppercase tracking-wider block">
          Curriculum Scope ({syllabus.sections.length} Sections):
        </span>

        <div className="space-y-1.5">
          {syllabus.sections.map((sec, secIdx) => {
            const isOpen = expandedSectionIndex === secIdx;
            return (
              <div
                key={secIdx}
                className="border border-[#E8ECEF] rounded-lg overflow-hidden text-xs"
              >
                <button
                  type="button"
                  onClick={() => setExpandedSectionIndex(isOpen ? -1 : secIdx)}
                  className={`w-full p-2.5 flex items-center justify-between text-left transition cursor-pointer ${
                    isOpen ? 'bg-[#001028] text-white font-bold' : 'bg-[#F8F9FA] text-[#001028] hover:bg-slate-100'
                  }`}
                >
                  <span className="font-semibold text-[11.5px]">{sec.sectionTitle}</span>
                  <span className="text-[10px]">{isOpen ? '▲' : '▼'}</span>
                </button>

                {isOpen && (
                  <div className="p-3 bg-white space-y-3 text-[11px]">
                    {sec.topics.map((topic, topIdx) => (
                      <div key={topIdx} className="space-y-1">
                        <h4 className="font-bold text-[#001028]">
                          {topIdx + 1}. {topic.topicName}
                        </h4>
                        <div className="text-[#64748B] pl-2">
                          <span className="font-semibold">Key Topics: </span>
                          <span>{topic.contents.join(', ')}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── Recommended Textbooks ─── */}
      {syllabus.prescribedTextbooks && syllabus.prescribedTextbooks.length > 0 && (
        <div className="bg-white rounded-xl p-3.5 border border-[#E8E8E8] shadow-xs space-y-1.5 text-xs">
          <span className="text-[10px] font-bold text-[#607080] uppercase tracking-wider block">
            Recommended Textbooks:
          </span>
          <div className="space-y-1 text-[11px] text-[#334155]">
            {syllabus.prescribedTextbooks.slice(0, 3).map((book, bIdx) => (
              <div key={bIdx} className="flex items-center space-x-1.5">
                <span className="text-[#001028] font-bold">📖 {book.title}</span>
                <span className="text-[#607080]">— {book.author}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficialJambSyllabusViewer;
