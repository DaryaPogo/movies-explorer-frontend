import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../HeaderMain/HeaderMain.css";
import React from "react";
import "./Header.css";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

const Header = ({ onEditNavigation, isOpen, onClose }) => {

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <button
        className="header__menu"
        type="button"
        onClick={onEditNavigation}
      ></button>
      <Navigation isOpen={isOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
