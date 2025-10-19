'use client'
import * as React from 'react'
import { Coins, Repeat, ArrowLeftRight, ReceiptCent as ReceiptPercent, ArrowLeft, ArrowRight } from 'lucide-react'

type UseCase = {
  title: string
  description: string
  icon: React.ReactNode
}

const USE_CASES: UseCase[] = [
  {
    title: 'Treasury liquidity',
    description: 'Unlock operating capital while holding BTC on balance sheet.',
    icon: <Coins className="h-6 w-6" />,
  },
  {
    title: 'Market-making inventory',
    description: 'Finance working inventory to scale quotes without selling core holdings.',
    icon: <Repeat className="h-6 w-6" />,
  },
  {
    title: 'Bridge against BTC holdings',
    description: 'Short-term financing for settlements, vendor payments, and payroll.',
    icon: <ArrowLeftRight className="h-6 w-6" />,
  },
  {
    title: 'Tax-efficient liquidity',
    description: 'Access cash without triggering a taxable BTC disposition event.',
    icon: <ReceiptPercent className="h-6 w-6" />,
  },
]

export function UseCasesCarousel() {
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
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl text-gray-900">Use cases</h2>
          <p className="mt-3 text-gray-600 md:text-lg">Where Bitcoin-backed credit shines.</p>
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
              {USE_CASES.map((c, i) => (
                <article
                  key={c.title}
                  className="snap-start"
                  style={{ minWidth: 'min(360px, 92vw)' }}
                >
                  <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      {c.icon}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900">{c.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{c.description}</p>
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
            {USE_CASES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-green-600' : 'bg-gray-300'}`}
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