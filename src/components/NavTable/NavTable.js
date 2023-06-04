import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavTable.css";

const NavTable = () => {
  return (
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
      <li className="navigation__list">
        <Link to="/profile" className="navigation__account-link">
          Аккаунт
        </Link>
      </li>
    </ul>
  );
};

export default NavTable;

