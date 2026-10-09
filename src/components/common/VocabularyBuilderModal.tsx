import React, { useState, useMemo } from 'react';

interface VocabularyBuilderModalProps {
  onClose: () => void;
}

interface VocabWord {
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  definition: string;
  example: string;
  examUsage: string;
  examBody: string;
  synonyms: string[];
  antonyms: string[];
}

const VOCAB_BANK: VocabWord[] = [
  {
    word: 'Ambiguous',
    pronunciation: 'am-BIG-yoo-us',
    partOfSpeech: 'adjective',
    definition: 'Open to more than one interpretation; not having one obvious meaning.',
    example: 'The teacher\'s instructions were ambiguous, leaving students confused about the assignment.',
    examUsage: 'Used in WAEC comprehension passages to test if students can identify unclear statements.',
    examBody: 'WAEC/JAMB',
    synonyms: ['unclear', 'vague', 'equivocal'],
    antonyms: ['clear', 'definite', 'unambiguous'],
  },
  {
    word: 'Benevolent',
    pronunciation: 'be-NEV-oh-lent',
    partOfSpeech: 'adjective',
    definition: 'Well-meaning and kindly; showing goodwill and charitable acts.',
    example: 'The benevolent king distributed food to the poor during the famine.',
    examUsage: 'Common in JAMB Use of English — appears in comprehension and antonym/synonym questions.',
    examBody: 'JAMB',
    synonyms: ['kind', 'generous', 'charitable', 'philanthropic'],
    antonyms: ['malevolent', 'cruel', 'selfish'],
  },
  {
    word: 'Cacophony',
    pronunciation: 'ka-KOF-uh-nee',
    partOfSpeech: 'noun',
    definition: 'A harsh, discordant mixture of sounds; unpleasant noise.',
    example: 'The cacophony of car horns during Lagos traffic is deafening.',
    examUsage: 'Tested in WAEC Literature: identifying sound devices in poems.',
    examBody: 'WAEC',
    synonyms: ['noise', 'racket', 'discord', 'din'],
    antonyms: ['harmony', 'euphony', 'silence'],
  },
  {
    word: 'Diligent',
    pronunciation: 'DIL-ih-jent',
    partOfSpeech: 'adjective',
    definition: 'Having or showing care and conscientiousness in one\'s work or duties.',
    example: 'A diligent student reviews notes after every class.',
    examUsage: 'Frequently tested in JAMB Use of English word choice questions.',
    examBody: 'JAMB',
    synonyms: ['hardworking', 'industrious', 'assiduous'],
    antonyms: ['lazy', 'negligent', 'careless'],
  },
  {
    word: 'Eloquent',
    pronunciation: 'EL-oh-kwent',
    partOfSpeech: 'adjective',
    definition: 'Fluent or persuasive in speaking or writing; expressing clearly and effectively.',
    example: 'The lawyer gave an eloquent speech that convinced the jury.',
    examUsage: 'Appears in comprehension passages about leadership in WAEC and NECO.',
    examBody: 'WAEC/NECO',
    synonyms: ['articulate', 'fluent', 'persuasive', 'expressive'],
    antonyms: ['inarticulate', 'tongue-tied'],
  },
  {
    word: 'Frugal',
    pronunciation: 'FROO-gul',
    partOfSpeech: 'adjective',
    definition: 'Sparing or economical with money or food; not wasteful.',
    example: 'The frugal merchant saved every kobo and became wealthy over time.',
    examUsage: 'Tested in JAMB Use of English antonym/synonym sections.',
    examBody: 'JAMB',
    synonyms: ['thrifty', 'economical', 'sparing'],
    antonyms: ['wasteful', 'extravagant', 'lavish'],
  },
  {
    word: 'Gregarious',
    pronunciation: 'greh-GAIR-ee-us',
    partOfSpeech: 'adjective',
    definition: 'Fond of company; sociable; living in flocks or groups.',
    example: 'She was so gregarious that she knew everyone in the village.',
    examUsage: 'Common in JAMB comprehension passages about social behavior.',
    examBody: 'JAMB',
    synonyms: ['sociable', 'outgoing', 'friendly', 'affable'],
    antonyms: ['unsociable', 'introverted', 'solitary'],
  },
  {
    word: 'Hypocrite',
    pronunciation: 'HIP-oh-krit',
    partOfSpeech: 'noun',
    definition: 'A person who claims to have moral standards or beliefs that their own behavior does not conform to.',
    example: 'It is hypocritical to preach honesty while being dishonest.',
    examUsage: 'Featured in WAEC Literature comprehension about character analysis.',
    examBody: 'WAEC',
    synonyms: ['pretender', 'deceiver', 'fraud'],
    antonyms: ['honest person', 'sincere person'],
  },
  {
    word: 'Impeccable',
    pronunciation: 'im-PEK-uh-bul',
    partOfSpeech: 'adjective',
    definition: 'In accordance with the highest standards; faultless; flawless.',
    example: 'The student\'s impeccable handwriting impressed the examiner.',
    examUsage: 'Tested in JAMB synonyms: impeccable = flawless, spotless.',
    examBody: 'JAMB',
    synonyms: ['flawless', 'perfect', 'spotless', 'faultless'],
    antonyms: ['flawed', 'imperfect', 'faulty'],
  },
  {
    word: 'Jeopardize',
    pronunciation: 'JEP-er-dize',
    partOfSpeech: 'verb',
    definition: 'To put at risk of being harmed, lost, or destroyed.',
    example: 'Cheating in exams will jeopardize your academic future.',
    examUsage: 'Common in WAEC essay writing topics about the consequences of misbehaviour.',
    examBody: 'WAEC/JAMB',
    synonyms: ['endanger', 'risk', 'threaten', 'imperil'],
    antonyms: ['protect', 'safeguard', 'secure'],
  },
  {
    word: 'Kinetic',
    pronunciation: 'ki-NET-ik',
    partOfSpeech: 'adjective',
    definition: 'Of, relating to, or resulting from motion.',
    example: 'A moving car possesses kinetic energy.',
    examUsage: 'Core Physics/Chemistry term in WAEC, NECO, and JAMB science papers.',
    examBody: 'WAEC/NECO/JAMB',
    synonyms: ['moving', 'dynamic', 'active'],
    antonyms: ['static', 'potential', 'stationary'],
  },
  {
    word: 'Loquacious',
    pronunciation: 'lo-KWAY-shus',
    partOfSpeech: 'adjective',
    definition: 'Tending to talk a great deal; talkative.',
    example: 'The loquacious student had an answer for every question.',
    examUsage: 'Tested as antonym of "taciturn" in JAMB Use of English.',
    examBody: 'JAMB',
    synonyms: ['talkative', 'garrulous', 'verbose', 'chatty'],
    antonyms: ['taciturn', 'reserved', 'quiet', 'reticent'],
  },
  {
    word: 'Meticulous',
    pronunciation: 'meh-TIK-yoo-lus',
    partOfSpeech: 'adjective',
    definition: 'Showing great attention to detail or being very careful and precise.',
    example: 'A meticulous student double-checks every answer before submitting.',
    examUsage: 'Featured in WAEC formal writing topics — qualities of a good leader.',
    examBody: 'WAEC',
    synonyms: ['careful', 'precise', 'thorough', 'painstaking'],
    antonyms: ['careless', 'sloppy', 'negligent'],
  },
  {
    word: 'Nonchalant',
    pronunciation: 'NON-shuh-lant',
    partOfSpeech: 'adjective',
    definition: 'Feeling or appearing casually calm and relaxed; not displaying anxiety.',
    example: 'He appeared nonchalant before the exam, as if he hadn\'t prepared at all.',
    examUsage: 'Tested in JAMB close test (cloze test) passages about attitudes.',
    examBody: 'JAMB',
    synonyms: ['casual', 'indifferent', 'unconcerned', 'cool'],
    antonyms: ['anxious', 'concerned', 'worried'],
  },
  {
    word: 'Obstinate',
    pronunciation: 'OB-stih-net',
    partOfSpeech: 'adjective',
    definition: 'Stubbornly refusing to change one\'s opinion or action, despite arguments.',
    example: 'The obstinate student refused to correct his errors even after advice.',
    examUsage: 'Synonym question: obstinate = stubborn, headstrong. Common in JAMB.',
    examBody: 'JAMB',
    synonyms: ['stubborn', 'headstrong', 'tenacious', 'pig-headed'],
    antonyms: ['flexible', 'compliant', 'yielding'],
  },
  {
    word: 'Perspicacious',
    pronunciation: 'per-spih-KAY-shus',
    partOfSpeech: 'adjective',
    definition: 'Having a ready insight into things; shrewd; having sharp judgment.',
    example: 'A perspicacious examiner quickly identifies poorly structured answers.',
    examUsage: 'Advanced JAMB Use of English vocabulary question.',
    examBody: 'JAMB',
    synonyms: ['shrewd', 'astute', 'perceptive', 'discerning'],
    antonyms: ['obtuse', 'dull', 'unintelligent'],
  },
  {
    word: 'Quandary',
    pronunciation: 'KWON-duh-ree',
    partOfSpeech: 'noun',
    definition: 'A state of uncertainty or perplexity, especially when one must choose between equally unfavourable options.',
    example: 'She was in a quandary about which subject to study first.',
    examUsage: 'Tested in WAEC comprehension passages about decision-making dilemmas.',
    examBody: 'WAEC',
    synonyms: ['dilemma', 'predicament', 'puzzle', 'difficulty'],
    antonyms: ['certainty', 'resolution', 'clarity'],
  },
  {
    word: 'Reticent',
    pronunciation: 'RET-ih-sent',
    partOfSpeech: 'adjective',
    definition: 'Not revealing one\'s thoughts or feelings readily; reserved.',
    example: 'The reticent boy rarely spoke during class discussions.',
    examUsage: 'Antonym: reticent ↔ loquacious. Classic JAMB pair tested frequently.',
    examBody: 'JAMB',
    synonyms: ['reserved', 'quiet', 'taciturn', 'withdrawn'],
    antonyms: ['loquacious', 'talkative', 'outspoken'],
  },
  {
    word: 'Sagacious',
    pronunciation: 'suh-GAY-shus',
    partOfSpeech: 'adjective',
    definition: 'Having or showing keen mental discernment and good judgment; wise.',
    example: 'The sagacious elder advised the youths to seek education above all.',
    examUsage: 'WAEC Literature: character description of wise elders in African novels.',
    examBody: 'WAEC',
    synonyms: ['wise', 'shrewd', 'astute', 'judicious'],
    antonyms: ['foolish', 'unwise', 'imprudent'],
  },
  {
    word: 'Tenacious',
    pronunciation: 'teh-NAY-shus',
    partOfSpeech: 'adjective',
    definition: 'Not readily giving up; persistent; determined.',
    example: 'A tenacious student keeps studying despite repeated failures.',
    examUsage: 'Common in JAMB and WAEC essay prompts about perseverance.',
    examBody: 'JAMB/WAEC',
    synonyms: ['persistent', 'determined', 'stubborn', 'resolute'],
    antonyms: ['yielding', 'feeble', 'irresolute'],
  },
];

