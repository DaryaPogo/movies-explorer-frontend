import React from "react";
import "./Navigation.css";
import NavTable from "../NavTable/NavTable"

const Navigation = ({ isOpen, onClose }) => {
  return (
    <section className={`navigation + ${isOpen ? "navigation_opened" : ""}`}>
      <div className="navigation__container">
        <button
          className="navigation__close"
          type="button"
          onClick={onClose}
        ></button>
        <NavTable />
      </div>
    </section>
  );
};

export default Navigation;
