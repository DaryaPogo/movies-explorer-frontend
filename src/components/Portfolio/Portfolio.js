import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h4 className="portfolio__subtitle">Портфолио</h4>
      <ul className="portfolio__table">
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            href="https://github.com/DaryaPogo/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            href="https://github.com/DaryaPogo/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            href="https://github.com/DaryaPogo/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение{" "}
            <p className="portfolio__arrow">&#8599;</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
