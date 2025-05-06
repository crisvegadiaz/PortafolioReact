import { useAppContext } from "../components/AppContext";
import styles from "../style/HabiBlan.module.css";
import { habiBlan } from "../texts/Home.json"
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
        {habiBlan.titulo}
      </h2>
      <article className={styles.habilidadBland__arti}>
        <ImgRobot />
        <ul className={styles.habilidadBland__arti__lista} style={textStyle}>
          {Object.keys(habiBlan)
            .filter((key) => key.startsWith("tema"))
            .map((key, index) => (
              <li key={index}>
                <details name="info">
                  <summary>{habiBlan[key]}</summary>
                  <p>{habiBlan[`parrafo${index + 1}`]}</p>
                </details>
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
}

export default HabiBlan;
