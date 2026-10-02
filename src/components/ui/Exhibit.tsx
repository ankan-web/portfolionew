"use client";

import Image from "next/image";
import { Tape } from "./Tape";
import { TechBadge } from "./TechBadge";
import { Stamp } from "./Stamp";

interface ExhibitProps {
  id: string;
  title: string;
  client: string;
  url: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  type: string;
  link: string;
}

export function Exhibit({
  id,
  title,
  client,
  url,
  description,
  image,
  tags,
  year,
  type,
  link
}: ExhibitProps) {
  return (
    <article className="gsap-exhibit group border-b border-ink/25 py-7 transition-colors hover:bg-paper-warm min-[940px]:flex min-[940px]:gap-8">
      {/* Image Card */}
      <div className="relative mb-4 min-[940px]:mb-0 min-[940px]:w-[46%] min-[940px]:flex-none">
        <div className="relative border border-ink/25 bg-paper-bright p-2 pb-0 shadow-[0_2px_14px_rgba(22,20,15,0.14)]">
          <Tape />
          <div className="overflow-hidden border border-ink/40 bg-paper aspect-video">
            <Image 
              src={image} 
              alt={title}
              width={800}
              height={450}
              className="h-full w-full object-cover object-top grayscale contrast-[1.04] mix-blend-multiply transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Stamp variant="confirmed" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Confirmed
          </Stamp>
          <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.14em] text-stamp">
            Exhibit {id}
          </span>
          <span className="font-gothic text-[11px] font-extrabold uppercase">
            {client} · {url}
          </span>
        </div>
        
        <h3 className="mb-3 font-display text-[28px] font-normal leading-[1.06] tracking-[-0.01em]">
          {title}
        </h3>
        
        <p className="mb-4 max-w-[60ch] font-text text-[17px] leading-[1.55]">
          {description}
        </p>
        
        <div className="mb-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TechBadge key={tag} tech={tag} />
          ))}
        </div>
        
        <div className="mt-auto flex items-center justify-between border-t border-ink/25 pt-3.5">
          <span className="font-mono text-xs">
            {year} · {type}
          </span>
          <a 
            href={link}
            className="border-b-[1.5px] border-ink font-gothic text-xs font-bold uppercase tracking-[0.08em] transition-colors hover:text-stamp"
          >
            Open case file →
          </a>
        </div>
      </div>
    </article>
  );
}
