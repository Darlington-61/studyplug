// Official Structured Syllabus Database for JAMB, WAEC & NECO
// Mapped by Examination Body -> Subject -> Syllabus Sections & Topics

export interface SyllabusTopicItem {
  topic_number: number;
  section: string;
  title: string;
}

export interface ExamSyllabusMap {
  [subject: string]: SyllabusTopicItem[];
}

export interface MasterSyllabusDatabase {
  JAMB: ExamSyllabusMap;
  WAEC: ExamSyllabusMap;
  NECO: ExamSyllabusMap;
}

export const SYLLABUS_DATABASE: MasterSyllabusDatabase = {
  "JAMB": {
    "Mathematics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "NUMBER AND NUMERATION"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "B. ALGEBRAIC PROCESSES"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "D. PLANE GEOMETRY"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Triangles and Polygons."
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "E. COORDINATE GEOMETRY OF STRAIGHT LINES"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "F. TRIGONOMETRY"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "G. INTRODUCTORY CALCULUS"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "H. STATISTICS AND PROBABILITY."
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "I. VECTORS AND TRANSFORMATION"
      },
      {
        "topic_number": 10,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Number bases"
      },
      {
        "topic_number": 11,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Fractions, Decimals, Approximations and Percentages"
      },
      {
        "topic_number": 12,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Indices, Logarithms and Surds"
      },
      {
        "topic_number": 13,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Sets"
      },
      {
        "topic_number": 14,
        "section": "SECTION II: ALGEBRA.",
        "title": "Polynomials"
      },
      {
        "topic_number": 15,
        "section": "SECTION II: ALGEBRA.",
        "title": "Variation"
      },
      {
        "topic_number": 16,
        "section": "SECTION II: ALGEBRA.",
        "title": "Inequalities"
      },
      {
        "topic_number": 17,
        "section": "SECTION II: ALGEBRA.",
        "title": "Progression"
      },
      {
        "topic_number": 18,
        "section": "SECTION II: ALGEBRA.",
        "title": "Binary Operations"
      },
      {
        "topic_number": 19,
        "section": "SECTION II: ALGEBRA.",
        "title": "Matrices and Determinants"
      },
      {
        "topic_number": 20,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Euclidean Geometry"
      },
      {
        "topic_number": 21,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Mensuration"
      },
      {
        "topic_number": 22,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Loci"
      },
      {
        "topic_number": 23,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Coordinate Geometry"
      },
      {
        "topic_number": 24,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Trigonometry"
      },
      {
        "topic_number": 25,
        "section": "SECTION IV: CALCULUS",
        "title": "Differentiation"
      },
      {
        "topic_number": 26,
        "section": "SECTION IV: CALCULUS",
        "title": "Application of differentiation"
      },
      {
        "topic_number": 27,
        "section": "SECTION IV: CALCULUS",
        "title": "Integration"
      },
      {
        "topic_number": 28,
        "section": "SECTION V: STATISTICS",
        "title": "Representation of data"
      },
      {
        "topic_number": 29,
        "section": "SECTION V: STATISTICS",
        "title": "Measures of Location"
      },
      {
        "topic_number": 30,
        "section": "SECTION V: STATISTICS",
        "title": "Measures of Dispersion"
      },
      {
        "topic_number": 31,
        "section": "SECTION V: STATISTICS",
        "title": "Permutation and Combination"
      },
      {
        "topic_number": 32,
        "section": "SECTION V: STATISTICS",
        "title": "Probability"
      }
    ],
    "Physics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "MEASUREMENTS AND UNITS"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "Scalars and Vectors"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Motion"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Gravitational field"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Equilibrium of Forces"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Work, Energy and Power"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Friction"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Simple Machines"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Elasticity"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Pressure"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Liquids At Rest"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Temperature and Its Measurement"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Thermal Expansion"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Gas Laws"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Quantity of Heat"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Change of State"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Vapours"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "Structure of Matter and Kinetic Theory"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Heat Transfer"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Waves"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Propagation of Sound Waves"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Characteristics of Sound Waves"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Light Energy"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Reflection of Light at Plane and Curved Surfaces"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Refraction of Light Through at Plane and Curved Surfaces"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Optical Instruments"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "Dispersion of light and colours"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "Electrostatics"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "Capacitors"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "Electric Cells"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Current Electricity"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Electrical Energy and Power"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Magnets and Magnetic Fields"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Force on a Current-Carrying Conductor in a Magnetic Field"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "Electromagnetic Induction"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "Simple A. C. Circuits"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "Conduction of Electricity Through;"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "Elementary Modern Physics"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "Introductory Electronics"
      }
    ],
    "Chemistry": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Separation of mixtures and purification of chemical substances"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "Chemical combination"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Kinetic theory of matter and Gas Laws"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Atomic structure and bonding"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Air"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Water"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Environmental Pollution"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Acids, bases and salts"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Oxidation and reduction"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Electrolysis"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Energy changes"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Rates of Chemical Reaction"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Non-metals and their compounds"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Metals and their compounds"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Organic Compounds"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Chemistry and Industry"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      }
    ],
    "Biology": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Concept of Living"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;Classification"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Organization of life"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Forms in which living cells exist"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Cell"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "The Cell and its environment"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Properties and functions of the living cell"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Transport System"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Respiratory System"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Excretory Systems and Mechanisms"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Regulation of Internal Environment (Homeostasis)"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Sense Organs"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Reproductive System"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Plant Nutrition"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Animal Nutrition"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "Ecosystem"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Ecological factors"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Simple Measurement of Ecological Factors"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Food webs and trophic levels"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Ecological Management"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Ecology of population"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Microorganisms: Man and health"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Conservation of Natural Resources"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Resources to be conserved: soil, water, wildlife, forest and minerals"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "Ways of ensuring conservation"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "Variation in Population"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Morphological variations in the physical appearance of individuals"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Physiological Variations"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Biology of Heredity (Genetics)"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Genetic Terminologies"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "Transmission and expression of characteristics in organisms"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "Chromosomes: The basis of heredity"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "Probability in genetics (Hybrid formation)"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "Linkage, sex determination and sex-linked characters"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "Application of the principles of heredity in"
      },
      {
        "topic_number": 40,
        "section": "Core Syllabus Units",
        "title": "Adaptation for Survival and Evolution"
      },
      {
        "topic_number": 41,
        "section": "Core Syllabus Units",
        "title": "Behavioural Adaptations in Social Animals"
      },
      {
        "topic_number": 42,
        "section": "Core Syllabus Units",
        "title": "Evolution"
      },
      {
        "topic_number": 43,
        "section": "SECTION B",
        "title": "Introducing Biology"
      },
      {
        "topic_number": 44,
        "section": "SECTION B",
        "title": "Cell Biology"
      },
      {
        "topic_number": 45,
        "section": "SECTION B",
        "title": "Life Processes in Living Things"
      },
      {
        "topic_number": 46,
        "section": "SECTION B",
        "title": "Diversity of Living Things"
      },
      {
        "topic_number": 47,
        "section": "SECTION B",
        "title": "Interactions in Nature&nbsp;Soil"
      },
      {
        "topic_number": 48,
        "section": "SECTION B",
        "title": "Mammalian Anatomy and Physiology"
      },
      {
        "topic_number": 49,
        "section": "SECTION B",
        "title": "Plant Structure and Physiology"
      },
      {
        "topic_number": 50,
        "section": "SECTION B",
        "title": "Humans and Their Environment"
      },
      {
        "topic_number": 51,
        "section": "SECTION B",
        "title": "Evolution"
      },
      {
        "topic_number": 52,
        "section": "SECTION B",
        "title": "Biology and Industry"
      },
      {
        "topic_number": 53,
        "section": "SECTION C",
        "title": "Concept of Living"
      },
      {
        "topic_number": 54,
        "section": "SECTION C",
        "title": "Sense organs"
      },
      {
        "topic_number": 55,
        "section": "SECTION C",
        "title": "Reproduction"
      },
      {
        "topic_number": 56,
        "section": "SECTION C",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 57,
        "section": "SECTION C",
        "title": "Nitrogen cycle"
      },
      {
        "topic_number": 58,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 59,
        "section": "SECTION C",
        "title": "Alimentary System"
      },
      {
        "topic_number": 60,
        "section": "SECTION C",
        "title": "Feeding habits"
      },
      {
        "topic_number": 61,
        "section": "SECTION C",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 62,
        "section": "SECTION C",
        "title": "Ecological Components"
      },
      {
        "topic_number": 63,
        "section": "SECTION C",
        "title": "Population Studies by Sampling"
      },
      {
        "topic_number": 64,
        "section": "SECTION C",
        "title": "Energy transformation in nature"
      },
      {
        "topic_number": 65,
        "section": "SECTION C",
        "title": "Nutrient Cycling in Nature"
      },
      {
        "topic_number": 66,
        "section": "SECTION C",
        "title": "Ecological Management"
      },
      {
        "topic_number": 67,
        "section": "SECTION C",
        "title": "Habitats"
      },
      {
        "topic_number": 68,
        "section": "SECTION C",
        "title": "Relevance of Biology to Agriculture"
      },
      {
        "topic_number": 69,
        "section": "SECTION C",
        "title": "Microorganisms: Man and His Health"
      },
      {
        "topic_number": 70,
        "section": "SECTION C",
        "title": "Application of Variations"
      },
      {
        "topic_number": 71,
        "section": "SECTION C",
        "title": "Evolution"
      },
      {
        "topic_number": 72,
        "section": "SECTION C",
        "title": "Adaptation for survival"
      },
      {
        "topic_number": 73,
        "section": "SECTION C",
        "title": "Structural Adaptation for"
      },
      {
        "topic_number": 74,
        "section": "SECTION C",
        "title": "Adaptive Colouration"
      },
      {
        "topic_number": 75,
        "section": "SECTION C",
        "title": "Plants and animals&#39;&nbsp;Colouration and their&nbsp;functions"
      },
      {
        "topic_number": 76,
        "section": "SECTION C",
        "title": "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;"
      },
      {
        "topic_number": 77,
        "section": "SECTION C",
        "title": "Living organisms"
      },
      {
        "topic_number": 78,
        "section": "SECTION C",
        "title": "Evolution among the following"
      },
      {
        "topic_number": 79,
        "section": "SECTION C",
        "title": "Variety of Organisms"
      },
      {
        "topic_number": 80,
        "section": "SECTION C",
        "title": "Internal structure of a flowering plant"
      },
      {
        "topic_number": 81,
        "section": "SECTION C",
        "title": "Nutrition"
      },
      {
        "topic_number": 82,
        "section": "SECTION C",
        "title": "Transport"
      },
      {
        "topic_number": 83,
        "section": "SECTION C",
        "title": "Respiration"
      },
      {
        "topic_number": 84,
        "section": "SECTION C",
        "title": "Excretion"
      },
      {
        "topic_number": 85,
        "section": "SECTION C",
        "title": "Support and movement"
      },
      {
        "topic_number": 86,
        "section": "SECTION C",
        "title": "Reproduction"
      },
      {
        "topic_number": 87,
        "section": "SECTION C",
        "title": "Growth"
      },
      {
        "topic_number": 88,
        "section": "SECTION C",
        "title": "Co-ordination and control"
      },
      {
        "topic_number": 89,
        "section": "SECTION C",
        "title": "Factors affecting the distribution of Organisms"
      },
      {
        "topic_number": 90,
        "section": "SECTION C",
        "title": "Symbiotic interactions of plants and animals"
      },
      {
        "topic_number": 91,
        "section": "SECTION C",
        "title": "Natural Habitats"
      },
      {
        "topic_number": 92,
        "section": "SECTION C",
        "title": "Local (Nigerian) Biomes"
      },
      {
        "topic_number": 93,
        "section": "SECTION C",
        "title": "The Ecology of Populations"
      },
      {
        "topic_number": 94,
        "section": "SECTION C",
        "title": "SOIL"
      },
      {
        "topic_number": 95,
        "section": "SECTION C",
        "title": "Humans and Environment"
      },
      {
        "topic_number": 96,
        "section": "SECTION C",
        "title": "Variation In Population"
      },
      {
        "topic_number": 97,
        "section": "SECTION C",
        "title": "Heredity"
      },
      {
        "topic_number": 98,
        "section": "SECTION C",
        "title": "Theories of evolution"
      },
      {
        "topic_number": 99,
        "section": "SECTION C",
        "title": "Evidence of evolution"
      }
    ],
    "English Language": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "A. LEXIS"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "PAPER 3: ORAL ENGLISH (30 marks)"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Test Of Orals (For candidates in Nigeria and Liberia)"
      }
    ],
    "Economics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "INTRODUCTION"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "OBJECTIVES"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "DEFINITION AND SCOPE OF ECONOMICS"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "FACTORS OF PRODUCTION"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "TYPES AND BASIC FEATURES OF ECONOMIC SYSTEMS"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "BASIC TOOLS OF ECONOMIC ANALYSIS"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "DEMAND"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "SUPPLY"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "THEORY OF CONSUMER BEHAVIOUR"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRICE DETERMINATION"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRODUCTION"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "THEORY OF COST AND REVENUE"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "MARKET STRUCTURES"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "BUSINESS ORGANIZATIONS"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "DISTRIBUTIVE TRADE"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "POPULATION AND LABOUR MARKET"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "INDUSTRIALIZATION"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "NATIONAL INCOME"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "MONEY AND INFLATION"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "FINANCIAL INSTITUTIONS"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "PUBLIC FINANCE"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC DEVELOPMENT AND PLANNING"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL TRADE AND BALANCE OF PAYMENTS"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC INTEGRATION"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL ECONOMIC ORGANIZATIONS"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "MAJOR NATURAL RESOURCES"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Economics as a science"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Economic Systems"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Methods and Tools of Economic Analysis"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "The Theory of Demand"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "The Theory of Consumer Behaviour"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "The Theory of Supply"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "The Theory of Price Determination"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "The Theory of Production"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "Theory of Costs and Revenue"
      },
      {
        "topic_number": 40,
        "section": "Core Syllabus Units",
        "title": "Market Structures"
      },
      {
        "topic_number": 41,
        "section": "Core Syllabus Units",
        "title": "National Income"
      },
      {
        "topic_number": 42,
        "section": "Core Syllabus Units",
        "title": "Money and Inflation"
      },
      {
        "topic_number": 43,
        "section": "Core Syllabus Units",
        "title": "Financial Institutions"
      },
      {
        "topic_number": 44,
        "section": "Core Syllabus Units",
        "title": "Public Finance"
      },
      {
        "topic_number": 45,
        "section": "Core Syllabus Units",
        "title": "Economic Growth and Development"
      },
      {
        "topic_number": 46,
        "section": "Core Syllabus Units",
        "title": "Agriculture in Nigeria"
      },
      {
        "topic_number": 47,
        "section": "Core Syllabus Units",
        "title": "Industry and Industrialization"
      },
      {
        "topic_number": 48,
        "section": "Core Syllabus Units",
        "title": "Natural Resources and the Nigerian Economy"
      },
      {
        "topic_number": 49,
        "section": "Core Syllabus Units",
        "title": "Business Organizations"
      },
      {
        "topic_number": 50,
        "section": "Core Syllabus Units",
        "title": "Population"
      },
      {
        "topic_number": 51,
        "section": "Core Syllabus Units",
        "title": "International Trade"
      },
      {
        "topic_number": 52,
        "section": "Core Syllabus Units",
        "title": "International Economic Organizations"
      },
      {
        "topic_number": 53,
        "section": "Core Syllabus Units",
        "title": "Factors of Production and their Theories"
      },
      {
        "topic_number": 54,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      }
    ],
    "Government": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Basic Concepts in Government"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Forms of Government"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Arms of Government"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Structures of Governance"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Systems of Governance"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Political Ideologies"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Constitution"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Principles of Democratic Government"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Processes of Legislation"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Citizenship"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "The Electoral Process"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Political Parties and Party Systems"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Pressure Groups"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Public Opinion"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "The Civil Service"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Pre - colonial Polities"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Imperialist Penetration"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Process of Decolonization"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Constitutional Development in Nigeria"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Post - Independence Constitutions"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Institutions of Government in the Post - Independence Nigeria"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Public Commissions Established by the 1979 and Subsequent Constitutions"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Political Parties and Party Politics in Post-Independence Nigeria"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "The Structure and Workings of Nigerian Federalism"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "Public Corporations and Parastatals"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "Local Government"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "The Military in Nigerian Politics"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Foreign Policy"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Nigeria&#39;s Foreign Policy"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Relations with African Countries"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Nigeria in International Organizations"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "International Organizations"
      }
    ]
  },
  "WAEC": {
    "Mathematics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "NUMBER AND NUMERATION"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "B. ALGEBRAIC PROCESSES"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "D. PLANE GEOMETRY"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Triangles and Polygons."
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "E. COORDINATE GEOMETRY OF STRAIGHT LINES"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "F. TRIGONOMETRY"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "G. INTRODUCTORY CALCULUS"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "H. STATISTICS AND PROBABILITY."
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "I. VECTORS AND TRANSFORMATION"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "NUMBER AND NUMERATION"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "B. ALGEBRAIC PROCESSES"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "D. PLANE GEOMETRY"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Triangles and Polygons."
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "E. COORDINATE GEOMETRY OF STRAIGHT LINES"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "F. TRIGONOMETRY"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "G. INTRODUCTORY CALCULUS"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "H. STATISTICS AND PROBABILITY."
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "I. VECTORS AND TRANSFORMATION"
      },
      {
        "topic_number": 19,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Number bases"
      },
      {
        "topic_number": 20,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Fractions, Decimals, Approximations and Percentages"
      },
      {
        "topic_number": 21,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Indices, Logarithms and Surds"
      },
      {
        "topic_number": 22,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Sets"
      },
      {
        "topic_number": 23,
        "section": "SECTION II: ALGEBRA.",
        "title": "Polynomials"
      },
      {
        "topic_number": 24,
        "section": "SECTION II: ALGEBRA.",
        "title": "Variation"
      },
      {
        "topic_number": 25,
        "section": "SECTION II: ALGEBRA.",
        "title": "Inequalities"
      },
      {
        "topic_number": 26,
        "section": "SECTION II: ALGEBRA.",
        "title": "Progression"
      },
      {
        "topic_number": 27,
        "section": "SECTION II: ALGEBRA.",
        "title": "Binary Operations"
      },
      {
        "topic_number": 28,
        "section": "SECTION II: ALGEBRA.",
        "title": "Matrices and Determinants"
      },
      {
        "topic_number": 29,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Euclidean Geometry"
      },
      {
        "topic_number": 30,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Mensuration"
      },
      {
        "topic_number": 31,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Loci"
      },
      {
        "topic_number": 32,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Coordinate Geometry"
      },
      {
        "topic_number": 33,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Trigonometry"
      },
      {
        "topic_number": 34,
        "section": "SECTION IV: CALCULUS",
        "title": "Differentiation"
      },
      {
        "topic_number": 35,
        "section": "SECTION IV: CALCULUS",
        "title": "Application of differentiation"
      },
      {
        "topic_number": 36,
        "section": "SECTION IV: CALCULUS",
        "title": "Integration"
      },
      {
        "topic_number": 37,
        "section": "SECTION V: STATISTICS",
        "title": "Representation of data"
      },
      {
        "topic_number": 38,
        "section": "SECTION V: STATISTICS",
        "title": "Measures of Location"
      },
      {
        "topic_number": 39,
        "section": "SECTION V: STATISTICS",
        "title": "Measures of Dispersion"
      },
      {
        "topic_number": 40,
        "section": "SECTION V: STATISTICS",
        "title": "Permutation and Combination"
      },
      {
        "topic_number": 41,
        "section": "SECTION V: STATISTICS",
        "title": "Probability"
      }
    ],
    "Physics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "MEASUREMENTS AND UNITS"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "Scalars and Vectors"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Motion"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Gravitational field"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Equilibrium of Forces"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Work, Energy and Power"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Friction"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Simple Machines"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Elasticity"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Pressure"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Liquids At Rest"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Temperature and Its Measurement"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Thermal Expansion"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Gas Laws"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Quantity of Heat"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Change of State"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Vapours"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "Structure of Matter and Kinetic Theory"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Heat Transfer"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Waves"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Propagation of Sound Waves"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Characteristics of Sound Waves"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Light Energy"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Reflection of Light at Plane and Curved Surfaces"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Refraction of Light Through at Plane and Curved Surfaces"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Optical Instruments"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "Dispersion of light and colours"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "Electrostatics"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "Capacitors"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "Electric Cells"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Current Electricity"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Electrical Energy and Power"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Magnets and Magnetic Fields"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Force on a Current-Carrying Conductor in a Magnetic Field"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "Electromagnetic Induction"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "Simple A. C. Circuits"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "Conduction of Electricity Through;"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "Elementary Modern Physics"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "Introductory Electronics"
      }
    ],
    "Chemistry": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Separation of mixtures and purification of chemical substances"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "Chemical combination"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Kinetic theory of matter and Gas Laws"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Atomic structure and bonding"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Air"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Water"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Environmental Pollution"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Acids, bases and salts"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Oxidation and reduction"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Electrolysis"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Energy changes"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Rates of Chemical Reaction"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Non-metals and their compounds"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Metals and their compounds"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Organic Compounds"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Chemistry and Industry"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      }
    ],
    "Biology": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Concept of Living"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;Classification"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Organization of life"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Forms in which living cells exist"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Cell"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "The Cell and its environment"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Properties and functions of the living cell"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Transport System"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Respiratory System"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Excretory Systems and Mechanisms"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Regulation of Internal Environment (Homeostasis)"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Sense Organs"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Reproductive System"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Plant Nutrition"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Animal Nutrition"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "Ecosystem"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Ecological factors"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Simple Measurement of Ecological Factors"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Food webs and trophic levels"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Ecological Management"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Ecology of population"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Microorganisms: Man and health"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Conservation of Natural Resources"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Resources to be conserved: soil, water, wildlife, forest and minerals"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "Ways of ensuring conservation"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "Variation in Population"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Morphological variations in the physical appearance of individuals"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Physiological Variations"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Biology of Heredity (Genetics)"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Genetic Terminologies"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "Transmission and expression of characteristics in organisms"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "Chromosomes: The basis of heredity"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "Probability in genetics (Hybrid formation)"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "Linkage, sex determination and sex-linked characters"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "Application of the principles of heredity in"
      },
      {
        "topic_number": 40,
        "section": "Core Syllabus Units",
        "title": "Adaptation for Survival and Evolution"
      },
      {
        "topic_number": 41,
        "section": "Core Syllabus Units",
        "title": "Behavioural Adaptations in Social Animals"
      },
      {
        "topic_number": 42,
        "section": "Core Syllabus Units",
        "title": "Evolution"
      },
      {
        "topic_number": 43,
        "section": "SECTION B",
        "title": "Introducing Biology"
      },
      {
        "topic_number": 44,
        "section": "SECTION B",
        "title": "Cell Biology"
      },
      {
        "topic_number": 45,
        "section": "SECTION B",
        "title": "Life Processes in Living Things"
      },
      {
        "topic_number": 46,
        "section": "SECTION B",
        "title": "Diversity of Living Things"
      },
      {
        "topic_number": 47,
        "section": "SECTION B",
        "title": "Interactions in Nature&nbsp;Soil"
      },
      {
        "topic_number": 48,
        "section": "SECTION B",
        "title": "Mammalian Anatomy and Physiology"
      },
      {
        "topic_number": 49,
        "section": "SECTION B",
        "title": "Plant Structure and Physiology"
      },
      {
        "topic_number": 50,
        "section": "SECTION B",
        "title": "Humans and Their Environment"
      },
      {
        "topic_number": 51,
        "section": "SECTION B",
        "title": "Evolution"
      },
      {
        "topic_number": 52,
        "section": "SECTION B",
        "title": "Biology and Industry"
      },
      {
        "topic_number": 53,
        "section": "SECTION C",
        "title": "Concept of Living"
      },
      {
        "topic_number": 54,
        "section": "SECTION C",
        "title": "Sense organs"
      },
      {
        "topic_number": 55,
        "section": "SECTION C",
        "title": "Reproduction"
      },
      {
        "topic_number": 56,
        "section": "SECTION C",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 57,
        "section": "SECTION C",
        "title": "Nitrogen cycle"
      },
      {
        "topic_number": 58,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 59,
        "section": "SECTION C",
        "title": "Alimentary System"
      },
      {
        "topic_number": 60,
        "section": "SECTION C",
        "title": "Feeding habits"
      },
      {
        "topic_number": 61,
        "section": "SECTION C",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 62,
        "section": "SECTION C",
        "title": "Ecological Components"
      },
      {
        "topic_number": 63,
        "section": "SECTION C",
        "title": "Population Studies by Sampling"
      },
      {
        "topic_number": 64,
        "section": "SECTION C",
        "title": "Energy transformation in nature"
      },
      {
        "topic_number": 65,
        "section": "SECTION C",
        "title": "Nutrient Cycling in Nature"
      },
      {
        "topic_number": 66,
        "section": "SECTION C",
        "title": "Ecological Management"
      },
      {
        "topic_number": 67,
        "section": "SECTION C",
        "title": "Habitats"
      },
      {
        "topic_number": 68,
        "section": "SECTION C",
        "title": "Relevance of Biology to Agriculture"
      },
      {
        "topic_number": 69,
        "section": "SECTION C",
        "title": "Microorganisms: Man and His Health"
      },
      {
        "topic_number": 70,
        "section": "SECTION C",
        "title": "Application of Variations"
      },
      {
        "topic_number": 71,
        "section": "SECTION C",
        "title": "Evolution"
      },
      {
        "topic_number": 72,
        "section": "SECTION C",
        "title": "Adaptation for survival"
      },
      {
        "topic_number": 73,
        "section": "SECTION C",
        "title": "Structural Adaptation for"
      },
      {
        "topic_number": 74,
        "section": "SECTION C",
        "title": "Adaptive Colouration"
      },
      {
        "topic_number": 75,
        "section": "SECTION C",
        "title": "Plants and animals&#39;&nbsp;Colouration and their&nbsp;functions"
      },
      {
        "topic_number": 76,
        "section": "SECTION C",
        "title": "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;"
      },
      {
        "topic_number": 77,
        "section": "SECTION C",
        "title": "Concept of Living"
      },
      {
        "topic_number": 78,
        "section": "SECTION C",
        "title": "&nbsp;Classification"
      },
      {
        "topic_number": 79,
        "section": "SECTION C",
        "title": "Organization of life"
      },
      {
        "topic_number": 80,
        "section": "SECTION C",
        "title": "Forms in which living cells exist"
      },
      {
        "topic_number": 81,
        "section": "SECTION C",
        "title": "Cell"
      },
      {
        "topic_number": 82,
        "section": "SECTION C",
        "title": "The Cell and its environment"
      },
      {
        "topic_number": 83,
        "section": "SECTION C",
        "title": "Properties and functions of the living cell"
      },
      {
        "topic_number": 84,
        "section": "SECTION C",
        "title": "Transport System"
      },
      {
        "topic_number": 85,
        "section": "SECTION C",
        "title": "Respiratory System"
      },
      {
        "topic_number": 86,
        "section": "SECTION C",
        "title": "Excretory Systems and Mechanisms"
      },
      {
        "topic_number": 87,
        "section": "SECTION C",
        "title": "Regulation of Internal Environment (Homeostasis)"
      },
      {
        "topic_number": 88,
        "section": "SECTION C",
        "title": "Sense Organs"
      },
      {
        "topic_number": 89,
        "section": "SECTION C",
        "title": "Reproductive System"
      },
      {
        "topic_number": 90,
        "section": "SECTION C",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 91,
        "section": "SECTION C",
        "title": "Plant Nutrition"
      },
      {
        "topic_number": 92,
        "section": "SECTION C",
        "title": "Animal Nutrition"
      },
      {
        "topic_number": 93,
        "section": "SECTION C",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 94,
        "section": "SECTION C",
        "title": "Ecosystem"
      },
      {
        "topic_number": 95,
        "section": "SECTION C",
        "title": "Ecological factors"
      },
      {
        "topic_number": 96,
        "section": "SECTION C",
        "title": "Simple Measurement of Ecological Factors"
      },
      {
        "topic_number": 97,
        "section": "SECTION C",
        "title": "Food webs and trophic levels"
      },
      {
        "topic_number": 98,
        "section": "SECTION C",
        "title": "Ecological Management"
      },
      {
        "topic_number": 99,
        "section": "SECTION C",
        "title": "Ecology of population"
      },
      {
        "topic_number": 100,
        "section": "SECTION C",
        "title": "Microorganisms: Man and health"
      },
      {
        "topic_number": 101,
        "section": "SECTION C",
        "title": "Conservation of Natural Resources"
      },
      {
        "topic_number": 102,
        "section": "SECTION C",
        "title": "Resources to be conserved: soil, water, wildlife, forest and minerals"
      },
      {
        "topic_number": 103,
        "section": "SECTION C",
        "title": "Ways of ensuring conservation"
      },
      {
        "topic_number": 104,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 105,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 106,
        "section": "SECTION C",
        "title": "Variation in Population"
      },
      {
        "topic_number": 107,
        "section": "SECTION C",
        "title": "Morphological variations in the physical appearance of individuals"
      },
      {
        "topic_number": 108,
        "section": "SECTION C",
        "title": "Physiological Variations"
      },
      {
        "topic_number": 109,
        "section": "SECTION C",
        "title": "Biology of Heredity (Genetics)"
      },
      {
        "topic_number": 110,
        "section": "SECTION C",
        "title": "Genetic Terminologies"
      },
      {
        "topic_number": 111,
        "section": "SECTION C",
        "title": "Transmission and expression of characteristics in organisms"
      },
      {
        "topic_number": 112,
        "section": "SECTION C",
        "title": "Chromosomes: The basis of heredity"
      },
      {
        "topic_number": 113,
        "section": "SECTION C",
        "title": "Probability in genetics (Hybrid formation)"
      },
      {
        "topic_number": 114,
        "section": "SECTION C",
        "title": "Linkage, sex determination and sex-linked characters"
      },
      {
        "topic_number": 115,
        "section": "SECTION C",
        "title": "Application of the principles of heredity in"
      },
      {
        "topic_number": 116,
        "section": "SECTION C",
        "title": "Adaptation for Survival and Evolution"
      },
      {
        "topic_number": 117,
        "section": "SECTION C",
        "title": "Behavioural Adaptations in Social Animals"
      },
      {
        "topic_number": 118,
        "section": "SECTION C",
        "title": "Evolution"
      },
      {
        "topic_number": 119,
        "section": "SECTION B",
        "title": "Introducing Biology"
      },
      {
        "topic_number": 120,
        "section": "SECTION B",
        "title": "Cell Biology"
      },
      {
        "topic_number": 121,
        "section": "SECTION B",
        "title": "Life Processes in Living Things"
      },
      {
        "topic_number": 122,
        "section": "SECTION B",
        "title": "Diversity of Living Things"
      },
      {
        "topic_number": 123,
        "section": "SECTION B",
        "title": "Interactions in Nature&nbsp;Soil"
      },
      {
        "topic_number": 124,
        "section": "SECTION B",
        "title": "Mammalian Anatomy and Physiology"
      },
      {
        "topic_number": 125,
        "section": "SECTION B",
        "title": "Plant Structure and Physiology"
      },
      {
        "topic_number": 126,
        "section": "SECTION B",
        "title": "Humans and Their Environment"
      },
      {
        "topic_number": 127,
        "section": "SECTION B",
        "title": "Evolution"
      },
      {
        "topic_number": 128,
        "section": "SECTION B",
        "title": "Biology and Industry"
      },
      {
        "topic_number": 129,
        "section": "SECTION C",
        "title": "Concept of Living"
      },
      {
        "topic_number": 130,
        "section": "SECTION C",
        "title": "Sense organs"
      },
      {
        "topic_number": 131,
        "section": "SECTION C",
        "title": "Reproduction"
      },
      {
        "topic_number": 132,
        "section": "SECTION C",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 133,
        "section": "SECTION C",
        "title": "Nitrogen cycle"
      },
      {
        "topic_number": 134,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 135,
        "section": "SECTION C",
        "title": "Alimentary System"
      },
      {
        "topic_number": 136,
        "section": "SECTION C",
        "title": "Feeding habits"
      },
      {
        "topic_number": 137,
        "section": "SECTION C",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 138,
        "section": "SECTION C",
        "title": "Ecological Components"
      },
      {
        "topic_number": 139,
        "section": "SECTION C",
        "title": "Population Studies by Sampling"
      },
      {
        "topic_number": 140,
        "section": "SECTION C",
        "title": "Energy transformation in nature"
      },
      {
        "topic_number": 141,
        "section": "SECTION C",
        "title": "Nutrient Cycling in Nature"
      },
      {
        "topic_number": 142,
        "section": "SECTION C",
        "title": "Ecological Management"
      },
      {
        "topic_number": 143,
        "section": "SECTION C",
        "title": "Habitats"
      },
      {
        "topic_number": 144,
        "section": "SECTION C",
        "title": "Relevance of Biology to Agriculture"
      },
      {
        "topic_number": 145,
        "section": "SECTION C",
        "title": "Microorganisms: Man and His Health"
      },
      {
        "topic_number": 146,
        "section": "SECTION C",
        "title": "Application of Variations"
      },
      {
        "topic_number": 147,
        "section": "SECTION C",
        "title": "Evolution"
      },
      {
        "topic_number": 148,
        "section": "SECTION C",
        "title": "Adaptation for survival"
      },
      {
        "topic_number": 149,
        "section": "SECTION C",
        "title": "Structural Adaptation for"
      },
      {
        "topic_number": 150,
        "section": "SECTION C",
        "title": "Adaptive Colouration"
      },
      {
        "topic_number": 151,
        "section": "SECTION C",
        "title": "Plants and animals&#39;&nbsp;Colouration and their&nbsp;functions"
      },
      {
        "topic_number": 152,
        "section": "SECTION C",
        "title": "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;"
      },
      {
        "topic_number": 153,
        "section": "SECTION C",
        "title": "Living organisms"
      },
      {
        "topic_number": 154,
        "section": "SECTION C",
        "title": "Evolution among the following"
      },
      {
        "topic_number": 155,
        "section": "SECTION C",
        "title": "Variety of Organisms"
      },
      {
        "topic_number": 156,
        "section": "SECTION C",
        "title": "Internal structure of a flowering plant"
      },
      {
        "topic_number": 157,
        "section": "SECTION C",
        "title": "Nutrition"
      },
      {
        "topic_number": 158,
        "section": "SECTION C",
        "title": "Transport"
      },
      {
        "topic_number": 159,
        "section": "SECTION C",
        "title": "Respiration"
      },
      {
        "topic_number": 160,
        "section": "SECTION C",
        "title": "Excretion"
      },
      {
        "topic_number": 161,
        "section": "SECTION C",
        "title": "Support and movement"
      },
      {
        "topic_number": 162,
        "section": "SECTION C",
        "title": "Reproduction"
      },
      {
        "topic_number": 163,
        "section": "SECTION C",
        "title": "Growth"
      },
      {
        "topic_number": 164,
        "section": "SECTION C",
        "title": "Co-ordination and control"
      },
      {
        "topic_number": 165,
        "section": "SECTION C",
        "title": "Factors affecting the distribution of Organisms"
      },
      {
        "topic_number": 166,
        "section": "SECTION C",
        "title": "Symbiotic interactions of plants and animals"
      },
      {
        "topic_number": 167,
        "section": "SECTION C",
        "title": "Natural Habitats"
      },
      {
        "topic_number": 168,
        "section": "SECTION C",
        "title": "Local (Nigerian) Biomes"
      },
      {
        "topic_number": 169,
        "section": "SECTION C",
        "title": "The Ecology of Populations"
      },
      {
        "topic_number": 170,
        "section": "SECTION C",
        "title": "SOIL"
      },
      {
        "topic_number": 171,
        "section": "SECTION C",
        "title": "Humans and Environment"
      },
      {
        "topic_number": 172,
        "section": "SECTION C",
        "title": "Variation In Population"
      },
      {
        "topic_number": 173,
        "section": "SECTION C",
        "title": "Heredity"
      },
      {
        "topic_number": 174,
        "section": "SECTION C",
        "title": "Theories of evolution"
      },
      {
        "topic_number": 175,
        "section": "SECTION C",
        "title": "Evidence of evolution"
      }
    ],
    "English Language": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "A. LEXIS"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "PAPER 3: ORAL ENGLISH (30 marks)"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Test Of Orals (For candidates in Nigeria and Liberia)"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "A. LEXIS"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "PAPER 3: ORAL ENGLISH (30 marks)"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Test Of Orals (For candidates in Nigeria and Liberia)"
      }
    ],
    "Economics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "INTRODUCTION"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "OBJECTIVES"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "DEFINITION AND SCOPE OF ECONOMICS"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "FACTORS OF PRODUCTION"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "TYPES AND BASIC FEATURES OF ECONOMIC SYSTEMS"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "BASIC TOOLS OF ECONOMIC ANALYSIS"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "DEMAND"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "SUPPLY"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "THEORY OF CONSUMER BEHAVIOUR"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRICE DETERMINATION"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRODUCTION"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "THEORY OF COST AND REVENUE"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "MARKET STRUCTURES"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "BUSINESS ORGANIZATIONS"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "DISTRIBUTIVE TRADE"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "POPULATION AND LABOUR MARKET"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "INDUSTRIALIZATION"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "NATIONAL INCOME"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "MONEY AND INFLATION"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "FINANCIAL INSTITUTIONS"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "PUBLIC FINANCE"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC DEVELOPMENT AND PLANNING"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL TRADE AND BALANCE OF PAYMENTS"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC INTEGRATION"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL ECONOMIC ORGANIZATIONS"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "MAJOR NATURAL RESOURCES"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "INTRODUCTION"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "OBJECTIVES"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "DEFINITION AND SCOPE OF ECONOMICS"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "FACTORS OF PRODUCTION"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "TYPES AND BASIC FEATURES OF ECONOMIC SYSTEMS"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "BASIC TOOLS OF ECONOMIC ANALYSIS"
      },
      {
        "topic_number": 40,
        "section": "Core Syllabus Units",
        "title": "DEMAND"
      },
      {
        "topic_number": 41,
        "section": "Core Syllabus Units",
        "title": "SUPPLY"
      },
      {
        "topic_number": 42,
        "section": "Core Syllabus Units",
        "title": "THEORY OF CONSUMER BEHAVIOUR"
      },
      {
        "topic_number": 43,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 44,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRICE DETERMINATION"
      },
      {
        "topic_number": 45,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRODUCTION"
      },
      {
        "topic_number": 46,
        "section": "Core Syllabus Units",
        "title": "THEORY OF COST AND REVENUE"
      },
      {
        "topic_number": 47,
        "section": "Core Syllabus Units",
        "title": "MARKET STRUCTURES"
      },
      {
        "topic_number": 48,
        "section": "Core Syllabus Units",
        "title": "BUSINESS ORGANIZATIONS"
      },
      {
        "topic_number": 49,
        "section": "Core Syllabus Units",
        "title": "DISTRIBUTIVE TRADE"
      },
      {
        "topic_number": 50,
        "section": "Core Syllabus Units",
        "title": "POPULATION AND LABOUR MARKET"
      },
      {
        "topic_number": 51,
        "section": "Core Syllabus Units",
        "title": "INDUSTRIALIZATION"
      },
      {
        "topic_number": 52,
        "section": "Core Syllabus Units",
        "title": "NATIONAL INCOME"
      },
      {
        "topic_number": 53,
        "section": "Core Syllabus Units",
        "title": "MONEY AND INFLATION"
      },
      {
        "topic_number": 54,
        "section": "Core Syllabus Units",
        "title": "FINANCIAL INSTITUTIONS"
      },
      {
        "topic_number": 55,
        "section": "Core Syllabus Units",
        "title": "PUBLIC FINANCE"
      },
      {
        "topic_number": 56,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC DEVELOPMENT AND PLANNING"
      },
      {
        "topic_number": 57,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL TRADE AND BALANCE OF PAYMENTS"
      },
      {
        "topic_number": 58,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC INTEGRATION"
      },
      {
        "topic_number": 59,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL ECONOMIC ORGANIZATIONS"
      },
      {
        "topic_number": 60,
        "section": "Core Syllabus Units",
        "title": "MAJOR NATURAL RESOURCES"
      },
      {
        "topic_number": 61,
        "section": "Core Syllabus Units",
        "title": "Economics as a science"
      },
      {
        "topic_number": 62,
        "section": "Core Syllabus Units",
        "title": "Economic Systems"
      },
      {
        "topic_number": 63,
        "section": "Core Syllabus Units",
        "title": "Methods and Tools of Economic Analysis"
      },
      {
        "topic_number": 64,
        "section": "Core Syllabus Units",
        "title": "The Theory of Demand"
      },
      {
        "topic_number": 65,
        "section": "Core Syllabus Units",
        "title": "The Theory of Consumer Behaviour"
      },
      {
        "topic_number": 66,
        "section": "Core Syllabus Units",
        "title": "The Theory of Supply"
      },
      {
        "topic_number": 67,
        "section": "Core Syllabus Units",
        "title": "The Theory of Price Determination"
      },
      {
        "topic_number": 68,
        "section": "Core Syllabus Units",
        "title": "The Theory of Production"
      },
      {
        "topic_number": 69,
        "section": "Core Syllabus Units",
        "title": "Theory of Costs and Revenue"
      },
      {
        "topic_number": 70,
        "section": "Core Syllabus Units",
        "title": "Market Structures"
      },
      {
        "topic_number": 71,
        "section": "Core Syllabus Units",
        "title": "National Income"
      },
      {
        "topic_number": 72,
        "section": "Core Syllabus Units",
        "title": "Money and Inflation"
      },
      {
        "topic_number": 73,
        "section": "Core Syllabus Units",
        "title": "Financial Institutions"
      },
      {
        "topic_number": 74,
        "section": "Core Syllabus Units",
        "title": "Public Finance"
      },
      {
        "topic_number": 75,
        "section": "Core Syllabus Units",
        "title": "Economic Growth and Development"
      },
      {
        "topic_number": 76,
        "section": "Core Syllabus Units",
        "title": "Agriculture in Nigeria"
      },
      {
        "topic_number": 77,
        "section": "Core Syllabus Units",
        "title": "Industry and Industrialization"
      },
      {
        "topic_number": 78,
        "section": "Core Syllabus Units",
        "title": "Natural Resources and the Nigerian Economy"
      },
      {
        "topic_number": 79,
        "section": "Core Syllabus Units",
        "title": "Business Organizations"
      },
      {
        "topic_number": 80,
        "section": "Core Syllabus Units",
        "title": "Population"
      },
      {
        "topic_number": 81,
        "section": "Core Syllabus Units",
        "title": "International Trade"
      },
      {
        "topic_number": 82,
        "section": "Core Syllabus Units",
        "title": "International Economic Organizations"
      },
      {
        "topic_number": 83,
        "section": "Core Syllabus Units",
        "title": "Factors of Production and their Theories"
      },
      {
        "topic_number": 84,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      }
    ],
    "Government": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Basic Concepts in Government"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Forms of Government"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Arms of Government"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Structures of Governance"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Systems of Governance"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Political Ideologies"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Constitution"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Principles of Democratic Government"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Processes of Legislation"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Citizenship"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "The Electoral Process"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Political Parties and Party Systems"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Pressure Groups"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Public Opinion"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "The Civil Service"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Pre - colonial Polities"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Imperialist Penetration"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Process of Decolonization"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Constitutional Development in Nigeria"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Post - Independence Constitutions"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Institutions of Government in the Post - Independence Nigeria"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Public Commissions Established by the 1979 and Subsequent Constitutions"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Political Parties and Party Politics in Post-Independence Nigeria"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "The Structure and Workings of Nigerian Federalism"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "Public Corporations and Parastatals"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "Local Government"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "The Military in Nigerian Politics"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Foreign Policy"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Nigeria&#39;s Foreign Policy"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Relations with African Countries"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Nigeria in International Organizations"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "International Organizations"
      }
    ]
  },
  "NECO": {
    "Mathematics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "NUMBER AND NUMERATION"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "B. ALGEBRAIC PROCESSES"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "D. PLANE GEOMETRY"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Triangles and Polygons."
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "E. COORDINATE GEOMETRY OF STRAIGHT LINES"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "F. TRIGONOMETRY"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "G. INTRODUCTORY CALCULUS"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "H. STATISTICS AND PROBABILITY."
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "I. VECTORS AND TRANSFORMATION"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "NUMBER AND NUMERATION"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "B. ALGEBRAIC PROCESSES"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "D. PLANE GEOMETRY"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Triangles and Polygons."
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "E. COORDINATE GEOMETRY OF STRAIGHT LINES"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "F. TRIGONOMETRY"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "G. INTRODUCTORY CALCULUS"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "H. STATISTICS AND PROBABILITY."
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "I. VECTORS AND TRANSFORMATION"
      },
      {
        "topic_number": 19,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Number bases"
      },
      {
        "topic_number": 20,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Fractions, Decimals, Approximations and Percentages"
      },
      {
        "topic_number": 21,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Indices, Logarithms and Surds"
      },
      {
        "topic_number": 22,
        "section": "SECTION I: NUMBER AND NUMERATION",
        "title": "Sets"
      },
      {
        "topic_number": 23,
        "section": "SECTION II: ALGEBRA.",
        "title": "Polynomials"
      },
      {
        "topic_number": 24,
        "section": "SECTION II: ALGEBRA.",
        "title": "Variation"
      },
      {
        "topic_number": 25,
        "section": "SECTION II: ALGEBRA.",
        "title": "Inequalities"
      },
      {
        "topic_number": 26,
        "section": "SECTION II: ALGEBRA.",
        "title": "Progression"
      },
      {
        "topic_number": 27,
        "section": "SECTION II: ALGEBRA.",
        "title": "Binary Operations"
      },
      {
        "topic_number": 28,
        "section": "SECTION II: ALGEBRA.",
        "title": "Matrices and Determinants"
      },
      {
        "topic_number": 29,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Euclidean Geometry"
      },
      {
        "topic_number": 30,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Mensuration"
      },
      {
        "topic_number": 31,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Loci"
      },
      {
        "topic_number": 32,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Coordinate Geometry"
      },
      {
        "topic_number": 33,
        "section": "SECTION III: GEOMETRY AND TRIGONOMETRY",
        "title": "Trigonometry"
      },
      {
        "topic_number": 34,
        "section": "SECTION IV: CALCULUS",
        "title": "Differentiation"
      },
      {
        "topic_number": 35,
        "section": "SECTION IV: CALCULUS",
        "title": "Application of differentiation"
      },
      {
        "topic_number": 36,
        "section": "SECTION IV: CALCULUS",
        "title": "Integration"
      },
      {
        "topic_number": 37,
        "section": "SECTION V: STATISTICS",
        "title": "Representation of data"
      },
      {
        "topic_number": 38,
        "section": "SECTION V: STATISTICS",
        "title": "Measures of Location"
      },
      {
        "topic_number": 39,
        "section": "SECTION V: STATISTICS",
        "title": "Measures of Dispersion"
      },
      {
        "topic_number": 40,
        "section": "SECTION V: STATISTICS",
        "title": "Permutation and Combination"
      },
      {
        "topic_number": 41,
        "section": "SECTION V: STATISTICS",
        "title": "Probability"
      }
    ],
    "Physics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "MEASUREMENTS AND UNITS"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "Scalars and Vectors"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Motion"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Gravitational field"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Equilibrium of Forces"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Work, Energy and Power"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Friction"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Simple Machines"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Elasticity"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Pressure"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Liquids At Rest"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Temperature and Its Measurement"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Thermal Expansion"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Gas Laws"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Quantity of Heat"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Change of State"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Vapours"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "Structure of Matter and Kinetic Theory"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Heat Transfer"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Waves"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Propagation of Sound Waves"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Characteristics of Sound Waves"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Light Energy"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Reflection of Light at Plane and Curved Surfaces"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Refraction of Light Through at Plane and Curved Surfaces"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Optical Instruments"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "Dispersion of light and colours"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "Electrostatics"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "Capacitors"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "Electric Cells"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Current Electricity"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Electrical Energy and Power"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Magnets and Magnetic Fields"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Force on a Current-Carrying Conductor in a Magnetic Field"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "Electromagnetic Induction"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "Simple A. C. Circuits"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "Conduction of Electricity Through;"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "Elementary Modern Physics"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "Introductory Electronics"
      }
    ],
    "Chemistry": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Separation of mixtures and purification of chemical substances"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "Chemical combination"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Kinetic theory of matter and Gas Laws"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Atomic structure and bonding"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Air"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Water"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Environmental Pollution"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Acids, bases and salts"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Oxidation and reduction"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Electrolysis"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Energy changes"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Rates of Chemical Reaction"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Non-metals and their compounds"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Metals and their compounds"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Organic Compounds"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Chemistry and Industry"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      }
    ],
    "Biology": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Concept of Living"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;Classification"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Organization of life"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "Forms in which living cells exist"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Cell"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "The Cell and its environment"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "Properties and functions of the living cell"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Transport System"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Respiratory System"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Excretory Systems and Mechanisms"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Regulation of Internal Environment (Homeostasis)"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Sense Organs"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Reproductive System"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Plant Nutrition"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Animal Nutrition"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "Ecosystem"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Ecological factors"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Simple Measurement of Ecological Factors"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Food webs and trophic levels"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Ecological Management"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Ecology of population"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Microorganisms: Man and health"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Conservation of Natural Resources"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Resources to be conserved: soil, water, wildlife, forest and minerals"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "Ways of ensuring conservation"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "Variation in Population"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Morphological variations in the physical appearance of individuals"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Physiological Variations"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Biology of Heredity (Genetics)"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Genetic Terminologies"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "Transmission and expression of characteristics in organisms"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "Chromosomes: The basis of heredity"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "Probability in genetics (Hybrid formation)"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "Linkage, sex determination and sex-linked characters"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "Application of the principles of heredity in"
      },
      {
        "topic_number": 40,
        "section": "Core Syllabus Units",
        "title": "Adaptation for Survival and Evolution"
      },
      {
        "topic_number": 41,
        "section": "Core Syllabus Units",
        "title": "Behavioural Adaptations in Social Animals"
      },
      {
        "topic_number": 42,
        "section": "Core Syllabus Units",
        "title": "Evolution"
      },
      {
        "topic_number": 43,
        "section": "SECTION B",
        "title": "Introducing Biology"
      },
      {
        "topic_number": 44,
        "section": "SECTION B",
        "title": "Cell Biology"
      },
      {
        "topic_number": 45,
        "section": "SECTION B",
        "title": "Life Processes in Living Things"
      },
      {
        "topic_number": 46,
        "section": "SECTION B",
        "title": "Diversity of Living Things"
      },
      {
        "topic_number": 47,
        "section": "SECTION B",
        "title": "Interactions in Nature&nbsp;Soil"
      },
      {
        "topic_number": 48,
        "section": "SECTION B",
        "title": "Mammalian Anatomy and Physiology"
      },
      {
        "topic_number": 49,
        "section": "SECTION B",
        "title": "Plant Structure and Physiology"
      },
      {
        "topic_number": 50,
        "section": "SECTION B",
        "title": "Humans and Their Environment"
      },
      {
        "topic_number": 51,
        "section": "SECTION B",
        "title": "Evolution"
      },
      {
        "topic_number": 52,
        "section": "SECTION B",
        "title": "Biology and Industry"
      },
      {
        "topic_number": 53,
        "section": "SECTION C",
        "title": "Concept of Living"
      },
      {
        "topic_number": 54,
        "section": "SECTION C",
        "title": "Sense organs"
      },
      {
        "topic_number": 55,
        "section": "SECTION C",
        "title": "Reproduction"
      },
      {
        "topic_number": 56,
        "section": "SECTION C",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 57,
        "section": "SECTION C",
        "title": "Nitrogen cycle"
      },
      {
        "topic_number": 58,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 59,
        "section": "SECTION C",
        "title": "Alimentary System"
      },
      {
        "topic_number": 60,
        "section": "SECTION C",
        "title": "Feeding habits"
      },
      {
        "topic_number": 61,
        "section": "SECTION C",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 62,
        "section": "SECTION C",
        "title": "Ecological Components"
      },
      {
        "topic_number": 63,
        "section": "SECTION C",
        "title": "Population Studies by Sampling"
      },
      {
        "topic_number": 64,
        "section": "SECTION C",
        "title": "Energy transformation in nature"
      },
      {
        "topic_number": 65,
        "section": "SECTION C",
        "title": "Nutrient Cycling in Nature"
      },
      {
        "topic_number": 66,
        "section": "SECTION C",
        "title": "Ecological Management"
      },
      {
        "topic_number": 67,
        "section": "SECTION C",
        "title": "Habitats"
      },
      {
        "topic_number": 68,
        "section": "SECTION C",
        "title": "Relevance of Biology to Agriculture"
      },
      {
        "topic_number": 69,
        "section": "SECTION C",
        "title": "Microorganisms: Man and His Health"
      },
      {
        "topic_number": 70,
        "section": "SECTION C",
        "title": "Application of Variations"
      },
      {
        "topic_number": 71,
        "section": "SECTION C",
        "title": "Evolution"
      },
      {
        "topic_number": 72,
        "section": "SECTION C",
        "title": "Adaptation for survival"
      },
      {
        "topic_number": 73,
        "section": "SECTION C",
        "title": "Structural Adaptation for"
      },
      {
        "topic_number": 74,
        "section": "SECTION C",
        "title": "Adaptive Colouration"
      },
      {
        "topic_number": 75,
        "section": "SECTION C",
        "title": "Plants and animals&#39;&nbsp;Colouration and their&nbsp;functions"
      },
      {
        "topic_number": 76,
        "section": "SECTION C",
        "title": "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\r\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;"
      },
      {
        "topic_number": 77,
        "section": "SECTION C",
        "title": "Concept of Living"
      },
      {
        "topic_number": 78,
        "section": "SECTION C",
        "title": "&nbsp;Classification"
      },
      {
        "topic_number": 79,
        "section": "SECTION C",
        "title": "Organization of life"
      },
      {
        "topic_number": 80,
        "section": "SECTION C",
        "title": "Forms in which living cells exist"
      },
      {
        "topic_number": 81,
        "section": "SECTION C",
        "title": "Cell"
      },
      {
        "topic_number": 82,
        "section": "SECTION C",
        "title": "The Cell and its environment"
      },
      {
        "topic_number": 83,
        "section": "SECTION C",
        "title": "Properties and functions of the living cell"
      },
      {
        "topic_number": 84,
        "section": "SECTION C",
        "title": "Transport System"
      },
      {
        "topic_number": 85,
        "section": "SECTION C",
        "title": "Respiratory System"
      },
      {
        "topic_number": 86,
        "section": "SECTION C",
        "title": "Excretory Systems and Mechanisms"
      },
      {
        "topic_number": 87,
        "section": "SECTION C",
        "title": "Regulation of Internal Environment (Homeostasis)"
      },
      {
        "topic_number": 88,
        "section": "SECTION C",
        "title": "Sense Organs"
      },
      {
        "topic_number": 89,
        "section": "SECTION C",
        "title": "Reproductive System"
      },
      {
        "topic_number": 90,
        "section": "SECTION C",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 91,
        "section": "SECTION C",
        "title": "Plant Nutrition"
      },
      {
        "topic_number": 92,
        "section": "SECTION C",
        "title": "Animal Nutrition"
      },
      {
        "topic_number": 93,
        "section": "SECTION C",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 94,
        "section": "SECTION C",
        "title": "Ecosystem"
      },
      {
        "topic_number": 95,
        "section": "SECTION C",
        "title": "Ecological factors"
      },
      {
        "topic_number": 96,
        "section": "SECTION C",
        "title": "Simple Measurement of Ecological Factors"
      },
      {
        "topic_number": 97,
        "section": "SECTION C",
        "title": "Food webs and trophic levels"
      },
      {
        "topic_number": 98,
        "section": "SECTION C",
        "title": "Ecological Management"
      },
      {
        "topic_number": 99,
        "section": "SECTION C",
        "title": "Ecology of population"
      },
      {
        "topic_number": 100,
        "section": "SECTION C",
        "title": "Microorganisms: Man and health"
      },
      {
        "topic_number": 101,
        "section": "SECTION C",
        "title": "Conservation of Natural Resources"
      },
      {
        "topic_number": 102,
        "section": "SECTION C",
        "title": "Resources to be conserved: soil, water, wildlife, forest and minerals"
      },
      {
        "topic_number": 103,
        "section": "SECTION C",
        "title": "Ways of ensuring conservation"
      },
      {
        "topic_number": 104,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 105,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 106,
        "section": "SECTION C",
        "title": "Variation in Population"
      },
      {
        "topic_number": 107,
        "section": "SECTION C",
        "title": "Morphological variations in the physical appearance of individuals"
      },
      {
        "topic_number": 108,
        "section": "SECTION C",
        "title": "Physiological Variations"
      },
      {
        "topic_number": 109,
        "section": "SECTION C",
        "title": "Biology of Heredity (Genetics)"
      },
      {
        "topic_number": 110,
        "section": "SECTION C",
        "title": "Genetic Terminologies"
      },
      {
        "topic_number": 111,
        "section": "SECTION C",
        "title": "Transmission and expression of characteristics in organisms"
      },
      {
        "topic_number": 112,
        "section": "SECTION C",
        "title": "Chromosomes: The basis of heredity"
      },
      {
        "topic_number": 113,
        "section": "SECTION C",
        "title": "Probability in genetics (Hybrid formation)"
      },
      {
        "topic_number": 114,
        "section": "SECTION C",
        "title": "Linkage, sex determination and sex-linked characters"
      },
      {
        "topic_number": 115,
        "section": "SECTION C",
        "title": "Application of the principles of heredity in"
      },
      {
        "topic_number": 116,
        "section": "SECTION C",
        "title": "Adaptation for Survival and Evolution"
      },
      {
        "topic_number": 117,
        "section": "SECTION C",
        "title": "Behavioural Adaptations in Social Animals"
      },
      {
        "topic_number": 118,
        "section": "SECTION C",
        "title": "Evolution"
      },
      {
        "topic_number": 119,
        "section": "SECTION B",
        "title": "Introducing Biology"
      },
      {
        "topic_number": 120,
        "section": "SECTION B",
        "title": "Cell Biology"
      },
      {
        "topic_number": 121,
        "section": "SECTION B",
        "title": "Life Processes in Living Things"
      },
      {
        "topic_number": 122,
        "section": "SECTION B",
        "title": "Diversity of Living Things"
      },
      {
        "topic_number": 123,
        "section": "SECTION B",
        "title": "Interactions in Nature&nbsp;Soil"
      },
      {
        "topic_number": 124,
        "section": "SECTION B",
        "title": "Mammalian Anatomy and Physiology"
      },
      {
        "topic_number": 125,
        "section": "SECTION B",
        "title": "Plant Structure and Physiology"
      },
      {
        "topic_number": 126,
        "section": "SECTION B",
        "title": "Humans and Their Environment"
      },
      {
        "topic_number": 127,
        "section": "SECTION B",
        "title": "Evolution"
      },
      {
        "topic_number": 128,
        "section": "SECTION B",
        "title": "Biology and Industry"
      },
      {
        "topic_number": 129,
        "section": "SECTION C",
        "title": "Concept of Living"
      },
      {
        "topic_number": 130,
        "section": "SECTION C",
        "title": "Sense organs"
      },
      {
        "topic_number": 131,
        "section": "SECTION C",
        "title": "Reproduction"
      },
      {
        "topic_number": 132,
        "section": "SECTION C",
        "title": "Plant and Animal Nutrition"
      },
      {
        "topic_number": 133,
        "section": "SECTION C",
        "title": "Nitrogen cycle"
      },
      {
        "topic_number": 134,
        "section": "SECTION C",
        "title": "&nbsp;"
      },
      {
        "topic_number": 135,
        "section": "SECTION C",
        "title": "Alimentary System"
      },
      {
        "topic_number": 136,
        "section": "SECTION C",
        "title": "Feeding habits"
      },
      {
        "topic_number": 137,
        "section": "SECTION C",
        "title": "Basic Ecological Concepts"
      },
      {
        "topic_number": 138,
        "section": "SECTION C",
        "title": "Ecological Components"
      },
      {
        "topic_number": 139,
        "section": "SECTION C",
        "title": "Population Studies by Sampling"
      },
      {
        "topic_number": 140,
        "section": "SECTION C",
        "title": "Energy transformation in nature"
      },
      {
        "topic_number": 141,
        "section": "SECTION C",
        "title": "Nutrient Cycling in Nature"
      },
      {
        "topic_number": 142,
        "section": "SECTION C",
        "title": "Ecological Management"
      },
      {
        "topic_number": 143,
        "section": "SECTION C",
        "title": "Habitats"
      },
      {
        "topic_number": 144,
        "section": "SECTION C",
        "title": "Relevance of Biology to Agriculture"
      },
      {
        "topic_number": 145,
        "section": "SECTION C",
        "title": "Microorganisms: Man and His Health"
      },
      {
        "topic_number": 146,
        "section": "SECTION C",
        "title": "Application of Variations"
      },
      {
        "topic_number": 147,
        "section": "SECTION C",
        "title": "Evolution"
      },
      {
        "topic_number": 148,
        "section": "SECTION C",
        "title": "Adaptation for survival"
      },
      {
        "topic_number": 149,
        "section": "SECTION C",
        "title": "Structural Adaptation for"
      },
      {
        "topic_number": 150,
        "section": "SECTION C",
        "title": "Adaptive Colouration"
      },
      {
        "topic_number": 151,
        "section": "SECTION C",
        "title": "Plants and animals&#39;&nbsp;Colouration and their&nbsp;functions"
      },
      {
        "topic_number": 152,
        "section": "SECTION C",
        "title": "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;\n&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;"
      },
      {
        "topic_number": 153,
        "section": "SECTION C",
        "title": "Living organisms"
      },
      {
        "topic_number": 154,
        "section": "SECTION C",
        "title": "Evolution among the following"
      },
      {
        "topic_number": 155,
        "section": "SECTION C",
        "title": "Variety of Organisms"
      },
      {
        "topic_number": 156,
        "section": "SECTION C",
        "title": "Internal structure of a flowering plant"
      },
      {
        "topic_number": 157,
        "section": "SECTION C",
        "title": "Nutrition"
      },
      {
        "topic_number": 158,
        "section": "SECTION C",
        "title": "Transport"
      },
      {
        "topic_number": 159,
        "section": "SECTION C",
        "title": "Respiration"
      },
      {
        "topic_number": 160,
        "section": "SECTION C",
        "title": "Excretion"
      },
      {
        "topic_number": 161,
        "section": "SECTION C",
        "title": "Support and movement"
      },
      {
        "topic_number": 162,
        "section": "SECTION C",
        "title": "Reproduction"
      },
      {
        "topic_number": 163,
        "section": "SECTION C",
        "title": "Growth"
      },
      {
        "topic_number": 164,
        "section": "SECTION C",
        "title": "Co-ordination and control"
      },
      {
        "topic_number": 165,
        "section": "SECTION C",
        "title": "Factors affecting the distribution of Organisms"
      },
      {
        "topic_number": 166,
        "section": "SECTION C",
        "title": "Symbiotic interactions of plants and animals"
      },
      {
        "topic_number": 167,
        "section": "SECTION C",
        "title": "Natural Habitats"
      },
      {
        "topic_number": 168,
        "section": "SECTION C",
        "title": "Local (Nigerian) Biomes"
      },
      {
        "topic_number": 169,
        "section": "SECTION C",
        "title": "The Ecology of Populations"
      },
      {
        "topic_number": 170,
        "section": "SECTION C",
        "title": "SOIL"
      },
      {
        "topic_number": 171,
        "section": "SECTION C",
        "title": "Humans and Environment"
      },
      {
        "topic_number": 172,
        "section": "SECTION C",
        "title": "Variation In Population"
      },
      {
        "topic_number": 173,
        "section": "SECTION C",
        "title": "Heredity"
      },
      {
        "topic_number": 174,
        "section": "SECTION C",
        "title": "Theories of evolution"
      },
      {
        "topic_number": 175,
        "section": "SECTION C",
        "title": "Evidence of evolution"
      }
    ],
    "English Language": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "A. LEXIS"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "PAPER 3: ORAL ENGLISH (30 marks)"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Test Of Orals (For candidates in Nigeria and Liberia)"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "A. LEXIS"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "PAPER 3: ORAL ENGLISH (30 marks)"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Test Of Orals (For candidates in Nigeria and Liberia)"
      }
    ],
    "Economics": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "INTRODUCTION"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "OBJECTIVES"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "DEFINITION AND SCOPE OF ECONOMICS"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "FACTORS OF PRODUCTION"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "TYPES AND BASIC FEATURES OF ECONOMIC SYSTEMS"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "BASIC TOOLS OF ECONOMIC ANALYSIS"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "DEMAND"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "SUPPLY"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "THEORY OF CONSUMER BEHAVIOUR"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRICE DETERMINATION"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRODUCTION"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "THEORY OF COST AND REVENUE"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "MARKET STRUCTURES"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "BUSINESS ORGANIZATIONS"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "DISTRIBUTIVE TRADE"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "POPULATION AND LABOUR MARKET"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "INDUSTRIALIZATION"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "NATIONAL INCOME"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "MONEY AND INFLATION"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "FINANCIAL INSTITUTIONS"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "PUBLIC FINANCE"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC DEVELOPMENT AND PLANNING"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL TRADE AND BALANCE OF PAYMENTS"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC INTEGRATION"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL ECONOMIC ORGANIZATIONS"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "MAJOR NATURAL RESOURCES"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "INTRODUCTION"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "OBJECTIVES"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "DEFINITION AND SCOPE OF ECONOMICS"
      },
      {
        "topic_number": 36,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 37,
        "section": "Core Syllabus Units",
        "title": "FACTORS OF PRODUCTION"
      },
      {
        "topic_number": 38,
        "section": "Core Syllabus Units",
        "title": "TYPES AND BASIC FEATURES OF ECONOMIC SYSTEMS"
      },
      {
        "topic_number": 39,
        "section": "Core Syllabus Units",
        "title": "BASIC TOOLS OF ECONOMIC ANALYSIS"
      },
      {
        "topic_number": 40,
        "section": "Core Syllabus Units",
        "title": "DEMAND"
      },
      {
        "topic_number": 41,
        "section": "Core Syllabus Units",
        "title": "SUPPLY"
      },
      {
        "topic_number": 42,
        "section": "Core Syllabus Units",
        "title": "THEORY OF CONSUMER BEHAVIOUR"
      },
      {
        "topic_number": 43,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 44,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRICE DETERMINATION"
      },
      {
        "topic_number": 45,
        "section": "Core Syllabus Units",
        "title": "THEORY OF PRODUCTION"
      },
      {
        "topic_number": 46,
        "section": "Core Syllabus Units",
        "title": "THEORY OF COST AND REVENUE"
      },
      {
        "topic_number": 47,
        "section": "Core Syllabus Units",
        "title": "MARKET STRUCTURES"
      },
      {
        "topic_number": 48,
        "section": "Core Syllabus Units",
        "title": "BUSINESS ORGANIZATIONS"
      },
      {
        "topic_number": 49,
        "section": "Core Syllabus Units",
        "title": "DISTRIBUTIVE TRADE"
      },
      {
        "topic_number": 50,
        "section": "Core Syllabus Units",
        "title": "POPULATION AND LABOUR MARKET"
      },
      {
        "topic_number": 51,
        "section": "Core Syllabus Units",
        "title": "INDUSTRIALIZATION"
      },
      {
        "topic_number": 52,
        "section": "Core Syllabus Units",
        "title": "NATIONAL INCOME"
      },
      {
        "topic_number": 53,
        "section": "Core Syllabus Units",
        "title": "MONEY AND INFLATION"
      },
      {
        "topic_number": 54,
        "section": "Core Syllabus Units",
        "title": "FINANCIAL INSTITUTIONS"
      },
      {
        "topic_number": 55,
        "section": "Core Syllabus Units",
        "title": "PUBLIC FINANCE"
      },
      {
        "topic_number": 56,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC DEVELOPMENT AND PLANNING"
      },
      {
        "topic_number": 57,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL TRADE AND BALANCE OF PAYMENTS"
      },
      {
        "topic_number": 58,
        "section": "Core Syllabus Units",
        "title": "ECONOMIC INTEGRATION"
      },
      {
        "topic_number": 59,
        "section": "Core Syllabus Units",
        "title": "INTERNATIONAL ECONOMIC ORGANIZATIONS"
      },
      {
        "topic_number": 60,
        "section": "Core Syllabus Units",
        "title": "MAJOR NATURAL RESOURCES"
      },
      {
        "topic_number": 61,
        "section": "Core Syllabus Units",
        "title": "Economics as a science"
      },
      {
        "topic_number": 62,
        "section": "Core Syllabus Units",
        "title": "Economic Systems"
      },
      {
        "topic_number": 63,
        "section": "Core Syllabus Units",
        "title": "Methods and Tools of Economic Analysis"
      },
      {
        "topic_number": 64,
        "section": "Core Syllabus Units",
        "title": "The Theory of Demand"
      },
      {
        "topic_number": 65,
        "section": "Core Syllabus Units",
        "title": "The Theory of Consumer Behaviour"
      },
      {
        "topic_number": 66,
        "section": "Core Syllabus Units",
        "title": "The Theory of Supply"
      },
      {
        "topic_number": 67,
        "section": "Core Syllabus Units",
        "title": "The Theory of Price Determination"
      },
      {
        "topic_number": 68,
        "section": "Core Syllabus Units",
        "title": "The Theory of Production"
      },
      {
        "topic_number": 69,
        "section": "Core Syllabus Units",
        "title": "Theory of Costs and Revenue"
      },
      {
        "topic_number": 70,
        "section": "Core Syllabus Units",
        "title": "Market Structures"
      },
      {
        "topic_number": 71,
        "section": "Core Syllabus Units",
        "title": "National Income"
      },
      {
        "topic_number": 72,
        "section": "Core Syllabus Units",
        "title": "Money and Inflation"
      },
      {
        "topic_number": 73,
        "section": "Core Syllabus Units",
        "title": "Financial Institutions"
      },
      {
        "topic_number": 74,
        "section": "Core Syllabus Units",
        "title": "Public Finance"
      },
      {
        "topic_number": 75,
        "section": "Core Syllabus Units",
        "title": "Economic Growth and Development"
      },
      {
        "topic_number": 76,
        "section": "Core Syllabus Units",
        "title": "Agriculture in Nigeria"
      },
      {
        "topic_number": 77,
        "section": "Core Syllabus Units",
        "title": "Industry and Industrialization"
      },
      {
        "topic_number": 78,
        "section": "Core Syllabus Units",
        "title": "Natural Resources and the Nigerian Economy"
      },
      {
        "topic_number": 79,
        "section": "Core Syllabus Units",
        "title": "Business Organizations"
      },
      {
        "topic_number": 80,
        "section": "Core Syllabus Units",
        "title": "Population"
      },
      {
        "topic_number": 81,
        "section": "Core Syllabus Units",
        "title": "International Trade"
      },
      {
        "topic_number": 82,
        "section": "Core Syllabus Units",
        "title": "International Economic Organizations"
      },
      {
        "topic_number": 83,
        "section": "Core Syllabus Units",
        "title": "Factors of Production and their Theories"
      },
      {
        "topic_number": 84,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      }
    ],
    "Government": [
      {
        "topic_number": 1,
        "section": "Core Syllabus Units",
        "title": "Basic Concepts in Government"
      },
      {
        "topic_number": 2,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 3,
        "section": "Core Syllabus Units",
        "title": "Forms of Government"
      },
      {
        "topic_number": 4,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 5,
        "section": "Core Syllabus Units",
        "title": "Arms of Government"
      },
      {
        "topic_number": 6,
        "section": "Core Syllabus Units",
        "title": "Structures of Governance"
      },
      {
        "topic_number": 7,
        "section": "Core Syllabus Units",
        "title": "&nbsp;"
      },
      {
        "topic_number": 8,
        "section": "Core Syllabus Units",
        "title": "Systems of Governance"
      },
      {
        "topic_number": 9,
        "section": "Core Syllabus Units",
        "title": "Political Ideologies"
      },
      {
        "topic_number": 10,
        "section": "Core Syllabus Units",
        "title": "Constitution"
      },
      {
        "topic_number": 11,
        "section": "Core Syllabus Units",
        "title": "Principles of Democratic Government"
      },
      {
        "topic_number": 12,
        "section": "Core Syllabus Units",
        "title": "Processes of Legislation"
      },
      {
        "topic_number": 13,
        "section": "Core Syllabus Units",
        "title": "Citizenship"
      },
      {
        "topic_number": 14,
        "section": "Core Syllabus Units",
        "title": "The Electoral Process"
      },
      {
        "topic_number": 15,
        "section": "Core Syllabus Units",
        "title": "Political Parties and Party Systems"
      },
      {
        "topic_number": 16,
        "section": "Core Syllabus Units",
        "title": "Pressure Groups"
      },
      {
        "topic_number": 17,
        "section": "Core Syllabus Units",
        "title": "Public Opinion"
      },
      {
        "topic_number": 18,
        "section": "Core Syllabus Units",
        "title": "The Civil Service"
      },
      {
        "topic_number": 19,
        "section": "Core Syllabus Units",
        "title": "Pre - colonial Polities"
      },
      {
        "topic_number": 20,
        "section": "Core Syllabus Units",
        "title": "Imperialist Penetration"
      },
      {
        "topic_number": 21,
        "section": "Core Syllabus Units",
        "title": "Process of Decolonization"
      },
      {
        "topic_number": 22,
        "section": "Core Syllabus Units",
        "title": "Constitutional Development in Nigeria"
      },
      {
        "topic_number": 23,
        "section": "Core Syllabus Units",
        "title": "Post - Independence Constitutions"
      },
      {
        "topic_number": 24,
        "section": "Core Syllabus Units",
        "title": "Institutions of Government in the Post - Independence Nigeria"
      },
      {
        "topic_number": 25,
        "section": "Core Syllabus Units",
        "title": "Public Commissions Established by the 1979 and Subsequent Constitutions"
      },
      {
        "topic_number": 26,
        "section": "Core Syllabus Units",
        "title": "Political Parties and Party Politics in Post-Independence Nigeria"
      },
      {
        "topic_number": 27,
        "section": "Core Syllabus Units",
        "title": "The Structure and Workings of Nigerian Federalism"
      },
      {
        "topic_number": 28,
        "section": "Core Syllabus Units",
        "title": "Public Corporations and Parastatals"
      },
      {
        "topic_number": 29,
        "section": "Core Syllabus Units",
        "title": "Local Government"
      },
      {
        "topic_number": 30,
        "section": "Core Syllabus Units",
        "title": "The Military in Nigerian Politics"
      },
      {
        "topic_number": 31,
        "section": "Core Syllabus Units",
        "title": "Foreign Policy"
      },
      {
        "topic_number": 32,
        "section": "Core Syllabus Units",
        "title": "Nigeria&#39;s Foreign Policy"
      },
      {
        "topic_number": 33,
        "section": "Core Syllabus Units",
        "title": "Relations with African Countries"
      },
      {
        "topic_number": 34,
        "section": "Core Syllabus Units",
        "title": "Nigeria in International Organizations"
      },
      {
        "topic_number": 35,
        "section": "Core Syllabus Units",
        "title": "International Organizations"
      }
    ]
  }
};

export function getTopicsForExamSubject(exam: 'JAMB' | 'WAEC' | 'NECO', subject: string): SyllabusTopicItem[] {
  const examMap = SYLLABUS_DATABASE[exam];
  if (!examMap) return [];
  
  // Direct match or partial search
  const foundKey = Object.keys(examMap).find(k => k.toLowerCase().includes(subject.toLowerCase()) || subject.toLowerCase().includes(k.toLowerCase()));
  return foundKey ? examMap[foundKey] : [];
}
