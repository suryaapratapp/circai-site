import { type SVGProps } from 'react';

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M22.225 0H1.771A1.75 1.75 0 0 0 0 1.729v20.542A1.75 1.75 0 0 0 1.771 24h20.451A1.76 1.76 0 0 0 24 22.271V1.729A1.76 1.76 0 0 0 22.225 0ZM7.119 20.452H3.555V9h3.564v11.452ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM20.452 20.452h-3.554V14.86c0-1.333-.027-3.045-1.857-3.045-1.857 0-2.141 1.45-2.141 2.948v5.689H9.341V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.75 6.75h16.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="m4.5 8 7.042 5.179a.75.75 0 0 0 .916 0L19.5 8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
