import React, { useState, useEffect, useRef } from 'react';

interface AdvertVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvertVideoModal: React.FC<AdvertVideoModalProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'9:16' | '16:9'>('9:16');
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingProgress, setRecordingProgress] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'studio' | 'script'>('studio');

  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const audioDestRef = useRef<MediaStreamAudioDestinationNode | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);

  const DURATION = 30; // 30 seconds

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
      audioDestRef.current = audioCtxRef.current.createMediaStreamDestination();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return { ctx: audioCtxRef.current, dest: audioDestRef.current };
  };

  const playBeatSound = (time: number) => {
    if (!audioEnabled || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const dest = audioDestRef.current || ctx.destination;

    const beatIndex = Math.floor(time / 0.6);
    const lastBeatIndex = Math.floor((time - 0.03) / 0.6);

    if (beatIndex > lastBeatIndex) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(dest);
      if (dest !== ctx.destination) gain.connect(ctx.destination);

      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.15);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.start(now);
      osc.stop(now + 0.2);

      if (beatIndex % 2 === 1) {
        const snareOsc = ctx.createOscillator();
        const snareGain = ctx.createGain();
        snareOsc.type = 'triangle';
        snareOsc.connect(snareGain);
        snareGain.connect(dest);
        if (dest !== ctx.destination) snareGain.connect(ctx.destination);

        snareOsc.frequency.setValueAtTime(220, now);
        snareGain.gain.setValueAtTime(0.12, now);
        snareGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        snareOsc.start(now);
        snareOsc.stop(now + 0.1);
      }
    }
  };

  const renderFrame = (ctx: CanvasRenderingContext2D, width: number, height: number, t: number) => {
    ctx.clearRect(0, 0, width, height);

    const deepGreen = '#0E382B';
    const darkSlate = '#071F15';
    const gold = '#FFCC00';
    const woodBorder = '#C4823F';

    if (t < 5.0) {
      const grad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width);
      grad.addColorStop(0, '#11221B');
      grad.addColorStop(1, '#050D0A');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 20; i++) {
        const px = (Math.sin(i * 99 + t * 0.8) * 0.5 + 0.5) * width;
        const py = ((i * 50 + t * 40) % height);
        ctx.fillStyle = i % 2 === 0 ? 'rgba(255, 204, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.arc(px, py, (i % 3) + 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const badgeY = height * 0.28;
      ctx.fillStyle = 'rgba(239, 68, 68, 0.18)';
      ctx.strokeStyle = '#EF4444';
      ctx.lineWidth = 3;
      const bW = width * 0.76;
      const bH = 54;
      ctx.beginPath();
      ctx.roundRect((width - bW) / 2, badgeY - bH / 2, bW, bH, 27);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold ' + Math.round(width * 0.038) + 'px sans-serif';
      ctx.fillStyle = '#FF6B6B';
      ctx.fillText('⚠️ ATTENTION JAMB 2026 CANDIDATES', width / 2, badgeY);

      ctx.font = '900 ' + Math.round(width * 0.076) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('STILL CRAMMING', width / 2, height * 0.42);

      ctx.fillStyle = '#EF4444';
      ctx.fillText('PAST QUESTIONS?', width / 2, height * 0.49);

      if (t > 1.8) {
        const pulse = 1 + Math.sin(t * 8) * 0.04;
        ctx.save();
        ctx.translate(width / 2, height * 0.62);
        ctx.scale(pulse, pulse);

        ctx.font = '900 ' + Math.round(width * 0.082) + 'px sans-serif';
        ctx.fillStyle = gold;
        ctx.fillText('STOP GUESSING.', 0, 0);

        ctx.font = '600 ' + Math.round(width * 0.04) + 'px sans-serif';
        ctx.fillStyle = '#E2ECE7';
        ctx.fillText('Understand every single step.', 0, 48);
        ctx.restore();
      }

      ctx.restore();
    }
    else if (t < 12.0) {
      const p = (t - 5.0) / 7.0;

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, darkSlate);
      grad.addColorStop(0.5, deepGreen);
      grad.addColorStop(1, '#144D3B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const iconY = height * 0.24;
      ctx.fillStyle = deepGreen;
      ctx.strokeStyle = gold;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.roundRect(width / 2 - 45, iconY - 45, 90, 90, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(width / 2, iconY - 20);
      ctx.lineTo(width / 2 + 28, iconY - 8);
      ctx.lineTo(width / 2, iconY + 4);
      ctx.lineTo(width / 2 - 28, iconY - 8);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = gold;
      ctx.beginPath();
      ctx.moveTo(width / 2 - 6, iconY - 2);
      ctx.lineTo(width / 2 + 12, iconY + 8);
      ctx.lineTo(width / 2 - 6, iconY + 18);
      ctx.closePath();
      ctx.fill();

      ctx.font = '900 ' + Math.round(width * 0.095) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('StudyPlug', width / 2, height * 0.36);

      ctx.font = 'bold ' + Math.round(width * 0.042) + 'px sans-serif';
      ctx.fillStyle = gold;
      ctx.fillText('Learn Today. Ace Tomorrow.', width / 2, height * 0.42);

      const statY = height * 0.58;
      const sW = width * 0.86;
      const sH = height * 0.19;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.strokeStyle = woodBorder;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect((width - sW) / 2, statY - sH / 2, sW, sH, 24);
      ctx.fill();
      ctx.stroke();

      const count = Math.min(18000, Math.floor(p * 24000));
      ctx.font = '900 ' + Math.round(width * 0.11) + 'px sans-serif';
      ctx.fillStyle = gold;
      ctx.fillText(count.toLocaleString() + '+', width / 2, statY - 14);

      ctx.font = 'bold ' + Math.round(width * 0.042) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('AUTHENTIC PAST QUESTIONS', width / 2, statY + 34);

      ctx.font = '600 ' + Math.round(width * 0.034) + 'px sans-serif';
      ctx.fillStyle = '#BBF7D0';
      ctx.fillText('★ 1978 – 2025 Complete Archive ★', width / 2, statY + 68);

      const badges = ['Math', 'Physics', 'English', 'Chem', 'Bio', 'Govt'];
      const badgeStartX = width * 0.08;
      const badgeGap = (width * 0.84) / badges.length;
      badges.forEach((b, idx) => {
        const bx = badgeStartX + idx * badgeGap + badgeGap / 2;
        const by = height * 0.77;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.beginPath();
        ctx.roundRect(bx - 32, by - 16, 64, 32, 12);
        ctx.fill();
        ctx.font = 'bold ' + Math.round(width * 0.028) + 'px sans-serif';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(b, bx, by);
      });

      ctx.restore();
    }
    else if (t < 21.0) {
      const p = (t - 12.0) / 9.0;

      ctx.fillStyle = '#06130E';
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.textAlign = 'center';

      ctx.font = '900 ' + Math.round(width * 0.052) + 'px sans-serif';
      ctx.fillStyle = gold;
      ctx.fillText('THE STUDYPLUG SECRET WEAPON', width / 2, height * 0.07);

      ctx.font = '600 ' + Math.round(width * 0.034) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('Authentic Classroom Board Solutions & Tips', width / 2, height * 0.11);

      const bW = width * 0.92;
      const bH = height * 0.78;
      const bX = (width - bW) / 2;
      const bY = height * 0.14;

      ctx.fillStyle = '#C4823F';
      ctx.beginPath();
      ctx.roundRect(bX, bY, bW, bH, 24);
      ctx.fill();

      ctx.fillStyle = '#0C2E20';
      ctx.beginPath();
      ctx.roundRect(bX + 10, bY + 10, bW - 20, bH - 20, 16);
      ctx.fill();

      ctx.textAlign = 'left';
      ctx.font = 'bold ' + Math.round(width * 0.034) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('🎓 StudyPlug Classroom Board', bX + 24, bY + 36);

      ctx.textAlign = 'right';
      ctx.fillStyle = gold;
      ctx.fillText('PHYSICS 2024 • Q.14', bX + bW - 24, bY + 36);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bX + 20, bY + 50);
      ctx.lineTo(bX + bW - 20, bY + 50);
      ctx.stroke();

      ctx.textAlign = 'left';
      ctx.font = 'bold ' + Math.round(width * 0.038) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('Question:', bX + 24, bY + 80);

      ctx.font = '400 ' + Math.round(width * 0.032) + 'px sans-serif';
      ctx.fillStyle = '#E2ECE7';
      ctx.fillText('Calculate the kinetic energy of a 1,200 kg car', bX + 24, bY + 110);
      ctx.fillText('traveling at a velocity of 25 m/s.', bX + 24, bY + 134);

      const fY = bY + 160;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.strokeStyle = gold;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(bX + 20, fY, bW - 40, 72, 12);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold ' + Math.round(width * 0.036) + 'px sans-serif';
      ctx.fillStyle = gold;
      ctx.fillText('⚡ Formula: K.E = ½ m v²', bX + 36, fY + 28);
      ctx.fillText('= ½ × 1200 × (25)² = 375,000 J (375 kJ)', bX + 36, fY + 54);

      const stepY = fY + 98;
      ctx.font = '600 ' + Math.round(width * 0.032) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('✔ Step 1: Identify given m = 1200 kg, v = 25 m/s', bX + 24, stepY);

      if (p > 0.35) {
        ctx.fillText('✔ Step 2: Square velocity: 25² = 625 m²/s²', bX + 24, stepY + 30);
      }
      if (p > 0.6) {
        ctx.fillStyle = '#4ADE80';
        ctx.fillText('✔ Step 3: Multiply: ½ × 1200 × 625 = 375 kJ [Option C]', bX + 24, stepY + 60);
      }

      const tipY = bY + bH - 74;
      ctx.fillStyle = 'rgba(255, 204, 0, 0.15)';
      ctx.strokeStyle = gold;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(bX + 20, tipY, bW - 40, 56, 10);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold ' + Math.round(width * 0.03) + 'px sans-serif';
      ctx.fillStyle = gold;
      ctx.fillText('💡 Pro Tip: When speed doubles, K.E quadruples (4x)!', bX + 32, tipY + 34);

      ctx.restore();
    }
    else if (t < 26.0) {
      const p = (t - 21.0) / 5.0;

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, '#0E382B');
      grad.addColorStop(1, '#061A13');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.textAlign = 'center';

      ctx.font = '900 ' + Math.round(width * 0.065) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('PRACTICE LIKE THE REAL EXAM', width / 2, height * 0.12);

      ctx.font = 'bold ' + Math.round(width * 0.038) + 'px sans-serif';
      ctx.fillStyle = gold;
      ctx.fillText('Real CBT Timers • Instant Scoring • Complete Analytics', width / 2, height * 0.17);

      const cardW = width * 0.86;
      const cardH = height * 0.58;
      const cardX = (width - cardW) / 2;
      const cardY = height * 0.23;

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, 28);
      ctx.fill();

      ctx.fillStyle = deepGreen;
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, 80, [28, 28, 0, 0]);
      ctx.fill();

      ctx.font = 'bold ' + Math.round(width * 0.042) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('🏆 UTME Mock Result', width / 2, cardY + 48);

      const circY = cardY + 190;
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.arc(width / 2, circY, 70, 0, Math.PI * 2);
      ctx.stroke();

      const animatedScore = Math.min(345, Math.floor(p * 450));
      ctx.font = '900 ' + Math.round(width * 0.11) + 'px sans-serif';
      ctx.fillStyle = '#0E382B';
      ctx.fillText(animatedScore.toString(), width / 2, circY - 6);

      ctx.font = 'bold ' + Math.round(width * 0.036) + 'px sans-serif';
      ctx.fillStyle = '#64748B';
      ctx.fillText('OUT OF 400', width / 2, circY + 30);

      ctx.fillStyle = '#FEF3C7';
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(width / 2 - 120, cardY + 290, 240, 44, 22);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold ' + Math.round(width * 0.034) + 'px sans-serif';
      ctx.fillStyle = '#92400E';
      ctx.fillText('★ TOP 1% SCHOLAR ★', width / 2, cardY + 318);

      ctx.restore();
    }
    else {
      ctx.fillStyle = darkSlate;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 30; i++) {
        const angle = (i * Math.PI * 2) / 30;
        const dist = ((t - 26) * 160) % (width * 0.6);
        const fx = width / 2 + Math.cos(angle) * dist;
        const fy = height * 0.35 + Math.sin(angle) * dist;
        ctx.fillStyle = i % 2 === 0 ? gold : '#FFFFFF';
        ctx.beginPath();
        ctx.arc(fx, fy, (i % 3) + 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      ctx.font = '900 ' + Math.round(width * 0.11) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('StudyPlug', width / 2, height * 0.32);

      ctx.font = 'bold ' + Math.round(width * 0.048) + 'px sans-serif';
      ctx.fillStyle = gold;
      ctx.fillText('Learn Today. Ace Tomorrow.', width / 2, height * 0.40);

      const pulse = 1 + Math.sin(t * 10) * 0.03;
      ctx.save();
      ctx.translate(width / 2, height * 0.58);
      ctx.scale(pulse, pulse);

      const btnW = width * 0.82;
      const btnH = 80;
      ctx.fillStyle = gold;
      ctx.beginPath();
      ctx.roundRect(-btnW / 2, -btnH / 2, btnW, btnH, 40);
      ctx.fill();

      ctx.font = '900 ' + Math.round(width * 0.055) + 'px sans-serif';
      ctx.fillStyle = '#071F15';
      ctx.fillText('PRACTICE FOR FREE NOW', 0, 0);
      ctx.restore();

      ctx.font = '900 ' + Math.round(width * 0.065) + 'px sans-serif';
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText('studyplug.com.ng', width / 2, height * 0.74);

      ctx.font = '500 ' + Math.round(width * 0.034) + 'px sans-serif';
      ctx.fillStyle = '#A7F3D0';
      ctx.fillText('Works on Mobile & Laptop • Online & Offline', width / 2, height * 0.81);

      ctx.restore();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    startTimeRef.current = performance.now();

    const loop = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;

      let elapsed = (now - startTimeRef.current) / 1000;
      if (elapsed > DURATION) {
        if (isRecording) {
          stopRecording();
          return;
        }
        startTimeRef.current = now;
        elapsed = 0;
      }

      setCurrentTime(elapsed);
      if (isRecording) {
        setRecordingProgress(Math.round((elapsed / DURATION) * 100));
      }

      playBeatSound(elapsed);
      renderFrame(ctx, canvas.width, canvas.height, elapsed);

      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isOpen, aspectRatio, isRecording, audioEnabled]);

  const startRecording = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      const { dest } = getAudioContext();
      const videoStream = canvas.captureStream(30);

      let combinedStream: MediaStream;
      if (dest && dest.stream.getAudioTracks().length > 0) {
        combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...dest.stream.getAudioTracks()
        ]);
      } else {
        combinedStream = videoStream;
      }

      recordedChunksRef.current = [];
      const options = { mimeType: 'video/webm;codecs=vp9,opus' };
      const recorder = new MediaRecorder(combinedStream, options);

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
        a.download = `StudyPlug_Advert_${aspectRatio === '9:16' ? 'Reels_TikTok' : 'Landscape'}.webm`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsRecording(false);
      };

      mediaRecorderRef.current = recorder;
      recorder.start(250);

      startTimeRef.current = performance.now();
      setIsRecording(true);
      setRecordingProgress(0);
    } catch (err: any) {
      alert('Recording error: ' + err.message);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
  };

  if (!isOpen) return null;

  const canvasWidth = aspectRatio === '9:16' ? 540 : 960;
  const canvasHeight = aspectRatio === '9:16' ? 960 : 540;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-5xl w-full text-white shadow-2xl overflow-hidden my-auto">
        <div className="px-6 py-4 bg-gradient-to-r from-[#071F15] via-[#0E382B] to-[#144D3B] border-b border-emerald-900/60 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFCC00] text-[#0E382B] flex items-center justify-center font-black text-xl shadow-lg">
              🎬
            </div>
            <div>
              <h2 className="text-lg font-black text-white flex items-center space-x-2">
                <span>StudyPlug Commercial Advert Studio</span>
                <span className="bg-[#FFCC00] text-[#0A241B] text-[10px] font-black px-2 py-0.5 rounded-full">
                  1080p EXPORT
                </span>
              </h2>
              <p className="text-xs text-emerald-200/80">
                Animate, customize, and export ready-to-post advert videos for TikTok, Instagram Reels, Status & YouTube
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-6 pt-3 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={() => setActiveTab('studio')}
              className={`pb-3 text-xs font-bold transition border-b-2 cursor-pointer ${
                activeTab === 'studio' ? 'border-[#FFCC00] text-[#FFCC00]' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              🎥 Animated Video Studio
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('script')}
              className={`pb-3 text-xs font-bold transition border-b-2 cursor-pointer ${
                activeTab === 'script' ? 'border-[#FFCC00] text-[#FFCC00]' : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              📝 Viral Voiceover Scripts (30s & 60s)
            </button>
          </div>

          {activeTab === 'studio' && (
            <div className="flex items-center space-x-2 pb-2">
              <span className="text-[11px] text-slate-400">Format:</span>
              <button
                type="button"
                onClick={() => setAspectRatio('9:16')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  aspectRatio === '9:16' ? 'bg-[#FFCC00] text-[#0A241B]' : 'bg-slate-800 text-slate-300'
                }`}
              >
                9:16 Vertical (Reels / TikTok / Status)
              </button>
              <button
                type="button"
                onClick={() => setAspectRatio('16:9')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                  aspectRatio === '16:9' ? 'bg-[#FFCC00] text-[#0A241B]' : 'bg-slate-800 text-slate-300'
                }`}
              >
                16:9 Landscape (YouTube / Facebook)
              </button>
            </div>
          )}
        </div>

        <div className="p-6">
          {activeTab === 'studio' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 flex flex-col items-center justify-center">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C4823F]/60 bg-black flex items-center justify-center"
                  style={{
                    width: aspectRatio === '9:16' ? '290px' : '480px',
                    height: aspectRatio === '9:16' ? '515px' : '270px'
                  }}
                >
                  <canvas
                    ref={canvasRef}
                    width={canvasWidth}
                    height={canvasHeight}
                    className="w-full h-full object-contain"
                  />

                  {isRecording && (
                    <div className="absolute top-3 left-3 flex items-center space-x-2 bg-red-600/90 text-white text-[11px] font-black px-3 py-1 rounded-full animate-pulse shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      <span>REC {recordingProgress}%</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white font-mono text-[11px] px-2.5 py-1 rounded-lg">
                    {currentTime.toFixed(1)}s / {DURATION}s
                  </div>
                </div>

                <div className="w-full max-w-md mt-4 flex items-center space-x-3">
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#10B981] to-[#FFCC00] transition-all"
                      style={{ width: `${(currentTime / DURATION) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5 text-left">
                <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                    <span>⚡ Commercial Breakdown (30s)</span>
                  </h3>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span>00-05s: The Hook</span>
                      <span className="text-red-400 font-bold">Stop Guessing Past Questions!</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span>05-12s: StudyPlug Intro</span>
                      <span className="text-[#FFCC00] font-bold">18,000+ Questions (1978–2025)</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span>12-21s: Secret Weapon</span>
                      <span className="text-emerald-400 font-bold">Classroom Board Solutions</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span>21-26s: CBT Simulation</span>
                      <span className="text-amber-400 font-bold">Real Timers & 345/400 Score</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span>26-30s: Outro & Call To Action</span>
                      <span className="text-cyan-400 font-bold">studyplug.com.ng</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-slate-800/60 rounded-xl border border-slate-700 text-xs">
                  <div className="flex items-center space-x-2">
                    <span>{audioEnabled ? '🔊' : '🔇'}</span>
                    <span className="font-bold">Soundtrack & Audio Beats</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      getAudioContext();
                      setAudioEnabled(!audioEnabled);
                    }}
                    className={`px-3 py-1 rounded-lg font-bold text-xs cursor-pointer ${
                      audioEnabled ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {audioEnabled ? 'Enabled' : 'Muted'}
                  </button>
                </div>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center space-x-2.5 transition shadow-xl cursor-pointer ${
                      isRecording
                        ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                        : 'bg-[#FFCC00] hover:bg-[#FFE033] text-[#0A241B]'
                    }`}
                  >
                    <span>{isRecording ? '⏹ Stop & Download Video' : '🔴 Record & Export Advert Video (.webm)'}</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Records the 30-second HD commercial with animated graphics and audio beats, then downloads ready to upload to WhatsApp Status, TikTok, and Instagram!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-left max-h-[500px] overflow-y-auto pr-2">
              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-base text-[#FFCC00]">
                    🎬 30-Second Viral TikTok / Reels / Status Script
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        'STILL CRAMMING PAST QUESTIONS WITHOUT UNDERSTANDING? STOP GUESSING!\n\nMeet StudyPlug — Nigeria’s smartest CBT exam simulator with over 18,000 authentic past questions from 1978 to 2025!\n\nEvery single question features an authentic classroom blackboard breakdown with step-by-step formulas and exam tips!\n\nPractice anytime, anywhere on your phone or laptop.\n\nLearn Today. Ace Tomorrow. Visit studyplug.com.ng now!'
                      );
                      alert('Script copied to clipboard!');
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white transition cursor-pointer"
                  >
                    📋 Copy Script
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>[Visual]</strong>: Frustrated student staring at calculation textbook.<br />
                  <strong>[Voiceover]</strong>: <em>"Still cramming past questions without understanding the steps? Stop guessing!"</em><br /><br />
                  <strong>[Visual]</strong>: Screen cuts to StudyPlug app in dark green and gold.<br />
                  <strong>[Voiceover]</strong>: <em>"Meet StudyPlug — Nigeria’s smartest CBT exam simulator with over 18,000 authentic past questions from 1978 to 2025!"</em><br /><br />
                  <strong>[Visual]</strong>: Close-up on wooden classroom board showing step-by-step formula in yellow chalk.<br />
                  <strong>[Voiceover]</strong>: <em>"Every question has a classroom blackboard breakdown so you actually understand how the answer is derived!"</em><br /><br />
                  <strong>[Visual]</strong>: Score shows 345/400 with glowing badge.<br />
                  <strong>[Voiceover]</strong>: <em>"Learn Today. Ace Tomorrow. Visit studyplug.com.ng and practice free right now!"</em>
                </p>
              </div>

              <div className="p-5 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-base text-emerald-400">
                    🎙️ 60-Second Full Explainer Video Script (YouTube / Facebook / Tutorial Centers)
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        'Are you writing JAMB UTME, WAEC, or NECO this year? Most students fail not because they do not read, but because they memorize answers without understanding the underlying concepts.\n\nThat is why StudyPlug was built. StudyPlug is Nigeria premier examination practice engine, featuring over 18,000 authentic past questions across Mathematics, Physics, English, Chemistry, Biology, Government, and more, spanning 1978 to 2025!\n\nUnlike ordinary apps that just give you an answer key, StudyPlug brings the classroom straight to your screen. Each question includes a realistic chalkboard solution with step-by-step workings, yellow chalk formulas, and high-yield exam tips.\n\nYou get full CBT exam simulations with authentic timers, instant accuracy analytics, and complete offline access on both phone and laptop.\n\nDo not gamble with your admission. Learn Today. Ace Tomorrow. Head over to studyplug.com.ng and start practicing today!'
                      );
                      alert('Script copied to clipboard!');
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white transition cursor-pointer"
                  >
                    📋 Copy Script
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                  {`Are you writing JAMB UTME, WAEC, or NECO this year? Most students fail not because they don't read, but because they memorize answers without understanding the underlying concepts.

That is why StudyPlug was built. StudyPlug is Nigeria's premier examination practice engine, featuring over 18,000 authentic past questions across Mathematics, Physics, English, Chemistry, Biology, Government, and more, spanning 1978 to 2025!

Unlike ordinary apps that just give you an answer key, StudyPlug brings the classroom straight to your screen. Each question includes a realistic chalkboard solution with step-by-step workings, yellow chalk formulas, and high-yield exam tips.

You get full CBT exam simulations with authentic timers, instant accuracy analytics, and complete offline access on both phone and laptop.

Don't gamble with your admission. Learn Today. Ace Tomorrow. Head over to studyplug.com.ng and start practicing today!`}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
