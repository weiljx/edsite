import React from 'react';
import { ArrowRight, Building, Shield, Clock, CheckCircle, Star } from 'lucide-react';
import { Hero } from '../components/marketing/Hero';
import { LeadCaptureCard } from '../components/marketing/LeadCaptureCard';

const Banks = () => {
  const heroRight = (
    <LeadCaptureCard
      title="Modernize Your Bank"
      emailLabel="Work Email"
      emailPlaceholder="you@company.com"
      selectLabel="Approximate Monthly Volume"
      selectPlaceholder="Select range"
      selectOptions={['$0–$1M', '$1–$5M', '$5–$25M', '$25–$100M', '$100M+']}
      buttonLabel="Continue"
      submitLabel="Schedule Call"
      roleLabel="Role"
      rolePlaceholder="Select your role"
      roleOptions={['Executive','Product','Treasury','Operations','Compliance','Other']}
      className="max-w-lg w-full"
      onSubmit={(data) => console.log('Banking lead:', data)}
    />
  );

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Unlock real-time cross-border settlement with no nostro balances or credit fees"
        subtitle="Settle FX in minutes, cut bank costs by up to 50 bps, and stay fully compliant"
        bullets={[
          'On-demand USD, EUR, GBP liquidity with post-trade settlement (minimal pre-funding)',
          '< 60-min settlement via local and stablecoin rails',
          'Built-in AML/KYT screening and beneficiary checks',
        ]}
        cta={{ label: 'Book Discovery Call', href: '/contact' }}
        right={heroRight}
        className="bg-gradient-to-br from-slate-50 to-blue-50"
      />

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Banking pain points we solve
            </h2>
            <p className="text-xl text-gray-600">
              Traditional correspondent banking creates unnecessary costs and delays
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Costly Nostro Funding</h3>
              <p className="text-gray-600">
                Hundreds of millions sit idle earning near-zero yield
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Slow T+5 settlement</h3>
              <p className="text-gray-600">
                SWIFT transfers delay clients and add reconciliation risk
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 rounded-xl">
              <div className="bg-red-100 rounded-full p-4 w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Credit facility costs</h3>
              <p className="text-gray-600">
                Bank interest charges equate to 25-35% of revenue for same-day settlement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Banking use cases
            </h2>
            <p className="text-xl text-gray-600">
              How progressive banks use 1KPrime to modernize operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Trade Finance</h3>
              <p className="text-gray-600 mb-6">
                Process letters of credit and trade payments with real-time settlement and automatic compliance checks.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Instant L/C processing</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Real-time status updates</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Automated compliance</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Border Payments</h3>
              <p className="text-gray-600 mb-6">
                Offer clients same-day international transfers with transparent pricing and full tracking.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Minutes vs days settlement</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Transparent FX pricing</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">End-to-end tracking</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Treasury Management</h3>
              <p className="text-gray-600 mb-6">
                Optimize your own treasury operations with better FX execution and liquidity management.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Improved FX spreads</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Reduced nostro balances</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Real-time reporting</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Asset Services</h3>
              <p className="text-gray-600 mb-6">
                Launch crypto custody and trading services for institutional clients with full regulatory compliance.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Institutional custody</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">OTC trading desk</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-sm">Regulatory reporting</span>
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
              <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">
                JD
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">James Davis</p>
                <p className="text-gray-600">Head of Correspondent Banking, Regional Bank</p>
              </div>
            </div>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "1KPrime transformed our correspondent banking operations. We've reduced settlement times from days to minutes and our clients love the transparency. It's helped us compete with the largest global banks."
            </blockquote>
            <div className="flex items-center justify-center">
              <Star className="h-5 w-5 text-yellow-400 mr-2 fill-current" />
              <span className="text-sm text-gray-500">Verified Bank Client</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-700 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to modernize your correspondent banking?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Join progressive banks offering 24/7 settlement and modern payment infrastructure
          </p>
          <button className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105">
            Book Discovery Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banks;