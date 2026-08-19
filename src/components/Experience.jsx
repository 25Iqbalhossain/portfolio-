const professionalExperience = [
  {
    period: 'Nov 2025 - Present',
    role: 'Software Engineer (AI)',
    organisation: 'Orange Business Development Ltd',
    url: 'https://www.orangebd.com',
    location: 'Dhaka, Bangladesh',
    points: [
      'Building AI frameworks for smart government services in Bangladesh.',
      'Developed recommendation and intelligent-search capabilities for MyGov service discovery.',
    ],
    technologies: ['Python', 'Recommendation Systems', 'Intelligent Search'],
  },
  {
    period: 'Jan 2025 - Nov 2025',
    role: 'AI/ML Engineer',
    organisation: 'Time Research & Innovation Ltd',
    url: 'https://timerni.com',
    location: 'Portsmouth, United Kingdom',
    points: [
      'Built an avatar chatbot with AWS, D-ID, HeyGen, Calendar and Gmail function calling, session memory, and analytics.',
      'Built multilingual ASR/MT pipelines with Whisper and Transformers for Bangla, English, Mandarin, and Korean; reduced WER by 15-25%.',
    ],
    technologies: ['AWS', 'D-ID', 'HeyGen', 'Whisper', 'Transformers'],
  },
  {
    period: 'Feb 2024 - Dec 2024',
    role: 'Applied AI Researcher',
    organisation: 'NextStep Writers Publication Ltd',
    url: 'https://www.nextstepwriters.com/',
    location: 'Dhaka, Bangladesh',
    points: [
      'Conducted applied AI research and developed intelligent systems for publication and education workflows.',
    ],
    technologies: ['Applied AI', 'Research', 'NLP'],
  },
];

const education = [
  ['Aug 2021 - Aug 2025', 'BSc in Computer Science and Engineering', 'University of Information Technology and Sciences (UITS)', 'CGPA 3.67'],
  ['2018 - 2020', 'Higher Secondary Certificate (HSC)', 'Dhaka College', 'GPA 5.00'],
  ['2016 - 2018', 'Secondary School Certificate (SSC)', 'Nawabpur Government High School', 'GPA 5.00'],
];

function ExperienceRow({ item }) {
  return (
    <article className="experience-row">
      <div className="experience-meta"><span>{item.period}</span><span>{item.location}</span></div>
      <div className="experience-content">
        <h3>{item.role}</h3>
        <a href={item.url} target="_blank" rel="noreferrer" className="organisation-link">{item.organisation} <b aria-hidden="true">↗</b></a>
        <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
        <div className="tag-list">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header">
          <div className="section-index">02 <span>Experience</span></div>
          <div><p className="eyebrow">Professional path</p><h2 id="experience-title">Building with research, systems, and intent.</h2></div>
        </div>
        <div className="experience-list">{professionalExperience.map((item) => <ExperienceRow key={item.organisation} item={item} />)}</div>

        <div className="education-heading"><span className="eyebrow">Education</span><h3>Foundation</h3></div>
        <div className="education-list">
          {education.map(([period, title, institution, note]) => (
            <article className="education-row" key={title}>
              <span>{period}</span><div><h4>{title}</h4><p>{institution}</p></div><small>{note}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
