import React from 'react';
import { Hero } from '../components/marketing/Hero';

const Institutions = () => {
  return (
    <div>
      <Hero
        title="Institutions we serve"
        subtitle="From global PSPs to banks, we power real-time, capital-efficient settlement and liquidity with compliance at the core."
        bullets={[
          'Minutes-level fiat and stablecoin settlement',
          'Automated treasury workflows',
          'Institutional-grade compliance and controls',
        ]}
        cta={{ label: 'Schedule a Call', href: '/contact' }}
        chips={['PSPs', 'Marketplaces', 'Asset managers', 'Corporate treasuries', 'Banks']}
      />
    </div>
  );
};

export default Institutions;