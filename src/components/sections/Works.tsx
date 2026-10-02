"use client";

import { Container } from "../layout/Container";
import { Exhibit } from "../ui/Exhibit";
import { portfolioData } from "@/lib/data";

export function Works() {
  return (
    <section id="work" className="py-[76px]">
      <Container>
        {/* Section Header */}
        <div className="gsap-section-head mb-[30px]">
          <div className="flex items-baseline justify-between gap-5 border-b-2 border-ink pb-2.5">
            <div>
              <span className="mb-1 block font-gothic text-xs font-bold uppercase tracking-[0.18em]">
                The Evidence
              </span>
              <h2 className="font-display text-[clamp(30px,4vw,46px)] leading-[1.02] tracking-[-0.015em]">
                Selected Works
              </h2>
            </div>
            <span className="hidden font-gothic text-xs uppercase tracking-[0.12em] min-[600px]:inline">
              Exhibits A–E · Entered 2023–Now
            </span>
          </div>
        </div>
        
        {/* Works List */}
        <div className="divide-y divide-ink/25">
          {portfolioData.works.map((work) => (
            <Exhibit
              key={work.id}
              id={work.id}
              title={work.title}
              client={work.client}
              url={work.url}
              description={work.description}
              image={work.image}
              tags={work.tags}
              year={work.year}
              type={work.type}
              link={work.link}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
