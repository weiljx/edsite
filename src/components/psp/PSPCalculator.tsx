import React, { useState } from 'react';

const CCYS = ['USD','EUR','GBP','AUD','MXN','BRL','COP','ARS'] as const;
type Ccy = typeof CCYS[number];

function formatMoney(n: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
}

function tierBps(volumeUsd: number) {
  if (volumeUsd >= 100_000_000) return 14;
  if (volumeUsd >= 25_000_000) return 18;
  if (volumeUsd >= 5_000_000) return 22;
  if (volumeUsd >= 1_000_000) return 28;
  return 35;
}

export function PSPCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(5_000_000);
  const [avgTicket, setAvgTicket] = React.useState<number>(250); // average transfer size for estimation
  const [freq, setFreq] = React.useState<'Daily'|'Weekly'|'Biweekly'|'Monthly'>('Daily'); // funding cadence
  const [ccys, setCcys] = useState<Ccy[]>(['USD','MXN']);

  const transfers = Math.max(1, Math.floor(monthlyVolume / Math.max(1, avgTicket)));
  const bps = tierBps(monthlyVolume);
  const spreadFee = (bps / 10_000) * monthlyVolume;
  const railPerTransfer = ccys.some((c) => c !== 'USD') ? 1.25 : 0.25;
  const railFees = transfers * railPerTransfer;
  const allIn = Math.round(spreadFee + railFees);

  const swiftAvgHrs = 36; // typical SWIFT timing for treasury funding cycles
  const flowAvgHrs = freq === 'Daily' ? 1.0 : 1.5; // typical Flow settlement per funding cycle
  const timeSavedHrs = Math.max(0, swiftAvgHrs - flowAvgHrs); // per cycle
  const window = freq === 'Daily' ? '20–60 min' : '60–120 min'; // per cycle

  function toggleCcy(c: Ccy, checked: boolean) {
    setCcys((prev) => (checked ? Array.from(new Set([...prev, c])) : prev.filter((x) => x !== c)));
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              PSP Funding Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Estimate monthly fees, time saved vs SWIFT, and typical settlement window for funding your PSP accounts.
            </p>
          </div>

          {/* Inputs */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="space-y-2">
              <label htmlFor="psp-volume" className="block text-sm font-medium text-gray-700">
                Monthly funding volume (USD)
              </label>
              <input
                id="psp-volume"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                type="number"
                min={10_000}
                step="10000"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value || 0))}
              />
              <div className="text-xs text-gray-500">Tiered pricing applies by volume.</div>
            </div>
            <div className="space-y-2">
              <label htmlFor="psp-ticket" className="block text-sm font-medium text-gray-700">
                Average transfer size (USD)
              </label>
              <input
                id="psp-ticket"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                type="number"
                min={1}
                step="1"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value || 0))}
              />
              <div className="text-xs text-gray-500">Used to estimate transfers/month.</div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Funding cadence</label>
              <select 
                value={freq} 
                onChange={(e) => setFreq(e.target.value as any)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Biweekly">Biweekly</option>
                <option value="Monthly">Monthly</option>
              </select>
              <div className="text-xs text-gray-500">Affects typical settlement window per cycle.</div>
            </div>
          </div>

          {/* Currencies */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">Settlement currencies</label>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {CCYS.map((c) => {
                const checked = ccys.includes(c);
                return (
                  <label key={c} className="inline-flex cursor-pointer items-center gap-2 rounded-xl border bg-white p-3 hover:bg-gray-50">
                    <input 
                      type="checkbox" 
                      checked={checked} 
                      onChange={(e) => toggleCcy(c, e.target.checked)}
                      className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <span className="text-sm font-medium">{c}</span>
                  </label>
                );
              })}
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Mix informs rail cost assumptions; refine during onboarding.
            </div>
          </div>

          {/* Quick facts */}
          <div className="mb-8 rounded-xl bg-purple-50 p-6 text-center">
            <div className="text-sm text-gray-600">Estimated transfers per month</div>
            <div className="mt-1 text-3xl font-bold text-purple-900 tabular-nums">{transfers.toLocaleString()}</div>
            <div className="mt-1 text-xs text-gray-500">Based on volume ÷ avg transfer</div>
          </div>

          {/* Stats */}
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600">Estimated fees (monthly)</div>
              <div className="mt-2 text-2xl font-bold text-gray-900">{formatMoney(allIn)}</div>
              <div className="mt-1 text-xs text-gray-500">{bps} bps + ~${railPerTransfer.toFixed(2)} per transfer</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-sm text-gray-600">Time saved vs SWIFT (per funding cycle)</div>
              <div className="mt-2 text-2xl font-bold text-green-700">{timeSavedHrs.toFixed(1)} h</div>
              <div className="mt-1 text-xs text-gray-500">Typical SWIFT ~36h vs Flow ~1–1.5h</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600">Settlement window (per cycle)</div>
              <div className="mt-2 text-2xl font-bold text-gray-900">{window}</div>
              <div className="mt-1 text-xs text-gray-500">Typical timing</div>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="/contact" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center"
            >
              Get a firm quote
            </a>
          </div>

          {/* Footer notes */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
            <div className="font-semibold mb-2">Notes</div>
            <ul className="list-disc space-y-1 pl-5">
              <li>Bps tier is estimated by monthly volume. Final pricing depends on corridors and mix.</li>
              <li>Per-transfer rail ops cost is averaged for planning; corridor specifics may vary.</li>
              <li>Time saved is versus typical SWIFT treasury funding cycles (~36h avg), shown per cycle.</li>
              <li>We settle to your designated accounts; your PSP performs merchant disbursements.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}