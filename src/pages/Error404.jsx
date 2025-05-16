import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../components/AppContext";
import styles from "../styles/Error404.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Error404() {
  const {
    state: { theme },
  } = useAppContext();

  const textColor = theme ? "var(--dark-text-muted)" : "var(--light-text)";
  const buttonBackground = theme ? "var(--dark-surface)" : "var(--light-text)";

  return (
    <main className={styles.error}>
      <Helmet>
        <link rel="preload" as="image" href="/img/programador.svg" />
        <meta name="description" content="Página no encontrada" />
        <title>Error 404</title>
      </Helmet>
      <div className={styles.error__text}>
        <h1 style={{ color: textColor }}>Error 404</h1>
        <Link
          to="/"
          style={{ backgroundColor: buttonBackground }}
          aria-label="Ir a la página de inicio"
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> Inicio
        </Link>
      </div>
      <img src="/img/error-min.svg" alt="error" width="611" height="509" />
    </main>
  );
}

export default Error404;
