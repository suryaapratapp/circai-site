'use client';

import { Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function ProductDeck() {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <section aria-labelledby="product-deck-title" className="card-surface p-6 sm:p-8">
      <header>
        <h2 id="product-deck-title" className="text-2xl font-semibold text-slate-100">
          CIRCAI Product Overview
        </h2>
        <p className="mt-1 text-sm text-slate-300">Product deck (PDF)</p>
      </header>

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80">
        <div className="aspect-[16/10] max-h-[760px] w-full">
          <iframe
            title="CIRCAI product deck preview"
            src="/decks/CIRCAI_Product.pdf#view=FitH"
            className="h-full w-full"
            onError={() => setShowFallback(true)}
          />
        </div>
      </div>

      {showFallback ? (
        <p className="mt-3 rounded-lg border border-amber-200/40 bg-amber-200/10 px-3 py-2 text-sm text-amber-100">
          PDF preview is unavailable in this browser. Use the links below to open or download the deck.
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="/decks/CIRCAI_Product.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-200/35 bg-emerald-500/10 px-4 py-2.5 text-sm font-semibold text-emerald-100 hover:bg-emerald-500/20"
        >
          <ExternalLink className="h-4 w-4" />
          Open deck in new tab
        </a>
        <a
          href="/decks/CIRCAI_Product.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/10"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>
    </section>
  );
}
