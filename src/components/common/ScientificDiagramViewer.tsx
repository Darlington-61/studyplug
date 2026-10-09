import React, { useState } from 'react';
import { findScientificDiagram, ScientificDiagram } from '../../data/scientificDiagrams';

interface ScientificDiagramViewerProps {
  subject: string;
  topic: string;
  subtopic?: string;
  className?: string;
}

export const ScientificDiagramViewer: React.FC<ScientificDiagramViewerProps> = ({
  subject,
  topic,
  subtopic = '',
  className = ''
}) => {
  const [selectedLabel, setSelectedLabel] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isAnimated, setIsAnimated] = useState<boolean>(true);

  const diagram: ScientificDiagram | null = findScientificDiagram(subject, topic, subtopic);

  if (!diagram) return null;

  return (
    <div
      className={`group relative my-6 rounded-2xl border border-[#002444] bg-[#001028] p-4 sm:p-6 shadow-md overflow-hidden transition-all duration-300 animate-fade-up ${className}`}
    >
      {/* Subtle Brand Backlight Glow */}
      <div
        className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${
          isAnimated ? 'bg-[#F8C800]/10 animate-pulse' : 'bg-[#F8C800]/5'
        }`}
      />

      {/* Top Gold Accent Line */}
      <div className="relative h-[2px] w-full overflow-hidden bg-white/10 mb-4 -mt-2 sm:-mt-4 -mx-4 sm:-mx-6">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F8C800]/50 to-transparent w-full animate-shimmer-line" />
      </div>

      {/* Modern Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-[#001830] border border-[#F8C800]/30 text-[#F8C800] text-base flex items-center justify-center font-black shadow-xs shrink-0">
            📊
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F8C800]">
                {diagram.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8C800] animate-ping" />
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest hidden sm:inline">
                Interactive Schematic
              </span>
            </div>
            <h3 className="text-white font-extrabold text-sm sm:text-base leading-tight truncate">
              {diagram.title}
            </h3>
          </div>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center space-x-2 shrink-0">
          {/* Animation Toggle */}
          <button
            type="button"
            onClick={() => setIsAnimated(a => !a)}
            className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
              isAnimated
                ? 'bg-[#001830] border-[#F8C800]/50 text-[#F8C800] shadow-xs'
                : 'bg-white/5 border-white/10 text-white/50 hover:text-white'
            }`}
            title="Toggle HD Live Pulse & Vector Animations"
          >
            <span className={isAnimated ? 'animate-bounce' : ''}>⚡</span>
            <span className="hidden sm:inline">{isAnimated ? 'Animated' : 'Static'}</span>
          </button>

          {/* Zoom Toggle */}
          <button
            type="button"
            onClick={() => setIsZoomed(z => !z)}
            className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
              isZoomed
                ? 'bg-[#F8C800] border-[#F8C800] text-[#001028]'
                : 'bg-[#001830] border-white/10 text-white/80 hover:text-white hover:border-[#F8C800]/40'
            }`}
            title="Toggle Deep Inspection Zoom"
          >
            <span>{isZoomed ? '🔍 Reset' : '🔎 Zoom'}</span>
          </button>
        </div>
      </div>

      {/* Vector Canvas */}
      <div className="relative z-10 rounded-xl bg-[#000B1A] border border-[#001C38] p-3 sm:p-5 overflow-hidden">
        {/* Scoped CSS for SVG geometric precision */}
        <style>{`
          .hd-diagram-canvas svg {
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.6));
            shape-rendering: geometricPrecision;
            text-rendering: geometricPrecision;
          }
          .hd-diagram-canvas.is-animated svg g:hover {
            filter: drop-shadow(0 0 8px rgba(248, 200, 0, 0.6));
            transition: filter 0.2s ease;
          }
          .hd-diagram-canvas.is-animated svg rect,
          .hd-diagram-canvas.is-animated svg circle,
          .hd-diagram-canvas.is-animated svg polygon {
            transition: all 0.25s ease;
          }
        `}</style>

        <div
          className={`hd-diagram-canvas w-full flex justify-center items-center overflow-x-auto touch-pan-x transition-all duration-300 ${
            isAnimated ? 'is-animated' : ''
          } ${isZoomed ? 'scale-110 my-4' : 'scale-100'}`}
        >
          {diagram.render()}
        </div>
      </div>

      {/* Caption & Examiner Takeaway */}
      <p className="relative z-10 text-white/80 text-xs sm:text-sm mt-3.5 text-center leading-relaxed font-medium">
        <span className="text-[#F8C800] font-bold">Exam Schematic Note: </span>
        <span className="italic">{diagram.caption}</span>
      </p>

      {/* Interactive Labels & Components Legend */}
      {diagram.labels && diagram.labels.length > 0 && (
        <div className="relative z-10 mt-4 pt-3.5 border-t border-white/10">
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-[11px] font-black uppercase tracking-wider text-[#F8C800] flex items-center gap-1.5">
              <span>🏷️</span>
              <span>Interactive Diagram Key &amp; Principles</span>
            </div>
            <span className="text-[10px] text-white/40 font-medium hidden sm:inline">
              Click any element for tutor notes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {diagram.labels.map((item, idx) => {
              const isSelected = selectedLabel === idx;
              const itemColor = item.color || '#F8C800';
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedLabel(isSelected ? null : idx)}
                  style={{
                    borderColor: isSelected ? '#F8C800' : 'rgba(255, 255, 255, 0.1)'
                  }}
                  className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                    isSelected
                      ? 'bg-[#001D3D] shadow-xs'
                      : 'bg-[#001830] hover:bg-[#002040] hover:border-[#F8C800]/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-200 ${
                          isSelected ? 'scale-125' : ''
                        }`}
                        style={{
                          backgroundColor: itemColor,
                          boxShadow: `0 0 6px ${itemColor}`
                        }}
                      />
                      <span className="text-white text-xs font-bold truncate">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-white/40 ml-2">
                      {isSelected ? '▲ close' : '▼ expand'}
                    </span>
                  </div>
                  <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed pl-5">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScientificDiagramViewer;
