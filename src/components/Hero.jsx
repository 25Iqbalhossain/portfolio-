import { useState, useEffect } from 'react';

const roles = [
  'Machine Learning Engineer',
  'LLM & RAG Architect',
  'AI Research Consultant',
  'Software Engineer (AI)',
];

function Typewriter({ texts }) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = texts[idx % texts.length];
    let t;
    if (typing) {
      if (display.length < current.length) {
        t = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 55);
      } else {
        t = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(display.slice(0, -1)), 25);
      } else {
        setIdx(i => i + 1);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [display, typing, idx, texts]);

  return (
    <span>
      {display}
      <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent)' }}>_</span>
    </span>
  );
}

export default function Hero() {
  return (
    <>
      <style>{`
        #hero {
          min-height: 100vh;
          display: flex; align-items: center;
          padding-top: 96px;
          border-top: none;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 4rem;
          align-items: end;
          padding-bottom: 4rem;
        }
        .hero-eyebrow {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1.25rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .hero-eyebrow::before {
          content: '';
          display: block; width: 2rem; height: 1px;
          background: var(--accent);
        }
        .hero-name {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 7vw, 5.5rem);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--ink);
          margin-bottom: 1.25rem;
        }
        .hero-name em {
          font-style: italic;
          color: var(--accent);
        }
        .hero-role {
          font-family: var(--font-mono);
          font-size: clamp(0.85rem, 2vw, 1.05rem);
          color: var(--ink-2);
          margin-bottom: 2rem;
          min-height: 1.6em;
        }
        .hero-bio {
          max-width: 560px;
          margin-bottom: 2.5rem;
          background: var(--bg-card);
          border: 1px solid var(--rule);
          border-left: 3px solid var(--accent);
          border-radius: 4px;
          padding: 1rem 1.25rem;
        }
        .hero-bio-headline {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--ink);
          font-weight: 600;
          letter-spacing: 0.03em;
          line-height: 1.6;
          margin-bottom: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--rule);
          display: flex;
          flex-wrap: wrap;
          gap: 0.25rem 0.5rem;
          align-items: center;
        }
        .hero-bio-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: var(--bg-alt);
          border: 1px solid var(--rule);
          border-radius: 3px;
          padding: 2px 8px;
          font-size: 0.68rem;
          color: var(--ink-2);
          white-space: nowrap;
        }
        .hero-bio-badge.accent {
          background: rgba(193,68,14,0.08);
          border-color: rgba(193,68,14,0.25);
          color: var(--accent);
          font-weight: 600;
        }
        :root[data-theme='dark'] .hero-bio-badge.accent {
          background: rgba(32,190,255,0.08);
          border-color: rgba(32,190,255,0.25);
          color: var(--accent);
        }
        .hero-bio-body {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .hero-bio-row {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--ink-2);
          line-height: 1.5;
          font-family: var(--font-sans);
        }
        .hero-bio-row-icon {
          font-size: 0.82rem;
          flex-shrink: 0;
          margin-top: 0.05rem;
        }
        .hero-ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
        .hero-photo {
          width: 210px;
          flex-shrink: 0;
          align-self: flex-start;
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-photo-inner {
          width: 210px; height: 210px;
          overflow: hidden;
          position: relative;
          border-radius: 50%;
          border: 3px solid var(--accent);
          box-shadow: 0 0 0 6px var(--bg), 0 0 0 8px var(--accent);
        }
        .hero-photo-inner img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: top center;
          filter: grayscale(10%);
          border-radius: 50%;
        }
        .hero-photo-caption {
          font-family: var(--font-mono);
          font-size: 0.65rem; letter-spacing: 0.08em;
          color: var(--ink-3);
          margin-top: 0.5rem;
          text-align: right;
        }
        .hero-socials {
          display: flex; gap: 1rem; margin-top: 0.75rem;
          flex-wrap: wrap;
        }
        .hero-socials a {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-3);
          text-decoration: none;
          transition: color 0.15s;
        }
        .hero-socials a:hover { color: var(--accent); }
        .hero-scroll {
          position: absolute; bottom: 2rem; left: 50%;
          transform: translateX(-50%);
          font-family: var(--font-mono);
          font-size: 0.65rem; letter-spacing: 0.15em;
          color: var(--ink-3);
          text-transform: uppercase;
          display: flex; flex-direction: column;
          align-items: center; gap: 0.4rem;
        }
        .hero-scroll::after {
          content: '';
          width: 1px; height: 40px;
          background: var(--rule);
          animation: slideIn 1.2s ease both;
        }
        @media (max-width: 700px) {
          #hero { padding-top: 84px; }
          .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hero-photo { width: 140px; }
          .hero-photo-inner { width: 140px; height: 140px; border-radius: 50%; }
          .hero-name { font-size: clamp(2.4rem, 10vw, 3.2rem); }
        }
      `}</style>
      <section id="hero" style={{ position: 'relative' }}>
        <div className="container">
          <div className="hero-grid animate-fadeup">
            <div>
              <div className="hero-eyebrow">Software Engineer (AI) @ Orange Business Development · Dhaka 🇧🇩</div>
              <h1 className="hero-name">
                Md. Iqbal<br /><em>Hossain</em>
              </h1>
              <div className="hero-role">
                <Typewriter texts={roles} />
              </div>
              <div className="hero-bio">
                <div className="hero-bio-headline">
                  <span className="hero-bio-badge accent">💼 Software Engineer (AI) @ Orange Business Development Ltd.</span>
                  <span className="hero-bio-badge">🎓 ML Certified – Cambridge International, UK</span>
                  <span className="hero-bio-badge">☁️ Cloud Certified – NASBA (USA)</span>
                </div>
                <div className="hero-bio-body">
                  <div className="hero-bio-row">
                    <span className="hero-bio-row-icon">👨‍💻</span>
                    <span>AI/ML Engineer · Time Research &amp; Innovation Ltd (UK)</span>
                  </div>
                  <div className="hero-bio-row">
                    <span className="hero-bio-row-icon">📝</span>
                    <span>Researcher &amp; Reviewer · NextStepWriters Publications BD — AI/ML academic discourse</span>
                  </div>
                  <div className="hero-bio-row">
                    <span className="hero-bio-row-icon">🎓</span>
                    <span>BSc in CSE · UITS · Dhaka 🇧🇩</span>
                  </div>
                  <div className="hero-bio-row">
                    <span className="hero-bio-row-icon">🔥</span>
                    <span>Python · TensorFlow · PyTorch · Large Language Models (LLMs)</span>
                  </div>
                  <div className="hero-bio-row">
                    <span className="hero-bio-row-icon">🔗</span>
                    <a href="https://github.com/25Iqbalhossain" target="_blank" rel="noreferrer"
                      style={{color:'var(--accent)',textDecoration:'none',fontFamily:'var(--font-mono)',fontSize:'0.78rem'}}>
                      github.com/25Iqbalhossain
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero-ctas">
                <a href="#contact" className="btn">Get in touch</a>
                <a href="#projects" className="btn btn--ghost">View work →</a>
              </div>
              <div className="hero-socials" style={{ marginTop: '1.75rem' }}>
                <a href="https://github.com/25Iqbalhossain" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/25-iqbal-hossain/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:25ikbalhossain@gmail.com">Email</a>
                <a href="tel:+8801788774822">+880 1788 774822</a>
              </div>
            </div>
            <div className="hero-photo">
              <div className="hero-photo-inner">
                <img src="/profile.png" alt="Md. Iqbal Hossain"
                  onError={e => {
                    e.target.parentNode.innerHTML = `<div style="width:100%;height:100%;background:var(--bg-alt);display:flex;align-items:center;justify-content:center;font-family:var(--font-serif);font-size:3rem;color:var(--ink-3)">IH</div>`;
                  }}
                />
              </div>
              <div className="hero-photo-caption">Dhaka, BD — 2025</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll animate-fadeup-3">scroll</div>
      </section>
    </>
  );
}

