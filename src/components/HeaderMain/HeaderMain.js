import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./HeaderMain.css";
import "../Header/Header.css";
import Navigation from "../Navigation/Navigation";

const HeaderMain = ({ onEditNavigation, isOpen, onClose, isLoggedIn }) => {

  return (
    <header className="header-main">
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      {isLoggedIn ? (
        <>
          <button
            className="header__menu"
            type="button"
            onClick={onEditNavigation}
          ></button>
          <Navigation isMain={true} isOpen={isOpen} onClose={onClose} />
        </>
      ) : (
        <div className="header__wrapper">
          <Link to="signup" className="header__signup ">
            Регистрация
          </Link>
          <Link to="signin" className="header__signin">
            Войти
          </Link>
        </div>
      )}
    </header>
  );
};

export default HeaderMain;
