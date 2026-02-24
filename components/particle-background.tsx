'use client';

import { useEffect, useRef } from 'react';

type NodePoint = {
  x: number;
  y: number;
  angle: number;
  radius: number;
  speed: number;
  size: number;
  depth: number;
};

type LeafShape = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  angle: number;
};

const BASE_NODE_COUNT = 36;
const BASE_LEAF_COUNT = 5;

function createNodes(width: number, height: number, count: number): NodePoint[] {
  const orbitRadius = Math.min(width, height) * 0.24;

  return Array.from({ length: count }, () => ({
    x: width / 2,
    y: height / 2,
    angle: Math.random() * Math.PI * 2,
    radius: orbitRadius * (0.34 + Math.random() * 0.9),
    speed: 0.00045 + Math.random() * 0.0007,
    size: 1 + Math.random() * 1.6,
    depth: 0.65 + Math.random() * 0.75,
  }));
}

function createLeaves(width: number, height: number, count: number): LeafShape[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 10 + Math.random() * 8,
    speed: 0.04 + Math.random() * 0.05,
    drift: (Math.random() - 0.5) * 0.08,
    angle: Math.random() * Math.PI,
  }));
}

function drawLeaf(context: CanvasRenderingContext2D, leaf: LeafShape) {
  context.save();
  context.translate(leaf.x, leaf.y);
  context.rotate(leaf.angle);
  context.beginPath();
  context.moveTo(0, -leaf.size);
  context.quadraticCurveTo(leaf.size * 0.9, -leaf.size * 0.2, 0, leaf.size);
  context.quadraticCurveTo(-leaf.size * 0.9, -leaf.size * 0.2, 0, -leaf.size);
  context.fillStyle = 'rgba(52, 211, 153, 0.08)';
  context.fill();
  context.restore();
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 767px)').matches;

    const context = canvas.getContext('2d', { alpha: true });
    if (!context) {
      return undefined;
    }

    let raf = 0;
    let width = 0;
    let height = 0;
    let nodes: NodePoint[] = [];
    let leaves: LeafShape[] = [];

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = Math.min(window.innerHeight * 1.2, 980);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = mobile ? Math.floor(BASE_NODE_COUNT / 3.2) : BASE_NODE_COUNT;
      const leafCount = mobile ? 1 : BASE_LEAF_COUNT;
      nodes = createNodes(width, height, count);
      leaves = createLeaves(width, height, leafCount);
    };

    const renderFrame = (animate: boolean, timestamp = 0) => {
      context.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      context.beginPath();
      context.strokeStyle = 'rgba(52, 211, 153, 0.08)';
      context.lineWidth = 0.9;
      context.ellipse(cx, cy, Math.min(width, height) * 0.24, Math.min(width, height) * 0.12, 0, 0, Math.PI * 2);
      context.stroke();

      context.beginPath();
      context.strokeStyle = 'rgba(148, 163, 184, 0.08)';
      context.lineWidth = 0.7;
      context.ellipse(cx, cy, Math.min(width, height) * 0.19, Math.min(width, height) * 0.1, 0, 0, Math.PI * 2);
      context.stroke();

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];

        if (animate) {
          node.angle += node.speed * node.depth;
        }
        node.x = cx + Math.cos(node.angle + timestamp * node.speed * 0.07 * node.depth) * node.radius;
        node.y =
          cy +
          Math.sin(node.angle + timestamp * node.speed * 0.07 * node.depth) *
            (node.radius * (0.5 + node.depth * 0.1));

        context.beginPath();
        context.fillStyle = `rgba(148, 163, 184, ${0.12 + node.depth * 0.12})`;
        context.arc(node.x, node.y, node.size * node.depth, 0, Math.PI * 2);
        context.fill();

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 132) {
            context.strokeStyle = `rgba(94, 234, 212, ${((132 - dist) / 132) * 0.08})`;
            context.lineWidth = 0.6 + node.depth * 0.15;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      }

      for (let i = 0; i < leaves.length; i += 1) {
        const leaf = leaves[i];

        if (animate) {
          leaf.y -= leaf.speed;
          leaf.x += Math.sin(timestamp * 0.0003 + i) * leaf.drift;
          leaf.angle += leaf.drift * 0.04;

          if (leaf.y < -20) {
            leaf.y = height + 20;
            leaf.x = Math.random() * width;
          }
        }

        drawLeaf(context, leaf);
      }
    };

    setup();

    const animate = (timestamp: number) => {
      renderFrame(true, timestamp);
      raf = window.requestAnimationFrame(animate);
    };

    if (reducedMotion) {
      renderFrame(false);
    } else {
      raf = window.requestAnimationFrame(animate);
    }

    const onResize = () => {
      setup();
      renderFrame(!reducedMotion);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-65" />;
}
