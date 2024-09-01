import { TYPES } from "../actions/actionTheme";
import styles from "../style/Menu.module.css";
import { useAppContext } from "./AppContext";
import { Link } from "react-router-dom";

function Menu() {
  const { state, dispatch } = useAppContext();

  const buttonTheme = () => {
    dispatch({ type: TYPES.THEME });
  };

  return (
    <header className={styles.cabecera}>
      <nav className={styles.cabecera__menu}>
        <Link to="/">
          <i className="fa-solid fa-code"></i>
        </Link>
        <button onClick={buttonTheme}>
          <i className={`fa-solid ${!state.theme ? "fa-sun" : "fa-moon"}`}></i>
        </button>
        <div className={styles.cabecera__menu__redes}>
          <a
            href="https://twitter.com/cristiandiazve3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/cristian-diaz-vega-7a186521b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/crisvegadiaz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
