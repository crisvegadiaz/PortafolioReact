import { useEffect } from "react";
import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import { useRef } from "react";
import texto from "../js/textoPagina.js";

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
        {texto.Home.habiTec.titulo}
      </h2>
      <ul ref={lisRef} className="habilidadTec__lista">
        <li>
          <i className="fa-brands fa-docker"></i>
          <p>{texto.Home.habiTec.item1}</p>
        </li>
        <li>
          <i className="fa-brands fa-linux"></i>
          <p>{texto.Home.habiTec.item2}</p>
        </li>
        <li>
          <i className="fa-brands fa-github"></i>
          <p>{texto.Home.habiTec.item3}</p>
        </li>
        <li>
          <i className="fa-brands fa-git-alt"></i>
          <p>{texto.Home.habiTec.item4}</p>
        </li>
        <li>
          <i className="fa-brands fa-js"></i>
          <p>{texto.Home.habiTec.item5}</p>
        </li>
        <li>
          <i className="fa-brands fa-node-js"></i>
          <p>{texto.Home.habiTec.item6}</p>
        </li>
        <li>
          <i className="fa-brands fa-react"></i>
          <p>{texto.Home.habiTec.item7}</p>
        </li>
        <li>
          <i className="fa-brands fa-java"></i>
          <p>{texto.Home.habiTec.item8}</p>
        </li>
        <li>
          <i className="fa-solid fa-database"></i>
          <p>{texto.Home.habiTec.item9}</p>
        </li>
        <li>
          <i className="fa-solid fa-database"></i>
          <p>{texto.Home.habiTec.item10}</p>
        </li>
        <li>
          <i className="fa-solid fa-database"></i>
          <p>{texto.Home.habiTec.item11}</p>
        </li>
      </ul>
    </section>
  );
}

export default HabiTec;
