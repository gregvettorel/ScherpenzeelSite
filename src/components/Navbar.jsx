// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import "../styles/navbar.css";

const LINKS = [
  { href: "#portfolio", label: "Projects" },
  { href: "#how-it-works", label: "Our Services" },
  { href: "#about", label: "About Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock/unlock page scroll only while open
  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* HEADER (glass) */}
      <header className="nav">
        <div className="nav__inner">
          <a href="/" className="nav__brand" aria-label="Home">
            <img src="/logo_site.svg" alt="" />
          </a>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav__link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__right">
            <a href="#contact" className="nav__btn">Contact</a>
          </div>

          <button
            className="nav__burger"
            aria-label="Open menu"
            aria-controls="mobile-drawer"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span/><span/><span/>
          </button>
        </div>
      </header>

      {/* BACKDROP + DRAWER (siblings of header, above everything) */}
      {open && (
        <button
          className="nav__backdrop"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        id="mobile-drawer"
        className={`nav__drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="drawer__head">
          <img src="/logo_site.svg" alt="" />
          <button className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="drawer__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="drawer__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <hr className="drawer__rule" />
          <a href="#work" className="drawer__link" onClick={() => setOpen(false)}>Work</a>
          <a href="#contact" className="drawer__btn" onClick={() => setOpen(false)}>Contact</a>
        </nav>
      </aside>
    </>
  );
}
