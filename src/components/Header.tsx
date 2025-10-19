import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCounterpartiesOpen, setIsCounterpartiesOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Sticky CTA Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-2 px-4 text-center text-sm font-medium">
        Transform your payments infrastructure - Book a demo today
        <button className="ml-4 bg-white text-indigo-600 px-3 py-1 rounded-md text-xs font-semibold hover:bg-gray-100 transition-colors">
          Book Demo
        </button>
      </div>

      <header className="sticky top-0 bg-white shadow-sm z-40 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  src="/images/1Konto 7.2 no bg -1152x290.png"
                  alt="1KPrime"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  Products
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div 
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-48 border border-gray-200"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link to="/flow" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">1KPrime Flow</Link>
                    <Link to="/trading" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">1KPrime Trading</Link>
                    <Link to="/lending" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">1KPrime Lending</Link>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                  onMouseEnter={() => setIsCounterpartiesOpen(true)}
                  onMouseLeave={() => setIsCounterpartiesOpen(false)}
                >
                  Institutions We Serve
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isCounterpartiesOpen && (
                  <div 
                    className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 border border-gray-200"
                    onMouseEnter={() => setIsCounterpartiesOpen(true)}
                    onMouseLeave={() => setIsCounterpartiesOpen(false)}
                  >
                    <Link to="/psps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Payment Service Providers</Link>
                    <Link to="/asset-managers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Asset Managers</Link>
                    <Link to="/corporate-treasuries" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Corporate Treasuries</Link>
                    <Link to="/corporate-fx-platforms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Corporate FX Platforms</Link>
                    <Link to="/banks" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Banks</Link>
                    <Link to="/trading-firms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600">Trading Firms</Link>
                  </div>
                )}
              </div>

              <Link to="/resources" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Resources
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                Team
              </Link>
              <Link to="/docs" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
                API Docs
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-indigo-600 hover:text-indigo-700 px-4 py-2 text-sm font-semibold transition-colors">
                Login
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105">
                Book Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="space-y-2">
                <Link to="/flow" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">1KPrime Flow</Link>
                <Link to="/trading" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">1KPrime Trading</Link>
                <Link to="/lending" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">1KPrime Lending</Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link to="/psps" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">Payment Service Providers</Link>
                <Link to="/asset-managers" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">Asset Managers</Link>
                <Link to="/corporate-treasuries" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">Corporate Treasuries</Link>
                <Link to="/corporate-fx-platforms" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">Corporate FX Platforms</Link>
                <Link to="/banks" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">Banks</Link>
                <Link to="/trading-firms" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">Trading Firms</Link>
                <div className="border-t border-gray-200 my-2"></div>
                <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">Team</Link>
                <button className="w-full text-left px-4 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-lg mx-4 mt-4">
                  Book Demo
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;