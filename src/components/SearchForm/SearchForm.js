import "./SearchForm.css";
import Preloader from "../Preloader/Preloader";
import { useState } from "react";

const SearchForm = (props) => {
  const { onFilterMovies, isLoading } = props;
  const [search, setSearch] = useState("");
  const [isShort, setIsShort] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    onFilterMovies(search, isShort);
  };

  function handleShortFilms() {
    if (!isShort) {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
  }

  return (
    <>
      <form className="search__form" onSubmit={onSubmit}>
        <input
          placeholder="Фильм"
          className="search__adress"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          required
        ></input>
        <button type="submit" className="search__button">
          Найти
        </button>
        <div className="search__wrapper">
          <label className="search__label">
            <input
              className="search__radio"
              type="checkbox"
              onChange={handleShortFilms}
              checked={isShort ? true : false}
            ></input>
            <span className="search__text">Короткометражки</span>
          </label>
        </div>
      </form>
      {isLoading ? <Preloader /> : <></>}
    </>
  );
};

export default SearchForm;
