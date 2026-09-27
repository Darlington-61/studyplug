import { Question } from '../../../data/questions';
import { LessonNote } from '../../../data/masterLessonNotes';
import {
  ScriptSection,
  VideoScene,
  YouTubeSeoData,
  CostEstimate,
  VideoPlanSummary,
  TitleOption,
  VideoType,
  VideoAspectRatio,
  TopicScale,
  SubjectModality
} from './types';

/**
 * Maps subject name to subject theme for visual rendering
 */
function getSubjectTheme(subject: string): VideoScene['subjectTheme'] {
  const s = (subject || '').toLowerCase();
  if (s.includes('phys')) return 'physics';
  if (s.includes('math')) return 'mathematics';
  if (s.includes('chem')) return 'chemistry';
  if (s.includes('bio')) return 'biology';
  if (s.includes('lit')) return 'literature';
  if (s.includes('eng')) return 'english';
  if (s.includes('comm') || s.includes('acc') || s.includes('econ')) return 'commercial';
  if (s.includes('gov') || s.includes('civic')) return 'government';
  if (s.includes('geo')) return 'geography';
  if (s.includes('crs') || s.includes('irs') || s.includes('irk')) return 'crs';
  return 'general';
}

/**
 * Converts script sections into structured visual scenes for rendering
 */
export function buildVideoScenes(
  scriptSections: ScriptSection[],
  subject: string = 'Physics',
  aspectRatio: VideoAspectRatio = '16:9'
): VideoScene[] {
  const totalDuration = scriptSections.reduce((acc, s) => acc + (s.durationSeconds || 20), 0);
  let accumulatedTime = 0;
  const theme = getSubjectTheme(subject);

  return scriptSections.map((sec, idx) => {
    accumulatedTime += sec.durationSeconds || 20;
    const progressPercent = Math.min(100, Math.round((accumulatedTime / totalDuration) * 100));

    let sceneType: VideoScene['sceneType'] = 'concept';
    let visualType: VideoScene['visualType'] = 'split';

    if (sec.type === 'hook') {
      sceneType = 'hook';
      visualType = 'hero_card';
    } else if (sec.type === 'objectives') {
      sceneType = 'objectives';
      visualType = 'chalkboard';
    } else if (sec.type === 'top_concept') {
      sceneType = 'concept';
      if (sec.modality === 'text_extract_based') {
        visualType = 'text_extract';
      } else if (sec.modality === 'process_based') {
        visualType = 'process_flow';
      } else {
        visualType = 'split';
      }
    } else if (sec.type === 'worked_example') {
      sceneType = 'example';
      if (sec.modality === 'text_extract_based') {
        visualType = 'text_extract';
      } else if (sec.modality === 'process_based') {
        visualType = 'process_flow';
      } else if (theme === 'commercial') {
        visualType = 'ledger_sheet';
      } else {
        visualType = 'equation_reveal';
      }
    } else if (sec.type === 'section_header') {
      sceneType = 'section_header';
      visualType = 'section_banner';
    } else if (sec.type === 'past_question') {
      sceneType = 'question';
      visualType = 'cbt_terminal';
    } else if (sec.type === 'solution_breakdown') {
      sceneType = 'solution';
      visualType = 'chalkboard';
    } else if (sec.type === 'theory_question') {
      sceneType = 'theory_card';
      visualType = 'theory_paper';
    } else if (sec.type === 'theory_solution') {
      sceneType = 'theory_solution';
      visualType = 'chalkboard';
    } else if (sec.type === 'practical_setup') {
      sceneType = 'practical_setup';
      visualType = 'practical_sheet';
    } else if (sec.type === 'practical_graph') {
      sceneType = 'practical_graph';
      visualType = 'practical_sheet';
    } else if (sec.type === 'practical_precautions') {
      sceneType = 'practical_precautions';
      visualType = 'chalkboard';
    } else if (sec.type === 'exam_tips') {
      sceneType = 'exam_tip';
      visualType = 'chalkboard';
    } else if (sec.type === 'cta') {
      sceneType = 'cta';
      visualType = 'hero_card';
    }

    const keyPoints = (sec.onScreenText || '')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0 && !line.startsWith('STUDYPLUG'));

    return {
      sceneId: `scene-${idx + 1}`,
      sceneType,
      duration: sec.durationSeconds || 20,
      durationSeconds: sec.durationSeconds || 20,
      visualType,
      subjectTheme: theme,
      title: sec.title,
      subtitle: sec.sourceLabel || (sec.questionData as any)?.sourceLabel || (sec.type === 'past_question' ? `${(sec.questionData as any)?.exam || ''} ${(sec.questionData as any)?.year || ''}` : undefined),
      onScreenText: sec.onScreenText,
      narrationText: sec.narrationText || sec.spokenNarration,
      questionId: (sec.questionData as any)?.id,
      keyPoints: keyPoints.slice(0, 6),
      calculationSteps: sec.calculationSteps,
      questionData: sec.questionData,
      diagramId: sec.diagramId,
      diagramSvg: (sec.questionData as any)?.image_svg,
      timerSeconds: sec.timerDurationSeconds || 5,
      animation: idx % 2 === 0 ? 'step_reveal' : 'fade',
      transition: 'crossfade',
      progressPercent,
      paperType: sec.paperType,
      sourceLabel: sec.sourceLabel,
      practicalDetails: sec.practicalDetails,
      modality: sec.modality
    };
  });
}

