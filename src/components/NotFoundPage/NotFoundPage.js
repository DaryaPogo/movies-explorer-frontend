import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__subtitle">Страница не найдена</p>
      <Link to="/" className="register__login-link">Назад</Link>
    </div>
  );
};

export default NotFoundPage;
