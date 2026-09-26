import React from 'react';
import {
  OFFICIAL_LOGO_JAMB,
  OFFICIAL_LOGO_WAEC,
  OFFICIAL_LOGO_NECO,
  OFFICIAL_LOGO_NABTEB
} from '../../data/examLogosData';

interface LogoProps {
  className?: string;
}

/**
 * Official JAMB Logo (Joint Admissions and Matriculation Board)
 * Real Authentic Official Crest Seal
 */
export const JambLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <img
    src={OFFICIAL_LOGO_JAMB}
    alt="JAMB Official Logo"
    className={`${className} object-contain`}
  />
);

/**
 * Official WAEC Logo (West African Examinations Council)
 * Real Authentic Official Radiating Sunburst Emblem
 */
export const WaecLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <img
    src={OFFICIAL_LOGO_WAEC}
    alt="WAEC Official Logo"
    className={`${className} object-contain`}
  />
);

/**
 * Official WAEC GCE Logo (Private Candidates)
 * Official WAEC Emblem with GCE Crimson Accent
 */
export const WaecGceLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <div className="relative inline-flex items-center justify-center">
    <img
      src={OFFICIAL_LOGO_WAEC}
      alt="WAEC GCE Official Logo"
      className={`${className} object-contain`}
    />
    <span className="absolute -bottom-1 right-0 text-[8px] font-black bg-red-600 text-white px-1 rounded shadow-xs">
      GCE
    </span>
  </div>
);

/**
 * Official NECO Logo (National Examinations Council)
 * Real Authentic Official Crest Seal
 */
export const NecoLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <img
    src={OFFICIAL_LOGO_NECO}
    alt="NECO Official Logo"
    className={`${className} object-contain rounded-full shadow-xs`}
  />
);

/**
 * Official NECO GCE Logo (Nov/Dec Private Candidates)
 */
export const NecoGceLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <div className="relative inline-flex items-center justify-center">
    <img
      src={OFFICIAL_LOGO_NECO}
      alt="NECO GCE Official Logo"
      className={`${className} object-contain rounded-full`}
    />
    <span className="absolute -bottom-1 right-0 text-[8px] font-black bg-amber-600 text-white px-1 rounded shadow-xs">
      GCE
    </span>
  </div>
);

/**
 * Official NABTEB Logo (National Business and Technical Examinations Board)
 * Real Authentic Technical Cogwheel, Book and Torch Emblem
 */
export const NabtebLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <img
    src={OFFICIAL_LOGO_NABTEB}
    alt="NABTEB Official Logo"
    className={`${className} object-contain`}
  />
);

/**
 * POST-UTME Screening Logo (Universities & Polytechnics)
 * Academic Mortarboard & Pillars Crest
 */
export const PostUtmeLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#4C1D95" stroke="#FFCC00" strokeWidth="4" />
    <circle cx="50" cy="50" r="42" fill="#2E1065" />
    {/* Academic Mortarboard Cap */}
    <path d="M50 20 L76 30 L50 40 L24 30 Z" fill="#FFCC00" stroke="#F59E0B" strokeWidth="1.5" />
    <polygon points="40,36 60,36 58,45 42,45" fill="#E9D5FF" />
    <line x1="72" y1="31" x2="74" y2="44" stroke="#FFCC00" strokeWidth="2" />
    <circle cx="74" cy="45" r="2" fill="#FFCC00" />
    {/* University Classical Pillars */}
    <rect x="34" y="50" width="6" height="22" fill="#FFFFFF" rx="1" />
    <rect x="47" y="50" width="6" height="22" fill="#FFFFFF" rx="1" />
    <rect x="60" y="50" width="6" height="22" fill="#FFFFFF" rx="1" />
    <rect x="30" y="47" width="40" height="4" fill="#FFCC00" rx="1" />
    <rect x="28" y="72" width="44" height="4" fill="#FFCC00" rx="1" />
    {/* Label POST UTME */}
    <rect x="18" y="78" width="64" height="14" rx="3" fill="#FFCC00" />
    <text x="50" y="88" fontFamily="Arial, sans-serif" fontSize="7.5" fontWeight="900" fill="#2E1065" textAnchor="middle" letterSpacing="0.5">POST-UTME</text>
  </svg>
);

