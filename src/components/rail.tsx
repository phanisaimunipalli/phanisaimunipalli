"use client";

import { useRef, useState, useEffect, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  id?: string;
  headerInline?: ReactNode;
};

export function Rail({ title, subtitle, children, id, headerInline }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.86, behavior: "smooth" });
  };

  return (
    <section id={id} className="relative py-6 sm:py-8">
      {(title || subtitle || headerInline) && (
        <div className="mb-3 flex items-end justify-between px-4 sm:px-10">
          <div>
            {title && <h3 className="section-title">{title}</h3>}
            {subtitle && (
              <p className="mt-1 text-[13px] text-[var(--muted)]">{subtitle}</p>
            )}
          </div>
          {headerInline}
        </div>
      )}

      <div className="relative">
        {canLeft && (
          <button
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            className="rail-arrow absolute left-0 top-0 z-30 hidden h-full w-10 items-center justify-center sm:flex"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
        )}
        {canRight && (
          <button
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            className="rail-arrow absolute right-0 top-0 z-30 hidden h-full w-10 items-center justify-center sm:flex"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        )}

        <div
          ref={ref}
          className="rail-scroll flex gap-3 overflow-x-auto overflow-y-visible px-4 pb-4 pt-2 sm:gap-4 sm:px-10"
          style={{ scrollSnapType: "x proximity" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
