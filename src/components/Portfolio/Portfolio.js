import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h4 className="portfolio__subtitle">Портфолио</h4>
      <ul className="portfolio__table">
        <li><Link to="/" className="portfolio__link">
          Статичный сайт <p className="portfolio__arrow">&#8599;</p>
        </Link></li>
        <li><Link to="/" className="portfolio__link">
          Адаптивный сайт <p className="portfolio__arrow">&#8599;</p>
        </Link></li>
        <li><Link to="/" className="portfolio__link">
          Одностраничное приложение <p className="portfolio__arrow">&#8599;</p>
        </Link></li>
      </ul>
    </section>
  );
};

export default Portfolio;
