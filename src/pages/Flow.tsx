import React from 'react';
import { ArrowRight, Clock, Globe, Zap, CheckCircle, X, Calendar, Layers } from 'lucide-react';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';
import { PriceTicker } from '../components/marketing/PriceTicker';
import FlowLeadCapture from '../components/FlowLeadCapture';
import WaitlistForm from '../components/WaitlistForm';
import FlowCTAPair from '../components/FlowCTAPair';
import FlowStatStrip from '../components/FlowStatStrip';
import WhoItsFor from '../components/flow/WhoItsFor';
import FlowComparisonTable from "../components/flow/FlowComparisonTable";
import Calculator from "../components/flow/Calculator";

const Flow = () => {
  const heroRight = (
    <LeadCaptureCard
      title="See Flow in Action"
      stepHelper="Step 1 of 2 — Tell us about your volume"
      emailLabel="Work Email"
      emailPlaceholder="you@company.com"
      selectLabel="Approximate Monthly Volume"
      selectPlaceholder="Select range"
      selectOptions={['$0–$1M', '$1–$5M', '$5–$25M', '$25–$100M', '$100M+']}
      buttonLabel="Continue"
      className="max-w-lg w-full"
      onSubmit={(data) => console.log('Flow lead:', data)}
    />
  );

  return (
    <div id="flow-page">
      {/* Hero Section */}
      <Hero
        title={<>Move money across<br />borders in minutes</>}
        subtitle="Real-time settlement, automated treasury workflows and capital-efficient FX with institutional-grade compliance"
        bullets={[
          'Settle fiats and stablecoins in minutes, not days',
          'Automated treasury workflows',
          'Capital-efficient FX with deep liquidity, no costly credit facility',
        ]}
        cta={{ label: 'Schedule a Call', href: '/contact' }}
        chips={['PSPs', 'Marketplaces', 'Asset managers', 'Corporate treasuries', 'Banks']}
        right={heroRight}
      />

      {/* Key proof points: stats strip directly under hero, before pain section */}
      <FlowStatStrip />

      {/* Live Prices Ticker: USD base with selected fiats + BTC/USDT/USDC */}
      <PriceTicker
        cryptos={['bitcoin','tether','usd-coin']}
        fiats={['USD','EUR','GBP','AUD','MXN','BRL','COP','ARS']}
      />

      {/* Force-hide any remaining legacy symbol chips that may still render from older sections */}
      <style jsx global>{`
        .logo-badge {
          display: none !important; /* legacy currency chips from FlowStatStrip */
        }
        .ticker {
          display: none !important; /* legacy ticker animation */
        }
      `}</style>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Traditional cross-border payments are broken
            </h2>
            <p className="text-xl text-gray-600">
              High costs, slow settlement, and operational complexity hold back modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Slow Settlement</h3>
              <p className="text-gray-600">
                T+1 to T+5 settlement times create cash-flow gaps and operational inefficiencies
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">High FX Costs</h3>
              <p className="text-gray-600">
                Hidden spreads and fees can add up to 400 basis points per transaction
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <X className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expensive Credit Lines</h3>
              <p className="text-gray-600">
                Companies pay up to 35 % of revenues to secure same-day settlement credit from bank FX desks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Single full comparison table (moved up); mini block removed */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FlowComparisonTable />
        </div>
      </section>

      {/* ROI Calculator */}
      <Calculator />

      {/* Post-comparison action: single primary CTA + research link (replaces CTA pair) */}
      <div className="my-16 md:my-20 w-full text-center">
        <div className="flex justify-center gap-3">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
            Schedule a Call
          </button>
          <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
            Download Benchmark
          </button>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How 1KPrime Flow Works
            </h2>
            <p className="text-xl text-gray-600">
              Four simple steps to automated global fund movement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Define workflow triggers</h3>
              <p className="text-gray-600">
                Set up automated rules based on time, amount, or market conditions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Execute multi-leg conversions instantly</h3>
              <p className="text-gray-600">
                AI-driven execution across fiat and digital asset pairs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settle to local rails in minutes</h3>
              <p className="text-gray-600">
                Settle to local rails or digital wallets in minutes, not days
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Track and optimise with live insights</h3>
              <p className="text-gray-600">
                Real-time reporting and analytics for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Flow capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for modern cross-border payments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-indigo-50 rounded-xl">
              <div className="bg-indigo-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time fiat and stablecoin settlement</h3>
              <p className="text-gray-600">
                Instant settlement across local traditional and digital payment rails
              </p>
            </div>

            <div className="text-center p-8 bg-indigo-50 rounded-xl">
              <div className="bg-indigo-100 rounded-full p-4 w-fit mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-driven compliance orchestration</h3>
              <p className="text-gray-600">
                Automated KYC, AML and sanctions screening with intelligent routing
              </p>
            </div>

            <div className="text-center p-8 bg-indigo-50 rounded-xl">
              <div className="bg-indigo-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Layers className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unified treasury dashboard</h3>
              <p className="text-gray-600">
                Single view of global positions, flows and compliance status
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's next for 1KPrime Flow
            </h2>
            <p className="text-xl text-gray-600">
              Upcoming features to further automate your payment operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
                <span className="text-sm font-semibold text-indigo-600">Target H1 2026</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Fund Flows</h3>
              <p className="text-gray-600">
                Trigger multi-leg conversions and payouts by rule or API.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
                <span className="text-sm font-semibold text-indigo-600">Target H1 2026</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-party Payments</h3>
              <p className="text-gray-600">
                Disburse on behalf of clients without pre-funding nostro accounts.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-indigo-600">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-indigo-600 mr-3" />
                <span className="text-sm font-semibold text-indigo-600">Target H2 2026</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sub-account Banking</h3>
              <p className="text-gray-600">
                Virtual IBANs and granular balance segregation.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-8">
              Timing subject to regulatory clearance and partner integrations.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm 
                title="Early-access Waitlist"
                description="Receive progress updates and priority onboarding when these features go live."
                submitLabel="Join Waitlist"
              />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to automate your global fund movement?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            See how 1KPrime Flow can cut settlement times by 95 % and reduce FX costs in half
          </p>
          
          {/* Final CTAs (pair) */}
          <FlowCTAPair slot="final" />
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How fast does settlement occur?</h3>
              <p className="text-gray-600">Transactions are settled in minutes compared to T+1 to T+5 with banks.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much can I save on FX costs?</h3>
              <p className="text-gray-600">Clients typically reduce FX conversion costs by 50 percent or more.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need a credit facility for same-day settlement?</h3>
              <p className="text-gray-600">No. 1KPrime Flow eliminates the need for costly credit facilities.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Which currencies and assets are supported?</h3>
              <p className="text-gray-600">We support major fiat currencies including USD, EUR, GBP, AUD, MXN and stablecoins on one platform.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I automate workflows?</h3>
              <p className="text-gray-600">Yes. Our AI-powered system automates FX conversion, multi-leg transactions, bulk payouts, and liquidity management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flow;