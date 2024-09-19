import MarcadorDeMarkdown from "../img/imgProyec/MarcadorDeMarkdown.png";
import ApiRest from "../img/imgProyec/Api-rest.png";
import JuegoDelHorcado from "../img/imgProyec/JuegodelHorcado.png";
import Juegodelhorcado from "../img/imgProyec/Juegodelhorcado.png";
import Calculadora from "../img/imgProyec/Calculadora.png";
import ReactRelojo from "../img/imgProyec/ReactRelojo.png";
import AppPomodoro from "../img/imgProyec/AppPomodoro.png";
import PhaserJuego from "../img/imgProyec/PhaserJuego.png";
import Encritador from "../img/imgProyec/encritador.png";
import AppCaloria from "../img/imgProyec/AppCaloria.png";
import ViteReact from "../img/imgProyec/ViteReact.png";
import HotelJava from "../img/imgProyec/HotelJava.png";
import NodeClima from "../img/imgProyec/nodeClima.png";
import JavaText from "../img/imgProyec/javaText.png";
import González from "../img/imgProyec/González.png";
import NodeList from "../img/imgProyec/nodeList.png";
import NodeImg from "../img/imgProyec/nodeImg.png";
import styles from "../style/ProyecImg.module.css";
import AppNaza from "../img/imgProyec/AppNaza.png";
import Scritp from "../img/imgProyec/scritp.png";
import Login from "../img/imgProyec/Login.png";
import { useEffect, useRef } from "react";
import texto from "../js/textoPagina";
import LiProyec from "./LiProyec";

