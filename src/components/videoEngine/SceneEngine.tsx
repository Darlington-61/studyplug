import React, { useState, useEffect, useRef } from 'react';
import {
  MotionSimulation,
  ProjectileAnimation,
  EquationSolver,
  ChemicalReaction,
  CellAnimation,
  QuestionCard,
  GraphAnimation,
  ConceptComparison,
  FormulaReveal
} from './animations';
import { VideoCourseStoryboard, StoryboardScene } from './storyboardData';

interface SceneEngineProps {
  storyboard: VideoCourseStoryboard;
  aspectRatio?: '16:9' | '9:16' | '1:1';
  onOpenYouTubeKit?: () => void;
  onOpenShortForm?: () => void;
}

export const SceneEngine: React.FC<SceneEngineProps> = ({
  storyboard,
  aspectRatio: initialAspectRatio = '16:9',
  onOpenYouTubeKit,
  onOpenShortForm
}) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16' | '1:1'>(initialAspectRatio);
  const [showStoryboardPanel, setShowStoryboardPanel] = useState<boolean>(false);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [sceneElapsedTime, setSceneElapsedTime] = useState<number>(0);

  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const currentScene: StoryboardScene = storyboard.scenes[currentSceneIndex] || storyboard.scenes[0];
  const totalScenes = storyboard.scenes.length;

  // Speech synthesis for current scene narration
  useEffect(() => {
    if (!isPlaying) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      return;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentScene.narration);
      utterance.rate = playbackSpeed;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        // Auto-advance to next scene if available
        if (currentSceneIndex < totalScenes - 1) {
          setCurrentSceneIndex(prev => prev + 1);
          setSceneElapsedTime(0);
        } else {
          setIsPlaying(false);
        }
      };

      utterance.onerror = () => setIsPlaying(false);

      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlaying, currentSceneIndex, playbackSpeed, currentScene.narration, totalScenes]);

  // Scene timer
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSceneElapsedTime(prev => {
        if (prev >= currentScene.durationSeconds) {
          return currentScene.durationSeconds;
        }
        return prev + 1;
      });
    }, 1000 / playbackSpeed);

    return () => clearInterval(interval);
  }, [isPlaying, currentScene.durationSeconds, playbackSpeed]);

  const handleTogglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  const handleNextScene = () => {
    if (currentSceneIndex < totalScenes - 1) {
      setCurrentSceneIndex(prev => prev + 1);
      setSceneElapsedTime(0);
    }
  };

  const handlePrevScene = () => {
    if (currentSceneIndex > 0) {
      setCurrentSceneIndex(prev => prev - 1);
      setSceneElapsedTime(0);
    }
  };

  // Render appropriate animation component
  const renderVisualAnimation = () => {
    const p = sceneElapsedTime / (currentScene.durationSeconds || 1);

    switch (currentScene.animationType) {
      case 'motion-sim':
        return (
          <MotionSimulation
            isPlaying={isPlaying}
            progress={p}
            speed={playbackSpeed}
            showFormula={currentScene.animationProps?.showFormula ?? true}
          />
        );
      case 'projectile':
        return (
          <ProjectileAnimation
            isPlaying={isPlaying}
            progress={p}
            speed={playbackSpeed}
          />
        );
      case 'equation-solver':
        return (
          <EquationSolver
            autoPlay={isPlaying}
            {...(currentScene.animationProps || {})}
          />
        );
      case 'chemical':
        return <ChemicalReaction isPlaying={isPlaying} />;
      case 'cell':
        return <CellAnimation isPlaying={isPlaying} />;
      case 'graph':
        return <GraphAnimation isPlaying={isPlaying} />;
      case 'comparison':
        return (
          <ConceptComparison
            left={currentScene.animationProps?.left}
            right={currentScene.animationProps?.right}
          />
        );
      case 'formula':
        return (
          <FormulaReveal
            title={currentScene.animationProps?.title || currentScene.title}
            formula={currentScene.animationProps?.formula || ''}
            description={currentScene.animationProps?.description || ''}
            symbols={currentScene.animationProps?.symbols || []}
            tip={currentScene.animationProps?.tip}
          />
        );
      case 'past-question':
        return (
          <QuestionCard
            question={currentScene.animationProps?.question}
            showSolutionImmediately={sceneElapsedTime > 10}
          />
        );
      default:
        return (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            Concept Illustration
          </div>
        );
    }
  };

  // Aspect ratio classes
  const getAspectRatioClasses = () => {
    if (aspectRatio === '9:16') {
      return 'aspect-[9/16] max-w-[340px] mx-auto';
    }
    if (aspectRatio === '1:1') {
      return 'aspect-square max-w-[480px] mx-auto';
    }
    return 'aspect-video w-full';
  };

  return (
    <div className="w-full flex flex-col space-y-3 font-sans select-none text-left">
      {/* Top Engine Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-[#001430] p-2.5 rounded-2xl border border-white/10 text-xs text-white">
        {/* Left: Course & Scene Info */}
        <div className="flex items-center space-x-2">
          <span className="bg-[#F8C800] text-[#001028] font-black px-2 py-0.5 rounded text-[10px] tracking-wider uppercase">
            {storyboard.exam}
          </span>
          <span className="font-bold text-white text-[12px]">{storyboard.subject}</span>
          <span className="text-slate-400 text-[11px]">• Scene {currentSceneIndex + 1}/{totalScenes}</span>
        </div>

        {/* Right: Aspect Ratio & Storyboard Toggles */}
        <div className="flex items-center space-x-2">
          {/* Aspect Ratio Switcher */}
          <div className="bg-black/40 rounded-xl p-0.5 border border-white/10 flex items-center">
            {(['16:9', '9:16', '1:1'] as const).map(ar => (
              <button
                key={ar}
                type="button"
                onClick={() => setAspectRatio(ar)}
                className={`px-2 py-1 rounded-lg text-[10px] font-black transition cursor-pointer ${
                  aspectRatio === ar
                    ? 'bg-[#F8C800] text-[#001028]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {ar === '16:9' ? '16:9 YouTube' : ar === '9:16' ? '9:16 Shorts' : '1:1 Square'}
              </button>
            ))}
          </div>

          {/* Storyboard Script Drawer Button */}
          <button
            type="button"
            onClick={() => setShowStoryboardPanel(prev => !prev)}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold border transition flex items-center space-x-1 cursor-pointer ${
              showStoryboardPanel
                ? 'bg-[#F8C800] text-[#001028] border-[#F8C800]'
                : 'bg-white/10 text-slate-200 border-white/10 hover:bg-white/20'
            }`}
          >
            <span>📋</span>
            <span>Storyboard</span>
          </button>

          {/* YouTube Kit Button */}
          {onOpenYouTubeKit && (
            <button
              type="button"
              onClick={onOpenYouTubeKit}
              className="px-2.5 py-1 rounded-xl bg-red-600/20 text-red-300 border border-red-500/30 hover:bg-red-600/30 text-xs font-bold transition flex items-center space-x-1 cursor-pointer"
            >
              <span>📺</span>
              <span>YT Kit</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Video Screen Container */}
      <div className="w-full bg-[#001028] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 relative">
        <div className={`${getAspectRatioClasses()} relative overflow-hidden transition-all duration-300`}>
          {/* Active Visual Animation */}
          {renderVisualAnimation()}

          {/* Subtitle / Caption Ticker Overlay */}
          {showCaptions && (
            <div className="absolute bottom-14 left-4 right-4 z-20 pointer-events-none">
              <div className="bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/15 text-center text-xs font-medium text-white max-w-xl mx-auto shadow-lg animate-fadeIn">
                <span className="text-[#F8C800] font-bold mr-1.5">StudyPlug AI:</span>
                <span>{currentScene.narration}</span>
              </div>
            </div>
          )}

          {/* Bottom Player Controller Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-2.5 flex items-center justify-between gap-3 text-white">
            {/* Play/Pause & Step Buttons */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handlePrevScene}
                disabled={currentSceneIndex === 0}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center text-xs font-bold cursor-pointer transition"
                title="Previous Scene"
              >
                ⏮
              </button>

              <button
                type="button"
                onClick={handleTogglePlay}
                className="w-9 h-9 rounded-full bg-[#F8C800] text-[#001028] hover:bg-yellow-300 flex items-center justify-center text-sm font-black cursor-pointer shadow-md transition hover:scale-105 active:scale-95"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>

              <button
                type="button"
                onClick={handleNextScene}
                disabled={currentSceneIndex === totalScenes - 1}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 flex items-center justify-center text-xs font-bold cursor-pointer transition"
                title="Next Scene"
              >
                ⏭
              </button>

              {/* Timecode */}
              <span className="font-mono text-[11px] text-slate-300 ml-1">
                {sceneElapsedTime}s / {currentScene.durationSeconds}s
              </span>
            </div>

            {/* Current Scene Title Indicator */}
            <div className="hidden sm:block text-center truncate max-w-xs">
              <span className="text-[11px] font-bold text-slate-200">
                {currentScene.title}
              </span>
            </div>

            {/* Right Tools: CC & Speed */}
            <div className="flex items-center space-x-2">
              {/* Captions Toggle */}
              <button
                type="button"
                onClick={() => setShowCaptions(prev => !prev)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold border transition cursor-pointer ${
                  showCaptions
                    ? 'bg-[#F8C800] text-[#001028] border-[#F8C800]'
                    : 'bg-white/10 text-slate-400 border-white/10'
                }`}
                title="Toggle Captions"
              >
                CC
              </button>

              {/* Speed Switcher */}
              <select
                value={playbackSpeed}
                onChange={e => setPlaybackSpeed(Number(e.target.value))}
                className="bg-white/10 text-white text-[10px] font-bold px-1.5 py-0.5 rounded border border-white/15 focus:outline-none cursor-pointer"
              >
                <option value={0.75} className="bg-[#001028]">0.75x</option>
                <option value={1} className="bg-[#001028]">1.0x</option>
                <option value={1.25} className="bg-[#001028]">1.25x</option>
                <option value={1.5} className="bg-[#001028]">1.5x</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Storyboard Scene-by-Scene Director Drawer */}
      {showStoryboardPanel && (
        <div className="bg-[#001430] rounded-2xl border border-white/10 p-3.5 space-y-3 animate-fadeIn text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div>
              <h3 className="font-black text-sm text-[#F8C800]">
                🎬 Scene Engine &amp; Storyboard Director
              </h3>
              <p className="text-[11px] text-slate-400">
                Detailed script breakdown synchronized with narration and animations
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowStoryboardPanel(false)}
              className="text-slate-400 hover:text-white font-bold text-sm cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-72 overflow-y-auto pr-1">
            {storyboard.scenes.map((scene, idx) => {
              const isSelected = currentSceneIndex === idx;

              return (
                <div
                  key={scene.sceneNumber}
                  onClick={() => {
                    setCurrentSceneIndex(idx);
                    setSceneElapsedTime(0);
                  }}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition ${
                    isSelected
                      ? 'bg-[#001c40] border-[#F8C800] ring-1 ring-[#F8C800]/40'
                      : 'bg-black/30 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-black text-[#F8C800] text-[11px]">
                      Scene {scene.sceneNumber}: {scene.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-1.5 py-0.5 rounded">
                      ⏱ {scene.durationSeconds}s
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 italic mb-2 line-clamp-2">
                    "{scene.narration}"
                  </p>

                  <div className="grid grid-cols-2 gap-1 text-[9px] font-mono text-slate-400 border-t border-white/5 pt-1.5">
                    <div>
                      <strong className="text-slate-300">Animation:</strong> {scene.animationType}
                    </div>
                    <div>
                      <strong className="text-slate-300">Transition:</strong> {scene.transition}
                    </div>
                    <div className="col-span-2 truncate">
                      <strong className="text-slate-300">Audio Cue:</strong> {scene.audioCue}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SceneEngine;
