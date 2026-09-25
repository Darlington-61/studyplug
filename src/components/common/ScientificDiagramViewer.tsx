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
      className={`group relative my-7 rounded-3xl border border-[#00BCD4]/35 bg-gradient-to-b from-[#092419]/95 via-[#061811]/98 to-[#030d09]/98 p-4 sm:p-7 shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:border-[#00BCD4]/50 hover:shadow-[#00BCD4]/15 animate-fade-up ${className}`}
    >
      {/* Dynamic Animated Ambient Backlight Glow */}
      <div
        className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${
          isAnimated ? 'bg-[#00BCD4]/15 animate-pulse' : 'bg-[#00BCD4]/5'
        }`}
      />
      <div
        className={`absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ${
          isAnimated ? 'bg-[#34D399]/10 animate-pulse delay-500' : 'bg-[#34D399]/5'
        }`}
      />

      {/* Top Shimmer Beam */}
      <div className="relative h-[2px] w-full overflow-hidden bg-white/10 mb-4 -mt-2 sm:-mt-5 -mx-4 sm:-mx-7">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00BCD4] to-transparent w-full animate-shimmer-line" />
      </div>

      {/* Modern HD Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4 pb-3.5 border-b border-white/10">
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00BCD4]/25 to-[#34D399]/20 border border-[#00BCD4]/40 text-[#00BCD4] text-base flex items-center justify-center font-black shadow-md flex-shrink-0">
            📊
          </div>
          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#00BCD4]">
                {diagram.category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-ping" />
              <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest hidden sm:inline">
                HD Vector 60FPS
              </span>
            </div>
            <h3 className="text-white font-black text-sm sm:text-base leading-tight truncate">
              {diagram.title}
            </h3>
          </div>
        </div>

        {/* Interactive HD Controls */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Animation Toggle */}
          <button
            type="button"
            onClick={() => setIsAnimated(a => !a)}
            className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
              isAnimated
                ? 'bg-[#00BCD4]/15 border-[#00BCD4]/40 text-[#00BCD4] shadow-sm shadow-[#00BCD4]/20'
                : 'bg-white/5 border-white/10 text-white/50 hover:text-white'
            }`}
            title="Toggle HD Live Pulse & Vector Animations"
          >
            <span className={isAnimated ? 'animate-bounce' : ''}>⚡</span>
            <span className="hidden sm:inline">{isAnimated ? 'Animated HD' : 'Static HD'}</span>
          </button>

          {/* Zoom Toggle */}
          <button
            type="button"
            onClick={() => setIsZoomed(z => !z)}
            className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
              isZoomed
                ? 'bg-[#FFCC00]/15 border-[#FFCC00]/40 text-[#FFCC00]'
                : 'bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10'
            }`}
            title="Toggle 125% Deep Inspection Zoom"
          >
            <span>{isZoomed ? '🔍 Reset' : '🔎 Zoom'}</span>
          </button>
        </div>
      </div>

      {/* High-Definition Vector Canvas */}
      <div className="relative z-10 rounded-2xl bg-black/40 border border-white/10 p-3 sm:p-5 overflow-hidden">
        {/* Scoped CSS for SVG geometric precision and interactive hover animations */}
        <style>{`
          .hd-diagram-canvas svg {
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.7));
            shape-rendering: geometricPrecision;
            text-rendering: geometricPrecision;
          }
          .hd-diagram-canvas.is-animated svg g:hover {
            filter: drop-shadow(0 0 10px rgba(0, 188, 212, 0.75));
            transition: filter 0.2s ease;
          }
          .hd-diagram-canvas.is-animated svg rect,
          .hd-diagram-canvas.is-animated svg circle,
          .hd-diagram-canvas.is-animated svg polygon {
            transition: all 0.25s ease;
          }
          .hd-diagram-canvas.is-animated svg g:hover rect {
            stroke-width: 2.2px;
          }
        `}</style>

        <div
          className={`hd-diagram-canvas w-full flex justify-center items-center overflow-x-auto touch-pan-x transition-all duration-300 ${
            isAnimated ? 'is-animated' : ''
          } ${isZoomed ? 'scale-110 my-6' : 'scale-100'}`}
        >
          {diagram.render()}
        </div>
      </div>

      {/* Caption & Examiner Takeaway */}
      <p className="relative z-10 text-white/70 text-xs sm:text-sm mt-4 text-center leading-relaxed font-medium">
        <span className="text-[#FFEA79] font-bold">Exam Schematic Note: </span>
        <span className="italic">{diagram.caption}</span>
      </p>

      {/* Interactive Labels & Components Legend */}
      {diagram.labels && diagram.labels.length > 0 && (
        <div className="relative z-10 mt-5 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[11px] font-black uppercase tracking-wider text-[#FFEA79] flex items-center gap-1.5">
              <span>🏷️</span>
              <span>Interactive Diagram Key & Principles</span>
            </div>
            <span className="text-[10px] text-white/40 font-medium hidden sm:inline">
              Click any element for tutor notes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {diagram.labels.map((item, idx) => {
              const isSelected = selectedLabel === idx;
              const itemColor = item.color || '#00BCD4';
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedLabel(isSelected ? null : idx)}
                  style={{
                    borderColor: isSelected ? itemColor : 'rgba(255, 255, 255, 0.08)',
                    boxShadow: isSelected ? `0 0 16px ${itemColor}33` : 'none'
                  }}
                  className={`p-3 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                    isSelected
                      ? 'bg-white/10'
                      : 'bg-black/30 hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5 min-w-0">
                      <span
                        className={`w-3 h-3 rounded-full shrink-0 transition-transform duration-200 ${
                          isSelected ? 'scale-125' : ''
                        }`}
                        style={{
                          backgroundColor: itemColor,
                          boxShadow: `0 0 8px ${itemColor}`
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
                  <p className="text-white/70 text-[11px] mt-1.5 leading-relaxed pl-5.5">
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
