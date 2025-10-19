import * as React from 'react'

export function CorridorCoverage({
  currencies = [],
  rails = [],
  className,
}: {
  currencies?: string[]
  rails?: string[]
  className?: string
}) {
  return (
    <section className={['border-y bg-gray-50 py-4', className].filter(Boolean).join(' ')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          {currencies.map((c) => (
            <span
              key={c}
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm"
              title={`Supported: ${c}`}
            >
              {c}
            </span>
          ))}
        </div>
        {rails.length ? (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            {rails.map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1.5 text-xs text-gray-600"
                title={r}
              >
                {r}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}