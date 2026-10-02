"use client";

import Image from "next/image";
import { Container } from "../layout/Container";

export function Hero() {
  return (
    <section id="_R_" className="border-b-[2.5px] border-ink">
      <Container className="py-6 sm:py-8">
        {/* Top meta bar - FRONT PAGE / FILED UNDER */}
        <div className="flex items-center justify-between border-b border-ink/20 pb-2 font-gothic text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
          <span>FRONT PAGE</span>
          <span className="hidden sm:inline tracking-[0.12em] text-ink/70">FILED UNDER: OPEN INVESTIGATIONS</span>
          <span className="sm:hidden tracking-[0.12em] text-ink/70">OPEN INVESTIGATIONS</span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.42fr_0.92fr] lg:gap-0 pt-5">
          {/* LEFT COLUMN */}
          <div className="lg:pr-8 lg:border-r lg:border-ink/15">
            {/* Case no */}
            <div className="mb-1 font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
              CASE NO. 43 — FINDINGS PUBLISHED
            </div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(38px,6vw,72px)] font-normal leading-[0.92] tracking-[-0.02em] text-ink overflow-hidden">
              <span className="gsap-hero-line block">A Kolkata web</span>
              <span className="gsap-hero-line block">developer who likes</span>
              <span className="gsap-hero-line block">building things —</span>
              <span className="gsap-hero-line block italic font-light">front to back.</span>
            </h1>

            {/* Pull quote */}
            <div className="gsap-hero-quote mt-6 max-w-[42ch] border-l-[3px] border-ink pl-4">
              <p className="font-text text-[18px] sm:text-[20px] italic leading-[1.4] text-ink">
                Three years in: Ankan Mondal builds web apps, and runs clean builds — from idea to shipping, front to back.
              </p>
            </div>

            {/* Byline */}
            <p className="gsap-hero-byline mt-5 font-gothic text-[10px] font-semibold uppercase tracking-[0.08em] text-ink/80">
              BY <b className="font-bold text-ink">THE INVESTIGATION DESK</b> <span className="font-normal">· REPORTING FROM KOLKATA</span>
            </p>

            {/* Buttons */}
            <div className="gsap-hero-cta mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center bg-ink px-5 py-3 font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-paper transition-colors hover:bg-ink/90"
              >
                READ THE WORK →
              </a>
              <a
                href="#contact"
                className="inline-flex items-center border-[1.5px] border-ink bg-transparent px-5 py-3 font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                GET IN TOUCH
              </a>
            </div>

            {/* Info grid */}
            <div className="gsap-hero-info mt-8 grid grid-cols-2 border-y-[1.5px] border-ink sm:grid-cols-4">
              <div className="border-b border-ink/20 p-3 sm:border-b-0 sm:border-r sm:border-ink/20">
                <div className="font-display text-[22px] leading-none text-ink">No. 43</div>
                <div className="mt-1 font-gothic text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-ink/60">
                  EDITION · FIRST<br />PRINTING
                </div>
              </div>
              <div className="border-b border-ink/20 p-3 sm:border-b-0 sm:border-r sm:border-ink/20">
                <div className="font-display text-[22px] leading-none text-ink">21°C</div>
                <div className="mt-1 font-gothic text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-ink/60">
                  KOLKATA · CLEAR<br />WINTER SUN
                </div>
              </div>
              <div className="border-r border-ink/20 p-3">
                <div className="font-display text-[22px] leading-none text-ink">Global</div>
                <div className="mt-1 font-gothic text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-ink/60">
                  CIRCULATION ·<br />REMOTE-FRIENDLY
                </div>
              </div>
              <div className="p-3">
                <div className="font-display text-[22px] leading-none text-ink">Late Final</div>
                <div className="mt-1 font-gothic text-[9px] font-bold uppercase leading-tight tracking-[0.12em] text-ink/60">
                  SHIPS WHEN IT&apos;S<br />READY
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:pl-8">
            {/* Image */}
            <div className="gsap-hero-image border-[1.5px] border-ink bg-paper p-0">
              <div className="aspect-[1/1] overflow-hidden bg-white">
                <Image
                  src="/images/portrait.svg"
                  alt="Pictured: the subject at his desk"
                  width={520}
                  height={520}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
            <p className="mt-2 font-gothic text-[10px] uppercase tracking-[0.08em] text-ink/60">
              <span className="font-bold text-ink">PICTURED:</span> the subject, in his natural habitat.
            </p>

            {/* Body copy with dropcap */}
            <div className="gsap-hero-body mt-6 space-y-4 font-text text-[15px] leading-[1.6] text-ink">
              <p className="dropcap">
                He enjoys the whole process — going from a rough idea to something that ships. His main stack is Next.js and Tailwind on the front, with Supabase underneath and Vercel for deploys.
              </p>
              <p>
                When a build calls for it, he reaches for AWS — Amplify, Lambda — and MySQL. Through Project 43, a small studio he started, he also helps take on larger application builds alongside the team.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
