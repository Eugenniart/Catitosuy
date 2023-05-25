import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Materiales.css';
import Navbar from './Navbar';

function Materiales() {
  return (
    <div className="materiales-page">
      <Navbar />
      <div className='materiales-page-container'>
            <div className='materiales-rectangulos'>
               
               <div className='rectangulos-container'>
               <div className='rectangle'>
                    <img src="./alimento.png" alt="alimento" className="image" />
                    <h1>PODES DEJAR <br></br> ALIMENTO PAGO EN : </h1>
                    <p>San Juan tienda de <br></br> Mascotas </p>
                    <h2> 
                       Placido Ellauri esq. <br></br>
                       José L. Osorio <br></br>
                       26289969 <br></br>
                       099709998 <br></br>
                    </h2>
                    <button className='btn-r'><a href='https://goo.gl/maps/LYtWpmHkWvYijANa9'> Ver mapa </a>
                   </button>
                </div>

                
                 <div className='new-rectangle'>
                    <img src='./recalimento.png'></img>
                  </div>
               </div>
               
                <div className='rectangulos-container2'>
                <div className='rectangle'>
                    <img src="./medicacion.png" alt="medicacion" className="image" />
                    <h1>LO QUE <br></br> NECESITAMOS :</h1>
                    <p>Desparacitantes :</p>
                    <h2> 
                       Uniplus Jarabe, <br></br> Sanium Plus <br></br> y TrotazolPlus.
                    </h2>

                    <p>Antibióticos :</p>
                    <h2> 
                      Clavamox, <br></br> Doxixilinas.
                    </h2>

                    <p>Otros :</p>
                    <h2> 
                       Pipetas, jeringas, <br></br> gasas, algodon, <br></br> talco para pulgas, <br></br> shooter spray, <br></br> Pet Millk, etc.
                    </h2>
            
                </div>
                <div className='new-rectangle2'>
                    <img src='./recmedicacion.png'></img>
                  </div>


                </div>
                
                  <div className='rectangle rectangulos-container3'> 
                    <img src="./donaciones.png" alt="donaciones" className="image" /> 
                    <h1>PODES DEJAR <br></br> DONACIONES EN :</h1>
                    <p>Veterinaria <br></br>MundoBicho</p>
                    <h2>Juan Jose de <br></br> Amezaga 2106A </h2>
                    <button className='new-btn'><a href='https://goo.gl/maps/8v3YV6vfHzy5GrPj6'> Ver mapa </a></button>



                      <div className='Donaciones1'>
                        
                        <p>Veterinaria <br></br>El Boyero</p>
                        <h2>Pedro Francisco <br></br> Berro 1370 </h2>
                        <button className='new-btn'><a href='https://goo.gl/maps/d4LVYSTpCBWzTxkj9'> Ver mapa </a></button>
                     </div>

                      <div className='Donaciones1'>
                        
                        <p>Veterinaria <br></br>Ibiray</p>
                        <h2>Ibiray 2334</h2>
                        <button className='new-btn'><a href='https://goo.gl/maps/TDirKZZJqDfavLvv9'> Ver mapa </a></button>
                     </div>

                      <div className='Donaciones1'>
                        
                        <p>Veterinaria <br></br>Gallinal</p>
                        <h2>Gustavo <br></br>Gallinal 2066</h2>
                        <button className='new-btn'><a href='https://goo.gl/maps/W5NgEafKy2WbCUis8'> Ver mapa </a></button>
                     </div>

                     <div className='Donaciones1'>
                        
                        <p>Techitos verdes <br></br>Local C39</p>
                        <h2>Fernandez Crespo <br></br> y Colonia</h2>
                        <button className='new-btn'><a href='https://goo.gl/maps/KBQpWm1M7DFUc9rv7'> Ver mapa </a></button>
                     </div>






                  </div>
                  


            </div>
      </div>
    </div>
  );
}
  
export default Materiales;
