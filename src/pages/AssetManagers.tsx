import React from "react";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Users } from 'lucide-react';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';
import LeadForm from '../components/LeadForm';

const AssetManagers = () => {
  const heroRight = (
    <LeadCaptureCard
      title="Talk to the Desk"
      stepHelper="Step 1 of 2 — Two quick details"
      emailLabel="Work email"
      emailPlaceholder="you@company.com"
      selectLabel="Monthly flow (USD)"
      selectPlaceholder="Select range"
      selectOptions={['$0–$1M', '$1–$5M', '$5–$25M', '$25–$100M', '$100M+']}
      buttonLabel="Continue"
      className="max-w-lg w-full"
      onSubmit={(data) => console.log('Asset managers lead:', data)}
    />
  );

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Liquidity and settlement for asset managers"
        subtitle="Subscriptions/redemptions, NAV hedging and rebalances with deep liquidity. Bank/custody/exchange settlement with audit-ready trails."
        bullets={[
          'Subscriptions/redemptions settled in minutes',
          'NAV hedging and rebalances with deep liquidity',
          'Settlement to bank, custody, or exchange with audit-ready trails',
        ]}
        cta={{ label: 'Talk to the Desk', href: '/contact' }}
        right={heroRight}
        className="bg-gradient-to-br from-slate-50 to-blue-50"
      />

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Use cases for funds and managers
            </h2>
            <p className="text-xl text-gray-600">
              Streamline critical fund operations with institutional-grade execution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="bg-slate-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rebalance windows</h3>
              <p className="text-gray-600">
                Move between fiat and stablecoins quickly to hit rebalance and NAV cutoffs without T+ delays.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="bg-slate-100 rounded-full p-4 w-fit mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscriptions and redemptions</h3>
              <p className="text-gray-600">
                Collect and distribute capital in minutes with rules for approvals and audit-ready logs.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="bg-slate-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Capital calls and distributions</h3>
              <p className="text-gray-600">
                Accelerate capital calls and waterfall distributions with local-rail payouts.
              </p>
            </div>

            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <div className="bg-slate-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Users className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-venue liquidity</h3>
              <p className="text-gray-600">
                Shift liquidity across exchanges, banks, and custodians with RFQ pricing and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to automated fund operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Request for Quote</h3>
              <p className="text-gray-600">
                Submit an RFQ for fiat or stablecoin pairs. Receive firm quotes with size and settlement window.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Approve with policy</h3>
              <p className="text-gray-600">
                Route approvals by role and threshold. Every action is logged for fund administration.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-slate-700 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settle and report</h3>
              <p className="text-gray-600">
                Settle in 60 to 120 minutes on supported corridors. Export entries for administrators and auditors.
              </p>
            </div>
          </div>

          {/* Mid-page CTAs */}
          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
                Schedule a Call
              </button>
              <button className="border border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance and Custody */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance and custody for institutions
            </h2>
            <p className="text-xl text-gray-600">
              Built for institutional requirements and regulatory oversight
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">KYC and AML controls</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Sanctions and transaction screening</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Counterparty risk reviews</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Audit trail for every action</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Dedicated wallet addresses</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Segregated addresses per client or strategy</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>US regulated partners</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>No rehypothecation</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Detailed policies available upon request. Controls and counterparties vary by corridor and asset.
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Results you can quantify
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in speed, cost, and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-slate-700 mb-2">T+2 → 90 min</div>
              <div className="text-gray-600">Settlement time</div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-slate-700 mb-2">60 bps</div>
              <div className="text-gray-600">Average FX spread savings</div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-slate-700 mb-2">0</div>
              <div className="text-gray-600">Bank credit lines required</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why funds choose 1KPrime
            </h2>
            <p className="text-xl text-gray-600">
              Compare capabilities across settlement providers
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Capability</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 bg-slate-50">1KPrime</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Banks</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Other fintechs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Settlement speed</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">60 to 120 minutes</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Same day with credit or T+1 to T+5</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Same day to T+3</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">RFQ execution</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">Firm quotes, zero slippage at quoted size</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Limited</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Varies</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Cost model</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">Low, volume based</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">High, opaque fees</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Variable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Approvals and logs</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">Policy-driven, audit ready</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Manual</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Limited</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Credit lines</td>
                  <td className="px-6 py-4 text-center text-sm text-green-600 font-semibold bg-green-50">Not required</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Often required</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-600">Sometimes required</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Case study: Global crypto fund
            </h2>
            <p className="text-xl text-gray-600">
              Real results from a leading institutional fund
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster settlement</h3>
              <div className="text-2xl font-bold text-slate-700">T+2 to 90 min</div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spread reduction</h3>
              <div className="text-2xl font-bold text-slate-700">60 bps saved</div>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Working capital</h3>
              <div className="text-2xl font-bold text-slate-700">Credit line eliminated</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <blockquote className="text-xl text-gray-600 italic text-center mb-6">
              "We moved rebalance and redemption flows from a two day bottleneck to a 90 minute routine without a bank credit line."
            </blockquote>
            <p className="text-center text-sm text-gray-500">
              Results are illustrative and depend on corridor, counterparty approval, and ticket size.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I move large positions without slippage?</h3>
              <p className="text-gray-600">Yes. Block trades execute with zero slippage and deep liquidity.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you support both fiat and crypto strategies?</h3>
              <p className="text-gray-600">Yes. We provide multi-asset support for fiat, stablecoins, and top digital assets.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How do you manage collateral and risk?</h3>
              <p className="text-gray-600">We use segregated custody, proactive risk management, and no forced auto-liquidations.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why choose 1KPrime over existing prime brokers?</h3>
              <p className="text-gray-600">Unlike traditional brokers, we offer sub-hour settlement, multi-asset rails, and AI-powered workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to accelerate your fund operations?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join asset managers who've modernized their settlement infrastructure with 1KPrime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
              Schedule a Call
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetManagers;