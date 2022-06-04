import React from "react";

const Promocion = () => {
  return (
    <div className="promocion parallax">
      <div className="bgBlack"></div>
      <div className="contentPoromo">
        <h3>PROMOCIÓN DE ÚLITMO MINUTO</h3>
        <h4>Hard Rock Hotel Cancún</h4>
        <div className="estrellas">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <span>2 Adultos - 5 días y 4 Noches</span>
        <small><strong>$2,900 </strong> / persona</small>
        <div className="reservaPromo">Reservar <i className="fas fa-angle-right"></i></div>
      </div>
    </div>
  );
};

export default Promocion;
