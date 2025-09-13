// src/components/RunningBanner.jsx
import React, { useEffect, useRef, useState } from "react";
//
import "../styles/running-banner.css";

export default function RunningBanner({
  scrollerSelector,
  speed = 0.6,
  direction = 1,
  imageSrc = "/logo_site.svg",
  imageAlt = "WAKO Design",
  segments = 10,           // how many logos per sequence
  logoWidth = 120,         // px width of each logo (CSS can override)
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [loopWidth, setLoopWidth] = useState(0);

  const Sequence = () => (
    <>
      {Array.from({ length: segments }).map((_, i) => (
        <img
          key={i}
          className="running-banner__logo"
          src={imageSrc}
          alt={imageAlt}
          width={logoWidth}
          height="auto"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          decoding="async"
          loading="eager"
          aria-hidden="true"
        />
      ))}
    </>
  );

  // Measure width of one sequence (half of duplicated track)
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const half = trackRef.current.scrollWidth / 2;
      setLoopWidth(half || 0);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);

    // re-measure after resources load (in case non-SVG is used)
    const raf = requestAnimationFrame(measure);
    window.addEventListener("load", measure);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("load", measure);
    };
  }, []);

  // Map vertical scroll to horizontal offset
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const scroller =
      (scrollerSelector && document.querySelector(scrollerSelector)) || window;

    const getScrollY = () =>
      scroller === window
        ? window.scrollY || window.pageYOffset || 0
        : scroller.scrollTop || 0;

    const update = () => {
      if (!trackRef.current || !loopWidth) return;
      const y = getScrollY();
      const x = (y * speed * direction) % loopWidth;
      const wrapped = ((x % loopWidth) + loopWidth) % loopWidth;
      trackRef.current.style.transform = `translate3d(${-wrapped}px, 0, 0)`;
    };

    update();
    const opts = { passive: true };
    if (scroller === window) {
      window.addEventListener("scroll", update, opts);
      window.addEventListener("resize", update, opts);
    } else {
      scroller.addEventListener("scroll", update, opts);
      window.addEventListener("resize", update, opts);
    }

    return () => {
      if (scroller === window) {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      } else {
        scroller.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      }
    };
  }, [loopWidth, scrollerSelector, speed, direction]);

  return (
    <div className="running-banner section-pad" ref={containerRef} aria-label={`${imageAlt} marquee`}>
      <div className="running-banner__inner" ref={trackRef} aria-hidden="true">
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}