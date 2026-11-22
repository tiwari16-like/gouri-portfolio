import { EDUCATION_LIST } from '../data/portfolioData.js';
import { useScrollReveal } from '../utils/useScrollReveal.js';

export default function Education() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="journey"
      ref={ref}
      className={`section section-journey reveal-block ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <header className="editorial-header">
          <div className="editorial-index-col">
            <span className="display-index display-index-lime" aria-hidden="true">
              05
            </span>
          </div>
          <div className="editorial-heading-col">
            <span className="section-label">05 · EDUCATION</span>
            <h2 className="section-title">
              Academic <em>foundation</em> &amp; coursework.
            </h2>
            <p className="section-subtitle">
              Formal academic milestones from secondary schooling at PM Shri Kendriya Vidyalaya MHOW to undergraduate Computer Science Engineering at IIST, Indore.
            </p>
          </div>
        </header>

        <ol className="journey-timeline">
          {EDUCATION_LIST.map((entry, idx) => (
            <li key={entry.id} className="journey-node">
              <div className="journey-marker" aria-hidden="true">
                <span className="journey-dot" />
              </div>

              <div className="journey-period-col">
                <span className="journey-period">{entry.period}</span>
                <span className="journey-step">STAGE 0{idx + 1}</span>
              </div>

              <div className="journey-detail-col">
                <h3 className="education-degree">{entry.degree}</h3>
                <p className="education-institution">
                  {entry.institution} <span aria-hidden="true">·</span>{' '}
                  <span className="education-focus">{entry.focus}</span>
                </p>
                <p className="education-notes">{entry.notes}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
