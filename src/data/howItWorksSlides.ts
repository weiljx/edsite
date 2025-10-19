import DashboardImg from '/images/1kprime-flow-dashboard.png';
import ApiImg from '/images/1kprime-api.png';
import OtcImg from '/images/1kprime-otc.png';

const slides = [
  {
    title: 'Live KPIs',
    subtitle:
      'Monitor volumes, trading partners, and average settlement time in real time across every funding rail and currency pair you use.',
    alt: '1KPrime Flow dashboard displaying KPIs, recent transactions, and FX highlights',
    image: DashboardImg,
  },
  {
    title: 'Unified API',
    subtitle:
      'One integration surfaces quotes, executes trades, and returns cleared settlement instructions with sub-second latency.',
    alt: 'REST RFQ request and JSON response showing buy/sell legs and settlement details',
    image: ApiImg,
  },
  {
    title: 'Trade any-size',
    subtitle:
      'Move eight-figure tickets through chat, web console, or fully programmatic API, supported around the clock with instant post-trade reporting.',
    alt: 'OTC chat mock-up confirming a 10 M USDT-to-EUR swap',
    image: OtcImg,
  },
];

export default slides;