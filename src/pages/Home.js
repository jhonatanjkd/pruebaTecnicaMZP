import React from "react";
import Layout from "../layouts/LayoutDefault";
import ItemOfertas from "../components/itemOfertas";
import Promocion from "../components/Promocion";
const Home = () => {
  return (
    <Layout>
      <div className="Home">
        <section className="OfertasUltimoMinuto">
          <div className="container">
            <h2>Ofertas de úlitmo minuto</h2>
            <div className="listadoOfertas">              
                <ItemOfertas />              
            </div>
          </div>
        </section>
        <section className="Promociones">
            <Promocion />
        </section>       
      </div>
    </Layout>
  );
};
export default Home;
