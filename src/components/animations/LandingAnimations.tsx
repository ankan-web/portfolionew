"use client";

import { useEffect } from "react";

export function LandingAnimations({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | null = null;

    const setup = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Masthead top bar stagger
        gsap.from(".gsap-masthead-top span", {
          y: 12,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.1,
        });
        gsap.from(".gsap-masthead-title", {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.2,
        });
        gsap.from(".gsap-masthead-sub", {
          y: 16,
          opacity: 0,
          duration: 0.6,
          delay: 0.45,
        });

        // Hero - headline lines with clipPath reveal
        gsap.from(".gsap-hero-line", {
          yPercent: 110,
          opacity: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.6,
        });
        gsap.from(".gsap-hero-quote", {
          x: -18,
          opacity: 0,
          duration: 0.7,
          delay: 1.05,
          ease: "power2.out",
        });
        gsap.from(".gsap-hero-byline", {
          opacity: 0,
          y: 10,
          duration: 0.5,
          delay: 1.15,
        });
        gsap.from(".gsap-hero-cta a", {
          y: 14,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 1.25,
          ease: "power2.out",
        });
        gsap.from(".gsap-hero-info > div", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.07,
          delay: 1.35,
          scrollTrigger: {
            trigger: ".gsap-hero-info",
            start: "top 95%",
          },
        });
        // Hero image: scale + clip
        gsap.from(".gsap-hero-image", {
          scale: 0.96,
          opacity: 0,
          duration: 0.9,
          delay: 0.8,
          ease: "power2.out",
        });
        gsap.from(".gsap-hero-body p", {
          y: 18,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          delay: 1.4,
        });

        // Section headers - scroll triggered
        gsap.utils.toArray<HTMLElement>(".gsap-section-head").forEach((el) => {
          gsap.from(el, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 86%",
            },
          });
          // also animate the rule line if exists
          const rule = el.nextElementSibling;
          if (rule && rule.tagName === "HR") {
            gsap.from(rule, {
              scaleX: 0,
              transformOrigin: "left",
              duration: 0.7,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 86%",
              },
            });
          }
        });

        // Works - each exhibit slides in, image parallax
        gsap.utils.toArray<HTMLElement>(".gsap-exhibit").forEach((el, i) => {
          gsap.from(el, {
            y: 36,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
            delay: i % 2 === 0 ? 0 : 0.06,
          });
          const img = el.querySelector("img");
          if (img) {
            gsap.from(img, {
              scale: 1.08,
              duration: 1.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
              },
            });
          }
        });

        // Stack rows stagger
        gsap.from(".gsap-stack-row", {
          y: 16,
          opacity: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-stack-table",
            start: "top 82%",
          },
        });

        // Career rows
        gsap.from(".gsap-career-row", {
          x: -16,
          opacity: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-career-list",
            start: "top 82%",
          },
        });

        // Contact
        gsap.from(".gsap-contact-form", {
          y: 24,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-contact",
            start: "top 78%",
          },
        });
        gsap.from(".gsap-contact-aside > div", {
          y: 16,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".gsap-contact",
            start: "top 78%",
          },
          delay: 0.2,
        });

        // Footer stamp pop
        gsap.from(".gsap-footer-stamp", {
          scale: 1.4,
          rotation: -12,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".gsap-footer",
            start: "top 90%",
          },
        });

        // Refresh after images
        ScrollTrigger.refresh();
      });
    };

    const t = setTimeout(setup, 50);
    return () => {
      clearTimeout(t);
      if (ctx) ctx.revert();
    };
  }, [enabled]);

  return null;
}
