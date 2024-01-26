import { useAppContext } from "./AppContext";
import { TYPES } from "../actions/actionTheme";
import { Link } from "react-router-dom";

function Menu() {
  const { state, dispatch } = useAppContext();

  const buttonTheme = () => {
    dispatch({ type: TYPES.THEME });
  };

  return (
    <header className="cabecera">
      <nav className="cabecera__menu">
        <Link to="/">
          <i className="fa-solid fa-code"></i>
        </Link>
        {!state.theme ? (
          <button onClick={buttonTheme}>
            <i className="fa-solid fa-sun"></i>
          </button>
        ) : (
          <button onClick={buttonTheme}>
            <i className="fa-solid fa-moon"></i>
          </button>
        )}

        <div className="cabecera__menu__redes">
          <a href="https://github.com/crisvegadiaz" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://github.com/crisvegadiaz" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/crisvegadiaz" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
