import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export const MoviesCardList = ({isSaved}) => {
  return (
    <section className="movie">
      <ul className="movie__table">
        <li className="movie__list">
          <MoviesCard isSaved= {isSaved}/>
        </li>
        <li className="movie__list">
          <MoviesCard isSaved= {isSaved}/>
        </li>
        <li className="movie__list">
          <MoviesCard isSaved= {isSaved}/>
        </li>
        <li className="movie__list">
          <MoviesCard isSaved= {isSaved}/>
        </li>
        <li className="movie__list">
          <MoviesCard isSaved= {isSaved}/>
        </li>
        <li className="movie__list">
          <MoviesCard isSaved= {isSaved}/>
        </li>
      </ul>
      <button className="movie__add" type="button">
        Ещё
      </button>
    </section>
  );
};

export default MoviesCardList;
