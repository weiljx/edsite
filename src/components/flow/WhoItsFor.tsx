import React from "react";
import FlowCTAPair from "../FlowCTAPair";

type Seg = {
  slug: "psps" | "marketplaces" | "asset-managers" | "corporate-treasuries" | "banks";
  label: string;
  href: string;
  blurb: string;
};

const SEGS: Seg[] = [
  {
    slug: "psps",
    label: "PSPs",
    href: "/psps",
    blurb: "Automate collections and payouts across USD/EUR/GBP/AUD/MXN with RFQ pricing and sub-hour settlement.",
  },
  {
    slug: "marketplaces",
    label: "Marketplaces",
    href: "/psps", /* Link to PSPs since content is equivalent */
    blurb: "Streamline multi-currency seller payouts and refunds with instant conversions and audit-ready logs.",
  },
  {
    slug: "asset-managers",
    label: "Asset managers",
    href: "/asset-managers",
    blurb: "Move liquidity across venues and currencies in minutes with policy-driven approvals.",
  },
  {
    slug: "corporate-treasuries",
    label: "Corporate treasuries",
    href: "/corporate-treasuries",
    blurb: "Replace T+ settlement and costly credit lines with rule-based conversions and local rails.",
  },
  {
    slug: "banks",
    label: "Banks",
    href: "/banks",
    blurb: "Offer faster cross-border and stablecoin rails via regulated partners and dedicated wallets.",
  },
];

export default function WhoItsFor() {
  const [open, setOpen] = React.useState<Seg["slug"] | null>(null);

  const toggle = (slug: Seg["slug"]) => setOpen((curr) => (curr === slug ? null : slug));

  return (
    <section className="mt-6 mb-6" aria-labelledby="who-its-for-title">
      <h2 id="who-its-for-title" className="sr-only">
        Who it's for
      </h2>
      {/* Chip row */}
      <div className="flex flex-wrap items-center justify-start gap-2">
        {SEGS.map((s) => {
          const btnId = `seg-btn-${s.slug}`;
          const panelId = `seg-panel-${s.slug}`;
          const isOpen = open === s.slug;
          return (
            <button
              key={s.slug}
              id={btnId}
              type="button"
              onClick={() => toggle(s.slug)}
              aria-controls={panelId}
              aria-expanded={isOpen}
              data-seg={s.slug}
              data-page="flow"
              data-slot="hero-chips"
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                isOpen ? "border-black bg-black text-white" : "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {/* Accordion card */}
      {open && (
        <SegCard key={open} seg={SEGS.find((x) => x.slug === open)!} />
      )}
    </section>
  );
}

function SegCard({ seg }: { seg: Seg }) {
  const panelId = `seg-panel-${seg.slug}`;
  const btnId = `seg-btn-${seg.slug}`;
  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={btnId}
      className="mt-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="text-sm text-neutral-800">{seg.blurb}</div>
        <div className="flex items-center gap-3">
          <FlowCTAPair.Primary slot="hero">Schedule a Call</FlowCTAPair.Primary>
          <a
            href={seg.href}
            className="text-sm font-medium underline"
            data-cta="secondary"
            data-origin-seg={seg.slug}
            data-page="flow"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}