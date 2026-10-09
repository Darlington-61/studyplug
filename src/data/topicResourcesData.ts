import { Question } from './questions';
import { COMPREHENSIVE_NOTES } from './comprehensiveNotes/index';
import { ALL_QUESTIONS } from './allQuestionsHub';

export interface TopicResource {
  id: string;
  type: 'video' | 'pdf' | 'note' | 'external' | 'diagram';
  title: string;
  description: string;
  url?: string;
  thumbnail?: string;
  duration?: string;
  fileSize?: string;
  youtubeId?: string;
  content?: string;
}

export interface SubtopicItem {
  id: string;
  subtopicTitle: string;
  order: number;
  content: string;
  definitions?: { term: string; meaning: string }[];
  keyPoints?: string[];
  formulas?: string[];
  examples?: { title: string; problem: string; solution: string }[];
  examTips?: string[];
  diagramUrl?: string;
  diagramCaption?: string;
  resources: TopicResource[];
  questions?: Question[];
  repeatedQuestions?: Question[];
}

export interface SyllabusTopic {
  id: string;
  exam: 'JAMB' | 'WAEC' | 'NECO' | 'NABTEB' | 'BECE';
  subject: string;
  topicTitle: string;
  category?: string;
  description: string;
  subtopics: SubtopicItem[];
  globalResources: TopicResource[];
  repeatedQuestions?: Question[];
}

// ─────────────────────────────────────────────────────────────────────────────
// CURATED MASTER TOPICS WITH SUBTOPICS & ATTACHED MULTIMEDIA RESOURCES
// ─────────────────────────────────────────────────────────────────────────────

