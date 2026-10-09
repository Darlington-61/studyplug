/**
 * Official Directory of Accredited Nigerian Tertiary Institutions
 * Sourced from JAMB IBASS (Integrated Brochure and Syllabus System - ibass.jamb.gov.ng)
 * and National Universities Commission (NUC).
 */

export interface SchoolCourseRequirement {
  courseId: string;
  courseName: string;
  degree: string;
  cutOffBenchmark?: number;
  maxSittings: 1 | 2;
  utmeSubjects: string[];
  waecCredits: string[];
  schoolSpecificWaiver?: string;
}

export interface UniversityItem {
  id: string;
  name: string;
  shortName: string;
  category: 'Federal' | 'State' | 'Private';
  state: string;
  geopoliticalZone: 'South West' | 'South East' | 'South South' | 'North Central' | 'North West' | 'North East';
  campusLocation: string;
  establishedYear: number;
  website: string;
  cutOffAverage: number;
  popular: boolean;
  degreeTypes: string[];
  coursesOffered: string[]; // List of course IDs or names
  schoolSpecificWaivers: Record<string, string>; // courseId -> specific waiver text
}

export const NIGERIAN_UNIVERSITIES: UniversityItem[] = [
  // ─── SOUTH WEST ────────────────────────────────────────────────────────
  {
    id: 'unilag',
    name: 'University of Lagos',
    shortName: 'UNILAG',
    category: 'Federal',
    state: 'Lagos',
    geopoliticalZone: 'South West',
    campusLocation: 'Akoka, Yaba, Lagos State',
    establishedYear: 1962,
    website: 'https://unilag.edu.ng',
    cutOffAverage: 250,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'dentistry', 'medical-laboratory-science', 'radiography', 'physiotherapy',
      'computer-engineering', 'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'chemical-engineering', 'petroleum-gas-engineering',
      'computer-science', 'cyber-security', 'software-engineering', 'data-science', 'artificial-intelligence', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration', 'mass-communication', 'banking-finance',
      'english-literary-studies', 'history-international-studies'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'UNILAG requires 5 O-Level credit passes in English, Mathematics, Biology, Chemistry, and Physics at ONE sitting only. UTME: English, Biology, Chemistry, Physics.',
      'nursing-science': 'UNILAG accepts only ONE sitting in SSC. Physics is compulsory in UTME alongside Biology and Chemistry.',
      'computer-science': 'UNILAG requires English, Mathematics, Physics, and Chemistry in UTME. O-Level Further Mathematics credit is strongly recommended.',
      'law': 'UNILAG requires credit in Mathematics at O-Level. In UTME, Literature in English and Government are compulsory electives.',
      'accounting': 'UNILAG requires credit in Mathematics, Economics, and English. UTME subjects: English, Mathematics, Economics, and any Social Science subject.'
    }
  },
  {
    id: 'ui',
    name: 'University of Ibadan',
    shortName: 'UI',
    category: 'Federal',
    state: 'Oyo',
    geopoliticalZone: 'South West',
    campusLocation: 'Ibadan, Oyo State',
    establishedYear: 1948,
    website: 'https://ui.edu.ng',
    cutOffAverage: 260,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.', 'B.Agric.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'dentistry', 'medical-laboratory-science', 'physiotherapy',
      'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'agricultural-bioresources-engineering',
      'computer-science', 'biochemistry', 'microbiology', 'geology',
      'law', 'accounting', 'economics', 'political-science',
      'english-literary-studies', 'theatre-arts', 'philosophy', 'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': "Premier University strictly mandates 5 O-Level credits in English, Maths, Physics, Chem, Bio at ONE SITTING ONLY. UTME cutoff typically 285+. Mathematics is strictly disqualified as an alternative to pure sciences.",
      'pharmacy': 'UI requires 5 credits at ONE sitting. UTME: English, Biology, Chemistry, Physics.',
      'law': 'UI mandates Literature in English in UTME and O-Level. Cutoff is extremely competitive (270+).',
      'economics': 'UI requires Mathematics, Economics, and any Social Science or Arts subject in UTME.',
      'computer-science': 'UI mandates English, Mathematics, Physics, and Chemistry/Biology in UTME.'
    }
  },
  {
    id: 'oau',
    name: 'Obafemi Awolowo University',
    shortName: 'OAU',
    category: 'Federal',
    state: 'Osun',
    geopoliticalZone: 'South West',
    campusLocation: 'Ile-Ife, Osun State',
    establishedYear: 1961,
    website: 'https://oauife.edu.ng',
    cutOffAverage: 250,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.', 'B.Agric.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'dentistry', 'medical-laboratory-science',
      'computer-engineering', 'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'chemical-engineering',
      'computer-science', 'cyber-security', 'software-engineering', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration', 'international-relations',
      'english-literary-studies', 'theatre-arts', 'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'OAU does NOT accept two sittings for College of Health Sciences. Cut-off benchmark is 275+.',
      'law': 'OAU mandates Literature in English in both UTME and O-Level. Pass in Mathematics is compulsory.',
      'computer-engineering': 'OAU strictly requires Physics, Chemistry, and Mathematics in UTME.',
      'nursing-science': 'OAU requires Physics, Chemistry, and Biology. WAEC credit in English, Maths, Phys, Chem, Bio at 1 sitting.'
    }
  },
  {
    id: 'lasu',
    name: 'Lagos State University',
    shortName: 'LASU',
    category: 'State',
    state: 'Lagos',
    geopoliticalZone: 'South West',
    campusLocation: 'Ojo, Lagos State',
    establishedYear: 1983,
    website: 'https://lasu.edu.ng',
    cutOffAverage: 220,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'B.N.Sc.'],
    coursesOffered: [
      'medicine-surgery', 'nursing-science', 'dentistry',
      'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering',
      'computer-science', 'software-engineering', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration', 'mass-communication', 'banking-finance',
      'english-literary-studies', 'history-international-studies'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'LASU accepts two sittings in WAEC/NECO for Medicine, provided all 5 credits are met.',
      'law': 'LASU requires Literature in English and Government. Credit in Mathematics is compulsory.',
      'mass-communication': 'LASU requires English, Literature in English, and any two Arts or Social Science subjects.'
    }
  },
  {
    id: 'covenant',
    name: 'Covenant University',
    shortName: 'CU',
    category: 'Private',
    state: 'Ogun',
    geopoliticalZone: 'South West',
    campusLocation: 'Canaan Land, Ota, Ogun State',
    establishedYear: 2002,
    website: 'https://covenantuniversity.edu.ng',
    cutOffAverage: 200,
    popular: true,
    degreeTypes: ['B.Sc.', 'B.Eng.', 'B.A.'],
    coursesOffered: [
      'computer-engineering', 'electrical-electronics-engineering', 'mechanical-engineering', 'civil-engineering', 'chemical-engineering',
      'computer-science', 'cyber-security', 'software-engineering', 'data-science', 'artificial-intelligence', 'biochemistry', 'microbiology',
      'accounting', 'economics', 'business-administration', 'mass-communication', 'banking-finance', 'marketing',
      'english-literary-studies'
    ],
    schoolSpecificWaivers: {
      'computer-science': 'Covenant requires Mathematics, Physics, and Chemistry/Computer Studies in UTME with strong analytical foundation.',
      'accounting': 'Covenant requires Mathematics, Economics, and any Social Science subject.'
    }
  },
  {
    id: 'futa',
    name: 'Federal University of Technology, Akure',
    shortName: 'FUTA',
    category: 'Federal',
    state: 'Ondo',
    geopoliticalZone: 'South West',
    campusLocation: 'Akure, Ondo State',
    establishedYear: 1981,
    website: 'https://futa.edu.ng',
    cutOffAverage: 230,
    popular: true,
    degreeTypes: ['B.Tech.', 'B.Eng.', 'B.Agric.Tech.'],
    coursesOffered: [
      'computer-engineering', 'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'chemical-engineering', 'mechatronics-engineering',
      'computer-science', 'cyber-security', 'software-engineering', 'data-science', 'biochemistry', 'microbiology', 'geology',
      'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'computer-science': 'FUTA requires English, Mathematics, Physics, and Chemistry. Biology is NOT accepted in place of Chemistry.',
      'cyber-security': 'FUTA requires English, Mathematics, Physics, and Chemistry.'
    }
  },
  {
    id: 'unilorin',
    name: 'University of Ilorin',
    shortName: 'UNILORIN',
    category: 'Federal',
    state: 'Kwara',
    geopoliticalZone: 'North Central',
    campusLocation: 'Ilorin, Kwara State',
    establishedYear: 1975,
    website: 'https://unilorin.edu.ng',
    cutOffAverage: 240,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.', 'B.Agric.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'medical-laboratory-science',
      'computer-engineering', 'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'chemical-engineering',
      'computer-science', 'cyber-security', 'software-engineering', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration', 'mass-communication', 'banking-finance',
      'english-literary-studies', 'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'UNILORIN requires 5 credits at ONE sitting in English, Maths, Phys, Chem, Bio. Cutoff typically 270+.',
      'nursing-science': 'UNILORIN mandates Physics, Chemistry, Biology in UTME. One sitting preferred.',
      'law': 'UNILORIN requires Literature in English and any two Arts or Social Science subjects.'
    }
  },

  // ─── SOUTH EAST ────────────────────────────────────────────────────────
  {
    id: 'unn',
    name: 'University of Nigeria, Nsukka',
    shortName: 'UNN',
    category: 'Federal',
    state: 'Enugu',
    geopoliticalZone: 'South East',
    campusLocation: 'Nsukka & Enugu Campus, Enugu State',
    establishedYear: 1960,
    website: 'https://unn.edu.ng',
    cutOffAverage: 250,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.', 'B.Agric.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'dentistry', 'medical-laboratory-science', 'radiography', 'physiotherapy',
      'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'agricultural-bioresources-engineering',
      'computer-science', 'cyber-security', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration', 'mass-communication', 'banking-finance', 'marketing',
      'english-literary-studies', 'history-international-studies', 'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'UNN requires 5 O-Level credits in English, Maths, Physics, Chemistry, Biology at not more than one sitting.',
      'pharmacy': 'UNN requires English, Physics, Chemistry, Biology in UTME.',
      'law': 'UNN mandates Literature in English in both UTME and WAEC. Accepts CRS as 4th UTME subject.',
      'nursing-science': 'UNN mandates pure sciences (Phys, Chem, Bio) in UTME.'
    }
  },
  {
    id: 'futo',
    name: 'Federal University of Technology, Owerri',
    shortName: 'FUTO',
    category: 'Federal',
    state: 'Imo',
    geopoliticalZone: 'South East',
    campusLocation: 'Ihiagwa, Owerri, Imo State',
    establishedYear: 1980,
    website: 'https://futo.edu.ng',
    cutOffAverage: 220,
    popular: true,
    degreeTypes: ['B.Tech.', 'B.Eng.', 'B.Sc.'],
    coursesOffered: [
      'computer-engineering', 'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'chemical-engineering', 'petroleum-gas-engineering', 'mechatronics-engineering',
      'computer-science', 'cyber-security', 'software-engineering', 'data-science', 'biochemistry', 'microbiology', 'geology',
      'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'petroleum-gas-engineering': 'FUTO requires English, Mathematics, Physics, and Chemistry in UTME. O-Level credit in Further Maths advantageous.',
      'computer-science': 'FUTO mandates Physics, Chemistry, Mathematics in UTME.'
    }
  },

  // ─── SOUTH SOUTH ───────────────────────────────────────────────────────
  {
    id: 'uniben',
    name: 'University of Benin',
    shortName: 'UNIBEN',
    category: 'Federal',
    state: 'Edo',
    geopoliticalZone: 'South South',
    campusLocation: 'Ugbowo & Ekehuan, Benin City, Edo State',
    establishedYear: 1970,
    website: 'https://uniben.edu',
    cutOffAverage: 240,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.', 'B.Agric.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'dentistry', 'medical-laboratory-science', 'physiotherapy',
      'computer-engineering', 'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'chemical-engineering', 'petroleum-gas-engineering',
      'computer-science', 'cyber-security', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration', 'mass-communication', 'banking-finance',
      'english-literary-studies', 'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'UNIBEN requires 5 credits at ONE sitting in WAEC/NECO. UTME: English, Biology, Chemistry, Physics.',
      'pharmacy': 'UNIBEN mandates Physics, Chemistry, Biology. One sitting required.',
      'law': 'UNIBEN requires Literature in English in UTME and O-Level.'
    }
  },
  {
    id: 'uniport',
    name: 'University of Port Harcourt',
    shortName: 'UNIPORT',
    category: 'Federal',
    state: 'Rivers',
    geopoliticalZone: 'South South',
    campusLocation: 'Choba, Port Harcourt, Rivers State',
    establishedYear: 1975,
    website: 'https://uniport.edu.ng',
    cutOffAverage: 230,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'dentistry',
      'petroleum-gas-engineering', 'chemical-engineering', 'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering',
      'computer-science', 'biochemistry', 'microbiology', 'geology',
      'law', 'accounting', 'economics', 'management',
      'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'petroleum-gas-engineering': 'UNIPORT requires English, Mathematics, Physics, and Chemistry.',
      'medicine-surgery': 'UNIPORT requires 5 credits at ONE sitting. Minimum UTME score ~270+.'
    }
  },

  // ─── NORTH CENTRAL / FCT ───────────────────────────────────────────────
  {
    id: 'uniabuja',
    name: 'University of Abuja',
    shortName: 'UniAbuja',
    category: 'Federal',
    state: 'Abuja (FCT)',
    geopoliticalZone: 'North Central',
    campusLocation: 'Airport Road, Gwagwalada, Abuja',
    establishedYear: 1988,
    website: 'https://uniabuja.edu.ng',
    cutOffAverage: 220,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'B.Agric.'],
    coursesOffered: [
      'medicine-surgery', 'nursing-science', 'medical-laboratory-science',
      'civil-engineering', 'electrical-electronics-engineering', 'mechanical-engineering', 'chemical-engineering',
      'computer-science', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration', 'political-science',
      'english-literary-studies', 'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'law': 'UniAbuja requires Literature in English and Government in UTME. Mathematics credit is compulsory in WAEC.',
      'medicine-surgery': 'UniAbuja mandates pure sciences at ONE sitting.'
    }
  },
  {
    id: 'futminna',
    name: 'Federal University of Technology, Minna',
    shortName: 'FUTMINNA',
    category: 'Federal',
    state: 'Niger',
    geopoliticalZone: 'North Central',
    campusLocation: 'Gidan Kwanu, Minna, Niger State',
    establishedYear: 1983,
    website: 'https://futminna.edu.ng',
    cutOffAverage: 210,
    popular: true,
    degreeTypes: ['B.Tech.', 'B.Eng.', 'B.Sc.'],
    coursesOffered: [
      'computer-engineering', 'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'chemical-engineering', 'mechatronics-engineering',
      'computer-science', 'cyber-security', 'software-engineering', 'artificial-intelligence', 'biochemistry', 'microbiology',
      'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'cyber-security': 'FUTMINNA requires Mathematics, Physics, and Chemistry in UTME.',
      'mechatronics-engineering': 'FUTMINNA mandates Mathematics, Physics, Chemistry in UTME.'
    }
  },

  // ─── NORTH WEST ────────────────────────────────────────────────────────
  {
    id: 'abu',
    name: 'Ahmadu Bello University',
    shortName: 'ABU',
    category: 'Federal',
    state: 'Kaduna',
    geopoliticalZone: 'North West',
    campusLocation: 'Samaru & Kongo Campus, Zaria, Kaduna State',
    establishedYear: 1962,
    website: 'https://abu.edu.ng',
    cutOffAverage: 240,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.', 'B.Agric.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'dentistry', 'medical-laboratory-science',
      'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering', 'chemical-engineering', 'agricultural-bioresources-engineering',
      'computer-science', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration',
      'english-literary-studies', 'history-international-studies', 'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'ABU requires 5 credits at ONE sitting in English, Mathematics, Biology, Chemistry, Physics.',
      'law': 'ABU offers both Civil Law and Common/Islamic Law. Arabic/Islamic Studies accepted for Islamic Law option.',
      'pharmacy': 'ABU requires Biology, Chemistry, Physics in UTME.'
    }
  },
  {
    id: 'buk',
    name: 'Bayero University, Kano',
    shortName: 'BUK',
    category: 'Federal',
    state: 'Kano',
    geopoliticalZone: 'North West',
    campusLocation: 'Kano City, Kano State',
    establishedYear: 1975,
    website: 'https://buk.edu.ng',
    cutOffAverage: 220,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D', 'B.N.Sc.'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'physiotherapy',
      'mechanical-engineering', 'electrical-electronics-engineering', 'civil-engineering',
      'computer-science', 'cyber-security', 'software-engineering', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'mass-communication',
      'english-literary-studies', 'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'BUK mandates English, Biology, Chemistry, Physics in UTME. 5 credits in WAEC.',
      'law': 'BUK accepts Islamic Studies or Literature in English for Law.'
    }
  },

  // ─── SOUTH SOUTH & NORTH EAST ──────────────────────────────────────────
  {
    id: 'unical',
    name: 'University of Calabar',
    shortName: 'UNICAL',
    category: 'Federal',
    state: 'Cross River',
    geopoliticalZone: 'South South',
    campusLocation: 'Calabar, Cross River State',
    establishedYear: 1975,
    website: 'https://unical.edu.ng',
    cutOffAverage: 220,
    popular: true,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'B.N.Sc.'],
    coursesOffered: [
      'medicine-surgery', 'nursing-science', 'medical-laboratory-science', 'radiography',
      'computer-science', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics', 'business-administration', 'mass-communication',
      'english-literary-studies'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'UNICAL mandates English, Biology, Chemistry, Physics.',
      'nursing-science': 'UNICAL requires pure sciences in UTME.'
    }
  },
  {
    id: 'unimaid',
    name: 'University of Maiduguri',
    shortName: 'UNIMAID',
    category: 'Federal',
    state: 'Borno',
    geopoliticalZone: 'North East',
    campusLocation: 'Bama Road, Maiduguri, Borno State',
    establishedYear: 1975,
    website: 'https://unimaid.edu.ng',
    cutOffAverage: 200,
    popular: false,
    degreeTypes: ['MBBS', 'B.Sc.', 'B.Eng.', 'LL.B', 'B.A.', 'B.Ed.', 'Pharm.D'],
    coursesOffered: [
      'medicine-surgery', 'pharmacy', 'nursing-science', 'medical-laboratory-science',
      'mechanical-engineering', 'civil-engineering', 'electrical-electronics-engineering',
      'computer-science', 'biochemistry', 'microbiology',
      'law', 'accounting', 'economics',
      'agricultural-science'
    ],
    schoolSpecificWaivers: {
      'medicine-surgery': 'UNIMAID requires 5 credits at maximum two sittings in WAEC/NECO.',
      'law': 'UNIMAID offers Common & Islamic Law options.'
    }
  }
];

