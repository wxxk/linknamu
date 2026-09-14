import type { ReactNode } from "react";
import { LinkCard } from "./LinkCard";

type LinkItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export function LinkCardList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="relative flex flex-col gap-7">
      <div
        className="absolute left-[14px] top-3 bottom-3 w-px bg-accent-soft"
        aria-hidden="true"
      />
      {links.map((link) => (
        <li key={link.label} className="relative pl-9">
          <span
            className="absolute left-[10px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-accent ring-4 ring-bg"
            aria-hidden="true"
          />
          <LinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}
