import React from "react";
import "../styles/services.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faWrench,
  faLifeRing,
  faCompass
} from "@fortawesome/free-solid-svg-icons";
import SectionReveal from "./SectionReveal";
import WakoButton from "./WakoButton";
import ArrowDraw from "./ArrowDraw";

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
<SectionReveal className="services-section">
      <div className="wrap">
        <h2 className="services-title">Our Services</h2>

        <div className="services-list">
          {items.map((s, i) => (
            <article className="services-row" key={i}>
              <div className="services-left">
                <FontAwesomeIcon icon={s.icon} className="services-icon" />
                <span className="services-row-title">{s.title}</span>
              </div>

              <p className="services-desc">{s.desc}</p>

<WakoButton
  href="/contact"
  variant="ghost"
  className="services-cta"
  aria-label={`More about ${s.title}`}
  style={{
    padding: "0.5rem 1rem",
    minWidth: 44,
    minHeight: 44,
    justifyContent: "center",
    lineHeight: 1,
  }}
>
  <ArrowDraw size={18} strokeWidth={3} />
</WakoButton>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
