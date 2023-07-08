import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Register = () => {
  return (
    <div className="register">
      <Link to="/" className="register__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h2 className="register__wellcome">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input
          className="register__input"
          name="name"
          type="name"
          placeholder="Имя"
          required
        />
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          name="email"
          type="email"
          placeholder="pochta@yandex.ru"
          required
        />
        <label className="register__label">Пароль</label>
        <input
          className="register__input register__label_red"
          name="password"
          type="password"
          required
        />
        <span className="register__error">Что-то пошло не так...</span>
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
      </form>
      <p className="register__footer">
        Уже зарегистрированы?
        <Link to="/signin" className="register__login-link">
          Войти
        </Link>
      </p>
    </div>
  );
};

export default Register;
