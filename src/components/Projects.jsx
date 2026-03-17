const projects = [
  {
    title: 'AI-Based Recommendation System',
    period: 'Aug 2024 – Dec 2024',
    desc: 'Designed and deployed a production recommendation engine now powering MyGov smart search at Orange Bd Ltd. Combines collaborative filtering and content-based approaches for personalised government service discovery.',
    tags: ['Recommendation', 'Python', 'AWS'],
    link: 'https://github.com/25Iqbalhossain',
  },
  {
    title: 'Avatar Chatbot (LLM) — D-ID API',
    period: 'Sep 2024 – Nov 2025',
    desc: 'Full-stack avatar-driven conversational agent using D-ID, HeyGen, and AWS. Integrated Calendar and Gmail function calling, session memory, and analytics dashboard. Reduced onboarding Q&A time by 25–40% in production.',
    tags: ['LLM', 'D-ID', 'AWS', 'FastAPI'],
    link: 'https://github.com/25Iqbalhossain',
    featured: true,
  },
  {
    title: 'Multilingual Speech-to-Text Pipeline',
    period: '2025',
    desc: 'Production-grade ASR pipeline using Whisper and Hugging Face Transformers supporting Bengali, English, Mandarin, and Korean. Includes voice-activity detection, punctuation restoration, and batching optimisations — lowered WER by 15–25%.',
    tags: ['Whisper', 'NLP', 'Multilingual', 'Python'],
    link: 'https://github.com/25Iqbalhossain',
    featured: true,
  },
  {
    title: 'Medical ChatBot — LangChain + FastAPI',
    period: 'Sep 2024 – Nov 2024',
    desc: 'Healthcare triage chatbot built on LangChain and Hugging Face LLMs, served via FastAPI. Focused on low-resource clinical deployment scenarios with context-aware retrieval-augmented generation.',
    tags: ['LangChain', 'RAG', 'FastAPI', 'Healthcare'],
    link: 'https://github.com/25Iqbalhossain',
  },
<<<<<<< HEAD
 

=======
  {
    title: 'NeuroDetect — MRI Brain Tumor Analysis',
    period: 'Sep 2024 – Oct 2024',
    desc: 'CNN-based classifier for brain tumor detection from MRI scans. Achieved high classification accuracy across four tumor categories using transfer learning and custom augmentation pipelines.',
    tags: ['CNN', 'PyTorch', 'Medical Imaging'],
    link: 'https://github.com/25Iqbalhossain',
  },
  {
    title: 'Fake News Detection',
    period: '2024',
    desc: 'NLP pipeline using TF-IDF, word embeddings, and ensemble classifiers to distinguish real from fake news articles. Includes explainability layer for feature attribution.',
    tags: ['NLP', 'Classification', 'Python'],
    link: 'https://github.com/25Iqbalhossain',
  },
>>>>>>> origin/master
  {
    title: 'CO₂ Injection Series Prediction',
    period: '2024',
    desc: 'Time-series forecasting model predicting CO₂ injection rate deltas for environmental carbon containment validation using LSTM and temporal convolutional networks.',
    tags: ['Time Series', 'LSTM', 'Environmental AI'],
    link: 'https://github.com/25Iqbalhossain',
  },
{
  title: 'Heyhomex Property Data Scraper',
  period: '2025',
  desc: 'Scalable property data scraping and indexing pipeline that collects real estate data, processes it, and prepares it for semantic search using OpenSearch and vector embeddings. Built with Python, FastAPI, and automated workflows.',
  tags: ['Python', 'FastAPI', 'Web Scraping', 'OpenSearch', 'Data Pipeline'],
  link: 'https://github.com/25Iqbalhossain/Heyhomex-property-data-scraper',
},
<<<<<<< HEAD
=======
{
  title: 'AI Ticket Classifier API',
  period: '2025',
  desc: 'AI-powered support ticket classification API built with FastAPI. Uses machine learning and NLP techniques to automatically categorize incoming tickets for faster triaging and support automation. Dockerized for scalable deployment.',
  tags: ['FastAPI', 'NLP', 'Machine Learning', 'Docker', 'API'],
  link: 'https://github.com/25Iqbalhossain/Ai-Ticket-Classifier-Api',
},
{
  title: 'Visual Recommendation System',
  period: '2025',
  desc: 'Machine learning–based recommendation system benchmarking platform that evaluates multiple recommender algorithms using structured datasets and visual performance analysis. Designed for experimentation with ranking and recommendation strategies.',
  tags: ['Recommender Systems', 'Machine Learning', 'Python', 'Data Visualization'],
  link: 'https://github.com/25Iqbalhossain/recsys-algorithm-benchmark',
},
>>>>>>> origin/master

];

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <>
      <style>{`
        .project-featured {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5px;
          margin-bottom: 1.5px;
          background: var(--rule);
        }
        .project-card {
          background: var(--bg-card);
          padding: 2rem;
          transition: background 0.15s;
          cursor: default;
        }
        .project-card:hover { background: var(--bg-alt); }
        .project-card--featured { padding: 2.5rem; }
        .project-period {
<<<<<<< HEAD
          font-family: var(--font-mono); font-size: 0.65rem;
=======
          font-family: var(--font-mono); font-size: 0.72rem;
>>>>>>> origin/master
          letter-spacing: 0.1em; color: var(--ink-3);
          text-transform: uppercase; margin-bottom: 0.6rem;
        }
        .project-title {
          font-family: var(--font-sans);
<<<<<<< HEAD
          font-size: 1rem; font-weight: 600;
=======
          font-size: 1.1rem; font-weight: 600;
>>>>>>> origin/master
          color: var(--ink); line-height: 1.3;
          margin-bottom: 0.75rem;
        }
        .project-card--featured .project-title {
          font-family: var(--font-serif);
<<<<<<< HEAD
          font-size: 1.35rem; font-weight: 400;
        }
        .project-desc {
          font-size: 0.87rem; color: var(--ink-2);
=======
          font-size: 1.5rem; font-weight: 400;
        }
        .project-desc {
          font-size: 0.95rem; color: var(--ink-2);
>>>>>>> origin/master
          line-height: 1.7; margin-bottom: 1.25rem;
        }
        .project-footer {
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem; flex-wrap: wrap;
        }
        .project-link {
<<<<<<< HEAD
          font-family: var(--font-mono); font-size: 0.7rem;
=======
          font-family: var(--font-mono); font-size: 0.75rem;
>>>>>>> origin/master
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent); text-decoration: none;
        }
        .project-link:hover { text-decoration: underline; color: var(--ink); }
        .project-grid-rest {
          display: grid;
<<<<<<< HEAD
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
=======
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
>>>>>>> origin/master
          gap: 1.5px;
          background: var(--rule);
        }
        .featured-label {
<<<<<<< HEAD
          font-family: var(--font-mono); font-size: 0.65rem;
=======
          font-family: var(--font-mono); font-size: 0.7rem;
>>>>>>> origin/master
          letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 0.5rem;
          display: block;
        }
      `}</style>
      <section id="projects">
        <div className="container--wide">
