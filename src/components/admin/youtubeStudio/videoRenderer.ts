import { VideoScene, VideoAspectRatio } from './types';
import { phoneticSanitize } from './scriptGenerator';

export class StudyPlugVideoRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private aspectRatio: VideoAspectRatio;
  private width: number;
  private height: number;

  private isPlaying: boolean = false;
  private currentSceneIndex: number = 0;
  private sceneStartTime: number = 0;
  private animationFrameId: number | null = null;

  private scenes: VideoScene[] = [];
  private onTimeUpdate?: (currentSec: number, totalSec: number, sceneIdx: number) => void;
  private onPlaybackEnded?: () => void;

  // Audio Context
  private audioCtx: AudioContext | null = null;
  private audioDest: MediaStreamAudioDestinationNode | null = null;

  // Media Recorder for Video Export
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];

  constructor(canvas: HTMLCanvasElement, aspectRatio: VideoAspectRatio = '16:9') {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2D context from canvas');
    this.ctx = context;
    this.aspectRatio = aspectRatio;

    const isShorts = aspectRatio === '9:16';
    this.width = isShorts ? 1080 : 1920;
    this.height = isShorts ? 1920 : 1080;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  public setScenes(scenes: VideoScene[], aspectRatio: VideoAspectRatio = '16:9') {
    this.scenes = scenes;
    this.aspectRatio = aspectRatio;
    const isShorts = aspectRatio === '9:16';
    this.width = isShorts ? 1080 : 1920;
    this.height = isShorts ? 1920 : 1080;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.currentSceneIndex = 0;
    this.renderCurrentFrame(0);
  }

  public setCallbacks(
    onTimeUpdate?: (currentSec: number, totalSec: number, sceneIdx: number) => void,
    onPlaybackEnded?: () => void
  ) {
    this.onTimeUpdate = onTimeUpdate;
    this.onPlaybackEnded = onPlaybackEnded;
  }

  private initAudio() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
      this.audioDest = this.audioCtx.createMediaStreamDestination();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  /**
   * Generates gentle subtle ticking sound during question thinking timer
   */
  private playTickSound() {
    if (!this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.frequency.setValueAtTime(650, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      if (this.audioDest) gain.connect(this.audioDest);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch (e) {
      // Audio not permitted yet
    }
  }

  /**
   * Speaks the narration for a given scene using Web Speech API with Nigerian voice prioritization
   */
  private speakNarration(text: string, rate: number = 1.0) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const polished = phoneticSanitize(text);
    const utterance = new SpeechSynthesisUtterance(polished);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v =>
      v.lang.startsWith('en') && (v.name.includes('Nigeria') || v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('David'))
    ) || voices.find(v => v.lang.startsWith('en'));

    if (preferredVoice) utterance.voice = preferredVoice;

    window.speechSynthesis.speak(utterance);
  }

  public play() {
    if (this.isPlaying) return;
    this.initAudio();
    this.isPlaying = true;
    this.sceneStartTime = performance.now();

    if (this.scenes[this.currentSceneIndex]) {
      this.speakNarration(this.scenes[this.currentSceneIndex].narrationText);
    }

    this.tick();
  }

  public pause() {
    this.isPlaying = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  public seekToScene(index: number) {
    this.currentSceneIndex = Math.max(0, Math.min(this.scenes.length - 1, index));
    this.sceneStartTime = performance.now();
    this.renderCurrentFrame(0);

    if (this.isPlaying && this.scenes[this.currentSceneIndex]) {
      this.speakNarration(this.scenes[this.currentSceneIndex].narrationText);
    }
  }

  private tick = () => {
    if (!this.isPlaying) return;

    const now = performance.now();
    const elapsedSceneTime = (now - this.sceneStartTime) / 1000;
    const currentScene = this.scenes[this.currentSceneIndex];

    if (!currentScene) {
      this.pause();
      if (this.onPlaybackEnded) this.onPlaybackEnded();
      return;
    }

    this.renderCurrentFrame(elapsedSceneTime);

    if (this.onTimeUpdate) {
      const totalSec = this.scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
      let passedSec = 0;
      for (let i = 0; i < this.currentSceneIndex; i++) {
        passedSec += this.scenes[i].durationSeconds;
      }
      passedSec += elapsedSceneTime;
      this.onTimeUpdate(Math.min(totalSec, passedSec), totalSec, this.currentSceneIndex);
    }

    // Advance to next scene when duration expires
    if (elapsedSceneTime >= currentScene.durationSeconds) {
      if (this.currentSceneIndex < this.scenes.length - 1) {
        this.currentSceneIndex++;
        this.sceneStartTime = performance.now();
        if (this.scenes[this.currentSceneIndex]) {
          this.speakNarration(this.scenes[this.currentSceneIndex].narrationText);
        }
      } else {
        this.pause();
        if (this.onPlaybackEnded) this.onPlaybackEnded();
        return;
      }
    }

    this.animationFrameId = requestAnimationFrame(this.tick);
  };

  /**
   * Master frame rendering function for each video scene
   */
  public renderCurrentFrame(timeInScene: number) {
    const scene = this.scenes[this.currentSceneIndex];
    if (!scene) return;

    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const isShorts = this.aspectRatio === '9:16';

    ctx.clearRect(0, 0, w, h);

    // 1. Subject-Themed Background
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    if (scene.subjectTheme === 'mathematics') {
      bgGrad.addColorStop(0, '#0F172A');
      bgGrad.addColorStop(0.5, '#002E26');
      bgGrad.addColorStop(1, '#020617');
    } else if (scene.subjectTheme === 'chemistry') {
      bgGrad.addColorStop(0, '#1E1B4B');
      bgGrad.addColorStop(0.5, '#00332B');
      bgGrad.addColorStop(1, '#051813');
    } else if (scene.subjectTheme === 'biology') {
      bgGrad.addColorStop(0, '#064E3B');
      bgGrad.addColorStop(0.5, '#022C22');
      bgGrad.addColorStop(1, '#011711');
    } else {
      // Physics & General
      bgGrad.addColorStop(0, '#004D40');
      bgGrad.addColorStop(0.5, '#002E26');
      bgGrad.addColorStop(1, '#051813');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle chalkboard border texture
    ctx.strokeStyle = '#0C3D32';
    ctx.lineWidth = isShorts ? 18 : 24;
    ctx.strokeRect(10, 10, w - 20, h - 20);

    // Top Brand Header Bar
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, w, isShorts ? 120 : 90);

    ctx.fillStyle = '#FFD600';
    ctx.font = `900 ${isShorts ? '32px' : '26px'} sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('STUDYPLUG ACADEMY', isShorts ? 50 : 60, isShorts ? 60 : 45);

    // Watermark right
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = `700 ${isShorts ? '24px' : '18px'} sans-serif`;
    ctx.textAlign = 'right';
    ctx.fillText('studyplug.com.ng', w - (isShorts ? 50 : 60), isShorts ? 60 : 45);

    // 2. Scene Title & Badge
    let cursorY = isShorts ? 180 : 150;
    const startX = isShorts ? 60 : 100;

    // Subtopic or Category pill
    ctx.fillStyle = '#FFD600';
    ctx.beginPath();
    roundRect(ctx, startX, cursorY, isShorts ? 360 : 260, isShorts ? 50 : 38, 8);
    ctx.fill();

    ctx.fillStyle = '#004D40';
    ctx.font = `900 ${isShorts ? '22px' : '16px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      scene.subtitle ? scene.subtitle.toUpperCase() : 'OFFICIAL SYLLABUS LESSON',
      startX + (isShorts ? 180 : 130),
      cursorY + (isShorts ? 25 : 19)
    );

    // Main Scene Title
    cursorY += isShorts ? 90 : 65;
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `900 ${isShorts ? '52px' : '42px'} sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 10;
    ctx.fillText(scene.title, startX, cursorY);
    ctx.shadowColor = 'transparent';

    cursorY += isShorts ? 110 : 80;

    // 3. Render Slide Type
    if (scene.sceneType === 'hook') {
      this.renderHookCard(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'objectives') {
      this.renderObjectives(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'section_header') {
      this.renderSectionBanner(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'concept' || scene.sceneType === 'definition' || scene.sceneType === 'formula') {
      this.renderConceptSlide(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'example') {
      this.renderCalculationStep(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'question') {
      this.renderQuestionCard(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'solution') {
      this.renderAnswerReveal(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'theory_card') {
      this.renderTheoryCard(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'theory_solution') {
      this.renderTheorySolution(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'practical_setup') {
      this.renderPracticalSetup(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'practical_graph') {
      this.renderPracticalGraph(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'practical_precautions') {
      this.renderPracticalPrecautions(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'exam_tip' || scene.sceneType === 'recap') {
      this.renderExamTips(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else if (scene.sceneType === 'cta' || scene.sceneType === 'outro_card') {
      this.renderOutroCard(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    } else {
      this.renderConceptSlide(ctx, scene, startX, cursorY, w, h, isShorts, timeInScene);
    }

    // 4. Bottom Timeline Progress Bar
    const barHeight = isShorts ? 14 : 10;
    const barY = h - barHeight;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, barY, w, barHeight);

    const progressRatio = (scene.progressPercent || 0) / 100;
    ctx.fillStyle = '#FFD600';
    ctx.fillRect(0, barY, w * progressRatio, barHeight);
  }

  // ─── Specialized Slide Sub-renderers ──────────────────────────────────────

  private renderHookCard(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 800 : 480;

    ctx.fillStyle = 'rgba(0, 20, 16, 0.85)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 20);
    ctx.fill();
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 3;
    ctx.stroke();

    const centerX = x + (cardW / 2);
    const centerY = y + (cardH / 2) - 30;

    // Challenge Icon
    ctx.fillStyle = '#FFD600';
    ctx.beginPath();
    ctx.arc(centerX, centerY - 20, isShorts ? 80 : 60, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#004D40';
    ctx.font = `900 ${isShorts ? '54px' : '40px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚡', centerX, centerY - 20);

    // Callout
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `900 ${isShorts ? '44px' : '36px'} sans-serif`;
    ctx.fillText('CAN YOU SOLVE THIS IN 30 SECONDS?', centerX, centerY + (isShorts ? 130 : 100));

    ctx.fillStyle = '#A7F3D0';
    ctx.font = `700 ${isShorts ? '28px' : '22px'} sans-serif`;
    ctx.fillText('Avoid the #1 trap that costs candidates 10+ marks!', centerX, centerY + (isShorts ? 190 : 150));
  }

  private renderObjectives(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const items = scene.keyPoints.length > 0 ? scene.keyPoints : [
      'Core Laws & Principles Defined',
      'Governing Equations & Worked Calculations',
      'Authentic Past Questions Solved Step-by-Step'
    ];

    items.forEach((item, idx) => {
      const itemY = y + (idx * (isShorts ? 140 : 95));
      ctx.fillStyle = 'rgba(0, 30, 22, 0.85)';
      ctx.beginPath();
      roundRect(ctx, x, itemY, cardW, isShorts ? 110 : 75, 14);
      ctx.fill();
      ctx.strokeStyle = '#00796B';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#FFD600';
      ctx.font = `900 ${isShorts ? '32px' : '24px'} sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText('✓', x + 25, itemY + (isShorts ? 55 : 38));

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `700 ${isShorts ? '26px' : '20px'} sans-serif`;
      ctx.fillText(item, x + 70, itemY + (isShorts ? 55 : 38));
    });
  }

  private renderConceptSlide(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 900 : 520;

    ctx.fillStyle = 'rgba(0, 24, 18, 0.85)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 20);
    ctx.fill();
    ctx.strokeStyle = '#00796B';
    ctx.lineWidth = 2;
    ctx.stroke();

    let textY = y + (isShorts ? 60 : 45);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    scene.keyPoints.forEach((point, idx) => {
      ctx.fillStyle = idx === 0 ? '#FFD600' : '#E2E8F0';
      ctx.font = `700 ${isShorts ? '30px' : '24px'} sans-serif`;
      this.drawWrappedText(ctx, `• ${point}`, x + 40, textY, cardW - 80, isShorts ? 46 : 38);
      textY += isShorts ? 140 : 100;
    });
  }

  private renderCalculationStep(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const steps = scene.calculationSteps || [
      'Step 1 (Given): Extract initial quantities and units',
      'Step 2 (Equation): State standard formula clearly',
      'Step 3 (Substitution): Substitute numerical values',
      'Step 4 (Final Answer): Compute final value with SI unit'
    ];

    steps.forEach((step, idx) => {
      const stepY = y + (idx * (isShorts ? 140 : 95));
      if (t < idx * 1.0) return; // Progressive animation

      ctx.fillStyle = idx === steps.length - 1 ? 'rgba(0, 77, 64, 0.95)' : 'rgba(0, 25, 20, 0.85)';
      ctx.beginPath();
      roundRect(ctx, x, stepY, cardW, isShorts ? 115 : 75, 14);
      ctx.fill();
      ctx.strokeStyle = idx === steps.length - 1 ? '#FFD600' : '#00796B';
      ctx.lineWidth = idx === steps.length - 1 ? 3 : 1.5;
      ctx.stroke();

      ctx.fillStyle = idx === steps.length - 1 ? '#FFD600' : '#4ADE80';
      ctx.font = `900 ${isShorts ? '30px' : '22px'} sans-serif`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(`[${idx + 1}]`, x + 30, stepY + (isShorts ? 58 : 38));

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `800 ${isShorts ? '25px' : '20px'} sans-serif`;
      ctx.fillText(step, x + (isShorts ? 95 : 80), stepY + (isShorts ? 58 : 38));
    });
  }

  private renderQuestionCard(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const q = scene.questionData;
    const cardW = w - (x * 2);

    // Question Box
    const qBoxH = isShorts ? 280 : 160;
    ctx.fillStyle = 'rgba(0, 20, 16, 0.9)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, qBoxH, 16);
    ctx.fill();
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${isShorts ? '26px' : '21px'} sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    const srcLabel = scene.sourceLabel || (q as any)?.sourceLabel || (scene.subtitle ? scene.subtitle.toUpperCase() : null);

    if (srcLabel) {
      ctx.fillStyle = '#FFD600';
      ctx.font = `900 ${isShorts ? '18px' : '14px'} sans-serif`;
      ctx.fillText(`• ${srcLabel}`, x + 30, y + 18);
    }

    const qText = q ? (q as any).text : 'Study the question on screen and choose the correct option.';
    this.drawWrappedText(ctx, qText, x + 30, y + (srcLabel ? 42 : 25), cardW - 60, isShorts ? 38 : 30);

    // Thinking Timer (5s or 10s countdown)
    const countdownTotal = scene.timerSeconds || 5;
    const remainingTime = Math.max(0, countdownTotal - Math.floor(t % (countdownTotal + 2)));
    if (remainingTime > 0 && Math.floor(t) % 1 === 0) {
      this.playTickSound();
    }

    const timerX = isShorts ? x + (cardW / 2) : w - x - 75;
    const timerY = isShorts ? y + qBoxH + 60 : y + 80;
    const timerRadius = isShorts ? 48 : 38;

    // "YOUR TURN" Banner above timer
    ctx.fillStyle = '#FFD600';
    ctx.font = `900 ${isShorts ? '22px' : '15px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('YOUR TURN', timerX, timerY - timerRadius - 16);

    ctx.fillStyle = remainingTime <= 2 ? '#EF4444' : '#DC2626';
    ctx.beginPath();
    ctx.arc(timerX, timerY, timerRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `900 ${isShorts ? '36px' : '26px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${remainingTime}s`, timerX, timerY);

    // Options A, B, C, D
    const options = q?.options || [
      { key: 'A', text: 'Option A' },
      { key: 'B', text: 'Option B' },
      { key: 'C', text: 'Option C' },
      { key: 'D', text: 'Option D' }
    ];

    let optStartY = y + qBoxH + (isShorts ? 130 : 35);
    options.forEach((opt, idx) => {
      const optY = optStartY + (idx * (isShorts ? 110 : 75));
      ctx.fillStyle = 'rgba(0, 35, 27, 0.85)';
      ctx.beginPath();
      roundRect(ctx, x, optY, cardW, isShorts ? 90 : 60, 12);
      ctx.fill();
      ctx.strokeStyle = '#00796B';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = '#FFD600';
      ctx.beginPath();
      ctx.arc(x + 40, optY + (isShorts ? 45 : 30), isShorts ? 24 : 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#004D40';
      ctx.font = `900 ${isShorts ? '22px' : '16px'} sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(opt.key, x + 40, optY + (isShorts ? 45 : 30));

      ctx.fillStyle = '#FFFFFF';
      ctx.font = `700 ${isShorts ? '24px' : '19px'} sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText(opt.text, x + (isShorts ? 85 : 75), optY + (isShorts ? 45 : 30));
    });
  }

  private renderAnswerReveal(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const q = scene.questionData;
    const cardW = w - (x * 2);

    const bannerH = isShorts ? 130 : 80;
    ctx.fillStyle = '#059669';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, bannerH, 16);
    ctx.fill();
    ctx.strokeStyle = '#34D399';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `900 ${isShorts ? '36px' : '26px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`CORRECT ANSWER: OPTION ${q?.correctAnswer || 'A'} ✓`, x + (cardW / 2), y + (bannerH / 2));

    const expY = y + bannerH + 30;
    const expH = isShorts ? 700 : 400;
    ctx.fillStyle = 'rgba(0, 25, 20, 0.9)';
    ctx.beginPath();
    roundRect(ctx, x, expY, cardW, expH, 16);
    ctx.fill();
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#FFD600';
    ctx.font = `800 ${isShorts ? '28px' : '20px'} sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('EXAMINER SOLUTION & METHOD DERIVATION:', x + 35, expY + 30);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `600 ${isShorts ? '25px' : '19px'} sans-serif`;
    const expText = q?.explanation || 'Directly derived from the fundamental equations and syllabus principles.';
    this.drawWrappedText(ctx, expText, x + 35, expY + (isShorts ? 90 : 70), cardW - 70, isShorts ? 42 : 32);
  }

  private renderExamTips(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 850 : 500;

    ctx.fillStyle = 'rgba(0, 25, 20, 0.9)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 20);
    ctx.fill();
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 3;
    ctx.stroke();

    let textY = y + 50;
    ctx.fillStyle = '#FFD600';
    ctx.font = `900 ${isShorts ? '36px' : '28px'} sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('💡 EXAMINER TIPS & TIME-SAVING SHORTCUTS', x + 40, textY);

    textY += 60;
    scene.keyPoints.forEach((pt, i) => {
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `700 ${isShorts ? '28px' : '21px'} sans-serif`;
      this.drawWrappedText(ctx, `✓ ${pt}`, x + 40, textY, cardW - 80, isShorts ? 44 : 34);
      textY += isShorts ? 130 : 90;
    });
  }

  private renderOutroCard(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 800 : 480;

    ctx.fillStyle = 'rgba(0, 20, 16, 0.9)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 20);
    ctx.fill();
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 3;
    ctx.stroke();

    const centerX = x + (cardW / 2);
    let outY = y + (isShorts ? 100 : 70);

    ctx.fillStyle = '#FFD600';
    ctx.font = `900 ${isShorts ? '54px' : '40px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('STUDYPLUG ACADEMY', centerX, outY);

    outY += isShorts ? 80 : 55;
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `800 italic ${isShorts ? '32px' : '24px'} sans-serif`;
    ctx.fillText('"Learn it. Practice it. Master it."', centerX, outY);

    outY += isShorts ? 120 : 80;
    const actions = [
      '👍 Like this video & Subscribe for daily lessons',
      '📝 Practice 50+ more questions at studyplug.com.ng',
      '📲 Download StudyPlug App on Android & iOS'
    ];

    actions.forEach((act, i) => {
      ctx.fillStyle = i === 1 ? '#FFD600' : '#E2E8F0';
      ctx.font = `700 ${isShorts ? '28px' : '21px'} sans-serif`;
      ctx.fillText(act, centerX, outY + (i * (isShorts ? 70 : 50)));
    });
  }

  private renderSectionBanner(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 700 : 420;

    // Glowing Section Transition Box
    const grad = ctx.createLinearGradient(x, y, x + cardW, y + cardH);
    grad.addColorStop(0, 'rgba(0, 77, 64, 0.95)');
    grad.addColorStop(0.5, 'rgba(0, 46, 38, 0.95)');
    grad.addColorStop(1, 'rgba(2, 6, 23, 0.95)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 24);
    ctx.fill();
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 4;
    ctx.stroke();

    const centerX = x + (cardW / 2);
    const centerY = y + (cardH / 2);

    // Section Icon
    ctx.fillStyle = '#FFD600';
    ctx.beginPath();
    ctx.arc(centerX, centerY - (isShorts ? 100 : 70), isShorts ? 60 : 45, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#004D40';
    ctx.font = `900 ${isShorts ? '40px' : '30px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const icon = scene.paperType === 'Practical' ? '🔬' : scene.paperType === 'Theory' ? '📝' : '⚡';
    ctx.fillText(icon, centerX, centerY - (isShorts ? 100 : 70));

    // Big Section Title
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `900 ${isShorts ? '46px' : '36px'} sans-serif`;
    ctx.fillText(scene.title, centerX, centerY + (isShorts ? 20 : 15));

    // Subtitle Bullet Highlights
    ctx.fillStyle = '#A7F3D0';
    ctx.font = `700 ${isShorts ? '26px' : '20px'} sans-serif`;
    const subText = scene.onScreenText || 'Speed & Accuracy Standard Drills';
    this.drawWrappedText(ctx, subText, x + 40, centerY + (isShorts ? 80 : 60), cardW - 80, isShorts ? 40 : 30);
  }

  private renderTheoryCard(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const q = scene.questionData as any;
    const cardW = w - (x * 2);
    const cardH = isShorts ? 820 : 500;

    ctx.fillStyle = 'rgba(0, 24, 18, 0.9)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 18);
    ctx.fill();
    ctx.strokeStyle = '#34D399';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Source Label & Total Marks Header Bar
    const src = scene.sourceLabel || q?.sourceLabel || 'WAEC • THEORY EXAMINATION';
    const marks = q?.totalMarks || 10;
    ctx.fillStyle = '#004D40';
    ctx.beginPath();
    roundRect(ctx, x + 15, y + 15, cardW - 30, isShorts ? 55 : 42, 10);
    ctx.fill();

    ctx.fillStyle = '#FFD600';
    ctx.font = `900 ${isShorts ? '20px' : '15px'} sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(src, x + 35, y + 15 + (isShorts ? 28 : 21));

    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'right';
    ctx.fillText(`[TOTAL: ${marks} MARKS]`, x + cardW - 35, y + 15 + (isShorts ? 28 : 21));

    // Question Text & Parts
    let curY = y + (isShorts ? 90 : 75);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${isShorts ? '25px' : '19px'} sans-serif`;
    const fullText = q?.text || scene.onScreenText || '';
    this.drawWrappedText(ctx, fullText, x + 30, curY, cardW - 60, isShorts ? 36 : 28);
  }

  private renderTheorySolution(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 820 : 500;

    ctx.fillStyle = 'rgba(0, 30, 24, 0.92)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 18);
    ctx.fill();
    ctx.strokeStyle = '#FFD600';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Header: Marking Scheme Breakdown
    ctx.fillStyle = '#059669';
    ctx.beginPath();
    roundRect(ctx, x + 15, y + 15, cardW - 30, isShorts ? 55 : 42, 10);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `900 ${isShorts ? '22px' : '16px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('OFFICIAL MARKING SCHEME & STEP-BY-STEP DERIVATION', x + (cardW / 2), y + 15 + (isShorts ? 28 : 21));

    // Rubric Steps
    let solY = y + (isShorts ? 90 : 75);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#E2E8F0';
    ctx.font = `600 ${isShorts ? '22px' : '17px'} sans-serif`;

    const solText = scene.onScreenText || 'Complete examiner marking breakdown';
    this.drawWrappedText(ctx, solText, x + 30, solY, cardW - 60, isShorts ? 34 : 26);
  }

  private renderPracticalSetup(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 820 : 500;

    ctx.fillStyle = 'rgba(2, 44, 34, 0.92)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 18);
    ctx.fill();
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Lab Banner
    ctx.fillStyle = '#0369A1';
    ctx.beginPath();
    roundRect(ctx, x + 15, y + 15, cardW - 30, isShorts ? 55 : 42, 10);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `900 ${isShorts ? '22px' : '16px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🔬 PAPER 3: EXPERIMENTAL SETUP & APPARATUS', x + (cardW / 2), y + 15 + (isShorts ? 28 : 21));

    let pY = y + (isShorts ? 90 : 75);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#F0FDF4';
    ctx.font = `600 ${isShorts ? '23px' : '18px'} sans-serif`;

    this.drawWrappedText(ctx, scene.onScreenText || 'Apparatus & procedure steps', x + 30, pY, cardW - 60, isShorts ? 36 : 28);
  }

  private renderPracticalGraph(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 820 : 500;

    ctx.fillStyle = 'rgba(2, 44, 34, 0.92)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 18);
    ctx.fill();
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Graph & Table Header
    ctx.fillStyle = '#B45309';
    ctx.beginPath();
    roundRect(ctx, x + 15, y + 15, cardW - 30, isShorts ? 55 : 42, 10);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `900 ${isShorts ? '22px' : '16px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('📊 EXPERIMENTAL READINGS TABLE & GRAPH DERIVATION', x + (cardW / 2), y + 15 + (isShorts ? 28 : 21));

    let gY = y + (isShorts ? 90 : 75);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#FEF3C7';
    ctx.font = `600 ${isShorts ? '23px' : '18px'} monospace, sans-serif`;

    this.drawWrappedText(ctx, scene.onScreenText || 'Readings & Slope Evaluation', x + 30, gY, cardW - 60, isShorts ? 36 : 28);
  }

  private renderPracticalPrecautions(
    ctx: CanvasRenderingContext2D,
    scene: VideoScene,
    x: number,
    y: number,
    w: number,
    h: number,
    isShorts: boolean,
    t: number
  ) {
    const cardW = w - (x * 2);
    const cardH = isShorts ? 820 : 500;

    ctx.fillStyle = 'rgba(0, 35, 27, 0.92)';
    ctx.beginPath();
    roundRect(ctx, x, y, cardW, cardH, 18);
    ctx.fill();
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Precautions Header
    ctx.fillStyle = '#047857';
    ctx.beginPath();
    roundRect(ctx, x + 15, y + 15, cardW - 30, isShorts ? 55 : 42, 10);
    ctx.fill();

    ctx.fillStyle = '#FFD600';
    ctx.font = `900 ${isShorts ? '22px' : '16px'} sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚠️ CHIEF EXAMINER EXPERIMENTAL PRECAUTIONS [4 MARKS]', x + (cardW / 2), y + 15 + (isShorts ? 28 : 21));

    let prY = y + (isShorts ? 90 : 75);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `700 ${isShorts ? '24px' : '18px'} sans-serif`;

    this.drawWrappedText(ctx, scene.onScreenText || 'Examiner precautions in past tense', x + 30, prY, cardW - 60, isShorts ? 38 : 28);
  }

  private drawWrappedText(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ) {
    const words = text.split(' ');
    let line = '';
    let currentY = y;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, currentY);
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, currentY);
  }

  public async exportVideo(
    onProgress: (percent: number, status: string) => void
  ): Promise<Blob> {
    this.initAudio();
    this.pause();
    this.currentSceneIndex = 0;

    const stream = this.canvas.captureStream(30);
    if (this.audioDest) {
      this.audioDest.stream.getAudioTracks().forEach(track => {
        stream.addTrack(track);
      });
    }

    const mimeTypes = [
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm',
      'video/mp4'
    ];
    let selectedMime = '';
    for (const m of mimeTypes) {
      if (MediaRecorder.isTypeSupported(m)) {
        selectedMime = m;
        break;
      }
    }

    this.recordedChunks = [];
    this.mediaRecorder = new MediaRecorder(stream, selectedMime ? { mimeType: selectedMime } : undefined);

    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) {
        this.recordedChunks.push(e.data);
      }
    };

    return new Promise((resolve, reject) => {
      if (!this.mediaRecorder) {
        reject(new Error('MediaRecorder unavailable'));
        return;
      }

      this.mediaRecorder.onstop = () => {
        const blob = new Blob(this.recordedChunks, { type: selectedMime || 'video/webm' });
        resolve(blob);
      };

      this.mediaRecorder.start(100);

      const totalScenes = this.scenes.length;
      let sceneIdx = 0;
      let sceneTime = 0;
      const intervalMs = 1000 / 30;
      const totalDurationSec = this.scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
      let globalElapsedSec = 0;

      const recordTimer = setInterval(() => {
        const curScene = this.scenes[sceneIdx];
        if (!curScene) {
          clearInterval(recordTimer);
          this.mediaRecorder?.stop();
          onProgress(100, 'Recording complete! Preparing download...');
          return;
        }

        this.currentSceneIndex = sceneIdx;
        this.renderCurrentFrame(sceneTime);

        sceneTime += intervalMs / 1000;
        globalElapsedSec += intervalMs / 1000;

        const percent = Math.min(99, Math.round((globalElapsedSec / totalDurationSec) * 100));
        onProgress(percent, `Rendering video... Scene ${sceneIdx + 1} of ${totalScenes} (${percent}%)`);

        if (sceneTime >= curScene.durationSeconds) {
          sceneIdx++;
          sceneTime = 0;
        }
      }, intervalMs);
    });
  }

  public destroy() {
    this.pause();
    if (this.audioCtx) {
      this.audioCtx.close().catch(() => {});
      this.audioCtx = null;
    }
  }
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y + x, y, r);
}
