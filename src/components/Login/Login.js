import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../Register/Register.css";
import { useFormWithValidation } from "../../validation/validation";

const Login = (props) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const onSubmit = (event) => {
    event.preventDefault();
    const data = { email: values.email, password: values.password };
    props.handleLogin(data);
  };

  return (
    <div className="register">
      <Link to="/" className="register__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h2 className="register__wellcome">Рады видеть!</h2>
      <form onSubmit={onSubmit} className="register__form">
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          placeholder="pochta@yandex.ru"
          onChange={handleChange}
          name="email"
          value={values["email"] || ""}
          required
          pattern="^\S+@\S+\.\S+$"
        />
        {errors["email"] && (
          <span className="register__error">{errors["email"]}</span>
        )}
        <label className="register__label">Пароль</label>
        <input
          className="register__input"
          name="password"
          type="password"
          onChange={handleChange}
          value={values["password"] || ""}
          required
        />
        {errors["password"] && (
          <span className="register__error">{errors["password"]}</span>
        )}
        <button type="submit" disabled={!isValid} className="register__button">
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
