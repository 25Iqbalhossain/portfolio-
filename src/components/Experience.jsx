const experience = {
  professional: [
    {
      role: 'Software Engineer (AI)',
      company: 'Orange Bd Ltd',
      url: 'https://www.orangebd.com',
      location: 'Dhaka, Bangladesh',
      period: 'Nov 2025 – Present',
      current: true,
      bullets: [
        'Establishing a smart government AI framework in Bangladesh by integrating AI-powered chatbots and complementary digital tools.',
        'Building a MyGov AI-powered Recommendation System and Smart Search infrastructure.',
      ],
    },
    {
      role: 'AI/ML Engineer',
      company: 'Time Research & Innovation Ltd',
      url: 'https://timerni.com',
      location: 'Portsmouth, United Kingdom',
      period: 'Jan 2025 – Nov 2025',
      bullets: [
        'Built an avatar chatbot on AWS with D-ID and HeyGen, adding function calling (Calendar, Gmail), session memory, and analytics — reduced onboarding Q&A time by 25–40%.',
        'Deployed a multilingual speech-to-text and machine-translation pipeline (Whisper + Transformers for BN, EN, ZH, KO) with voice-activity detection and punctuation restoration; lowered WER by 15–25% and improved throughput via batching.',
      ],
    },
    {
      role: 'Applied AI Researcher ',
      company: 'NextStep Writers Publication Ltd',
      url: 'https://www.nextstepwriters.com/',
      location: 'Dhaka, Bangladesh',
      period: 'Feb 2024 – Dec 2024',
      bullets: [
        'Conducted applied research in AI/ML, translating academic findings into practical solutions.',
        'Designed, developed, and evaluated ML models, algorithms, and pipelines for real-world challenges.',
        'Collaborated with clients to identify AI opportunities and define data-driven strategies.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      school: 'University of Information Technology & Sciences (UITS)',
      period: 'Aug 2021 – Aug 2025',
      note: 'CGPA 3.67 / 4.00',
    },
    {
      degree: 'Machine Learning Certification',
      school: 'Cambridge International Qualification (UK)',
      period: 'Nov 2025 – Nov 2025',
      note: 'EQF Level 2 .Online',
    },
    {
      degree: 'Cloud Computing Certification',
      school: 'National Association of State Boards of Accountancy (USA)',
      period: 'Dec 2025 – Dec 2025',
      note: 'EQF Level 2 . Online',
    },
    {
      degree: 'GitHub Foundations Certification Prep',
      school: 'Microsoft Learn (in collaboration with GitHub)',
      period: 'Dec 2025 – Jan 2026',
      note: 'EQF Level 3 · Online',
    },
  ],
};

function ExpItem({ item }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '160px 1fr',
      gap: '2rem', paddingBottom: '2rem', marginBottom: '2rem',
      borderBottom: '1px solid var(--rule)',
    }}>
      <div>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
          color: 'var(--ink-3)', lineHeight: 1.6,
        }}>
          {item.period}
        </div>
        {item.current && (
          <span className="tag tag--green" style={{ marginTop: '0.4rem' }}>Current</span>
        )}
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>
          {item.role}
        </h3>
        <div style={{ marginBottom: '0.75rem' }}>
          <a href={item.url} target="_blank" rel="noreferrer"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent)' }}>
            {item.company}
          </a>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ink-3)', marginLeft: '0.75rem' }}>
            {item.location}
          </span>
        </div>
        {item.bullets && (
          <ul style={{ paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{ fontSize: '0.9rem', color: 'var(--ink-2)', lineHeight: 1.65 }}>{b}</li>
            ))}
          </ul>
        )}
        {item.note && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-2)', marginTop: '0.4rem', display: 'block' }}>
            {item.note}
          </span>
        )}
      </div>
    </div>
  );
}

function EduItem({ item }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '160px 1fr',
      gap: '2rem', paddingBottom: '1.5rem', marginBottom: '1.5rem',
      borderBottom: '1px solid var(--rule)',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-3)', lineHeight: 1.6 }}>
        {item.period}
      </div>
      <div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
          {item.degree}
        </h3>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink-2)', marginBottom: '0.2rem' }}>
          {item.school}
        </div>
        {item.note && (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-2)' }}>{item.note}</span>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <>
      <style>{`
        @media (max-width: 600px) {
          .exp-item-grid { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
        }
      `}</style>
      <section id="experience">
        <div className="container">
          <span className="section-label">Experience</span>
          <h2>Work History</h2>
          <div style={{ marginBottom: '3.5rem' }}>
            {experience.professional.map((item, i) => <ExpItem key={i} item={item} />)}
          </div>

          <span className="section-label">Education & Training</span>
          <h2>Academic Background</h2>
          <div>
            {experience.education.map((item, i) => <EduItem key={i} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
