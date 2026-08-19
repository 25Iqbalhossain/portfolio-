import { useEffect, useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'Certificates', href: '#certificates' },
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
            <span>Download CV</span><b aria-hidden="true">&#8595;</b>
          </a>
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
            <span /><span />
          </button>
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
