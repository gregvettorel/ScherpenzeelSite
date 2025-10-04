// src/components/AboutChip.jsx
import React from "react";
import "../styles/aboutChip.css";

export default function AboutChip({ children, className = "", ...rest }) {
  return (
    <span className={`about-chip${className ? " " + className : ""}`} {...rest}>
      {children}
    </span>
  );
}