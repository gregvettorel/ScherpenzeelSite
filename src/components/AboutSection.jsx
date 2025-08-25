// src/components/AboutSection.jsx
import React from "react";
import "../styles/about.css";
import macbookImage from "../assets/macbookwako.png";
import SectionReveal from "./SectionReveal";
import AboutIcon from "./AboutIcon";

export default function AboutSection() {
  return (
    <SectionReveal id="about" className="about section-pad">
      <div className="about__wrap">
        <h2 id="about-heading" className="section-title about__title">
          ABOUT US
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
                We’re two specialists blending design, code, and marketing into digital
                products that stand out.
              </p>
              <p>
                We started Wako to bridge design and development — offering the clarity of
                design and the reliability of engineering, without the overhead of a big
                agency.
              </p>
              <p>
                Every project gets our full attention from first sketch to launch. No layers
                of management. No handoffs. Just direct collaboration, sharp ideas, and
                results you can see.
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
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
