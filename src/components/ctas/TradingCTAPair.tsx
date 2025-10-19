import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY_BTN, SECONDARY_BTN } from "./ctaClasses";

type Slot = "hero" | "sticky" | "mid" | "pre-compare" | "final";

type BaseProps = {
  href?: string;
  ariaLabel?: string;
  slot: Slot;
  children: React.ReactNode;
};

const primaryClass = () => PRIMARY_BTN;
const secondaryClass = (slot: Slot) =>
  slot === "final" ? SECONDARY_BTN.replace("border-neutral-300 text-neutral-900", "border-white text-white hover:bg-white/10") : SECONDARY_BTN;

function Primary({ href = "/contact?context=trading", ariaLabel, slot, children }: BaseProps) {
  return (
    <Link
      to={href}
      aria-label={ariaLabel || "Talk with the Desk"}
      className={primaryClass(slot)}
      data-cta="primary"
      data-page="trading"
      data-slot={slot}
    >
      {children}
    </Link>
  );
}

function Secondary({ href = "#request-demo", ariaLabel, slot, children }: BaseProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel || "Request Demo"}
      className={secondaryClass(slot)}
      data-cta="secondary"
      data-page="trading"
      data-slot={slot}
    >
      {children}
    </a>
  );
}

export default function TradingCTAPair({ slot }: { slot: Slot }) {
  const spacingClass = slot === "mid" ? "my-16 md:my-20" : "mt-8";
  return (
    <div
      className={`${spacingClass} w-full flex flex-wrap items-center justify-center gap-3 text-center`}
      role="group"
      aria-label="Trading page calls to action"
    >
      <Primary slot={slot}>Talk with the Desk</Primary>
      <Secondary slot={slot}>Request Demo</Secondary>
    </div>
  );
}

TradingCTAPair.Primary = Primary;
TradingCTAPair.Secondary = Secondary;