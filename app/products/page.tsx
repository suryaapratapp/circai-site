import { ProductDeck } from '@/components/product-deck';
import { ProductIllustration } from '@/components/illustrations/product-illustrations';
import { SectionShell } from '@/components/section-shell';

const PRODUCTS = [
  {
    title: 'Scanning & Tracking Application',
    description: 'Mobile-first workflows for capturing lifecycle events directly at points of use and return.',
    outcome: 'Outcome: stronger custody continuity across field operations.',
    variant: 'scanning',
  },
  {
    title: 'Inventory Management System',
    description: 'Multi-site stock visibility and movement control linked to product-level traceability.',
    outcome: 'Outcome: lower loss rates and better utilisation planning.',
    variant: 'inventory',
  },
  {
    title: 'Quality Management System',
    description: 'Quality checks, exceptions, and remediation tied to immutable lifecycle history.',
    outcome: 'Outcome: faster root-cause resolution with audit evidence.',
    variant: 'quality',
  },
  {
    title: 'Environmental Savings Dashboard / LCA',
    description: 'Track circular impact with lifecycle evidence for sustainability and stakeholder reporting.',
    outcome: 'Outcome: measurable environmental savings with reporting confidence.',
    variant: 'environment',
  },
  {
    title: 'RFID Real-Time Tracking Solution',
    description: 'Real-time location and status updates for high-throughput operational environments.',
    outcome: 'Outcome: improved operational responsiveness at site scale.',
    variant: 'rfid',
  },
  {
    title: 'QR / Barcode Scanning & Tracking',
    description: 'Fast product identification with structured event capture across the entire lifecycle.',
    outcome: 'Outcome: reliable event capture at low process friction.',
    variant: 'qr',
  },
  {
    title: 'Employee Attendance & Health Reporting (Face ID)',
    description: 'Operational workforce status controls aligned with regulated site governance requirements.',
    outcome: 'Outcome: better workforce readiness visibility for regulated workflows.',
    variant: 'attendance',
  },
] as const;

export default function ProductsPage() {
  return (
    <>
      <SectionShell
        title="Our Products"
        subtitle="CIRCAI is a platform-first modular ecosystem, allowing teams to deploy quickly and expand capabilities while preserving a single lifecycle data thread."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article key={product.title} className="card-surface overflow-hidden">
              <div className="relative aspect-[4/3] w-full border-b border-white/10 bg-slate-900/80">
                <ProductIllustration title={product.title} variant={product.variant} />
              </div>
              <div className="p-5">
                <h2 className="text-base font-semibold text-slate-100">{product.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{product.description}</p>
                <p className="mt-3 text-xs font-medium text-emerald-200">{product.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <ProductDeck />
      </SectionShell>
    </>
  );
}
