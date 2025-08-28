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
  const isDraggingRef = useRef(false);

  // Auto-scroll with seamless loop (content duplicated)
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    // Speed (px per frame). Tweak if you want slower/faster.
    const SPEED = 0.6;

    let rafId;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tick = () => {
      // Pause while dragging or if user prefers reduced motion
      if (!isDraggingRef.current && !prefersReduced) {
        rail.scrollLeft += SPEED;

        // Seamless loop: when we pass half (because list is duplicated),
        // jump back by half.
        const half = rail.scrollWidth / 2;
        if (rail.scrollLeft >= half) rail.scrollLeft -= half;
      }
      rafId = requestAnimationFrame(tick);
    };

    // Start slightly in from 0 to avoid some browsers snapping oddly.
    rail.scrollLeft = 1;
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // Pointer-based dragging (smooth, pause autoplay while dragging)
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let startX = 0;
    let startLeft = 0;

    const onDown = (e) => {
      isDraggingRef.current = true;
      rail.classList.add("dragging");
      rail.setPointerCapture?.(e.pointerId);
      startX = e.clientX;
      startLeft = rail.scrollLeft;
    };

    const onMove = (e) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const dx = (e.clientX - startX) * 1.2; // drag multiplier
      rail.scrollLeft = startLeft - dx;

      // keep the loop seamless while dragging
      const half = rail.scrollWidth / 2;
      if (rail.scrollLeft < 0) rail.scrollLeft += half;
      if (rail.scrollLeft >= half) rail.scrollLeft -= half;
    };

    const onUp = (e) => {
      isDraggingRef.current = false;
      rail.classList.remove("dragging");
      rail.releasePointerCapture?.(e.pointerId);
    };

    rail.addEventListener("pointerdown", onDown, { passive: true });
    rail.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp, { passive: true });

    return () => {
      rail.removeEventListener("pointerdown", onDown);
      rail.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  // Duplicate items to enable the seamless loop
  const list = [...projects, ...projects];

  return (
    <SectionReveal id="portfolio" className="projects-section">
      <h2 className="projects-title-display">Our work</h2>

      <div className="projects-viewport">
        <div className="projects-rail" ref={railRef}>
          {list.map((p, i) => (
            <article key={`${p.title}-${i}`} className="project-card">
              <img src={p.image} alt={p.title} className="project-image" />
              <div className="project-overlay">
                <div className="overlay-top-grad" />
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={`${p.title}-${t}-${i}`} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-chevron" aria-hidden>↘</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Projects;
