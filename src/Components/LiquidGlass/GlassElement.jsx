import { useState, useEffect } from "react";
import { getDisplacementFilter } from "./getDisplacementFilter";
import { getDisplacementMap } from "./getDisplacementMap";
import styles from "./GlassElement.module.css";

export const GlassElement = ({
  height,
  width,
  depth: baseDepth,
  radius,
  children,
  strength,
  chromaticAberration,
  blur = 2,
  debug = false,
}) => {
  const [clicked, setClicked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const depth = baseDepth / (clicked ? 0.7 : 1);

  const style = {
    height: `${height}px`,
    width: mounted ? `${width}px` : `1px`,
    borderRadius: mounted ? `${radius}px` : `9999px`,
    display: "flex",
    alignItems:"center",
    backdropFilter: `blur(${blur / 2}px) url('${getDisplacementFilter({
      height,
      width,
      radius,
      depth,
      strength,
      chromaticAberration,
    })}') blur(${blur}px) brightness(1.1) saturate(1.5)`,

    /* 🔥 Animasi tarik kiri-kanan */
    transform: mounted ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "center",
    transition: `
      width 0.9s cubic-bezier(0.25, 1, 0.5, 1),
      transform 0.9s cubic-bezier(0.25, 1, 0.5, 1),
      border-radius 0.6s ease
    `,
  };

  if (debug === true) {
    style.background = `url("${getDisplacementMap({
      height,
      width,
      radius,
      depth,
    })}")`;
    style.boxShadow = "none";
  }

  return (
    <div
      className={styles.box}
      style={style}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
    >
      {mounted && children}
    </div>
  );
};
