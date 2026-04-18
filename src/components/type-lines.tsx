"use client";

import { useEffect, useState } from "react";

type Line = { prompt?: string; text: string; className?: string };

export function TypeLines({
  lines,
  speed = 22,
  startDelay = 240,
  lineDelay = 240,
}: {
  lines: Line[];
  speed?: number;
  startDelay?: number;
  lineDelay?: number;
}) {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState<string[]>(lines.map(() => ""));
  const [done, setDone] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout> | undefined;
    let mounted = true;

    const run = async () => {
      await new Promise((r) => (t = setTimeout(r, startDelay)));
      for (let i = 0; i < lines.length; i++) {
        if (!mounted) return;
        const target = lines[i].text;
        for (let c = 0; c <= target.length; c++) {
          await new Promise((r) => (t = setTimeout(r, speed)));
          if (!mounted) return;
          setTyped((prev) => {
            const next = [...prev];
            next[i] = target.slice(0, c);
            return next;
          });
        }
        setIndex(i + 1);
        await new Promise((r) => (t = setTimeout(r, lineDelay)));
      }
      if (mounted) setDone(true);
    };

    run();
    return () => {
      mounted = false;
      if (t) clearTimeout(t);
    };
  }, [lines, speed, startDelay, lineDelay]);

  return (
    <div className="font-mono text-sm sm:text-base text-[var(--fg-dim)]">
      {lines.map((l, i) => {
        const active = i === index && !done;
        const shown = i < index || (i === index && !done) || done;
        if (!shown) return null;
        return (
          <div key={i} className={l.className}>
            {l.prompt && (
              <span className="mr-2 select-none text-[var(--accent-b)]">
                {l.prompt}
              </span>
            )}
            <span className="text-[var(--fg)]">{typed[i]}</span>
            {active && <span className="cursor-blink" />}
          </div>
        );
      })}
    </div>
  );
}
