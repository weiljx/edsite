import React from "react";

const ROLES = ["Head of Trading", "Portfolio Manager", "Operations", "CFO / Finance", "Compliance"];
const ASSETS = ["USD", "EUR", "GBP", "USDT", "USDC", "BTC", "ETH"];
const VOLUME_RANGES = ["$0–$5M", "$5–$25M", "$25–$100M", "$100–$500M", "$500M+"];

export default function TradingLeadForm() {
  const [step, setStep] = React.useState<1 | 2>(1);
  const [email, setEmail] = React.useState("");
  const [vol, setVol] = React.useState(VOLUME_RANGES[1]);
  const [role, setRole] = React.useState("");
  const [ticket, setTicket] = React.useState<string>("");
  const [assets, setAssets] = React.useState<string[]>([]);

  function toggleAsset(a: string) {
    setAssets((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  }

  function onSubmitStep1(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStep(2);
  }

  function onSubmitStep2(e: React.FormEvent) {
    e.preventDefault();
    // Submit to your backend / CRM here.
    // payload: { email, monthly_volume_range: vol, role, typical_ticket: ticket, assets }
    const payload = { email, monthly_volume_range: vol, role, typical_ticket: ticket, assets };
    console.debug("Trading lead submit", payload);
    // For now, just scroll to top or show a toast.
    alert("Thanks — we'll be in touch shortly.");
  }

  return (
    <aside id="request-demo" aria-label="Request a demo" className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
      {step === 1 && (
        <form onSubmit={onSubmitStep1} data-page="trading" data-form="lead-capture" data-step="1">
          <h3 className="text-sm font-semibold text-neutral-900">Request a demo</h3>
          <p className="mt-1 text-xs text-neutral-600">Start with two quick details.</p>
          <label className="mt-3 block text-sm">
            <span className="font-medium text-neutral-900">Work email</span>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-field="email"
            />
          </label>
          <label className="mt-3 block text-sm">
            <span className="font-medium text-neutral-900">Monthly volume (range)</span>
            <select
              className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
              value={vol}
              onChange={(e) => setVol(e.target.value)}
              data-field="monthly_volume_range"
            >
              {VOLUME_RANGES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
            data-cta="secondary"
            data-page="trading"
            data-slot="form"
          >
            Continue
          </button>
          <p className="mt-2 text-[11px] text-neutral-500">We'll never share your info.</p>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={onSubmitStep2} data-page="trading" data-form="lead-capture" data-step="2">
          <h3 className="text-sm font-semibold text-neutral-900">A few more details</h3>
          <div className="mt-3 grid gap-3">
            <label className="block text-sm">
              <span className="font-medium text-neutral-900">Role</span>
              <select
                className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                data-field="role"
                required
              >
                <option value="" disabled>Select your role</option>
                {ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="font-medium text-neutral-900">Typical ticket size (USD)</span>
              <input
                inputMode="numeric"
                className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2"
                value={ticket}
                onChange={(e) => setTicket(e.target.value.replace(/[^\d,\.]/g, ""))}
                placeholder="$1,000,000"
                data-field="typical_ticket_usd"
              />
            </label>
            <div className="block text-sm">
              <div className="font-medium text-neutral-900">Assets traded</div>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                {ASSETS.map((a) => {
                  const active = assets.includes(a);
                  return (
                    <button
                      key={a}
                      type="button"
                      onClick={() => toggleAsset(a)}
                      className={`rounded-full border px-3 py-1.5 text-sm ${active ? "border-black bg-black text-white" : "border-neutral-300 bg-white hover:bg-neutral-50"}`}
                      aria-pressed={active}
                      data-field="asset"
                      data-value={a}
                    >
                      {a}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
            data-cta="secondary"
            data-page="trading"
            data-slot="form"
          >
            Request Demo
          </button>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          >
            Back
          </button>
        </form>
      )}
    </aside>
  );
}