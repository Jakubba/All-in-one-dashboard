import React from 'react';
import './Footer.styles.scss';
import logo from '../../assets/icons/logo.png';
import { footerSections } from './Footer.data';


export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer--wrapper">
        <div className="footer__logo">
          <img className="footer__logo-img" src={logo} alt="Company Logo" />
        </div>
        <ul className="footer__list">
          {footerSections.map((section, sectionIndex) => (
            <li key={sectionIndex} className="footer__list-item">
              <span className="footer__list-title">{section.title}</span>
              <ul className="footer__sub-list">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="footer__sub-list-item">
                    <a className="footer__link" href={link.url}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
