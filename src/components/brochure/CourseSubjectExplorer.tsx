import React, { useState, useMemo } from 'react';
import {
  JAMB_BROCHURE_COURSES,
  JambCourseItem,
  searchJambCourses
} from '../../data/jambBrochureCourses';

interface CourseSubjectExplorerProps {
  onPracticeCourse?: (subjects: string[]) => void;
}

const FACULTIES = [
  'All',
  'Medical & Health',
  'Engineering & Tech',
  'Sciences & Computing',
  'Law',
  'Social & Management',
  'Arts & Humanities',
  'Agriculture'
];

export const CourseSubjectExplorer: React.FC<CourseSubjectExplorerProps> = ({
  onPracticeCourse
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState('All');
  const [copiedCourseId, setCopiedCourseId] = useState<string | null>(null);
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const filteredCourses = useMemo(() => {
    return searchJambCourses(searchQuery, selectedFaculty);
  }, [searchQuery, selectedFaculty]);

  const handleCopyCombination = (course: JambCourseItem) => {
    const text = `Course: ${course.name} (${course.degree})\nJAMB Combination: 1. ${course.jambSubjects.compulsory}, 2. ${course.jambSubjects.subjects.join(', ')}\nO-Level: ${course.oLevelRequirements.details}\n(Official JAMB IBASS)`;
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedCourseId(course.id);
      setTimeout(() => setCopiedCourseId(null), 2000);
    }
  };

  const handlePracticeCourseSubjects = (course: JambCourseItem) => {
    if (onPracticeCourse) {
      onPracticeCourse([
        course.jambSubjects.compulsory,
        ...course.jambSubjects.subjects
      ]);
    }
  };

  return (
    <div className="w-full space-y-3 text-left">
      {/* ─── Clean Search & Faculty Filter ─── */}
      <div className="space-y-2">
        <div className="relative">
          <span className="absolute left-3.5 top-2.5 text-[#607080] text-xs">🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search course e.g. Medicine, Computer Science, Law, Nursing, Accounting..."
            className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-[#E0E0E0] text-xs text-[#001028] placeholder-[#708090] focus:outline-none focus:border-[#001028] shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-[#708090] hover:text-[#001028] text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Clean Faculty Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          {FACULTIES.map((fac) => (
            <button
              key={fac}
              type="button"
              onClick={() => setSelectedFaculty(fac)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedFaculty === fac
                  ? 'bg-[#001028] text-[#F8C800]'
                  : 'bg-white text-[#607080] border border-[#E8E8E8] hover:text-[#001028]'
              }`}
            >
              {fac}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Results Counter ─── */}
      <div className="flex items-center justify-between px-1 text-xs">
        <span className="font-semibold text-[#607080]">
          {selectedFaculty === 'All' ? 'Official JAMB IBASS Courses' : selectedFaculty}
        </span>
        <span className="text-[11px] text-[#607080]">
          {filteredCourses.length} Courses
        </span>
      </div>

      {/* ─── Course Cards ─── */}
      {filteredCourses.length === 0 ? (
        <div className="bg-white rounded-xl p-6 text-center border border-[#E8E8E8] space-y-2">
          <p className="text-xs font-semibold text-[#607080]">
            No courses found matching &ldquo;{searchQuery}&rdquo;
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedFaculty('All');
            }}
            className="text-xs text-[#001028] font-bold underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="space-y-2.5">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseId === course.id;
            const isCopied = copiedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="bg-white rounded-xl p-3.5 border border-[#E8E8E8] shadow-xs text-left space-y-2.5"
              >
                {/* Header: Title, Faculty & Degree */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-[#001028]">
                      {course.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-[11px] text-[#607080] mt-0.5">
                      <span>{course.faculty}</span>
                      <span>•</span>
                      <span className="font-semibold text-[#001028]">{course.degree}</span>
                      {course.cutOffAverage && (
                        <>
                          <span>•</span>
                          <span>Target: {course.cutOffAverage}+</span>
                        </>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyCombination(course)}
                    className="text-[10px] font-semibold text-[#607080] hover:text-[#001028] px-2 py-1 rounded bg-[#F8F8F8] border border-[#E8E8E8] shrink-0 cursor-pointer"
                  >
                    {isCopied ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

                {/* 4 JAMB UTME Subjects */}
                <div className="p-2.5 rounded-lg bg-[#F8F9FA] border border-[#E8ECEF] space-y-1.5">
                  <span className="text-[10.5px] font-bold text-[#607080] uppercase tracking-wider block">
                    4-Subject JAMB UTME Combination:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-[#F8C800] text-[#001028] font-bold text-[11px]">
                      1. {course.jambSubjects.compulsory}
                    </span>
                    {course.jambSubjects.subjects.map((sub, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#001028] text-white font-medium text-[11px]"
                      >
                        {i + 2}. {sub}
                      </span>
                    ))}
                  </div>

                  {course.jambSubjects.note && (
                    <p className="text-[10.5px] text-amber-900 bg-amber-50 p-1.5 rounded border border-amber-200 mt-1 leading-snug">
                      Note: {course.jambSubjects.note}
                    </p>
                  )}
                </div>

                {/* Expandable O-Level & Universities */}
                {isExpanded && (
                  <div className="space-y-2 pt-1 border-t border-[#F0F0F0] text-xs text-[#405060] animate-in fade-in">
                    <div>
                      <span className="font-bold text-[#001028] block">
                        O-Level (WAEC/NECO) Requirements ({course.oLevelRequirements.sittings}):
                      </span>
                      <p className="text-[11px] leading-relaxed mt-0.5">
                        {course.oLevelRequirements.details}
                      </p>
                    </div>

                    {course.topSchools && course.topSchools.length > 0 && (
                      <div>
                        <span className="font-bold text-[#001028] block">
                          Top Accredited Universities:
                        </span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {course.topSchools.map((s, i) => (
                            <span
                              key={i}
                              className="text-[10px] bg-[#F0F2F5] text-[#001028] px-1.5 py-0.5 rounded"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Card Footer Actions */}
                <div className="flex items-center justify-between pt-1 border-t border-[#F0F0F0] text-xs">
                  <button
                    type="button"
                    onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                    className="text-[#607080] hover:text-[#001028] font-semibold text-[11px] cursor-pointer"
                  >
                    {isExpanded ? 'Hide details ▲' : 'View O-Level & schools ▼'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePracticeCourseSubjects(course)}
                    className="px-2.5 py-1 rounded-lg bg-[#001028] text-[#F8C800] font-bold text-[11px] hover:bg-[#001830] transition cursor-pointer"
                  >
                    Practice Subjects →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CourseSubjectExplorer;
