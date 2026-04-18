import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-4 pb-10 pt-4 sm:px-10">
      <div className="mx-auto w-full max-w-7xl border-t border-[var(--rule-soft)] pt-6">
        <div className="flex flex-col items-start justify-between gap-3 text-[11.5px] uppercase tracking-[0.16em] text-[var(--muted-2)] sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span
              className="display text-[1.1rem] text-[var(--accent)]"
              style={{ letterSpacing: "-0.01em" }}
            >
              PHANI
            </span>
            <span>· © {year} · {site.name} · {site.location}</span>
          </div>
          <a href="#top" className="transition-colors hover:text-[var(--ink)]">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
