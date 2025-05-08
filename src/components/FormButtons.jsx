import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function FormButtons({ formData, btnRef, buttonBackground, styles }) {
  return (
    <fieldset className={styles.formulario__form__butt}>
      <button type="button" style={{ backgroundColor: buttonBackground }}>
        <Link to="/">
          <FontAwesomeIcon icon="fa-arrow-left" /> {formData.btnInicio}
        </Link>
      </button>
      <button
        type="submit"
        ref={btnRef}
        style={{ backgroundColor: buttonBackground }}
      >
        <FontAwesomeIcon icon="fa-paper-plane" /> {formData.btnEnviar}
      </button>
    </fieldset>
  );
}

export default FormButtons;
