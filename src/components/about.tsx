"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Chapter } from "./chapter";
import { about, stats } from "@/content/site";

// Renders **bold** and ^^highlight^^ markdown inline.
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\^\^[^^]+\^\^)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[var(--ink)]">
          {p.slice(2, -2)}
        </strong>
      );
    }
    if (p.startsWith("^^") && p.endsWith("^^")) {
      return (
        <span
          key={i}
          className="rounded-[2px] bg-[var(--accent)] px-1.5 py-0.5 text-[0.92em] font-semibold text-white"
        >
          {p.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export function About() {
  return (
    <section id="story" className="relative px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Chapter
          number="01"
          name="The Story"
          headline={
            <>
              Engineer first. <br />
              <span className="text-[var(--accent)]">PM by craft.</span>
            </>
          }
        />

        <div className="mt-10 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="space-y-5 text-[16px] leading-[1.75] text-[var(--ink-2)] sm:text-[17px]">
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {renderInline(p)}
                </motion.p>
              ))}
            </div>

            <div className="mt-8 border-l-[3px] border-[var(--accent)] pl-5 text-[18px] italic leading-[1.5] text-[var(--ink)] sm:text-[19px]">
              &ldquo;Technology does not just solve problems. It changes the shape of what is possible.&rdquo;
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--rule)] pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dd
                    className="display text-[2.2rem] leading-none text-[var(--ink)]"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {s.value}
                  </dd>
                  <dt className="mt-2 text-[11.5px] uppercase tracking-[0.16em] text-[var(--muted)]">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>

          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[8px] bg-[var(--bg-2)] sm:sticky sm:top-24"
            >
              <div className="relative aspect-[4/5] max-h-[320px] w-full md:max-h-none">
                <Image
                  src={about.image}
                  alt="Phani"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--bg-1) 90%, transparent) 100%)",
                  }}
                />
              </div>
              <div className="border-t border-[var(--rule-soft)] bg-[var(--bg-2)] p-5">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Based in
                </div>
                <div className="mt-1 display text-[1.4rem] text-[var(--ink)]">
                  Bay Area, California
                </div>
                <div className="mt-0.5 text-[13px] text-[var(--muted)]">
                  Phani Sai Ram Munipalli
                </div>
              </div>
            </motion.div>

            <motion.a
              href="https://www.businessinsider.com/how-pivoted-software-engineering-ai-product-management-2025-9"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group mt-3 flex items-start justify-between gap-4 rounded-[8px] border border-[var(--rule-soft)] bg-[var(--bg-2)] p-4 transition-all hover:border-[var(--accent)] hover:bg-[var(--bg-3)]"
            >
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
                  Featured in
                </div>
                <div className="mt-1 text-[15px] font-semibold text-[var(--ink)]">
                  Business Insider
                </div>
                <div className="mt-0.5 text-[12.5px] leading-[1.5] text-[var(--muted)]">
                  How I pivoted from Software Engineering to AI Product Management
                </div>
              </div>
              <span className="mt-1 shrink-0 text-[var(--muted-2)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--accent)]">
                ↗
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
