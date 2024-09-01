import styles from "../style/Modal.module.css";

function Modal({ modalRef, children, state, colors }) {
  const closeModal = () => {
    modalRef.current.close();
  };

  const backgroundColor = state.theme ? colors.black : colors.grayLight;
  const textColor = state.theme ? colors.white : colors.gray;

  return (
    <dialog
      ref={modalRef}
      className={styles.modal} 
      style={{ backgroundColor }}
      aria-labelledby="modal-title"
    >
      <h2 id="modal-title" style={{ color: textColor }}>
        {children}
      </h2>
      <button onClick={closeModal} aria-label="Cerrar modal">
        <i className="fa-solid fa-arrow-left"></i> Cerrar
      </button>
    </dialog>
  );
}

export default Modal;
