import { faCode, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TYPES } from "../actions/actionTheme";
import styles from "../style/Menu.module.css";
import { useAppContext } from "./AppContext";
import { Link } from "react-router-dom";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Menu() {
  const { state, dispatch } = useAppContext();

  const handleThemeToggle = () => {
    dispatch({ type: TYPES.THEME });
  };

  const themeStyle = {
    backgroundColor: state.theme
      ? "var(--dark-surface)"
      : "var(--light-background)",
    color: state.theme ? "var(--dark-text-muted)" : "var(--light-text)",
  };

  const socialContainerStyle = { backgroundColor: themeStyle.backgroundColor };
  const socialLinkStyle = { color: themeStyle.color };

  return (
    <header className={styles.cabecera}>
      <nav className={styles.cabecera__menu}>
        <Link to="/" style={themeStyle}>
          <FontAwesomeIcon icon={faCode} />
        </Link>
        <button onClick={handleThemeToggle} style={themeStyle}>
          <FontAwesomeIcon icon={!state.theme ? faSun : faMoon} />
        </button>
        <div
          className={styles.cabecera__menu__redes}
          style={socialContainerStyle}
        >
          <a
            href="https://twitter.com/cristiandiazve3"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-diaz-vega-7a186521b/"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/crisvegadiaz"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
