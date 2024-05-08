import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import cp from "../img/cp.svg";
import texto from "../js/textoPagina.js";


function Intro() {
  console.log(texto)
  const { state } = useAppContext();
  return (
    <section className="intro">
      <img
        src={cp}
        alt="cp"
        width="1139.171"
        height="654.543"
        className="intro__img"
      />
      <p
        className="intro__txt"
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        {texto.Home.intro}
      </p>
    </section>
  );
}

export default Intro;
