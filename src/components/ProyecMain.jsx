import MarcadorDeMarkdown from "../img/imgProyec/MarcadorDeMarkdown.png";
import Juegodelhorcado from "../img/imgProyec/Juegodelhorcado.png";
import { useAppContext } from "../components/AppContext";
import González from "../img/imgProyec/González.png";
import styles from "../style/ProyecMain.module.css";
import { colors } from "../js/themeDark";
import ProyecImg from "./ProyecImg";
import { useEffect } from "react";
import Carrusel from "./Carrusel";

const ProyecMain = () => {
  const { state } = useAppContext();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    rootElement.style.backgroundColor = state.theme ? colors.black : colors.white;
  }, [state.theme]);

  const images = [
    Juegodelhorcado,
    González,
    MarcadorDeMarkdown,
  ];

  const enlaces = [
    "https://superlative-liger-734e6a.netlify.app/",
    "https://clinquant-travesseiro-9bd6ec.netlify.app/",
    "https://heroic-zuccutto-e7944c.netlify.app/",
  ];

  return (
    <main className={styles.proyecMain}>
      <Carrusel
        stateTheme={state.theme}
        colors={colors}
        images={images}
        enlaces={enlaces}
      />
      <ProyecImg stateTheme={state.theme} colors={colors} />
    </main>
  );
};

export default ProyecMain;
