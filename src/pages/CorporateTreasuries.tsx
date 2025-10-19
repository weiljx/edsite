import React from 'react';
import { ArrowRight, TrendingUp, BarChart3, Shield, CheckCircle, Star } from 'lucide-react';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';
import LeadForm from '../components/LeadForm';

const CorporateTreasuries = () => {
  const heroRight = (
    <LeadCaptureCard
      title="Talk to Treasury Desk"
      stepHelper="Step 1 of 2 — Two quick details"
      emailLabel="Work email"
      emailPlaceholder="you@company.com"
      selectLabel="Monthly flow (USD)"
      selectPlaceholder="Select range"
      selectOptions={['$0–$1M', '$1–$5M', '$5–$25M', '$25–$100M', '$100M+']}
      buttonLabel="Continue"
      className="max-w-lg w-full"
      onSubmit={(data) => console.log('Corporate treasuries lead:', data)}
    />
  );

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Move global funds in minutes — free up working-capital drag"
        subtitle="Local rails in 8 major fiats, instant stablecoin off-ramps and real-time FX at institutional spreads"
        bullets={[
          'Convert idle balances to working capital in < 60 min',
          'Settle across USD, EUR, GBP, AUD, BRL, COP, ARS, MXN and USDT / USDC',
          'Save up to 50 bps on every cross-border transfer',
        ]}
        cta={{ label: 'Request Treasury Demo', href: '/contact' }}
        right={heroRight}
        className="bg-gradient-to-br from-emerald-50 to-blue-50"
      />

      {/* Pain Points */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Treasury challenges we solve
            </h2>
            <p className="text-xl text-gray-600">
              Modern treasuries need modern solutions for global cash management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Idle Balances</h3>
              <p className="text-gray-600">
                Cash sitting in low-yield accounts across multiple currencies erodes 3–5% of working capital each year
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manual Hedging</h3>
              <p className="text-gray-600">
                Time-consuming processes raise FX risk and staffing costs
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Opaque Fees</h3>
              <p className="text-gray-600">
                Bank spreads lack transparency and inflate FX costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How 1KPrime transforms corporate treasury
            </h2>
            <p className="text-xl text-gray-600">
              Real-time execution, automation, and unified visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-emerald-100 rounded-full p-4 w-fit mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Conversions</h3>
              <p className="text-gray-600">
                Convert funds instantly based on market conditions and cash-flow needs
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-emerald-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">FX Hedging Automation</h3>
              <p className="text-gray-600">
                Machine-driven hedging triggers aligned with your policies
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-emerald-100 rounded-full p-4 w-fit mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Unified Dashboard</h3>
              <p className="text-gray-600">
                Single view of global cash, FX exposure and hedging strategies
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-emerald-100 rounded-full p-4 w-fit mx-auto mb-6">
                <ArrowRight className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stablecoin On/Off Ramp</h3>
              <p className="text-gray-600">
                Real-time USDC and USDT conversion to local fiat rails in minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-xl p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                LW
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Lisa Wang</p>
                <p className="text-gray-600">VP Treasury, Global Manufacturing Corp</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "1KPrime settled USD→BRL in 30 minutes and cut our FX cost by 60 bps. We unlocked $2 M in working-capital savings."
            </blockquote>
            <div className="flex items-center justify-center">
              <Star className="h-5 w-5 text-yellow-400 mr-2 fill-current" />
              <span className="text-sm text-gray-500">Regulated entity • Independently audited • Tier-1 custody partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Unlock trapped funds today
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join treasuries that optimise global liquidity with 1KPrime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
              Request Treasury Demo
            </button>
            <a 
              href="https://example.com/treasury-roi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
            >
              Download 2-page ROI brief
            </a>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How much can we save on FX costs?</h3>
              <p className="text-gray-600">Treasuries typically save 50 percent or more versus banks.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can we settle payments in minutes instead of days?</h3>
              <p className="text-gray-600">Yes. Payments settle in real time, improving cash flow and working capital.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is this solution as safe as a bank?</h3>
              <p className="text-gray-600">Yes. We follow strict AML and KYC controls and an institutional-grade compliance framework.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do we need to overhaul existing systems?</h3>
              <p className="text-gray-600">No. Our API integrates with ERP and treasury systems without replacing current workflows.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTreasuries;