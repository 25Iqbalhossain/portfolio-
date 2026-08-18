const skillGroups = [
  { title: 'AI and Machine Learning', skills: ['Machine Learning', 'Deep Learning', 'Predictive Analytics', 'Computer Vision', 'PyTorch', 'TensorFlow', 'fastai', 'Scikit-learn', 'OpenCV'] },
  { title: 'Generative AI', skills: ['LLM', 'RAG Systems', 'AI Agents', 'LangChain', 'Hugging Face Transformers', 'D-ID API', 'HeyGen'] },
  { title: 'NLP and Speech', skills: ['Natural Language Processing', 'Whisper', 'Multilingual AI', 'Speech-to-Text'] },
  { title: 'Backend and Data', skills: ['Python', 'FastAPI', 'Flask', 'RESTful APIs', 'Microservices', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { title: 'DevOps and Cloud', skills: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'Git', 'GitHub', 'GitLab', 'Jenkins', 'CI/CD', 'Postman'] },
  { title: 'Product and Web', skills: ['JavaScript', 'C++', 'Flutter', 'Dart', 'Firebase', 'HTML', 'CSS', 'Jira'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header section-header--compact">
          <div className="section-index">03 <span>Capabilities</span></div>
          <div><p className="eyebrow">Technical practice</p><h2 id="skills-title">Tools that move ideas into production.</h2></div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
