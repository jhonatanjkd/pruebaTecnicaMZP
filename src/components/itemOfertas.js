import React, { useEffect, useState } from "react";
import {NavLink } from 'react-router-dom';
import ofertasT from "../services/ofertas";

const ItemOfertas = () => {
  const [ofertas, setOfertas] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await ofertasT.getOfertas();
      console.log(data);
      setOfertas(data.hotels);
    })();
  },[]);

  return (
    <div className="row">
      {ofertas.map((ofertas) => (
        <div className="col col-12 col-md-4" key={ofertas.placeId}>
          <div className="itemOferta">
            <NavLink className="foto" to="#">
              <img
                src={ofertas.mainPhoto.cloudUri}
                alt={ofertas.title}
              />
              <div className="btnReservar"><div>Reservar</div></div>
            </NavLink>
            <div className="detalle">
              <div className="stars">              
              {Array.from(Array(parseInt(ofertas.stars)), (e, i) => {
                  return  <i key={i} className="fas fa-star"></i>
              })}            
              </div>
              <p>{ofertas.name}</p>
              <span>{ofertas.locationInfo.city}, {ofertas.locationInfo.country}</span>
              <span>
                desde <b>$2,000</b> /noche
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemOfertas;
