import { useEffect, useRef } from "react";
import Juegodelhorcado from "../img/imgProyec/Juegodelhorcado.png";
import González from "../img/imgProyec/González.png";
import MarcadorDeMarkdown from "../img/imgProyec/MarcadorDeMarkdown.png";
import reactRelojo from "../img/imgProyec/ReactRelojo.png";
import scritp from "../img/imgProyec/scritp.png";
import viteReact from "../img/imgProyec/ViteReact.png";
import juegodelHorcado from "../img/imgProyec/JuegodelHorcado.png";
import calculadora from "../img/imgProyec/Calculadora.png";
import encritador from "../img/imgProyec/encritador.png";
import hotelJava from "../img/imgProyec/HotelJava.png";
import javaText from "../img/imgProyec/javaText.png";
import nodeClima from "../img/imgProyec/nodeClima.png";
import nodeImg from "../img/imgProyec/nodeImg.png";
import nodeList from "../img/imgProyec/nodeList.png";
import LiProyec from "./LiProyec";
import texto from "../js/textoPagina";

function ProyecImg({ stateTheme, colors }) {
  const lisRef = useRef(null);

  useEffect(() => {
    if (stateTheme) {
      lisRef.current.childNodes.forEach((node) => {
        node.style.backgroundColor = colors.blackLight;
        node.childNodes[1].childNodes[0].style.color = colors.white;
        node.childNodes[1].childNodes[2].style.color = colors.white;
        node.childNodes[1].childNodes[3].style.color = colors.white;
      });
    } else {
      lisRef.current.childNodes.forEach((node) => {
        node.style.backgroundColor = colors.grayLight;
        node.childNodes[1].childNodes[0].style.color = colors.black;
        node.childNodes[1].childNodes[2].style.color = colors.black;
        node.childNodes[1].childNodes[3].style.color = colors.black;
      });
    }
  }, [stateTheme]);

  return (
    <article className="proyectos">
      <h2
        className="proyectos__titulo"
        style={stateTheme ? { color: colors.white } : { color: colors.gray }}
      >
        Proyectos
      </h2>
      <ul ref={lisRef} className="proyectos__list">
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/juego_del_ahorcado"}
          enlace2={"https://superlative-liger-734e6a.netlify.app/"}
          img={Juegodelhorcado}
          titulo={texto.Proyecto.proye1}
          texto={texto.Proyecto.parrafo1}
        >
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/Pagina-institucional"}
          enlace2={"https://clinquant-travesseiro-9bd6ec.netlify.app/"}
          img={González}
          titulo={texto.Proyecto.proye2}
          texto={texto.Proyecto.parrafo2}
        >
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-bootstrap"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/ReactMarcadorDeMarkdown"}
          enlace2={"https://heroic-zuccutto-e7944c.netlify.app/"}
          img={MarcadorDeMarkdown}
          titulo={texto.Proyecto.proye3}
          texto={texto.Proyecto.parrafo3}
        >
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/ReactReloj"}
          enlace2={"https://mellifluous-brioche-683a3b.netlify.app/"}
          img={reactRelojo}
          titulo={texto.Proyecto.proye4}
          texto={texto.Proyecto.parrafo4}
        >
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/script_sh"}
          img={scritp}
          titulo={texto.Proyecto.proye5}
          texto={texto.Proyecto.parrafo5}
        >
          <i className="fa-brands fa-linux"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/React-citas-aleatorio-"}
          enlace2={"https://effervescent-starlight-af3e40.netlify.app/"}
          img={viteReact}
          titulo={texto.Proyecto.proye6}
          texto={texto.Proyecto.parrafo6}
        >
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/JuegoDelHorcadoReact"}
          enlace2={"https://mellow-zabaione-2b201e.netlify.app/"}
          img={juegodelHorcado}
          titulo={texto.Proyecto.proye7}
          texto={texto.Proyecto.parrafo7}
        >
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
        </LiProyec>

        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/ReactCalculadora"}
          enlace2={"https://astounding-sawine-944061.netlify.app/"}
          img={calculadora}
          titulo={texto.Proyecto.proye8}
          texto={texto.Proyecto.parrafo8}
        >
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/encriptador"}
          enlace2={"https://venerable-bavarois-ba1789.netlify.app/"}
          img={encritador}
          titulo={texto.Proyecto.proye9}
          texto={texto.Proyecto.parrafo9}
        >
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-js"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/Hotel-Alura"}
          img={hotelJava}
          titulo={texto.Proyecto.proye10}
          texto={texto.Proyecto.parrafo10}
        >
          <i class="fa-brands fa-java"></i>
          <i class="fa-solid fa-database"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/CopiaTexto"}
          img={javaText}
          titulo={texto.Proyecto.proye11}
          texto={texto.Proyecto.parrafo11}
        >
          <i class="fa-brands fa-java"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/NodeWeather"}
          img={nodeClima}
          titulo={texto.Proyecto.proye12}
          texto={texto.Proyecto.parrafo12}
        >
          <i class="fa-brands fa-node-js"></i>
        </LiProyec>
        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/NodeImgOpt"}
          img={nodeImg}
          titulo={texto.Proyecto.proye13}
          texto={texto.Proyecto.parrafo13}
        >
          <i class="fa-brands fa-node-js"></i>
        </LiProyec>

        <LiProyec
          enlace1={"https://github.com/crisvegadiaz/NodeToDoApp"}
          img={nodeList}
          titulo={texto.Proyecto.proye14}
          texto={texto.Proyecto.parrafo14}
        >
          <i class="fa-brands fa-node-js"></i>
        </LiProyec>
      </ul>
    </article>
  );
}

export default ProyecImg;
