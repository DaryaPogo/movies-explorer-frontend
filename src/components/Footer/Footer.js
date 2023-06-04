import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__line">
        <div className="footer__wrapper">
          <p className="footer__black">Яндекс.Практикум</p>
          <p className="footer__black">Github</p>
        </div>
        <p className="footer__black">&#169; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
