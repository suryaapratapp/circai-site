import { ArrowDown, ArrowRight, BarChart3, CheckCircle2, Database, Package, ScanLine } from 'lucide-react';

const STEPS = [
  {
    label: 'Product',
    subtitle: 'Assign a unique identity to every item.',
    icon: Package,
  },
  {
    label: 'Scan',
    subtitle: 'Capture movement, condition, and handovers in seconds.',
    icon: ScanLine,
  },
  {
    label: 'Platform',
    subtitle: 'Build a secure lifecycle record and inventory truth.',
    icon: Database,
  },
  {
    label: 'Insight',
    subtitle: 'See loss, utilisation, quality, and compliance signals.',
    icon: BarChart3,
  },
  {
    label: 'Action',
    subtitle: 'Trigger replenishment, repair, and circular workflows.',
    icon: CheckCircle2,
  },
] as const;

const IMPACT_ITEMS = [
  'Audit-ready lifecycle record',
  'Loss reduction & utilisation',
  'Repair & reuse optimisation',
  'Compliance reporting',
  'Environmental savings',
] as const;

export function SystemFlow() {
  return (
    <section aria-labelledby="system-flow-title" className="card-surface rounded-3xl px-6 py-8 sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="subtle-chip inline-flex">System Flow</p>
        <h2 id="system-flow-title" className="mt-3 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          From Physical Product to Digital Intelligence
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
          CIRCAI reframes tracking as a cause-to-effect loop where each lifecycle event builds operational
          confidence and decision quality.
        </p>
      </div>

      <ol className="mt-8 hidden grid-cols-9 gap-3 lg:grid">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === STEPS.length - 1;

          return (
            <li key={step.label} className="contents">
              <article className="card-surface col-span-1 p-4">
                <Icon className="h-5 w-5 text-emerald-300" />
                <h3 className="mt-3 text-sm font-semibold text-slate-100">{step.label}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{step.subtitle}</p>
              </article>
              {!isLast ? (
                <div className="col-span-1 flex items-center justify-center px-1">
                  <ArrowRight className="h-7 w-7 text-slate-400" strokeWidth={2.4} aria-hidden="true" />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      <ol className="mt-8 space-y-4 lg:hidden">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === STEPS.length - 1;

          return (
            <li key={step.label}>
              <article className="card-surface p-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <h3 className="text-sm font-semibold text-slate-100">{step.label}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{step.subtitle}</p>
              </article>
              {!isLast ? (
                <div className="my-3 flex justify-center">
                  <ArrowDown className="h-6 w-6 text-slate-400" strokeWidth={2.4} aria-hidden="true" />
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="card-surface mt-8 px-4 py-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">Impact Strip</p>
        <ul className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-5">
          {IMPACT_ITEMS.map((item) => (
            <li key={item} className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-center">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
