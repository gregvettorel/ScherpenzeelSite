// Services.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faWrench,
  faLifeRing,
  faCompass,
  faArrowUpRightFromSquare,
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
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">
          Services
        </h2>

        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 gap-4 sm:gap-6"
            >
              {/* Left: Icon + Title */}
              <div className="flex items-center gap-4 min-w-[220px] sm:w-1/3">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="w-7 h-7 sm:w-8 sm:h-8 text-black flex-shrink-0"
                />
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>

              {/* Middle: Description */}
              <p className="text-gray-500 text-base sm:text-lg sm:w-2/3">
                {service.description}
              </p>

              {/* Right: Arrow button */}
              <button className="flex-shrink-0 w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="w-4 h-4"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
