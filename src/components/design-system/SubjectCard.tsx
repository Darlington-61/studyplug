import React from 'react';

export interface SubjectConfig {
  id: string;
  name: string;
  topicsCount: number;
  questionsCount: number;
  color: string; // Hex color from design system
  iconType: 'math' | 'english' | 'physics' | 'chemistry' | 'biology' | 'government' | 'history' | 'economics' | 'general';
}

interface SubjectCardProps {
  subject: SubjectConfig;
  onClick: () => void;
}

export const getSubjectColor = (subjectName: string): string => {
  const norm = subjectName.toLowerCase();
  if (norm.includes('math')) return '#16A34A';
  if (norm.includes('english')) return '#E91E63';
  if (norm.includes('physic')) return '#2563EB';
  if (norm.includes('chem')) return '#7E22CE';
  if (norm.includes('bio') || norm.includes('agric')) return '#F59E0B';
  if (norm.includes('gov') || norm.includes('civic')) return '#008C95';
  if (norm.includes('hist') || norm.includes('crs') || norm.includes('relig')) return '#673AB7';
  if (norm.includes('econ') || norm.includes('comm') || norm.includes('acc')) return '#F4C20D';
  return '#16A34A';
};

export const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  const color = subject.color || getSubjectColor(subject.name);

  const renderIcon = () => {
    switch (subject.iconType) {
      case 'math':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        );
      case 'english':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        );
      case 'physics':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="2" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />
            <path d="M4.93 4.93c4.24 4.24 9.9 4.24 14.14 0" />
          </svg>
        );
      case 'chemistry':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M10 2v7.31L4.1 19.1A2 2 0 0 0 5.8 22h12.4a2 2 0 0 0 1.7-2.9L14 9.31V2" />
            <line x1="8" y1="2" x2="16" y2="2" />
            <line x1="7" y1="17" x2="17" y2="17" />
          </svg>
        );
      case 'biology':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        );
      case 'government':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="3" y1="21" x2="21" y2="21" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <polyline points="5 6 12 3 19 6" />
            <line x1="4" y1="10" x2="4" y2="21" />
            <line x1="20" y1="10" x2="20" y2="21" />
            <line x1="8" y1="14" x2="8" y2="17" />
            <line x1="12" y1="14" x2="12" y2="17" />
            <line x1="16" y1="14" x2="16" y2="17" />
          </svg>
        );
      case 'history':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case 'economics':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className="w-full bg-white rounded-[14px] p-3.5 border border-[#E4EAE8] shadow-subtle hover:border-[#D0DBD8] hover:shadow-floating transition-all duration-150 flex items-center justify-between cursor-pointer group active:scale-[0.99]"
    >
      <div className="flex items-center space-x-3.5">
        {/* Rounded 12px Icon Container */}
        <div
          className="w-10 h-10 rounded-[12px] flex items-center justify-center text-white shrink-0 shadow-xs"
          style={{ backgroundColor: color }}
        >
          {renderIcon()}
        </div>

        {/* Title and counts */}
        <div className="text-left">
          <h3 className="font-semibold text-[14px] sm:text-[15px] text-[#10201D] leading-snug group-hover:text-[#004D40] transition">
            {subject.name}
          </h3>
          <p className="text-[11px] sm:text-[12px] text-[#66736F] font-normal mt-0.5">
            {subject.topicsCount} topics • {subject.questionsCount} questions
          </p>
        </div>
      </div>

      {/* Right subtle arrow */}
      <span className="text-[#8A9692] text-sm group-hover:text-[#10201D] group-hover:translate-x-0.5 transition">
        ›
      </span>
    </div>
  );
};
