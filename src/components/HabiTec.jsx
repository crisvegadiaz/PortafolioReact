import { useAppContext } from "../components/AppContext";
import styles from "../style/HabiTec.module.css";
import { colors } from "../js/themeDark.js";
import { useEffect, useRef } from "react";
import texto from "../js/textoPagina.js";

function HabiTec() {
  const { state } = useAppContext();
  const lisRef = useRef(null);

  useEffect(() => {
    const listItems = lisRef.current.querySelectorAll("p");
    listItems.forEach((p) => {
      p.style.color = state.theme ? colors.white : colors.black;
    });
  }, [state.theme]);

  const sectionStyle = {
    backgroundColor: state.theme ? colors.blackLight : colors.grayLight,
    color: state.theme ? colors.white : colors.black,
  };

  return (
    <section className={styles.habilidadTec} style={sectionStyle}>
      <h2
        className={styles.titulo}
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        {texto.Home.habiTec.titulo}
      </h2>
      <ul ref={lisRef} className={styles.habilidadTec__lista}>
        {Object.keys(texto.Home.habiTec)
          .filter((key) => key.startsWith("item"))
          .map((key, index) => (
            <li key={index}>
              <i className={getIconClass(key)}></i>
              <p>{texto.Home.habiTec[key]}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}

const getIconClass = (key) => {
  const iconClasses = {
    item1: "fa-brands fa-docker",
    item2: "fa-brands fa-linux",
    item3: "fa-brands fa-github",
    item4: "fa-brands fa-git-alt",
    item5: "fa-brands fa-js",
    item6: "fa-brands fa-node-js",
    item7: "fa-brands fa-react",
    item8: "fa-brands fa-java",
    item9: "fa-solid fa-database",
    item10: "fa-solid fa-database",
    item11: "fa-solid fa-database",
  };
  return iconClasses[key] || "";
};

export default HabiTec;
