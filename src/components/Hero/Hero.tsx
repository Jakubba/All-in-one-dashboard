import React from 'react';
import SplineScene from './SplineScene';
import './Hero.styles.scss';

interface HeroProps {
  title?: string;
  description: string;
  buttonText: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  title = 'Dashboard <span class="accent">All-in-One</span> – Twoje Centrum Zarządzania',
  description = 'Zarządzaj wszystkim w jednym miejscu! Nasz intuicyjny dashboard łączy kluczowe funkcje, analizy i statystyki, abyś miał pełną kontrolę nad swoim biznesem lub projektem.',
  buttonText = 'Rozpocznij teraz'
}) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <SplineScene />
      </div>
      <div className="hero__content">
        <h2 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="hero__description">{description}</p>
        <button className="hero__button">
          <span className="hero__button-text">{buttonText}</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
