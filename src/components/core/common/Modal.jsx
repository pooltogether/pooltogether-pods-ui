/**
 * @name Modal
 * @param {Object} props
 */
export const Modal = ({ children, className, hideModal }) => {
  return (
    <div className={`modal ${className}`}>
      <div onClick={hideModal} className={"modalBackground"} />
      {children}
    </div>
  );
};

Modal.defaultProps = {
  className: "",
};

export default Modal;