<<<<<<< HEAD
          <div style={{ padding: '0 2rem', marginBottom: '2.5rem' }}>
            <span className="section-label">Selected Work</span>
            <h2>Projects</h2>
            <p style={{ maxWidth: 480 }}>
=======
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="section-label">Selected Work</span>
            <h2>Projects</h2>
            <p style={{ maxWidth: 580 }}>
>>>>>>> origin/master
              From LLM pipelines in production to medical imaging — a selection of things I've built.
            </p>
          </div>

          {/* Featured */}
          <div className="project-featured">
<<<<<<< HEAD
            {featured.map(p => (
              <div key={`${p.title}-${p.period}`} className="project-card project-card--featured">
=======
            {featured.map((p, i) => (
              <div key={i} className="project-card project-card--featured">
>>>>>>> origin/master
                <span className="featured-label">★ Featured</span>
                <div className="project-period">{p.period}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-footer">
                  <div>{p.tags.map(t => <span key={t} className="tag tag--red">{t}</span>)}</div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">GitHub →</a>
                </div>
              </div>
            ))}
          </div>

          {/* Rest */}
          <div className="project-grid-rest">
<<<<<<< HEAD
            {rest.map(p => (
              <div key={`${p.title}-${p.period}`} className="project-card">
=======
            {rest.map((p, i) => (
              <div key={i} className="project-card">
>>>>>>> origin/master
                <div className="project-period">{p.period}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-footer">
                  <div>{p.tags.map(t => <span key={t} className="tag tag--ink">{t}</span>)}</div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">GitHub →</a>
                </div>
              </div>
            ))}
          </div>

<<<<<<< HEAD
          <div style={{ padding: '1.5rem 2rem 0' }}>
=======
          <div style={{ marginTop: '2rem' }}>
>>>>>>> origin/master
            <a href="https://github.com/25Iqbalhossain" target="_blank" rel="noreferrer"
              className="btn btn--ghost">View all on GitHub →</a>
          </div>
        </div>
      </section>
    </>
  );
}
