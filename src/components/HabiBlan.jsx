import { useAppContext } from "../components/AppContext";
import styles from "../style/HabiBlan.module.css";
import { colors } from "../js/themeDark.js";
import texto from "../js/textoPagina.js";
import giphy from "../img/giphy.webp";

function HabiBlan() {
  const { state } = useAppContext();

  const sectionStyle = {
    color: state.theme ? colors.white : colors.black,
  };

  return (
    <section className={styles.habilidadBland}>
      <h2 className={styles.titulo} style={sectionStyle}>
        {texto.Home.habiBlan.titulo}
      </h2>
      <article className={styles.habilidadBland__arti}>
        <img
          src={giphy}
          alt="GIF ilustrativo"
          width="480"
          height="480"
          className={styles.habilidadBland__arti__img}
        />
        <ul className={styles.habilidadBland__arti__lista} style={sectionStyle}>
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
