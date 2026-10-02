"use client";

import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex min-h-[50px] max-w-[1180px] items-center justify-between gap-[18px] px-5 py-[9px] sm:px-[30px]">
        {/* Brand */}
        <span className="font-display text-[22px] tracking-[-0.01em]">
          Ankan Mondal
        </span>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-[26px] min-[940px]:flex">
          <a 
            href="#work" 
            className="font-gothic text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:text-stamp"
          >
            Work
          </a>
          <a 
            href="#stack" 
            className="font-gothic text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:text-stamp"
          >
            Stack
          </a>
          <a 
            href="#contact" 
            className="font-gothic text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:text-stamp"
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="bg-ink px-4 py-2 font-gothic text-sm font-bold uppercase tracking-[0.1em] text-paper transition-colors hover:bg-transparent hover:text-ink"
          >
            Hire me
          </a>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex items-center gap-3 min-[940px]:hidden">
          <span className="hidden min-[460px]:inline-flex">
            <a 
              href="#contact" 
              className="bg-ink px-4 py-2 font-gothic text-sm font-bold uppercase tracking-[0.1em] text-paper transition-colors hover:bg-transparent hover:text-ink"
            >
              Hire me
            </a>
          </span>
          
          <button 
            className="flex h-[42px] w-[42px] items-center justify-center border-2 border-ink transition-colors hover:bg-ink hover:text-paper"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`h-0.5 w-5 bg-current transition-transform duration-200 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition-opacity duration-150 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition-transform duration-200 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`overflow-hidden transition-all duration-200 min-[940px]:hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="border-t-2 border-ink px-5 pb-4 pt-1.5 sm:px-[30px]">
          <a 
            href="#work" 
            className="mb-2 block font-display text-[30px] tracking-[-0.01em] transition-colors hover:text-stamp"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>
          <a 
            href="#stack" 
            className="mb-2 block font-display text-[30px] tracking-[-0.01em] transition-colors hover:text-stamp"
            onClick={() => setIsMenuOpen(false)}
          >
            Stack
          </a>
          <a 
            href="#contact" 
            className="block font-display text-[30px] tracking-[-0.01em] transition-colors hover:text-stamp"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
