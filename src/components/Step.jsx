import React from "react";

/**
 * Always: [number] [image] [text]
 * Rows alternate alignment: left / right
 * Arrow is drawn after each row except the last one.
 */
export default function Step({ step, alt, isLast }) {
  return (
    <div className={`process-steps__row ${alt ? "process-steps__row--right" : "process-steps__row--left"}`}>
      {/* Number */}
      <span className="process-steps__number">{step.number}</span>

      {/* Image */}
      <img
        src={step.image}
        alt=""
        className="process-steps__img"
        loading="lazy"
        decoding="async"
        draggable={false}
      />

      {/* Text */}
      <div className="process-steps__text">
        <h3 className="process-steps__heading">{step.title}</h3>
        <p className="process-steps__desc">{step.desc}</p>
      </div>

      {/* Arrow (skip last step) */}
      {!isLast && (
        <div className="process-steps__arrow" aria-hidden="true">
          {/* same SVG mirrored via CSS on right rows */}
          <svg viewBox="0 0 420 150" width="100%" height="100%" style={{ overflow: "visible" }}>
            {/* curve */}
            <path
              d="M 10 20 C 170 -10 270 70 410 140"
              fill="none"
              className="process-steps__curve"
            />
            {/* chevron */}
            <path
              d="M 392 126 L 410 140 L 390 148"
              fill="none"
              className="process-steps__chev"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
