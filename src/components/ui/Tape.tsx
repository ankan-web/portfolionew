"use client";

interface TapeProps {
  className?: string;
}

export function Tape({ className = "" }: TapeProps) {
  return (
    <span 
      className={`absolute -top-2 left-1/2 h-4 w-16 -translate-x-1/2 -rotate-2 border border-ink/10 bg-paper-deep/75 ${className}`}
    />
  );
}
