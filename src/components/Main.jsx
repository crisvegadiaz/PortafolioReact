import programador from "../img/programador.svg";
import Contacto from "./Contacto";
import HabiBlan from "./HabiBlan";
import Proyecto from "./Proyecto";
import HabiTec from "./HabiTec";
import Intro from "./Intro";

function Main() {
  return (
    <main className="homeMain">
      <Intro />
      <img
        src={programador}
        width="973.461"
        height="587.025"
        alt="Ilustración de un programador trabajando"
        className="main__img"
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

