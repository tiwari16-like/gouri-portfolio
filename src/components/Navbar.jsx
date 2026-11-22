import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data/portfolioData.js';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#entry');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleLinkClick(href) {
    setActiveHref(href);
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <nav className="container navbar-inner" aria-label="Main navigation">
        <a
          href="#entry"
          className="navbar-brand"
          onClick={() => handleLinkClick('#entry')}
        >
          <span>GOURI</span>
          <span className="navbar-brand-italic">Tiwari</span>
        </a>

        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav-list"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? 'Close' : 'Index'}
        </button>

        <ul
          id="primary-nav-list"
          className={`navbar-links ${menuOpen ? 'is-open' : ''}`}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar-link ${isActive ? 'is-active' : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => handleLinkClick(link.href)}
                >
                  <span className="navbar-code">{link.code}</span>
                  <span>{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
