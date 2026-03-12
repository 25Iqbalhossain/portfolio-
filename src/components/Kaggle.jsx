const stats = [
  { val: '9',      label: 'Badges Earned' },
  { val: '12',     label: 'Datasets Published' },
  { val: '13',     label: 'Notebooks (Code)' },
  { val: 'Active', label: 'Contributor Status' },
];

const badges = [
  {
    name: 'Python',
    tier: 'purple',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 5C14.5 5 11 7.2 11 11v3h9v1.5H9C5.7 15.5 3 18.2 3 22s2.7 6.5 6 6.5H11V25c0-3.8 3.2-5.5 9-5.5s9 1.7 9 5.5v3.5h2c3.3 0 6-2.7 6-6.5s-2.7-6.5-6-6.5H29V15.5h-9V14h9v-3C29 7.2 25.5 5 20 5z" stroke="white" strokeWidth="2.2" fill="none" strokeLinejoin="round"/>
        <circle cx="16" cy="11" r="2" fill="white"/>
        <circle cx="24" cy="28" r="2" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Intro to ML',
    tier: 'purple',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="7" y="5" width="19" height="25" rx="2.5" stroke="white" strokeWidth="2.2"/>
        <line x1="11" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="11" y1="17" x2="22" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="11" y1="22" x2="17" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="7.5" stroke="white" strokeWidth="2.2"/>
        <line x1="30" y1="26" x2="30" y2="34" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="26" y1="30" x2="34" y2="30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Github Code Uploader',
    tier: 'purple',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 4C11 4 4 11 4 20c0 7.1 4.6 13.2 11 15.4.8.1 1.1-.4 1.1-.8v-2.8c-4.5 1-5.4-2.1-5.4-2.1-.7-1.9-1.8-2.4-1.8-2.4-1.5-1 .1-1 .1-1 1.6.1 2.5 1.6 2.5 1.6 1.4 2.4 3.7 1.7 4.6 1.3.1-1 .5-1.7 1-2.1-3.6-.4-7.3-1.8-7.3-7.9 0-1.7.6-3.1 1.6-4.2-.2-.4-.7-2 .1-4.1 0 0 1.4-.4 4.5 1.7 1.3-.4 2.7-.5 4-.5s2.7.1 4 .5c3.1-2.1 4.5-1.7 4.5-1.7.8 2.1.3 3.7.1 4.1 1 1.1 1.6 2.5 1.6 4.2 0 6.1-3.7 7.5-7.3 7.9.6.5 1.1 1.5 1.1 2.9v4.4c0 .4.3.9 1.1.8C31.4 33.2 36 27.1 36 20c0-9-7-16-16-16z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'AI Ethics',
    tier: 'purple',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 6c-6 0-11 5-11 11 0 4 2.2 7.5 5.5 9.5V29h11v-2.5C28.8 24.5 31 21 31 17c0-6-5-11-11-11z" stroke="white" strokeWidth="2.2" strokeLinejoin="round"/>
        <rect x="14.5" y="29" width="11" height="3" rx="1.5" stroke="white" strokeWidth="2"/>
        <rect x="16"   y="32" width="8"  height="2.5" rx="1.25" stroke="white" strokeWidth="1.8"/>
        <line x1="20" y1="6"  x2="20" y2="3"  stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="9"  y1="15" x2="6"  y2="14" stroke="white" strokeWidth="2"   strokeLinecap="round"/>
        <line x1="31" y1="15" x2="34" y2="14" stroke="white" strokeWidth="2"   strokeLinecap="round"/>
        <line x1="11" y1="9"  x2="9"  y2="7"  stroke="white" strokeWidth="2"   strokeLinecap="round"/>
        <line x1="29" y1="9"  x2="31" y2="7"  stroke="white" strokeWidth="2"   strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Pandas',
    tier: 'orange',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="5"  y="5"  width="30" height="30" rx="2.5" stroke="white" strokeWidth="2.2"/>
        <line x1="5"  y1="14" x2="35" y2="14" stroke="white" strokeWidth="2"/>
        <line x1="5"  y1="23" x2="35" y2="23" stroke="white" strokeWidth="2"/>
        <line x1="17" y1="5"  x2="17" y2="35" stroke="white" strokeWidth="2"/>
        <line x1="28" y1="5"  x2="28" y2="35" stroke="white" strokeWidth="2"/>
        <rect x="6" y="6" width="10" height="7.5" rx="1" fill="white" fillOpacity="0.35"/>
      </svg>
    ),
  },
  {
    name: 'Feature Engineering',
    tier: 'gold',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        {/* Kaggle duck/goose mascot silhouette */}
        <ellipse cx="20" cy="26" rx="11" ry="7" stroke="white" strokeWidth="2.2"/>
        <circle  cx="27" cy="12" r="5.5"        stroke="white" strokeWidth="2.2"/>
        <path d="M22 15 Q17 18 15 23"           stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M33 12 L39 10 L36 15Z"         fill="white"/>
        <circle cx="29" cy="10" r="1.2"         fill="white"/>
        <path d="M10 32 Q8 36 6 37 H15"         stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 32 L16 37"                 stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Intro to Deep Learning',
    tier: 'gold',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M7 8h15a4 4 0 014 4v20a4 4 0 01-4 4H7V8z" stroke="white" strokeWidth="2.2"/>
        <path d="M22 8a4 4 0 014 4v20a4 4 0 01-4 4"         stroke="white" strokeWidth="2.2"/>
        <line x1="11" y1="17" x2="20" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="11" y1="22" x2="20" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <line x1="11" y1="27" x2="16" y2="27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="30" cy="12" r="7" stroke="white" strokeWidth="2.2"/>
        <line x1="30" y1="8"  x2="30" y2="16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="26" y1="12" x2="34" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Intro to AI Ethics',
    tier: 'gold',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M27 20C27 25.5 22.5 30 17 30C11.5 30 7 25.5 7 20C7 14.5 11.5 10 17 10C15.2 13.5 15.5 18.5 19 21.5C22 24 26 23 27 20Z"
          fill="white" fillOpacity="0.95"/>
        <polygon points="32,5 33.8,10.5 39.5,10.5 34.8,13.8 36.5,19.5 32,16 27.5,19.5 29.2,13.8 24.5,10.5 30.2,10.5"
          fill="white"/>
      </svg>
    ),
  },
  {
    name: '7-Day Streak',
    tier: 'blue',
    svg: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="4"  y="7"  width="32" height="28" rx="3" stroke="white" strokeWidth="2.2"/>
        <line x1="4"  y1="16" x2="36" y2="16" stroke="white" strokeWidth="2.2"/>
        <line x1="13" y1="4"  x2="13" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="27" y1="4"  x2="27" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <text x="20" y="31" textAnchor="middle" fill="white" fontSize="14" fontFamily="'Geist Mono',monospace" fontWeight="700">7</text>
      </svg>
    ),
  },
];

