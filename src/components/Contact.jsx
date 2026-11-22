import { useState } from 'react';
import { ExternalLink, FileDown, Github, Linkedin, Mail } from 'lucide-react';
import {
  CONTACT_DETAILS,
  OWNER_EMAIL,
  PORTFOLIO_REVIEW_MAILTO,
  RESUME_DOWNLOAD_NAME,
  RESUME_PDF_PATH,
} from '../data/portfolioData.js';
import { validateContactForm } from '../utils/contactValidation.js';
import { useScrollReveal } from '../utils/useScrollReveal.js';

function ChannelIcon({ type }) {
  if (type === 'linkedin') return <Linkedin size={14} aria-hidden="true" />;
  if (type === 'github') return <Github size={14} aria-hidden="true" />;
  return <Mail size={14} aria-hidden="true" />;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [draftMailto, setDraftMailto] = useState('');
  const [copiedId, setCopiedId] = useState('');
  const { ref, isVisible } = useScrollReveal();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (draftMailto) {
      setDraftMailto('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${cleanName}`);
    const body = encodeURIComponent(
      `From: ${cleanName} (${cleanEmail})\n\n${cleanMessage}`
    );
    setDraftMailto(`mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`);
  }

  async function handleCopy(detail) {
    let copied = false;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(detail.value);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied && typeof document !== 'undefined') {
      const textarea = document.createElement('textarea');
      textarea.value = detail.value;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        copied = document.execCommand('copy');
      } catch {
        copied = false;
      } finally {
        document.body.removeChild(textarea);
      }
    }

    if (copied) {
      setCopiedId(detail.id);
      window.setTimeout(() => {
        setCopiedId((prev) => (prev === detail.id ? '' : prev));
      }, 2200);
    } else {
      setCopiedId('');
    }
  }

  return (
    <section
      id="connect"
      ref={ref}
      className={`section section-connect reveal-block ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="container">
        <header className="editorial-header">
          <div className="editorial-index-col">
            <span className="display-index" aria-hidden="true">
              07
            </span>
          </div>
          <div className="editorial-heading-col">
            <span className="section-label">07 · CONNECT &amp; REVIEW</span>
            <h2 className="connect-closing-statement">
              Open to inquiry, <em>academic review</em> &amp; collaboration.
            </h2>
          </div>
        </header>

        <div className="connect-grid">
          <div className="connect-channels">
            <p className="connect-lead">
              Reach out directly to Gouri Tiwari regarding software engineering opportunities, AI/ML and geospatial projects, or academic evaluation.
            </p>

            <ul className="contact-details-list">
              {CONTACT_DETAILS.map((detail) => (
                <li key={detail.id} className="contact-channel-row">
                  <div>
                    <span className="contact-channel-label-row">
                      <ChannelIcon type={detail.icon} />
                      <span className="contact-detail-label">{detail.label}</span>
                    </span>
                    {detail.href.startsWith('mailto:') ? (
                      <a href={detail.href} className="contact-detail-link">
                        {detail.value}
                      </a>
                    ) : (
                      <a
                        href={detail.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-detail-link contact-external-link"
                      >
                        <span>{detail.value}</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  {detail.copyable && (
                    <button
                      type="button"
                      className="copy-channel-btn"
                      onClick={() => handleCopy(detail)}
                    >
                      {copiedId === detail.id ? 'Copied' : 'Copy Email'}
                    </button>
                  )}
                </li>
              ))}
              <li className="contact-channel-row">
                <div>
                  <span className="contact-channel-label-row">
                    <FileDown size={14} aria-hidden="true" />
                    <span className="contact-detail-label">Resume (PDF)</span>
                  </span>
                  <span className="contact-detail-value">{RESUME_DOWNLOAD_NAME}</span>
                </div>
                <div className="contact-inline-actions">
                  <a
                    href={RESUME_PDF_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="copy-channel-btn"
                  >
                    Open PDF
                  </a>
                  <a
                    href={RESUME_PDF_PATH}
                    download={RESUME_DOWNLOAD_NAME}
                    className="copy-channel-btn"
                  >
                    Download
                  </a>
                </div>
              </li>
            </ul>

            {/* Portfolio Review Panel */}
            <aside className="portfolio-review-box" aria-label="Portfolio review feedback">
              <span className="dossier-evidence-label">Portfolio Review</span>
              <p className="portfolio-review-text">
                Evaluating this portfolio for academic review or technical feedback? Open a pre-addressed email directly to Gouri Tiwari ({OWNER_EMAIL}).
              </p>
              <a href={PORTFOLIO_REVIEW_MAILTO} className="btn-ghost">
                Send Portfolio Feedback &rarr;
              </a>
            </aside>
          </div>

          <div className="connect-console">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="contact-name" className="form-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="form-error" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-email" className="form-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="form-error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-field">
                <label htmlFor="contact-message" className="form-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write a message..."
                />
                {errors.message && (
                  <p className="form-error" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button type="submit" className="btn-enter">
                <span>Prepare Email Draft</span>
                <span className="btn-enter-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </button>

              {draftMailto && (
                <div className="form-success" role="status">
                  <p style={{ margin: '0 0 0.5rem' }}>
                    Validated locally (no database is used). Click below to send this draft in your email app:
                  </p>
                  <a href={draftMailto} className="inline-accent-link">
                    Open Pre-Addressed Email to {OWNER_EMAIL} &rarr;
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
