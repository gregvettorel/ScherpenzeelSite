import React, { useState } from "react";
import "../styles/services.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faWrench,
  faLifeRing,
  faCompass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import SectionReveal from "./SectionReveal";

const items = [
  {
    icon: faPencilRuler,
    title: "DESIGN",
    desc:
      "Need a name, logo or full brand? We craft identities that feel fresh, professional and on-point.",
  },
  { icon: faWrench, title: "BUILD", desc: "We develop fast, responsive websites and scalable MVPs." },
  {
    icon: faLifeRing,
    title: "ONGOING SUPPORT",
    desc:
      "Hosting, updates, fixes and light improvements, so your product stays sharp and stress-free.",
  },
  {
    icon: faCompass,
    title: "CONSULTATION",
    desc:
      "We work alongside you to define your vision, shape your roadmap, and offer honest technical advice.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => {
    setOpenIndex((curr) => (curr === i ? -1 : i));
  };

  return (
    <SectionReveal className="services-section">
      <div className="wrap">
        <h2 className="services-title">Our services</h2>

        <div className="services-list" role="list">
          {items.map((s, i) => {
            const isOpen = i === openIndex;
            const panelId = `service-panel-${i}`;
            const buttonId = `service-button-${i}`;

            return (
              <article
                className={`services-accordion ${isOpen ? "open" : ""}`}
                key={s.title}
                role="listitem"
              >
                {/* Header / Toggle */}
                <button
                  id={buttonId}
                  className="services-toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span className="services-left">
                    <FontAwesomeIcon icon={s.icon} className="services-icon" />
                    <span className="services-row-title">{s.title}</span>
                  </span>

                  <FontAwesomeIcon icon={faChevronDown} className="services-chevron" />
                </button>

                {/* Collapsible content */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="services-content"
                >
                  <p className="services-desc">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