/* ── Tier colour palettes ─────────────────────────────────────────── */
const TIER = {
  purple: { g0: '#D070E8', g1: '#9B35CE', g2: '#6A1F98', border: '#E090F8', shine: 'rgba(255,255,255,0.28)' },
  orange: { g0: '#FF7043', g1: '#E53D1A', g2: '#BF2600', border: '#FF8D6B', shine: 'rgba(255,255,255,0.2)'  },
  gold:   { g0: '#FFD740', g1: '#FFA000', g2: '#E65100', border: '#FFE57F', shine: 'rgba(255,255,255,0.32)' },
  blue:   { g0: '#4DD0E1', g1: '#0097A7', g2: '#006064', border: '#80DEEA', shine: 'rgba(255,255,255,0.22)' },
};

/* Flat-top hexagon */
const HEX_PTS = '50,3 97,27 97,73 50,97 3,73 3,27';

function HexBadge({ badge, index }) {
  const t = TIER[badge.tier] || TIER.purple;
  const gId = `hg${index}`;
  const glId = `gw${index}`;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      gap: '0.5rem', width: 86,
      animation: `fadeUp 0.4s ${index * 0.055}s ease both`,
    }}>
      <div style={{ position: 'relative', width: 76, height: 76 }}>
        <svg viewBox="0 0 100 100" overflow="visible"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id={gId} x1="10%" y1="0%" x2="90%" y2="100%">
              <stop offset="0%"   stopColor={t.g0}/>
              <stop offset="55%"  stopColor={t.g1}/>
              <stop offset="100%" stopColor={t.g2}/>
            </linearGradient>
            <filter id={glId} x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="b"/>
              <feFlood floodColor={t.g1} floodOpacity="0.55" result="c"/>
              <feComposite in="c" in2="b" operator="in" result="glow"/>
              <feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Shadow */}
          <polygon points={HEX_PTS} fill="rgba(0,0,0,0.28)" transform="translate(2.5,5)"/>
          {/* Body */}
          <polygon points={HEX_PTS} fill={`url(#${gId})`} filter={`url(#${glId})`}/>
          {/* Outer border */}
          <polygon points={HEX_PTS} fill="none" stroke={t.border} strokeWidth="3"/>
          {/* Inner thin border */}
          <polygon points="50,8 92,30 92,70 50,92 8,70 8,30"
            fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
          {/* Top shine sliver */}
          <polygon points="50,6 93,29 93,36 50,14 7,36 7,29"
            fill={t.shine}/>
        </svg>

        {/* Icon */}
        <div style={{
          position: 'absolute', inset: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.4))',
        }}>
          {badge.svg}
        </div>
      </div>

      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
        letterSpacing: '0.04em', textAlign: 'center',
        color: 'var(--ink-2)', lineHeight: 1.35, width: '100%',
      }}>
        {badge.name}
      </span>
    </div>
  );
}

