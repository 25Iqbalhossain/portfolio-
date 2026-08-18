const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/25Iqbalhossain',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="hero-social-icon">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/25-iqbal-hossain/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="hero-social-icon">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Kaggle',
    href: 'https://www.kaggle.com/iqbalhossain25',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="hero-social-icon">
        <path d="M18.825 23.859a.26.26 0 0 1-.26.141h-3.063a.515.515 0 0 1-.399-.2l-5.136-6.942-1.647 1.647v5.235a.26.26 0 0 1-.26.26H5.326a.26.26 0 0 1-.26-.26V.26A.26.26 0 0 1 5.326 0H8.06a.26.26 0 0 1 .26.26v13.078l6.456-6.858a.553.553 0 0 1 .399-.179h3.163a.26.26 0 0 1 .2.44l-6.6 6.858 6.887 9.82a.26.26 0 0 1 0 .44z" />
      </svg>
    ),
  },
];

const expertise = ['Generative AI', 'Machine Learning', 'NLP', 'Intelligent Search', 'Data Engineering', 'MLOps'];

export default function Hero({ theme, onToggleTheme }) {
  return (
    <section id="hero" className="hero-canvas" aria-labelledby="hero-name">
      {/* -- hero-internal navbar -- */}
      <nav className="hero-nav" aria-label="Hero navigation">
        <a className="hero-nav-brand" href="#hero">
          <img src="/favicon.svg" alt="" />
          <span>IQBAL</span>
        </a>
        <div className="hero-nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <div className="hero-nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'}>
            {theme === 'dark' ? (<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>) : (<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.2A8 8 0 0 1 9.8 3.5a8.3 8.3 0 1 0 10.7 10.7Z" /></svg>)}
          </button>
          <a className="hero-nav-cv" href="/Md_Iqbal_Hossain_CV.pdf" download>
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </div>
      </nav>

      {/* -- decorative background outline circles (entering from edges left and right) -- */}
      <svg className="hero-bg-circles" aria-hidden="true">
        <circle cx="-170" cy="115%" r="420" />
        <circle cx="calc(100% + 170px)" cy="-15%" r="420" />
      </svg>

      {/* -- social links — left vertical strip -- */}
      <div className="hero-socials" aria-label="Social profiles">
        <span className="socials-label">CONNECT</span>
        <div className="socials-links">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hero-social-link" title={s.label}>
              {s.icon} <span className="hero-social-label">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
      
      {/* -- metadata — right vertical area -- */}
      <div className="hero-metadata" aria-label="Professional info">
        <div className="meta-group">
          <span className="meta-label">BASED IN</span>
          <span className="meta-value">DHAKA, BANGLADESH</span>
        </div>
        <div className="meta-group">
          <span className="meta-label">FOCUS</span>
          <span className="meta-value">AI · ML · INTELLIGENT SYSTEMS</span>
        </div>
      </div>
      
      {/* -- portrait composition group -- */}
      <div className="hero-portrait-composition">
        {/* background organic line */}
        <svg className="hero-line" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M 680 180 C 800 120, 850 280, 750 320 C 600 370, 450 420, 300 380 C 150 340, 70 480, 200 520 C 350 560, 550 500, 700 530" />
        </svg>

        <div className="hero-portrait">
          <div className="portrait-arch">
            <img src="/profile.png" alt="Md. Iqbal Hossain" className="portrait-image" />
          </div>
        </div>

        {/* -- circular ring decoration -- */}
        <div className="hero-orbit-badge" aria-hidden="true">
          <svg className="hero-orbit-svg" viewBox="0 0 140 140" overflow="visible">
            <defs>
              <path id="heroOrbitPath" d="M 70,70 m -56,0 a 56,56 0 1,1 112,0 a 56,56 0 1,1 -112,0" fill="none" />
            </defs>
            <g className="hero-orbit-rotator">
              <text className="hero-orbit-text">
                <textPath href="#heroOrbitPath" startOffset="0%">
                 MACHINE LEARNING · DEEP LEARNING · NLP · LLM · FASTAPI · AWS ·&nbsp;
                </textPath>
              </text>
            </g>
          </svg>
          <span className="hero-orbit-center" />
        </div>
      </div>

      {/* -- identity — below portrait -- */}
      <div className="hero-identity">
        <h1 id="hero-name">MD. IQBAL HOSSAIN</h1>
        <p className="hero-role">
          AI Engineer <span className="role-sep">//</span> Machine Learning <span className="role-sep">//</span> Intelligent Systems
        </p>
      </div>

      {/* -- expertise strip — bottom of canvas -- */}
      <div className="hero-expertise" aria-label="Areas of expertise">
        {expertise.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}


