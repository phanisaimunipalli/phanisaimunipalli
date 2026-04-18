"use client";

import { Rail } from "./rail";
import { writing } from "@/content/site";

const cards = [
  {
    label: "Newsletter · Weekly",
    title: writing.newsletter.title,
    tagline: writing.newsletter.tagline,
    href: writing.newsletter.href,
    cta: "Subscribe",
    gradient: { from: "#7f1d1d", via: "#dc2626", to: "#0b0b0b" },
  },
  {
    label: "Essays · Medium",
    title: writing.medium.title,
    tagline: writing.medium.tagline,
    href: writing.medium.href,
    cta: "Read",
    gradient: { from: "#0c4a6e", via: "#0369a1", to: "#0b0b0b" },
  },
];

export function Writing() {
  return (
    <div id="writing">
      <Rail
        title="Words by Phani"
        subtitle="A weekly newsletter and long-form essays on AI, product craft, and shipping lean."
      >
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="poster block w-[320px] shrink-0 overflow-hidden rounded-[6px] bg-[var(--bg-2)] sm:w-[400px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div
              className="relative aspect-[16/9] overflow-hidden p-6"
              style={{
                background: `linear-gradient(135deg, ${c.gradient.from} 0%, ${c.gradient.via} 50%, ${c.gradient.to} 100%)`,
              }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                }}
              />
              <div className="relative flex h-full flex-col justify-between">
                <div className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-white/85">
                  {c.label}
                </div>
                <h3 className="display text-[2rem] leading-none text-white sm:text-[2.4rem]">
                  {c.title}
                </h3>
              </div>
            </div>
            <div className="px-5 py-4">
              <p className="line-clamp-3 text-[13.5px] leading-[1.55] text-[var(--muted)]">
                {c.tagline}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-white">
                <span className="text-[var(--accent)]">▸</span>
                {c.cta}
              </div>
            </div>
          </a>
        ))}
      </Rail>
    </div>
  );
}