function ProyecImg({ stateTheme, colors }) {
  const lisRef = useRef(null);

  useEffect(() => {
    const nodes = lisRef.current.childNodes;
    nodes.forEach((node) => {
      node.style.backgroundColor = stateTheme
        ? colors.blackLight
        : colors.grayLight;
      const childNodes = node.childNodes[1].childNodes;
      childNodes[0].style.color = stateTheme ? colors.white : colors.black;
      childNodes[2].style.color = stateTheme ? colors.white : colors.black;
      childNodes[3].style.color = stateTheme ? colors.white : colors.black;
    });
  }, [stateTheme, colors]);

  return (
    <article className={styles.proyectos}>
      <h2
        className={styles.proyectos__titulo}
        style={{ color: stateTheme ? colors.white : colors.gray }}
      >
        Proyectos
      </h2>
      <ul ref={lisRef} className={styles.proyectos__list}>
        {[
          {
            enlace1: "https://github.com/crisvegadiaz/Phaser-react-flappy-bird",
            img: ApiRest,
            titulo: texto.Proyecto.proye20,
            texto: texto.Proyecto.parrafo20,
            icons: ["fa-node-js"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/Phaser-react-flappy-bird",
            enlace2: "https://phaser-juego.netlify.app/",
            img: PhaserJuego,
            titulo: texto.Proyecto.proye19,
            texto: texto.Proyecto.parrafo19,
            icons: ["fa-react", "fa-css3-alt", "fa-solid fa-gamepad"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/Login-react-node-express",
            img: Login,
            titulo: texto.Proyecto.proye15,
            texto: texto.Proyecto.parrafo15,
            icons: [
              "fa-react",
              "fa-css3-alt",
              "fa-node-js",
              "fa-solid fa-database",
            ],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/ReactNative_AppCalorias",
            img: AppCaloria,
            titulo: texto.Proyecto.proye18,
            texto: texto.Proyecto.parrafo18,
            icons: ["fa-react", "fa-css3-alt"],
          },
          {
            enlace1:
              "https://github.com/crisvegadiaz/ReactNative_ProyectoNasa-",
            img: AppNaza,
            titulo: texto.Proyecto.proye17,
            texto: texto.Proyecto.parrafo17,
            icons: ["fa-react", "fa-css3-alt"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/ReactNative_Pomodoro",
            img: AppPomodoro,
            titulo: texto.Proyecto.proye16,
            texto: texto.Proyecto.parrafo16,
            icons: ["fa-react", "fa-css3-alt"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/juego_del_ahorcado",
            enlace2: "https://superlative-liger-734e6a.netlify.app/",
            img: Juegodelhorcado,
            titulo: texto.Proyecto.proye1,
            texto: texto.Proyecto.parrafo1,
            icons: ["fa-html5", "fa-css3-alt", "fa-js"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/Pagina-institucional",
            enlace2: "https://clinquant-travesseiro-9bd6ec.netlify.app/",
            img: González,
            titulo: texto.Proyecto.proye2,
            texto: texto.Proyecto.parrafo2,
            icons: ["fa-html5", "fa-css3-alt", "fa-js", "fa-bootstrap"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/ReactMarcadorDeMarkdown",
            enlace2: "https://heroic-zuccutto-e7944c.netlify.app/",
            img: MarcadorDeMarkdown,
            titulo: texto.Proyecto.proye3,
            texto: texto.Proyecto.parrafo3,
            icons: ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/ReactReloj",
            enlace2: "https://mellifluous-brioche-683a3b.netlify.app/",
            img: ReactRelojo,
            titulo: texto.Proyecto.proye4,
            texto: texto.Proyecto.parrafo4,
            icons: ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/script_sh",
            img: Scritp,
            titulo: texto.Proyecto.proye5,
            texto: texto.Proyecto.parrafo5,
            icons: ["fa-linux"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/React-citas-aleatorio-",
            enlace2: "https://effervescent-starlight-af3e40.netlify.app/",
            img: ViteReact,
            titulo: texto.Proyecto.proye6,
            texto: texto.Proyecto.parrafo6,
            icons: ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/JuegoDelHorcadoReact",
            enlace2: "https://mellow-zabaione-2b201e.netlify.app/",
            img: JuegoDelHorcado,
            titulo: texto.Proyecto.proye7,
            texto: texto.Proyecto.parrafo7,
            icons: ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/ReactCalculadora",
            enlace2: "https://astounding-sawine-944061.netlify.app/",
            img: Calculadora,
            titulo: texto.Proyecto.proye8,
            texto: texto.Proyecto.parrafo8,
            icons: ["fa-html5", "fa-css3-alt", "fa-js", "fa-react"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/encriptador",
            enlace2: "https://venerable-bavarois-ba1789.netlify.app/",
            img: Encritador,
            titulo: texto.Proyecto.proye9,
            texto: texto.Proyecto.parrafo9,
            icons: ["fa-html5", "fa-css3-alt", "fa-js"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/Hotel-Alura",
            img: HotelJava,
            titulo: texto.Proyecto.proye10,
            texto: texto.Proyecto.parrafo10,
            icons: ["fa-java", "fa-solid fa-database"], // Cambio a fa-solid
          },
          {
            enlace1: "https://github.com/crisvegadiaz/CopiaTexto",
            img: JavaText,
            titulo: texto.Proyecto.proye11,
            texto: texto.Proyecto.parrafo11,
            icons: ["fa-java"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/NodeWeather",
            img: NodeClima,
            titulo: texto.Proyecto.proye12,
            texto: texto.Proyecto.parrafo12,
            icons: ["fa-node-js"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/NodeImgOpt",
            img: NodeImg,
            titulo: texto.Proyecto.proye13,
            texto: texto.Proyecto.parrafo13,
            icons: ["fa-node-js"],
          },
          {
            enlace1: "https://github.com/crisvegadiaz/NodeToDoApp",
            img: NodeList,
            titulo: texto.Proyecto.proye14,
            texto: texto.Proyecto.parrafo14,
            icons: ["fa-node-js"],
          },
        ].map((proyecto, index) => (
          <LiProyec
            key={index}
            enlace1={proyecto.enlace1}
            enlace2={proyecto.enlace2}
            img={proyecto.img}
            titulo={proyecto.titulo}
            texto={proyecto.texto}
          >
            {proyecto.icons.map((icon, i) => (
              <i
                key={i}
                className={`${
                  icon.startsWith("fa-solid") ? "fa-solid" : "fa-brands"
                } ${icon}`}
              ></i>
            ))}
          </LiProyec>
        ))}
      </ul>
    </article>
  );
}

export default ProyecImg;
