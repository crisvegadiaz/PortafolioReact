import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import giphy from "../img/giphy.webp";
import texto from "../js/textoPagina.js";

function HabiBlan() {
  const { state } = useAppContext();

  return (
    <section className="habilidadBland">
      <h2
        className="titulo"
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        {texto.Home.habiBlan.titulo}
      </h2>
      <article className="habilidadBland__arti">
        <img
          src={giphy}
          alt="gif"
          width="480"
          height="480"
          className="habilidadBland__arti__img"
        />
        <ul
          className="habilidadBland__arti__lista"
          style={
            state.theme ? { color: colors.white } : { color: colors.black }
          }
        >
          <li>
            <details name="info">
              <summary>{texto.Home.habiBlan.tema1}</summary>
              <p>{texto.Home.habiBlan.parrafo1}</p>
            </details>
          </li>
          <li>
            <details name="info">
              <summary>{texto.Home.habiBlan.tema2}</summary>
              <p>{texto.Home.habiBlan.parrafo2}</p>
            </details>
          </li>
          <li>
            <details name="info">
              <summary>{texto.Home.habiBlan.tema3}</summary>
              <p>{texto.Home.habiBlan.parrafo3}</p>
            </details>
          </li>
          <li>
            <details name="info">
              <summary>{texto.Home.habiBlan.tema4}</summary>
              <p>{texto.Home.habiBlan.parrafo4}</p>
            </details>
          </li>
          <li>
            <details name="info">
              <summary>{texto.Home.habiBlan.tema5}</summary>
              <p>{texto.Home.habiBlan.parrafo5}</p>
            </details>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default HabiBlan;
