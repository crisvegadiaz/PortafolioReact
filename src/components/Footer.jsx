import { faCopyright } from "@fortawesome/free-regular-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../components/AppContext";
import styles from "../styles/Footer.module.css";
import { footer } from "../texts/Home.json";

function Footer() {
  const { state } = useAppContext();

  const footerStyle = {
    backgroundColor: state.theme
      ? "var(--dark-surface)"
      : "var(--light-background)",
    color: state.theme ? "var(--dark-text-muted)" : "var(--light-text)",
  };

  return (
    <footer className={styles.pie} style={footerStyle}>
      <p>
        {footer.desarrollo}
        <br />
        {footer.copyright}
        <FontAwesomeIcon icon={faCopyright} />
      </p>
    </footer>
  );
}

export default Footer;
