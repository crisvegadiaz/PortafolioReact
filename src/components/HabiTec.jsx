import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../components/AppContext";
import styles from "../styles/HabiTec.module.css";
import { habiTec } from "../texts/Home.json";

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

  const iconColorStyle = theme
    ? {
        backgroundColor: "var(--dark-background)",
        color: "var(--dark-text-muted)",
      }
    : { backgroundColor: "var(--light-surface)", color: "var(--light-text)" };

  const textStyle = {
    color: theme ? "var(--dark-text-muted)" : "var(--light-text)",
  };

  return (
    <section className={styles.habilidadTec} style={sectionStyle}>
      <h2 className={styles.titulo} style={titleStyle}>
        {habiTec.titulo}
      </h2>
      <ul className={styles.habilidadTec__lista}>
        {Object.keys(habiTec)
          .filter((key) => key.startsWith("item"))
          .map((key, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={getIcon(key)} style={iconColorStyle} />
              <p style={textStyle}>{habiTec[key]}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}

const getIcon = (key) => {
  const icons = {
    item1: ["fab", "docker"],
    item2: ["fab", "linux"],
    item3: ["fab", "github"],
    item4: ["fab", "git-alt"],
    item5: ["fab", "js"],
    item6: ["fab", "node-js"],
    item7: ["fab", "react"],
    item8: ["fab", "java"],
    item9: ["fas", "database"],
    item10: ["fas", "database"],
    item11: ["fas", "database"],
  };
  return icons[key] || ["fas", "question-circle"];
};

export default HabiTec;
