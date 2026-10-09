import React, { useState, useRef, useEffect } from 'react';
import { VideoScene, VideoAspectRatio } from './types';

interface FlashcardSceneStudioProps {
  scenes: VideoScene[];
  onUpdateScenes: (updated: VideoScene[]) => void;
  aspectRatio: VideoAspectRatio;
  onProceedToPlayer: () => void;
  subjectName?: string;
  examName?: string;
}

export const FlashcardSceneStudio: React.FC<FlashcardSceneStudioProps> = ({
  scenes,
  onUpdateScenes,
  aspectRatio,
  onProceedToPlayer,
  subjectName = 'Mathematics',
  examName = 'JAMB'
}) => {
  const [activeCardIdx, setActiveCardIdx] = useState<number>(0);
  const [editingCardIdx, setEditingCardIdx] = useState<number | null>(null);

  // Audio / Video Recording states
  const [recordingSceneId, setRecordingSceneId] = useState<string | null>(null);
  const [recordingType, setRecordingType] = useState<'audio' | 'video' | null>(null);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timerIntervalRef = useRef<any>(null);
  const liveVideoPreviewRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const uploadTargetSceneIdRef = useRef<string | null>(null);

  // Clean up media streams and timers on unmount
  useEffect(() => {
    return () => {
      stopAnyActiveRecording();
    };
  }, []);

  const stopAnyActiveRecording = () => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {}
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setRecordingSceneId(null);
    setRecordingType(null);
    setRecordingDuration(0);
  };

  // ─── START VOICE RECORDING ─────────────────────────────────────────────
  const startVoiceRecording = async (sceneId: string) => {
    stopAnyActiveRecording();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      recordedChunksRef.current = [];

      let mimeType = 'audio/webm;codecs=opus';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'audio/webm';
      }
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = '';
      }

      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          recordedChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(recordedChunksRef.current, { type: mimeType || 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);

        // Calculate audio duration roughly or update scene
        const updated = scenes.map((s) => {
          if (s.sceneId === sceneId) {
            const recordedSec = Math.max(5, Math.ceil(recordingDuration));
            return {
              ...s,
              userAudioUrl: audioUrl,
              userAudioBlob: audioBlob,
              durationSeconds: Math.max(s.durationSeconds, recordedSec)
            };
          }
          return s;
        });
        onUpdateScenes(updated);
        stopAnyActiveRecording();
      };

      recorder.start(100);
      setRecordingSceneId(sceneId);
      setRecordingType('audio');
      setRecordingDuration(0);

      timerIntervalRef.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);
    } catch (err: any) {
      alert('Could not access microphone: ' + (err.message || 'Permission denied'));
      stopAnyActiveRecording();
    }
  };

  // ─── START WEBCAM / VIDEO RECORDING ─────────────────────────────────────
  const startVideoRecording = async (sceneId: string) => {
    stopAnyActiveRecording();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
        audio: true
      });
      streamRef.current = stream;
      recordedChunksRef.current = [];

      // Attach to live preview if available
      if (liveVideoPreviewRef.current) {
        liveVideoPreviewRef.current.srcObject = stream;
        liveVideoPreviewRef.current.play().catch(() => {});
      }

      let mimeType = 'video/webm;codecs=vp8,opus';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
      }
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/mp4';
      }

      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          recordedChunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const videoBlob = new Blob(recordedChunksRef.current, { type: mimeType || 'video/webm' });
        const videoUrl = URL.createObjectURL(videoBlob);

        const updated = scenes.map((s) => {
          if (s.sceneId === sceneId) {
            const recordedSec = Math.max(5, Math.ceil(recordingDuration));
            return {
              ...s,
              userVideoUrl: videoUrl,
              userVideoBlob: videoBlob,
              mediaLayout: s.mediaLayout || 'pip_bottom_right',
              durationSeconds: Math.max(s.durationSeconds, recordedSec)
            };
          }
          return s;
        });
        onUpdateScenes(updated);
        stopAnyActiveRecording();
      };

      recorder.start(100);
      setRecordingSceneId(sceneId);
      setRecordingType('video');
      setRecordingDuration(0);

      timerIntervalRef.current = setInterval(() => {
        setRecordingDuration(prev => prev + 1);
      }, 1000);
    } catch (err: any) {
      alert('Could not access camera/microphone: ' + (err.message || 'Permission denied'));
      stopAnyActiveRecording();
    }
  };

  // ─── STOP RECORDING ──────────────────────────────────────────────────
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  // ─── FILE UPLOAD (AUDIO OR VIDEO) ────────────────────────────────────
  const triggerFileUpload = (sceneId: string) => {
    uploadTargetSceneIdRef.current = sceneId;
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const targetSceneId = uploadTargetSceneIdRef.current;
    if (!file || !targetSceneId) return;

    const fileUrl = URL.createObjectURL(file);
    const isVideo = file.type.startsWith('video/') || /\.(mp4|webm|mov|m4v)$/i.test(file.name);
    const isAudio = file.type.startsWith('audio/') || /\.(mp3|wav|m4a|ogg|aac)$/i.test(file.name);

    const updated = scenes.map((s) => {
      if (s.sceneId === targetSceneId) {
        if (isVideo) {
          return {
            ...s,
            userVideoUrl: fileUrl,
            userVideoBlob: file,
            mediaLayout: s.mediaLayout || 'pip_bottom_right'
          };
        } else if (isAudio) {
          return {
            ...s,
            userAudioUrl: fileUrl,
            userAudioBlob: file
          };
        }
      }
      return s;
    });

    onUpdateScenes(updated);
  };

  // ─── REMOVE ATTACHED MEDIA ──────────────────────────────────────────
  const removeMedia = (sceneId: string, type: 'audio' | 'video') => {
    const updated = scenes.map((s) => {
      if (s.sceneId === sceneId) {
        if (type === 'audio') {
          return { ...s, userAudioUrl: undefined, userAudioBlob: undefined };
        } else {
          return { ...s, userVideoUrl: undefined, userVideoBlob: undefined };
        }
      }
      return s;
    });
    onUpdateScenes(updated);
  };

  // ─── CARD FIELD EDITING ─────────────────────────────────────────────
  const updateSceneField = (sceneId: string, field: keyof VideoScene, value: any) => {
    const updated = scenes.map((s) => {
      if (s.sceneId === sceneId) {
        return { ...s, [field]: value };
      }
      return s;
    });
    onUpdateScenes(updated);
  };

  // ─── ADD NEW FLASHCARD ───────────────────────────────────────────────
  const handleAddNewFlashcard = () => {
    const newIdx = scenes.length + 1;
    const newCard: VideoScene = {
      sceneId: `flashcard-custom-${Date.now()}`,
      sceneType: 'concept',
      duration: 15,
      durationSeconds: 15,
      visualType: 'split',
      subjectTheme: 'general',
      title: `Concept Key Point #${newIdx}`,
      subtitle: `${examName} Standard • Flashcard`,
      onScreenText: 'Define key rule and review authentic past question example.',
      narrationText: 'Review this key concept carefully. Remember to apply the core principle step by step.',
      keyPoints: ['Core definition and fundamental principle', 'Step-by-step application rule'],
      progressPercent: Math.min(100, Math.round((newIdx / (scenes.length + 1)) * 100)),
      isFlashcardStyle: true,
      flashcardFront: 'State the governing principle or formula:',
      flashcardBack: 'Clear explanation of the rule with standard syllabus notation.',
      flashcardExample: 'WAEC / JAMB Model Example: Apply formula directly with explicit units.',
      mediaLayout: 'flashcard_only'
    };
    onUpdateScenes([...scenes, newCard]);
    setActiveCardIdx(scenes.length);
  };

  // ─── DELETE FLASHCARD ───────────────────────────────────────────────
  const handleDeleteCard = (sceneId: string) => {
    if (scenes.length <= 1) {
      alert('You must keep at least 1 flashcard in the video project.');
      return;
    }
    const updated = scenes.filter(s => s.sceneId !== sceneId);
    onUpdateScenes(updated);
    setActiveCardIdx(Math.max(0, activeCardIdx - 1));
  };

  // ─── MOVE FLASHCARD UP/DOWN ─────────────────────────────────────────
  const handleMoveCard = (index: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= scenes.length) return;
    const copy = [...scenes];
    const temp = copy[index];
    copy[index] = copy[targetIdx];
    copy[targetIdx] = temp;
    onUpdateScenes(copy);
    setActiveCardIdx(targetIdx);
  };

  const totalDurationMinutes = Math.round(scenes.reduce((sum, s) => sum + s.durationSeconds, 0) / 60);

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fadeIn text-left select-none">
      {/* Hidden File Input for uploading Voice/Video */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="audio/*,video/*,.mp3,.wav,.m4a,.mp4,.webm,.mov"
        className="hidden"
      />

      {/* ─── STUDIO HEADER & ACTION STRIP ─── */}
      <div className="bg-gradient-to-r from-[#001830] via-[#001028] to-[#0A2E26] p-5 sm:p-6 rounded-[22px] border border-emerald-500/30 text-white shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#FFD600] text-[#001028] flex items-center justify-center font-black text-base shadow-xs">
              📇
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Flashcard Video Studio &amp; Multi-Media Recorder
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
              {scenes.length} Flashcards
            </span>
          </div>
          <p className="text-xs text-emerald-100/80 mt-1 max-w-xl leading-relaxed">
            Every page is an animated Flashcard. Record your authentic voice or webcam video per card, or upload video clips to mix seamlessly with flashcard visuals.
          </p>
        </div>

        <div className="flex items-center space-x-2.5 shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={handleAddNewFlashcard}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer border border-white/20"
          >
            <span>➕</span>
            <span>Add Flashcard</span>
          </button>
          <button
            type="button"
            onClick={onProceedToPlayer}
            className="px-5 py-2.5 rounded-xl bg-[#FFD600] text-[#001028] font-black text-xs hover:bg-amber-300 transition shadow-md flex items-center space-x-1.5 cursor-pointer active:scale-95"
          >
            <span>Proceed to Player &amp; Render</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* ─── LIVE WEBCAM RECORDING OVERLAY (IF RECORDING VIDEO) ─── */}
      {recordingType === 'video' && (
        <div className="bg-slate-900 border-2 border-red-500 rounded-2xl p-4 text-white space-y-3 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500 animate-ping" />
              <span className="font-extrabold text-sm text-red-400">
                LIVE CAMERA RECORDING • {Math.floor(recordingDuration / 60)}:{(recordingDuration % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <button
              type="button"
              onClick={stopRecording}
              className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-black transition cursor-pointer"
            >
              ⏹️ Stop &amp; Save Recording
            </button>
          </div>
          <div className="relative aspect-video max-w-md mx-auto rounded-xl overflow-hidden bg-black border border-white/20">
            <video
              ref={liveVideoPreviewRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover mirror"
            />
          </div>
        </div>
      )}

      {/* ─── FLASHCARDS GRID / DECK ─── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-300">
          <span>FLASHCARD DECK ({scenes.length} CARDS • ~{totalDurationMinutes} MINS)</span>
          <span className="text-emerald-400">Tap Record or Upload on any card to attach your voice or video</span>
        </div>

        <div className="space-y-4">
          {scenes.map((scene, idx) => {
            const isRecordingThis = recordingSceneId === scene.sceneId;
            const hasUserAudio = Boolean(scene.userAudioUrl);
            const hasUserVideo = Boolean(scene.userVideoUrl);

            return (
              <div
                key={scene.sceneId}
                className={`rounded-[20px] transition-all border-2 overflow-hidden bg-white shadow-sm ${
                  isRecordingThis
                    ? 'border-red-500 ring-2 ring-red-400/40 bg-red-50/10'
                    : hasUserAudio || hasUserVideo
                    ? 'border-[#001028] bg-white'
                    : 'border-slate-200 hover:border-emerald-600/40'
                }`}
              >
                {/* ── CARD HEADER BAR ── */}
                <div className="px-4 sm:px-5 py-3 bg-[#F4F8F6] border-b border-slate-200 flex items-center justify-between gap-2.5 flex-wrap">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#001028] text-white">
                      CARD {idx + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10.5px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      {scene.sceneType.toUpperCase()}
                    </span>
                    <span className="text-xs font-bold text-slate-700 truncate max-w-[200px] sm:max-w-xs">
                      {scene.title}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs">
                    {/* Duration input */}
                    <div className="flex items-center space-x-1 bg-white px-2 py-1 rounded-lg border border-slate-200">
                      <span className="text-[11px] text-slate-500 font-medium">Time:</span>
                      <input
                        type="number"
                        min="3"
                        max="180"
                        value={scene.durationSeconds}
                        onChange={(e) => updateSceneField(scene.sceneId, 'durationSeconds', Math.max(3, parseInt(e.target.value) || 10))}
                        className="w-12 text-center text-xs font-black text-slate-900 bg-transparent border-0 focus:outline-none"
                      />
                      <span className="text-[11px] text-slate-500 font-bold">s</span>
                    </div>

                    {/* Move Up/Down */}
                    <button
                      type="button"
                      disabled={idx === 0}
                      onClick={() => handleMoveCard(idx, 'up')}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-30 text-xs font-bold text-slate-700 flex items-center justify-center cursor-pointer"
                      title="Move card up"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      disabled={idx === scenes.length - 1}
                      onClick={() => handleMoveCard(idx, 'down')}
                      className="w-7 h-7 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-30 text-xs font-bold text-slate-700 flex items-center justify-center cursor-pointer"
                      title="Move card down"
                    >
                      ▼
                    </button>
                    {/* Delete card */}
                    <button
                      type="button"
                      onClick={() => handleDeleteCard(scene.sceneId)}
                      className="w-7 h-7 rounded-lg bg-white border border-rose-200 hover:bg-rose-50 text-rose-600 text-xs font-bold flex items-center justify-center cursor-pointer"
                      title="Delete card"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* ── CARD BODY: FLASHCARD PREVIEW & EDITING ── */}
                <div className="p-4 sm:p-5 space-y-4">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    {/* Left 7 Columns: Flashcard Text & Example Fields */}
                    <div className="lg:col-span-7 space-y-3">
                      <div>
                        <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1">
                          Flashcard Title / Concept Heading:
                        </label>
                        <input
                          type="text"
                          value={scene.title}
                          onChange={(e) => updateSceneField(scene.sceneId, 'title', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold text-sm text-slate-900 focus:ring-2 focus:ring-[#001028] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1">
                          Front Prompt / Core Question / Formula:
                        </label>
                        <textarea
                          rows={2}
                          value={scene.onScreenText}
                          onChange={(e) => updateSceneField(scene.sceneId, 'onScreenText', e.target.value)}
                          placeholder="e.g. State Newton's Second Law of Motion or Question Prompt"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#001028] focus:outline-none"
                        />
                      </div>

                      {/* Key Points / Solution Steps */}
                      <div>
                        <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-1">
                          Key Takeaway / Solution Bullet Points (One per line):
                        </label>
                        <textarea
                          rows={2}
                          value={(scene.keyPoints || []).join('\n')}
                          onChange={(e) => updateSceneField(scene.sceneId, 'keyPoints', e.target.value.split('\n'))}
                          placeholder="Points explaining the solution"
                          className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 font-medium focus:ring-2 focus:ring-[#001028] focus:outline-none"
                        />
                      </div>

                      {/* Worked Example Box */}
                      <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                        <span className="text-[10.5px] font-extrabold text-amber-900 uppercase flex items-center space-x-1">
                          <span>💡</span>
                          <span>Flashcard Example / Examiner Trap Box:</span>
                        </span>
                        <input
                          type="text"
                          value={scene.flashcardExample || scene.narrationText.slice(0, 140)}
                          onChange={(e) => updateSceneField(scene.sceneId, 'flashcardExample', e.target.value)}
                          placeholder="Real-world example or examiner trap warning"
                          className="w-full px-2.5 py-1.5 rounded-lg border border-amber-300 text-xs font-semibold text-slate-900 bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Right 5 Columns: Media Mixer (Voice, Video, Upload) */}
                    <div className="lg:col-span-5 bg-[#F9FBFA] p-4 rounded-2xl border border-slate-200 space-y-3.5">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-xs font-black text-[#001028] uppercase tracking-wider flex items-center space-x-1.5">
                          <span>🎙️</span>
                          <span>Media &amp; Voiceover Mixer</span>
                        </span>
                        {(hasUserAudio || hasUserVideo) && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                            Custom Media Attached ✓
                          </span>
                        )}
                      </div>

                      {/* Active Recording State for this card */}
                      {isRecordingThis && (
                        <div className="p-3 rounded-xl bg-red-50 border border-red-300 text-center space-y-2 animate-pulse">
                          <div className="text-xs font-black text-red-600 flex items-center justify-center space-x-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                            <span>RECORDING {recordingType?.toUpperCase()} ({recordingDuration}s)</span>
                          </div>
                          <button
                            type="button"
                            onClick={stopRecording}
                            className="px-4 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs shadow-xs hover:bg-red-700 transition cursor-pointer"
                          >
                            ⏹️ Stop Recording
                          </button>
                        </div>
                      )}

                      {/* Recording & Upload Buttons Strip */}
                      {!isRecordingThis && (
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {/* Voice Recorder */}
                          <button
                            type="button"
                            onClick={() => startVoiceRecording(scene.sceneId)}
                            className="p-2.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold flex flex-col items-center justify-center space-y-1 transition cursor-pointer"
                          >
                            <span className="text-base">🎤</span>
                            <span className="text-[11px]">{hasUserAudio ? 'Re-record Voice' : 'Record Voice'}</span>
                          </button>

                          {/* Webcam Recorder */}
                          <button
                            type="button"
                            onClick={() => startVideoRecording(scene.sceneId)}
                            className="p-2.5 rounded-xl border border-indigo-300 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-bold flex flex-col items-center justify-center space-y-1 transition cursor-pointer"
                          >
                            <span className="text-base">📹</span>
                            <span className="text-[11px]">{hasUserVideo ? 'Re-record Cam' : 'Record Webcam'}</span>
                          </button>

                          {/* File Upload Button (Spans 2 cols) */}
                          <button
                            type="button"
                            onClick={() => triggerFileUpload(scene.sceneId)}
                            className="col-span-2 py-2 px-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-[11px] flex items-center justify-center space-x-1.5 transition cursor-pointer"
                          >
                            <span>📁</span>
                            <span>Upload Video / Audio Clip (.mp4, .mp3, .wav)</span>
                          </button>
                        </div>
                      )}

                      {/* Display Attached Voice Preview */}
                      {hasUserAudio && (
                        <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1.5">
                          <div className="flex items-center justify-between text-[11px] font-bold text-emerald-900">
                            <span>🎤 Recorded Voice Attached</span>
                            <button
                              type="button"
                              onClick={() => removeMedia(scene.sceneId, 'audio')}
                              className="text-red-600 hover:text-red-800 text-[10.5px] cursor-pointer"
                            >
                              Remove
                            </button>
                          </div>
                          <audio src={scene.userAudioUrl} controls className="w-full h-8" />
                        </div>
                      )}

                      {/* Display Attached Video Preview & Layout Controls */}
                      {hasUserVideo && (
                        <div className="p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-200 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-bold text-indigo-900">
                            <span>📹 Attached Video Clip</span>
                            <button
                              type="button"
                              onClick={() => removeMedia(scene.sceneId, 'video')}
                              className="text-red-600 hover:text-red-800 text-[10.5px] cursor-pointer"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="relative aspect-video rounded-lg overflow-hidden bg-black max-h-36 mx-auto">
                            <video src={scene.userVideoUrl} controls className="w-full h-full object-contain" />
                          </div>

                          {/* Video Placement Layout Picker */}
                          <div className="space-y-1 pt-1">
                            <span className="text-[10px] font-black text-slate-600 uppercase tracking-wider block">
                              Video Placement with Flashcard:
                            </span>
                            <select
                              value={scene.mediaLayout || 'pip_bottom_right'}
                              onChange={(e) => updateSceneField(scene.sceneId, 'mediaLayout', e.target.value)}
                              className="w-full px-2 py-1.5 rounded-lg border border-indigo-300 text-xs font-bold text-indigo-950 bg-white focus:outline-none"
                            >
                              <option value="pip_bottom_right">🖼️ Corner Picture-in-Picture (Bottom-Right)</option>
                              <option value="pip_top_right">↗️ Corner Picture-in-Picture (Top-Right)</option>
                              <option value="split_side_by_side">🌓 Side-by-Side (50% Flashcard, 50% Video)</option>
                              <option value="full_video_bg">🎬 Full Video Background (Card Overlay)</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {/* Default Voicebox TTS fallback label */}
                      {!hasUserAudio && !hasUserVideo && (
                        <div className="p-2 rounded-lg bg-slate-100 text-[10.5px] text-slate-600 text-center font-medium">
                          Using default Voicebox AI voice until you record or upload your own audio/video.
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── BOTTOM PROCEED BAR ─── */}
      <div className="sticky bottom-4 z-20 p-4 rounded-2xl bg-[#001028] text-white shadow-xl flex items-center justify-between border border-emerald-400/40">
        <div>
          <span className="text-xs font-extrabold text-[#FFD600] uppercase tracking-wider block">
            Ready to Preview &amp; Export?
          </span>
          <span className="text-xs text-emerald-100">
            {scenes.length} Flashcard Scenes • Custom voices &amp; videos will be mixed during video rendering.
          </span>
        </div>
        <button
          type="button"
          onClick={onProceedToPlayer}
          className="px-6 py-2.5 rounded-xl bg-[#FFD600] text-[#001028] font-black text-xs hover:bg-amber-300 transition shadow-md flex items-center space-x-1.5 cursor-pointer active:scale-95"
        >
          <span>Open Video Player &amp; Render</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
