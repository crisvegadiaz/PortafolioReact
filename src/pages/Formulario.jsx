import { useAppContext } from "../components/AppContext";
import styles from "../styles/Formulario.module.css";
import formData from "../texts/Formulario.json";
import { useRef, useState } from "react";
import Modal from "../components/Modal";
import FormInputs from "../components/FormInputs";
import FormButtons from "../components/FormButtons";
import FormImage from "../components/FormImage";

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
        <FormInputs
          formData={formData}
          form={form}
          handleInput={handleInput}
          styles={styles}
          iconColor={iconColor}
        />
        <FormButtons
          formData={formData}
          btnRef={btnRef}
          buttonBackground={buttonBackground}
          styles={styles}
        />
      </form>

      <FormImage styles={styles} />

      <Modal modalRef={modalRef} theme={theme}>
        {modalSuccess ? formData.modal1 : formData.modal2}
      </Modal>
    </main>
  );
}

export default Formulario;
