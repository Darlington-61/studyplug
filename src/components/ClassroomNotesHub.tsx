import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Question } from '../data/questions';
import { RichNoteRenderer } from './common/RichNoteRenderer';

interface LessonNote {
  id: number;
  subject: string;
  exam_type: string;
  class_level: string;
  topic: string;
  subtopic: string;
  image_url?: string;
  summary_60s: string;
  key_formulas: string;
  content: string;
  pro_tips_95: string;
  syllabus_objectives: string;
}

// Built-in comprehensive syllabus notes for instant offline / fallback access
const DEFAULT_NOTES: LessonNote[] = [
  {
    id: 1,
    subject: 'Mathematics',
    exam_type: 'WAEC / NECO / JAMB',
    class_level: 'SS1-SS3',
    topic: 'Indices, Logarithms & Surds',
    subtopic: 'Laws of Indices, Logarithmic Equations, Surd Conjugates & Rationalization',
    image_url: 'https://myschool.ng/storage/classroom/sample_surds.png',
    summary_60s: 'Think of indices as multiplication on fast-forward. Instead of writing 2 × 2 × 2 × 2, you write 2⁴. A logarithm is simply asking: "What power must I raise this base to, in order to get my number?" If 2³ = 8, then log₂(8) = 3! Surds are roots that cannot be resolved into exact whole numbers or fractions (like √2 or √3). Because mathematicians hate having irrational numbers in the basement (denominator), we multiply the top and bottom by the conjugate surd to clean up the fraction.',
    key_formulas: `📐 WOODEN CHALKBOARD FORMULA VAULT:
====================================================================
1. LAWS OF INDICES:
   • Multiplication Law: a^m × a^n = a^(m + n)
   • Division Law: a^m ÷ a^n = a^(m - n)
   • Power of a Power: (a^m)^n = a^(mn)
   • Zero Index: a^0 = 1 (where a ≠ 0)
   • Negative Index: a^(-n) = 1 / (a^n)
   • Fractional Index (Root Law): a^(m/n) = ^n√(a^m) = (^n√a)^m

2. LAWS OF LOGARITHMS (To any valid base b > 0, b ≠ 1):
   • Product Rule: log_b(MN) = log_b(M) + log_b(N)
   • Quotient Rule: log_b(M / N) = log_b(M) - log_b(N)
   • Power Rule: log_b(M^k) = k · log_b(M)
   • Logarithm of Base: log_b(b) = 1
   • Logarithm of 1: log_b(1) = 0
   • Change of Base Rule: log_b(A) = log_c(A) / log_c(b)

3. SURD RULES & RATIONALIZATION:
   • Multiplication: √(ab) = √a · √b
   • Division: √(a / b) = √a / √b
   • Difference of Two Squares (Conjugate Multiplication):
     (√a + √b)(√a - √b) = a - b
   • Rationalizing Monomial Denominator: c / √a = (c√a) / a
   • Rationalizing Binomial Denominator:
     c / (a + √b) = [c(a - √b)] / (a² - b)
====================================================================`,
    content: `## 🌟 Teacher's Introduction: Demystifying the Power Trio
Hey scholar! Welcome to one of the most rewarding topics in the entire secondary school mathematics syllabus. Almost every single student who scores above **90% in WAEC Mathematics or 85+ in JAMB** gets full marks on this topic because the rules never change. Once you understand the *why* behind indices, logarithms, and surds, they stop being scary symbols and start behaving like friendly mathematical shortcuts.

---

## 📘 PART 1: INDICES (The Supercharged Multiplication)
In expression $a^n$:
- **$a$** is called the **base** (the number you are multiplying).
- **$n$** is called the **index**, **power**, or **exponent** (how many times you multiply the base by itself).

### Why the Laws Actually Work
- **Why do powers add when multiplying? ($a^m \times a^n = a^{m+n}$)**
  Look at $2^3 \times 2^2$:
  $$2^3 = 2 \times 2 \times 2$$
  $$2^2 = 2 \times 2$$
  Multiplying them together gives: $(2 \times 2 \times 2) \times (2 \times 2) = 2^5$.
  $3 + 2 = 5$. That's why powers add!

- **Why is anything to power zero equal to 1? ($a^0 = 1$)**
  Let's divide $a^3$ by $a^3$:
  $$\\frac{a^3}{a^3} = \\frac{a \times a \times a}{a \times a \times a} = 1$$
  Using index division law: $\\frac{a^3}{a^3} = a^{3-3} = a^0$.
  Therefore, $a^0$ must equal **1**.

---

## 📗 PART 2: LOGARITHMS (The Question-Asking Operation)
A logarithm is simply reading an exponential statement in reverse:
$$\\text{If } b^y = x \iff \\log_b(x) = y$$

Whenever you see $\\log_2(32)$, translate it into plain English inside your head:
> *"2 raised to what power will give me 32?"*
> $2 \times 2 \times 2 \times 2 \times 2 = 32 \implies 2^5 = 32$.
> Therefore, $\\log_2(32) = 5$!

---

## 📙 PART 3: SURDS (Taming Irrational Square Roots)
When the square root of a number results in an endless non-repeating decimal (like $\\sqrt{2} = 1.414...$ or $\\sqrt{3} = 1.732...$), we leave it inside the root sign as a **surd**.

### The Conjugate Trick
To clean up a fraction with a square root in the denominator like $\\frac{1}{3 - \\sqrt{2}}$, multiply by the conjugate $(3 + \\sqrt{2})$:
$$\\frac{1}{3 - \\sqrt{2}} \times \\frac{3 + \\sqrt{2}}{3 + \\sqrt{2}} = \\frac{3 + \\sqrt{2}}{3^2 - (\\sqrt{2})^2} = \\frac{3 + \\sqrt{2}}{9 - 2} = \\frac{3 + \\sqrt{2}}{7}$$

---

## 🎯 PART 4: FULLY WORKED EXAMPLES

### 💡 Example 1 (WAEC Standard - Solving Exponential Equations)
**Question**: Solve for $x$ in: $3^{2x+1} - 28(3^x) + 9 = 0$.
**Solution**:
1. Split first term: $3^{2x+1} = 3 \cdot (3^x)^2$.
2. Let $y = 3^x \implies 3y^2 - 28y + 9 = 0$.
3. Factorize: $(3y - 1)(y - 9) = 0 \implies y = 1/3$ or $y = 9$.
4. Back-substitute:
   - $3^x = 1/3 = 3^{-1} \implies \\mathbf{x = -1}$
   - $3^x = 9 = 3^2 \implies \\mathbf{x = 2}$
**Final Answer**: $x = -1$ or $x = 2$.`,
    pro_tips_95: `🏆 THE 95% HIGH-SCORE EXAMINER SECRETS & TRAP WARNINGS:
1. THE EXTRANEOUS ROOT TRAP: When solving log equations like log(x - 2) + log(x + 1) = 1, always test your roots in the original question. If any root causes an argument to become negative (e.g. log(-3)), it is UNDEFINED in real numbers and MUST be rejected! Writing both roots without rejecting the negative argument will forfeit the final accuracy mark [A1].
2. SIMPLIFYING SURDS BEFORE COMBINING: Never try to add √50 + √18 as √68! First reduce each: √50 = 5√2, and √18 = 3√2. Now 5√2 + 3√2 = 8√2!
3. SHOW THE GENERAL FORMULA: In WAEC theory questions, examiners award 1 free Method mark [M1] just for writing down the law you are using before plugging numbers.`,
    syllabus_objectives: `1. Apply the laws of indices to simplify complex algebraic and numerical expressions involving positive, zero, negative, and fractional indices.
2. Solve simultaneous and quadratic equations in exponential form using substitution.
3. Apply logarithmic laws (product, quotient, power, change of base) to solve equations and evaluate expressions without tables.
4. Perform the four basic operations on surds and rationalize denominators.`
  },
  {
    id: 2,
    subject: 'Physics',
    exam_type: 'WAEC / NECO / JAMB',
    class_level: 'SS1-SS3',
    topic: 'Scalars and Vectors & Vector Resolution',
    subtopic: 'Vector Resolution, Parallelogram Law, Triangle Law & Equilibrium of Forces',
    image_url: 'https://myschool.ng/storage/classroom/sample_vector.png',
    summary_60s: 'If you tell a pilot "fly at 500 km/h", they will ask "In which direction?!" A scalar is just a number with a unit (speed, mass, time, temperature, energy). A vector is that number plus a compass direction (velocity, acceleration, force, displacement, momentum). To add vectors acting at an angle, you cannot use simple 2 + 2 arithmetic. You must break them down into horizontal (cos θ) and vertical (sin θ) components, sum the components, and then use Pythagoras theorem to find the final resultant!',
    key_formulas: `📐 WOODEN CHALKBOARD FORMULA VAULT:
====================================================================
1. RESOLVING A VECTOR (F inclined at angle θ to horizontal):
   • Horizontal Component: F_x = F · cos θ
   • Vertical Component: F_y = F · sin θ

2. RESULTANT OF TWO CONCURRENT VECTORS (P and Q at angle θ):
   • Analytical Formula (Parallelogram Law):
     R = √(P² + Q² + 2PQ cos θ)
   • Direction of Resultant:
     tan α = (Q sin θ) / (P + Q cos θ)

3. LAMI'S THEOREM (Three coplanar forces in equilibrium):
   • P / sin α = Q / sin β = R / sin γ
====================================================================`,
    content: `## 🌟 Teacher's Introduction: Navigating the Physical Universe
Every mechanical system in the universe—from the trajectory of a football kicked into the net to the stability of a suspension bridge—depends entirely on resolving vectors. 

---

## 📘 PART 1: SCALARS VS VECTORS
- **Scalar**: Completely described by magnitude and unit alone (Mass: 10 kg, Speed: 20 m/s, Time: 5 s, Energy: 500 J).
- **Vector**: Requires magnitude, unit, AND specific direction (Displacement: 50 m North, Force: 100 N vertically downward, Velocity: 25 m/s East).

---

## 📗 PART 2: RESOLVING VECTORS
When pulling a crate with force $F = 100\\text{ N}$ inclined at $30^\\circ$ to the ground:
- Forward dragging force: $F_x = F \\cos(30^\\circ) = 100 \\times 0.866 = 86.6\\text{ N}$
- Upward lifting force: $F_y = F \\sin(30^\\circ) = 100 \\times 0.5 = 50.0\\text{ N}$

Notice by Pythagoras: $\\sqrt{86.6^2 + 50^2} = 100\\text{ N}$! The force is completely accounted for.`,
    pro_tips_95: `🏆 THE 95% HIGH-SCORE EXAMINER SECRETS & TRAP WARNINGS:
1. ALWAYS STATE THE DIRECTION: A vector question asking for "resultant" requires BOTH magnitude and direction! If you write R = 12 N without the angle α, you lose 2 marks in WAEC Physics Theory!
2. ENERGY IS A SCALAR: Work, Kinetic Energy, and Electric Potential are SCALARS even though they involve force and displacement!`,
    syllabus_objectives: `1. Distinguish between scalar and vector quantities with standard syllabus examples.
2. Resolve coplanar vectors into rectangular components.
3. Calculate resultant and equilibrant of coplanar forces using parallelogram and triangle laws.`
  }
];

