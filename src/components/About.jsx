const details = [
  ['Location', 'Dhaka, Bangladesh'],
  ['Current role', 'Software Engineer (AI)'],
  ['Specialisation', 'AI systems, LLMs and RAG'],
  ['Education', 'BSc in CSE, UITS'],
  ['Email', '25ikbalhossain@gmail.com', 'mailto:25ikbalhossain@gmail.com'],
  ['Availability', 'AI/ML collaborations and opportunities'],
];

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container section-intro">
        <div className="section-index">01 <span>About</span></div>
        <div className="about-copy">
          <p className="eyebrow">Research-first engineering</p>
          <h2 id="about-title">Engineering intelligent systems with a research-first mindset.</h2>
          <p className="lead">I am Md. Iqbal Hossain, a Software Engineer (AI) focused on machine learning, LLM applications, RAG systems, and production-ready data products.</p>
          <p>I combine applied research with practical delivery: from recommendation systems and multilingual speech pipelines to conversational AI and semantic search. My work is grounded in thoughtful experimentation, clear system design, and measurable usefulness.</p>
          <div className="about-actions">
            <a className="text-link" href="#contact">Start a conversation <b aria-hidden="true">→</b></a>
            <a className="text-link" href="https://github.com/25Iqbalhossain" target="_blank" rel="noreferrer">GitHub <b aria-hidden="true">↗</b></a>
          </div>
        </div>
      </div>
      <div className="container info-grid">
        {details.map(([label, value, href]) => (
          <div className="info-item" key={label}>
            <span>{label}</span>
            {href ? <a href={href}>{value}</a> : <strong>{value}</strong>}
          </div>
        ))}
      </div>
    </section>
  );
}