export const NIGERIAN_STATES = [
  'All States',
  'Lagos',
  'Oyo',
  'Osun',
  'Ogun',
  'Ondo',
  'Enugu',
  'Imo',
  'Edo',
  'Rivers',
  'Cross River',
  'Abuja (FCT)',
  'Kwara',
  'Niger',
  'Kaduna',
  'Kano',
  'Borno'
];

/**
 * Filter universities by state, category, course offering, and degree type
 */
export function filterUniversities(
  searchQuery: string,
  stateFilter: string = 'All States',
  categoryFilter: string = 'All',
  courseIdFilter?: string,
  degreeFilter?: string
): UniversityItem[] {
  const query = searchQuery.trim().toLowerCase();

  return NIGERIAN_UNIVERSITIES.filter((uni) => {
    // State Filter
    if (stateFilter !== 'All States' && uni.state !== stateFilter) {
      return false;
    }

    // Category Filter (Federal, State, Private)
    if (categoryFilter !== 'All' && uni.category !== categoryFilter) {
      return false;
    }

    // Course Availability Filter
    if (courseIdFilter && courseIdFilter !== 'All') {
      const offersCourse = uni.coursesOffered.some((c) =>
        c.toLowerCase().includes(courseIdFilter.toLowerCase())
      );
      if (!offersCourse) return false;
    }

    // Degree Type Filter (MBBS, B.Sc., B.Eng., LL.B...)
    if (degreeFilter && degreeFilter !== 'All') {
      if (!uni.degreeTypes.includes(degreeFilter)) return false;
    }

    // Text Search
    if (!query) return true;
    if (uni.name.toLowerCase().includes(query)) return true;
    if (uni.shortName.toLowerCase().includes(query)) return true;
    if (uni.state.toLowerCase().includes(query)) return true;
    if (uni.campusLocation.toLowerCase().includes(query)) return true;

    return false;
  });
}
