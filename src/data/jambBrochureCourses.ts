/**
 * Official JAMB IBASS Course & UTME Subject Combination Dataset
 * Sourced directly from JAMB IBASS (Integrated Brochure and Syllabus System - ibass.jamb.gov.ng)
 */

export interface JambCourseItem {
  id: string;
  name: string;
  faculty: 'Medical & Health' | 'Engineering & Tech' | 'Sciences & Computing' | 'Law' | 'Social & Management' | 'Arts & Humanities' | 'Education' | 'Agriculture';
  degree: string;
  jambSubjects: {
    compulsory: string;
    subjects: string[];
    summary: string;
    note?: string;
  };
  oLevelRequirements: {
    creditsCount: number;
    subjects: string[];
    sittings: string;
    details: string;
  };
  directEntry?: string;
  topSchools: string[];
  specialRemarks?: string[];
  cutOffAverage?: number;
  popular?: boolean;
}

export const JAMB_BROCHURE_COURSES: JambCourseItem[] = [
  // ─── MEDICAL & HEALTH SCIENCES ──────────────────────────────────────────
  {
    id: 'medicine-surgery',
    name: 'Medicine and Surgery',
    faculty: 'Medical & Health',
    degree: 'MBBS / MBBCh',
    popular: true,
    cutOffAverage: 280,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      summary: 'English Language, Biology, Chemistry and Physics',
      note: 'Mathematics is NOT accepted as a substitute for Biology, Physics, or Chemistry in JAMB UTME.'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
      sittings: 'Maximum of ONE sitting (in most Federal universities)',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry, and Biology at not more than one sitting.'
    },
    directEntry: "Two (2) 'A' level passes in Biology/Zoology, Chemistry and Physics plus UTME requirements. B.Sc. Second Class Upper in Anatomy, Physiology, or related biomedical sciences.",
    topSchools: [
      'University of Ibadan (UI)',
      'University of Lagos (UNILAG)',
      'Obafemi Awolowo University (OAU)',
      'University of Nigeria, Nsukka (UNN)',
      'Ahmadu Bello University (ABU)',
      'University of Benin (UNIBEN)',
      'University of Ilorin (UNILORIN)',
      'Lagos State University (LASU)',
      'Bowen University',
      'Afe Babalola University (AFE)'
    ],
    specialRemarks: [
      'UNILAG & UI strictly require all 5 O-Level credits in ONE sitting only.',
      'UNILORIN requires 5 credits at one sitting and does not accept combined results for Medicine.',
      'OAU requires a minimum score of 200 in UTME and conducts strict Post-UTME screening.'
    ]
  },
  {
    id: 'nursing-science',
    name: 'Nursing / Nursing Science',
    faculty: 'Medical & Health',
    degree: 'B.N.Sc.',
    popular: true,
    cutOffAverage: 250,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      summary: 'English Language, Physics, Chemistry and Biology'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
      sittings: 'Not more than two sittings (one sitting preferred at UNILAG/UI)',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology, and Physics.'
    },
    directEntry: 'Registered Nurse (RN) Certificate or Registered Midwife (RM) plus 5 O-level credits, or two A-level passes in Biology and Chemistry.',
    topSchools: [
      'University of Ibadan (UI)',
      'University of Lagos (UNILAG)',
      'University of Benin (UNIBEN)',
      'Obafemi Awolowo University (OAU)',
      'University of Nigeria (UNN)',
      'Nnamdi Azikiwe University (UNIZIK)',
      'University of Ilorin (UNILORIN)',
      'Babcock University',
      'Madonna University'
    ],
    specialRemarks: [
      'Candidates must be registered with the Nursing and Midwifery Council of Nigeria for Direct Entry.',
      'UNILAG accepts combined sittings only if both are WAEC or both are NECO.'
    ]
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    faculty: 'Medical & Health',
    degree: 'Pharm.D / B.Pharm',
    popular: true,
    cutOffAverage: 260,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      summary: 'English Language, Biology, Chemistry and Physics'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
      sittings: 'One or two sittings (one sitting required at UI)',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and Biology.'
    },
    directEntry: "Three (3) 'A' Level passes in Chemistry, Biology/Zoology and Physics or Mathematics.",
    topSchools: [
      'University of Ibadan (UI)',
      'University of Lagos (UNILAG)',
      'Obafemi Awolowo University (OAU)',
      'University of Nigeria (UNN)',
      'University of Benin (UNIBEN)',
      'Ahmadu Bello University (ABU)',
      'Olabisi Onabanjo University (OOU)'
    ],
    specialRemarks: [
      'UI accepts B.Sc. Second Class Upper in Chemistry or Biology for Direct Entry into 200 Level.',
      'OAU requires all credits in not more than two sittings.'
    ]
  },
  {
    id: 'medical-laboratory-science',
    name: 'Medical Laboratory Science',
    faculty: 'Medical & Health',
    degree: 'B.MLS',
    popular: true,
    cutOffAverage: 240,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      summary: 'English Language, Physics, Chemistry and Biology'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
      sittings: 'Not more than two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and Biology.'
    },
    directEntry: "'A' Level passes in Chemistry and Biology/Zoology, or Medical Laboratory Technician (MLT) certificate with distinction.",
    topSchools: [
      'University of Nigeria (UNN)',
      'University of Benin (UNIBEN)',
      'Nnamdi Azikiwe University (UNIZIK)',
      'University of Calabar (UNICAL)',
      'Lagos State University (LASU)',
      'Ambrose Alli University (AAU)'
    ]
  },
  {
    id: 'dentistry',
    name: 'Dentistry and Dental Surgery',
    faculty: 'Medical & Health',
    degree: 'BDS',
    cutOffAverage: 265,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Chemistry', 'Biology', 'Physics'],
      summary: 'English Language, Chemistry, Biology and Physics'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
      sittings: 'One sitting only',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and Biology.'
    },
    directEntry: "Three 'A' level passes in Chemistry, Biology and Physics. B.Sc. in Anatomy or Physiology.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'Obafemi Awolowo University (OAU)', 'University of Benin (UNIBEN)']
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy / Medical Rehabilitation',
    faculty: 'Medical & Health',
    degree: 'B.Physiotherapy / B.MR',
    cutOffAverage: 245,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      summary: 'English Language, Physics, Chemistry and Biology'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and Biology.'
    },
    directEntry: "'A' level passes in Physics, Chemistry and Biology.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'Obafemi Awolowo University (OAU)', 'Bayero University Kano (BUK)']
  },
  {
    id: 'radiography',
    name: 'Radiography and Radiation Science',
    faculty: 'Medical & Health',
    degree: 'B.Sc. Radiography',
    cutOffAverage: 240,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      summary: 'English Language, Physics, Chemistry and Biology'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and Biology.'
    },
    directEntry: "'A' Level passes in Physics and Biology/Chemistry, or DSR Diploma.",
    topSchools: ['University of Lagos (UNILAG)', 'University of Nigeria (UNN)', 'Nnamdi Azikiwe University (UNIZIK)', 'University of Calabar (UNICAL)']
  },
  {
    id: 'anatomy',
    name: 'Human Anatomy',
    faculty: 'Medical & Health',
    degree: 'B.Sc.',
    cutOffAverage: 220,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      summary: 'English Language, Biology, Chemistry and Physics'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Biology', 'Chemistry', 'Physics'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Biology, Chemistry and Physics.'
    },
    directEntry: "'A' Level passes in Biology and Chemistry, or ND with Upper Credit.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'UNIBEN', 'UNILORIN', 'OAU', 'LASU']
  },
  {
    id: 'physiology',
    name: 'Human Physiology',
    faculty: 'Medical & Health',
    degree: 'B.Sc.',
    cutOffAverage: 215,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Biology', 'Chemistry', 'Physics'],
      summary: 'English Language, Biology, Chemistry and Physics'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Biology', 'Chemistry', 'Physics'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Biology, Chemistry and Physics.'
    },
    directEntry: "'A' Level passes in Biology and Chemistry.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'UNN', 'UNILORIN', 'LASU', 'AAU']
  },

  // ─── ENGINEERING & TECHNOLOGY ───────────────────────────────────────────
  {
    id: 'computer-engineering',
    name: 'Computer Engineering',
    faculty: 'Engineering & Tech',
    degree: 'B.Eng / B.Sc (Eng)',
    popular: true,
    cutOffAverage: 250,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      summary: 'English Language, Mathematics, Physics and Chemistry'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Any other Science/Tech subject'],
      sittings: 'Not more than two sittings',
      details: 'Five (5) SSC credit passes including English Language, Mathematics, Physics, Chemistry, and any other relevant Science or Technical Drawing subject.'
    },
    directEntry: "Two (2) 'A' Level passes in Mathematics and Physics. ND/HND in Computer/Electrical Engineering with Upper Credit.",
    topSchools: [
      'University of Lagos (UNILAG)',
      'Obafemi Awolowo University (OAU)',
      'Covenant University',
      'Federal University of Technology, Akure (FUTA)',
      'University of Benin (UNIBEN)',
      'Federal University of Technology, Minna (FUTMINNA)'
    ]
  },
  {
    id: 'mechanical-engineering',
    name: 'Mechanical Engineering',
    faculty: 'Engineering & Tech',
    degree: 'B.Eng / B.Sc',
    popular: true,
    cutOffAverage: 240,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      summary: 'English Language, Mathematics, Physics and Chemistry'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Further Maths or Technical Drawing'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry, and Technical Drawing or Further Mathematics.'
    },
    directEntry: "A-Level passes in Mathematics and Physics. ND/HND in Mechanical Engineering with Upper Credit.",
    topSchools: [
      'University of Lagos (UNILAG)',
      'Ahmadu Bello University (ABU)',
      'University of Nigeria (UNN)',
      'Federal University of Technology, Owerri (FUTO)',
      'University of Ibadan (UI)',
      'Landmark University'
    ]
  },
  {
    id: 'electrical-engineering',
    name: 'Electrical / Electronics Engineering',
    faculty: 'Engineering & Tech',
    degree: 'B.Eng / B.Sc',
    popular: true,
    cutOffAverage: 245,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      summary: 'English Language, Mathematics, Physics and Chemistry'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Technical Drawing / Further Maths'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and one other Science/Technical subject.'
    },
    directEntry: "'A' Level passes in Pure & Applied Maths and Physics. ND with Upper Credit.",
    topSchools: ['UNILAG', 'UI', 'OAU', 'UNN', 'UNIBEN', 'FUTA', 'COVENANT']
  },
  {
    id: 'civil-engineering',
    name: 'Civil Engineering',
    faculty: 'Engineering & Tech',
    degree: 'B.Eng / B.Sc',
    popular: true,
    cutOffAverage: 235,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      summary: 'English Language, Mathematics, Physics and Chemistry'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Technical Drawing or Geography'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry, and any other relevant Science subject.'
    },
    directEntry: "'A' Level passes in Mathematics and Physics. ND/HND with minimum Upper Credit.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'Ahmadu Bello University (ABU)', 'FUTO', 'UNILORIN']
  },
  {
    id: 'chemical-engineering',
    name: 'Chemical Engineering',
    faculty: 'Engineering & Tech',
    degree: 'B.Eng / B.Sc',
    cutOffAverage: 240,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      summary: 'English Language, Mathematics, Physics and Chemistry'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology or Further Maths'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and Biology/Further Mathematics.'
    },
    directEntry: "'A' Level passes in Chemistry, Mathematics and Physics.",
    topSchools: ['UNILAG', 'OAU', 'UNIBEN', 'ABU', 'FUTO', 'COVENANT']
  },
  {
    id: 'petroleum-engineering',
    name: 'Petroleum and Gas Engineering',
    faculty: 'Engineering & Tech',
    degree: 'B.Eng / B.Sc',
    cutOffAverage: 245,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      summary: 'English Language, Mathematics, Physics and Chemistry'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Further Maths'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and Further Mathematics or Biology.'
    },
    directEntry: "'A' Level passes in Mathematics, Physics and Chemistry.",
    topSchools: ['University of Ibadan (UI)', 'University of Benin (UNIBEN)', 'University of Port Harcourt (UNIPORT)', 'FUTO']
  },
  {
    id: 'architecture',
    name: 'Architecture',
    faculty: 'Engineering & Tech',
    degree: 'B.Sc. Architecture',
    cutOffAverage: 230,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry or Technical Drawing or Geography'],
      summary: 'English Language, Mathematics, Physics and any one of Chemistry, Geography, Art, Biology, Economics or Technical Drawing'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Fine Art or Technical Drawing', 'Chemistry or Geography'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, and any two from Chemistry, Geography, Fine Art, Technical Drawing, Economics.'
    },
    directEntry: "'A' Level passes in Mathematics and Physics or Technical Drawing. ND in Architecture with Upper Credit.",
    topSchools: ['University of Lagos (UNILAG)', 'Ahmadu Bello University (ABU)', 'FUTA', 'Covenant University', 'OAU', 'UNN']
  },
  {
    id: 'software-engineering',
    name: 'Software Engineering',
    faculty: 'Sciences & Computing',
    degree: 'B.Sc. Software Engineering',
    popular: true,
    cutOffAverage: 240,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry or Biology'],
      summary: 'English Language, Mathematics, Physics and Chemistry or Biology'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology or Computer Studies'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry, and any other Science subject.'
    },
    directEntry: "'A' Level passes in Mathematics and Physics. ND in Computer Science or Software with Upper Credit.",
    topSchools: ['Covenant University', 'Babcock University', 'FUTA', 'Bayero University Kano', 'Afe Babalola University']
  },

  // ─── SCIENCES & COMPUTING ────────────────────────────────────────────────
  {
    id: 'computer-science',
    name: 'Computer Science',
    faculty: 'Sciences & Computing',
    degree: 'B.Sc.',
    popular: true,
    cutOffAverage: 240,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry or Biology or Economics'],
      summary: 'English Language, Mathematics, Physics and one of Chemistry, Biology, Economics or Geography'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Any other Science or Social Science subject'],
      sittings: 'Not more than two sittings',
      details: 'Five (5) SSC credit passes to include English Language, Mathematics, Physics, plus two other science subjects.'
    },
    directEntry: "Two (2) 'A' Level passes in Mathematics and Physics. ND/HND in Computer Science with Upper Credit.",
    topSchools: [
      'University of Lagos (UNILAG)',
      'University of Ibadan (UI)',
      'Obafemi Awolowo University (OAU)',
      'Covenant University',
      'Federal University of Technology, Akure (FUTA)',
      'University of Ilorin (UNILORIN)',
      'University of Nigeria (UNN)',
      'Lagos State University (LASU)'
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity / Information Security',
    faculty: 'Sciences & Computing',
    degree: 'B.Sc.',
    popular: true,
    cutOffAverage: 235,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Physics', 'Chemistry or Biology'],
      summary: 'English Language, Mathematics, Physics and Chemistry or Biology'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Computer Studies or Biology'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Physics, Chemistry and one other Science subject.'
    },
    directEntry: "'A' Level passes in Mathematics and Physics, or ND Computer Science with Upper Credit.",
    topSchools: ['FUTA', 'FUTMINNA', 'Air Force Institute of Technology (AFIT)', 'Covenant University', 'Nile University']
  },
  {
    id: 'microbiology',
    name: 'Microbiology',
    faculty: 'Sciences & Computing',
    degree: 'B.Sc.',
    popular: true,
    cutOffAverage: 220,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Biology', 'Chemistry', 'Physics or Mathematics'],
      summary: 'English Language, Biology, Chemistry and either Physics or Mathematics'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Biology', 'Chemistry', 'Physics'],
      sittings: 'Not more than two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology and Physics.'
    },
    directEntry: "'A' Level passes in Chemistry and Biology/Botany/Zoology. ND in Science Laboratory Technology with Upper Credit.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'UNIBEN', 'UNILORIN', 'OAU', 'LASU']
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry',
    faculty: 'Sciences & Computing',
    degree: 'B.Sc.',
    popular: true,
    cutOffAverage: 225,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Biology', 'Chemistry', 'Physics or Mathematics'],
      summary: 'English Language, Biology, Chemistry and Physics or Mathematics'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Biology', 'Chemistry', 'Physics'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology and Physics.'
    },
    directEntry: "'A' Level passes in Chemistry and Biology/Zoology. ND with Distinction or Upper Credit.",
    topSchools: ['University of Ibadan (UI)', 'UNILAG', 'UNIBEN', 'UNN', 'OAU', 'LASU', 'Covenant University']
  },

  // ─── LAW ─────────────────────────────────────────────────────────────────
  {
    id: 'law-civil',
    name: 'Law / Common Law',
    faculty: 'Law',
    degree: 'LL.B',
    popular: true,
    cutOffAverage: 270,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Literature in English', 'Government / History', 'Any Arts or Social Science subject (CRS/IRS/Economics)'],
      summary: 'English Language, Literature in English and any two Arts or Social Science subjects',
      note: 'Literature in English is strictly compulsory for Law in virtually all Nigerian universities.'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Literature in English', 'Mathematics', 'Government / History', 'Any Arts or Social Science subject'],
      sittings: 'Maximum of one or two sittings (one sitting required at UI and UNILAG)',
      details: 'Five (5) SSC credit passes in English Language, Literature in English, Mathematics and any other two Arts or Social Science subjects.'
    },
    directEntry: "Two (2) 'A' Level passes in Arts or Social Science subjects. First Degree (minimum Second Class Lower) from a recognized university.",
    topSchools: [
      'University of Ibadan (UI)',
      'University of Lagos (UNILAG)',
      'Obafemi Awolowo University (OAU)',
      'University of Nigeria, Nsukka (UNN)',
      'University of Benin (UNIBEN)',
      'Ahmadu Bello University (ABU)',
      'University of Ilorin (UNILORIN)',
      'Lagos State University (LASU)',
      'Bowen University',
      'Afe Babalola University (AFE)'
    ],
    specialRemarks: [
      'UNILAG & UI strictly mandate at least a credit pass in Literature in English.',
      'A credit pass in Mathematics is now compulsory for Law in all Nigerian universities under NUC regulations.',
      'For Islamic Law, Arabic or Islamic Studies is compulsory in addition to Literature.'
    ]
  },

  // ─── SOCIAL & MANAGEMENT SCIENCES ─────────────────────────────────────────
  {
    id: 'accounting',
    name: 'Accounting / Accountancy',
    faculty: 'Social & Management',
    degree: 'B.Sc.',
    popular: true,
    cutOffAverage: 235,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Economics', 'Any Social Science or Commercial subject (Commerce, Government, Accounting)'],
      summary: 'English Language, Mathematics, Economics plus any Social Science or Commercial subject'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Economics', 'Financial Accounting or Commerce', 'Government or Civic'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes including English Language, Mathematics, Economics, and two other relevant commercial subjects.'
    },
    directEntry: "Two 'A' level passes in Economics and Accounting/Mathematics. ND in Accountancy with Upper Credit. ATS (ICAN) Certificate.",
    topSchools: [
      'University of Lagos (UNILAG)',
      'University of Benin (UNIBEN)',
      'Covenant University',
      'Obafemi Awolowo University (OAU)',
      'University of Ilorin (UNILORIN)',
      'Lagos State University (LASU)'
    ]
  },
  {
    id: 'economics',
    name: 'Economics',
    faculty: 'Social & Management',
    degree: 'B.Sc.',
    popular: true,
    cutOffAverage: 230,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Economics', 'Mathematics', 'Any Arts or Social Science subject (Government, Commerce, Literature)'],
      summary: 'English Language, Economics, Mathematics and any of Government, History, Geography, Literature or CRS/IRS'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Economics', 'Government', 'Any other subject'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Economics and two other subjects.'
    },
    directEntry: "Two 'A' level passes in Economics and one of Mathematics, Government, or Statistics.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'OAU', 'UNN', 'UNILORIN', 'Covenant University']
  },
  {
    id: 'mass-communication',
    name: 'Mass Communication / Media Studies',
    faculty: 'Social & Management',
    degree: 'B.Sc. / B.A.',
    popular: true,
    cutOffAverage: 240,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Literature in English', 'Government / History', 'Any Arts or Social Science subject (CRS/IRS/Economics)'],
      summary: 'English Language, Literature in English and any two Arts or Social Science subjects'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Literature in English', 'Government', 'Any other Arts or Social Science subject'],
      sittings: 'Not more than two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Literature in English and two other Arts or Social Science subjects.'
    },
    directEntry: "Two (2) 'A' Level passes in Arts or Social Science subjects. ND in Mass Communication with Upper Credit.",
    topSchools: [
      'University of Lagos (UNILAG)',
      'University of Nigeria (UNN)',
      'University of Benin (UNIBEN)',
      'Lagos State University (LASU)',
      'Covenant University',
      'Babcock University'
    ],
    specialRemarks: [
      'UNILAG strictly requires Literature in English in both JAMB UTME and O-Level.',
      'A credit pass in Mathematics is compulsory.'
    ]
  },
  {
    id: 'business-administration',
    name: 'Business Administration / Management',
    faculty: 'Social & Management',
    degree: 'B.Sc.',
    popular: true,
    cutOffAverage: 225,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Mathematics', 'Economics', 'One of Government, Commerce, Accounting, or Geography'],
      summary: 'English Language, Mathematics, Economics and one other Social Science or Commercial subject'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Economics', 'Commerce or Accounting', 'Government'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes including English Language, Mathematics, Economics and two other subjects.'
    },
    directEntry: "'A' Level passes in Economics and Business Management/Accounting. ND Business Admin with Upper Credit.",
    topSchools: ['UNILAG', 'UNIBEN', 'UNILORIN', 'OAU', 'LASU', 'Covenant University']
  },
  {
    id: 'political-science',
    name: 'Political Science',
    faculty: 'Social & Management',
    degree: 'B.Sc.',
    cutOffAverage: 220,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Government or History', 'Any two Arts or Social Science subjects (Economics, Literature, CRS/IRS)'],
      summary: 'English Language, Government or History plus two other Social Science/Arts subjects'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Government', 'Mathematics', 'Economics or Literature', 'Any other subject'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes including English Language, Government or History, Mathematics and two other subjects.'
    },
    directEntry: "'A' Level passes in Government or History and one other Social Science subject.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'UNN', 'UNIBEN', 'OAU']
  },
  {
    id: 'international-relations',
    name: 'International Relations / Diplomacy',
    faculty: 'Social & Management',
    degree: 'B.Sc.',
    cutOffAverage: 230,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Government or History', 'Economics or Literature', 'Geography or French or CRS/IRS'],
      summary: 'English Language, Government/History and any two Arts or Social Science subjects'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Government or History', 'Mathematics', 'Literature in English or Economics', 'Any other subject'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Government/History, Mathematics, and two other relevant subjects.'
    },
    directEntry: "'A' level passes in Government/History and one other subject. ND with Upper Credit.",
    topSchools: ['Obafemi Awolowo University (OAU)', 'Covenant University', 'Landmark University', 'Afe Babalola University']
  },

  // ─── ARTS & HUMANITIES ───────────────────────────────────────────────────
  {
    id: 'english-literary-studies',
    name: 'English and Literary Studies',
    faculty: 'Arts & Humanities',
    degree: 'B.A.',
    popular: true,
    cutOffAverage: 220,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Literature in English', 'One Arts subject (Government, History, CRS/IRS)', 'Any other Arts or Social Science subject'],
      summary: 'English Language, Literature in English, one Arts subject and any other subject'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Literature in English', 'Mathematics', 'Government or History', 'Any other subject'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Literature in English, Mathematics and two other Arts subjects.'
    },
    directEntry: "'A' Level passes in Literature in English and one other Arts subject. NCE with distinction/credit in English.",
    topSchools: ['University of Ibadan (UI)', 'University of Lagos (UNILAG)', 'UNN', 'OAU', 'UNIBEN']
  },
  {
    id: 'theatre-arts',
    name: 'Theatre / Performing Arts',
    faculty: 'Arts & Humanities',
    degree: 'B.A.',
    cutOffAverage: 215,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Literature in English', 'Any two Arts or Social Science subjects (Government, CRS/IRS, Music, History)'],
      summary: 'English Language, Literature in English and two other Arts or Social Science subjects'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Literature in English', 'Mathematics', 'Any two Arts subjects'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Literature in English and three other relevant subjects.'
    },
    directEntry: "'A' Level passes in Literature in English and another Arts subject. ND or NCE in Theatre/Drama.",
    topSchools: ['University of Ibadan (UI)', 'University of Benin (UNIBEN)', 'University of Port Harcourt (UNIPORT)', 'UNN', 'LASU']
  },

  // ─── AGRICULTURE ─────────────────────────────────────────────────────────
  {
    id: 'agricultural-economics',
    name: 'Agricultural Economics',
    faculty: 'Agriculture',
    degree: 'B.Agric / B.Sc.',
    cutOffAverage: 200,
    jambSubjects: {
      compulsory: 'English Language',
      subjects: ['Chemistry', 'Biology or Agricultural Science', 'Mathematics or Economics or Physics'],
      summary: 'English Language, Chemistry, Biology/Agric Science and Mathematics or Economics or Physics'
    },
    oLevelRequirements: {
      creditsCount: 5,
      subjects: ['English Language', 'Mathematics', 'Chemistry', 'Biology or Agricultural Science', 'Physics or Economics'],
      sittings: 'Maximum two sittings',
      details: 'Five (5) SSC credit passes in English Language, Mathematics, Chemistry, Biology/Agricultural Science and Physics.'
    },
    directEntry: "'A' Level passes in Chemistry and Biology/Agricultural Science. ND in Agriculture with Upper Credit.",
    topSchools: ['University of Ibadan (UI)', 'Federal University of Agriculture, Abeokuta (FUNAAB)', 'UNN', 'OAU', 'UNILORIN']
  }
];

/**
 * Filter courses by search keyword across name, faculty, subjects, or keywords.
 */
export function searchJambCourses(query: string, facultyFilter?: string): JambCourseItem[] {
  const q = query.trim().toLowerCase();
  return JAMB_BROCHURE_COURSES.filter((course) => {
    // Faculty filter
    if (facultyFilter && facultyFilter !== 'All' && course.faculty !== facultyFilter) {
      return false;
    }

    if (!q) return true;

    // Search matches course name
    if (course.name.toLowerCase().includes(q)) return true;
    // Search matches faculty
    if (course.faculty.toLowerCase().includes(q)) return true;
    // Search matches degree
    if (course.degree.toLowerCase().includes(q)) return true;
    // Search matches subject combination
    if (course.jambSubjects.subjects.some((s) => s.toLowerCase().includes(q))) return true;
    // Search matches schools
    if (course.topSchools.some((school) => school.toLowerCase().includes(q))) return true;

    return false;
  });
}
