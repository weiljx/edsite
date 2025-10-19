import React from 'react';
import { ArrowRight, Globe, Clock, DollarSign, CheckCircle, Users } from 'lucide-react';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';
import { PSPCalculator } from '../components/psp/PSPCalculator';
import { PriceTicker } from '../components/marketing/PriceTicker';
import { IntegrationCarousel } from '../components/marketing/IntegrationCarousel';
import LeadForm from '../components/LeadForm';

const PSPs = () => {
  const heroRight = (
    <LeadCaptureCard
      title="Talk Settlement"
      stepHelper="Step 1 of 2 — Two quick details"
      emailLabel="Work email"
      emailPlaceholder="you@company.com"
      selectLabel="Monthly payout volume"
      selectPlaceholder="Select range"
      selectOptions={['$0–$1M', '$1–$5M', '$5–$25M', '$25–$100M', '$100M+']}
      buttonLabel="Continue"
      className="max-w-lg w-full"
      onSubmit={(data) => console.log('PSP lead:', data)}
    />
  );

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Settle PSP flows in minutes and pay merchants faster"
        subtitle="We convert and settle funds to your designated accounts fast — you keep control of merchant disbursements."
        bullets={[
          'Settlement in minutes to your PSP bank/custody/exchange accounts',
          'Automated FX funding by corridor for program accounts',
          'US-screening, KYC/AML orchestration, dedicated addresses',
        ]}
        cta={{ label: 'View API Docs', href: 'https://docs.1konto.com/1konto-v1.0-api-docs/' }}
        right={heroRight}
        className="bg-gradient-to-br from-purple-50 to-indigo-50"
      />

      {/* PSP-focused live ticker: BTC/USDT/USDC + key corridor fiats (USD base) */}
      <PriceTicker
        cryptos={['bitcoin','tether','usd-coin']}
        fiats={['USD','EUR','GBP','AUD','MXN','BRL','COP','ARS']}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-6">
        
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              PSP pain points we solve
            </h2>
            <p className="text-xl text-gray-600">
              Traditional payment rails create unnecessary friction and costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Costly FX</h3>
              <p className="text-gray-600">
                Hidden spreads and multiple intermediaries inflate FX costs up to 300 bps
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Slow T+2 Settlement</h3>
              <p className="text-gray-600">
                Delayed payouts create cash-flow issues and hurt merchant relationships
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fragmented Rails</h3>
              <p className="text-gray-600">
                Managing multiple banking partners adds complexity and risk
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
              How 1KPrime transforms PSP operations
            </h2>
            <p className="text-xl text-gray-600">
              One platform, global reach, institutional execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Coverage</h3>
              <p className="text-gray-600">
                One API settles major stablecoins and eight local fiats across key markets
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-Time Settlement</h3>
              <p className="text-gray-600">
                Payout merchants in minutes, not days, improving satisfaction
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 rounded-full p-4 w-fit mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Savings</h3>
              <p className="text-gray-600">
                Reduce FX costs by up to 50% through institutional liquidity and smart routing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PSP Funding Calculator — placed after 'How 1KPrime transforms PSP operations' section */}
      <section id="psp-calculator">
        <PSPCalculator />
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-xl p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                AB
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Alex Brown</p>
                <p className="text-gray-600">Head of Payments, GlobalPay PSP</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "1KPrime reduced our merchant payout times from 48 hours to 5 minutes. Our merchants love the faster access to funds, and we've cut our FX costs by 30%. It's transformed our competitive position."
            </blockquote>
            <div className="flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-500">Verified PSP Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to streamline your payment infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join PSPs that have modernised their payouts with 1KPrime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
              Request PSP Demo
            </button>
            <a 
              href="https://docs.1konto.com/1konto-v1.0-api-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
            >
              View API Docs
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How many payments can you process at once?</h3>
              <p className="text-gray-600">Our API supports batch uploads for bulk payouts. A typical flow can settle payouts to multiple banks in 30 minutes.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you handle both fiat and stablecoins?</h3>
              <p className="text-gray-600">Yes. We enable payouts in both fiat and stablecoins on one platform.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How reliable is your system?</h3>
              <p className="text-gray-600">We provide 24/7 support, real-time monitoring, and compliance alignment across jurisdictions.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Will integration require major dev effort?</h3>
              <p className="text-gray-600">No. Our RESTful APIs and SDKs are designed for quick integration with minimal disruption.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PSPs;