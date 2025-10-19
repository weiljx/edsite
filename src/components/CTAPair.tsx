import React from "react";
import { ArrowRight } from "lucide-react";

type BaseProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel?: string;
  slot: "hero" | "sticky" | "mid" | "pre-compare" | "final";
  children: React.ReactNode;
};

const baseBtn =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all hover:scale-105";
const primaryBtn = `${baseBtn} bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500`;
const secondaryBtn = `${baseBtn} border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500`;

function Primary({ href = "/contact?context=trading", onClick, ariaLabel, slot, children }: BaseProps) {
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
      aria-label={ariaLabel || "Talk to Trading Desk"}
      className={primaryBtn}
      data-cta="primary"
      data-page="trading"
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
      className={secondaryBtn}
      data-cta="secondary"
      data-page="trading"
      data-slot={slot}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
}

export default function CTAPair({ slot }: { slot: BaseProps["slot"] }) {
  return (
    <div className="mt-8 flex gap-4 flex-wrap" role="group" aria-label="Trading page calls to action">
      <Primary slot={slot}>Talk to Trading Desk</Primary>
      <Secondary slot={slot}>Request Demo</Secondary>
    </div>
  );
}

CTAPair.Primary = Primary;
CTAPair.Secondary = Secondary;