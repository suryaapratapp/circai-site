import { ContactPanel } from '@/components/contact-panel';
import { SectionShell } from '@/components/section-shell';

export default function ContactPage() {
  return (
    <SectionShell
      title="Contact us"
      subtitle="Request a focused walkthrough and share the product lifecycle challenges you want to solve first."
    >
      <ContactPanel />
    </SectionShell>
  );
}
