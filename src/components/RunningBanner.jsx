// src/components/RunningBanner.jsx
import React, { useEffect, useRef, useState } from "react";
import "../styles/running-banner.css";

/**
 * RunningBanner: Add a `size` prop to control the height (number, px, rem, etc). Example: size={80} or size="3rem"
 */
export default function RunningBanner({
  scrollerSelector,
  speed = 0.6,
  direction = 1,
  imageSrc = "/logo_site.svg",
  imageAlt = "WAKO Design",
  segments = 10,           // how many logos per sequence
  logoWidth = 120,         // px width of each logo (CSS can override)
  initialOffset = 0,       // new prop to stagger banners
  size,                    // new: height of the logo images (number or string)
  style = {},              // allow custom style
  ...rest
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
          height={size ? (typeof size === "number" ? size : undefined) : "auto"}
          style={size ? { height: typeof size === "number" ? `${size}px` : size, width: "auto" } : undefined}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          decoding="async"
          loading="lazy"
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

    let raf = 0;
    const tick = () => {
      raf = 0;
      if (!trackRef.current || !loopWidth) return;
      const y = getScrollY();
      const x = y * speed * direction + initialOffset;
      const w = loopWidth;
      // normalize and PIXEL-SNAP to avoid iOS sub-pixel flicker
      const wrapped = ((x % w) + w) % w;
      const px = Math.round(wrapped);
      trackRef.current.style.transform = `translate3d(${-px}px, 0, 0)`;
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(tick); };

    schedule();
    const opts = { passive: true };
    if (scroller === window) {
      window.addEventListener("scroll", schedule, opts);
      window.addEventListener("resize", schedule, opts);
    } else {
      scroller.addEventListener("scroll", schedule, opts);
      window.addEventListener("resize", schedule, opts);
    }

    return () => {
      if (scroller === window) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      } else {
        scroller.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      }
      if (raf) cancelAnimationFrame(raf);
    };
  }, [loopWidth, scrollerSelector, speed, direction, initialOffset]);

  return (
    <div
      className="running-banner section-pad"
      ref={containerRef}
      aria-label={`${imageAlt} marquee`}
      style={style}
      {...rest}
    >
      <div className="running-banner__inner" ref={trackRef} aria-hidden="true">
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}
