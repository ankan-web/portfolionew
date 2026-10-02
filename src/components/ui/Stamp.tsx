"use client";

import { ReactNode } from "react";

interface StampProps {
  children: ReactNode;
  variant?: "default" | "bright" | "confirmed";
  className?: string;
}

export function Stamp({ children, variant = "default", className = "" }: StampProps) {
  const baseClasses = "inline-block font-gothic font-black uppercase tracking-[0.14em] border-[3px] rotate-[1deg]";
  
  const variantClasses = {
    default: "border-stamp text-stamp bg-paper-bright/85",
    bright: "border-stamp-bright text-stamp-bright bg-paper-bright/85",
    confirmed: "border-stamp text-stamp bg-paper-bright/85 -rotate-[8deg] scale-100 opacity-100"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
