import React, { useState, useEffect, useRef } from 'react';
import { MorningTeaItem } from '../../data/morningTeaData';

interface MorningTeaVideoPlayerProps {
  item: MorningTeaItem;
  subject: string;
  editionTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const MorningTeaVideoPlayer: React.FC<MorningTeaVideoPlayerProps> = ({
  item,
  subject,
  editionTitle,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasNext = false,
  hasPrev = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [aspectMode, setAspectMode] = useState<'landscape' | 'portrait'>('landscape');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedAtRef = useRef<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  // Total duration of each concept animation clip in seconds
  const DURATION = 9.0;

  // Initialize Web Audio Context
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Synthesized Sound Effects for video animations
  const playSfx = (type: 'whoosh' | 'stamp' | 'chime' | 'alarm' | 'sparkle') => {
    if (!audioEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'whoosh') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(450, now);
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.25);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'stamp') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(30, now + 0.2);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'chime') {
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.12, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.35);
        });
      } else if (type === 'alarm') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, now);
        osc.frequency.setValueAtTime(660, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.2);
      } else if (type === 'sparkle') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1046.5, now);
        osc.frequency.exponentialRampToValueAtTime(2093, now + 0.18);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    } catch (e) {
      // Audio autoplay or permissions ignored
    }
  };

  // Synchronized voiceover
  const triggerVoiceover = () => {
    if (!audioEnabled) return;
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const text = `${item.phrase}. Meaning: ${item.meaning}. Exam Example: ${item.example}`;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0 * playbackSpeed;
        utterance.pitch = 1.05;
        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }
    } catch (e) {
      // ignore
    }
  };

  // Stop speech when closing or changing items
  const stopVoiceover = () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {
      // ignore
    }
  };

  // Reset & trigger voiceover whenever item changes
  useEffect(() => {
    if (isOpen) {
      setCurrentTime(0);
      pausedAtRef.current = 0;
      startTimeRef.current = null;
      setIsPlaying(true);
      if (audioEnabled) {
        triggerVoiceover();
      }
    }
    return () => {
      stopVoiceover();
    };
  }, [item.id, isOpen]);

  // Handle Play/Pause
  const handleTogglePlay = () => {
    if (isPlaying) {
      pausedAtRef.current = currentTime;
      setIsPlaying(false);
      stopVoiceover();
    } else {
      startTimeRef.current = null;
      setIsPlaying(true);
      if (audioEnabled && currentTime < 1.0) {
        triggerVoiceover();
      }
    }
  };

  const handleReplay = () => {
    setCurrentTime(0);
    pausedAtRef.current = 0;
    startTimeRef.current = null;
    setIsPlaying(true);
    triggerVoiceover();
    playSfx('whoosh');
  };

  // ==========================================
  // CANVAS MOTION GRAPHICS SCENE RENDERER
  // ==========================================
  const renderFrame = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    ctx.clearRect(0, 0, width, height);

    const phraseLower = item.phrase.toLowerCase().trim();

    // 1. Cinematic Background Gradient (Classroom Board / Modern Emerald Slate)
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#041712');
    bgGrad.addColorStop(0.5, '#07251D');
    bgGrad.addColorStop(1, '#0A3328');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Subtle animated grid / particle ambiance
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Floating glowing dust motes
    for (let i = 0; i < 16; i++) {
      const px = ((Math.sin(i * 47 + t * 0.4) * 0.5 + 0.5) * width);
      const py = ((i * 35 + t * 25) % height);
      ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 214, 0, 0.18)' : 'rgba(167, 243, 208, 0.12)';
      ctx.beginPath();
      ctx.arc(px, py, (i % 3) + 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. Top Header HUD Bar
    ctx.save();
    // Badge pill: Morning Tea Live Video
    const badgeW = 210;
    const badgeH = 28;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.strokeStyle = 'rgba(255, 214, 0, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(20, 16, badgeW, badgeH, 14);
    ctx.fill();
    ctx.stroke();

    ctx.font = 'bold 11px sans-serif';
    ctx.fillStyle = '#FFD600';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚡ STUDYPLUG VIDEO DRILL', 34, 30);

    // Subject & ID in top right
    ctx.textAlign = 'right';
    ctx.font = 'bold 12px sans-serif';
    ctx.fillStyle = '#A7F3D0';
    ctx.fillText(`${subject} • Item #${item.id}`, width - 20, 30);
    ctx.restore();

    // 3. Main Center Stage: Animated Conceptual Demonstration
    const stageY = height * 0.42;

    // --- SCENE A: "Turn up" (Arrive / Show Up) ---
    if (phraseLower.includes('turn up') || phraseLower.includes('show up')) {
      const stageP = Math.min(1.0, t / 4.0);

      // Draw clock on left
      const clockX = width * 0.28;
      const clockY = stageY;
      const clockRadius = Math.min(width, height) * 0.14;

      ctx.save();
      ctx.strokeStyle = '#FFD600';
      ctx.fillStyle = '#061D16';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(clockX, clockY, clockRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Clock tick marks
      for (let a = 0; a < 12; a++) {
        const rad = (a * Math.PI) / 6;
        const x1 = clockX + Math.cos(rad) * (clockRadius - 8);
        const y1 = clockY + Math.sin(rad) * (clockRadius - 8);
        const x2 = clockX + Math.cos(rad) * (clockRadius - 3);
        const y2 = clockY + Math.sin(rad) * (clockRadius - 3);
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Fast spinning minute hand
      const handAngle = t * Math.PI * 3.5;
      ctx.strokeStyle = '#FF4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(clockX, clockY);
      ctx.lineTo(clockX + Math.cos(handAngle) * (clockRadius * 0.7), clockY + Math.sin(handAngle) * (clockRadius * 0.7));
      ctx.stroke();

      // Hour hand
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(clockX, clockY);
      ctx.lineTo(clockX + Math.cos(handAngle * 0.1) * (clockRadius * 0.45), clockY + Math.sin(handAngle * 0.1) * (clockRadius * 0.45));
      ctx.stroke();

      ctx.fillStyle = '#FFD600';
      ctx.beginPath();
      ctx.arc(clockX, clockY, 4, 0, Math.PI * 2);
      ctx.fill();

      // Clock subtext
      ctx.textAlign = 'center';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillStyle = '#BBF7D0';
      ctx.fillText('⏳ 30 Mins Later...', clockX, clockY + clockRadius + 22);
      ctx.restore();

      // Animated Character sprinting into view from the right
      const targetCharX = width * 0.68;
      const charStartX = width + 80;
      const charX = charStartX - (charStartX - targetCharX) * Math.min(1.0, Math.pow(stageP, 0.7));
      const charY = stageY + 20;

      ctx.save();
      // Motion blur trails
      if (stageP < 0.95) {
        ctx.fillStyle = 'rgba(255, 214, 0, 0.2)';
        ctx.fillRect(charX + 20, charY - 30, 40, 60);
      }

      // Character body (Student running with backpack)
      const bob = Math.sin(t * 16) * 6;
      ctx.fillStyle = '#FFFFFF';
      // Head
      ctx.beginPath();
      ctx.arc(charX, charY - 45 + bob, 15, 0, Math.PI * 2);
      ctx.fill();

      // Cap / hair
      ctx.fillStyle = '#FFD600';
      ctx.beginPath();
      ctx.arc(charX, charY - 50 + bob, 14, Math.PI, Math.PI * 2);
      ctx.fill();

      // Torso
      ctx.strokeStyle = '#34D399';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(charX, charY - 30 + bob);
      ctx.lineTo(charX, charY + 5 + bob);
      ctx.stroke();

      // Backpack
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.roundRect(charX - 22, charY - 30 + bob, 16, 26, 6);
      ctx.fill();

      // Waving hand
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 5;
      const armWave = Math.sin(t * 12) * 15;
      ctx.beginPath();
      ctx.moveTo(charX, charY - 20 + bob);
      ctx.lineTo(charX + 25, charY - 35 + bob + armWave);
      ctx.stroke();

      // Legs running
      const legOffset = Math.sin(t * 18) * 16;
      ctx.beginPath();
      ctx.moveTo(charX, charY + 5 + bob);
      ctx.lineTo(charX - 15 - legOffset, charY + 38);
      ctx.moveTo(charX, charY + 5 + bob);
      ctx.lineTo(charX + 15 + legOffset, charY + 38);
      ctx.stroke();

      // Speech bubble: "I TURNED UP!"
      if (t > 1.2) {
        const bubbleX = charX + 15;
        const bubbleY = charY - 80;
        ctx.fillStyle = '#FFD600';
        ctx.strokeStyle = '#002B24';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(bubbleX - 10, bubbleY - 18, 120, 36, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#002B24';
        ctx.font = '900 13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🎉 I JUST TURNED UP!', bubbleX + 50, bubbleY);
      }
      ctx.restore();
    }
    // --- SCENE B: "Break into" (Forceful illegal entry) ---
    else if (phraseLower.includes('break into') || phraseLower.includes('burgl')) {
      const stageP = Math.min(1.0, t / 3.5);

      // Building wall & Vault door
      const doorX = width * 0.58;
      const doorY = stageY - 45;
      const doorW = width * 0.28;
      const doorH = 120;

      ctx.save();
      // Wall bricks
      ctx.fillStyle = '#112922';
      ctx.fillRect(doorX - 40, doorY - 20, doorW + 80, doorH + 40);

      // Vault / School Lab Door
      ctx.fillStyle = '#1D3B32';
      ctx.strokeStyle = '#34D399';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(doorX, doorY, doorW, doorH, 12);
      ctx.fill();
      ctx.stroke();

      // Lab sign
      ctx.fillStyle = '#0F251F';
      ctx.fillRect(doorX + 12, doorY + 12, doorW - 24, 26);
      ctx.fillStyle = '#FFD600';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🏫 COMPUTER LAB', doorX + doorW / 2, doorY + 28);

      // Padlock
      const lockBroken = t > 1.8;
      const lockX = doorX + 24;
      const lockY = doorY + 70;

      ctx.fillStyle = lockBroken ? '#EF4444' : '#FFD600';
      ctx.fillRect(lockX - 10, lockY - 8, 20, 18);
      ctx.strokeStyle = lockBroken ? '#EF4444' : '#FFD600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      if (!lockBroken) {
        ctx.arc(lockX, lockY - 10, 8, Math.PI, Math.PI * 2);
      } else {
        // Snapped shackle
        ctx.arc(lockX + 4, lockY - 14, 8, Math.PI * 0.8, Math.PI * 1.8);
      }
      ctx.stroke();

      // Red laser tripwire blinking
      const laserAlpha = Math.sin(t * 12) * 0.5 + 0.5;
      ctx.strokeStyle = `rgba(239, 68, 68, ${laserAlpha})`;
      ctx.lineWidth = 2.5;
      ctx.setLineDash([8, 4]);
      ctx.beginPath();
      ctx.moveTo(doorX - 30, doorY + 65);
      ctx.lineTo(doorX + doorW + 20, doorY + 65);
      ctx.stroke();
      ctx.setLineDash([]);

      // Burglar / Shadow sneaking from left
      const burglarX = width * 0.22 + Math.min(width * 0.16, t * 50);
      const burglarY = stageY + 30;

      // Sneaky shadow
      ctx.fillStyle = '#060D0A';
      ctx.beginPath();
      ctx.arc(burglarX, burglarY - 45, 14, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(burglarX, burglarY - 30);
      ctx.lineTo(burglarX + 10, burglarY);
      ctx.lineTo(burglarX + 25, burglarY + 25);
      ctx.stroke();

      // Crowbar
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(burglarX + 8, burglarY - 15);
      ctx.lineTo(burglarX + 32, burglarY - 8);
      ctx.stroke();

      if (lockBroken) {
        // Alarm Siren Alert Badge
        ctx.fillStyle = 'rgba(239, 68, 68, 0.95)';
        ctx.beginPath();
        ctx.roundRect(width * 0.5 - 110, doorY - 40, 220, 32, 10);
        ctx.fill();
        ctx.font = '900 12px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.textAlign = 'center';
        ctx.fillText('🚨 FORCEFUL ILLEGAL ENTRY!', width * 0.5, doorY - 20);
      }
      ctx.restore();
    }
    // --- SCENE C: "Break off" (Suddenly stop/end) ---
    else if (phraseLower.includes('break off')) {
      const crackProgress = Math.min(1.0, Math.max(0, (t - 1.2) * 1.5));
      const midX = width * 0.5;

      ctx.save();
      // Left handshake side
      const leftShift = -crackProgress * 30;
      ctx.fillStyle = '#001028';
      ctx.strokeStyle = '#FFD600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(midX - 160 + leftShift, stageY - 50, 140, 90, 16);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.fillText('NATION A 🇳🇬', midX - 90 + leftShift, stageY - 15);
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#A7F3D0';
      ctx.fillText('Peace Talks', midX - 90 + leftShift, stageY + 12);

      // Right handshake side
      const rightShift = crackProgress * 30;
      ctx.fillStyle = '#001028';
      ctx.strokeStyle = '#FFD600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(midX + 20 + rightShift, stageY - 50, 140, 90, 16);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold 14px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.fillText('NATION B 🌍', midX + 90 + rightShift, stageY - 15);
      ctx.font = '11px sans-serif';
      ctx.fillStyle = '#A7F3D0';
      ctx.fillText('Diplomacy', midX + 90 + rightShift, stageY + 12);

      // Lightning crack separating them
      if (t > 1.2) {
        ctx.strokeStyle = '#EF4444';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(midX, stageY - 70);
        ctx.lineTo(midX - 12, stageY - 20);
        ctx.lineTo(midX + 15, stageY + 10);
        ctx.lineTo(midX - 10, stageY + 50);
        ctx.stroke();

        ctx.fillStyle = '#EF4444';
        ctx.font = '900 13px sans-serif';
        ctx.fillText('⚡ TALKS ENDED SUDDENLY!', midX, stageY + 75);
      }
      ctx.restore();
    }
    // --- SCENE D: "Bring forward" (Move to earlier time) ---
    else if (phraseLower.includes('bring forward')) {
      ctx.save();
      const midX = width * 0.5;

      // Original Date: Friday 25th
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.strokeStyle = '#94A3B8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(midX + 40, stageY - 55, 120, 100, 14);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#EF4444';
      ctx.fillRect(midX + 40, stageY - 55, 120, 26);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('LATER DATE', midX + 100, stageY - 38);

      ctx.font = '900 28px sans-serif';
      ctx.fillStyle = '#94A3B8';
      ctx.fillText('FRI 25', midX + 100, stageY + 12);

      // Strikethrough
      ctx.strokeStyle = '#EF4444';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(midX + 45, stageY + 10);
      ctx.lineTo(midX + 155, stageY + 10);
      ctx.stroke();

      // Animated Arrow pointing LEFT (Earlier)
      const arrowShift = Math.sin(t * 8) * 10;
      ctx.fillStyle = '#FFD600';
      ctx.beginPath();
      ctx.moveTo(midX + 20 + arrowShift, stageY - 10);
      ctx.lineTo(midX - 15 + arrowShift, stageY - 10);
      ctx.lineTo(midX - 15 + arrowShift, stageY - 24);
      ctx.lineTo(midX - 45 + arrowShift, stageY);
      ctx.lineTo(midX - 15 + arrowShift, stageY + 24);
      ctx.lineTo(midX - 15 + arrowShift, stageY + 10);
      ctx.lineTo(midX + 20 + arrowShift, stageY + 10);
      ctx.closePath();
      ctx.fill();

      // New Earlier Date: Tuesday 22nd
      ctx.fillStyle = '#062B20';
      ctx.strokeStyle = '#FFD600';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(midX - 170, stageY - 60, 120, 110, 14);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#10B981';
      ctx.fillRect(midX - 170, stageY - 60, 120, 28);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('EARLIER DATE ✔', midX - 110, stageY - 42);

      ctx.font = '900 30px sans-serif';
      ctx.fillStyle = '#FFD600';
      ctx.fillText('TUE 22', midX - 110, stageY + 12);

      ctx.font = 'bold 11px sans-serif';
      ctx.fillStyle = '#A7F3D0';
      ctx.fillText('Physics Mock', midX - 110, stageY + 34);

      ctx.font = '900 13px sans-serif';
      ctx.fillStyle = '#FFD600';
      ctx.fillText('⬅ BROUGHT FORWARD = MOVED EARLIER', midX, stageY + 75);
      ctx.restore();
    }
    // --- SCENE E: "Call off" (Cancel completely) ---
    else if (phraseLower.includes('call off')) {
      ctx.save();
      const midX = width * 0.5;

      // Event Card
      ctx.fillStyle = '#0B241C';
      ctx.strokeStyle = '#34D399';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(midX - 140, stageY - 60, 280, 110, 16);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold 13px sans-serif';
      ctx.fillStyle = '#A7F3D0';
      ctx.textAlign = 'center';
      ctx.fillText('📢 PLANNED ASUU WARNING STRIKE', midX, stageY - 28);

      ctx.font = '12px sans-serif';
      ctx.fillStyle = '#E2ECE7';
      ctx.fillText('Scheduled: Monday 8:00 AM', midX, stageY - 4);

      // Huge Red Rubber Stamp Slams Down!
      if (t > 1.2) {
        const stampScale = Math.max(1.0, 3.0 - (t - 1.2) * 8);
        ctx.save();
        ctx.translate(midX, stageY + 10);
        ctx.rotate(-0.15);
        ctx.scale(stampScale, stampScale);

        ctx.strokeStyle = '#EF4444';
        ctx.fillStyle = 'rgba(239, 68, 68, 0.2)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.roundRect(-110, -25, 220, 50, 12);
        ctx.fill();
        ctx.stroke();

        ctx.font = '900 24px sans-serif';
        ctx.fillStyle = '#EF4444';
        ctx.fillText('❌ CALLED OFF', 0, 8);
        ctx.restore();

        ctx.font = '900 13px sans-serif';
        ctx.fillStyle = '#FFD600';
        ctx.fillText('CALLED OFF = CANCELLED COMPLETELY (Not Postponed)', midX, stageY + 80);
      }
      ctx.restore();
    }
    // --- SCENE F: Formula / Physics / Chemistry / General Kinetic Scene ---
    else {
      // Dynamic Kinetic Animated Blackboard Stage
      ctx.save();
      const midX = width * 0.5;
      const bW = width * 0.85;
      const bH = 130;
      const bX = (width - bW) / 2;
      const bY = stageY - bH / 2;

      // Wooden Frame
      ctx.fillStyle = '#C4823F';
      ctx.beginPath();
      ctx.roundRect(bX - 6, bY - 6, bW + 12, bH + 12, 16);
      ctx.fill();

      // Chalkboard slate
      ctx.fillStyle = '#06241B';
      ctx.beginPath();
      ctx.roundRect(bX, bY, bW, bH, 12);
      ctx.fill();

      // Chalk text typing effect
      const phraseChars = item.phrase.length;
      const visibleCount = Math.min(phraseChars, Math.floor(t * 12));
      const typedText = item.phrase.substring(0, visibleCount);

      ctx.textAlign = 'center';
      ctx.font = '900 24px sans-serif';
      ctx.fillStyle = '#FFD600';
      ctx.fillText(`“${typedText}”`, midX, bY + 38);

      // Meaning reveal
      if (t > 1.2) {
        ctx.font = 'bold 15px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`Meaning: ${item.meaning}`, midX, bY + 72);
      }

      // Animated concept icons
      const pulse = 1 + Math.sin(t * 6) * 0.08;
      ctx.save();
      ctx.translate(midX, bY + 104);
      ctx.scale(pulse, pulse);
      ctx.font = '13px sans-serif';
      ctx.fillStyle = '#34D399';
      ctx.fillText('✨ High-Yield UTME Exam Drop', 0, 0);
      ctx.restore();

      ctx.restore();
    }

    // 4. Bottom Kinetic Banner: Phrasal Verb & Meaning Big Highlight Card
    ctx.save();
    const botCardY = height * 0.70;
    const botCardW = width * 0.92;
    const botCardH = height * 0.24;
    const botCardX = (width - botCardW) / 2;

    // Glowing container
    ctx.fillStyle = 'rgba(0, 35, 27, 0.9)';
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(botCardX, botCardY, botCardW, botCardH, 18);
    ctx.fill();
    ctx.stroke();

    // Large Title
    ctx.textAlign = 'left';
    ctx.font = '900 20px sans-serif';
    ctx.fillStyle = '#FFD600';
    ctx.fillText(`${item.phrase}`, botCardX + 20, botCardY + 28);

    // Meaning
    ctx.font = 'bold 13.5px sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(`Meaning: ${item.meaning}`, botCardX + 20, botCardY + 52);

    // Exam Example quote with gold quotation marks
    ctx.font = 'italic 12px sans-serif';
    ctx.fillStyle = '#A7F3D0';
    const exampleSnippet = item.example.length > 70 ? item.example.substring(0, 68) + '...' : item.example;
    ctx.fillText(`“${exampleSnippet}”`, botCardX + 20, botCardY + 74);

    // Progress timeline at the very bottom
    const progW = botCardW - 40;
    const progH = 6;
    const progX = botCardX + 20;
    const progY = botCardY + botCardH - 16;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.roundRect(progX, progY, progW, progH, 3);
    ctx.fill();

    const currentProgW = (t / DURATION) * progW;
    ctx.fillStyle = '#FFD600';
    ctx.beginPath();
    ctx.roundRect(progX, progY, Math.max(6, currentProgW), progH, 3);
    ctx.fill();

    ctx.restore();
  };

  // Main Animation Loop
  useEffect(() => {
    if (!isOpen) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const loop = (now: number) => {
      if (!isPlaying) {
        animationFrameRef.current = requestAnimationFrame(loop);
        return;
      }

      if (!startTimeRef.current) {
        startTimeRef.current = now - (pausedAtRef.current / playbackSpeed) * 1000;
      }

      const elapsed = ((now - startTimeRef.current) / 1000) * playbackSpeed;

      if (elapsed >= DURATION) {
        // Loop back to start or auto-advance
        startTimeRef.current = now;
        pausedAtRef.current = 0;
        setCurrentTime(0);
        if (audioEnabled) {
          triggerVoiceover();
        }
      } else {
        setCurrentTime(elapsed);
      }

      renderFrame(ctx, canvas.width, canvas.height, elapsed);
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isOpen, isPlaying, playbackSpeed, item.id, audioEnabled, aspectMode]);

  // Export / Download Animated Clip (.webm)
  const handleExportVideo = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      setIsExporting(true);
      setExportProgress(0);

      const stream = canvas.captureStream(30);
      recordedChunksRef.current = [];
      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          recordedChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `StudyPlug_${item.phrase.replace(/\s+/g, '_')}_Animation.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsExporting(false);
      };

      mediaRecorderRef.current = recorder;
      recorder.start();

      // Reset animation to 0 and record one full loop
      setCurrentTime(0);
      pausedAtRef.current = 0;
      startTimeRef.current = null;
      setIsPlaying(true);

      const checkInterval = setInterval(() => {
        setExportProgress((prev) => {
          if (prev >= 95) {
            clearInterval(checkInterval);
            if (recorder.state === 'recording') recorder.stop();
            return 100;
          }
          return prev + 12;
        });
      }, 1000);
    } catch (e: any) {
      alert('Could not export video on this browser: ' + e.message);
      setIsExporting(false);
    }
  };

  if (!isOpen) return null;

  const canvasWidth = aspectMode === 'landscape' ? 680 : 420;
  const canvasHeight = aspectMode === 'landscape' ? 400 : 560;

  return (
    <div className="fixed inset-0 z-60 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#041712] border-2 border-[#FFD600]/80 rounded-[28px] max-w-2xl w-full text-white shadow-2xl flex flex-col overflow-hidden my-auto max-h-[96vh]">
        {/* Top Header Bar */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#001830] via-[#001028] to-[#0A261D] border-b border-emerald-800/80 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#FFD600] text-[#001830] flex items-center justify-center font-black text-sm shadow">
              🎬
            </span>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#FFD600] text-[#002820] px-2 py-0.5 rounded-full">
                  Video Animation
                </span>
                <span className="text-xs font-bold text-emerald-200">
                  {subject}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white tracking-tight mt-0.5">
                {item.phrase} — Animated Video Drill
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setAspectMode(aspectMode === 'landscape' ? 'portrait' : 'landscape')}
              className="p-1.5 px-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-emerald-200 transition cursor-pointer touch-press hidden sm:flex items-center space-x-1"
              title="Toggle Aspect Ratio"
            >
              <span>{aspectMode === 'landscape' ? '📱 Portrait' : '📺 Landscape'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm transition cursor-pointer touch-press"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Video Canvas Stage */}
        <div className="p-3 sm:p-4 flex flex-col items-center justify-center bg-black/60 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-emerald-700/60 max-w-full">
            <canvas
              ref={canvasRef}
              width={canvasWidth}
              height={canvasHeight}
              className="w-full h-auto max-h-[50vh] sm:max-h-[56vh] object-contain block"
            />

            {/* Exporting Indicator */}
            {isExporting && (
              <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center space-y-2">
                <span className="text-2xl animate-spin">⏳</span>
                <p className="text-xs font-black text-[#FFD600]">
                  Generating High-Res Video... {exportProgress}%
                </p>
                <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-[#FFD600] transition-all" style={{ width: `${exportProgress}%` }} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Player Controls Bar */}
        <div className="p-3.5 sm:p-4 bg-[#07241C] border-t border-emerald-900/80 flex flex-col space-y-3">
          {/* Timeline & Timestamp */}
          <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300/80">
            <span>{currentTime.toFixed(1)}s / {DURATION.toFixed(1)}s</span>
            <span className="text-xs font-sans font-bold text-[#FFD600]">
              {item.phrase}
            </span>
            <span>Speed: {playbackSpeed}x</span>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* Left Controls: Prev, Play/Pause, Next, Replay */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={onPrev}
                disabled={!hasPrev}
                className="p-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-white transition cursor-pointer touch-press"
                title="Previous Phrasal Verb Video"
              >
                ⏮ Prev
              </button>

              <button
                type="button"
                onClick={handleTogglePlay}
                className="p-2 px-4 rounded-xl bg-[#FFD600] hover:bg-[#FFE033] text-[#002B24] font-black text-xs shadow-md transition cursor-pointer touch-press flex items-center space-x-1"
              >
                <span>{isPlaying ? '⏸ Pause' : '▶ Play'}</span>
              </button>

              <button
                type="button"
                onClick={onNext}
                disabled={!hasNext}
                className="p-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold text-white transition cursor-pointer touch-press"
                title="Next Phrasal Verb Video"
              >
                Next ⏭
              </button>

              <button
                type="button"
                onClick={handleReplay}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-emerald-200 transition cursor-pointer touch-press"
                title="Replay from start"
              >
                🔄 Replay
              </button>
            </div>

            {/* Right Controls: Audio Mute, Speed, Export */}
            <div className="flex items-center space-x-1.5">
              <button
                type="button"
                onClick={() => {
                  setAudioEnabled(!audioEnabled);
                  if (audioEnabled) stopVoiceover();
                  else triggerVoiceover();
                }}
                className={`p-2 px-2.5 rounded-xl text-xs font-bold transition cursor-pointer touch-press flex items-center space-x-1 ${
                  audioEnabled ? 'bg-emerald-600/60 text-white' : 'bg-white/10 text-slate-400'
                }`}
                title={audioEnabled ? 'Voiceover Active' : 'Muted'}
              >
                <span>{audioEnabled ? '🔊 Audio ON' : '🔇 Muted'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  const nextSpeed = playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1;
                  setPlaybackSpeed(nextSpeed);
                }}
                className="p-2 px-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition cursor-pointer touch-press"
              >
                {playbackSpeed}x
              </button>

              <button
                type="button"
                onClick={handleExportVideo}
                disabled={isExporting}
                className="p-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs shadow transition cursor-pointer touch-press flex items-center space-x-1"
                title="Save video to share on WhatsApp status"
              >
                <span>💾 Save Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MorningTeaVideoPlayer;
