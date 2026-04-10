"use client";

import React, { useEffect, useRef, useState } from "react";

const WIDGETS = [
  { id: 1, name: "Studio Session", videoSrc: "/media/videos/0304(2).mp4" },
  { id: 2, name: "Editorial", videoSrc: "/media/videos/0304(5).mp4" },
  { id: 3, name: "TV Commercial", videoSrc: "/media/videos/0305.mp4" },
  { id: 4, name: "Runway", videoSrc: "/media/videos/Motion Pictures/Landing/0407(19).mp4" },
  { id: 5, name: "Behind The Scenes", videoSrc: "/media/videos/Motion Pictures/Production/0407(1).mp4" },
  { id: 6, name: "Portfolio", videoSrc: "/media/videos/Motion Pictures/Portfolio Motion/0407(17).mp4" },
  { id: 7, name: "Interviews", videoSrc: "/media/videos/Motion Pictures/mix/0409 (1).mp4" },
  { id: 8, name: "Catwalk", videoSrc: "/media/videos/Motion Pictures/mix/MVI_1589.MOV" },
  { id: 9, name: "Vlogs", videoSrc: "/media/videos/Motion Pictures/mix/3863627567052154606.mp4" },
  { id: 10, name: "Lifestyle", videoSrc: "/media/videos/Motion Pictures/mix/WhatsApp Video 2026-03-12 at 16.33.18.mp4" },
];

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInRadians: number) => {
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const describeArc = (x: number, y: number, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number) => {
  const startOuter = polarToCartesian(x, y, outerRadius, endAngle);
  const endOuter = polarToCartesian(x, y, outerRadius, startAngle);
  const startInner = polarToCartesian(x, y, innerRadius, endAngle);
  const endInner = polarToCartesian(x, y, innerRadius, startAngle);

  const largeArcFlag = endAngle - startAngle <= Math.PI ? "0" : "1";

  return [
    "M", startOuter.x, startOuter.y,
    "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    "L", endInner.x, endInner.y,
    "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y,
    "Z",
  ].join(" ");
};

export default function CircularVideoSpinner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<SVGGElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const animState = useRef({
    currentSpinnerRot: 0,
    targetSpinnerRot: 0,
    currentIndicatorRot: 0,
    targetIndicatorRot: 0,
    lastIndex: -1,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;

    let animationFrameId: number;

    const container = containerRef.current;
    if (!container) return;

    // Manual scroll still works on top of auto-rotate
    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY * 1.5;
      animState.current.targetIndicatorRot += delta;
      animState.current.targetSpinnerRot -= delta * 0.25;
    };

    container.addEventListener("wheel", handleWheel, { passive: true });

    // Auto-rotate: advance one segment every 1 second, loops forever
    const segmentAngle = 360 / WIDGETS.length;
    const autoRotateInterval = setInterval(() => {
      const state = animState.current;
      state.targetIndicatorRot += segmentAngle;
      state.targetSpinnerRot -= segmentAngle * 0.25;
    }, 1000);

    const loop = () => {
      const state = animState.current;

      state.currentSpinnerRot = lerp(state.currentSpinnerRot, state.targetSpinnerRot, 0.15);
      state.currentIndicatorRot = lerp(state.currentIndicatorRot, state.targetIndicatorRot, 0.15);

      if (spinnerRef.current) {
        spinnerRef.current.style.transform = `rotate(${state.currentSpinnerRot}deg)`;
      }
      if (indicatorRef.current) {
        const cx = dimensions.width / 2;
        const cy = dimensions.height / 2;
        indicatorRef.current.setAttribute("transform", `rotate(${state.currentIndicatorRot} ${cx} ${cy})`);
      }

      let normalizedRot = ((state.currentIndicatorRot - state.currentSpinnerRot) % 360 + 360) % 360;
      const index = Math.floor(normalizedRot / (360 / WIDGETS.length));

      if (index !== state.lastIndex) {
        state.lastIndex = index;
        setActiveIndex(index);
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      container.removeEventListener("wheel", handleWheel);
      clearInterval(autoRotateInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  if (dimensions.width === 0) return null;

  const cx = dimensions.width / 2;
  const cy = dimensions.height / 2;
  const outerRadius = Math.min(cx, cy) * 0.8;
  const innerRadius = outerRadius * 0.5;

  const anglePerSegment = (2 * Math.PI) / WIDGETS.length;

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden text-white" style={{ background: '#0a0a0a' }}>

      {/* --- BACKGROUND VIDEOS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {WIDGETS.map((widget, i) => {
          // On mobile, only mount the active video to save hundreds of megabytes
          if (isMobile && i !== activeIndex && i !== ((activeIndex - 1 + WIDGETS.length) % WIDGETS.length) && i !== ((activeIndex + 1) % WIDGETS.length)) return null;

          return (
            <video
              key={`bg-${widget.id}`}
              src={widget.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload={isMobile && i !== activeIndex ? "none" : "auto"}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: i === activeIndex ? 0.6 : 0,
                transition: 'opacity 0.5s ease',
              }}
            />
          );
        })}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* --- CENTER TITLE --- */}
      <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="bg-white/10 px-6 py-2 rounded-full backdrop-blur-md border border-white/20 uppercase tracking-[0.2em] text-sm font-mono text-center">
          {WIDGETS[activeIndex]?.name}
        </div>
      </div>

      {/* --- INVISIBLE SVG DEFS (FOR CLIP PATHS) --- */}
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          {WIDGETS.map((_, i) => {
            const startAngle = i * anglePerSegment;
            const endAngle = (i + 1) * anglePerSegment;
            const path = describeArc(cx, cy, innerRadius, outerRadius, startAngle, endAngle + 0.01);
            return (
              <clipPath id={`slice-clip-${i}`} key={`clip-${i}`}>
                <path d={path} />
              </clipPath>
            );
          })}
        </defs>
      </svg>

      {/* --- THE SPINNER WHEEL (Desktop Only) --- */}
      {!isMobile && (
        <div className="absolute inset-0 z-10 origin-center pointer-events-none" ref={spinnerRef}>
        {WIDGETS.map((widget, i) => {
          const startAngle = i * anglePerSegment;
          const endAngle = (i + 1) * anglePerSegment;
          const midAngle = (startAngle + endAngle) / 2;
          
          const segmentRadius = innerRadius + (outerRadius - innerRadius) / 2;
          const segX = cx + segmentRadius * Math.cos(midAngle);
          const segY = cy + segmentRadius * Math.sin(midAngle);
          
          const size = outerRadius * 1.5;

          return (
            <div
              key={`slice-${widget.id}`}
              className="absolute inset-0 pointer-events-none"
              style={{ clipPath: `url(#slice-clip-${i})` }}
            >
              <video
                src={widget.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="absolute object-cover pointer-events-none"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${segX}px`,
                  top: `${segY}px`,
                  transform: `translate(-50%, -50%) rotate(${(midAngle * 180) / Math.PI + 90}deg)`,
                }}
              />
            </div>
          );
        })}
      </div>
      )}

      {/* --- INDICATOR LINE --- */}
      <svg className="absolute inset-0 z-30 pointer-events-none" style={{ width: '100%', height: '100%' }}>
        <g ref={indicatorRef}>
          <line
            x1={cx}
            y1={cy + innerRadius * 0.9}
            x2={cx}
            y2={cy + outerRadius * 1.1}
            stroke="#eab308"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
