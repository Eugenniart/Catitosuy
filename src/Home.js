import React from 'react';
import './Home.css';

function Home() {
    return (
      <div className="home-container home-page">
        <div className="home-content-container">
          <div className="home-content">
            <h1>Adopción y  <br /> castración de <br /> perros y gatos en <br /> Montevideo, <br /> Uruguay</h1>
            <button> <a href='./adoptar'>Adoptar</a> </button>
          </div>
        </div>
        <div className="home-image-container">
          <img src="./PictureHome.png" alt="Imagen" className="imagen" />
          <div className="rotate-circle"></div>
        </div>
      </div>
    );
}

export default Home;
