import React, { useState, useEffect, useRef } from 'react';
import { MorningTeaItem, MorningTeaEdition } from '../../data/morningTeaData';
import { STUDENT_MASCOT_IMAGE } from '../../assets/studentMascot';

interface ShareMorningTeaNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  edition: MorningTeaEdition;
  item: MorningTeaItem;
  itemIndex: number;
  totalItems: number;
  onOpenVideoPlayer?: () => void;
}

export const ShareMorningTeaNoteModal: React.FC<ShareMorningTeaNoteModalProps> = ({
  isOpen,
  onClose,
  edition,
  item,
  itemIndex,
  totalItems,
  onOpenVideoPlayer
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [aspectRatio, setAspectRatio] = useState<'portrait' | 'square'>('portrait');
  const [previewImageUrl, setPreviewImageUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(true);
  const [copiedStatus, setCopiedStatus] = useState<string>('');

  // Generate canvas card
  useEffect(() => {
    if (!isOpen || !item) return;
    setIsGenerating(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions: Portrait (1080x1920) for TikTok/Reels/WhatsApp Status; Square (1080x1080) for Feed
    const width = 1080;
    const height = aspectRatio === 'portrait' ? 1920 : 1080;
    canvas.width = width;
    canvas.height = height;

    // Load mascot image
    const mascotImg = new Image();
    mascotImg.crossOrigin = 'anonymous';
    mascotImg.src = STUDENT_MASCOT_IMAGE;

    const render = () => {
      // 1. Deep Brand Gradient Background (#002820 to #001028 to #021812)
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#021F19');
      bgGrad.addColorStop(0.35, '#001028');
      bgGrad.addColorStop(0.7, '#00332B');
      bgGrad.addColorStop(1, '#031410');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle Glow Elements
      const radialGlow = ctx.createRadialGradient(width * 0.85, 200, 10, width * 0.85, 200, 450);
      radialGlow.addColorStop(0, 'rgba(255, 214, 0, 0.15)');
      radialGlow.addColorStop(1, 'rgba(255, 214, 0, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      const bottomGlow = ctx.createRadialGradient(150, height - 150, 10, 150, height - 150, 500);
      bottomGlow.addColorStop(0, 'rgba(0, 230, 118, 0.12)');
      bottomGlow.addColorStop(1, 'rgba(0, 230, 118, 0)');
      ctx.fillStyle = bottomGlow;
      ctx.fillRect(0, 0, width, height);

      // 3. Elegant Outer Border Frame
      ctx.strokeStyle = 'rgba(255, 214, 0, 0.45)';
      ctx.lineWidth = 6;
      ctx.strokeRect(36, 36, width - 72, height - 72);

      // Inner thin border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 2;
      ctx.strokeRect(48, 48, width - 96, height - 96);

      // 4. Header Bar: Brand Logo & Title
      const headerY = aspectRatio === 'portrait' ? 120 : 100;

      // Mascot Avatar Circle
      const mascotX = 110;
      const mascotY = headerY;
      const mascotRadius = 55;

      ctx.save();
      ctx.beginPath();
      ctx.arc(mascotX, mascotY, mascotRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();
      try {
        ctx.drawImage(mascotImg, mascotX - mascotRadius, mascotY - mascotRadius, mascotRadius * 2, mascotRadius * 2);
      } catch (e) {
        ctx.fillStyle = '#FFD600';
        ctx.fill();
      }
      ctx.restore();

      // Mascot Golden Ring
      ctx.strokeStyle = '#FFD600';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(mascotX, mascotY, mascotRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Brand Text next to Mascot
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 44px system-ui, -apple-system, sans-serif';
      ctx.fillText('StudyPlug ⚡', mascotX + 80, headerY - 5);

      ctx.fillStyle = '#FFD600';
      ctx.font = '900 24px system-ui, -apple-system, sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('MORNING TEA • DAILY EXAM DROP', mascotX + 80, headerY + 30);

      // Verified Pill Badge
      ctx.fillStyle = 'rgba(0, 230, 118, 0.2)';
      ctx.fillRect(width - 340, headerY - 30, 230, 52);
      ctx.strokeStyle = '#00E676';
      ctx.lineWidth = 2;
      ctx.strokeRect(width - 340, headerY - 30, 230, 52);

      ctx.fillStyle = '#00E676';
      ctx.font = '900 22px system-ui, -apple-system, sans-serif';
      ctx.fillText('✓ 100% HIGH YIELD', width - 320, headerY + 4);

      // Divider Line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(90, headerY + 80);
      ctx.lineTo(width - 90, headerY + 80);
      ctx.stroke();

      // 5. Subject & Series Banner
      let currentY = headerY + 140;

      // Series / Day Badge
      const seriesBadgeText = edition.seriesName
        ? `${edition.seriesName.toUpperCase()} • DAY ${edition.dayNumber || 1} OF ${edition.totalDays || 3}`
        : `${edition.subject.toUpperCase()} • EXAM MASTERY`;

      ctx.fillStyle = '#FFD600';
      ctx.fillRect(90, currentY - 30, ctx.measureText(seriesBadgeText).width + 36, 46);
      ctx.fillStyle = '#002820';
      ctx.font = '900 22px system-ui, -apple-system, sans-serif';
      ctx.fillText(seriesBadgeText, 108, currentY + 2);

      // Subject Label
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = 'bold 28px system-ui, -apple-system, sans-serif';
      ctx.fillText(`${edition.icon} ${edition.subject} • Concept ${itemIndex + 1}/${totalItems}`, 108 + ctx.measureText(seriesBadgeText).width + 30, currentY + 4);

      currentY += 80;

      // 6. Main Highlight Card (White Card with Dark Forest Text)
      const cardMargin = 90;
      const cardWidth = width - cardMargin * 2;
      const cardHeight = aspectRatio === 'portrait' ? 1040 : 540;

      // Card Background with slight blur effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
      ctx.beginPath();
      ctx.roundRect(cardMargin, currentY, cardWidth, cardHeight, 36);
      ctx.fill();

      // Card Header Tag
      ctx.fillStyle = '#001028';
      ctx.beginPath();
      ctx.roundRect(cardMargin + 35, currentY + 35, 320, 42, 12);
      ctx.fill();
      ctx.fillStyle = '#FFD600';
      ctx.font = '900 19px system-ui, -apple-system, sans-serif';
      ctx.fillText('🎯 HIGH FREQUENCY CONCEPT', cardMargin + 50, currentY + 63);

      let innerY = currentY + 125;

      // Concept Title (Phrase)
      ctx.fillStyle = '#00332B';
      ctx.font = '900 42px system-ui, -apple-system, sans-serif';
      innerY = wrapText(ctx, item.phrase, cardMargin + 40, innerY, cardWidth - 80, 54);

      // Meaning / Rule
      innerY += 15;
      ctx.fillStyle = '#37474F';
      ctx.font = '500 30px system-ui, -apple-system, sans-serif';
      innerY = wrapText(ctx, item.meaning, cardMargin + 40, innerY, cardWidth - 80, 44);

      // Exam Example Box
      innerY += 30;
      const exampleBoxY = innerY;
      ctx.fillStyle = '#E8F5E9';
      ctx.beginPath();
      ctx.roundRect(cardMargin + 35, exampleBoxY, cardWidth - 70, aspectRatio === 'portrait' ? 180 : 130, 20);
      ctx.fill();
      ctx.strokeStyle = '#81C784';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#1B5E20';
      ctx.font = '900 20px system-ui, -apple-system, sans-serif';
      ctx.fillText('📝 EXAM CONTEXT & EXAMPLE:', cardMargin + 60, exampleBoxY + 38);

      ctx.fillStyle = '#0A332A';
      ctx.font = 'italic 500 27px system-ui, -apple-system, sans-serif';
      wrapText(ctx, `"${item.example}"`, cardMargin + 60, exampleBoxY + 82, cardWidth - 120, 38);

      innerY = exampleBoxY + (aspectRatio === 'portrait' ? 210 : 150);

      // Exam Tip / Trap Box (if portrait)
      if (aspectRatio === 'portrait' && item.examTip) {
        const trapBoxY = innerY;
        ctx.fillStyle = '#FFF8E1';
        ctx.beginPath();
        ctx.roundRect(cardMargin + 35, trapBoxY, cardWidth - 70, 190, 20);
        ctx.fill();
        ctx.strokeStyle = '#FFD54F';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#B78103';
        ctx.font = '900 20px system-ui, -apple-system, sans-serif';
        ctx.fillText('⚠️ EXAMINER TRAP & SPEED TIP:', cardMargin + 60, trapBoxY + 38);

        ctx.fillStyle = '#4E342E';
        ctx.font = '600 26px system-ui, -apple-system, sans-serif';
        wrapText(ctx, item.examTip, cardMargin + 60, trapBoxY + 80, cardWidth - 120, 36);

        innerY = trapBoxY + 215;
      }

      // Past Question Reference
      if (item.pastQuestionRef) {
        ctx.fillStyle = '#001028';
        ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
        ctx.fillText(`📌 Real Exam Reference: ${item.pastQuestionRef}`, cardMargin + 40, currentY + cardHeight - 35);
      }

      // 7. Footer Banner: StudyPlug Branding & Website
      const footerY = height - (aspectRatio === 'portrait' ? 140 : 100);

      ctx.fillStyle = '#FFD600';
      ctx.font = '900 32px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Practice 10,000+ Past Questions Free on studyplug.com.ng', width / 2, footerY);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.font = '500 22px system-ui, -apple-system, sans-serif';
      ctx.fillText('JAMB • WAEC • NECO • POST-UTME • No Internet Required ⚡', width / 2, footerY + 38);
      ctx.textAlign = 'left';

      // Save as image URL
      try {
        const dataUrl = canvas.toDataURL('image/png');
        setPreviewImageUrl(dataUrl);
      } catch (e) {
        console.warn('Canvas export warning:', e);
      }
      setIsGenerating(false);
    };

    if (mascotImg.complete) {
      render();
    } else {
      mascotImg.onload = render;
      mascotImg.onerror = render;
    }
  }, [isOpen, edition, item, itemIndex, totalItems, aspectRatio]);

  // Helper to wrap text cleanly on canvas
  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number
  ): number => {
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
    return currentY + lineHeight;
  };

  // Download Note Image
  const handleDownloadImage = () => {
    if (!previewImageUrl) return;
    const link = document.createElement('a');
    link.download = `StudyPlug_MorningTea_${edition.subject}_${item.id}.png`;
    link.href = previewImageUrl;
    link.click();
    setCopiedStatus('Image downloaded! Ready to post on TikTok & WhatsApp Status 📸');
    setTimeout(() => setCopiedStatus(''), 3500);
  };

  // Share via WhatsApp
  const handleShareWhatsApp = () => {
    const text = `☀️ *STUDYPLUG MORNING TEA DROP* ☕
📚 *Subject:* ${edition.subject}
🔥 *Topic:* ${item.phrase}

💡 *The Rule / Concept:*
${item.meaning}

📝 *Exam Example:*
"${item.example}"

${item.examTip ? `⚠️ *Exam Trap:* ${item.examTip}\n` : ''}${item.pastQuestionRef ? `📌 *Past Paper Ref:* ${item.pastQuestionRef}\n` : ''}
⚡ *Practice 10,000+ Past Questions 100% Free:*
👉 https://studyplug.com.ng`;

    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
    setCopiedStatus('Opening WhatsApp with your StudyPlug Drop! 💬');
    setTimeout(() => setCopiedStatus(''), 3500);
  };

  // Copy Note Text
  const handleCopyText = () => {
    const text = `☀️ STUDYPLUG MORNING TEA DROP ☕
Subject: ${edition.subject}
Concept: ${item.phrase}

Definition:
${item.meaning}

Example:
"${item.example}"

Exam Trap:
${item.examTip || 'Master this rule to dodge examiner tricks!'}

Practice 10,000+ past questions free on https://studyplug.com.ng`;

    navigator.clipboard.writeText(text);
    setCopiedStatus('Copied to clipboard! 📋');
    setTimeout(() => setCopiedStatus(''), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Hidden processing canvas */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div className="relative w-full max-w-xl bg-[#031A15] border border-emerald-500/40 rounded-[28px] shadow-2xl overflow-hidden flex flex-col max-h-[94vh] text-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#001830] via-[#001028] to-[#0A261D] p-4 sm:p-5 flex items-center justify-between border-b border-emerald-600/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFD600] text-[#002820] flex items-center justify-center font-black text-xl shadow-md">
              ⚡
            </div>
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-black uppercase tracking-wider bg-[#FFD600] text-[#002820] px-2 py-0.5 rounded-full">
                  SHARE STUDY NOTE
                </span>
                <span className="text-xs text-emerald-300 font-bold">
                  {edition.subject}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-black text-white leading-tight mt-0.5">
                Share to TikTok, WhatsApp &amp; Status
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-sm transition cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Format Selector Pills (Story 9:16 vs Feed 1:1) */}
        <div className="px-5 py-3 bg-[#02130F] flex items-center justify-between border-b border-white/10">
          <span className="text-xs font-bold text-emerald-200">
            Card Format:
          </span>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() => setAspectRatio('portrait')}
              className={`px-3 py-1 rounded-full text-xs font-extrabold transition cursor-pointer ${
                aspectRatio === 'portrait'
                  ? 'bg-[#FFD600] text-[#002820] shadow-sm'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              📱 Story / TikTok (9:16)
            </button>
            <button
              type="button"
              onClick={() => setAspectRatio('square')}
              className={`px-3 py-1 rounded-full text-xs font-extrabold transition cursor-pointer ${
                aspectRatio === 'square'
                  ? 'bg-[#FFD600] text-[#002820] shadow-sm'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              ⬛ Square / Chat (1:1)
            </button>
          </div>
        </div>

        {/* Card Preview Canvas / Image */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col items-center justify-center bg-[#051F19]/60">
          {isGenerating ? (
            <div className="py-20 flex flex-col items-center space-y-3">
              <div className="w-10 h-10 border-3 border-[#FFD600] border-t-transparent rounded-full animate-spin" />
              <p className="text-xs font-bold text-emerald-300">
                Generating branded high-res note...
              </p>
            </div>
          ) : (
            <div className="relative group max-w-sm rounded-[20px] overflow-hidden shadow-2xl border-2 border-[#FFD600]/60 animate-card-in">
              <img
                src={previewImageUrl}
                alt="StudyPlug Morning Tea Note"
                className="w-full h-auto object-contain max-h-[50vh] sm:max-h-[54vh] rounded-[18px]"
              />
              <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-[#FFD600]">
                StudyPlug Verified ✓
              </div>
            </div>
          )}

          {copiedStatus && (
            <div className="mt-3 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs font-bold animate-fadeIn text-center">
              {copiedStatus}
            </div>
          )}
        </div>

        {/* Action Buttons Bar */}
        <div className="p-4 bg-[#02130F] border-t border-white/10 space-y-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            {/* WhatsApp Share Button */}
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-xs sm:text-sm shadow-md transition active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>💬</span>
              <span>Share to WhatsApp</span>
            </button>

            {/* Download HD Image Button */}
            <button
              type="button"
              onClick={handleDownloadImage}
              className="py-3 px-4 rounded-xl bg-[#001028] hover:bg-[#001830] border border-[#FFD600]/40 text-white font-black text-xs sm:text-sm shadow-md transition active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>📥</span>
              <span>Download HD Card</span>
            </button>
          </div>

          <div className="flex items-center space-x-2">
            {/* Copy Text Button */}
            <button
              type="button"
              onClick={handleCopyText}
              className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-1.5"
            >
              <span>📋</span>
              <span>Copy Note Text</span>
            </button>

            {/* Watch in Animated Reel Video Player */}
            {onOpenVideoPlayer && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenVideoPlayer();
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white text-xs font-bold transition active:scale-[0.98] cursor-pointer flex items-center justify-center space-x-1.5"
              >
                <span>🎬</span>
                <span>Play Animated Reel</span>
              </button>
            )}
          </div>

          <p className="text-[11px] text-emerald-300/80 text-center font-medium">
            💡 Post on TikTok, WhatsApp Status or IG Stories • Your friends will thank you!
          </p>
        </div>
      </div>
    </div>
  );
};
