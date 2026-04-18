"use client";

import { Rail } from "./rail";

type Item = {
  title: string;
  description: string;
  year?: string;
  gradient: { from: string; via?: string; to: string };
  href?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  items: Item[];
  id?: string;
};

export function Top10Rail({ title, subtitle, items, id }: Props) {
  return (
    <Rail id={id} title={title} subtitle={subtitle}>
      {items.slice(0, 10).map((it, idx) => {
        const rank = idx + 1;
        const bg = `linear-gradient(135deg, ${it.gradient.from} 0%, ${
          it.gradient.via ?? it.gradient.from
        } 50%, ${it.gradient.to} 100%)`;

        const card = (
          <div
            className="poster flex h-[200px] w-[340px] shrink-0 items-stretch sm:w-[420px]"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Giant numeral */}
            <div className="relative -mr-6 flex w-[130px] shrink-0 items-end overflow-hidden sm:w-[170px]">
              <span className="top10-numeral">{rank}</span>
            </div>
            {/* Poster */}
            <div
              className="relative flex flex-1 flex-col justify-end overflow-hidden rounded-[6px] p-4"
              style={{ background: bg }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-25 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
                }}
              />
              <div className="relative">
                {it.year && (
                  <div className="mb-1 mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                    {it.year}
                  </div>
                )}
                <h3 className="display text-[1.35rem] leading-[1.05] text-white">
                  {it.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[12.5px] leading-snug text-white/85">
                  {it.description}
                </p>
              </div>
            </div>
          </div>
        );

        if (it.href) {
          return (
            <a
              key={it.title}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="block"
            >
              {card}
            </a>
          );
        }
        return <div key={it.title}>{card}</div>;
      })}
    </Rail>
  );
}
