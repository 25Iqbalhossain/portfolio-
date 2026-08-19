const publications = [
  {
    status: 'Published',
    year: '2026',
    title: 'A machine-learning framework for enhancing cognitive function using tDCS and Brain Gym intervention',
    venue: 'IEEE Access',
    url: 'https://ieeexplore.ieee.org/document/11502543/',
    description: 'Investigates how a combined tDCS and Brain Gym protocol, guided by a machine learning framework, can enhance human cognitive performance.',
  },
  {
    status: 'Under review',
    year: '2026',
    title: 'Agentic AI Journalist: A User-Centered Accessibility Framework for Real-Time Global News',
    venue: 'ACM Transactions on Computing for People with Disabilities (TCPS)',
    description: 'Proposes an agentic AI framework that makes real-time global news more accessible through user-centered design, automated summarisation, and multimodal presentation.',
  },
  {
    status: 'Under review',
    year: '2026',
    title: 'Theory-Driven Hybrid Forecasting & Deployment Framework for Place-Based Crime Reduction in Bangladesh',
    venue: 'IEEE Transactions on Computational Social Systems (TCSS)',
    description: 'Combines criminological theory with modern time-series forecasting models to predict and inform place-based crime intervention strategies in Bangladesh.',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="section publications-section" aria-labelledby="publications-title">
      <div className="container">
        <div className="section-header">
          <div className="section-index">07 <span>Research</span></div>
          <div>
            <p className="eyebrow">Research and publications</p>
            <h2 id="publications-title">Questions worth carrying into the world.</h2>
          </div>
        </div>
        <div className="publications-list">
          {publications.map((publication, index) => (
            <article className="publication-row" key={publication.title}>
              <div className="publication-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="publication-meta">
                <span>{publication.status}</span>
                <span>{publication.year}</span>
              </div>
              <div className="publication-content">
                <h3>
                  {publication.url ? (
                    <a href={publication.url} target="_blank" rel="noreferrer" className="publication-title-link">
                      {publication.title} <span className="pub-link-icon" aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    publication.title
                  )}
                </h3>
                <p className="publication-venue">{publication.venue}</p>
                <p>{publication.description}</p>
                {publication.url && (
                  <a href={publication.url} target="_blank" rel="noreferrer" className="publication-link-btn">
                    View on IEEE Xplore <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="publication-note">Papers marked under review are not yet formally published.</p>
      </div>
    </section>
  );
}
