"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "./theme";

const links = [
  { href: "#story", label: "Story" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#voice", label: "Voice" },
  { href: "#honors", label: "Honors" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--bg-1)]/92 backdrop-blur-sm border-b border-[var(--rule-soft)]"
          : "bg-transparent"
      )}
    >
      <div className="flex w-full items-center justify-between px-4 py-3 sm:px-10 sm:py-4">
        <div className="flex items-center gap-8">
          <a href="#top" aria-label="Home" className="flex items-baseline gap-1">
            <span
              className="display text-[1.95rem] leading-none text-[var(--accent)] sm:text-[2.1rem]"
              style={{ letterSpacing: "-0.02em" }}
            >
              PHANI
            </span>
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href="https://topmate.io/iamphanisairam"
            target="_blank"
            rel="noreferrer"
            className="hidden text-[13px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)] sm:inline"
          >
            Book a chat
          </a>
          <a
            href="mailto:phanisaimunipalli@gmail.com"
            className="rounded-[3px] bg-[var(--accent)] px-3.5 py-1.5 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
