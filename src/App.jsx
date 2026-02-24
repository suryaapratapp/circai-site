import React, { Suspense, lazy, useEffect, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Database,
  Globe2,
  Layers,
  LineChart,
  Menu,
  Package,
  QrCode,
  Radio,
  Scan,
  Search,
  ShieldCheck,
  UserCheck,
  X,
  Zap,
} from 'lucide-react';
import EmailCTAButton from './components/EmailCTAButton';
import GlassCard from './components/GlassCard';

const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

const NAV_LINKS = [
  { href: '#platform', label: 'Platform' },
  { href: '#ai-intelligence', label: 'AI Agents' },
  { href: '#circularity', label: 'Circularity' },
  { href: '#industries', label: 'Industries' },
];

const FLOW_STEPS = [
  { label: 'Product', icon: <Package />, sub: 'Physical Asset' },
  { label: 'Scan', icon: <Scan />, sub: 'Data Capture' },
  { label: 'Platform', icon: <Layers />, sub: 'Central Ledger' },
  { label: 'Insight', icon: <BarChart3 />, sub: 'Analysis' },
  { label: 'Action', icon: <CheckCircle2 />, sub: 'Optimisation' },
];

const MODULES = [
  {
    icon: <QrCode className="h-6 w-6" />,
    title: 'QR / Barcode Tracking',
    desc: 'Standardised, high-speed identification and mapping for every unit in your inventory.',
  },
  {
    icon: <Radio className="h-6 w-6" />,
    title: 'RFID Real-Time Solution',
    desc: 'Passive and active RFID tracking for high-volume warehouse and hospital environments.',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Inventory Management',
    desc: 'Dynamic stock tracking with automated reorder triggers and multi-site visibility.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Quality Management (QMS)',
    desc: 'Integrated compliance and quality workflows directly tied to individual product IDs.',
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'LCA & Carbon Dashboards',
    desc: 'Measure environmental impact in real-time with automated lifecycle assessment data.',
  },
  {
    icon: <Scan className="h-6 w-6" />,
    title: 'Scanning Application',
    desc: 'Enterprise-grade mobile application for floor workers to capture data at every touchpoint.',
  },
  {
    icon: <UserCheck className="h-6 w-6" />,
    title: 'Employee Health & ID',
    desc: 'Face ID enabled health reporting and attendance for regulated industry compliance.',
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: 'Traceability Ledger',
    desc: 'Immutable audit trails for product provenance, repairs, and lifecycle events.',
  },
];

