import React, { useEffect, useRef } from "react";
import "../styles/projects.css";
import SectionReveal from "./SectionReveal";

const projects = [
  { title: "Critly", category: "Mobile App", image: "/projects/critly.png", description: "An innovative mobile app for managing daily critiques.", tags: ["Photography", "Art Direction"] },
  { title: "Tansto", category: "Web Design", image: "/projects/tansto.png", description: "A clean and responsive website for a SaaS startup.", tags: ["Web", "UI/UX"] },
  { title: "Senta", category: "Mobile App & Branding", image: "/projects/senta.png", description: "Branding and mobile app development for a new service.", tags: ["Branding", "App"] },
  { title: "Crint",  category: "Mobile App", image: "/projects/crint.png",  description: "Cross-platform app for connecting creative teams.", tags: ["App", "Collaboration"] },
];

function Projects() {
  const viewportRef = useRef(null);
  const railRef = useRef(null);
  const cursorRef = useRef(null);

  const isDraggingRef = useRef(false);

  /** Cursor bubble: always visible & always follows pointer inside viewport */
  useEffect(() => {
    const viewport = viewportRef.current;
    const cursor = cursorRef.current;
    if (!viewport || !cursor) return;

    // place it once (center)
    const center = () => {
      const r = viewport.getBoundingClientRect();
      cursor.style.left = `${r.width / 2}px`;
      cursor.style.top  = `${r.height / 2}px`;
    };
    center();

    let raf = null;
    const onMove = (e) => {
      const r = viewport.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        cursor.style.left = `${x}px`;
        cursor.style.top  = `${y}px`;
        raf = null;
      });
    };

    viewport.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", center, { passive: true });

    return () => {
      viewport.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", center);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /** Drag-to-scroll: only moves while dragging */
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
      const dx = (e.clientX - startX) * 1.2;
      rail.scrollLeft = startLeft - dx;

      // seamless loop support if you're duplicating cards
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

      <div className="projects-viewport" ref={viewportRef}>
        <div className="projects-rail" ref={railRef}>
          {list.map((p, i) => (
            <article key={`${p.title}-${i}`} className="project-card">
              <img src={p.image} alt={p.title} className="project-image" draggable="false"/>
              <div className="project-overlay">
                <h3 className="project-card-title">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>

        {/* Always-visible blue bubble that follows the mouse */}
        <div ref={cursorRef} className="drag-cursor">Drag</div>
      </div>
    </SectionReveal>
  );
}

export default Projects;
