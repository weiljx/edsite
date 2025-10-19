import React, { useState, useMemo, useEffect } from 'react';

/**
 * LTVCalculator
 * Interactive widget for the Lending page
 *
 * Features
 * - User inputs: BTC collateral amount, current BTC price
 * - Slider: select target LTV (50 – 75 %)
 * - Outputs: max loan size, margin-call price (80 % LTV), liquidation price (88 % LTV)
 */
export default function LTVCalculator() {
  const [btcPrice, setBtcPrice] = useState<number | null>(null);
  const [btcAmount, setBtcAmount] = useState(10);
  const [ltv, setLtv] = useState(70); // %

  // Fetch BTC price every 30 s from CoinGecko (unauthenticated)
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
        )
        const json = await res.json()
        if (json?.bitcoin?.usd) {
          setBtcPrice(json.bitcoin.usd)
        }
      } catch (e) {
        console.error('BTC price fetch failed', e)
      }
    }
    fetchPrice()
    const id = setInterval(fetchPrice, 30000)
    return () => clearInterval(id)
  }, [])

  const collateralUSD = useMemo(
    () => (btcPrice || 0) * btcAmount,
    [btcPrice, btcAmount]
  );

  const maxLoan = useMemo(
    () => (collateralUSD * ltv) / 100,
    [collateralUSD, ltv]
  );

  const marginCallPrice = useMemo(
    () => maxLoan / (btcAmount * 0.8),
    [maxLoan, btcAmount]
  );

  const liquidationPrice = useMemo(
    () => maxLoan / (btcAmount * 0.88),
    [maxLoan, btcAmount]
  );

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Bitcoin Loan Calculator
        </h3>
        <p className="text-gray-600">
          Calculate your loan amount and risk thresholds
        </p>
      </div>

      <div className="space-y-10">
        {/* Input row */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="btcAmount" className="block text-sm font-medium text-gray-700">
              Collateral BTC
            </label>
            <input
              id="btcAmount"
              type="number"
              min={0.01}
              step={0.01}
              value={btcAmount}
              onChange={(e) => setBtcAmount(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 text-lg"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              BTC Price (USD)
            </label>
            <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-lg flex items-center">
              {btcPrice ? `$${btcPrice.toLocaleString()}` : '—'}
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Target LTV (%)
            </label>
            <div className="px-2">
              <input
                type="range"
                min={50}
                max={75}
                step={1}
                value={ltv}
                onChange={(e) => setLtv(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #10b981 0%, #10b981 ${((ltv - 50) / 25) * 100}%, #e5e7eb ${((ltv - 50) / 25) * 100}%, #e5e7eb 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50%</span>
                <span className="font-semibold text-green-600">{ltv}%</span>
                <span>75%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Collateral Value Display */}
        <div className="text-center py-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Total Collateral Value</p>
          <p className="text-3xl font-bold text-gray-900">
            ${collateralUSD.toLocaleString()}
          </p>
        </div>

        {/* Output row */}
        <div className="grid md:grid-cols-3 gap-6">
          <Metric 
            title="Max Loan (USD)" 
            value={`$${maxLoan.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            color="green"
          />
          <Metric 
            title="Margin-call Price" 
            value={`$${marginCallPrice.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
            color="yellow"
          />
          <Metric 
            title="Liquidation Price" 
            value={`$${liquidationPrice.toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
            color="red"
          />
        </div>

        {/* Risk Explanation */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-3">How it works:</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-blue-800">
            <div>
              <strong>Margin Call (80% LTV):</strong> We'll contact you to add collateral or reduce loan balance
            </div>
            <div>
              <strong>Liquidation (88% LTV):</strong> Automatic liquidation to protect both parties
            </div>
            <div>
              <strong>No Forced Sales:</strong> We work with you proactively to avoid liquidation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface MetricProps {
  title: string;
  value: string | number;
  color: 'green' | 'yellow' | 'red';
}

function Metric({ title, value, color }: MetricProps) {
  const colorClasses = {
    green: 'bg-green-50 border-green-200',
    yellow: 'bg-yellow-50 border-yellow-200',
    red: 'bg-red-50 border-red-200'
  };

  const textColorClasses = {
    green: 'text-green-900',
    yellow: 'text-yellow-900',
    red: 'text-red-900'
  };

  return (
    <div className={`rounded-xl border-2 p-6 text-center shadow-sm ${colorClasses[color]}`}>
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className={`text-2xl font-bold ${textColorClasses[color]}`}>{value}</p>
    </div>
  );
}