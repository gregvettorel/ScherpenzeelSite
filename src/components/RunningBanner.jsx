import React, { useEffect, useRef, useState } from "react";
import "../styles/running-banner.css";

const PHRASE = "WAKO DESIGN";
const ICONS = ["fa-solid fa-pencil", "fa-solid fa-code"];

/**
 * Props:
 *  - scrollerSelector (optional): CSS selector of the element that scrolls.
 *    If omitted, falls back to window scrolling.
 *  - speed (optional): pixels of horizontal travel per 1px vertical scroll (default 0.6)
 *  - direction (optional): 1 = left on down-scroll, -1 = right (default 1)
 */
export default function RunningBanner({ scrollerSelector, speed = 0.6, direction = 1 }) {
  const SEGMENTS = 8;

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [loopWidth, setLoopWidth] = useState(0); // width of one repeated sequence

  const Sequence = ({ startIndex = 0 }) => (
    <>
      {Array.from({ length: SEGMENTS }).map((_, i) => (
        <React.Fragment key={i}>
          <span className="running-banner__text">{PHRASE}</span>
          <i
            className={`running-banner__icon ${ICONS[(startIndex + i) % ICONS.length]}`}
            aria-hidden="true"
          />
        </React.Fragment>
      ))}
    </>
  );

  // Measure width of one sequence (half the duplicated track)
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const half = trackRef.current.scrollWidth / 2;
      setLoopWidth(half || 0);
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);

    // re-measure after fonts/icons load
    const raf = requestAnimationFrame(measure);
    window.addEventListener("load", measure);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("load", measure);
    };
  }, []);

  // Map scroll position to horizontal offset
  useEffect(() => {
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // pick scroller
    const scroller =
      (scrollerSelector && document.querySelector(scrollerSelector)) || window;

    const getScrollY = () =>
      scroller === window
        ? (window.scrollY || window.pageYOffset || 0)
        : scroller.scrollTop || 0;

    const update = () => {
      if (!trackRef.current || !loopWidth) return;
      const y = getScrollY();
      // direct link: horizontal travel = y * speed
      const x = (y * speed * direction) % loopWidth;
      // wrap into [0, loopWidth)
      const wrapped = ((x % loopWidth) + loopWidth) % loopWidth;
      trackRef.current.style.transform = `translate3d(${-wrapped}px, 0, 0)`;
    };

    // run once and on scroll
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
    <div className="running-banner" ref={containerRef} aria-label={`${PHRASE} marquee`}>
      <div className="running-banner__inner" ref={trackRef} aria-hidden="true">
        <Sequence startIndex={0} />
        <Sequence startIndex={SEGMENTS % ICONS.length} />
      </div>
    </div>
  );
}
