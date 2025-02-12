import styles from "../style/Modal.module.css";

const Modal = ({ modalRef, children, theme }) => {
  const closeModal = () => modalRef.current.close();

  const modalStyles = {
    backgroundColor: theme ? "var(--dark-surface)" : "var(--light-background)",
  };

  const titleStyles = {
    color: theme ? "var(--dark-text-muted)" : "var(--light-text)",
  };

  return (
    <dialog
      ref={modalRef}
      className={styles.modal}
      style={modalStyles}
      aria-labelledby="modal-title"
    >
      <h2 id="modal-title" style={titleStyles}>
        {children}
      </h2>
      <button onClick={closeModal} aria-label="Cerrar modal">
        <i className="fa-solid fa-arrow-left"></i> Cerrar
      </button>
    </dialog>
  );
};

export default Modal;
