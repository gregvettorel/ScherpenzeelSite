import React, { useState } from "react";
import "../styles/projects.css";
import "../styles/projects-anim.css";
import SectionReveal from "./SectionReveal";
import ArrowDraw from "./ArrowDraw";

const projects = [
  { title: "Critly", category: "Mobile App", image: "/projects/critly.png" },
  { title: "Tansto", category: "Web Design", image: "/projects/tansto.png" },
  { title: "Senta", category: "Mobile App & Branding", image: "/projects/senta.png" },
  { title: "Crint", category: "Mobile App", image: "/projects/crint.png" },
];

function Projects() {
  const [moreHovered, setMoreHovered] = useState(false);

  return (
    <SectionReveal id="portfolio" className="projects-section section section-pad">
      <div className="projects-container wrap">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          <a
            href="#more"
            className="more-link"
            onMouseEnter={() => setMoreHovered(true)}
            onMouseLeave={() => setMoreHovered(false)}
          >
            More <ArrowDraw size={26} hovered={moreHovered} />
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
