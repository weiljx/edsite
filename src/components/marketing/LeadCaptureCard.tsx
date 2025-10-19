import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

type LeadCaptureCardProps = {
  title: string;
  stepHelper?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  selectLabel?: string;
  selectPlaceholder?: string;
  selectOptions?: string[];
  buttonLabel?: string;
  className?: string;
  onSubmit?: (data: { email: string; volume: string; name?: string; company?: string; role?: string }) => void;
  roleLabel?: string;
  rolePlaceholder?: string;
  roleOptions?: string[];
};

export function LeadCaptureCard({
  title,
  stepHelper = 'Step 1 of 2 — Tell us about your volume',
  emailLabel = 'Work Email',
  emailPlaceholder = 'you@company.com',
  selectLabel = 'Approximate Monthly Volume',
  selectPlaceholder = 'Select range',
  selectOptions = ['$0–$1M', '$1–$5M', '$5–$25M', '$25–$100M', '$100M+'],
  buttonLabel = 'Continue',
  roleLabel = 'Role',
  rolePlaceholder = 'Select your role',
  roleOptions,
  className,
  onSubmit,
}: LeadCaptureCardProps) {
  const [email, setEmail] = useState('');
  const [volume, setVolume] = useState('');
  const [step, setStep] = useState<1 | 2>(1);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && volume) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, volume, name, company, role });
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-xl shadow-xl p-8 ${className || ''}`}>
        <h3 className="text-xl font-semibold text-gray-900 md:text-2xl mb-4">Thanks!</h3>
        <p className="text-gray-600">
          We received your request. A specialist will reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-xl p-8 ${className || ''}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 md:text-2xl">{title}</h3>
        <p className="text-xs uppercase tracking-wide text-gray-500 mt-1">
          {step === 1 ? 'Step 1 of 2 — Two quick details' : 'Step 2 of 2 — Your details'}
        </p>
      </div>
      
      {step === 1 && (
        <form onSubmit={handleContinue} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="work-email" className="block text-sm font-medium text-gray-700">
              {emailLabel} *
            </label>
            <input
              id="work-email"
              type="email"
              placeholder={emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="monthly-volume" className="block text-sm font-medium text-gray-700">
              {selectLabel} *
            </label>
            <select
              id="monthly-volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">{selectPlaceholder}</option>
              {selectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-all hover:scale-105"
          >
            {buttonLabel}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company *
              </label>
              <input
                id="company"
                type="text"
                placeholder="Your Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          
          {roleOptions && roleOptions.length > 0 && (
            <div className="space-y-2">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                {roleLabel} *
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">{rolePlaceholder}</option>
                {roleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-all hover:scale-105"
            >
              {submitLabel || 'Submit'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}