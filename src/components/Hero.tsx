import React, { useEffect } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  useEffect(() => {
    // Parallax effect on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      const heroContent = document.querySelector('.hero-content');
      if (!heroContent) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      (heroContent as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div>
          <img src="/lordgangaslogo.png" alt="Logo Lord Gangas" className="hero-logo-small" />
          <h1 className="hero-title">LORD GANGAS</h1>
        </div>
        <h2 className="hero-subtitle">El Hub de Ofertas Inteligentes</h2>
        <p className="hero-tagline">
          🔥 Descubre oportunidades sin límites. Ahorra de verdad. Crece económicamente.
        </p>
        <div className="hero-badges">
          <div>✅ Ofertas Verificadas</div>
          <div>⚡ Actualizaciones Diarias</div>
          <div>💰 Mejor Precio Garantizado</div>
        </div>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollToSection('.mas-section')}>
            Explorar Ofertas
          </button>
          <button
            className="btn btn-primary"
            onClick={() => window.open('https://chat.whatsapp.com/L9JBGlrG0VC5IYWoPB3Cv0', '_blank')}>
            Unirme al Grupo VIP
          </button>
          <button className="btn btn-primary" onClick={() => scrollToSection('.social-grid')}>
            Síguenos en Redes
          </button>
          <button className="btn btn-primary" onClick={() => scrollToSection('.education-section')}>
            Apostamos por la Educación
          </button>
        </div>
        <p className="hero-info">
          Únete a <strong>3000+ usuarios activos</strong> que ahorran diariamente con Lord Gangas
        </p>
      </div>
    </div>
  );
};

export default Hero;
