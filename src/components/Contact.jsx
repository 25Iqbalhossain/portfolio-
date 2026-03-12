import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 5rem;
          align-items: start;
        }
        .contact-info-block { margin-bottom: 2.5rem; }
        .contact-info-block h4 { margin-bottom: 1rem; }
        .contact-row {
          display: flex; flex-direction: column;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--rule);
          gap: 0.2rem;
        }
        .contact-row-label {
          font-family: var(--font-mono);
          font-size: 0.65rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--ink-3);
        }
        .contact-row-val {
          font-family: var(--font-mono); font-size: 0.82rem;
          color: var(--ink); word-break: break-all;
        }
        .contact-row-val a {
          color: var(--accent); text-decoration: none;
          font-size: inherit;
        }
        .contact-row-val a:hover { text-decoration: underline; }
        .form-group { margin-bottom: 1.25rem; }
        .form-label {
          display: block;
          font-family: var(--font-mono); font-size: 0.68rem;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--ink-3); margin-bottom: 0.4rem;
        }
        .form-input {
          width: 100%; padding: 10px 14px;
          font-family: var(--font-sans); font-size: 0.9rem;
          background: var(--bg-card);
          border: 1px solid var(--rule);
          color: var(--ink); outline: none;
          transition: border-color 0.15s;
          border-radius: 0;
        }
        .form-input:focus { border-color: var(--ink); }
        textarea.form-input { height: 130px; resize: vertical; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .sent-msg {
          font-family: var(--font-mono); font-size: 0.8rem;
          color: var(--accent-3); padding: 0.75rem 1rem;
          border: 1px solid var(--accent-3);
          background: rgba(45,122,79,0.05);
        }
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
      <section id="contact">
        <div className="container">
          <span className="section-label">Contact</span>
          <h2>Get in touch</h2>
          <p style={{ maxWidth: 420, marginBottom: '3rem' }}>
            Open to collaborations, research partnerships, contract work, and full-time opportunities in AI/ML.
          </p>

          <div className="contact-grid">
            <div>
              <div className="contact-info-block">
                <h4>Direct Contact</h4>
                {[
                  { label: 'Email', val: '25ikbalhossain@gmail.com', href: 'mailto:25ikbalhossain@gmail.com' },
                  { label: 'Phone', val: '+880 1788 774822', href: 'tel:+8801788774822' },
                  { label: 'Location', val: 'Dhaka 1365, Bangladesh', href: null },
                  { label: 'Nationality', val: 'Bangladeshi', href: null },
                ].map(r => (
                  <div className="contact-row" key={r.label}>
                    <span className="contact-row-label">{r.label}</span>
                    <span className="contact-row-val">
                      {r.href ? <a href={r.href}>{r.val}</a> : r.val}
                    </span>
                  </div>
                ))}
              </div>
              <div className="contact-info-block">
                <h4>Online Presence</h4>
                {[
                  { label: 'GitHub', val: 'github.com/25Iqbalhossain', href: 'https://github.com/25Iqbalhossain' },
                  { label: 'LinkedIn', val: 'linkedin.com/in/25-iqbal-hossain', href: 'https://www.linkedin.com/in/25-iqbal-hossain/' },
                ].map(r => (
                  <div className="contact-row" key={r.label}>
                    <span className="contact-row-label">{r.label}</span>
                    <span className="contact-row-val">
                      <a href={r.href} target="_blank" rel="noreferrer">{r.val}</a>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <h4>Send a message</h4>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input className="form-input" required placeholder="Your full name"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input className="form-input" type="email" required placeholder="your@email.com"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input className="form-input" placeholder="Project enquiry / Collaboration / ..."
                  value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
              </div>
              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea className="form-input" required placeholder="Tell me about your project or idea..."
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
              </div>
              {sent
                ? <div className="sent-msg">✓ Message sent — I'll be in touch soon.</div>
                : <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
                    Send message
                  </button>
              }
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
