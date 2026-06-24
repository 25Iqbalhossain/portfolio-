export default function About() {
  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
          padding: 1.5rem 0;
          border-top: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }
        .stat-num {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          color: var(--ink);
          line-height: 1;
          display: block;
        }
        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-top: 0.25rem;
          display: block;
        }
        .about-sidebar {
          padding-top: 0.5rem;
        }
        .info-block {
          margin-bottom: 2rem;
        }
        .info-block h4 { margin-bottom: 0.75rem; }
        .info-row {
          display: flex; justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--ink-2);
          padding: 0.4rem 0;
          border-bottom: 1px solid var(--rule);
        }
        .info-row span:first-child { color: var(--ink-3); }
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-stats { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
          .stat-num { font-size: 2rem; }
        }
      `}</style>
      <section id="about">
        <div className="container">
          <span className="section-label">About</span>
          <div className="about-grid">
            <div>
              <h2>Bridging AI research<br /><em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>& production systems</em></h2>
              <p>
                Md. Iqbal Hossain is a Software Engineer (AI) at Orange Business Development Ltd and an AI/ML Engineer
                with practical experience across healthcare, government, and publishing sectors.
                He specializes in LLM architectures, multimodal pipelines, and deploying
                intelligent systems that operate at real-world scale.
              </p>
              <p>
                Previously engineered multilingual speech-to-text pipelines and avatar chatbots
                at Time Research &amp; Innovation Ltd (Portsmouth, UK). Also serving as a Researcher &amp; Reviewer
                at NextStepWriters Publications BD, contributing to AI/ML academic discourse. My work has reduced
                onboarding Q&amp;A time by 25–40% and improved speech recognition accuracy by 15–25% in production.
              </p>
              <p>
                🎓 BSc in Computer Science &amp; Engineering (CGPA 3.67/4.00) from UITS.
                ML Certified – Cambridge International Qualification (UK) ·
                Cloud Computing Certified – NASBA (USA).
                Research submitted to ACM TCPS and IEEE TCSS.
              </p>

              <div className="about-stats">
                <div>
                  <span className="stat-num">3+</span>
                  <span className="stat-label">Companies</span>
                </div>
                <div>
                  <span className="stat-num">9+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div>
                  <span className="stat-num">3.67</span>
                  <span className="stat-label">CGPA / 4.00</span>
                </div>
              </div>

              <a href="mailto:25ikbalhossain@gmail.com" className="btn">Contact me</a>
            </div>

            <aside className="about-sidebar">
              <div className="info-block">
                <h4>Details</h4>
                {[
                  ['Location', 'Dhaka, BD'],
                  ['Nationality', 'Bangladeshi'],
                  ['Passport', 'A17663185'],
                  ['Language', 'Bangla, English (C2)'],
                ].map(([k, v]) => (
                  <div className="info-row" key={k}>
                    <span>{k}</span><span>{v}</span>
                  </div>
                ))}
              </div>
              <div className="info-block">
                <h4>Links</h4>
                {[
                  ['GitHub', 'github.com/25Iqbalhossain', 'https://github.com/25Iqbalhossain'],
                  ['LinkedIn', 'linkedin.com/in/25-iqbal-hossain', 'https://www.linkedin.com/in/25-iqbal-hossain/'],
                  ['Email', '25ikbalhossain@gmail.com', 'mailto:25ikbalhossain@gmail.com'],
                ].map(([k, v, href]) => (
                  <div className="info-row" key={k}>
                    <span>{k}</span>
                    <a href={href} target="_blank" rel="noreferrer"
                      style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', textDecoration: 'none', maxWidth: '55%', textAlign: 'right', wordBreak: 'break-all' }}>
                      {v}
                    </a>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
