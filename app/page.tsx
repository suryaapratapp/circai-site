import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AIAgentsSection } from '@/components/ai-agents-section';
import { PhysicalAssetsVisibilitySection } from '@/components/home/physical-assets-visibility-section';
import { LazyParticleBackground } from '@/components/lazy-particle-background';
import { SectionShell } from '@/components/section-shell';
import { SystemFlow } from '@/components/system-flow';

const ENQUIRE_SUBJECT = 'CIRCAI – Enquiry';

const ENQUIRE_BODY = `Hello CIRCAI Team,

I would like to enquire about CIRCAI's lifecycle intelligence platform.

Organisation:
Industry:
Assets or products:
Sites / locations:
Deployment preference (cloud / private / hybrid):

Best regards,`;

const ENQUIRE_HREF = `mailto:info@circai.co.uk?subject=${encodeURIComponent(ENQUIRE_SUBJECT)}&body=${encodeURIComponent(ENQUIRE_BODY)}`;

const INDUSTRIES = [
  'Healthcare',
  'Manufacturing',
  'Construction',
  'Logistics',
  'Luxury Assets',
  'Chemical Tracking',
  'Retail',
  'Circular Economy Operators',
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <LazyParticleBackground />
        <div className="mx-auto w-full max-w-7xl bg-[radial-gradient(circle_at_26%_22%,rgba(16,185,129,0.13),transparent_44%)] px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-5xl">
            <div className="relative max-w-4xl">
              <span className="absolute -left-4 top-2 hidden h-20 w-px bg-emerald-300/45 sm:block" />
              <p className="subtle-chip mb-3 inline-flex">Operationalising the Circular Economy</p>
              <h1 className="max-w-[44rem] text-4xl font-semibold leading-[1.08] tracking-tight text-slate-100 md:text-[2.45rem]">
                Intelligent software for tracking
                <br className="hidden md:block" />
                <span className="md:whitespace-nowrap"> products across their entire lifecycle.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
                CIRCAI provides the auditability, traceability, and intelligence needed to transition from
                linear waste to circular value. Build resilient, efficient, and compliant operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={ENQUIRE_HREF}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/35 bg-emerald-500/15 px-6 py-3 text-sm font-semibold text-emerald-100 backdrop-blur-sm transition-all duration-200 hover:border-emerald-200/55 hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a0f]"
                  aria-label="Enquire Now"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/20 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-emerald-300/35 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050a0f]"
                >
                  Explore our Products
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-8">
            <SystemFlow />
          </div>
        </div>
      </section>

      <AIAgentsSection />

      <SectionShell
        id="circular-economy"
        title="Circular Economy by Design"
        subtitle='We provide the framework for organisations to move from "Use & Dispose" to "Track, Reuse, Repair, and Regenerate."'
      >
        <div className="grid gap-5 md:grid-cols-3">
          <article className="card-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200">01</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-100">Traceability & Audit</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Every product is assigned a digital passport. You know exactly where it is, what condition it&apos;s in,
              and who has touched it.
            </p>
          </article>
          <article className="card-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200">02</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-100">Lifecycle Extension</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Automated maintenance alerts and repair tracking ensure products stay in use longer, reducing the
              need for new raw materials.
            </p>
          </article>
          <article className="card-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-200">03</p>
            <h3 className="mt-3 text-lg font-semibold text-slate-100">Closed-Loop Metrics</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Generate compliance-ready reports on environmental savings, carbon offset, and circularity indexes
              for stakeholders.
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell>
        <article className="card-surface border border-emerald-300/18 bg-emerald-500/10 p-8 sm:p-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Ready for the Digital Product Passport (DPP)?
          </h2>
          <div className="mt-4 max-w-4xl space-y-3 text-base leading-relaxed text-slate-300">
            <p>
              CIRCAI is designed to generate product-level lifecycle evidence from the moment an item enters service
              to end-of-life — captured through structured events and persistent identifiers.
            </p>
            <p>
              Be ready to provide verifiable data for audits, sustainability disclosures, and emerging DPP
              requirements, without rebuilding your operations later.
            </p>
            <p>Move beyond checkbox compliance and create a competitive advantage through trusted traceability.</p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card-surface px-4 py-4 text-center">
              <p className="text-2xl font-semibold text-emerald-200">100%</p>
              <p className="text-sm text-slate-300">Audit Ready</p>
            </div>
            <div className="card-surface px-4 py-4 text-center">
              <p className="text-2xl font-semibold text-emerald-200">Real-time</p>
              <p className="text-sm text-slate-300">Impact Tracking</p>
            </div>
          </div>
        </article>
      </SectionShell>

      <SectionShell id="industries" title="Industries Served">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <li key={industry} className="card-surface group relative overflow-hidden px-4 py-3 text-sm font-medium text-slate-200">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(45,212,191,0.16),transparent_38%)] opacity-55 motion-safe:animate-[pulse_8s_ease-in-out_infinite] motion-reduce:animate-none"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/35 to-transparent"
              />
              <span className="relative">{industry}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-slate-300 sm:text-base">Where compliance, visibility, and performance intersect.</p>
      </SectionShell>

      <SectionShell>
        <PhysicalAssetsVisibilitySection />
      </SectionShell>
    </>
  );
}
