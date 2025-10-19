import React from "react";
import { ArrowRight } from "lucide-react";

export default function FlowStickyHeaderCTA() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const hero = document.getElementById("flow-hero");
    const onScroll = () => {
      if (!hero) {
        setVisible(window.scrollY > 100);
        return;
      }
      const rect = hero.getBoundingClientRect();
      // Show when hero is not fully visible on desktop; always show on mobile once triggered
      const fullyVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      setVisible(!(fullyVisible) || window.innerWidth < 768 ? window.scrollY > 100 : false);
    };

    const io = hero
      ? new IntersectionObserver(
          (entries) => {
            const e = entries[0];
            setVisible(!(e.isIntersecting && e.intersectionRatio > 0.9) && window.scrollY > 100);
          },
          { threshold: [0, 0.25, 0.5, 0.75, 0.9] }
        )
      : null;

    if (hero && io) io.observe(hero);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hero && io) io.disconnect();
    };
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    console.log("Navigate to: /contact?context=flow");
  };

  return (
    <div className="fixed z-50 right-4 top-4 md:right-6 md:top-6">
      <button
        onClick={handleClick}
        aria-label="Schedule a Call"
        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg transition-all hover:scale-105"
        data-cta="primary"
        data-page="flow"
        data-slot="sticky"
      >
        Schedule a Call
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
}