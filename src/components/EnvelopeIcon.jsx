import React from "react";
import { motion } from "framer-motion";

export default function EnvelopeIcon({ size = 22, hovered = false }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", verticalAlign: "middle" }}
    >
      {/* Envelope body */}
      <rect x="3" y="7" width="18" height="10" rx="2" />
      {/* Flap */}
      <motion.polyline
        points="3,7 12,14 21,7"
        initial={false}
        animate={hovered ? { points: "3,7 12,10 21,7" } : { points: "3,7 12,14 21,7" }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
      />
    </motion.svg>
  );
}