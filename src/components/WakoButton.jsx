import React, { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function WakoButton({
  children,
  as = "a",
  variant = "solid", // "solid" | "ghost"
  href,
  onClick,
  className = "",
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const Comp = motion[as] || motion.a;
  const base =
    "wako-btn" +
    (variant === "ghost" ? " wako-btn--ghost" : " wako-btn--solid") +
    (className ? " " + className : "");

  // Inject hovered prop into ArrowDraw and EnvelopeIcon children
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
      onClick={onClick}
      className={base}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        scale: 1.06,
        boxShadow:
          variant === "ghost"
            ? "0 2px 12px rgba(24,119,255,0.08)"
            : "0 4px 24px rgba(24,119,255,0.10)",
        y: -2,
      }}
      whileTap={{
        scale: 0.97,
        y: 1,
      }}
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
};