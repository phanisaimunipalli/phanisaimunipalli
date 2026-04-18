"use client";

import { motion } from "framer-motion";
import { Chapter } from "./chapter";
import { ProjectCard } from "./project-card";
import { ShipLog } from "./ship-log";
import { projects } from "@/content/site";

function ProjectGrid({ items }: { items: typeof projects }) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {items.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <ProjectCard p={p} />
        </motion.div>
      ))}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="relative px-4 pt-14 sm:px-10 sm:pt-20">
      <div className="mx-auto w-full max-w-7xl">
        <Chapter
          number="03"
          name="Built by Phani"
          headline={
            <>
              Products I shipped <span className="text-[var(--accent)]">on the side.</span>
            </>
          }
          description="AI tools, iOS apps, open source, cloud builds, product research. Newest first. What you see is what shipped."
        />

        <ShipLog />

        <div className="mt-4">
          <ProjectGrid items={projects} />
        </div>
      </div>
    </section>
  );
}
