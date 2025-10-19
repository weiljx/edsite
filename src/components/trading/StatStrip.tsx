import React from "react";

type Stat = { label: string; sub: string };

const DEFAULT_STATS: Stat[] = [
  { label: "$4B+", sub: "Traded to date" },
  { label: "0 bps", sub: "Slippage on RFQs" },
  { label: "60–120 min", sub: "Typical delivery window" },
  { label: "24/7", sub: "Trading desk" },
];

export default function StatStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <section aria-label="Trading proof points" className="mx-auto mt-10 w-full max-w-6xl px-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm"
          >
            <div className="text-2xl font-semibold text-neutral-900">{s.label}</div>
            <div className="mt-1 text-sm text-neutral-600">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}