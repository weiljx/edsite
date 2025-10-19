import React from "react";

type Badge = { text: string; title?: string };

const DEFAULT_BADGES: Badge[] = [
  { text: "US-regulated partners" },
  { text: "Chainalysis screening" },
  { text: "KYC/AML orchestration" },
];

export default function TrustBadges({
  items = DEFAULT_BADGES,
  subtle = false,
}: {
  items?: Badge[];
  subtle?: boolean;
}) {
  return (
    <div
      aria-label="Trust & compliance"
      className={`mx-auto w-full max-w-6xl px-4 ${subtle ? "my-8" : "my-12"}`}
    >
      <div className="flex flex-wrap items-center justify-center gap-2">
        {items.map((b, i) => (
          <span
            key={i}
            title={b.title || b.text}
            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700"
          >
            {b.text}
          </span>
        ))}
      </div>
    </div>
  );
}