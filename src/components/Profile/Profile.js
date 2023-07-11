import "./Profile.css";
import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../validation/validation";

const Profile = (props) => {
  const { onEdit, onSubmit } = props;
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues } =
    useFormWithValidation();

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser.name, currentUser.email, setValues]);

  const handelSubmitProfile = (event) => {
    event.preventDefault();
    const data = { name: values.name, email: values.email };
    onEdit(data);
  };

  return (
    <>
      <section className="profile">
        <h2 className="profile__wellcome">Привет, {currentUser.name}!</h2>
        <form className="profile__form" onSubmit={handelSubmitProfile}>
          <label className="profile__label">
            Имя
            <input
              type="text"
              className="profile__input"
              onChange={handleChange}
              name="name"
              value={values["name"] || ""}
            />
          </label>
          {errors["name"] && (
            <span className="register__error">{errors["name"]}</span>
          )}
          <label className="profile__label">
            E-mail
            <input
              className="profile__input"
              onChange={handleChange}
              name="email"
              value={values["email"] || ""}
              pattern="^\S+@\S+\.\S+$"
            />
          </label>
          {errors["email"] && (
            <span className="register__error">{errors["email"]}</span>
          )}

          <button disabled={!isValid} className="profile__button" type="submit">
            Редактировать
          </button>
        </form>
        <button
          to="/signout"
          type="button"
          onClick={onSubmit}
          className="profile__signout"
        >
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
};

export default Profile;
