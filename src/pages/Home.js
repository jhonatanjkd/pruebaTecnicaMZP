import React from "react";
import Layout from "../layouts/LayoutDefault";
import ItemOfertas from "../components/itemOfertas";
import Promocion from "../components/Promocion";
import Favoritos from "../components/Favoritos";

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
        <section className="Favoritos">
          <h2>Destinos Favoritos</h2>
          <div className="container">
            <div className="Listadofavorito">
              <Favoritos />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default Home;
