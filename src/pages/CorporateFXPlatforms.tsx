import React from 'react';
import { ArrowRight, Zap, Code, BarChart3, CheckCircle, Users, DollarSign, Clock, Globe, TrendingUp } from 'lucide-react';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';
import LeadForm from '../components/LeadForm';

const CorporateFXPlatforms = () => {
  const heroRight = (
    <LeadCaptureCard
      title="Become a Partner"
      stepHelper="Step 1 of 2 — Two quick details"
      emailLabel="Work email"
      emailPlaceholder="you@company.com"
      selectLabel="Monthly flow (USD)"
      selectPlaceholder="Select range"
      selectOptions={['$0–$1M', '$1–$5M', '$5–$25M', '$25–$100M', '$100M+']}
      buttonLabel="Continue"
      className="max-w-lg w-full"
      onSubmit={(data) => console.log('Corporate FX platforms lead:', data)}
    />
  );

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Embed sub-hour FX settlement and liquidity in your platform"
        subtitle="White-label institutional spreads, local-rail settlement and stablecoin on/off ramps via one API"
        bullets={[
          'Institutional spreads with no bank credit facility required',
          'Sub-second quotes through REST and WebSocket feeds',
          'Settle USD, EUR, GBP, AUD, BRL, COP, ARS and MXN in < 60 min',
        ]}
        cta={{ label: 'Request Partner Access', href: '/contact' }}
        right={heroRight}
        className="bg-gradient-to-br from-blue-50 to-purple-50"
      />

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              FX platform pain points we solve
            </h2>
            <p className="text-xl text-gray-600">
              Traditional FX infrastructure creates unnecessary friction and costs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Costly credit facilities</h3>
              <p className="text-gray-600">
                Bank interest charges equate to 25-35% of revenue for same-day settlement
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Slow T+2 settlement</h3>
              <p className="text-gray-600">
                Payouts land days later, hurting client cash flow
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fragmented local rails</h3>
              <p className="text-gray-600">
                Multiple banks and SWIFT add complexity and risk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why FX platforms choose 1KPrime
            </h2>
            <p className="text-xl text-gray-600">
              Superior liquidity, technology, and partnership support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local-rail settlement</h3>
              <p className="text-gray-600">
                Sub-hour fiat settlement in eight markets with no credit line
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Stablecoin On/Off Ramp</h3>
              <p className="text-gray-600">
                Real-time USDC and USDT conversion to local fiat rails in minutes
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Transparent institutional spreads</h3>
              <p className="text-gray-600">
                Competitive pricing sourced from 40+ liquidity providers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Suite */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive API suite
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to build best-in-class FX experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quote API</h3>
              <p className="text-gray-600 text-sm">
                Sub-second RFQ for major fiat pairs and stablecoins
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trade API</h3>
              <p className="text-gray-600 text-sm">
                Execute and confirm trades programmatically
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Settlement API</h3>
              <p className="text-gray-600 text-sm">
                Trigger local-rail payouts with full tracking
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Webhook notifications</h3>
              <p className="text-gray-600 text-sm">
                Real-time status updates to your back office
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership benefits
            </h2>
            <p className="text-xl text-gray-600">
              More than just an API - a complete partnership for growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What you get as a partner</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span>Sub-hour SLA for fiat settlement</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span>No capital locked in credit lines</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span>Revenue-share opportunities and co-marketing</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                  <span>Sandbox in 24 hours, production in under two weeks</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Integration timeline</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-sm font-semibold mr-4">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Week 1-2: API access and documentation</p>
                    <p className="text-sm text-gray-600">Sandbox environment and technical onboarding</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-sm font-semibold mr-4">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Week 3-4: Integration development</p>
                    <p className="text-sm text-gray-600">Build and test with dedicated support</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white text-sm font-semibold mr-4">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Week 5-6: Go live</p>
                    <p className="text-sm text-gray-600">Production deployment and monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-50 rounded-xl p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                CM
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Carlos Mendes</p>
                <p className="text-gray-600">COO, Global FX Platform</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "1KPrime cut our EUR→MXN payout time from two days to 45 minutes and saved 60 bps."
            </blockquote>
            <div className="flex items-center justify-center">
              <Users className="h-5 w-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-500">Verified FX Platform Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to cut settlement times from days to minutes?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join FX platforms that streamline cross-border flows with 1KPrime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
              Request Partner Access
            </button>
            <a 
              href="https://docs.1konto.com/1konto-v1.0-api-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
            >
              View API Docs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateFXPlatforms;