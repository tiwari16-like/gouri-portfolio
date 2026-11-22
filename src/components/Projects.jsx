import { useState } from 'react';
import { PROJECTS_LIST } from '../data/portfolioData.js';
import { useScrollReveal } from '../utils/useScrollReveal.js';

function SecondaryExhibitSvg({ visualType }) {
  if (visualType === 'state-graph') {
    return (
      <svg className="exhibit-svg" viewBox="0 0 420 170" aria-hidden="true">
        <g className="terrain-grid">
          <line x1="0" y1="85" x2="420" y2="85" />
          <line x1="140" y1="0" x2="140" y2="170" />
          <line x1="280" y1="0" x2="280" y2="170" />
        </g>
        <line
          x1="78"
          y1="85"
          x2="210"
          y2="46"
          stroke="#62E6F5"
          strokeWidth="1.2"
        />
        <line
          x1="210"
          y1="46"
          x2="342"
          y2="85"
          stroke="#D8FF62"
          strokeWidth="1.2"
        />
        <line
          x1="78"
          y1="85"
          x2="210"
          y2="128"
          stroke="#FF7048"
          strokeWidth="1.2"
        />
        <line
          x1="210"
          y1="128"
          x2="342"
          y2="85"
          stroke="#B8A3D9"
          strokeWidth="1.2"
        />
        <circle cx="78" cy="85" r="16" className="terrain-contour-outer" />
        <circle cx="210" cy="46" r="16" className="terrain-contour-mid" />
        <circle cx="210" cy="128" r="16" className="terrain-contour-peak" />
        <circle cx="342" cy="85" r="16" className="terrain-contour-outer" />
        <circle cx="78" cy="85" r="4" className="terrain-marker" />
        <circle cx="342" cy="85" r="4" className="terrain-marker" />
      </svg>
    );
  }

  return (
    <svg className="exhibit-svg" viewBox="0 0 420 170" aria-hidden="true">
      <g className="terrain-grid">
        <line x1="24" y1="36" x2="396" y2="36" />
        <line x1="24" y1="74" x2="396" y2="74" />
        <line x1="24" y1="112" x2="396" y2="112" />
      </g>
      <rect x="28" y="44" width="94" height="22" className="terrain-contour-outer" />
      <rect x="138" y="44" width="160" height="22" className="terrain-contour-mid" />
      <rect x="28" y="82" width="144" height="22" className="terrain-contour-peak" />
      <rect x="188" y="82" width="194" height="22" className="terrain-contour-outer" />
      <rect x="28" y="120" width="230" height="22" className="terrain-contour-mid" />
      <circle cx="372" cy="131" r="6" className="terrain-marker" />
    </svg>
  );
}

