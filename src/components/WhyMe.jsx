import { useState } from 'react';
import { WHY_ME_DIMENSIONS } from '../data/portfolioData.js';
import {
  resolveActiveDimension,
  stepDimensionId,
} from '../utils/differenceEngine.js';
import { useScrollReveal } from '../utils/useScrollReveal.js';

function ComputationalCoreSvg({ activeDimension }) {
  const mode = activeDimension.visualMode;

  return (
    <svg
      className={`engine-core-svg mode-${mode}`}
      viewBox="0 0 360 360"
      role="img"
      aria-label={`Computational installation diagram for ${activeDimension.shortTitle}: ${activeDimension.technicalSpec}`}
    >
      <defs>
        <radialGradient id="core-glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF7048" stopOpacity="0.28" />
          <stop offset="55%" stopColor="#B8A3D9" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#100D12" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient installation depth */}
      <circle cx="180" cy="180" r="158" className="core-aura" />

      {/* Layered calibration orbital rings */}
      <circle cx="180" cy="180" r="154" className="core-ring-outer" />
      <circle cx="180" cy="180" r="134" className="core-ring-dashed" />
      <circle cx="180" cy="180" r="112" className="core-ring-counter" />

      {/* Cardinal axis hairlines */}
      <line x1="180" y1="12" x2="180" y2="348" className="core-axis" />
      <line x1="12" y1="180" x2="348" y2="180" className="core-axis" />

      {/* Four directional vector bridges */}
      <line
        x1="180"
        y1="180"
        x2="62"
        y2="62"
        className={`core-quadrant-line ${mode === 'lattice' ? 'is-lit' : ''}`}
      />
      <line
        x1="180"
        y1="180"
        x2="62"
        y2="298"
        className={`core-quadrant-line ${mode === 'concentric' ? 'is-lit' : ''}`}
      />
      <line
        x1="180"
        y1="180"
        x2="298"
        y2="62"
        className={`core-quadrant-line ${mode === 'relay' ? 'is-lit' : ''}`}
      />
      <line
        x1="180"
        y1="180"
        x2="298"
        y2="298"
        className={`core-quadrant-line ${mode === 'spiral' ? 'is-lit' : ''}`}
      />

      {/* Mode 01: THINK DIFFERENTLY — Asymmetric Constraint Mesh */}
      <g className={`core-layer ${mode === 'lattice' ? 'is-active' : ''}`}>
        <polygon
          points="180,68 282,134 246,266 102,244 88,124"
          className="core-wire-vermilion"
        />
        <polygon
          points="180,104 244,162 198,258 118,192"
          className="core-wire-lime"
        />
        <line x1="88" y1="124" x2="246" y2="266" className="core-wire-cyan" />
        <line x1="282" y1="134" x2="102" y2="244" className="core-wire-cyan" />
        <circle cx="180" cy="68" r="5" className="core-node-lime" />
        <circle cx="282" cy="134" r="5" className="core-node-vermilion" />
        <circle cx="246" cy="266" r="5" className="core-node-cyan" />
        <circle cx="102" cy="244" r="5" className="core-node-vermilion" />
        <circle cx="88" cy="124" r="5" className="core-node-lime" />
      </g>

      {/* Mode 02: BUILD WITH PURPOSE — Concentric Caliper Core */}
      <g className={`core-layer ${mode === 'concentric' ? 'is-active' : ''}`}>
        <circle cx="180" cy="180" r="96" className="core-wire-vermilion" />
        <circle cx="180" cy="180" r="68" className="core-wire-lime" />
        <circle cx="180" cy="180" r="36" className="core-wire-cyan" />
        <rect x="130" y="130" width="100" height="100" className="core-wire-vermilion" />
        <rect
          x="152"
          y="152"
          width="56"
          height="56"
          transform="rotate(45 180 180)"
          className="core-wire-lime"
        />
        <circle cx="180" cy="180" r="7" className="core-node-lime" />
      </g>

      {/* Mode 03: LEAD BEYOND THE SCREEN — Constellation Relay Bridge */}
      <g className={`core-layer ${mode === 'relay' ? 'is-active' : ''}`}>
        <polygon
          points="180,82 266,130 266,230 180,278 94,230 94,130"
          className="core-wire-vermilion"
        />
        <line x1="180" y1="82" x2="180" y2="278" className="core-wire-lime" />
        <line x1="94" y1="130" x2="266" y2="230" className="core-wire-cyan" />
        <line x1="266" y1="130" x2="94" y2="230" className="core-wire-cyan" />
        <circle cx="180" cy="82" r="6" className="core-node-lime" />
        <circle cx="266" cy="130" r="6" className="core-node-vermilion" />
        <circle cx="266" cy="230" r="6" className="core-node-cyan" />
        <circle cx="180" cy="278" r="6" className="core-node-lime" />
        <circle cx="94" cy="230" r="6" className="core-node-vermilion" />
        <circle cx="94" cy="130" r="6" className="core-node-cyan" />
        <circle cx="180" cy="180" r="9" className="core-node-vermilion" />
      </g>

      {/* Mode 04: ALWAYS EVOLVING — Recursive Harmonic Loop */}
      <g className={`core-layer ${mode === 'spiral' ? 'is-active' : ''}`}>
        <ellipse
          cx="180"
          cy="180"
          rx="104"
          ry="42"
          transform="rotate(-26 180 180)"
          className="core-wire-vermilion"
        />
        <ellipse
          cx="180"
          cy="180"
          rx="104"
          ry="42"
          transform="rotate(26 180 180)"
          className="core-wire-lime"
        />
        <ellipse
          cx="180"
          cy="180"
          rx="104"
          ry="42"
          transform="rotate(90 180 180)"
          className="core-wire-cyan"
        />
        <circle cx="180" cy="180" r="22" className="core-wire-vermilion" />
        <circle cx="180" cy="76" r="5" className="core-node-lime" />
        <circle cx="272" cy="138" r="5" className="core-node-vermilion" />
        <circle cx="88" cy="222" r="5" className="core-node-cyan" />
      </g>

      {/* Quadrant Terminal Nodes */}
      <circle
        cx="62"
        cy="62"
        r="6"
        className={mode === 'lattice' ? 'core-node-lime' : 'core-node-idle'}
      />
      <circle
        cx="62"
        cy="298"
        r="6"
        className={mode === 'concentric' ? 'core-node-vermilion' : 'core-node-idle'}
      />
      <circle
        cx="298"
        cy="62"
        r="6"
        className={mode === 'relay' ? 'core-node-lime' : 'core-node-idle'}
      />
      <circle
        cx="298"
        cy="298"
        r="6"
        className={mode === 'spiral' ? 'core-node-vermilion' : 'core-node-idle'}
      />
    </svg>
  );
}

