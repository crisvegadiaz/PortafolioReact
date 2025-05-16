import ProyecMain from "../components/ProyecMain";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function Proyectos() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Portafolio de Cristian Diaz Vega, mostrando proyectos y habilidades en desarrollo web y backend."
        />
        <title>Proyectos</title>
      </Helmet>
      <Menu />
      <ProyecMain />
      <Footer />
    </>
  );
}

export default Proyectos;