/**
 * Automatically generates 3 title options, YouTube description, chapters, and pinned comment
 */
export function generateYouTubeSeo(options: {
  exam: string;
  subject: string;
  topic: string;
  subtopic: string;
  scenes: VideoScene[];
  videoType: VideoType;
  questionCount?: number;
  paperTypes?: ('OBJ' | 'Theory' | 'Practical')[];
  jambDayNumber?: number;
  partTitle?: string;
  targetDurationMinutes?: number;
}): YouTubeSeoData {
  const {
    exam,
    subject,
    topic,
    subtopic,
    scenes,
    videoType,
    questionCount = 5,
    paperTypes = ['OBJ'],
    jambDayNumber,
    partTitle,
    targetDurationMinutes = 15
  } = options;

  const isMultiPaper = paperTypes.length > 1;
  const is100Days = videoType === '100_days_jamb';
  const hasTheory = paperTypes.includes('Theory');
  const hasPractical = paperTypes.includes('Practical');

  let titleOptions: TitleOption[] = [];

  if (is100Days) {
    const dayTag = jambDayNumber ? `Day ${jambDayNumber}` : 'Day 1';
    const partTag = partTitle ? `[${partTitle}] ` : '';

    titleOptions = [
      {
        id: 'opt-1',
        title: `100 Days to JAMB — ${dayTag}: ${subject} — ${topic} ${partTag}Explained + Past Questions | StudyPlug`,
        style: 'Official 100 Days Series',
        isRecommended: true
      },
      {
        id: 'opt-2',
        title: `JAMB ${subject} Made Easy: ${topic} Complete Masterclass | 100 Days to JAMB ${dayTag}`,
        style: 'High Click-Through & Student-Friendly'
      },
      {
        id: 'opt-3',
        title: `Master ${topic} for JAMB ${subject}: Syllabus Concepts, Demonstrations & Speed Drills`,
        style: 'Comprehensive Academic Standard'
      }
    ];
  } else if (isMultiPaper) {
    const papersTag = paperTypes.join(' + ');
    titleOptions = [
      {
        id: 'opt-1',
        title: `${exam} ${subject}: ${topic} — ${papersTag} Past Questions Explained | StudyPlug`,
        style: 'All-in-One Multi-Paper',
        isRecommended: true
      },
      {
        id: 'opt-2',
        title: `Stop Failing ${topic} in ${exam} ${subject}: Complete OBJ, Theory & Practical Breakdown`,
        style: 'High Click-Through & Student-Friendly'
      },
      {
        id: 'opt-3',
        title: `${exam} ${subject} Masterclass: Master ${topic} Across All Exam Papers`,
        style: 'Academic & Examination Focused'
      }
    ];
  } else if (hasPractical) {
    titleOptions = [
      {
        id: 'opt-1',
        title: `${exam} ${subject} Practical: ${topic} Experiment, Table, Graph & Precautions | StudyPlug`,
        style: 'Practical Specialist',
        isRecommended: true
      },
      {
        id: 'opt-2',
        title: `How to Score 25/25 in ${exam} ${subject} Practical: ${topic} Step-by-Step`,
        style: 'Score-Boosting Guide'
      },
      {
        id: 'opt-3',
        title: `${exam} ${subject} Paper 3: ${topic} Laboratory Investigation & Calculations`,
        style: 'Academic Syllabus Standard'
      }
    ];
  } else if (hasTheory) {
    titleOptions = [
      {
        id: 'opt-1',
        title: `${exam} ${subject} Theory: ${topic} Questions & Marking Scheme Rubrics | StudyPlug`,
        style: 'Marking Scheme Specialist',
        isRecommended: true
      },
      {
        id: 'opt-2',
        title: `${exam} ${subject} Theory Questions Students Must Understand on ${topic}`,
        style: 'High Click-Through & Student-Friendly'
      },
      {
        id: 'opt-3',
        title: `Master ${exam} ${subject} Essay Questions: ${topic} Step-by-Step Derivations`,
        style: 'Comprehensive Derivation'
      }
    ];
  } else {
    titleOptions = [
      {
        id: 'opt-1',
        title: `${exam} ${subject}: ${topic} Explained + ${questionCount} Past Questions | StudyPlug`,
        style: 'Direct & Comprehensive',
        isRecommended: true
      },
      {
        id: 'opt-2',
        title: `${topic} in ${subject} Made Easy | ${exam} Past Questions Solved Step-by-Step`,
        style: 'High Click-Through & Student-Friendly'
      },
      {
        id: 'opt-3',
        title: `Master ${topic} for ${exam} ${subject}: Concepts, Demonstrations & Exam Traps`,
        style: 'Academic & Examination Focused'
      }
    ];
  }

  const primaryTitle = titleOptions[0].title;

  // 2. Chapters (Calculated dynamically from real scenes)
  const chapters: YouTubeSeoData['chapters'] = [];
  let currentSecond = 0;

  scenes.forEach(scene => {
    const mins = Math.floor(currentSecond / 60);
    const secs = currentSecond % 60;
    const timestamp = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    let cleanTitle = scene.title
      .replace(/^\d{2}:\d{2}\s*/, '')
      .replace(/Question \d+/, 'Past Question');

    chapters.push({
      timestamp,
      seconds: currentSecond,
      title: cleanTitle
    });

    currentSecond += scene.durationSeconds;
  });

  // 3. YouTube Description
  const chaptersText = chapters.map(c => `${c.timestamp} ${c.title}`).join('\n');
  const durationLabel = targetDurationMinutes ? `${targetDurationMinutes}-Minute Masterclass` : 'Complete Masterclass';

  const description = is100Days
    ? `Welcome to 100 Days to JAMB with StudyPlug! In this comprehensive ${durationLabel}, we cover ${topic} (${subtopic || topic}) topic-by-topic under the official JAMB syllabus.

📚 CHAPTER TIMESTAMPS:
${chaptersText}

🎯 IN THIS MASTERCLASS:
• Complete syllabus coverage of core definitions and mechanisms
• Worked demonstration with exam-standard methodology
• ${questionCount} verified JAMB past questions with active CBT thinking timers
• Top examiner traps and time-saving shortcuts

🚀 PRACTICE CBT DRILLS:
Practice 50,000+ verified JAMB past questions with instant grading, timing, and AI tutor explanations:
👉 https://studyplug.com.ng

📲 DOWNLOAD STUDYPLUG APP:
• Android APK: https://studyplug.com.ng/StudyPlug.apk
• iOS App Store: https://apps.apple.com/app/studyplug

🔔 SUBSCRIBE & HIT THE BELL ICON:
Subscribe for daily 100 Days to JAMB lessons across all subjects!
"Learn it. Practice it. Master it."

#100DaysToJAMB #JAMB #JAMB${subject.replace(/\s+/g, '')} #${subject.replace(/\s+/g, '')} #StudyPlug #UTME2026 #NigerianStudents`
    : `Master ${topic} (${subtopic || topic}) for your upcoming ${exam} examination with official StudyPlug syllabus notes, progressive demonstrations, and verified past questions.

📚 CHAPTER TIMESTAMPS:
${chaptersText}

🎯 IN THIS ${durationLabel.toUpperCase()}:
• Core syllabus concepts and foundational laws
• Step-by-step worked demonstrations
• ${questionCount} authentic ${exam} past questions solved with thinking timers
• Common examiner traps and time-saving shortcuts

🚀 PRACTICE CBT DRILLS:
Take timed CBT mock exams and practice 50,000+ past questions with instant grading and AI tutoring at:
👉 https://studyplug.com.ng

📲 DOWNLOAD STUDYPLUG APP:
• Android APK: https://studyplug.com.ng/StudyPlug.apk
• iOS App Store: https://apps.apple.com/app/studyplug

🔔 SUBSCRIBE & HIT THE BELL ICON:
Subscribe to StudyPlug for daily JAMB, WAEC, NECO, and BECE tutorials!
"Learn it. Practice it. Master it."

#${exam} #${exam}${subject.replace(/\s+/g, '')} #${subject.replace(/\s+/g, '')} #StudyPlug #CBT #NigerianStudents`;

  // 4. Pinned Comment
  const pinnedComment = is100Days
    ? `📌 100 DAYS TO JAMB CHALLENGE: What was your score on the past questions solved in this video? Drop your score in the comments below! 👇

Want to test your speed with 50+ more verified JAMB CBT questions on ${topic}?
Practice free right now:
👉 https://studyplug.com.ng

Subscribe and hit the bell for Day ${((jambDayNumber || 1) + 1)} tomorrow! 🎓🔥`
    : `📌 QUICK CHECK: What was your score on the past questions solved in this video? Drop your score below! 👇

If you want to practice 50+ more verified ${exam} questions on ${topic} with instant CBT timer and AI Tutor explanations, practice free here:
👉 https://studyplug.com.ng

Subscribe for tomorrow's masterclass! 🎓✨`;

  // 5. Tags & Hashtags
  const tags = [
    exam,
    is100Days ? '100 Days to JAMB' : '',
    `${exam} ${subject}`,
    `${subject} ${topic}`,
    `${topic} explained`,
    `${exam} past questions`,
    'StudyPlug',
    'UTME practice',
    'CBT exam drill',
    'Nigerian secondary school'
  ].filter(Boolean);

  const hashtags = [
    `#${exam}`,
    is100Days ? '#100DaysToJAMB' : '',
    `#${subject.replace(/\s+/g, '')}`,
    `#${topic.replace(/\s+/g, '')}`,
    '#StudyPlug'
  ].filter(Boolean);

  return {
    title: primaryTitle,
    titleOptions,
    description,
    tags,
    hashtags,
    chapters,
    pinnedComment
  };
}

