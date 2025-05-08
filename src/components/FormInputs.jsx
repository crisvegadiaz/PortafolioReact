import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FormInputs({ formData, form, handleInput, styles, iconColor }) {
  return (
    <>
      <FontAwesomeIcon
        icon="fa-at"
        className={styles.icon}
        style={{ color: iconColor }}
      />
      <input
        type="text"
        name="nombre"
        id="nombre"
        placeholder={formData.inputNombre}
        pattern="[A-Za-zÁ-Úá-ú]+(\s[A-Za-zÁ-Úá-ú]+)?"
        title={formData.inputErroNombre}
        required
        onChange={handleInput}
        value={form.nombre}
        aria-label="Nombre"
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder={formData.inputEmail}
        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
        title={formData.inputErrorEmail}
        required
        onChange={handleInput}
        value={form.email}
        aria-label="Email"
      />
      <input
        type="tel"
        name="telefono"
        id="telefono"
        placeholder={formData.inputTelefono}
        pattern="[0-9]{10}"
        title={formData.inputErrorTelefono}
        required
        onChange={handleInput}
        value={form.telefono}
        aria-label="Teléfono"
      />
      <textarea
        name="mensaje"
        id="mensaje"
        placeholder={formData.inputMensaje}
        minLength="10"
        required
        onChange={handleInput}
        value={form.mensaje}
        aria-label="Mensaje"
        className={styles.textarea}
      ></textarea>
    </>
  );
}

export default FormInputs;
