'use client';

import { useEffect, useRef, useState } from 'react';
import { ClipboardCheck, Gauge, PackageSearch, ShieldAlert } from 'lucide-react';
import { DemoCtaButton } from '@/components/demo-cta-button';

const RESULTS = [
  { text: 'Loss of visibility', icon: PackageSearch },
  { text: 'Compliance risk', icon: ShieldAlert },
  { text: 'Underutilised inventory', icon: Gauge },
  { text: 'Unverified sustainability claims', icon: ClipboardCheck },
] as const;

export function PhysicalAssetsVisibilitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.22 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-5xl">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
        <span className="relative inline-block">
          Physical Assets
          <span
            aria-hidden="true"
            className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-gradient-to-r from-emerald-300/70 to-cyan-300/65 transition-transform duration-700 motion-reduce:transition-none ${
              entered ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
        </span>{' '}
        Should Not Be Invisible
      </h2>

      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
        <p>
          Across regulated environments, assets move constantly — through storage, use, cleaning, maintenance, and
          redeployment.
        </p>
        <p>
          Yet most organisations still rely on fragmented systems, spreadsheets, or manual processes to manage
          lifecycle control.
        </p>
      </div>

      <p className="mt-5 text-sm font-medium text-slate-200 sm:text-base">The result:</p>

      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {RESULTS.map((item, index) => {
          const Icon = item.icon;

          return (
            <li
              key={item.text}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`card-surface flex items-center gap-3 px-4 py-3 text-sm text-slate-200 transition-all duration-700 motion-reduce:transition-none ${
                entered ? 'translate-y-0 opacity-100' : 'translate-y-1.5 opacity-0'
              }`}
            >
              <Icon className="h-4 w-4 shrink-0 text-emerald-200/85" aria-hidden="true" />
              <span>{item.text}</span>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
        CIRCAI replaces operational blind spots with structured,{' '}
        <span className="relative inline-block">
          real-time intelligence
          <span
            aria-hidden="true"
            className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-gradient-to-r from-cyan-300/70 to-emerald-300/65 transition-transform duration-700 motion-reduce:transition-none ${
              entered ? 'scale-x-100' : 'scale-x-0'
            }`}
            style={{ transitionDelay: '420ms' }}
          />
        </span>
        .
      </p>

      <section className="card-surface mt-8 border border-emerald-300/20 bg-emerald-500/14 px-6 py-10 sm:px-10 sm:py-12">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
          Ready to evolve your product lifecycle?
        </h3>
        <p className="mt-4 max-w-3xl text-base text-slate-200">
          Join forward-thinking organisations building a transparent, efficient, and circular future with CIRCAI.
        </p>
        <DemoCtaButton className="mt-8" label="Enquire Now" />
      </section>
    </div>
  );
}
