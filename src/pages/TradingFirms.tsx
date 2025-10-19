import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';
import { LineChart, Zap, Shield, Network } from 'lucide-react';

const TradingFirms = () => {
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
      onSubmit={(data) => console.log('Trading firms lead:', data)}
    />
  );

  return (
    <div>
      <Hero
        title="Built for professional trading firms"
        subtitle="Direct RFQ with firm pricing, best-venue execution across fiat, stables, and crypto, and sub-hour settlement to exchanges, custodians, and banks."
        bullets={[
          'Zero-slippage block quotes with best price routing',
          'Deep multi-asset liquidity across +40 venues',
          'Settle in under an hour via bank or digital rails',
        ]}
        cta={{ label: 'Talk with the Desk', href: '/contact' }}
        chips={['Prop shops', 'HFT / quant', 'Arbitrage LPs', 'Market makers']}
        right={heroRight}
      />

      {/* Value props */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why trading firms choose 1KPrime</h2>
            <p className="text-xl text-gray-600">
              Lower execution cost, faster turns, and institutional controls.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <LineChart className="h-8 w-8 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best price routing</h3>
              <p className="text-gray-600">
                Aggregated liquidity across venues with firm quotes for blocks. Get filled without
                slippage and keep more edge.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <Zap className="h-8 w-8 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sub-hour settlement</h3>
              <p className="text-gray-600">
                Move fiat or stablecoins to exchanges, custodians, or banks in minutes so you can
                recycle capital faster.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <Shield className="h-8 w-8 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Institutional controls</h3>
              <p className="text-gray-600">
                US-regulated partners, Chainalysis screening, and KYC/AML orchestration to meet
                internal and external requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How 1KPrime fits your workflow</h2>
            <p className="text-xl text-gray-600">
              Professional execution in four simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                n: 1,
                t: 'RFQ by chat, web or API',
                d: 'Real-time firm quotes with zero-slippage.',
              },
              {
                n: 2,
                t: 'Best-price execution',
                d: 'We source the best liquidity across +40 venues.',
              },
              {
                n: 3,
                t: 'Settle in under an hour',
                d: 'Fast settlement to your accounts via digital or local fiat rails.',
              },
              {
                n: 4,
                t: 'White-glove support',
                d: 'Ongoing relationship management and execution optimization.',
              },
            ].map((s) => (
              <div key={s.n} className="max-w-xs mx-auto">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{s.t}</h3>
                <p className="text-gray-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect your stack</h2>
              <p className="text-xl text-gray-600 mb-8">
                Trade by chat for speed, on the web for control, or integrate our API for full
                automation.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Web, chat, or API connectivity',
                  'USD, EUR, GBP, AUD, MXN fiat rails',
                  'Stablecoin rails: USDC, USDT',
                  'Direct to exchanges and custodians',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Network className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/docs"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center"
              >
                View API docs
              </Link>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <pre className="bg-gray-100 rounded-xl p-6 text-sm overflow-x-auto">
{`POST /rfq
{
  "side": "buy",
  "asset": "USDC",
  "currency": "USD",
  "amount": 2500000
}`}
              </pre>
              <p className="mt-4 text-gray-600">
                Get a firm quote in milliseconds, execute, then settle to your chosen rail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to trade like a pro?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Speak with our desk to see pricing and connectivity for your strategy.
          </p>
          <Link
            to="/contact"
            className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center"
          >
            Talk with the Desk
          </Link>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How does 1KPrime ensure best execution?</h3>
              <p className="text-gray-600">We provide zero slippage RFQ execution at any size with deep liquidity.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the settlement speed compared to peers?</h3>
              <p className="text-gray-600">Trades settle in under one hour, versus daily or T+2 settlement at most desks.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I integrate via API?</h3>
              <p className="text-gray-600">Yes. Our trading API supports RFQ, TWAP, and VWAP strategies.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How does custody work?</h3>
              <p className="text-gray-600">Assets are held in segregated wallets with no rehypothecation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingFirms;