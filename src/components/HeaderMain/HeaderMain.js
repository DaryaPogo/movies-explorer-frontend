import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "./HeaderMain.css";
import "../Header/Header.css";

const HeaderMain = () => {
  return (
    <header className="header-main">
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
  );
};

export default HeaderMain;
