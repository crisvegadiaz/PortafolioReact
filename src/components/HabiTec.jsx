import { useAppContext } from "../components/AppContext";
import styles from "../style/HabiTec.module.css";
import texto from "../js/textoPagina.js";

function HabiTec() {
  const {
    state: { theme },
  } = useAppContext();

  const sectionStyle = {
    backgroundColor: theme ? "var(--dark-surface)" : "var(--light-background)",
  };

  const titleStyle = {
    color: theme ? "var(--dark-text-muted)" : "var(--light-text)",
  };

  const iconStyle = theme
    ? { backgroundColor: "var(--dark-background)", color: "var(--dark-text-muted)" }
    : { backgroundColor: "var(--light-surface)", color: "var(--light-text)" };

  const textStyle = {
    color: theme ? "var(--dark-text-muted)" : "var(--light-text)",
  };

  return (
    <section className={styles.habilidadTec} style={sectionStyle}>
      <h2 className={styles.titulo} style={titleStyle}>
        {texto.Home.habiTec.titulo}
      </h2>
      <ul className={styles.habilidadTec__lista}>
        {Object.keys(texto.Home.habiTec)
          .filter((key) => key.startsWith("item"))
          .map((key, index) => (
            <li key={index}>
              <i className={getIconClass(key)} style={iconStyle} />
              <p style={textStyle}>{texto.Home.habiTec[key]}</p>
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
