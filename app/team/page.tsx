import { LinkedinIcon } from '@/components/icons';
import { SectionShell } from '@/components/section-shell';

const TEAM_MEMBERS = [
  {
    name: 'Prof. Thomas Dawson',
    role: 'Engineering & Circular Economy Expert',
    linkedin: 'https://www.linkedin.com/in/tom-dawson-happier-lives/',
    description:
      'Provides technical direction across lifecycle intelligence architecture, traceability depth, and platform reliability for enterprise deployments.',
  },
  {
    name: 'Dr. Laura Gilbert CBE',
    role: 'Strategic Advisor',
    linkedin: 'https://www.linkedin.com/in/dr-laura-gilbert/',
    description:
      'Supports data-driven methods for translating operational telemetry into trustworthy, decision-ready lifecycle insights.',
  },
  {
    name: 'Surya Pratap',
    role: 'Operations & Product',
    linkedin: 'https://www.linkedin.com/in/suryapratap333/',
    description:
      'Leads product and delivery alignment so platform capabilities map clearly to customer workflows and compliance priorities.',
  },
  {
    name: 'Manhar Sharma',
    role: 'Platform Delivery',
    linkedin: 'https://www.linkedin.com/in/manhars/',
    description:
      'Focuses on practical implementation, integration consistency, and sustainable operating models for circular programs.',
  },
] as const;

export default function TeamPage() {
  return (
    <SectionShell
      title="Our Team"
      subtitle="A focused team building practical lifecycle intelligence for circular and regulated operations."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {TEAM_MEMBERS.map((member) => (
          <article key={member.name} className="card-surface p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-100">
              <span>{member.name}</span>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`LinkedIn profile: ${member.name}`}
                className="text-[#0A66C2] transition-all hover:brightness-125 hover:drop-shadow-[0_0_6px_rgba(10,102,194,0.35)]"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </h2>
            <p className="mt-1 text-sm font-medium text-emerald-200">{member.role}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{member.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
