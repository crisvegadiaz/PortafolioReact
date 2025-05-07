import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppContext } from "../components/AppContext";
import styles from "../styles/Formulario.module.css";
import formData from "../texts/Formulario.json";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

function Formulario() {
  const btnRef = useRef(null);
  const modalRef = useRef(null);
  const {
    state: { theme },
  } = useAppContext();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [modalSuccess, setModalSuccess] = useState(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    btnRef.current.disabled = true;

    fetch("https://formsubmit.co/ajax/6b9bc4d351de1366c2abbbd01daa6598", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(() => {
        e.target.reset();
        setForm({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
        });
        btnRef.current.disabled = false;
        setModalSuccess(true);
        openModal();
      })
      .catch((error) => {
        console.error(error);
        btnRef.current.disabled = false;
        setModalSuccess(false);
        openModal();
      });
  };

  const formStyle = theme
    ? {
        background: "color-mix(in srgb, var(--dark-background) 85%, white 15%)",
        border:
          "2px solid color-mix(in srgb, var(--light-accent) 40%, var(--dark-background) 60%)",
      }
    : {
        background:
          "linear-gradient(color-mix(in srgb, var(--light-accent) 20%, var(--light-background) 80%), var(--light-background))",
        border:
          "2px solid color-mix(in srgb, var(--light-accent) 50%, var(--light-background) 50%)",
      };

  const buttonBackground = theme ? "var(--dark-surface)" : "var(--light-text)";
  const iconColor = theme ? "var(--dark-text-muted)" : "var(--light-text)";

  return (
    <main className={styles.formulario}>
      <form
        onSubmit={handleSubmit}
        className={styles.formulario__form}
        style={formStyle}
      >
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
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
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
      </form>

      <img
        src="/img/enviar-min.svg"
        alt="Email"
        width="643.162"
        height="528"
        className={styles.formulario__img}
      />

      <Modal modalRef={modalRef} theme={theme}>
        {modalSuccess ? formData.modal1 : formData.modal2}
      </Modal>
    </main>
  );
}

export default Formulario;
