import React from 'react';
import { ArrowRight, Shield, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';
import LeadForm from '../components/LeadForm';
import LTVCalculator from '../components/LTVCalculator';
import { UseCasesCarousel } from '../components/marketing/UseCasesCarousel';

const Lending = () => {
  const heroRight = (
    <LeadCaptureCard
      title="Request a term sheet"
      stepHelper="Step 1 of 2 — Two quick details"
      emailLabel="Work email"
      emailPlaceholder="you@company.com"
      selectLabel="Desired loan size (USD)"
      selectPlaceholder="Select range"
      selectOptions={['$0.5m–$1m', '$1m–$5m', '$5m–$25m', '$25m–$100m', '$100m+']}
      buttonLabel="Continue"
      className="max-w-lg w-full"
      onSubmit={(data) => console.log('Lending lead:', data)}
    />
  );

  return (
    <div>
      {/* Hero Section with 2-step Lead Capture */}
      <Hero
        title="Bitcoin-backed credit for institutions"
        subtitle="Up to 70% LTV on BTC, same-day funding in stablecoins or fiat, and clear margin thresholds."
        bullets={[
          'Borrow up to 70% LTV on Bitcoin',
          'Same-day funding in USD, EUR, GBP, USDT, USDC',
          'Proactive margin alerts and clear thresholds',
        ]}
        cta={{ label: 'Request a term sheet', href: '/contact' }}
        right={heroRight}
      />

      {/* Loan Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flexible loan terms for every institution
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right loan structure for your risk profile and liquidity needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                <p className="text-gray-600">Standard terms</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Feature</span>
                  <span className="font-semibold text-gray-900">Standard</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Loan-to-Value (LTV)</span>
                  <span className="font-semibold text-gray-900">70 %</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Margin Call</span>
                  <span className="font-semibold text-gray-900">75 %</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Liquidation</span>
                  <span className="font-semibold text-gray-900">80 %</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="font-semibold text-gray-900">Custom APR</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Term</span>
                  <span className="font-semibold text-gray-900">12-36 months</span>
                </div>
              </div>

            </div>

            <div className="bg-green-50 rounded-xl p-8">
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600">Custom terms</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">Feature</span>
                  <span className="font-semibold text-gray-900">Enterprise</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">Loan-to-Value (LTV)</span>
                  <span className="font-semibold text-gray-900">Custom</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">Margin Call</span>
                  <span className="font-semibold text-gray-900">Custom</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">Liquidation</span>
                  <span className="font-semibold text-gray-900">Custom</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-green-200">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="font-semibold text-gray-900">Custom APR</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Term</span>
                  <span className="font-semibold text-gray-900">Flexible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LTV Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calculate your Bitcoin loan
            </h2>
            <p className="text-xl text-gray-600">
              See how much you can borrow and understand your risk thresholds
            </p>
          </div>
          <LTVCalculator />

          {/* ---- Indicative pricing disclaimer ---- */}
          <p
            className="mx-auto mt-4 max-w-3xl text-center text-sm text-gray-500"
            aria-label="Indicative pricing disclaimer"
          >
            *Indicative only. Final loan terms depend on credit approval and market conditions.*
          </p>
        </div>
      </section>

      {/* Use Cases Carousel */}
      <UseCasesCarousel />

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why institutions choose 1KPrime Lending
            </h2>
            <p className="text-xl text-gray-600">
              Secure, flexible, and institutional-grade crypto lending
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custody at Tier-1 Partners</h3>
              <p className="text-gray-600">
                BTC collateral held in a dedicated wallet address; never rehypothecated
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Same-Day Funding</h3>
              <p className="text-gray-600">
                Loans funded within hours in stablecoins or fiat
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 rounded-full p-4 w-fit mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proactive Margin Calls</h3>
              <p className="text-gray-600">
                Collaborative risk management to avoid liquidations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Unlock Bitcoin liquidity the same day
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get competitive rates with institutional-grade service
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
            Apply for BTC Credit Facility
          </button>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What assets can I borrow against?</h3>
              <p className="text-gray-600">You can borrow against BTC, ETH, SOL, and approved altcoins with flexible loan-to-value ratios.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly are loans funded?</h3>
              <p className="text-gray-600">Loans are funded the same day in stablecoins or fiat including USDC, USDT, USD, EUR, GBP, MXN, and AUD.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What are your margin call and liquidation policies?</h3>
              <p className="text-gray-600">We provide real-time monitoring with proactive communication. Margin calls are typically triggered at 75 to 90 percent LTV, and liquidation levels range from 80 to 95 percent LTV depending on loan type.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you rehypothecate collateral?</h3>
              <p className="text-gray-600">No. Assets remain fully segregated with non-rehypothecation options.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What makes 1KPrime Lending different from exchanges or banks?</h3>
              <p className="text-gray-600">We combine institutional-grade custody with proactive risk management and white-glove service, avoiding forced auto-liquidations.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Lending;