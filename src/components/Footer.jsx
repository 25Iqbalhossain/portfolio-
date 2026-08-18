const links = [
  ['GitHub', 'https://github.com/25Iqbalhossain'],
  ['LinkedIn', 'https://www.linkedin.com/in/25-iqbal-hossain/'],
  ['Kaggle', 'https://www.kaggle.com/iqbalhossain25'],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div><strong>MD. IQBAL HOSSAIN</strong><span>AI Engineer</span></div>
        <div className="footer-links">{links.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>)}</div>
        <div className="footer-end"><span>Copyright {new Date().getFullYear()}</span><a href="#hero">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
