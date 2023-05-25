import React, { useRef } from 'react';
import './Catrequisitos.css'
import Navbar from './Navbar';


function Catrequisitos() {
  
  return (
    <div className='catrequisitos-page'>
      <Navbar />
      <div className='circulo'></div>
      <div className='circulo2'></div>
      <div className='circulo3'></div>
      <div className='circulo4'></div>
      <div className='catrequisitos-container' >
        <div className='catrequisitos-txt'>
          <div className='requisito'>
            <h1>01</h1>
            <p>Hogar seguro sin salidas de <br></br> la propiedad</p>
          </div>

          <div className='requisito' >
            <p>Alimento de calidad <br></br> Biofresh o superior</p>
            <h1>02</h1>
          </div>

          <div className='requisito'>
            <h1>03</h1>
            <p>Afiliación veterinaria,<br></br> vacunas anuales</p>
          </div>

          <div className='requisito'>
            <p>Collar e identificación</p>
            <h1>04</h1>
          </div>

          <div className='requisito'>
            <h1>05</h1>
            <p>Contrato y seguimiento</p>
          </div>

          <div className='requisito'>
            <p>Castración antes de los 5 meses, se abona al <br></br>momento de la adopción, costo $2000 UYU</p>
            <h1 id="header-06">06</h1>
          </div>
        </div>
      
           <div className='ratonicito'>
            
            <img src='./ratoncito.gif' alt='ratoncito.gif' className='ratoncito' />
              
           </div> 
         
      </div>
    </div>
  );
}

export default Catrequisitos;

