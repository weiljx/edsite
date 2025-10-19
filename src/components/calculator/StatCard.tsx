import React from 'react';

type Variant = 'success' | 'warning' | 'neutral' | 'danger';

const variantClasses: Record<Variant, string> = {
  success: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  warning: 'bg-amber-50 text-amber-700 border-amber-100',
  neutral: 'bg-gray-50 text-gray-700 border-gray-100',
  danger: 'bg-rose-50 text-rose-700 border-rose-100',
};

export function StatCard({
  label,
  value,
  helper,
  variant = 'neutral',
}: {
  label: string;
  value: React.ReactNode;
  helper?: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <div className={`rounded-2xl border p-6 text-center ${variantClasses[variant]}`}>
      <div className="text-sm">{label}</div>
      <div className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{value}</div>
      {helper ? <div className="mt-1 text-xs opacity-80">{helper}</div> : null}
    </div>
  );
}