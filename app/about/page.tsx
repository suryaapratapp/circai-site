import { SectionShell } from '@/components/section-shell';

const CHALLENGES = [
  'Products move — but data doesn’t follow.',
  'Compliance is fragmented and manual.',
  'Lifecycle cost remains invisible.',
  'Circularity is reported — not engineered.',
] as const;

const DIFFERENTIATORS = [
  {
    title: 'Lifecycle-Native Architecture',
    description: 'Built around event-level traceability, not retrofitted analytics.',
  },
  {
    title: 'Audit-First Intelligence',
    description: 'Every AI recommendation is grounded in verifiable scan evidence.',
  },
  {
    title: 'Modular but Unified',
    description: 'Deploy individual modules or full lifecycle suite seamlessly.',
  },
  {
    title: 'Built for Regulated Environments',
    description: 'Designed for healthcare, advanced manufacturing, and compliance-driven sectors.',
  },
] as const;

const PHILOSOPHY = [
  'Traceability before optimisation',
  'Evidence before automation',
  'Resilience over short-term efficiency',
  'Circularity engineered, not declared',
] as const;

export default function AboutPage() {
  return (
    <>
      <SectionShell
        title="Engineering Lifecycle Intelligence."
        subtitle="Operationalising the circular economy through auditable, data-driven systems."
      >
        <article className="card-surface max-w-4xl p-6">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            CIRCAI builds lifecycle-native software systems that transform physical assets into traceable digital
            intelligence. We connect real-world events into auditable records that can be trusted across operations,
            compliance, and reporting. This enables circular, compliant, and efficient operating models that scale in
            enterprise environments.
          </p>
        </article>
      </SectionShell>

      <SectionShell title="The Challenge">
        <ul className="grid gap-3 md:grid-cols-2">
          {CHALLENGES.map((item) => (
            <li key={item} className="card-surface px-5 py-4 text-sm text-slate-300">
              {item}
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell title="Our Approach">
        <div className="card-surface p-6">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            CIRCAI builds lifecycle-first architecture where every asset interaction becomes a validated event. These
            events form an immutable operational record that powers compliance, AI-driven intelligence, and measurable
            environmental impact.
          </p>
          <p className="mt-5 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-slate-200 sm:text-base">
            Physical Asset <span className="text-emerald-200">→</span> Scan Event{' '}
            <span className="text-emerald-200">→</span> Lifecycle Record{' '}
            <span className="text-emerald-200">→</span> AI Insight <span className="text-emerald-200">→</span>{' '}
            Measurable Outcome
          </p>
        </div>
      </SectionShell>

      <SectionShell title="Why CIRCAI">
        <div className="grid gap-5 md:grid-cols-2">
          {DIFFERENTIATORS.map((item) => (
            <article key={item.title} className="card-surface p-6">
              <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell title="Designed for Operational Reality">
        <article className="card-surface max-w-5xl p-6">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            CIRCAI is built for environments where traceability, compliance, and asset control are critical —
            including healthcare, circular textiles, regulated electronics, enterprise logistics, and asset-intensive
            industries.
          </p>
        </article>
      </SectionShell>

      <SectionShell title="Circular by Design">
        <div className="card-surface p-6">
          <ul className="grid gap-3 text-sm text-slate-300 md:grid-cols-2">
            {PHILOSOPHY.map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-black/20 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell title="The Future of Circular Operations">
        <article className="card-surface max-w-5xl p-6">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            CIRCAI is building toward digital product passports, autonomous circular supply chains, AI-assisted
            compliance, and closed-loop enterprise systems that redefine how products are managed from creation to
            recirculation.
          </p>
        </article>
      </SectionShell>
    </>
  );
}
