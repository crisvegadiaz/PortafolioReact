import { Link } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import emailMin from "../img/email-min.svg";

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
        Contacto
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
            ¿Quieres contactarme? Complete el siguiente formulario y me pondré
            en contacto con usted lo antes posible.
            <br />
            Email : alexander85vega@gmail.com
          </p>
          <button>
            <Link to="/formulario">
              Formulario <i className="fa-solid fa-envelope"></i>
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}

export default Contacto;
