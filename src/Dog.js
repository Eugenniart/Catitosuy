import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';
import Navbar from './Navbar';

function Dog() {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [mouseX, setMouseX] = useState(null);

  const handleTouchStart = e => {
    setStartX(e.touches[0]?.clientX);
  };

  const handleTouchMove = e => {
    let diffX;
    if (startX !== null && e.touches[0]) {
      diffX = e.touches[0].clientX - startX;
    } else if (mouseX !== null) {
      diffX = e.clientX - mouseX;
    }
    if (diffX > 0) {
      containerRef.current.style.transform = `translateX(${diffX}px)`;
    }
  };

  const handleTouchEnd = e => {
    let diffX;
    if (startX !== null) {
      diffX = e.changedTouches[0]?.clientX - startX;
    } else if (mouseX !== null) {
      diffX = e.clientX - mouseX;
    }
    containerRef.current.style.transform = '';
    setStartX(null);
    setMouseX(null);

    if (diffX && diffX > 100) {
      window.location.href = '/Dogrequisitos';
    }
  };

  const handleMouseDown = e => {
    setMouseX(e.clientX);
    setStartX(null);
  };

  const handleMouseUp = e => {
    handleTouchEnd(e);
  };

  return (
    <div className="dog-page">
      <Navbar />
      <div
        className="dog-page-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleTouchMove}
        onMouseUp={handleMouseUp}
        ref={containerRef}
      >
        <div className="dog-gif-container">
          <Link to="/Dogrequisitos">
            <img src="./doggif.gif" alt="Gif" className="gif" />
          </Link>
        </div>
        <div className="dog-content">
          <h1>
            Tenemos
            <br />
            algunos
            <br />
            requisitos para
            <br />
            concretar la
            <br />
            adopción
          </h1>
          <h3>
            Desliza a la derecha
            <br />
            o haz click en el ratoncito
          </h3>
          <img src="./arrow2.png" alt="arrow" className="arrow2" />
        </div>
      </div>
    </div>
  );
}

export default Dog;




