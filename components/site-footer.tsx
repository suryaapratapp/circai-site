import { EmailIcon, LinkedinIcon } from '@/components/icons';

export function SiteFooter() {
  return (
    <footer className="soft-divider bg-[#03070b]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="card-surface flex flex-col items-start justify-between gap-5 px-6 py-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-100">CIRCAI LTD</p>
            <p className="mt-1 text-sm text-slate-300">Lifecycle intelligence for circular enterprise operations.</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/circai/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-black/20 text-slate-200 transition-colors hover:border-emerald-300/35 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a0f]"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@circai.co.uk"
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-black/20 text-slate-200 transition-colors hover:border-emerald-300/35 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a0f]"
            >
              <EmailIcon className="h-4 w-4" />
            </a>
            <p className="text-sm text-slate-300">Company number 16736692</p>
          </div>
        </div>
        <div className="text-sm text-slate-400">© 2026 CIRCAI LTD. All rights reserved.</div>
      </div>
    </footer>
  );
}
