import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

type CTA = { label: string; href?: string; onClick?: () => void };

type HeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  bullets?: string[];
  chips?: string[];
  cta?: CTA;
  right?: React.ReactNode;
  className?: string;
};

export function Hero({
  title,
  subtitle,
  bullets = [],
  chips = [],
  cta,
  right,
  className,
}: HeroProps) {
  return (
    <section className={`bg-gradient-to-br from-indigo-50 to-blue-50 py-20 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-600 mb-8">
                {subtitle}
              </p>
            )}
            {bullets.length > 0 && (
              <ul className="mt-4 space-y-2 text-gray-800 mb-8">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <div className="mt-8">
                {cta.href ? (
                  <Link
                    to={cta.href}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center"
                  >
                    {cta.label}
                  </Link>
                ) : (
                  <button
                    onClick={cta.onClick}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 inline-flex items-center"
                  >
                    {cta.label}
                  </button>
                )}
              </div>
            )}
            {chips.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {chips.map((chip, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-sm hover:bg-neutral-50"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>
          {right && (
            <div className="w-full">
              {right}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}