/* ── Page section ─────────────────────────────────────────────────── */
export default function Kaggle() {
  return (
    <>
      <style>{`
        .kw { background: var(--bg-card); border: 1px solid var(--rule); }
        .kw-top {
          display: flex; align-items: center; gap: 1rem;
          padding: 1.4rem 2rem; border-bottom: 1px solid var(--rule);
          flex-wrap: wrap;
        }
        .kw-logo {
          display: flex; align-items: center; gap: 0.5rem;
          font-family: var(--font-sans); font-weight: 700; font-size: 1rem;
          color: #20BEFF; text-decoration: none;
        }
        .kw-user {
          font-family: var(--font-mono); font-size: 0.8rem;
          font-weight: 600; color: var(--ink);
        }
        .kw-link {
          margin-left: auto;
          font-family: var(--font-mono); font-size: 0.7rem;
          color: #20BEFF; text-decoration: none;
        }
        .kw-link:hover { text-decoration: underline; }

        .kw-stats { display: grid; grid-template-columns: repeat(4,1fr); border-bottom: 1px solid var(--rule); }
        .kw-stat  { padding: 1.25rem; text-align: center; border-right: 1px solid var(--rule); }
        .kw-stat:last-child { border-right: none; }
        .kw-stat-v {
          display: block; font-family: var(--font-serif);
          font-size: 2.1rem; color: var(--ink); line-height: 1; margin-bottom: 0.3rem;
        }
        .kw-stat-l {
          font-family: var(--font-mono); font-size: 0.59rem;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-3);
        }

        .kw-badges { padding: 2rem; }
        .kw-bh {
          font-family: var(--font-mono); font-size: 0.64rem;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ink-3); margin-bottom: 1.75rem;
          display: flex; align-items: center; gap: 0.75rem;
        }
        .kw-bh::after { content:''; flex:1; height:1px; background: var(--rule); }

        .kw-grid { display: flex; flex-wrap: wrap; gap: 1.25rem 0.5rem; }

        .kw-foot {
          padding: 1.25rem 2rem; border-top: 1px solid var(--rule);
          display: flex; align-items: center; justify-content: space-between;
          gap: 1rem; flex-wrap: wrap;
        }
        .kw-foot-note {
          font-family: var(--font-mono); font-size: 0.69rem; color: var(--ink-3);
        }

        @media (max-width: 640px) {
          .kw-stats { grid-template-columns: repeat(2,1fr); }
          .kw-stat:nth-child(2) { border-right: none; }
          .kw-stat:nth-child(3) { border-top: 1px solid var(--rule); }
          .kw-badges { padding: 1.5rem; }
          .kw-foot { padding: 1rem 1.5rem; }
          .kw-top  { padding: 1.2rem 1.5rem; }
        }
      `}</style>

      <section id="kaggle">
        <div className="container">
          <span className="section-label">Open Source</span>
          <h2>Kaggle Profile</h2>
            <p style={{ maxWidth: 480, marginBottom: '2.5rem' }}>
              Active Kaggle contributor with 9 earned badges in Python, Machine Learning,
              Deep Learning, AI Ethics, and Feature Engineering. Published 12 datasets and
              13 notebooks for the global data science community, with 30+ additional
              notebooks currently maintained privately.
            </p>

          <div className="kw">

            {/* Header */}
            <div className="kw-top">
              <a href="https://www.kaggle.com/iqbalhossain25" target="_blank" rel="noreferrer"
                className="kw-logo">
                <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                  <path d="M21.5 28L13.5 17.5L21.3 9H17.5L10 17.2V4H7V28H10V21.3L12.2 18.8L18.5 28H21.5Z" fill="#20BEFF"/>
                </svg>
                Kaggle
              </a>
              <span className="kw-user">Iqbalhossain25</span>
              <a href="https://www.kaggle.com/iqbalhossain25" target="_blank" rel="noreferrer"
                className="kw-link">
                kaggle.com/iqbalhossain25 →
              </a>
            </div>

            {/* Stats */}
            <div className="kw-stats">
              {stats.map(s => (
                <div key={s.label} className="kw-stat">
                  <span className="kw-stat-v">{s.val}</span>
                  <span className="kw-stat-l">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="kw-badges">
              <div className="kw-bh">9 Badges Earned</div>
              <div className="kw-grid">
                {badges.map((b, i) => <HexBadge key={i} badge={b} index={i} />)}
              </div>
            </div>

            {/* Footer */}
            <div className="kw-foot">
              <span className="kw-foot-note">
                ★&nbsp; Active contributor · Datasets &amp; Notebooks published
              </span>
              <a href="https://www.kaggle.com/iqbalhossain25" target="_blank" rel="noreferrer"
                className="btn" style={{ fontSize: '0.73rem', padding: '9px 18px' }}>
                View full Kaggle profile →
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
