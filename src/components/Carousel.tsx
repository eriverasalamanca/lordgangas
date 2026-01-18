import React, { useEffect, useRef, useState } from 'react';
import '../styles/Carousel.css';

interface AdCard {
  id: number;
  image: string;
  alt: string;
  link: string;
  tooltip?: string;
}

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const adCards: AdCard[] = [
    {
      id: 1,
      image: '/aby.png',
      alt: 'Dra Albina',
      link: 'https://wa.me/524921115006?text=Vi%20tu%20publicidad%20en%20Lord%20Gangas',
    },
    {
      id: 2,
      image: '/didi.png',
      alt: 'Didi',
      link: 'https://d.didiglobal.com/OEEM7ZM?r=MGM_homepage_icon&c=M3',
    },
    {
      id: 3,
      image: '/magnesio.png',
      alt: 'Magnesio Complex',
      link: 'https://mercadolibre.com/sec/2Dxn4Mg',
      tooltip: 'Magnesio Complex con 4 tipos de magnesio',
    },
    {
      id: 4,
      image: '/xnanofhd.png',
      alt: 'Proyector XNano FHD',
      link: 'https://mercadolibre.com/sec/2JbWfqv',
      tooltip: 'Proyector XNano FHD Nativo con Dolby Audio',
    },
    {
      id: 5,
      image: '/pillo.png',
      alt: 'PilloFon',
      link: 'https://pillofon.mx/eql51jfs',
      tooltip: 'PilloFon',
    },
    {
      id: 6,
      image: '/converse.png',
      alt: 'Converse',
      link: 'https://mercadolibre.com/sec/2KRLKLQ',
      tooltip: 'Converse oficial ML',
    },
    {
      id: 7,
      image: '/demon.png',
      alt: 'Demon Slyer',
      link: 'https://wa.me/525586085191?text=Quiero%20comprar%20el%20BOXSET%2C%20lo%20vi%20en%20Lord%20Gangas%20%F0%9F%94%A5%F0%9F%93%A6',
      tooltip: 'Demon Slyer',
    },
    {
      id: 8,
      image: '/tuanuncio.png',
      alt: 'Anúnciate aquí',
      link: 'https://wa.me/523342470959?text=Me%20gustaria%20que%20mi%20negocio%20se%20publique%20en%20Lord%20Gangas',
      tooltip: 'Anúnciate aquí',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % adCards.length);
      }, 4500);
    } else {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isVisible, adCards.length]);

  useEffect(() => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(`[data-index="${currentIndex}"]`);
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setCurrentIndex((prev) => (prev + 1) % adCards.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + adCards.length) % adCards.length);
    }
  };

  return (
    <section className="mas-section">
      <h2 className="section-title">🧠 Destacados de la Comunidad</h2>
      <p className="mas-subtitle">
        Negocios, marcas y emprendedores que crecen con Lord Gangas
      </p>

      <div className="mas-wrapper">
        <button
          className="mas-arrow left"
          onClick={() => handleScroll('left')}
          aria-label="Anterior"
        >
          ❮
        </button>

        <div className="mas-carousel" ref={carouselRef}>
          <div className="mas-track" ref={trackRef}>
            {adCards.map((card, index) => (
              <a
                key={card.id}
                className={`ad-card ${index === currentIndex ? 'active' : ''}`}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                data-index={index}
                data-tooltip={card.tooltip}
              >
                <img src={card.image} alt={card.alt} />
              </a>
            ))}
          </div>
        </div>

        <button
          className="mas-arrow right"
          onClick={() => handleScroll('right')}
          aria-label="Siguiente"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Carousel;
