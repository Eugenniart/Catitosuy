import React from 'react';
import { Link } from 'react-router-dom';
import './Donar.css';
import Navbar from './Navbar';

function Donar() {
  return (
    <div className="donar-page">
      <Navbar />
      <div className="donar-container">
             <Link to="/Economicas" style={{ textDecoration: 'none' }}>
               <div className="rectdonar-container2">
                   <img src='./chanchita.gif' alt="chanchita.gif" className="economico-img"/>
                   <div className="rectangulo4"></div>
                   <div className="economico-txt">
                   <h3>Donaciones</h3>
                   <h1>Económicas</h1>
                   </div>
               </div>       
             </Link>
                 <Link to='/Materiales'style={{ textDecoration: 'none' }}>
                   <div className="rectdonar-container">
                     <img src='./donar.gif' alt="donar.gif" className="donar-img"/>
                      <div className="rectangulo5"></div>
                      <div className="donar-txt">
                       <h3>Donaciones</h3>
                       <h1>Materiales</h1>
                       </div>
                   </div>


                  </Link>
     
          </div>

        </div>
  );
}

export default Donar;

