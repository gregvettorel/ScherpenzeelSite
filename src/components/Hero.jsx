// src/components/Hero.jsx
import React, { useMemo } from "react";
import { ReactComponent as HeroVisual } from "../assets/hero.svg";
import WakoButton from "./WakoButton";
import PhoneIcon from "./PhoneIcon";
import EnvelopeIcon from "./EnvelopeIcon";
import "../styles/hero-anim.css";
import SectionReveal from "./SectionReveal";
import { useLang } from "../context/LangContext";

// import the sound
import welcomeSfx from "../assets/sfx/welcometowako.mp3";

export default function Hero() {
  const { t } = useLang();

  // create one Audio instance for this component
  const welcomeAudio = useMemo(() => {
    const a = new Audio(welcomeSfx);
    a.preload = "auto";
    a.volume = 0.6;      // taste: 0..1
    return a;
  }, []);

  const playWelcome = () => {
    try {
      welcomeAudio.currentTime = 0;
      const p = welcomeAudio.play();
      if (p?.catch) p.catch(() => {}); // avoid console noise if blocked
    } catch (_) {}
  };

  // Split accent phrase -> before (normal) + lastWord (blue)
  const accent = t("hero.accent") || "";
  const [before, lastWord] = useMemo(() => {
    const s = accent.trim();
    const idx = s.lastIndexOf(" ");
    return idx >= 0 ? [s.slice(0, idx + 1), s.slice(idx + 1)] : ["", s];
  }, [accent]);

  return (
    <SectionReveal id="hero" className="section section-pad hero">
      <div className="wrap hero__row">
        <div className="hero__content">
          <h1 className="hero__title">
            {t("hero.title1")}<br />
            {before}
            <span className="hero__accent">
              {lastWord}
              <button
                type="button"
                className="hero__dot"
                aria-label="Play welcome to Wako sound"
                onClick={playWelcome}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); playWelcome(); }
                }}
              >.</button>
            </span>
          </h1>

          <p className="hero__lead">{t("hero.lead")}</p>

          <div className="hero__actions">
            <WakoButton href="tel:+1234567890" variant="solid" hoverSound={require("../assets/sfx/hover2mp3.mp3")} clickSound={require("../assets/sfx/press.mp3")} volume={0.18}>
              {t("hero.ctaFreeAdvice")} <PhoneIcon size={22} />
            </WakoButton>
            <WakoButton href="mailto:thisiswako@gmail.com" variant="ghost">
              {t("hero.email")} <EnvelopeIcon size={22} />
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
