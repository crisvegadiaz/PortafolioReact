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
        <Link
          to="/"
          style={themeStyle}
          aria-label="Ir a la página de inicio"
          title="Ir a la página de inicio"
        >
          <FontAwesomeIcon icon="fa-solid fa-code" />
        </Link>
        <button
          onClick={handleThemeToggle}
          style={themeStyle}
          aria-label={
            state.theme ? "Activar modo claro" : "Activar modo oscuro"
          }
          title={state.theme ? "Activar modo claro" : "Activar modo oscuro"}
        >
          <FontAwesomeIcon
            icon={!state.theme ? "fa-solid fa-sun" : "fa-solid fa-moon"}
            aria-hidden="true"
          />
        </button>
        <div
          className={styles.cabecera__menu__redes}
          style={socialContainerStyle}
        >
          <a
            href="/path/Desarrollador_Web_Fullstack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV de Cristian Diaz Vega"
            style={socialLinkStyle}
            title="CV de Cristian Diaz Vega"
          >
            <FontAwesomeIcon icon="fa-solid fa-file" />
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-diaz-vega-7a186521b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de LinkedIn de Cristian Diaz Vega"
            title="Perfil de LinkedIn de Cristian Diaz Vega"
            style={socialLinkStyle}
          >
            <FontAwesomeIcon icon="fa-brands fa-linkedin" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/crisvegadiaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil de GitHub de crisvegadiaz"
            title="Perfil de GitHub de crisvegadiaz"
            style={socialLinkStyle}
          >
            <FontAwesomeIcon icon="fa-brands fa-github" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
