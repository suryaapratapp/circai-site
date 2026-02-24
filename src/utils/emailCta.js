// Centralized helper for all CIRCAI email CTAs.
const CTA_EMAIL_RECIPIENTS = ['tom@circai.co.uk', 'surya@circai.co.uk', 'manhar@circai.co.uk'];

const CTA_EMAIL_SUBJECT = 'CIRCAI Platform – Technical Demo Request';

const CTA_EMAIL_BODY = `Hello CIRCAI Team,

I would like to request a technical demo of the CIRCAI platform.

Organisation:
Industry:
Products or assets we want to track:
Deployment preference (cloud / private / hybrid):

Looking forward to your response.

Best regards,`;

export const buildDemoRequestMailto = () => {
  const params = new URLSearchParams({
    subject: CTA_EMAIL_SUBJECT,
    body: CTA_EMAIL_BODY,
  });

  return `mailto:${CTA_EMAIL_RECIPIENTS.join(',')}?${params.toString()}`;
};
