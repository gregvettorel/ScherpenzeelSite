// Services.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faWrench,
  faLifeRing,
  faCompass,
  faArrowRight, // <-- use this icon
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faPencilRuler,
    title: "Design",
    description:
      "Need a name, logo or full brand? We craft identities that feel fresh, professional and on-point.",
  },
  {
    icon: faWrench,
    title: "Build",
    description:
      "We develop fast, responsive websites and scalable MVPs.",
  },
  {
    icon: faLifeRing,
    title: "Ongoing Support",
    description:
      "Hosting, updates, fixes and light improvements, so your product stays sharp and stress-free.",
  },
  {
    icon: faCompass,
    title: "Consultation",
    description:
      "We work alongside you to define your vision, shape your roadmap, and offer honest technical advice.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">
          Services
        </h2>
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-stretch justify-between py-10 gap-6"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-6 min-w-[250px] md:min-w-[320px]">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="w-10 h-10 text-black flex-shrink-0"
                />
                <span className="text-3xl font-bold">{service.title}</span>
              </div>
              {/* Explanation */}
              <div className="flex-1 flex items-center">
                <p className="text-gray-500 text-lg max-w-2xl">
                  {service.description}
                </p>
              </div>
              {/* Arrow icon, styled as minimal outlined circle */}
              <div className="flex items-center">
                <button
                  aria-label={`More about ${service.title}`}
                  className="group flex items-center gap-3 px-8 py-4 border border-gray-200 rounded-full bg-white text-black font-medium transition hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-5 h-5 text-black transition-transform duration-200 group-hover:translate-x-2"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
