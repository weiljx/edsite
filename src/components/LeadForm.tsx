import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface LeadFormProps {
  title?: string;
  submitLabel?: string;
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  title = "Request Demo", 
  submitLabel = "Request Demo",
  className = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    monthlyVolume: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Role *
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select your role</option>
            <option value="cfo">CFO</option>
            <option value="treasurer">Treasurer</option>
            <option value="head-of-payments">Head of Payments</option>
            <option value="cto">CTO</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Approximate Monthly Volume
          </label>
          <select
            name="monthlyVolume"
            value={formData.monthlyVolume}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select range</option>
            <option value="1-10m">$1M - $10M</option>
            <option value="10-50m">$10M - $50M</option>
            <option value="50-100m">$50M - $100M</option>
            <option value="100m+">$100M+</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-all hover:scale-105"
        >
          {submitLabel}
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default LeadForm;