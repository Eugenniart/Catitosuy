import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Adoptar.css';
import Navbar from './Navbar';
import Cat from './Cat';
import Dog from './Dog';

function Adoptar() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="adoptar-page">
      <Navbar toggleNav={toggleNav} showNav={showNav} />
      <div className="home-container adoptar-container">
        <div className="img-container img-container-cat">
          <Link to="/cat" style={{ textDecoration: 'none' }}>
            <div className="circle"></div>
            <img src="./gato.png" alt="imagen2" className="adoptar-img-cat adoptar-img" />
            <h1>Gatos</h1>
          </Link>
        </div>
        <div className="img-container img-container-dog">
          <Link to="/Dog" style={{ textDecoration: 'none' }}>
            <div className="circle"></div>
            <img src="./perro.png" alt="imagen1" className="adoptar-img-dog adoptar-img" />
            <h1 className="h1perros">Perros</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Adoptar;
