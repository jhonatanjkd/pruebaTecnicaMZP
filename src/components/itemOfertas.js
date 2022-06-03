import React, { useEffect, useState } from "react";
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
        <div className="col col-md-4" key={ofertas.placeId}>
          <div className="itemOferta">
            <div className="foto">
              <img
                src={ofertas.mainPhoto.cloudUri}
                alt={ofertas.title}
              />
            </div>
            <div className="detalle">
              <div className="stars"></div>
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
