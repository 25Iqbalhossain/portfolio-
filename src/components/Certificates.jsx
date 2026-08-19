const certificates = [
  {
    title: 'Basics of Machine Learning Algorithms',
    institution: 'UniAthena ? Cambridge International Qualifications, UK',
    category: 'MACHINE LEARNING',
    year: '2024',
    code: 'CR640',
    date: '17 August 2024',
    description: 'Completed a Level 7 course covering machine learning algorithms, decision trees, classification, and Naive Bayes.',
    image: '/cert_cr640.png',
    pdf: '/Iqbal_CR640_certificate.pdf',
    transcript: '/Iqbal_CR640_transcript.pdf',
  },
  {
    title: 'Basics of Python',
    institution: 'UniAthena ? Cambridge International Qualifications, UK',
    category: 'PYTHON',
    year: '2024',
    code: 'CR641',
    date: '16 August 2024',
    description: 'Completed a Level 7 Python course covering Python fundamentals, conditions, and functions.',
    image: '/cert_cr641.png',
    pdf: '/Iqbal_CR641_certificate.pdf',
    transcript: '/Iqbal_CR641_transcript.pdf',
  },
  {
    title: 'Python (Basic)',
    institution: 'HackerRank',
    category: 'PYTHON',
    year: '2024',
    date: '25 August 2024',
    description: 'Passed the HackerRank Python Basic skill certification assessment.',
    image: '/cert_python_basic.png',
    pdf: '/python_basic certificate.pdf',
  },
  {
    title: 'Summer Fest 2023',
    institution: 'University of Information Technology & Sciences (UITS)',
    category: 'COMPETITIVE PROGRAMMING',
    year: '2023',
    date: '2023',
    description: 'Participation in the Summer Fest 2023 Competitive Programming Contest as part of team UITS_EMK.',
    image: '/cert_summer_fest_2023.svg',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section certificates-section" aria-labelledby="certificates-title">
      <div className="container certificates-container">
        <div className="section-header">
          <div className="section-index">07 <span>Certifications</span></div>
          <div>
            <p className="eyebrow">Verified Credentials &amp; Achievements</p>
            <h2 id="certificates-title">Certificates &amp; Academic Transcripts.</h2>
          </div>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <article className="certificate-card" key={cert.title}>
              {/* -- Large Certificate Image Preview (Clickable) -- */}
              <a
                className="certificate-media"
                href={cert.pdf || cert.image}
                target="_blank"
                rel="noreferrer"
                title={`View ${cert.title} PDF/Preview`}
              >
                <img src={cert.image} alt={`${cert.title} Certificate Preview`} loading="lazy" />
              </a>

              {/* -- Certificate Body Text Content -- */}
              <div className="certificate-body">
                <div className="certificate-meta">
                  {cert.category} &middot; {cert.year}
                </div>

                <h3 className="certificate-title">
                  {cert.title}
                </h3>

                <div className="certificate-institution">
                  {cert.institution}
                </div>

                <p className="certificate-description">
                  {cert.description}
                </p>

                <div className="certificate-date">
                  {cert.code ? `${cert.code} ? ` : ''}{cert.date}
                </div>

                {/* -- Action Buttons at Bottom -- */}
                <div className="certificate-actions">
                  <a className="cert-btn cert-btn--primary" href={cert.pdf || cert.image} target="_blank" rel="noreferrer">
                    View Certificate <span aria-hidden="true">&nearr;</span>
                  </a>
                  {cert.pdf && (
                    <a className="cert-btn cert-btn--secondary" href={cert.pdf} download>
                      Download <span aria-hidden="true">&darr;</span>
                    </a>
                  )}
                  {cert.transcript && (
                    <a className="cert-btn cert-btn--secondary" href={cert.transcript} target="_blank" rel="noreferrer">
                      Transcript <span aria-hidden="true">&nearr;</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
