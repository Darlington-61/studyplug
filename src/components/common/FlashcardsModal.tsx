import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

interface FlashcardsModalProps {
  onClose: () => void;
}

interface Flashcard {
  id: number;
  subject: string;
  topic: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const FLASHCARDS: Flashcard[] = [
  // Chemistry
  { id: 1, subject: 'Chemistry', topic: 'Periodic Table', front: 'What is the atomic number of Carbon?', back: '6\n\nCarbon has 6 protons and 6 electrons.\nSymbol: C\nPeriod 2, Group 14', difficulty: 'easy' },
  { id: 2, subject: 'Chemistry', topic: 'Bonding', front: 'What is a covalent bond?', back: 'A covalent bond is formed when two atoms SHARE electrons to achieve stability (full outer shell).', difficulty: 'easy' },
  { id: 3, subject: 'Chemistry', topic: 'Acids & Bases', front: 'What does pH measure?', back: 'pH measures the concentration of H⁺ (hydrogen) ions in a solution.\n\npH < 7 = Acidic\npH = 7 = Neutral\npH > 7 = Basic/Alkaline', difficulty: 'medium' },
  { id: 4, subject: 'Chemistry', topic: 'Electrochemistry', front: 'State Faraday\'s First Law of Electrolysis', back: 'The mass of a substance deposited or liberated at an electrode during electrolysis is directly proportional to the quantity of electricity (charge) passed.\n\nm = (Q × M) / (n × F)', difficulty: 'hard' },
  { id: 5, subject: 'Chemistry', topic: 'Organic Chemistry', front: 'What is the functional group of an alcohol?', back: 'Hydroxyl group: –OH\n\nExample: Ethanol (C₂H₅OH)', difficulty: 'easy' },
  { id: 6, subject: 'Chemistry', topic: 'Kinetics', front: 'What is activation energy?', back: 'The minimum amount of energy required for a chemical reaction to occur.\n\nA catalyst lowers activation energy, speeding up the reaction.', difficulty: 'medium' },

  // Physics
  { id: 7, subject: 'Physics', topic: 'Mechanics', front: 'State Newton\'s First Law of Motion', back: 'A body remains at rest or continues in uniform motion in a straight line UNLESS acted upon by an external unbalanced force.\n\n(Law of Inertia)', difficulty: 'easy' },
  { id: 8, subject: 'Physics', topic: 'Electricity', front: 'State Ohm\'s Law', back: 'The current flowing through a conductor is directly proportional to the voltage across it, provided temperature remains constant.\n\nV = IR', difficulty: 'easy' },
  { id: 9, subject: 'Physics', topic: 'Waves', front: 'What is the relationship between wave speed, frequency, and wavelength?', back: 'v = fλ\n\nv = speed (m/s)\nf = frequency (Hz)\nλ = wavelength (m)', difficulty: 'medium' },
  { id: 10, subject: 'Physics', topic: 'Heat', front: 'What is specific heat capacity?', back: 'The amount of heat energy required to raise the temperature of 1 kg of a substance by 1°C (or 1 K).\n\nQ = mcΔT\nc = specific heat capacity (J/kg·K)', difficulty: 'medium' },
  { id: 11, subject: 'Physics', topic: 'Nuclear Physics', front: 'What is radioactive half-life?', back: 'The time taken for half the radioactive atoms in a sample to decay.\n\nN = N₀ × (½)^(t/T½)', difficulty: 'hard' },
  { id: 12, subject: 'Physics', topic: 'Optics', front: 'State the law of refraction (Snell\'s Law)', back: 'n₁ sin θ₁ = n₂ sin θ₂\n\nWhen light moves from a less dense to a more dense medium, it bends toward the normal.', difficulty: 'hard' },

  // Mathematics
  { id: 13, subject: 'Mathematics', topic: 'Algebra', front: 'What is the quadratic formula?', back: 'x = [-b ± √(b²-4ac)] / 2a\n\nUsed to find roots of ax² + bx + c = 0\n\nDiscriminant: b² - 4ac\n• > 0: two real roots\n• = 0: one repeated root\n• < 0: no real roots', difficulty: 'medium' },
  { id: 14, subject: 'Mathematics', topic: 'Sequences', front: 'What is the formula for the sum of an Arithmetic Progression?', back: 'Sₙ = n/2 [2a + (n-1)d]\n\nor\n\nSₙ = n/2 [first term + last term]\n\na = first term, d = common difference, n = number of terms', difficulty: 'medium' },
  { id: 15, subject: 'Mathematics', topic: 'Trigonometry', front: 'State the Sine Rule', back: 'a/sin A = b/sin B = c/sin C\n\nUse when you know: two angles + one side, or two sides + an angle opposite one of them.', difficulty: 'medium' },
  { id: 16, subject: 'Mathematics', topic: 'Statistics', front: 'How do you calculate Standard Deviation?', back: 'σ = √[Σf(x - x̄)² / Σf]\n\n1. Find the mean (x̄)\n2. Find each (x - x̄)²\n3. Multiply by frequency\n4. Divide by total frequency\n5. Take the square root', difficulty: 'hard' },

  // Biology
  { id: 17, subject: 'Biology', topic: 'Cell Biology', front: 'What is the function of mitochondria?', back: 'Mitochondria is the "Powerhouse of the Cell"\n\nIt carries out aerobic respiration to produce ATP (energy).\n\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', difficulty: 'easy' },
  { id: 18, subject: 'Biology', topic: 'Genetics', front: 'State Mendel\'s Law of Segregation', back: 'Alleles for a character separate (segregate) during gamete formation so that each gamete carries only ONE allele for each character.\n\nExample: Tt → gametes T and t', difficulty: 'medium' },
  { id: 19, subject: 'Biology', topic: 'Ecology', front: 'What is a food chain? Give an example.', back: 'A food chain shows how energy is transferred from one organism to another through feeding.\n\nExample:\nGrass → Grasshopper → Frog → Snake → Eagle\n\nArrows show direction of energy flow.', difficulty: 'easy' },
  { id: 20, subject: 'Biology', topic: 'Photosynthesis', front: 'Write the balanced equation for photosynthesis', back: '6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nOccurs in the chloroplast (using chlorophyll)\nLight reaction: produces ATP\nDark reaction (Calvin Cycle): produces glucose', difficulty: 'medium' },

  // English
  { id: 21, subject: 'English', topic: 'Literary Devices', front: 'What is personification?', back: 'Personification is giving human qualities or actions to non-human things (animals, objects, ideas).\n\nExample: "The wind whispered through the trees."\n\nCf: Pathetic fallacy (nature reflects mood)', difficulty: 'easy' },
  { id: 22, subject: 'English', topic: 'Literary Devices', front: 'What is the difference between a metaphor and a simile?', back: 'Simile: compares using "like" or "as"\n→ "She is AS brave AS a lion."\n\nMetaphor: states directly that one thing IS another\n→ "She IS a lion in battle."\n\nBoth are figurative comparisons.', difficulty: 'easy' },
  { id: 23, subject: 'English', topic: 'Grammar', front: 'What is a gerund?', back: 'A gerund is a verb used as a noun — always ending in "-ing"\n\nExamples:\n• "Swimming is my hobby." (subject)\n• "I enjoy reading." (object)\n• "His hobby is cooking." (complement)', difficulty: 'medium' },
];

const SUBJECTS = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];

