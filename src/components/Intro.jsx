import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import cp from "../img/cp.svg";

function Intro() {
  const { state } = useAppContext();
  return (
    <section className="intro">
      <img src={cp} alt="cp" className="intro__img" />
      <p
        className="intro__txt"
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        👋¡Hola! Soy Cristian Diaz Vega, Desarrollador Junior de Front-End y
        Técnico Superior en Soporte de Infraestructura de Tecnología de
        Información. Actualmente, estoy cursando una licenciatura en Tecnología
        de la Educación. Recientemente, finalicé la clase 3 de Oracle Next
        Education - ONE. ¡Listo para construir el futuro con cada línea de
        código!
      </p>
    </section>
  );
}

export default Intro;
