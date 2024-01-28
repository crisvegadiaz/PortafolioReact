import Contacto from "./Contacto";
import HabiBlan from "./HabiBlan";
import HabiTec from "./HabiTec";
import Intro from "./Intro";
import Proyecto from "./Proyecto";
import programador from "../img/programador.svg";

function Main() {
  return (
    <main className="homeMain">
      <Intro />
      <img
        src={programador}
        width="973.461"
        height="587.025"
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
