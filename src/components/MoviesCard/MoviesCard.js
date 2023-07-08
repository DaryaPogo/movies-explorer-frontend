import "./MoviesCard.css";
import { movieAdress } from "../../utils/utils";
import { useMemo, useState } from "react";

const MoviesCard = ({ movieCard, onMovieLike, onDelete }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [adress, setAdress] = useState("");

  const currentPath = window.location.pathname;

  useMemo(() => {
    if (currentPath === "/saved-movies") {
      setIsSaved(true);
      setAdress(movieCard.image);
    } else {
      setIsSaved(false);
      setAdress(movieAdress + movieCard.image.url);
    }
  }, [currentPath]);

  function handleLikeClick(event) {
    event.target.classList.remove("movie__button-save");
    event.target.classList.add("movie__button-ok");
    setIsSaved(true);
    onMovieLike(movieCard);
  }

  function handleDeleteSavedMovie(event) {
    event.target.classList.remove("movie__button-ok");
    event.target.classList.add("movie__button-save");
    setIsSaved(false);
    onDelete(movieCard);
  }

  const getTimeFromMins = (min) => {
    let hours = Math.trunc(min / 60);
    let minutes = min % 60;
    return hours + "ч. " + minutes + "м.";
  };

  return (
    <li className="movie__list">
      <a href={movieCard.trailerLink}>
        <img src={adress} alt="кино" className="movie__img" />
      </a>
      <button
        className={`movie__button ${
          currentPath === "/saved-movies"
            ? "movie__button-delete"
            : "movie__button-save"
        }`}
        type="button"
        onClick={isSaved ? handleDeleteSavedMovie : handleLikeClick}
      ></button>
      <div className="movie__wrapper">
        <p className="movie__text">{movieCard.nameRU}</p>
        <div className="movie__time-container">
          <p className="movie__time">{getTimeFromMins(movieCard.duration)}</p>
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
