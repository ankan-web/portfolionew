"use client";

interface TechBadgeProps {
  tech: string;
  className?: string;
}

export function TechBadge({ tech, className = "" }: TechBadgeProps) {
  return (
    <span className={`border border-ink px-2.5 py-[3px] font-mono text-[11px] uppercase tracking-[0.08em] ${className}`}>
      {tech}
    </span>
  );
}
