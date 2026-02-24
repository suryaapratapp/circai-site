import {
  Bot,
  ChartNoAxesCombined,
  ClipboardCheck,
  Drill,
  Gauge,
  GitCompareArrows,
  PackageSearch,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Timer,
  Truck,
} from 'lucide-react';
import { SectionShell } from '@/components/section-shell';

const AGENTS = [
  {
    title: 'Intelligent Inventory',
    description:
      'Detects shrink and abnormal movement by comparing expected lifecycle events with observed scan history.',
    icon: PackageSearch,
  },
  {
    title: 'Demand Forecasting',
    description:
      'Predicts site-level cycle demand using historical traceability signals and current asset velocity.',
    icon: ChartNoAxesCombined,
  },
  {
    title: 'Predictive Bundling',
    description: 'Optimises kit composition by learning recurring lifecycle pairings and service outcomes.',
    icon: GitCompareArrows,
  },
  {
    title: 'Failure Pattern Analysis',
    description: 'Identifies root-cause trends from repair and quality events to reduce repeat incidents.',
    icon: Drill,
  },
  {
    title: 'Operational AI Agent',
    description: 'Answers operational queries with auditable references to lifecycle events and custody records.',
    icon: Bot,
  },
  {
    title: 'Maintenance & Recertification Scheduler',
    description:
      'Schedules intervention windows from condition signals while preserving full audit trace continuity.',
    icon: Timer,
  },
  {
    title: 'Chain-of-Custody Risk Monitor',
    description: 'Flags custody gaps and anomalous transfers that could break compliance evidence chains.',
    icon: ShieldAlert,
  },
  {
    title: 'Compliance Report Generator',
    description: 'Produces DPP and GDPR-ready evidence packs directly from immutable lifecycle event records.',
    icon: ClipboardCheck,
  },
  {
    title: 'Supplier Quality Drift Detector',
    description: 'Surfaces quality drift by correlating inbound supplier lots with downstream failure events.',
    icon: Radar,
  },
  {
    title: 'Returns & Reverse Logistics Optimiser',
    description: 'Improves return routing and recirculation decisions using real-time status and location traces.',
    icon: Truck,
  },
  {
    title: 'Utilisation & Dwell-Time Optimiser',
    description: 'Highlights idle assets and dwell bottlenecks by benchmarking lifecycle stage duration patterns.',
    icon: Gauge,
  },
  {
    title: 'Exception Triage Agent',
    description: 'Prioritises operational exceptions by risk impact, evidence completeness, and audit urgency.',
    icon: ShieldCheck,
  },
] as const;

export function AIAgentsSection() {
  return (
    <SectionShell
      className="relative overflow-hidden"
      title="Operational Intelligence"
      subtitle="AI Agents that understand your operations."
      id="ai-agents"
    >
      <div className="glass-panel-strong relative px-6 py-8 sm:px-8 sm:py-10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-45">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:46px_46px]" />
          <div className="absolute -left-24 top-10 h-52 w-52 rounded-full border border-emerald-300/20" />
          <div className="absolute right-12 top-24 h-px w-36 bg-emerald-300/35" />
          <div className="absolute bottom-14 right-16 h-40 w-40 rounded-full border border-slate-400/25" />
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
                <article key={agent.title} className="card-surface bg-slate-900/72 p-5">
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <h3 className="mt-3 text-sm font-semibold text-slate-100">{agent.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{agent.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
