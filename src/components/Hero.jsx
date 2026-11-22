import { useEffect, useRef, useState } from 'react';
import { HERO_CONTENT } from '../data/portfolioData.js';

const HORIZON_FRAGMENTS = [
  'model.predict(72h)',
  'gis.elevation()',
  'sha256(audit)',
  'ocr.reconcile()',
  'vec2(lat, lon)',
  'pandas.frame',
  'λ(x) → y',
  '0x100D12',
];

export default function Hero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const pulseRef = useRef(0);
  const [entering, setEntering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId = null;
    let isInViewport = true;
    let width = 0;
    let height = 0;

    // Orbital code fragments & atmospheric dust around the computational event horizon
    const particles = Array.from({ length: 56 }, (_, idx) => ({
      angle: (idx / 56) * Math.PI * 2 + (idx % 5) * 0.14,
      depth: (idx / 56) * 0.92 + 0.08,
      speed: 0.0014 + (idx % 6) * 0.00035,
      spin: (idx % 2 === 0 ? 1 : -1) * (0.0007 + (idx % 4) * 0.00025),
      fragment: HORIZON_FRAGMENTS[idx % HORIZON_FRAGMENTS.length],
      tone: idx % 5 === 0 ? 'lime' : idx % 7 === 0 ? 'cyan' : 'vermilion',
    }));

    function resizeCanvas() {
      const rect = section.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 520);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawEventHorizon(timePhase) {
      ctx.clearRect(0, 0, width, height);

      const cx = width > 768 ? width * 0.69 : width * 0.52;
      const cy = width > 768 ? height * 0.47 : height * 0.36;
      const baseRadius = Math.min(width, height) * (width > 768 ? 0.25 : 0.28);
      const maxExtent = Math.max(width, height) * 0.78;
      const pulseBoost = pulseRef.current;

      // 1. Deep layered ambient bloom (Dark Wine -> Vermilion -> Midnight Plum)
      const bloomGrad = ctx.createRadialGradient(
        cx,
        cy,
        baseRadius * 0.25,
        cx,
        cy,
        baseRadius * 2.8
      );
      bloomGrad.addColorStop(0, `rgba(255, 112, 72, ${0.26 + pulseBoost * 0.18})`);
      bloomGrad.addColorStop(0.32, 'rgba(130, 38, 42, 0.22)');
      bloomGrad.addColorStop(0.62, 'rgba(39, 21, 29, 0.38)');
      bloomGrad.addColorStop(1, 'rgba(16, 13, 18, 0)');
      ctx.fillStyle = bloomGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Perspective gravitational guide rays
      const rayCount = 16;
      ctx.lineWidth = 1;
      for (let i = 0; i < rayCount; i++) {
        const theta = (i / rayCount) * Math.PI * 2 + timePhase * 0.08;
        ctx.strokeStyle =
          i % 4 === 0
            ? 'rgba(216, 255, 98, 0.09)'
            : 'rgba(255, 112, 72, 0.11)';
        ctx.beginPath();
        ctx.moveTo(
          cx + Math.cos(theta) * baseRadius * 0.65,
          cy + Math.sin(theta) * baseRadius * 0.65
        );
        ctx.lineTo(
          cx + Math.cos(theta) * maxExtent,
          cy + Math.sin(theta) * maxExtent
        );
        ctx.stroke();
      }

      // 3. Tilted orbital accretion wireframe ellipses
      const orbitTilts = [-0.42, 0.28, -0.14];
      orbitTilts.forEach((tilt, idx) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tilt + (idx === 1 ? timePhase * 0.18 : -timePhase * 0.12));
        ctx.strokeStyle =
          idx === 0
            ? 'rgba(255, 112, 72, 0.44)'
            : idx === 1
            ? 'rgba(184, 163, 217, 0.24)'
            : 'rgba(98, 230, 245, 0.24)';
        ctx.lineWidth = idx === 0 ? 1.4 : 1;
        ctx.beginPath();
        ctx.ellipse(
          0,
          0,
          baseRadius * (1.28 + idx * 0.28 + pulseBoost * 0.12),
          baseRadius * (0.44 + idx * 0.12),
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
        ctx.restore();
      });

      // 4. Concentric receding computational tunnel frames
      const ringCount = 7;
      for (let i = 0; i < ringCount; i++) {
        const progress = ((i / ringCount) + timePhase * 0.25) % 1;
        const eased = progress * progress;
        const r = baseRadius * 0.58 + eased * maxExtent * 0.65;
        const alpha = Math.max(0.03, Math.min(0.32, (1 - progress) * 0.36));

        ctx.strokeStyle =
          i % 3 === 0
            ? `rgba(216, 255, 98, ${alpha * 0.7})`
            : `rgba(255, 112, 72, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 5. Event horizon core singularity + crisp luminous photon rim
      const coreRadius = baseRadius * 0.56;
      const coreGrad = ctx.createRadialGradient(
        cx,
        cy,
        coreRadius * 0.2,
        cx,
        cy,
        coreRadius * 1.15
      );
      coreGrad.addColorStop(0, '#09070B');
      coreGrad.addColorStop(0.76, '#100D12');
      coreGrad.addColorStop(0.95, 'rgba(255, 112, 72, 0.72)');
      coreGrad.addColorStop(1, 'rgba(255, 112, 72, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Scientific azimuth tick marks on outer horizon ring
      const tickCount = 36;
      for (let t = 0; t < tickCount; t++) {
        const a = (t / tickCount) * Math.PI * 2;
        const rInner = baseRadius * 0.94;
        const rOuter = baseRadius * (t % 3 === 0 ? 1.03 : 0.98);
        ctx.strokeStyle =
          t % 9 === 0
            ? 'rgba(98, 230, 245, 0.65)'
            : 'rgba(240, 232, 216, 0.22)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * rInner, cy + Math.sin(a) * rInner);
        ctx.lineTo(cx + Math.cos(a) * rOuter, cy + Math.sin(a) * rOuter);
        ctx.stroke();
      }

      // 6. Flowing perspective code fragments & dust particles
      ctx.font = '11px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.depth -= p.speed;
          p.angle += p.spin;
          if (p.depth < 0.08) p.depth = 1;
        }

        const scale = p.depth * p.depth;
        const dist = baseRadius * 0.62 + scale * maxExtent * 0.68;
        const px = cx + Math.cos(p.angle) * dist;
        const py = cy + Math.sin(p.angle) * dist * 0.84;
        const alpha = Math.min(0.84, 0.12 + (1 - Math.abs(p.depth - 0.55)) * 0.68);

        if (p.tone === 'lime') {
          ctx.fillStyle = `rgba(216, 255, 98, ${alpha})`;
        } else if (p.tone === 'cyan') {
          ctx.fillStyle = `rgba(98, 230, 245, ${alpha * 0.88})`;
        } else {
          ctx.fillStyle = `rgba(255, 112, 72, ${alpha})`;
        }

        if (p.depth > 0.38 && p.depth < 0.88) {
          ctx.fillText(p.fragment, px, py);
        } else {
          ctx.fillRect(px - 1, py - 1, 2.4, 2.4);
        }
      }
    }

    resizeCanvas();
    let phase = 0;
    drawEventHorizon(phase);

    if (prefersReducedMotion) {
      window.addEventListener('resize', resizeCanvas);
      return () => window.removeEventListener('resize', resizeCanvas);
    }

    const observer =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              isInViewport = entries[0]?.isIntersecting ?? true;
            },
            { threshold: 0.05 }
          )
        : null;

    if (observer) observer.observe(section);

    function tick() {
      if (isInViewport) {
        phase += 0.005;
        if (pulseRef.current > 0.001) {
          pulseRef.current *= 0.92;
        } else {
          pulseRef.current = 0;
        }
        drawEventHorizon(phase);
      }
      animationFrameId = window.requestAnimationFrame(tick);
    }

    animationFrameId = window.requestAnimationFrame(tick);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  function handleEnterEcosystem(event) {
    event.preventDefault();
    pulseRef.current = 1;
    setEntering(true);
    const target = document.getElementById('human');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    window.setTimeout(() => setEntering(false), 650);
  }

  return (
    <section id="entry" ref={sectionRef} className="hero-section">
      <canvas
        ref={canvasRef}
        className="hero-tunnel-canvas"
        aria-hidden="true"
      />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-top-meta">
            <span className="hero-edition-accent">{HERO_CONTENT.code}</span>
            <span aria-hidden="true">/</span>
            <span>{HERO_CONTENT.edition}</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line">{HERO_CONTENT.displayTop}</span>
            <span className="hero-title-italic">{HERO_CONTENT.displayItalic}</span>
          </h1>

          <div className="hero-identity-row">
            <span className="hero-name-reveal">{HERO_CONTENT.tagline}</span>
            <span className="hero-role-line">{HERO_CONTENT.roleLine}</span>
          </div>

          <p className="hero-description">{HERO_CONTENT.subtitle}</p>

          <div className="button-group">
            <a
              href={HERO_CONTENT.primaryCta.href}
              className="btn-enter"
              onClick={handleEnterEcosystem}
              data-entering={entering ? 'true' : 'false'}
            >
              <span>{HERO_CONTENT.primaryCta.label}</span>
              <span className="btn-enter-arrow" aria-hidden="true">
                &rarr;
              </span>
            </a>

            <a href={HERO_CONTENT.secondaryCta.href} className="btn-ghost">
              {HERO_CONTENT.secondaryCta.label}
            </a>
          </div>
        </div>

        <aside className="hero-coordinates" aria-label="Portfolio overview">
          {HERO_CONTENT.coordinates.map((item) => (
            <div key={item.key} className="hero-coord-cell">
              <span className="hero-coord-key">{item.key}</span>
              <span className="hero-coord-value">{item.value}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
