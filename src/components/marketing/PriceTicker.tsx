import React, { useState, useEffect } from 'react';

type TickerItem = {
  key: string;
  symbol: string;
  price: number;
  changePct: number;
};

type PriceTickerProps = {
  cryptos?: string[] | 'top20';
  fiats?: string[];
  base?: string;
  refreshMs?: number;
};

function formatNumber(n: number) {
  const abs = Math.abs(n);
  if (abs >= 1000) return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n);
  if (abs >= 100) return n.toFixed(2);
  if (abs >= 1) return n.toFixed(3);
  if (abs >= 0.1) return n.toFixed(4);
  if (abs >= 0.01) return n.toFixed(5);
  return n.toFixed(6);
}

export function PriceTicker({
  cryptos = ['bitcoin', 'tether', 'usd-coin'],
  fiats = ['EUR','GBP','JPY','AUD','CAD','CHF','CNY','HKD','SGD','MXN'],
  base = 'USD',
  refreshMs = 60_000,
}: PriceTickerProps) {
  const [items, setItems] = useState<TickerItem[]>([]);

  useEffect(() => {
    let alive = true;

    const ymd = (d: Date) =>
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

    async function fetchCrypto(): Promise<TickerItem[]> {
      try {
        // Fetch only BTC, USDT, USDC specifically
        const cryptoIds = Array.isArray(cryptos) ? cryptos : ['bitcoin', 'tether', 'usd-coin'];
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptoIds.join(',')}&price_change_percentage=24h`;
        const r = await fetch(url);
        const data = await r.json();
        return (data || []).map((c: any) => ({
          key: `CRYPTO:${String(c.symbol || '').toUpperCase()}`,
          symbol: String(c.symbol || '').toUpperCase(),
          price: Number(c.current_price ?? 0),
          changePct: Number(c.price_change_percentage_24h ?? 0),
        }));
      } catch {
        return [];
      }
    }

    async function fetchFx(): Promise<TickerItem[]> {
      try {
        const today = new Date();
        const y = new Date(today);
        y.setDate(today.getDate() - 1);
        const fiatsNoBase = fiats.filter((s) => s !== base);
        const symbolsParam = encodeURIComponent(fiatsNoBase.join(','));
        // Fetch latest and prior-day rates (more reliable than fluctuation endpoint in some environments)
        const [latestRes, priorRes] = await Promise.all([
          fetch(`https://api.exchangerate.host/latest?base=${encodeURIComponent(base)}&symbols=${symbolsParam}`, {
            cache: 'no-store',
          }),
          fetch(`https://api.exchangerate.host/${ymd(y)}?base=${encodeURIComponent(base)}&symbols=${symbolsParam}`, {
            cache: 'no-store',
          }),
        ]);
        const latest = await latestRes.json();
        const prior = await priorRes.json();
        const latestRates = latest?.rates || {};
        const priorRates = prior?.rates || {};
        const out: TickerItem[] = [];
        if (fiats.includes(base)) {
          out.push({ key: `FX:${base}`, symbol: base, price: 1, changePct: 0 });
        }
        for (const s of fiatsNoBase) {
          const endRate = Number(latestRates[s]);
          const startRate = Number(priorRates[s]);
          if (!isFinite(endRate) || !isFinite(startRate) || startRate === 0) continue;
          const changePct = ((endRate - startRate) / startRate) * 100;
          out.push({
            key: `FX:${base}/${s}`,
            symbol: `${base}/${s}`,
            price: endRate,
            changePct,
          });
        }
        return out;
      } catch {
        return [];
      }
    }

    async function load() {
      const [crypto, fx] = await Promise.all([fetchCrypto(), fetchFx()]);
      if (alive) setItems([...crypto, ...fx]);
    }

    load();
    const id = setInterval(load, refreshMs);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [cryptos, fiats, base, refreshMs]);

  if (!items.length) {
    return (
      <section className="border-y bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">Loading prices…</div>
      </section>
    );
  }

  return (
    <section className="border-y bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="marquee whitespace-nowrap">
          <div className="inline-flex gap-8 pr-8">
            {items.map((it) => (
              <span key={it.key} className="inline-flex items-center gap-2 text-sm">
                <span className="font-medium">{it.symbol}</span>
                <span
                  className={`tabular-nums ${it.changePct >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}
                  title={`${it.changePct.toFixed(2)}%`}
                >
                  {formatNumber(it.price)}
                </span>
              </span>
            ))}
          </div>
          {/* duplicate for seamless loop */}
          <div className="inline-flex gap-8 pr-8">
            {items.map((it, i) => (
              <span key={`${it.key}-dup-${i}`} className="inline-flex items-center gap-2 text-sm">
                <span className="font-medium">{it.symbol}</span>
                <span className={`${it.changePct >= 0 ? 'text-emerald-600' : 'text-rose-600'} tabular-nums`}>
                  {formatNumber(it.price)}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee {
          display: inline-block;
          min-width: 200%;
          animation: marquee 40s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}