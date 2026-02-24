import { type ReactNode } from 'react';
import { buildDemoMailtoHref } from '@/lib/mailto';

type DemoCtaButtonProps = {
  className?: string;
  children?: ReactNode;
  label?: string;
};

export function DemoCtaButton({ className = '', children, label = 'Request a demo' }: DemoCtaButtonProps) {
  return (
    <a
      href={buildDemoMailtoHref()}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-100 backdrop-blur-sm transition-all duration-200 hover:border-emerald-200/55 hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a0f] ${className}`}
      aria-label={label}
    >
      <span>{label}</span>
      {children}
    </a>
  );
}
