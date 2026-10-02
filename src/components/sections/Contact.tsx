"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { portfolioData } from "@/lib/data";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="gsap-contact border-t-4 border-ink py-[76px]">
      <Container>
        {/* Section Header */}
        <div className="gsap-section-head mb-[30px]">
          <div className="flex items-baseline justify-between gap-5 border-b-2 border-ink pb-2.5">
            <div>
              <span className="mb-1 block font-gothic text-xs font-bold uppercase tracking-[0.18em]">
                Submit a Tip
              </span>
              <h2 className="font-display text-[clamp(30px,4vw,46px)] leading-[1.02] tracking-[-0.015em]">
                Letters & Commissions
              </h2>
            </div>
            <span className="hidden font-gothic text-xs uppercase tracking-[0.12em] min-[600px]:inline">
              The desk is open for select work — 2026
            </span>
          </div>
        </div>
        
        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 border-2 border-ink min-[600px]:grid-cols-[1.15fr_0.85fr]">
          {/* Form Column */}
          <div className="gsap-contact-form border-b-2 border-ink p-6 min-[600px]:border-b-0 min-[600px]:border-r-2 min-[600px]:p-9">
            <h3 className="mb-4 font-display text-[32px]">
              {portfolioData.contact.heading}
            </h3>
            <p className="mb-6 max-w-[60ch] font-text text-[15px] leading-[1.55]">
              {portfolioData.contact.description}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 min-[600px]:grid-cols-2">
                <div>
                  <label className="mb-2 block font-gothic text-[11px] font-bold uppercase tracking-[0.12em]">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] focus:outline-none focus:border-stamp"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-gothic text-[11px] font-bold uppercase tracking-[0.12em]">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] focus:outline-none focus:border-stamp"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="mb-2 block font-gothic text-[11px] font-bold uppercase tracking-[0.12em]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] focus:outline-none focus:border-stamp"
                  required
                />
              </div>
              
              <div>
                <label className="mb-2 block font-gothic text-[11px] font-bold uppercase tracking-[0.12em]">
                  The story
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full resize-none border-2 border-ink bg-paper-bright px-3.5 py-3 font-text text-[16px] focus:outline-none focus:border-stamp"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-ink px-6 py-3 font-gothic text-sm font-bold uppercase tracking-[0.1em] text-paper transition-colors hover:bg-transparent hover:text-ink border-2 border-ink"
              >
                Send the letter
              </button>
              
              <p className="font-gothic text-[11px] italic text-ink-soft">
                {portfolioData.contact.responseTime}
              </p>
            </form>
          </div>
          
          {/* Aside Column */}
          <div className="gsap-contact-aside p-6 min-[600px]:p-9">
            <div className="mb-8">
              <h4 className="mb-2 font-gothic text-xs font-bold uppercase tracking-[0.12em]">
                Direct line
              </h4>
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="font-text text-[15px] underline decoration-ink/30 underline-offset-4 transition-colors hover:text-stamp"
              >
                {portfolioData.personal.email}
              </a>
            </div>
            
            <div className="mb-8">
              <h4 className="mb-2 font-gothic text-xs font-bold uppercase tracking-[0.12em]">
                The Desk
              </h4>
              <p className="font-text text-[15px]">
                {portfolioData.personal.location}
              </p>
              <p className="font-gothic text-[11px] italic text-ink-soft">
                AEST · working with teams worldwide, remote-first.
              </p>
            </div>
            
            <div className="mb-8">
              <h4 className="mb-2 font-gothic text-xs font-bold uppercase tracking-[0.12em]">
                Availability
              </h4>
              <p className="font-gothic text-xs font-bold uppercase tracking-[0.08em]">
                {portfolioData.contact.availability}
              </p>
              <p className="mt-1 font-text text-[15px] text-ink-soft">
                {portfolioData.contact.availabilityNote}
              </p>
            </div>
            
            <div>
              <h4 className="mb-2 font-gothic text-xs font-bold uppercase tracking-[0.12em]">
                Wire Services
              </h4>
              <div className="flex gap-2.5">
                <a 
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-paper"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-ink transition-colors hover:bg-ink hover:text-paper"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
