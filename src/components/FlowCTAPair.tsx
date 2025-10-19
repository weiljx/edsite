import React from "react";
import { PRIMARY_BTN, SECONDARY_BTN } from "./ctas/ctaClasses";
import { ArrowRight } from "lucide-react";

type BaseProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  slot: "hero" | "sticky" | "mid" | "pre-compare" | "final";
  children: React.ReactNode;
};

const primaryClass = (slot: BaseProps["slot"]) => 
  slot === "final" ? PRIMARY_BTN.replace("bg-indigo-600", "bg-white text-indigo-700 hover:bg-gray-100") : PRIMARY_BTN;

const secondaryClass = (slot: BaseProps["slot"]) =>
  slot === "final" ? "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold border border-white text-white bg-transparent hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40 transition-all" : SECONDARY_BTN;

function Primary({ href = "/contact?context=flow", onClick, ariaLabel, slot, children }: BaseProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    // In a real app, you'd handle navigation here
    console.log(`Navigate to: ${href}`);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel || "Schedule a Call"}
      className={primaryClass(slot)}
      data-cta="primary"
      data-page="flow"
      data-slot={slot}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
}

function Secondary({ href = "#request-demo", onClick, ariaLabel, slot, children }: BaseProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    // In a real app, you'd handle navigation here
    console.log(`Navigate to: ${href}`);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel || "Request Demo"}
      className={secondaryClass(slot)}
      data-cta="secondary"
      data-page="flow"
      data-slot={slot}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
}

export default function FlowCTAPair({ slot }: { slot: BaseProps["slot"] }) {
  // Add symmetric vertical spacing when used between sections (e.g., under Pain cards)
  const spacingClass = slot === "mid" ? "my-16 md:my-20" : "mt-8";
  return (
    <div
      className={`${spacingClass} w-full flex flex-wrap items-center justify-center gap-3 text-center`}
      role="group"
      aria-label="Flow page calls to action"
    >
      <Primary slot={slot}>Schedule a Call</Primary>
      <Secondary slot={slot}>Request Demo</Secondary>
    </div>
  );
}

FlowCTAPair.Primary = Primary;
FlowCTAPair.Secondary = Secondary;