import React, { useState } from 'react';
import './Navbar.styles.scss';
import logo from './../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <button className='navbar__toggle' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
        <li className="navbar__link">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__link">
          <Link to="/features">Features</Link>
        </li>
        <li className="navbar__link">
          <Link to="/product">Product</Link>
        </li>
        <li className="navbar__link">
          <Link to="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};