export const ClassroomNotesHub: React.FC = () => {
  const { startTestForSubject, setSelectedSubject, setActiveView } = useApp();
  const [notes, setNotes] = useState<LessonNote[]>(DEFAULT_NOTES);
  const [selectedSubject, setSelectedSubjectFilter] = useState<string>('Mathematics');
  const [selectedNote, setSelectedNote] = useState<LessonNote>(DEFAULT_NOTES[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeExamTab, setActiveExamTab] = useState<'All' | 'WAEC' | 'NECO' | 'JAMB'>('All');
  const [isLoadingNotes, setIsLoadingNotes] = useState<boolean>(false);

  // Aligned Past Questions Laboratory State
  const [alignedQuestions, setAlignedQuestions] = useState<Question[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState<boolean>(false);
  const [userSelectedOptions, setUserSelectedOptions] = useState<Record<number, string>>({});
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({});

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Language', 'Economics', 'Government'];

  // Fetch live notes from cPanel API
  useEffect(() => {
    setIsLoadingNotes(true);
    fetch(`https://eznonews.com.ng/studyplug-api/get_lesson_notes.php?subject=${encodeURIComponent(selectedSubject)}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.success && Array.isArray(data.notes) && data.notes.length > 0) {
          setNotes(data.notes);
          setSelectedNote(data.notes[0]);
        } else {
          const filtered = DEFAULT_NOTES.filter(n => n.subject === selectedSubject);
          if (filtered.length > 0) {
            setNotes(filtered);
            setSelectedNote(filtered[0]);
          } else {
            setNotes(DEFAULT_NOTES);
            setSelectedNote(DEFAULT_NOTES[0]);
          }
        }
      })
      .catch(() => {
        const filtered = DEFAULT_NOTES.filter(n => n.subject === selectedSubject);
        setNotes(filtered.length > 0 ? filtered : DEFAULT_NOTES);
      })
      .finally(() => setIsLoadingNotes(false));
  }, [selectedSubject]);

  // Fetch aligned authentic past questions whenever selectedNote changes
  useEffect(() => {
    if (!selectedNote) return;
    setIsLoadingQuestions(true);
    setUserSelectedOptions({});
    setRevealedSolutions({});

    fetch(`https://eznonews.com.ng/studyplug-api/get_questions.php?subject=${encodeURIComponent(selectedNote.subject)}&topic=${encodeURIComponent(selectedNote.topic)}&limit=8`)
      .then(res => res.json())
      .then(data => {
        if (data && data.success && Array.isArray(data.questions)) {
          setAlignedQuestions(data.questions);
        } else {
          setAlignedQuestions([]);
        }
      })
      .catch(() => setAlignedQuestions([]))
      .finally(() => setIsLoadingQuestions(false));
  }, [selectedNote]);

  const handleSelectOption = (questionId: number, optionKey: string) => {
    if (userSelectedOptions[questionId]) return; // prevent changing once chosen
    setUserSelectedOptions(prev => ({ ...prev, [questionId]: optionKey }));
  };

  const toggleSolution = (questionId: number) => {
    setRevealedSolutions(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const filteredNotes = notes.filter(n => {
    const matchSearch = n.topic.toLowerCase().includes(searchQuery.toLowerCase()) || n.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchExam = activeExamTab === 'All' || n.exam_type.toUpperCase().includes(activeExamTab);
    return matchSearch && matchExam;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 animate-fadeIn">
      {/* Top Hero Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0E382B] text-white shadow-xl mb-8 relative overflow-hidden border border-[#C4823F]/50">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-[#FFCC00] text-[#0A241B] px-3.5 py-1 rounded-full text-xs font-black tracking-wide uppercase mb-3 shadow-sm">
            <span>🎓 95% High-Scorer Study System</span>
            <span>•</span>
            <span>WAEC • NECO • JAMB</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-2">
            Classroom Lesson Notes & Topic Past Question Lab
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            Textbook-grade humanized lesson lectures, chalkboard formula derivations, high-yield examiner traps, and real past questions aligned to every topic.
          </p>
        </div>

        <div className="absolute right-4 bottom-4 opacity-15 hidden md:block">
          <div className="text-8xl font-serif text-[#FFCC00]">∫ dx</div>
        </div>
      </div>

      {/* Subject Selector Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-3 mb-6">
        {subjects.map((sub) => (
          <button
            key={sub}
            type="button"
            onClick={() => setSelectedSubjectFilter(sub)}
            className={`px-4 py-2 rounded-2xl text-xs font-extrabold whitespace-nowrap transition shadow-xs cursor-pointer ${
              selectedSubject === sub
                ? 'bg-[#0E382B] text-[#FFCC00] ring-2 ring-[#FFCC00]'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Topics Navigation */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search topics or concepts..."
                className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E382B]"
              />
              <span className="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
            </div>

            {/* Exam Filter Tabs */}
            <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-2xl text-[11px] font-bold">
              {(['All', 'WAEC', 'NECO', 'JAMB'] as const).map(tab => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveExamTab(tab)}
                  className={`flex-1 py-1.5 rounded-xl transition cursor-pointer ${
                    activeExamTab === tab ? 'bg-white text-[#0E382B] shadow-xs' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Topics List */}
          <div className="bg-white p-3 rounded-3xl border border-slate-200 shadow-sm space-y-2 max-h-[600px] overflow-y-auto">
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
              <span>{selectedSubject} Syllabus Units</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-black">
                {filteredNotes.length} Topics
              </span>
            </div>

            {isLoadingNotes ? (
              <div className="p-8 text-center text-xs text-slate-400">Loading syllabus units...</div>
            ) : filteredNotes.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-400">No topics found matching your query.</div>
            ) : (
              filteredNotes.map((note) => {
                const isSelected = selectedNote?.id === note.id || selectedNote?.topic === note.topic;
                return (
                  <div
                    key={note.id || note.topic}
                    onClick={() => setSelectedNote(note)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition text-left space-y-1.5 ${
                      isSelected
                        ? 'bg-emerald-50 border-2 border-[#0E382B] shadow-sm'
                        : 'bg-white hover:bg-slate-50 border border-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {note.exam_type}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">{note.class_level}</span>
                    </div>
                    <h3 className={`font-black text-xs sm:text-sm leading-tight ${
                      isSelected ? 'text-[#0E382B]' : 'text-slate-900'
                    }`}>
                      {note.topic}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-snug">
                      {note.summary_60s}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Note Content & Aligned Questions Laboratory */}
        <div className="lg:col-span-8 space-y-6">
          {selectedNote ? (
            <div className="space-y-6">
              {/* Note Header Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">
                        {selectedNote.exam_type} Syllabus
                      </span>
                      <span className="text-xs text-slate-400 font-bold">•</span>
                      <span className="text-xs text-[#0E382B] font-bold">{selectedNote.subject}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {selectedNote.topic}
                    </h2>
                    {selectedNote.subtopic && (
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Focus: {selectedNote.subtopic}
                      </p>
                    )}
                  </div>
                </div>

                {/* Interactive Table of Contents (BYJU'S & StopLearn Standard) */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 flex items-center space-x-1.5">
                    <span>📑</span>
                    <span>Lesson Roadmap & Table of Contents</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 shadow-xs">
                      ⚡ 60s Big Picture
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 shadow-xs">
                      📐 Formula Blackboard
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 shadow-xs">
                      📖 Deep Theory & Derivations
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 shadow-xs">
                      💡 Solved Examples
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-white border border-slate-200 font-bold text-slate-700 shadow-xs">
                      🏆 95% Examiner Traps
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-emerald-100 border border-emerald-300 font-black text-emerald-900 shadow-xs">
                      🧪 Topic Exam Lab ({alignedQuestions.length} Questions)
                    </span>
                  </div>
                </div>

                {/* 60-Second Summary Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-1.5">
                  <div className="flex items-center space-x-2 text-emerald-900 text-xs font-black uppercase tracking-wider">
                    <span>⚡</span>
                    <span>The 60-Second Big Picture</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                    {selectedNote.summary_60s}
                  </p>
                </div>

                {/* High-Resolution Diagram (if available) */}
                {selectedNote.image_url && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center">
                    <img
                      src={selectedNote.image_url}
                      alt={selectedNote.topic}
                      className="max-h-64 object-contain rounded-xl shadow-xs"
                      onError={(e) => ((e.target as any).style.display = 'none')}
                    />
                    <span className="text-[11px] text-slate-400 font-semibold mt-2">
                      Figure: {selectedNote.topic} Schematic Diagram
                    </span>
                  </div>
                )}

                {/* Yellow Chalkboard Formula Box */}
                {selectedNote.key_formulas && (
                  <div className="rounded-2xl p-1.5 bg-[#C4823F] shadow-lg">
                    <div className="rounded-xl p-5 bg-[#0C2E20] text-white space-y-2">
                      <div className="flex items-center space-x-2 border-b border-white/20 pb-2">
                        <span className="text-base">📐</span>
                        <h4 className="text-xs font-black text-[#FFCC00] uppercase tracking-wider">
                          Classroom Chalkboard Formulas & Derivations
                        </h4>
                      </div>
                      <pre className="text-xs font-mono text-[#FFCC00] whitespace-pre-line leading-relaxed font-bold">
                        {selectedNote.key_formulas}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Main Detailed Note Content with Rich BYJU'S-Grade Renderer */}
                <div className="pt-2">
                  <RichNoteRenderer content={selectedNote.content} />
                </div>

                {/* 95% Examiner Trap & Pro-Tip Box */}
                {selectedNote.pro_tips_95 && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <h4 className="text-xs font-black text-amber-950 uppercase tracking-wide">
                          The 95% High-Score Secret (Examiner Traps)
                        </h4>
                        <p className="text-xs text-amber-900 leading-relaxed mt-1 font-medium whitespace-pre-line">
                          {selectedNote.pro_tips_95}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Syllabus Learning Objectives */}
                {selectedNote.syllabus_objectives && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 flex items-center space-x-2">
                      <span>🎯</span>
                      <span>Official WAEC / NECO Syllabus Objectives</span>
                    </h4>
                    <pre className="text-xs font-sans text-slate-600 whitespace-pre-line leading-relaxed">
                      {selectedNote.syllabus_objectives}
                    </pre>
                  </div>
                )}
              </div>

              {/* ============================================================== */}
              {/* SHOWSTOPPER: ALIGNED TOPIC PAST QUESTIONS LABORATORY */}
              {/* ============================================================== */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-300 shadow-md space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[10px] font-black uppercase tracking-wider mb-1">
                      <span>🧪 Topic Exam Laboratory</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      Authentic Past Questions on {selectedNote.topic}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Real questions asked in JAMB & WAEC. Test your understanding right here!
                    </p>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-1 rounded-xl bg-[#0E382B] text-[#FFCC00] text-xs font-black">
                    {alignedQuestions.length} Questions Aligned
                  </span>
                </div>

                {isLoadingQuestions ? (
                  <div className="p-10 text-center text-xs text-slate-400">
                    <div className="animate-spin text-2xl mb-2">⏳</div>
                    Extracting authentic past questions for {selectedNote.topic}...
                  </div>
                ) : alignedQuestions.length === 0 ? (
                  <div className="p-8 text-center text-xs text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    No specific questions matched this exact topic filter yet. Use the buttons below to practice all questions for {selectedNote.subject}!
                  </div>
                ) : (
                  <div className="space-y-6">
                    {alignedQuestions.map((q, qIndex) => {
                      const userChoice = userSelectedOptions[q.id];
                      const isRevealed = revealedSolutions[q.id];
                      const isCorrect = userChoice === q.correctAnswer;
                      const hasAnswered = Boolean(userChoice);

                      return (
                        <div
                          key={q.id || qIndex}
                          className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition space-y-4"
                        >
                          {/* Question Header Badges */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center space-x-2">
                              <span className="px-2.5 py-0.5 rounded-lg bg-[#0E382B] text-white text-[10.5px] font-black tracking-wide">
                                {q.subject.includes('WAEC') ? 'WAEC' : 'JAMB UTME'} {q.year ? `• ${q.year}` : ''}
                              </span>
                              <span className="text-xs font-extrabold text-slate-700">
                                Question #{q.questionNumber || qIndex + 1}
                              </span>
                            </div>

                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                              {q.topic || selectedNote.topic}
                            </span>
                          </div>

                          {/* Question Text */}
                          <div className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed select-text">
                            {q.text}
                          </div>

                          {/* Question Image if present */}
                          {q.imageUrl && (
                            <div className="flex justify-center p-3 bg-white rounded-xl border border-slate-200">
                              <img
                                src={q.imageUrl}
                                alt="Exam Diagram"
                                className="max-h-48 object-contain rounded"
                                onError={(e) => ((e.target as any).style.display = 'none')}
                              />
                            </div>
                          )}

                          {/* Options Grid */}
                          {q.options && q.options.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                              {q.options.map((opt) => {
                                const isThisSelected = userChoice === opt.key;
                                const isThisCorrect = opt.key === q.correctAnswer;

                                let btnStyle = 'bg-white border-slate-200 text-slate-800 hover:bg-slate-100';

                                if (hasAnswered) {
                                  if (isThisCorrect) {
                                    btnStyle = 'bg-emerald-500 text-white font-extrabold border-emerald-600 shadow-sm';
                                  } else if (isThisSelected && !isThisCorrect) {
                                    btnStyle = 'bg-rose-500 text-white font-extrabold border-rose-600 shadow-sm';
                                  } else {
                                    btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                                  }
                                }

                                return (
                                  <button
                                    key={opt.key}
                                    type="button"
                                    onClick={() => handleSelectOption(q.id, opt.key)}
                                    disabled={hasAnswered}
                                    className={`p-3 rounded-xl border text-left text-xs font-semibold flex items-start space-x-2.5 transition cursor-pointer ${btnStyle}`}
                                  >
                                    <span className="w-5 h-5 rounded-md flex items-center justify-center font-black shrink-0 text-[11px] bg-black/10">
                                      {opt.key}
                                    </span>
                                    <span className="leading-snug">{opt.text}</span>
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {/* Result Feedback Banner */}
                          {hasAnswered && (
                            <div className={`p-3 rounded-xl text-xs font-bold flex items-center justify-between ${
                              isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                            }`}>
                              <span>
                                {isCorrect
                                  ? '🎉 Correct! You scored +1 mark on this question.'
                                  : `❌ Incorrect. The official correct option is (${q.correctAnswer}).`}
                              </span>

                              <button
                                type="button"
                                onClick={() => toggleSolution(q.id)}
                                className="underline font-black text-xs cursor-pointer ml-2"
                              >
                                {isRevealed ? 'Hide Solution ▲' : 'View Solution ▼'}
                              </button>
                            </div>
                          )}

                          {/* Reveal Solution Toggle (even before answering) */}
                          {!hasAnswered && (
                            <div className="flex justify-end pt-1">
                              <button
                                type="button"
                                onClick={() => toggleSolution(q.id)}
                                className="text-xs font-bold text-[#0E382B] hover:underline flex items-center space-x-1 cursor-pointer"
                              >
                                <span>{isRevealed ? '▲ Hide Chalkboard Solution' : '▼ Reveal Chalkboard Solution & Marking Scheme'}</span>
                              </button>
                            </div>
                          )}

                          {/* Blackboard Solution Drawer */}
                          {isRevealed && (
                            <div className="rounded-2xl p-1 bg-[#C4823F] shadow-md mt-3">
                              <div className="rounded-xl p-4 bg-[#0C2E20] text-white space-y-2 font-mono text-xs">
                                <div className="flex items-center space-x-2 border-b border-white/20 pb-2">
                                  <span className="text-[#FFCC00] font-black uppercase text-[11px]">
                                    📚 StudyPlug Official Chalkboard Solution & Marking Scheme
                                  </span>
                                </div>
                                <div className="text-emerald-200 font-bold whitespace-pre-line leading-relaxed">
                                  {q.explanation || 'No step-by-step working available for this question.'}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Bottom Practice Action Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-r from-[#0E382B] via-[#124234] to-[#164E3D] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-[#C4823F]">
                <div>
                  <div className="text-xs font-black text-[#FFCC00] uppercase tracking-wide">
                    Put Theory Into Full Practice
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">
                    Ready to score 95% on {selectedNote.topic}?
                  </div>
                  <div className="text-[11px] text-emerald-200 mt-0.5">
                    Launch full topical questions or sit for a timed CBT exam.
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSubject(selectedNote.subject);
                      setActiveView('practice');
                    }}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-2xl bg-[#FFCC00] hover:bg-[#FFE033] text-[#0A241B] font-black text-xs transition shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>⚡ Instant Practice Mode</span>
                    <span>➔</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      startTestForSubject(selectedNote.subject);
                    }}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-2xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition border border-white/30 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>⏱️ Timed CBT Exam</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-400">
              Select a topic from the left sidebar to start learning.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
