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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 200;
          background: ${scrolled ? 'rgba(244,241,235,0.96)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(12px)' : 'none'};
          border-bottom: ${scrolled ? '1px solid var(--rule)' : '1px solid transparent'};
          transition: all 0.25s;
        }
        [data-theme="dark"] .nav {
          background: ${scrolled ? 'rgba(15,14,12,0.96)' : 'transparent'};
        }
        .nav-inner {
          max-width: var(--max-w-wide);
          margin: 0 auto;
          padding: 0 3rem;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .nav-logo span { color: var(--accent); }
        .nav-right {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .nav-links {
          display: flex; gap: 2rem; list-style: none;
        }
        .nav-links a {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-2);
          text-decoration: none;
          transition: color 0.15s;
        }
        .nav-links a:hover { color: var(--accent); }
        .theme-toggle {
          background: none;
          border: 1px solid var(--rule);
          border-radius: 4px;
          cursor: pointer;
          padding: 6px 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--ink);
          transition: all 0.15s;
        }
        .theme-toggle:hover {
          background: var(--ink);
          color: var(--bg);
        }
        .theme-icon {
          width: 14px;
          height: 14px;
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
          padding: 1.5rem 3rem;
          display: flex; flex-direction: column; gap: 1.2rem;
          z-index: 199;
        }
        .mobile-menu a {
          font-family: var(--font-mono);
          font-size: 0.9rem; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--ink);
          text-decoration: none;
        }
        @media (max-width: 640px) {
          .nav-inner { padding: 0 1.5rem; }
          .mobile-menu { padding: 1.5rem 1.5rem; }
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
          <a href="#hero" className="nav-logo">Md. Iqbal <span>Hossain</span></a>
          <div className="nav-right">
            <ul className="nav-links">
              {links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
            <button 
              className="theme-toggle" 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <>
                  <svg className="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <svg className="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Dark</span>
                </>
              )}
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
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
            style={{ marginTop: '0.5rem' }}
          >
            {darkMode ? (
              <>
                <svg className="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <svg className="theme-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}
