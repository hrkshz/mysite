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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--border-color)', marginTop: '4rem', color: 'var(--text-tertiary)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} Hirok. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>Built with React, Vite & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;
