import { useState } from 'react';
import { SKILL_LAYERS } from '../data/portfolioData.js';
import { useScrollReveal } from '../utils/useScrollReveal.js';

const FILTER_OPTIONS = [
  { id: 'all', label: 'All Categories' },
  ...SKILL_LAYERS.map((layer) => ({
    id: layer.id,
    label: layer.category,
  })),
];

function ArsenalTopologySvg({ activeLayer }) {
  const selectedLayerObj = SKILL_LAYERS.find((layer) => layer.id === activeLayer);
  const activePillar = selectedLayerObj ? selectedLayerObj.pillar : 'all';
  const isLit = (pillar) => activePillar === 'all' || activePillar === pillar;

  return (
    <svg
      className="arsenal-topology-svg"
      viewBox="0 0 420 118"
      aria-hidden="true"
    >
      <line x1="126" y1="58" x2="152" y2="58" className="topo-link" />
      <line x1="268" y1="58" x2="294" y2="58" className="topo-link" />

      <rect
        x="10"
        y="24"
        width="116"
        height="68"
        className={`topo-node ${isLit('core') ? 'is-lit' : ''}`}
      />
      <text
        x="68"
        y="54"
        className={`topo-label ${isLit('core') ? 'is-lit' : ''}`}
      >
        DATA &amp; GIS
      </text>
      <text x="68" y="72" className="topo-label">
        01
      </text>

      <rect
        x="152"
        y="24"
        width="116"
        height="68"
        className={`topo-node ${isLit('intelligence') ? 'is-lit' : ''}`}
      />
      <text
        x="210"
        y="54"
        className={`topo-label ${isLit('intelligence') ? 'is-lit' : ''}`}
      >
        AI/ML &amp; WEB
      </text>
      <text x="210" y="72" className="topo-label">
        02
      </text>

      <rect
        x="294"
        y="24"
        width="116"
        height="68"
        className={`topo-node ${isLit('craft') ? 'is-lit' : ''}`}
      />
      <text
        x="352"
        y="54"
        className={`topo-label ${isLit('craft') ? 'is-lit' : ''}`}
      >
        TOOLS &amp; DESIGN
      </text>
      <text x="352" y="72" className="topo-label">
        03
      </text>
    </svg>
  );
}

export default function Skills() {
  const [activeLayer, setActiveLayer] = useState('all');
  const { ref, isVisible } = useScrollReveal();

  const visibleLayers =
    activeLayer === 'all'
      ? SKILL_LAYERS
      : SKILL_LAYERS.filter((layer) => layer.id === activeLayer);

  return (
    <section
      id="arsenal"
      ref={ref}
      className={`section section-arsenal reveal-block ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <header className="editorial-header">
          <div className="editorial-index-col">
            <span className="display-index display-index-lilac" aria-hidden="true">
              03
            </span>
          </div>
          <div className="editorial-heading-col">
            <span className="section-label">03 · TECHNICAL ARSENAL</span>
            <h2 className="section-title">
              Skills across <em>programming, AI/ML</em>, data &amp; design.
            </h2>
            <p className="section-subtitle">
              Organized by domain without arbitrary skill bars or invented proficiency ratings. Filter by category to inspect individual tools and concepts.
            </p>
          </div>
        </header>

        <div className="arsenal-top-grid">
          <div className="arsenal-controls" role="group" aria-label="Filter skill layers">
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`filter-tab ${activeLayer === option.id ? 'is-active' : ''}`}
                aria-pressed={activeLayer === option.id}
                onClick={() => setActiveLayer(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <ArsenalTopologySvg activeLayer={activeLayer} />
        </div>

        <div className="arsenal-matrix">
          {visibleLayers.map((layer) => (
            <article key={layer.id} className="arsenal-row">
              <div>
                <span className="arsenal-layer-code">{layer.layerCode}</span>
                <h3 className="arsenal-category">{layer.category}</h3>
                <p className="arsenal-summary">{layer.summary}</p>
              </div>

              <ul className="arsenal-index-list" aria-label={`${layer.category} list`}>
                {layer.items.map((item) => (
                  <li key={item} className="arsenal-index-item">
                    {item}
                  </li>
                ))}
              </ul>

              <div>
                <span className="arsenal-context-label">Application Focus</span>
                <p className="arsenal-context-text">{layer.context}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
