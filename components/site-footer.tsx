import { DemoCtaButton } from '@/components/demo-cta-button';

export function SiteFooter() {
  return (
    <footer className="soft-divider bg-[#03070b]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="card-surface flex flex-col items-start justify-between gap-5 px-6 py-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-100">CIRCAI LTD</p>
            <p className="mt-1 text-sm text-slate-300">Lifecycle intelligence for circular enterprise operations.</p>
          </div>
          <DemoCtaButton />
        </div>
        <div className="text-sm text-slate-400">© 2026 CIRCAI LTD. All rights reserved.</div>
      </div>
    </footer>
  );
}
