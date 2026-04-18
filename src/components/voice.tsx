"use client";

import { motion } from "framer-motion";
import { Play, Mic, BookOpen, Mail } from "lucide-react";
import { Chapter } from "./chapter";
import { writing, podcast } from "@/content/site";

export function Voice() {
  return (
    <section id="voice" className="relative px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Chapter
          number="04"
          name="The Voice"
          headline={
            <>
              Newsletter. Podcast. <span className="text-[var(--accent)]">Essays.</span>
            </>
          }
          description="Weekly thinking, long-form writing, and conversations with operators about the decisions that actually shipped their products."
        />

        <div className="grid gap-4 md:grid-cols-12">
          {/* Podcast — big tile */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative isolate overflow-hidden rounded-[8px] md:col-span-7"
          >
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(900px 400px at 80% 20%, var(--accent-soft) 0%, transparent 60%), linear-gradient(135deg, #0b3d91 0%, #1e3a8a 50%, #0b0b0b 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-[5] opacity-[0.1]"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
                maskImage:
                  "radial-gradient(ellipse at 70% 40%, black 40%, transparent 85%)",
              }}
            />

            <div className="p-8 sm:p-12">
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-5 items-center rounded-[2px] bg-[var(--accent)] px-1.5 text-[10px] font-bold text-white">
                  PODCAST
                </span>
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-white/85">
                  Season 1 · Long-form
                </span>
              </div>

              <h3
                className="display text-white"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                }}
              >
                The Hustle <br />
                <span className="text-[#9ec5ff]">Chapters.</span>
              </h3>

              <p className="mt-4 max-w-xl text-[14.5px] leading-[1.65] text-white/90 sm:text-[15.5px]">
                {podcast.tagline}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={podcast.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[4px] bg-white px-4 py-2 text-[14px] font-semibold text-black transition-opacity hover:opacity-85"
                >
                  <Play className="h-4 w-4 fill-black" />
                  Listen on Spotify
                </a>
                <a
                  href={podcast.all}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-[4px] border border-white/25 bg-white/10 px-4 py-2 text-[14px] font-semibold text-white transition-colors hover:bg-white/20"
                >
                  <Mic className="h-4 w-4" />
                  All platforms
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-5 border-t border-white/10 pt-6">
                {[
                  { k: "Countries", v: "6" },
                  { k: "Format", v: "Long-form" },
                  { k: "Theme", v: "Decisions" },
                ].map((s) => (
                  <div key={s.k}>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                      {s.k}
                    </div>
                    <div className="display mt-1 text-[1.6rem] leading-none text-white">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Newsletter + Medium stacked */}
          <div className="grid gap-4 md:col-span-5">
            <WritingTile
              label="Newsletter · Weekly"
              title={writing.newsletter.title}
              tagline={writing.newsletter.tagline}
              href={writing.newsletter.href}
              cta="Subscribe"
              Icon={Mail}
            />
            <WritingTile
              label="Essays · Medium"
              title={writing.medium.title}
              tagline={writing.medium.tagline}
              href={writing.medium.href}
              cta="Read"
              Icon={BookOpen}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WritingTile({
  label,
  title,
  tagline,
  href,
  cta,
  Icon,
}: {
  label: string;
  title: string;
  tagline: string;
  href: string;
  cta: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col gap-2 rounded-[8px] border border-[var(--rule-soft)] bg-[var(--bg-2)] p-6 transition-all hover:border-[var(--accent)] hover:shadow-[var(--shadow-lift)]"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          <Icon className="h-3.5 w-3.5 text-[var(--accent)]" />
          {label}
        </div>
        <span className="text-[var(--muted-2)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--accent)]">
          ↗
        </span>
      </div>
      <h4 className="display text-[1.6rem] leading-none text-[var(--ink)]">
        {title}
      </h4>
      <p className="line-clamp-2 text-[13.5px] leading-[1.55] text-[var(--muted)]">
        {tagline}
      </p>
      <div className="mt-1 text-[13px] font-semibold text-[var(--accent)]">
        {cta} →
      </div>
    </motion.a>
  );
}
