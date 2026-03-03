const PARTICLES = [
  'left-[10%] top-[18%]',
  'left-[22%] top-[62%]',
  'left-[36%] top-[28%]',
  'left-[58%] top-[72%]',
  'left-[74%] top-[24%]',
  'left-[88%] top-[54%]',
] as const;

const TARGETS = [
  'left-[18%] top-[36%]',
  'left-[52%] top-[26%]',
  'left-[78%] top-[62%]',
] as const;

export function ProductsBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(45,212,191,0.16),transparent_36%),radial-gradient(circle_at_82%_14%,rgba(16,185,129,0.15),transparent_42%),radial-gradient(circle_at_52%_74%,rgba(20,184,166,0.1),transparent_40%),linear-gradient(180deg,#08111c_0%,#0c1826_54%,#0b1622_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_46%,rgba(2,6,23,0.46)_100%)]" />

      <div className="absolute inset-0 opacity-12 [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:132px_132px]" />
      <div className="absolute inset-0 opacity-9 [background-image:radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.35)_1px,transparent_0)] [background-size:52px_52px]" />

      <div className="absolute -right-24 top-2 h-80 w-80 rounded-full border border-emerald-300/20 motion-safe:animate-[spin_84s_linear_infinite] motion-reduce:animate-none" />
      <div className="absolute -right-12 top-14 h-60 w-60 rounded-full border border-teal-300/18" />
      <div className="absolute -left-24 bottom-[-7rem] h-72 w-72 rounded-full border border-teal-300/16 motion-safe:animate-[spin_74s_linear_infinite_reverse] motion-reduce:animate-none" />
      <div className="absolute -left-12 bottom-[-4rem] h-52 w-52 rounded-full border border-emerald-300/12" />

      <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 1440 1200" preserveAspectRatio="none">
        <line x1="190" y1="280" x2="470" y2="360" stroke="rgba(148,163,184,0.2)" strokeWidth="1" />
        <line x1="470" y1="360" x2="730" y2="250" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
        <line x1="860" y1="640" x2="1110" y2="710" stroke="rgba(148,163,184,0.18)" strokeWidth="1" />
        <line x1="980" y1="220" x2="1220" y2="340" stroke="rgba(16,185,129,0.17)" strokeWidth="1" />
        <line x1="240" y1="760" x2="500" y2="660" stroke="rgba(20,184,166,0.16)" strokeWidth="1" />
        <circle cx="190" cy="280" r="2.5" fill="rgba(148,163,184,0.65)" />
        <circle cx="470" cy="360" r="2.5" fill="rgba(16,185,129,0.68)" />
        <circle cx="730" cy="250" r="2.5" fill="rgba(20,184,166,0.66)" />
        <circle cx="1110" cy="710" r="2.5" fill="rgba(16,185,129,0.62)" />
        <circle cx="1220" cy="340" r="2.3" fill="rgba(16,185,129,0.58)" />
        <circle cx="500" cy="660" r="2.3" fill="rgba(20,184,166,0.56)" />
      </svg>

      <div className="absolute inset-0">
        {PARTICLES.map((position) => (
          <span
            key={position}
            className={`absolute ${position} h-1.5 w-1.5 rounded-full bg-emerald-200/36 motion-safe:animate-[pulse_9s_ease-in-out_infinite] motion-reduce:animate-none`}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {TARGETS.map((position, index) => (
          <span key={position} className={`absolute ${position}`}>
            <span className="absolute -inset-2.5 rounded-full border border-cyan-300/18 motion-safe:animate-[ping_6.5s_cubic-bezier(0,0,0.2,1)_infinite] motion-reduce:animate-none" />
            <span
              className={`absolute -inset-4 rounded-full border border-emerald-300/12 [animation-delay:${index * 0.9}s] motion-safe:animate-[ping_8s_cubic-bezier(0,0,0.2,1)_infinite] motion-reduce:animate-none`}
            />
            <span className="absolute h-2 w-2 rounded-full bg-cyan-200/55 shadow-[0_0_10px_rgba(34,211,238,0.25)] motion-safe:animate-[pulse_4.5s_ease-in-out_infinite] motion-reduce:animate-none" />
          </span>
        ))}
      </div>

      <div className="absolute inset-0">
        {[
          'left-[14%] top-[58%]',
          'left-[46%] top-[44%]',
          'left-[72%] top-[30%]',
          'left-[86%] top-[70%]',
        ].map((position, index) => (
          <span
            key={position}
            className={`absolute ${position} h-1 w-1 rounded-full bg-slate-200/35 [animation-delay:${index * 0.8}s] motion-safe:animate-[pulse_7s_ease-in-out_infinite] motion-reduce:animate-none`}
          />
        ))}
      </div>
    </div>
  );
}
