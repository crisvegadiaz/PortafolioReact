import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../components/AppContext";
import styles from "../styles/Proyecto.module.css";
import { proyecto } from "../texts/Home.json";
import { Link } from "react-router-dom";

function Proyecto() {
  const {
    state: { theme },
  } = useAppContext();

  const textColor = theme ? "var(--dark-text-muted)" : "var(--light-text)";
  const buttonBackground = theme ? "var(--dark-surface)" : "var(--light-text)";
  const imgSrc = theme ? "/img/code-min2.svg" : "/img/code-min1.svg";

  return (
    <section className={styles.proyecto}>
      <h2 className={styles.titulo} style={{ color: textColor }}>
        {proyecto.titulo}
      </h2>
      <article className={styles.proyecto__arti}>
        <img
          src={imgSrc}
          alt="Imagen de código"
          width="289"
          height="289"
          className={styles.proyecto__arti__img}
        />
        <div className={styles.proyecto__arti__div}>
          <p style={{ color: textColor }}>{proyecto.parrafo}</p>
          <button style={{ backgroundColor: buttonBackground }}>
            <Link to="/proyectos">
              {proyecto.btn} <FontAwesomeIcon icon="fa-code" />
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}

export default Proyecto;
