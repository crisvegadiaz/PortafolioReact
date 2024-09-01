import { useAppContext } from "../components/AppContext";
import styles from "../style/Error404.module.css";
import errorMin from "../img/error-min.svg";
import { colors } from "../js/themeDark.js";
import { Link } from "react-router-dom";

function Error404() {
  const { state } = useAppContext();

  return (
    <main className={styles.error}>
      <div className={styles.error__text}>
        <h1
          style={
            state.theme ? { color: colors.white } : { color: colors.black }
          }
        >
          Error 404
        </h1>
        <button>
          <Link to="/">
            <i className="fa-solid fa-arrow-left"></i> Inicio
          </Link>
        </button>
      </div>
      <img src={errorMin} alt="error" width="611" height="509" />
    </main>
  );
}

export default Error404;
