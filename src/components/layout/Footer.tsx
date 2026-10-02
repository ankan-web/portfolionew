"use client";

interface FooterProps {
  onReplayIntro?: () => void;
}

export function Footer({ onReplayIntro }: FooterProps) {
  return (
    <footer className="gsap-footer border-t-4 border-ink bg-ink py-12 text-paper">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* Case Closed Stamp */}
        <div className="gsap-footer-stamp mb-12 flex justify-center">
          <span className="inline-block -rotate-6 border-4 border-stamp-bright px-6 py-2 font-gothic text-[15px] font-black uppercase tracking-[0.3em] text-stamp-bright">
            Case Closed
          </span>
        </div>
        
        {/* Copyright Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper/30 pt-5 font-gothic text-[11px] uppercase tracking-[0.1em] text-paper/70 min-[600px]:flex-row">
          <span>© 2026 Ankan Mondal Times · All rights reserved · Printed in Kolkata</span>
          
          <div className="flex gap-2.5">
            {/* Replay Intro Button */}
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="flex h-10 w-10 items-center justify-center border border-paper/45 transition-colors hover:border-stamp-bright hover:text-stamp-bright"
                title="Reopen the case"
                aria-label="Reopen the case — replay the intro"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="h-[22px] w-[22px]"
                >
                  <path
                    d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
                    opacity="0.2"
                  ></path>
                  <path d="M205.66,85.66l-28.69,28.69A80,80,0,1,0,208,128a7.94,7.94,0,0,1-4-6.93V96H224v64h-64V144h21.89A80.11,80.11,0,0,0,205.66,85.66ZM128,192A64,64,0,1,1,192,128,64.07,64.07,0,0,1,128,192Z"></path>
                </svg>
              </button>
            )}
            
            <a 
              href="https://github.com/ankan-web" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-paper/45 transition-colors hover:bg-paper hover:text-ink"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a 
              href="https://linkedin.com/in/ankan-mondal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center border border-paper/45 transition-colors hover:bg-paper hover:text-ink"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:ankanmondal9280@gmail.com"
              className="flex h-10 w-10 items-center justify-center border border-paper/45 transition-colors hover:bg-paper hover:text-ink"
              aria-label="Email"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
