import { useAppContext } from "../components/AppContext";
import styles from "../style/Proyecto.module.css";
import { colors } from "../js/themeDark.js";
import codeMin1 from "../img/code-min1.svg";
import codeMin2 from "../img/code-min2.svg";
import texto from "../js/textoPagina.js";
import { Link } from "react-router-dom";

function Proyecto() {
  const { state } = useAppContext();

  const sectionStyle = {
    color: state.theme ? colors.white : colors.black,
  };

  const imgSrc = state.theme ? codeMin2 : codeMin1;

  return (
    <section className={styles.proyecto}>
      <h2 className={styles.titulo} style={{ color: sectionStyle.color }}>
        {texto.Home.proyecto.titulo}
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
          <p style={{ color: sectionStyle.color }}>
            {texto.Home.proyecto.parrafo}
          </p>
          <button>
            <Link to="/proyectos">
              {texto.Home.proyecto.btn} <i className="fa-solid fa-code"></i>
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}

export default Proyecto;
