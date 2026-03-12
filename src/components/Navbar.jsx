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
          background: ${scrolled ? 'rgba(244,241,235,0.96)' : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(12px)' : 'none'};
          border-bottom: ${scrolled ? '1px solid var(--rule)' : '1px solid transparent'};
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
        .nav-logo {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: -0.01em;
        }
        .nav-logo span { color: var(--accent); }
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
          <a href="#hero" className="nav-logo">Md. Iqbal <span>Hossain</span></a>
          <ul className="nav-links">
            {links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
          </ul>
          <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
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
