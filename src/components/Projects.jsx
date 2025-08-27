import React, { useEffect, useRef } from "react";
import "../styles/projects.css";
import SectionReveal from "./SectionReveal";

const projects = [
  {
    title: "Critly",
    category: "Mobile App",
    image: "/projects/critly.png",
    description: "An innovative mobile app for managing daily critiques.",
    tags: ["Photography", "Art Direction"],
  },
  {
    title: "Tansto",
    category: "Web Design",
    image: "/projects/tansto.png",
    description: "A clean and responsive website for a SaaS startup.",
    tags: ["Web", "UI/UX"],
  },
  {
    title: "Senta",
    category: "Mobile App & Branding",
    image: "/projects/senta.png",
    description: "Branding and mobile app development for a new service.",
    tags: ["Branding", "App"],
  },
  {
    title: "Crint",
    category: "Mobile App",
    image: "/projects/crint.png",
    description: "Cross-platform app for connecting creative teams.",
    tags: ["App", "Collaboration"],
  },
];

function Projects() {
  const railRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let scrollAmount = 0.7; // px per frame
    let animationFrame;

    const step = () => {
      if (!rail) return;
      rail.scrollLeft += scrollAmount;
      // loop scroll (infinite carousel)
      if (rail.scrollLeft >= rail.scrollWidth - rail.clientWidth) {
        rail.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Enable click & drag
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const start = (e) => {
      isDown = true;
      rail.classList.add("dragging");
      startX = e.pageX || e.touches?.[0]?.pageX;
      scrollLeft = rail.scrollLeft;
    };
    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches?.[0]?.pageX;
      const walk = (x - startX) * 1.2; // drag speed
      rail.scrollLeft = scrollLeft - walk;
    };
    const end = () => {
      isDown = false;
      rail.classList.remove("dragging");
    };

    rail.addEventListener("mousedown", start);
    rail.addEventListener("touchstart", start);
    rail.addEventListener("mousemove", move);
    rail.addEventListener("touchmove", move);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);

    return () => {
      rail.removeEventListener("mousedown", start);
      rail.removeEventListener("touchstart", start);
      rail.removeEventListener("mousemove", move);
      rail.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
    };
  }, []);

  return (
    <SectionReveal id="portfolio" className="projects-section">
      <h2 className="projects-title-display">Our work</h2>

      <div className="projects-rail full-width" ref={railRef}>
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <img src={p.image} alt={p.title} className="project-image" />
            <div className="project-overlay">
              <div className="overlay-top-grad" />
              <h3 className="project-card-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-chevron" aria-hidden>
                ↘
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}

export default Projects;
