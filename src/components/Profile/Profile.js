import "./Profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <section className="profile">
        <h2 className="profile__wellcome">Привет, Виталий!</h2>
        <form className="profile__form">
          <label className="profile__label">
            Имя
            <input type="text" className="profile__input" />
          </label>
          <label className="profile__label">
            E-mail
            <input type="email" className="profile__input" />
          </label>
        </form>
        <button className="profile__button">Редактировать</button>
        <Link to="/signout" className="profile__signout">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
};

export default Profile;
