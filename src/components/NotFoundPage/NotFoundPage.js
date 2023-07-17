import { Link, useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__subtitle">Страница не найдена</p>
      <Link onClick={() => navigate(-1)} className="register__login-link">Назад</Link>
    </div>
  );
};

export default NotFoundPage;
