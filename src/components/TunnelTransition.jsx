import { useScrollReveal } from '../utils/useScrollReveal.js';

export default function TunnelTransition() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`tunnel-transition reveal-block ${isVisible ? 'is-visible' : ''}`}
      aria-label="Transition from hero introduction to portfolio sections"
    >
      <div className="tunnel-horizon-svg" aria-hidden="true">
        <svg viewBox="0 0 1200 110" preserveAspectRatio="none" aria-hidden="true">
          <line x1="600" y1="0" x2="60" y2="110" className="horizon-ray" />
          <line x1="600" y1="0" x2="280" y2="110" className="horizon-ray" />
          <line x1="600" y1="0" x2="480" y2="110" className="horizon-ray" />
          <line x1="600" y1="0" x2="720" y2="110" className="horizon-ray" />
          <line x1="600" y1="0" x2="920" y2="110" className="horizon-ray" />
          <line x1="600" y1="0" x2="1140" y2="110" className="horizon-ray" />
          <line x1="0" y1="56" x2="1200" y2="56" className="horizon-datum" />
          <circle cx="600" cy="56" r="4.5" className="horizon-node" />
        </svg>
      </div>

      <div className="container tunnel-transition-inner">
        <span className="tunnel-tag">BEYOND THE OBVIOUS</span>
        <span className="tunnel-line" aria-hidden="true" />
        <p className="tunnel-statement">
          Turning complex ideas into practical, intelligent systems.
        </p>
        <span className="tunnel-line" aria-hidden="true" />
        <span className="tunnel-tag tunnel-tag-lime">GOURI TIWARI</span>
      </div>
    </div>
  );
}
