import { useAppContext } from "../components/AppContext";
import styles from "../style/Error404.module.css";
import { Link } from "react-router-dom";

function Error404() {
  const {
    state: { theme },
  } = useAppContext();

  const textColor = theme ? "var(--dark-text-muted)" : "var(--light-text)";
  const buttonBackground = theme ? "var(--dark-surface)" : "var(--light-text)";

  return (
    <main className={styles.error}>
      <div className={styles.error__text}>
        <h1 style={{ color: textColor }}>Error 404</h1>
        <button style={{ backgroundColor: buttonBackground }}>
          <Link to="/">
            <i className="fa-solid fa-arrow-left" /> Inicio
          </Link>
        </button>
      </div>
      <img src="/img/error-min.svg" alt="error" width="611" height="509" />
    </main>
  );
}

export default Error404;
