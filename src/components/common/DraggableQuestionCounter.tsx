import React, { useState, useEffect, useRef } from 'react';

interface DraggableQuestionCounterProps {
  currentIndex: number;
  totalCount: number;
  answeredCount: number;
  markedCount?: number;
  onOpenPalette: () => void;
}

export const DraggableQuestionCounter: React.FC<DraggableQuestionCounterProps> = ({
  currentIndex,
  totalCount,
  answeredCount,
  markedCount = 0,
  onOpenPalette,
}) => {
  // Initial position: Floating in bottom right area on mobile/desktop
  const [position, setPosition] = useState<{ x: number; y: number }>(() => {
    if (typeof window !== 'undefined') {
      const initialX = Math.max(16, window.innerWidth - 220);
      const initialY = Math.max(80, window.innerHeight - 140);
      return { x: initialX, y: initialY };
    }
    return { x: 200, y: 500 };
  });

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ pointerX: number; pointerY: number; startX: number; startY: number }>({
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
  });
  const hasMovedRef = useRef<boolean>(false);
  const widgetRef = useRef<HTMLDivElement | null>(null);

  // Update bounds on window resize
  useEffect(() => {
    const handleResize = () => {
      setPosition((prev) => {
        const maxX = Math.max(10, window.innerWidth - 210);
        const maxY = Math.max(60, window.innerHeight - 80);
        return {
          x: Math.min(Math.max(10, prev.x), maxX),
          y: Math.min(Math.max(60, prev.y), maxY),
        };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag with primary mouse button
    if (e.button !== 0) return;
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = {
      pointerX: e.clientX,
      pointerY: e.clientY,
      startX: position.x,
      startY: position.y,
    };
  };

  // Touch drag handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = {
      pointerX: touch.clientX,
      pointerY: touch.clientY,
      startX: position.x,
      startY: position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartRef.current.pointerX;
      const dy = e.clientY - dragStartRef.current.pointerY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        hasMovedRef.current = true;
      }
      const maxX = Math.max(10, window.innerWidth - 210);
      const maxY = Math.max(60, window.innerHeight - 70);
      const newX = Math.min(Math.max(10, dragStartRef.current.startX + dx), maxX);
      const newY = Math.min(Math.max(60, dragStartRef.current.startY + dy), maxY);
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const touch = e.touches[0];
      const dx = touch.clientX - dragStartRef.current.pointerX;
      const dy = touch.clientY - dragStartRef.current.pointerY;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        hasMovedRef.current = true;
      }
      const maxX = Math.max(10, window.innerWidth - 210);
      const maxY = Math.max(60, window.innerHeight - 70);
      const newX = Math.min(Math.max(10, dragStartRef.current.startX + dx), maxX);
      const newY = Math.min(Math.max(60, dragStartRef.current.startY + dy), maxY);
      setPosition({ x: newX, y: newY });
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const handleClick = () => {
    // If user dragged more than a tiny threshold, don't trigger click action
    if (!hasMovedRef.current) {
      onOpenPalette();
    }
  };

  const progressPercent = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;

  return (
    <div
      ref={widgetRef}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        touchAction: 'none',
      }}
      className={`fixed top-0 left-0 z-40 select-none transition-shadow ${
        isDragging ? 'cursor-grabbing scale-105 shadow-2xl opacity-95' : 'cursor-grab shadow-xl'
      }`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={handleClick}
      title="Draggable Questions Counter • Tap to open Question Palette, drag to reposition anywhere!"
    >
      <div className="flex items-center space-x-2.5 px-3 py-2 rounded-2xl bg-gradient-to-r from-[#00382E] via-[#001028] to-[#08291F] text-white border-2 border-[#FFD600] shadow-2xl backdrop-blur-md">
        {/* Drag Grip Indicator */}
        <span className="text-emerald-300/80 text-xs font-bold leading-none select-none tracking-tighter" title="Drag to move">
          ⠿
        </span>

        {/* Counter Info */}
        <div className="flex flex-col text-left">
          <div className="flex items-center space-x-1.5 leading-none">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#FFD600]">
              Q.{currentIndex}
            </span>
            <span className="text-[10px] text-emerald-200 font-bold">
              • {answeredCount}/{totalCount} Done
            </span>
          </div>

          {/* Mini progress line */}
          <div className="w-24 h-1.5 bg-black/40 rounded-full overflow-hidden mt-1">
            <div
              className="h-full bg-gradient-to-r from-[#10B981] to-[#FFD600] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Jump Badge Pill */}
        <div className="px-2 py-1 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-[10.5px] font-black text-[#FFD600] flex items-center space-x-0.5 shrink-0">
          <span>{progressPercent}%</span>
          <span className="text-[9px]">▾</span>
        </div>
      </div>
    </div>
  );
};

export default DraggableQuestionCounter;
