import React from "react";
import { CheckCircle } from "lucide-react";

export default function CheckList({
  items,
  className = "",
}: {
  items: Array<string | React.ReactNode>;
  className?: string;
}) {
  return (
    <ul className={`mt-4 space-y-2 text-neutral-800 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}