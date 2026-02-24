// Subtle frosted card surface for high-value content blocks.
import React from 'react';

const GlassCard = ({ className = '', children }) => (
  <div
    className={`rounded-2xl border border-white/45 bg-white/55 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.08)] ${className}`}
  >
    {children}
  </div>
);

export default GlassCard;
