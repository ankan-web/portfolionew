"use client";

export function Masthead() {
  return (
    <header className="bg-paper">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Top bar */}
        <div className="gsap-masthead-top flex items-center justify-between gap-4 border-b-[2.5px] border-ink py-2.5 font-gothic text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-ink">
          <span className="shrink-0">KOLKATA, INDIA</span>
          <span className="hidden text-center tracking-[0.18em] sm:block">THE INVESTIGATION EDITION</span>
          <span className="shrink-0">EST. 2026</span>
        </div>
        {/* Mobile centered edition label */}
        <div className="border-b-[2.5px] border-ink py-1.5 text-center font-gothic text-[10px] font-semibold uppercase tracking-[0.18em] sm:hidden">
          THE INVESTIGATION EDITION
        </div>

        {/* Big name */}
        <div className="border-b-[2.5px] border-ink py-5 sm:py-7 text-center">
          <h1 className="gsap-masthead-title font-display text-[54px] leading-none tracking-[-0.02em] sm:text-[72px] md:text-[88px] lg:text-[104px] font-normal text-ink">
            Ankan Mondal
          </h1>
          <p className="gsap-masthead-sub mt-2 sm:mt-3 font-gothic text-[10px] sm:text-[12px] font-semibold uppercase tracking-[0.28em] sm:tracking-[0.34em] text-ink">
            THE PERSONAL RECORD OF A WEB DEVELOPER
          </p>
        </div>

        {/* Date / Vol bar */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b-[2.5px] border-ink py-2 font-gothic text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] text-ink">
          <span>WEDNESDAY 10 SEPTEMBER 2026</span>
          <span className="hidden sm:inline">•</span>
          <span>VOL. III</span>
          <span className="hidden sm:inline">•</span>
          <span>SELECTED WORKS &amp; NOTES</span>
          <span className="hidden sm:inline">•</span>
          <span>PRICE: ONE COFFEE</span>
        </div>
      </div>
    </header>
  );
}
