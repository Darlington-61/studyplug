import { VideoAspectRatio } from './types';

export interface ThumbnailConfig {
  exam: string;
  subject: string;
  topic: string;
  hookText?: string;
  aspectRatio: VideoAspectRatio;
  theme: 'deep_emerald' | 'obsidian_gold' | 'royal_blue';
}

/**
 * Draws a professional YouTube thumbnail onto an HTML5 Canvas
 */
export function drawThumbnailToCanvas(
  canvas: HTMLCanvasElement,
  config: ThumbnailConfig
): void {
  const isShorts = config.aspectRatio === '9:16';
  const width = isShorts ? 1080 : 1280;
  const height = isShorts ? 1920 : 720;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background Gradient
  const grad = ctx.createLinearGradient(0, 0, width, height);
  if (config.theme === 'deep_emerald') {
    grad.addColorStop(0, '#004D40');
    grad.addColorStop(0.5, '#00332B');
    grad.addColorStop(1, '#051813');
  } else if (config.theme === 'royal_blue') {
    grad.addColorStop(0, '#1E3A8A');
    grad.addColorStop(0.5, '#0F172A');
    grad.addColorStop(1, '#020617');
  } else {
    // Obsidian gold
    grad.addColorStop(0, '#1C1917');
    grad.addColorStop(0.5, '#0C0A09');
    grad.addColorStop(1, '#000000');
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Decorative grid lines / subtle geometric accents
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  const step = 60;
  for (let x = 0; x < width; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Glowing radial highlight
  const glowX = isShorts ? width / 2 : width * 0.75;
  const glowY = isShorts ? height * 0.4 : height * 0.5;
  const radialGlow = ctx.createRadialGradient(glowX, glowY, 50, glowX, glowY, isShorts ? 600 : 450);
  radialGlow.addColorStop(0, 'rgba(255, 214, 0, 0.15)');
  radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = radialGlow;
  ctx.fillRect(0, 0, width, height);

  // Outer Gold Frame Accent
  ctx.strokeStyle = '#FFD600';
  ctx.lineWidth = isShorts ? 16 : 10;
  ctx.strokeRect(10, 10, width - 20, height - 20);

  // 1. Top Badges: Exam & Subject Pills
  const startX = isShorts ? 60 : 70;
  let cursorY = isShorts ? 160 : 100;

  // Exam Pill (e.g. JAMB UTME / WAEC SSCE)
  ctx.fillStyle = '#FFD600';
  ctx.beginPath();
  roundRect(ctx, startX, cursorY, isShorts ? 280 : 200, isShorts ? 70 : 46, 12);
  ctx.fill();

  ctx.fillStyle = '#004D40';
  ctx.font = `900 ${isShorts ? '32px' : '22px'} sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`${config.exam} 2026`, startX + (isShorts ? 140 : 100), cursorY + (isShorts ? 35 : 23));

  // Subject Pill
  const subX = startX + (isShorts ? 310 : 220);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.beginPath();
  roundRect(ctx, subX, cursorY, isShorts ? 360 : 240, isShorts ? 70 : 46, 12);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `800 ${isShorts ? '30px' : '20px'} sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(config.subject.toUpperCase(), subX + (isShorts ? 180 : 120), cursorY + (isShorts ? 35 : 23));

  // 2. Main Title (Big, Bold, Educational)
  cursorY += isShorts ? 150 : 100;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  const titleWords = config.topic.toUpperCase().split(' ');
  let line1 = '';
  let line2 = '';
  if (titleWords.length <= 3) {
    line1 = titleWords.join(' ');
  } else {
    const mid = Math.ceil(titleWords.length / 2);
    line1 = titleWords.slice(0, mid).join(' ');
    line2 = titleWords.slice(mid).join(' ');
  }

  // Draw Line 1
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `900 ${isShorts ? '76px' : '58px'} sans-serif`;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 15;
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.fillText(line1, startX, cursorY);

  if (line2) {
    cursorY += isShorts ? 90 : 70;
    ctx.fillStyle = '#FFD600';
    ctx.fillText(line2, startX, cursorY);
  }

  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // 3. Hook Banner (e.g. "5 QUESTIONS YOU MUST KNOW" / "COMPLETE MASTERCLASS")
  cursorY += isShorts ? 140 : 100;
  const hook = config.hookText || 'PAST QUESTIONS + STEP-BY-STEP WORKINGS';
  const hookWidth = isShorts ? 880 : 720;
  const hookHeight = isShorts ? 100 : 64;

  ctx.fillStyle = '#DC2626'; // Vivid red banner
  ctx.beginPath();
  roundRect(ctx, startX, cursorY, hookWidth, hookHeight, 14);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `900 ${isShorts ? '36px' : '24px'} sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(hook.toUpperCase(), startX + (hookWidth / 2), cursorY + (hookHeight / 2));

  // 4. Feature Checklist in Lower Third
  cursorY += isShorts ? 180 : 110;
  const features = [
    '✓ Official Syllabus Aligned',
    '✓ Real CBT Past Questions',
    '✓ 100% Free AI Tutor on StudyPlug'
  ];

  ctx.textAlign = 'left';
  features.forEach((feat, i) => {
    const featY = cursorY + (i * (isShorts ? 65 : 42));
    ctx.fillStyle = i === 1 ? '#FFD600' : '#E2E8F0';
    ctx.font = `700 ${isShorts ? '32px' : '20px'} sans-serif`;
    ctx.fillText(feat, startX, featY);
  });

  // 5. StudyPlug Brand Footer
  const footerY = height - (isShorts ? 150 : 80);
  ctx.fillStyle = '#FFD600';
  ctx.font = `900 ${isShorts ? '44px' : '28px'} sans-serif`;
  ctx.textAlign = 'left';
  ctx.fillText('STUDYPLUG ACADEMY', startX, footerY);

  ctx.fillStyle = '#94A3B8';
  ctx.font = `600 ${isShorts ? '26px' : '16px'} sans-serif`;
  ctx.fillText('studyplug.com.ng • "Learn it. Practice it. Master it."', startX, footerY + (isShorts ? 50 : 30));

  // 6. Right side visual badge / Icon
  const badgeSize = isShorts ? 160 : 120;
  const badgeX = width - (isShorts ? 200 : 180);
  const badgeY = height - (isShorts ? 220 : 160);

  ctx.fillStyle = '#00332B';
  ctx.beginPath();
  ctx.arc(badgeX, badgeY, badgeSize / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FFD600';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = '#FFD600';
  ctx.font = `900 ${isShorts ? '42px' : '30px'} sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CBT', badgeX, badgeY - 14);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `800 ${isShorts ? '26px' : '18px'} sans-serif`;
  ctx.fillText('100% READY', badgeX, badgeY + 18);
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
}

/**
 * Downloads the current canvas content as a high-resolution PNG
 */
export function exportThumbnailPng(canvas: HTMLCanvasElement, filename: string): void {
  const link = document.createElement('a');
  link.download = filename || 'StudyPlug_YouTube_Thumbnail.png';
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
