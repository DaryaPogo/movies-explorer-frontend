import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import React from "react";
import "./Header.css";
import NavTable from "../NavTable/NavTable";
import { useEffect, useState } from "react";

const Header = ({ isLoggedIn, onEditNavigation }) => {
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
    <>
      {isLoggedIn ? (
        <header className="header header_white">
          <Link to="/" className="header__logo">
            <img src={logo} alt="Логотип" />
          </Link>
          <button
            className="header__menu"
            type="button"
            onClick={onEditNavigation}
          ></button>
          {windowSize[0] >= 1280 && <NavTable />}
        </header>
      ) : (
        <header className="header">
          <Link to="/">
            <img src={logo} alt="Логотип" className="header__logo" />
          </Link>
          <div className="header__wrapper">
            <Link to="signup" className="header__signup">
              Регистрация
            </Link>
            <Link to="signin" className="header__signin">
              Войти
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
