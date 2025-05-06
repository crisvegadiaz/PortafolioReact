import { titulo, card } from "../texts/Proyecto.json";
import styles from "../style/ProyecImg.module.css";
import LiProyec from "./LiProyec";

function ProyecImg({ theme }) {
  return (
    <article className={styles.proyectos}>
      <h2
        className={styles.proyectos__titulo}
        style={{
          color: theme ? "var(--dark-text-muted)" : "var(--light-text)",
        }}
      >
        {titulo}
      </h2>
      <ul className={styles.proyectos__list}>
        {card.map((proyecto, index) => (
          <LiProyec
            key={index}
            enlace1={proyecto.enlace1}
            enlace2={proyecto.enlace2}
            img={proyecto.img}
            titulo={proyecto.titulo}
            texto={proyecto.texto}
            theme={theme}
          >
            {proyecto.icons.map((icon, i) => (
              <i
                key={i}
                className={`${
                  icon.startsWith("fa-solid") ? "fa-solid" : "fa-brands"
                } ${icon}`}
              ></i>
            ))}
          </LiProyec>
        ))}
      </ul>
    </article>
  );
}

export default ProyecImg;
