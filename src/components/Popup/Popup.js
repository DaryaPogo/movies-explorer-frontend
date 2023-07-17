import React from "react";
import "./Popup.css";

function Popup(props) {
  const { isOpen, onClose, title, isErr } = props;
  return (
    <section
      className={`popupsuccess  popup + ${isOpen ? "popup_opened" : ""} ${
        isErr ? "popup-error" : ""
      }`}
    >
      <button className="popup__close" type="button" onClick={onClose} />
      <h2 className="popup__text">{title}</h2>
    </section>
  );
}

export default Popup;
