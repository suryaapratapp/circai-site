import React, { useState, useEffect } from 'react';
import { 
  Scan, 
  Package, 
  ShieldCheck, 
  BarChart3, 
  Radio, 
  QrCode, 
  UserCheck, 
  Cpu, 
  Recycle, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Menu, 
  X,
  Layers,
  Zap,
  LineChart,
  Search,
  Database
} from 'lucide-react';

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

  const NavLink = ({ href, children }) => (
    <a href={href} className="text-slate-600 hover:text-emerald-700 font-medium transition-colors duration-200">
      {children}
    </a>
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-slate-900">CIRCAI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#platform">Platform</NavLink>
              <NavLink href="#ai-intelligence">AI Agents</NavLink>
              <NavLink href="#circularity">Circularity</NavLink>
              <NavLink href="#industries">Industries</NavLink>
              <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-800 transition-all duration-200">
                Request Demo
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4 animate-in slide-in-from-top">
            <a href="#platform" className="block text-slate-600 py-2">Platform</a>
            <a href="#ai-intelligence" className="block text-slate-600 py-2">AI Agents</a>
            <a href="#circularity" className="block text-slate-600 py-2">Circularity</a>
            <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-lg font-medium">
              Request Demo
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Operationalising the Circular Economy</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
            Intelligent software for tracking <br className="hidden lg:block" />
            <span className="text-emerald-700 italic">products across their entire lifecycle.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed mb-10">
            CIRCAI provides the auditability, traceability, and intelligence needed to transition from linear waste to circular value. Build resilient, efficient, and compliant operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-emerald-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              View Platform Details
            </button>
          </div>
        </div>
      </section>

      {/* How it Works - System Flow */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">From Physical Product to Digital Intelligence</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Our ecosystem digitises physical assets, providing a continuous data thread from creation to end-of-life.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {[
              { label: 'Product', icon: <Package />, sub: 'Physical Asset' },
              { label: 'Scan', icon: <Scan />, sub: 'Data Capture' },
              { label: 'Platform', icon: <Layers />, sub: 'Central Ledger' },
              { label: 'Insight', icon: <BarChart3 />, sub: 'Analysis' },
              { label: 'Action', icon: <CheckCircle2 />, sub: 'Optimisation' }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-slate-900">{step.label}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{step.sub}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:flex justify-center text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section id="platform" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Modular Systems. One Core Platform.</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                CIRCAI isn't a collection of tools; it's an integrated system designed for the complexities of modern enterprise and circular supply chains.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModuleCard 
              icon={<QrCode className="w-6 h-6" />}
              title="QR / Barcode Tracking"
              desc="Standardised, high-speed identification and mapping for every unit in your inventory."
            />
            <ModuleCard 
              icon={<Radio className="w-6 h-6" />}
              title="RFID Real-Time Solution"
              desc="Passive and active RFID tracking for high-volume warehouse and hospital environments."
            />
            <ModuleCard 
              icon={<Database className="w-6 h-6" />}
              title="Inventory Management"
              desc="Dynamic stock tracking with automated reorder triggers and multi-site visibility."
            />
            <ModuleCard 
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Quality Management (QMS)"
              desc="Integrated compliance and quality workflows directly tied to individual product IDs."
            />
            <ModuleCard 
              icon={<LineChart className="w-6 h-6" />}
              title="LCA & Carbon Dashboards"
              desc="Measure environmental impact in real-time with automated lifecycle assessment data."
            />
            <ModuleCard 
              icon={<Scan className="w-6 h-6" />}
              title="Scanning Application"
              desc="Enterprise-grade mobile application for floor workers to capture data at every touchpoint."
            />
            <ModuleCard 
              icon={<UserCheck className="w-6 h-6" />}
              title="Employee Health & ID"
              desc="Face ID enabled health reporting and attendance for regulated industry compliance."
            />
            <ModuleCard 
              icon={<Search className="w-6 h-6" />}
              title="Traceability Ledger"
              desc="Immutable audit trails for product provenance, repairs, and lifecycle events."
            />
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="ai-intelligence" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/20 blur-[100px] -z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <Cpu className="w-4 h-4" />
                <span>Operational Intelligence</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">AI Agents that understand <br /> your operations.</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                CIRCAI's AI layer moves beyond simple reporting. Our specialised agents analyse pattern data to predict failures, bundle products for circular resale, and optimise demand.
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
            
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Cpu className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">CIRCAI Operational Agent</h4>
                  <p className="text-slate-400 text-sm">Status: Active Optimisation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-emerald-400 text-xs font-mono uppercase mb-1">Observation</p>
                  <p className="text-sm">Detected 14% increase in unit degradation for Product Line B in Region 4.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-emerald-400 text-xs font-mono uppercase mb-1">Recommendation</p>
                  <p className="text-sm">Initiate preemptive maintenance for batch #9920 to extend lifecycle by 24 months.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                  <p className="text-emerald-400 text-xs font-mono uppercase mb-1">Potential Impact</p>
                  <p className="text-sm text-emerald-400 font-bold">Estimated Savings: $42,500 | Waste Reduction: 2.4 Tons</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-center">
                <span className="text-xs text-slate-500 italic">Processing real-time telemetry...</span>
                <button className="text-xs bg-emerald-600 px-3 py-1.5 rounded text-white">Execute Optimisation</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Circular Economy Impact */}
      <section id="circularity" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Circular Economy by Design</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We provide the framework for organisations to move from "Use & Dispose" to "Track, Reuse, Repair, and Regenerate."
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 font-bold text-xl">01</div>
              <h3 className="text-2xl font-bold">Traceability & Audit</h3>
              <p className="text-slate-600">Every product is assigned a digital passport. You know exactly where it is, what condition it's in, and who has touched it.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 font-bold text-xl">02</div>
              <h3 className="text-2xl font-bold">Lifecycle Extension</h3>
              <p className="text-slate-600">Automated maintenance alerts and repair tracking ensure products stay in use longer, reducing the need for new raw materials.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 font-bold text-xl">03</div>
              <h3 className="text-2xl font-bold">Closed-Loop Metrics</h3>
              <p className="text-slate-600">Generate compliance-ready reports on environmental savings, carbon offset, and circularity indexes for stakeholders.</p>
            </div>
          </div>

          <div className="mt-20 bg-emerald-50 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Ready for the Digital Product Passport (DPP)?</h3>
              <p className="text-slate-700 leading-relaxed">
                CIRCAI's architecture is built specifically to handle upcoming EU and global regulations regarding product traceability and circularity reporting. Don't just comply—lead.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-700">100%</p>
                <p className="text-xs text-emerald-900/60 uppercase font-semibold">Audit Ready</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-700">Real-time</p>
                <p className="text-xs text-emerald-900/60 uppercase font-semibold">Impact Tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Industries Served</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Healthcare', 'Advanced Manufacturing', 'Circular Textiles', 'Enterprise Logistics', 'Regulated Electronics', 'Chemical Tracking', 'Automotive Parts', 'Luxury Assets'].map((industry) => (
              <div key={industry} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all">
                <p className="font-semibold text-slate-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Enterprise-Grade Security <br /> and Data Sovereignty.</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Full Data Ownership</p>
                    <p className="text-slate-600">Your operational data is yours. We provide the infrastructure; you control the keys.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Immutable Audit Trails</p>
                    <p className="text-slate-600">Every scan and interaction is logged in an unalterable history for regulatory compliance.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">Global Scalability</p>
                    <p className="text-slate-600">Architecture designed to support millions of concurrent assets across multi-region deployments.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="bg-emerald-50 aspect-square w-64 h-64 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-emerald-100 shadow-sm">
                <Globe2 className="w-16 h-16 text-emerald-700 mb-4" />
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Global GDPR Compliant Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to evolve your product lifecycle?</h2>
          <p className="text-emerald-50 opacity-90 text-xl max-w-2xl mx-auto mb-10">
            Join the forward-thinking organisations building a transparent, efficient, and circular future with CIRCAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-emerald-800 rounded-xl font-bold hover:bg-emerald-50 transition-all">
              Request a Technical Demo
            </button>
            <button className="px-8 py-4 bg-emerald-800 text-white border border-emerald-600 rounded-xl font-bold hover:bg-emerald-900 transition-all">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-bold tracking-tight text-slate-900">CIRCAI</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-8">
                Building the software systems that track, manage, and optimise products across their entire lifecycle for a better circular economy.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Platform</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Tracking Systems</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Inventory Management</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Quality Control</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">AI Agents</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Company</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-emerald-700 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Circular Impact</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-emerald-700 transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
            <p>© 2026 CIRCAI LTD. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600">Terms of Service</a>
              <a href="#" className="hover:text-slate-600">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ModuleCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group">
    <div className="w-12 h-12 bg-slate-50 text-slate-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

const AgentFeature = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1">
      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
    </div>
    <div>
      <h4 className="font-bold text-white mb-1">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

export default App;