import { useAppContext } from "../components/AppContext";
import styles from "../style/Footer.module.css";
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
        {footer}
        <i className="fa-sharp fa-regular fa-copyright"></i>
      </p>
    </footer>
  );
}

export default Footer;
