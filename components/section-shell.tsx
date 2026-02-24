import { type ReactNode } from 'react';

type SectionShellProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export function SectionShell({ id, title, subtitle, className = '', children }: SectionShellProps) {
  return (
    <section
      id={id}
      className={`soft-divider py-16 sm:py-20 ${className}`}
      aria-labelledby={title ? `${id ?? 'section'}-title` : undefined}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {title ? (
          <header className="mb-8 max-w-3xl">
            <h2
              id={`${id ?? 'section'}-title`}
              className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl"
            >
              {title}
            </h2>
            {subtitle ? <p className="muted-copy mt-4 text-base leading-relaxed">{subtitle}</p> : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
