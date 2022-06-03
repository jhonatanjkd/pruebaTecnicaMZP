import React from "react";
import {NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="Menu">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
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
                  HOTELES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="#">
                  ACTIVIDADES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="#">
                  TRASLADOS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="#">
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
