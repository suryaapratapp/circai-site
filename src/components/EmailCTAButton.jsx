// Reusable CTA component that opens a prefilled email draft.
import React from 'react';
import { buildDemoRequestMailto } from '../utils/emailCta';

const VARIANT_STYLES = {
  dark: 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10',
  light: 'bg-white text-emerald-900 hover:bg-emerald-50 shadow-lg shadow-slate-900/10',
  ghost: 'bg-white/50 text-slate-800 border border-white/70 hover:bg-white/70 backdrop-blur-sm',
  outlineLight: 'bg-emerald-900/35 text-white border border-emerald-100/30 hover:bg-emerald-900/50 backdrop-blur-sm',
};

const EmailCTAButton = ({
  label,
  variant = 'dark',
  className = '',
  children,
  ...props
}) => (
  <a
    href={buildDemoRequestMailto()}
    className={`inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${VARIANT_STYLES[variant]} ${className}`}
    aria-label={label}
    {...props}
  >
    {label}
    {children}
  </a>
);

export default EmailCTAButton;
