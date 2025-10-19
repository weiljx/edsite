import React from 'react';
import { Link } from 'react-router-dom';
import { ResourceCard } from '../components/marketing/ResourceCard';
import { Hero } from '../components/marketing/Hero';

const Resources = () => {
  return (
    <>
      <Hero
        title="Resources for builders and buyers"
        subtitle="Guides, docs, and research already available on our site. Browse product overviews, integration paths, calculators, and API docs."
        bullets={[
          'Product overviews and institution pages',
          'Quick links to calculators and integration paths',
          'API docs and research updates',
        ]}
        cta={{ label: 'View API Docs', href: 'https://docs.1konto.com/1konto-v1.0-api-docs/' }}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* API & Engineering */}
          <ResourceCard
            title="API Docs"
            description="Reference and quickstarts for quoting, execution, and settlement."
            href="https://docs.1konto.com/1konto-v1.0-api-docs/"
            external
            tags={['API', 'Engineering']}
          />
          <ResourceCard
            title="Integration paths (PSPs)"
            description="See Chat → Web → API options and a tiny RFQ example."
            href="/psps"
            tags={['PSPs', 'Integration']}
          />
          <ResourceCard
            title="1KPrime Flow"
            description="Move money across borders in minutes with automated treasury workflows."
            href="/flow"
            tags={['Product', 'Settlement', 'FX']}
          />

          {/* Products & Use Cases */}
          <ResourceCard
            title="1KPrime Trading"
            description="Execute block trades with zero slippage and sub-hour settlement."
            href="/trading"
            tags={['Product', 'Liquidity']}
          />
          <ResourceCard
            title="Bitcoin-Backed Lending"
            description="Up to 70% LTV on BTC with same-day funding and proactive margin alerts."
            href="/lending"
            tags={['Product', 'Credit']}
          />
          <ResourceCard
            title="Corporate FX Platforms"
            description="Partner overview for platforms powering corporate FX."
            href="/corporate-fx-platforms"
            tags={['Partners', 'FX']}
          />

          {/* Institutions */}
          <ResourceCard
            title="Payment Service Providers"
            description="Sub-hour settlement to your designated accounts; you control disbursements."
            href="/psps"
            tags={['Institutions', 'PSPs']}
          />
          <ResourceCard
            title="Corporate Treasuries"
            description="Working-capital sweeps, payroll/AP, and intercompany funding in minutes."
            href="/corporate-treasuries"
            tags={['Institutions', 'Treasury']}
          />
          <ResourceCard
            title="Asset Managers"
            description="Subscriptions/redemptions, NAV hedging, and rebalances with deep liquidity."
            href="/asset-managers"
            tags={['Institutions', 'Funds']}
          />
          <ResourceCard
            title="Banks"
            description="On-demand major-fiat liquidity, sub-hour settlement, and built-in screening."
            href="/banks"
            tags={['Institutions', 'Banks']}
          />

          {/* Calculators & Updates */}
          <ResourceCard
            title="Calculators"
            description="Estimate fees, timing, and savings for Flow, PSP, Treasury, and Lending."
            href="/flow"
            tags={['Tools']}
          />
          <ResourceCard
            title="1Konto on Substack"
            description="Research notes and product updates from the team."
            href="https://1konto.substack.com/"
            external
            tags={['Research', 'Updates']}
          />
          <ResourceCard
            title="Support Portal"
            description="Get help with your account, technical issues, or general questions."
            href="https://1konto.atlassian.net/servicedesk/customer/portal/1"
            external
            tags={['Support', 'Help']}
          />
          <ResourceCard
            title="Privacy Policy"
            description="Read our comprehensive privacy policy and data protection practices."
            href="/privacy"
            tags={['Legal', 'Privacy']}
          />
          <ResourceCard
            title="Terms of Service"
            description="Review our terms and conditions for using 1KPrime services."
            href="/terms-of-service"
            tags={['Legal', 'Terms']}
          />
          <ResourceCard
            title="Bitcoin Whitepaper"
            description="The original Bitcoin whitepaper by Satoshi Nakamoto."
            href="https://cdn.prod.website-files.com/637ce8f8c38209fd43bbd140/63adfed48ce5f0a983b05966_bitcoinWhitepaper.pdf"
            external
            tags={['Research', 'Bitcoin']}
          />
        </div>

      </section>
    </>
  );
};

export default Resources;