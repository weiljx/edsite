import React from "react";
import { Link } from "react-router-dom";

export default function TradingStickyHeaderCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const hero = document.getElementById("trading-hero");
    const onScroll = () => {
      if (!hero) return setVisible(window.scrollY > 100);
      const rect = hero.getBoundingClientRect();
      const fullyVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      setVisible(!fullyVisible || window.innerWidth < 768 ? window.scrollY > 100 : false);
    };
    const io =
      hero &&
      new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          setVisible(!(e.isIntersecting && e.intersectionRatio > 0.9) && window.scrollY > 100);
        },
        { threshold: [0, 0.25, 0.5, 0.75, 0.9] }
      );
    if (hero && io) io.observe(hero);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hero && io) io.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed z-50 right-3 top-3 md:right-6 md:top-6">
      <Link
        to="/contact?context=trading"
        aria-label="Schedule a Call"
        className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-black text-white hover:opacity-90 shadow-lg"
        data-cta="primary"
        data-page="trading"
        data-slot="sticky"
      >
        Schedule a Call
      </Link>
    </div>
  );
}