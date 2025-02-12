import { useAppContext } from "../components/AppContext";
import styles from "../style/HabiBlan.module.css";
import texto from "../js/textoPagina.js";
import ImgRobot from "./ImgRobot.jsx";

function HabiBlan() {
  const {
    state: { theme },
  } = useAppContext();

  const textStyle = {
    color: theme ? "var(--dark-text-muted)" : "var(--light-text)",
  };

  return (
    <section className={styles.habilidadBland}>
      <h2 className={styles.titulo} style={textStyle}>
        {texto.Home.habiBlan.titulo}
      </h2>
      <article className={styles.habilidadBland__arti}>
        <ImgRobot />
        <ul className={styles.habilidadBland__arti__lista} style={textStyle}>
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
