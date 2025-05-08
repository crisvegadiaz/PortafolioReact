import { useAppContext } from "../components/AppContext";
import styles from "../styles/Intro.module.css";
import { intro } from "../texts/Home.json";

function Intro() {
  const { state } = useAppContext();
  return (
    <section className={styles.intro}>
      <img
        src="/img/cp.svg"
        alt="cp"
        width="1139.171"
        height="654.543"
        fetchpriority="high"
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
        {intro}
      </p>
    </section>
  );
}

export default Intro;
