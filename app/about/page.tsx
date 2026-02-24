import { SectionShell } from '@/components/section-shell';

const PRINCIPLES = [
  'Audit-first data modeling for lifecycle events.',
  'Practical deployment across real operational constraints.',
  'Transparent metrics for circular and compliance outcomes.',
] as const;

export default function AboutPage() {
  return (
    <>
      <SectionShell
        title="About us"
        subtitle="CIRCAI LTD builds lifecycle intelligence software for organisations managing high-value, regulated, and reusable products."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="card-surface p-6">
            <h2 className="text-xl font-semibold text-slate-100">What CIRCAI is</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              CIRCAI is a platform that unifies traceability events from product creation through usage, return,
              maintenance, and recirculation. We focus on turning operational history into trusted decisions.
            </p>
          </article>
          <article className="card-surface p-6">
            <h2 className="text-xl font-semibold text-slate-100">Mission and goal</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Our mission is to help enterprises operationalise circular economy models with clear lifecycle
              visibility, measurable environmental outcomes, and enterprise-grade controls.
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        title="How we approach traceability"
        subtitle="Our approach is practical, data-driven, and designed for audit readiness from the beginning."
      >
        <div className="card-surface rounded-3xl p-6">
          <ul className="space-y-3 text-sm text-slate-300">
            {PRINCIPLES.map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-black/20 px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell
        title="Why this matters for regulated industries"
        subtitle="Regulated operators need more than visibility. They need accountability that can be verified."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="card-surface p-6">
            <h3 className="text-base font-semibold text-slate-100">Compliance confidence</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Traceable custody and event evidence reduce reporting friction and support policy adherence across
              jurisdictions.
            </p>
          </article>
          <article className="card-surface p-6">
            <h3 className="text-base font-semibold text-slate-100">Operational accountability</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Teams can verify who handled an asset, when it changed condition, and which action resolved each
              exception.
            </p>
          </article>
        </div>
      </SectionShell>
    </>
  );
}
