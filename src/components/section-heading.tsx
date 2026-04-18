"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  className,
}: {
  number: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-14 max-w-3xl", className)}
    >
      <div className="mb-6 flex items-baseline gap-3 border-b border-[var(--rule-soft)] pb-3">
        <span className="mono text-[11px] tracking-[0.2em] text-[var(--muted-2)]">
          {number}
        </span>
        <span className="section-label">/ {eyebrow}</span>
      </div>
      <h2 className="text-balance text-[clamp(2.2rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] text-[var(--muted)]">
          {description}
        </p>
      )}
    </motion.div>
  );
}
