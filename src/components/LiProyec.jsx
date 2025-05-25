import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/LiProyec.module.css";

function LiProyec({
  enlace1,
  enlace2,
  src,
  srcset,
  sizes,
  titulo,
  texto,
  children,
  theme,
}) {
  return (
    <li
      className={`${styles.card} ${theme ? styles.darkCard : styles.lightCard}`}
    >
      <img
        className={styles.card_image}
        width="600"
        height="310"
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={`Imagen del proyecto ${titulo}`}
        // loading="lazy"
      />

      <div
        className={`${styles.card_icons} ${
          theme ? styles.darkText : styles.lightText
        }`}
      >
        {children}
      </div>

      <details
        name="info"
        className={`${styles.card_details} ${
          theme ? styles.darkDetails : styles.lightDetails
        }`}
      >
        <summary
          className={`${styles.cad_title} ${
            theme ? styles.darkText : styles.lightText
          }`}
        >
          {titulo}
        </summary>
        <p
          className={`${styles.card_text} ${
            theme ? styles.darkText : styles.lightText
          }`}
        >
          {texto}
        </p>
      </details>

      <div className={styles.boton}>
        <a
          href={enlace1}
          target="_blank"
          rel="noopener noreferrer"
          className={theme ? styles.darkLink : styles.lightLink}
          aria-label={`Ver el código de ${titulo} en GitHub`}
          title="Ver el código de este proyecto en GitHub"
        >
          <FontAwesomeIcon icon={["fab", "github"]} aria-hidden="true" />
        </a>
        {enlace2 && (
          <a
            href={enlace2}
            target="_blank"
            rel="noopener noreferrer"
            className={theme ? styles.darkLink : styles.lightLink}
            aria-label={`Ver el proyecto ${titulo} desplegado`}
            title={`Ver el proyecto ${titulo} desplegado`}
          >
            <FontAwesomeIcon icon={["fas", "globe"]} aria-hidden="true" />
          </a>
        )}
      </div>
    </li>
  );
}

export default LiProyec;
