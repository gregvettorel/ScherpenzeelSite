import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

import defaultHoverSfx from "../assets/sfx/hover2mp3.mp3";
import defaultClickSfx from "../assets/sfx/press.mp3";

export default function WakoButton({
  children,
  as = "a",
  variant = "solid", // "solid" | "ghost"
  href,
  onClick,
  className = "",

  // -- sound props ---
  sfx = true,                    
  hoverSound = defaultHoverSfx,
  clickSound = defaultClickSfx, 
  volume = 0.25,  
  rate = 1,   
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const Comp = motion[as] || motion.a;

  const base =
    "wako-btn" +
    (variant === "ghost" ? " wako-btn--ghost" : " wako-btn--solid") +
    (className ? " " + className : "");

  // create audio elements once per instance
  const hoverAudio = useMemo(() => {
    if (!sfx || !hoverSound) return null;
    const a = new Audio(hoverSound);
    a.preload = "auto";
    a.volume = volume;
    a.playbackRate = rate;
    return a;
  }, [sfx, hoverSound, volume, rate]);

  const clickAudio = useMemo(() => {
    if (!sfx || !clickSound) return null;
    const a = new Audio(clickSound);
    a.preload = "auto";
    a.volume = volume;
    a.playbackRate = rate;
    return a;
  }, [sfx, clickSound, volume, rate]);

  const play = (audio) => {
    if (!audio) return;
    try {
      // restart from beginning for rapid replays
      audio.currentTime = 0;
      // iOS requires a user gesture; hover won't fire there (no harm)
      audio.play();
    } catch (_) {}
  };

  // enhance arrow/envelope children with "hovered" prop
  const enhancedChildren = React.Children.map(children, (child) =>
    React.isValidElement(child) &&
    child.type &&
    ["ArrowDraw", "EnvelopeIcon", "PhoneIcon"].includes(child.type.name)
      ? React.cloneElement(child, { hovered })
      : child
  );

  return (
    <Comp
      href={href}
      onClick={(e) => {
        if (onClick) onClick(e);
        play(clickAudio);
      }}
      className={base}
      onHoverStart={() => {
        setHovered(true);
        play(hoverAudio);
      }}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => play(hoverAudio)}                 // keyboard focus cue
      onKeyDown={(e) => {                             // keyboard “click”
        if (e.key === "Enter" || e.key === " ") {
          play(clickAudio);
        }
      }}
      whileHover={{
        scale: 1.06,
        boxShadow:
          variant === "ghost"
            ? "0 2px 12px rgba(24,119,255,0.08)"
            : "0 4px 24px rgba(24,119,255,0.10)",
        y: -2,
      }}
      whileTap={{ scale: 0.97, y: 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      {...props}
    >
      {enhancedChildren}
    </Comp>
  );
}

WakoButton.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(["a", "button"]),
  variant: PropTypes.oneOf(["solid", "ghost"]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  // new:
  sfx: PropTypes.bool,
  hoverSound: PropTypes.any,
  clickSound: PropTypes.any,
  volume: PropTypes.number,
  rate: PropTypes.number,
};