export const FlashcardsModal: React.FC<FlashcardsModalProps> = ({ onClose }) => {
  const { studyStreak } = useApp();
  const [activeSubject, setActiveSubject] = useState('All');
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<number[]>([]);
  const [unknown, setUnknown] = useState<number[]>([]);
  const [sessionDone, setSessionDone] = useState(false);

  const cards = activeSubject === 'All'
    ? FLASHCARDS
    : FLASHCARDS.filter(c => c.subject === activeSubject);

  const currentCard = cards[cardIndex];

  const handleNext = (markKnown: boolean) => {
    if (markKnown) {
      setKnown(prev => [...prev, currentCard.id]);
    } else {
      setUnknown(prev => [...prev, currentCard.id]);
    }
    setFlipped(false);
    setTimeout(() => {
      if (cardIndex + 1 >= cards.length) {
        setSessionDone(true);
      } else {
        setCardIndex(prev => prev + 1);
      }
    }, 100);
  };

  const resetSession = () => {
    setCardIndex(0);
    setFlipped(false);
    setKnown([]);
    setUnknown([]);
    setSessionDone(false);
  };

  const difficultyColor = (d: string) =>
    d === 'easy' ? '#1B5E20' : d === 'medium' ? '#E65100' : '#B71C1C';

  if (sessionDone) {
    const score = Math.round((known.length / cards.length) * 100);
    return (
      <div className="fixed inset-0 z-[200] flex flex-col bg-[#001028] font-sans">
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-5">
          <span className="text-6xl">{score >= 80 ? '🎉' : score >= 50 ? '💪' : '📚'}</span>
          <h2 className="text-[24px] font-black text-white">Session Complete!</h2>
          <p className="text-[14px] text-emerald-200">{cards.length} cards reviewed</p>

          <div className="w-full max-w-[280px] space-y-3">
            <div className="rounded-[16px] bg-white/10 p-4 flex items-center justify-between">
              <span className="text-[13px] text-emerald-200">✅ I know this</span>
              <span className="text-[20px] font-black text-white">{known.length}</span>
            </div>
            <div className="rounded-[16px] bg-white/10 p-4 flex items-center justify-between">
              <span className="text-[13px] text-emerald-200">🔁 Need to review</span>
              <span className="text-[20px] font-black text-white">{unknown.length}</span>
            </div>
            <div className="rounded-[16px] bg-[#FFD600] p-4 flex items-center justify-between">
              <span className="text-[13px] font-bold text-[#001028]">Score</span>
              <span className="text-[20px] font-black text-[#001028]">{score}%</span>
            </div>
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={resetSession}
              className="px-5 py-2.5 rounded-[12px] bg-white/10 text-white font-bold text-[13px] border border-white/20"
            >
              Restart
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-[12px] bg-[#FFD600] text-[#001028] font-bold text-[13px]"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F0F4F2] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-3 shrink-0">
        <div className="flex items-center space-x-3 mb-3">
          <button type="button" onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer">←</button>
          <div className="flex-1">
            <h2 className="font-extrabold text-[16px] leading-none">Flashcards</h2>
            <p className="text-[11px] text-emerald-300 mt-0.5">Spaced repetition learning</p>
          </div>
          <span className="text-[13px] bg-white/10 px-2 py-1 rounded-full">
            {cardIndex + 1}/{cards.length}
          </span>
        </div>

        {/* Subject Filter */}
        <div className="flex space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {SUBJECTS.map(s => (
            <button
              key={s}
              type="button"
              onClick={() => { setActiveSubject(s); setCardIndex(0); setFlipped(false); setSessionDone(false); setKnown([]); setUnknown([]); }}
              className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-bold transition ${
                activeSubject === s
                  ? 'bg-[#FFD600] text-[#001028]'
                  : 'bg-white/10 text-emerald-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 bg-[#E4EAE8]">
        <div
          className="h-full bg-[#001028] transition-all duration-500"
          style={{ width: `${((cardIndex) / cards.length) * 100}%` }}
        />
      </div>

      {/* Card Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-6">
        {currentCard && (
          <>
            {/* Subject / Topic */}
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white bg-[#001028]">
                {currentCard.subject}
              </span>
              <span className="text-[11px] text-[#66736F]">{currentCard.topic}</span>
              <span
                className="text-[9px] font-black px-1.5 py-0.5 rounded text-white uppercase"
                style={{ backgroundColor: difficultyColor(currentCard.difficulty) }}
              >
                {currentCard.difficulty}
              </span>
            </div>

            {/* Flip Card */}
            <button
              type="button"
              onClick={() => setFlipped(!flipped)}
              className="w-full max-w-[340px] min-h-[220px] rounded-[22px] shadow-lg flex flex-col items-center justify-center text-center px-6 py-6 transition-all duration-300 cursor-pointer active:scale-[0.98]"
              style={{
                backgroundColor: flipped ? '#001028' : 'white',
                color: flipped ? 'white' : '#10201D',
                border: `2px solid ${flipped ? '#FFD600' : '#E4EAE8'}`
              }}
            >
              {!flipped ? (
                <>
                  <p className="text-[12px] font-semibold text-[#66736F] mb-3">QUESTION — Tap to reveal answer</p>
                  <p className="text-[15px] font-bold leading-relaxed">{currentCard.front}</p>
                </>
              ) : (
                <>
                  <p className="text-[11px] font-semibold text-emerald-300 mb-3">ANSWER</p>
                  <p className="text-[13px] font-semibold leading-relaxed whitespace-pre-line text-emerald-50">{currentCard.back}</p>
                </>
              )}
            </button>

            {flipped ? (
              <div className="flex space-x-3 mt-6 w-full max-w-[340px]">
                <button
                  type="button"
                  onClick={() => handleNext(false)}
                  className="flex-1 py-3 rounded-[14px] bg-red-100 text-red-700 font-bold text-[13px] border border-red-200 active:scale-[0.97]"
                >
                  🔁 Review Again
                </button>
                <button
                  type="button"
                  onClick={() => handleNext(true)}
                  className="flex-1 py-3 rounded-[14px] bg-[#001028] text-white font-bold text-[13px] active:scale-[0.97]"
                >
                  ✅ I Know This
                </button>
              </div>
            ) : (
              <p className="mt-5 text-[12px] text-[#66736F]">Tap the card to flip it</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
