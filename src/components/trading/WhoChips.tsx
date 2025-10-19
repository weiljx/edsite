import React from "react";

type Item = { key: string; label: string; blurb: string; href: string };

const ITEMS: Item[] = [
  {
    key: "funds",
    label: "Funds",
    blurb: "Block RFQs with deep liquidity and sub-hour delivery.",
    href: "/institutions/funds",
  },
  {
    key: "otc",
    label: "OTC desks",
    blurb: "Zero-slippage RFQs, programmatic settlement, 24/7 desk.",
    href: "/institutions/otc",
  },
  {
    key: "mm",
    label: "Market makers",
    blurb: "Tight prices at size across fiat, stables, and majors.",
    href: "/institutions/market-makers",
  },
  {
    key: "exchanges",
    label: "Exchanges",
    blurb: "Trusted rails and operations for large client flows.",
    href: "/institutions/exchanges",
  },
];

export default function WhoChips() {
  const [openKey, setOpenKey] = React.useState<string | null>(null);

  return (
    <section aria-label="Who it's for" className="mx-auto mt-6 w-full max-w-6xl px-4">
      <div className="flex flex-wrap items-center justify-start gap-2">
        {ITEMS.map((i) => {
          const active = i.key === openKey;
          return (
            <button
              key={i.key}
              type="button"
              onClick={() => setOpenKey(active ? null : i.key)}
              className={`rounded-full border px-3 py-1.5 text-sm ${
                active ? "border-black bg-black text-white" : "border-neutral-300 bg-white hover:bg-neutral-50"
              }`}
              aria-expanded={active}
            >
              {i.label}
            </button>
          );
        })}
      </div>
      {openKey && (
        <div className="mt-3 rounded-xl border border-neutral-200 bg-white p-4 text-sm text-neutral-700">
          {ITEMS.filter((i) => i.key === openKey).map((i) => (
            <div key={i.key} className="flex flex-wrap items-center justify-between gap-3">
              <p className="m-0">{i.blurb}</p>
              <a href={i.href} className="text-indigo-600 underline underline-offset-2">
                Learn more →
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}