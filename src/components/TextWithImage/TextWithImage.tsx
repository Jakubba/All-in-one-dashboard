import React from 'react';
import img from '../../assets/image/gallery.png';
import './TextWithImage.styles.scss';

interface TextWithImageProps {
  title: string;
  description: string;
  buttonText: string;
}

export const TextWithImage: React.FC<TextWithImageProps> = ({ title, description, buttonText }) => {
  return (
    <section className="section text-with-image">
      <div className="text-with-image__wrapper">
        <div className="text-with-image__left">
          <h3 className="text-with-image__title">{title}</h3>
          <p className="text-with-image__description">{description}</p>
          <button className="text-with-image__button">{buttonText}</button>
        </div>
        <div className="text-with-image__right">
          <img src={img} alt="Test" />
        </div>
      </div>
    </section>
  );
};
