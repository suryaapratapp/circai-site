import {
  Database,
  FileText,
  Leaf,
  QrCode,
  Radar,
  ScanLine,
  Settings2,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { ProductDeck } from '@/components/product-deck';
import { ProductsBackground } from '@/components/products-background';
import { ProductsHeroImage } from '@/components/products-hero-image';
import { SectionShell } from '@/components/section-shell';

const PRODUCTS = [
  {
    title: 'Scanning & Tracking Application',
    description: [
      'Mobile scanning workflows are easy to use across frontline operations and return points.',
      'Events sync in near real time for reliable custody status and location visibility.',
      'Improves audit visibility while reducing avoidable loss through consistent capture.',
    ],
    outcome: 'Outcome: stronger custody continuity across field operations.',
    icon: 'scanning',
  },
  {
    title: 'Inventory Management System',
    description: [
      'Improves stock accuracy with controlled movement records and traceable adjustments.',
      'Provides multi-site inventory visibility from one operational control view.',
      'Automated alerts highlight shortages, overstock, and exception trends early.',
    ],
    outcome: 'Outcome: lower loss rates and better utilisation planning.',
    icon: 'inventory',
  },
  {
    title: 'Quality Management System',
    description: [
      'Links quality checks and remediation actions directly to lifecycle events.',
      'Maintains structured compliance logs and auditable history for each product.',
      'Supports regulatory readiness with clear traceability and evidence continuity.',
    ],
    outcome: 'Outcome: faster root-cause resolution with audit evidence.',
    icon: 'quality',
  },
  {
    title: 'Environmental Savings Dashboard / LCA',
    description: [
      'Measures carbon reduction and lifecycle impact across products and locations.',
      'Tracks circular outcomes with metrics for waste, efficiency, and reuse performance.',
      'Supports reporting exports for sustainability reviews, compliance, and stakeholders.',
    ],
    outcome: 'Outcome: measurable environmental savings with reporting confidence.',
    icon: 'environment',
  },
  {
    title: 'RFID Real-Time Tracking Solution',
    description: [
      'Supports passive and active RFID modes based on operational requirements.',
      'Enables zone-level tracking and movement visibility across facilities.',
      'Strengthens asset visibility and reduces loss through continuous monitoring.',
    ],
    outcome: 'Outcome: improved operational responsiveness at site scale.',
    icon: 'rfid',
  },
  {
    title: 'QR / Barcode Scanning & Tracking',
    description: [
      'Delivers low-cost deployment using widely available QR and barcode standards.',
      'Supports rapid rollout across sites without specialized infrastructure.',
      'Captures structured lifecycle events with minimal process friction.',
    ],
    outcome: 'Outcome: reliable event capture at low process friction.',
    icon: 'qr',
  },
  {
    title: 'Employee Attendance & Health Reporting (Face ID)',
    description: [
      'Supports controlled access workflows linked to workforce status policies.',
      'Validates shifts and attendance records for operational continuity.',
      'Maintains compliance logging for regulated environments and audit needs.',
    ],
    outcome: 'Outcome: better workforce readiness visibility for regulated workflows.',
    icon: 'attendance',
  },
  {
    title: 'Appliances & Process Control',
    description: [
      'Monitors washers, dryers, and specialised processing equipment in real time.',
      'Tracks utilisation, cycle efficiency, and process consistency across sites.',
      'Adds predictive maintenance insight and performance benchmarking for stability.',
    ],
    outcome: 'Outcome: reduced manual errors with stronger operational consistency.',
    icon: 'appliances',
  },
  {
    title: 'AI-Powered Report Generation',
    description: [
      'Creates board-ready operational summaries from natural-language prompts.',
      'Compiles investor insights, trend analysis, and performance highlights automatically.',
      'Generates compliance documentation and stakeholder reports with consistent structure.',
    ],
    outcome: 'Outcome: faster, evidence-ready reporting for leadership and compliance teams.',
    icon: 'aiReports',
  },
] as const;

const MODULE_ICONS = {
  scanning: ScanLine,
  inventory: Database,
  quality: ShieldCheck,
  environment: Leaf,
  rfid: Radar,
  qr: QrCode,
  attendance: Users,
  appliances: Settings2,
  aiReports: FileText,
} as const;

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden">
      <ProductsBackground />
      <div className="relative z-10">
        <SectionShell
          title="Our Products"
          subtitle="CIRCAI is a modular software suite for product lifecycle tracking and circular operations."
          className="[&>div>header]:mb-5"
        >
          <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                The products below are modules of a single ecosystem. You can deploy individual modules to solve a
                specific need, or roll out the full suite for end-to-end traceability, compliance, and operational
                intelligence.
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {['Single Module', 'Suite Deployment', 'Integrations-first rollout'].map((option) => (
                  <span
                    key={option}
                    className="inline-flex rounded-full border border-white/10 bg-slate-900/65 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    {option}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-400 sm:text-sm">
                Start small, scale to full lifecycle coverage.
              </p>
            </div>
            <ProductsHeroImage />
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {PRODUCTS.map((product) => (
              <article
                key={product.title}
                className="group card-surface relative flex h-full flex-col overflow-hidden border border-white/12 bg-[linear-gradient(165deg,rgba(15,23,42,0.9),rgba(10,19,30,0.86))] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-300/40 hover:shadow-[0_24px_58px_-30px_rgba(20,184,166,0.38)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,191,0.1),transparent_42%)]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent opacity-0 transition-all duration-300 ease-out motion-safe:group-hover:left-full motion-safe:group-hover:opacity-100 motion-reduce:hidden"
                />
                <div className="relative z-10 flex h-full flex-col p-5">
                  <span className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
                    Module
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/32 bg-slate-900/80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.02]">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-xl bg-[radial-gradient(circle,rgba(16,185,129,0.24),transparent_64%)] opacity-70 transition-opacity duration-300 group-hover:opacity-95"
                      />
                      {(() => {
                        const Icon = MODULE_ICONS[product.icon];
                        return <Icon className="relative h-4 w-4 text-emerald-200" aria-hidden="true" />;
                      })()}
                    </span>
                    <h2 className="text-base font-semibold tracking-[0.01em] text-slate-100">{product.title}</h2>
                  </div>
                  <div aria-hidden="true" className="mt-3 h-px w-full bg-white/10" />
                  <div className="mt-2 space-y-1.5">
                    {product.description.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-slate-300">
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-medium text-emerald-200">{product.outcome}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-300">
            Need just one module or the full suite? We&apos;ll tailor the rollout to your operations.
          </p>
        </SectionShell>

        <SectionShell>
          <ProductDeck />
        </SectionShell>
      </div>
    </div>
  );
}
