import { useState, useEffect } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Kaggle', href: '#kaggle' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2.5v3.2M12 18.3v3.2M4.3 4.3l2.3 2.3M17.4 17.4l2.3 2.3M2.5 12h3.2M18.3 12h3.2M4.3 19.7l2.3-2.3M17.4 6.6l2.3-2.3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M15.2 2.8c-4 1-7 4.6-7 9 0 5.2 4.2 9.4 9.4 9.4 1.8 0 3.4-.5 4.8-1.4-1.3.3-2.7.2-4-.2-3.9-1.3-6.7-5-6.7-9.2 0-2.4.9-4.6 2.4-6.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const nextThemeLabel = theme === 'dark' ? 'Light' : 'Dark';
  const showSun = theme === 'dark';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 200;
          background: #ffffff;
          border-bottom: 1px solid #e8e8ec;
          transition: box-shadow 0.3s ease;
        }
        .nav.scrolled {
          box-shadow: 0 1px 12px rgba(0, 0, 0, 0.06);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2.5rem;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ── IDENTITY BLOCK ── */
        .nav-identity {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-avatar-wrap {
          position: relative;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
        }
        .nav-avatar-wrap::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e0e0e8 0%, #c8c8d8 100%);
          z-index: 0;
        }
        .nav-avatar {
          position: relative;
          z-index: 1;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          border: 2px solid #ffffff;
          box-shadow:
            0 2px 8px rgba(0, 0, 0, 0.12),
            0 0 0 1.5px rgba(0, 0, 0, 0.06);
          display: block;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .nav-identity:hover .nav-avatar {
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.16),
            0 0 0 2px rgba(0, 0, 0, 0.08);
          transform: scale(1.03);
        }
        .nav-name-block {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .nav-name {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.975rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.025em;
          line-height: 1.2;
        }
        .nav-subtitle {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.72rem;
          font-weight: 400;
          color: #94a3b8;
          letter-spacing: 0.01em;
          line-height: 1;
        }

        /* ── DARK THEME OVERRIDES ── */
        [data-theme='dark'] .nav {
          background: #0F1B26;
          border-bottom-color: #1E2A36;
        }
        [data-theme='dark'] .nav.scrolled {
          box-shadow: 0 1px 16px rgba(0, 0, 0, 0.35);
        }
        [data-theme='dark'] .nav-name {
          color: #e7eef6;
        }
        [data-theme='dark'] .nav-subtitle {
          color: #7d8a99;
        }
        [data-theme='dark'] .nav-avatar {
          border-color: #1e2a36;
          box-shadow:
            0 2px 10px rgba(0, 0, 0, 0.4),
            0 0 0 1.5px rgba(255, 255, 255, 0.06);
        }
        [data-theme='dark'] .nav-avatar-wrap::before {
          background: linear-gradient(135deg, #1e2a36 0%, #2a3a4a 100%);
        }

        /* ── NAV LINKS ── */
        .nav-actions {
          display: flex; align-items: center; gap: 1.5rem;
        }
        .nav-links {
          display: flex; gap: 2rem; list-style: none;
        }
        .nav-links a {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #64748b;
          text-decoration: none;
          transition: color 0.15s;
        }
        .nav-links a:hover { color: #0f172a; }
        [data-theme='dark'] .nav-links a { color: #b2becc; }
        [data-theme='dark'] .nav-links a:hover { color: #e7eef6; }

        /* ── THEME TOGGLE ── */
        .theme-toggle {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          color: #334155;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.15s;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .theme-toggle:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
          transform: translateY(-1px);
        }
        .theme-toggle:active { transform: translateY(0); }
        .theme-toggle svg {
          width: 16px; height: 16px; display: block;
        }
        [data-theme='dark'] .theme-toggle {
          background: #0e1721;
          border-color: #1e2a36;
          color: #b2becc;
        }
        [data-theme='dark'] .theme-toggle:hover {
          background: #1a2535;
          border-color: #2a3a4a;
        }

        /* ── UTILITY ── */
        .sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }

        /* ── HAMBURGER ── */
        .nav-hamburger {
          display: none;
          background: none; border: none; cursor: pointer;
          flex-direction: column; gap: 4.5px; padding: 4px;
        }
        .nav-hamburger span {
          display: block; width: 22px; height: 1.5px;
          background: #334155; transition: all 0.2s;
        }
        [data-theme='dark'] .nav-hamburger span { background: #b2becc; }

        /* ── MOBILE MENU ── */
        .mobile-menu {
          position: fixed; top: 68px; left: 0; right: 0;
          background: #ffffff;
          border-bottom: 1px solid #e8e8ec;
          padding: 1.5rem 2.5rem;
          display: flex; flex-direction: column; gap: 1.25rem;
          z-index: 199;
          animation: slideDownMenu 0.18s ease;
        }
        [data-theme='dark'] .mobile-menu {
          background: #0F1B26;
          border-bottom-color: #1E2A36;
        }
        .mobile-menu a {
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.875rem; letter-spacing: 0.06em;
          text-transform: uppercase; color: #334155;
          text-decoration: none; font-weight: 500;
        }
        [data-theme='dark'] .mobile-menu a { color: #b2becc; }

        @keyframes slideDownMenu {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 700px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .nav-inner { padding: 0 1.5rem; }
        }
        @media (min-width: 701px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          {/* ── Identity: Avatar + Name + Subtitle ── */}
          <a href="#hero" className="nav-identity" id="nav-identity-link">
            <div className="nav-avatar-wrap">
              <img
                src="/profile1.png"
                alt="Iqbal Hossain"
                className="nav-avatar"
                id="nav-profile-photo"
              />
            </div>
            <div className="nav-name-block">
              <span className="nav-name">Iqbal Hossain</span>
              <span className="nav-subtitle">AI Engineer</span>
            </div>
          </a>

          {/* ── Right side: Nav links + Theme toggle + Hamburger ── */}
          <div className="nav-actions">
            <ul className="nav-links" id="nav-links-list">
              {links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
            <button
              className="theme-toggle"
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-pressed={theme === 'dark'}
              aria-label={`Switch to ${nextThemeLabel} mode`}
            >
              <span className="sr-only">{`Switch to ${nextThemeLabel} mode`}</span>
              {showSun ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              className="nav-hamburger"
              id="nav-hamburger-btn"
              onClick={() => setOpen(o => !o)}
              aria-label="Open navigation menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu" id="mobile-nav-menu" onClick={() => setOpen(false)}>
          {links.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </div>
      )}
    </>
  );
}
