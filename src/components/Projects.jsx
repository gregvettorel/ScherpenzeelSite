import React from "react";
import "../styles/projects.css"; // new CSS file
import "../styles/projects-anim.css"; // your animation CSS
import SectionReveal from "./SectionReveal";

const projects = [
  { title: "Critly", category: "Mobile App", image: "/projects/critly.png" },
  { title: "Tansto", category: "Web Design", image: "/projects/tansto.png" },
  { title: "Senta", category: "Mobile App & Branding", image: "/projects/senta.png" },
  { title: "Crint", category: "Mobile App", image: "/projects/crint.png" },
];

function Projects() {
  return (
    <SectionReveal id="portfolio" className="projects-section section section-pad">
      <div className="projects-container wrap">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          <a href="#more" className="more-link">
            More <span className="arrow">→</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
              />
              <div className="project-info">
                <div className="project-title">{project.title}</div>
                <div className="project-category">{project.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Projects;
