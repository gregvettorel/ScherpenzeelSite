// src/components/Hero.jsx
import  { useMemo, useState, useEffect } from "react";
import { ReactComponent as HeroVisual } from "../assets/hero.svg";
import WakoButton from "./WakoButton";
import EnvelopeIcon from "./EnvelopeIcon";
import "../styles/hero-anim.css";
import SectionReveal from "./SectionReveal";
import { useLang } from "../context/LangContext";

// Defer welcome sound until user clicks

export default function Hero() {
  const { t } = useLang();
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch { return 'light'; }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('theme-dark');
    else root.classList.remove('theme-dark');
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

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
            </span>
          </h1>

          <p className="hero__lead">{t("hero.lead")}</p>

          <div className="hero__actions">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="theme-toggle"
              >
                {theme === 'dark' ? 'Light' : 'Night'}
              </button>

              <WakoButton
                href={`mailto:${t("hero.email")}?subject=Book%20a%20call%20with%20Wako`}
                variant="solid"
                sfx={false}
              >
                {t("hero.ctaFreeAdvice")} <EnvelopeIcon size={20} />
              </WakoButton>
            </div>
          </div>
        </div>
        <div className="hero__visual-wrap">
          <HeroVisual className="hero-visual" />
        </div>
      </div>
    </SectionReveal>
  );
}
