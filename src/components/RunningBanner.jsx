import React from "react";
import "../styles/running-banner.css";
import SectionReveal from "./SectionReveal";

export default function RunningBanner() {
  return (
    <SectionReveal className="running-banner">
      <div className="running-banner__inner">
        <span className="running-banner__text">
          Visual design for digital experiences
        </span>
      </div>
    </SectionReveal>
  );
}
