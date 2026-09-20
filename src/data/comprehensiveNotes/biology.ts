import { LessonNote } from '../masterLessonNotes';

export const BIOLOGY_NOTES: LessonNote[] = [
  {
    id: 301,
    subject: 'Biology',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Living Organisms and Cell Structure',
    subtopic: 'Cell Theory, Organelles (Mitochondria, Ribosomes, Chloroplasts), Plant vs Animal Cells, Diffusion, Osmosis & Plasmolysis',
    summary_60s: 'Cell is the fundamental structural and functional unit of life. Cell Theory (Schleiden, Schwann, Virchow): all organisms consist of cells, arise from pre-existing cells. Organelles: Mitochondrion (powerhouse, ATP synthesis), Ribosome (protein synthesis), Chloroplast (photosynthesis), Nucleus (genetic material DNA). Plant cells have cellulose cell wall, large central vacuole, and plastids/chloroplasts; animal cells have centrioles, small temporary vacuoles, and no cell wall. Osmosis is movement of water molecules from lower solute to higher solute concentration across semi-permeable membrane.',
    key_formulas: 'Magnification = Image size / Actual size\nOsmotic Pressure = MRT\nPlasmolysis: Cell placed in hypertonic solution loses water and shrinks\nTurgidity: Plant cell placed in hypotonic solution absorbs water and swells',
    pro_tips_95: 'Plant cells do NOT burst in hypotonic (dilute) water because the rigid cellulose cell wall exerts turgor pressure! Animal cells (e.g. red blood cells) lack a cell wall and will undergo haemolysis (bursting) in distilled water!',
    syllabus_objectives: 'Candidates should be able to: 1. State the cell theory. 2. Distinguish between plant and animal cells under light and electron microscopes. 3. Describe functions of cellular organelles. 4. Explain mechanisms of diffusion, osmosis, and plasmolysis.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# LIVING ORGANISMS AND CELL STRUCTURE

## The Cell Theory & Cellular Organelles

> ?? **Official Syllabus Objectives:**
> - State the contributions of Robert Hooke, Schleiden, Schwann, and Rudolf Virchow.
> - Identify structure and functions of cell organelles.
> - Contrast plant and animal cellular structures.

### 1. Key Organelles & Their Functions

| Organelle | Structure | Primary Biological Function | Presence |
|---|---|---|---|
| **Nucleus** | Double membrane with nuclear pores, containing nucleolus and chromatin | Controls all metabolic activities; stores genetic inheritance (DNA) | Both |
| **Mitochondrion** | Double-membrane with inner folded cristae and fluid matrix | Site of Krebs cycle and oxidative phosphorylation; **ATP synthesis (Powerhouse)** | Both |
| **Ribosome** | Non-membranous granular particle of rRNA and protein | **Site of protein synthesis** and translation of mRNA | Both |
| **Chloroplast** | Double-membrane containing thylakoids stacked in grana | **Site of photosynthesis**; contains green chlorophyll pigment | Plant only |
| **Endoplasmic Reticulum (ER)** | Network of membranous tubules (Rough with ribosomes, Smooth without) | Rough ER: protein transport; Smooth ER: lipid and steroid synthesis, detoxification | Both |
| **Golgi Apparatus** | Stacked flattened cisternae | Packaging, modification, and secretion of proteins and enzymes | Both |
| **Cell Wall** | Rigid non-living outer layer made of cellulose fibers | Provides mechanical support, shape, and prevents lysis | Plant only |
| **Centrioles** | Pair of cylindrical structures arranged at right angles | Forms spindle fibers during cell division (mitosis/meiosis) | Animal only |

---

## Plant vs Animal Cells: High-Yield Comparison

| Characteristic | Plant Cell | Animal Cell |
|---|---|---|
| **Cell Wall** | Present (rigid, composed of cellulose) | Absent (bounded only by flexible plasma membrane) |
| **Chloroplasts / Plastids** | Present in photosynthetic cells | Absent |
| **Vacuoles** | One large central permanent vacuole filled with cell sap | Small, temporary, and scattered (if present) |
| **Centrioles / Centrosomes** | Absent in higher plants | Present |
| **Shape** | Fixed, rigid, and polygonal | Flexible, irregular, and non-fixed |
| **Storage Carbohydrate** | Starch granules | Glycogen granules |

---

## Cellular Transport: Diffusion, Osmosis & Plasmolysis
- **Diffusion:** Passive net movement of molecules or ions from a region of higher concentration to lower concentration down a concentration gradient.
- **Osmosis:** Net movement of water molecules from a region of higher water potential (dilute solution) to lower water potential (concentrated solution) through a **semi-permeable membrane**.
- **Plasmolysis:** Shrinkage of cytoplasm away from the cell wall when a plant cell is immersed in a **hypertonic (highly concentrated)** solution due to exosmosis.
- **Turgidity:** Firm, swollen state of a plant cell when placed in a **hypotonic (dilute)** solution due to endosmosis.

### Worked JAMB Example
**Question:** An animal cell placed in a pure distilled water solution will eventually:
- A. Become turgid and plasmolysed
- B. Swell and undergo lysis (burst)
- C. Shrink and become flaccid
- D. Remain completely unchanged
**Solution:**
- Distilled water is hypotonic to the cytoplasm of the animal cell. Water rushes into the cell via endosmosis. Because animal cells lack a rigid cellulose cell wall to withstand turgor pressure, the plasma membrane stretches and bursts (**lysis / haemolysis**).
- **Correct Answer: Option B**
`
  },
  {
    id: 302,
    subject: 'Biology',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Genetics, Heredity and Variation',
    subtopic: 'Mendel\'s Laws of Inheritance, Monohybrid Cross, Incomplete Dominance, Sex Determination, Sex-Linked Traits (Haemophilia, Colour Blindness) & Sickle Cell Trait',
    summary_60s: 'Mendel\'s 1st Law (Segregation): alleles separate during gamete formation so each gamete carries only one allele. Mendel\'s 2nd Law (Independent Assortment): alleles of different genes assort independently. Phenotypic ratio for monohybrid heterozygous cross (Tt ? Tt) is 3:1; genotypic ratio is 1:2:1. Sex chromosomes: Female XX (homogametic), Male XY (heterogametic). Sex-linked traits carried on X chromosome: haemophilia, red-green colour blindness. Sickle cell anaemia is autosomal recessive (HbS HbS).',
    key_formulas: 'Monohybrid F2 Phenotypic Ratio: 3 Dominant : 1 Recessive\nMonohybrid F2 Genotypic Ratio: 1 TT : 2 Tt : 1 tt (1:2:1)\nDihybrid F2 Phenotypic Ratio: 9 : 3 : 3 : 1\nSickle Cell Genotypes: HbA HbA (Normal), HbA HbS (Carrier/Trait), HbS HbS (Sickler)',
    pro_tips_95: 'Sex-linked traits (haemophilia and colour blindness) are far more common in MALES because males possess only ONE X-chromosome (XY)! A single recessive allele on the X chromosome causes the trait in males, whereas females need TWO recessive alleles (X^h X^h) to be affected!',
    syllabus_objectives: 'Candidates should be able to: 1. State Mendel\'s laws of inheritance. 2. Deduce genotypes and phenotypes using Punnett squares. 3. Explain inheritance of sex and sex-linked traits. 4. Analyze blood groups and sickle cell pedigree crosses.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# GENETICS, HEREDITY AND VARIATION

## Mendel's Laws & The Monohybrid Cross

> ?? **Official Syllabus Objectives:**
> - State Mendel's First Law (Law of Segregation).
> - Construct genetic diagrams (Punnett squares) to determine phenotypic and genotypic ratios.
> - Solve monohybrid and sex-linked inheritance problems.

### 1. Fundamental Genetic Terms
- **Gene:** Basic physical and functional unit of heredity located on chromosomes.
- **Alleles:** Alternative forms of a gene occupying the same locus on homologous chromosomes.
- **Phenotype:** The observable physical or biochemical characteristics of an organism ($3\\text{ Tall} : 1\\text{ Dwarf}$).
- **Genotype:** The genetic makeup of an organism ($1\\text{ }TT : 2\\text{ }Tt : 1\\text{ }tt$).
- **Dominant Allele:** An allele that expresses its phenotypic effect in both homozygous ($TT$) and heterozygous ($Tt$) states.
- **Recessive Allele:** An allele whose phenotypic effect is masked in the heterozygous state and is expressed ONLY in the homozygous recessive condition ($tt$).

---

## Sickle Cell Anaemia & Pedigree Crosses
- Normal Haemoglobin: $Hb^A$
- Sickle Cell Haemoglobin: $Hb^S$
- **Genotypes:**
  - $Hb^A Hb^A$: Normal (susceptible to severe malaria)
  - $Hb^A Hb^S$: Sickle Cell Trait / Carrier (resistant to severe malaria; heterozygote advantage)
  - $Hb^S Hb^S$: Sickle Cell Anaemia / Sickler

### Worked WAEC Genetic Cross
**Question:** A man with sickle cell trait ($Hb^A Hb^S$) marries a woman who is also a carrier ($Hb^A Hb^S$). What is the probability that their child will have sickle cell anaemia?
**Solution:**
1. Parental Genotypes: $Hb^A Hb^S \\times Hb^A Hb^S$
2. Gametes: ($Hb^A$, $Hb^S$) $\\times$ ($Hb^A$, $Hb^S$)
3. Offspring Genotypes:
   - $1\\text{ }Hb^A Hb^A$ (Normal) $= 25\\%$
   - $2\\text{ }Hb^A Hb^S$ (Carriers) $= 50\\%$
   - $1\\text{ }Hb^S Hb^S$ (Sickler) $= 25\\%$
4. Probability of child with sickle cell anaemia $= \\frac{1}{4} = \\mathbf{25\\%}$.
`
  },
  {
    id: 303,
    subject: 'Biology',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Transport System in Living Organisms',
    subtopic: 'Mammalian Circulatory System, Heart Anatomy, Double Circulation, Blood Groups (ABO, Rhesus Factor), Plant Transport (Xylem & Phloem)',
    summary_60s: 'Mammalian circulatory system is closed and double: Pulmonary (heart to lungs and back) and Systemic (heart to body tissues and back). Heart has 4 chambers: Right atrium & ventricle pump deoxygenated blood; Left atrium & ventricle pump oxygenated blood. ABO Blood Groups: Group O is universal donor; Group AB is universal recipient. Plant transport: Xylem transports water and mineral salts upwards from roots to leaves (transpiration pull); Phloem translocates manufactured sucrose/food bidirectionally.',
    key_formulas: 'Cardiac Output = Heart Rate ? Stroke Volume\nBlood Group Antigens & Antibodies:\nGroup A: Antigen A, Antibody b\nGroup B: Antigen B, Antibody a\nGroup AB: Antigens A and B, No antibodies (Universal Recipient)\nGroup O: No antigens, Antibodies a and b (Universal Donor)',
    pro_tips_95: 'The Left Ventricle has the thickest muscular wall of all four heart chambers because it must pump blood at high pressure throughout the entire systemic circulation to the head and extremities!',
    syllabus_objectives: 'Candidates should be able to: 1. Describe the structure and function of mammalian heart and blood vessels. 2. Trace the path of blood in double circulation. 3. Explain blood compatibility in ABO and Rhesus transfusion. 4. Describe xylem and phloem transport in plants.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# TRANSPORT SYSTEM IN LIVING ORGANISMS

## Mammalian Circulatory System & Heart Structure
- **Double Circulation:** Blood passes through the heart twice in one complete circuit around the body:
  1. **Pulmonary Circulation:** Deoxygenated blood travels from Right Ventricle $\\rightarrow$ Pulmonary Artery $\\rightarrow$ Lungs (oxygenated) $\\rightarrow$ Pulmonary Veins $\\rightarrow$ Left Atrium.
  2. **Systemic Circulation:** Oxygenated blood travels from Left Ventricle $\\rightarrow$ Aorta $\\rightarrow$ Body tissues $\\rightarrow$ Vena Cava $\\rightarrow$ Right Atrium.

### Blood Group Transfusion Compatibility Table

| Blood Group | Antigens on Red Cells | Antibodies in Plasma | Can Donate Blood To | Can Receive Blood From |
|---|---|---|---|---|
| **A** | $A$ | Anti-$B$ ($b$) | $A, AB$ | $A, O$ |
| **B** | $B$ | Anti-$A$ ($a$) | $B, AB$ | $B, O$ |
| **AB** | $A$ and $B$ | **None** | $AB$ only | **$A, B, AB, O$ (Universal Recipient)** |
| **O** | **None** | Anti-$A$ and Anti-$B$ | **$A, B, AB, O$ (Universal Donor)** | $O$ only |

---

## Plant Vascular System: Xylem vs Phloem
- **Xylem Tissue:** Composed of dead, hollow, lignified vessels and tracheids. Conducts **water and dissolved mineral salts upwards** from the roots to the leaves via the **transpiration stream**.
- **Phloem Tissue:** Composed of living sieve tube elements and companion cells. Conducts **manufactured carbohydrates (sucrose) and amino acids** bidirectionally from source (leaves) to sink (fruits, roots) by **translocation**.
`
  }
];
