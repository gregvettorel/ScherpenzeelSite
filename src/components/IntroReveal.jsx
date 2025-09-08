import React, { useEffect, useState } from "react";
import "../styles/intro.css";

export default function IntroReveal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { setShow(false); return; }

    // lock scroll
    document.documentElement.classList.add("is-intro");

    // trigger CSS animations
    const root = document.querySelector(".intro");
    root?.classList.add("intro--play");

    // end after ~1.6s
    const t = setTimeout(() => {
      document.documentElement.classList.remove("is-intro");
      setShow(false);
    }, 1600);

    return () => {
      clearTimeout(t);
      document.documentElement.classList.remove("is-intro");
    };
  }, []);

  if (!show) return null;

  return (
    <div className="intro" aria-hidden>
      <div className="intro__wrap">
        <div className="intro__panel intro__panel--top" />
        <div className="intro__panel intro__panel--btm" />
        <div className="intro__center">
          {/* YOUR W PATH INLINE – fill set to white so it’s visible on blue */}
          <svg
            className="intro__logo"
            viewBox="-30 -30 243 218"   // expanded viewBox for more breathing room
            width="200"
            height="160"
            aria-hidden="true"
            style={{ display: "block" }}
          >
            <path
              d="M129.001 115.888C121.404 108.771 105.091 113.995 101.404 123.09C98.3009 130.748 99.3709 137.467 94.1568 145.751C82.6443 164.042 54.7477 161.145 45.6676 141.744C35.2393 119.468 27.0865 93.3697 17.3858 70.3248C13.4342 60.9304 0.951685 38.1773 0.145672 29.8717C-2.27237 4.8412 25.9524 -9.02987 44.6975 7.48872C48.7062 11.0188 50.5179 15.3601 52.8218 20.0218C61.1388 36.8678 67.4799 54.7742 76.1463 71.4778C84.2278 80.4737 103.151 77.2568 104.293 64.0405C104.913 56.8096 96.8601 44.2979 94.4706 36.8322C84.4061 5.37497 127.103 -17.0792 144.843 17.175C158.153 42.8816 167.739 71.9333 180.957 97.8606C192.005 128.222 155.578 150.455 135.684 125.951C133.395 123.126 131.347 118.094 129.001 115.895V115.888Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
