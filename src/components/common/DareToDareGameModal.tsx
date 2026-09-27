import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { Question } from '../../data/questions';
import { getBaseQuestionsForSubject, getFilteredQuestions } from '../../data/allQuestionsHub';
import { ConfettiCelebration } from './ConfettiCelebration';

// ─── Sound Synthesizer via Web Audio API (100% Offline) ─────────────────────
function playSynthSound(type: 'beep' | 'start' | 'correct' | 'wrong' | 'streak' | 'victory' | 'gameover', soundEnabled: boolean) {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    if (type === 'beep') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'start') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'correct') {
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.15, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.2);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.2);
      });
    } else if (type === 'wrong') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(240, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.22);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.22);
    } else if (type === 'streak') {
      [587.33, 739.99, 880, 1174.66].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.18, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.25);
      });
    } else if (type === 'victory') {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.2, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.35);
      });
    }
  } catch {
    // Audio contexts may be blocked before gesture, fail silently
  }
}

const DARE_SUBJECTS = [
  'Mathematics',
  'English Language',
  'Physics',
  'Chemistry',
  'Biology',
  'Economics',
  'Government',
  'Literature in English',
  'Commerce',
  'Financial Accounting',
  'Agricultural Science',
  'Civic Education',
  'Christian Religious Studies'
];

type DareMode = 'blitz' | 'survival' | 'master';

interface UserDareAnswer {
  question: Question;
  selectedOption: string;
  isCorrect: boolean;
  timeSpent: number;
}

