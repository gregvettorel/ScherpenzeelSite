import React, { useEffect, useState } from "react";
import "../styles/loader.css";

/**
 * Shows a full-screen loader until:
 *  - window "load" fires, OR 800ms timeout (whichever is later)
 *  - then fades out and unmounts
 */
export default function Loader() {
  const [show, setShow] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Fallback delay so ultra-fast loads still feel intentional
    const minDelay = setTimeout(() => setReady(true), 800);
    const onLoad = () => setReady(true);
    window.addEventListener("load", onLoad);

    return () => {
      clearTimeout(minDelay);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  // Once ready, play fade-out then unmount
  useEffect(() => {
    if (!ready) return;
    const t = setTimeout(() => setShow(false), 350); // match CSS fade
    return () => clearTimeout(t);
  }, [ready]);

  if (!show) return null;

  return (
    <div className={`wk-loader ${ready ? "wk-loader--fade" : ""}`} aria-hidden>
      <div className="wk-loader__glass" />

      {/* Logo circle + mark */}
      <div className="wk-loader__logo">
        {/* Outer pill/circle breathing */}
        <div className="wk-loader__badge">
          <img
            src="/logo_site.svg"
            alt=""
            className="wk-loader__mark"
            draggable="false"
          />
          {/* Shimmer line (fills behind the mark) */}
          <span className="wk-loader__shimmer" />
        </div>

        {/* Small status dots underneath */}
        <div className="wk-loader__dots" aria-label="Loading">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}