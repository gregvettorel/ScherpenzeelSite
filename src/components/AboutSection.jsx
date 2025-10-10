// src/components/AboutSection.jsx
import React from "react";
import "../styles/about.css";
import macbookImage from "../assets/macbookwako.png";
import SectionReveal from "./SectionReveal";
import TagMarquee from "./TagMarquee";
import AboutIcon from "./AboutIcon";
import ReactCountryFlag from "react-country-flag";
import { useLang } from "../context/LangContext";


export default function AboutSection() {
  const { t } = useLang();
  const tags = [
    (<><AboutIcon type="design" /> 3 years UI/UX & marketing</>),
    (<><AboutIcon type="dev" /> 3.5 years full-stack dev</>),
    (<><AboutIcon type="degree" /> Degrees in design & tech</>),
    (<><ReactCountryFlag countryCode="GB" svg style={{ width: 18, height: 18 }} /> English</>),
    (<><ReactCountryFlag countryCode="FR" svg style={{ width: 18, height: 18 }} /> Français</>),
    (<><ReactCountryFlag countryCode="NL" svg style={{ width: 18, height: 18 }} /> Nederlands</>),
  ];

  return (
    <SectionReveal id="about" className="about">
      <div className="about__wrap section section-pad">
        <div className="about__grid">
          {/* Right: content */}
          <div className="about__content">
            <h2 className="section-title">{t("about.title")}</h2>
            <div className="about__copy">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <TagMarquee items={tags} speed={24} />
            </div>
          </div>
          {/* Left: image */}
          <div className="about__media">
            <div className="about__mediaInner">
              <img
                src={macbookImage}
                alt="Wako brand displayed on a laptop screen"
                className="about__img"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
