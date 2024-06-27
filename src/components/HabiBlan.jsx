import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import giphy from "../img/giphy.webp";
import texto from "../js/textoPagina.js";

function HabiBlan() {
  const { state } = useAppContext();

  const sectionStyle = {
    color: state.theme ? colors.white : colors.black,
  };

  return (
    <section className="habilidadBland">
      <h2 className="titulo" style={sectionStyle}>
        {texto.Home.habiBlan.titulo}
      </h2>
      <article className="habilidadBland__arti">
        <img
          src={giphy}
          alt="GIF ilustrativo"
          width="480"
          height="480"
          className="habilidadBland__arti__img"
        />
        <ul className="habilidadBland__arti__lista" style={sectionStyle}>
          {Object.keys(texto.Home.habiBlan)
            .filter((key) => key.startsWith("tema"))
            .map((key, index) => (
              <li key={index}>
                <details name="info">
                  <summary>{texto.Home.habiBlan[key]}</summary>
                  <p>{texto.Home.habiBlan[`parrafo${index + 1}`]}</p>
                </details>
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
}

export default HabiBlan;
