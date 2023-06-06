import React from "react";
import "./Navigation.css";
import { NavLink, Link } from "react-router-dom";

const Navigation = ({ isOpen, onClose }) => {
  return (
    <section className={`navigation ${isOpen ? "navigation_opened" : ""}`}>
      <div className="navigation__container">
        <button
          className="navigation__close"
          type="button"
          onClick={onClose}
        ></button>
        <ul className="navigation__table">
          <li className="navigation__list">
            <NavLink to="/" className="navigation__link">
              Главная
            </NavLink>
          </li>
          <li className="navigation__list">
            <NavLink to="/movies" className="navigation__link">
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__list">
            <NavLink to="/saved-movies" className="navigation__link">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link to="/profile" className="navigation__account-link">
          Аккаунт
        </Link>
      </div>
    </section>
  );
};

export default Navigation;
