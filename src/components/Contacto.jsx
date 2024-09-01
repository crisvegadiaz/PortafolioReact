import { useAppContext } from "../components/AppContext";
import styles from "../style/Contacto.module.css";
import { colors } from "../js/themeDark.js";
import emailMin from "../img/email-min.svg";
import texto from "../js/textoPagina.js";
import { Link } from "react-router-dom";

function Contacto() {
  const { state } = useAppContext();

  const sectionStyle = {
    backgroundColor: state.theme ? colors.blackLight : colors.grayLight,
    color: state.theme ? colors.white : colors.black,
  };

  return (
    <section
      className={styles.contacto}
      style={{ backgroundColor: sectionStyle.backgroundColor }}
    >
      <h2 className={styles.titulo} style={{ color: sectionStyle.color }}>
        {texto.Home.contacto.titulo}
      </h2>
      <article className={styles.contacto__contenido}>
        <img
          src={emailMin}
          alt="Ilustración de un correo electrónico"
          width="426"
          height="365"
          className={styles.contacto__contenido__img}
        />
        <div className={styles.contacto__contenido__txt}>
          <p style={{ color: sectionStyle.color }}>
            {texto.Home.contacto.parrafo}
          </p>
          <button>
            <Link to="/formulario">
              {texto.Home.contacto.btn} <i className="fa-solid fa-envelope"></i>
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}

export default Contacto;
