import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Step({ step, alt }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start({ x: 0, opacity: 1 });
  }, [inView, controls]);

  return (
    <div className={`process-steps__row${alt ? " process-steps__row--alt" : ""}`}>
      <div className="process-steps__visual">
        <span className="process-steps__number">{step.number}</span>
        <img src={step.image} alt="" className="process-steps__img" draggable={false} />
      </div>
      <div className="process-steps__text" ref={ref}>
        <h3 className="process-steps__title flex items-center gap-3">
          {step.title}
          <motion.span
            initial={{ x: -16, opacity: 0 }}
            animate={controls}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            style={{ display: "inline-block" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6" stroke="#1877ff" strokeWidth="2.2" strokeLinecap="round"/>
              <path d="M7 6h11v11" stroke="#1877ff" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </motion.span>
        </h3>
        <p className="process-steps__desc">{step.desc}</p>
      </div>
    </div>
  );
}