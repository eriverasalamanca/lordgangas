import { useEffect } from 'react';
import './styles/globals.css';
import './App.css';

// Componentes
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Recommended from './components/Recommended';
import Social from './components/Social';
import Education from './components/Education';
import WhatsApp from './components/WhatsApp';
import Features from './components/Features';
import Partners from './components/Partners';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Agregar partículas flotantes
    const particlesContainer = document.querySelector('.floating-particles');
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <div className="floating-particles"></div>

      <div className="content-wrapper">
        <Hero />

        <div className="container">
          <div className="section">
            <Carousel />
          </div>

          <div className="section">
            <Recommended />
          </div>

          <div className="section">
            <Social />
          </div>

          <div className="section">
            <Education />
          </div>

          <WhatsApp />

          <div className="section">
            <Features />
          </div>

          <CTA />

          <div className="section">
            <Partners />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
