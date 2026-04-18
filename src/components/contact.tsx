"use client";

import { motion } from "framer-motion";
import { Mail, Calendar } from "lucide-react";
import { GithubMark, LinkedinMark } from "./brand-icons";
import { Chapter } from "./chapter";
import { site } from "@/content/site";

export function Contact() {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: LinkedinMark,
      label: "LinkedIn",
      value: "@iamphanisairam",
      href: site.links.linkedin,
    },
    {
      icon: GithubMark,
      label: "GitHub",
      value: "@phanisaimunipalli",
      href: site.links.github,
    },
    {
      icon: Calendar,
      label: "Topmate",
      value: "Book a chat",
      href: site.links.topmate,
    },
  ];

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <Chapter
          number="07"
          name="End Credits"
          headline={
            <>
              Let&apos;s <span className="text-[var(--accent)]">connect.</span>
            </>
          }
          description="Open to advisory roles, podcast guesting, speaking sessions, and collaboration on AI-native products and research. Pick any channel. I reply to all of them."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex items-center justify-between rounded-[8px] border border-[var(--rule-soft)] bg-[var(--bg-2)] px-5 py-5 transition-all hover:border-[var(--accent)] hover:bg-[var(--bg-3)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-[4px] bg-[var(--accent-soft)] text-[var(--accent)]">
                  <it.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-2)]">
                    {it.label}
                  </div>
                  <div className="mt-0.5 text-[14.5px] text-[var(--ink)]">
                    {it.value}
                  </div>
                </div>
              </div>
              <span className="text-[var(--muted)] transition-all group-hover:translate-x-0.5 group-hover:text-[var(--accent)]">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
