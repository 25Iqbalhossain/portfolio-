const skillGroups = [
  {
    label: 'AI / ML Core',
    color: 'var(--accent)',
    skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Large Language Models (LLM)', 'RAG Systems', 'AI Agents', 'Predictive Analytics', 'Computer Vision'],
  },
  {
    label: 'Frameworks & Libraries',
    color: 'var(--accent-2)',
    skills: ['PyTorch', 'TensorFlow', 'fastai', 'LangChain', 'Hugging Face Transformers', 'Scikit-learn', 'OpenCV', 'Whisper'],
  },
  {
    label: 'Backend & APIs',
    color: 'var(--accent-3)',
    skills: ['Python', 'FastAPI', 'Flask', 'RESTful API', 'Microservices', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Infrastructure & DevOps',
    color: '#8B6914',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'Git / GitHub / GitLab', 'Jenkins', 'CI/CD', 'Postman'],
  },
  {
    label: 'Other Technologies',
    color: '#5A3E8F',
    skills: ['JavaScript', 'C++ (Competitive Programming)', 'Flutter / Dart', 'Firebase', 'HTML5 / CSS3', 'Jira', 'D-ID API', 'HeyGen'],
  },
];

export default function Skills() {
  return (
    <>
      <style>{`
        .skills-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .skill-group-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .skill-group-label::before {
          content: '';
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: currentColor;
        }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .skill-chip {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 4px 10px;
          background: var(--bg-alt);
          border: 1px solid var(--rule);
          color: var(--ink-2);
          border-radius: 2px;
          transition: all 0.15s;
          cursor: default;
        }
        .skill-chip:hover {
          background: var(--ink);
          color: var(--bg);
          border-color: var(--ink);
        }
      `}</style>
      <section id="skills">
        <div className="container">
          <span className="section-label">Skills & Tools</span>
          <h2>Technical Proficiencies</h2>
          <p style={{ marginBottom: '3rem', maxWidth: '480px' }}>
            Technologies I work with daily — from research to production deployment.
          </p>
          <div className="skills-wrapper">
            {skillGroups.map(g => (
              <div key={g.label}>
                <div className="skill-group-label" style={{ color: g.color }}>
                  {g.label}
                </div>
                <div className="skill-tags">
                  {g.skills.map(s => (
                    <span key={s} className="skill-chip">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
