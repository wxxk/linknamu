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
      className="group flex items-center gap-3 rounded-[1.75rem] border border-white/70 bg-white/55 px-5 py-4 shadow-[0_10px_30px_-16px_rgba(89,58,37,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_16px_36px_-16px_rgba(89,58,37,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-lg">
        {icon}
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-ink">
        {label}
      </span>
      <span
        className="ml-auto -translate-x-1 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100"
        aria-hidden="true"
      >
        →
      </span>
    </a>
  );
}
