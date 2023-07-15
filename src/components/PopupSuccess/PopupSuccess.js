import React from "react";
import "./PopupSuccess.css";

function PopupSuccess(props) {
  const {isOpen, onClose} = props;
  return (
    <section className={`popupsuccess  popup + ${isOpen ? "popup_opened" : ""}`}>
      <button className="popup__close" type="button" onClick={onClose} />
      <h2 className="popup__text">Вы успешно обновили данные!</h2>
    </section>
  );
}

export default PopupSuccess;
