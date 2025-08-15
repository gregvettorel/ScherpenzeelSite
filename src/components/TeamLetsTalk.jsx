import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// circle photos
import gregoryImage from "../assets/team-gregory.png";
import ilianImage from "../assets/team-ilian.png";

// overlays (transparent)
import handsPeek from "../assets/hands.svg";      // hands sit on the rim (front)
import gregPeek from "../assets/gregteam_1.svg";  // head/upper (goes behind)
import ilianPeek from "../assets/ilianteam_1.svg";// head/upper (goes behind)

// One CSS to rule them all (replaces your old file)
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
    <section id="team" className="team-section">
      <div className="container pad-y-lg">
        <div className="text-center mb-lg">
          <h2 className="section-title">Team</h2>
        </div>

        {/* Grid */}
        <div className="team-cards-grid">
          {team.map((m, i) => (
            <div
              key={m.name}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card-wrap"
            >
              {/* 1) BODY/HEAD — BEHIND the card */}
              <img src={m.head} alt="" className="peek-body" draggable={false} loading="lazy" decoding="async" />

              {/* 2) CARD SURFACE */}
              <article className="team-card">
                {/* 3) HANDS — ABOVE the card edge */}
                <img src={handsPeek} alt="" className="peek-hands" draggable={false} loading="eager" decoding="sync" />

                {/* card content */}
                <div className="avatar-wrap">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="avatar"
                    width={176}
                    height={176}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container pad-y-xl">
        <h2 className="cta-title">Let’s talk!</h2>
        <div className="cta-row">
          <a href="mailto:thisiswako@gmail.com" className="cta-btn">
            thisiswako@gmail.com
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon-sm" />
          </a>
        </div>
      </div>
    </section>
  );
}
