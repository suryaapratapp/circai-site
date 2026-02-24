// Lightweight, low-motion canvas particles for an enterprise-safe ambient background.
import { useEffect, useRef } from 'react';

const MAX_PARTICLES = 34;

const createParticles = (width, height, count) =>
  Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.06,
    vy: (Math.random() - 0.5) * 0.06,
    size: Math.random() * 1.9 + 0.6,
    alpha: Math.random() * 0.2 + 0.08,
  }));

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (isMobile) {
      return undefined;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) {
      return undefined;
    }

    let frameId;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const particleCount = Math.min(MAX_PARTICLES, Math.max(18, Math.floor(width / 48)));
    const particles = createParticles(width, height, particleCount);

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        context.beginPath();
        context.fillStyle = `rgba(15, 23, 42, ${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const neighbor = particles[j];
          const dx = particle.x - neighbor.x;
          const dy = particle.y - neighbor.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const lineAlpha = ((100 - distance) / 100) * 0.06;
            context.strokeStyle = `rgba(30, 41, 59, ${lineAlpha})`;
            context.lineWidth = 0.6;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(neighbor.x, neighbor.y);
            context.stroke();
          }
        }
      }
    };

    const step = () => {
      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -8) particle.x = width + 8;
        if (particle.x > width + 8) particle.x = -8;
        if (particle.y < -8) particle.y = height + 8;
        if (particle.y > height + 8) particle.y = -8;
      }

      draw();
      frameId = window.requestAnimationFrame(step);
    };

    const onResize = () => {
      resize();
      draw();
    };

    window.addEventListener('resize', onResize);

    if (prefersReducedMotion) {
      draw();
    } else {
      step();
    }

    return () => {
      window.removeEventListener('resize', onResize);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-45"
    />
  );
};

export default ParticleBackground;
