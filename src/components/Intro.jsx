import { useAppContext } from "../components/AppContext";
import styles from "../style/Intro.module.css";
import texto from "../js/textoPagina.js";

function Intro() {
  const { state } = useAppContext();
  return (
    <section className={styles.intro}>
      <img
        src="/img/cp.svg"
        alt="cp"
        width="1139.171"
        height="654.543"
        className={styles.intro__img}
      />
      <p
        className={styles.intro__txt}
        style={
          state.theme
            ? { color: "var(--dark-text-muted)" }
            : { color: "var(--dark-text)" }
        }
      >
        {texto.Home.intro}
      </p>
    </section>
  );
}

export default Intro;
