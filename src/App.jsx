import React, { useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  Layers,
  Menu,
  Package,
  Scan,
  X,
} from 'lucide-react';
import EmailCTAButton from './components/EmailCTAButton';
import GlassCard from './components/GlassCard';

const NAV_ITEMS = [
  { href: '#about', label: 'About Us' },
  { href: '#products', label: 'Our Products' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact Us' },
];

const FLOW_STEPS = [
  { label: 'Product', icon: Package },
  { label: 'Scan', icon: Scan },
  { label: 'Platform', icon: Layers },
  { label: 'Insight', icon: BarChart3 },
  { label: 'Action', icon: CheckCircle2 },
];

const MODULES = [
  {
    title: 'QR / Barcode Tracking',
    description: 'Standardised identification and mapping across distributed assets and products.',
  },
  {
    title: 'RFID Real-Time Operations',
    description: 'High-throughput location awareness for warehouses, hospitals, and return flows.',
  },
  {
    title: 'Inventory Management',
    description: 'Multi-site stock visibility with event-driven replenishment and reconciliation.',
  },
  {
    title: 'Quality Management (QMS)',
    description: 'Quality and compliance workflows linked directly to unit-level lifecycle history.',
  },
  {
    title: 'LCA & Carbon Dashboards',
    description: 'Operational impact tracking with auditable lifecycle and circularity reporting.',
  },
  {
    title: 'Scanning Application',
    description: 'Field-ready data capture for frontline teams at every lifecycle touchpoint.',
  },
  {
    title: 'Employee Health & ID',
    description: 'Access and health status controls designed for regulated operating environments.',
  },
  {
    title: 'Traceability Ledger',
    description: 'Immutable event history for provenance, repairs, returns, and compliance reviews.',
  },
];

const TEAM_PLACEHOLDERS = [
  {
    name: 'Name Placeholder',
    role: 'Leadership Title Placeholder',
    summary: 'Background placeholder focused on lifecycle technology and enterprise delivery.',
  },
  {
    name: 'Name Placeholder',
    role: 'Product Title Placeholder',
    summary: 'Background placeholder focused on platform product strategy and customer outcomes.',
  },
  {
    name: 'Name Placeholder',
    role: 'Engineering Title Placeholder',
    summary: 'Background placeholder focused on secure systems, integrations, and data reliability.',
  },
  {
    name: 'Name Placeholder',
    role: 'Operations Title Placeholder',
    summary: 'Background placeholder focused on deployment readiness and process design.',
  },
];

const FORM_DEFAULT_VALUES = {
  name: '',
  email: '',
  organisation: '',
  message: '',
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deckError, setDeckError] = useState(false);
  const [formValues, setFormValues] = useState(FORM_DEFAULT_VALUES);
  const [formState, setFormState] = useState({ status: 'idle', message: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState({ status: 'loading', message: 'Sending your request...' });

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setFormState({
        status: 'success',
        message: 'Request received. We will follow up shortly with next steps.',
      });
      setFormValues(FORM_DEFAULT_VALUES);
    } catch {
      setFormState({
        status: 'error',
        message:
          'We could not submit the form right now. Please try again or use the walkthrough email CTA.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="text-xl font-bold tracking-tight text-slate-900" aria-label="CIRCAI homepage">
            CIRCAI
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-800"
              >
                {item.label}
              </a>
            ))}
            <EmailCTAButton
              label="Schedule a Platform Walkthrough"
              className="px-5 py-2.5 text-sm"
            />
          </nav>

          <button
            type="button"
            className="inline-flex items-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="border-t border-slate-200/80 bg-white md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <EmailCTAButton
                label="Schedule a Platform Walkthrough"
                className="mt-2 w-full justify-center"
              />
            </nav>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12" aria-labelledby="hero-title">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Product Lifecycle Intelligence
            </p>
            <h1 id="hero-title" className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Track every product lifecycle event from first scan to measurable action.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              CIRCAI helps enterprise teams capture trusted operational data across sites, transform it into
              traceability intelligence, and run circular operations with compliance-ready audit history.
            </p>
            <div className="mt-8">
              <EmailCTAButton
                label="Schedule a Platform Walkthrough"
                className="group"
              >
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </EmailCTAButton>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 sm:p-6" aria-label="System flow diagram">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-emerald-900/70">System Flow</p>
            <div className="flex flex-wrap items-center gap-3">
              {FLOW_STEPS.map((step, index) => {
                const Icon = step.icon;

                return (
                  <React.Fragment key={step.label}>
                    <div className="inline-flex items-center gap-2 rounded-xl border border-white bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm">
                      <Icon className="h-4 w-4 text-emerald-700" />
                      <span>{step.label}</span>
                    </div>
                    {index < FLOW_STEPS.length - 1 && <ArrowRight className="h-4 w-4 text-slate-400" />}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 py-16" aria-labelledby="about-title">
          <h2 id="about-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            About Us
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">Lifecycle Tracking</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                We connect product IDs, scans, and events into one operational ledger that remains usable from
                manufacturing through return, reuse, and end-of-life.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">Circular Operations</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                CIRCAI supports practical circular workflows, including repair routing, redeployment planning,
                and performance measurement for closed-loop programs.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">Enterprise Readiness</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Built for regulated and distributed environments with traceability depth, clean integration
                points, and reporting outputs that stand up to audit and governance review.
              </p>
            </GlassCard>
          </div>
        </section>

        <section id="products" className="scroll-mt-28 py-16" aria-labelledby="products-title">
          <h2 id="products-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            The CIRCAI platform is modular by design, so teams can deploy the right capabilities first and
            expand without rebuilding data foundations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((module) => (
              <GlassCard key={module.title} className="p-5">
                <h3 className="text-base font-semibold text-slate-900">{module.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{module.description}</p>
              </GlassCard>
            ))}
          </div>

          <GlassCard className="mt-8 p-6">
            <h3 className="text-xl font-semibold text-slate-900">AI Agents</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                <span>Forecast demand shifts from lifecycle events and usage velocity.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                <span>Prioritise maintenance and repair windows using condition and history data.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-700" />
                <span>Recommend bundling and recirculation actions to improve asset utilisation.</span>
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="mt-8 p-6" aria-labelledby="deck-title">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 id="deck-title" className="text-xl font-semibold text-slate-900">
                  CIRCAI Platform Overview
                </h3>
                <p className="mt-1 text-sm text-slate-600">Product deck (PDF)</p>
              </div>
              <FileText className="h-6 w-6 text-emerald-700" aria-hidden="true" />
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <div className="aspect-[16/10] w-full max-h-[720px]">
                <iframe
                  title="CIRCAI Platform Overview deck"
                  src="public/decks/CIRCAI_Product.pdf#view=FitH"
                  className="h-full w-full"
                  onError={() => setDeckError(true)}
                />
              </div>
            </div>

            {deckError && (
              <p className="mt-3 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
                Preview is unavailable in this browser. Use the links below to open or download the deck.
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="/decks/CIRCAI_Product.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                <ExternalLink className="h-4 w-4" />
                Open deck in new tab
              </a>
              <a
                href="/decks/CIRCAI_Product.pdf"
                download
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </GlassCard>
        </section>

        <section id="team" className="scroll-mt-28 py-16" aria-labelledby="team-title">
          <h2 id="team-title" className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600">
            Team profile content below is placeholder-only and intended to be replaced with approved internal
            biographies.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_PLACEHOLDERS.map((member, index) => (
              <GlassCard key={`${member.role}-${index}`} className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Placeholder</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.summary}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-16" aria-labelledby="contact-title">
          <div className="grid gap-8 lg:grid-cols-2">
            <GlassCard className="p-6 sm:p-8">
              <h2 id="contact-title" className="text-3xl font-semibold text-slate-900">
                Contact Us
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                Share your operational context and objectives, and we will propose a focused walkthrough of the
                platform aligned to your product lifecycle and deployment constraints.
              </p>
              <div className="mt-6">
                <EmailCTAButton label="Schedule a Platform Walkthrough" />
              </div>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900">Send details directly</h3>
              <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-600 transition focus:ring-2"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-600 transition focus:ring-2"
                  />
                </div>

                <div>
                  <label htmlFor="organisation" className="mb-1 block text-sm font-medium text-slate-700">
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    value={formValues.organisation}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-600 transition focus:ring-2"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
                    What would you like to cover?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-emerald-600 transition focus:ring-2"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  className="inline-flex items-center rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {formState.status === 'loading' ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>

              {formState.status !== 'idle' && (
                <p
                  role="status"
                  className={`mt-4 text-sm ${
                    formState.status === 'success' ? 'text-emerald-700' : formState.status === 'error' ? 'text-red-700' : 'text-slate-600'
                  }`}
                >
                  {formState.message}
                </p>
              )}
            </GlassCard>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center lg:px-8">
          <p>© 2026 CIRCAI LTD. All rights reserved.</p>
          <p>Lifecycle intelligence for circular enterprise operations.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
