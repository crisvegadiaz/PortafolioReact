import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { titulo, card } from "../texts/Proyecto.json";
import styles from "../styles/ProyecImg.module.css";
import LiProyec from "./LiProyec";

function ProyecImg({ theme }) {
  const simpleBrandIcons = new Set([
    "node-js", "react", "css3-alt", "github",
    "html5", "js", "bootstrap", "linux", "java"
  ]);

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
            {proyecto.icons.map((icon, i) => {
              let prefix = 'fas';
              let iconName = icon;

              if (simpleBrandIcons.has(icon)) {
                prefix = 'fab';
              } else if (icon.startsWith("fa-")) {
                const parts = icon.split(' ');
                if (parts[0] === "fa-brands") {
                  prefix = 'fab';
                  iconName = parts[1];
                } else if (parts[0] === "fa-solid") {
                  iconName = parts[1];
                } else {
                  iconName = parts[0];
                }
              }

              return <FontAwesomeIcon key={i} icon={[prefix, iconName]} />;
            })}
          </LiProyec>
        ))}
      </ul>
    </article>
  );
}

export default ProyecImg;