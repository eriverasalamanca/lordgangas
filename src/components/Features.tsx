import React from 'react';
import '../styles/Features.css';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '🏷️',
      title: 'Ofertas Diarias',
      description: 'Descuentos actualizados todos los días en cientos de productos variados de todas las categorías',
    },
    {
      icon: '⚡',
      title: 'Ofertas Flash',
      description: 'Promociones por tiempo limitado con descuentos de hasta 70% que no te puedes perder',
    },
    {
      icon: '🛍️',
      title: 'Todo Tipo de Productos',
      description: 'Tecnología, hogar, moda, deportes, electrónica, cocina, juguetes y mucho más',
    },
    {
      icon: '💰',
      title: 'Mejor Precio',
      description: 'Comparamos precios en tiempo real para garantizarte el mejor precio del mercado',
    },
    {
      icon: '📦',
      title: 'Envíos Seguros',
      description: 'Enlaces directos a Mercado Libre y tiendas verificadas con garantía de compra segura',
    },
    {
      icon: '🎯',
      title: 'Compra Inteligente',
      description: 'Tips y estrategias para maximizar tus ahorros y comprar en el momento perfecto',
    },
  ];

  return (
    <section className="features-section">
      <h2 className="section-title">🎁 ¿Qué Encontrarás con Lord Gangas?</h2>
      <div className="features">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
