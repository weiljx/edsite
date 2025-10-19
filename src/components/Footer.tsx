import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-4">
              1KPrime
            </div>
            <p className="text-gray-300 mb-6">
              Transform payments from days to minutes while cutting FX costs by 50%.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition-colors"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400">Subscribe to our newsletter</p>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/flow" className="text-gray-300 hover:text-white transition-colors">1KPrime Flow</Link></li>
              <li><Link to="/trading" className="text-gray-300 hover:text-white transition-colors">1KPrime Trading</Link></li>
              <li><Link to="/lending" className="text-gray-300 hover:text-white transition-colors">1KPrime Lending</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Counterparties</h3>
            <ul className="space-y-3">
              <li><Link to="/psps" className="text-gray-300 hover:text-white transition-colors">PSPs</Link></li>
              <li><Link to="/corporate-treasuries" className="text-gray-300 hover:text-white transition-colors">Corporate Treasuries</Link></li>
              <li><Link to="/corporate-fx-platforms" className="text-gray-300 hover:text-white transition-colors">FX Platforms</Link></li>
              <li><Link to="/banks" className="text-gray-300 hover:text-white transition-colors">Banks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-gray-300 hover:text-white transition-colors">API Documentation</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/compliance" className="text-gray-300 hover:text-white transition-colors">Compliance</Link></li>
              <li><a 
                href="https://1konto.atlassian.net/servicedesk/customer/portal/1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Support
              </a></li>
            </ul>
          </div>
        
        <div className="mt-10 w-full col-span-full border-t border-white/10 pt-6 text-xs leading-relaxed text-gray-400 space-y-4">
          <p>
            This website is intended for institutional investors only. Neither 1Konto Inc. nor 1Konto Limited BVI (separately and collectively "1Konto") service retail counterparties, and the information on this website is NOT intended for retail investors.
          </p>
          <p>
            1Konto is registered with Fincen as an MSB#31000288161085
          </p>
          <p>
            1Konto's services are tailored for clients outside of the United Kingdom. This website and its content are intended for international users, and the information provided is not intended for distribution or use by individuals or entities within the UK. As such, our products and services are not available to UK residents or businesses in compliance with applicable regulations.
          </p>
        </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-center mb-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 mb-4">
              Talk to Sales
            </button>
            <p className="text-gray-300 text-sm">
              Regulated, audited, and SOC-2 aligned. 24/7 institutional support.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2025 1KPrime. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 justify-center md:justify-end">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;