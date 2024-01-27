import "../style/modal.css";

function Modal({ modalRef, children, state, colors }) {
  const closeModal = () => {
    modalRef.current.close();
  };

  return (
    <dialog
      ref={modalRef}
      className="modal"
      style={
        state.theme
          ? { backgroundColor: `${colors.black}` }
          : { backgroundColor: `${colors.grayLight}` }
      }
    >
      <h2
        style={
          state.theme
            ? { color: `${colors.white}` }
            : {
                color: `${colors.gray}`,
              }
        }
      >
        {children}
      </h2>
      <button onClick={closeModal}>
        <i className="fa-solid fa-arrow-left"></i> Cerrar
      </button>
    </dialog>
  );
}

export default Modal;
