import React from 'react';
import './PossiSection.styles.scss';
import { possibilities } from './PossiSection.data';

export const PossiSection: React.FC = () => {
  return (
    <section className='possibility'>
      <div className='possibility__wrapper'>
        <div className='possibility__left'>
          <h3 className='possibility__title'>Abyś możesz dobrane z naszego produktu</h3>
          <p className='possibility__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
          <button className='possibility__button'>Rozpocznij teraz</button>
        </div>
        <div className='possibility__right'>
          <ul className='possibility__list'>
            {possibilities.map((item) => (
              <li key={item.id} className='possibility__item'>
                <div className='possibility__item-content'>
                  <img src={item.icon} alt='' className='possibility__item-icon' />
                  <div className='possibility__item-text'>
                    <h3 className='possibility__item-title'>{item.title}</h3>
                    <p className='possibility__item-description'>{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PossiSection;
