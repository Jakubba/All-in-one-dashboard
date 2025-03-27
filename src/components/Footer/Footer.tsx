import React from "react";
import "./Footer.module.styles.scss";
import logo from "../../assets/icons/logo.png";
import { footerSections } from "./Footer.data";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer-logo">
          <img className="footer-logo-img" src={logo} alt="Company Logo" />
        </div>
        <ul className="footer-list">
          {footerSections.map((section, sectionIndex) => (
            <li key={`${section.title}-${sectionIndex}`} className="footer__list__item">
              <span className="footer-list-title">{section.title}</span>
              <ul className="footer-sub-list">
                {section.links.map((link, linkIndex) => (
                  <li key={`${link.url}-${linkIndex}`} className="footer-sub-list__item">
                    <a className="footer-link" href={link.url}>
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
