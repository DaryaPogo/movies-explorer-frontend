import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__line">
        <ul className="footer__wrapper">
          <li className="footer__black">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__black">
            <a
              href="https://github.com/"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <p className="footer__year">&#169; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
