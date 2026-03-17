import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Kaggle from './components/Kaggle';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const getPreferredTheme = () => {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

export default function App() {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Kaggle />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
