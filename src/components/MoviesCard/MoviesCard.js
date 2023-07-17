import "./MoviesCard.css";
import { movieAdress } from "../../utils/utils";
import { useMemo, useState } from "react";

const MoviesCard = ({ movieCard, onMovieLike, onDelete, isSaved }) => {
  const [adress, setAdress] = useState("");

  const currentPath = window.location.pathname;

  useMemo(() => {
    if (currentPath === "/saved-movies") {
      setAdress(movieCard.image);
    } else {
      setAdress(movieAdress + movieCard.image.url);
    }
  }, [currentPath, movieCard]);

  function handleLikeClick(event) {
    event.target.classList.remove("movie__button-save");
    onMovieLike(movieCard);
    event.target.classList.add("movie__button-ok");
  }

  function handleDeleteSavedMovie(event) {
    event.target.classList.remove("movie__button-ok");
    onDelete(movieCard);
    event.target.classList.add("movie__button-save");
  }

  const getTimeFromMins = (min) => {
    let hours = Math.trunc(min / 60);
    let minutes = min % 60;
    return hours + "ч. " + minutes + "м.";
  };

  let classNameBtn;
  if (currentPath === "/saved-movies") {
    classNameBtn = "movie__button-delete";
  } else {
    if (isSaved) {
      classNameBtn = "movie__button-ok";
    } else {
      classNameBtn = "movie__button-save";
    }
  }

  return (
    <li className="movie__list">
      <a href={movieCard.trailerLink} target="_blank" rel="noreferrer">
        <img src={adress} alt="кино" className="movie__img" />
      </a>
      <button
        className={`movie__button ${classNameBtn}`}
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
