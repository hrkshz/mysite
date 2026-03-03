import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <Navbar scrollY={scrollY} theme={theme} onThemeToggle={handleThemeToggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--border-color)', marginTop: '4rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Hiroki Shinzato. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>Built with React, Vite & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
