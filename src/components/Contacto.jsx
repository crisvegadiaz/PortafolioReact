import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../components/AppContext";
import styles from "../styles/Contacto.module.css";
import { contacto } from "../texts/Home.json";
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
        {contacto.titulo}
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
          <p style={{ color: textColor }}>{contacto.parrafo}</p>
          <Link
            to="/formulario"
            aria-label="Ir al formulario de contacto"
            style={{ backgroundColor: buttonBackground }}
            title="Formulario de contacto"
          >
            {contacto.btn + " "}
            <FontAwesomeIcon icon="fa-envelope" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Contacto;
