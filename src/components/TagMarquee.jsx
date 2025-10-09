import React, { useRef, useCallback, useEffect } from "react";
import "../styles/tag-marquee.css";
import AboutChip from "./AboutChip";

export default function TagMarquee({
  items = [],
  speed = 26,
  pauseOnHover = true,
  ariaLabel = "Skills and facts",
}) {
  const rootRef = useRef(null);
  const scrollerRef = useRef(null);
  const trackRef = useRef(null);

  // drag + physics
  const dragging = useRef(false);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const dragDX = useRef(0);
  const baseX = useRef(0);
  const vx = useRef(0);
  const loopW = useRef(0);
  const pointerIdRef = useRef(null);             // NEW: track pointer id

  const setTransform = (x) => {
    scrollerRef.current?.style.setProperty("transform", `translate3d(${-x}px,0,0)`);
  };

  const wrap = (v, w) => {
    if (!w) return v;
    let r = v % w;
    if (r < 0) r += w;
    return r;
  };

  // Measure loop width (half of duplicated track)
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      loopW.current = (track.scrollWidth / 2) || 0;
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    const onLoad = () => measure();
    window.addEventListener("load", onLoad);

    return () => { ro.disconnect(); window.removeEventListener("load", onLoad); };
  }, []);

  // RAF: auto scroll + drag + inertia
  useEffect(() => {
    let raf = 0;
    let prev = performance.now();

    const step = (t) => {
      const dt = Math.min(1 / 30, (t - prev) / 1000); // clamp big gaps
      prev = t;

      const w = loopW.current;
      // px/s: half-loop over `speed` seconds
      const autoV = w > 0 ? (w / speed) : 0;

      if (!dragging.current) {
        if (Math.abs(vx.current) > 1) {
          // apply inertia while velocity remains
          baseX.current = wrap(baseX.current + -vx.current * dt, w);
          // friction
          const friction = Math.pow(0.92, dt * 60);
          vx.current *= friction;
          if (Math.abs(vx.current) < 1) vx.current = 0;
        } else {
          // gentle auto scroll (to the left)
          baseX.current = wrap(baseX.current + autoV * dt, w);
        }
      }

      const x = wrap(baseX.current + (dragging.current ? -dragDX.current : 0), w);
      setTransform(x);

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const releaseCaptureSafely = () => {
    const el = rootRef.current;
    const id = pointerIdRef.current;
    if (!el || id == null) return;
    try {
      if (el.hasPointerCapture?.(id)) el.releasePointerCapture(id);
    } catch (_) {}
    pointerIdRef.current = null;
  };

  const endDrag = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    baseX.current = baseX.current - dragDX.current;
    dragDX.current = 0;
    rootRef.current?.classList.remove("tagmarquee--dragging");
    releaseCaptureSafely();                           // NEW: safe release
  }, []);

  const onPointerDown = (e) => {
    const el = rootRef.current;
    if (!el) return;
    dragging.current = true;
    lastX.current = e.clientX ?? 0;
    lastT.current = e.timeStamp ?? performance.now();
    vx.current = 0;
    dragDX.current = 0;
    pointerIdRef.current = e.pointerId;              // NEW: store id
    el.classList.add("tagmarquee--dragging");
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging.current) return;
    const nowX = e.clientX ?? 0;
    const nowT = e.timeStamp ?? performance.now();
    const dx = nowX - lastX.current;
    const dt = Math.max(1e-3, (nowT - lastT.current) / 1000);
    dragDX.current -= dx;
    vx.current = dx / dt;
    lastX.current = nowX;
    lastT.current = nowT;
  };

  if (!items || items.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className={`tagmarquee tagmarquee--js${pauseOnHover ? " tagmarquee--pause" : ""}`}
      aria-label={ariaLabel}
      role="region"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <div className="tagmarquee__scroller" ref={scrollerRef}>
        <div className="tagmarquee__track" ref={trackRef} aria-hidden="true">
          <ul className="tagmarquee__row">
            {items.map((t, i) => (
              <li key={`a-${i}`} className="tagmarquee__item">
                <AboutChip>{t}</AboutChip>
              </li>
            ))}
          </ul>
          <ul className="tagmarquee__row" aria-hidden="true">
            {items.map((t, i) => (
              <li key={`b-${i}`} className="tagmarquee__item">
                <AboutChip>{t}</AboutChip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}