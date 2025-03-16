import React from 'react';
import './Gallery.styles.scss';
import { images } from './Gallery.data';

export const Gallery: React.FC = () => {
  return (
    <section className="section gallery">
      <div className="gallery__wrapper">
        <ul className="gallery__list">
          {images.map((image, index) => (
            <li key={index} className="gallery__item">
              <img src={image.src} alt={image.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