export const DareToDareGameModal: React.FC = () => {
  const { isDareToDareOpen, closeDareToDare, dareToDareContext, selectedSubject: appSubject } = useApp();

  // Selected config
  const [selectedSubject, setSelectedSubject] = useState<string>(
    dareToDareContext?.subject || appSubject || 'Mathematics'
  );
  const [selectedMode, setSelectedMode] = useState<DareMode>(
    (dareToDareContext?.mode as DareMode) || 'blitz'
  );
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Game Phases: 'lobby' | 'countdown' | 'playing' | 'result'
  const [gamePhase, setGamePhase] = useState<'lobby' | 'countdown' | 'playing' | 'result'>('lobby');
  const [countdown, setCountdown] = useState<number>(3);

  // Active Challenge Session
  const [dareQuestions, setDareQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [totalTimeTaken, setTotalTimeTaken] = useState<number>(0);
  const [answersHistory, setAnswersHistory] = useState<UserDareAnswer[]>([]);
  const [selectedOptionForCurrent, setSelectedOptionForCurrent] = useState<string | null>(null);
  const [isAnswerGraded, setIsAnswerGraded] = useState<boolean>(false);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Timer Ref
  const timerRef = useRef<any>(null);

  // Sync incoming context
  useEffect(() => {
    if (dareToDareContext?.subject) {
      setSelectedSubject(dareToDareContext.subject);
    }
    if (dareToDareContext?.mode) {
      setSelectedMode(dareToDareContext.mode as DareMode);
    }
  }, [dareToDareContext]);

  // Reset to lobby whenever opened
  useEffect(() => {
    if (isDareToDareOpen) {
      setGamePhase('lobby');
      setShowReview(false);
      setCopiedNotification(null);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [isDareToDareOpen]);

  // Helper to normalize options
  const normalizeOptions = (q: any): { key: string; text: string }[] => {
    if (!q) return [];
    if (Array.isArray(q.options)) {
      return q.options.map((opt: any, i: number) => {
        const defaultKey = String.fromCharCode(65 + i);
        if (typeof opt === 'string') return { key: defaultKey, text: opt };
        return {
          key: (opt.key || opt.option || defaultKey).toUpperCase(),
          text: opt.text || opt.value || opt.label || ''
        };
      });
    }
    if (q.options && typeof q.options === 'object') {
      return Object.entries(q.options).map(([k, v]) => ({
        key: k.toUpperCase(),
        text: String(v)
      }));
    }
    if (q.optionsMap && typeof q.optionsMap === 'object') {
      return Object.entries(q.optionsMap).map(([k, v]) => ({
        key: k.toUpperCase(),
        text: String(v)
      }));
    }
    return [];
  };

  const getCorrectKey = (q: any): string => {
    const ans = q.correctAnswer || q.correct_option || q.answer || q.correctOption || '';
    return String(ans).trim().toUpperCase();
  };

  // Launch countdown then game
  const handleStartDare = () => {
    // 1. Gather pool of authentic questions
    let pool: Question[] = [];
    if (dareToDareContext?.topic) {
      pool = getFilteredQuestions({
        subject: selectedSubject,
        topic: dareToDareContext.topic,
        limit: 15
      });
    }
    if (!pool || pool.length === 0) {
      pool = getBaseQuestionsForSubject(selectedSubject);
    }
    // Shuffle pool
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const count = selectedMode === 'blitz' ? 5 : selectedMode === 'master' ? 10 : Math.min(15, shuffled.length);
    const selectedBatch = shuffled.slice(0, count);

    setDareQuestions(selectedBatch);
    setCurrentIdx(0);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setLives(3);
    setAnswersHistory([]);
    setSelectedOptionForCurrent(null);
    setIsAnswerGraded(false);

    const initialTime = selectedMode === 'blitz' ? 60 : selectedMode === 'master' ? 90 : 20;
    setTimeLeft(initialTime);

    // Switch to countdown
    setGamePhase('countdown');
    setCountdown(3);
    playSynthSound('beep', soundEnabled);

    const cdInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(cdInterval);
          setGamePhase('playing');
          playSynthSound('start', soundEnabled);
          return 0;
        }
        playSynthSound('beep', soundEnabled);
        return prev - 1;
      });
    }, 900);
  };

  // Main playing countdown timer
  useEffect(() => {
    if (gamePhase !== 'playing') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleGameOver('timeout');
          return 0;
        }
        return prev - 1;
      });
      setTotalTimeTaken((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gamePhase]);

  // Answer handler
  const handleSelectAnswer = (optionKey: string) => {
    if (isAnswerGraded || gamePhase !== 'playing') return;

    const currentQ = dareQuestions[currentIdx];
    if (!currentQ) return;

    const correctKey = getCorrectKey(currentQ);
    const isCorrect = optionKey.toUpperCase() === correctKey;

    setSelectedOptionForCurrent(optionKey);
    setIsAnswerGraded(true);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      // Score calculation: +100 base, +20 per streak multiplier
      const streakBonus = Math.min((newStreak - 1) * 25, 100);
      const pointsEarned = 100 + streakBonus;
      setScore((s) => s + pointsEarned);

      if (newStreak >= 3) {
        playSynthSound('streak', soundEnabled);
      } else {
        playSynthSound('correct', soundEnabled);
      }
    } else {
      setStreak(0);
      playSynthSound('wrong', soundEnabled);

      if (selectedMode === 'survival') {
        const remainingLives = lives - 1;
        setLives(remainingLives);
        if (remainingLives <= 0) {
          setTimeout(() => handleGameOver('no_lives'), 700);
          return;
        }
      }
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedOption: optionKey,
        isCorrect,
        timeSpent: 0
      }
    ]);

    // Automatically transition to next question after brief 650ms feedback pause
    setTimeout(() => {
      advanceToNextQuestion();
    }, 700);
  };

  const advanceToNextQuestion = () => {
    if (currentIdx + 1 < dareQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOptionForCurrent(null);
      setIsAnswerGraded(false);
      // In survival mode, reset 15s timer for the next question
      if (selectedMode === 'survival') {
        setTimeLeft(15);
      }
    } else {
      handleGameOver('completed');
    }
  };

  const handleGameOver = useCallback((_reason: string) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setGamePhase('result');
    playSynthSound('victory', soundEnabled);

    // Save high score locally
    try {
      const key = `sp_dare_high_${selectedSubject}`;
      const savedHigh = parseInt(localStorage.getItem(key) || '0', 10);
      if (score > savedHigh) {
        localStorage.setItem(key, String(score));
      }
    } catch {}
  }, [score, selectedSubject, soundEnabled]);

  const handleShareChallenge = () => {
    const accuracy = answersHistory.length > 0 ? Math.round((answersHistory.filter(a => a.isCorrect).length / answersHistory.length) * 100) : 0;
    const shareText = `🔥 I just scored ${score} pts in the DARE TO DARE Challenge on StudyPlug (${selectedSubject}) with ${accuracy}% accuracy! 🎯 Can you beat my score? Download & Challenge me: https://studyplug.com.ng`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareText);
      setCopiedNotification('Dare Challenge copied! Share with friends on WhatsApp & Telegram.');
      setTimeout(() => setCopiedNotification(null), 3000);
    } else {
      alert(shareText);
    }
  };

  if (!isDareToDareOpen) return null;

  const currentQ = dareQuestions[currentIdx];
  const options = currentQ ? normalizeOptions(currentQ) : [];
  const correctKey = currentQ ? getCorrectKey(currentQ) : '';
  const correctCount = answersHistory.filter((a) => a.isCorrect).length;
  const accuracy = answersHistory.length > 0 ? Math.round((correctCount / answersHistory.length) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      {/* Confetti on result */}
      {gamePhase === 'result' && accuracy >= 60 && <ConfettiCelebration trigger={true} />}

      <div className="relative w-full max-w-lg bg-[#071914] text-white rounded-[24px] border border-emerald-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header Glow Bar */}
        <div className="bg-gradient-to-r from-emerald-900 via-[#004D40] to-teal-800 px-4 py-3 flex items-center justify-between border-b border-emerald-500/20">
          <div className="flex items-center space-x-2">
            <span className="text-xl animate-bounce">⚡</span>
            <div>
              <h2 className="text-[15px] font-black text-white tracking-wide flex items-center space-x-1.5">
                <span className="text-[#FFD600]">DARE TO DARE</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-red-600/90 text-white font-extrabold uppercase tracking-wider animate-pulse">
                  HOT
                </span>
              </h2>
              <p className="text-[11px] text-emerald-200">
                {gamePhase === 'playing' ? `${selectedSubject} Challenge` : 'Rapid-Fire CBT Arena'}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs transition cursor-pointer"
              title={soundEnabled ? 'Mute Sound' : 'Enable Sound'}
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeDareToDare}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
              aria-label="Close Dare to Dare"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ─── PHASE 1: LOBBY SCREEN ─── */}
        {gamePhase === 'lobby' && (
          <div className="p-5 space-y-4 overflow-y-auto">
            {/* Blazing Hero Banner */}
            <div className="relative rounded-[18px] bg-gradient-to-br from-emerald-950 via-[#0B2A22] to-[#04130F] p-4 border border-emerald-500/30 text-center space-y-2 overflow-hidden shadow-inner">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] font-bold">
                <span>🔥</span>
                <span>NIGERIA CBT RAPID CHALLENGE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                Are You Ready to Be <span className="text-[#FFD600]">Dared?</span>
              </h3>
              <p className="text-[12.5px] text-emerald-200/90 max-w-sm mx-auto leading-relaxed">
                Test your speed, knowledge, and nerve under pressure! Conquer rapid past questions in 60 seconds.
              </p>
            </div>

            {/* Subject Selector */}
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-emerald-300 uppercase tracking-wider">
                Select Subject:
              </label>
              <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
                {DARE_SUBJECTS.map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setSelectedSubject(sub)}
                    className={`px-3 py-1.5 rounded-[10px] text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                      selectedSubject === sub
                        ? 'bg-[#16A34A] text-white shadow-md ring-2 ring-emerald-300'
                        : 'bg-white/5 text-[#A3B8B2] hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Challenge Mode Selector */}
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-emerald-300 uppercase tracking-wider">
                Choose Dare Challenge Tier:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedMode('blitz')}
                  className={`p-2.5 rounded-[14px] border text-left transition cursor-pointer flex flex-col justify-between ${
                    selectedMode === 'blitz'
                      ? 'bg-gradient-to-br from-amber-600/30 to-amber-950/60 border-amber-400 ring-1 ring-amber-400'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">⚡</span>
                  <div>
                    <h4 className="text-[12.5px] font-bold text-white">60s Blitz</h4>
                    <p className="text-[10px] text-amber-200">5 Qs • Fast Run</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMode('survival')}
                  className={`p-2.5 rounded-[14px] border text-left transition cursor-pointer flex flex-col justify-between ${
                    selectedMode === 'survival'
                      ? 'bg-gradient-to-br from-red-600/30 to-red-950/60 border-red-400 ring-1 ring-red-400'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">🔥</span>
                  <div>
                    <h4 className="text-[12.5px] font-bold text-white">Survival</h4>
                    <p className="text-[10px] text-red-200">3 Lives • Sudden Death</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedMode('master')}
                  className={`p-2.5 rounded-[14px] border text-left transition cursor-pointer flex flex-col justify-between ${
                    selectedMode === 'master'
                      ? 'bg-gradient-to-br from-emerald-600/30 to-emerald-950/60 border-emerald-400 ring-1 ring-emerald-400'
                      : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg">👑</span>
                  <div>
                    <h4 className="text-[12.5px] font-bold text-white">10-Q Master</h4>
                    <p className="text-[10px] text-emerald-200">10 Qs • JAMB/WAEC</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Launch Dare Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleStartDare}
                className="w-full py-3.5 rounded-[14px] bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-black text-[15px] shadow-lg hover:brightness-110 active:scale-[0.98] transition cursor-pointer flex items-center justify-center space-x-2 tracking-wide uppercase"
              >
                <span>🚀</span>
                <span>ACCEPT THE DARE ({selectedSubject})</span>
              </button>
            </div>
          </div>
        )}

        {/* ─── PHASE 2: 3-2-1 COUNTDOWN ─── */}
        {gamePhase === 'countdown' && (
          <div className="p-12 flex flex-col items-center justify-center space-y-4 my-auto">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center shadow-xl animate-pulse">
              <span className="text-5xl font-black text-white">{countdown}</span>
            </div>
            <div className="text-center space-y-1">
              <h3 className="text-xl font-black text-[#FFD600] tracking-wider uppercase">
                GET READY TO DARE!
              </h3>
              <p className="text-xs text-emerald-200">{selectedSubject} • Speed is everything!</p>
            </div>
          </div>
        )}

        {/* ─── PHASE 3: PLAYING ARENA ─── */}
        {gamePhase === 'playing' && currentQ && (
          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 overflow-y-auto">
            {/* Live Game HUD */}
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-[14px] bg-white/5 border border-white/10 text-xs">
              {/* Progress */}
              <div className="flex items-center space-x-1.5">
                <span className="px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200 font-bold text-[11px]">
                  Q {currentIdx + 1}/{dareQuestions.length}
                </span>
                {selectedMode === 'survival' && (
                  <div className="flex items-center text-xs">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <span key={i} className={`text-sm ${i < lives ? 'text-red-500' : 'text-gray-600 opacity-40'}`}>
                        ❤️
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Score & Streak */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 font-bold text-amber-400">
                  <span>🏆</span>
                  <span>{score} pts</span>
                </div>
                {streak > 1 && (
                  <div className="px-2 py-0.5 rounded-full bg-orange-600/90 text-white font-extrabold text-[10px] animate-pulse">
                    🔥 x{streak}
                  </div>
                )}
              </div>

              {/* Timer Bar / Countdown */}
              <div className="flex items-center space-x-1 font-mono font-bold text-sm">
                <span className={timeLeft <= 10 ? 'text-red-400 animate-ping' : 'text-emerald-300'}>
                  ⏱ {timeLeft}s
                </span>
              </div>
            </div>

            {/* Question Stem */}
            <div className="p-4 rounded-[16px] bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center space-x-2 text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                <span>{currentQ.topic || selectedSubject}</span>
                <span>•</span>
                <span>{currentQ.year || 'Exam'}</span>
              </div>
              <p className="text-[14px] sm:text-[15px] font-semibold text-white leading-relaxed">
                {currentQ.text || (currentQ as any).question_text || (currentQ as any).question}
              </p>
            </div>

            {/* Options List A, B, C, D */}
            <div className="space-y-2">
              {options.map((opt) => {
                const isSelected = selectedOptionForCurrent === opt.key;
                const isThisCorrect = isAnswerGraded && opt.key === correctKey;
                const isThisWrong = isAnswerGraded && isSelected && !isThisCorrect;

                let btnStyle = 'bg-white/10 hover:bg-white/15 border-white/10 text-white';
                let circleStyle = 'bg-white/10 text-white';

                if (isAnswerGraded) {
                  if (isThisCorrect) {
                    btnStyle = 'bg-emerald-600 border-emerald-400 text-white font-bold ring-2 ring-emerald-300';
                    circleStyle = 'bg-white text-emerald-800 font-black';
                  } else if (isThisWrong) {
                    btnStyle = 'bg-red-600 border-red-400 text-white font-bold';
                    circleStyle = 'bg-white text-red-800 font-black';
                  } else {
                    btnStyle = 'bg-white/5 border-transparent text-white/40 opacity-60';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    type="button"
                    disabled={isAnswerGraded}
                    onClick={() => handleSelectAnswer(opt.key)}
                    className={`w-full p-3 rounded-[12px] border text-left flex items-center space-x-3 transition cursor-pointer active:scale-[0.99] ${btnStyle}`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${circleStyle}`}
                    >
                      {isAnswerGraded && isThisCorrect ? '✓' : isAnswerGraded && isThisWrong ? '✕' : opt.key}
                    </span>
                    <span className="text-[13px] sm:text-[13.5px] leading-snug flex-1">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── PHASE 4: RESULT SCREEN ─── */}
        {gamePhase === 'result' && (
          <div className="p-5 space-y-4 overflow-y-auto">
            {/* Victory / Defeat Header */}
            <div className="text-center space-y-2 p-4 rounded-[18px] bg-gradient-to-b from-white/10 to-transparent border border-white/10">
              <div className="text-5xl animate-bounce">
                {accuracy >= 60 ? '🏆' : '💥'}
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {accuracy >= 60 ? 'DARE CONQUERED!' : 'DARE FAILED!'}
              </h3>
              <p className="text-xs text-emerald-200">
                {accuracy >= 80
                  ? '⚡ Unstoppable! You are a certified CBT Speed Demon!'
                  : accuracy >= 60
                  ? '🎯 Great job! You beat the clock and held your ground.'
                  : '💪 Tough round! Review the solutions and avenge your score!'}
              </p>
            </div>

            {/* Performance Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
              <div className="p-2.5 rounded-[12px] bg-white/5 border border-white/10">
                <span className="text-[10px] text-emerald-300 font-bold uppercase block">Score</span>
                <span className="text-lg font-black text-amber-400">{score} pts</span>
              </div>
              <div className="p-2.5 rounded-[12px] bg-white/5 border border-white/10">
                <span className="text-[10px] text-emerald-300 font-bold uppercase block">Accuracy</span>
                <span className="text-lg font-black text-white">{accuracy}%</span>
              </div>
              <div className="p-2.5 rounded-[12px] bg-white/5 border border-white/10">
                <span className="text-[10px] text-emerald-300 font-bold uppercase block">Max Streak</span>
                <span className="text-lg font-black text-orange-400">🔥 x{maxStreak}</span>
              </div>
              <div className="p-2.5 rounded-[12px] bg-white/5 border border-white/10">
                <span className="text-[10px] text-emerald-300 font-bold uppercase block">Answered</span>
                <span className="text-lg font-black text-white">{correctCount}/{dareQuestions.length}</span>
              </div>
            </div>

            {copiedNotification && (
              <div className="p-2 rounded-[10px] bg-emerald-600/90 text-white text-xs font-bold text-center animate-fadeIn">
                {copiedNotification}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleStartDare}
                  className="py-3 rounded-[12px] bg-[#16A34A] hover:bg-emerald-700 text-white font-bold text-[13px] shadow transition cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>🔄</span>
                  <span>Play Again</span>
                </button>

                <button
                  type="button"
                  onClick={handleShareChallenge}
                  className="py-3 rounded-[12px] bg-gradient-to-r from-amber-500 to-orange-500 hover:brightness-110 text-white font-bold text-[13px] shadow transition cursor-pointer flex items-center justify-center space-x-1.5"
                >
                  <span>📲</span>
                  <span>Dare a Friend</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowReview(!showReview)}
                className="w-full py-2.5 rounded-[12px] bg-white/10 hover:bg-white/15 text-emerald-200 text-xs font-bold transition cursor-pointer flex items-center justify-center space-x-1"
              >
                <span>{showReview ? 'Hide Solutions ▲' : 'Review Questions & Solutions ▼'}</span>
              </button>
            </div>

            {/* Expandable Review Section */}
            {showReview && (
              <div className="space-y-3 pt-2 max-h-60 overflow-y-auto pr-1">
                {answersHistory.map((item, idx) => {
                  const opts = normalizeOptions(item.question);
                  const cKey = getCorrectKey(item.question);
                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-[12px] border text-xs space-y-1.5 ${
                        item.isCorrect
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
                          : 'bg-red-950/40 border-red-500/40 text-red-100'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span>Question {idx + 1}</span>
                        <span>{item.isCorrect ? '✅ Correct (+100)' : `❌ Selected ${item.selectedOption} (Ans: ${cKey})`}</span>
                      </div>
                      <p className="text-white/90">
                        {item.question.text || (item.question as any).question_text || (item.question as any).question}
                      </p>
                      <p className="text-[11px] text-white/60">
                        <strong className="text-emerald-300">Explanation:</strong>{' '}
                        {item.question.explanation || 'Refer to the study notes for the complete working.'}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
