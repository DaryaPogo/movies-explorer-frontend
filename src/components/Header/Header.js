import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import React from "react";
import "./Header.css";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

const Header = ({ onEditNavigation, isOpen, onClose }) => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
