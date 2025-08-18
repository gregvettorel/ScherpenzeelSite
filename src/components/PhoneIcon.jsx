import React from "react";
import { motion } from "framer-motion";

export default function PhoneIcon({ size = 22, hovered = false }) {
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
      animate={
        hovered
          ? { rotate: [0, -18, 18, -12, 12, -6, 6, 0] }
          : { rotate: 0 }
      }
      transition={
        hovered
          ? { duration: 0.6, type: "tween", ease: "easeInOut" }
          : { duration: 0.3, type: "tween" }
      }
    >
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.29a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.06.35 2.16.59 3.29.72A2 2 0 0 1 22 16.92z" />
    </motion.svg>
  );
}