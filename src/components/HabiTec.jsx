import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../components/AppContext";
import styles from "../style/HabiTec.module.css";
import { habiTec } from "../texts/Home.json";
import {
  faDocker,
  faLinux,
  faGithub,
  faGitAlt,
  faJs,
  faNodeJs,
  faReact,
  faJava,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

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

  const iconColorStyle = {
    color: theme ? "var(--dark-text-muted)" : "var(--light-text)",
  };

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
    item1: faDocker,
    item2: faLinux,
    item3: faGithub,
    item4: faGitAlt,
    item5: faJs,
    item6: faNodeJs,
    item7: faReact,
    item8: faJava,
    item9: faDatabase,
    item10: faDatabase,
    item11: faDatabase,
  };
  return icons[key];
};

export default HabiTec;
