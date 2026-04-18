"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Chapter } from "./chapter";
import { skills, education } from "@/content/site";

export function Foundations() {
  return (
    <section id="foundations" className="relative px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Chapter
          number="06"
          name="The Foundations"
          headline={
            <>
              The stack. <span className="text-[var(--accent)]">The schools.</span>
            </>
          }
          description="Languages, frameworks, clouds. The tools I've shipped with. And where I learned to ship."
        />

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          {/* Skills grid */}
          <div className="md:col-span-8">
            <div className="space-y-8">
              {skills.map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: gi * 0.08 }}
                >
                  <div className="mb-4 flex items-baseline gap-3 border-b border-[var(--rule-soft)] pb-2">
                    <span className="mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--muted-2)]">
                      {String(gi + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--ink)]">
                      {group.title}
                    </h4>
                  </div>
                  <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
                    {group.items.map((it) => (
                      <div
                        key={it.title}
                        className="group flex flex-col items-center gap-2 rounded-[6px] border border-[var(--rule-soft)] bg-[var(--bg-2)] px-3 py-4 text-center transition-all hover:border-[var(--accent)] hover:bg-[var(--bg-3)]"
                      >
                        <div className="relative h-9 w-9">
                          <Image
                            src={it.icon}
                            alt={it.title}
                            fill
                            sizes="36px"
                            className="object-contain"
                          />
                        </div>
                        <div className="text-[11.5px] font-medium text-[var(--ink-2)]">
                          {it.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="md:col-span-4">
            <div className="sticky top-24 rounded-[8px] border border-[var(--rule-soft)] bg-[var(--bg-2)] p-6">
              <div className="mb-4 flex items-baseline justify-between border-b border-[var(--rule-soft)] pb-3">
                <div className="display text-[1.1rem] text-[var(--ink)]">Education</div>
                <div className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--muted-2)]">
                  2011 to 2024
                </div>
              </div>
              <ol className="space-y-5">
                {education.map((e, i) => (
                  <li key={`${e.title}-${i}`} className="grid grid-cols-[20px_1fr] gap-3">
                    <div className="flex flex-col items-center">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      {i < education.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-[var(--rule)]" />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--muted-2)]">
                        {e.date}
                      </div>
                      <div className="mt-0.5 text-[14px] font-semibold text-[var(--ink)]">
                        {e.title}
                      </div>
                      <div className="text-[12.5px] text-[var(--muted)]">
                        {e.subtitle}
                      </div>
                      {e.details.length > 0 && (
                        <ul className="mt-1.5 space-y-0.5 text-[12px] text-[var(--muted)]">
                          {e.details.map((d) => (
                            <li key={d}>· {d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
