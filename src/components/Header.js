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
              <div>USD $</div>
              <div>Esp</div>
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
