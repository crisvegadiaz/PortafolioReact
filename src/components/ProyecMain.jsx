import { useAppContext } from "../components/AppContext";
import { useEffect } from "react";
import "../style/proyecMain.css";
import Carrusel from "./Carrusel";
import ProyecImg from "./ProyecImg";
import { colors } from "../js/themeDark";

const ProyecMain = () => {
  const { state } = useAppContext();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (state.theme) {
      rootElement.style.backgroundColor = colors.black;
    } else {
      rootElement.style.backgroundColor = colors.white;
    }
  }, [state.theme]);

  const images = [
    "./src/img/imgProyec/Juegodelhorcado.png",
    "./src/img/imgProyec/González.png",
    "./src/img/imgProyec/MarcadorDeMarkdown.png",
  ];

  const enlaces = [
    "https://superlative-liger-734e6a.netlify.app/",
    "https://clinquant-travesseiro-9bd6ec.netlify.app/",
    "https://heroic-zuccutto-e7944c.netlify.app/",
  ];

  return (
    <main className="proyecMain">
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
