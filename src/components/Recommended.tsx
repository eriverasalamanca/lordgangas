import React from 'react';
import '../styles/Education.css';

declare const gtag: any;

interface RecommendedCard {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: string;
  label: string;
  highlight?: boolean;
}

const Recommended: React.FC = () => {
  const recommendedCards: RecommendedCard[] = [
    {
      id: 1,
      title: '💻 Tecnología & Gadgets',
      description: 'Laptops, pantallas, proyectores, audio y más.',
      link: 'https://mercadolibre.com/sec/33zsb77',
      icon: '🔗',
      label: 'Ver recomendados',
    },
    {
      id: 2,
      title: '👕 Moda & Estilo',
      description: 'Ropa, accesorios y tendencias con descuento.',
      link: 'https://mercadolibre.com/sec/29nVMPY',
      icon: '🔗',
      label: 'Ver moda',
    },
    {
      id: 3,
      title: '🔥 Recomendados del Grupo VIP',
      description: 'Ofertas compartidas directamente por la comunidad.',
      link: 'https://mercadolibre.com/sec/2beZoaE',
      icon: '🟢',
      label: 'Ver gangas del grupo',
      highlight: true,
    },
    {
      id: 4,
      title: '🎥 TikTok Shop',
      description: 'Productos virales y recomendados en video.',
      link: 'https://vt.tiktok.com/ZS5wcvsVH/?page=TikTokShop',
      icon: '▶️',
      label: 'Ver vitrina',
    },
  ];

  const handleClick = (title: string) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click_afiliado', {
        event_category: 'Afiliados',
        event_label: title,
      });
    }
  };

  return (
    <section className="education-section">
      <h2 className="section-title">🛒 Recomendados de Lord Gangas</h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.15rem',
        maxWidth: '850px',
        margin: '0 auto 3rem',
        opacity: 0.9
      }}>
        Productos que realmente valen la pena. Seleccionados de nuestra comunidad y listas verificadas.
      </p>

      <div className="education-grid">
        {recommendedCards.map((card) => (
          <div
            key={card.id}
            className={`education-card ${card.highlight ? 'highlight' : ''}`}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <a
              className="btn"
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(card.title)}
            >
              {card.icon} {card.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
