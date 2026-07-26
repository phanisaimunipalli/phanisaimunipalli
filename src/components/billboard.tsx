"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play, Info } from "lucide-react";
import Image from "next/image";
import { site } from "@/content/site";

export function Billboard() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIdx((i) => (i + 1) % site.roles.length);
    }, 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[var(--bg)]"
    >
      {/* Subtle radial accent glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 700px at 75% 40%, var(--accent-soft) 0%, transparent 65%)",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        className="billboard-fade pointer-events-none absolute inset-x-0 bottom-0 h-48"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-4 py-24 sm:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.28em] text-[var(--ink)]"
            >
              <span className="inline-flex h-5 items-center rounded-[2px] bg-[var(--accent)] px-1.5 text-[10px] font-bold text-white">
                A BIOPIC
              </span>
              <span className="text-[var(--muted)]">Six years. One craft.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="display text-[var(--ink)]"
              style={{
                fontSize: "clamp(3rem, 7.5vw, 7rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
              }}
            >
              PHANI SAI RAM
              <br />
              <span className="text-[var(--accent)]">MUNIPALLI.</span>
            </motion.h1>

            {/* Rotating roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-4 h-9 overflow-hidden text-[22px] font-medium tracking-tight text-[var(--ink-2)] sm:text-[24px]"
            >
              <span className="text-[var(--muted)]">I&apos;m </span>
              <span
                key={roleIdx}
                className="inline-block text-[var(--ink)]"
                style={{ animation: "roleIn 2.6s ease both" }}
              >
                {site.roles[roleIdx]}.
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.42 }}
              className="mt-5 max-w-xl text-[15.5px] leading-[1.65] text-[var(--muted)] sm:text-[17px]"
            >
              Senior Product Manager in the Bay Area. Six years shipping software at
              IBM and Walmart. Four as an engineer, two as a PM. On the side,
              I build with AI, write{" "}
              <a
                href={site.links.newsletter}
                target="_blank"
                rel="noreferrer"
                className="link-ink"
              >
                Phani&apos;s Product
              </a>
              , and host{" "}
              <a
                href={site.links.podcastAll}
                target="_blank"
                rel="noreferrer"
                className="link-ink"
              >
                The Hustle Chapters
              </a>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.54 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a href="#story" className="btn-play">
                <Play className="h-5 w-5 fill-current" />
                Play the story
              </a>
              <a href="#work" className="btn-more">
                <Info className="h-5 w-5" />
                See the work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.72 }}
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="chip">Product</span>
              <span className="chip">AI</span>
              <span className="chip">Platform</span>
              <span className="chip">Podcast</span>
              <span className="text-[12px] uppercase tracking-[0.16em] text-[var(--muted-2)]">
                · Bay Area, CA
              </span>
            </motion.div>

          </div>

          {/* Right: Rounded profile photo — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex md:justify-end"
          >
            <div
              className="relative overflow-hidden rounded-full"
              style={{
                width: "clamp(260px, 38vw, 480px)",
                height: "clamp(260px, 38vw, 480px)",
                boxShadow: "0 0 0 4px var(--accent-soft), 0 0 0 8px var(--rule-soft), var(--shadow-lift)",
              }}
            >
              <Image
                src={site.heroImage}
                alt="Phani Sai Ram Munipalli"
                fill
                priority
                sizes="(max-width: 768px) 260px, 480px"
                className="object-cover object-[center_18%]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
