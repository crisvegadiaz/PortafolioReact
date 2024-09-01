import { useAppContext } from "../components/AppContext";
import styles from "../style/Intro.module.css";
import { colors } from "../js/themeDark.js";
import texto from "../js/textoPagina.js";
import cp from "../img/cp.svg";

function Intro() {
  const { state } = useAppContext();
  return (
    <section className={styles.intro}>
      <img
        src={cp}
        alt="cp"
        width="1139.171"
        height="654.543"
        className={styles.intro__img}
      />
      <p
        className={styles.intro__txt}
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        {texto.Home.intro}
      </p>
    </section>
  );
}

export default Intro;
