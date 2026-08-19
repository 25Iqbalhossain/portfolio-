const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/25Iqbalhossain' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/25-iqbal-hossain/' },
  { label: 'Kaggle', href: 'https://www.kaggle.com/iqbalhossain25' },
  { label: 'Email', href: 'mailto:25ikbalhossain@gmail.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* -- Upper Footer Grid -- */}
        <div className="footer-top-grid">
          {/* Brand & Summary Column */}
          <div className="footer-brand-col">
            <a className="footer-brand" href="#hero">
              <img src="/favicon.svg" alt="" />
              <span>MD. IQBAL HOSSAIN</span>
            </a>
            <p className="footer-role">Software Engineer (AI) · AI Researcher</p>
            <p className="footer-bio">
              Architecting scalable AI, machine learning, NLP, and LLM applications driven by applied research and production-first engineering.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <span className="footer-col-title">NAVIGATION</span>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact Column */}
          <div className="footer-social-col">
            <span className="footer-col-title">CONNECT</span>
            <ul className="footer-social-list">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <span>{s.label}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* -- Bottom Bar -- */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {currentYear} Md. Iqbal Hossain. All rights reserved.
          </p>

          <div className="footer-status-pill">
            <span className="status-dot" />
            <span>Open to AI / ML / Research Opportunities</span>
          </div>

          <a href="#hero" className="footer-back-top" aria-label="Back to top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
