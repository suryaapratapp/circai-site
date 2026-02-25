'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

type TeamMemberPhotoProps = {
  src: string;
  alt: string;
  name: string;
};

export function TeamMemberPhoto({ src, alt, name }: TeamMemberPhotoProps) {
  const [hasError, setHasError] = useState(false);
  const initials = useMemo(
    () =>
      name
        .split(' ')
        .filter(Boolean)
        .slice(-2)
        .map((part) => part.charAt(0))
        .join('')
        .toUpperCase(),
    [name],
  );

  if (hasError) {
    return (
      <div
        aria-hidden="true"
        className="flex h-24 w-24 items-center justify-center rounded-xl border border-white/15 bg-slate-900/75 text-sm font-semibold text-slate-200"
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      className="h-24 w-24 rounded-xl border border-white/15 object-cover"
      onError={() => setHasError(true)}
    />
  );
}
