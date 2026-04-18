"use client";

import { motion } from "framer-motion";
import { site, stats } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col justify-center px-6 pt-28 pb-20 sm:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Top meta line */}
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-baseline gap-3 border-b border-[var(--rule-soft)] pb-3"
        >
          <span className="mono text-[11px] tracking-[0.2em] text-[var(--muted-2)]">
            00
          </span>
          <span className="section-label">/ Bay Area, California</span>
          <span className="ml-auto mono text-[11px] tracking-[0.14em] text-[var(--muted-2)]">
            EST. 2018
          </span>
        </motion.div>

        {/* Headline — editorial, Craft.do style */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.8 }}
          className="text-balance text-[clamp(2.6rem,7.5vw,6rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-[var(--ink)]"
        >
          I&apos;m Phani.
          <br />
          An{" "}
          <span className="serif-italic font-normal text-[var(--ink-blue)]">
            AI-native
          </span>{" "}
          Product Manager
          <br />
          who <span className="serif-italic font-normal">ships</span> products
          with AI.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.6 }}
          className="mt-8 max-w-2xl text-[18px] leading-[1.65] text-[var(--muted)] sm:text-[19px]"
        >
          Product Manager at{" "}
          <span className="text-[var(--ink)]">Walmart</span> on the U.S. Last
          Mile Delivery platform. Six years in industry — four as a software
          engineer, two as a PM. On the side, I build products with AI, write{" "}
          <a
            href={site.links.newsletter}
            target="_blank"
            rel="noreferrer"
            className="ink-link"
          >
            Phani&apos;s Product
          </a>
          , and host{" "}
          <a
            href={site.links.podcastAll}
            target="_blank"
            rel="noreferrer"
            className="ink-link"
          >
            The Hustle Chapters
          </a>
          .
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.36, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-5 text-[15px]"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 font-medium text-[var(--paper)] transition-transform hover:-translate-y-[1px]"
          >
            See what I&apos;ve shipped
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href={site.links.newsletter}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-medium text-[var(--ink)] underline decoration-[var(--ink-blue)]/40 decoration-1 underline-offset-[6px] transition-all hover:decoration-[var(--ink-blue)] hover:decoration-2"
          >
            Read the newsletter
          </a>
        </motion.div>

        {/* Stats — editorial rule */}
        <motion.dl
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--rule)] pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="text-[2.2rem] font-semibold leading-none tracking-[-0.02em] text-[var(--ink)]">
                {s.value}
              </dd>
              <dt className="mt-2 text-[12px] leading-snug text-[var(--muted)]">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
