"use client";

import { Container } from "../layout/Container";
import { portfolioData } from "@/lib/data";

export function Stack() {
  const getBadgeStyle = (finding: string) => {
    switch (finding) {
      case "Primary tool":
        return "border-2 border-stamp text-stamp font-black -rotate-[1.5deg]";
      case "Comfortable":
        return "border-ink/60 text-ink rotate-[1deg]";
      case "In training":
        return "border-ink/60 text-ink rotate-[1deg]";
      case "Trace amount":
        return "border-ink/60 text-ink -rotate-[1deg]";
      default:
        return "border-ink/60 text-ink";
    }
  };

  return (
    <section id="stack" className="scroll-mt-20 py-14 sm:py-[76px]">
      <Container>
        {/* Section Header */}
        <div className="gsap-section-head mb-[30px]">
          <div className="flex items-baseline justify-between gap-5 border-b-2 border-ink pb-2.5">
            <div>
              <span className="mb-1 block font-gothic text-xs font-bold uppercase tracking-[0.18em]">
                Forensics
              </span>
              <h2 className="font-display text-[clamp(30px,4vw,46px)] leading-[1.02] tracking-[-0.015em]">
                The Lab Report
              </h2>
            </div>
          </div>
        </div>
        
        {/* Stack Table */}
        <div className="gsap-stack-table border-2 border-ink">
          {/* Table Header */}
          <div className="hidden border-b-2 border-ink bg-ink text-paper sm:grid sm:grid-cols-[2.4fr_1fr_1fr_1.3fr]">
            <span className="p-4 font-gothic text-xs font-bold uppercase tracking-[0.12em]">
              Substance
            </span>
            <span className="p-4 font-gothic text-xs font-bold uppercase tracking-[0.12em]">
              Code
            </span>
            <span className="p-4 font-gothic text-xs font-bold uppercase tracking-[0.12em]">
              Detected
            </span>
            <span className="p-4 font-gothic text-xs font-bold uppercase tracking-[0.12em]">
              Finding
            </span>
          </div>
          
          {/* Table Rows */}
          {portfolioData.stack.map((item, index) => (
            <div 
              key={item.code}
              className={`gsap-stack-row grid gap-2 border-t border-ink/25 p-4 font-mono transition-colors hover:bg-paper-warm sm:grid-cols-[2.4fr_1fr_1fr_1.3fr] sm:gap-0 ${
                index === portfolioData.stack.length - 1 ? "border-b-0" : ""
              }`}
            >
              {/* Substance */}
              <div className="font-display !text-[19px]">
                {item.name}
              </div>
              
              {/* Code (Mobile) */}
              <div className="font-gothic text-[10px] uppercase text-ink-soft sm:hidden">
                {item.code}
              </div>
              
              {/* Detected */}
              <div className="text-[12px] uppercase sm:text-inherit">
                {item.detected}
              </div>
              
              {/* Finding Badge */}
              <div>
                <span className={`inline-block border px-2 py-1 text-[10px] uppercase tracking-[0.14em] ${getBadgeStyle(item.finding)}`}>
                  {item.finding}
                </span>
              </div>
              
              {/* Code (Desktop) */}
              <div className="hidden font-gothic text-[10px] uppercase text-ink-soft sm:block">
                {item.code}
              </div>
            </div>
          ))}
        </div>
        
        {/* Footnote */}
        <p className="mt-4 font-gothic text-[11px] italic text-ink-soft">
          Findings are illustrative — what he reaches for day to day, not a ranking.
        </p>
      </Container>
    </section>
  );
}
