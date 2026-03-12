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
                Accomplished Machine Learning Engineer with a proven track record of developing
                scalable AI solutions across healthcare, government, and publishing sectors.
                I specialize in LLM architectures, multimodal pipelines, and deploying
                intelligent systems that operate at real-world scale.
              </p>
              <p>
                Currently building Smart Government AI frameworks at Orange Bd Ltd, having
                previously engineered multilingual speech-to-text pipelines and avatar chatbots
                at Time Research & Innovation Ltd (Portsmouth, UK). My work has reduced
                onboarding Q&A time by 25–40% and improved speech recognition accuracy by
                15–25% in production environments.
              </p>
              <p>
                I hold a B.Sc. in Computer Science & Engineering (CGPA 3.67/4.00) from UITS,
                with certifications from Cambridge International Qualification (UK) and Microsoft
                Learn. My research has been submitted to ACM TCPS and IEEE TCSS.
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
