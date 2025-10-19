import React from 'react';
import { Link } from 'react-router-dom';

export function ResourceCard({
  title,
  description,
  href,
  external = false,
  tags = [],
}: {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  tags?: string[];
}) {
  const content = (
    <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      {tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full border border-gray-300 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">
              {t}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-4 text-sm font-medium text-indigo-600 underline underline-offset-4">Read →</div>
    </div>
  );

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
      {content}
    </a>
  ) : (
    <Link to={href} className="block h-full">
      {content}
    </Link>
  );
}