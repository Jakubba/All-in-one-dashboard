import React, { useState } from 'react';
import './Navbar.module.styles.scss';
import logo from './../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Definicja linków w navbarze
  const navbarLinks = [
    { label: 'Home', to: '/' },
    { label: 'Features', to: '/features' },
    { label: 'Product', to: '/product' },
    { label: 'Clients', to: '/clients' },
  ];

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="All in one logo" />
      </div>
      <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
        {navbarLinks.map((link) => (
          <li key={link.to} className="navbar__link">
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
