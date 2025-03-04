import React from 'react';
import './ReviewsSection.styles.scss';
import { reviews } from './Reviews.data.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section className='reviews'>
      <div className='reviews__header'>
        <h3 className='reviews__title'>What people are saying about us</h3>
        <p className='reviews__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <ul className='reviews__list'>
        {reviews.map((review) => (
          <li key={review.id} className='reviews__item'>
            <span className='quotes'>''</span>
            <p className='reviews__item-description'>{review.text}</p>
            <div className='reviews__item-author'>
              <img className='avatar' src={review.avatar} alt='avatar' />
              <div className='reviews__item-author-info'>
                <p className='reviews__item-author-name'>{review.author}</p>
                <p className='reviews__item-author-role'>{review.role}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};