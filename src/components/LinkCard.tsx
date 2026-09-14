import type { ReactNode } from "react";

type LinkCardProps = {
  label: string;
  href: string;
  icon: ReactNode;
};

export function LinkCard({ label, href, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-surface px-4 py-3.5 shadow-sm transition-shadow motion-safe:transition-transform hover:shadow-md hover:border-accent/30 motion-safe:hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
        <span className="h-5 w-5">{icon}</span>
      </span>
      <span className="text-sm font-medium text-ink">{label}</span>
      <span
        className="ml-auto text-muted opacity-0 -translate-x-0.5 transition motion-safe:group-hover:translate-x-0 group-hover:opacity-100"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  );
}
