import { useEffect, useRef } from "react";

function ProyecImg({ stateTheme, colors }) {
  const lisRef = useRef(null);

  useEffect(() => {
    if (stateTheme) {
      lisRef.current.childNodes.forEach((node) => {
        node.childNodes[0].style.backgroundColor = colors.blackLight;
        console.log(node);
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
          <img src="../src/img/imgProyec/ReactRelojo.png" alt="RectRelojo" />
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
          <img src="../src/img/imgProyec/scritp.png" alt="Script" />
          <div>
            <a href="https://github.com/crisvegadiaz/script_sh" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </li>
        <li>
          <img src="../src/img/imgProyec/ViteReact.png" alt="ViteReact" />
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
          <img
            src="../src/img/imgProyec/JuegodelHorcado.png"
            alt="JuegoDelHorcadoReact"
          />
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
          <img src="../src/img/imgProyec/Calculadora.png" alt="Calculadora" />
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
          <img src="../src/img/imgProyec/encritador.png" alt="Encritador" />
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
          <img src="../src/img/imgProyec/HotelJava.png" alt="HotelJava" />
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
          <img src="../src/img/imgProyec/javaText.png" alt="javaText" />
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
          <img src="../src/img/imgProyec/nodeClima.png" alt="nodeClima" />
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
          <img src="../src/img/imgProyec/nodeImg.png" alt="nodeImg.png" />
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
          <img src="../src/img/imgProyec/nodeList.png" alt="nodeList" />
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
