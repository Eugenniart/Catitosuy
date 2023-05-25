import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Economicas.css';
import Navbar from './Navbar';

function Economicas() {
  return (
    <div className="economica-page">
      <Navbar />
      <div className='economica-page-container'>
        <div className="economica-content">
          <div className='rectangulos'>
            <div className="rectangulo6">
              <div className="logo-container">
                <img src="./Redpagos.png" alt="redpagos" className="logoeconomico" />
              </div>
              <h3>Redpagos:</h3>
              <h2>Colectivo Catitos <br></br> 72566 </h2>
            </div>
            <div className="rectangulo6 itau">
              <div className="logo-container">
                <img src="./itau.png" alt="itau" className="logoeconomico" />
              </div>
              <h3>Cuenta Itaú:</h3>
              <h2>
                  Caja ahorro pesos <br></br> 
                  N° 5854950</h2>
            </div>
            <div className="rectangulo6 paypal">
              <div className="logo-container">
                <img src="./Paypal.png" alt="paypal" className="logoeconomico" />
              </div>
              <h3>PayPal:</h3>
              <h2>CatitosUy@gmail.com </h2>
            </div>
          </div>

          <div className='rectangulos2'>
            <div className="rectangulo7 fijo">
              <div className="logo-container2">
                <img src="./MercadoPago.png" alt="mercadopago" className="logoeconomico2" />
              </div>
              <h3>MercadoPago : </h3>
              <h2> Podes realizar <br></br> donaciones con tu <br></br> monto deseado </h2>
              <div className='button-container'>
                  <button className='btn-m'><a href='https://link.mercadopago.com.uy/catitos'> Donar </a>
                  </button>
              </div>
            </div>
            <div className="rectangulo7 mensual">
              <div className="logo-container2">
                <img src="./MercadoPago.png" alt="mercadopago" className="logoeconomico2" />
              </div>
              <h3> MercadoPago Mensual :</h3>
              <h2> Suscribite y realiza <br></br> donaciones <br></br> mensuales </h2>
              <div className='button-container'>
                   <button className='btn-m'><a href='https://www.mercadopago.com.uy/subscriptions/checkout?preapproval_plan_id=2c9380847f8a014f017f98a58b4e0269'> Mensual </a>
                   </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Economicas;