export default function WhyMe() {
  const [activeId, setActiveId] = useState(WHY_ME_DIMENSIONS[0].id);
  const { ref, isVisible } = useScrollReveal();

  const activeDimension = resolveActiveDimension(WHY_ME_DIMENSIONS, activeId);
  const leftDimensions = WHY_ME_DIMENSIONS.slice(0, 2);
  const rightDimensions = WHY_ME_DIMENSIONS.slice(2, 4);

  function handleStep(direction) {
    const nextId = stepDimensionId(WHY_ME_DIMENSIONS, activeId, direction);
    if (nextId) setActiveId(nextId);
  }

  return (
    <section
      id="why-me"
      ref={ref}
      className={`section section-why-me reveal-block ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <header className="editorial-header">
          <div className="editorial-index-col">
            <span className="display-index display-index-lime" aria-hidden="true">
              02
            </span>
          </div>
          <div className="editorial-heading-col">
            <span className="section-label">02 · WHY ME — THE DIFFERENCE ENGINE</span>
            <h2 className="section-title">
              An interactive portrait of <em>how I work.</em>
            </h2>
            <p className="section-subtitle">
              Engage any of the four surrounding dimensions to transform the central installation and read its corresponding personal statement and experience note.
            </p>
          </div>
        </header>

        <div className="difference-engine-stage">
          <div className="engine-wing" role="group" aria-label="Primary Difference Engine dimensions">
            {leftDimensions.map((dim) => {
              const isSelected = dim.id === activeDimension.id;
              return (
                <button
                  key={dim.id}
                  type="button"
                  aria-pressed={isSelected}
                  className={`dimension-node ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveId(dim.id)}
                >
                  <span className="dimension-node-meta">
                    <span>{dim.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{dim.quadrant}</span>
                  </span>
                  <span className="dimension-node-title">{dim.shortTitle}</span>
                  <span className="dimension-node-spec">{dim.technicalSpec}</span>
                </button>
              );
            })}
          </div>

          <div className="engine-core-frame" data-active-mode={activeDimension.visualMode}>
            <div className="engine-core-header">
              <span>{activeDimension.axisLabel}</span>
              <span>{activeDimension.coordinates}</span>
            </div>

            <ComputationalCoreSvg activeDimension={activeDimension} />

            <div className="engine-core-footer">
              <span className="engine-core-state">{activeDimension.technicalSpec}</span>
              <div className="engine-stepper">
                <button
                  type="button"
                  className="engine-step-btn"
                  aria-label="Previous dimension"
                  onClick={() => handleStep(-1)}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="engine-step-btn"
                  aria-label="Next dimension"
                  onClick={() => handleStep(1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <div className="engine-wing" role="group" aria-label="Secondary Difference Engine dimensions">
            {rightDimensions.map((dim) => {
              const isSelected = dim.id === activeDimension.id;
              return (
                <button
                  key={dim.id}
                  type="button"
                  aria-pressed={isSelected}
                  className={`dimension-node ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setActiveId(dim.id)}
                >
                  <span className="dimension-node-meta">
                    <span>{dim.index}</span>
                    <span aria-hidden="true">·</span>
                    <span>{dim.quadrant}</span>
                  </span>
                  <span className="dimension-node-title">{dim.shortTitle}</span>
                  <span className="dimension-node-spec">{dim.technicalSpec}</span>
                </button>
              );
            })}
          </div>
        </div>

        <article
          key={activeDimension.id}
          className="dimension-dossier"
          aria-live="polite"
        >
          <div className="dossier-main">
            <span className="dossier-eyebrow">
              {activeDimension.index} · {activeDimension.shortTitle}
            </span>
            <h3 className="dossier-heading">{activeDimension.heading}</h3>
            <p className="dossier-statement">{activeDimension.statement}</p>
          </div>

          <div className="dossier-evidence">
            <span className="dossier-evidence-label">
              {activeDimension.evidenceTitle}
            </span>
            <p className="dossier-evidence-body">
              {activeDimension.evidenceBody}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
