// src/components/AboutSection.jsx
import React from "react";
import "../styles/about.css";
import macbookImage from "../assets/macbookwako.png";
import SectionReveal from "./SectionReveal";
import AboutIcon from "./AboutIcon";
import ReactCountryFlag from "react-country-flag";
//import index


export default function AboutSection() {
  return (
    <SectionReveal id="about" className="about">
      <div className="about__wrap section section-pad">
        <h2 id="about-heading" className="section-title about__title ">
          Who are we?
       </h2>

        <div className="about__grid">
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

          {/* Right: content */}
          <div className="about__content">
              <h3 className="about__headline">Small team. Big impact.</h3>
            <div className="about__copy">
              <p>
                We're two young professionals starting out in the world of development. 
                Our goal is to provide our customers a unique and fresh looking digital presence tailored to their needs.
              </p>
              <p>
                As a team of two every project receives our full attention as we only take on one project at a time.
              </p>

              <div className="about__chips">
                <span className="about__chip">
                  <AboutIcon type="design" />
                  3 years UI/UX & marketing
                </span>
                <span className="about__chip">
                  <AboutIcon type="dev" />
                  3.5 years full-stack dev
                </span>
                <span className="about__chip">
                  <AboutIcon type="degree" />
                  Degrees in design & tech
                </span>
                  <span className="about__chip">
                  <ReactCountryFlag countryCode="GB" svg style={{ width: "1.5em", height: "1.5em" }} />
                  English
                </span>
                <span className="about__chip">
                  <ReactCountryFlag countryCode="FR" svg style={{ width: "1.5em", height: "1.5em" }} />
                  Français
                </span>
                <span className="about__chip">
                  <ReactCountryFlag countryCode="NL" svg style={{ width: "1.5em", height: "1.5em" }} />
                  Nederlands
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
