// components/TeamLetsTalk.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gregoryImage from "../assets/team-gregory.png";
import ilianImage from "../assets/team-ilian.png";
import backgroundLogo from "../assets/backgroundlogo.png";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const team = [
  {
    name: "Gregory Vettorel",
    role: "FULL STACK DEVELOPER",
    photo: gregoryImage,
  },
  {
    name: "Ilian Bosserez",
    role: "DEVELOPER & DESIGNER",
    photo: ilianImage,
  },
];

export default function TeamLetsTalk() {
  return (
<section className="relative">
  {/* Background shape */}
  <div className="absolute inset-0 -z-10 flex justify-center">
    <img
      src={backgroundLogo}
      alt=""
      aria-hidden="true"
      className="w-auto max-w-none h-full opacity-100"
    />
  </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Team
          </h2>
        </div>

        {/* Team cards */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5 p-8 text-center"
            >
              <div className="mx-auto mb-6 size-44 rounded-full overflow-hidden ring-1 ring-gray-200">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="mt-2 text-[11px] tracking-[0.2em] text-gray-500 uppercase">
                {m.role}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-center text-4xl sm:text-6xl md:text-7xl font-bold text-blue-600">
          Let’s talk!
        </h2>

        <div className="mt-8 flex justify-center">
          <a
            href="mailto:hello@joey.co"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base hover:opacity-90 transition"
          >
            hello@joey.co
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-4 h-4"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
