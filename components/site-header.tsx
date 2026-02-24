'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DemoCtaButton } from '@/components/demo-cta-button';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About us' },
  { href: '/products', label: 'Our Products' },
  { href: '/team', label: 'Our Team' },
  { href: '/contact', label: 'Contact us' },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-semibold tracking-[0.25em] text-slate-100 sm:text-lg" aria-label="CIRCAI homepage">
          CIRCAI
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'text-emerald-200'
                  : 'text-slate-300 hover:text-emerald-200'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <DemoCtaButton className="px-5 py-2.5" />
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-slate-300 hover:bg-white/5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-slate-950/90 md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-2 py-2 text-sm font-medium ${
                  isActive(item.href)
                    ? 'bg-emerald-400/10 text-emerald-200'
                    : 'text-slate-300 hover:bg-white/5 hover:text-emerald-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <DemoCtaButton className="mt-2 w-full" />
          </nav>
        </div>
      ) : null}
    </header>
  );
}
