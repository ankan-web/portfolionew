"use client";

import { forwardRef } from "react";

interface LensProps {
  visible: boolean;
  wobbling?: boolean;
  zooming?: boolean;
  position: { x: number; y: number };
}

export const Lens = forwardRef<HTMLDivElement, LensProps>(function Lens(
  { visible, wobbling = false, zooming = false, position },
  ref
) {
  return (
    <div
      ref={ref}
      className={`fm-lens ${visible ? "opacity-100" : "opacity-0"} ${wobbling ? "fm-lens--wobble" : ""} ${zooming ? "fm-lens--zooming" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="fm-lens-glow" aria-hidden="true" />
      <div className="fm-lens-handle" />
      <div className="fm-lens-rim" />
      <div className="fm-lens-glass" />
    </div>
  );
});
