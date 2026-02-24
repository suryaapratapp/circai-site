'use client';

import dynamic from 'next/dynamic';

const ParticleBackground = dynamic(() => import('@/components/particle-background'), {
  ssr: false,
});

export function LazyParticleBackground() {
  return <ParticleBackground />;
}
