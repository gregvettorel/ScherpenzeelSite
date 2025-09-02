import React, { useState } from "react";
import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SectionReveal from "./SectionReveal";

import "../index.css";

const items = [
  {
    title: "Design that Converts",
    desc: "From first sketch to a clickable prototype. We craft identities and interfaces that feel sharp, friendly, and on-point.",
    tags: ["Brand & Identity", "UI/UX", "Design Systems"],
    img: "/projects/crint.png",
    bg: "#F0F6FF", // light blue or your brand tint
  },
  {
    title: "Build Fast & Solid",
    desc: "Responsive websites and scalable MVPs. Clean code, smooth performance, ready to grow with you.",
    tags: ["React/Next.js", "Web Apps", "Performance"],
    img: "/assets/services/build.jpg",
  },
  {
    title: "Always-On Support",
    desc: "Updates, fixes, and light improvements. We keep your product healthy while you focus on growth.",
    tags: ["Hosting", "Monitoring", "Small Iterations"],
    img: "/assets/services/support.jpg",
  },
  {
    title: "Launch with Confidence",
    desc: "We shape your roadmap, help you pick what to ship first, and measure the right things to keep momentum post-launch.",
    tags: ["Roadmapping", "MVP Scope", "Analytics"],
    img: "/assets/services/consult.jpg",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionReveal className="services-section section section-pad">
      <div className="wrap">
        <h2 className="services-title">Our services</h2>

        <div className="services-list">
          {items.map((s, i) => {
            const isOpen = i === openIndex;
            const panelId = `service-panel-${i}`;
            const buttonId = `service-button-${i}`;

            return (
              <article
                key={s.title}
                className={`services-accordion ${isOpen ? "open" : ""}`}
              >
                <button
                  id={buttonId}
                  className="services-toggle"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
                >
                  <span className="services-row-title">{s.title}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="services-chevron" />
                </button>

                <div
                  id={panelId}
                  className="services-content"
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className="services-inner">
                    <div>
                      <p className="services-desc">{s.desc}</p>
                      <div className="services-tags">
                        {s.tags.map((t) => (
                          <span className="services-tag" key={t}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="services-media">
                      <img src={s.img} alt={s.title} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionReveal>
  );
}