/**
 * BECE Logo (Basic Education Certificate Examination - Junior WAEC)
 * Education Shield with Open Scroll & Knowledge Torch
 */
export const BeceLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#0E7490" stroke="#FFCC00" strokeWidth="4" />
    <circle cx="50" cy="50" r="42" fill="#155E75" />
    {/* Shield Shape */}
    <path d="M50 20 Q70 20 70 42 Q70 64 50 76 Q30 64 30 42 Q30 20 50 20 Z" fill="#FFFFFF" stroke="#FFCC00" strokeWidth="2" />
    {/* Scroll & Torch inside */}
    <path d="M42 34 Q50 30 58 34 L56 58 Q50 54 44 58 Z" fill="#FEF3C7" stroke="#0E7490" strokeWidth="1" />
    <circle cx="50" cy="38" r="4" fill="#E11D48" />
    {/* BECE Ribbon */}
    <rect x="24" y="78" width="52" height="13" rx="3" fill="#FFCC00" />
    <text x="50" y="88" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#083344" textAnchor="middle" letterSpacing="1">BECE</text>
  </svg>
);

export type ExamType = 'JAMB' | 'WAEC' | 'WAEC GCE' | 'NECO' | 'NECO GCE' | 'NABTEB' | 'POST UTME' | 'BECE';

export interface ExamInfo {
  id: ExamType;
  fullName: string;
  shortDesc: string;
  badgeText: string;
  Logo: React.FC<LogoProps>;
}

export const EXAM_CATALOG: ExamInfo[] = [
  {
    id: 'JAMB',
    fullName: 'JAMB UTME',
    shortDesc: 'Joint Admissions & Matriculation Board',
    badgeText: 'JAMB UTME',
    Logo: JambLogo
  },
  {
    id: 'WAEC',
    fullName: 'WAEC SSCE',
    shortDesc: 'Senior School Certificate Examination (School)',
    badgeText: 'WAEC SSCE',
    Logo: WaecLogo
  },
  {
    id: 'WAEC GCE',
    fullName: 'WAEC GCE',
    shortDesc: 'Nov/Dec Private Candidates GCE',
    badgeText: 'WAEC GCE',
    Logo: WaecGceLogo
  },
  {
    id: 'NECO',
    fullName: 'NECO SSCE',
    shortDesc: 'National Examinations Council (School)',
    badgeText: 'NECO SSCE',
    Logo: NecoLogo
  },
  {
    id: 'NECO GCE',
    fullName: 'NECO GCE',
    shortDesc: 'Nov/Dec Private Candidates GCE',
    badgeText: 'NECO GCE',
    Logo: NecoGceLogo
  },
  {
    id: 'NABTEB',
    fullName: 'NABTEB NBC/NTC',
    shortDesc: 'National Business & Technical Examinations Board',
    badgeText: 'NABTEB NBC/NTC',
    Logo: NabtebLogo
  },
  {
    id: 'POST UTME',
    fullName: 'POST UTME',
    shortDesc: 'Universities & Polytechnics Screening',
    badgeText: 'POST UTME',
    Logo: PostUtmeLogo
  },
  {
    id: 'BECE',
    fullName: 'BECE (Junior WAEC)',
    shortDesc: 'Basic Education Certificate Exam',
    badgeText: 'BECE',
    Logo: BeceLogo
  }
];

export const getExamLogo = (examId: string): React.FC<LogoProps> => {
  const found = EXAM_CATALOG.find(e => e.id === examId);
  return found ? found.Logo : JambLogo;
};