export const VocabularyBuilderModal: React.FC<VocabularyBuilderModalProps> = ({ onClose }) => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<VocabWord | null>(() => {
    // Word of the Day: pick based on day of year
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    return VOCAB_BANK[dayOfYear % VOCAB_BANK.length];
  });

  const filtered = useMemo(() => {
    if (!search.trim()) return VOCAB_BANK;
    const q = search.toLowerCase();
    return VOCAB_BANK.filter(w =>
      w.word.toLowerCase().includes(q) ||
      w.definition.toLowerCase().includes(q) ||
      w.synonyms.some(s => s.toLowerCase().includes(q))
    );
  }, [search]);

  const examColor = (body: string) => {
    if (body.includes('JAMB')) return '#1565C0';
    if (body.includes('WAEC')) return '#1B5E20';
    if (body.includes('NECO')) return '#BF360C';
    return '#001028';
  };

  return (
    <div className="fixed inset-0 z-[200] flex flex-col bg-[#F7F9F8] font-sans">
      {/* Header */}
      <div className="bg-[#001028] text-white px-4 pt-5 pb-4 shrink-0">
        <div className="flex items-center space-x-3 mb-3">
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer"
          >
            ←
          </button>
          <div className="flex-1">
            <h2 className="font-extrabold text-[16px] leading-none">Vocabulary Builder</h2>
            <p className="text-[11px] text-emerald-300 mt-0.5">English · JAMB · WAEC · NECO</p>
          </div>
          <span className="text-2xl">📖</span>
        </div>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search words, definitions, synonyms..."
          className="w-full px-3 py-2 rounded-[10px] bg-white/10 text-white placeholder-emerald-200/60 text-[13px] border border-white/20 outline-none focus:bg-white/15"
        />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Word List */}
        <div className="w-[130px] shrink-0 bg-white border-r border-[#E4EAE8] overflow-y-auto">
          {!search && (
            <div className="px-2 py-1.5 bg-amber-50 border-b border-amber-100">
              <p className="text-[9px] font-black text-amber-700 uppercase tracking-wider">Word of the Day</p>
            </div>
          )}
          {filtered.map((w, i) => (
            <button
              key={w.word}
              type="button"
              onClick={() => setSelected(w)}
              className={`w-full text-left px-3 py-2.5 border-b border-[#F0F4F2] transition ${
                selected?.word === w.word
                  ? 'bg-[#001028] text-white'
                  : i === 0 && !search
                  ? 'bg-amber-50 hover:bg-amber-100'
                  : 'hover:bg-[#F0F4F2]'
              }`}
            >
              <p className={`text-[12px] font-bold truncate ${selected?.word === w.word ? 'text-white' : 'text-[#10201D]'}`}>
                {w.word}
              </p>
              <p className={`text-[9.5px] truncate ${selected?.word === w.word ? 'text-emerald-200' : 'text-[#66736F]'}`}>
                {w.partOfSpeech}
              </p>
            </button>
          ))}
        </div>

        {/* Word Detail */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {selected ? (
            <div className="space-y-3">
              {/* Word + Pronunciation */}
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-[26px] font-black text-[#001028] leading-none">{selected.word}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        const utter = new SpeechSynthesisUtterance(selected.word);
                        utter.rate = 0.85;
                        utter.lang = 'en-GB';
                        window.speechSynthesis.speak(utter);
                      }
                    }}
                    className="w-8 h-8 rounded-full bg-[#001028]/10 hover:bg-[#001028]/20 flex items-center justify-center text-[#001028] transition cursor-pointer active:scale-95"
                    title="Listen to pronunciation"
                    aria-label="Listen to pronunciation"
                  >
                    🔊
                  </button>
                </div>
                <p className="text-[12px] text-[#66736F] mt-1 italic">/{selected.pronunciation}/</p>
                <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#001028]/10 text-[#001028]">
                  {selected.partOfSpeech}
                </span>
              </div>

              {/* Exam Tag */}
              <div
                className="inline-block text-[10px] font-black px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: examColor(selected.examBody) }}
              >
                {selected.examBody}
              </div>

              {/* Definition */}
              <div className="rounded-[12px] bg-[#001028]/6 p-3">
                <p className="text-[10px] font-black text-[#001028]/60 uppercase tracking-wider mb-1">Definition</p>
                <p className="text-[13px] text-[#10201D] leading-relaxed">{selected.definition}</p>
              </div>

              {/* Example */}
              <div className="rounded-[12px] bg-amber-50 border border-amber-100 p-3">
                <p className="text-[10px] font-black text-amber-700 uppercase tracking-wider mb-1">Example Sentence</p>
                <p className="text-[13px] text-[#10201D] italic leading-relaxed">"{selected.example}"</p>
              </div>

              {/* Exam Usage */}
              <div className="rounded-[12px] border border-[#E4EAE8] bg-white p-3">
                <p className="text-[10px] font-black text-[#66736F] uppercase tracking-wider mb-1">Exam Relevance</p>
                <p className="text-[12px] text-[#10201D] leading-relaxed">{selected.examUsage}</p>
              </div>

              {/* Synonyms */}
              <div>
                <p className="text-[10px] font-black text-[#66736F] uppercase tracking-wider mb-1.5">Synonyms</p>
                <div className="flex flex-wrap gap-1.5">
                  {selected.synonyms.map(s => (
                    <span key={s} className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Antonyms */}
              <div>
                <p className="text-[10px] font-black text-[#66736F] uppercase tracking-wider mb-1.5">Antonyms</p>
                <div className="flex flex-wrap gap-1.5">
                  {selected.antonyms.map(a => (
                    <span key={a} className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-50 text-red-700 border border-red-200">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <span className="text-4xl mb-3">📖</span>
              <p className="text-[13px] font-bold text-[#10201D]">Select a word to study</p>
              <p className="text-[11px] text-[#66736F] mt-1">Tap any word on the left</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
