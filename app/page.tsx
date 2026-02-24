import { ArrowRight, Globe2, ShieldCheck } from 'lucide-react';
import { AIAgentsSection } from '@/components/ai-agents-section';
import { DemoCtaButton } from '@/components/demo-cta-button';
import { LazyParticleBackground } from '@/components/lazy-particle-background';
import { SectionShell } from '@/components/section-shell';
import { SystemFlow } from '@/components/system-flow';

const INDUSTRIES = [
  'Healthcare',
  'Advanced Manufacturing',
  'Circular Textiles',
  'Enterprise Logistics',
  'Regulated Electronics',
  'Chemical Tracking',
  'Automotive Parts',
  'Luxury Assets',
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
                <span className="md:whitespace-nowrap">products across their entire lifecycle.</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
                CIRCAI provides the auditability, traceability, and intelligence needed to transition from
                linear waste to circular value. Build resilient, efficient, and compliant operations.
              </p>
              <DemoCtaButton className="mt-8 group">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </DemoCtaButton>
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
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-300">
            CIRCAI&apos;s architecture is built specifically to handle upcoming EU and global regulations regarding
            product traceability and circularity reporting. Don&apos;t just comply, lead.
          </p>
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
            <li key={industry} className="card-surface px-4 py-3 text-sm font-medium text-slate-200">
              {industry}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell title="Enterprise-Grade Security and Data Sovereignty">
        <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
          <ul className="space-y-4">
            <li className="card-surface p-5">
              <h3 className="text-base font-semibold text-slate-100">Full Data Ownership</h3>
              <p className="mt-2 text-sm text-slate-300">
                Your operational data is yours. We provide the infrastructure; you control the keys.
              </p>
            </li>
            <li className="card-surface p-5">
              <h3 className="text-base font-semibold text-slate-100">Immutable Audit Trails</h3>
              <p className="mt-2 text-sm text-slate-300">
                Every scan and interaction is logged in an unalterable history for regulatory compliance.
              </p>
            </li>
            <li className="card-surface p-5">
              <h3 className="text-base font-semibold text-slate-100">Global Scalability</h3>
              <p className="mt-2 text-sm text-slate-300">
                Architecture designed to support millions of concurrent assets across multi-region deployments.
              </p>
            </li>
          </ul>
          <article className="card-surface p-6 text-center">
            <Globe2 className="mx-auto h-10 w-10 text-emerald-200" />
            <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-emerald-200">
              Global GDPR Compliant Architecture
            </p>
            <ShieldCheck className="mx-auto mt-4 h-6 w-6 text-emerald-300" />
          </article>
        </div>
      </SectionShell>

      <SectionShell>
        <section className="card-surface border border-emerald-300/20 bg-emerald-500/14 px-6 py-10 sm:px-10 sm:py-12">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Ready to evolve your product lifecycle?
          </h2>
          <p className="mt-4 max-w-3xl text-base text-slate-200">
            Join forward-thinking organisations building a transparent, efficient, and circular future with
            CIRCAI.
          </p>
          <DemoCtaButton className="mt-8" />
        </section>
      </SectionShell>
    </>
  );
}
