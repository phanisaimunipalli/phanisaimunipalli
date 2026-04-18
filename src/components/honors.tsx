"use client";

import Image from "next/image";
import { Chapter } from "./chapter";
import { Rail } from "./rail";
import { achievements } from "@/content/site";

export function Honors() {
  return (
    <section id="honors" className="relative pt-14 sm:pt-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-10">
        <Chapter
          number="05"
          name="The Honors"
          headline={
            <>
              Awards, badges, <br />
              <span className="text-[var(--accent)]">recognitions.</span>
            </>
          }
          description="Ten+ honors across the engineering and product chapters. From Walmart and IBM, to AWS, Product School, Mind The Product, JNTUK, and IIT Bombay."
        />
      </div>

      <Rail>
        {achievements.map((a, idx) => {
          const rank = idx + 1;
          return (
            <article
              key={a.title}
              className="poster flex h-[230px] w-[340px] shrink-0 items-stretch sm:w-[420px]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Giant numeral */}
              <div className="relative -mr-6 flex w-[130px] shrink-0 items-end overflow-hidden sm:w-[170px]">
                <span className="top10-numeral">{rank}</span>
              </div>

              <div className="relative flex flex-1 flex-col overflow-hidden rounded-[6px] border border-[var(--rule-soft)] bg-[var(--bg-2)]">
                <div className="relative h-[120px] w-full overflow-hidden bg-[var(--bg-3)]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="420px"
                    className="object-contain p-3"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-end p-4">
                  <div className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                    {a.date}
                  </div>
                  <h4 className="mt-1 text-[14.5px] font-semibold leading-tight text-[var(--ink)]">
                    {a.title}
                  </h4>
                  <p className="mt-0.5 text-[12.5px] text-[var(--muted)]">
                    {a.subtitle}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </Rail>
    </section>
  );
}
