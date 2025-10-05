import React from "react";

export default function Step({ step, alt, isLast }) {
  return (
    <div className={`process-steps__row ${alt ? "process-steps__row--right" : "process-steps__row--left"}`}>
      <div className="process-steps__numimg-row">
        <span className="process-steps__number">{step.number}</span>
        <img
          src={step.image}
          alt=""
          className="process-steps__img"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
      <div className="process-steps__text">
        <h3 className="process-steps__heading">{step.title}</h3>
        <p className="process-steps__desc">{step.desc}</p>
      </div>
      {!isLast && (
        <div className="process-steps__arrow" aria-hidden="true">
          <svg viewBox="0 0 480 300" width="100%" height="100%" style={{ overflow: "visible" }}>
            <path
              d="M 20 30 A 360 260 0 0 1 460 240"
              className="process-steps__curve"
              fill="none"
            />
            <path
              d="M 460 240 L 435 218  M 460 240 L 470 210"
              className="process-steps__chev"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}