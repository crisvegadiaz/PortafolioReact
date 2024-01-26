import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";

function Footer() {
  const { state } = useAppContext();
  return (
    <footer
      className="pie"
      style={
        state.theme
          ? { backgroundColor: colors.blackLight }
          : { backgroundColor: colors.grayLight }
      }
    >
      <p
        style={state.theme ? { color: colors.white } : { color: colors.black }}
      >
        Desarrollado por Cristian Diaz Vega Derechos <br />
        reservados 2023
        <i className="fa-sharp fa-regular fa-copyright"></i>
      </p>
    </footer>
  );
}

export default Footer;