/**
 * Calculates dynamic video plan summary based on actual teaching requirements
 */
export function calculateVideoPlan(
  scenes: VideoScene[],
  scriptSections: ScriptSection[],
  questionCount: number,
  conceptsCount: number,
  voiceProfileName: string = 'Dr. Adebayo (Senior Science Examiner)',
  topicScale?: TopicScale,
  suggestedPartsCount?: number,
  selectedPartNumber?: number,
  primaryModality?: SubjectModality
): VideoPlanSummary {
  const totalSeconds = scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
  const durationMinutes = Math.floor(totalSeconds / 60);
  const remainingSecs = totalSeconds % 60;
  const formattedDuration = `${durationMinutes} min ${remainingSecs} sec`;

  const totalWords = scriptSections.reduce((words, sec) => {
    const text = sec.narrationText || sec.spokenNarration || '';
    return words + (text.trim() ? text.trim().split(/\s+/).length : 0);
  }, 0);

  return {
    targetDurationMinutes: durationMinutes,
    estimatedDurationSeconds: totalSeconds,
    formattedDuration,
    totalScenes: scenes.length,
    totalQuestions: questionCount,
    topConceptsCount: conceptsCount,
    voiceoverWordCount: totalWords,
    voiceProvider: 'Voicebox AI (Cloned Voice)',
    voiceProfile: voiceProfileName,
    topicScale,
    suggestedPartsCount,
    selectedPartNumber,
    primaryModality
  };
}

/**
 * Calculates generation cost in Nigerian Naira
 */
export function calculateCostEstimate(scenes: VideoScene[], scriptSections: ScriptSection[]): CostEstimate {
  const totalSeconds = scenes.reduce((sum, s) => sum + s.durationSeconds, 0);
  const durationMinutes = Number((totalSeconds / 60).toFixed(1));

  const totalWords = scriptSections.reduce((words, sec) => {
    const text = sec.narrationText || sec.spokenNarration || '';
    return words + (text.trim() ? text.trim().split(/\s+/).length : 0);
  }, 0);

  // Rate calculations in Nigerian Naira (₦)
  const voiceNaira = Math.round(totalWords * 1.5);
  const visualNaira = scenes.length * 180;
  const renderingNaira = 200 + (scenes.length * 50);
  const totalNaira = voiceNaira + visualNaira + renderingNaira;

  return {
    durationMinutes,
    durationSeconds: totalSeconds,
    totalWords,
    voiceNaira,
    visualNaira,
    renderingNaira,
    totalNaira
  };
}
