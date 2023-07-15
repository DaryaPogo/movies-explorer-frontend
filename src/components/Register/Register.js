import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import {
  useFormWithValidation
} from "../../validation/validation";

const Register = (props) => {

const {values, handleChange, errors, isValid} = useFormWithValidation();

  const onSubmit = (event) => {
    event.preventDefault();
    props.handleRegister(values);
    const data = {email: values.email, password: values.password};
    props.handleLogin(data);
  };

  return (
    <div className="register">
      <Link to="/" className="register__logo">
        <img src={logo} alt="Логотип" />
      </Link>
      <h2 className="register__wellcome">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={onSubmit}>
        <label className="register__label">Имя</label>
        <input
          className="register__input"
          name="name"
          onChange={handleChange}
          value={values['name'] || ''}
          required
          pattern="(?:\s|^)[А-ЯЁа-яёA-Za-z\-]+(?:\s|$)"
          placeholder="Имя"
        />
        {errors['name'] && (
          <span className="register__error">{errors['name']}</span>
        )}
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          placeholder="pochta@yandex.ru"
          name="email"
          onChange={handleChange}
          value={values['email'] || ''}
          required
          pattern="^\S+@\S+\.\S+$"
        />
        {errors['email'] && (
          <span className="register__error">{errors['email']}</span>
        )}
        <label className="register__label">Пароль</label>
        <input
          type="password"
          className="register__input"
          name="password"
          onChange={handleChange}
          value={values['password'] || ''}
          required
        />
        {errors['password'] && (
          <span className="register__error">{errors['password']}</span>
        )}
        <button type="submit" disabled={!isValid} className="register__button"> 
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
