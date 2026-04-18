"use client";

import { Project } from "@/content/site";

export function ProjectCard({ p }: { p: Project }) {
  const href = p.primaryLink?.href ?? p.secondaryLink?.href;
  const bg = `linear-gradient(135deg, ${p.gradient.from} 0%, ${
    p.gradient.via ?? p.gradient.from
  } 50%, ${p.gradient.to} 100%)`;

  const card = (
    <article
      className="poster w-[260px] overflow-hidden rounded-[6px] bg-[var(--bg-2)] sm:w-[300px]"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ background: bg }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          }}
        />

        {p.isNew && (
          <div className="absolute left-3 top-3 rounded-[2px] bg-white/90 px-1.5 py-0.5 text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-black">
            New
          </div>
        )}
        <div className="absolute right-3 top-3 rounded-[2px] bg-black/50 px-2 py-0.5 mono text-[10.5px] font-semibold text-white backdrop-blur-sm">
          {p.year}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end gap-3 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
          <div className="flex items-center gap-2 text-white">
            {p.emoji && (
              <div className="text-[1.1rem] leading-none opacity-95">{p.emoji}</div>
            )}
            <h4 className="display text-[1.2rem] leading-none">{p.title}</h4>
          </div>
        </div>
      </div>

      <div className="px-4 py-3.5 text-[13px]">
        <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]">
          <span className="text-[var(--accent)]">●</span>
          <span className="text-[var(--ink)]">
            {p.primaryLink ? p.primaryLink.text : p.secondaryLink?.text ?? "Case Study"}
          </span>
        </div>
        <p className="line-clamp-3 text-[13px] leading-[1.5] text-[var(--muted)]">
          {p.body}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] uppercase tracking-[0.12em] text-[var(--muted-2)]">
          {p.tags.slice(1, 4).map((t, i) => (
            <span key={t} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-[var(--muted-3)]">•</span>}
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="block"
      >
        {card}
      </a>
    );
  }
  return card;
}
