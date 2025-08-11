import React from "react";
import { motion } from "framer-motion";

export default function ArrowDraw({
  size = 28,
  color = "#1877ff",
  strokeWidth = 2.2,
  visible = false,
  flip = false,
  className = "",
}) {
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      {/* main diagonal */}
      <motion.path
        {...common}
        d="M6 18L18 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      />
      {/* corner (tail) */}
      <motion.path
        {...common}
        d="M7 6h11v11"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: 0.08 }}
      />
      {/* subtle idle breathe */}
      <motion.g
        initial={{ x: 0, y: 0 }}
        animate={visible ? { x: [0, 1, 0], y: [0, -1, 0] } : { x: 0, y: 0 }}
        transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity, delay: 0.6 }}
      />
    </motion.svg>
  );
}