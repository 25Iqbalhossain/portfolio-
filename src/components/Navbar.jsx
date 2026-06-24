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
        .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 200;
          background: var(--nav-bg-strong);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--rule);
          transition: all 0.25s;
        }
        .nav-inner {
          max-width: var(--max-w-wide);
          margin: 0 auto;
          padding: 0 2rem;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-actions {
          display: flex; align-items: center; gap: 1.25rem;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          text-decoration: none;
        }
        .nav-logo-img {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          box-shadow: 0 0 0 3px var(--bg), 0 0 0 4.5px var(--accent);
          object-fit: cover;
          object-position: top center;
          flex-shrink: 0;
          transition: box-shadow 0.2s;
        }
        .nav-logo:hover .nav-logo-img {
          box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--accent);
        }
        .nav-logo-text {
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--ink);
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .nav-logo-text span { color: var(--accent); }
        .nav-links {
          display: flex; gap: 2rem; list-style: none;
        }
        .nav-links a {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-2);
          text-decoration: none;
          transition: color 0.15s;
        }
        .nav-links a:hover { color: var(--accent); }
        .theme-toggle {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid var(--rule);
          background: var(--bg-card);
          color: var(--ink);
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.15s;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .theme-toggle:hover {
          background: var(--bg-alt);
          border-color: var(--ink-3);
          color: var(--ink);
          transform: translateY(-1px);
        }
        .theme-toggle:active { transform: translateY(0); }
        .theme-toggle svg {
          width: 16px; height: 16px; display: block;
        }
        .sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }
        .nav-hamburger {
          display: none;
          background: none; border: none; cursor: pointer;
          flex-direction: column; gap: 4px; padding: 4px;
        }
        .nav-hamburger span {
          display: block; width: 22px; height: 1.5px;
          background: var(--ink); transition: all 0.2s;
        }
        .mobile-menu {
          position: fixed; top: 56px; left: 0; right: 0;
          background: var(--bg);
          border-bottom: 1px solid var(--rule);
          padding: 1.5rem 2rem;
          display: flex; flex-direction: column; gap: 1.2rem;
          z-index: 199;
        }
        .mobile-menu a {
          font-family: var(--font-mono);
          font-size: 0.85rem; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--ink);
          text-decoration: none;
        }
        @media (max-width: 700px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }
        @media (min-width: 701px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <img src="/profile1.png" alt="Iqbal Hossain" className="nav-logo-img" />
            <span className="nav-logo-text">Md. Iqbal <span>Hossain</span></span>
          </a>
          <div className="nav-actions">
            <ul className="nav-links">
              {links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-pressed={theme === 'dark'}
              aria-label={`Switch to ${nextThemeLabel} mode`}
            >
              <span className="sr-only">{`Switch to ${nextThemeLabel} mode`}</span>
              {showSun ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu" onClick={() => setOpen(false)}>
          {links.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </div>
      )}
    </>
  );
}
