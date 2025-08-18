import React from "react";
import { motion } from "framer-motion";

export default function ArrowDraw({
  size = 28,
  color = "#1877ff",
  strokeWidth = 2.2,
  hovered = false,
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
      animate={hovered ? { y: -4 } : { y: 0 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <motion.path {...common} d="M6 18L18 6" />
      <motion.polyline {...common} points="7 6 18 6 18 17" />
    </motion.svg>
  );
}