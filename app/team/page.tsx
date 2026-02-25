import { EmailIcon, LinkedinIcon } from '@/components/icons';
import { SectionShell } from '@/components/section-shell';
import { TeamMemberPhoto } from '@/components/team-member-photo';

const TEAM_MEMBERS = [
  {
    name: 'Prof. Tom Dawson',
    role: 'Turning circular economy principles into scalable, operational systems.',
    linkedin: 'https://www.linkedin.com/in/tom-dawson-happier-lives/',
    email: 'tom@circai.co.uk',
    photo: '/team/tom.jpg',
    alt: 'Portrait of Prof. Tom Dawson',
    paragraphs: [
      'Tom shapes CIRCAI’s long-term vision, ensuring the products are grounded in real-world circular economy outcomes rather than theory. Drawing on over 25 years across medicine, life sciences, and applied technology, he brings a systems-level view of how products, data, and sustainability intersect at scale. His experience spans government, industry, and academia, enabling CIRCAI to design solutions that are scientifically robust, operationally practical, and commercially viable.',
      'Through his work in circular health economics and sustainable product systems, Tom ensures CIRCAI delivers measurable environmental and operational impact while remaining aligned with emerging regulatory and compliance frameworks.',
    ],
    // focus: 'Turning circular economy principles into scalable, operational systems.',
  },
  {
    name: 'Dr. Laura Gilbert CBE',
    role: 'Strategic Advisor - Guiding responsible, real-world AI from strategy to delivery.',
    linkedin: 'https://www.linkedin.com/in/dr-laura-gilbert/',
    email: 'laura@circai.co.uk',
    photo: '/team/laura.jpg',
    alt: 'Portrait of Dr. Laura Gilbert CBE',
    paragraphs: [
      'Laura advises CIRCAI on the responsible application of artificial intelligence, drawing on her leadership at the forefront of applied AI in government and public institutions. She is currently Senior Director of AI and Head of the AI for Government programme at the Tony Blair Institute.',
      'Previously, Laura founded and led key UK government innovation initiatives, including Downing Street’s data science team and the UK government’s AI incubator.',
    ],
    // focus: 'Guiding responsible, real-world AI from strategy to delivery.',
  },
  {
    name: 'Surya Pratap',
    role: 'Aligning operations, product, and growth to deliver real-world impact.',
    linkedin: 'https://www.linkedin.com/in/suryapratap333/',
    email: 'surya@circai.co.uk',
    photo: '/team/surya.jpg',
    alt: 'Portrait of Surya Pratap',
    paragraphs: [
      'Surya drives CIRCAI’s operational execution and commercial alignment, ensuring the products deliver measurable value to customers while scaling sustainably as a business. With over a decade of experience in data analytics, operations analytics, technical operations, and product development, he bridges strategy, delivery, and customer needs.',
      'At CIRCAI, Surya translates complex operational challenges into clear product capabilities, oversees execution across teams, and ensures that data, technology, and business objectives remain tightly aligned — from product lifecycle tracking to circular economy impact.',
    ],
    // focus: 'Aligning operations, product, and growth to deliver real-world impact.',
  },
  {
    name: 'Manhar Sharma',
    role: 'Engineering intelligent products built for reliability and scale.',
    linkedin: 'https://www.linkedin.com/in/manhars/',
    email: 'manhar@circai.co.uk',
    photo: '/team/manhar.jpg',
    alt: 'Portrait of Manhar Sharma',
    paragraphs: [
      'Manhar leads the technical design and engineering execution of CIRCAI’s products. With more than 14 years of experience across software development, machine learning, and AI-driven products, he specialises in building systems that are robust, scalable, and production-ready.',
      'At CIRCAI, Manhar ensures advanced intelligence is delivered as dependable enterprise software — integrating data pipelines, AI models, and operational workflows into cohesive products that can scale across customers, assets, and geographies.',
    ],
    // focus: 'Engineering intelligent products built for reliability and scale.',
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
            <div className="flex items-start gap-4">
              <TeamMemberPhoto src={member.photo} alt={member.alt} name={member.name} />
              <div className="min-w-0">
                <h2 className="flex flex-wrap items-center gap-2 text-xl font-semibold text-slate-100">
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
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email: ${member.name}`}
                    className="text-slate-400 transition-colors hover:text-slate-200"
                  >
                    <EmailIcon className="h-5 w-5" />
                  </a>
                </h2>
                <p className="mt-1 text-sm font-medium text-emerald-200">{member.role}</p>
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              {member.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {/* <p>
                <strong>Focus:</strong>
                <br />
                {member.focus}
              </p> */}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
