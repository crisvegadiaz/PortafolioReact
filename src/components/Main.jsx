import Contacto from "./Contacto";
import HabiBlan from "./HabiBlan";
import HabiTec from "./HabiTec";
import Intro from "./Intro";
import Proyecto from "./Proyecto";

function Main() {
  return (
    <main className="homeMain">
      <Intro />
      <img
        src="./src/img/programador.svg"
        alt="programador"
        className="main__img"
      />
      <HabiTec />
      <HabiBlan />
      <Contacto />
      <Proyecto />
    </main>
  );
}

export default Main;
