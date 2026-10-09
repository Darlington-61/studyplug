import React, { useState, useMemo } from 'react';
import {
  JAMB_BROCHURE_COURSES,
  JambCourseItem
} from '../../data/jambBrochureCourses';
import {
  NIGERIAN_UNIVERSITIES,
  UniversityItem
} from '../../data/nigerianUniversitiesData';
import { LiveKitMentorModal } from '../mentor/LiveKitMentorModal';

interface CourseEligibilityCheckerProps {
  onPracticeCourse?: (subjects: string[]) => void;
}

const COMMON_WAEC_SUBJECTS = [
  'English Language',
  'Mathematics',
  'Physics',
  'Chemistry',
  'Biology',
  'Agricultural Science',
  'Economics',
  'Government',
  'Literature in English',
  'Commerce',
  'Financial Accounting',
  'CRS',
  'IRS',
  'Geography',
  'Civic Education'
];

export const CourseEligibilityChecker: React.FC<CourseEligibilityCheckerProps> = ({
  onPracticeCourse
}) => {
  // Course & University selection
  const [selectedCourseId, setSelectedCourseId] = useState<string>('nursing-science');
  const [selectedUniId, setSelectedUniId] = useState<string>('unilag');

  // Student self-check interactive state
  const [isSelfCheckOpen, setIsSelfCheckOpen] = useState(false);
  const [studentUtmeSubjects, setStudentUtmeSubjects] = useState<string[]>([
    'English Language',
    'Biology',
    'Chemistry',
    'Physics'
  ]);
  const [studentWaecCredits, setStudentWaecCredits] = useState<string[]>([
    'English Language',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology'
  ]);
  const [studentSittings, setStudentSittings] = useState<1 | 2>(1);

  // LiveKit Mentor state
  const [isMentorOpen, setIsMentorOpen] = useState(false);

  // Resolve active course and university
  const currentCourse = useMemo(() => {
    return (
      JAMB_BROCHURE_COURSES.find((c) => c.id === selectedCourseId) ||
      JAMB_BROCHURE_COURSES[0]
    );
  }, [selectedCourseId]);

  const currentUniversity = useMemo(() => {
    return (
      NIGERIAN_UNIVERSITIES.find((u) => u.id === selectedUniId) ||
      NIGERIAN_UNIVERSITIES[0]
    );
  }, [selectedUniId]);

  // Universities offering the selected course
  const universitiesOfferingCourse = useMemo(() => {
    return NIGERIAN_UNIVERSITIES.filter((u) =>
      u.coursesOffered.some((c) => c.toLowerCase().includes(currentCourse.id.toLowerCase()))
    );
  }, [currentCourse]);

  // School-specific waiver text
  const schoolWaiver = useMemo(() => {
    if (currentUniversity.schoolSpecificWaivers[currentCourse.id]) {
      return currentUniversity.schoolSpecificWaivers[currentCourse.id];
    }
    // Fallback: check if the course has special remarks mentioning this school
    if (currentCourse.specialRemarks && currentCourse.specialRemarks.length > 0) {
      const match = currentCourse.specialRemarks.find(
        (r) =>
          r.toLowerCase().includes(currentUniversity.shortName.toLowerCase()) ||
          r.toLowerCase().includes(currentUniversity.name.toLowerCase())
      );
      if (match) return match;
    }
    return `Standard JAMB IBASS brochure regulations apply for ${currentUniversity.shortName}. Minimum 5 credit passes at maximum ${
      currentUniversity.cutOffAverage >= 250 ? 'one' : 'two'
    } sittings.`;
  }, [currentCourse, currentUniversity]);

  // Eligibility evaluation logic
  const eligibilityVerdict = useMemo(() => {
    const requiredUtme = [
      currentCourse.jambSubjects.compulsory.toLowerCase(),
      ...currentCourse.jambSubjects.subjects.map((s) => s.toLowerCase())
    ];

    const studentUtmeLower = studentUtmeSubjects.map((s) => s.toLowerCase());

    // 1. Check UTME Combination
    const missingUtme = requiredUtme.filter(
      (req) => !studentUtmeLower.some((stu) => stu.includes(req) || req.includes(stu))
    );

    // 2. Check WAEC Credits
    const requiredWaec = currentCourse.oLevelRequirements.subjects.map((s) => s.toLowerCase());
    const studentWaecLower = studentWaecCredits.map((s) => s.toLowerCase());

    const missingWaec = requiredWaec.filter(
      (req) => !studentWaecLower.some((stu) => stu.includes(req) || req.includes(stu))
    );

    // 3. Sitting Check
    const isSittingStrict =
      currentUniversity.schoolSpecificWaivers[currentCourse.id]?.toLowerCase().includes('one sitting') ||
      currentCourse.oLevelRequirements.sittings.toLowerCase().includes('one sitting');

    const sittingViolation = isSittingStrict && studentSittings > 1;

    if (missingUtme.length > 0) {
      return {
        status: 'disqualified',
        title: '⚠️ WRONG JAMB SUBJECT COMBINATION',
        badge: 'DISQUALIFIED BY JAMB',
        bgColor: 'bg-red-50 text-red-900 border-red-300',
        badgeColor: 'bg-red-600 text-white',
        details: `Your chosen UTME subjects do not match the mandatory requirement for ${currentCourse.name}. Missing: ${missingUtme.join(', ')}. Registering this combination will result in immediate disqualification during admission processing!`
      };
    }

    if (missingWaec.length > 0 || sittingViolation) {
      return {
        status: 'caution',
        title: '🟡 CONDITIONAL / WAIVER CAUTION',
        badge: 'O-LEVEL / SITTING ISSUE',
        bgColor: 'bg-amber-50 text-amber-900 border-amber-300',
        badgeColor: 'bg-amber-600 text-white',
        details: sittingViolation
          ? `${currentUniversity.shortName} strictly requires 5 credits at ONE SITTING for ${currentCourse.name}. You indicated 2 sittings.`
          : `You may be missing compulsory O-Level credit passes in: ${missingWaec.join(', ')}.`
      };
    }

    return {
      status: 'eligible',
      title: '🎉 100% ELIGIBLE FOR ADMISSION',
      badge: 'VERIFIED ELIGIBLE',
      bgColor: 'bg-emerald-50 text-emerald-900 border-emerald-300',
      badgeColor: 'bg-emerald-600 text-white',
      details: `Congratulations! Your 4 UTME subjects and O-Level credits completely satisfy the official JAMB IBASS and ${currentUniversity.shortName} requirements for ${currentCourse.name} (${currentCourse.degree}).`
    };
  }, [currentCourse, currentUniversity, studentUtmeSubjects, studentWaecCredits, studentSittings]);

  const toggleStudentUtme = (subject: string) => {
    if (studentUtmeSubjects.includes(subject)) {
      setStudentUtmeSubjects(studentUtmeSubjects.filter((s) => s !== subject));
    } else {
      if (studentUtmeSubjects.length < 4) {
        setStudentUtmeSubjects([...studentUtmeSubjects, subject]);
      } else {
        setStudentUtmeSubjects([...studentUtmeSubjects.slice(1), subject]);
      }
    }
  };

  const toggleStudentWaec = (subject: string) => {
    if (studentWaecCredits.includes(subject)) {
      setStudentWaecCredits(studentWaecCredits.filter((s) => s !== subject));
    } else {
      setStudentWaecCredits([...studentWaecCredits, subject]);
    }
  };

  const handlePracticeThis = () => {
    if (onPracticeCourse) {
      onPracticeCourse([
        currentCourse.jambSubjects.compulsory,
        ...currentCourse.jambSubjects.subjects
      ]);
    }
  };

  return (
    <div className="w-full space-y-3 text-left">
      {/* ─── Step 1 & Step 2: Course & University Selectors ─── */}
      <div className="bg-white rounded-xl p-4 border border-[#E8E8E8] shadow-xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Step 1: Course Selection */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-[#001028] uppercase tracking-wider flex items-center space-x-1">
              <span className="w-5 h-5 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center text-[10px]">
                1
              </span>
              <span>Desired Course of Study:</span>
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-[#001028] focus:outline-none focus:border-[#001028] focus:ring-1 focus:ring-[#001028] cursor-pointer"
            >
              {JAMB_BROCHURE_COURSES.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name} ({course.degree}) — {course.faculty}
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: University Selection */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-[#001028] uppercase tracking-wider flex items-center space-x-1">
              <span className="w-5 h-5 rounded-full bg-[#001028] text-[#F8C800] flex items-center justify-center text-[10px]">
                2
              </span>
              <span>Selected University / Institution:</span>
            </label>
            <select
              value={selectedUniId}
              onChange={(e) => setSelectedUniId(e.target.value)}
              className="w-full bg-[#F8F9FA] border border-[#CBD5E1] rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-[#001028] focus:outline-none focus:border-[#001028] focus:ring-1 focus:ring-[#001028] cursor-pointer"
            >
              {NIGERIAN_UNIVERSITIES.map((uni) => (
                <option key={uni.id} value={uni.id}>
                  {uni.name} ({uni.shortName}) — {uni.state} ({uni.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Course Summary Pill Bar */}
        <div className="p-3 bg-[#F8F9FA] rounded-xl border border-[#E8ECEF] flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-[#001028]">
              🎓 {currentCourse.name}
            </span>
            <span className="text-[#607080]">at</span>
            <span className="font-bold text-[#001028] bg-white px-2 py-0.5 rounded-md border border-[#E0E0E0]">
              🏛️ {currentUniversity.shortName}
            </span>
          </div>
          <div className="flex items-center space-x-1.5 text-[11px] text-[#607080]">
            <span>Average Cut-Off:</span>
            <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {Math.max(currentCourse.cutOffAverage || 200, currentUniversity.cutOffAverage)}+
            </span>
          </div>
        </div>
      </div>

      {/* ─── The Official Requirements Display Card ─── */}
      <div className="bg-white rounded-[22px] p-4 sm:p-5 border border-[#E8E8E8] shadow-sm space-y-4 text-left">
        <div className="flex items-center justify-between border-b border-[#F0F0F0] pb-2.5">
          <div className="flex items-center space-x-2">
            <span className="text-base">📌</span>
            <h3 className="text-sm font-bold text-[#001028]">
              Official Requirements for {currentCourse.name} at {currentUniversity.shortName}
            </h3>
          </div>
          <span className="text-[10px] font-bold text-[#001028] bg-[#F8C800] px-2 py-0.5 rounded-full">
            IBASS VERIFIED
          </span>
        </div>

        {/* 1. Compulsory 4 UTME Subjects */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#001028] uppercase tracking-wider block">
            1. Compulsory 4 JAMB UTME Subject Combination:
          </span>
          <div className="flex flex-wrap gap-2">
            {/* Subject 1: English (Gold) */}
            <div className="px-3 py-1.5 rounded-xl bg-[#F8C800] text-[#001028] font-black text-xs flex items-center space-x-1.5 shadow-sm border border-[#e2b700]">
              <span className="bg-[#001028] text-white text-[10px] px-1 rounded font-bold">1</span>
              <span>{currentCourse.jambSubjects.compulsory}</span>
              <span className="text-[9px] text-black/60 font-bold">(Compulsory)</span>
            </div>

            {/* Subjects 2, 3, 4 (Navy) */}
            {currentCourse.jambSubjects.subjects.map((sub, idx) => (
              <div
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-[#001028] text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm"
              >
                <span className="bg-[#F8C800] text-[#001028] text-[10px] px-1.5 rounded font-black">
                  {idx + 2}
                </span>
                <span>{sub}</span>
              </div>
            ))}
          </div>
          {currentCourse.jambSubjects.note && (
            <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-xl border border-amber-200 mt-1">
              ⚠️ {currentCourse.jambSubjects.note}
            </p>
          )}
        </div>

        {/* 2. Required WAEC/NECO 5 Credits */}
        <div className="space-y-1.5 pt-2 border-t border-[#F0F0F0]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#001028] uppercase tracking-wider">
              2. Required WAEC / NECO O-Level Credits:
            </span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {currentCourse.oLevelRequirements.sittings}
            </span>
          </div>
          <p className="text-xs text-[#405060] leading-relaxed">
            {currentCourse.oLevelRequirements.details}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {currentCourse.oLevelRequirements.subjects.map((sub, i) => (
              <span
                key={i}
                className="bg-[#F8F9FA] text-[#001028] font-bold text-xs px-2.5 py-1 rounded-lg border border-[#E0E0E0]"
              >
                ✓ {sub}
              </span>
            ))}
          </div>
        </div>

        {/* 3. Special School Waiver & Remarks */}
        <div className="bg-[#001028]/5 p-3.5 rounded-2xl border border-[#001028]/10 space-y-1 text-xs">
          <span className="font-extrabold text-[#001028] flex items-center space-x-1">
            <span>🏛️</span>
            <span>{currentUniversity.shortName} Specific Waiver &amp; Admission Notes:</span>
          </span>
          <p className="text-[#334155] leading-relaxed pt-0.5">
            {schoolWaiver}
          </p>
        </div>

        {/* Card Actions */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#F0F0F0]">
          <button
            type="button"
            onClick={() => setIsSelfCheckOpen(!isSelfCheckOpen)}
            className="text-xs font-bold text-[#001028] bg-[#F0F2F5] hover:bg-slate-200 px-3 py-2 rounded-xl transition cursor-pointer flex items-center space-x-1.5"
          >
            <span>{isSelfCheckOpen ? '✕ Close Evaluation' : '🔍 Check My Real Eligibility →'}</span>
          </button>

          <button
            type="button"
            onClick={handlePracticeThis}
            className="px-3.5 py-2 rounded-xl bg-[#F8C800] hover:bg-[#FFD21F] text-[#001028] font-bold text-xs flex items-center space-x-1.5 transition cursor-pointer active:scale-95 shadow-sm"
          >
            <span>⚡</span>
            <span>Practice These 4 Subjects</span>
          </button>
        </div>
      </div>

      {/* ─── Interactive Student Self-Evaluation Section ─── */}
      {isSelfCheckOpen && (
        <div className="bg-white rounded-[22px] p-4 sm:p-5 border-2 border-[#001028] shadow-md space-y-4 animate-in fade-in text-left">
          <div className="flex items-center justify-between border-b border-[#E8E8E8] pb-2">
            <div>
              <h3 className="text-sm font-bold text-[#001028]">
                Student Live Eligibility Checker
              </h3>
              <p className="text-[11px] text-[#607080]">
                Select the subjects you intend to register to verify whether {currentUniversity.shortName} will accept you!
              </p>
            </div>
            <span className="text-xs font-bold text-[#001028] bg-[#F8C800]/20 px-2.5 py-0.5 rounded-full border border-[#F8C800]">
              Step-by-Step Match
            </span>
          </div>

          {/* Sittings selector */}
          <div className="flex items-center space-x-3 text-xs">
            <span className="font-bold text-[#001028]">Number of O-Level Sittings:</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setStudentSittings(1)}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                  studentSittings === 1
                    ? 'bg-[#001028] text-white'
                    : 'bg-[#F0F2F5] text-[#001028]'
                }`}
              >
                1 Sitting
              </button>
              <button
                type="button"
                onClick={() => setStudentSittings(2)}
                className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
                  studentSittings === 2
                    ? 'bg-[#001028] text-white'
                    : 'bg-[#F0F2F5] text-[#001028]'
                }`}
              >
                2 Sittings
              </button>
            </div>
          </div>

          {/* Student UTME Subjects Picker */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#001028] block">
              Pick Your 4 Planned JAMB Subjects ({studentUtmeSubjects.length}/4 selected):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {COMMON_WAEC_SUBJECTS.map((sub) => {
                const isSelected = studentUtmeSubjects.includes(sub);
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => toggleStudentUtme(sub)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#001028] text-[#F8C800] shadow-sm font-bold'
                        : 'bg-[#F0F2F5] text-[#001028] hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Student WAEC Credits Picker */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#001028] block">
              Select Your Passed WAEC / NECO Credits (Minimum 5 required):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {COMMON_WAEC_SUBJECTS.map((sub) => {
                const isSelected = studentWaecCredits.includes(sub);
                return (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => toggleStudentWaec(sub)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white shadow-sm font-bold'
                        : 'bg-[#F0F2F5] text-[#001028] hover:bg-slate-200'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── LIVE VERDICT DISPLAY ─── */}
          <div className={`p-4 rounded-2xl border-2 ${eligibilityVerdict.bgColor} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${eligibilityVerdict.badgeColor}`}>
                {eligibilityVerdict.badge}
              </span>
              <span className="text-xs font-extrabold">
                {currentCourse.name} @ {currentUniversity.shortName}
              </span>
            </div>
            <h4 className="text-sm font-bold leading-tight">
              {eligibilityVerdict.title}
            </h4>
            <p className="text-xs leading-relaxed">
              {eligibilityVerdict.details}
            </p>
          </div>
        </div>
      )}

      {/* LiveKit Mentor Modal */}
      <LiveKitMentorModal
        isOpen={isMentorOpen}
        onClose={() => setIsMentorOpen(false)}
        initialCourse={currentCourse}
        onSelectCourseForPractice={(subs) => {
          if (onPracticeCourse) onPracticeCourse(subs);
        }}
      />
    </div>
  );
};

export default CourseEligibilityChecker;
