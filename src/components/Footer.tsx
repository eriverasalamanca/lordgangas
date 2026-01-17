import React, { useEffect } from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const speed = 0.61;
      document.body.style.backgroundPosition = `center ${scrollTop * speed}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-brand">
          <span className="footer-highlight">LORD GANGAS</span> - Creador Digital
        </p>
        <p>El Hub de ofertas inteligentes 🤓</p>
        <p className="footer-collab">Colabs & alianzas DM 💛 • Únete a nuestras redes y ahorra más 🎯</p>
        <p className="footer-copyright">© 2026 Lord Gangas. Todos los derechos reservados.</p>
        <p className="footer-collab">Colabs & alianzas DM 💛</p>
      </div>
    </footer>
  );
};

export default Footer;
