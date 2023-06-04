import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export const MoviesCardList = () => {
  return (
    <section className="movie">
      <ul className="movie__table">
        <li className="movie__list">
          <MoviesCard />
        </li>
        <li className="movie__list">
          <MoviesCard />
        </li>
        <li className="movie__list">
          <MoviesCard />
        </li>
        <li className="movie__list">
          <MoviesCard />
        </li>
        <li className="movie__list">
          <MoviesCard />
        </li>
        <li className="movie__list">
          <MoviesCard />
        </li>
      </ul>
      <button className="movie__add" type="button">
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
