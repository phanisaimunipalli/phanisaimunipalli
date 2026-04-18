"use client";

import { ReactNode } from "react";

type Gradient = {
  from: string;
  via?: string;
  to: string;
};

type Props = {
  title: string;
  year?: string;
  badge?: string;
  tags?: string[];
  description?: string;
  href?: string;
  gradient: Gradient;
  icon?: ReactNode;
  match?: string;
  size?: "md" | "lg";
};

export function PosterCard({
  title,
  year,
  badge,
  tags,
  description,
  href,
  gradient,
  icon,
  match,
  size = "md",
}: Props) {
  const width =
    size === "lg"
      ? "w-[280px] sm:w-[340px]"
      : "w-[240px] sm:w-[280px]";
  const aspect = "aspect-[16/10]";

  const bg = `linear-gradient(135deg, ${gradient.from} 0%, ${
    gradient.via ?? gradient.from
  } 50%, ${gradient.to} 100%)`;

  const card = (
    <article
      className={`poster ${width} shrink-0 overflow-hidden rounded-[6px] bg-[var(--bg-2)]`}
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Poster art */}
      <div className={`${aspect} relative overflow-hidden`} style={{ background: bg }}>
        {/* noise */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          }}
        />
        {badge && (
          <div className="absolute left-3 top-3 rounded-[2px] bg-black/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {badge}
          </div>
        )}
        {year && (
          <div className="absolute right-3 top-3 rounded-[2px] bg-black/50 px-2 py-0.5 mono text-[10px] text-white backdrop-blur-sm">
            {year}
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4">
          <div className="flex items-center gap-2 text-white">
            {icon && <div className="opacity-90">{icon}</div>}
            <h3 className="display text-[1.25rem] leading-none text-white">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Expand info on hover */}
      <div className="px-3.5 py-3 text-[13px]">
        {match && (
          <div className="mb-1 mono text-[11px] font-semibold text-emerald-400">
            {match}
          </div>
        )}
        {description && (
          <p className="line-clamp-2 text-[13px] leading-[1.45] text-[var(--muted)]">
            {description}
          </p>
        )}
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5 text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted-2)]">
            {tags.slice(0, 3).map((t, i) => (
              <span key={t} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-[var(--muted-3)]">•</span>}
                {t}
              </span>
            ))}
          </div>
        )}
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
