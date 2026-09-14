"use client";

import { useEffect, useState, type ReactNode } from "react";
import { LinkCard } from "./LinkCard";

type LinkItem = {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
};

export function LinkCardList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => setCounts(data))
      .catch(() => {});
  }, []);

  function handleCardClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch(() => {});
  }

  return (
    <ul className="relative flex list-none flex-col gap-5">
      <div
        className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-accent-soft via-accent-soft to-transparent"
        aria-hidden="true"
      />
      {links.map((link) => (
        <li key={link.id} className="relative pl-10">
          <span
            className="absolute left-4 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-[3px] ring-cream"
            aria-hidden="true"
          />
          <LinkCard
            label={link.label}
            href={link.href}
            icon={link.icon}
            count={counts[link.id] ?? 0}
            onClick={() => handleCardClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
