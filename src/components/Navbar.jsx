import { useState, useEffect } from 'react';

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Kaggle',       href: '#kaggle' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact',      href: '#contact' },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v3.2M12 18.3v3.2M4.3 4.3l2.3 2.3M17.4 17.4l2.3 2.3M2.5 12h3.2M18.3 12h3.2M4.3 19.7l2.3-2.3M17.4 6.6l2.3-2.3" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M15.2 2.8c-4 1-7 4.6-7 9 0 5.2 4.2 9.4 9.4 9.4 1.8 0 3.4-.5 4.8-1.4-1.3.3-2.7.2-4-.2-3.9-1.3-6.7-5-6.7-9.2 0-2.4.9-4.6 2.4-6.2z" />
    </svg>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const isDark       = theme === 'dark';
  const nextLabel    = isDark ? 'Light' : 'Dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
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
          background: #ffffff;
          border-bottom: 1px solid #e9eaec;
          transition: box-shadow 0.3s ease;
        }
        .nav.nav--scrolled {
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
        }

        /* dark-mode shell */
        [data-theme='dark'] .nav {
          background: #0d1520;
          border-bottom-color: #1c2a38;
        }
        [data-theme='dark'] .nav.nav--scrolled {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
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

        /* ── circular photo ── */
        .nav-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          display: block;
          flex-shrink: 0;
          /* clean border + single soft shadow, zero accent color */
          border: 1.5px solid rgba(0, 0, 0, 0.08);
          box-shadow:
            0 1px 3px  rgba(0, 0, 0, 0.10),
            0 4px 12px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .nav-identity:hover .nav-avatar {
          box-shadow:
            0 2px 6px  rgba(0, 0, 0, 0.12),
            0 8px 20px rgba(0, 0, 0, 0.11);
          transform: scale(1.04);
        }
        [data-theme='dark'] .nav-avatar {
          border-color: rgba(255, 255, 255, 0.10);
          box-shadow:
            0 1px 3px  rgba(0, 0, 0, 0.35),
            0 4px 14px rgba(0, 0, 0, 0.30);
        }

        /* ── name + subtitle ── */
        .nav-identity-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          line-height: 1;
        }
        .nav-identity-name {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.925rem;
          font-weight: 700;
          color: #0d1b2e;
          letter-spacing: -0.02em;
        }
        .nav-identity-role {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.70rem;
          font-weight: 400;
          color: #9aa3ae;
          letter-spacing: 0.01em;
        }

        /* dark overrides */
        [data-theme='dark'] .nav-identity-name { color: #dde6f0; }
        [data-theme='dark'] .nav-identity-role { color: #6b7e92; }

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
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.73rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #5a6472;
          text-decoration: none;
          transition: color 0.15s;
        }
        .nav-links a:hover { color: #0d1b2e; }
        [data-theme='dark'] .nav-links a       { color: #8a9aaa; }
        [data-theme='dark'] .nav-links a:hover { color: #dde6f0; }

        /* ── theme toggle ── */
        .theme-toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px; height: 34px;
          border-radius: 8px;
          border: 1px solid #e2e5e9;
          background: #f7f8fa;
          color: #4a5568;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s,
                      color 0.15s, transform 0.15s;
          flex-shrink: 0;
        }
        .theme-toggle svg { width: 15px; height: 15px; display: block; }
        .theme-toggle:hover {
          background: #edf0f3;
          border-color: #c8cdd4;
          transform: translateY(-1px);
        }
        .theme-toggle:active { transform: translateY(0); }
        [data-theme='dark'] .theme-toggle {
          background: #142030;
          border-color: #1e2f42;
          color: #8a9aaa;
        }
        [data-theme='dark'] .theme-toggle:hover {
          background: #1a2d40;
          border-color: #2a3f55;
        }

        /* ── hamburger ── */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-shrink: 0;
        }
        .nav-hamburger span {
          display: block;
          width: 20px; height: 1.5px;
          background: #4a5568;
          border-radius: 2px;
          transition: background 0.2s;
        }
        [data-theme='dark'] .nav-hamburger span { background: #8a9aaa; }

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
          .nav-avatar   { width: 36px; height: 36px; }
        }
        @media (min-width: 701px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>

      {/* ── NAV BAR ── */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="banner">
        <div className="nav-inner">
<<<<<<< Updated upstream

          {/* LEFT: circular avatar + name + subtitle */}
          <a href="#hero" className="nav-identity" aria-label="Go to top">
            <img
              src="/profile1.png"
              alt="Iqbal Hossain"
              className="nav-avatar"
              id="nav-avatar-img"
            />
            <div className="nav-identity-text">
              <span className="nav-identity-name">Iqbal Hossain</span>
              <span className="nav-identity-role">AI Engineer</span>
            </div>
          </a>

          {/* RIGHT: nav links + theme toggle + hamburger */}
          <div className="nav-right">
            <ul className="nav-links" id="nav-links-desktop">
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
=======
          <a href="#hero" className="nav-logo">
            <img src="/logo.svg" alt="Logo" style={{ height: '32px' }} />
          </a>
          <div className="nav-actions">
            <ul className="nav-links">
              {links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
>>>>>>> Stashed changes
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

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          className="nav-mobile-menu"
          id="nav-mobile-menu"
          onClick={() => setOpen(false)}
        >
          {links.map(l => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
