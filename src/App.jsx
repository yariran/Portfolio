import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <div className="bg-primary-50 dark:bg-primary-950 text-primary-950 dark:text-primary-50 transition-colors duration-300">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Projects />
          <Photography />
          <Interests />
          <Contact />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
