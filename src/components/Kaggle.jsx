const stats = [
  ['9', 'Badges earned'],
  ['12', 'Datasets published'],
  ['13', 'Notebooks (code)'],
  ['Active', 'Contributor status'],
];

const badges = ['Python', 'Intro to ML', 'GitHub Code Uploader', 'AI Ethics', 'Pandas', 'Feature Engineering', 'Intro to Deep Learning', 'Intro to AI Ethics', '7-Day Streak'];

export default function Kaggle() {
  return (
    <section id="kaggle" className="section kaggle-section" aria-labelledby="kaggle-title">
      <div className="container kaggle-layout">
        <div className="kaggle-copy">
          <div className="section-index">05 <span>Kaggle and open source</span></div>
          <p className="eyebrow">Data science community</p>
          <h2 id="kaggle-title">Learning in public, sharing practical work.</h2>
          <p>Active Kaggle contributor with public datasets and notebooks across Python, machine learning, deep learning, AI ethics, and feature engineering.</p>
          <a className="text-link" href="https://www.kaggle.com/iqbalhossain25" target="_blank" rel="noreferrer">Visit iqbalhossain25 <b aria-hidden="true">↗</b></a>
        </div>
        <div className="kaggle-profile">
          <div className="kaggle-profile-head"><span className="kaggle-mark">K</span><div><strong>Kaggle</strong><span>iqbalhossain25</span></div><a href="https://www.kaggle.com/iqbalhossain25" target="_blank" rel="noreferrer" aria-label="Open Kaggle profile">↗</a></div>
          <div className="kaggle-stats">{stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          <div className="badge-area"><span className="eyebrow">Verified badges</span><div className="badge-list">{badges.map((badge, index) => <span key={badge}><i>{String(index + 1).padStart(2, '0')}</i>{badge}</span>)}</div></div>
        </div>
      </div>
    </section>
  );
}