export const CURATED_TOPICS: SyllabusTopic[] = [
  // ─── CHEMISTRY: ORGANIC CHEMISTRY ──────────────────────────────────────────
  {
    id: 'chem-org-01',
    exam: 'JAMB',
    subject: 'Chemistry',
    topicTitle: 'Organic Chemistry',
    category: 'General & Organic Chemistry',
    description: 'Structure, bonding, nomenclature, hydrocarbons, functional groups and reaction mechanisms for UTME and WASSCE.',
    globalResources: [
      {
        id: 'res-chem-pdf-01',
        type: 'pdf',
        title: 'JAMB Organic Chemistry High-Yield Formula Sheet',
        description: 'Complete synthesis pathways, homologous series, and IUPAC rules distilled into a 4-page PDF summary.',
        fileSize: '2.1 MB',
        url: 'https://studyplug.com.ng/resources/chem_organic_summary.pdf'
      },
      {
        id: 'res-chem-vid-01',
        type: 'video',
        title: 'Mastering Organic Chemistry Reactions in 25 Minutes',
        description: 'Comprehensive breakdown of substitution, addition, elimination and esterification reactions.',
        duration: '24:18',
        thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
        youtubeId: '3QpL5rQ0kQw'
      }
    ],
    subtopics: [
      {
        id: 'sub-chem-01',
        subtopicTitle: 'Introduction, Bonding & Classification of Organic Compounds',
        order: 1,
        content: `### 1. Introduction to Organic Chemistry
Historically, organic compounds were believed to originate exclusively from living organisms endowed with a supernatural "Vital Force" (Vitalism theory). In 1828, German chemist Friedrich Wöhler revolutionized the chemical sciences by synthesizing organic urea $\\text{CO(NH}_2)_2$ from an inorganic mineral salt, ammonium cyanate $\\text{NH}_4\\text{OCN}$:
$$\\text{NH}_4\\text{OCN} \\xrightarrow{\\Delta} \\text{CO(NH}_2)_2$$
Today, organic chemistry is defined as the scientific study of carbon-containing compounds, specifically hydrocarbons and their derivatives. Simple carbon oxides ($\\text{CO}, \\text{CO}_2$), metallic carbonates ($\\text{CO}_3^{2-}$), hydrogen carbonates ($\\text{HCO}_3^-$), metallic carbides ($\\text{CaC}_2$), and cyanides ($\\text{CN}^-$) are traditionally classified under inorganic chemistry.

### 2. The Unique Nature of Carbon
Over 10 million distinct organic compounds are known today. This staggering chemical diversity arises from three unique atomic attributes of carbon ($Z = 6$):
1. **Catenation**: The unique ability of carbon atoms to form strong covalent bonds with one another ($\\text{C}-\\text{C}$ bond energy $\\approx 348\\text{ kJ/mol}$) to create stable, extensive open chains (straight or branched) and cyclic rings of various sizes.
2. **Tetravalency**: With valence electronic configuration $2s^2 2p_x^1 2p_y^1 2p_z^0$, carbon promotes an electron from the $2s$ orbital into the vacant $2p_z$ orbital upon excitation, creating 4 unpaired electrons that form four stable covalent bonds to satisfy the octet rule.
3. **Orbital Hybridization & Multiple Bonding**: Carbon atomic orbitals mix into equivalent hybrid orbitals to form single, double, and triple bonds:
- **$sp^3$ Hybridization**: Mixes one $2s$ and three $2p$ orbitals, forming 4 equivalent single $\\sigma$ bonds with tetrahedral geometry and bond angle $109.5^\\circ$ (e.g., methane $\\text{CH}_4$).
- **$sp^2$ Hybridization**: Mixes one $2s$ and two $2p$ orbitals, forming 3 planar $\\sigma$ bonds and leaving one unhybridized $p$ orbital to form a lateral $\\pi$ bond. Geometry is trigonal planar with bond angle $120^\\circ$ (e.g., ethene $\\text{C}_2\\text{H}_4$).
- **$sp$ Hybridization**: Mixes one $2s$ and one $2p$ orbital, forming 2 linear $\\sigma$ bonds and two perpendicular $\\pi$ bonds with linear geometry and bond angle $180^\\circ$ (e.g., ethyne $\\text{C}_2\\text{H}_2$).

### 3. Classification of Organic Compounds
Organic compounds are structured into two major primary classes:
1. **Acyclic (Aliphatic / Open-Chain) Compounds**:
- **Saturated Hydrocarbons**: Contain exclusively carbon-carbon single bonds ($\\text{C}-\\text{C}$), maximizing hydrogen saturation (e.g., Alkanes).
- **Unsaturated Hydrocarbons**: Contain at least one carbon-carbon double bond ($\\text{C}=\\text{C}$) or triple bond ($\\text{C}\\equiv\\text{C}$) (e.g., Alkenes, Alkynes).
2. **Cyclic (Closed-Ring) Compounds**:
- **Alicyclic (Homocyclic)**: Carbon atoms form non-aromatic rings possessing properties similar to open-chain aliphatics (e.g., Cyclopropane, Cyclohexane).
- **Aromatic Hydrocarbons**: Closed-ring structures possessing special thermodynamic stability and delocalized $\\pi$-electron systems conforming to Hückel's Rule ($4n + 2$ $\\pi$ electrons), notably benzene ($\\text{C}_6\\text{H}_6$) and its derivatives.
- **Heterocyclic Compounds**: Ring systems where one or more ring atoms are non-carbon heteroatoms such as Nitrogen, Oxygen, or Sulfur (e.g., Pyridine, Furan).

### 4. Homologous Series & Functional Groups
A **functional group** is an atom or bonded group of atoms in an organic molecule that dictates its characteristic chemical reactivity and properties.
A **homologous series** is a family of organic compounds containing the identical functional group. All members exhibit five defining characteristics:
1. All members conform to a universal general molecular formula (e.g., Alkanes $C_n H_{2n+2}$, Alkanols $C_n H_{2n+1}\\text{OH}$).
2. Each successive (adjacent) member differs from the next by a fixed $-\\text{CH}_2-$ (methylene) group.
3. Adjacent members differ in relative molecular mass by exactly $14\\text{ g/mol}$ (Carbon $= 12$, Hydrogen $= 1 \\times 2$).
4. All members exhibit identical chemical properties due to sharing the same functional group.
5. They exhibit a smooth, regular gradation in physical properties (boiling point, melting point, density, and viscosity increase steadily as carbon chain length increases due to greater surface area and stronger London dispersion forces).

### 5. Master Table of Organic Functional Groups
| Family | Functional Group | General Formula | IUPAC Suffix / Prefix | Characteristic Example |
|---|---|---|---|---|
| Alkane | $\\text{C}-\\text{C}$ (single bond) | $C_n H_{2n+2}$ | -ane | Ethane ($\\text{CH}_3\\text{CH}_3$) |
| Alkene | $\\text{C}=\\text{C}$ (double bond) | $C_n H_{2n}$ | -ene | Ethene ($\\text{CH}_2=\\text{CH}_2$) |
| Alkyne | $\\text{C}\\equiv\\text{C}$ (triple bond) | $C_n H_{2n-2}$ | -yne | Ethyne ($\\text{CH}\\equiv\\text{CH}$) |
| Alkanol | $-\\text{OH}$ (hydroxyl) | $C_n H_{2n+1}\\text{OH}$ | -ol | Ethanol ($\\text{C}_2\\text{H}_5\\text{OH}$) |
| Haloalkane | $-\\text{X}$ (halogen: $\\text{Cl, Br, I}$) | $C_n H_{2n+1}\\text{X}$ | halo- | Chloroethane ($\\text{C}_2\\text{H}_5\\text{Cl}$) |
| Alkanal | $-\\text{CHO}$ (formyl / aldehyde) | $C_n H_{2n}\\text{O}$ | -al | Ethanal ($\\text{CH}_3\\text{CHO}$) |
| Alkanone | $>\\text{C}=\\text{O}$ (carbonyl / ketone) | $C_n H_{2n}\\text{O}$ | -one | Propanone ($\\text{CH}_3\\text{COCH}_3$) |
| Alkanoic Acid | $-\\text{COOH}$ (carboxyl) | $C_n H_{2n+1}\\text{COOH}$ | -oic acid | Ethanoic acid ($\\text{CH}_3\\text{COOH}$) |
| Ester | $-\\text{COOR}$ (alkoxycarbonyl) | $C_n H_{2n}\\text{O}_2$ | -oate | Ethyl ethanoate ($\\text{CH}_3\\text{COOC}_2\\text{H}_5$) |
| Amine | $-\\text{NH}_2$ (amino) | $R-\\text{NH}_2$ | -amine | Methylamine ($\\text{CH}_3\\text{NH}_2$) |
| Amide | $-\\text{CONH}_2$ (carboxamide) | $R-\\text{CONH}_2$ | -amide | Ethanamide ($\\text{CH}_3\\text{CONH}_2$) |

### 6. IUPAC Nomenclature System
Every systematic IUPAC name consists of three vital building blocks:
$$\\text{Prefix (Substituents/Branches)} + \\text{Root Word (Chain Length)} + \\text{Suffix (Principal Functional Group)}$$

**Fundamental Carbon Chain Root Words**:
- $C_1$: Meth- | $C_2$: Eth- | $C_3$: Prop- | $C_4$: But- | $C_5$: Pent-
- $C_6$: Hex- | $C_7$: Hept- | $C_8$: Oct- | $C_9$: Non- | $C_{10}$: Dec-

**The 5 Rules of IUPAC Nomenclature**:
1. **Longest Continuous Chain**: Locate the longest continuous chain of carbon atoms containing the principal functional group. This determines the parent hydrocarbon root name.
2. **Numbering Priority**: Number the carbon chain from the end that assigns the lowest possible locant (number) to:
   - (a) The principal functional group ($-\\text{COOH} > -\\text{CHO} > >\\text{C}=\\text{O} > -\\text{OH} > -\\text{NH}_2$).
   - (b) Carbon-carbon double/triple bonds.
   - (c) Substituent alkyl branches and halogen atoms.
3. **Alphabetical Order**: List substituent branches alphabetically (e.g., ethyl precedes methyl) irrespective of their carbon position numbers. Multiplicative prefixes (di-, tri-, tetra-) are ignored in alphabetical sorting.
4. **Multiplying Prefixes**: When the same substituent appears multiple times, use di- (2), tri- (3), tetra- (4). Each substituent must receive its own separate locant number.
5. **Punctuation Rules**: Hyphens separate numbers from letters (e.g., 2-methylbutane); commas separate consecutive numbers (e.g., 2,2-dimethylpropane).

### 7. Isomerism in Organic Compounds
Isomers are distinct chemical compounds that share identical molecular formulas but have different structural arrangements or spatial configurations.

1. **Structural (Constitutional) Isomerism**:
- **Chain Isomerism**: Arises from differences in the branching of the carbon skeleton (e.g., butane $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3$ and 2-methylpropane $\\text{CH}_3\\text{CH(CH}_3)\\text{CH}_3$).
- **Positional Isomerism**: The carbon skeleton remains identical, but the functional group or substituent is attached at different positions (e.g., propan-1-ol $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$ and propan-2-ol $\\text{CH}_3\\text{CH(OH)CH}_3$; but-1-ene and but-2-ene).
- **Functional Group Isomerism**: Compounds share the same molecular formula but possess entirely different functional groups belonging to different homologous series:
  - Alkanols and Ethers: $C_n H_{2n+2}\\text{O}$ (e.g., Ethanol $\\text{C}_2\\text{H}_5\\text{OH}$ vs Methoxymethane $\\text{CH}_3-\\text{O}-\\text{CH}_3$).
  - Alkanals and Alkanones: $C_n H_{2n}\\text{O}$ (e.g., Propanal $\\text{CH}_3\\text{CH}_2\\text{CHO}$ vs Propanone $\\text{CH}_3\\text{COCH}_3$).
  - Alkanoic Acids and Esters: $C_n H_{2n}\\text{O}_2$ (e.g., Ethanoic acid $\\text{CH}_3\\text{COOH}$ vs Methyl methanoate $\\text{HCOOCH}_3$).

2. **Stereoisomerism (Spatial Isomerism)**:
- **Geometric (Cis-Trans) Isomerism**: Occurs when there is restricted rotation around a carbon-carbon double bond ($\\text{C}=\\text{C}$) and each alkene carbon holds two different attached groups.
  - **Cis-isomer**: Identical/similar groups reside on the same side of the double bond.
  - **Trans-isomer**: Identical/similar groups reside on opposite sides of the double bond (more thermodynamically stable due to minimized steric hindrance).
- **Optical Isomerism**: Arises in molecules with at least one **chiral (asymmetric) carbon atom** bonded to four entirely different groups. Non-superimposable mirror images are called **enantiomers** and rotate plane-polarized light in opposite directions.

### 8. Qualitative Elemental Analysis of Organic Compounds
To determine which elements are present in an unknown organic sample:
1. **Carbon and Hydrogen (Combustion with $\\text{CuO}$)**:
$$\\text{C} + 2\\text{CuO} \\xrightarrow{\\Delta} \\text{CO}_2 + 2\\text{Cu}$$
$$2\\text{H} + \\text{CuO} \\xrightarrow{\\Delta} \\text{H}_2\\text{O} + \\text{Cu}$$
- $\\text{CO}_2$ gas turns calcium hydroxide solution (lime water) milky due to insoluble $\\text{CaCO}_3$ formation.
- $\\text{H}_2\\text{O}$ vapor turns white anhydrous copper(II) sulfate blue or blue cobalt(II) chloride paper pink.
2. **Nitrogen, Sulfur, and Halogens (Lassaigne's Sodium Fusion Test)**:
Fusing the organic sample with molten sodium metal converts covalently bonded heteroatoms into ionic sodium salts:
- **Nitrogen**: Forms sodium cyanide ($\\text{NaCN}$). Boiling with $\\text{FeSO}_4$, acidifying with dilute $\\text{H}_2\\text{SO}_4$, and adding $\\text{FeCl}_3$ gives a distinctive **Prussian blue precipitate** $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$.
- **Sulfur**: Forms sodium sulfide ($\\text{Na}_2\\text{S}$). Reaction with sodium nitroprusside yields an intense **purple coloration**, or lead acetate yields a **black precipitate** of $\\text{PbS}$.
- **Halogens**: Forms sodium halides ($\\text{NaX}$). Acidifying with dilute $\\text{HNO}_3$ and adding $\\text{AgNO}_3$ produces:
  - $\\text{Cl}^-$: White precipitate ($\\text{AgCl}$), soluble in dilute aqueous ammonia.
  - $\\text{Br}^-$: Pale cream precipitate ($\\text{AgBr}$), sparingly soluble in concentrated ammonia.
  - $\\text{I}^-$: Pale yellow precipitate ($\\text{AgI}$), completely insoluble in aqueous ammonia.`,
        definitions: [
          {
            term: 'Catenation',
            meaning: 'The unique ability of an element (predominantly carbon) to bond with other atoms of the same element to form stable, extended open chains or rings.'
          },
          {
            term: 'Functional Group',
            meaning: 'An atom or group of bonded atoms in an organic molecule that determines its characteristic chemical properties and reaction mechanisms.'
          },
          {
            term: 'Homologous Series',
            meaning: 'A family of organic compounds sharing the same general formula, identical functional group, differing by -CH2- (14 g/mol), and showing gradation in physical properties.'
          },
          {
            term: 'Isomerism',
            meaning: 'The phenomenon whereby two or more compounds have the same molecular formula but different structural arrangements or spatial configurations.'
          },
          {
            term: 'Chiral Carbon (Asymmetric Carbon)',
            meaning: 'A carbon atom that is bonded to four entirely different atoms or groups of atoms, making the molecule optically active.'
          }
        ],
        keyPoints: [
          'Alkanes have general formula $C_n H_{2n+2}$ and are saturated hydrocarbons with single bonds.',
          'Each successive member of any homologous series differs by a $-\\text{CH}_2-$ unit ($14\\text{ a.m.u.}$).',
          'Aliphatic compounds consist of open chains; aromatic compounds contain stabilized benzene-ring structures.',
          'Functional groups supersede alkyl substituents in numbering IUPAC carbon chains.',
          'Lassaigne sodium fusion converts covalently bonded N, S, and halogens into ionic water-soluble salts for qualitative detection.'
        ],
        formulas: [
          'Alkanes Formula: C_n H_{2n+2}',
          'Alkenes Formula: C_n H_{2n}',
          'Alkynes Formula: C_n H_{2n-2}',
          'Alkanols Formula: C_n H_{2n+1}OH',
          'Alkanals & Alkanones: C_n H_{2n}O',
          'Alkanoic Acids & Esters: C_n H_{2n}O_2',
          'Index of Hydrogen Deficiency: IHD = C + 1 - \\frac{H}{2} - \\frac{X}{2} + \\frac{N}{2}'
        ],
        examples: [
          {
            title: 'IUPAC Naming of Branched Hydrocarbon with Multiple Substituents',
            problem: 'Provide the systematic IUPAC name for: CH3-CH(CH3)-CH(C2H5)-CH2-CH3',
            solution: 'Step 1: Identify the longest continuous carbon chain containing both branches.\n  Looking at the structure: C1(CH3) - C2(CH(CH3)) - C3(CH(C2H5)) - C4(CH2) - C5(CH3).\n  Wait! The ethyl group at C3 has 2 carbons: C3 - CH2 - CH3.\n  Tracing: C1(CH3) - C2(CH(CH3)) - C3(CH) - C4(CH2) - C5(CH3) yields 6 carbons (hexane) if traced through the ethyl group!\n  Longest chain = 6 carbons (hexane).\nStep 2: Number the chain from the end giving lowest locants:\n  From left: C2 has methyl, C3 has methyl. Total locants: 2, 3.\n  From right: C4 has methyl, C5 has methyl. Total locants: 4, 5.\n  Left numbering wins: locants are 2 and 3.\nStep 3: Combine with parent name:\n  Two methyl groups at positions 2 and 3: 2,3-dimethylhexane.\nFinal Result: 2,3-dimethylhexane.'
          },
          {
            title: 'Identifying Functional Group Isomers of C3H6O',
            problem: 'Write down two functional group isomers with the molecular formula C3H6O and name each according to IUPAC.',
            solution: 'The formula C3H6O corresponds to general formula CnH2nO (1 degree of unsaturation).\nIsomer 1 (Alkanal / Aldehyde): CH3-CH2-CHO -> Propanal.\nIsomer 2 (Alkanone / Ketone): CH3-CO-CH3 -> Propanone (Acetone).\nBoth share the identical molecular formula C3H6O but belong to completely different homologous families.'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: Never automatically assume the horizontal chain is the longest! Always check whether branched ethyl (-C2H5) groups extend the parent chain length.',
          'Alphabetical Ordering Rule: In naming, "ethyl" ALWAYS precedes "methyl", but prefixes like di-, tri- and sec- are ignored. However, "iso" and "cyclo" are considered in alphabetical order!',
          'Combustion Test: Homologous series members possess identical chemical properties but DIFFERENT physical properties due to increasing molecular weight and van der Waals forces.'
        ],
        diagramUrl: '/diagrams/math_q10.png',
        diagramCaption: 'Homologous series gradation and tetrahedral orbital geometry of methane.',
        resources: [
          {
            id: 'res-vid-sub1',
            type: 'video',
            title: 'Hydrocarbon Basics & IUPAC Nomenclature',
            description: 'Step-by-step guide to naming any aliphatic compound using standard IUPAC guidelines.',
            duration: '18:10',
            thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'bURw0hK6NqI'
          },
          {
            id: 'res-pdf-sub1',
            type: 'pdf',
            title: 'IUPAC Nomenclature Cheat Sheet',
            description: 'Printable chart containing root words, suffixes, prefixes and priority tables for functional groups.',
            fileSize: '1.4 MB',
            url: 'https://studyplug.com.ng/resources/iupac_rules.pdf'
          }
        ],
        questions: [
          {
            id: 8101,
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            question: 'Which of the following compounds belongs to the homologous series of alkanols?',
            options: ['C2H4', 'C2H5OH', 'CH3COOH', 'CH3OCH3'],
            answer: 1,
            explanation: 'Alkanols have the general formula CnH2n+1OH. C2H5OH (ethanol) matches this formula.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          },
          {
            id: 8102,
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            question: 'Successive members of any homologous series differ by which molecular mass unit?',
            options: ['12 g/mol', '14 g/mol', '16 g/mol', '18 g/mol'],
            answer: 1,
            explanation: 'Adjacent members differ by a -CH2- group: Carbon (12) + 2 Hydrogen (2) = 14 g/mol.',
            year: 2023,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ],
        repeatedQuestions: [
          {
            id: 8103,
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            question: 'The ability of carbon atoms to form strong covalent bonds with one another into long chains is known as:',
            options: ['Catenation', 'Polymerization', 'Condensation', 'Hybridization'],
            answer: 0,
            explanation: 'Catenation is the self-linking of carbon atoms through covalent bonds, producing chains and rings of varied size and complexity.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'medium'
          }
        ]
      },
      {
        id: 'sub-chem-02',
        subtopicTitle: 'Hydrocarbons: Alkanes, Alkenes, Alkynes & Aromatic Compounds',
        order: 2,
        content: `### 1. Alkanes (Paraffins)
Alkanes are saturated hydrocarbons containing only single covalent carbon-carbon ($\\sigma$) bonds, with general formula $C_n H_{2n+2}$. They are termed "paraffins" (Latin: *parum affinis* = little affinity) because of their relative chemical inertness under normal laboratory conditions.

**Laboratory Preparation of Methane ($\\text{CH}_4$)**:
Decarboxylation of anhydrous sodium ethanoate by heating with soda lime (a mixture of $\\text{NaOH}$ and $\\text{CaO}$):
$$\\text{CH}_3\\text{COONa(s)} + \\text{NaOH(s)} \\xrightarrow{\\text{CaO}, \\Delta} \\text{CH}_{4\\text{(g)}} + \\text{Na}_2\\text{CO}_{3\\text{(s)}}$$
*Role of $\\text{CaO}$*: Prevents soda lime from deliquescing (absorbing moisture) and prevents the molten $\\text{NaOH}$ from attacking and fusing to the glass reaction tube.

**Chemical Reactions of Alkanes**:
1. **Complete Combustion**: In excess oxygen, alkanes burn cleanly with a pale-blue flame, producing $\\text{CO}_2$, $\\text{H}_2\\text{O}$, and immense thermal energy:
$$\\text{CH}_4 + 2\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O} \\quad (\\Delta H = -890\\text{ kJ/mol})$$
In limited oxygen (incomplete combustion), dangerous poisonous $\\text{CO}$ or fine carbon black (soot) is formed.
2. **Free Radical Substitution (Halogenation)**:
In the presence of ultraviolet (UV) light or sunlight (not in the dark), alkanes react with halogens via a three-stage free-radical mechanism:
- **Initiation**: Homolytic fission of the halogen molecule by UV light:
  $$\\text{Cl}_2 \\xrightarrow{h\\nu} 2\\text{Cl}^\\bullet$$
- **Propagation**:
  $$\\text{CH}_4 + \\text{Cl}^\\bullet \\rightarrow \\text{CH}_3^\\bullet + \\text{HCl}$$
  $$\\text{CH}_3^\\bullet + \\text{Cl}_2 \\rightarrow \\text{CH}_3\\text{Cl} + \\text{Cl}^\\bullet$$
- **Termination**: Combination of any two free radicals:
  $$\\text{CH}_3^\\bullet + \\text{Cl}^\\bullet \\rightarrow \\text{CH}_3\\text{Cl}$$
  $$\\text{CH}_3^\\bullet + \\text{CH}_3^\\bullet \\rightarrow \\text{CH}_3\\text{CH}_3 \\quad (\\text{Ethane by-product})$$
Continued chlorination produces dichloromethane ($\\text{CH}_2\\text{Cl}_2$), trichloromethane/chloroform ($\\text{CHCl}_3$), and tetrachloromethane ($\\text{CCl}_4$).

### 2. Petroleum (Crude Oil) Refining & Octane Rating
Petroleum is a complex natural mixture of gaseous, liquid, and solid hydrocarbons separated industrially by **fractional distillation** based on boiling point differentials:
- **Refinery Gas ($C_1-C_4$, $< 20^\\circ\\text{C}$)**: Bottled cooking gas (LPG - propane and butane).
- **Petrol / Gasoline ($C_4-C_{10}$, $40-200^\\circ\\text{C}$)**: Motor car fuel.
- **Kerosene / Paraffin Oil ($C_{10}-C_{15}$, $175-275^\\circ\\text{C}$)**: Aviation jet fuel, domestic lighting.
- **Diesel Oil / Gas Oil ($C_{15}-C_{20}$, $250-350^\\circ\\text{C}$)**: Diesel locomotives, heavy trucks.
- **Lubricating Oils & Waxes ($C_{20}-C_{30}$)**: Lubrication, candles, vaseline.
- **Bitumen / Asphalt ($> C_{30}$, residue)**: Road surfacing and roof waterproofing.

**Cracking**: Breaking down high-boiling, long-chain hydrocarbons of low economic demand into higher-value short-chain fuels (petrol) and reactive alkenes:
- **Thermal Cracking**: Carried out at high temperature ($700-800^\\circ\\text{C}$) and high pressure without a catalyst.
- **Catalytic Cracking**: Carried out at moderate temperatures ($500^\\circ\\text{C}$) over a silica-alumina or zeolite catalyst, yielding superior branched-chain alkanes and aromatics.
**Octane Number**: A scale measuring the anti-knock performance of motor gasoline. Pure heptane ($\text{straight chain}$) knocks severely and is assigned an octane rating of $0$; 2,2,4-trimethylpentane (isooctane, $\text{highly branched}$) burns smoothly and is rated $100$. Branched and aromatic hydrocarbons increase octane number.

### 3. Alkenes (Olefins)
Alkenes are unsaturated hydrocarbons containing a carbon-carbon double bond (one strong $\\sigma$ bond and one weaker, exposed $\\pi$ bond), conforming to general formula $C_n H_{2n}$.

**Laboratory Preparation of Ethene ($\\text{C}_2\\text{H}_4$)**:
Catalytic dehydration of excess ethanol by concentrated sulfuric acid at $170^\\circ\\text{C}$:
$$\\text{C}_2\\text{H}_5\\text{OH} \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, 170^\\circ\\text{C}} \\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O}$$
*(Important: At $140^\\circ\\text{C}$ with excess ethanol, ethoxyethane / diethyl ether is formed instead!)*

**Electrophilic Addition Reactions**:
The exposed electron-rich $\\pi$ bond makes alkenes highly reactive toward electrophiles:
1. **Hydrogenation (Hardening of Oils)**:
$$\\text{C}_n\\text{H}_{2n} + \\text{H}_2 \\xrightarrow{\\text{Ni catalyst, } 150^\\circ\\text{C}} \\text{C}_n\\text{H}_{2n+2}$$
Used industrially to convert liquid vegetable oils into solid margarine.
2. **Halogenation (Test for Unsaturation)**:
Alkenes decolorize reddish-brown bromine water rapidly in the dark, yielding colorless 1,2-dibromoalkane. This is the official test to distinguish saturated from unsaturated compounds:
$$\\text{CH}_2=\\text{CH}_2 + \\text{Br}_2 \\rightarrow \\text{CH}_2\\text{Br}-\\text{CH}_2\\text{Br}$$
3. **Hydrohalogenation & Markovnikov's Rule**:
When an unsymmetrical reagent like $\\text{HBr}$ adds across an unsymmetrical alkene (e.g., propene $\\text{CH}_3\\text{CH}=\\text{CH}_2$):
**Markovnikov's Rule**: The acidic hydrogen atom attaches to the carbon atom holding the greater number of hydrogen atoms, while the halogen attaches to the more substituted carbon atom.
$$\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{HBr} \\rightarrow \\text{CH}_3-\\text{CHBr}-\\text{CH}_3 \\quad (\\text{2-bromopropane is the major product})$$
4. **Baeyer's Test (Oxidation with Cold Alkaline $\\text{KMnO}_4$)**:
Purple acidified/alkaline $\\text{KMnO}_4$ turns colorless with alkenes, forming a diol (glycol) and brown $\\text{MnO}_2$ residue:
$$\\text{CH}_2=\\text{CH}_2 + [\\text{O}] + \\text{H}_2\\text{O} \\xrightarrow{\\text{KMnO}_4} \\text{CH}_2(\\text{OH})-\\text{CH}_2(\\text{OH}) \\quad (\\text{Ethane-1,2-diol})$$

### 4. Alkynes
Alkynes are unsaturated hydrocarbons containing a carbon-carbon triple bond (one $\\sigma$ bond and two perpendicular $\\pi$ bonds), conforming to general formula $C_n H_{2n-2}$.

**Laboratory Preparation of Ethyne (Acetylene, $\\text{C}_2\\text{H}_2$)**:
Action of cold water on calcium dicarbide (calcium carbide, $\\text{CaC}_2$):
$$\\text{CaC}_2 + 2\\text{H}_2\\text{O} \\rightarrow \\text{Ca(OH)}_2 + \\text{C}_2\\text{H}_2$$
The gas is passed through acidified copper(II) sulfate solution to remove phosphine ($\\text{PH}_3$) and hydrogen sulfide ($\\text{H}_2\\text{S}$) impurities.

**Acidity of Terminal Alkynes (Distinction from Alkenes)**:
Hydrogen atoms bonded to triply bonded carbon atoms ($\\text{C}\\equiv\\text{C}-\\text{H}$) are weakly acidic due to the high $s$-character ($50\\%$) of $sp$ hybrid orbitals:
1. **Reaction with Ammoniacal Silver Nitrate (Tollens' Reagent)**:
Ethyne forms a heavy **white precipitate** of silver dicarbide / silver acetylide ($\\text{Ag}_2\\text{C}_2$):
$$\\text{C}_2\\text{H}_2 + 2\\text{Ag(NH}_3)_2\\text{NO}_3 \\rightarrow \\text{Ag}_2\\text{C}_2\\downarrow + 2\\text{NH}_4\\text{NO}_3 + 2\\text{NH}_3$$
2. **Reaction with Ammoniacal Copper(I) Chloride**:
Ethyne forms a distinctive **reddish-brown precipitate** of copper(I) dicarbide ($\\text{Cu}_2\\text{C}_2$):
$$\\text{C}_2\\text{H}_2 + 2\\text{Cu(NH}_3)_2\\text{Cl} \\rightarrow \\text{Cu}_2\\text{C}_2\\downarrow + 2\\text{NH}_4\\text{Cl} + 2\\text{NH}_3$$
*Neither alkanes nor alkenes give these precipitates, providing an infallible exam qualitative test.*

### 5. Benzene & Aromatic Hydrocarbons
Benzene has molecular formula $\\text{C}_6\\text{H}_6$. Proposed by Friedrich Kekulé in 1865 as alternating single and double bonds in a hexagon, modern orbital theory reveals benzene is a planar, symmetrical hexagon with all carbon-carbon bond lengths equal ($0.139\\text{ nm}$, intermediate between $\\text{C}-\\text{C}$ $0.154\\text{ nm}$ and $\\text{C}=\\text{C}$ $0.134\\text{ nm}$).

**Aromatic Stability & Resonance**:
The six $p$ orbitals overlap laterally above and below the ring plane, forming a continuous, delocalized cyclic $\\pi$-electron cloud. This confers immense thermodynamic **resonance stabilization energy** ($\\approx 150\\text{ kJ/mol}$). Consequently, benzene resists addition reactions and preferentially undergoes **electrophilic aromatic substitution**:
1. **Nitration**: Heating with a nitrating mixture of concentrated $\\text{HNO}_3$ and concentrated $\\text{H}_2\\text{SO}_4$ at $50-60^\\circ\\text{C}$ produces nitrobenzene:
$$\\text{C}_6\\text{H}_6 + \\text{HNO}_3 \\xrightarrow{\\text{conc. } \\text{H}_2\\text{SO}_4, 55^\\circ\\text{C}} \\text{C}_6\\text{H}_5\\text{NO}_2 + \\text{H}_2\\text{O}$$
2. **Halogenation**: Reacts with chlorine in the presence of anhydrous iron(III) chloride catalyst ($\\text{FeCl}_3$) to yield chlorobenzene:
$$\\text{C}_6\\text{H}_6 + \\text{Cl}_2 \\xrightarrow{\\text{FeCl}_3} \\text{C}_6\\text{H}_5\\text{Cl} + \\text{HCl}$$`,
        definitions: [
          {
            term: 'Saturated Hydrocarbon',
            meaning: 'A hydrocarbon containing only single covalent carbon-carbon bonds, holding the maximum possible number of hydrogen atoms.'
          },
          {
            term: 'Markovnikov\'s Rule',
            meaning: 'In the electrophilic addition of an unsymmetrical reagent (HX) to an unsymmetrical alkene, the hydrogen attaches to the double-bonded carbon holding more hydrogens.'
          },
          {
            term: 'Cracking',
            meaning: 'The process of breaking down heavy, long-chain petroleum hydrocarbons into smaller, higher-octane fuel molecules and reactive alkenes by heat and catalysts.'
          },
          {
            term: 'Octane Rating',
            meaning: 'A quantitative measure of a gasoline fuel\'s resistance to knocking or premature detonation in internal combustion engines.'
          },
          {
            term: 'Aromaticity (Hückel\'s Rule)',
            meaning: 'The special stability of cyclic, planar, fully conjugated ring systems possessing (4n + 2) delocalized pi electrons.'
          }
        ],
        keyPoints: [
          'Alkanes undergo free-radical substitution; alkenes and alkynes undergo electrophilic addition; benzene undergoes electrophilic substitution.',
          'Bromine water decolourisation in the dark confirms unsaturation (alkenes/alkynes).',
          'Terminal alkynes give precipitates with ammoniacal silver nitrate (white) and ammoniacal copper(I) chloride (reddish-brown).',
          'At 170°C, ethanol dehydrates to ethene; at 140°C, it dehydrates to ethoxyethane (ether).',
          'Octane number is improved by catalytic cracking, isomerization, and reforming to branched and aromatic molecules.'
        ],
        formulas: [
          'Alkane Combustion: C_n H_{2n+2} + \\frac{3n+1}{2}O_2 \\rightarrow nCO_2 + (n+1)H_2O',
          'Alkene Hydrogenation: C_n H_{2n} + H_2 \\xrightarrow{Ni, 150^\\circ C} C_n H_{2n+2}',
          'Ethanol Dehydration: C_2H_5OH \\xrightarrow{H_2SO_4, 170^\\circ C} C_2H_4 + H_2O',
          'Ethyne Lab Prep: CaC_2 + 2H_2O \\rightarrow Ca(OH)_2 + C_2H_2',
          'Benzene Nitration: C_6H_6 + HNO_3 \\xrightarrow{H_2SO_4, 55^\\circ C} C_6H_5NO_2 + H_2O'
        ],
        examples: [
          {
            title: 'Addition of Hydrogen Bromide to Propene (Markovnikov Application)',
            problem: 'Predict the major organic product formed when hydrogen bromide (HBr) reacts with propene (CH3-CH=CH2). Explain your reasoning.',
            solution: 'Step 1: Write the unsymmetrical alkene structure:\n  CH3-CH=CH2.\n  Carbon-1 has 2 hydrogen atoms.\n  Carbon-2 has 1 hydrogen atom and a methyl group.\nStep 2: Apply Markovnikov\'s rule:\n  The electrophile H+ adds to Carbon-1 to form the more stable secondary carbocation (CH3-CH(+)-CH3).\nStep 3: Bromide ion (Br-) attacks the carbocation:\n  Product: CH3-CHBr-CH3 (2-bromopropane).\nResult: Major product is 2-bromopropane.'
          },
          {
            title: 'Distinguishing Ethane, Ethene, and Ethyne Experimentally',
            problem: 'Outline chemical tests to unambiguously distinguish between samples of ethane, ethene, and ethyne.',
            solution: 'Step 1: Bubble each gas through Bromine Water in the dark:\n  - Ethane: No observable reaction (brown color persists).\n  - Ethene and Ethyne: Both discharge the brown color rapidly.\nStep 2: To distinguish Ethene from Ethyne, pass both through Ammoniacal Silver Nitrate solution:\n  - Ethene: No observable change.\n  - Ethyne: Heavy white precipitate of silver dicarbide (Ag2C2) forms.\n  Alternatively, use Ammoniacal Copper(I) Chloride: Ethyne forms a reddish-brown precipitate.'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: Never forget the temperature difference in ethanol dehydration! 170°C gives ethene, but 140°C gives ethoxyethane (diethyl ether).',
          'UV Light Requirement: Alkanes DO NOT decolorize bromine water in the dark; UV light or sunlight is compulsory to generate halogen free radicals.',
          'Terminal vs Non-Terminal Alkynes: But-1-yne reacts with ammoniacal silver nitrate because it has an acidic terminal hydrogen, but But-2-yne DOES NOT react because its triple bond is internal!'
        ],
        resources: [
          {
            id: 'res-vid-sub2',
            type: 'video',
            title: 'Hydrocarbons: Alkanes, Alkenes & Alkynes Simplified',
            description: 'Learn preparation, physical properties, addition vs substitution mechanisms, and laboratory tests.',
            duration: '21:40',
            thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=600&q=80',
            youtubeId: '3sD4W_c49C4'
          },
          {
            id: 'res-pdf-sub2',
            type: 'pdf',
            title: 'Alkanes vs Alkenes Distinction Chart & Lab Tests',
            description: 'Comparative table of reaction mechanisms, qualitative tests, and industrial applications.',
            fileSize: '1.8 MB',
            url: 'https://studyplug.com.ng/resources/hydrocarbons_chart.pdf'
          }
        ],
        questions: [
          {
            id: 8104,
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            question: 'Which gas is produced when calcium carbide reacts with water at room temperature?',
            options: ['Methane', 'Ethane', 'Ethene', 'Ethyne'],
            answer: 3,
            explanation: 'CaC2 + 2H2O -> Ca(OH)2 + C2H2 (Ethyne / Acetylene).',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'medium'
          },
          {
            id: 8105,
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            question: 'When bromine water is shaken with propene, what observable change takes place?',
            options: ['The brown colour is discharged', 'A white precipitate forms', 'The solution turns purple', 'A pungent gas is evolved'],
            answer: 0,
            explanation: 'Propene undergoes addition reaction with bromine water, forming 1,2-dibromopropane and decolorizing the solution.',
            year: 2023,
            exam: 'WAEC',
            difficulty: 'easy'
          }
        ],
        repeatedQuestions: [
          {
            id: 8106,
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            question: 'Which of the following compounds gives a reddish-brown precipitate with ammoniacal copper(I) chloride?',
            options: ['Ethene', 'Ethane', 'Ethyne', 'Benzene'],
            answer: 2,
            explanation: 'Terminal alkynes like ethyne contain acidic hydrogen atoms and react with ammoniacal Cu(I) chloride to yield copper(I) dicarbide precipitate.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'hard'
          }
        ]
      },
      {
        id: 'sub-chem-03',
        subtopicTitle: 'Oxygen Derivatives: Alkanols, Alkanoic Acids, Esters, Fats & Soaps',
        order: 3,
        content: `### 1. Alkanols (Alcohols)
Alkanols are organic compounds containing the hydroxyl ($\\text{-OH}$) functional group attached to a saturated carbon atom, with general formula $C_n H_{2n+1}\\text{OH}$ (or $R-\\text{OH}$).

**Classification of Alkanols**:
Based on the number of carbon atoms attached to the carbinol carbon (the carbon bearing the $-\\text{OH}$ group):
1. **Primary ($1^\\circ$) Alkanols**: The $-\\text{OH}$ group is on a carbon attached to at most one other carbon (e.g., Ethanol $\\text{CH}_3\\text{CH}_2\\text{OH}$, Methanol $\\text{CH}_3\\text{OH}$).
2. **Secondary ($2^\\circ$) Alkanols**: The $-\\text{OH}$ group is on a carbon bonded directly to two other carbons (e.g., Propan-2-ol $\\text{CH}_3\\text{CH(OH)CH}_3$).
3. **Tertiary ($3^\\circ$) Alkanols**: The $-\\text{OH}$ group is on a carbon bonded directly to three other carbons (e.g., 2-methylpropan-2-ol $(\\text{CH}_3)_3\\text{C-OH}$).

**Industrial Manufacture of Ethanol**:
1. **Fermentation of Starch & Sugars**:
- Starch is broken down by barley diastase enzyme into maltose:
  $$2(\\text{C}_6\\text{H}_{10}\\text{O}_5)_n + n\\text{H}_2\\text{O} \\xrightarrow{\\text{diastase}} n\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} \\quad (\\text{Maltose})$$
- Yeast maltase enzyme hydrolyzes maltose into glucose:
  $$\\text{C}_{12}\\text{H}_{22}\\text{O}_{11} + \\text{H}_2\\text{O} \\xrightarrow{\\text{maltase}} 2\\text{C}_6\\text{H}_{12}\\text{O}_6 \\quad (\\text{Glucose})$$
- Yeast zymase enzyme ferments glucose into ethanol and $\\text{CO}_2$:
  $$\\text{C}_6\\text{H}_{12}\\text{O}_6 \\xrightarrow{\\text{zymase, } 37^\\circ\\text{C}} 2\\text{C}_2\\text{H}_5\\text{OH} + 2\\text{CO}_2$$
2. **Direct Catalytic Hydration of Ethene**:
$$\\text{C}_2\\text{H}_4 + \\text{H}_2\\text{O(g)} \\xrightarrow{\\text{H}_3\\text{PO}_4, 300^\\circ\\text{C}, 60-70\\text{ atm}} \\text{C}_2\\text{H}_5\\text{OH}$$

**Chemical Reactions & Distinction Tests**:
1. **Oxidation Sequence with Acidified $\\text{K}_2\\text{Cr}_2\\text{O}_7$**:
- **Primary Alkanol**: Oxidizes first to an alkanal (aldehyde), then to an alkanoic acid:
  $$\\text{CH}_3\\text{CH}_2\\text{OH} \\xrightarrow{[\\text{O}]} \\text{CH}_3\\text{CHO} \\xrightarrow{[\\text{O}]} \\text{CH}_3\\text{COOH}$$
  *(Orange $\\text{Cr}_2\\text{O}_7^{2-}$ turns green $\\text{Cr}^{3+}$).*
- **Secondary Alkanol**: Oxidizes to an alkanone (ketone):
  $$\\text{CH}_3\\text{CH(OH)CH}_3 \\xrightarrow{[\\text{O}]} \\text{CH}_3\\text{COCH}_3 + \\text{H}_2\\text{O}$$
- **Tertiary Alkanol**: Resists oxidation under mild acidic conditions because it lacks a hydrogen atom on the carbinol carbon.
2. **Lucas Test (Conc. $\\text{HCl} + \\text{anhydrous } \\text{ZnCl}_2$)**:
- $3^\\circ$ Alkanol: Immediate turbidity/cloudiness (insoluble alkyl chloride forms within seconds).
- $2^\\circ$ Alkanol: Turbidity appears after 5–10 minutes.
- $1^\\circ$ Alkanol: Solution remains clear at room temperature; requires heating.
3. **Iodoform (Tri-iodomethane) Test**:
Alkanols containing the $\\text{CH}_3-\\text{CH(OH)}-$ group (such as ethanol and propan-2-ol) react with iodine in dilute $\\text{NaOH}$ to precipitate yellow antiseptic crystals of iodoform ($\\text{CHI}_3$). Methanol does not give this test.

### 2. Alkanoic Acids (Carboxylic Acids)
Alkanoic acids possess the carboxyl group ($-\\text{COOH}$), combining a carbonyl group ($>\\text{C}=\\text{O}$) and a hydroxyl group ($-\\text{OH}$), conforming to general formula $C_n H_{2n+1}\\text{COOH}$.

**Properties**:
- **Acidity**: Weak monobasic acids in water ($K_a \\approx 1.8 \\times 10^{-5}$ for ethanoic acid). They liberate carbon dioxide gas when treated with metal carbonates or hydrogen carbonates:
$$\\text{CH}_3\\text{COOH} + \\text{NaHCO}_3 \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O} + \\text{CO}_2\\uparrow$$
- **Hydrogen Bonding**: Form strong intermolecular hydrogen-bonded dimers, resulting in higher boiling points than corresponding alkanols of comparable molecular mass.

### 3. Esters (Alkyl Alkanoates)
Esters are characterized by the functional group $-\\text{COOR}$, with general formula $R-\\text{COO}-R'$. They are famous for their pleasant, fragrant fruity aromas found in fruits, perfumes, and synthetic flavorings.

**Esterification Reaction**:
Condensation of an alkanoic acid with an alkanol in the presence of concentrated sulfuric acid catalyst:
$$\\text{CH}_3\\text{COOH} + \\text{C}_2\\text{H}_5\\text{OH} \\xrightleftharpoons{\\text{conc. } \\text{H}_2\\text{SO}_4, \\Delta} \\text{CH}_3\\text{COOC}_2\\text{H}_5 + \\text{H}_2\\text{O}$$
**Dual Role of Concentrated $\\text{H}_2\\text{SO}_4$**:
1. Serves as an **acid catalyst**, speeding up the rate of forward and reverse reactions.
2. Serves as a **dehydrating agent**, removing water as it forms and shifting the chemical equilibrium toward the ester product (Le Chatelier's Principle).

### 4. Fats, Oils & Saponification (Soap Making)
Fats and oils are naturally occurring esters of the trihydric alcohol **glycerol (propane-1,2,3-triol)** and long-chain carboxylic acids (**fatty acids** like palmitic, stearic, and oleic acids). They are chemically termed **triglycerides**:
- **Fats**: Saturated triglycerides, solid at room temperature (e.g., animal tallow, butter).
- **Oils**: Unsaturated triglycerides containing double bonds, liquid at room temperature (e.g., palm oil, groundnut oil).

**Saponification**:
The alkaline hydrolysis of fats or vegetable oils with hot aqueous sodium hydroxide ($\\text{NaOH}$) or potassium hydroxide ($\\text{KOH}$), yielding glycerol and the sodium/potassium salts of fatty acids (**soap**):
$$\\text{Glyceryl stearate} + 3\\text{NaOH} \\rightarrow 3\\text{Sodium stearate (Soap)} + \\text{Glycerol}$$
- **Salting Out**: Concentrated sodium chloride solution ($\\text{NaCl}$) is added to precipitate the soap out of solution (common ion effect).
- $\\text{NaOH}$ produces **hard soap** (laundry bars).
- $\\text{KOH}$ produces **soft soap** (toilet soaps and shaving creams).

**Soaps vs. Synthetic Detergents in Hard Water**:
- Soap forms an insoluble scum with hard water containing dissolved $\\text{Ca}^{2+}$ or $\\text{Mg}^{2+}$ ions ($2\\text{RCOO}^- + \\text{Ca}^{2+} \\rightarrow (\\text{RCOO})_2\\text{Ca}\\downarrow$).
- Synthetic detergents (e.g., sodium alkyl sulfates $R-\\text{OSO}_3\\text{Na}$) do not form scum in hard water because their calcium and magnesium salts are completely water-soluble!`,
        definitions: [
          {
            term: 'Esterification',
            meaning: 'The reversible condensation reaction between a carboxylic acid and an alcohol in the presence of an acid catalyst, producing an ester and water.'
          },
          {
            term: 'Saponification',
            meaning: 'The alkaline hydrolysis of fats or oils with caustic alkali (NaOH or KOH) to produce glycerol and soap.'
          },
          {
            term: 'Lucas Test',
            meaning: 'A qualitative test using conc. HCl and anhydrous ZnCl2 to distinguish between primary, secondary, and tertiary alcohols based on the rate of turbidity.'
          },
          {
            term: 'Triglyceride',
            meaning: 'A triester formed from glycerol and three fatty acid molecules, making up natural vegetable oils and animal fats.'
          },
          {
            term: 'Salting Out',
            meaning: 'The addition of concentrated sodium chloride solution to precipitate soap curd from the aqueous glycerol mixture during saponification.'
          }
        ],
        keyPoints: [
          'Primary alcohols oxidize to aldehydes then acids; secondary alcohols oxidize to ketones; tertiary alcohols resist oxidation.',
          'Lucas reagent distinguishes 1°, 2°, and 3° alkanols by the speed of chloride turbidity formation.',
          'Concentrated H2SO4 acts as both catalyst and dehydrating agent during esterification.',
          'Soaps form insoluble scum with hard water (Ca2+ and Mg2+); synthetic detergents do not form scum because their Ca/Mg salts are water-soluble.',
          'Fermentation requires yeast enzymes diastase, maltase, and zymase operating at an optimum temperature around 37°C.'
        ],
        formulas: [
          'Ester General Formula: R-COO-R\'',
          'Esterification: R-COOH + R\'-OH \\xrightleftharpoons{H_2SO_4} R-COO-R\' + H_2O',
          'Glucose Fermentation: C_6H_{12}O_6 \\xrightarrow{zymase} 2C_2H_5OH + 2CO_2',
          'Saponification: \\text{Fat} + 3NaOH \\rightarrow 3\\text{Soap} + \\text{Glycerol}',
          'Scum Formation: 2C_{17}H_{35}COONa + Ca^{2+} \\rightarrow (C_{17}H_{35}COO)_2Ca\\downarrow + 2Na^+'
        ],
        examples: [
          {
            title: 'Identifying an Unknown Alcohol by Oxidation & Lucas Test',
            problem: 'An unknown alcohol C4H10O does not react with acidified K2Cr2O7. When treated with Lucas reagent, an immediate oily cloudiness forms within 10 seconds. Identify the alcohol.',
            solution: 'Step 1: The alcohol resists oxidation by acidified K2Cr2O7. Tertiary (3°) alcohols are the only class resistant to oxidation.\nStep 2: The Lucas reagent gives immediate cloudiness. Only tertiary alcohols form alkyl chlorides instantaneously.\nStep 3: Draw the 4-carbon tertiary alcohol structure:\n  Central carbon bonded to -OH and three methyl groups: (CH3)3C-OH.\n  IUPAC Name: 2-methylpropan-2-ol (tert-butanol).\nFinal Result: The compound is 2-methylpropan-2-ol.'
          },
          {
            title: 'Writing the Esterification Reaction for Pineapple Flavor',
            problem: 'Ethyl butanoate produces a characteristic pineapple flavor. Write down the chemical equation for its synthesis, stating reactants and catalysts.',
            solution: 'Step 1: Identify components from name "ethyl butanoate":\n  - "ethyl" originates from the alcohol: Ethanol (C2H5OH).\n  - "butanoate" originates from the acid: Butanoic acid (C3H7COOH).\nStep 2: Write balanced condensation equation:\n  C3H7COOH + C2H5OH <==> C3H7COOC2H5 + H2O\n  Catalyst: Concentrated H2SO4 with heating.\nObservation: Sweet fruity pineapple fragrance.'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: Ethanol dehydrates to ETHENE at 170°C with excess acid, but dehydrates to ETHOXYETHANE (diethyl ether) at 140°C with excess ethanol!',
          'Hard Water Comparison: Synthetic detergents clean effectively in both soft and hard water, whereas ordinary soaps are wasted and form sticky curd with hard water.',
          'Lucas Reagent Order: Rate of reaction is 3° (fastest, seconds) > 2° (5 mins) > 1° (no reaction at room temperature).'
        ],
        resources: [
          {
            id: 'res-vid-sub3',
            type: 'video',
            title: 'Alkanols & Esterification Made Easy',
            description: 'Learn primary/secondary/tertiary distinction, Lucas test, and esterification mechanism.',
            duration: '16:50',
            thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'q5P1_P1qM-o'
          }
        ],
        questions: [
          {
            id: 8107,
            subject: 'Chemistry',
            topic: 'Organic Chemistry',
            question: 'What is the organic product formed when ethanoic acid is heated with ethanol in the presence of concentrated H2SO4?',
            options: ['Ethyl ethanoate', 'Ethanal', 'Ethoxyethane', 'Sodium ethanoate'],
            answer: 0,
            explanation: 'Ethanoic acid + Ethanol in the presence of conc. H2SO4 yields ethyl ethanoate (an ester with a fruity smell) and water.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ]
      }
    ]
  },

  // ─── MATHEMATICS: NUMBER & NUMERATION ──────────────────────────────────────
  {
    id: 'math-num-01',
    exam: 'JAMB',
    subject: 'Mathematics',
    topicTitle: 'Number and Numeration',
    category: 'Pure Mathematics',
    description: 'Number bases, modular arithmetic, fractions, decimals, indices, logarithms and surds with exam speed algorithms.',
    globalResources: [
      {
        id: 'res-math-pdf-01',
        type: 'pdf',
        title: 'JAMB Mathematics Formula Compendium 2026',
        description: 'Complete high-yield formula reference sheet covering algebra, calculus, geometry, and statistics.',
        fileSize: '3.2 MB',
        url: 'https://studyplug.com.ng/resources/math_master_formulas.pdf'
      },
      {
        id: 'res-math-vid-01',
        type: 'video',
        title: 'Indices, Logarithms & Surds in 30 Minutes',
        description: 'Master fast mental arithmetic tricks and official JAMB past question solutions.',
        duration: '29:15',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80',
        youtubeId: 'dQw4w9WgXcQ'
      }
    ],
    subtopics: [
      {
        id: 'sub-math-01',
        subtopicTitle: 'Indices, Logarithms and Surds',
        order: 1,
        content: `### 1. Fundamental Laws of Indices (Exponents)
An **index** (or exponent) indicates the number of times a base number is multiplied by itself. For any positive real numbers $a, b$ and rational exponents $m, n$:

1. **Product Law**:
   $$a^m \\times a^n = a^{m+n}$$
2. **Quotient Law**:
   $$\\frac{a^m}{a^n} = a^{m-n} \\quad (a \\neq 0)$$
3. **Power of a Power Law**:
   $$(a^m)^n = a^{mn}$$
4. **Zero Index Law**:
   $$a^0 = 1 \\quad (a \\neq 0)$$
   *(Proof: $\\frac{a^m}{a^m} = a^{m-m} = a^0 = 1$)*
5. **Negative Index Law**:
   $$a^{-m} = \\frac{1}{a^m} \\quad \\text{and} \\quad \\left(\\frac{a}{b}\\right)^{-m} = \\left(\\frac{b}{a}\\right)^m$$
6. **Fractional Index Law (Roots)**:
   $$a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$$
7. **Power of a Product and Quotient**:
   $$(ab)^n = a^n b^n \\quad \\text{and} \\quad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$

**Exponential Equations (Indices Equations)**:
- **Case 1: Same Base**: If $a^{f(x)} = a^{g(x)}$ where $a > 0$ and $a \\neq 1$, then $f(x) = g(x)$.
- **Case 2: Quadratic Substitution**: In equations with mixed exponents such as $a \\cdot k^{2x} + b \\cdot k^x + c = 0$, substitute a dummy variable $y = k^x$. Solve the resulting quadratic equation for $y$, then back-substitute to find real values of $x$.

### 2. Theory and Laws of Logarithms
The **logarithm** of a number $y$ to a given base $a$ is the power (index) to which $a$ must be raised to produce $y$:
$$\\log_a y = x \\iff a^x = y \\quad (a > 0, a \\neq 1, y > 0)$$
*Crucial Rule: Logarithms of zero or negative numbers are strictly undefined in the real number system.*

**Common Logarithms (Base 10) & Standard Form**:
Any real number $N$ can be expressed in standard form (scientific notation) as $N = A \\times 10^c$, where $1 \\leq A < 10$ and $c \\in \\mathbb{Z}$.
$$\\log_{10} N = \\log_{10} (A \\times 10^c) = c + \\log_{10} A$$
- **Characteristic ($c$)**: The integer part (determines the magnitude/position of decimal point).
- **Mantissa ($\\log_{10} A$)**: The positive fractional decimal part read from mathematical logarithm tables.

**The 7 Core Laws of Logarithms**:
1. **Product Law**:
   $$\\log_a (xy) = \\log_a x + \\log_a y$$
2. **Quotient Law**:
   $$\\log_a \\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$$
3. **Power Law**:
   $$\\log_a (x^k) = k \\log_a x$$
4. **Root Law**:
   $$\\log_a \\sqrt[n]{x} = \\frac{1}{n} \\log_a x$$
5. **Base Identity**:
   $$\\log_a a = 1 \\quad \\text{and} \\quad \\log_a 1 = 0$$
6. **Change of Base Formula**:
   $$\\log_a b = \\frac{\\log_c b}{\\log_c a}$$
7. **Reciprocal Base (Inversion Law)**:
   $$\\log_a b = \\frac{1}{\\log_b a} \\quad \\text{and} \\quad a^{\\log_a x} = x$$

### 3. Surds (Radicals) & Rationalization
A **surd** is an irrational number expressed as a root of a rational number whose value cannot be accurately expressed as an exact terminating or recurring fraction (e.g., $\\sqrt{2}, \\sqrt{3}, \\sqrt{5}, \\sqrt[3]{7}$). $\\sqrt{4} = 2$ and $\\sqrt{9} = 3$ are rational, hence NOT surds.

**Forms of Surds**:
- **Pure Surd**: An irrational root with coefficient 1 (e.g., $\\sqrt{50}, \\sqrt{72}$).
- **Mixed Surd**: A product of a rational number and a surd (e.g., $5\\sqrt{2}, 6\\sqrt{2}$).
  $$\\sqrt{50} = \\sqrt{25 \\times 2} = \\sqrt{25} \\times \\sqrt{2} = 5\\sqrt{2}$$

**Rules of Surd Operations**:
1. **Addition and Subtraction**: Only **like surds** (surds having the same irrational root component) can be combined:
   $$3\\sqrt{2} + 5\\sqrt{2} = 8\\sqrt{2} \\quad \\text{and} \\quad 7\\sqrt{3} - 4\\sqrt{3} = 3\\sqrt{3}$$
   *Unlike surds (e.g., $\\sqrt{2} + \\sqrt{3}$) cannot be added into a single radical!*
2. **Multiplication and Division**:
   $$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab} \\quad \\text{and} \\quad \\frac{\\sqrt{a}}{\\sqrt{b}} = \\sqrt{\\frac{a}{b}}$$
   $$(\\sqrt{a})^2 = a$$
3. **Conjugate Surds**:
   A binomial surd is an expression with two terms where at least one is a surd (e.g., $\\sqrt{a} + \\sqrt{b}$).
   Its **conjugate** is obtained by reversing the connecting sign: $(\\sqrt{a} - \\sqrt{b})$.
   The product of two conjugate surds is always purely rational (difference of two squares):
   $$(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = (\\sqrt{a})^2 - (\\sqrt{b})^2 = a - b$$

**Rationalizing the Denominator**:
Standard mathematical convention requires that fractions never retain surds in their denominator:
- **Monomial Denominator**: Multiply numerator and denominator by the surd itself:
  $$\\frac{k}{\\sqrt{a}} = \\frac{k}{\\sqrt{a}} \\times \\frac{\\sqrt{a}}{\\sqrt{a}} = \\frac{k\\sqrt{a}}{a}$$
- **Binomial Denominator**: Multiply numerator and denominator by the conjugate of the denominator:
  $$\\frac{1}{\\sqrt{a} + \\sqrt{b}} = \\frac{\\sqrt{a} - \\sqrt{b}}{(\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b})} = \\frac{\\sqrt{a} - \\sqrt{b}}{a - b}$$

**Equating Rational and Irrational Components**:
If $a + b\\sqrt{n} = c + d\\sqrt{n}$, where $a, b, c, d \\in \\mathbb{Q}$ and $\\sqrt{n}$ is a surd, then:
$$a = c \\quad \\text{and} \\quad b = d$$`,
        definitions: [
          {
            term: 'Surd',
            meaning: 'An irrational root of a rational number that cannot be represented as an exact terminating or repeating decimal (e.g., √2, √3, √5).'
          },
          {
            term: 'Conjugate Surd',
            meaning: 'A binomial surd obtained by reversing the connecting operation sign, such that their product produces a completely rational number: (√a + √b)(√a - √b) = a - b.'
          },
          {
            term: 'Characteristic & Mantissa',
            meaning: 'In common base-10 logarithms, the characteristic is the integer component indicating the power of 10, while the mantissa is the positive fractional decimal read from log tables.'
          },
          {
            term: 'Rationalization',
            meaning: 'The algebraic procedure of eliminating irrational roots or surds from the denominator of a fraction by multiplying by an appropriate rationalizing factor or conjugate.'
          }
        ],
        keyPoints: [
          'Logarithms of zero and negative numbers are undefined in real numbers.',
          'Always multiply numerator and denominator by the conjugate to rationalize binomial surds.',
          'Remember: log(x + y) IS NOT equal to log(x) + log(y); log(xy) = log(x) + log(y).',
          'In exponential equations with a + b(k^x) + c(k^2x) = 0, substitute y = k^x to produce a solvable quadratic.'
        ],
        formulas: [
          'Fractional Index: a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m',
          'Logarithm Product: \\log_a (xy) = \\log_a x + \\log_a y',
          'Logarithm Quotient: \\log_a \\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y',
          'Change of Base: \\log_a b = \\frac{\\log_c b}{\\log_c a} = \\frac{1}{\\log_b a}',
          'Conjugate Difference: (\\sqrt{a} + \\sqrt{b})(\\sqrt{a} - \\sqrt{b}) = a - b'
        ],
        examples: [
          {
            title: 'Quadratic Substitution in Exponential Equation',
            problem: 'Solve for x in the equation: 2^(2x+1) - 9(2^x) + 4 = 0.',
            solution: 'Step 1: Rewrite 2^(2x+1) using index product rule:\n  2^(2x+1) = 2^1 * 2^(2x) = 2 * (2^x)².\n  The equation becomes: 2*(2^x)² - 9*(2^x) + 4 = 0.\nStep 2: Let y = 2^x:\n  2y² - 9y + 4 = 0.\nStep 3: Factorize the quadratic:\n  2y² - 8y - y + 4 = 0\n  2y(y - 4) - 1(y - 4) = 0\n  (2y - 1)(y - 4) = 0\n  y = 1/2  or  y = 4.\nStep 4: Solve for x:\n  Case 1: 2^x = 1/2 = 2⁻¹  ==>  x = -1.\n  Case 2: 2^x = 4 = 2²  ==>  x = 2.\nFinal Solution: x = -1 or x = 2.'
          },
          {
            title: 'Simplifying and Rationalizing a Complex Surd Fraction',
            problem: 'Simplify completely: (√75 - √12) / (√27 + √12) and express with a rational denominator.',
            solution: 'Step 1: Express each radical as a mixed surd in terms of √3:\n  √75 = √(25 * 3) = 5√3\n  √12 = √(4 * 3) = 2√3\n  √27 = √(9 * 3) = 3√3\nStep 2: Substitute into the fraction:\n  Numerator = 5√3 - 2√3 = 3√3\n  Denominator = 3√3 + 2√3 = 5√3\nStep 3: Simplify by canceling common factors:\n  (3√3) / (5√3) = 3/5.\nFinal Result: 3/5 (or 0.6).'
          }
        ],
        examTips: [
          'In equations with mixed indices, substitute a dummy variable like y = a^x to reduce into a standard quadratic equation.',
          'Surd conjugate shortcut: (√a + √b)(√a - √b) = a - b directly saves 45 seconds during CBT!',
          'Extraneous Roots Trap: Whenever you solve a logarithmic equation, always check that the solution does not make the argument inside any log negative or zero!'
        ],
        resources: [
          {
            id: 'res-math-vid-02',
            type: 'video',
            title: 'Surds and Conjugates Masterclass',
            description: 'Learn rapid addition, multiplication and rationalisation of complex surds.',
            duration: '15:20',
            thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'v=k7y6Y9K0_Xo'
          }
        ],
        questions: [
          {
            id: 8201,
            subject: 'Mathematics',
            topic: 'Number and Numeration',
            question: 'Simplify: (√75 - √12) / √27',
            options: ['1', '√3', '2', '3'],
            answer: 0,
            explanation: '√75 = 5√3; √12 = 2√3; √27 = 3√3. Numerator = 5√3 - 2√3 = 3√3. (3√3) / (3√3) = 1.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'medium'
          },
          {
            id: 8202,
            subject: 'Mathematics',
            topic: 'Number and Numeration',
            question: 'If log₁₀ 2 = 0.3010 and log₁₀ 3 = 0.4771, evaluate log₁₀ 18.',
            options: ['1.2552', '1.0791', '0.9542', '1.3010'],
            answer: 0,
            explanation: '18 = 2 * 3^2. log 18 = log 2 + 2*log 3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = 1.2552.',
            year: 2023,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ],
        repeatedQuestions: [
          {
            id: 8203,
            subject: 'Mathematics',
            topic: 'Number and Numeration',
            question: 'Solve for x: 3^(x+2) = 81',
            options: ['1', '2', '3', '4'],
            answer: 1,
            explanation: '81 = 3^4. So x + 2 = 4 => x = 2.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'sub-math-02',
        subtopicTitle: 'Number Bases & Modular Arithmetic',
        order: 2,
        content: `### 1. Number Bases (Positional Notation)
A **number base** defines the number of unique digits available in a counting system before a new place value column is created.
- **Base 10 (Denary / Decimal)**: Digits $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$.
- **Base 2 (Binary)**: Digits $0, 1$ (used in digital computing).
- **Base 8 (Octal)**: Digits $0, 1, 2, 3, 4, 5, 6, 7$.
- **Base 16 (Hexadecimal)**: Digits $0-9$ and letters $A(10), B(11), C(12), D(13), E(14), F(15)$.

**Conversion Algorithms**:
1. **Base $n$ to Base 10**: Expand each digit by multiplying it by $n$ raised to its positional column index:
   $$d_k d_{k-1} \\dots d_1 d_0.d_{-1}_n = d_k n^k + d_{k-1} n^{k-1} + \\dots + d_0 n^0 + d_{-1} n^{-1}$$
   *Example: $1101_2 = (1 \\times 2^3) + (1 \\times 2^2) + (0 \\times 2^1) + (1 \\times 2^0) = 8 + 4 + 0 + 1 = 13_{10}$.*
2. **Base 10 to Base $n$**: Perform **successive division** of the decimal integer by $n$, recording remainders until the quotient reaches $0$. The base-$n$ number is obtained by reading remainders upward from bottom to top (most significant digit first).
3. **Base $a$ to Base $b$**: Convert first from Base $a$ to Base 10, then convert the resulting Base 10 value into Base $b$.
4. **Binary to Octal / Hexadecimal Shortcuts**:
   - Binary to Octal: Group binary digits into clusters of **3 bits** starting from the decimal point ($2^3 = 8$).
   - Binary to Hexadecimal: Group binary digits into clusters of **4 bits** ($2^4 = 16$).

**Arithmetic Operations in Base $n$**:
- **Addition**: Add column digits. If sum $\\geq n$, divide by $n$: write down the remainder and carry over the quotient to the next column.
- **Subtraction**: If subtracting a larger digit from a smaller one, borrow $1$ from the next column leftward. Borrowing $1$ adds the value of the **base $n$** to the current column!

### 2. Modular Arithmetic (Clock Arithmetic)
In **modular arithmetic**, numbers "wrap around" after reaching a fixed positive integer $m$ called the **modulus**.
Two integers $a$ and $b$ are congruent modulo $m$ (written $a \\equiv b \\pmod m$) if their difference $(a - b)$ is an exact multiple of $m$, or equivalently, if both leave the same non-negative remainder upon division by $m$:
$$a \\equiv b \\pmod m \\iff a = km + b \\quad (0 \\leq b < m)$$

**Basic Modular Operations**:
1. **Addition modulo $m$**: $(a + b) \\pmod m$.
2. **Multiplication modulo $m$**: $(a \\times b) \\pmod m$.
3. **Negative numbers in modulo $m$**: Add multiples of $m$ until a positive remainder within $[0, m-1]$ is obtained:
   $$-3 \\pmod 7 \\equiv -3 + 7 = 4 \\pmod 7$$
4. **Multiplicative Inverse**:
   The inverse of an integer $a$ modulo $m$ is an integer $x$ such that:
   $$ax \\equiv 1 \\pmod m$$
   *An inverse exists if and only if $a$ and $m$ are coprime ($\\gcd(a, m) = 1$).*`,
        definitions: [
          {
            term: 'Number Base (Radix)',
            meaning: 'The number of distinct counting symbols (digits) used to represent numbers in a positional numeral system.'
          },
          {
            term: 'Modulo (Modulus)',
            meaning: 'The fixed positive integer divisor in modular arithmetic that determines the cyclic wrap-around point of remainders.'
          },
          {
            term: 'Multiplicative Inverse modulo m',
            meaning: 'An integer x such that (a * x) leaves a remainder of 1 when divided by m, written ax ≡ 1 (mod m).'
          }
        ],
        keyPoints: [
          'In any number base n, the largest single digit is strictly (n - 1). For example, Base 5 cannot contain the digit 5.',
          'Borrowing in base subtraction transfers the value of the base n, NOT 10.',
          'To find a negative number in modulo m, add m repeatedly until the result is between 0 and m-1.'
        ],
        formulas: [
          'Base Expansion: d_k n^k + d_{k-1} n^{k-1} + \\dots + d_0 n^0',
          'Congruence Modulo m: a \\equiv b \\pmod m \\iff a - b = km',
          'Modular Inverse: ax \\equiv 1 \\pmod m'
        ],
        examples: [
          {
            title: 'Solving for Unknown Base in an Equation',
            problem: 'Find the value of the base x if 102_x = 27_10.',
            solution: 'Step 1: Expand 102_x in powers of x:\n  (1 * x²) + (0 * x¹) + (2 * x⁰) = 27\n  x² + 0 + 2 = 27.\nStep 2: Solve the quadratic equation:\n  x² = 27 - 2 = 25\n  x = √25 = 5 (since a base must be a positive integer > 2).\nFinal Result: x = 5 (Base 5).'
          },
          {
            title: 'Finding Multiplicative Inverse in Modular Arithmetic',
            problem: 'Find the multiplicative inverse of 3 modulo 7.',
            solution: 'We need to find x in {0, 1, 2, 3, 4, 5, 6} such that 3x ≡ 1 (mod 7).\nTesting values of x:\n  3(1) = 3 ≡ 3 (mod 7)\n  3(2) = 6 ≡ 6 (mod 7)\n  3(3) = 9 ≡ 2 (mod 7)\n  3(4) = 12 ≡ 5 (mod 7)\n  3(5) = 15 = 2(7) + 1 ≡ 1 (mod 7) ✓\nSince 3 * 5 = 15 ≡ 1 (mod 7), the inverse is 5.\nFinal Result: The multiplicative inverse is 5.'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: If a question gives digits in base x (e.g., 432_x), then the base x MUST be strictly greater than the highest digit (here x > 4).',
          'Days of the Week: In calendar calculations, use modulo 7. If today is Monday (day 1), then 50 days from now will be (1 + 50) mod 7 = 51 mod 7 = 2 (Tuesday).'
        ],
        resources: [
          {
            id: 'res-vid-base1',
            type: 'video',
            title: 'Number Bases & Modular Arithmetic Fast Tricks',
            description: 'Master binary, octal, hex conversions and clock arithmetic in 20 minutes.',
            duration: '22:15',
            thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'dQw4w9WgXcQ'
          }
        ],
        questions: [
          {
            id: 8204,
            subject: 'Mathematics',
            topic: 'Number and Numeration',
            question: 'Convert 11011₂ to Base 10.',
            options: ['25', '27', '29', '31'],
            answer: 1,
            explanation: '1*16 + 1*8 + 0*4 + 1*2 + 1*1 = 16 + 8 + 0 + 2 + 1 = 27.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ]
      }
    ]
  },

  // ─── PHYSICS: MECHANICS & MOTION ───────────────────────────────────────────
  {
    id: 'phys-mech-01',
    exam: 'JAMB',
    subject: 'Physics',
    topicTitle: 'Mechanics and Motion',
    category: 'General Physics',
    description: 'Scalars, vectors, equations of linear motion, projectiles, Newton laws, friction, and equilibrium.',
    globalResources: [
      {
        id: 'res-phys-pdf-01',
        type: 'pdf',
        title: 'JAMB Physics Mechanics Formula Sheet & Derivations',
        description: 'Kinematics, work-energy-power, momentum, and circular motion formulas with SI units.',
        fileSize: '2.5 MB',
        url: 'https://studyplug.com.ng/resources/physics_mechanics_formulas.pdf'
      }
    ],
    subtopics: [
      {
        id: 'sub-phys-01',
        subtopicTitle: 'Linear Motion & Equations of Kinematics',
        order: 1,
        content: `### 1. Fundamental Concepts of Kinematics
Kinematics is the branch of classical mechanics that describes the motion of points, bodies, and systems of bodies without consideration of the forces that cause the motion.

**Physical Quantities in Kinematics**:
1. **Distance ($d$ or $s$)**: The total path length covered by a moving body regardless of the direction of travel. It is a **scalar quantity** measured in metres ($\\text{m}$).
2. **Displacement ($\\vec{s}$)**: The straight-line distance measured from an initial reference point to the final position in a specified direction. It is a **vector quantity** measured in metres ($\\text{m}$).
3. **Speed ($v$)**: The rate of change of distance with time:
   $$v = \\frac{d}{t} \\quad [\\text{Scalar, unit: m/s}]$$
4. **Velocity ($\\vec{v}$)**: The rate of change of displacement with respect to time:
   $$\\vec{v} = \\frac{\\Delta \\vec{s}}{\\Delta t} \\quad [\\text{Vector, unit: m/s}]$$
   - **Uniform Velocity**: A body possesses uniform velocity if it covers equal displacements in equal intervals of time, no matter how small these time intervals may be.
5. **Acceleration ($\\vec{a}$)**: The time rate of change of velocity:
   $$\\vec{a} = \\frac{\\vec{v} - \\vec{u}}{t} \\quad [\\text{Vector, unit: m/s}^2]$$
   - **Retardation / Deceleration**: Negative acceleration occurring when the velocity of a moving object decreases with time.

### 2. The Four Equations of Uniformly Accelerated Motion
For an object moving in a straight line with constant acceleration $a$, starting with initial velocity $u$ and reaching final velocity $v$ after traversing a displacement $s$ over a time interval $t$:

1. **Velocity-Time Relation**:
   $$v = u + at$$
   *(Derived from the fundamental definition of acceleration: $a = \\frac{v - u}{t}$.)*

2. **Displacement-Time Relation**:
   $$s = ut + \\frac{1}{2}at^2$$
   *(Derived by calculating the average velocity $v_{\\text{avg}} = \\frac{u + v}{2}$ and substituting $v = u + at$: $s = \\left(\\frac{u + (u + at)}{2}\\right)t = ut + \\frac{1}{2}at^2$.)*

3. **Velocity-Displacement Relation (Torricelli's Equation)**:
   $$v^2 = u^2 + 2as$$
   *(Derived by eliminating time $t = \\frac{v - u}{a}$ from the displacement equation: $s = \\left(\\frac{u + v}{2}\\right)\\left(\\frac{v - u}{a}\\right) = \\frac{v^2 - u^2}{2a}$.)*

4. **Average Velocity Displacement Formula**:
   $$s = \\left(\\frac{u + v}{2}\\right)t$$

### 3. Graphical Analysis of Linear Motion
Graphs provide a complete geometric representation of rectilinear kinematics:
1. **Displacement-Time ($s-t$) Graph**:
   - The **slope (gradient)** of the tangent to an $s-t$ graph represents the **instantaneous velocity**:
     $$\\text{Gradient} = \\frac{\\Delta s}{\\Delta t} = v$$
   - A straight horizontal line indicates the body is **at rest** ($v = 0$).
   - A straight inclined line indicates **uniform velocity**.
   - A curve with increasing slope indicates **positive acceleration**.
2. **Velocity-Time ($v-t$) Graph**:
   - The **slope (gradient)** represents the **acceleration**:
     $$\\text{Gradient} = \\frac{\\Delta v}{\\Delta t} = a$$
   - The **area under the curve** represents the **total displacement** travelled:
     $$\\text{Area} = \\int v\\,dt = \\text{Displacement } s$$
   - For a standard three-stage journey (acceleration, constant speed, deceleration):
     $$\\text{Total Distance} = \\text{Area of Trapezium} = \\frac{1}{2}(a + b)h$$
     where $a$ is the time duration at maximum speed, $b$ is the total elapsed journey time, and $h$ is the maximum steady speed.`,
        definitions: [
          {
            term: 'Displacement',
            meaning: 'The straight-line distance separating the initial and final positions of an object in a specified direction (vector, unit: metres).'
          },
          {
            term: 'Uniform Acceleration',
            meaning: 'The constant rate of increase of velocity where an object increases its velocity by equal amounts in equal intervals of time.'
          },
          {
            term: 'Instantaneous Velocity',
            meaning: 'The exact velocity of an object at a specific instant in time, determined by the limiting value of Δs/Δt as Δt approaches zero.'
          }
        ],
        keyPoints: [
          'Kinematics equations are ONLY valid when acceleration is constant (uniform). They fail if acceleration varies with time.',
          'The area bounded between a velocity-time graph and the time axis always equals the total distance/displacement covered.',
          'The gradient of a velocity-time graph gives acceleration; the gradient of a displacement-time graph gives velocity.'
        ],
        formulas: [
          'v = u + at',
          's = ut + \\frac{1}{2}at^2',
          'v^2 = u^2 + 2as',
          's = \\frac{(u + v)}{2}t',
          '\\text{Area of Trapezium: } s = \\frac{1}{2}(t_{\\text{top}} + t_{\\text{total}})v_{\\max}'
        ],
        examples: [
          {
            title: 'Calculation of Stopping Distance under Retardation',
            problem: 'A motorist traveling at 108 km/h applies the brakes uniformly, bringing the car to a complete stop over a distance of 90 m. Calculate: (a) The retardation of the car, and (b) The time taken to come to rest.',
            solution: 'Step 1: Convert velocity from km/h to SI units (m/s):\n  u = 108 * (1000 / 3600) = 108 * (5/18) = 30 m/s.\n  Final velocity v = 0 m/s, displacement s = 90 m.\n\nStep 2: Calculate retardation using v² = u² + 2as:\n  0² = (30)² + 2 * a * 90\n  0 = 900 + 180a\n  180a = -900  =>  a = -900 / 180 = -5 m/s².\n  Therefore, the retardation is 5 m/s².\n\nStep 3: Calculate time to come to rest using v = u + at:\n  0 = 30 + (-5)t\n  5t = 30  =>  t = 6 seconds.\n\nFinal Result: Retardation = 5 m/s², Time = 6 s.'
          },
          {
            title: 'Velocity-Time Graph Analysis for Train Journey',
            problem: 'A train starts from rest at station A and accelerates uniformly at 1.5 m/s² for 20 s. It then travels at constant speed for 40 s, and finally retards uniformly to rest at station B in 10 s. Determine the total distance between station A and station B.',
            solution: 'Step 1: Find maximum steady speed achieved during acceleration:\n  v_max = u + at = 0 + (1.5 * 20) = 30 m/s.\n\nStep 2: Identify the stages of motion on the v-t graph:\n  Stage 1 (acceleration): t₁ = 20 s.\n  Stage 2 (constant speed): t₂ = 40 s.\n  Stage 3 (retardation): t₃ = 10 s.\n  Total time T = 20 + 40 + 10 = 70 s.\n  Time duration of top parallel side (constant speed) = 40 s.\n\nStep 3: Compute total distance using Area of Trapezium:\n  s = 0.5 * (sum of parallel sides) * height\n  s = 0.5 * (40 + 70) * 30\n  s = 0.5 * 110 * 30 = 55 * 30 = 1,650 m.\n\nFinal Result: Total distance between stations = 1,650 metres (1.65 km).'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: Always check units before computing! Never plug km/h directly into kinematic equations. Multiply by 5/18 to convert to m/s.',
          'If a body starts from rest, immediately substitute u = 0. If a body is brought to rest or comes to a halt, substitute v = 0.'
        ],
        resources: [
          {
            id: 'res-phys-vid-01',
            type: 'video',
            title: 'Equations of Motion Explained with Graphs',
            description: 'Master kinematics graphs and projectile trajectory calculations.',
            duration: '22:15',
            thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'pQh1jQ0fXwM'
          }
        ],
        questions: [
          {
            id: 8301,
            subject: 'Physics',
            topic: 'Mechanics and Motion',
            question: 'A car accelerates uniformly from rest at 3 m/s² for 5 seconds. How far does it travel?',
            options: ['15 m', '37.5 m', '75 m', '150 m'],
            answer: 1,
            explanation: 's = ut + 0.5at² = (0)(5) + 0.5(3)(5²) = 0.5 * 3 * 25 = 37.5 m.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ],
        repeatedQuestions: [
          {
            id: 8302,
            subject: 'Physics',
            topic: 'Mechanics and Motion',
            question: 'What physical quantity is represented by the slope of a velocity-time graph?',
            options: ['Displacement', 'Speed', 'Acceleration', 'Force'],
            answer: 2,
            explanation: 'Acceleration is defined as dv/dt, which is the gradient of the velocity-time graph.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'sub-phys-02',
        subtopicTitle: 'Projectiles, Motion Under Gravity & Newton’s Laws',
        order: 2,
        content: `### 1. Motion Strictly Under Gravity (Free Fall)
When an object moves solely under the influence of the Earth's gravitational field, its vertical acceleration is equal to the acceleration due to gravity ($g \\approx 9.8\\text{ m/s}^2$ or $10\\text{ m/s}^2$). Air resistance is neglected.
- **Vertical Projection Upward** ($a = -g$):
  1. Time to reach maximum height:
     $$t = \\frac{u}{g}$$
  2. Maximum height reached:
     $$H_{\\max} = \\frac{u^2}{2g}$$
  3. Total time of flight (returning to point of projection):
     $$T = \\frac{2u}{g}$$
  4. Speed upon return equals the initial projection speed: $v = u$.

### 2. Two-Dimensional Projectile Motion
A projectile is any object thrown into space upon which the only acting force is gravity.
For a projectile launched with initial velocity $u$ at an angle $\\theta$ to the horizontal:
1. **Resolution into Orthogonal Components**:
   - **Horizontal component**: $u_x = u\\cos\\theta$ (remains strictly constant because horizontal acceleration $a_x = 0$).
   - **Vertical component**: $u_y = u\\sin\\theta - gt$ (undergoes uniform vertical acceleration $a_y = -g$).

2. **Master Projectile Formulas**:
   - **Time to reach maximum height ($t$)**:
     $$t = \\frac{u\\sin\\theta}{g}$$
   - **Total Time of Flight ($T$)**:
     $$T = \\frac{2u\\sin\\theta}{g}$$
   - **Maximum Height Reached ($H_{\\max}$)**:
     $$H_{\\max} = \\frac{u^2\\sin^2\\theta}{2g}$$
   - **Horizontal Range ($R$)**:
     $$R = u_x \\times T = (u\\cos\\theta)\\left(\\frac{2u\\sin\\theta}{g}\\right) = \\frac{u^2\\sin 2\\theta}{g}$$
   - **Condition for Maximum Range**:
     The range $R$ is maximum when $\\sin 2\\theta = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$:
     $$R_{\\max} = \\frac{u^2}{g}$$
   - **Complementary Angles Property**:
     Angles that sum to $90^\\circ$ (e.g., $30^\\circ$ and $60^\\circ$, or $15^\\circ$ and $75^\\circ$) achieve the **exact same horizontal range** for identical launch speeds!

3. **Trajectory Equation**:
   Eliminating time $t = \\frac{x}{u\\cos\\theta}$ yields the equation of a **parabola**:
   $$y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$$

### 3. Dynamics: Newton's Laws of Motion
1. **Newton's First Law (Law of Inertia)**:
   Every body continues in its state of rest or of uniform motion in a straight line unless compelled to change that state by an external resultant force.
   - **Inertia**: The inherent reluctance of a body to change its state of rest or uniform motion. Mass is the quantitative measure of inertia.

2. **Newton's Second Law**:
   The rate of change of linear momentum of a body is directly proportional to the applied force and takes place in the direction of the force:
   $$F = \\frac{dp}{dt} = \\frac{d(mv)}{dt} = m\\frac{dv}{dt} = ma$$
   - **Impulse ($I$)**: The product of force and the time interval during which it acts. It equals the total change in momentum:
     $$I = F \\Delta t = \\Delta p = m(v - u) \\quad [\\text{Unit: N}\\cdot\\text{s or kg}\\cdot\\text{m/s}]$$

3. **Newton's Third Law**:
   To every action, there is an equal and opposite reaction. (Action and reaction act on two **different** bodies and therefore never cancel each other out).

4. **Conservation of Linear Momentum**:
   In any closed system where no external unbalanced force acts, the total linear momentum remains constant:
   $$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$
   - **Elastic Collision**: Both momentum and kinetic energy are conserved ($e = 1$).
   - **Inelastic Collision**: Momentum is conserved, but kinetic energy is converted to sound, heat, or deformation energy ($e < 1$). If bodies coalesce and move together:
     $$m_1 u_1 + m_2 u_2 = (m_1 + m_2)V$$

### 4. Friction
Friction is the opposing force that arises at the interface of two surfaces in contact that resists relative tangential sliding.
1. **Laws of Solid Friction**:
   - Friction opposes relative motion.
   - Limiting friction is independent of the apparent area of contact.
   - Limiting friction is directly proportional to the normal reaction $R$:
     $$F_L = \\mu R$$
   - Dynamic friction is slightly less than limiting static friction: $\\mu_k < \\mu_s$.
2. **Angle of Friction ($\\lambda$) & Angle of Repose ($\\theta$)**:
   $$\\tan\\lambda = \\mu, \\quad \\tan\\theta = \\mu$$`,
        definitions: [
          {
            term: 'Projectile',
            meaning: 'An object launched into three-dimensional or two-dimensional space that continues in motion under the sole influence of gravity and initial inertia.'
          },
          {
            term: 'Linear Momentum',
            meaning: 'The product of the mass and velocity of a moving object (p = mv), representing the quantity of motion contained in the body.'
          },
          {
            term: 'Limiting Friction',
            meaning: 'The maximum static frictional resistance encountered just when relative sliding between two contacting surfaces is on the verge of occurring.'
          }
        ],
        keyPoints: [
          'At the maximum height of a projectile trajectory, vertical velocity vy = 0, but horizontal velocity vx = u cos θ is NON-ZERO!',
          'Complementary launch angles (e.g., 30° and 60°) achieve the identical horizontal range R.',
          'Action and reaction forces act on DIFFERENT bodies, which is why they do not cancel out.'
        ],
        formulas: [
          'T = \\frac{2u\\sin\\theta}{g}',
          'H_{\\max} = \\frac{u^2\\sin^2\\theta}{2g}',
          'R = \\frac{u^2\\sin 2\\theta}{g}',
          'R_{\\max} = \\frac{u^2}{g} \\quad (\\text{at } \\theta = 45^\\circ)',
          'F = ma, \\quad I = F\\Delta t = m(v - u)',
          'F_L = \\mu R, \\quad \\tan\\theta = \\mu'
        ],
        examples: [
          {
            title: 'Projectile Maximum Height and Horizontal Range',
            problem: 'A shell is fired with an initial velocity of 100 m/s at an angle of 30° to the horizontal. Calculate: (a) Time of flight, (b) Maximum height reached, and (c) Horizontal range. (Take g = 10 m/s², sin 30° = 0.5, cos 30° = 0.866, sin 60° = 0.866).',
            solution: 'Step 1: Calculate Time of Flight (T):\n  T = (2 * u * sin θ) / g\n  T = (2 * 100 * 0.5) / 10 = 100 / 10 = 10 seconds.\n\nStep 2: Calculate Maximum Height (H):\n  H = (u² * sin² θ) / (2g)\n  H = (100² * 0.5²) / (2 * 10) = (10,000 * 0.25) / 20 = 2,500 / 20 = 125 metres.\n\nStep 3: Calculate Horizontal Range (R):\n  R = (u² * sin 2θ) / g\n  sin(2 * 30°) = sin 60° = 0.866\n  R = (100² * 0.866) / 10 = (10,000 * 0.866) / 10 = 866 metres.\n\nFinal Result: Time of flight = 10 s, Max Height = 125 m, Range = 866 m.'
          },
          {
            title: 'Inelastic Collision of Two Moving Bodies',
            problem: 'A body of mass 4 kg moving with a velocity of 10 m/s collides head-on with a stationary body of mass 6 kg. If they stick together after collision, determine their common velocity.',
            solution: 'Step 1: Apply Law of Conservation of Linear Momentum:\n  Total Initial Momentum = Total Final Momentum\n  m₁u₁ + m₂u₂ = (m₁ + m₂)V\n\nStep 2: Substitute given values:\n  m₁ = 4 kg, u₁ = 10 m/s\n  m₂ = 6 kg, u₂ = 0 m/s\n  (4 * 10) + (6 * 0) = (4 + 6)V\n  40 + 0 = 10V\n  10V = 40  =>  V = 4 m/s.\n\nFinal Result: The common velocity after collision is 4 m/s.'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: What is the acceleration of a projectile at its maximum height? It is ALWAYS g (9.8 or 10 m/s²) downwards! It is never zero.',
          'At maximum height, the speed of the projectile is NOT zero; it is u cos θ.'
        ],
        resources: [
          {
            id: 'res-phys-vid-02',
            type: 'video',
            title: 'Projectiles and Newton Laws Deep Dive',
            description: 'Trajectory derivations and conservation of momentum past questions solved.',
            duration: '25:40',
            thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'bURw0hK6NqI'
          }
        ],
        questions: [
          {
            id: 8303,
            subject: 'Physics',
            topic: 'Mechanics and Motion',
            question: 'At what launch angle is the horizontal range of a projectile equal to its maximum possible value?',
            options: ['30°', '45°', '60°', '90°'],
            answer: 1,
            explanation: 'R = (u² sin 2θ) / g. Maximum range occurs when sin 2θ = 1, which implies 2θ = 90°, so θ = 45°.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'sub-phys-03',
        subtopicTitle: 'Work, Energy, Power & Simple Machines',
        order: 3,
        content: `### 1. Work, Energy and Power
1. **Work Done ($W$)**:
   Work is done whenever a force moves its point of application through a displacement in the direction of the force:
   $$W = \\vec{F} \\cdot \\vec{s} = F s \\cos\\theta \\quad [\\text{Scalar, unit: Joules (J)}]$$
   - If $\\theta = 0^\\circ$ (force and motion in same direction): $W = Fs$ (maximum positive work).
   - If $\\theta = 90^\\circ$ (force perpendicular to motion): $W = 0$ (zero work done, e.g., centripetal force).
   - If $\\theta = 180^\\circ$ (force opposes motion): $W = -Fs$ (negative work done, e.g., frictional resistance).

2. **Energy Forms & Mechanical Conservation**:
   - **Kinetic Energy ($E_k$)**: Energy possessed by a body by virtue of its motion:
     $$E_k = \\frac{1}{2}mv^2 = \\frac{p^2}{2m}$$
   - **Gravitational Potential Energy ($E_p$)**: Energy stored in an object due to its elevated position:
     $$E_p = mgh$$
   - **Law of Conservation of Mechanical Energy**: In an isolated conservative field:
     $$E_{\\text{total}} = E_k + E_p = \\text{constant}$$

3. **Power ($P$)**:
   The time rate of doing work or transferring energy:
   $$P = \\frac{W}{t} = \\frac{Fs}{t} = Fv \\quad [\\text{Unit: Watt (W) = J/s}]$$
   $$1\\text{ Horsepower (hp)} = 746\\text{ Watts}$$

### 2. Simple Machines
A machine is any device by means of which a force applied at one point (Effort, $E$) overcomes another force at a different point (Load, $L$).

1. **Fundamental Machine Characteristics**:
   - **Mechanical Advantage ($MA$)**:
     $$MA = \\frac{\\text{Load } (L)}{\\text{Effort } (E)}$$
   - **Velocity Ratio ($VR$)**:
     $$VR = \\frac{\\text{Distance moved by Effort } (d_E)}{\\text{Distance moved by Load } (d_L)}$$
     *(Velocity Ratio depends solely on machine geometry and remains constant even when friction changes!)*
   - **Efficiency ($\\eta$)**:
     $$\\eta = \\frac{\\text{Work Output}}{\\text{Work Input}} \\times 100\\% = \\frac{L \\times d_L}{E \\times d_E} \\times 100\\% = \\frac{MA}{VR} \\times 100\\%$$
   - **For an Ideal (Frictionless) Machine**: Efficiency $\\eta = 100\\% \\implies MA = VR$.
   - **For Real Practical Machines**: Efficiency is always $< 100\\%$ because of friction between moving parts and the weight of machine components, so $MA < VR$.

2. **Velocity Ratio Formulas for Common Machines**:
   - **Inclined Plane**:
     $$VR = \\frac{\\text{Length of incline } (L)}{\\text{Vertical height } (h)} = \\frac{1}{\\sin\\theta}$$
   - **Block and Tackle Pulley System**:
     $$VR = n \\quad (\\text{where } n \\text{ is the total number of pulleys or rope segments supporting the load})$$
   - **Wheel and Axle**:
     $$VR = \\frac{\\text{Radius of Wheel } (R)}{\\text{Radius of Axle } (r)}$$
   - **Hydraulic Press**:
     $$VR = \\frac{\\text{Area of large piston } (A)}{\\text{Area of small piston } (a)} = \\frac{D^2}{d^2}$$
   - **Screw Jack**:
     $$VR = \\frac{2\\pi L}{p} \\quad (L = \\text{handle length}, p = \\text{pitch of screw thread})$$`,
        definitions: [
          {
            term: 'Mechanical Advantage (MA)',
            meaning: 'The ratio of the load overcome by a machine to the effort applied to it (MA = Load / Effort).'
          },
          {
            term: 'Velocity Ratio (VR)',
            meaning: 'The ratio of the distance moved by the effort to the distance moved by the load in the same time interval.'
          },
          {
            term: 'Efficiency (η)',
            meaning: 'The percentage ratio of useful work performed by a machine to the total energy input (η = MA / VR × 100%).'
          }
        ],
        keyPoints: [
          'Velocity Ratio (VR) is purely geometric and never changes with friction or lubrication; Mechanical Advantage (MA) increases with lubrication.',
          'Efficiency is always strictly less than 100% in real machines due to friction and the weight of moving parts.',
          'When work is done perpendicular to the direction of motion (cos 90° = 0), work done is zero.'
        ],
        formulas: [
          'W = Fs\\cos\\theta',
          'E_k = \\frac{1}{2}mv^2, \\quad E_p = mgh',
          'P = \\frac{W}{t} = Fv',
          'MA = \\frac{\\text{Load}}{\\text{Effort}}',
          'VR = \\frac{d_E}{d_L}',
          '\\eta = \\frac{MA}{VR} \\times 100\\%',
          '\\text{Pulley: } VR = n, \\quad \\text{Incline: } VR = \\frac{1}{\\sin\\theta}'
        ],
        examples: [
          {
            title: 'Pulley System Efficiency and Effort Calculation',
            problem: 'A block and tackle pulley system with 5 pulleys is used to raise a load of 600 N through a vertical height of 4 m. If the efficiency of the machine is 80%, calculate: (a) The Velocity Ratio, (b) The Mechanical Advantage, (c) The effort required, and (d) The work done by the effort.',
            solution: 'Step 1: Velocity Ratio (VR) of pulley system:\n  VR = total number of pulleys = 5.\n\nStep 2: Find Mechanical Advantage (MA) using efficiency:\n  Efficiency η = (MA / VR) * 100%\n  80% = (MA / 5) * 100%  =>  0.80 = MA / 5\n  MA = 0.80 * 5 = 4.0.\n\nStep 3: Calculate Effort (E):\n  MA = Load / Effort\n  4.0 = 600 / E  =>  E = 600 / 4 = 150 N.\n\nStep 4: Calculate Work Done by Effort:\n  Distance moved by Effort d_E = VR * d_L = 5 * 4 = 20 m.\n  Work Input = Effort * d_E = 150 N * 20 m = 3,000 Joules.\n  (Useful Work Output = 600 * 4 = 2,400 J; Efficiency = 2,400 / 3,000 = 80% ✓).\n\nFinal Result: VR = 5, MA = 4.0, Effort = 150 N, Work Done = 3,000 J.'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: What happens to MA and VR when a machine is lubricated? VR remains constant (it depends only on geometry), while MA increases because friction decreases!',
          'Remember the relation between Kinetic Energy and Momentum: E_k = p² / (2m). If momentum doubles, kinetic energy quadruples!'
        ],
        resources: [
          {
            id: 'res-phys-vid-03',
            type: 'video',
            title: 'Simple Machines & Efficiency Masterclass',
            description: 'Pulleys, screw jacks, hydraulic press and inclined planes past questions.',
            duration: '21:10',
            thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'pQh1jQ0fXwM'
          }
        ],
        questions: [
          {
            id: 8304,
            subject: 'Physics',
            topic: 'Mechanics and Motion',
            question: 'A machine with a velocity ratio of 6 requires an effort of 200 N to lift a load of 960 N. What is the efficiency of the machine?',
            options: ['70%', '75%', '80%', '85%'],
            answer: 2,
            explanation: 'MA = Load / Effort = 960 / 200 = 4.8. Efficiency = (MA / VR) * 100% = (4.8 / 6) * 100% = 80%.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ]
      }
    ]
  },

  // ─── BIOLOGY: CELL BIOLOGY & LIVING SYSTEMS ──────────────────────────────────
  {
    id: 'bio-cell-01',
    exam: 'JAMB',
    subject: 'Biology',
    topicTitle: 'Cell Biology & Living Systems',
    category: 'General Biology',
    description: 'Cell structure, organelle functions, organization of life, cellular transport, osmosis, and cell division.',
    globalResources: [
      {
        id: 'res-bio-pdf-01',
        type: 'pdf',
        title: 'JAMB Biology Cell Biology & Organelles Summary',
        description: 'High-yield cell diagrams, organelle comparison table, and cell division summary sheet.',
        fileSize: '2.8 MB',
        url: 'https://studyplug.com.ng/resources/bio_cell_summary.pdf'
      }
    ],
    subtopics: [
      {
        id: 'sub-bio-01',
        subtopicTitle: 'Cell Theory, Structure & Organization of Life',
        order: 1,
        content: `### 1. The Classical Cell Theory
The cell is the basic structural, functional, and biological unit of all known living organisms. The classical Cell Theory was formulated by German scientists **Matthias Schleiden** (botanist, 1838) and **Theodor Schwann** (zoologist, 1839), and later expanded by **Rudolf Virchow** (1855):
1. All living organisms are composed of one or more cells.
2. The cell is the basic structural and functional unit of life.
3. All cells arise from pre-existing cells through cell division (*"Omnis cellula e cellula"*).

### 2. Levels of Organization of Life
Living things exhibit hierarchical biological organization:
1. **First Level (Single-celled / Unicellular)**: Free-living independent cells that carry out all life processes (e.g., *Amoeba*, *Paramecium*, *Euglena*, *Chlamydomonas*).
2. **Second Level (Colonial Organisms)**: Aggregations of similar cells joined together with minimal division of labor (e.g., *Volvox*, *Pandorina*).
3. **Third Level (Filamentous Organisms)**: Cells arranged end-to-end to form linear thread-like structures (e.g., *Spirogyra*, *Oscillatoria*).
4. **Fourth Level (Part of a Multicellular Organism)**: Specialized cells functioning within organized systems:
   $$\\text{Cell} \\longrightarrow \\text{Tissue} \\longrightarrow \\text{Organ} \\longrightarrow \\text{System} \\longrightarrow \\text{Multicellular Organism}$$
   - *Tissues in plants*: Epidermal, Xylem (vessels and tracheids for water conduction), Phloem (sieve tubes and companion cells for food translocation).
   - *Tissues in animals*: Epithelial, Connective (blood, bone, cartilage), Muscular, Nervous.

### 3. Prokaryotic vs. Eukaryotic Cells
- **Prokaryotes** (Bacteria and Archaea): Lack a true membrane-bound nucleus and membrane-bound organelles. Genetic material is a naked circular DNA located in the nucleoid. Possess smaller 70S ribosomes.
- **Eukaryotes** (Plants, Animals, Fungi, Protists): Possess a true membrane-bound nucleus enclosing linear chromosomes bound to histone proteins. Possess membrane-bound organelles and larger 80S ribosomes.

### 4. Structure & Function of Cellular Organelles
1. **Nucleus**: Houses chromatin (DNA + histones) and the nucleolus (site of rRNA synthesis). Coordinates cell activities including protein synthesis, cell division, and heredity.
2. **Mitochondria ("Powerhouse of the Cell")**: Double-membrane organelle with folded inner cristae. Site of aerobic cellular respiration (Krebs cycle and ATP synthesis).
3. **Chloroplast**: Double-membrane organelle found in green plant cells containing chlorophyll. Site of photosynthesis where light energy is converted to chemical energy in glucose.
4. **Endoplasmic Reticulum (ER)**:
   - *Rough ER (RER)*: Studded with ribosomes; synthesizes and transports proteins.
   - *Smooth ER (SER)*: Synthesizes lipids, phospholipids, steroid hormones, and detoxifies poisons.
5. **Ribosomes**: Non-membrane-bound complexes of rRNA and proteins; primary sites of protein synthesis (translation).
6. **Golgi Apparatus (Golgi Body)**: Stacks of flattened cisternae; packages, chemically modifies, and sorts proteins for secretion or cellular transport.
7. **Lysosomes ("Suicide Bags")**: Contain hydrolytic digestive enzymes that break down cellular debris, foreign pathogens, and worn-out organelles (autolysis).
8. **Vacuoles**:
   - Plant cells contain a large central sap vacuole that maintains turgor pressure and stores cell sap.
   - Fresh-water protists (e.g., *Amoeba*) contain **contractile vacuoles** for osmoregulation (expelling excess water).

### 5. Differences Between Plant and Animal Cells
| Feature | Plant Cell | Animal Cell |
| :--- | :--- | :--- |
| **Cell Wall** | Present (rigid, composed of cellulose) | Absent (surrounded only by plasma membrane) |
| **Chloroplasts** | Present in photosynthetic cells | Entirely absent |
| **Vacuole** | Single large central sap vacuole | Small, temporary vacuoles (if present) |
| **Centrioles** | Absent in higher plants | Present (organize mitotic spindle in cell division) |
| **Shape** | Fixed, regular, rigid geometric shape | Flexible, irregular, variable shape |
| **Food Storage** | Stored primarily as starch | Stored primarily as glycogen |`,
        definitions: [
          {
            term: 'Cell Theory',
            meaning: 'The foundational biological principle stating that all living organisms are composed of cells, the cell is the unit of life, and all cells arise from pre-existing cells.'
          },
          {
            term: 'Prokaryote',
            meaning: 'A microscopic single-celled organism that has neither a distinct nucleus with a membrane nor other specialized membrane-bound organelles.'
          },
          {
            term: 'Osmoregulation',
            meaning: 'The biological process of maintaining water and solute balance across cellular membranes, performed by contractile vacuoles in freshwater protozoa.'
          }
        ],
        keyPoints: [
          'Virchow added the third tenet to cell theory: all living cells arise only from pre-existing cells.',
          'Mitochondria and chloroplasts contain their own circular DNA and 70S ribosomes (Endosymbiotic Theory).',
          'Amoeba and Paramecium rely on contractile vacuoles for osmoregulation to prevent osmotic bursting in freshwater.'
        ],
        formulas: [
          '\\text{Biological Hierarchy: Cell } \\to \\text{ Tissue } \\to \\text{ Organ } \\to \\text{ System } \\to \\text{ Organism}',
          '\\text{Aerobic Respiration: } \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\to 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 36\\text{-}38\\text{ ATP}',
          '\\text{Photosynthesis: } 6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light/chlorophyll}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2'
        ],
        examples: [
          {
            title: 'Identification of Cell Types under Electron Microscopy',
            problem: 'An unknown microscopic cell specimen reveals a cellulose cell wall, large central vacuole, and prominent double-membraned green plastids. Classify this organism and explain why it lacks centrioles.',
            solution: 'Step 1: Analyze features:\n  - Cellulose cell wall -> Plant kingdom characteristic.\n  - Large central vacuole -> Plant cell.\n  - Double-membraned green plastids (chloroplasts) -> Photosynthetic plant cell.\n\nStep 2: Reason for absence of centrioles:\n  Higher plant cells do not require centrioles to organize mitotic spindle fibers during cell division; instead, spindle poles are formed by microtubule organizing centers (MTOCs) in the cytoplasm.\n\nConclusion: The specimen is a eukaryotic plant cell.'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: Euglena is often cited in questions because it possesses both plant characteristics (chloroplasts, paramylon starch) and animal characteristics (pellicle, eyespot, flagellum, gullet).',
          'Remember the primary storage polysaccharide: Plants store starch; Animals and Fungi store glycogen!'
        ],
        resources: [
          {
            id: 'res-bio-vid-01',
            type: 'video',
            title: 'Cell Structure & Organelles Walkthrough',
            description: 'Complete breakdown of plant vs animal cells and microscopic organelles.',
            duration: '20:15',
            thumbnail: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'URUJD5NEXC8'
          }
        ],
        questions: [
          {
            id: 8401,
            subject: 'Biology',
            topic: 'Cell Biology & Living Systems',
            question: 'Which organelle is responsible for the production of ATP during aerobic cellular respiration?',
            options: ['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Endoplasmic reticulum'],
            answer: 1,
            explanation: 'The mitochondrion is the powerhouse of the cell where the Krebs cycle and oxidative phosphorylation generate ATP.',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ]
      },
      {
        id: 'sub-bio-02',
        subtopicTitle: 'Cellular Transport, Diffusion, Osmosis & Plasmolysis',
        order: 2,
        content: `### 1. Cellular Transport Mechanisms
Living cells constantly exchange substances with their surrounding environment across the selectively permeable plasma membrane through two primary mechanisms:
1. **Passive Transport**: Movement of particles down their concentration gradient (from higher to lower concentration) without the expenditure of metabolic energy (ATP).
   - **Simple Diffusion**: Spontaneous movement of gas or solute molecules down a concentration gradient until evenly distributed.
   - **Facilitated Diffusion**: Movement of polar or charged molecules (e.g., glucose, amino acids) through transport channel proteins or carrier proteins without ATP.
   - **Osmosis**: Special case of diffusion involving the passage of water molecules from a region of higher water potential (lower solute concentration) to a region of lower water potential (higher solute concentration) through a selectively permeable membrane.
2. **Active Transport**: Movement of ions or molecules across a cellular membrane against their concentration gradient (from lower to higher concentration) requiring metabolic energy (ATP) and specific carrier transport proteins (e.g., Sodium-Potassium pump $\\text{Na}^+/\\text{K}^+$-ATPase).

### 2. Osmotic Behaviour in Plant and Animal Cells
The behaviour of cells depends directly on the relative osmotic pressure of the surrounding solution:
1. **Hypotonic Solution (Higher water potential / lower solute concentration)**:
   - **Plant Cell**: Water enters by endosmosis. The cytoplasm expands against the rigid cell wall, creating internal hydrostatic pressure called **Turgor Pressure**. The cell becomes **Turgid**. The rigid cell wall exerts an equal opposing **Wall Pressure**, preventing the plant cell from bursting.
   - **Animal Cell (e.g., Red Blood Cell)**: Lacks a cell wall! Water enters continuously until the cell swells and bursts, a process known as **Haemolysis** (or osmotic lysis).

2. **Hypertonic Solution (Lower water potential / higher solute concentration)**:
   - **Plant Cell**: Water leaves the cell by exosmosis. The protoplast shrinks away from the rigid cell wall, leading to a flaccid state called **Plasmolysis**. If water is restored promptly, the cell can undergo **Deplasmolysis**.
   - **Animal Cell (e.g., Red Blood Cell)**: Water leaves rapidly; the cell shrinks, shrivels, and forms notched edges, a process termed **Crenation**.

3. **Isotonic Solution (Equal solute concentration / same osmotic pressure)**:
   - Net water movement is zero. Plant cells become somewhat flaccid; animal cells maintain their normal biconcave disc shape.

### 3. Biological Importance of Diffusion and Osmosis
1. **Diffusion in Living Organisms**:
   - Gaseous exchange across alveoli in mammalian lungs ($\\text{O}_2$ inward, $\\text{CO}_2$ outward).
   - Exchange of gases through leaf stomata and lenticels during photosynthesis and respiration.
   - Absorption of digested food molecules (fatty acids and glycerol) across intestinal villi.
2. **Osmosis in Living Organisms**:
   - Absorption of soil water by root hair cells.
   - Maintenance of turgidity in non-woody plant stems to provide mechanical support.
   - Opening and closing of guard cells controlling stomatal transpiration.
   - Reabsorption of water in kidney nephron tubules (Loop of Henle and collecting ducts).`,
        definitions: [
          {
            term: 'Osmosis',
            meaning: 'The net movement of water molecules from a region of higher water potential to lower water potential across a selectively permeable membrane.'
          },
          {
            term: 'Plasmolysis',
            meaning: 'The shrinkage of the protoplasm away from the cellulose cell wall of a plant cell when placed in a hypertonic solution due to exosmosis.'
          },
          {
            term: 'Haemolysis',
            meaning: 'The bursting of red blood cells caused by excessive entry of water when placed in a hypotonic solution due to lack of a rigid cell wall.'
          }
        ],
        keyPoints: [
          'Plant cells do NOT burst in hypotonic solutions because their cellulose cell wall exerts wall pressure that counterbalances turgor pressure.',
          'Animal cells crenate in hypertonic solutions and haemolyse (burst) in hypotonic solutions.',
          'Active transport is the only transport mechanism that can move substances AGAINST a concentration gradient using ATP.'
        ],
        formulas: [
          '\\text{Water Potential: } \\Psi = \\Psi_s + \\Psi_p \\quad (\\text{Solute Potential } + \\text{ Pressure Potential})',
          '\\text{Net Osmotic Flow: High } \\Psi \\longrightarrow \\text{Low } \\Psi',
          '\\text{Hypotonic: Swelling / Turgidity}; \\quad \\text{Hypertonic: Plasmolysis / Crenation}'
        ],
        examples: [
          {
            title: 'Red Blood Cell in Pure Distilled Water',
            problem: 'A drop of mammalian blood is placed into a test tube containing pure distilled water. Describe the microscopic observation after 15 minutes and explain the physiological mechanism responsible.',
            solution: 'Step 1: Identify solution type:\n  Distilled water is strongly hypotonic relative to mammalian erythrocyte cytoplasm (which contains ~0.9% NaCl equivalent).\n\nStep 2: Explain osmotic flow:\n  Water enters the red blood cells rapidly by endosmosis down the water potential gradient.\n\nStep 3: State biological consequence:\n  Since red blood cells lack a protective rigid cellulose cell wall, the cell membrane stretches beyond its elastic limit until the erythrocytes burst (haemolysis). Under the microscope, intact cells disappear, leaving a clear red solution of freed haemoglobin ("ghost cells").\n\nFinal Result: Haemolysis occurs due to endosmosis in a hypotonic environment.'
          }
        ],
        examTips: [
          'JAMB Examiner Trap: If a question mentions a plant strip placed in concentrated salt solution curving or becoming limp, the strip lost water by exosmosis (plasmolysis).',
          'Do not confuse turgor pressure (fluid pressure pushing outward against cell wall) with wall pressure (mechanical resistance pushed inward by the cell wall).'
        ],
        resources: [
          {
            id: 'res-bio-vid-02',
            type: 'video',
            title: 'Osmosis, Diffusion & Plasmolysis Visualized',
            description: 'Laboratory experiments and past examination questions on cellular transport.',
            duration: '18:50',
            thumbnail: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
            youtubeId: 'bURw0hK6NqI'
          }
        ],
        questions: [
          {
            id: 8402,
            subject: 'Biology',
            topic: 'Cell Biology & Living Systems',
            question: 'What happens to a red blood cell placed in a concentrated hypertonic sugar solution?',
            options: ['It swells and bursts', 'It becomes turgid', 'It undergoes crenation (shrivels)', 'It undergoes deplasmolysis'],
            answer: 2,
            explanation: 'In a hypertonic solution, water leaves the red blood cell by exosmosis, causing it to shrink and crinkle (crenation).',
            year: 2024,
            exam: 'JAMB',
            difficulty: 'easy'
          }
        ]
      }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// DYNAMIC TOPIC & RESOURCE GENERATOR FROM COMPREHENSIVE NOTES
// ─────────────────────────────────────────────────────────────────────────────

const LOCAL_STORAGE_CUSTOM_TOPICS_KEY = 'studyplug_custom_topics_v1';

export function getAllSyllabusTopics(): SyllabusTopic[] {
  // Load custom admin-created topics from localStorage
  let customTopics: SyllabusTopic[] = [];
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CUSTOM_TOPICS_KEY);
    if (saved) {
      customTopics = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to parse custom topics', e);
  }

  // Combine curated topics with synthesized topics from COMPREHENSIVE_NOTES
  const synthesizedMap = new Map<string, SyllabusTopic>();

  // First seed with curated topics
  CURATED_TOPICS.forEach(t => {
    synthesizedMap.set(`${t.subject.toLowerCase()}-${t.topicTitle.toLowerCase()}`, t);
  });

  // Then synthesize any missing topics from the 1,550+ COMPREHENSIVE_NOTES
  COMPREHENSIVE_NOTES.forEach(note => {
    const key = `${note.subject.toLowerCase()}-${note.topic.toLowerCase()}`;
    if (!synthesizedMap.has(key)) {
      const topicQuestions = ALL_QUESTIONS.filter(
        q => q.subject.toLowerCase() === note.subject.toLowerCase() &&
             (q.topic?.toLowerCase().includes(note.topic.toLowerCase()) || note.topic.toLowerCase().includes(q.topic?.toLowerCase() || ''))
      ).slice(0, 10);

      const repeatedQs = topicQuestions.slice(0, 4);

      synthesizedMap.set(key, {
        id: `synth-${note.subject.toLowerCase()}-${note.id}`,
        exam: (note.exam_type?.includes('WAEC') ? 'WAEC' : 'JAMB') as any,
        subject: note.subject,
        topicTitle: note.topic,
        category: note.class_level || 'Syllabus Core',
        description: note.summary_60s || `Detailed lesson notes and official syllabus mastery for ${note.topic}.`,
        globalResources: [
          {
            id: `res-pdf-${note.id}`,
            type: 'pdf',
            title: `${note.topic} Complete Study Companion`,
            description: `Full syllabus notes, worked examples and summary formulas for ${note.topic}.`,
            fileSize: '2.4 MB',
            url: `https://studyplug.com.ng/notes/${encodeURIComponent(note.topic)}.pdf`
          },
          {
            id: `res-vid-${note.id}`,
            type: 'video',
            title: `${note.topic} Video Explainer`,
            description: `High-yield Morning Tea classroom walkthrough of ${note.topic}.`,
            duration: '18:40',
            thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
            youtubeId: '3QpL5rQ0kQw'
          }
        ],
        subtopics: [
          {
            id: `sub-synth-${note.id}-1`,
            subtopicTitle: note.subtopic || 'Fundamental Principles & Mechanisms',
            order: 1,
            content: note.content || note.summary_60s || 'Classroom study note content.',
            keyPoints: note.syllabus_objectives ? note.syllabus_objectives.split('\n').filter(Boolean) : [
              'Understand core definition and principles.',
              'Master standard problem-solving procedures.',
              'Avoid common exam traps and calculation errors.'
            ],
            formulas: note.key_formulas ? [note.key_formulas] : [],
            examTips: note.pro_tips_95 ? [note.pro_tips_95] : [
              'Pay close attention to keywords in exam questions.',
              'Always show intermediate steps in theory papers.'
            ],
            resources: [
              {
                id: `res-sub-vid-${note.id}`,
                type: 'video',
                title: `${note.subtopic || note.topic} Masterclass`,
                description: 'Full video walkthrough with step-by-step past questions solving.',
                duration: '16:30',
                thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
                youtubeId: 'bURw0hK6NqI'
              }
            ],
            questions: topicQuestions,
            repeatedQuestions: repeatedQs
          }
        ],
        repeatedQuestions: repeatedQs
      });
    }
  });

  // Append or overwrite with custom admin topics
  customTopics.forEach(custom => {
    const key = `${custom.subject.toLowerCase()}-${custom.topicTitle.toLowerCase()}`;
    synthesizedMap.set(key, custom);
  });

  return Array.from(synthesizedMap.values());
}

export function getTopicsForSubject(subject: string, exam?: string): SyllabusTopic[] {
  const all = getAllSyllabusTopics();
  return all.filter(t => {
    const matchesSubject = t.subject.toLowerCase() === subject.toLowerCase();
    if (!matchesSubject) return false;
    if (exam && exam !== 'All') {
      return t.exam.toLowerCase() === exam.toLowerCase();
    }
    return true;
  });
}

export function getTopicById(topicId: string): SyllabusTopic | undefined {
  const all = getAllSyllabusTopics();
  return all.find(t => t.id === topicId);
}

export function saveCustomTopic(topic: SyllabusTopic): void {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CUSTOM_TOPICS_KEY);
    let list: SyllabusTopic[] = saved ? JSON.parse(saved) : [];
    const existingIndex = list.findIndex(t => t.id === topic.id);
    if (existingIndex >= 0) {
      list[existingIndex] = topic;
    } else {
      list.unshift(topic);
    }
    localStorage.setItem(LOCAL_STORAGE_CUSTOM_TOPICS_KEY, JSON.stringify(list));
  } catch (e) {
    console.error('Error saving custom topic', e);
  }
}

export function deleteCustomTopic(topicId: string): void {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_CUSTOM_TOPICS_KEY);
    if (saved) {
      let list: SyllabusTopic[] = JSON.parse(saved);
      list = list.filter(t => t.id !== topicId);
      localStorage.setItem(LOCAL_STORAGE_CUSTOM_TOPICS_KEY, JSON.stringify(list));
    }
  } catch (e) {
    console.error('Error deleting custom topic', e);
  }
}
