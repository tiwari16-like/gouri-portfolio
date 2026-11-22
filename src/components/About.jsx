import {
  ABOUT_CONTENT,
  OWNER_EMAIL,
  PROFILE_IMAGE_PATH,
  RESUME_DOWNLOAD_NAME,
  RESUME_PDF_PATH,
} from '../data/portfolioData.js';
import { useScrollReveal } from '../utils/useScrollReveal.js';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="human"
      ref={ref}
      className={`section section-human reveal-block ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <header className="editorial-header">
          <div className="editorial-index-col">
            <span className="display-index" aria-hidden="true">
              {ABOUT_CONTENT.code}
            </span>
          </div>
          <div className="editorial-heading-col">
            <span className="section-label">
              {ABOUT_CONTENT.code} · {ABOUT_CONTENT.label}
            </span>
            <h2 className="section-title">
              {ABOUT_CONTENT.titleLineOne}{' '}
              <em>{ABOUT_CONTENT.titleLineItalic}</em>
            </h2>
          </div>
        </header>

        <div className="human-asymmetric-grid">
          <div className="human-monograph">
            <blockquote className="human-pullquote">
              “{ABOUT_CONTENT.pullQuote}”
            </blockquote>

            <div className="human-prose-columns">
              {ABOUT_CONTENT.bioParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="spec-panel" aria-label="Academic and technical profile summary">
            <div className="spec-panel-head">
              <span className="spec-panel-title">Profile Index</span>
              <span className="spec-crosshair" aria-hidden="true">+</span>
            </div>
            <figure className="spec-portrait-row">
              <div className="spec-portrait-frame">
                <img
                  src={PROFILE_IMAGE_PATH}
                  alt="Gouri Tiwari — B.Tech Computer Science undergraduate"
                  className="spec-portrait-img"
                />
              </div>
              <figcaption className="spec-portrait-meta">
                <span className="spec-portrait-kicker">INDORE · INDIA</span>
                <span className="spec-portrait-name">Gouri Tiwari</span>
                <span className="spec-portrait-role">
                  Software Engineering · AI/ML · GIS
                </span>
              </figcaption>
            </figure>
            <ul className="about-list">
              {ABOUT_CONTENT.specSheet.map((item) => (
                <li key={item.key} className="about-list-item">
                  <span className="about-key">{item.key}</span>
                  <span className="about-value">{item.value}</span>
                </li>
              ))}
              <li className="about-list-item">
                <span className="about-key">Email</span>
                <span className="about-value">
                  <a
                    href={`mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
                      'Portfolio Inquiry — Gouri Tiwari'
                    )}`}
                    className="inline-accent-link"
                  >
                    {OWNER_EMAIL}
                  </a>
                </span>
              </li>
              <li className="about-list-item">
                <span className="about-key">Resume</span>
                <span className="about-value">
                  <a
                    href={RESUME_PDF_PATH}
                    download={RESUME_DOWNLOAD_NAME}
                    className="inline-accent-link"
                  >
                    Download PDF &darr;
                  </a>
                </span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
