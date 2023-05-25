import React, { useRef } from 'react';
import './Dogrequisitos.css'
import Navbar from './Navbar';

function Dogrequisitos() {
    return (
        <div className='dogrequisitos-page'>
          <Navbar />
          <div className='circulo5'></div>
          <div className='circulo6'></div>
          <div className='circulo7'></div>
          <div className='circulo8'></div>
          <div className='circulo9'></div>
          <div className='dogrequisitos-container' >
          
            <div className='dogrequisitos-txt'>
              <div className='requisito2'>
                <h1>01</h1>
                <p>Hogar seguro sin salidas de <br></br> la propiedad</p>
              </div>
    
              <div className='requisito2' >
                <p>Alimento de calidad <br></br> Biofresh o superior</p>
                <h1>02</h1>
              </div>
    
              <div className='requisito2'>
                <h1>03</h1>
                <p>Afiliación veterinaria,<br></br> vacunas anuales</p>
              </div>
    
              <div className='requisito2'>
                <p>Collar e identificación</p>
                <h1>04</h1>
              </div>
    
              <div className='requisito2'>
                <h1>05</h1>
                <p>Contrato y seguimiento</p>
              </div>
    
              <div className='requisito2' id='header6'>
                <p>Castración antes de los 5 meses, se abona al <br></br>momento de la adopción, costo $2000 UYU</p>
                <h1>06</h1>
              </div>

              <div className='requisito2' id='header7'>
                <h1>07</h1>
                <p>Castración antes de los 5 meses, se abona al <br></br>momento de la adopción, costo $2000 UYU</p>
                
              </div>
            </div>
             
            <div className='hormiga'>
                
              <img src='./hormiga.gif' alt='hormiga.gif' className='hormiga' />
                
            </div> 
            
          </div>
        </div>
      );
 }
    
export default Dogrequisitos;