import React from 'react';
import './Newsletter.styles.scss';

export const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__wrapper">
        <h3 className="newsletter__title">Subscribe to our newsletter</h3>
        <p className="newsletter__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
        </p>
        <form className="newsletter__form">
          <input className="newsletter__input" type="email" placeholder="Write your email" />
          <button className="newsletter__button">Subscribe</button>
        </form>
      </div>
    </section>
  );
};
