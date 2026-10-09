import React, { useState, useEffect, useRef, useCallback } from 'react';
import { parseQuestionContent } from './ComprehensionPassageViewer';

export interface ShareQuestionData {
  id?: number | string;
  subject?: string;
  examType?: string;
  year?: number | string;
  topic?: string;
  subtopic?: string;
  text: string;
  options?: { key: string; text: string }[] | Record<string, string>;
  correctAnswer?: string;
  explanation?: string;
  imageUrl?: string;
}

export interface ShareNoteData {
  subject: string;
  topic: string;
  sectionTitle?: string;
  snippetText: string;
  keyFormula?: string;
}

interface ShareStudyCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'question' | 'note';
  questionData?: ShareQuestionData | null;
  noteData?: ShareNoteData | null;
}

export const ShareStudyCardModal: React.FC<ShareStudyCardModalProps> = ({
  isOpen,
  onClose,
  mode,
  questionData,
  noteData
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [includeAnswer, setIncludeAnswer] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [cardImageUrl, setCardImageUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copyStatus, setCopyStatus] = useState<string>('');

  // Superscript & Subscript mapping for clean canvas math rendering
  const SUP_MAP: Record<string, string> = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
    '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
    'n': 'ⁿ', 'i': 'ⁱ', 'x': 'ˣ'
  };
  const SUB_MAP: Record<string, string> = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
    '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
    'a': 'ₐ', 'e': 'ₑ', 'o': 'ₒ', 'x': 'ₓ'
  };

  // Clean HTML tags and format math formulas for crystal-clear canvas rendering
  const formatTextForCanvas = (html: string) => {
    if (!html) return '';
    return html
      .replace(/<sup[^>]*>(.*?)<\/sup>/gi, (_, inner) =>
        inner.split('').map((c: string) => SUP_MAP[c] || c).join('')
      )
      .replace(/<sub[^>]*>(.*?)<\/sub>/gi, (_, inner) =>
        inner.split('').map((c: string) => SUB_MAP[c] || c).join('')
      )
      .replace(/&frac12;/g, '½')
      .replace(/&frac14;/g, '¼')
      .replace(/&frac34;/g, '¾')
      .replace(/&times;/g, '×')
      .replace(/\\times/g, '×')
      .replace(/&div;/g, '÷')
      .replace(/\\div/g, '÷')
      .replace(/\\pi/g, 'π')
      .replace(/\\sqrt/g, '√')
      .replace(/\\theta/g, 'θ')
      .replace(/\\alpha/g, 'α')
      .replace(/\\beta/g, 'β')
      .replace(/\\degree/g, '°')
      .replace(/&deg;/g, '°')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]*>?/gm, ' ')
      .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\\\((.*?)\\\)/g, '$1')
      .replace(/\\\[(.*?)\\\]/g, '$1')
      .replace(/\$\$?(.*?)\$\$?/g, '$1')
      .replace(/[ \t]+/g, ' ')
      .trim();
  };

  const stripHtml = (html: string) => formatTextForCanvas(html);

  // Canvas line wrapping helper splitting paragraphs and wrapping within maxWidth
  const getWrappedTextLines = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ): string[] => {
    if (!text) return [];
    const paragraphs = text.split('\n');
    const allLines: string[] = [];

    for (const para of paragraphs) {
      const trimmed = para.trim();
      if (!trimmed) continue;
      const words = trimmed.split(' ');
      let currentLine = '';

      for (let n = 0; n < words.length; n++) {
        const testLine = currentLine ? `${currentLine} ${words[n]}` : words[n];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine) {
          allLines.push(currentLine);
          currentLine = words[n];
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) {
        allLines.push(currentLine);
      }
    }

    return allLines;
  };

  // Helper to draw rounded rectangle
  const drawRoundRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number,
    fillColor?: string,
    strokeColor?: string,
    lineWidth: number = 1
  ) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();

    if (fillColor) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }
    if (strokeColor) {
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    }
  };

  // Render the high-resolution study card onto canvas with exact dynamic height
  const renderCard = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsGenerating(true);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Card dimensions (standard 800px width with content-driven exact height)
    const cardWidth = 800;
    const isDark = theme === 'dark';

    // Subject & Exam Pill texts
    const subject = mode === 'question' ? questionData?.subject || 'Practice' : noteData?.subject || 'Study Note';
    const examBadge = mode === 'question'
      ? `${questionData?.examType || 'UTME/SSCE'} ${questionData?.year ? `'${String(questionData.year).slice(-2)}` : ''}`
      : 'STUDY SUMMARY';
    const examPillText = `${examBadge} • ${subject.toUpperCase()}`;

    // Topic & Subtopic Tag & Cloze Target Extraction
    const parsedQuestion = mode === 'question' && questionData
      ? parseQuestionContent(questionData.text, undefined, questionData.subject, questionData.explanation)
      : null;
    const effectiveQuestionPrompt = parsedQuestion && parsedQuestion.isCloze && parsedQuestion.targetSentence
      ? parsedQuestion.targetSentence
      : questionData?.text || '';

    const topicText = mode === 'question' ? questionData?.topic : noteData?.topic;
    const subtopicText = mode === 'question' ? questionData?.subtopic : noteData?.sectionTitle;
    let fullTopic = (topicText || subtopicText) ? [topicText, subtopicText].filter(Boolean).join(' › ') : '';
    if (parsedQuestion?.targetGap) {
      fullTopic = fullTopic ? `${fullTopic} (Cloze Gap ${parsedQuestion.targetGap})` : `Cloze Gap ${parsedQuestion.targetGap}`;
    }

    // ─────────────────────────────────────────────────────────────────
    // PASS 1: Exact Height Measurement
    // ─────────────────────────────────────────────────────────────────
    canvas.width = cardWidth;
    canvas.height = 1200; // temporary height for measurement context

    let measuredY = 55;
    // Header strip (42px) + spacing
    measuredY += 42 + 25; // 122

    if (fullTopic) {
      measuredY += 28;
    }

    let qLines: string[] = [];
    let parsedOptions: { key: string; text: string; lines: string[]; height: number }[] = [];
    let expLines: string[] = [];
    let expHeight = 0;
    let noteLines: string[] = [];
    let noteBoxH = 0;

    if (mode === 'question' && questionData) {
      // Question text (concise target sentence for cloze passages or standard prompt)
      ctx.font = 'bold 20px "Segoe UI", Arial, sans-serif';
      const cleanQ = formatTextForCanvas(effectiveQuestionPrompt);
      qLines = getWrappedTextLines(ctx, cleanQ, cardWidth - 100);
      measuredY += qLines.length * 30 + 16;

      // Options A, B, C, D
      if (questionData.options) {
        const rawOptions = Array.isArray(questionData.options)
          ? questionData.options
          : Object.entries(questionData.options).map(([k, t]) => ({ key: k, text: String(t) }));

        ctx.font = '500 16px "Segoe UI", Arial, sans-serif';
        parsedOptions = rawOptions.map((opt) => {
          const isCorrect = includeAnswer && opt.key === questionData.correctAnswer;
          const maxOptW = isCorrect ? cardWidth - 320 : cardWidth - 160;
          const cleanOpt = formatTextForCanvas(opt.text);
          const lines = getWrappedTextLines(ctx, cleanOpt, maxOptW);
          const height = lines.length <= 1 ? 52 : Math.max(52, 22 + lines.length * 24);
          return { key: opt.key, text: cleanOpt, lines, height };
        });

        parsedOptions.forEach((opt) => {
          measuredY += opt.height + 10;
        });
      }

      // Explanation
      if (includeAnswer && questionData.explanation) {
        measuredY += 6;
        ctx.font = '400 14px "Segoe UI", Arial, sans-serif';
        const cleanExp = formatTextForCanvas(questionData.explanation);
        expLines = getWrappedTextLines(ctx, cleanExp, cardWidth - 140);
        expHeight = Math.max(76, 44 + expLines.length * 22);
        measuredY += expHeight + 14;
      }
    } else if (mode === 'note' && noteData) {
      if (noteData.sectionTitle) {
        measuredY += 38;
      }
      ctx.font = '400 17px "Segoe UI", Arial, sans-serif';
      const cleanSnippet = formatTextForCanvas(noteData.snippetText);
      noteLines = getWrappedTextLines(ctx, cleanSnippet, cardWidth - 140);
      noteBoxH = Math.max(110, 50 + noteLines.length * 27);
      measuredY += noteBoxH + 18;

      if (noteData.keyFormula) {
        measuredY += 72;
      }
    }

    // Divider + Advert Banner + Bottom padding
    const footerYMeasured = measuredY + 12;
    const bannerYMeasured = footerYMeasured + 16;
    const bannerH = 80;
    // Outer border inset is 16px, inner padding is 16px => total bottom padding 32px
    const finalCardHeight = Math.round(bannerYMeasured + bannerH + 32);

    // ─────────────────────────────────────────────────────────────────
    // PASS 2: Pixel-Perfect High-Res Rendering onto Exact Canvas
    // ─────────────────────────────────────────────────────────────────
    canvas.height = finalCardHeight;

    // 1. Background Fill
    if (isDark) {
      const grad = ctx.createLinearGradient(0, 0, 0, finalCardHeight);
      grad.addColorStop(0, '#001028');
      grad.addColorStop(0.5, '#001832');
      grad.addColorStop(1, '#000A18');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, cardWidth, finalCardHeight);

      // Subtle delicate gold grid
      ctx.strokeStyle = 'rgba(248, 200, 0, 0.035)';
      ctx.lineWidth = 1;
      for (let x = 0; x < cardWidth; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, finalCardHeight);
        ctx.stroke();
      }
      for (let y = 0; y < finalCardHeight; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(cardWidth, y);
        ctx.stroke();
      }

      // Outer border frame with StudyPlug gold accent
      drawRoundRect(ctx, 16, 16, cardWidth - 32, finalCardHeight - 32, 24, undefined, '#F8C800', 1.8);
    } else {
      ctx.fillStyle = '#F8F8F8';
      ctx.fillRect(0, 0, cardWidth, finalCardHeight);

      // Clean white card frame with crisp border
      drawRoundRect(ctx, 16, 16, cardWidth - 32, finalCardHeight - 32, 24, '#FFFFFF', '#E2E8F0', 2);
    }

    let drawY = 55;

    // 2. Top Header Strip
    // StudyPlug Logo Badge
    const brandBadgeBg = isDark ? '#001832' : '#001028';
    const brandBadgeBorder = '#F8C800';
    const brandTextColor = '#F8C800';
    drawRoundRect(ctx, 40, drawY, 205, 42, 21, brandBadgeBg, brandBadgeBorder, 1.5);

    ctx.font = 'bold 18px "Segoe UI", Arial, sans-serif';
    ctx.fillStyle = brandTextColor;
    ctx.fillText('⚡ StudyPlug', 60, drawY + 27);

    // Subject & Exam Pill
    ctx.font = 'bold 12.5px "Segoe UI", Arial, sans-serif';
    const pillMetrics = ctx.measureText(examPillText);
    const pillW = Math.max(160, pillMetrics.width + 32);
    const pillX = cardWidth - 40 - pillW;

    drawRoundRect(
      ctx,
      pillX,
      drawY,
      pillW,
      42,
      21,
      isDark ? 'rgba(255, 255, 255, 0.08)' : '#F1F5F9',
      isDark ? 'rgba(248, 200, 0, 0.3)' : '#CBD5E1',
      1
    );
    ctx.fillStyle = isDark ? '#FFFFFF' : '#001028';
    ctx.fillText(examPillText, pillX + 16, drawY + 26);

    drawY += 72;

    // 3. Topic & Subtopic Tag
    if (fullTopic) {
      ctx.font = '600 13px "Segoe UI", Arial, sans-serif';
      ctx.fillStyle = isDark ? '#F8C800' : '#475569';
      ctx.fillText(`📌 Topic: ${fullTopic}`, 45, drawY);
      drawY += 28;
    }

    // 4. Main Body Content
    if (mode === 'question' && questionData) {
      // Question Text
      ctx.font = 'bold 20px "Segoe UI", Arial, sans-serif';
      ctx.fillStyle = isDark ? '#FFFFFF' : '#0F172A';
      qLines.forEach((line) => {
        ctx.fillText(line, 45, drawY);
        drawY += 30;
      });
      drawY += 16;

      // Render Options A, B, C, D
      parsedOptions.forEach((opt) => {
        const isCorrect = includeAnswer && opt.key === questionData.correctAnswer;
        const optBoxBg = isCorrect
          ? (isDark ? 'rgba(34, 197, 94, 0.18)' : '#DCFCE7')
          : (isDark ? '#001832' : '#F8FAFC');
        const optBorder = isCorrect
          ? '#22C55E'
          : (isDark ? 'rgba(255, 255, 255, 0.12)' : '#E2E8F0');

        drawRoundRect(ctx, 45, drawY, cardWidth - 90, opt.height, 14, optBoxBg, optBorder, isCorrect ? 2 : 1);

        // Circle Key (A, B, C, D)
        const circleBg = isCorrect ? '#16A34A' : (isDark ? '#001028' : '#001028');
        const circleBorder = isCorrect ? undefined : '#F8C800';
        const circleText = isCorrect ? '#FFFFFF' : '#F8C800';
        const circleY = drawY + Math.round((opt.height - 34) / 2);

        drawRoundRect(ctx, 55, circleY, 34, 34, 17, circleBg, circleBorder, 1);

        ctx.font = 'bold 15px "Segoe UI", Arial, sans-serif';
        ctx.fillStyle = circleText;
        ctx.fillText(opt.key, 67, circleY + 22);

        // Option text
        ctx.font = '500 16px "Segoe UI", Arial, sans-serif';
        ctx.fillStyle = isCorrect ? (isDark ? '#4ADE80' : '#15803D') : (isDark ? '#F1F5F9' : '#1E293B');

        const textStartY = opt.lines.length <= 1
          ? drawY + Math.round(opt.height / 2) + 6
          : drawY + 24;

        opt.lines.forEach((line, idx) => {
          ctx.fillText(line, 102, textStartY + idx * 24);
        });

        if (isCorrect) {
          ctx.font = 'bold 12.5px "Segoe UI", Arial, sans-serif';
          ctx.fillStyle = '#22C55E';
          ctx.fillText('✓ CORRECT ANSWER', cardWidth - 215, drawY + Math.round(opt.height / 2) + 5);
        }

        drawY += opt.height + 10;
      });

      // Explanation Box
      if (includeAnswer && expLines.length > 0) {
        drawY += 6;
        const expBoxY = drawY;
        const expBoxBg = isDark ? '#001E3D' : '#F0FDF4';
        const expBoxBorder = isDark ? '#F8C800' : '#86EFAC';
        drawRoundRect(ctx, 45, expBoxY, cardWidth - 90, expHeight, 16, expBoxBg, expBoxBorder, 1.5);

        ctx.font = 'bold 13px "Segoe UI", Arial, sans-serif';
        ctx.fillStyle = isDark ? '#F8C800' : '#166534';
        ctx.fillText('💡 DETAILED SOLUTION & EXPLANATION:', 65, expBoxY + 28);

        ctx.font = '400 14px "Segoe UI", Arial, sans-serif';
        ctx.fillStyle = isDark ? '#E2E8F0' : '#1E293B';
        expLines.forEach((line, idx) => {
          ctx.fillText(line, 65, expBoxY + 52 + idx * 22);
        });

        drawY = expBoxY + expHeight + 14;
      }
    } else if (mode === 'note' && noteData) {
      // Section Title
      if (noteData.sectionTitle) {
        ctx.font = 'bold 22px "Segoe UI", Arial, sans-serif';
        ctx.fillStyle = isDark ? '#F8C800' : '#001028';
        ctx.fillText(noteData.sectionTitle, 48, drawY + 10);
        drawY += 38;
      }

      // Quote / Note Snippet Card
      const noteBoxY = drawY;
      drawRoundRect(
        ctx,
        45,
        noteBoxY,
        cardWidth - 90,
        noteBoxH,
        18,
        isDark ? '#001832' : '#FFFFFF',
        isDark ? '#F8C800' : '#CBD5E1',
        1.5
      );

      // Quote icon
      ctx.font = 'bold 36px serif';
      ctx.fillStyle = isDark ? '#F8C800' : '#001028';
      ctx.fillText('“', 65, noteBoxY + 42);

      // Body text
      ctx.font = '400 17px "Segoe UI", Arial, sans-serif';
      ctx.fillStyle = isDark ? '#F8FAFC' : '#1E293B';
      noteLines.forEach((line, idx) => {
        ctx.fillText(line, 65, noteBoxY + 68 + idx * 27);
      });

      drawY = noteBoxY + noteBoxH + 18;

      // Key Formula / Concept if any
      if (noteData.keyFormula) {
        drawRoundRect(ctx, 45, drawY, cardWidth - 90, 56, 14, isDark ? '#001E3D' : '#EFF6FF', '#3B82F6', 1);
        ctx.font = 'bold 15px "Segoe UI", Arial, sans-serif';
        ctx.fillStyle = '#60A5FA';
        ctx.fillText('⚡ Key Concept / Formula:', 65, drawY + 34);

        ctx.font = 'bold 15px "Segoe UI", Arial, sans-serif';
        ctx.fillStyle = isDark ? '#FFFFFF' : '#1E293B';
        ctx.fillText(noteData.keyFormula, 260, drawY + 34);

        drawY += 72;
      }
    }

    // 5. Clean, Non-Distracting Advert Footer
    const footerY = drawY + 12;
    ctx.strokeStyle = isDark ? 'rgba(248, 200, 0, 0.25)' : '#E2E8F0';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(45, footerY);
    ctx.lineTo(cardWidth - 45, footerY);
    ctx.stroke();

    const bannerY = footerY + 16;
    const bannerBoxBg = isDark ? '#001832' : '#001028';
    drawRoundRect(ctx, 45, bannerY, cardWidth - 90, 80, 16, bannerBoxBg, '#F8C800', 1.5);

    // Left: StudyPlug Icon & Name
    ctx.font = 'bold 17px "Segoe UI", Arial, sans-serif';
    ctx.fillStyle = '#F8C800';
    ctx.fillText('⚡ StudyPlug — Nigeria’s #1 Exam Prep', 68, bannerY + 33);

    // Subtitle
    ctx.font = '500 12.5px "Segoe UI", Arial, sans-serif';
    ctx.fillStyle = isDark ? '#94A3B8' : '#CBD5E1';
    ctx.fillText('35,000+ JAMB & WAEC Past Questions • Smart Notes • AI Study Companion', 68, bannerY + 57);

    // Right: Action Pill with URL
    drawRoundRect(ctx, cardWidth - 250, bannerY + 18, 185, 44, 22, '#F8C800', undefined, 0);
    ctx.font = 'bold 13px "Segoe UI", Arial, sans-serif';
    ctx.fillStyle = '#001028';
    ctx.fillText('🌐 studyplug.com.ng', cardWidth - 238, bannerY + 45);

    // Convert Canvas to Data URL for live preview
    try {
      const dataUrl = canvas.toDataURL('image/png');
      setCardImageUrl(dataUrl);
    } catch (e) {
      console.warn('Canvas toDataURL warning:', e);
    }

    setIsGenerating(false);
  }, [mode, questionData, noteData, includeAnswer, theme]);

  // Re-render whenever options or modal visibility changes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        renderCard();
      }, 100);
    }
  }, [isOpen, renderCard]);

  if (!isOpen) return null;

  // Handle Download Image (PNG)
  const handleDownload = () => {
    if (!cardImageUrl) return;
    const a = document.createElement('a');
    a.href = cardImageUrl;
    const filename = mode === 'question'
      ? `studyplug_${questionData?.subject || 'question'}_q.png`
      : `studyplug_${noteData?.subject || 'note'}_snippet.png`;
    a.download = filename.toLowerCase().replace(/\s+/g, '_');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setCopyStatus('Image downloaded! 📥');
    setTimeout(() => setCopyStatus(''), 2500);
  };

  // Handle Web Share (WhatsApp / System Share)
  const handleShare = async () => {
    if (!canvasRef.current) return;

    const shareTitle = mode === 'question'
      ? `StudyPlug Question: ${questionData?.subject || 'Practice'}`
      : `StudyPlug Note: ${noteData?.subject || 'Study'}`;
    const shareText = `Check this ${mode === 'question' ? 'question challenge' : 'study note'} from StudyPlug! Practice 35,000+ past questions on www.studyplug.com.ng`;

    // Try sharing file using navigator.share
    if (navigator.share) {
      try {
        canvasRef.current.toBlob(async (blob) => {
          if (!blob) {
            await navigator.share({ title: shareTitle, text: shareText, url: 'https://studyplug.com.ng' });
            return;
          }
          const file = new File([blob], 'studyplug_card.png', { type: 'image/png' });
          if (navigator.canShare && navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: shareTitle,
              text: shareText
            });
            setCopyStatus('Shared successfully! 🎉');
            setTimeout(() => setCopyStatus(''), 2500);
          } else {
            await navigator.share({ title: shareTitle, text: shareText, url: 'https://studyplug.com.ng' });
          }
        }, 'image/png');
        return;
      } catch (err) {
        console.log('Share error or canceled:', err);
      }
    }

    // Fallback: copy link & download image
    handleDownload();
  };

  // Handle Copy to Clipboard (Image blob if supported, fallback to text)
  const handleCopy = async () => {
    if (!canvasRef.current) return;

    try {
      canvasRef.current.toBlob(async (blob) => {
        if (blob && navigator.clipboard && (window as any).ClipboardItem) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            setCopyStatus('Image copied to clipboard! 📋');
            setTimeout(() => setCopyStatus(''), 2500);
            return;
          } catch (e) {
            console.log('ClipboardItem write failed, fallback to text');
          }
        }
        // Fallback text copy
        const textToCopy = mode === 'question'
          ? `[StudyPlug Question Challenge]\n${questionData?.subject} - ${questionData?.topic || ''}\n${stripHtml(questionData?.text || '')}\nPractice more at https://studyplug.com.ng`
          : `[StudyPlug Study Note]\n${noteData?.subject} - ${noteData?.topic}\n${stripHtml(noteData?.snippetText || '')}\nRead notes at https://studyplug.com.ng`;
        await navigator.clipboard.writeText(textToCopy);
        setCopyStatus('Text copied to clipboard! 📋');
        setTimeout(() => setCopyStatus(''), 2500);
      }, 'image/png');
    } catch (e) {
      setCopyStatus('Download image to share ⬇️');
      setTimeout(() => setCopyStatus(''), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-page-enter">
      <div className="bg-white rounded-3xl max-w-xl w-full border border-[#D0DBD8] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header Strip */}
        <div className="px-5 py-4 bg-[#001028] text-white flex items-center justify-between border-b border-[#F8C800]/20">
          <div className="flex items-center space-x-2">
            <span className="text-xl">📤</span>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold tracking-tight">
                Share as Study Card
              </h3>
              <p className="text-[11px] text-[#F8C800]/80">
                Crisp image with StudyPlug branding for WhatsApp &amp; friends
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-bold cursor-pointer transition"
          >
            ✕
          </button>
        </div>

        {/* Customization Options Bar */}
        <div className="px-5 py-3 bg-[#F8F8F8] border-b border-[#E4EAE8] flex items-center justify-between gap-2 flex-wrap text-xs">
          {/* Theme Selector */}
          <div className="flex items-center space-x-1.5">
            <span className="text-gray-500 font-semibold">Theme:</span>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                theme === 'dark'
                  ? 'bg-[#001028] text-[#F8C800] border border-[#F8C800]/40 shadow-xs'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Dark Navy
            </button>
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                theme === 'light'
                  ? 'bg-[#001028] text-[#F8C800] border border-[#F8C800]/40 shadow-xs'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Clean White
            </button>
          </div>

          {/* Toggle Answer (for questions) */}
          {mode === 'question' && questionData?.correctAnswer && (
            <label className="flex items-center space-x-1.5 cursor-pointer font-bold text-gray-700">
              <input
                type="checkbox"
                checked={includeAnswer}
                onChange={(e) => setIncludeAnswer(e.target.checked)}
                className="w-4 h-4 rounded text-[#001028] accent-[#001028] focus:ring-[#F8C800] cursor-pointer"
              />
              <span>Include Solution</span>
            </label>
          )}
        </div>

        {/* Preview Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#000C1E] flex flex-col items-center justify-center min-h-[260px]">
          {/* Hidden Canvas used for high-res generation */}
          <canvas ref={canvasRef} className="hidden" />

          {/* High-res Image Preview */}
          {cardImageUrl ? (
            <div className="relative group max-w-full">
              <img
                src={cardImageUrl}
                alt="StudyPlug Card Preview"
                className="rounded-2xl max-h-[50vh] w-auto shadow-2xl border-2 border-[#F8C800]/50 object-contain mx-auto"
              />
              <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-xs text-[10px] font-bold text-[#F8C800] border border-[#F8C800]/40">
                HQ 800px PNG
              </span>
            </div>
          ) : (
            <div className="text-white/60 text-xs flex items-center space-x-2 py-10">
              <span className="animate-spin">⏳</span>
              <span>Rendering study card...</span>
            </div>
          )}
        </div>

        {/* Action Status Feedback */}
        {copyStatus && (
          <div className="px-4 py-2 bg-[#001028] text-[#F8C800] border-y border-[#F8C800]/30 text-xs font-bold text-center animate-fade-in">
            {copyStatus}
          </div>
        )}

        {/* Footer Buttons Bar */}
        <div className="p-4 bg-white border-t border-[#E4EAE8] flex items-center justify-between gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 touch-press"
          >
            <span>📋</span>
            <span>Copy Card</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-[#F8C800] bg-[#F8C800]/10 hover:bg-[#F8C800]/20 text-[#001028] font-bold text-xs transition cursor-pointer flex items-center justify-center space-x-1.5 touch-press"
          >
            <span>⬇️</span>
            <span>Download PNG</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center space-x-1.5 shadow-md touch-press shrink-0"
          >
            <span>📲</span>
            <span>Share to WhatsApp / Apps</span>
          </button>
        </div>
      </div>
    </div>
  );
};
