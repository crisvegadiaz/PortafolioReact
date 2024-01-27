import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import enviarMin from "../img/enviar-min.svg";
import Modal from "../components/Modal";
import "../style/formulario.css";

function Formulario() {
  const modalRef = useRef(null);
  const { state } = useAppContext();
  const [form, setForm] = useState({});
  const [menModal, setMenModal] = useState(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

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
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        e.target[4].value = "";
        setMenModal(true);
        openModal();
      })

      .catch((error) => {
        console.error(error);
        setMenModal(false);
      });
  };

  return (
    <main className="formulario">
      <form
        onSubmit={handleSumbit}
        className="formulario__form"
        style={
          state.theme
            ? {
                background: `linear-gradient(${colors.blueLight}, ${colors.gray} )`,
                border: `2px solid ${colors.gray}`,
              }
            : {
                background: `linear-gradient(${colors.blueLight}, ${colors.graylight} )`,
                border: `2px solid ${colors.graylight}`,
              }
        }
      >
        <fieldset className="formulario__form__input">
          <div>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Ingrese su nombre"
              pattern="[A-Za-zÁ-Úá-ú]+(\s[A-Za-zÁ-Úá-ú]+)?"
              title="Ingrese un nombre válido ❌"
              required
              onChange={handleInput}
              style={state}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Ingrese su email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Ingrese un correo electrónico válido ❌"
              required
              onChange={handleInput}
            />
            <input
              type="tel"
              name="telefono"
              id="telefono"
              placeholder="Ingrese su número de teléfono"
              pattern="[0-9]{10}"
              title="Ingrese un número de teléfono válido ❌"
              required
              onChange={handleInput}
            />
          </div>

          <label>
            <i className="fa-solid fa-at icon"></i>
          </label>
        </fieldset>

        <textarea
          name="mensaje"
          id="mensaje"
          placeholder="Escriba su mensaje"
          minLength="10"
          required
          onChange={handleInput}
        ></textarea>

        <fieldset className="formulario__form__butt">
          <button>
            <Link to="/">
              <i className="fa-solid fa-arrow-left"></i> Inicio
            </Link>
          </button>
          <button type="submit">
            <i className="fa-solid fa-paper-plane"></i> Enviar
          </button>
        </fieldset>
      </form>

      <img src={enviarMin} alt="Email" className="formulario__img" />

      <Modal modalRef={modalRef} state={state} colors={colors}>
        {menModal
          ? "😉 El Mensaje se ha enviado con éxito"
          : "😰 El mensaje no pudo ser enviado"}
      </Modal>
    </main>
  );
}

export default Formulario;
