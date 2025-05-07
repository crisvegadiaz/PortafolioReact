import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TYPES } from "../actions/actionTheme";
import styles from "../styles/Menu.module.css";
import { useAppContext } from "./AppContext";
import { Link } from "react-router-dom";

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
          <FontAwesomeIcon icon="fa-solid fa-code" />
        </Link>
        <button onClick={handleThemeToggle} style={themeStyle}>
          <FontAwesomeIcon
            icon={!state.theme ? "fa-solid fa-sun" : "fa-solid fa-moon"}
          />
        </button>
        <div
          className={styles.cabecera__menu__redes}
          style={socialContainerStyle}
        >
          <a
            href="https://www.linkedin.com/in/cristian-diaz-vega-7a186521b/"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a
            href="https://github.com/crisvegadiaz"
            target="_blank"
            rel="noopener noreferrer"
            style={socialLinkStyle}
          >
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
