const pubs = [
  {
    status: 'Published',
    year: '2025',
    title: 'A machine-learning framework for enhancing cognitive function using tDCS and Brain Gym intervention',
    venue: 'RAAICON 2025',
    desc: 'Investigates how a combined tDCS and Brain Gym protocol, guided by a machine learning framework, can enhance human cognitive performance.',
    color: 'var(--accent-3)',
    statusTag: 'green',
  },
  {
    status: 'Under Review',
    year: '2025',
    title: 'Agentic AI Journalist: A User-Centered Accessibility Framework for Real-Time Global News',
    venue: 'ACM Transactions on Computing for People with Disabilities (TCPS)',
    desc: 'Proposes an agentic AI framework that makes real-time global news more accessible through user-centered design, automated summarisation, and multimodal presentation.',
    color: 'var(--accent)',
    statusTag: 'red',
  },
  {
    status: 'Under Review',
    year: '2025',
    title: 'Theory-Driven Hybrid Forecasting & Deployment Framework for Place-Based Crime Reduction in Bangladesh',
    venue: 'IEEE Transactions on Computational Social Systems (TCSS)',
    desc: 'Combines criminological theory with modern time-series forecasting models to predict and inform place-based crime intervention strategies in Bangladesh.',
    color: 'var(--accent-2)',
    statusTag: 'blue',
  },
  {
    status: 'Under Review',
    year: '2025',
    title: 'LangChain-Enhanced Chatbots in Low-Resource Clinical Environments',
    venue: 'Peer Review (Healthcare AI)',
    desc: 'Explores deploying LangChain-based conversational AI systems in triage and clinical settings where compute resources and connectivity are constrained.',
    color: '#8B6914',
    statusTag: 'ink',
  },
  {
    status: 'In Preparation',
    year: '2025',
    title: 'Transformer-Based Architecture Using Encoder-Decoder Optimization for Low-Resource NLP',
    venue: 'Manuscript in Preparation',
    desc: 'Improving encoder-decoder performance for low-resource and multilingual NLP, with a focus on Bengali and other South/Southeast Asian languages.',
    color: 'var(--ink-3)',
    statusTag: 'ink',
  },
];

export default function Publications() {
  return (
    <>
      <style>{`
        .pub-item {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 2rem;
          padding-bottom: 2rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--rule);
        }
        .pub-meta {
          font-family: var(--font-mono);
          font-size: 0.7rem; color: var(--ink-3);
          line-height: 1.7;
        }
        .pub-title {
          font-family: var(--font-serif);
          font-size: 1.15rem; font-weight: 400;
          line-height: 1.35; margin-bottom: 0.4rem;
          color: var(--ink);
        }
        .pub-venue {
          font-family: var(--font-mono);
          font-size: 0.75rem; font-style: italic;
          color: var(--ink-3); margin-bottom: 0.6rem;
        }
        .pub-desc {
          font-size: 0.88rem; color: var(--ink-2);
          line-height: 1.65; margin: 0;
        }
        .pub-disclaimer {
          font-family: var(--font-mono);
          font-size: 0.72rem; color: var(--ink-3);
          border: 1px solid var(--rule);
          padding: 0.75rem 1rem;
          margin-top: 1rem;
          background: var(--bg-alt);
        }
        @media (max-width: 600px) {
          .pub-item { grid-template-columns: 1fr; gap: 0.5rem; }
        }
      `}</style>
      <section id="publications">
        <div className="container">
          <span className="section-label">Research</span>
          <h2>Publications</h2>
          <p style={{ marginBottom: '3rem', maxWidth: 500 }}>
            Peer-reviewed work and ongoing research across AI systems, clinical NLP, and computational social science.
          </p>

          {pubs.map((p, i) => (
            <div key={i} className="pub-item">
              <div className="pub-meta">
                <span className={`tag tag--${p.statusTag}`} style={{ marginBottom: '0.4rem' }}>{p.status}</span>
                <div>{p.year}</div>
              </div>
              <div>
                <div className="pub-title">{p.title}</div>
                <div className="pub-venue">{p.venue}</div>
                <p className="pub-desc">{p.desc}</p>
              </div>
            </div>
          ))}

          <div className="pub-disclaimer">
            ℹ︎ &nbsp;Papers marked "Under Review" or "In Preparation" are not yet formally published.
          </div>
        </div>
      </section>
    </>
  );
}
