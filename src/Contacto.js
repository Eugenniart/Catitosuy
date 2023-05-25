import React from 'react';
import { Link } from 'react-router-dom';
import './Contacto.css';
import Navbar from './Navbar';

function Contacto() {
  return (
    <div className="contacto-page">
      <Navbar />
      <div className="contacto-container">
          <div className='contacto-content'>

           <div className="gif-container9 giftop">
              <img src="/Instagram.gif" alt="primer_gif" className="gif" />
              <div className="button-container">
                 <button className="button btninsta"><a href='https://www.instagram.com/catitos.uy/'> Instagram </a></button>
               </div>
           </div>
           <div className="gif-container9 gifbot">
               <img src="/Facebook.gif" alt="segundo_gif" className="gif" />
               <div className="button-container">
                 <button className="button btnfacebook"><a href='https://www.facebook.com/catitos.uy'> Facebook </a></button>
               </div>
             </div>

          </div> 
      
      
      
      </div>
    </div>
  );
}

export default Contacto;
