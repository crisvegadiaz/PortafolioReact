import { useAppContext } from "../components/AppContext";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Menu from "../components/Menu";
import { useEffect } from "react";

function Home() {
  const { state } = useAppContext();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (rootElement) {
      if (state.theme) {
        rootElement.style.backgroundColor =
          "var(--dark-background)" || "#000000";
      } else {
        rootElement.style.backgroundColor = "var(--light-surface)" || "#FFFFFF";
      }
    }
  }, [state.theme]);

  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="img/programador.svg" />
        <meta
          name="description"
          content="Portafolio de Cristian Diaz Vega, mostrando proyectos y habilidades en desarrollo web."
        />
        <title>Portafolio Cristian Diaz Vega</title>
      </Helmet>
      <Menu />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
