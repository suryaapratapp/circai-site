import {
  Bot,
  ChartNoAxesCombined,
  ClipboardCheck,
  Database,
  Drill,
  Gauge,
  Leaf,
  PackageSearch,
  ShieldAlert,
  ShieldCheck,
  Timer,
  Truck,
} from 'lucide-react';
import { SectionShell } from '@/components/section-shell';

const AGENTS = [
  {
    title: 'Asset Loss Prevention Agent',
    description:
      'Detects shrink, missing items, and abnormal movement by comparing expected lifecycle steps with live scan evidence.',
    outcome: 'Reduce loss and over-procurement.',
    icon: PackageSearch,
  },
  {
    title: 'Demand & Capacity Forecasting Agent',
    description:
      'Predicts site-level demand and cycle load using historical telemetry and real-time asset velocity.',
    outcome: 'Prevent shortages and bottlenecks.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Lifecycle Cost Optimisation Agent',
    description:
      'Calculates true cost-per-cycle and highlights where reuse, repair, or replacement is financially optimal.',
    outcome: 'Improve margin per lifecycle.',
    icon: Database,
  },
  {
    title: 'Predictive Maintenance & Recertification Agent',
    description:
      'Schedules interventions from condition, dwell-time, and usage signals while preserving audit continuity.',
    outcome: 'Extend asset life, reduce downtime.',
    icon: Timer,
  },
  {
    title: 'Compliance & Audit Automation Agent',
    description:
      'Builds DPP/GDPR-ready evidence packs from immutable lifecycle records—exportable for audits and reviews.',
    outcome: 'Cut compliance effort.',
    icon: ClipboardCheck,
  },
  {
    title: 'Chain-of-Custody Risk Monitor',
    description:
      'Flags custody gaps, anomalous transfers, and traceability breaks that could compromise compliance evidence.',
    outcome: 'Protect regulatory integrity.',
    icon: ShieldAlert,
  },
  {
    title: 'Quality Drift & Failure Intelligence Agent',
    description:
      'Surfaces root-cause trends by correlating supplier lots, process parameters, and downstream failure events.',
    outcome: 'Reduce repeat incidents.',
    icon: Drill,
  },
  {
    title: 'Circularity & Environmental Impact Agent',
    description:
      'Quantifies reuse rates, lifecycle extension, and environmental savings using validated event-level telemetry.',
    outcome: 'Board-ready ESG evidence.',
    icon: Leaf,
  },
  {
    title: 'Returns & Reverse Logistics Optimiser',
    description:
      'Improves return routing and recirculation decisions using real-time status, location, and service constraints.',
    outcome: 'Faster recirculation, less waste.',
    icon: Truck,
  },
  {
    title: 'Utilisation & Idle Asset Optimiser',
    description: 'Identifies idle assets and dwell bottlenecks by benchmarking lifecycle stage durations across sites.',
    outcome: 'Unlock hidden capacity.',
    icon: Gauge,
  },
  {
    title: 'Operational Decision Assistant',
    description:
      'Answers operational queries with auditable references to lifecycle events and custody records—no guesswork.',
    outcome: 'Faster, evidence-based decisions.',
    icon: Bot,
  },
  {
    title: 'Exception & Risk Triage Agent',
    description:
      'Prioritises exceptions by financial impact, evidence completeness, and audit urgency to focus teams on the critical few.',
    outcome: 'Reduce operational fire-fighting.',
    icon: ShieldCheck,
  },
] as const;

export function AIAgentsSection() {
  return (
    <SectionShell
      className="relative overflow-hidden"
      title="Operational Intelligence Layer"
      subtitle="AI Agents embedded across the lifecycle."
      id="ai-agents"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(2,6,23,0.76),rgba(15,23,42,0.66))] px-6 py-8 shadow-[0_24px_64px_-48px_rgba(34,211,238,0.24)] sm:px-8 sm:py-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent motion-safe:animate-[pulse_9s_ease-in-out_infinite] motion-reduce:animate-none"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-42">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:52px_52px]" />
          <div className="absolute left-16 top-[-3rem] h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),transparent_68%)]" />
          <div className="absolute -right-12 top-8 h-56 w-56 rounded-full border border-cyan-300/14" />
          <div className="absolute -left-14 bottom-6 h-40 w-40 rounded-full border border-teal-300/10" />
          <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 1200 520" preserveAspectRatio="none">
            <line x1="120" y1="140" x2="360" y2="220" stroke="rgba(94,234,212,0.18)" strokeWidth="1" />
            <line x1="360" y1="220" x2="610" y2="170" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
            <line x1="780" y1="300" x2="1040" y2="360" stroke="rgba(34,211,238,0.14)" strokeWidth="1" />
            <circle cx="120" cy="140" r="2.5" fill="rgba(148,163,184,0.7)" />
            <circle cx="360" cy="220" r="2.5" fill="rgba(34,211,238,0.68)" />
            <circle cx="610" cy="170" r="2.5" fill="rgba(94,234,212,0.7)" />
            <circle cx="1040" cy="360" r="2.5" fill="rgba(34,211,238,0.55)" />
          </svg>
        </div>

        <div className="relative">
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
            CIRCAI&apos;s AI layer is grounded in lifecycle telemetry, which means every recommendation can be
            traced back to auditable scan evidence and operational context.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {AGENTS.map((agent) => {
              const Icon = agent.icon;

              return (
                <article
                  key={agent.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[linear-gradient(168deg,rgba(15,23,42,0.86),rgba(2,6,23,0.72))] px-4 py-4 transition-all duration-300 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-emerald-300/38 hover:shadow-[0_18px_42px_-28px_rgba(16,185,129,0.4)] motion-reduce:hover:translate-y-0"
                >
                  <div aria-hidden="true" className="absolute right-3 top-3 flex flex-col items-end gap-1">
                    <span className="h-px w-4 bg-emerald-300/35" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/55" />
                  </div>
                  <span className="inline-flex rounded-full border border-white/12 bg-black/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-300">
                    Agent
                  </span>

                  <div className="mt-3 flex items-start gap-3">
                    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/28 bg-slate-900/75">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(16,185,129,0.24),transparent_68%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none"
                      />
                      <Icon
                        className="relative h-4 w-4 text-emerald-200 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-[0.01em] text-slate-100">{agent.title}</h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{agent.description}</p>
                    </div>
                  </div>

                  <p className="mt-3 border-t border-white/10 pt-2 text-[11px] font-medium text-emerald-200/95">
                    Outcome: {agent.outcome}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
