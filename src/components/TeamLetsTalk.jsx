import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import backgroundLogo from "../assets/backgroundlogo.png";

// circle photos
import gregoryImage from "../assets/team-gregory.png";
import ilianImage from "../assets/team-ilian.png";

// overlays (transparent)
import handsPeek from "../assets/hands.svg";      // hands sit on the rim (front)
import gregPeek from "../assets/gregteam_1.svg";  // head/upper (goes behind)
import ilianPeek from "../assets/ilianteam_1.svg";// head/upper (goes behind)

import "../styles/team-peek.css";

const team = [
  { name: "Gregory Vettorel", role: "FULL STACK DEVELOPER", photo: gregoryImage, head: gregPeek },
  { name: "Ilian Bosserez", role: "DEVELOPER & DESIGNER", photo: ilianImage, head: ilianPeek },
];

export default function TeamLetsTalk() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const els = cardsRef.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.classList.toggle("inview", e.isIntersecting);
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -12% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="team" className="relative">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="text-center mb-10">
          <h2 className="section-title">Team</h2>
        </div>

        {/* Grid */}
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 team-cards-grid">
          {team.map((m, i) => (
            <div
              key={m.name}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card-wrap relative"        // was: "card-wrap relative inview"
            >
              {/* 1) BODY/HEAD — BEHIND the card */}
              <img src={m.head} alt="" className="peek-body" draggable={false} loading="lazy" decoding="async" />

              {/* 2) CARD SURFACE */}
              <article
                className="
                  team-card relative z-10 overflow-visible
                  rounded-2xl bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] ring-1 ring-black/5
                  p-8 text-center
                "
              >
                {/* 3) HANDS — ABOVE the card edge */}
                <img src={handsPeek} alt="" className="peek-hands" draggable={false} loading="eager" decoding="sync" />

                {/* card content */}
                <div className="mx-auto mb-6 size-44 rounded-full overflow-hidden ring-1 ring-gray-200">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    width={176}
                    height={176}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="mt-2 text-[11px] tracking-[0.2em] text-gray-500 uppercase">{m.role}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-center text-4xl sm:text-6xl md:text-7xl font-bold text-blue-600">Let’s talk!</h2>
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:hello@joey.co"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base hover:opacity-90 transition"
          >
            hello@joey.co
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
