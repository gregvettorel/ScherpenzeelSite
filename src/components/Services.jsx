import React from "react";
import "../styles/services.css"; // Import your CSS for styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenRuler,          // Design
  faWrench,            // Build
  faHandHoldingHeart,  // Ongoing Support
  faHeadset,           // Consultation
  faArrowRight,        // will rotate to make ↗
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    icon: faPenRuler,
    title: "Design",
    desc:
      "Need a name, logo or full brand? We craft identities that feel fresh, professional and on-point.",
  },
  {
    icon: faWrench,
    title: "Build",
    desc:
      "We develop fast, responsive websites and scalable MVPs.",
  },
  {
    icon: faHandHoldingHeart,
    title: "Ongoing Support",
    desc:
      "Hosting, updates, fixes and light improvements, so your product stays sharp and stress-free.",
  },
  {
    icon: faHeadset,
    title: "Consultation",
    desc:
      "We work alongside you to define your vision, shape your roadmap, and offer honest technical advice.",
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        {/* use the global section-title for consistent font/size */}
        <h2 className="section-title mb-7">Services</h2>
        <div className="services__list">
          {items.map((s, i) => (
            <div className="services__row" key={i}>
              {/* Left: icon + big title */}
              <div className="services__label">
                <FontAwesomeIcon icon={s.icon} className="services__icon" />
                <span className="services__heading">{s.title}</span>
              </div>

              {/* Middle: description */}
              <p className="services__desc">{s.desc}</p>

              {/* Right: pill outline with diagonal arrow */}
              <div className="services__cta">
                <button
                  type="button"
                  aria-label={`More about ${s.title}`}
                  className="services__btn"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="services__btnIcon"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
