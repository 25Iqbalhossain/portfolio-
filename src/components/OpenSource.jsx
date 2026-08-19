import React from "react";

const packages = [
  {
    name: "fastapi-rag",
    version: "0.1.x",
    license: "MIT",
    pypi: "https://pypi.org/project/fastapi-rag/",
    github: "https://github.com/25Iqbalhossain",
    tagline: "Enterprise AI Backend Generator",
    description:
      "A sophisticated CLI tool that scaffolds production-grade AI backends — complete, modular ecosystems for RAG applications, specialized AI agents, and high-performance SaaS platforms.",
    install: "pip install fastapi-rag",
    highlights: [
      "Intelligent LLM-based routing & agent orchestration",
      "Stateful multi-turn chat with built-in persistence",
      "Async document ingestion with background RAG indexing",
      "JWT auth, Prometheus metrics & JSON logging out of the box",
      "Swappable providers: OpenAI / Ollama, Qdrant / PgVector, Redis",
    ],
    tags: ["Python", "FastAPI", "RAG", "LLM", "CLI", "AI Backend"],
    providers: [
      { label: "LLMs", value: "OpenAI · Ollama · Anthropic" },
      { label: "Vector DBs", value: "Qdrant · Chroma · PgVector · Pinecone" },
      { label: "Databases", value: "PostgreSQL · MySQL" },
      { label: "Queues", value: "Celery + Redis · Dragonfly" },
    ],
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="section opensource-section" aria-labelledby="opensource-title">
      <div className="container">
        <div className="section-header">
          <div className="section-index">05 <span>Open Source</span></div>
          <div>
            <p className="eyebrow">PyPI Packages &amp; Open Source</p>
            <h2 id="opensource-title">Tools built for the community.</h2>
          </div>
        </div>

        <div className="os-list">
          {packages.map((pkg) => (
            <article className="os-card" key={pkg.name}>

              {/* Left: Info Panel */}
              <div className="os-info">
                <div className="os-badges">
                  <a className="os-badge os-badge--pypi" href={pkg.pypi} target="_blank" rel="noreferrer">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.001 1C8.592 1 6.37 2.586 6.37 2.586L6.367 7.5h5.768v1H4.028S1 8.173 1 12.016C1 15.858 3.684 17 3.684 17h2.21v-2.916s-.119-2.684 2.64-2.684h4.554s2.56.041 2.56-2.473V4.12S15.987 1 12.001 1zm-2.5 1.875a.937.937 0 1 1 0 1.875.937.937 0 0 1 0-1.875z"/>
                      <path d="M12.001 23c3.409 0 5.631-1.586 5.631-1.586l.003-4.914h-5.768v-1h8.107S23 15.827 23 11.984C23 8.142 20.316 7 20.316 7h-2.21v2.916s.119 2.684-2.64 2.684h-4.554s-2.56-.041-2.56 2.473v5.807S8.013 23 12.001 23zm2.5-1.875a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875z"/>
                    </svg>
                    PyPI
                  </a>
                  <span className="os-badge os-badge--license">{pkg.license}</span>
                  <span className="os-badge os-badge--version">v{pkg.version}</span>
                </div>

                <div className="os-name-row">
                  <h3 className="os-name">{pkg.name}</h3>
                  <p className="os-tagline">{pkg.tagline}</p>
                </div>

                <p className="os-description">{pkg.description}</p>

                <div className="os-install">
                  <span className="os-install-label">Install</span>
                  <code className="os-install-cmd">{pkg.install}</code>
                </div>

                <div className="os-actions">
                  <a className="cert-btn cert-btn--primary" href={pkg.pypi} target="_blank" rel="noreferrer">
                    View on PyPI <b aria-hidden="true">&#8599;</b>
                  </a>
                  <a className="cert-btn cert-btn--secondary" href={pkg.github} target="_blank" rel="noreferrer">
                    GitHub <b aria-hidden="true">&#8599;</b>
                  </a>
                </div>

                <div className="tag-list os-tags">
                  {pkg.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>

              {/* Right: Feature Panel */}
              <div className="os-features">
                <p className="os-features-label">What is included</p>
                <ul className="os-highlights">
                  {pkg.highlights.map((h) => (
                    <li key={h}>
                      <span className="os-check" aria-hidden="true">&#10022;</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="os-providers">
                  <p className="os-features-label" style={{marginTop: "24px"}}>Supported providers</p>
                  {pkg.providers.map((p) => (
                    <div className="os-provider-row" key={p.label}>
                      <span className="os-provider-label">{p.label}</span>
                      <span className="os-provider-value">{p.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
