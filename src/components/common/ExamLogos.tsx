import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Official JAMB Logo (Joint Admissions and Matriculation Board)
 * Forest Green & Golden Eagle with Open Book
 */
export const JambLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#0D5C3A" stroke="#FFCC00" strokeWidth="4" />
    <circle cx="50" cy="50" r="41" fill="#093823" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="3 2" />
    {/* Eagle Head & Wings at Top */}
    <path d="M50 18 L55 26 L64 22 L61 30 L69 32 L59 38 L50 32 L41 38 L31 32 L39 30 L36 22 L45 26 Z" fill="#FFCC00" />
    {/* Open Book */}
    <path d="M28 48 Q50 44 50 56 Q50 44 72 48 L70 70 Q50 66 50 76 Q50 66 30 70 Z" fill="#FFFFFF" stroke="#FFCC00" strokeWidth="2" />
    <line x1="50" y1="56" x2="50" y2="76" stroke="#0D5C3A" strokeWidth="2" />
    {/* Text JAMB */}
    <rect x="30" y="78" width="40" height="13" rx="3" fill="#FFCC00" />
    <text x="50" y="88" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#061710" textAnchor="middle">JAMB</text>
  </svg>
);

/**
 * Official WAEC Logo (West African Examinations Council)
 * Deep Navy Blue with Gold Radiating Knot Sunburst
 */
export const WaecLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#00205B" stroke="#FFD700" strokeWidth="4" />
    <circle cx="50" cy="50" r="42" fill="#001845" />
    {/* WAEC Traditional Sunburst Knot Star */}
    <g fill="#FFD700" stroke="#B8860B" strokeWidth="0.8">
      <polygon points="50,14 55,34 68,22 60,38 78,35 64,46 84,50 64,54 78,65 60,62 68,78 55,66 50,86 45,66 32,78 40,62 22,65 36,54 16,50 36,46 22,35 40,38 32,22 45,34" />
    </g>
    {/* Center Seal */}
    <circle cx="50" cy="50" r="22" fill="#00205B" stroke="#FFD700" strokeWidth="2" />
    <text x="50" y="54" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="0.5">WAEC</text>
  </svg>
);

/**
 * Official WAEC GCE Logo (Private Candidates)
 * WAEC Emblem with Distinctive Crimson GCE Ribbon
 */
export const WaecGceLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#00205B" stroke="#FFD700" strokeWidth="3.5" />
    <g fill="#FFD700">
      <polygon points="50,16 54,32 66,24 59,36 74,36 62,45 78,50 62,55 74,64 59,64 66,76 54,68 50,84 46,68 34,76 41,64 26,64 38,55 22,50 38,45 26,36 41,36 34,24 46,32" opacity="0.9" />
    </g>
    <circle cx="50" cy="46" r="18" fill="#001845" stroke="#FFD700" strokeWidth="1.5" />
    <text x="50" y="50" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#FFFFFF" textAnchor="middle">WAEC</text>
    {/* GCE Banner Ribbon */}
    <path d="M16 68 L84 68 L78 88 L22 88 Z" fill="#DC2626" stroke="#FFD700" strokeWidth="2" />
    <text x="50" y="82" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="900" fill="#FFCC00" textAnchor="middle" letterSpacing="1">GCE</text>
  </svg>
);

/**
 * Official NECO Logo (National Examinations Council)
 * Emerald Green & Gold Ring with Torch of Knowledge & Open Book
 */
export const NecoLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#064E3B" stroke="#F59E0B" strokeWidth="4" />
    <circle cx="50" cy="50" r="42" fill="#022C22" />
    {/* Torch Flames in Gold */}
    <path d="M50 16 Q58 26 54 34 Q50 38 50 44 Q50 38 46 34 Q42 26 50 16 Z" fill="#F59E0B" stroke="#FBBF24" strokeWidth="1" />
    <polygon points="46,44 54,44 52,56 48,56" fill="#F59E0B" />
    {/* Open Book */}
    <path d="M26 54 Q50 50 50 60 Q50 50 74 54 L72 74 Q50 70 50 78 Q50 70 28 74 Z" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" />
    <line x1="50" y1="60" x2="50" y2="78" stroke="#064E3B" strokeWidth="2" />
    {/* Text NECO */}
    <rect x="28" y="80" width="44" height="13" rx="3" fill="#F59E0B" />
    <text x="50" y="90" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="900" fill="#022C22" textAnchor="middle">NECO</text>
  </svg>
);

/**
 * Official NECO GCE Logo (Nov/Dec Private)
 * NECO Crest with Amber GCE Banner
 */
export const NecoGceLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="48" fill="#064E3B" stroke="#F59E0B" strokeWidth="3.5" />
    <path d="M50 18 Q56 26 53 32 Q50 36 50 40 Q50 36 47 32 Q44 26 50 18 Z" fill="#F59E0B" />
    <path d="M28 44 Q50 40 50 50 Q50 40 72 44 L70 64 Q50 60 50 68 Q50 60 30 64 Z" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.5" />
    {/* GCE Banner Ribbon */}
    <path d="M16 68 L84 68 L78 88 L22 88 Z" fill="#D97706" stroke="#FFCC00" strokeWidth="2" />
    <text x="50" y="82" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="1">GCE</text>
  </svg>
);

/**
 * POST-UTME Screening Logo (Universities & Polytechnics)
 * Academic Pillars, Graduation Mortarboard & Gold Laurels
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

export type ExamType = 'JAMB' | 'WAEC' | 'WAEC GCE' | 'NECO' | 'NECO GCE' | 'POST UTME' | 'BECE';

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
