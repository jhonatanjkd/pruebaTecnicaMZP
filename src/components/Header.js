import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <div className="headerTop">
        <div className="container">
          <div className="contentHeader">
            <div className="Logotipo">
              <img
                src="https://nexustours.azurewebsites.net/img/logo.png"
                alt="Logotipo"
              />
            </div>
            <div className="monedaIdioma">
                  <div className="itemMonedaIdioma">
                        <div className="dropdown">
                              <button className="btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    USD $
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><div className="monedaItem">MXN $</div></li>
                                    <li><div className="monedaItem">EUR €</div></li>
                              </ul>
                        </div>
                  </div>
                  <div className="itemMonedaIdioma">Esp</div>
            </div>
          </div>
         
        </div>
      </div>
      <div className="container"> 
            <Menu />
      </div>
    </header>
  );
};
export default Header;
