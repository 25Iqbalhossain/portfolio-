export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <style>{`
        .footer {
          border-top: 1px solid var(--rule);
          padding: 2.5rem 0;
          background: var(--bg);
        }
        .footer-inner {
          max-width: var(--max-w-wide);
          margin: 0 auto; padding: 0 2rem;
          display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 1rem;
        }
        .footer-brand {
          font-family: var(--font-serif);
          font-size: 1rem; color: var(--ink);
        }
        .footer-brand span { color: var(--accent); }
        .footer-copy {
          font-family: var(--font-mono); font-size: 0.68rem;
          color: var(--ink-3); letter-spacing: 0.05em;
        }
        .footer-links {
          display: flex; gap: 1.5rem;
        }
        .footer-links a {
          font-family: var(--font-mono); font-size: 0.68rem;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--ink-3); text-decoration: none;
          transition: color 0.15s;
        }
        .footer-links a:hover { color: var(--accent); }
      `}</style>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">Md. Iqbal <span>Hossain</span></div>
          <div className="footer-links">
            <a href="https://github.com/25Iqbalhossain" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/25-iqbal-hossain/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:25ikbalhossain@gmail.com">Email</a>
          </div>
          <div className="footer-copy">© {year} Md. Iqbal Hossain</div>
        </div>
      </footer>
    </>
  );
}