export default function Projects() {
  const [expandedIds, setExpandedIds] = useState({
    neergarh: true,
    'atmospheric-digital-twin': false,
    voultsync: false,
  });
  const { ref, isVisible } = useScrollReveal();

  const featuredProject =
    PROJECTS_LIST.find((project) => project.featured) || PROJECTS_LIST[0];
  const secondaryProjects = PROJECTS_LIST.filter(
    (project) => project.id !== featuredProject.id
  );

  function toggleDetails(id) {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const isFeaturedExpanded = Boolean(expandedIds[featuredProject.id]);

  return (
    <section
      id="project-lab"
      ref={ref}
      className={`section section-lab reveal-block ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <header className="editorial-header">
          <div className="editorial-index-col">
            <span className="display-index" aria-hidden="true">
              04
            </span>
          </div>
          <div className="editorial-heading-col">
            <span className="section-label">04 · FEATURED PROJECTS</span>
            <h2 className="section-title">
              Systems architecture &amp; <em>applied prototypes.</em>
            </h2>
            <p className="section-subtitle">
              Every project distinguishes verified implemented work from proposed architecture or planned simulation integrations.
            </p>
          </div>
        </header>

        {/* Flagship Exhibit 01: NEERGARH Dam Inundation Framework */}
        <article className="neergarh-exhibit">
          <div className="exhibit-visual-wrap">
            <div className="exhibit-geo-header">
              <span>{featuredProject.index}</span>
              <span>{featuredProject.geoMeta}</span>
            </div>
            <figure className="exhibit-preview-figure">
              <div className="exhibit-preview-frame">
                <img
                  src={featuredProject.previewImage}
                  alt={featuredProject.previewImageAlt}
                  className="exhibit-preview-img"
                />
              </div>
              {featuredProject.previewCaption && (
                <figcaption className="exhibit-preview-caption">
                  {featuredProject.previewCaption}
                </figcaption>
              )}
            </figure>
          </div>

          <div>
            <div className="case-study-meta">
              <span>{featuredProject.index}</span>
              <span aria-hidden="true">·</span>
              <span>{featuredProject.status}</span>
            </div>

            <h3 className="case-study-title">{featuredProject.title}</h3>
            <p className="case-study-subtitle">{featuredProject.subtitle}</p>
            <p className="case-study-summary">{featuredProject.summary}</p>

            <div className="case-study-specs">
              <div>
                <span className="case-spec-label">Implemented Prototype</span>
                <p className="case-spec-text">{featuredProject.implementedScope}</p>
              </div>
              <div>
                <span className="case-spec-label case-spec-label-planned">
                  Proposed / Planned Integration
                </span>
                <p className="case-spec-text">{featuredProject.proposedScope}</p>
              </div>

              {isFeaturedExpanded && (
                <>
                  <div>
                    <span className="case-spec-label">Problem Context</span>
                    <p className="case-spec-text">{featuredProject.problemStatement}</p>
                  </div>
                  <div>
                    <span className="case-spec-label">Architecture Overview</span>
                    <p className="case-spec-text">{featuredProject.technicalApproach}</p>
                  </div>
                </>
              )}
            </div>

            <div className="lab-stack-line">
              {featuredProject.technologies.map((techName, idx) => (
                <span key={techName}>
                  {idx > 0 && <span aria-hidden="true"> · </span>}
                  {techName}
                </span>
              ))}
            </div>

            <div className="lab-actions-row">
              <button
                type="button"
                className="lab-inspect-btn"
                aria-expanded={isFeaturedExpanded}
                onClick={() => toggleDetails(featuredProject.id)}
              >
                {isFeaturedExpanded ? 'Hide Architecture Notes' : 'Inspect Full Architecture'}
              </button>
              <a href="#connect" className="inline-accent-link">
                Request Project Walkthrough &rarr;
              </a>
            </div>
          </div>
        </article>

        {/* Secondary Project Exhibits */}
        <div className="lab-secondary-grid">
          {secondaryProjects.map((project) => {
            const isExpanded = Boolean(expandedIds[project.id]);
            return (
              <article key={project.id} className="lab-exhibit-card">
                <div>
                  <div className="lab-exhibit-visual">
                    <div className="exhibit-geo-header">
                      <span>{project.index}</span>
                      <span>{project.geoMeta}</span>
                    </div>
                    <SecondaryExhibitSvg visualType={project.visualType} />
                  </div>

                  <div className="case-study-meta">
                    <span>{project.status}</span>
                  </div>

                  <h3 className="case-study-title">{project.title}</h3>
                  <p className="case-study-subtitle">{project.subtitle}</p>
                  <p className="case-study-summary">{project.summary}</p>
                </div>

                <div>
                  <div className="lab-stack-line">
                    {project.technologies.map((techName, idx) => (
                      <span key={techName}>
                        {idx > 0 && <span aria-hidden="true"> · </span>}
                        {techName}
                      </span>
                    ))}
                  </div>

                  <div className="lab-actions-row">
                    <button
                      type="button"
                      className="lab-inspect-btn"
                      aria-expanded={isExpanded}
                      onClick={() => toggleDetails(project.id)}
                    >
                      {isExpanded ? 'Close Project Details' : 'Inspect Architecture'}
                    </button>

                    <a href="#connect" className="inline-accent-link">
                      Inquire via Connect &rarr;
                    </a>
                  </div>

                  {isExpanded && (
                    <div className="case-study-specs">
                      <div>
                        <span className="case-spec-label">Current / Designed Scope</span>
                        <p className="case-spec-text">{project.implementedScope}</p>
                      </div>
                      <div>
                        <span className="case-spec-label case-spec-label-planned">
                          Proposed / Unimplemented Work
                        </span>
                        <p className="case-spec-text">{project.proposedScope}</p>
                      </div>
                      <div>
                        <span className="case-spec-label">Problem Context</span>
                        <p className="case-spec-text">{project.problemStatement}</p>
                      </div>
                      <div>
                        <span className="case-spec-label">Technical Design</span>
                        <p className="case-spec-text">{project.technicalApproach}</p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
