import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Adjust paths to your assets folder names
import heroCover from "../assets/respireipadmockup.png";
import gridSpread from "../assets/respireappscreens.jpg";
import phoneKeyshot from "../assets/respirethumb.png";

export default function ProjectRespire() {
  return (
    <>
      <Navbar />
      <main className="project section-pad">
        {/* Hero */}
        <section className="project-hero section">
          <div className="project-eyebrow">Case Study</div>
          <h1 className="project-title-xxl">Respire</h1>
          <p className="project-subtitle">
            Sustainable fashion marketplace — mobile app & website experience.
          </p>

          <div className="project-meta">
            <div>
              <div className="pill">Role</div>
              <ul className="meta-list">
                <li>Product Design</li>
                <li>UI/UX</li>
                <li>Brand</li>
              </ul>
            </div>
            <div>
              <div className="pill">Deliverables</div>
              <ul className="meta-list">
                <li>iOS App</li>
                <li>Marketing Website</li>
              </ul>
            </div>
            <div>
              <div className="pill">Tools</div>
              <ul className="meta-list">
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Premiere</li>
              </ul>
            </div>
          </div>

          <figure className="project-cover">
            <img src={heroCover} alt="Respire website on tablet" />
          </figure>
        </section>

        {/* Context & goals */}
        <section className="section two-col">
          <div>
            <h2 className="project-h2">Overview</h2>
            <p className="project-copy">
              Respire connects people with pre-loved clothing through a playful, sustainable shopping
              experience. We designed a clean brand system, mobile-first UI, and a marketing website
              to communicate the product’s vibe and core value props.
            </p>
          </div>
          <div>
            <h3 className="project-h3">Goals</h3>
            <ul className="project-ul">
              <li>Make discovery feel visual and social.</li>
              <li>Keep flows light-weight and distraction-free.</li>
              <li>Ensure the brand feels friendly, not “eco-preachy.”</li>
            </ul>
          </div>
        </section>

        {/* Key shot */}
        <section className="section">
          <figure className="shot">
            <img src={phoneKeyshot} alt="Respire app key screen" />
          </figure>
        </section>

        {/* Big spread */}
        <section className="section">
          <figure className="shot">
            <img src={gridSpread} alt="Respire UI grid screens" />
          </figure>
        </section>

        {/* Outcome */}
        <section className="section two-col">
          <div>
            <h2 className="project-h2">Outcome</h2>
            <p className="project-copy">
              The identity, UI kit, and responsive marketing site come together with soft motion and a
              warm, editorial feel. The system scales across app, web, and social without losing the brand’s
              calm simplicity.
            </p>
          </div>
          <div className="project-cta-stack">
            <a className="btn-solid" href="https://www.ilianbosserez.com/project-respire.html" target="_blank" rel="noreferrer">
              View full legacy case
            </a>
            <a className="btn-ghost" href="/" aria-label="Back to home">← Back to home</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}