import styles from "../style/Main.module.css";
import Contacto from "./Contacto";
import HabiBlan from "./HabiBlan";
import Proyecto from "./Proyecto";
import HabiTec from "./HabiTec";
import Intro from "./Intro";

function Main() {
  return (
    <main className={styles.homeMain}>
      <Intro />
      <img
        src="img/programador.svg"
        width="973.461"
        height="587.025"
        alt="Ilustración de un programador trabajando"
        className={styles.main__img}
        loading="lazy"
      />
      <HabiTec />
      <HabiBlan />
      <Contacto />
      <Proyecto />
    </main>
  );
}

export default Main;
