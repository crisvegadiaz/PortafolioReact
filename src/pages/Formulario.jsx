import { useAppContext } from "../components/AppContext";
import styles from "../style/Formulario.module.css";
import texto from "../js/textoPagina.js";
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
      .then((json) => {
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
        background:
          "linear-gradient(var(--light-accent), var(--dark-background))",
        border: "2px solid var(--light-surface)",
      }
    : {
        background:
          "linear-gradient(var(--light-accent), var(--light-background))",
        border: "2px solid var(--light-text)",
      };

  return (
    <main className={styles.formulario}>
      <form
        onSubmit={handleSubmit}
        className={styles.formulario__form}
        style={formStyle}
      >
        <i className={`fa-solid fa-at ${styles.icon}`}></i>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder={texto.Formulario.inputNombre}
          pattern="[A-Za-zÁ-Úá-ú]+(\s[A-Za-zÁ-Úá-ú]+)?"
          title={texto.Formulario.inputErroNombre}
          required
          onChange={handleInput}
          value={form.nombre}
          aria-label="Nombre"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder={texto.Formulario.inputEmail}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title={texto.Formulario.inputErrorEmail}
          required
          onChange={handleInput}
          value={form.email}
          aria-label="Email"
        />
        <input
          type="tel"
          name="telefono"
          id="telefono"
          placeholder={texto.Formulario.inputTelefono}
          pattern="[0-9]{10}"
          title={texto.Formulario.inputErrorTelefono}
          required
          onChange={handleInput}
          value={form.telefono}
          aria-label="Teléfono"
        />
        <textarea
          name="mensaje"
          id="mensaje"
          placeholder={texto.Formulario.inputMensaje}
          minLength="10"
          required
          onChange={handleInput}
          value={form.mensaje}
          aria-label="Mensaje"
          className={styles.textarea}
        ></textarea>

        <fieldset className={styles.formulario__form__butt}>
          <button type="button">
            <Link to="/">
              <i className="fa-solid fa-arrow-left"></i>{" "}
              {texto.Formulario.btnInicio}
            </Link>
          </button>
          <button type="submit" ref={btnRef}>
            <i className="fa-solid fa-paper-plane"></i>{" "}
            {texto.Formulario.btnEnviar}
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
        {modalSuccess ? texto.Formulario.modal1 : texto.Formulario.modal2}
      </Modal>
    </main>
  );
}

export default Formulario;
