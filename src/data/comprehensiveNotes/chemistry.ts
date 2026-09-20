import { LessonNote } from '../masterLessonNotes';

export const CHEMISTRY_NOTES: LessonNote[] = [
  {
    id: 201,
    subject: 'Chemistry',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Atomic Structure and Chemical Bonding',
    subtopic: 'Subatomic Particles, Electronic Configuration (s, p, d, f), Isotopy, Ionic, Covalent & Coordinate Bonds',
    summary_60s: 'Atoms consist of protons (charge +1, mass 1), neutrons (charge 0, mass 1), and electrons (charge -1, mass ~1/1840). Electronic configuration follows Aufbau principle (lowest energy first: 1s 2s 2p 3s 3p 4s 3d), Hund\'s rule (maximum multiplicity), and Pauli\'s exclusion principle. Ionic bonding involves complete electron transfer between metals and non-metals. Covalent bonding involves electron sharing. Coordinate/dative bond involves sharing where one atom donates both electrons.',
    key_formulas: 'Mass Number A = Proton Number Z + Neutrons N\nRelative Atomic Mass Ar = ?(% abundance ? isotopic mass) / 100\nAufbau order: 1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p\nMaximum electrons in subshell: s=2, p=6, d=10, f=14',
    pro_tips_95: 'Watch out for anomalous electronic configurations in Chromium (Z=24: [Ar] 4s? 3d?) and Copper (Z=29: [Ar] 4s? 3d??)! Half-filled (d?) and fully-filled (d??) subshells possess exceptional thermodynamic stability!',
    syllabus_objectives: 'Candidates should be able to: 1. Describe fundamental subatomic particles. 2. Write s,p,d,f electronic configurations of elements (Z=1 to 30). 3. Calculate relative atomic mass from isotopic abundances. 4. Distinguish between electrovalent, covalent, and coordinate covalent bonds.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# ATOMIC STRUCTURE AND CHEMICAL BONDING

## Fundamental Subatomic Particles & Isotopy

> ?? **Official Syllabus Objectives:**
> - State relative masses and electric charges of protons, neutrons, and electrons.
> - Calculate relative atomic mass from percentage isotopic abundance.
> - Write electronic configurations using the $s, p, d, f$ notation.

### 1. Fundamental Subatomic Particles

| Particle | Location | Relative Mass | Electric Charge | Symbol |
|---|---|---|---|---|
| **Proton** | Nucleus | $1$ | $+1$ | $p$ or $^1_1p$ |
| **Neutron** | Nucleus | $1$ | $0$ | $n$ or $^1_0n$ |
| **Electron** | Orbitals / Shells | $\frac{1}{1840} \approx 0.00055$ | $-1$ | $e^-$ or $^0_{-1}e$ |

- **Atomic Number ($Z$):** Number of protons in nucleus.
- **Mass Number ($A$):** Total number of protons and neutrons ($A = Z + N$).
- **Isotopy:** Phenomenon where atoms of the same element have the **same atomic number ($Z$) but different mass numbers ($A$)** due to differing numbers of neutrons.

### 2. Relative Atomic Mass Calculation
$$A_r = \frac{\sum (\% \text{ Abundance} \times \text{Isotopic Mass})}{100}$$

*Worked Example:* Chlorine consists of $75\%$ $^{35}_{17}\text{Cl}$ and $25\%$ $^{37}_{17}\text{Cl}$:
$$A_r = \frac{(75 \times 35) + (25 \times 37)}{100} = \frac{2625 + 925}{100} = \frac{3550}{100} = \mathbf{35.5}$$

---

## Electronic Configuration & Quantum Rules
1. **Aufbau Principle:** Orbitals are filled in order of increasing energy:
$$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p$$
2. **Hund's Rule of Maximum Multiplicity:** Orbitals of equal energy (degenerate orbitals) are singly occupied before pairing occurs.
3. **Pauli Exclusion Principle:** No two electrons in an atom can have the exact same four quantum numbers (paired electrons have opposite spins: up and down).

---

## Types of Chemical Bonding

| Bond Type | Mechanism | Characteristics | Examples |
|---|---|---|---|
| **Electrovalent (Ionic)** | Complete electron transfer from electropositive metal to electronegative non-metal | High melting/boiling points, conduct electricity in molten/aqueous state, soluble in polar water | $\text{NaCl}, \text{MgO}, \text{CaCl}_2$ |
| **Covalent** | Mutual sharing of valence electron pairs between non-metals | Lower melting points, non-conductors, soluble in organic non-polar solvents | $\text{CH}_4, \text{O}_2, \text{H}_2\text{O}, \text{CO}_2$ |
| **Coordinate (Dative)** | Covalent bond where BOTH shared electrons originate from a single donor atom | Formed with lone pair donors and electron-deficient acceptors | $\text{NH}_4^+, \text{H}_3\text{O}^+, \text{Al}_2\text{Cl}_6$ |
| **Metallic** | Electrostatic attraction between positive metal ions and sea of delocalized electrons | High electrical and thermal conductivity, malleability, ductility | $\text{Na}, \text{Fe}, \text{Cu}, \text{Al}$ |

---

## Worked Past Examination Questions

### Question 1 (JAMB UTME)
**Question:** An element $X$ with atomic number $12$ combines with an element $Y$ with atomic number $17$. What is the formula of the compound formed and the type of bond?

**Chalkboard Step-by-Step Solution:**
1. Element $X$ ($Z=12$, Magnesium): configuration is $1s^2 2s^2 2p^6 3s^2$. It loses $2$ valence electrons to form $X^{2+}$.
2. Element $Y$ ($Z=17$, Chlorine): configuration is $1s^2 2s^2 2p^6 3s^2 3p^5$. It gains $1$ electron to form $Y^-$.
3. Balancing charges: $1 \times X^{2+}$ pairs with $2 \times Y^- \implies \mathbf{XY_2}$.
4. Bond type: Metal + Non-metal electron transfer $\implies$ **Electrovalent (Ionic) Bond**.
`
  },
  {
    id: 202,
    subject: 'Chemistry',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Periodic Table and Periodicity',
    subtopic: 'Periodic Law, Groups & Periods, Atomic Radius, Ionization Energy, Electronegativity, Electron Affinity Trends',
    summary_60s: 'Modern Periodic Law: properties of elements are periodic functions of their atomic numbers. Across a period (left to right): nuclear charge increases, atomic radius decreases, ionization energy increases, electronegativity increases. Down a group (top to bottom): number of shells increases, screening/shielding effect increases, atomic radius increases, ionization energy decreases, electronegativity decreases.',
    key_formulas: 'Across Period (Left to Right): Nuclear Charge ?, Radius ?, Ionization Energy ?, Electronegativity ?\nDown Group (Top to Bottom): Shells ?, Radius ?, Ionization Energy ?, Electronegativity ?\nEffective Nuclear Charge: Z_eff = Z - S',
    pro_tips_95: 'Noble gases (Group 8/0) have the HIGHEST ionization energies in their periods due to octet stability, but have ZERO electronegativity because they do not form covalent bonds to attract electrons!',
    syllabus_objectives: 'Candidates should be able to: 1. State the Periodic Law. 2. Classify elements into s, p, d, and f blocks. 3. Explain periodic variation of atomic size, ionization energy, and electronegativity.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# PERIODIC TABLE AND PERIODICITY

## Periodic Law & Structure of Modern Table
Modern Periodic Law: **The physical and chemical properties of the elements are periodic functions of their atomic numbers.**
- **Periods (Horizontal Rows 1 to 7):** Number of electron shells occupied.
- **Groups (Vertical Columns 1 to 8/0):** Number of valence electrons.

### Summary of Periodic Trends

| Property | Across a Period (Left $\to$ Right) | Down a Group (Top $\to$ Bottom) | Fundamental Underlying Reason |
|---|---|---|---|
| **Atomic Radius** | **Decreases** | **Increases** | Across: increased nuclear pull without new shells. Down: addition of extra shells. |
| **Ionization Energy** | **Increases** | **Decreases** | Across: electrons held more tightly by nucleus. Down: valence electrons further from nucleus and shielded. |
| **Electronegativity** | **Increases** | **Decreases** | Fluorine is the most electronegative element ($4.0$ on Pauling scale). |
| **Metallic Character** | **Decreases** | **Increases** | Tendency to lose electrons increases down a group. |

### Worked WAEC Example
**Question:** Arrange the elements Na, Mg, Al, Si in order of increasing first ionization energy.
**Solution:**
- Elements belong to Period 3: Na ($Z=11$), Mg ($Z=12$), Al ($Z=13$), Si ($Z=14$).
- General trend across Period 3 increases from left to right.
- Note anomaly: Mg ($3s^2$ full subshell) is more stable than Al ($3p^1$).
- Order: **Na < Al < Mg < Si**.
`
  },
  {
    id: 203,
    subject: 'Chemistry',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Acids, Bases and Salts',
    subtopic: 'Arrhenius & Bronsted-Lowry Theories, pH & pOH Calculations, Volumetric Analysis (Titration), Preparation & Properties of Salts',
    summary_60s: 'Arrhenius: Acid produces H+ in water; Base produces OH-. Bronsted-Lowry: Acid is a proton (H+) donor; Base is a proton acceptor. pH = -log[H+]; pOH = -log[OH-]; pH + pOH = 14 at 25?C. Strong acids (HCl, HNO3, H2SO4) ionize completely; weak acids (CH3COOH, H2CO3) ionize partially. Titration formula: (C_a V_a) / (C_b V_b) = n_a / n_b. Salts: normal, acid, basic, double, and complex.',
    key_formulas: 'pH = -log??[H?]\npOH = -log??[OH?]\npH + pOH = 14 (at 25?C)\n[H?] = 10^(-pH)\nTitration: (C_a ? V_a) / (C_b ? V_b) = n_a / n_b\nConcentration in g/dm? = Molar mass ? Molarity (mol/dm?)',
    pro_tips_95: 'For a dibasic acid like H2SO4 of concentration 0.05 M, [H+] = 2 ? 0.05 = 0.1 M, so pH = -log(0.1) = 1 (NOT 1.3)! Always multiply by basicity for strong diprotic acids!',
    syllabus_objectives: 'Candidates should be able to: 1. Define acids, bases, and salts according to Arrhenius and Bronsted-Lowry. 2. Calculate pH, pOH, and hydrogen ion concentration. 3. Perform volumetric titration calculations.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# ACIDS, BASES AND SALTS

## Definitions & pH Scale
- **pH Definition:** The negative logarithm to base 10 of the hydrogen ion concentration:
$$\\text{pH} = -\\log_{10}[\\text{H}^+]$$
$$\\text{pOH} = -\\log_{10}[\\text{OH}^-]$$
$$\\text{pH} + \\text{pOH} = 14 \\quad (\\text{at } 25^\\circ\\text{C})$$

## Volumetric Analysis (Acid-Base Titration)
$$\\frac{C_a V_a}{C_b V_b} = \\frac{n_a}{n_b}$$
Where:
- $C_a =$ concentration of acid (mol/dm?)
- $V_a =$ volume of acid used (cm?)
- $C_b =$ concentration of base (mol/dm?)
- $V_b =$ volume of base used (cm?)
- $n_a, n_b =$ stoichiometric mole ratio from balanced chemical equation

### Worked JAMB Example
**Question:** What is the pH of a $0.005\\text{ M}$ solution of tetraoxosulphate(VI) acid ($H_2SO_4$)?
**Solution:**
- $H_2SO_4$ is a strong dibasic acid that ionizes completely:
$$H_2SO_4 \\rightarrow 2H^+ + SO_4^{2-}$$
- $[H^+] = 2 \\times 0.005\\text{ M} = 0.01\\text{ M} = 10^{-2}\\text{ M}$.
- $\\text{pH} = -\\log_{10}(10^{-2}) = -(-2) = \\mathbf{2}$.
`
  },
  {
    id: 204,
    subject: 'Chemistry',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Gas Laws and Kinetic Theory',
    subtopic: 'Boyle\'s Law, Charles\'s Law, General Gas Equation, Graham\'s Law of Diffusion, Dalton\'s Law of Partial Pressures & Ideal Gas PV=nRT',
    summary_60s: 'Boyle\'s Law: P1 V1 = P2 V2 (constant T). Charles\'s Law: V1 / T1 = V2 / T2 (constant P, T in Kelvin). General gas equation: (P1 V1)/T1 = (P2 V2)/T2. Ideal gas equation: PV = nRT (R = 8.314 J/(mol K) or 0.0821 L atm/(mol K)). Graham\'s Law: Rate of diffusion R ? 1 / ?molar mass. Dalton\'s Law: Total pressure P_total = P1 + P2 + ...',
    key_formulas: 'Boyle\'s: P? V? = P? V?\nCharles\'s: V? / T? = V? / T?\nCombined: (P? V?) / T? = (P? V?) / T?\nIdeal Gas: P V = n R T = (m / M) R T\nGraham\'s Law: R? / R? = ?(M? / M?) = ?(d? / d?) = t? / t?\nDalton\'s Law: P_total = ? P_i\nPartial Pressure: P_A = (n_A / n_total) ? P_total',
    pro_tips_95: 'ALWAYS convert temperature to Kelvin: T(K) = ?(?C) + 273! Using Celsius in any gas law calculation is an instant zero! At STP: 1 mole of any gas occupies 22.4 dm? (litres)!',
    syllabus_objectives: 'Candidates should be able to: 1. State and verify Boyle\'s, Charles\'s, and Graham\'s laws. 2. Solve calculations using combined and ideal gas equations. 3. Apply Graham\'s law to gas diffusion and vapor density.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# GAS LAWS AND KINETIC THEORY

## Core Gas Laws
1. **Boyle's Law:** At constant temperature, $P_1 V_1 = P_2 V_2$.
2. **Charles's Law:** At constant pressure, $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ ($T$ in Kelvin).
3. **General Gas Equation:**
$$\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$$
4. **Graham's Law of Diffusion:**
$$\\frac{R_1}{R_2} = \\sqrt{\\frac{M_2}{M_1}} = \\frac{t_2}{t_1}$$

### Worked JAMB Example
**Question:** If $50\\text{ cm}^3$ of gas $A$ diffuses through a porous plug in $10\\text{ s}$, how long will it take the same volume of gas $B$ to diffuse under identical conditions if the molar mass of $A$ is $16\\text{ g/mol}$ (Methane) and $B$ is $64\\text{ g/mol}$ ($SO_2$)?
**Solution:**
- By Graham's Law: $\\frac{t_B}{t_A} = \\sqrt{\\frac{M_B}{M_A}}$
- $\\frac{t_B}{10} = \\sqrt{\\frac{64}{16}} = \\sqrt{4} = 2$
- $t_B = 10 \\times 2 = \\mathbf{20\\text{ seconds}}$.
`
  },
  {
    id: 205,
    subject: 'Chemistry',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Electrolysis and Electrochemical Cells',
    subtopic: 'Faraday\'s Laws of Electrolysis, Preferential Discharge of Ions, Electrolytic vs Galvanic Cells & Corrosion Prevention',
    summary_60s: 'Faraday\'s 1st Law: Mass m = ZIt = (M I t) / (n F). 1 Faraday F = 96,500 Coulombs = charge carried by 1 mole of electrons. Preferential discharge factors: (1) position in electrochemical series, (2) concentration of ions, (3) nature of electrode (e.g. mercury or platinum). Anode is positive in electrolysis (oxidation occurs: AN OX); Cathode is negative (reduction occurs: RED CAT).',
    key_formulas: 'Faraday\'s 1st Law: m = Z I t\nm = (Molar mass ? I ? t) / (n ? 96500)\nQuantity of Electricity: Q = I ? t  (Coulombs)\n1 Faraday = 96,500 C/mol e?',
    pro_tips_95: 'Remember: AN OX (Anode = Oxidation) and RED CAT (Cathode = Reduction) applies to BOTH electrolytic and galvanic cells! Only the signs of the electrodes flip (+ / -)!',
    syllabus_objectives: 'Candidates should be able to: 1. State Faraday\'s laws of electrolysis. 2. Calculate masses and volumes of substances liberated at electrodes. 3. Predict products of electrolysis based on electrochemical series and concentration.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# ELECTROLYSIS AND ELECTROCHEMICAL CELLS

## Faraday's Laws of Electrolysis
1. **First Law:** The mass ($m$) of an element discharged at an electrode is directly proportional to the quantity of electricity ($Q = It$) passed:
$$m = Z I t = \\frac{M \\cdot I \\cdot t}{n F}$$
Where $M =$ molar mass, $n =$ valency/number of electrons transferred, $F = 96,500\\text{ C/mol}$.

### Worked JAMB Example
**Question:** What mass of copper is deposited when a current of $2.0\\text{ A}$ is passed through a $CuSO_4$ solution for $1930\\text{ seconds}$? ($Cu = 64, F = 96,500\\text{ C/mol}$).
**Solution:**
- Cathode reaction: $Cu^{2+} + 2e^- \\rightarrow Cu$ ($n = 2$).
- $Q = I \\times t = 2.0 \\times 1930 = 3860\\text{ C}$.
- Mass $m = \\frac{M \\times Q}{n \\times F} = \\frac{64 \\times 3860}{2 \\times 96500} = \\frac{247040}{193000} = \\mathbf{1.28\\text{ g}}$.
`
  },
  {
    id: 206,
    subject: 'Chemistry',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Organic Chemistry: Hydrocarbons',
    subtopic: 'Alkanes, Alkenes, Alkynes, IUPAC Nomenclature, Isomerism, Addition & Substitution Reactions, Cracking of Petroleum',
    summary_60s: 'Alkanes (C_n H_2n+2): saturated, single bonds, undergo free radical substitution with halogens in UV light. Alkenes (C_n H_2n): unsaturated, double bond (C=C), undergo electrophilic addition, decolourize bromine water and acidified KMnO4. Alkynes (C_n H_2n-2): triple bond (C?C), terminal alkynes form precipitates with ammoniacal silver nitrate.',
    key_formulas: 'Alkanes: C_n H_{2n+2}\nAlkenes: C_n H_{2n}\nAlkynes: C_n H_{2n-2}\nAlkanols: C_n H_{2n+1}OH\nAlkanoic Acids: C_n H_{2n+1}COOH',
    pro_tips_95: 'To distinguish an alkane from an alkene: shake with reddish-brown Bromine water (Br2/H2O). The alkene immediately decolourizes the bromine solution; the alkane shows NO change in the dark!',
    syllabus_objectives: 'Candidates should be able to: 1. Write IUPAC names and structural formulas of hydrocarbons. 2. Distinguish between saturated and unsaturated hydrocarbons. 3. Describe petroleum fractional distillation and cracking.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# ORGANIC CHEMISTRY: HYDROCARBONS

## Homologous Series of Hydrocarbons
- **Alkanes ($C_n H_{2n+2}$):** Saturated hydrocarbons ($sp^3$ hybridized). Undergo substitution:
$$CH_4 + Cl_2 \\xrightarrow{\\text{UV light}} CH_3Cl + HCl$$
- **Alkenes ($C_n H_{2n}$):** Unsaturated ($sp^2$ hybridized, $C=C$). Undergo addition:
$$C_2H_4 + Br_2 \\rightarrow C_2H_4Br_2 \\quad (\\text{Decolourizes reddish-brown bromine})$$
- **Alkynes ($C_n H_{2n-2}$):** Unsaturated ($sp$ hybridized, $C\\equiv C$).

### Worked WAEC Example
**Question:** Give the IUPAC name for $CH_3-CH(CH_3)-CH=CH_2$.
**Solution:**
1. Longest carbon chain containing the double bond has $4$ carbon atoms $\\implies$ **butene**.
2. Number from the end closer to double bond: $C_1=C_2-C_3-C_4$.
3. Double bond is at carbon-1 $\\implies$ **but-1-ene**.
4. Methyl branch is at carbon-3 $\\implies$ **3-methylbut-1-ene**.
`
  }
];
