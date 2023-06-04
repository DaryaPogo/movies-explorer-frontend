import photo from "../../images/student.png";
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <h2 className="aboutProject__title">Студент</h2>
      <div className="aboutMe__wrapper">
        <img
          src={photo}
          alt="Фото студента"
          className="aboutMe__image"
        />
        <div>
          <h3 className="aboutMe__subtitle">Виталий</h3>
          <p className="aboutMe__text">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutMe__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб&#8209;разработке, начал
            заниматься фриланс&#8209;заказами и ушёл с постоянной работы.
          </p>
          <p className="aboutMe__link">Github</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;