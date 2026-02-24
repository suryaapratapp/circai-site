const DEMO_RECIPIENTS = ['info@circai.co.uk'];

const DEMO_SUBJECT = 'CIRCAI – Demo Request';

const DEMO_BODY = `Hello CIRCAI Team,

I’d like to request a demo of the CIRCAI products & services.

Organisation:
Industry:
What we want to track (assets / products / kits / returnables):
Sites / locations:
Deployment preference (cloud / private / hybrid):
Suggested times (with timezone):
1)
2)

Best regards,`;

export const buildDemoMailtoHref = (): string => {
  const params = new URLSearchParams({
    subject: DEMO_SUBJECT,
    body: DEMO_BODY,
  });

  return `mailto:${DEMO_RECIPIENTS.join(',')}?${params.toString()}`;
};
