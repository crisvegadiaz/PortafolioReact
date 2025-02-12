import { useAppContext } from "../components/AppContext";
import styles from "../style/Contacto.module.css";
import texto from "../js/textoPagina.js";
import { Link } from "react-router-dom";

function Contacto() {
  const {
    state: { theme },
  } = useAppContext();

  const backgroundColor = theme
    ? "var(--dark-surface)"
    : "var(--light-background)";
  const textColor = theme ? "var(--dark-text-muted)" : "var(--light-text)";
  const buttonBackground = theme
    ? "var(--dark-background)"
    : "var(--light-text)";

  return (
    <section className={styles.contacto} style={{ backgroundColor }}>
      <h2 className={styles.titulo} style={{ color: textColor }}>
        {texto.Home.contacto.titulo}
      </h2>
      <article className={styles.contacto__contenido}>
        <img
          src="/img/email-min.svg"
          alt="Ilustración de un correo electrónico"
          width="426"
          height="365"
          className={styles.contacto__contenido__img}
        />
        <div className={styles.contacto__contenido__txt}>
          <p style={{ color: textColor }}>{texto.Home.contacto.parrafo}</p>
          <button style={{ backgroundColor: buttonBackground }}>
            <Link to="/formulario">
              {texto.Home.contacto.btn} <i className="fa-solid fa-envelope" />
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}

export default Contacto;
