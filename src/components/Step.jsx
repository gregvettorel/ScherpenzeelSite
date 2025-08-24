import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Step({ step, alt }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Arrow animation refs/states (unchanged)
  const pathRef = useRef(null);
  const [totalLen, setTotalLen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [arrow, setArrow] = useState({ x: 200, y: 40, angle: 0 });

  // --- NEW: tilt state ---
  const rowRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, hovered: false });
  const [canHover, setCanHover] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (pathRef.current) {
      setTotalLen(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    if (!inView || !pathRef.current || totalLen === 0) return;

    const duration = 1000;
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    let raf = 0;
    let start = 0;

    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = Math.min(ts - start, duration);
      const t = ease(elapsed / duration);
      setProgress(t);

      const L = totalLen * t;
      const p2 = pathRef.current.getPointAtLength(L);
      const p1 = pathRef.current.getPointAtLength(Math.max(0, L - 1));
      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
      setArrow({ x: p2.x, y: p2.y, angle });

      if (elapsed < duration) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, totalLen]);

  // --- NEW: feature detection for hover + reduced motion
  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // --- NEW: tilt handlers
  const handleEnter = () => {
    if (!canHover || reducedMotion) return;
    setTilt((t) => ({ ...t, hovered: true }));
  };

  const handleLeave = () => {
    if (!canHover || reducedMotion) return;
    setTilt({ x: 0, y: 0, hovered: false });
  };

  const handleMove = (e) => {
    if (!canHover || reducedMotion || !rowRef.current) return;

    const rect = rowRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0..1
    const py = (e.clientY - rect.top) / rect.height;  // 0..1

    // Map to -max..+max tilt
    const maxTilt = 6; // deg
    const tiltY = (px - 0.5) * 2 * maxTilt;   // left/right -> rotateY
    const tiltX = -(py - 0.5) * 2 * maxTilt;  // top/bottom -> rotateX (invert so top tilts toward you)

    setTilt((t) => ({ ...t, x: tiltX, y: tiltY }));
  };

  // --- NEW: compose transform for the whole row
  const baseLift = tilt.hovered ? -4 : 0;     // subtle lift on hover
  const baseScale = tilt.hovered ? 1.03 : 1;  // slight scale on hover
  const transformStyle = reducedMotion
    ? undefined
    : {
        transform: `perspective(1000px) translateY(${baseLift}px) scale(${baseScale}) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform .35s cubic-bezier(.22,.61,.36,1)",
        transformStyle: "preserve-3d",
      };

  return (
    <div
      ref={rowRef}
      className={`process-steps__row${alt ? " process-steps__row--alt" : ""}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      style={transformStyle}
    >
      {/* Visual column */}
      <div className="process-steps__visual">
        <span className="process-steps__number">{step.number}</span>
        <img src={step.image} alt="" className="process-steps__img" draggable={false} />
      </div>

      {/* Arrow column */}
      <div className="process-steps__arrow" aria-hidden="true">
        <svg viewBox="0 0 220 60" width="100%" height="60" style={{ overflow: "visible" }}>
          <path
            ref={pathRef}
            className="process-steps__curve"
            d="M20 40 Q110 10 200 40"
            fill="none"
            strokeWidth="4.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={progress > 0 ? 1 : 0}
            strokeDasharray={totalLen ? `${totalLen} ${totalLen}` : undefined}
            strokeDashoffset={totalLen ? totalLen * (1 - progress) : undefined}
          />
          <g
            transform={`translate(${arrow.x},${arrow.y}) rotate(${arrow.angle})`}
            transformOrigin="0 0"
            style={{ opacity: progress > 0.01 ? 1 : 0, pointerEvents: "none" }}
            shapeRendering="geometricPrecision"
          >
            <polyline
              className="process-steps__chev"
              points="-14,-8 0,0 -14,8"
              fill="none"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      {/* Text column */}
      <div className="process-steps__text" ref={ref}>
        <h3 className="process-steps__title">{step.title}</h3>
        <p className="process-steps__desc">{step.desc}</p>
      </div>
    </div>
  );
}
