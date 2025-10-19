import React, { useEffect, useMemo, useState } from "react";

/* Utils */
type NumberLike = number | string;
const toNum = (v: NumberLike) => {
  const n = typeof v === "string" ? parseFloat(v.replace(/,/g, "")) : v;
  return Number.isFinite(n) ? n : 0;
};
const clampNonNegative = (n: number) => (n < 0 ? 0 : n);
const fmt = (n: number, max = 2) =>
  n.toLocaleString(undefined, { maximumFractionDigits: max });

type SettlementPreset = "SAME_DAY" | "SAME_DAY_NO_CREDIT" | "T+1" | "T+2" | "T+3" | "CUSTOM";

/* Prime Flow Calculator with corrected math and disclosure alignment
   - avg_time_saved_per_settlement = current_settlement_time_days - new_settlement_time_days
   - throughput_per_day = monthly_volume / days_in_month
   - average_capital_unlocked = throughput_per_day * max(avg_time_saved_per_settlement, 0)
   - credit_cost_avoided_per_month = (APR/12) * average_capital_unlocked * utilization
   - fx savings = monthly_volume * max(current_fx_spread_bps - target_fx_spread_bps, 0) / 10,000
*/
export default function Calculator() {
  /* Inputs */
  const [monthlyVolume, setMonthlyVolume] = useState<NumberLike>("100,000,000");
  const [daysInMonth, setDaysInMonth] = useState<NumberLike>("30");
  const [settlementsPerMonth, setSettlementsPerMonth] = useState<NumberLike>("20");

  /* Settlement time: dropdown presets with optional same-day hours or custom days */
  const [settlementPreset, setSettlementPreset] = useState<SettlementPreset>("SAME_DAY");
  const [sameDayHours, setSameDayHours] = useState<NumberLike>("6"); /* editable for SAME_DAY */
  const [currentSettlementDaysCustom, setCurrentSettlementDaysCustom] = useState<NumberLike>("2"); /* used when CUSTOM */
  const [newSettlementHours, setNewSettlementHours] = useState<NumberLike>("2"); // input in hours (not days)

  /* Progressive disclosure + CTA */
  const [assumptionsOpen, setAssumptionsOpen] = useState(false);
  /* Financing inputs */
  const [aprPercent, setAprPercent] = useState<NumberLike>("16");
  /* Utilization fixed at 100% per requirements */
  const utilization = 1;

  /* FX spreads: current and target (prefill target = half of current) */
  const [currentFxSpreadBps, setCurrentFxSpreadBps] = useState<string>("120");
  const [targetFxSpreadBps, setTargetFxSpreadBps] = useState<string>("60");
  const [userEditedTargetFx, setUserEditedTargetFx] = useState(false);
  const usesCredit = settlementPreset === "SAME_DAY"; /* only 'Same day (with credit)' incurs APR savings */

  useEffect(() => {
    const cur = parseFloat(currentFxSpreadBps);
    if (!isNaN(cur) && !userEditedTargetFx) {
      setTargetFxSpreadBps((cur / 2).toString());
    }
  }, [currentFxSpreadBps, userEditedTargetFx]);

  const currentSettlementDaysResolved = useMemo(() => {
    switch (settlementPreset) {
      case "SAME_DAY":
      case "SAME_DAY_NO_CREDIT":
        return clampNonNegative(toNum(sameDayHours)) / 24; // hours -> days
      case "T+1":
        return 1;
      case "T+2":
        return 2;
      case "T+3":
        return 3;
      case "CUSTOM":
      default:
        return clampNonNegative(toNum(currentSettlementDaysCustom));
    }
  }, [settlementPreset, sameDayHours, currentSettlementDaysCustom]);

  /* Derived values */
  const calc = useMemo(() => {
    const mv = toNum(monthlyVolume);
    const dim = Math.max(1, toNum(daysInMonth));
    const spm = Math.max(1, toNum(settlementsPerMonth));
    const curr = currentSettlementDaysResolved;
    const nxt = clampNonNegative(toNum(newSettlementHours)) / 24; // hours -> days
    const apr = toNum(aprPercent) / 100;
    const includeFx =
      currentFxSpreadBps.trim() !== "" &&
      targetFxSpreadBps.trim() !== "" &&
      !isNaN(parseFloat(currentFxSpreadBps)) &&
      !isNaN(parseFloat(targetFxSpreadBps));
    const curBps = includeFx ? parseFloat(currentFxSpreadBps) : 0;
    const tgtBps = includeFx ? parseFloat(targetFxSpreadBps) : 0;
    const fxImprovementBps = Math.max(curBps - tgtBps, 0);

    /* Corrected definitions */
    const throughputPerDay = mv / dim;
    const volumePerSettlement = mv / spm;
    const avgTimeSavedPerSettlementDaysRaw = curr - nxt;
    const avgTimeSavedPerSettlementDays = clampNonNegative(avgTimeSavedPerSettlementDaysRaw);
    const avgTimeSavedPerSettlementHours = avgTimeSavedPerSettlementDays * 24;

    /* Average balance reduction due to faster settlement */
    const averageCapitalUnlocked = throughputPerDay * avgTimeSavedPerSettlementDays;

    /* Credit cost avoided depends on average unlocked balance, APR, and utilization */
    const creditCostAvoidedPerMonth = usesCredit ? (apr / 12) * averageCapitalUnlocked * utilization : 0;

    /* FX savings uses the difference between current and target */
    const fxSavingsPerMonth = includeFx ? mv * (fxImprovementBps / 10000) : 0;

    /* For transparency, expose dollar-days saved if needed for copy */
    const dollarDaysSavedPerMonth = mv * avgTimeSavedPerSettlementDays;

    const totalSavingsPerMonth = creditCostAvoidedPerMonth + fxSavingsPerMonth;

    return {
      throughputPerDay,
      volumePerSettlement,
      avgTimeSavedPerSettlementDaysRaw,
      avgTimeSavedPerSettlementDays,
      avgTimeSavedPerSettlementHours,
      averageCapitalUnlocked,
      creditCostAvoidedPerMonth,
      fxSavingsPerMonth,
      dollarDaysSavedPerMonth,
      includeFx,
      usesCredit,
      totalSavingsPerMonth,
    };
  }, [
    monthlyVolume,
    daysInMonth,
    settlementsPerMonth,
    currentSettlementDaysResolved,
    newSettlementHours,
    aprPercent,
    usesCredit,
    currentFxSpreadBps,
    targetFxSpreadBps,
  ]);

  const toggleAssumptions = () => {
    setAssumptionsOpen((o) => {
      (window as any)?.analytics?.track?.("prime_calc_more_assumptions_toggled", { open: !o });
      return !o;
    });
  };

  return (
    <section aria-labelledby="calc-title" className="mx-auto mt-10 max-w-6xl px-4">
      <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 id="calc-title" className="text-xl font-semibold tracking-tight">
              Estimate your savings with 1KPrime Flow
            </h3>
            <p className="mt-1 text-sm text-neutral-600">Enter a few numbers to quantify time and cost savings.</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <label htmlFor="monthly-volume" className="block text-sm font-medium text-gray-700">
              Monthly volume
            </label>
            <input
              id="monthly-volume"
              inputMode="decimal"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2"
              aria-label="Monthly volume"
            />
          </div>

          {/* Days in month / Settlements per month moved to "More assumptions" drawer */}

          {/* Settlement time preset selector */}
          <div className="space-y-2">
            <label htmlFor="settlement-preset" className="block text-sm font-medium text-gray-700">
              Current settlement time (average)
            </label>
            <select
              id="settlement-preset"
              value={settlementPreset}
              onChange={(e) => setSettlementPreset(e.target.value as SettlementPreset)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2"
              aria-label="Current settlement time preset"
            >
              <option value="SAME_DAY">Same day (with credit)</option>
              <option value="SAME_DAY_NO_CREDIT">Same day (without credit)</option>
              <option value="T+1">T+1 (1 day)</option>
              <option value="T+2">T+2 (2 days)</option>
              <option value="T+3">T+3 (3 days)</option>
              <option value="CUSTOM">Custom (enter days)</option>
            </select>
          </div>

          {/* Same-day/custom timing moved to drawer (still respects state) */}

          <div className="space-y-2">
            <label htmlFor="new-settlement" className="block text-sm font-medium text-gray-700">
              New settlement time with Prime Flow (hours)
            </label>
            <input
              id="new-settlement"
              inputMode="decimal"
              value={newSettlementHours}
              onChange={(e) => setNewSettlementHours(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2"
              aria-label="New settlement time in hours"
            />
          </div>

          {/* APR moved to Financing subsection inside drawer */}

          {/* Utilization fixed to 100%; UI removed */}

          <div className="space-y-2">
            <label htmlFor="current-fx-spread" className="block text-sm font-medium text-gray-700">
              Current FX spread (bps)
            </label>
            <input
              id="current-fx-spread"
              inputMode="decimal"
              value={currentFxSpreadBps}
              onChange={(e) => setCurrentFxSpreadBps(e.target.value)}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2"
              aria-label="Current FX spread in bps"
              placeholder="e.g., 120"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="target-fx-spread" className="block text-sm font-medium text-gray-700">
              Target FX spread (bps)
            </label>
            <input
              id="target-fx-spread"
              inputMode="decimal"
              value={targetFxSpreadBps}
              onChange={(e) => {
                setTargetFxSpreadBps(e.target.value);
                setUserEditedTargetFx(true);
              }}
              className="w-full rounded-lg border border-neutral-300 px-3 py-2"
              aria-label="Target FX spread in bps"
              placeholder="Auto set to 50% of current"
            />
          </div>
        </div>

        {/* Controls row: More assumptions + Calculate */}
        <div className="flex items-center justify-start">
          <button
            type="button"
            className="text-sm text-neutral-600 hover:text-neutral-800 underline underline-offset-4"
            aria-expanded={assumptionsOpen}
            aria-controls="prime-assumptions"
            onClick={toggleAssumptions}
          >
            {assumptionsOpen ? "Hide assumptions" : "More assumptions"}
          </button>
        </div>

        {/* Assumptions drawer */}
        {assumptionsOpen && (
          <div
            id="prime-assumptions"
            className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 p-4 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="days-in-month-drawer" className="block text-sm font-medium text-gray-700">
                  Days in month
                </label>
                <input
                  id="days-in-month-drawer"
                  inputMode="numeric"
                  value={daysInMonth}
                  onChange={(e) => setDaysInMonth(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2"
                  aria-label="Days in month"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="settlements-per-month-drawer" className="block text-sm font-medium text-gray-700">
                  Settlement batches per month
                </label>
                <input
                  id="settlements-per-month-drawer"
                  inputMode="numeric"
                  value={settlementsPerMonth}
                  onChange={(e) => setSettlementsPerMonth(e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2"
                  aria-label="Settlement batches per month"
                />
              </div>
            </div>
            <div className="border-t pt-3">
              <div className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                Financing (applies to same-day methods)
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(settlementPreset === "SAME_DAY" || settlementPreset === "SAME_DAY_NO_CREDIT") && (
                  <div className="space-y-2">
                    <label htmlFor="same-day-hours-drawer" className="block text-sm font-medium text-gray-700">
                      Same-day settlement time (hours)
                    </label>
                    <input
                      id="same-day-hours-drawer"
                      inputMode="decimal"
                      value={sameDayHours}
                      onChange={(e) => setSameDayHours(e.target.value)}
                      className="w-full rounded-lg border border-neutral-300 px-3 py-2"
                      aria-label="Same-day settlement time in hours"
                      placeholder="e.g., 6"
                    />
                  </div>
                )}
                {settlementPreset === "CUSTOM" && (
                  <div className="space-y-2">
                    <label htmlFor="custom-settlement-days-drawer" className="block text-sm font-medium text-gray-700">
                      Custom current settlement time (days)
                    </label>
                    <input
                      id="custom-settlement-days-drawer"
                      inputMode="decimal"
                      value={currentSettlementDaysCustom}
                      onChange={(e) => setCurrentSettlementDaysCustom(e.target.value)}
                      className="w-full rounded-lg border border-neutral-300 px-3 py-2"
                      aria-label="Custom current settlement time in days"
                      placeholder="e.g., 2"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <label htmlFor="apr-percent-drawer" className="block text-sm font-medium text-gray-700">
                    Credit line APR (%)
                  </label>
                  <input
                    id="apr-percent-drawer"
                    inputMode="decimal"
                    value={aprPercent}
                    onChange={(e) => setAprPercent(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-3 py-2"
                    aria-label="APR percent"
                    disabled={!usesCredit}
                    title={!usesCredit ? "APR not used unless 'Same day (with credit)' is selected." : undefined}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results - light, tinted cards (hero + metric cards) */}
        <div className="space-y-4 mt-10">
          {/* Hero total (force light panel for legibility on dark pages) */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-200 bg-neutral-100 dark:bg-neutral-100 p-6 text-center shadow-sm">
            <div className="text-xs uppercase tracking-wide text-neutral-600">
              Estimated total monthly savings
            </div>
            <div className="mt-2 text-3xl md:text-4xl font-extrabold text-emerald-700">
              ${fmt(calc.totalSavingsPerMonth)}
            </div>
            <div className="mt-1 text-xs text-neutral-600">
              ≈ ${fmt(calc.totalSavingsPerMonth * 12)} per year
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Avg time saved */}
            <div className="rounded-xl border border-sky-200 dark:border-sky-200 bg-sky-50 dark:bg-sky-50 p-4 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-sky-700">
                Avg time saved / settlement
              </div>
              <div className="mt-2 text-2xl font-bold text-sky-900">
                {fmt(calc.avgTimeSavedPerSettlementHours, 1)} h
              </div>
              <div className="text-xs text-sky-800/80">
                equals {fmt(calc.avgTimeSavedPerSettlementDays, 2)} days
              </div>
            </div>

            {/* Avg capital unlocked */}
            <div className="rounded-xl border border-emerald-200 dark:border-emerald-200 bg-emerald-50 dark:bg-emerald-50 p-4 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-emerald-700">
                Average capital unlocked
              </div>
              <div className="mt-2 text-2xl font-bold text-emerald-900">
                ${fmt(calc.averageCapitalUnlocked)}
              </div>
              <div className="text-xs text-emerald-800/80">From faster settlement</div>
            </div>

            {/* Credit cost avoided */}
            <div className={`rounded-xl border p-4 shadow-sm ${
              calc.usesCredit
                ? "border-amber-200 dark:border-amber-200 bg-amber-50 dark:bg-amber-50"
                : "border-neutral-200 dark:border-neutral-200 bg-neutral-100 dark:bg-neutral-100"
            }`}>
              <div className={`text-xs uppercase tracking-wide ${
                calc.usesCredit ? "text-amber-700" : "text-neutral-600"
              }`}>
                Credit cost avoided / month
              </div>
              <div className={`mt-2 text-2xl font-bold ${
                calc.usesCredit ? "text-amber-900" : "text-neutral-800"
              }`}>
                ${fmt(calc.creditCostAvoidedPerMonth)}
              </div>
              {!calc.usesCredit ? (
                <div className="text-xs text-neutral-700 mt-1">
                  Not applicable unless using a same-day credit line.
                </div>
              ) : null}
            </div>

            {/* FX savings */}
            <div className="rounded-xl border border-indigo-200 dark:border-indigo-200 bg-indigo-50 dark:bg-indigo-50 p-4 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-indigo-700">FX savings / month</div>
              <div className="mt-2 text-2xl font-bold text-indigo-900">
                ${fmt(calc.fxSavingsPerMonth)}
              </div>
              <div className="text-xs text-indigo-800/80">From tighter target spreads</div>
            </div>
          </div>

          <div className="text-xs text-neutral-600">
            Notes: If time saved is negative, results are shown as zero. Credit cost is only applied when your current
            method uses a same-day credit line. FX savings depend on the difference between your current and target spreads.
          </div>
        </div>
      </div>
    </section>
  );
}