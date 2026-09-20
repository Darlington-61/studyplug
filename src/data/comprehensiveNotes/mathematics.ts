import { LessonNote } from '../masterLessonNotes';

export const MATHEMATICS_NOTES: LessonNote[] = [
  {
    id: 101,
    subject: 'Mathematics',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Indices, Logarithms and Surds',
    subtopic: 'Laws of Indices, Exponential Equations, Logarithmic Laws, Change of Base & Surd Rationalization',
    summary_60s: 'Laws of indices: a? ? a? = a???, a? / a? = a???, (a?)? = a??, a? = 1, a?? = 1/a?, a^(1/n) = ??a. For logs: log(xy) = log x + log y, log(x/y) = log x - log y, log(x?) = n log x. Change of base: log_b a = (log_c a) / (log_c b). Surd rationalization: multiply numerator and denominator by conjugate surd (a + ?b)(a - ?b) = a? - b.',
    key_formulas: 'a? ? a? = a???\na? / a? = a???\n(a?)? = a??\na? = 1, a?? = 1/a?\nlog_b a = c ? b? = a\nlog(xy) = log x + log y\nlog(x/y) = log x - log y\nlog(x?) = n log x\nlog_b a = (log_c a) / (log_c b)\nRationalizing (a + ?b): multiply by (a - ?b)',
    pro_tips_95: 'In JAMB log equations, always check that base b > 0 and b ? 1, and argument x > 0! Any solution that makes the log argument zero or negative MUST be discarded as extraneous! For surds, remember: ?(a + b) ? ?a + ?b!',
    syllabus_objectives: 'Candidates should be able to: 1. Apply the fundamental laws of indices to simplify algebraic expressions. 2. Solve exponential and logarithmic equations. 3. Apply change of base rule. 4. Simplify surds and rationalize denominators involving binomial surds.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# INDICES, LOGARITHMS AND SURDS

## The Fundamental Laws of Indices & Exponential Equations

> ?? **Official Syllabus Objectives:**
> Candidates must be able to:
> - Apply the fundamental index laws to simplify algebraic terms.
> - Solve exponential equations by reducing terms to common prime bases.
> - Handle negative and fractional indices with accuracy.

### 1. The Standard Laws of Indices
For any non-zero real numbers $a$ and $b$, and rational exponents $m$ and $n$:

| Law | Formula | Worked Algebraic Example |
|---|---|---|
| **Multiplication Law** | $a^m \times a^n = a^{m+n}$ | $2^3 \times 2^4 = 2^{3+4} = 2^7 = 128$ |
| **Division Law** | $\frac{a^m}{a^n} = a^{m-n}$ | $\frac{5^8}{5^5} = 5^{8-5} = 5^3 = 125$ |
| **Power of a Power** | $(a^m)^n = a^{mn}$ | $(3^2)^3 = 3^{2 \times 3} = 3^6 = 729$ |
| **Product Power** | $(ab)^n = a^n b^n$ | $(2x)^3 = 2^3 x^3 = 8x^3$ |
| **Quotient Power** | $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$ | $\left(\frac{2}{3}\right)^3 = \frac{8}{27}$ |
| **Zero Index** | $a^0 = 1 \quad (a \neq 0)$ | $7^0 = 1, \quad (-15)^0 = 1$ |
| **Negative Index** | $a^{-n} = \frac{1}{a^n}$ | $4^{-2} = \frac{1}{4^2} = \frac{1}{16}$ |
| **Fractional Index** | $a^{\frac{m}{n}} = \sqrt[n]{a^m} = (\sqrt[n]{a})^m$ | $8^{\frac{2}{3}} = (\sqrt[3]{8})^2 = 2^2 = 4$ |

### 2. Solving Exponential Equations
To solve an equation where the unknown is in the exponent:
1. Express all numbers in terms of their lowest common prime base.
2. Equate exponents on both sides.
3. If quadratic form $a^{2x} + p(a^x) + q = 0$, substitute $y = a^x$.

*Worked Example:* Solve $9^{x+1} - 28(3^x) + 3 = 0$.
- Rewrite $9^{x+1}$ as $9(9^x) = 9(3^{2x}) = 9(3^x)^2$.
- Let $y = 3^x$:
$$9y^2 - 28y + 3 = 0$$
$$(9y - 1)(y - 3) = 0 \implies y = \frac{1}{9} \quad \text{or} \quad y = 3$$
- Since $y = 3^x$:
  - $3^x = 3^{-2} \implies x = -2$
  - $3^x = 3^1 \implies x = 1$
- **Solutions:** $x = -2$ or $x = 1$.

---

## Logarithmic Functions & Change of Base

> ?? **Official Syllabus Objectives:**
> - Relate index notation to logarithmic notation: $y = b^x \iff x = \log_b y$.
> - Apply the log laws to expand, compress, and solve logarithmic equations.
> - Utilize the change-of-base formula to evaluate non-standard logarithms.

### 1. Fundamental Definition & Laws of Logarithms
$$\log_b x = y \iff b^y = x \quad (b > 0, \; b \neq 1, \; x > 0)$$

1. **Log of Product:** $\log_b (MN) = \log_b M + \log_b N$
2. **Log of Quotient:** $\log_b \left(\frac{M}{N}\right) = \log_b M - \log_b N$
3. **Log of Power:** $\log_b (M^k) = k \log_b M$
4. **Log of Base:** $\log_b b = 1$
5. **Log of Unity:** $\log_b 1 = 0$
6. **Change of Base Formula:**
$$\log_b a = \frac{\log_c a}{\log_c b} = \frac{1}{\log_a b}$$

> ?? **WAEC & JAMB Chief Examiner Pitfall:**
> $\log(x + y) \neq \log x + \log y$! The log of a sum CANNOT be split. Similarly, $\frac{\log x}{\log y} \neq \log(x - y)$!

---

## Surds: Simplification & Conjugate Rationalization

> ?? **Official Syllabus Objectives:**
> - Simplify surds to basic form $\sqrt{a^2 b} = a\sqrt{b}$.
> - Rationalize denominators containing binomial quadratic surds using conjugate multipliers.

When the denominator contains a binomial surd $(a + \sqrt{b})$, multiply numerator and denominator by its conjugate $(a - \sqrt{b})$:
$$(a + \sqrt{b})(a - \sqrt{b}) = a^2 - b$$

*Worked Example:* Rationalize $\frac{3\sqrt{2} - 1}{\sqrt{2} + 1}$:
$$\frac{3\sqrt{2} - 1}{\sqrt{2} + 1} \times \frac{\sqrt{2} - 1}{\sqrt{2} - 1} = \frac{(3\sqrt{2} - 1)(\sqrt{2} - 1)}{(\sqrt{2})^2 - 1^2} = \frac{6 - 4\sqrt{2} + 1}{2 - 1} = \mathbf{7 - 4\sqrt{2}}$$

---

## Worked Examination Past Questions & Step-by-Step Solutions

### Question 1 (JAMB UTME)
**Question:** If $\log_{10} 2 = 0.3010$ and $\log_{10} 3 = 0.4771$, evaluate $\log_{10} 18$.

**Chalkboard Step-by-Step Solution:**
1. Express $18$ in prime factors: $18 = 2 \times 3^2$.
2. Apply log laws:
$$\log_{10} 18 = \log_{10} (2 \times 3^2) = \log_{10} 2 + 2 \log_{10} 3 = 0.3010 + 2(0.4771) = 0.3010 + 0.9542 = \mathbf{1.2552}$$

---

### Question 2 (WAEC WASSCE)
**Question:** Solve for $x$: $\log_2 (x^2 - 4) - \log_2 (x - 2) = 3$.

**Chalkboard Step-by-Step Solution:**
1. Apply quotient law: $\log_2 \left(\frac{x^2 - 4}{x - 2}\right) = 3$
2. Factorize: $\frac{(x - 2)(x + 2)}{x - 2} = x + 2$
3. $\log_2 (x + 2) = 3 \implies x + 2 = 2^3 = 8 \implies x = 8 - 2 = \mathbf{6}$.
`
  },
  {
    id: 102,
    subject: 'Mathematics',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Number Bases',
    subtopic: 'Conversions between Bases, Addition & Subtraction in Other Bases, Unknown Base Equations & Binary Arithmetic',
    summary_60s: 'In base n, allowed digits are 0 to (n-1). To convert from base n to base 10: expand in powers of n. From base 10 to base n: repeated division by n and read remainders upward. In addition and subtraction in base n, group or borrow in units of n.',
    key_formulas: 'Base n Expansion: N = ? (d_i ? n?)\nBinary (Base 2): digits 0, 1\nOctal (Base 8): digits 0 to 7\nBorrowing in base n: adds n to current column',
    pro_tips_95: 'In any base n, no digit can ever equal or exceed n! In an equation like 23_x = 11, x MUST be at least 4 because the digit 3 is present! A borrow adds n to the adjacent column!',
    syllabus_objectives: 'Candidates should be able to: 1. Convert between base 10 and other bases. 2. Perform operations in bases 2 to 10. 3. Solve equations involving unknown bases.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# NUMBER BASES

## Fundamentals of Positional Number Bases

> ?? **Official Syllabus Objectives:**
> - Master positional values in base $n$.
> - State the maximum permissible digit in base $n$ ($n-1$).
> - Convert numbers between base $10$ and other bases.

### 1. The Positional Principle
$$(d_k d_{k-1} \ldots d_1 d_0)_n = d_k n^k + d_{k-1} n^{k-1} + \ldots + d_1 n^1 + d_0 n^0$$

*Example:* Convert $234_5$ to base $10$:
$$234_5 = (2 \times 5^2) + (3 \times 5^1) + (4 \times 5^0) = 50 + 15 + 4 = \mathbf{69_{10}}$$

### 2. Conversion from Base 10 to Base n
Repeatedly divide by $n$, recording remainders, and read bottom-to-top.

*Example:* Convert $157_{10}$ to base $8$:
- $157 \div 8 = 19 \quad \text{R } 5$
- $19 \div 8 = 2 \quad \text{R } 3$
- $2 \div 8 = 0 \quad \text{R } 2$
- Result: $\mathbf{235_8}$

---

## Unknown Base Equations (JAMB Classic)
**Question:** If $23_x + 101_2 = 130_5$, find $x$.

**Chalkboard Solution:**
1. Convert each term to base $10$:
   - $23_x = 2x + 3$
   - $101_2 = 1(4) + 0(2) + 1(1) = 5$
   - $130_5 = 1(25) + 3(5) + 0(1) = 40$
2. Form equation: $(2x + 3) + 5 = 40 \implies 2x + 8 = 40 \implies 2x = 32 \implies x = \mathbf{16}$.
`
  },
  {
    id: 103,
    subject: 'Mathematics',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Progression (AP and GP)',
    subtopic: 'Arithmetic Progression (nth term, sum), Geometric Progression (nth term, sum, sum to infinity)',
    summary_60s: 'AP: common difference d = T_n - T_(n-1). T_n = a + (n-1)d. S_n = (n/2)[2a + (n-1)d] = (n/2)(a + l). GP: common ratio r = T_n / T_(n-1). T_n = a r^(n-1). S_n = a(r? - 1)/(r - 1). Sum to infinity S_? = a / (1 - r) valid ONLY when |r| < 1.',
    key_formulas: 'AP: T_n = a + (n - 1)d\nAP: S_n = (n/2)[2a + (n - 1)d]\nGP: T_n = a r^(n-1)\nGP: S_n = a(1 - r?) / (1 - r)\nGP Sum to Infinity: S_? = a / (1 - r)  [|r| < 1]',
    pro_tips_95: 'Sum to infinity ONLY exists when -1 < r < 1! If |r| ? 1, the series diverges and has NO sum to infinity!',
    syllabus_objectives: 'Candidates should be able to: 1. Calculate nth terms of AP and GP. 2. Calculate finite and infinite series sums. 3. Solve examination word problems on progressions.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# PROGRESSION (AP AND GP)

## Arithmetic Progression (AP)
$$T_n = a + (n - 1)d$$
$$S_n = \frac{n}{2} [2a + (n - 1)d] = \frac{n}{2}(a + l)$$

## Geometric Progression (GP)
$$T_n = a r^{n-1}$$
$$S_n = \frac{a(1 - r^n)}{1 - r} \quad (r \neq 1)$$
$$S_\infty = \frac{a}{1 - r} \quad (|r| < 1)$$

### Worked JAMB Example
**Question:** The 3rd and 7th terms of an AP are 9 and 25. Find the sum of the first 20 terms.
**Solution:**
- $a + 2d = 9$, $a + 6d = 25 \implies 4d = 16 \implies d = 4$.
- $a + 2(4) = 9 \implies a = 1$.
- $S_{20} = \frac{20}{2} [2(1) + 19(4)] = 10 [2 + 76] = 10 \times 78 = \mathbf{780}$.
`
  },
  {
    id: 104,
    subject: 'Mathematics',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Introductory Calculus',
    subtopic: 'Differentiation (Power, Product, Quotient, Chain rules), Maxima/Minima, Integration (Definite & Indefinite)',
    summary_60s: 'Derivative gives slope of tangent. d/dx(x?) = n x???. Turning points occur where dy/dx = 0; d?y/dx? > 0 (minimum), d?y/dx? < 0 (maximum). Integration: ? x? dx = (x???)/(n + 1) + C. Definite integral evaluates area between limits.',
    key_formulas: 'd/dx (a x?) = a n x???\nStationary Point: dy/dx = 0\nd?y/dx? < 0 ? Max; d?y/dx? > 0 ? Min\n? x? dx = x??? / (n + 1) + C\n?_a^b f(x) dx = F(b) - F(a)',
    pro_tips_95: 'For kinematic problems: s(t) = displacement, v = ds/dt = velocity, a = dv/dt = d?s/dt? = acceleration! When a particle comes to instantaneous rest, set v = 0!',
    syllabus_objectives: 'Candidates should be able to: 1. Differentiate algebraic functions. 2. Find maximum and minimum values. 3. Evaluate definite and indefinite integrals.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# INTRODUCTORY CALCULUS

## Differentiation Rules & Turning Points
- Power Rule: $\frac{d}{dx}(x^n) = n x^{n-1}$
- Product Rule: $\frac{d}{dx}(uv) = u \frac{dv}{dx} + v \frac{du}{dx}$
- Quotient Rule: $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v \frac{du}{dx} - u \frac{dv}{dx}}{v^2}$
- Turning Points: $\frac{dy}{dx} = 0$. Test with $\frac{d^2y}{dx^2}$: negative is maximum, positive is minimum.

## Integration
$$\int a x^n \, dx = \frac{a x^{n+1}}{n + 1} + C \quad (n \neq -1)$$

### Worked JAMB Example
**Question:** Find the maximum value of $y = 4x - x^2$.
**Solution:**
- $\frac{dy}{dx} = 4 - 2x = 0 \implies 2x = 4 \implies x = 2$.
- $\frac{d^2y}{dx^2} = -2 < 0$ (confirming maximum).
- Maximum value $y = 4(2) - (2)^2 = 8 - 4 = \mathbf{4}$.
`
  },
  {
    id: 105,
    subject: 'Mathematics',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Matrices and Determinants',
    subtopic: '2x2 and 3x3 Matrices, Determinants, Matrix Inverse, Cramer\'s Rule for Simultaneous Equations',
    summary_60s: 'For a 2x2 matrix A = [[a, b], [c, d]]: det(A) = ad - bc. Matrix inverse A?? = (1/det(A)) * [[d, -b], [-c, a]]. If det(A) = 0, the matrix is singular and has NO inverse. Matrix multiplication is row by column. Simultaneous equations can be solved using Cramer\'s rule: x = det(Ax)/det(A), y = det(Ay)/det(A).',
    key_formulas: 'det([[a, b], [c, d]]) = ad - bc\nA?? = (1 / (ad - bc)) [[d, -b], [-c, a]]\nSingular Matrix: det(A) = 0\nCramer\'s Rule: x = ?x / ?, y = ?y / ?',
    pro_tips_95: 'A singular matrix has determinant = 0 and NO inverse! In JAMB questions asking for value of k for which a matrix is singular, set ad - bc = 0 and solve for k!',
    syllabus_objectives: 'Candidates should be able to: 1. Add, subtract, and multiply matrices. 2. Calculate determinants of 2x2 and 3x3 matrices. 3. Find inverse of 2x2 matrices and solve simultaneous equations.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# MATRICES AND DETERMINANTS

## Determinant & Inverse of a 2x2 Matrix
For matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
$$\det(A) = |A| = ad - bc$$
$$A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \quad (ad - bc \neq 0)$$

### Singular Matrix
If $\det(A) = 0$, $A$ is called a **singular matrix** and has no inverse.

### Worked JAMB Example
**Question:** If the matrix $\begin{pmatrix} 2 & k \\ 3 & 6 \end{pmatrix}$ is singular, find $k$.
**Solution:**
- For singularity: $\det(A) = 0$
- $(2 \times 6) - (3 \times k) = 0 \implies 12 - 3k = 0 \implies 3k = 12 \implies k = \mathbf{4}$.
`
  },
  {
    id: 106,
    subject: 'Mathematics',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Trigonometry',
    subtopic: 'Trigonometric Ratios (SOH CAH TOA), Special Angles, Sine & Cosine Rules, Angles of Elevation & Depression',
    summary_60s: 'In right-angled triangle: sin ? = opp/hyp, cos ? = adj/hyp, tan ? = opp/adj. Special angles: sin 30? = 1/2, cos 30? = ?3/2, tan 30? = 1/?3; sin 45? = 1/?2, cos 45? = 1/?2, tan 45? = 1; sin 60? = ?3/2, cos 60? = 1/2, tan 60? = ?3. Sine rule: a/sin A = b/sin B = c/sin C. Cosine rule: a? = b? + c? - 2bc cos A.',
    key_formulas: 'sin ? = Opp / Hyp\ncos ? = Adj / Hyp\ntan ? = Opp / Adj\nsin? ? + cos? ? = 1\nSine Rule: a / sin A = b / sin B = c / sin C\nCosine Rule: a? = b? + c? - 2bc cos A\nArea of Triangle = (1/2) ab sin C',
    pro_tips_95: 'Use Sine Rule when you know two angles and one side, or two sides and an opposite angle. Use Cosine Rule when you know two sides and the INCLUDED angle (SAS), or all three sides (SSS)!',
    syllabus_objectives: 'Candidates should be able to: 1. Apply trigonometric ratios for acute and special angles. 2. Use Sine and Cosine rules to solve non-right angled triangles. 3. Solve 2D and 3D elevation/depression and bearing problems.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# TRIGONOMETRY

## Trigonometric Ratios & Special Angles
- $\sin 30^\circ = 0.5$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\tan 30^\circ = \frac{1}{\sqrt{3}}$
- $\sin 45^\circ = \frac{1}{\sqrt{2}}$, $\cos 45^\circ = \frac{1}{\sqrt{2}}$, $\tan 45^\circ = 1$
- $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = 0.5$, $\tan 60^\circ = \sqrt{3}$

## Sine Rule and Cosine Rule
- **Sine Rule:** $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$
- **Cosine Rule:** $a^2 = b^2 + c^2 - 2bc \cos A \implies \cos A = \frac{b^2 + c^2 - a^2}{2bc}$
- **Area of Triangle:** $\text{Area} = \frac{1}{2} ab \sin C$

### Worked WAEC Example
**Question:** In $\triangle ABC$, $b = 8\text{ cm}$, $c = 5\text{ cm}$, and $\angle A = 60^\circ$. Calculate $a$.
**Solution:**
- By Cosine Rule: $a^2 = 8^2 + 5^2 - 2(8)(5) \cos 60^\circ$
- $a^2 = 64 + 25 - 80(0.5) = 89 - 40 = 49$
- $a = \sqrt{49} = \mathbf{7\text{ cm}}$.
`
  },
  {
    id: 107,
    subject: 'Mathematics',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Statistics and Probability',
    subtopic: 'Mean, Median, Mode of Grouped/Ungrouped Data, Variance, Standard Deviation & Probability Rules',
    summary_60s: 'Mean = sum(fx) / sum(f). Median = middle value. Mode = most frequent value. Standard Deviation sigma = sqrt(variance). Probability P(E) = n(E) / n(S). Mutually exclusive: P(A or B) = P(A) + P(B). Independent: P(A and B) = P(A) * P(B). Complement: P(not A) = 1 - P(A).',
    key_formulas: 'Mean: x_bar = sum(fx) / sum(f)\nVariance: sigma^2 = (sum(fx^2) / sum(f)) - (x_bar)^2\nStandard Deviation: sigma = sqrt(Variance)\nProbability: P(E) = Favourable outcomes / Total outcomes\nP(A or B) = P(A) + P(B) - P(A and B)\nIndependent: P(A and B) = P(A) * P(B)\nComplement: P(not A) = 1 - P(A)',
    pro_tips_95: 'Probability values ALWAYS lie strictly between 0 and 1 inclusive (0 ? P ? 1)! A probability can never be negative and can never exceed 1! If you calculate 1.25 or -0.3, check your arithmetic immediately!',
    syllabus_objectives: 'Candidates should be able to: 1. Calculate mean, median, and mode for ungrouped and grouped distributions. 2. Compute variance and standard deviation. 3. Apply addition and multiplication probability laws.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# STATISTICS AND PROBABILITY

## Measures of Central Tendency & Dispersion
- **Mean ($\\bar{x}$):** $\\bar{x} = \frac{\sum fx}{\sum f}$
- **Variance ($\\sigma^2$):** $\\sigma^2 = \frac{\sum fx^2}{\sum f} - (\\bar{x})^2$
- **Standard Deviation ($\\sigma$):** $\\sigma = \sqrt{\text{Variance}}$

## Probability Laws
- **General Addition Rule:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- **Mutually Exclusive Events:** $P(A \cap B) = 0 \implies P(A \cup B) = P(A) + P(B)$
- **Independent Events:** $P(A \cap B) = P(A) \times P(B)$
- **Complement:** $P(A') = 1 - P(A)$

### Worked JAMB Example
**Question:** A bag contains 4 red and 6 blue balls. Two balls are drawn at random without replacement. What is the probability that both balls are red?
**Solution:**
- Total balls $= 4 + 6 = 10$.
- Probability 1st ball is red $= \frac{4}{10}$.
- Probability 2nd ball is red (without replacement) $= \frac{3}{9}$.
- Combined probability $= \frac{4}{10} \times \frac{3}{9} = \frac{2}{5} \times \frac{1}{3} = \mathbf{\frac{2}{15}}$.
`
  },
  {
    id: 108,
    subject: 'Mathematics',
    exam_type: 'JAMB ? WAEC ? NECO Standard',
    class_level: 'SS1-SS3 Comprehensive',
    topic: 'Sets and Venn Diagrams',
    summary_60s: "Union (A or B) includes all elements in A or B or both. Intersection (A and B) includes elements common to both. Complement A^c contains all elements in universal set U not in A. Cardinality formula: n(A or B) = n(A) + n(B) - n(A and B). For 3 sets: n(A or B or C) = n(A) + n(B) + n(C) - overlaps + triple overlap.",
    key_formulas: "n(A or B) = n(A) + n(B) - n(A and B)\nn(A or B or C) = sum(n(A)) - sum(pairwise overlaps) + n(A and B and C)\nDe Morgan Laws: (A or B)^c = A^c and B^c; (A and B)^c = A^c or B^c",
    pro_tips_95: 'Always fill Venn diagrams from the center intersection outwards! In a 3-set diagram, start with n(A ? B ? C) first, then the pairwise overlaps, and finally the exclusive set portions!',
    syllabus_objectives: 'Candidates should be able to: 1. Represent sets using listing and set-builder notations. 2. Perform operations of union, intersection, and complement. 3. Apply Venn diagrams to solve 2-set and 3-set survey word problems.',
    updated_at: 'Official 2026/2027 Syllabus Masterclass',
    content: `# SETS AND VENN DIAGRAMS

## Set Operations & Cardinality Formulae
- **Union ($A \cup B$):** All elements belonging to $A$ or $B$ or both.
- **Intersection ($A \cap B$):** Elements belonging to BOTH $A$ and $B$.
- **Complement ($A'$):** Elements in universal set $U$ that are NOT in $A$.
- **Two-Set Cardinality:**
$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$
- **Three-Set Cardinality:**
$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C)$$

### Worked JAMB Example
**Question:** In a class of 40 students, 25 offer Mathematics, 20 offer Physics, and 8 offer neither. How many students offer both Mathematics and Physics?
**Solution:**
- Universal set $n(U) = 40$. Neither $= 8 \implies n(M \cup P) = 40 - 8 = 32$.
- $n(M \cup P) = n(M) + n(P) - n(M \cap P)$
- $32 = 25 + 20 - n(M \cap P) = 45 - n(M \cap P)$
- $n(M \cap P) = 45 - 32 = \mathbf{13}$.
`
  }
];
