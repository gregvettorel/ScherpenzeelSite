// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LangContext";
import gsap from "gsap";
import "../styles/navbar.css";
import WakoButton from "./WakoButton";
import { Link, useNavigate } from "react-router-dom";

const LINKS = [
  { hash: "portfolio",     key: "nav.work" },
  { hash: "how-it-works",  key: "nav.process" },
  { hash: "about",         key: "nav.about" },
  { hash: "team",          key: "nav.team" },
];

export default function Navbar() {
  const navRef = useRef();
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const navigate = useNavigate();

  // language dropdown state
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const LANGS = [
    { code: "en", label: "EN" },
    { code: "nl", label: "NL" },
    { code: "fr", label: "FR" },
  ];

  useEffect(() => {
    const onDoc = (e) => { if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
    };
  }, []);

  // lock/unlock page scroll only while open
  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setLangOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  const goSection = (id) => { navigate(`/#${id}`); setOpen(false); };

  return (
    <>
      <header className="nav" ref={navRef}>
        <div className="nav__inner wrap section-pad">
          <Link to="/" className="nav__brand" aria-label="Home">
            <img src="/logo_site.svg" alt="" />
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <a
                key={l.hash}
                href={`/#${l.hash}`}
                className="nav__link"
                onClick={(e) => { e.preventDefault(); goSection(l.hash); }}
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            {/* Custom dropdown (desktop) */}
            <div className="langdd" ref={langRef}>
              <button
                type="button"
                className={`langdd__btn nav__link ${langOpen ? "is-open" : ""}`}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label="Change language"
                onClick={() => setLangOpen(v => !v)}
              >
                {lang.toUpperCase()}
                <svg className="langdd__caret" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 4.5L6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {langOpen && (
                <ul className="langdd__menu" role="listbox" aria-label="Language">
                  {LANGS.map(L => (
                    <li key={L.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={lang === L.code}
                        className={`langdd__opt ${lang === L.code ? "is-active" : ""}`}
                        onClick={() => { setLang(L.code); setLangOpen(false); }}
                      >
                        {L.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <WakoButton className="nav__btn" variant="ghost" showArrow={false} href="mailto:thisiswako@gmail.com">
              {t("nav.contact")}
            </WakoButton>
          </div>

          <button
            className="nav__burger"
            aria-label="Open menu"
            aria-controls="mobile-drawer"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span className="burger-lines" />
          </button>
        </div>
      </header>

      {open && (<button className="nav__backdrop" aria-hidden="true" onClick={() => setOpen(false)} />)}

      {/* Mobile drawer (links + language buttons + CTA) */}
      <aside
        id="mobile-drawer"
        className={`nav__drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="drawer__head">
          <img src="/logo_site.svg" alt="Wako" />
          <button className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        </div>
        <nav className="drawer__links">
          {LINKS.map((l) => (
            <a
              key={l.hash}
              href={`/#${l.hash}`}
              className="drawer__link"
              onClick={(e) => { e.preventDefault(); goSection(l.hash); }}
            >
              {t(l.key)}
            </a>
          ))}
          <hr className="drawer__rule" />
          {/* Language buttons under the links */}
          <div className="drawer__langs" role="group" aria-label="Language">
            {[
              { code: "en", label: "EN" },
              { code: "nl", label: "NL" },
              { code: "fr", label: "FR" },
            ].map(L => (
              <button
                key={L.code}
                type="button"
                className={`drawer__link drawer__link--lang ${lang === L.code ? "is-active" : ""}`}
                aria-pressed={lang === L.code}
                onClick={() => { setLang(L.code); setOpen(false); }}
              >
                {L.label}
              </button>
            ))}
          </div>
          <a href="mailto:thisiswako@gmail.com" className="drawer__btn" onClick={() => setOpen(false)}>
            {t("nav.contact")}
          </a>
        </nav>
      </aside>
    </>
  );
}
