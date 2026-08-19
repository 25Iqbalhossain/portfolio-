import React from 'react';

const certificates = [
  {
    title: 'Cloud Computing: Understanding Core Concepts',
    institution: 'LinkedIn Learning',
    category: 'CLOUD COMPUTING',
    year: '2024',
    code: 'Cert',
    date: '2024',
    description: 'Completed a comprehensive course covering cloud computing fundamentals, core concepts, deployment models, and service types (IaaS, PaaS, SaaS).',
    image: '/cert_cloud_computing.jpg',
    pdf: '/CertificateOfCompletion_Cloud Computing Understanding Core Concepts (1).pdf',
  },
  {
    title: 'Machine Learning Algorithms',
    institution: 'UniAthena – Cambridge International Qualifications, UK',
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
    title: 'Python',
    institution: 'UniAthena – Cambridge International Qualifications, UK',
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
    code: 'Cert',
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
    code: '',
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
          <div className="section-index">08 <span>Certifications</span></div>
          <div>
            <p className="eyebrow">Verified Credentials & Achievements</p>
            <h2 id="certificates-title">Certificates & Academic Transcripts.</h2>
          </div>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <article className="certificate-card" key={cert.title}>
              <a
                className="certificate-media"
                href={cert.pdf || cert.image}
                target="_blank"
                rel="noreferrer"
                title={'View ' + cert.title + ' PDF/Preview'}
              >
                <img src={cert.image} alt={cert.title + ' Certificate Preview'} loading="lazy" />
              </a>

              <div className="certificate-body">
                <div className="certificate-meta">
                  {cert.category} • {cert.year}
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
                  {cert.code ? cert.code + ' • ' : ''}{cert.date}
                </div>

                <div className="certificate-actions">
                  <a className="cert-btn cert-btn--primary" href={cert.pdf || cert.image} target="_blank" rel="noreferrer">
                    View Certificate <b aria-hidden="true">↗</b>
                  </a>
                  {cert.pdf && (
                    <a className="cert-btn cert-btn--secondary" href={cert.pdf} download>
                      Download <b aria-hidden="true">↓</b>
                    </a>
                  )}
                  {cert.transcript && (
                    <a className="cert-btn cert-btn--secondary" href={cert.transcript} target="_blank" rel="noreferrer">
                      Transcript <b aria-hidden="true">↗</b>
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
