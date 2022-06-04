import React from "react";
import {NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-4">
            <div className="logoTextFooter">
              <img
                src="https://nexustours.azurewebsites.net/img/logo.png"
                alt="Logotipo"
              />
              <p>
                Ofrecemos servicios de reservación de hoteles, actividades,
                tours, traslados, paquetes de viaje y mucho más!
              </p>
            </div>
          </div>
          <div className="col col-12 col-md-4">
                <div className="ListaOfertasFooter">
                  <h3>Ofertas de Hoteles</h3>
                  <ul>
                        <li><NavLink to="#">Hoteles en Cancún</NavLink></li>
                        <li><NavLink to="#">Hoteles en Los Cabos</NavLink></li>
                        <li><NavLink to="#">Hoteles en Acapulco</NavLink></li>
                        <li><NavLink to="#">Hoteles en Mazatlán</NavLink></li>
                  </ul>
                </div>
          </div>
          <div className="col col-12 col-md-4">
                <div className="contactoFooter">
                     <h3>Asistencia personalizada</h3>
                     <p>55 5555 5555</p>
                     <NavLink to="#">soporte@nexustours.com</NavLink>  
                </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
