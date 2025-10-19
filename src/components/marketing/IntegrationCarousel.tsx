'use client'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, Globe, Code, ArrowLeft, ArrowRight } from 'lucide-react'

type Slide = {
  title: string
  desc: string
  icon: React.ReactNode
  cta?: { label: string; href: string }
  code?: string
}

const SLIDES: Slide[] = [
  {
    title: 'Chat-to-Desk',
    desc: 'Fastest path for ops teams to get firm quotes and settle.',
    icon: <MessageSquare className="h-6 w-6" />,
  },
  {
    title: 'Web',
    desc: 'Operate funding and conversions from a secure dashboard.',
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: 'API',
    desc: 'Programmatic RFQ, execution, and reconciliation.',
    icon: <Code className="h-6 w-6" />,
    cta: { label: 'View API Docs', href: 'https://docs.1konto.com/1konto-v1.0-api-docs/' },
    code: `POST /rfq
{ "side":"sell", "asset":"USDC", "currency":"MXN", "amount":250000 }`,
  },
]

export function IntegrationCarousel() {
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const [index, setIndex] = React.useState(0)

  const scrollTo = (i: number) => {
    const el = trackRef.current
    if (!el) return
    const cards = Array.from(el.children) as HTMLElement[]
    const clamped = Math.max(0, Math.min(i, cards.length - 1))
    setIndex(clamped)
    cards[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }
  const prev = () => scrollTo(index - 1)
  const next = () => scrollTo(index + 1)

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl text-gray-900">How you integrate</h2>
          <p className="mt-3 text-gray-600">Start fast and scale as you go.</p>
        </div>

        <div className="relative mt-8">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div
              ref={trackRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-1"
              style={{ scrollBehavior: 'smooth' }}
            >
              {SLIDES.map((s) => (
                <article key={s.title} className="snap-start" style={{ minWidth: 'min(360px, 92vw)' }}>
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                      {s.icon}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">{s.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                    {s.code ? (
                      <pre className="mt-4 overflow-x-auto rounded-xl bg-gray-100 p-3 text-xs text-gray-800">{s.code}</pre>
                    ) : null}
                    {s.cta ? (
                      <a
                        href={s.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-medium text-purple-600 underline underline-offset-4 hover:text-purple-700"
                      >
                        {s.cta.label}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              aria-label="Next"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-purple-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}