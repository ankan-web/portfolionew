"use client";

interface MagnifyingGlassProps {
  visible: boolean;
  position: { x: number; y: number };
}

export function MagnifyingGlass({ visible, position }: MagnifyingGlassProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-[9000] [will-change:transform] ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "opacity 0.15s ease",
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        className="drop-shadow-sm"
      >
        <circle
          cx="10.5"
          cy="10.5"
          r="7"
          stroke="#16140f"
          strokeWidth="2.5"
          fill="rgba(251, 250, 245, 0.55)"
        />
        <line
          x1="15.8"
          y1="15.8"
          x2="23"
          y2="23"
          stroke="#16140f"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="8.4" cy="8.2" r="2.1" fill="rgba(251, 250, 245, 0.85)" />
      </svg>
    </div>
  );
}
