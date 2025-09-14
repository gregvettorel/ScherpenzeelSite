import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/projects.css";
import respireThumb from "../assets/respirethumb.png";
import swearThumb from "../assets/swearthumb.png";
import brainsCoffeeThumb from "../assets/brainscoffeelaptop.png"; // NEW

const projects = [
  { title: "Brains Coffee", category: "Branding & Web", image: brainsCoffeeThumb, slug: "brainscoffee" }, // NEW
  { title: "Respire",category: "Case Study",            image: respireThumb,           slug: "respire" },
  { title: "Swear", category: "Mobile App",         image: swearThumb,             slug: "swear" }
];

export default function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { cardsRef.current.forEach(el => el?.classList.add("in")); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }});
    }, { threshold: 0.35 });
    cardsRef.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);

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
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Link key={p.title+i} to={`/work/${p.slug}`} className="project-card-link">
              <article ref={el => (cardsRef.current[i] = el)} className="project-card">
                <div className="project-media" style={{ backgroundColor: "#F7F7F7" }}>
                  <div className="reveal-curtain" />
                  <img className="project-img" src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-category">{p.category}</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
