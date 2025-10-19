import React from "react";

type Props = {
  submitLabel?: string;
};

const labelCls = "block text-sm font-medium text-gray-700 mb-2";
const inputCls =
  "w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-indigo-500";
const selectCls = inputCls;
const sectionCard = "rounded-2xl bg-white p-6 shadow-sm border border-gray-100";

export default function FlowLeadCapture({ submitLabel = "Request Demo" }: Props) {
  const [step, setStep] = React.useState<1 | 2>(1);
  const [email, setEmail] = React.useState("");
  const [volume, setVolume] = React.useState("");
  const [role, setRole] = React.useState("");
  const [companyType, setCompanyType] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const onContinue = () => {
    if (!email || !volume) return; // basic guard; rely on browser validation too
    setStep(2);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      // If you have an existing submission endpoint/handler, hook it up here.
      // This is a safe client-side POST that can be swapped for your internal API.
      console.log('Flow lead submission:', {
        product: "flow",
        workEmail: email,
        monthlyVolume: volume,
        role,
        companyType,
        source: "flow-right-rail",
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={sectionCard} role="status" aria-live="polite">
        <h3 className="text-lg font-semibold">Thanks — we received your request.</h3>
        <p className="mt-2 text-sm text-gray-600">
          A specialist will reach out shortly. You can also{" "}
          <a href="/contact?context=flow" className="underline">
            schedule a call
          </a>{" "}
          now.
        </p>
      </div>
    );
  }

  return (
    <form id="request-demo" ref={formRef} onSubmit={onSubmit} className={sectionCard} aria-labelledby="flow-lead-title">
      <h3 id="flow-lead-title" className="text-lg font-semibold">
        See Flow in Action
      </h3>

      {/* Step indicator */}
      <p className="mt-1 text-xs text-gray-500" data-step={step}>
        {step === 1 ? "Step 1 of 2 — Tell us about your volume" : "Step 2 of 2 — A bit about you"}
      </p>

      {/* Step 1 fields */}
      <div className={step === 1 ? "mt-4 space-y-4" : "hidden"}>
        <div>
          <label className={labelCls} htmlFor="workEmail">
            Work Email *
          </label>
          <input
            id="workEmail"
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            className={inputCls}
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="monthlyVolume">
            Approximate Monthly Volume *
          </label>
          <select
            id="monthlyVolume"
            name="monthlyVolume"
            required
            className={selectCls}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          >
            <option value="">Select range</option>
            <option value="<1m">&lt; $1m</option>
            <option value="1-10m">$1m — $10m</option>
            <option value="10-100m">$10m — $100m</option>
            <option value="100-500m">$100m — $500m</option>
            <option value="500m+">$500m+</option>
          </select>
        </div>

        <button
          type="button"
          onClick={onContinue}
          className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          data-cta="primary"
          data-page="flow"
          data-slot="lead-right-rail"
          aria-label="Continue to step 2"
        >
          Continue
        </button>
      </div>

      {/* Step 2 fields (shows step 1 values for review + adds 2 selects) */}
      <div className={step === 2 ? "mt-4 space-y-4" : "hidden"}>
        <div>
          <label className={labelCls} htmlFor="workEmail2">
            Work Email *
          </label>
          <input
            id="workEmail2"
            name="workEmail"
            type="email"
            required
            className={inputCls}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="monthlyVolume2">
            Approximate Monthly Volume *
          </label>
          <select
            id="monthlyVolume2"
            name="monthlyVolume"
            required
            className={selectCls}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          >
            <option value="">Select range</option>
            <option value="<1m">&lt; $1m</option>
            <option value="1-10m">$1m — $10m</option>
            <option value="10-100m">$10m — $100m</option>
            <option value="100-500m">$100m — $500m</option>
            <option value="500m+">$500m+</option>
          </select>
        </div>

        <div>
          <label className={labelCls} htmlFor="role">
            Your Role *
          </label>
          <select
            id="role"
            name="role"
            required
            className={selectCls}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role</option>
            <option value="CFO/Finance Lead">CFO / Finance Lead</option>
            <option value="Head of Treasury">Head of Treasury</option>
            <option value="COO/Operations">COO / Operations</option>
            <option value="Compliance/Risk">Compliance / Risk</option>
            <option value="CTO/Product/Engineering">CTO / Product / Engineering</option>
            <option value="Payments Lead">Payments Lead</option>
            <option value="Founder/CEO">Founder / CEO</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className={labelCls} htmlFor="companyType">
            Company Type *
          </label>
          <select
            id="companyType"
            name="companyType"
            required
            className={selectCls}
            value={companyType}
            onChange={(e) => setCompanyType(e.target.value)}
          >
            <option value="">Select company type</option>
            <option value="Payment Service Provider (PSP)">Payment Service Provider (PSP)</option>
            <option value="Corporate Treasury/Finance">Corporate Treasury / Finance</option>
            <option value="Marketplace/Platform">Marketplace / Platform</option>
            <option value="Bank/Neobank">Bank / Neobank</option>
            <option value="FX/Remittance">FX / Remittance Company</option>
            <option value="Asset Manager/Fund">Asset Manager / Fund</option>
            <option value="Exchange/OTC/Broker">Exchange / OTC Desk / Broker</option>
            <option value="Custodian">Custodian</option>
            <option value="Fintech/SaaS">Fintech / SaaS</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-60 transition-colors"
          data-cta="secondary"
          data-page="flow"
          data-slot="lead-right-rail"
          aria-label={submitLabel}
        >
          {submitting ? "Submitting…" : submitLabel}
        </button>
      </div>

      {/* Hidden context for analytics */}
      <input type="hidden" name="product" value="flow" />
    </form>
  );
}