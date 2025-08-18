// src/components/Hero.jsx
import React from "react";
import { ReactComponent as HeroVisual } from "../assets/hero.svg";
import WakoButton from "./WakoButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "../styles/hero-anim.css";
import SectionReveal from "./SectionReveal";
import ArrowDraw from "./ArrowDraw";

export default function Hero() {
  return (
    <SectionReveal id="hero" className="section section-pad hero">
      <div className="wrap hero__row">
        <div className="hero__content">
          <h1 className="hero__title">
            Your product,<br />
            ready to <span className="hero__accent">launch.</span>
          </h1>
          <p className="hero__lead">
            <a className="link-blue" href="/services">Design and development</a>, handled by two specialists
            fully dedicated to your product → from first sketch to final build.
          </p>
          <div className="hero__actions">
            <WakoButton href="/contact" variant="solid">
              Free Advice <ArrowDraw size={22} />
            </WakoButton>
            <WakoButton href="mailto:thisiswako@gmail.com" variant="ghost">
              thisiswako@gmail.com <ArrowDraw size={22} />
            </WakoButton>
          </div>
        </div>
        <div className="hero__visual-wrap">
          <HeroVisual className="hero-visual" />
        </div>
      </div>
    </SectionReveal>
  );
}