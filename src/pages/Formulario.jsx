import { useAppContext } from "../components/AppContext";
import { colors } from "../js/themeDark.js";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import enviarMin from "../img/enviar-min.svg";
import Modal from "../components/Modal";
import "../style/formulario.css";
import texto from "../js/textoPagina.js";

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
              placeholder={texto.Formulario.inputNombre}
              pattern="[A-Za-zÁ-Úá-ú]+(\s[A-Za-zÁ-Úá-ú]+)?"
              title={texto.Formulario.inputErroNombre}
              required
              onChange={handleInput}
              style={state}
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
            />
          </div>

          <label>
            <i className="fa-solid fa-at icon"></i>
          </label>
        </fieldset>

        <textarea
          name="mensaje"
          id="mensaje"
          placeholder={texto.Formulario.inputMensaje}
          minLength="10"
          required
          onChange={handleInput}
        ></textarea>

        <fieldset className="formulario__form__butt">
          <button>
            <Link to="/">
              <i className="fa-solid fa-arrow-left"></i>{" "}
              {texto.Formulario.btnInicio}
            </Link>
          </button>
          <button type="submit">
            <i className="fa-solid fa-paper-plane"></i>{" "}
            {texto.Formulario.btnEnviar}
          </button>
        </fieldset>
      </form>

      <img
        src={enviarMin}
        alt="Email"
        width="643.162"
        height="528"
        className="formulario__img"
      />

      <Modal modalRef={modalRef} state={state} colors={colors}>
        {menModal ? texto.Formulario.modal1 : texto.Formulario.modal2}
      </Modal>
    </main>
  );
}

export default Formulario;
