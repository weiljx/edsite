import React from 'react';
import { Hero } from '../components/marketing/Hero';
import { TeamMemberCard } from '../components/marketing/TeamMemberCard';

// TODO: Populate from https://www.1konto.com/about (names, roles, bios, and images).
// Place headshots in /public/team/<slug>.jpg and update the image paths below.
const LEADERSHIP = [
  {
    name: 'Edwin Handschuh',
    title: 'Chief Executive Officer',
    image: '/images/Edwin headshot.jpg',
    bio: 'Operator with 15+ years across financial services, investment management, and market infrastructure. Former Sales & Trading at Wells Fargo Private Client Group, co-managed $350M+ for HNWIs and institutions. BSc Finance, Drexel University. Licenses: Series 7, 66, 24.',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/ehandschuh/' }],
  },
  {
    name: 'Michael Handschuh',
    title: 'Chief Technology Officer',
    image: '/images/michael headshot.jpg',
    bio: 'Engineer with 15+ years in algorithmic trading, modeling/simulation, and distributed systems. Former Director of Engineering at QuantConnect, built with NASA JPL, Lockheed Martin, and AGI. BSc Aerospace Engineering, Florida Institute of Technology. License: Series 7.',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-handschuh-83636937/' }],
  },
  {
    name: 'Steven Stefanowicz',
    title: 'Chief Compliance Officer',
    image: '/images/steve headshot.jpg',
    bio: '20+ years in global operations spanning Compliance, Risk Management, Intelligence Analysis, and Investigations. Senior Investigator at Capital One (Risk Management), Compliance Officer at J.P. Morgan Chase (Global Financial Crimes), Risk Management & Intelligence Analysis in U.S. Navy. BSc Business Management, Univ. of Maryland; MPA, Univ. of Pennsylvania.',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/steve-stefanowicz-9152781/' }],
  },
  {
    name: 'Talha Chaudhry',
    title: 'Head of Trading',
    image: '/images/talha headshot.jpg',
    bio: '20+ years in global markets leading risk governance, quantitative trading, and desk build-outs. Chief Risk Officer at MF Global, Head of Trading & Risk (MD) at Sun Trading. MBA Finance, McGill University. Licenses: Series 7, 24, 4.',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/talhachaudhry/' }],
  },
];


const Team = () => {
  const heroRight = (
    <div className="w-full max-w-lg">
      <img 
        src="/images/team page image.png" 
        alt="Execution-first institutional settlement team" 
        className="w-full h-auto object-cover rounded-xl shadow-lg"
      />
    </div>
  );

  return (
    <>
      <Hero
        title="Execution-first team for institutional settlement"
        subtitle="Leaders from trading, compliance, and distributed systems — focused on speed, safety, and audit-ready controls."
        bullets={[
          '24/7 desk with multi-venue liquidity',
          'Audit-grade compliance and screening',
          'Security-first operations with segregated addresses',
        ]}
        cta={{ label: 'Talk to the Desk', href: '/contact' }}
        right={heroRight}
      />

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl text-gray-900">Leadership</h2>
          <p className="mt-3 text-gray-600">
            The operators accountable for your outcomes — best execution, timely settlement, and clear controls.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((m) => (
            <TeamMemberCard key={m.name} {...m} />
          ))}
        </div>
      </section>

    </>
  );
};

export default Team;