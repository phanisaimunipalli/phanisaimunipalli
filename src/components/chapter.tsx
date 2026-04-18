"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  number: string;
  name: string;
  headline?: ReactNode;
  description?: ReactNode;
};

export function Chapter({ number, name, headline, description }: Props) {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="chapter-marker"
      >
        CHAPTER {number} · {name}
      </motion.div>

      {headline && (
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="display mt-4 text-[var(--ink)]"
          style={{
            fontSize: "clamp(2.2rem, 5.2vw, 3.8rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.01em",
          }}
        >
          {headline}
        </motion.h2>
      )}

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-4 max-w-2xl text-[15.5px] leading-[1.7] text-[var(--muted)] sm:text-[17px]"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
