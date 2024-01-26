import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";

function HabiBlan() {
  const { state } = useAppContext();

  return (
    <section className="habilidadBland">
      <h2
        className="titulo"
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        Habilidad Blandas
      </h2>
      <article className="habilidadBland__arti">
        <img
          src="./src/img/giphy.gif"
          alt="gif"
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
              <summary>Organización</summary>
              <p>
                Gestión eficiente de tareas y proyectos, cumpliendo plazos
                gracias a mi enfoque estructurado y herramientas de
                planificación.
              </p>
            </details>
          </li>
          <li>
            <details name="info">
              <summary>Proactividad</summary>
              <p>
                Anticipo desafíos, tomo medidas preventivas y busco
                constantemente mejoras. Soy impulsor de soluciones innovadoras.
              </p>
            </details>
          </li>
          <li>
            <details name="info">
              <summary>Creatividad</summary>
              <p>
                Pensador creativo con habilidad para aportar ideas frescas y
                perspectivas originales, contribuyendo a la innovación en
                proyectos.
              </p>
            </details>
          </li>
          <li>
            <details name="info">
              <summary>Autodidacta</summary>
              <p>
                Aprendizaje continuo a través de investigación independiente,
                cursos en línea y lectura, demostrando mi motivación para
                mantenerme actualizado.
              </p>
            </details>
          </li>
          <li>
            <details name="info">
              <summary>Colaboración</summary>
              <p>
                Este es el texto que se mostrará al hacer clic en el resumen.
              </p>
              <p>
                Colaborador efectivo que fomenta la comunicación clara y la
                sinergia del equipo, contribuyendo a un ambiente de trabajo
                positivo y colaborativo.
              </p>
            </details>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default HabiBlan;
