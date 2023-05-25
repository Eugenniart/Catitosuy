import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const closeNav = () => {
      setShowNav(false);
    };

    window.addEventListener('resize', closeNav);

    return () => {
      window.removeEventListener('resize', closeNav);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="./logo.png" alt="Logo" className="logo" />
      </Link>
      
      <button className="navbar-toggle" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${showNav ? 'show-nav' : ''}`}>
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/adoptar">ADOPTAR</Link></li>
        <li><Link to="/donar">DONAR</Link></li>
        <li><Link to="/contacto">CONTACTO</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

