import type { ReactNode } from "react";
import { LinkCard } from "./LinkCard";

type LinkItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export function LinkCardList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="relative flex list-none flex-col gap-5">
      <div
        className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-accent-soft via-accent-soft to-transparent"
        aria-hidden="true"
      />
      {links.map((link) => (
        <li key={link.label} className="relative pl-10">
          <span
            className="absolute left-4 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-[3px] ring-cream"
            aria-hidden="true"
          />
          <LinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}
