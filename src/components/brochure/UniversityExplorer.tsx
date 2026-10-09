import React, { useState, useMemo } from 'react';
import {
  NIGERIAN_UNIVERSITIES,
  NIGERIAN_STATES,
  UniversityItem,
  filterUniversities
} from '../../data/nigerianUniversitiesData';
import { JAMB_BROCHURE_COURSES } from '../../data/jambBrochureCourses';
import { LiveKitMentorModal } from '../mentor/LiveKitMentorModal';

interface UniversityExplorerProps {
  onSelectUniversityForChecker?: (uniId: string) => void;
}

const CATEGORIES = ['All', 'Federal', 'State', 'Private'];
const DEGREE_TYPES = ['All', 'MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'Pharm.D', 'B.N.Sc.', 'B.A.', 'B.Ed.'];

export const UniversityExplorer: React.FC<UniversityExplorerProps> = ({
  onSelectUniversityForChecker
}) => {
  const [search, setSearch] = useState('');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('All');
  const [selectedDegree, setSelectedDegree] = useState('All');

  const [expandedUniId, setExpandedUniId] = useState<string | null>(null);

  // LiveKit Mentor modal
  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const [mentorFocusUni, setMentorFocusUni] = useState<UniversityItem | null>(null);

  const filteredUnis = useMemo(() => {
    return filterUniversities(
      search,
      selectedState,
      selectedCategory,
      selectedCourseFilter,
      selectedDegree
    );
  }, [search, selectedState, selectedCategory, selectedCourseFilter, selectedDegree]);

  const handleConsultMentorForSchool = (uni: UniversityItem) => {
    setMentorFocusUni(uni);
    setIsMentorOpen(true);
  };

  return (
    <div className="w-full space-y-3 text-left">
      {/* ─── Multi-Filter Control Surface ─── */}
      <div className="bg-white rounded-xl p-3.5 border border-[#E8E8E8] shadow-xs space-y-2.5">
        {/* Search Input */}
        <div className="relative">
          <span className="absolute left-3.5 top-2.5 text-[#607080] text-sm">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search university e.g. UNILAG, UI, OAU, UNN, Covenant, FUTA, LASU, UNILORIN..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F8F9FA] border border-[#CBD5E1] text-xs sm:text-sm text-[#001028] placeholder-[#708090] focus:outline-none focus:border-[#001028]"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          {/* State Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#607080] uppercase">State:</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#CBD5E1] rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#001028] focus:outline-none focus:border-[#001028]"
            >
              {NIGERIAN_STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Category Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#607080] uppercase">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#CBD5E1] rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#001028] focus:outline-none focus:border-[#001028]"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Types' : `${cat} Universities`}
                </option>
              ))}
            </select>
          </div>

          {/* Course Availability Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#607080] uppercase">Course Availability:</label>
            <select
              value={selectedCourseFilter}
              onChange={(e) => setSelectedCourseFilter(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#CBD5E1] rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#001028] focus:outline-none focus:border-[#001028]"
            >
              <option value="All">All Courses</option>
              {JAMB_BROCHURE_COURSES.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>

          {/* Degree Type Filter */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#607080] uppercase">Degree Type:</label>
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#CBD5E1] rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#001028] focus:outline-none focus:border-[#001028]"
            >
              {DEGREE_TYPES.map((deg) => (
                <option key={deg} value={deg}>
                  {deg === 'All' ? 'All Degrees' : deg}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset button if filtered */}
        {(search || selectedState !== 'All States' || selectedCategory !== 'All' || selectedCourseFilter !== 'All' || selectedDegree !== 'All') && (
          <div className="flex justify-end pt-1">
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setSelectedState('All States');
                setSelectedCategory('All');
                setSelectedCourseFilter('All');
                setSelectedDegree('All');
              }}
              className="text-[11px] font-bold text-[#001028] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* ─── University Cards List ─── */}
      {filteredUnis.length === 0 ? (
        <div className="bg-white rounded-2xl p-8 text-center border border-[#E8E8E8] space-y-2">
          <span className="text-3xl block">🏛️</span>
          <h3 className="font-bold text-sm text-[#001028]">
            No universities found matching your criteria
          </h3>
          <p className="text-xs text-[#607080]">
            Try clearing the state or degree filter to expand your search.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredUnis.map((uni) => {
            const isExpanded = expandedUniId === uni.id;

            return (
              <div
                key={uni.id}
                className="bg-white rounded-[22px] p-4 sm:p-5 border border-[#E8E8E8] shadow-sm hover:border-[#001028] hover:shadow-md transition text-left space-y-3"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#001028] text-[#F8C800]">
                        {uni.category} Institution
                      </span>
                      <span className="text-[10px] font-semibold text-[#607080] bg-[#F5F5F5] px-2 py-0.5 rounded-full">
                        📍 {uni.state} State ({uni.geopoliticalZone})
                      </span>
                      <span className="text-[10px] text-[#607080]">
                        Est. {uni.establishedYear}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#001028] flex items-center space-x-2">
                      <span>{uni.name}</span>
                      <span className="text-xs text-[#607080]">({uni.shortName})</span>
                    </h3>

                    <p className="text-xs text-[#607080]">
                      {uni.campusLocation}
                    </p>
                  </div>

                  {/* Average Cut-off mark */}
                  <div className="flex items-center space-x-1.5 self-start bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-xl text-xs font-bold shrink-0">
                    <span>🎯 Benchmark:</span>
                    <span>{uni.cutOffAverage}+</span>
                  </div>
                </div>

                {/* Degree Badges */}
                <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                  <span className="text-[10px] font-bold text-[#607080] uppercase mr-1">
                    Degrees Awarded:
                  </span>
                  {uni.degreeTypes.map((deg) => (
                    <span
                      key={deg}
                      className="bg-[#001028]/5 text-[#001028] font-bold text-[10px] px-2 py-0.5 rounded-md border border-[#001028]/10"
                    >
                      {deg}
                    </span>
                  ))}
                </div>

                {/* Accredited Courses count & Preview */}
                <div className="bg-[#F8F9FA] p-3 rounded-xl border border-[#E8ECEF] space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#001028]">
                      📚 Accredited Courses ({uni.coursesOffered.length} Key Programmes)
                    </span>
                    <button
                      type="button"
                      onClick={() => setExpandedUniId(isExpanded ? null : uni.id)}
                      className="text-[#001028] font-bold hover:underline cursor-pointer text-[11px]"
                    >
                      {isExpanded ? '▲ Hide Courses' : '▼ View All Courses'}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-2 border-t border-[#E8ECEF] space-y-2 animate-in fade-in">
                      <div className="flex flex-wrap gap-1">
                        {uni.coursesOffered.map((courseId) => {
                          const matchedCourse = JAMB_BROCHURE_COURSES.find((c) => c.id === courseId);
                          return (
                            <span
                              key={courseId}
                              className="bg-white text-[#001028] font-medium text-[10px] px-2 py-1 rounded-lg border border-[#CBD5E1]"
                            >
                              ✓ {matchedCourse ? matchedCourse.name : courseId}
                            </span>
                          );
                        })}
                      </div>

                      {/* School waivers summary */}
                      {Object.keys(uni.schoolSpecificWaivers).length > 0 && (
                        <div className="mt-2 p-2.5 rounded-lg bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 space-y-1">
                          <span className="font-bold block">
                            💡 Notable Institutional Waivers at {uni.shortName}:
                          </span>
                          <ul className="list-disc list-inside space-y-0.5">
                            {Object.entries(uni.schoolSpecificWaivers).map(([cId, waiver]) => (
                              <li key={cId}>{waiver}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F0F0F0]">
                  <a
                    href={uni.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#001028] hover:underline flex items-center space-x-1"
                  >
                    <span>🌐</span>
                    <span>Official Portal ({uni.website.replace('https://', '')})</span>
                  </a>

                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => handleConsultMentorForSchool(uni)}
                      className="px-3 py-1.5 rounded-xl bg-[#001028] hover:bg-[#001832] text-[#F8C800] font-bold text-xs flex items-center space-x-1 transition cursor-pointer"
                    >
                      <span>🎙️</span>
                      <span>Ask AI Counselor</span>
                    </button>

                    {onSelectUniversityForChecker && (
                      <button
                        type="button"
                        onClick={() => onSelectUniversityForChecker(uni.id)}
                        className="px-3 py-1.5 rounded-xl bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-bold text-xs flex items-center space-x-1 transition cursor-pointer shadow-xs"
                      >
                        <span>Check Combinations →</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* LiveKit Mentor Modal */}
      <LiveKitMentorModal
        isOpen={isMentorOpen}
        onClose={() => setIsMentorOpen(false)}
      />
    </div>
  );
};

export default UniversityExplorer;
