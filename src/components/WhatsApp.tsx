import React from 'react';
import '../styles/WhatsApp.css';

const WhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://chat.whatsapp.com/L9JBGlrG0VC5IYWoPB3Cv0', '_blank');
  };

  return (
    <div className="whatsapp-section">
      <h2>💬 Únete al Grupo VIP de WhatsApp</h2>
      <p className="whatsapp-subtitle">Lord Gangas I - Comunidad de Ofertas</p>

      <div className="qr-container">
        <p className="qr-label">📱 Escanea el código QR</p>
        <div className="qr-code">
          <img src="/qr-whatsapp.png" alt="QR WhatsApp Lord Gangas" className="qr-img" />
        </div>
        <p className="qr-instruction">O usa el botón de abajo</p>
      </div>

      <div className="whatsapp-benefits">
        <div className="benefit-item">
          <h4>✅ Ofertas en Tiempo Real</h4>
          <p>Recibe notificaciones instantáneas de las mejores ofertas</p>
        </div>
        <div className="benefit-item">
          <h4>🎯 Descuentos Exclusivos</h4>
          <p>Acceso prioritario a promociones especiales</p>
        </div>
        <div className="benefit-item">
          <h4>👥 Comunidad Activa</h4>
          <p>Más de 2000 miembros compartiendo gangas</p>
        </div>
      </div>

      <button className="btn whatsapp-btn" onClick={handleWhatsAppClick}>
        <span>🚀 Unirme al Grupo Ahora</span>
      </button>
    </div>
  );
};

export default WhatsApp;
