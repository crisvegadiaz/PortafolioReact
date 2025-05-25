import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function FormButtons({ formData, btnRef, buttonBackground, styles }) {
  return (
    <fieldset className={styles.formulario__form__butt}>
      <Link
        className={styles.form__butt}
        to="/"
        style={{ backgroundColor: buttonBackground }}
        title="Volver a la página de inicio"
      >
        <FontAwesomeIcon icon="fa-arrow-left" /> {formData.btnInicio}
      </Link>
      <button
        className={styles.form__butt}
        type="submit"
        ref={btnRef}
        style={{ backgroundColor: buttonBackground }}
        title="Enviar el formulario"
      >
        <FontAwesomeIcon icon="fa-paper-plane" /> {formData.btnEnviar}
      </button>
    </fieldset>
  );
}

export default FormButtons;
