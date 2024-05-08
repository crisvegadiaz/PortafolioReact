import { Link } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import emailMin from "../img/email-min.svg";
import texto from "../js/textoPagina.js";

function Contacto() {
  const { state } = useAppContext();
  return (
    <section
      className="contacto"
      style={
        state.theme
          ? { backgroundColor: colors.blackLight }
          : { backgroundColor: colors.grayLight }
      }
    >
      <h2
        className="titulo"
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        {texto.Home.contacto.titulo}
      </h2>
      <article className="contacto__contenido">
        <img
          src={emailMin}
          alt="email"
          width="426"
          height="365"
          className="contacto__contenido__img"
        />
        <div className="contacto__contenido__txt">
          <p
            style={
              state.theme ? { color: colors.white } : { color: colors.black }
            }
          >
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
