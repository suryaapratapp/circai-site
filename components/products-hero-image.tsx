'use client';

import { ImageOff } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function ProductsHeroImage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/75 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.9)]">
        <div className="flex aspect-[16/10] w-full items-center justify-center">
          <div className="text-center">
            <ImageOff aria-hidden="true" className="mx-auto h-8 w-8 text-slate-500" />
            <p className="mt-2 text-xs text-slate-400">Lifecycle tracking in regulated environments</p>
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/75 shadow-[0_20px_60px_-40px_rgba(2,6,23,0.9)]">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src="/products/rfid-scanning.png"
          alt="CIRCAI lifecycle tracking in a hospital environment"
          fill
          sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 44vw, 100vw"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      </div>
      <figcaption className="border-t border-white/10 px-4 py-2 text-xs text-slate-400">
        Lifecycle tracking in regulated environments
      </figcaption>
    </figure>
  );
}
