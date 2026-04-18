"use client";

import { motion } from "framer-motion";
import { Chapter } from "./chapter";
import { ProjectCard } from "./project-card";
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
  const ai = projects.filter((p) => p.category === "AI");
  const cloud = projects.filter((p) => p.category === "Cloud" || p.category === "Web");
  const product = projects.filter(
    (p) => p.category === "Product" || p.category === "Podcast"
  );

  return (
    <section id="work" className="relative px-4 pt-14 sm:px-10 sm:pt-20">
      <div className="mx-auto w-full max-w-7xl">
        <Chapter
          number="03"
          name="Built by Phani"
          headline={
            <>
              Ten+ products. <span className="text-[var(--accent)]">Most solo.</span>
            </>
          }
          description="New and old. Side projects, AI tools, cloud builds, academic prototypes. What you see is what shipped."
        />

        <div className="mt-12 space-y-14">
          <div>
            <div className="text-center">
              <h3 className="section-title">Built with AI</h3>
              <p className="mt-1 text-[13px] text-[var(--muted)]">Products shipped with LLMs and generative tools.</p>
            </div>
            <ProjectGrid items={ai} />
          </div>

          <div>
            <div className="text-center">
              <h3 className="section-title">Cloud &amp; Engineering</h3>
              <p className="mt-1 text-[13px] text-[var(--muted)]">Serverless, cloud-native, and full-stack builds.</p>
            </div>
            <ProjectGrid items={cloud} />
          </div>

          <div>
            <div className="text-center">
              <h3 className="section-title">Product &amp; Research</h3>
              <p className="mt-1 text-[13px] text-[var(--muted)]">Product discovery, user research, and the podcast.</p>
            </div>
            <ProjectGrid items={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
