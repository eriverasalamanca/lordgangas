import React from 'react';
import '../styles/Education.css';

interface EducationCardType {
  id: number;
  title: string;
  description: string;
  items?: string[];
  buttons?: { label: string; link: string }[];
  highlight?: boolean;
}

const Education: React.FC = () => {
  const educationCards: EducationCardType[] = [
    {
      id: 1,
      title: '💻 Cursos de Programación & Datos',
      description: 'Aprende habilidades reales para mejorar tus ingresos y oportunidades laborales.',
      items: [
        '🐍 Python – Programación desde cero',
        '🚀 Python Avanzado – Nivel profesional',
        '📊 Power BI – Análisis de datos y visualización',
        '🎮 Desarrollo de videojuegos (Lua + LÖVE2D)',
      ],
      buttons: [
        { label: 'Python', link: 'https://edutin.com/sh-10804' },
        { label: 'Python Avanzado', link: 'https://edutin.com/sh-11110' },
        { label: 'Power BI', link: 'https://edutin.com/sh-10803' },
        { label: 'Videojuegos', link: 'https://edutin.com/sh-11518' },
      ],
    },
    {
      id: 2,
      title: '🧘 Ebook: Meditación & Bienestar',
      description:
        '¿Buscas calma, enfoque y equilibrio? Este ebook corto es ideal para comenzar tu camino hacia la paz interior.',
      items: ['Meditation and Relaxing: Tu Viaje hacia la Paz Interior Principiantes'],
      buttons: [{ label: '📖 Ver ebook en Amazon', link: 'https://www.amazon.com.mx/Meditation-Relaxing-Viaje-Interior-Principiantes-ebook/dp/B0DVFXTN3P' }],
      highlight: true,
    },
  ];

  return (
    <section className="education-section">
      <h2 className="section-title">📘 Educación Inteligente</h2>
      <p className="education-intro">
        Ahorrar es importante. Aprender y crecer lo es aún más.
        <br />
        En Lord Gangas también apostamos por tu desarrollo personal y profesional.
      </p>

      <div className="education-grid">
        {educationCards.map((card) => (
          <div
            key={card.id}
            className={`education-card ${card.highlight ? 'highlight' : ''}`}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>

            {card.items && (
              <ul className="education-list">
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {card.buttons && (
              <div className="education-buttons">
                {card.buttons.map((btn, idx) => (
                  <a
                    key={idx}
                    className="btn"
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
