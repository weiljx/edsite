import React from "react";

function StatItem(props: { value: string; label: string; tooltip?: string; id?: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur-sm">
      <div className="text-lg font-semibold tracking-tight text-gray-900">
        {props.value}
        {props.tooltip ? (
          <span
            id={props.id}
            title={props.tooltip}
            aria-label={props.tooltip}
            className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-xs text-gray-600 cursor-help"
          >
            i
          </span>
        ) : null}
      </div>
      <div className="mt-1 text-xs text-gray-600">{props.label}</div>
    </div>
  );
}

export default function FlowStatStrip() {
  const logos = [
    { k: "usd", label: "USD", cls: "bg-gray-800 text-white" },
    { k: "eur", label: "EUR", cls: "bg-blue-600 text-white" },
    { k: "gbp", label: "GBP", cls: "bg-indigo-700 text-white" },
    { k: "aud", label: "AUD", cls: "bg-teal-600 text-white" },
    { k: "mxn", label: "MXN", cls: "bg-rose-600 text-white" },
    { k: "btc", label: "BTC", cls: "bg-orange-500 text-white" },
    { k: "usdt", label: "USDT", cls: "bg-green-600 text-white" },
    { k: "usdc", label: "USDC", cls: "bg-sky-600 text-white" },
  ];

  return (
    <section aria-label="Key proof points" className="mx-auto mt-6 max-w-6xl px-4">
      {/* 3 stat boxes (removed coverage box) */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <StatItem value="$4B+" label="Processed to date" />
        <StatItem
          value="100%"
          label="Settlement success rate"
          tooltip="Defined as transfers not returned, rejected, or outside published SLA windows after submission by an approved counterparty. Trailing 12 months; excludes client-side bank holds."
          id="success-rate-tip"
        />
        <StatItem value="60–120 min" label="Typical settlement window" />
      </div>

      {/* Currency logo ticker under the stat strip */}
      <div className="ticker mt-3" aria-hidden="true">
        <div className="ticker__track flex items-center gap-3">
          {/* duplicate sequence to create infinite scroll illusion */}
          <div className="flex items-center gap-3 pr-8">
            {logos.map((l) => (
              <span key={`a-${l.k}`} className={`logo-badge ${l.cls}`}>{l.label}</span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {logos.map((l) => (
              <span key={`b-${l.k}`} className={`logo-badge ${l.cls}`}>{l.label}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker { overflow: hidden; }
        .ticker__track { display: inline-flex; padding-left: 100%; animation: flow-ticker-left 22s linear infinite; }
        .logo-badge { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 9999px; font-weight: 700; font-size: 11px; letter-spacing: 0.3px; }
        @keyframes flow-ticker-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}