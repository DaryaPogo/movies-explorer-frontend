import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../Register/Register.css";

const Login = () => {
  return (
    <div className="register">
      <Link to="/" className="register__logo">
        <img src={logo} alt="Логотип"  />
      </Link>
      <h2 className="register__wellcome">Рады видеть!</h2>
      <form className="register__form">
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          id="email"
          name="email"
          type="email"
        />
        <label className="register__label">Пароль</label>
        <input
          className="register__input"
          id="password"
          name="password"
          type="password"
        />
        <button type="submit" className="register__button">
          Войти
        </button>
      </form>
      <p className="register__footer">
        Ещё не зарегистрированы?
        <Link to="/signup" className="register__login-link">
          Регистрация
        </Link>
      </p>
    </div>
  );
};

export default Login;
