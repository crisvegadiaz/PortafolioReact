import styles from "../style/LiProyec.module.css";

function LiProyec({ enlace1, enlace2, img, titulo, texto, children, theme }) {
  return (
    <li
      className={`${styles.card} ${theme ? styles.darkCard : styles.lightCard}`}
    >
      <img className={styles.card_image} src={img} alt="imagen del proyecto" />

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
        >
          <i className="fa-brands fa-github"></i>
        </a>
        {enlace2 && (
          <a
            href={enlace2}
            target="_blank"
            rel="noopener noreferrer"
            className={theme ? styles.darkLink : styles.lightLink}
          >
            <i className="fa-solid fa-globe"></i>
          </a>
        )}
      </div>
    </li>
  );
}

export default LiProyec;
