"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { NewspaperScene } from "./NewspaperScene";
import { MagnifyingGlass } from "./MagnifyingGlass";
import { Lens } from "./Lens";
import { ConfirmedStamp } from "./ConfirmedStamp";

interface IntroProps {
  name: string;
  onComplete: () => void;
}

export function Intro({ name, onComplete }: IntroProps) {
  const [isActive, setIsActive] = useState(true);
  const [showStamp, setShowStamp] = useState(false);
  const [isWobbling, setIsWobbling] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const stampShownRef = useRef(false);
  const exitingRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wobbleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dwellTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dimRef = useRef<HTMLDivElement>(null);
  const lensRef = useRef<HTMLDivElement>(null);
  const zoomCircleRef = useRef<HTMLDivElement>(null);
  const gsapRef = useRef<unknown>(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    return () => {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      if (wobbleTimerRef.current) clearTimeout(wobbleTimerRef.current);
      if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current);
      const g = gsapRef.current as { kill?: () => void } | null;
      if (g && typeof g.kill === "function") g.kill();
    };
  }, []);

  const handleExit = useCallback(() => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    setIsExiting(true);
    exitTimerRef.current = setTimeout(() => {
      setIsActive(false);
      onCompleteRef.current();
    }, 450);
  }, []);

  const runZoomSequence = useCallback(async () => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      handleExit();
      return;
    }
    setIsZooming(true);
    try {
      const gsap = (await import("gsap")).default;
      const tl = gsap.timeline({
        onComplete: () => {
          handleExit();
        },
      });
      gsapRef.current = tl;

      const lensEl = lensRef.current;
      const zoomEl = zoomCircleRef.current;
      const dimEl = dimRef.current;

      if (zoomEl) {
        gsap.set(zoomEl, { scale: 1, opacity: 1 });
      }

      tl.to(
        ".fm-hint, .fm-skip",
        { opacity: 0, duration: 0.2, ease: "power1.out" },
        0
      );

      if (lensEl) {
        tl.to(
          lensEl,
          { scale: 16, duration: 0.82, ease: "power3.inOut" },
          0.05
        );
      }
      if (zoomEl) {
        tl.to(
          zoomEl,
          { scale: 22, duration: 0.78, ease: "power3.inOut" },
          0.05
        );
      }
      if (dimEl) {
        tl.to(dimEl, { opacity: 0, duration: 0.4, ease: "power1.out" }, 0.15);
      }
      tl.to(
        ".fm-grain",
        { opacity: 0, duration: 0.35 },
        0.1
      );
      tl.to(
        ".fm-stamp",
        { scale: 1.08, duration: 0.2, ease: "power2.out" },
        0.2
      );
    } catch {
      handleExit();
    }
  }, [handleExit]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isZooming || isWobbling || exitingRef.current) return;
      setMousePos({ x: e.clientX, y: e.clientY });
      if (dimRef.current) {
        dimRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        dimRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
      if (zoomCircleRef.current && !isZooming) {
        zoomCircleRef.current.style.left = `${e.clientX}px`;
        zoomCircleRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isZooming, isWobbling]);

  useEffect(() => {
    if (!isActive || stampShownRef.current || isExiting || isZooming) return;

    const mastheadCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const distance = Math.hypot(
      mousePos.x - mastheadCenter.x,
      mousePos.y - mastheadCenter.y
    );

    const THRESHOLD = 85;

    if (distance < THRESHOLD) {
      if (!dwellTimerRef.current && !isWobbling) {
        dwellTimerRef.current = setTimeout(() => {
          dwellTimerRef.current = null;
          const stillClose =
            Math.hypot(mousePos.x - mastheadCenter.x, mousePos.y - mastheadCenter.y) < THRESHOLD + 10;
          if (!stillClose || stampShownRef.current) return;
          stampShownRef.current = true;
          setIsWobbling(true);
          wobbleTimerRef.current = setTimeout(() => {
            setShowStamp(true);
            setIsWobbling(false);
            setTimeout(() => {
              runZoomSequence();
            }, 300);
          }, 550);
        }, 220);
      }
    } else {
      if (dwellTimerRef.current) {
        clearTimeout(dwellTimerRef.current);
        dwellTimerRef.current = null;
      }
    }
  }, [mousePos, isActive, isExiting, isZooming, isWobbling, runZoomSequence]);

  const handleSkip = useCallback(() => {
    if (dwellTimerRef.current) clearTimeout(dwellTimerRef.current);
    if (wobbleTimerRef.current) clearTimeout(wobbleTimerRef.current);
    handleExit();
  }, [handleExit]);

  if (!isActive) return null;

  return (
    <>
      <svg
        aria-hidden="true"
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <filter id="fm-rough" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.035 0.06"
            numOctaves="2"
            seed="7"
            result="t"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="t"
            scale="7"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div
        className={`fm-intro ${isExiting ? "fm-intro--exit" : ""}`}
        role="dialog"
        aria-label="Intro animation"
      >
        <div className="fm-zoom">
          <NewspaperScene name={name} variant="blurred" />
        </div>

        <div className="fm-dim" ref={dimRef} />

        <div className="fm-grain" />

        <Lens ref={lensRef} visible={!isExiting} wobbling={isWobbling} zooming={isZooming} position={mousePos} />

        <div
          ref={zoomCircleRef}
          className="fm-zoom-circle"
          aria-hidden="true"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: isZooming ? 1 : 0,
          }}
        />

        <ConfirmedStamp visible={showStamp} />

        <div className="fm-hint">Take the glass — find the subject</div>

        <button className="fm-skip" onClick={handleSkip} type="button">
          Skip intro →
        </button>
      </div>

      <MagnifyingGlass visible={!isExiting && !isZooming} position={mousePos} />
    </>
  );
}
