import React from "react";
import "../styles/services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,      // Design
  faWrench,           // Build
  faLifeRing,         // Ongoing Support
  faCompass,          // Consultation
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

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
    <section id="services" className="section">
      <div className="wrap">
        <h2 className="h2">Services</h2>

        <div className="svc">
          {items.map((s, i) => (
            <article className="svc__row" key={i}>
              <div className="svc__left">
                <FontAwesomeIcon icon={s.icon} className="svc__icon" />
                <span className="svc__title">{s.title}</span>
              </div>

              <p className="svc__desc">{s.desc}</p>

              <a href="/contact" className="svc__cta" aria-label={`More about ${s.title}`}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
