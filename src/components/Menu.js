import React from "react";
import {NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="contenedorMenu">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink  className="nav-link active" aria-current="page" to="#">
                <i className="fas fa-hotel"></i>
                  HOTELES 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="#">
                <i className="fas fa-ticket-alt"></i>
                  ACTIVIDADES
                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="#">
                <i className="fas fa-bus"></i>
                  TRASLADOS
                  
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="#">
                <i className="fas fa-fire-alt"></i>
                  OFERTAS
                  
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Menu;