const INDUSTRIES = [
  'Healthcare',
  'Advanced Manufacturing',
  'Circular Textiles',
  'Enterprise Logistics',
  'Regulated Electronics',
  'Chemical Tracking',
  'Automotive Parts',
  'Luxury Assets',
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-100 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.95),transparent_42%),radial-gradient(circle_at_86%_18%,rgba(16,185,129,0.08),transparent_38%),linear-gradient(to_bottom,#f8fafc,#f1f5f9)]" />

      <nav
        className={`fixed z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/45 bg-white/65 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="text-2xl font-bold tracking-tight text-slate-900">CIRCAI</span>

          <div className="hidden items-center space-x-8 md:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-medium text-slate-700 transition-colors duration-200 hover:text-emerald-800"
              >
                {item.label}
              </a>
            ))}
            <EmailCTAButton
              label="Request a Technical Demo"
              variant="dark"
              className="rounded-lg px-5 py-2.5 text-sm"
            />
          </div>

          <button
            className="rounded-md p-1 text-slate-700 md:hidden"
            onClick={() => setIsMenuOpen((state) => !state)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-b border-white/60 bg-white/85 p-4 backdrop-blur-xl md:hidden">
            <div className="mx-auto max-w-7xl space-y-4 px-4 sm:px-6">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-slate-700"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </a>
              ))}
              <EmailCTAButton
                label="Request a Technical Demo"
                variant="dark"
                className="w-full rounded-lg px-5 py-3 text-sm"
              />
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden pb-20 pt-32 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-sm font-medium text-emerald-900 backdrop-blur-md">
            <Zap className="h-4 w-4" />
            <span>Operationalising the Circular Economy</span>
          </div>
          <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 lg:text-7xl">
            Intelligent software for tracking <br className="hidden lg:block" />
            <span className="text-emerald-800">products across their entire lifecycle.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-700">
            CIRCAI provides the auditability, traceability, and intelligence needed to transition from
            linear waste to circular value. Build resilient, efficient, and compliant operations.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <EmailCTAButton
              label="Request a Technical Demo"
              variant="dark"
              className="group w-full sm:w-auto"
            >
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </EmailCTAButton>
            <a
              href="#platform"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/65 bg-white/60 px-8 py-4 font-semibold text-slate-800 backdrop-blur-md transition-all duration-200 hover:bg-white/80 sm:w-auto"
            >
              View Platform Details
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/65 py-20 backdrop-blur-[1px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900">From Physical Product to Digital Intelligence</h2>
            <p className="mx-auto max-w-xl text-slate-600">
              Our ecosystem digitises physical assets, providing a continuous data thread from creation to
              end-of-life.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-5">
            {FLOW_STEPS.map((step, idx) => (
              <React.Fragment key={step.label}>
                <GlassCard className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-slate-900">{step.label}</h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{step.sub}</p>
                </GlassCard>
                {idx < FLOW_STEPS.length - 1 && (
                  <div className="hidden justify-center text-slate-300 md:flex">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 lg:flex-row">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-4xl font-bold text-slate-900">Modular Systems. One Core Platform.</h2>
              <p className="text-lg leading-relaxed text-slate-600">
                CIRCAI is an integrated system designed for the complexities of modern enterprise and circular
                supply chains.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((module) => (
              <ModuleCard key={module.title} icon={module.icon} title={module.title} desc={module.desc} />
            ))}
          </div>
        </div>
      </section>

      <section id="ai-intelligence" className="relative overflow-hidden bg-slate-900 py-24 text-white">
        <div className="absolute right-0 top-0 -z-0 h-full w-1/3 bg-slate-600/20 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
                <Cpu className="h-4 w-4" />
                <span>Operational Intelligence</span>
              </div>
              <h2 className="mb-8 text-4xl font-bold leading-tight lg:text-5xl">
                AI Agents that understand <br /> your operations.
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-slate-300">
                CIRCAI's AI layer moves beyond simple reporting. Our specialised agents analyse pattern data
                to predict failures, bundle products for circular resale, and optimise demand.
              </p>

              <div className="space-y-6">
                <AgentFeature
                  title="Demand Forecasting"
                  desc="Anticipate inventory needs with 98% accuracy based on historical lifecycle data."
                />
                <AgentFeature
                  title="Predictive Bundling"
                  desc="AI identifies items ready for secondary markets or repair cycles automatically."
                />
                <AgentFeature
                  title="Failure Pattern Analysis"
                  desc="Spot systemic quality issues before they result in large-scale waste or returns."
                />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold">CIRCAI Operational Agent</h4>
                  <p className="text-sm text-slate-300">Status: Active Optimisation</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="mb-1 font-mono text-xs uppercase text-emerald-300">Observation</p>
                  <p className="text-sm text-slate-100">
                    Detected 14% increase in unit degradation for Product Line B in Region 4.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="mb-1 font-mono text-xs uppercase text-emerald-300">Recommendation</p>
                  <p className="text-sm text-slate-100">
                    Initiate preemptive maintenance for batch #9920 to extend lifecycle by 24 months.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-950/40 p-4">
                  <p className="mb-1 font-mono text-xs uppercase text-emerald-300">Potential Impact</p>
                  <p className="text-sm font-semibold text-emerald-200">
                    Estimated Savings: $42,500 | Waste Reduction: 2.4 Tons
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-xs italic text-slate-400">Processing real-time telemetry...</span>
                <button className="rounded bg-emerald-700 px-3 py-1.5 text-xs text-white hover:bg-emerald-600">
                  Execute Optimisation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="circularity" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-bold text-slate-900">Circular Economy by Design</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              We provide the framework for organisations to move from "Use & Dispose" to "Track, Reuse,
              Repair, and Regenerate."
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/55 text-xl font-bold text-slate-900 backdrop-blur-lg">
                01
              </div>
              <h3 className="text-2xl font-bold">Traceability & Audit</h3>
              <p className="text-slate-600">
                Every product is assigned a digital passport. You know exactly where it is, what condition
                it's in, and who has touched it.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/55 text-xl font-bold text-slate-900 backdrop-blur-lg">
                02
              </div>
              <h3 className="text-2xl font-bold">Lifecycle Extension</h3>
              <p className="text-slate-600">
                Automated maintenance alerts and repair tracking ensure products stay in use longer,
                reducing the need for new raw materials.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-white/55 text-xl font-bold text-slate-900 backdrop-blur-lg">
                03
              </div>
              <h3 className="text-2xl font-bold">Closed-Loop Metrics</h3>
              <p className="text-slate-600">
                Generate compliance-ready reports on environmental savings, carbon offset, and circularity
                indexes for stakeholders.
              </p>
            </div>
          </div>

          <GlassCard className="mt-20 flex flex-col items-center gap-12 border-emerald-100/80 bg-emerald-50/50 p-8 lg:flex-row lg:p-12">
            <div className="flex-1">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 lg:text-3xl">
                Ready for the Digital Product Passport (DPP)?
              </h3>
              <p className="leading-relaxed text-slate-700">
                CIRCAI's architecture is built specifically to handle upcoming EU and global regulations
                regarding product traceability and circularity reporting. Don't just comply, lead.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-800">100%</p>
                <p className="text-xs font-semibold uppercase text-emerald-900/70">Audit Ready</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-800">Real-time</p>
                <p className="text-xs font-semibold uppercase text-emerald-900/70">Impact Tracking</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="industries" className="border-y border-white/55 bg-slate-50/60 py-24 backdrop-blur-[1px]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Industries Served</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <GlassCard
                key={industry}
                className="border-white/55 bg-white/50 p-6 transition-all duration-200 hover:bg-white/70 hover:shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
              >
                <p className="font-semibold text-slate-800">{industry}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-4xl font-bold text-slate-900">
                Enterprise-Grade Security <br /> and Data Sovereignty.
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">Full Data Ownership</p>
                    <p className="text-slate-600">
                      Your operational data is yours. We provide the infrastructure; you control the keys.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">Immutable Audit Trails</p>
                    <p className="text-slate-600">
                      Every scan and interaction is logged in an unalterable history for regulatory compliance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-emerald-600" />
                  <div>
                    <p className="font-bold text-slate-900">Global Scalability</p>
                    <p className="text-slate-600">
                      Architecture designed to support millions of concurrent assets across multi-region
                      deployments.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <GlassCard className="flex h-64 w-64 flex-col items-center justify-center border-emerald-100/90 bg-white/55 p-6 text-center">
                <Globe2 className="mb-4 h-16 w-16 text-emerald-700" />
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                  Global GDPR Compliant Architecture
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-emerald-800 to-emerald-700 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-bold lg:text-5xl">Ready to evolve your product lifecycle?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-emerald-50/95">
            Join forward-thinking organisations building a transparent, efficient, and circular future with
            CIRCAI.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <EmailCTAButton label="Request a Technical Demo" variant="light" />
            <EmailCTAButton label="Talk to an Expert" variant="outlineLight" />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/55 bg-white/80 py-20 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid gap-12 md:grid-cols-4">
            <div className="col-span-2">
              <div className="mb-6 flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900">CIRCAI</span>
              </div>
              <p className="mb-8 max-w-sm text-slate-500">
                Building the software systems that track, manage, and optimise products across their entire
                lifecycle for a better circular economy.
              </p>
            </div>
            <div>
              <h5 className="mb-6 font-bold text-slate-900">Platform</h5>
              <ul className="space-y-4 text-slate-500">
                <li>
                  <a href="#" className="transition-colors hover:text-emerald-700">
                    Tracking Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-emerald-700">
                    Inventory Management
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-emerald-700">
                    Quality Control
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-emerald-700">
                    AI Agents
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 font-bold text-slate-900">Company</h5>
              <ul className="space-y-4 text-slate-500">
                <li>
                  <a href="#" className="transition-colors hover:text-emerald-700">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-emerald-700">
                    Circular Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-emerald-700">
                    Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-emerald-700">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 text-sm text-slate-400 md:flex-row">
            <p>© 2026 CIRCAI LTD. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-600">
                Terms of Service
              </a>
              <a href="#" className="hover:text-slate-600">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ModuleCard = ({ icon, title, desc }) => (
  <GlassCard className="group p-8 transition-all duration-200 hover:bg-white/70 hover:shadow-[0_16px_30px_rgba(15,23,42,0.1)]">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100/80 text-slate-500 transition-colors group-hover:bg-emerald-50 group-hover:text-emerald-700">
      {icon}
    </div>
    <h3 className="mb-3 text-lg font-bold text-slate-900">{title}</h3>
    <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
  </GlassCard>
);

const AgentFeature = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-emerald-400" />
    <div>
      <h4 className="mb-1 font-bold text-white">{title}</h4>
      <p className="text-sm text-slate-300">{desc}</p>
    </div>
  </div>
);

export default App;
