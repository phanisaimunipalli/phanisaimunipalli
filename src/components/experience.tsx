"use client";

import { motion } from "framer-motion";
import { Chapter } from "./chapter";
import { experiences } from "@/content/site";

export function Experience() {
  const total = experiences.length;

  return (
    <section id="experience" className="relative px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Chapter
          number="02"
          name="The Episode Guide"
          headline={<>Every role. <span className="text-[var(--accent)]">In order.</span></>}
          description="Full timeline. Startups to IBM to Walmart, software engineering to product management. Most recent first."
        />

        <div className="mt-10 overflow-hidden rounded-[8px] border border-[var(--rule-soft)] bg-[var(--bg-2)]">
          <div className="flex items-baseline justify-between border-b border-[var(--rule-soft)] px-6 py-4">
            <div className="display text-[1.1rem] text-[var(--ink)]">Season 1 · {total} Episodes</div>
            <div className="mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
              2017 to Now
            </div>
          </div>

          <ol className="divide-y divide-[var(--rule-soft)]">
            {experiences.map((e, i) => (
              <motion.li
                key={`${e.title}-${e.company}-${i}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.32) }}
                className="group grid grid-cols-[60px_1fr] gap-4 px-5 py-6 transition-colors hover:bg-[var(--bg-3)] sm:grid-cols-[80px_200px_1fr] sm:gap-6 sm:px-8"
              >
                <div className="mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[var(--muted-2)]">
                  EP {String(total - i).padStart(2, "0")}
                </div>

                <div className="col-span-1 sm:col-span-1">
                  <div className="mono text-[11.5px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {e.date}
                  </div>
                  <span
                    className="mt-2 inline-flex items-center gap-1.5 rounded-[3px] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{
                      background:
                        e.kind === "PM"
                          ? "var(--accent-soft)"
                          : "color-mix(in oklab, var(--ink) 8%, transparent)",
                      color:
                        e.kind === "PM"
                          ? "var(--accent)"
                          : "var(--ink)",
                    }}
                  >
                    {e.kind === "PM" ? "Product" : e.kind === "EDU" ? "Teaching" : "Engineering"}
                    <span className="opacity-60">· {e.workType}</span>
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <h3 className="text-[17px] font-semibold leading-tight text-[var(--ink)] sm:text-[18px]">
                    {e.title}
                  </h3>
                  <div className="mt-0.5 text-[14px] text-[var(--muted)]">
                    {e.company}
                  </div>
                  {e.description && (
                    <p className="mt-2 max-w-2xl text-[14px] leading-[1.65] text-[var(--ink-2)]">
                      {e.description}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[var(--rule-soft)] px-2.5 py-0.5 text-[11px] text-[var(--muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
