import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    const onKeyDown = (event) => event.key === 'Escape' && setIsOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="nav-shell container" aria-label="Primary navigation">
        <a className="nav-identity" href="#hero" onClick={closeMenu} aria-label="Back to top">
          <img src="/favicon.svg" alt="" />
          <span>IQBAL</span>
          <i aria-hidden="true" />
        </a>

        <div className="nav-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'}>
            {theme === 'dark' ? (<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>) : (<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.2A8 8 0 0 1 9.8 3.5a8.3 8.3 0 1 0 10.7 10.7Z" /></svg>)}
          </button>
          <a className="nav-cv" href="/Md_Iqbal_Hossain_CV.pdf" download>
            <span>Download CV</span><b aria-hidden="true">↓</b>
          </a>
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
            <span /><span />
          </button>
    <>
      <style>{`
        /* ── Google Font ── */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        /* ══════════════════════════════════════════
           NAV SHELL
        ══════════════════════════════════════════ */
        .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 200;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }
        .nav.nav--scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          background: rgba(255, 255, 255, 0.95);
        }

        /* dark-mode shell */
        [data-theme='dark'] .nav {
          background: rgba(13, 21, 32, 0.85);
          border-bottom-color: rgba(255, 255, 255, 0.05);
        }
        [data-theme='dark'] .nav.nav--scrolled {
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
          background: rgba(13, 21, 32, 0.95);
        }

        /* ── inner layout ── */
        .nav-inner {
          max-width: var(--max-w-wide);
          margin: 0 auto;
          padding: 0 2.25rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        /* ══════════════════════════════════════════
           LEFT  — IDENTITY BLOCK
        ══════════════════════════════════════════ */
        .nav-identity {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          flex-shrink: 0;
          /* no underline, no color change on hover */
        }

        /* ── logo image ── */
        .logo-img {
          display: block;
          width: 180px;
          height: auto;
          object-fit: contain;
          transition: filter 0.3s ease, opacity 0.2s ease;
          filter: invert(1);
        }
        .nav-identity:hover .logo-img {
          opacity: 0.85;
        }
        [data-theme='dark'] .logo-img {
          filter: invert(0);
        }

        @media (max-width: 768px) {
          .logo-img {
            width: 140px;
          }
        }

        /* ══════════════════════════════════════════
           RIGHT  — NAV LINKS + TOGGLE + HAMBURGER
        ══════════════════════════════════════════ */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-links {
          display: flex;
          gap: 1.75rem;
          list-style: none;
          margin: 0; padding: 0;
        }
        .nav-links a {
          position: relative;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #5a6472;
          text-decoration: none;
          padding: 0.5rem 0.8rem;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        .nav-links a:hover {
          color: #0d1b2e;
          background: rgba(0, 0, 0, 0.04);
        }
        [data-theme='dark'] .nav-links a       { color: #9aa3ae; }
        [data-theme='dark'] .nav-links a:hover { 
          color: #fff;
          background: rgba(255, 255, 255, 0.06);
        }

        /* ── theme toggle ── */
        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.08);
          background: #ffffff;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .theme-toggle svg { width: 16px; height: 16px; display: block; }
        .theme-toggle:hover {
          background: #f7f8fa;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        .theme-toggle:active { transform: translateY(0); }
        [data-theme='dark'] .theme-toggle {
          background: #1e293b;
          border-color: rgba(255,255,255,0.1);
          color: #cbd5e1;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        [data-theme='dark'] .theme-toggle:hover {
          background: #334155;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        /* ── hamburger ── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          flex-shrink: 0;
        }
        .nav-hamburger span {
          display: block;
          width: 22px; height: 2px;
          background: #0d1b2e;
          border-radius: 2px;
          transition: all 0.2s ease;
        }
        [data-theme='dark'] .nav-hamburger span { background: #dde6f0; }
        .nav-hamburger:hover span { opacity: 0.7; }

        /* ── sr-only ── */
        .sr-only {
          position: absolute; width: 1px; height: 1px;
          padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0,0,0,0); white-space: nowrap; border: 0;
        }

        /* ══════════════════════════════════════════
           MOBILE MENU
        ══════════════════════════════════════════ */
        .nav-mobile-menu {
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: #ffffff;
          border-bottom: 1px solid #e9eaec;
          padding: 1.25rem 2.25rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          z-index: 199;
          animation: menuSlideDown 0.18s ease both;
        }
        [data-theme='dark'] .nav-mobile-menu {
          background: #0d1520;
          border-bottom-color: #1c2a38;
        }
        .nav-mobile-menu a {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.825rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #3d4a58;
          text-decoration: none;
          padding: 0.2rem 0;
          transition: color 0.15s;
        }
        .nav-mobile-menu a:hover { color: #0d1b2e; }
        [data-theme='dark'] .nav-mobile-menu a       { color: #8a9aaa; }
        [data-theme='dark'] .nav-mobile-menu a:hover { color: #dde6f0; }

        @keyframes menuSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ══════════════════════════════════════════
           RESPONSIVE
        ══════════════════════════════════════════ */
        @media (max-width: 700px) {
          .nav-links    { display: none; }
          .nav-hamburger { display: flex; }
          .nav-inner    { padding: 0 1.25rem; height: 58px; }
        }
        @media (min-width: 701px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>

      {/* ── NAV BAR ── */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
        <div className="nav-inner">
          {/* LEFT: logo */}
          <a href="#hero" className="nav-identity" aria-label="Go to top">
            <img src="/logo.svg" alt="Iqbal Hossain Logo" className="logo-img" />
          </a>

          {/* RIGHT: nav links + theme toggle + hamburger */}
          <div className="nav-right">
            <ul className="nav-links" id="nav-links-desktop">
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>

            <button
              id="theme-toggle-btn"
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-pressed={isDark}
              aria-label={`Switch to ${nextLabel} mode`}
            >
              <span className="sr-only">Switch to {nextLabel} mode</span>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              id="nav-hamburger-btn"
              className="nav-hamburger"
              onClick={() => setOpen(o => !o)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>

        </div>
      </nav>

      <div id="mobile-navigation" className={`mobile-nav ${isOpen ? 'mobile-nav--open' : ''}`} aria-hidden={!isOpen}>
        <div className="container mobile-nav-inner">
          {links.map((link) => <a key={link.href} href={link.href} tabIndex={isOpen ? 0 : -1} onClick={closeMenu}>{link.label}</a>)}
          <a href="/Md_Iqbal_Hossain_CV.pdf" download tabIndex={isOpen ? 0 : -1} onClick={closeMenu}>Download CV</a>
        </div>
      </div>
    </header>
  );
}
