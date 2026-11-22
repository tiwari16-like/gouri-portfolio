import { LEADERSHIP_ITEMS } from '../data/portfolioData.js';
import { useScrollReveal } from '../utils/useScrollReveal.js';

export default function BeyondCode() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="beyond-code"
      ref={ref}
      className={`section section-beyond reveal-block ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <header className="editorial-header">
          <div className="editorial-index-col">
            <span className="display-index display-index-lilac" aria-hidden="true">
              06
            </span>
          </div>
          <div className="editorial-heading-col">
            <span className="section-label">06 · LEADERSHIP &amp; RECOGNITION</span>
            <h2 className="section-title">
              Initiative, competition &amp; <em>campus leadership.</em>
            </h2>
            <p className="section-subtitle">
              Entrepreneurship leadership, technical wins, and national recognition alongside undergraduate engineering studies.
            </p>
          </div>
        </header>

        <ol className="journey-timeline">
          {LEADERSHIP_ITEMS.map((item) => (
            <li key={item.id} className="journey-node">
              <div className="journey-marker" aria-hidden="true">
                <span className="journey-dot" />
              </div>

              <div className="journey-period-col">
                <span className="journey-period">{item.period}</span>
                <span className="journey-step">{item.category}</span>
              </div>

              <div className="journey-detail-col">
                <h3 className="education-degree">{item.title}</h3>
                <p className="education-notes">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
