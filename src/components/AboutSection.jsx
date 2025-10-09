// src/components/AboutSection.jsx
import React from "react";
import "../styles/about.css";
import macbookImage from "../assets/macbookwako.png";
import SectionReveal from "./SectionReveal";
import TagMarquee from "./TagMarquee";
import AboutIcon from "./AboutIcon";
import ReactCountryFlag from "react-country-flag";


export default function AboutSection() {
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
            <div className="section-title">Who we are</div>
            <div className="about__copy">
              <p>
                We're two passionate web developers who love crafting fresh, tailored digital experiences.
                Our goal is to provide each customer with a unique, modern online presence designed specifically for their needs.
              </p>
              <p>
                As a team of two every project receives our full attention as we only take on one project at a time.
              </p>

              {/* Endless looping tags with edge fades */}
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
