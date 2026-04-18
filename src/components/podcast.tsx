"use client";

import { motion } from "framer-motion";
import { Play, Mic } from "lucide-react";
import { podcast } from "@/content/site";

export function Podcast() {
  return (
    <section id="podcast" className="relative px-4 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden rounded-[8px]"
        >
          {/* Background art */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(900px 400px at 80% 30%, rgba(229,9,20,0.45) 0%, rgba(229,9,20,0) 60%), linear-gradient(135deg, #1a0000 0%, #0b0b0b 50%, #000 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-[5] opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse at 70% 40%, black 40%, transparent 85%)",
            }}
          />

          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-5 md:gap-12 md:p-16">
            <div className="md:col-span-3">
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-5 items-center rounded-[2px] bg-[var(--accent)] px-1.5 text-[10px] font-bold text-white">
                  PODCAST
                </span>
                <span className="mono text-[11px] uppercase tracking-[0.22em] text-white/80">
                  Season 1 · Long-form
                </span>
              </div>

              <h2
                className="display text-white"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                }}
              >
                The Hustle <br />
                <span className="text-[var(--accent)]">Chapters.</span>
              </h2>

              <p className="mt-4 max-w-xl text-[15.5px] leading-[1.65] text-white/85 sm:text-[16.5px]">
                {podcast.tagline}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={podcast.spotify}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-play"
                >
                  <Play className="h-5 w-5 fill-black" />
                  Listen on Spotify
                </a>
                <a
                  href={podcast.all}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-more"
                >
                  <Mic className="h-5 w-5" />
                  All platforms
                </a>
              </div>
            </div>

            <div className="md:col-span-2 md:border-l md:border-[var(--rule)] md:pl-10">
              <div className="grid grid-cols-3 gap-5 md:grid-cols-1 md:gap-7">
                {[
                  { k: "Countries", v: "6" },
                  { k: "Format", v: "Long-form" },
                  { k: "Theme", v: "Decisions" },
                ].map((s) => (
                  <div key={s.k}>
                    <div className="text-[10.5px] uppercase tracking-[0.18em] text-[var(--muted)]">
                      {s.k}
                    </div>
                    <div
                      className="display mt-1 text-[1.9rem] leading-none text-white"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
