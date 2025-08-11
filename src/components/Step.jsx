import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Step({ step, alt }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  // Path + arrowhead tracking
  const pathRef = useRef(null);
  const [totalLen, setTotalLen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [arrow, setArrow] = useState({ x: 200, y: 40, angle: 0 });

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setTotalLen(len);
    }
  }, []);

  useEffect(() => {
    if (!inView || !pathRef.current || totalLen === 0) return;

    const duration = 1000; // ms
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

  return (
    <div className={`process-steps__row${alt ? " process-steps__row--alt" : ""}`}>
      {/* Visual column */}
      <div className="process-steps__visual">
        <span className="process-steps__number">{step.number}</span>
        <img src={step.image} alt="" className="process-steps__img" draggable={false} />
      </div>

      {/* Arrow column */}
      <div className="process-steps__arrow" aria-hidden="true">
        <svg viewBox="0 0 220 60" width="100%" height="60" style={{ overflow: "visible" }}>
          {/* Drawn path with manual stroke-draw */}
          <path
            ref={pathRef}
            d="M20 40 Q110 10 200 40"
            fill="none"
            stroke="#C2C8D0"                 // slightly softer gray
            strokeWidth="4.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            opacity={progress > 0 ? 1 : 0}
            strokeDasharray={totalLen ? `${totalLen} ${totalLen}` : undefined}
            strokeDashoffset={totalLen ? totalLen * (1 - progress) : undefined}
          />

          {/* Arrowhead that follows the drawn tip (chevron style) */}
          <g
            transform={`translate(${arrow.x},${arrow.y}) rotate(${arrow.angle})`}
            transformBox="fill-box"
            transformOrigin="0 0"
            style={{ opacity: progress > 0.01 ? 1 : 0, pointerEvents: "none" }}
            shapeRendering="geometricPrecision"
          >
            {/* tip at (0,0), same stroke as the path */}
            <polyline
              points="-14,-8 0,0 -14,8"
              fill="none"
              stroke="#C2C8D0"
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