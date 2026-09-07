import "../CSS/SuccessModal.css";

const SuccessModal = ({ title, message, buttonLabel, onClose }) => {
  return (
    <div
      className="success-modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <section
        className="success-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="success-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="success-modal-check" aria-hidden="true">
          &#10003;
        </span>
        <h2 id="success-modal-title">{title}</h2>
        <p>{message}</p>
        <button type="button" onClick={onClose}>
          {buttonLabel}
        </button>
      </section>
    </div>
  );
};

export default SuccessModal;
