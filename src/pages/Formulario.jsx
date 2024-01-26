import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/formulario.css";
import Modal from "../components/Modal";
import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";

function Formulario() {
  const { state } = useAppContext();
  const [form, setForm] = useState({});
  const [menModal, setMenModal] = useState(null);

  const openModal = () => {
    document.querySelector(".modal").showModal();
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log((e.target[1].value = ""));

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
        console.log(json);
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";
        e.target[5].value = "";
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
              placeholder="Ingrese su email"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Ingrese un correo electrónico válido ❌"
              required
              onChange={handleInput}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Ingrese su número de teléfono"
              pattern="[0-9]{10}"
              title="Ingrese un número de teléfono válido ❌"
              required
              onChange={handleInput}
            />
          </div>

          <label htmlFor="icon">
            <i className="fa-solid fa-at icon"></i>
          </label>
        </fieldset>

        <textarea
          name="mensaje"
          placeholder="Escriba su mensaje"
          minLength="50"
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

      <img
        src="./src/img/enviar-min.svg"
        alt="Email"
        className="formulario__img"
      />

      <Modal state={state} colors={colors}>
        {menModal
          ? "😉 El Mensaje se ha enviado con éxito"
          : "😰 El mensaje no pudo ser enviado"}
      </Modal>
    </main>
  );
}

export default Formulario;
