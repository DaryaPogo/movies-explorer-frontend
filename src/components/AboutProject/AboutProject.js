import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__title">О проекте</h2>
      <div className="aboutProject__wrapper">
        <div className="aboutProject__wrapper-column">
          <h3 className="aboutProject__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutProject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="aboutProject__wrapper-column">
          <h3 className="aboutProject__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutProject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutProject__time">
        <div className="aboutProject__time-green">1 неделя</div>
        <div className="aboutProject__time-grey">4 недели</div>
        <p className="aboutProject__stack">Back-end</p>
        <p className="aboutProject__stack">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
