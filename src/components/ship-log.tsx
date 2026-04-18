"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/site";

const MONTH_IDX: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parseTs(year: string): number | null {
  const m = year.match(/^([A-Z][a-z]{2}) (\d{4})$/);
  if (!m) return null;
  return new Date(parseInt(m[2]), MONTH_IDX[m[1]], 1).getTime();
}

// Clean display labels for long titles
const LABEL_OVERRIDE: Record<string, string> = {
  "Product · User Research": "User Research",
  "The Hustle Chapters": "Hustle Chapters",
};

function displayLabel(title: string): string {
  const t = LABEL_OVERRIDE[title] ?? title;
  return t.length > 15 ? t.slice(0, 14) + "…" : t.toUpperCase();
}

const W = 1180;
const H = 270;
const AXIS_Y = 145;
const PAD = 50;

export function ShipLog() {
  const raw = projects
    .map((p) => ({ title: p.title, year: p.year, ts: parseTs(p.year) }))
    .filter((p): p is { title: string; year: string; ts: number } => p.ts !== null)
    .sort((a, b) => a.ts - b.ts);

  if (raw.length === 0) return null;

  const N = raw.length;
  const slotW = (W - 2 * PAD) / (N - 1);
  const indexX = (i: number) => PAD + i * slotW;

  // Build year bands
  const yearMap: Record<number, number[]> = {};
  raw.forEach((p, i) => {
    const yr = new Date(p.ts).getFullYear();
    if (!yearMap[yr]) yearMap[yr] = [];
    yearMap[yr].push(i);
  });

  const yearBands = Object.entries(yearMap)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([yr, indices]) => {
      const first = indices[0];
      const last = indices[indices.length - 1];
      const x1 = indexX(first) - slotW * 0.5;
      const x2 = indexX(last) + slotW * 0.5;
      const midX = (x1 + x2) / 2;
      return { yr: Number(yr), count: indices.length, x1, x2, midX };
    });

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 overflow-x-auto rounded-[8px] border border-[var(--rule-soft)] bg-[var(--bg-2)] px-5 py-5"
    >
      <p className="mono mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--muted-2)]">
        Ship Log &nbsp;·&nbsp; {N} products &nbsp;·&nbsp; {yearBands[0].yr} to {yearBands[yearBands.length - 1].yr}
      </p>

      <svg
        width={W}
        height={H}
        viewBox={`0 0 ${W} ${H}`}
        style={{ display: "block", overflow: "visible" }}
      >
        {/* Year band backgrounds — alternating subtle fill */}
        {yearBands.map(({ yr, x1, x2 }, bi) => (
          <rect
            key={yr}
            x={x1}
            y={20}
            width={x2 - x1}
            height={AXIS_Y + 50 - 20}
            fill={bi % 2 === 0 ? "var(--accent)" : "transparent"}
            fillOpacity={0.03}
            rx={2}
          />
        ))}

        {/* Year divider lines */}
        {yearBands.slice(1).map(({ x1, yr }) => (
          <line
            key={`div-${yr}`}
            x1={x1}
            y1={28}
            x2={x1}
            y2={AXIS_Y + 42}
            stroke="var(--rule-soft)"
            strokeWidth={1}
            strokeDasharray="3 4"
          />
        ))}

        {/* Axis */}
        <line
          x1={PAD - 10}
          y1={AXIS_Y}
          x2={W - PAD + 10}
          y2={AXIS_Y}
          stroke="var(--rule)"
          strokeWidth={1.5}
        />

        {/* Year label + count */}
        {yearBands.map(({ yr, count, midX }) => (
          <g key={`yr-${yr}`}>
            <text
              x={midX}
              y={AXIS_Y + 22}
              textAnchor="middle"
              fontSize={11}
              fontWeight="600"
              fill="var(--muted-2)"
              fontFamily="ui-monospace, 'SF Mono', monospace"
              letterSpacing="0.05em"
            >
              {yr}
            </text>
            <text
              x={midX}
              y={AXIS_Y + 36}
              textAnchor="middle"
              fontSize={9}
              fill="var(--accent)"
              fontFamily="ui-monospace, 'SF Mono', monospace"
              letterSpacing="0.06em"
            >
              {count} {count === 1 ? "product" : "products"}
            </text>
          </g>
        ))}

        {/* Project dots + labels */}
        {raw.map((item, i) => {
          const x = indexX(i);
          const above = i % 2 === 0;
          const labelY = above ? AXIS_Y - 65 : AXIS_Y + 70;
          const connY1 = above ? AXIS_Y - 9 : AXIS_Y + 9;
          const connY2 = above ? labelY + 13 : labelY - 4;

          return (
            <motion.g
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08 + i * 0.025 }}
            >
              <line
                x1={x} y1={connY1}
                x2={x} y2={connY2}
                stroke="var(--rule)"
                strokeWidth={1}
                strokeDasharray="2 3"
              />
              <circle cx={x} cy={AXIS_Y} r={4} fill="var(--accent)" />
              <text
                x={x}
                y={labelY}
                textAnchor="middle"
                fontSize={9}
                fontWeight="700"
                fill="var(--ink)"
                fontFamily="ui-monospace, 'SF Mono', monospace"
                style={{ letterSpacing: "0.07em" }}
              >
                {displayLabel(item.title)}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}
