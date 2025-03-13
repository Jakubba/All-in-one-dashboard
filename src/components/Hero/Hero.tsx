import React from 'react';
import SplineScene from './SplineScene';
import './Hero.styles.scss';

interface HeroProps {
  title?: string;
  description: string;
  buttonText: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = 'Dashboard All-in-One – Twoje Centrum Zarządzania',
  description = 'Zarządzaj wszystkim w jednym miejscu! Nasz intuicyjny dashboard łączy kluczowe funkcje, analizy i statystyki, abyś miał pełną kontrolę nad swoim biznesem lub projektem.',
  buttonText = 'Rozpocznij teraz',
}) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <SplineScene />
      </div>
      <div className="hero__content">
        <h2 className="hero__title">
          {title.split('All-in-One').map((part, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="accent">All-in-One</span>}
              {part}
            </React.Fragment>
          ))}
        </h2>
        <p className="hero__description">{description}</p>
        <button className="hero__button">
          <span className="hero__button-text">{buttonText}</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
