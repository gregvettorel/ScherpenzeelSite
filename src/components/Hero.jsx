// src/components/Hero.jsx
import React, { useMemo } from "react";
import { ReactComponent as HeroVisual } from "../assets/hero.svg";
import WakoButton from "./WakoButton";
import PhoneIcon from "./PhoneIcon";
import EnvelopeIcon from "./EnvelopeIcon";
import "../styles/hero-anim.css";
import SectionReveal from "./SectionReveal";
import { useLang } from "../context/LangContext";

// Defer welcome sound until user clicks

export default function Hero() {
  const { t } = useLang();

  const audioRef = React.useRef(null);

  const playWelcome = () => {
    try {
      const playIt = (a) => { a.volume = 0.6; a.currentTime = 0; return a.play(); };
      if (!audioRef.current) {
        import("../assets/sfx/welcometowako.mp3").then(m => {
          audioRef.current = new Audio(m.default);
          return playIt(audioRef.current);
        });
        return;
      }
      const p = playIt(audioRef.current);
      if (p?.catch) p.catch(() => {});
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
            <WakoButton
              href={`mailto:${t("hero.email")}?subject=Book%20a%20call%20with%20Wako`}
              variant="solid"
              sfx={false}
            >
              {t("hero.ctaFreeAdvice")} <EnvelopeIcon size={20} />
            </WakoButton>
            <WakoButton href="tel:+32479954400" variant="ghost" sfx={false}>
              +32 479 95 44 00 <PhoneIcon size={20} />
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
