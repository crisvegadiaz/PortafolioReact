import { Link } from "react-router-dom";
import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import codeMin1 from "../img/code-min1.svg";
import codeMin2 from "../img/code-min2.svg";

function Proyecto() {
  const { state } = useAppContext();

  return (
    <section className="proyecto">
      <h2
        className="titulo"
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        Proyectos Personales
      </h2>
      <article className="proyecto__arti">
        {state.theme ? (
          <img
            src={codeMin2}
            alt="code min"
            width="289"
            height="289"
            className="proyecto__arti__img"
          />
        ) : (
          <img
            src={codeMin1}
            alt="code min"
            width="289"
            height="289"
            className="proyecto__arti__img"
          />
        )}
        <div className="proyecto__arti__div">
          <p
            style={
              state.theme ? { color: colors.white } : { color: colors.black }
            }
          >
            Este es mi rincón creativo. Aquí, la imaginación cobra vida en
            proyectos personales que reflejan mi pasión por. La programación,
            cada creación, cuenta una historia única. ¡Bienvenido a explorar
            este viaje creativo conmigo!
          </p>
          <button>
            <Link to="/proyectos">
              Ver <i className="fa-solid fa-code"></i>
            </Link>
          </button>
        </div>
      </article>
    </section>
  );
}

export default Proyecto;
