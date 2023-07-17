import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import React, { useState, useEffect, useMemo } from "react";
import Preloader from "../Preloader/Preloader";

export const MoviesCardList = (props) => {
  const { movieCards, onMovieLike, onDelete, isLoading, error, savedMovies, isSearch } =
    props;

  const [page, setPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const handleWidthResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidthResize);

    return () => {
      window.removeEventListener("resize", handleWidthResize);
    };
  }, []);

  const moviesToRender = useMemo(() => {
    const countToRender = windowWidth < 768 ? 5 : windowWidth < 1280 ? 8 : 12;
    return movieCards.slice(0, countToRender * page);
  }, [movieCards, page, windowWidth]);

  const handleOnClick = () => {
    setPage((page) => page + 1);
  };

  const handleSave = (moviesToRender) => {
    if (currentPath === "/saved-movies") {
      return true;
    } else {
      if (savedMovies.find((m) => m.movieId === moviesToRender.id)) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <section className="movie">
      {error && (
        <span className="movie__non">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </span>
      )}
      {isLoading && <Preloader />}
      {moviesToRender.length === 0 && isSearch && (
        <span className="movie__non">Ничего не найдено</span>
      )}
      <ul className="movie__table">
        {moviesToRender.length > 0 &&
          moviesToRender.map((moviesToRender) => (
            <MoviesCard
              key={moviesToRender._id || moviesToRender.id}
              onDelete={onDelete}
              movieCard={moviesToRender}
              onMovieLike={onMovieLike}
              isSaved={handleSave(moviesToRender)}
            />
          ))}
      </ul>
      {currentPath === "/movies" &&
        movieCards.length > moviesToRender.length && (
          <button className="movie__add" type="button" onClick={handleOnClick}>
            Ещё
          </button>
        )}
    </section>
  );
};

export default MoviesCardList;
