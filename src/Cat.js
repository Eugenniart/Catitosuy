import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Cat.css';
import Navbar from './Navbar';

function Cat() {
  const containerRef = useRef(null);
  let startX = null;

  const handleTouchStart = e => {
    const touches = e.touches || [];
    startX = touches[0]?.clientX;
  };

  const handleTouchMove = e => {
    if (startX) {
      const diffX = e.touches[0].clientX - startX;
      if (diffX > 0) {
        containerRef.current.style.transform = `translateX(${diffX}px)`;
      }
    }
  };

  const handleTouchEnd = e => {
    const diffX = startX ? e.changedTouches[0].clientX - startX : 0;
    containerRef.current.style.transform = '';
    startX = null;

    if (diffX > 100) {
      // Si se arrastró más de 100px a la derecha, redirige al componente catrequisitos
      window.location.href = '/catrequisitos';
    }
  };

  const handleMouseDown = e => {
    startX = e.clientX;
  };

  const handleMouseMove = e => {
    if (startX) {
      const diffX = e.clientX - startX;
      if (diffX > 0) {
        containerRef.current.style.transform = `translateX(${diffX}px)`;
      }
    }
  };

  const handleMouseUp = e => {
    const diffX = startX ? e.clientX - startX : 0;
    containerRef.current.style.transform = '';
    startX = null;

    if (diffX > 100) {
      // Si se arrastró más de 100px a la derecha, redirige al componente catrequisitos
      window.location.href = '/catrequisitos';
    }
  };

  return (
    <div className="cat-page">
      <Navbar />
      <div
        className='cat-page-container'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={containerRef}
      >
        <div className="cat-content">
          <h1>Tenemos<br />algunos<br />requisitos para<br />concretar la<br />adopción</h1>
          <h3>Desliza a la derecha <br />o haz click en el ratoncito</h3>
          <img src="./arrow.png" alt="arrow" className="arrow" />
        </div>
        <div className="cat-gif-container">
          <Link to="/catrequisitos">
            <img src="./Cat-gif.gif" alt="Gif" className="gif" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cat;
