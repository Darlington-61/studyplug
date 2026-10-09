import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';

interface PastQuestionsBrowserModalProps {
  onClose: () => void;
}

const EXAM_OPTIONS = ['JAMB', 'WAEC', 'NECO', 'NABTEB', 'BECE'] as const;
const SUBJECT_OPTIONS = [
  'English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology',
  'Economics', 'Government', 'Literature in English', 'Geography', 'CRK',
  'Agricultural Science', 'Commerce', 'Accounting', 'Further Mathematics',
];

const YEARS = Array.from({ length: 25 }, (_, i) => 2024 - i); // 2024–2000

export const PastQuestionsBrowserModal: React.FC<PastQuestionsBrowserModalProps> = ({ onClose }) => {
  const { allQuestions, setActiveView, startTestForSubject, selectedExam, setSelectedExam } = useApp();

  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [browseMode, setBrowseMode] = useState<'browse' | 'list'>('browse');

  // Filter questions by exam, year, subject
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      const matchExam = q.exam?.toUpperCase() === selectedExam.toUpperCase();
      const matchYear = selectedYear === 'all' || q.year === selectedYear;
      const matchSubject = q.subject?.toLowerCase().includes(selectedSubject.toLowerCase()) ||
        selectedSubject.toLowerCase().includes((q.subject || '').toLowerCase());
      return matchExam && matchYear && matchSubject;
    });
  }, [allQuestions, selectedExam, selectedYear, selectedSubject]);

  // Available years with questions
  const availableYears = useMemo(() => {
    const yrs = new Set(
      allQuestions
        .filter(q => q.exam?.toUpperCase() === selectedExam.toUpperCase())
        .map(q => q.year)
        .filter(Boolean)
    );
    return Array.from(yrs).sort((a, b) => (b as number) - (a as number)) as number[];
  }, [allQuestions, selectedExam]);

  const examColor: Record<string, string> = {
    JAMB: '#1565C0',
    WAEC: '#1B5E20',
    NECO: '#BF360C',
    NABTEB: '#E65100',
    BECE: '#6A1B9A',
  };

  const handleStartPractice = () => {
    onClose();
    startTestForSubject(selectedSubject, selectedYear);
  };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F7F9F8] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-4 shrink-0">
        <div className="flex items-center space-x-3 mb-3">
          <button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer">←</button>
          <div className="flex-1">
            <h2 className="font-extrabold text-[16px] leading-none">Past Questions Browser</h2>
            <p className="text-[11px] text-emerald-300 mt-0.5">Browse by exam body, year, and subject</p>
          </div>
          <span className="text-2xl">📚</span>
        </div>

        {/* Exam Tabs */}
        <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {EXAM_OPTIONS.map(exam => (
            <button
              key={exam}
              type="button"
              onClick={() => setSelectedExam(exam as any)}
              className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-bold transition ${
                selectedExam === exam
                  ? 'bg-white text-[#001028]'
                  : 'bg-white/10 text-emerald-200 border border-white/20'
              }`}
            >
              {exam}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Filter Row */}
        <div className="bg-white border-b border-[#E4EAE8] px-4 py-3 space-y-3 shrink-0">
          {/* Subject Select */}
          <div>
            <p className="text-[10px] font-black text-[#66736F] uppercase tracking-wider mb-1">Subject</p>
            <div className="flex flex-wrap gap-1.5">
              {SUBJECT_OPTIONS.map(subj => (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setSelectedSubject(subj)}
                  className={`px-2.5 py-1 rounded-[8px] text-[11px] font-semibold transition ${
                    selectedSubject === subj
                      ? 'text-white'
                      : 'bg-[#F0F4F2] text-[#66736F] hover:bg-[#E4EAE8]'
                  }`}
                  style={selectedSubject === subj ? { backgroundColor: examColor[selectedExam] } : {}}
                >
                  {subj}
                </button>
              ))}
            </div>
          </div>

          {/* Year Select */}
          <div>
            <p className="text-[10px] font-black text-[#66736F] uppercase tracking-wider mb-1">Year</p>
            <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedYear('all')}
                className={`shrink-0 px-3 py-1 rounded-[8px] text-[11px] font-bold transition ${
                  selectedYear === 'all' ? 'text-white' : 'bg-[#F0F4F2] text-[#66736F]'
                }`}
                style={selectedYear === 'all' ? { backgroundColor: examColor[selectedExam] } : {}}
              >
                All Years
              </button>
              {(availableYears.length > 0 ? availableYears : YEARS.slice(0, 15)).map(yr => (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`shrink-0 px-3 py-1 rounded-[8px] text-[11px] font-bold transition ${
                    selectedYear === yr ? 'text-white' : 'bg-[#F0F4F2] text-[#66736F]'
                  }`}
                  style={selectedYear === yr ? { backgroundColor: examColor[selectedExam] } : {}}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="px-4 py-3">
          <div className="rounded-[14px] border border-[#E4EAE8] bg-white px-4 py-3 flex items-center justify-between shadow-sm">
            <div>
              <p className="font-black text-[15px] text-[#10201D]">
                {filteredQuestions.length} Question{filteredQuestions.length !== 1 ? 's' : ''} Found
              </p>
              <p className="text-[11px] text-[#66736F]">
                {selectedExam} · {selectedSubject} · {selectedYear === 'all' ? 'All Years' : selectedYear}
              </p>
            </div>
            <button
              type="button"
              onClick={handleStartPractice}
              disabled={filteredQuestions.length === 0}
              className="px-4 py-2 rounded-[12px] font-bold text-[12px] text-white shadow-sm disabled:opacity-40 transition active:scale-[0.97]"
              style={{ backgroundColor: examColor[selectedExam] }}
            >
              Practice Now →
            </button>
          </div>
        </div>

        {/* Question Preview List */}
        <div className="px-4 pb-6 space-y-3">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-4xl mb-3 block">🔍</span>
              <p className="font-bold text-[14px] text-[#10201D]">No questions found</p>
              <p className="text-[12px] text-[#66736F] mt-1">
                Try a different year or subject combination
              </p>
            </div>
          ) : (
            filteredQuestions.slice(0, 30).map((q, i) => (
              <div key={q.id} className="rounded-[14px] bg-white border border-[#E4EAE8] px-4 py-3 shadow-sm">
                <div className="flex items-start space-x-3">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white mt-0.5"
                    style={{ backgroundColor: examColor[selectedExam] }}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[12.5px] text-[#10201D] leading-relaxed line-clamp-3"
                       dangerouslySetInnerHTML={{ __html: q.question || q.questionText || '' }}
                    />
                    <div className="flex items-center space-x-2 mt-1.5">
                      <span className="text-[9.5px] text-[#66736F]">{q.year || selectedYear} · {q.topic || 'General'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {filteredQuestions.length > 30 && (
            <button
              type="button"
              onClick={handleStartPractice}
              className="w-full py-3 rounded-[14px] font-bold text-[13px] text-white transition active:scale-[0.97]"
              style={{ backgroundColor: examColor[selectedExam] }}
            >
              Practice All {filteredQuestions.length} Questions →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
