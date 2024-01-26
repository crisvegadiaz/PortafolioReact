import { useEffect } from "react";
import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import { useRef } from "react";

function HabiTec() {
  const { state } = useAppContext();
  const lisRef = useRef(null);

  useEffect(() => {
    if (state.theme) {
      lisRef.current.childNodes.forEach((node) => {
        node.childNodes[1].style.color = colors.white;
      });
    } else {
      lisRef.current.childNodes.forEach((node) => {
        node.childNodes[1].style.color = colors.black;
      });
    }
  }, [state]);

  return (
    <section
      className="habilidadTec"
      style={
        state.theme
          ? { backgroundColor: colors.blackLight }
          : { backgroundColor: colors.grayLight }
      }
    >
      <h2
        className="titulo"
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        Habilidades Técnicas
      </h2>
      <ul ref={lisRef} className="habilidadTec__lista">
        <li>
          <i className="fa-brands fa-docker"></i>
          <p>Docker</p>
        </li>
        <li>
          <i className="fa-brands fa-linux"></i>
          <p>Linux</p>
        </li>
        <li>
          <i className="fa-brands fa-github"></i>
          <p>Github</p>
        </li>
        <li>
          <i className="fa-brands fa-git-alt"></i>
          <p>Git</p>
        </li>
        <li>
          <i className="fa-brands fa-js"></i>
          <p>JavaScript</p>
        </li>
        <li>
          <i className="fa-brands fa-node-js"></i>
          <p>Node</p>
        </li>
        <li>
          <i className="fa-brands fa-react"></i>
          <p>React</p>
        </li>
        <li>
          <i className="fa-brands fa-java"></i>
          <p>Java</p>
        </li>
        <li>
          <i className="fa-solid fa-database"></i>
          <p>MySQL</p>
        </li>
        <li>
          <i className="fa-solid fa-database"></i>
          <p>PostgreSQL</p>
        </li>
        <li>
          <i className="fa-solid fa-database"></i>
          <p>MariaDB</p>
        </li>
      </ul>
    </section>
  );
}

export default HabiTec;
