import styles from "../style/LiProyec.module.css";
import React from "react";

function LiProyec({ enlace1, enlace2, img, titulo, texto, children }) {
  return (
    <li className={styles.LiProyec__li}>
      <img src={img} alt={`Imagen de ${titulo}`} className={styles.image} />
      <div className={styles.li__datos}>
        <h4 className={styles.sectionTitle}>Tecnologías</h4>
        <ul className={styles.ul__icon}>
          {Array.isArray(children)
            ? children.map((child, index) => <li key={index}>{child}</li>)
            : children && <li>{children}</li>}
        </ul>
        <h4 className={styles.projectTitle}>{titulo}</h4>
        <p className={styles.description}>{texto}</p>
      </div>
      <div className={styles.li__button}>
        <a href={enlace1} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        {enlace2 && (
          <a href={enlace2} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-globe"></i>
          </a>
        )}
      </div>
    </li>
  );
}

export default LiProyec;
