import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Kaggle from './components/Kaggle';
import Publications from './components/Publications';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync with OS if no local storage preference.
  useEffect(() => {
    const fn = (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    const m = window.matchMedia?.('(prefers-color-scheme: dark)');
    m?.addEventListener('change', fn);
    return () => m?.removeEventListener('change', fn);
  }, []);

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} onToggleTheme={toggleTheme} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Kaggle />
        <Publications />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
