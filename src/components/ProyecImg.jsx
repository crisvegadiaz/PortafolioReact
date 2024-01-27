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

function ProyecImg({ stateTheme, colors }) {
  const lisRef = useRef(null);

  useEffect(() => {
    if (stateTheme) {
      lisRef.current.childNodes.forEach((node) => {
        node.childNodes[0].style.backgroundColor = colors.blackLight;
      });
    } else {
      lisRef.current.childNodes.forEach((node) => {
        node.childNodes[0].style.backgroundColor = colors.grayLight;
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
        <li>
          <img src={Juegodelhorcado} alt="juegodelHorcado" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/juego_del_ahorcado"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://superlative-liger-734e6a.netlify.app/"
              target="_blank"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={González} alt="González" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/Pagina-institucional"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://clinquant-travesseiro-9bd6ec.netlify.app/"
              target="_blank"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={MarcadorDeMarkdown} alt="RectRelojo" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/ReactMarcadorDeMarkdown"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://heroic-zuccutto-e7944c.netlify.app/"
              target="_blank"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={reactRelojo} alt="RectRelojo" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/ReactReloj"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://mellifluous-brioche-683a3b.netlify.app/"
              target="_blank"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={scritp} alt="Script" />
          <div>
            <a href="https://github.com/crisvegadiaz/script_sh" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={viteReact} alt="ViteReact" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/React-citas-aleatorio-"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://effervescent-starlight-af3e40.netlify.app/"
              target="_blank"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={juegodelHorcado} alt="JuegoDelHorcadoReact" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/JuegoDelHorcadoReact"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://mellow-zabaione-2b201e.netlify.app/"
              target="_blank"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={calculadora} alt="Calculadora" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/ReactCalculadora"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://astounding-sawine-944061.netlify.app/"
              target="_blank"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={encritador} alt="Encritador" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/encriptador"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://venerable-bavarois-ba1789.netlify.app/"
              target="_blank"
            >
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={hotelJava} alt="HotelJava" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/Hotel-Alura"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={javaText} alt="javaText" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/CopiaTexto"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={nodeClima} alt="nodeClima" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/NodeWeather"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={nodeImg} alt="nodeImg" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/NodeImgOpt"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </li>
        <li>
          <img src={nodeList} alt="nodeList" />
          <div>
            <a
              href="https://github.com/crisvegadiaz/NodeToDoApp"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </li>
      </ul>
    </article>
  );
}

export default ProyecImg;
