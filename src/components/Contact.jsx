import { useEffect, useRef, useState } from 'react';

const contactDetails = [
  ['Email', '25ikbalhossain@gmail.com', 'mailto:25ikbalhossain@gmail.com'],
  ['Phone', '+880 1788 774822', 'tel:+8801788774822'],
  ['Location', 'Dhaka 1365, Bangladesh'],
  ['GitHub', 'github.com/25Iqbalhossain', 'https://github.com/25Iqbalhossain'],
  ['LinkedIn', 'linkedin.com/in/25-iqbal-hossain', 'https://www.linkedin.com/in/25-iqbal-hossain/'],
  ['Kaggle', 'kaggle.com/iqbalhossain25', 'https://www.kaggle.com/iqbalhossain25'],
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const resetTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(resetTimerRef.current), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container contact-panel">
        <div className="contact-heading"><div className="section-index">07 <span>Contact</span></div><p className="eyebrow">Open to considered collaborations</p><h2 id="contact-title">Let's build something intelligent.</h2><p>For AI/ML opportunities, research partnerships, and thoughtful product work.</p></div>
        <div className="contact-layout">
          <div className="contact-details">
            {contactDetails.map(([label, value, href]) => <div key={label}><span>{label}</span>{href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{value}</a> : <strong>{value}</strong>}</div>)}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row"><label>Name<input required value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} /></label><label>Email<input type="email" required value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} /></label></div>
            <label>Subject<input value={form.subject} onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))} /></label>
            <label>Message<textarea required value={form.message} onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))} /></label>
            {sent ? <p className="form-success" role="status">Thanks. Your message is ready for follow-up.</p> : <button className="button button--dark" type="submit">Send message <b aria-hidden="true">→</b></button>}
          </form>
        </div>
      </div>
    </section>
  );
}
