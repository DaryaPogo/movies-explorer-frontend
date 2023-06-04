import "./MoviesCard.css";
import movie2 from "../../images/movie2.png";

const MoviesCard = () => {
  return (
    <>
      <img src={movie2} alt="кино" className="movie__img" />
      <button className="movie__button movie__button-ok" type="button"></button>
      <div className="movie__wrapper">
        <p className="movie__text">33 слова о дизайне</p>
        <div className="movie__time-container">
          <p className="movie__time">1ч 17м</p>
        </div>
      </div>
    </>
  );
};

export default MoviesCard;
