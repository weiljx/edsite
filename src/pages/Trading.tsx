import React from 'react';
import { TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';
import { PriceTicker } from '../components/marketing/PriceTicker';
import TradingCTAPair from '../components/ctas/TradingCTAPair';
import TradingLeadForm from '../components/trading/LeadForm';
import StatStrip from '../components/trading/StatStrip';
import TrustBadges from '../components/common/TrustBadges';
import WhoChips from '../components/trading/WhoChips';
import ResearchLink from '../components/common/ResearchLink';

const Trading = () => {
  const heroRight = (
    <LeadCaptureCard
      title="Request a demo"
      stepHelper="Start with two quick details."
      emailLabel="Work email"
      emailPlaceholder="you@company.com"
      selectLabel="Monthly volume (range)"
      selectOptions={['$0–$1M', '$1–$5M', '$5–$25M', '$25–$100M', '$100M+']}
      buttonLabel="Continue"
      className="max-w-lg w-full"
      onSubmit={(data) => console.log('Trading lead:', data)}
    />
  );

  return (
    <main id="trading-page">
      {/* Hero Section */}
      <Hero
        title="Execute block trades with zero slippage"
        subtitle="Deep liquidity across fiat, stablecoins, and crypto with sub-hour settlement and a 24/7 desk."
        bullets={[
          'Deep multi-asset liquidity for fiat and stablecoins',
          '24/7 dedicated institutional support',
          'Custom connectivity via desk, webapp, or API',
        ]}
        cta={{ label: 'Talk with the Desk', href: '/contact' }}
        chips={['Funds', 'OTC desks', 'Market makers', 'Exchanges']}
        right={heroRight}
      />

      {/* Stats strip for quick proof points */}
      <StatStrip />

      {/* Live Prices Ticker */}
      <PriceTicker />

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional trading infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for institutional-grade crypto and FX trading
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Any-2-Any Trading</h3>
              <p className="text-gray-600">
                Trade between stablecoins, fiat, and Bitcoin with competitive spreads
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Rails in 8 Currencies</h3>
              <p className="text-gray-600">
                Direct settlement to local bank accounts in USD, EUR, GBP, AUD, BRL, COP, ARS and MXN
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent Price Discovery</h3>
              <p className="text-gray-600">
                Aggregated quotes, pre-trade validation and post-trade reporting
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mid-page CTAs (pair) */}
      <TradingCTAPair slot="mid" />

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How 1KPrime Trading Works
            </h2>
            <p className="text-xl text-gray-600">
              Professional execution in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">RFQ by chat, web or API</h3>
              <p className="text-gray-600">
                Real-time firm quotes with zero-slippage
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fill with best-price execution</h3>
              <p className="text-gray-600">
                Our desk sources the best liquidity across +40 venues
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settle in under an hour</h3>
              <p className="text-gray-600">
                Fast settlement to your accounts via digital or local fiat rails
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">White glove support</h3>
              <p className="text-gray-600">
                Ongoing relationship management and execution optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison block would appear here (if present) */}
      {/* Removed research link per design */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for institutional-grade trading?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join leading institutions that secure tight spreads and sub-hour settlement with 1KPrime Trading
          </p>
          
          {/* Final CTA pair before footer */}
          <TradingCTAPair slot="final" />
          {/* Removed bottom regulatory/partner chips per design */}
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What assets can I trade on 1KPrime?</h3>
              <p className="text-gray-600">You can trade stablecoins, major fiat currencies including USD, EUR, GBP, AUD, MXN, BRL, and digital assets such as BTC, ETH, and SOL with institutional-grade liquidity.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How fast are trades settled?</h3>
              <p className="text-gray-600">Trades can be settled in under one hour across both fiat and crypto rails.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you guarantee zero slippage?</h3>
              <p className="text-gray-600">Yes. All RFQ orders at any size execute with zero slippage due to our deep liquidity pools.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What execution methods are supported?</h3>
              <p className="text-gray-600">We offer RFQ, Market, TWAP, and VWAP execution, accessible via API, web app, or OTC desk.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Is 1KPrime compliant with KYC and AML?</h3>
              <p className="text-gray-600">Yes. Our compliance program adheres to strict KYC and AML standards and is built for institutional requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trading;