import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import { ArrowRight, Globe, Zap, Shield, TrendingUp, Users, CheckCircle, Star, X } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import LeadForm from '../components/LeadForm';
import Carousel from '../components/Carousel';
import animationData from '../assets/Animation.json/Animation.json';

const Home = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  
  const carouselItems = [
    {
      src: '/images/1kprime-flow-dashboard.png',
      alt: '1KPrime Flow dashboard displaying KPIs, recent transactions, and FX highlights',
      caption: 'Live KPIs'
    },
    {
      src: '/images/1kprime-api.png',
      alt: 'REST RFQ request and JSON response showing buy/sell legs and settlement details',
      caption: 'Unified API'
    },
    {
      src: '/images/1kprime-otc.png',
      alt: 'OTC chat mock-up confirming a 10 M USDT-to-EUR swap',
      caption: 'Trade any-size'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="hero-content flex-1">
              <h1 className="hero-h1 font-bold leading-tight mb-6">
                Real-Time Cross-Border Settlement, Powered by Stablecoins
              </h1>
              <p className="hero-sub text-gray-300 mb-8 leading-relaxed">
                Faster payments. Lower costs. Institutional-grade liquidity across USD, EUR, GBP, USDC, USDT, and more.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button 
                  onClick={() => setShowDemoModal(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center"
                >
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-gray-400 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white hover:text-gray-900">
                  Get API Docs
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center sm:text-left">
                  <div className="kpi-number text-3xl text-indigo-400">
                    <AnimatedCounter end={4} decimals={0} prefix="+$" suffix="B processed" />
                  </div>
                  <p className="text-gray-300">total volume</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="kpi-number text-3xl text-indigo-400">
                    <AnimatedCounter end={10000} prefix="+" suffix=" settlements" />
                  </div>
                  <p className="text-gray-300">completed</p>
                </div>
                <div className="text-center sm:text-left">
                  <div className="kpi-number text-3xl text-indigo-400">
                    <AnimatedCounter end={40} prefix="+" />
                    <br />
                    LPs
                  </div>
                  <p className="text-gray-300">connected</p>
                </div>
              </div>
            </div>

            {/* Hero Image - Map */}
            <div className="hero-image flex-1 flex justify-center lg:justify-end">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="max-w-full lg:max-w-[640px] w-full h-auto"
                aria-label="Global animation showing worldwide reach"
              />
            </div>

            {/* Show the form inline on mobile (<= lg) but hide on larger screens,
                 where a modal will be used instead */}
            <div className="block lg:hidden w-full">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20">
                <LeadForm title="Get Started" submitLabel="Request Demo" />
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-16 border-t border-gray-700">
            <p className="trust-heading text-center text-gray-300 mb-8">Trusted by leading institutions worldwide</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-2xl font-bold text-gray-400">COMPANY</div>
              <div className="text-2xl font-bold text-gray-400">BRAND</div>
              <div className="text-2xl font-bold text-gray-400">CORP</div>
              <div className="text-2xl font-bold text-gray-400">ENTERPRISE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Teasers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="hero-h1 font-bold leading-tight mb-6">
              Complete financial infrastructure for institutions
            </h1>
            <p className="section-lead mb-8 leading-relaxed">
              Three integrated products that modernize how you move money, trade assets, and access liquidity globally
            </p>
          </div>

          {/* How it works in practice carousel */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              How it works in practice
            </h2>
            <Carousel items={carouselItems} autoplay={4500} loop={true} />
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our integrated product suite
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Flow Teaser */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow product-card">
              <div className="bg-indigo-100 rounded-lg p-4 w-fit mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1KPrime Flow: automate global fund movement
              </h3>
              <ul className="space-y-3 mb-8 card-bullet">
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Fiat & stablecoins settle sub-hour
                </li>
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Local rails in supported currencies (USD, EUR, GBP, AUD, BRL, COP, ARS, MXN)
                </li>
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Automated compliance & trading
                </li>
              </ul>
              <Link 
                to="/flow"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-all hover:scale-105 cta-btn"
              >
                Explore Flow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Trading Teaser */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow product-card">
              <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1KPrime Trading: institutional OTC with tight spreads
              </h3>
              <ul className="space-y-3 mb-8 card-bullet">
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Deep RFQ liquidity across fiats, stablecoins, and Bitcoin
                </li>
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Sub-hour settlement on digital & local fiat rails
                </li>
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  API, web, and 24 / 7 high-touch desk support
                </li>
              </ul>
              <Link 
                to="/trading"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-all hover:scale-105 cta-btn"
              >
                Explore Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Lending Teaser */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow product-card">
              <div className="bg-green-100 rounded-lg p-4 w-fit mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                1KPrime Lending: unlock Bitcoin liquidity
              </h3>
              <ul className="space-y-3 mb-8 card-bullet">
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Borrow up to 70 % LTV on Bitcoin
                </li>
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  Stablecoin or fiat funding the same day
                </li>
                <li className="flex items-center text-gray-600 card-bullet">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  No rehypothecation, Tier-1 custodians
                </li>
              </ul>
              <Link 
                to="/lending"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-all hover:scale-105 cta-btn"
              >
                Explore Lending
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="testimonial-h2 font-bold text-gray-900 mb-8">
              What our clients say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              {/* Star rating visuals removed: institutional audiences judge via due‑diligence, not five‑star widgets */}
              <div className="mb-4"></div>
              <p className="testimonial-quote text-gray-600 mb-6">
                "1KPrime reduced our settlement times from 3 days to under 5 minutes. Game-changer for our international operations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  JS
                </div>
                <div>
                  <p className="font-semibold text-gray-900">John Smith</p>
                  <p className="text-sm text-gray-500">CFO, Global Corp</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              {/* Removed redundant five‑star icons (see above) */}
              <div className="mb-4"></div>
              <p className="testimonial-quote text-gray-600 mb-6">
                "The trading desk provides institutional-grade execution with retail-level ease of use. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  MJ
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Johnson</p>
                  <p className="text-sm text-gray-500">Head of Treasury, FinTech Inc</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              {/* Removed redundant five‑star icons (see above) */}
              <div className="mb-4"></div>
              <p className="testimonial-quote text-gray-600 mb-6">
                "Crypto-backed lending without the liquidation anxiety. 1KPrime's approach is exactly what institutions need."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  RB
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Robert Brown</p>
                  <p className="text-sm text-gray-500">Treasurer, Crypto Capital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="cta-band-h2 font-bold mb-6">
            Ready to transform your settlements infrastructure?
          </h2>
          <p className="cta-band-sub text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join global institutions who've already modernized their financial operations with 1KPrime
          </p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 mr-4">
            Book Demo
          </button>
          <button className="border border-indigo-200 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-white hover:text-indigo-600">
            Get API Access
          </button>
        </div>
      </section>

      {/* Desktop Demo Modal */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden lg:flex">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative">
            <button 
              onClick={() => setShowDemoModal(false)}
              className="absolute top-3 right-3 text-2xl leading-none text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <LeadForm title="Get Started" submitLabel="Request Demo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;