// AboutSection.jsx
import React from "react";
import "../styles/about.css";
import macbookImage from "../assets/macbookwako.png";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__wrap">
        <h2 id="about-heading" className="section-title about__title">
          About us
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

          {/* Right: text */}
          <div className="about__content">
            <h3 className="about__headline">
              At Wako, we turn ideas into digital products people remember.
            </h3>

            <div className="about__copy">
              <p>
                We blend bold design with precise development to craft websites
                and apps that not only look beautiful but also work flawlessly.
              </p>
              <p>
                With backgrounds in marketing, branding, and technology, we
                create products that connect with audiences and deliver
                measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
