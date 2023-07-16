import "./SearchForm.css";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";

const SearchForm = (props) => {
  const { onFilterMovies, isLoading } = props;
  const [search, setSearch] = useState("");
  const [isShort, setIsShort] = useState(false);
  const currentPath = window.location.pathname;

  const onSubmit = (event) => {
    event.preventDefault();
    onFilterMovies(search, isShort);
    if (currentPath === "/movies") {
      localStorage.setItem("search", search);
      localStorage.setItem("isShort", isShort);
    }
  };

  useEffect(() => {
    if (currentPath === "/movies") {
      setSearch(localStorage.getItem("search"));
      setIsShort(JSON.parse(localStorage.getItem("isShort")));
    }
  }, []);

  function handleShortFilms() {
    if (isShort) {
      setIsShort(false);
    } else {
      setIsShort(true);
    }
  }

  return (
    <>
      <form className="search__form" onSubmit={onSubmit}>
        <input
          placeholder="Фильм"
          className="search__adress"
          name="search"
          value={search || ""}
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
              checked={isShort ? false : true}
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
