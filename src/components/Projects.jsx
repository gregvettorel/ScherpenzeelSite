import React, { useEffect, useRef } from "react";
import "../styles/projects.css";

// Updated projects data (ensure images are high-quality and add slugs for links)
const projects = [
  { title: "Crty", category: "Mobile App", image: "/projects/critly.png", slug: "crty" },
  { title: "Tansto", category: "Web Design", image: "/projects/tansto.png", slug: "tansto" },
  { title: "Senta", category: "Mobile App & Branding", image: "/projects/senta.png", slug: "senta" },
  { title: "Crint", category: "Mobile App", image: "/projects/crint.png", slug: "crint" },
];

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      cardsRef.current.forEach(el => el?.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    cardsRef.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  // Optional: Add subtle 3D tilt on hover (like Form & Fun's interactive feel)
  useEffect(() => {
    const cleanups = cardsRef.current.map(card => {
      if (!card) return null;
      const media = card.querySelector(".project-media");
      const onMove = e => {
        const r = card.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        media.style.transform = `rotateY(${nx * 2}deg) rotateX(${ny * -2}deg)`;
      };
      const onLeave = () => (media.style.transform = "rotateX(0) rotateY(0)");
      card.addEventListener("pointermove", onMove);
      card.addEventListener("pointerleave", onLeave);
      return () => {
        card.removeEventListener("pointermove", onMove);
        card.removeEventListener("pointerleave", onLeave);
      };
    });
    return () => cleanups.forEach(fn => fn && fn());
  }, []);

  return (
    <section id="portfolio" className="projects-section section section-pad">
      <div className="projects-container wrap">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          <a className="more-link" href="/work">More →</a>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <article
              key={p.title + i}
              ref={el => (cardsRef.current[i] = el)}
              className="project-card"
            >
              <div className="project-media" style={{ backgroundColor: "#F7F7F7" }}>
                <div className="reveal-curtain" />
                <img className="project-img" src={p.image} alt={p.title} loading="lazy" />
                <div className="project-overlay">
                  <a className="project-link" href={`/work/${p.slug}`}>View Project</a>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-category">{p.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
