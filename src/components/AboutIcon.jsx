import React from "react";

export default function AboutIcon({ type }) {
  // Choose icon by type
  switch (type) {
    case "design":
      return (
        <svg width="20" height="20" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="14" height="14" rx="4" stroke="#0579FE" strokeWidth="2"/>
          <path d="M7 13l6-6" stroke="#0579FE" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "dev":
      return (
        <svg width="20" height="20" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="14" height="14" rx="4" stroke="#0579FE" strokeWidth="2"/>
          <path d="M8 12l-2-2 2-2M12 8l2 2-2 2" stroke="#0579FE" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "campaign":
      return (
        <svg width="20" height="20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="8" stroke="#0579FE" strokeWidth="2"/>
          <path d="M10 6v4l3 2" stroke="#0579FE" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "degree":
      return (
        <svg width="20" height="20" fill="none" aria-hidden="true">
          <rect x="3" y="8" width="14" height="6" rx="2" stroke="#0579FE" strokeWidth="2"/>
          <path d="M10 6v2" stroke="#0579FE" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
}