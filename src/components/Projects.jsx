// src/components/Projects.jsx
import React from 'react';
import '../styles/projects-anim.css'; // Import your CSS for animations

const projects = [
  {
    title: 'Critly',
    category: 'Mobile App',
    image: '/projects/critly.png',
  },
  {
    title: 'Tansto',
    category: 'Web Design',
    image: '/projects/tansto.png',
  },
  {
    title: 'Senta',
    category: 'Mobile App & Branding',
    image: '/projects/senta.png',
  },
  {
    title: 'Crint',
    category: 'Mobile App',
    image: '/projects/crint.png',
  },
];

function Projects() {
  return (
    <section id="portfolio" className="px-4 sm:px-6 md:px-10 pt-1 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-title">Projects</h2>
          <a
            href="#more"
            className="text-base font-bold hover:underline flex items-center gap-1"
          >
            More <span className="text-xl font-bold">→</span>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white  p-6 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl mb-4"
              />
              <div className="font-bold text-lg mb-1">{project.title}</div>
              <div className="text-sm text-gray-500">{project.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
