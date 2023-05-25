import React, { useEffect, useRef } from 'react';
import './Procesoadop.css';
import Navbar from './Navbar';

function Procesoadop() {


  return (
    <div className="procesoadop-page">
      <Navbar />
      <div className="rectangulo2"></div>
        <div className="procesoadop-container">

            <div className="procesoadop-txt">
                <div className="titulo">
                   <h2>
                     EL <br></br>
                     PROCESO <br></br>
                     DE
                   </h2>
                   <h1>ADOPCIÓN</h1>
                </div>
            </div>

            <div className="contenido1">
               <div className="img1">
                  <img src="./cat1.png" alt="gato1" className="uno"></img>
                  <img src="./cat2.png" alt="gato2" className="dos"></img>
               </div>

               <div className="numerorect">
                    <div className="txt-1">
                       <h3>
                         CONTESTAR <br></br>
                         LAS PREGUNTAS
                       </h3>
                       <p>
                          Nuestra medio de comunicación <br></br>
                          es Instagram, mediante esta red <br></br>
                          te haremos preguntas para conocerte <br></br>
                          y conocer si cumples los requisitos <br></br>
                          que mencionamos anteriormente.
                       </p>
                       <button
                           className="btn-1"
                           onClick={() => {
                           window.open('https://www.instagram.com/catitos.uy/');
                           }}>
                           Instagram
                       </button>
                   </div>
                    <h1>01</h1>
               </div>
            </div>

            <div className="contenido1">
               <div className="img2">
                  <img src="./dog1.png" alt="dog1" className="tres"></img>
                  <img src="./dog2.png" alt="gato2" className="cuatro"></img>
               </div>

               <div className="numerorect2">
                    <div className="txt-2">
                       <h3>
                           SEGURIDAD <br></br>
                           DEL HOGAR  
                       </h3>
                       <p>
                            Deben enviarnos fotos  y videos del hogar, <br></br>
                            enfocado en seguridad, aberturas, fondo, frente <br></br>
                            y muros. Para asegurarnos que cumplan los <br></br>
                            requisitos anteriormente mencionados.
                       </p>
                       <button className='btn-2'>
                           <a href='./adoptar'> Ver requisitos</a>
                       </button>
                   </div>
                   <h1>02</h1>
               </div>
            </div>

            <div className="contenido1" >
                <div className='contenido2'>
                <div className="img1">
                  <img src="./cat3.png" alt="gato3" className="cinco"></img>
                  <img src="./cat4.png" alt="gato4" className="seis"></img>
               </div>

               <div className="numerorect3">
                    <div className="txt-1">
                       <h3>
                         LA <br></br>
                         ENTREVISTA
                       </h3>
                       <p>
                           Si cumples todos los requisitos y <br></br>
                           entiendes que la adopción es un <br></br>
                           comrpromiso para toda la vida, que <br></br>
                           conlleva cuidados especificos y <br></br>
                           atención especial. <br></br>
                           SI ESTAS 99% SEGURO DE <br></br>
                           PROCEDER CON LA ADOPCIÓN <br></br>
                           El siguiente paso es comunciarse <br></br>
                           para tener una entrevista. <br></br>
                       </p>
                       <button
                           className="btn-3"
                           onClick={() => {
                           window.open('https://www.instagram.com/catitos.uy/');
                           }}>
                           Contacto
                       </button>
                   </div>
                   <h1>03</h1>
               </div>
                </div>
            </div>

            <div className="contenido1">
                <div className='contenedor3'>
                <div className="img3">
                  <img src="./dog3.png" alt="dog1" className="siete"></img>
                  <img src="./dog4.png" alt="gato2" className="ocho"></img>
               </div>

               <div className="numerorect4">
                    <div className="txt-4">
                       <h3>
                           AL <br></br>
                           NUEVO HOGAR  
                       </h3>
                       <p>
                          Para recibir al perro o al gato, <br></br>
                          se deberá abonar la castración <br></br>
                          y tener los accesorios básico <br></br>
                          (En nuestras historias destacadas <br></br>
                          de instagram contamos con más <br></br>
                          infromación especifica sobre <br></br>
                          los accesorios y necesidades  <br></br>
                          a cubrir)
                       </p>
                       <button
                           className="btn-4"
                           onClick={() => {
                           window.open('https://www.instagram.com/catitos.uy/');
                           }}>
                           Instagram
                       </button>
                   </div>
                   <h1>04</h1>
               </div>
                </div>
            </div>
        
        </div>
    
    </div>
  );
}

export default Procesoadop;
