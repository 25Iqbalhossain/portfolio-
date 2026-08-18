const projects = [
  {
    title: 'AI-Based Recommendation System',
    period: 'Aug 2024 - Dec 2024',
    type: 'Intelligent search',
    description: 'Production recommendation engine powering MyGov smart search at Orange Bd Ltd. It combines collaborative filtering and content-based approaches for personalised government-service discovery.',
    tags: ['Recommendation', 'Python', 'AWS'],
    link: 'https://github.com/25Iqbalhossain',
  },
  {
    title: 'Avatar Chatbot (LLM) - D-ID API',
    period: 'Sep 2024 - Nov 2025',
    type: 'Conversational AI',
    description: 'Avatar-driven conversational agent using D-ID, HeyGen, and AWS with Calendar and Gmail function calling, session memory, and an analytics dashboard.',
    tags: ['LLM', 'D-ID', 'AWS', 'FastAPI'],
    link: 'https://github.com/25Iqbalhossain',
  },
  {
    title: 'Multilingual Speech-to-Text Pipeline',
    period: '2025',
    type: 'Speech and NLP',
    description: 'ASR pipeline using Whisper and Hugging Face Transformers for Bengali, English, Mandarin, and Korean, with VAD, punctuation restoration, and batch processing.',
    tags: ['Whisper', 'NLP', 'Multilingual', 'Python'],
    link: 'https://github.com/25Iqbalhossain',
  },
  {
    title: 'Medical ChatBot - LangChain + FastAPI',
    period: 'Sep 2024 - Nov 2024',
    type: 'Healthcare AI',
    description: 'Healthcare triage chatbot built with LangChain and Hugging Face LLMs, served through FastAPI and designed for low-resource clinical scenarios.',
    tags: ['LangChain', 'RAG', 'FastAPI', 'Healthcare'],
    link: 'https://github.com/25Iqbalhossain',
  },
  {
    title: 'CO2 Injection Series Prediction',
    period: '2024',
    type: 'Environmental AI',
    description: 'Time-series forecasting model for carbon-containment validation, predicting CO2 injection-rate deltas with LSTM and temporal convolutional networks.',
    tags: ['Time Series', 'LSTM', 'Environmental AI'],
    link: 'https://github.com/25Iqbalhossain',
  },
  {
    title: 'Heyhomex Property Data Scraper',
    period: '2025',
    type: 'Data pipeline',
    description: 'Property-data scraping and indexing pipeline for semantic search using OpenSearch and vector embeddings, built with Python, FastAPI, and automated workflows.',
    tags: ['Python', 'FastAPI', 'Web Scraping', 'OpenSearch', 'Data Pipeline'],
    link: 'https://github.com/25Iqbalhossain/Heyhomex-property-data-scraper',
  },
];

function ProjectDiagram({ index }) {
  return (
    <div className={`project-diagram project-diagram--${index % 4}`} aria-hidden="true">
      <svg viewBox="0 0 520 340" fill="none">
        <path className="diagram-line" d="M72 170H202M318 170H448M260 65V275" />
        <path className="diagram-line diagram-line--soft" d="M92 82C168 20 221 71 260 137c41 69 103 106 173 47" />
        <circle className="diagram-node" cx="72" cy="170" r="18" />
        <circle className="diagram-node diagram-node--accent" cx="260" cy="170" r="45" />
        <circle className="diagram-node" cx="448" cy="170" r="18" />
        <circle className="diagram-node diagram-node--small" cx="260" cy="65" r="12" />
        <circle className="diagram-node diagram-node--small" cx="260" cy="275" r="12" />
      </svg>
      <span className="diagram-label diagram-label--left">INPUT</span>
      <span className="diagram-label diagram-label--center">MODEL</span>
      <span className="diagram-label diagram-label--right">OUTPUT</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header">
          <div className="section-index">04 <span>Selected work</span></div>
          <div><p className="eyebrow">Systems in practice</p><h2 id="projects-title">Applied AI with a clear path to use.</h2></div>
        </div>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article className={`project-row ${index % 2 ? 'project-row--reverse' : ''}`} key={project.title}>
              <ProjectDiagram index={index} />
              <div className="project-content">
                <div className="project-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.period}</span><span>{project.type}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer"><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.link} target="_blank" rel="noreferrer">GitHub <b aria-hidden="true">↗</b></a></div>
              </div>
            </article>
          ))}
        </div>
        <a className="button button--outline" href="https://github.com/25Iqbalhossain" target="_blank" rel="noreferrer">View all on GitHub <b aria-hidden="true">↗</b></a>
      </div>
    </section>
  );
}
