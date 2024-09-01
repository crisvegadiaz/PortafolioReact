import { useAppContext } from "../components/AppContext";
import styles from '../style/Footer.module.css';
import { colors } from "../js/themeDark.js";

function Footer() {
  const { state } = useAppContext();

  const footerStyle = {
    backgroundColor: state.theme ? colors.blackLight : colors.grayLight,
    color: state.theme ? colors.white : colors.black,
  };

  return (
    <footer className={styles.pie} style={footerStyle}>
      <p>
        Desarrollado por Cristian Diaz Vega. Derechos reservados 2023
        <i className="fa-sharp fa-regular fa-copyright"></i>
      </p>
    </footer>
  );
}

export default Footer;
