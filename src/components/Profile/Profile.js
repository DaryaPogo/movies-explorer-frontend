import "./Profile.css";
import PopupSuccess from "../PopupSuccess/PopupSuccess";
import { useEffect, useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../validation/validation";

const Profile = (props) => {
  const { onEdit, onSubmit, isOpen, onClose } = props;
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues } =
    useFormWithValidation();
  const [isDisable, setIsDisabled] = useState(isValid);
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

  const handleDisabled = (e) => {
    handleChange(e);
    if (
      e.target.value !== currentUser.name &&
      e.target.value !== currentUser.email
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
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
              onChange={handleDisabled}
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
              onChange={handleDisabled}
              name="email"
              value={values["email"] || ""}
              pattern="^\S+@\S+\.\S+$"
            />
          </label>
          {errors["email"] && (
            <span className="register__error">{errors["email"]}</span>
          )}

          <button
            disabled={!isDisable}
            className="profile__button"
            type="submit"
          >
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
      {isOpen && <PopupSuccess onClose={onClose} isOpen={isOpen} />}
    </>
  );
};

export default Profile;
