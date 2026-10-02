"use client";

import { Container } from "../layout/Container";
import { portfolioData } from "@/lib/data";

export function Career() {
  return (
    <section id="career" className="py-[76px]">
      <Container>
        {/* Section Header */}
        <div className="gsap-section-head mb-[30px]">
          <div className="flex items-baseline justify-between gap-5 border-b-2 border-ink pb-2.5">
            <div>
              <span className="mb-1 block font-gothic text-xs font-bold uppercase tracking-[0.18em]">
                Known Whereabouts
              </span>
              <h2 className="font-display text-[clamp(30px,4vw,46px)] leading-[1.02] tracking-[-0.015em]">
                The Career Ledger
              </h2>
            </div>
            <span className="hidden font-gothic text-xs uppercase tracking-[0.12em] min-[600px]:inline">
              Movements on record since 2020
            </span>
          </div>
        </div>
        
        {/* Career Entries */}
        <div className="gsap-career-list border-t-2 border-ink">
          {portfolioData.career.map((entry, index) => (
            <div 
              key={entry.period}
              className={`gsap-career-row grid grid-cols-1 gap-4 border-b border-ink/25 px-1 py-[22px] min-[600px]:grid-cols-[170px_1fr_0.9fr] min-[600px]:gap-6 ${
                index === portfolioData.career.length - 1 ? "border-b-0" : ""
              }`}
            >
              {/* Period */}
              <div className="font-mono text-[13px] text-ink-soft">
                {entry.period}
              </div>
              
              {/* Role & Company */}
              <div>
                <div className="font-display text-[24px] leading-[1.1]">
                  {entry.role}
                </div>
                <div className="mt-1 font-gothic text-xs font-bold uppercase tracking-[0.08em]">
                  {entry.company}
                </div>
              </div>
              
              {/* Description */}
              <div className="font-text text-[15px] leading-[1.55] text-ink-soft">
                {entry.description}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
