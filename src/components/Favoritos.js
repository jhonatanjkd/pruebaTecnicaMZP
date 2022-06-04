import React from 'react';

const Favoritos = () => {
      return(
            <div className="row">
                  <div className="col col-12 col-md-3">
                        <div className="favoritoItem">
                              <div className="favoritoFoto">
                                    <img src="https://nexustours.azurewebsites.net/img/destinos/cancun.jpg" alt="" />
                                    <div className="iconFav"><i className="fas fa-plus"></i></div>
                              </div>
                              <div className="favoritoDesc">
                                    <h3>Cancún</h3>
                                    <p>Considerado como la puerta de entrada al Mundo Maya.</p>
                              </div>
                        </div>
                  </div>
                  <div className="col col-12 col-md-3">
                        <div className="favoritoItem">
                              <div className="favoritoFoto">
                                    <img src="https://nexustours.azurewebsites.net/img/destinos/los_cabos.jpg" alt="" />
                                    <div className="iconFav"><i className="fas fa-plus"></i></div>
                              </div>
                              <div className="favoritoDesc">
                                    <h3>Los Cabos</h3>
                                    <p>Descubre la hermosura del extremo sur de la península de Baja California.</p>
                              </div>
                        </div>
                  </div>
                  <div className="col col-12 col-md-3">
                        <div className="favoritoItem">
                              <div className="favoritoFoto">
                                    <img src="https://nexustours.azurewebsites.net/img/destinos/acapulco.jpg" alt="" />
                                    <div className="iconFav"><i className="fas fa-plus"></i></div>
                              </div>
                              <div className="favoritoDesc">
                                    <h3>Acapulco</h3>
                                    <p>Reconocido mundialmente como sinónimo de relajación y diversión.</p>
                              </div>
                        </div>
                  </div>
                  <div className="col col-12 col-md-3">
                        <div className="favoritoItem">
                              <div className="favoritoFoto">
                                    <img src="https://nexustours.azurewebsites.net/img/destinos/mazatlan.jpg" alt="" />
                                    <div className="iconFav"><i className="fas fa-plus"></i></div>
                              </div>
                              <div className="favoritoDesc">
                                    <h3>Mazatlán</h3>
                                    <p>"La Perla del Pacífico", con inmejorables atardeceres y generosa gastronomía.</p>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

export default Favoritos