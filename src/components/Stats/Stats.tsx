import React from 'react';
import './Stats.styles.scss';

interface StatsItem {
  number: number;
  text: string;
}
interface StatsProps {
  stats: StatsItem[];
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="stats">
      <ul className="stats__list">
        {stats.map((stat, index) => (
          <li className="stats__item" key={index}>
            {stat.number}
            <span>+</span>
            <span className="stats__item--green">{stat.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
