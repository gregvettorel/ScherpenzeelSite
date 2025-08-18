import React from "react";
import "../styles/services.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,      // Design
  faWrench,           // Build
  faLifeRing,         // Ongoing Support
  faCompass,          // Consultation
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import SectionReveal from "./SectionReveal";

const items = [
  {
    icon: faPencilRuler,
    title: "Design",
    desc:
      "Need a name, logo or full brand? We craft identities that feel fresh, professional and on-point.",
  },
  { icon: faWrench, title: "Build", desc: "We develop fast, responsive websites and scalable MVPs." },
  {
    icon: faLifeRing,
    title: "Ongoing Support",
    desc:
      "Hosting, updates, fixes and light improvements, so your product stays sharp and stress-free.",
  },
  {
    icon: faCompass,
    title: "Consultation",
    desc:
      "We work alongside you to define your vision, shape your roadmap, and offer honest technical advice.",
  },
];

export default function Services() {
  return (
    <SectionReveal className="section section-pad">
      <div className="wrap">
        <h2 className="services-title">Services</h2>

        <div className="services-list">
          {items.map((s, i) => (
            <article className="services-row" key={i}>
              <div className="services-left">
                <FontAwesomeIcon icon={s.icon} className="services-icon" />
                <span className="services-row-title">{s.title}</span>
              </div>

              <p className="services-desc">{s.desc}</p>

              <a href="/contact" className="services-cta" aria-label={`More about ${s.title}`}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
