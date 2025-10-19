import React from "react";

export default function FlowComparisonTable() {
  return (
    <section aria-labelledby="flow-compare-title" className="mt-12">
      <h2 id="flow-compare-title" className="text-3xl font-semibold text-center">
        How 1KPrime Flow Compares
      </h2>
      <p className="mt-2 text-center text-neutral-600">
        See the difference in speed, cost, and coverage
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-neutral-200 bg-white">
        <table className="w-full border-collapse text-sm">
          <colgroup>
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
            <col className="w-1/4" />
          </colgroup>
          <thead className="bg-neutral-50 text-neutral-700">
            <tr>
              <th className="px-4 py-3 text-left">Feature</th>
              <th className="px-4 py-3 text-left text-indigo-600">1KPrime Flow</th>
              <th className="px-4 py-3 text-left">Other Fintechs</th>
              <th className="px-4 py-3 text-left">Banks</th>
            </tr>
          </thead>
          <tbody>
            {/* Settlement Speed */}
            <tr className="border-t border-neutral-200">
              <th scope="row" className="px-4 py-4 text-neutral-700">Settlement Speed</th>
              <td className="px-4 py-4 bg-emerald-50 text-emerald-700 font-medium">60 – 120 minutes, never days</td>
              <td className="px-4 py-4">Same day (volume limits) or T+1 to T+5 on larger tickets</td>
              <td className="px-4 py-4">Same day with credit facility or T+1 to T+5 without credit</td>
            </tr>
            {/* Transaction Cost */}
            <tr className="border-t border-neutral-200">
              <th scope="row" className="px-4 py-4 text-neutral-700">Transaction Cost</th>
              <td className="px-4 py-4 bg-emerald-50 text-emerald-700 font-medium">Low, volume-based</td>
              <td className="px-4 py-4">Variable, volume-based</td>
              <td className="px-4 py-4">High</td>
            </tr>
            {/* FX Coverage */}
            <tr className="border-t border-neutral-200">
              <th scope="row" className="px-4 py-4 text-neutral-700">FX Coverage</th>
              <td className="px-4 py-4 bg-emerald-50 text-emerald-700 font-medium">Fiat &amp; Stablecoins</td>
              <td className="px-4 py-4">Fiat &amp; Stablecoins</td>
              <td className="px-4 py-4">Fiat only</td>
            </tr>
            {/* Settlement Network */}
            <tr className="border-t border-neutral-200">
              <th scope="row" className="px-4 py-4 text-neutral-700">Settlement Network</th>
              <td className="px-4 py-4 bg-emerald-50 text-emerald-700 font-medium">Local rails</td>
              <td className="px-4 py-4">Local rails or SWIFT</td>
              <td className="px-4 py-4">SWIFT only</td>
            </tr>
            {/* Credit Lines (new row) */}
            <tr className="border-t border-neutral-200">
              <th scope="row" className="px-4 py-4 text-neutral-700">Credit Lines</th>
              <td className="px-4 py-4 bg-emerald-50 text-emerald-700 font-medium">Not required</td>
              <td className="px-4 py-4">Sometimes required</td>
              <td className="px-4 py-4">Often required</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-2 text-center text-xs text-neutral-500">
        Ranges reflect typical corridors. Actual outcomes depend on corridor support, counterparty approval, and ticket size.
      </p>
    </section>
  );
}