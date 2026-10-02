"use client";

import { useState } from "react";
import { Intro } from "@/components/intro";
import { Masthead } from "@/components/layout/Masthead";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Works } from "@/components/sections/Works";
import { Stack } from "@/components/sections/Stack";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";
import { LandingAnimations } from "@/components/animations/LandingAnimations";
import { portfolioData } from "@/lib/data";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <Intro
          name={portfolioData.personal.name}
          onComplete={() => setShowIntro(false)}
        />
      )}
      <LandingAnimations enabled={!showIntro} />
      <Masthead />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <hr className="border-0 border-t-4 border-ink" />
        <Works />
        <hr className="border-0 border-t-4 border-ink" />
        <Stack />
        <Career />
        <Contact />
      </main>
      <Footer onReplayIntro={() => setShowIntro(true)} />
    </>
  );
}
